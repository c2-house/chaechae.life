import { lookup } from 'node:dns';
import { get as httpGet, type IncomingMessage } from 'node:http';
import { get as httpsGet } from 'node:https';
import { isIP, type LookupFunction } from 'node:net';
import ipaddr from 'ipaddr.js';

const maxHtmlBytes = 512 * 1024;
const maxRedirects = 3;
const redirectStatuses = new Set([301, 302, 303, 307, 308]);
const globalIPv6Prefix = ipaddr.IPv6.parseCIDR('2000::/3');

function isPublicAddress(address: string) {
  const ip = ipaddr.parse(address);
  return ip.range() === 'unicast' && (ip.kind() === 'ipv4' || ip.match(globalIPv6Prefix));
}

// The socket uses these exact DNS answers. A separate check followed by fetch would resolve twice.
const lookupPublicAddresses: LookupFunction = (hostname, options, done) => {
  if (!options.all) {
    done(new Error('Expected an address list'), []);
    return;
  }
  lookup(hostname, { all: true }, (error, addresses) => {
    if (error) return done(error, []);
    if (!addresses.length || addresses.some(({ address }) => !isPublicAddress(address))) {
      return done(new Error('Preview destination is not public'), []);
    }
    done(null, addresses);
  });
};

export function isPreviewWebUrl(url: URL): boolean {
  const host = url.hostname.replace(/\.$/, '');
  return (
    (url.protocol === 'https:' || url.protocol === 'http:') &&
    !url.port &&
    !url.username &&
    !url.password &&
    host.includes('.') &&
    !host.startsWith('[') &&
    !isIP(host) &&
    !/(?:^|\.)(?:localhost|local|internal|home\.arpa)$/.test(host)
  );
}

function openPage(url: URL, signal: AbortSignal): Promise<IncomingMessage> {
  if (!isPreviewWebUrl(url)) throw new Error('Unsupported preview destination');
  const get = url.protocol === 'https:' ? httpsGet : httpGet;
  const options = {
    agent: false as const,
    autoSelectFamily: true,
    lookup: lookupPublicAddresses,
    headers: { Accept: 'text/html, application/xhtml+xml', 'Accept-Encoding': 'identity' },
    signal,
  };
  return new Promise((resolve, reject) => {
    get(url, options, resolve).once('error', reject);
  });
}

export async function fetchPreviewPage(url: URL): Promise<{ html: string; url: URL }> {
  const signal = AbortSignal.timeout(5_000);
  for (let redirects = 0; redirects <= maxRedirects; redirects++) {
    const response = await openPage(url, signal);
    try {
      const status = response.statusCode ?? 0;
      if (redirectStatuses.has(status) && response.headers.location) {
        url = new URL(response.headers.location, url);
        continue;
      }
      const mediaType = response.headers['content-type']?.split(';')[0].trim().toLowerCase();
      if (
        status < 200 ||
        status >= 300 ||
        (mediaType !== 'text/html' && mediaType !== 'application/xhtml+xml') ||
        (response.headers['content-encoding'] ?? 'identity').toLowerCase() !== 'identity'
      ) {
        throw new Error('Expected an HTML preview');
      }
      const chunks: Uint8Array[] = [];
      let remaining = maxHtmlBytes;
      for await (const chunk of response) {
        const part = (chunk as Uint8Array).subarray(0, remaining);
        chunks.push(part);
        remaining -= part.length;
        if (!remaining) break;
      }
      return { html: Buffer.concat(chunks).toString('utf8'), url };
    } finally {
      response.destroy();
    }
  }
  throw new Error('Too many preview redirects');
}
