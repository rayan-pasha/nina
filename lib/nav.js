/**
 * The site's primary navigation.
 *
 * Four items: Product goes to the home page, Pricing is a direct link, and
 * Solutions and Resources open dropdowns.
 *
 * Customer Stories, Documentation, and Blog are real pages; the rest of the
 * children are placeholders that render their own title until the content is
 * written.
 *
 * The nav is deliberately narrower than the footer. FAQ, Security, and the two
 * comparison pages still exist and are still linked from lib/footer.js, along
 * with the older Solution and Feature pages — dropping something here does not
 * orphan its route.
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
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
    ],
  },
];
