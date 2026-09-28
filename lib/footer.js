/**
 * Footer columns: three link columns, then a second row carrying Company,
 * Contact, and Follow.
 *
 * Every entry here is a page that exists. Entries for unwritten pages used to
 * render as muted "Coming soon" text; those were removed rather than shipped
 * half-finished, and CONTENT-BACKLOG.md records what they were so the list can
 * be rebuilt when the pages are. Adding one back is a line here plus a route.
 *
 * A string that matches a key in lib/links.js (e.g. "youtube") resolves to
 * that outbound URL.
 *
 * `plain: true` marks copy that has no href because it was never a link (the
 * address line).
 */
export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Voice and chat", href: "/features/voice-and-chat-guidance" },
      { label: "Workflow navigation", href: "/features/workflow-navigation" },
      { label: "Action-based execution", href: "/features/action-based-execution" },
      { label: "Product knowledge", href: "/features/product-knowledge-training" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Insurance", href: "/solutions/insurance" },
      { label: "For SaaS Onboarding", href: "/solutions/saas-onboarding" },
      { label: "Faster revenue", href: "/solutions/faster-revenue" },
      { label: "Slash costs", href: "/solutions/lower-costs" },
      { label: "End operations overload", href: "/solutions/operations-overload" },
      { label: "Stop knowledge loss", href: "/solutions/knowledge-loss" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Use cases", href: "/resources/use-cases" },
      { label: "Adoption enablement", href: "/use-cases/adoption-enablement" },
      { label: "Customer stories", href: "/resources/customer-stories" },
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/resources/faq" },
    ],
  },
];

/** The second row: company, how to reach you, where to follow. */
export const FOOTER_META = [
  {
    title: "Company",
    links: [{ label: "Privacy Policy", href: "/privacy" }],
  },
  {
    title: "Contact",
    links: [
      { label: "+1 (416) 316-7435", href: "tel:+14163167435" },
      { label: "founder@agenq.com", href: "mailto:founder@agenq.com" },
      { label: "Toronto, Canada", href: null, plain: true },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "YouTube", href: "youtube" },
      { label: "LinkedIn", href: "linkedin" },
      { label: "X", href: "x" },
    ],
  },
];
