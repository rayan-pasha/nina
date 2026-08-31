/**
 * Copy for the Insurance page, transcribed from the AgenQ Insurance design
 * file. Wording and section order follow that file; the visual treatment is
 * this site's. `media` strings are the design file's own image-slot captions.
 */

/** "Three Kinds of Guidance" — what AgenQ answers inside the platform. */
export const GUIDANCE = [
  {
    title: "Product Knowledge",
    body: "Coverage, eligibility, exclusions, and underwriting, answered while the user works.",
    media: "Screen: AgenQ answering a coverage question",
  },
  {
    title: "Software Workflows",
    body: "Quoting, applications, renewals, endorsements, guided step by step.",
    media: "Screen recording: AgenQ guiding a quote",
  },
  {
    title: "Policy Guidance",
    body: "Plain-language plan comparison, from information you approved.",
    media: "Screen: plan comparison in the platform",
  },
];

/** "From Question to Action" — one broker conversation, three turns. */
export const EXCHANGES = [
  {
    speaker: "Broker",
    ask: "“What's the difference between these two plans?”",
    answer: "AgenQ explains the relevant differences.",
  },
  {
    speaker: "Broker",
    ask: "“Which one fits a self-employed customer?”",
    answer: "AgenQ gives the approved guidance.",
  },
  {
    speaker: "Broker",
    ask: "“Show me where I select it.”",
    answer: "AgenQ guides them through the workflow.",
  },
];

/** "Built for Control" — the four guarantees, on the dark band. */
export const CONTROLS = [
  {
    title: "Approved sources only.",
    body: "AgenQ answers from the documents and product data your team designates.",
  },
  {
    title: "Controlled updates.",
    body: "Knowledge changes go through your approval before they reach users.",
  },
  {
    title: "Traceability.",
    body: "Responses can be connected back to approved sources.",
  },
  {
    title: "Data handling.",
    body: "PII controls and data residency options available on request.",
  },
];

/** "Built For" — who the platform sits inside. */
export const AUDIENCES = [
  "Insurance software vendors",
  "MGAs",
  "Benefits and distribution platforms",
];
