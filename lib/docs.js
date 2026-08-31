/**
 * Documentation index — the skeleton for the docs site.
 *
 * Nothing here is written yet. Each article carries a title and nothing else,
 * so the page renders the full shape of the docs without pretending links
 * work: an entry becomes a real link the moment it's given an `href`, and
 * until then it renders as a muted, non-interactive row.
 *
 * Categories were chosen around the journey a customer actually takes —
 * install it, teach it, run it, trust it, pay for it, fix it — rather than
 * around how the product is built internally.
 *
 *   icon         key into ICONS in components/Docs.js
 *   title        category name
 *   description  one line, what this section covers
 *   articles     [{ title, href?, keywords? }] — href optional until the page
 *                exists; keywords catch the terms people actually type when
 *                they don't match the title, like "SSO" or "npm"
 */

export const DOC_CATEGORIES = [
  {
    icon: "rocket",
    title: "Getting started",
    description: "What NINA is, and the fastest path to a working assistant.",
    articles: [
      { title: "What is NINA?" },
      { title: "Quickstart: your first guided workflow" },
      { title: "Core concepts and vocabulary" },
      { title: "How NINA differs from a chatbot" },
      { title: "Inviting your team" },
    ],
  },
  {
    icon: "code",
    title: "Installation",
    description: "Adding NINA to your product with a single snippet.",
    articles: [
      { title: "Installing the SDK", keywords: ["npm", "install", "package", "snippet", "setup"] },
      { title: "React and Next.js" },
      { title: "Vue, Angular, and plain JavaScript" },
      { title: "Verifying your installation" },
      { title: "Staging and production environments" },
    ],
  },
  {
    icon: "route",
    title: "Building workflows",
    description: "Teaching NINA the click-by-click paths through your product.",
    articles: [
      { title: "What counts as a workflow" },
      { title: "Recording your first workflow", keywords: ["record", "capture", "author"] },
      { title: "Steps, selectors, and stable targets" },
      { title: "Branching and conditional paths" },
      { title: "Testing before you publish" },
      { title: "Versioning and rollbacks" },
    ],
  },
  {
    icon: "sparkles",
    title: "Training NINA",
    description: "The product knowledge behind every answer she gives.",
    articles: [
      { title: "Connecting knowledge sources" },
      { title: "Uploading documentation and help content" },
      { title: "Persona, tone, and voice", keywords: ["voice", "personality", "accent"] },
      { title: "Guardrails and refusals" },
      { title: "Keeping knowledge current" },
    ],
  },
  {
    icon: "grid",
    title: "Studio",
    description: "Managing agents, projects, and teammates in the dashboard.",
    articles: [
      { title: "Studio overview" },
      { title: "Creating and configuring an agent" },
      { title: "Projects and environments" },
      { title: "Roles and permissions", keywords: ["access", "admin", "rbac", "users"] },
      { title: "Workspace settings" },
    ],
  },
  {
    icon: "chart",
    title: "Analytics",
    description: "What users ask, where they stall, and what it's worth.",
    articles: [
      { title: "Session and usage metrics" },
      { title: "Workflow completion rates" },
      { title: "Surfacing the questions users repeat" },
      { title: "Time-to-value reporting" },
      { title: "Exporting your data", keywords: ["csv", "export", "download", "api"] },
    ],
  },
  {
    icon: "shield",
    title: "Security and compliance",
    description: "Controlled execution: permissions, approvals, and audit trails.",
    articles: [
      { title: "How your data is handled", keywords: ["privacy", "gdpr", "retention", "encryption"] },
      { title: "Permissions and approval gates" },
      { title: "Audit trails" },
      { title: "Single sign-on", keywords: ["sso", "saml", "okta", "identity"] },
      { title: "Private and isolated deployment", keywords: ["self-hosted", "on-premise", "vpc", "tenancy"] },
      { title: "Subprocessors and data residency" },
    ],
  },
  {
    icon: "card",
    title: "Billing and plans",
    description: "Usage, overages, and moving between plans.",
    articles: [
      { title: "How pricing works", keywords: ["cost", "plans", "subscription"] },
      { title: "Understanding included minutes", keywords: ["usage", "quota", "limits"] },
      { title: "Usage overages", keywords: ["overage", "billing", "extra"] },
      { title: "Changing your plan" },
      { title: "Invoices and receipts" },
    ],
  },
  {
    icon: "lifebuoy",
    title: "Troubleshooting",
    description: "When something doesn't behave the way you expect.",
    articles: [
      { title: "NINA can't find an element on the page" },
      { title: "A workflow stops partway through" },
      { title: "Voice isn't working" },
      { title: "Answers are out of date" },
      { title: "Contacting support", keywords: ["help", "email", "ticket"] },
    ],
  },
];

/** Surfaced above the grid — the handful of pages most people open first. */
export const POPULAR = [
  { title: "Quickstart: your first guided workflow", category: "Getting started" },
  { title: "Installing the SDK", category: "Installation" },
  { title: "Recording your first workflow", category: "Building workflows" },
];
