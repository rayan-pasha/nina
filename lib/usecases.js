import { PAGES } from "./pages";
import { VERTICALS } from "./product";

/**
 * The Use Cases index — a directory of pages that already exist.
 *
 * Nothing here is new copy: each card's title and line are the page's own
 * navLabel and subhead, so a page added to lib/pages.js appears here with no
 * second edit, and a reworded subhead updates in both places. The two industry
 * cards come from VERTICALS in lib/product.js, which the Product page already
 * renders.
 *
 * Grouped by the question a visitor is actually asking — my industry, my
 * problem, what it does, my team — rather than by the site's URL structure.
 */

const fromSection = (section) =>
  PAGES.filter((p) => p.section === section).map((p) => ({
    title: p.navLabel,
    body: p.subhead,
    href: `/${p.section}/${p.slug}`,
  }));

export const USE_CASE_GROUPS = [
  {
    title: "By industry",
    blurb: "Where NINA is already deployed end to end.",
    items: VERTICALS.map((v) => ({
      // "NINA for SaaS Onboarding" is the Product page's card heading; as a
      // directory entry beside "Insurance" it only needs the industry.
      title: v.title.replace(/^NINA for /, ""),
      body: v.body,
      href: v.href,
    })),
  },
  {
    title: "By outcome",
    blurb: "Start from the number you are trying to move.",
    items: fromSection("solutions"),
  },
  {
    title: "By capability",
    blurb: "What NINA does, one capability at a time.",
    items: fromSection("features"),
  },
  {
    title: "By team",
    blurb: "Who owns the problem day to day.",
    items: fromSection("use-cases"),
  },
  {
    title: "By platform",
    blurb:
      "Already working in a specific system? See AgenQ guide your team inside it.",
    items: [
      {
        title: "EZLynx",
        body: "Employees learn EZLynx by doing real agency work, with AgenQ showing where to click and explaining each step on screen.",
        href: "/use-cases/ezlynx",
      },
    ],
  },
];
