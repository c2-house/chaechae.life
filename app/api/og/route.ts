import cheerio from 'cheerio';
import { type NextRequest } from 'next/server';
import { fetchPreviewPage, isPreviewWebUrl } from '@/lib/fetch-preview';
import { hasPreviewLink } from '@/lib/preview-links';

function assetUrl(value: string | undefined, page: URL) {
  if (!value) return;
  const asset = URL.parse(value, page);
  if (asset?.protocol === 'https:' && isPreviewWebUrl(asset)) {
    return asset.href;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'Missing url' }, { status: 400 });
  }
  if (!hasPreviewLink(url)) {
    return Response.json({ error: 'Unknown preview link' }, { status: 403 });
  }

  try {
    const page = await fetchPreviewPage(new URL(url));
    const $ = cheerio.load(page.html);
    const title = $('meta[property="og:title"]').attr('content') || $('title').first().text();
    const description =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content');
    const image = assetUrl($('meta[property="og:image"]').attr('content'), page.url);
    const favicon = assetUrl($('link[rel~="icon"]').first().attr('href'), page.url);
    return Response.json(
      { title, description, image, favicon },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
    );
  } catch {
    return Response.json({ error: 'Preview unavailable' }, { status: 502 });
  }
}
