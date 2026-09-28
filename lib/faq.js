import { FAQ as PRICING_FAQ } from "./pricing";

/**
 * The FAQ page, assembled from answers the site had already written down
 * rather than a fresh set.
 *
 *   - "How NINA works" is lifted from the FAQ on the Canada AI adoption post
 *     (lib/posts.js), edited to stand on its own outside that article, plus
 *     the four beats of a request from lib/product.js.
 *   - "Control and security" restates the Control and Security section of the
 *     Product page (BOUNDARIES in lib/product.js). It deliberately claims
 *     nothing that section doesn't.
 *   - "Getting started" follows the Installation category in lib/docs.js.
 *   - "Plans and usage" is imported from lib/pricing.js, not copied, so the
 *     pricing page and this page can't drift apart.
 *
 * `a` is an array of paragraphs; the pricing answers are plain strings and the
 * renderer takes either.
 */
export const FAQ_GROUPS = [
  {
    title: "How NINA works",
    items: [
      {
        q: "What is an execution layer?",
        a: [
          "An execution layer is software that sits inside an organization’s existing applications and performs work on behalf of users. Instead of clicking through multiple screens manually, users describe what they want in plain language.",
          "The execution layer then completes the task while following the organization’s business rules, permissions, approvals, and compliance requirements. NINA is an execution layer for your product.",
        ],
      },
      {
        q: "How is NINA different from an AI copilot or a digital adoption platform?",
        a: [
          "An AI copilot primarily answers questions. A digital adoption platform guides users by showing them where to click. In both cases, the user still performs the work.",
          "NINA performs the task itself inside your software, while respecting your business rules, approvals, and governance. It can also guide instead, when showing someone how is the point.",
        ],
      },
      {
        q: "What happens when a user asks NINA for something?",
        a: [
          "Four steps. NINA identifies the task, selects the workflow that matches it, runs the approved steps, and then shows what changed.",
          "Nothing is improvised: NINA only runs workflows it has been taught and that you have allowed.",
        ],
      },
    ],
  },
  {
    title: "Control and security",
    items: [
      {
        q: "What is NINA allowed to do inside our product?",
        a: [
          "Only what you choose. You decide which workflows NINA can run, and you can require approval before any of them completes.",
          "Every action is logged, so there is an audit trail of what was done and on whose behalf.",
        ],
      },
      {
        q: "Where does NINA run, and what happens to our data?",
        a: [
          "NINA can run in your own environment, and you control how your data is handled. Enterprise plans include private, isolated deployment.",
          "For what the agenq.com website itself collects, see our [privacy policy](/privacy).",
        ],
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        q: "What is involved in installing it?",
        a: [
          "NINA installs as an SDK in your front end. There are guides for React and Next.js, for Vue, Angular, and plain JavaScript, and for keeping staging and production separate.",
          "Workflows are recorded rather than coded, so the people who know the product can teach it without engineering time. See the [documentation](/documentation) for the full setup.",
        ],
      },
    ],
  },
  {
    title: "Plans and usage",
    items: PRICING_FAQ,
  },
];
