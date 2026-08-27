/**
 * The site's primary navigation.
 *
 * Four items: Product goes to the home page, Pricing is a direct link, and
 * Solutions and Resources open dropdowns.
 *
 * Customer Stories, Documentation, and Blog are real pages; the rest of the
 * children are placeholders that render their own title until the content is
 * written. See also lib/footer.js, which still links the older Solution and
 * Feature pages that this nav no longer surfaces.
 */
export const NAV = [
  { label: "Product", href: "/" },
  {
    label: "Solutions",
    children: [
      { label: "For Insurance", href: "/solutions/insurance" },
      { label: "For SaaS Onboarding", href: "/solutions/saas-onboarding" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { label: "Why AgenQ", href: "/resources/why-agenq" },
      { label: "Use Cases", href: "/resources/use-cases" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "AgenQ vs WalkMe", href: "/resources/agenq-vs-walkme" },
      {
        label: "AgenQ vs Agentic Browsers",
        href: "/resources/agenq-vs-agentic-browsers",
      },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Security", href: "/resources/security" },
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
    ],
  },
];
