import type { APIRoute } from 'astro';
import { training } from '../data/training';

const SITE = 'https://true-potential-talent-xw17.vercel.app';

const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/coaching',
  '/coaching/8-week-course',
  '/coaching/individual-coaching-sessions',
  '/coaching/14-day-guide',
  '/training',
  '/privacy',
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPaths,
    ...training.map((c) => `/training/${c.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u}</loc>
    <changefreq>monthly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
