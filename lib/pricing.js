/**
 * Pricing content, transcribed from agenq.com/pricing.
 *
 * Plan features are taken from the monthly listing. The old site's annual
 * column quoted different workflow and usage allowances than its own monthly
 * column; those were confirmed as errors on that page rather than real annual
 * terms (see NOTES at the bottom), so the allowances hold across both billing
 * periods and only the price changes.
 */

export const BILLING = {
  monthly: { label: "Monthly", suffix: "/month" },
  annual: { label: "Annual", suffix: "/month", note: "billed annually", save: "Save 20%" },
};

export const PLANS = [
  {
    name: "Starter",
    tagline: "Best for first-time users",
    price: { monthly: "$199", annual: "$159" },
    features: [
      "1 NINA (AI Product Assistant)",
      "Up to 3 workflows",
      "Text + voice interactions",
      "Admin-guided learning",
      "300 minutes usage/month",
      "Additional usage at $0.07/minute",
      "Self-serve onboarding",
      "Basic analytics",
      "SDK included",
      "Standard support",
    ],
    cta: "Talk to Sales",
  },
  {
    name: "Growth",
    tagline: "Best for growing SaaS teams",
    badge: "Most popular",
    featured: true,
    price: { monthly: "$999", annual: "$799" },
    inherits: "Everything in Starter, plus",
    features: [
      "2 dedicated NINAs",
      "Up to 15 workflows",
      "Advanced interactions",
      "Guided + smart learning",
      "1,500 minutes usage/month",
      "Standard analytics",
      "Assisted setup",
      "Priority support",
    ],
    cta: "Talk to Sales",
  },
  {
    name: "Enterprise",
    tagline: "Best for large and regulated teams",
    price: { monthly: "Custom", annual: "Custom" },
    inherits: "Everything in Growth, plus",
    features: [
      "Unlimited NINAs",
      "Unlimited workflows",
      "Advanced autonomous learning",
      "Unlimited NINA usage",
      "Advanced analytics & reporting",
      "Advanced & custom SDK access",
      "Dedicated onboarding & success manager",
      "Dedicated support with SLA",
      "Private/isolated deployment",
      "Enterprise-grade security & compliance",
    ],
    cta: "Talk to Sales",
  },
];

/** Row-per-capability view, for buyers comparing side by side. */
export const COMPARISON = [
  {
    group: "Scale",
    rows: [
      ["NINAs included", "1", "2 dedicated", "Unlimited"],
      ["Workflows", "Up to 3", "Up to 15", "Unlimited"],
      ["Onboarding journeys", "1", "Unlimited", "Unlimited"],
      ["Included usage", "300 min/month", "1,500 min/month", "Unlimited"],
      ["Usage overage", "$0.07/min", "$0.07/min", "Included"],
    ],
  },
  {
    group: "Capability",
    rows: [
      ["Interactions", "Text + voice", "Advanced", "Advanced"],
      ["Learning", "Admin-guided", "Guided + smart", "Autonomous"],
      ["SDK", "Included", "Included", "Advanced / custom"],
      ["Analytics", "Basic", "Standard", "Advanced"],
    ],
  },
  {
    group: "Control",
    rows: [
      ["Onboarding", "Self-serve", "Assisted setup", "Dedicated manager"],
      ["Support", "Standard", "Priority", "Dedicated with SLA"],
      ["Deployment", "Secure multi-tenant", "Secure multi-tenant", "Private / isolated"],
      ["Security & compliance", "Standard", "Standard", "Enterprise-grade"],
    ],
  },
];

export const FAQ = [
  {
    q: "What exactly am I paying for?",
    a: "Pricing is based on deploying an AI Product Assistant, not on the number of users. A plan covers the NINAs you run and the workflows they know, so onboarding your whole user base costs the same as onboarding one person.",
  },
  {
    q: "What counts as a workflow?",
    a: "A workflow is one click-by-click path through your product that NINA has been taught, inviting a teammate, configuring permissions, filing a claim. Each is learned once and then guided for every user who asks.",
  },
  {
    q: "What happens if we go over our included minutes?",
    a: "Usage beyond your monthly allowance is billed at $0.07 per minute on Starter and Growth. Enterprise plans include unlimited usage, so there is no overage to track.",
  },
  {
    q: "Can we change plans later?",
    a: "Yes. Plans differ by scale, autonomy, and control rather than by end-user experience, so moving up adds NINAs, workflows, and usage without changing how the assistant behaves for your users.",
  },
];

/*
 * NOTES — settled, kept so the question isn't reopened.
 *
 * The old WordPress pricing page contradicted itself between its monthly and
 * annual columns: annual Starter claimed 5 workflows and 60 minutes against
 * monthly's 3 and 300, annual Growth claimed 10 workflows against monthly's
 * 15, and the comparison table quoted Growth as "1500 min/60 min", matching
 * neither card. Confirmed 2026-09-24 that the monthly figures are the real
 * limits and that they apply on both billing periods — the annual column was
 * wrong. Prices confirmed at the same time: $199/$159 and $999/$799.
 */
