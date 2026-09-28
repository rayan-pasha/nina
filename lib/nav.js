/**
 * The site's primary navigation.
 *
 * Four items: Product goes to the home page, Pricing is a direct link, and
 * Solutions and Resources open dropdowns.
 *
 * Every child is a page that exists. The nav is deliberately narrower than the
 * footer: FAQ and the Solution and Feature pages are reachable from
 * lib/footer.js and from the Use Cases index, so leaving one out here does not
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
      { label: "Use Cases", href: "/resources/use-cases" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
    ],
  },
];
