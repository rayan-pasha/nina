/**
 * Exported as /robots.txt. Everything is crawlable except the demo pages,
 * which are decorative iframes — indexing them would surface a bare mock
 * billing app in search results under the AgenQ name.
 *
 * The sitemap URL is absolute, so NEXT_PUBLIC_SITE_URL has to be set at
 * build time for it to point anywhere useful (see app/layout.js).
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/demos/"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
