import cheerio from 'cheerio';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'Missing url' }, { status: 400 });
  }

  const response = await fetch(url);
  const data = await response.text();

  const $ = cheerio.load(data);
  const title = $('meta[property="og:title"]').attr('content') || $('title').first().text();

  const description =
    $('meta[property="og:description"]').attr('content') ||
    $('meta[name="description"]').attr('content');

  let image = $('meta[property="og:image"]').attr('content');
  if (image && !image.startsWith('http')) {
    image = new URL(image, url).href;
  }

  let favicon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');
  if (favicon && !favicon.startsWith('http')) {
    favicon = new URL(favicon, url).href;
  }

  return Response.json({ title, description, image, favicon });
}
