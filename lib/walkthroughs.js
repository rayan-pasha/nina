/**
 * Content for the scripted NINA walkthroughs. The animation engine lives in
 * components/Walkthrough.js and is entirely driven by these objects, so a new
 * demo is a new entry here rather than a second copy of the component.
 *
 * Shape:
 *   brand        wordmark, split so the tail renders in brand colour
 *   nav          [iconName, label] rows in the left rail; the first is active
 *   pageTitle    label in the app's top bar
 *   metrics      tiles above the fold. One may carry `counter: [from, to]`,
 *                which ticks up on the final step to show the work landed.
 *   panel        the wide card under the tiles
 *   modal        dialog title and submit-button label
 *   fields       filled top to bottom, one per step. `full` spans both columns
 *   actions      NINA's progress list. `until` is the field index the row
 *                finishes at; the row marked `submit` covers the save step
 *   chat         what the user asks and what NINA says back
 *
 * Icon names must exist in PATHS in components/Walkthrough.js.
 */

/** AgenQ Studio creating a project — the hero demo. */
export const STUDIO = {
  brand: { head: "Agen", tail: "Q" },
  pageTitle: "Dashboard",
  nav: [
    ["dashboard", "Dashboard"],
    ["folder", "Projects"],
    ["chart", "Analytics"],
    ["dollar", "Cost"],
    ["bell", "Alerts"],
    ["settings", "Settings"],
  ],
  metrics: [
    { icon: "clipboard", label: "Total projects", badge: "Active", counter: [16, 17] },
    { icon: "users", label: "Total agents", badge: "Global", value: "18" },
    { icon: "branch", label: "Workflows", badge: "Active", value: "34" },
    { icon: "message", label: "Sessions", badge: "Traffic", value: "0" },
    { icon: "clock", label: "Avg session", badge: "Speed", value: "0m" },
    { icon: "stopwatch", label: "Duration", badge: "Voice", value: "0m" },
  ],
  panel: {
    title: "Usage this month",
    subtitle: "Daily token consumption",
    empty: "No usage recorded yet this period.",
  },
  modal: { title: "New project", submit: "Create project" },
  fields: [
    { label: "Project name", value: "New client onboarding" },
    { label: "Owner", value: "John Smith" },
    { label: "Environment", value: "Production" },
    { label: "Region", value: "us-east-1" },
    { label: "Visibility", value: "Dev team" },
    { label: "Monthly budget", value: "$500" },
    { label: "Default agent", value: "NINA guide", full: true },
    { label: "Description", value: "Guided onboarding for new clients", full: true },
  ],
  actions: [
    { label: "Creating a new project", until: 2 },
    { label: "Filling out the project details", until: 6 },
    { label: "Writing a description for the new project", until: 8 },
    { label: "Saving the new project", submit: true },
  ],
  chat: {
    ask: "Help me create a new project",
    ack: "On it — setting that up now.",
    done: "All done :)",
  },
};

/**
 * Ledgerly, a fictional billing tool, sending an invoice — the demo for the
 * "she walks users through them" section. Deliberately someone else's product:
 * the point of the section is that NINA works inside software AgenQ didn't build.
 */
export const LEDGERLY = {
  brand: { head: "Ledger", tail: "ly" },
  pageTitle: "Billing",
  nav: [
    ["dashboard", "Dashboard"],
    ["clipboard", "Invoices"],
    ["users", "Customers"],
    ["dollar", "Payments"],
    ["chart", "Reports"],
    ["settings", "Settings"],
  ],
  metrics: [
    { icon: "clipboard", label: "Open invoices", badge: "Unpaid", counter: [12, 13] },
    { icon: "dollar", label: "Outstanding", badge: "Total", value: "$48.2k" },
    { icon: "check", label: "Paid this month", badge: "Cleared", value: "$61.9k" },
    { icon: "clock", label: "Avg days to pay", badge: "Speed", value: "21d" },
    { icon: "users", label: "Customers", badge: "Active", value: "84" },
    { icon: "branch", label: "Overdue", badge: "At risk", value: "3" },
  ],
  panel: {
    title: "Revenue this month",
    subtitle: "Daily payments received",
    empty: "No payments recorded yet this period.",
  },
  modal: { title: "New invoice", submit: "Send invoice" },
  // Paired so every row of the two-column grid fills — a half-width field
  // followed by a `full` one leaves a visible hole.
  fields: [
    { label: "Customer", value: "Acme Co" },
    { label: "Invoice number", value: "INV-1043" },
    { label: "Line item", value: "Platform subscription — March", full: true },
    { label: "Quantity", value: "1" },
    { label: "Rate", value: "$2,400.00" },
    { label: "Tax", value: "HST 13%" },
    { label: "Due date", value: "March 31, 2026" },
  ],
  actions: [
    { label: "Creating a new invoice", until: 2 },
    { label: "Adding the line items", until: 5 },
    { label: "Applying tax and payment terms", until: 7 },
    { label: "Sending it to the customer", submit: true },
  ],
  chat: {
    ask: "Send Acme Co their invoice for March",
    ack: "On it — putting that together now.",
    done: "All done :)",
  },
};

/**
 * Northwind, a fictional insurance platform, quoting commercial auto — the
 * demo for the Insurance page. A billing or project-management mock would be
 * off-message there, and the jargon is the point: "8380 — Landscaping" is
 * exactly the field a new CSR would otherwise have to go and ask about.
 */
export const NORTHWIND = {
  brand: { head: "North", tail: "wind" },
  pageTitle: "Quotes",
  nav: [
    ["dashboard", "Dashboard"],
    ["clipboard", "Quotes"],
    ["folder", "Policies"],
    ["branch", "Claims"],
    ["users", "Clients"],
    ["settings", "Settings"],
  ],
  metrics: [
    { icon: "clipboard", label: "Open quotes", badge: "Active", counter: [24, 25] },
    { icon: "dollar", label: "Bound premium", badge: "Month", value: "$412k" },
    { icon: "check", label: "Policies in force", badge: "Total", value: "1,308" },
    { icon: "clock", label: "Avg quote time", badge: "Speed", value: "18m" },
    { icon: "users", label: "Pending renewals", badge: "30 days", value: "46" },
    { icon: "chart", label: "Loss ratio", badge: "YTD", value: "61%" },
  ],
  panel: {
    title: "Premium this month",
    subtitle: "Daily bound premium",
    empty: "No premium recorded yet this period.",
  },
  modal: { title: "New quote", submit: "Send to underwriting" },
  fields: [
    { label: "Named insured", value: "Delgado Landscaping" },
    { label: "Business class", value: "8380 — Landscaping" },
    { label: "Vehicles", value: "3" },
    { label: "Liability limit", value: "$1,000,000" },
    { label: "Deductible", value: "$1,000" },
    { label: "Effective date", value: "April 1, 2026" },
    { label: "Loss history", value: "No claims in five years", full: true },
  ],
  actions: [
    { label: "Pulling up the client record", until: 2 },
    { label: "Setting coverage and limits", until: 5 },
    { label: "Adding dates and loss history", until: 7 },
    { label: "Sending to underwriting for approval", submit: true },
  ],
  chat: {
    ask: "Quote commercial auto for Delgado Landscaping",
    ack: "On it — starting that quote now.",
    done: "All done :)",
  },
};
