/**
 * The site's primary navigation, mirroring the structure on agenq.com.
 *
 * Two destinations are deliberately reached from two places, exactly as on the
 * original: this home page *is* the Nina page, so Solution → Nina and
 * Use Case → Guided Onboarding both land on "/", and Action-Based Execution is
 * the same page as Just Ask Assistance. Duplicating the content instead would
 * mean two URLs competing for the same search terms.
 */
export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Solution",
    children: [
      { label: "Nina", href: "/" },
      { label: "Faster Revenue", href: "/solutions/faster-revenue" },
      { label: "Slash Costs", href: "/solutions/lower-costs" },
      { label: "End Operations Overload", href: "/solutions/operations-overload" },
      { label: "Stop Knowledge Loss", href: "/solutions/knowledge-loss" },
    ],
  },
  {
    label: "Features",
    children: [
      { label: "Voice and Chat Guidance", href: "/features/voice-and-chat-guidance" },
      { label: "Real-time Workflow Navigation", href: "/features/workflow-navigation" },
      { label: "Action-Based Execution", href: "/features/action-based-execution" },
      {
        label: "Trained on Your Product Knowledge",
        href: "/features/product-knowledge-training",
      },
    ],
  },
  {
    label: "Use Case",
    children: [
      { label: "Guided Onboarding", href: "/" },
      { label: "Adoption Enablement", href: "/use-cases/adoption-enablement" },
      { label: "Just Ask Assistance", href: "/features/action-based-execution" },
      { label: "Case Studies", href: "/use-cases/case-studies" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "/documentation" },
      { label: "Blog", href: "/blog" },
    ],
  },
];
