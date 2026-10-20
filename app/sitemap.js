import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/posts";

/**
 * Exported as /sitemap.xml.
 *
 * Built from the same data the pages are built from, so a new post or
 * marketing page shows up here without a second edit.
 *
 * Priorities are relative, not absolute — they tell a crawler which pages
 * matter most when it's rationing visits, nothing more.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export const dynamic = "force-static";

export default function sitemap() {
  const url = (path) => `${siteUrl}${path === "/" ? "/" : `${path}/`}`;

  const core = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    {
      path: "/solutions/saas-onboarding",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/solutions/insurance", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/resources/use-cases", priority: 0.8, changeFrequency: "monthly" },
    { path: "/use-cases/ezlynx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/resources/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/documentation", priority: 0.6, changeFrequency: "monthly" },
    {
      path: "/resources/customer-stories",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const marketing = PAGES.map((p) => ({
    path: `/${p.section}/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const posts = POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: "yearly",
    lastModified: p.date,
  }));

  return [...core, ...marketing, ...posts].map(({ path, ...rest }) => ({
    url: url(path),
    ...rest,
  }));
}
