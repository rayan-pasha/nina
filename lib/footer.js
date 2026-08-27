/**
 * Footer link columns, left to right after the brand block.
 *
 * This is a site map, not a copy of the nav: pages reachable another way are
 * left out so six columns stay readable. Nina and Guided Onboarding both point
 * at the home page, which the logo already links to, and Just Ask Assistance
 * is the same page as Action-Based Execution under Features — so none of them
 * repeat here. Adoption Enablement is omitted too: it argues the same case as
 * Stop Knowledge Loss, and it's still one click away in the Use Case menu.
 *
 * `href: null` marks a page that doesn't exist yet.
 */
export const FOOTER_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About us", href: null },
      { label: "Careers", href: null },
      { label: "Privacy Policy", href: null },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "bookMeeting" },
      { label: "Log in", href: "logIn" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Faster Revenue", href: "/solutions/faster-revenue" },
      { label: "Slash Costs", href: "/solutions/lower-costs" },
      { label: "Operations Overload", href: "/solutions/operations-overload" },
      { label: "Stop Knowledge Loss", href: "/solutions/knowledge-loss" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Voice and Chat", href: "/features/voice-and-chat-guidance" },
      { label: "Workflow Navigation", href: "/features/workflow-navigation" },
      { label: "Action-Based Execution", href: "/features/action-based-execution" },
      { label: "Product Knowledge", href: "/features/product-knowledge-training" },
    ],
  },
];

/** Rendered as plain text rather than links — no URLs to point them at. */
export const CONTACT = [
  { label: "+1 (416) 316-7435", href: "tel:+14163167435" },
  { label: "founder@agenq.com", href: "mailto:founder@agenq.com" },
  { label: "Toronto, Canada", href: null },
];
