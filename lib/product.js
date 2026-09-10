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
    quote: "“Switch this client to annual billing.”",
    body: "AgenQ updates the billing settings.",
    demo: "/demos/update-customer-billing.html",
  },
  {
    quote: "“Recreate last month’s report.”",
    body: "AgenQ creates it using the same setup.",
    demo: "/demos/generate-performance-report.html",
  },
  {
    quote: "“Upgrade this account to Enterprise.”",
    body: "AgenQ gets any required approval, then updates the plan.",
    demo: "/demos/enterprise-upgrade-approval.html",
  },
];

/** "How AgenQ Gets It Done" — the four beats of a single request. */
export const STEPS = [
  {
    icon: "bubble",
    title: "Understand",
    body: "The user describes what they want to accomplish, in their own words.",
  },
  {
    icon: "search",
    title: "Find",
    body: "AgenQ identifies the right workflow and where to begin.",
  },
  {
    icon: "bolt",
    title: "Execute",
    body: "It carries out the steps inside the product, accurately and securely.",
  },
  {
    icon: "check",
    title: "Confirm",
    body: "AgenQ reports what was completed and anything that still needs approval.",
  },
];

/** The line under the section heading, and the note that closes it. */
export const STEPS_SUBHEAD =
  "From a simple request to real results, inside your software.";

export const STEPS_NOTE = {
  title: "Secure. Controlled. Built for the Enterprise.",
  body: "AgenQ operates within your permissions and business rules. Nothing happens outside policy.",
};

/**
 * "AgenQ works inside the boundaries you set" — the four limits a buyer's
 * security reviewer asks about.
 *
 * `lines` is the title split the way it should break. These are short enough
 * to wrap on their own, but left to the browser the four cards break at
 * different points and the row of titles stops lining up.
 */
export const BOUNDARIES = [
  {
    icon: "person-check",
    lines: ["Human in", "the Loop"],
    assurance: "Approval when needed",
  },
  {
    icon: "approved",
    lines: ["Approved", "Workflows"],
    assurance: "Only what you authorize",
  },
  {
    icon: "cloud",
    lines: ["Runs in", "Your Cloud"],
    assurance: "Your environment",
  },
  {
    icon: "lock-doc",
    lines: ["Your Data", "Stays Yours"],
    assurance: "No personal data stored",
  },
];

export const BOUNDARIES_SUBHEAD =
  "You decide what AgenQ can do, where it runs, and how data is handled.";

/** The bar that closes the section, under the four cards. */
export const BOUNDARIES_NOTE = {
  title: "Secure by Design",
  body: "Enterprise-grade security, audit logs for every action, permissions you control, and compliance ready.",
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
    body: "Product knowledge and complex workflows, handled inside the insurance platform.",
    cta: "Explore Insurance",
    href: "/solutions/insurance",
    mock: "insurance",
  },
  {
    title: "SaaS Onboarding",
    body: "Help new users complete their first real workflows without having to learn the entire product first.",
    cta: "Explore SaaS Onboarding",
    href: "/solutions/saas-onboarding",
    mock: "saas",
  },
];
