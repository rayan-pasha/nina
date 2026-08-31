/**
 * Copy for the Product page, transcribed from the AgenQ Home design file.
 *
 * Wording and section order follow that file exactly; the visual treatment is
 * this site's. `media` strings are the design file's image-slot captions —
 * they render as labelled placeholders until real screenshots exist, so it's
 * obvious what belongs in each slot.
 */

/** "From 'How Do I?' to 'Done.'" — alternating rows of ask and outcome. */
export const ASKS = [
  {
    quote: "“Set this client up for annual billing.”",
    body: "AgenQ runs the workflow and confirms what changed.",
    media: "Screen recording: AgenQ running the workflow",
  },
  {
    quote: "“Create the report I used last month.”",
    body: "AgenQ finds the right workflow and gets it done.",
    media: "Screen recording: AgenQ building the report",
  },
  {
    quote: "“Move this account to the enterprise plan.”",
    body: "AgenQ completes the permitted steps and asks for approval where needed.",
    media: "Screen: AgenQ requesting approval",
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

/** "Where Teams Use AgenQ" — the two Solutions pages. */
export const VERTICALS = [
  {
    title: "Insurance",
    body: "Product knowledge and complex workflows, handled inside the insurance platform.",
    cta: "Explore Insurance",
    href: "/solutions/insurance",
    media: "Insurance platform screenshot",
  },
  {
    title: "SaaS Onboarding",
    body: "Help new users complete their first real workflows without having to learn the entire product first.",
    cta: "Explore SaaS Onboarding",
    href: "/solutions/saas-onboarding",
    media: "SaaS onboarding screenshot",
  },
];
