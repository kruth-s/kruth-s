export default function Robots() {
  // This is a placeholder. In production, generate robots.txt dynamically or statically.
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: https://yourdomain.com/sitemap.xml\n`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
export const runtime = 'edge';
