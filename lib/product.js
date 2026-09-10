/**
 * Copy for the Product page, transcribed from the AgenQ Home design file.
 *
 * Wording and section order follow that file exactly; the visual treatment is
 * this site's. `media` strings are the design file's image-slot captions —
 * they render as labelled placeholders until real screenshots exist, so it's
 * obvious what belongs in each slot.
 */

/**
 * "From 'How Do I?' to 'Done.'" — the ask and what AgenQ does with it.
 *
 * `demo` points at a self-contained page in public/demos/. Each runs a silent
 * ten-second walkthrough of the workflow and restarts itself, so the card
 * shows the product working rather than a screenshot of it.
 */
export const ASKS = [
  {
    quote: "“Switch this client to annual billing”",
    body: "AgenQ updates the billing settings",
    demo: "/demos/update-customer-billing.html",
  },
  {
    quote: "“Recreate last month’s report”",
    body: "AgenQ creates it using the same setup",
    demo: "/demos/generate-performance-report.html",
  },
  {
    quote: "“Upgrade this account to Enterprise”",
    body: "AgenQ gets any required approval, then updates the plan",
    demo: "/demos/enterprise-upgrade-approval.html",
  },
];

/** "How AgenQ Gets It Done" — the four beats of a single request. */
export const STEPS = [
  { icon: "bubble", title: "Understand", body: "AgenQ identifies the task" },
  { icon: "search", title: "Find", body: "It selects the right workflow" },
  { icon: "bolt", title: "Execute", body: "It runs the approved steps" },
  { icon: "check", title: "Confirm", body: "It shows what changed" },
];

/** The line under the section heading. */
export const STEPS_SUBHEAD = "From Request to Result";

/**
 * "Control and Security" — the four limits a buyer's security reviewer asks
 * about. Titles are single words on purpose, so the row of them lines up
 * without needing a forced break.
 */
export const BOUNDARIES = [
  {
    icon: "person-check",
    title: "Approvals",
    assurance: "Require approval where needed",
  },
  {
    icon: "approved",
    title: "Workflows",
    assurance: "Choose what AgenQ can run",
  },
  {
    icon: "cloud",
    title: "Deployment",
    assurance: "Run AgenQ in your environment",
  },
  {
    icon: "lock-doc",
    title: "Data",
    assurance: "Control how your data is handled",
  },
];

export const BOUNDARIES_SUBHEAD = "You Stay in Control";

/** The bar that closes the section, under the four cards. */
export const BOUNDARIES_NOTE = {
  title: "Secure by Design",
  body: "Enterprise-grade security, audit logs for every action, permissions you control, and compliance ready",
};

/**
 * "Where Teams Use AgenQ" — the two Solutions pages.
 *
 * `mock` names the illustration in components/VerticalMock.js rather than an
 * image file: these are drawn, so they stay sharp at any card width.
 */
export const VERTICALS = [
  {
    title: "Insurance",
    body: "Help users understand policies and complete insurance workflows",
    cta: "Explore Insurance",
    href: "/solutions/insurance",
    mock: "insurance",
  },
  {
    title: "NINA for SaaS Onboarding",
    body: "Train users through guided tasks inside your software.",
    cta: "Explore NINA",
    href: "/solutions/saas-onboarding",
    mock: "saas",
  },
];
