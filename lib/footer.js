/**
 * Footer columns, following the design file's structure: five link columns,
 * then a second row carrying Company, Contact, and Follow.
 *
 * `href: null` marks a page that doesn't exist yet — those render as muted
 * text with a "Coming soon" tag rather than links that dead-end. Give an entry
 * an href and it becomes a link with no other change. A string that matches a
 * key in lib/links.js (e.g. "youtube") resolves to that outbound URL.
 *
 * `plain: true` is the exception: copy that has no href because it was never a
 * link (the address), so it gets no tag.
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
      { label: "Vertical SaaS", href: null },
      { label: "Internal tools", href: null },
      { label: "Product-led growth", href: null },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Why AgenQ", href: "/resources/why-agenq" },
      { label: "Use cases", href: "/resources/use-cases" },
      { label: "Customer stories", href: "/resources/customer-stories" },
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Security", href: "/resources/security" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "AgenQ vs WalkMe", href: "/resources/agenq-vs-walkme" },
      { label: "AgenQ vs agentic browsers", href: "/resources/agenq-vs-agentic-browsers" },
      { label: "Guided steps vs product tours", href: null },
      { label: "Docs vs in-app guidance", href: null },
      { label: "Live training vs self-serve", href: null },
    ],
  },
  {
    title: "Glossary",
    links: [
      { label: "In-product onboarding", href: null },
      { label: "Time to value", href: null },
      { label: "Activation rate", href: null },
      { label: "Product adoption", href: null },
      { label: "Agentic AI", href: null },
      { label: "Support deflection", href: null },
    ],
  },
];

/** The second row: company, how to reach you, where to follow. */
export const FOOTER_META = [
  {
    title: "Company",
    links: [
      { label: "About", href: null },
      { label: "Careers", href: null },
      { label: "Privacy Policy", href: null },
    ],
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
