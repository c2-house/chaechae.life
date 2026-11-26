import assert from 'node:assert/strict';
import dns from 'node:dns';
import { EventEmitter } from 'node:events';
import http from 'node:http';
import https from 'node:https';
import { syncBuiltinESMExports } from 'node:module';
import { Readable } from 'node:stream';
import test from 'node:test';
import { fetchPreviewPage, isPreviewWebUrl } from './fetch-preview.ts';

test('only credential-free HTTP(S) URLs on public hostnames and standard ports qualify', () => {
  assert.ok(isPreviewWebUrl(new URL('https://article.example/post')));
  assert.ok(isPreviewWebUrl(new URL('http://article.example/post')));
  for (const address of [
    'ftp://article.example/',
    'https://reader@article.example/',
    'https://article.example:4433/',
    'https://192.0.2.1/',
    'https://[2001:db8::1]/',
    'https://blog.local./',
  ]) {
    assert.equal(isPreviewWebUrl(new URL(address)), false);
  }
});

test('preview transport validates the socket addresses on each hop and bounds the HTML', async (t) => {
  const source = new URL('https://article.example/post');
  const final = 'https://guide.example/intro';
  const addresses = [
    { address: '1.1.1.1', family: 4 },
    { address: '2606:4700:4700::1111', family: 6 },
  ];
  const pages = new Map([
    [source.href, { statusCode: 302, headers: { location: final } }],
    [final, { statusCode: 200, headers: { 'content-type': 'text/html' } }],
  ]);
  const resolved = [];
  const signals = [];
  t.mock.method(dns, 'lookup', (hostname, options, done) => {
    assert.equal(options.all, true);
    resolved.push(hostname);
    done(null, addresses);
  });
  function get(url, options, receive) {
    const request = new EventEmitter();
    queueMicrotask(() => {
      signals.push(options.signal);
      options.lookup(url.hostname, { all: true }, (err, checked) => {
        if (err) return request.emit('error', err);
        assert.deepEqual(checked, addresses);
        const response = Readable.from([Buffer.alloc(600 * 1024, 'a')]);
        receive(Object.assign(response, pages.get(url.href)));
      });
    });
    return request;
  }
  t.mock.method(http, 'get', get);
  t.mock.method(https, 'get', get);
  syncBuiltinESMExports();
  t.after(() => {
    t.mock.restoreAll();
    syncBuiltinESMExports();
  });

  const result = await fetchPreviewPage(source);
  assert.equal(result.url.href, final);
  assert.equal(result.html.length, 512 * 1024);
  assert.deepEqual(resolved, ['article.example', 'guide.example']);
  assert.equal(signals[0], signals[1]);

  pages.get(final).headers = { 'content-type': 'image/png' };
  await assert.rejects(fetchPreviewPage(source), /Expected an HTML preview/);
  pages.get(final).statusCode = 302;
  pages.get(final).headers = { location: source.href };
  await assert.rejects(fetchPreviewPage(source), /Too many preview redirects/);
  addresses.push({ address: '192.0.2.1', family: 4 });
  await assert.rejects(fetchPreviewPage(source), /destination is not public/);
  addresses.pop();
  addresses.push({ address: '2001:db8::45', family: 6 });
  await assert.rejects(fetchPreviewPage(source), /destination is not public/);
  const count = resolved.length;
  await assert.rejects(fetchPreviewPage(new URL('https://article.example:4433/')), /Unsupported/);
  assert.equal(resolved.length, count);
});
