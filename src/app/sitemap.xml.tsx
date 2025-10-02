export default function Sitemap() {
  // This is a placeholder. In production, generate sitemap dynamically or statically.
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://yourdomain.com/</loc>\n  </url>\n  <url>\n    <loc>https://yourdomain.com/projects</loc>\n  </url>\n  <url>\n    <loc>https://yourdomain.com/blog</loc>\n  </url>\n  <url>\n    <loc>https://yourdomain.com/contact</loc>\n  </url>\n</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
export const runtime = 'edge';
