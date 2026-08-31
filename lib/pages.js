/**
 * Content for the Solution, Features, and Use Case pages, transcribed from
 * the matching pages on agenq.com.
 *
 * Every one of them follows the same argument: here is the problem, here is
 * what it costs you, here is how NINA fixes it, here is what you get. So they
 * share one renderer — components/MarketingPage.js — and a new page is a new
 * object here rather than a new component.
 *
 *   section   which dropdown it belongs to, and its URL prefix
 *   slug      the rest of the URL
 *   navLabel  how it reads in the nav dropdown
 *   eyebrow   the pill above the headline
 *   headline  H1. `accent` is the phrase rendered in the blue gradient
 *   subhead   the standfirst
 *   problem / impact / solution   heading + items, each {title, body}
 *   results   four short outcomes
 *   closing   the "why this approach works" line
 *
 * Two pages on agenq.com are each linked from two nav items — Nina is also
 * Guided Onboarding, and Action-Based Execution is also Just Ask Assistance.
 * That's mirrored in lib/nav.js rather than duplicated here.
 */

export const PAGES = [
  /* ── Solution ──────────────────────────────────────────────────────── */
  {
    section: "solutions",
    slug: "faster-revenue",
    navLabel: "Faster Revenue",
    eyebrow: "Faster revenue",
    headline: "Unlock faster revenue growth with",
    accent: "AI-powered product adoption.",
    subhead:
      "Revenue slows when users don't understand your product, demos wait on a human, and new features ship into silence.",
    problem: {
      heading: "Where revenue leaks",
      items: [
        {
          title: "Demos blocked when experts are busy",
          body: "Every prospect who wants to see the product waits for someone senior enough to show it to them.",
        },
        {
          title: "Features launch, but nobody adopts them",
          body: "The work ships and the release notes go out, and usage never moves.",
        },
        {
          title: "Slow activation drags deal velocity",
          body: "The longer it takes a trial to reach a first real win, the colder the deal gets.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Slower revenue cycles",
          body: "Deals sit in evaluation while buyers wait for someone to walk them through the product.",
        },
        {
          title: "Expansion revenue left on the table",
          body: "Accounts that never discover the features they're paying for don't upgrade to more of them.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "An interactive product demo available 24/7",
          body: "Prospects get a guided walkthrough the moment they're curious, not the moment your team is free.",
        },
        {
          title: "An assistant that drives feature discovery",
          body: "NINA surfaces the capability that solves what a user is actually trying to do, in the moment they're trying to do it.",
        },
        {
          title: "Action-based AI that executes training automatically",
          body: "New users are walked through real workflows instead of being handed a video library.",
        },
      ],
    },
    results: [
      "Faster deal closures",
      "Improved activation rates",
      "Higher product adoption",
      "Increased expansion revenue",
    ],
    closing:
      "Revenue follows understanding. Remove the wait between curiosity and competence and the whole funnel moves faster.",
  },

  {
    section: "solutions",
    slug: "lower-costs",
    navLabel: "Slash Costs",
    eyebrow: "Slash costs",
    headline: "Cut operational costs",
    accent: "by up to 50%.",
    subhead:
      "Most of what your team does every day doesn't need a human to do it. It just needs someone who knows the product.",
    problem: {
      heading: "Where the money goes",
      items: [
        {
          title: "60% of work is repetitive",
          body: "Teams spend the majority of their time on tasks that don't depend on human judgement.",
        },
        {
          title: "Experts are stuck answering the same questions",
          body: "Your most expensive people are your help desk, and the queue never empties.",
        },
        {
          title: "Tool sprawl multiplies overhead",
          body: "Every additional system adds licence cost, integration work, and another place for knowledge to hide.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Rising labour cost",
          body: "Manual process means support headcount grows in step with customer count.",
        },
        {
          title: "Delayed workflows",
          body: "Work that waits on a person to action it stretches every timeline around it.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Action-based AI automates execution",
          body: "NINA updates tools, generates content, and assigns tasks rather than describing how to.",
        },
        {
          title: "A workflow builder that needs no engineers",
          body: "Teams teach NINA new paths through the product without filing a ticket.",
        },
        {
          title: "One system instead of several",
          body: "Knowledge base, demo engine, and onboarding run off the same product understanding.",
        },
      ],
    },
    results: [
      "50% lower operational costs",
      "Automated workflows",
      "Reduced tool spend",
      "Faster execution",
    ],
    closing:
      "The cheapest support ticket is the one nobody needed to file.",
  },

  {
    section: "solutions",
    slug: "operations-overload",
    navLabel: "End Operations Overload",
    eyebrow: "Operations overload",
    headline: "End operations overload with",
    accent: "action-based automation.",
    subhead:
      "Your team isn't slow. It's interrupted, by the same questions, the same updates, and the same manual steps every day.",
    problem: {
      heading: "What's eating the day",
      items: [
        {
          title: "Repetitive work consumes 60% of time",
          body: "Updating tickets, writing docs, and re-answering questions crowd out the work that matters.",
        },
        {
          title: "Constant interruptions",
          body: "The same handful of questions arrives daily, from different people, to whoever is nearest.",
        },
        {
          title: "Operational chaos across tools",
          body: "Context is lost every time somebody switches systems to complete one task.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Lower productivity",
          body: "Manual tasks drain momentum and morale long before they show up in a metric.",
        },
        {
          title: "Slower shipping velocity",
          body: "Backlogs grow, releases stretch, and the roadmap slips a quarter at a time.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Automation that completes the task",
          body: "NINA assigns work, updates statuses, and generates reports inside the tools you already run.",
        },
        {
          title: "Smart prioritisation",
          body: "Predictive task management surfaces what's actually blocking delivery.",
        },
        {
          title: "Instant answers from product knowledge",
          body: "The repeated explanation happens once, to NINA, and then never again.",
        },
      ],
    },
    results: [
      "60%+ less repetitive workload",
      "Automated updates",
      "Faster execution cycles",
      "Better strategic focus",
    ],
    closing: "NINA completes work instead of just tracking it.",
  },

  {
    section: "solutions",
    slug: "knowledge-loss",
    navLabel: "Stop Knowledge Loss",
    eyebrow: "Stop knowledge loss",
    headline: "Protect your product knowledge",
    accent: "before it walks out the door.",
    subhead:
      "When people leave, what they knew about your product leaves with them. Almost none of it was ever written down.",
    problem: {
      heading: "How knowledge disappears",
      items: [
        {
          title: "Expertise leaves with the expert",
          body: "The person who knew why the workflow works that way is now somewhere else.",
        },
        {
          title: "No institutional memory system",
          body: "Knowledge lives in people rather than systems, so it can't be inherited.",
        },
        {
          title: "Documentation is scattered or missing",
          body: "What was written down is spread across tools, half-finished, and already out of date.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "$50K+ per departure",
          body: "Retraining and lost productivity carry a real price every time somebody senior moves on.",
        },
        {
          title: "Slow continuity",
          body: "The team that inherits the work rediscovers it by making the mistakes again.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Product knowledge captured and centralised",
          body: "One source of truth for how the product actually works, not how it was documented once.",
        },
        {
          title: "An assistant that retains context",
          body: "NINA holds the history and the reasoning, not just the current click path.",
        },
        {
          title: "New hires learn instantly",
          body: "Training and demos run on demand, so ramp-up doesn't depend on who's free to teach.",
        },
      ],
    },
    results: [
      "Zero knowledge loss",
      "Consistent understanding",
      "Reduced retraining cost",
      "Long-term stability",
    ],
    closing: "AI preserves knowledge beyond any individual employee.",
  },

  /* ── Features ──────────────────────────────────────────────────────── */
  {
    section: "features",
    slug: "voice-and-chat-guidance",
    navLabel: "Voice and Chat Guidance",
    eyebrow: "Voice and chat guidance",
    headline: "An AI product assistant with a",
    accent: "human-like persona.",
    subhead:
      "Users don't trust a bot that sounds like a bot. NINA speaks with tone, context, and an identity of her own.",
    problem: {
      heading: "Why most assistants fail",
      items: [
        {
          title: "Bots feel robotic",
          body: "A flat, scripted voice tells users immediately that nobody is really helping them.",
        },
        {
          title: "Assistants don't grasp product context",
          body: "Generic AI answers generically, which is worse than no answer inside a complex product.",
        },
        {
          title: "Confidence needs human-like interaction",
          body: "People follow instructions they trust, and trust is carried by how something speaks.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Low engagement and poor adoption",
          body: "An assistant users don't believe is an assistant users stop opening.",
        },
        {
          title: "Inconsistent knowledge delivery",
          body: "Every team explains the product slightly differently, and users notice.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Realistic voice with emotional range",
          body: "Tone adapts to what the user is doing rather than reading every sentence the same way.",
        },
        {
          title: "A distinct, personalised identity",
          body: "NINA is a consistent character inside your product, not an anonymous chat window.",
        },
        {
          title: "Grounded in your product knowledge",
          body: "Every answer comes from how your software actually behaves.",
        },
      ],
    },
    results: [
      "Increased trust and engagement",
      "Deeper learning through conversation",
      "Less reliance on human support",
      "24/7 expert-level explanations",
    ],
    closing:
      "Emotional intelligence plus deep product knowledge is what makes a digital expert believable at scale.",
  },

  {
    section: "features",
    slug: "workflow-navigation",
    navLabel: "Real-time Workflow Navigation",
    eyebrow: "Workflow navigation",
    headline: "Cut onboarding costs with",
    accent: "self-guided learning.",
    subhead:
      "New users don't need a course. They need someone beside them, pointing at the next thing to click.",
    problem: {
      heading: "Why ramp-up drags",
      items: [
        {
          title: "Product knowledge is scattered",
          body: "What a new user needs is spread across docs, recordings, and people's heads.",
        },
        {
          title: "Everything depends on experts",
          body: "The same walkthrough gets delivered live, over and over, by whoever knows it best.",
        },
        {
          title: "Training is inconsistent",
          body: "Two users onboarded a week apart learn two different products.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "High onboarding costs",
          body: "Companies lose thousands per employee to the gap between hired and useful.",
        },
        {
          title: "Delayed time-to-value",
          body: "Every day before a first real win is a day the account might not renew for.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Step-by-step personalised guidance",
          body: "NINA adapts the path to the user's role and what they're trying to accomplish.",
        },
        {
          title: "One source of truth",
          body: "Centralised product knowledge means every user gets the current answer, not last quarter's.",
        },
        {
          title: "Interactive demos that adapt live",
          body: "Scenario-based learning that responds to what the user actually does next.",
        },
      ],
    },
    results: [
      "Faster onboarding",
      "Consistent knowledge delivery",
      "Lower ramp-up costs",
      "Higher activation rates",
    ],
    closing:
      "Onboarding stops being an event your team runs and becomes something your product does.",
  },

  {
    section: "features",
    slug: "action-based-execution",
    navLabel: "Action-Based Execution",
    eyebrow: "Action-based execution",
    headline: "Most AI talks.",
    accent: "This one acts.",
    subhead:
      "Ask for what you need and NINA completes it, inside your software, following your rules.",
    problem: {
      heading: "The limit of chat",
      items: [
        {
          title: "Answers aren't results",
          body: "Traditional AI explains the eight steps and leaves you to perform all eight.",
        },
        {
          title: "60% of time goes to manual tasks",
          body: "The work that could be automated is the work filling everyone's calendar.",
        },
        {
          title: "Multiple tools, inconsistent updates",
          body: "Completing one task means touching three systems and hoping they agree afterwards.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Onboarding delays stall adoption",
          body: "Users who can't complete their first task don't come back for a second.",
        },
        {
          title: "Hours lost to automatable work",
          body: "Productivity is spent on steps nobody would choose to do by hand.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Agents that execute real work",
          body: "NINA assigns tasks, updates systems, and generates documentation on request.",
        },
        {
          title: "Ask for anything, get it done",
          body: "Users describe the outcome in plain language instead of learning the interface first.",
        },
        {
          title: "Blockers predicted, not reported",
          body: "Real-time intelligence spots what's about to stall and acts before it does.",
        },
      ],
    },
    results: [
      "Far less manual work",
      "Fewer bottlenecks",
      "Instant task completion",
      "Higher productivity",
    ],
    closing:
      "Answers describe the work. Execution finishes it, inside your business rules, permissions, and approvals.",
  },

  {
    section: "features",
    slug: "product-knowledge-training",
    navLabel: "Trained on Your Product Knowledge",
    eyebrow: "Product knowledge",
    headline: "Train users faster with",
    accent: "action-based AI.",
    subhead:
      "People learn by doing. NINA teaches inside the real workflow instead of handing over a video.",
    problem: {
      heading: "Why training doesn't stick",
      items: [
        {
          title: "Training is slow and hard to scale",
          body: "Every new cohort needs the same sessions delivered again by the same people.",
        },
        {
          title: "Static content ignores the role",
          body: "One recording has to serve an admin, an analyst, and a first-week hire equally badly.",
        },
        {
          title: "Human-dependent training caps growth",
          body: "You can only onboard as fast as your most knowledgeable person has hours.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Longer time-to-productivity",
          body: "The gap between access granted and work delivered stays wide.",
        },
        {
          title: "More tickets, repeated questions",
          body: "Anything the training missed becomes support's problem within a fortnight.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Training on real workflows",
          body: "Users learn in the live product, not a simulation that drifts out of date.",
        },
        {
          title: "Tailored training paths",
          body: "NINA builds the route that fits the role rather than playing everyone the same reel.",
        },
        {
          title: "Product knowledge at every step",
          body: "The answer to \"why this field?\" is always one question away, mid-task.",
        },
      ],
    },
    results: [
      "Up to 3x faster training",
      "Lower learning curves",
      "Consistent role-based training",
      "Fewer support requests",
    ],
    closing:
      "Learning becomes effortless when users perform the action instead of watching someone else perform it.",
  },

  /* ── Use Case ──────────────────────────────────────────────────────── */
  {
    section: "use-cases",
    slug: "adoption-enablement",
    navLabel: "Adoption Enablement",
    eyebrow: "Adoption enablement",
    headline: "Achieve 100% knowledge retention",
    accent: "with AI that never forgets.",
    subhead:
      "Institutional memory shouldn't depend on who's still in the building.",
    problem: {
      heading: "What gets lost",
      items: [
        {
          title: "$50K+ lost when experts leave",
          body: "Each departure takes context that took years to accumulate.",
        },
        {
          title: "Details live in minds, not systems",
          body: "The crucial parts were never written down because everyone already knew them.",
        },
        {
          title: "Teams rebuild what was already known",
          body: "Every transition starts with reverse-engineering the last person's decisions.",
        },
      ],
    },
    impact: {
      heading: "What it costs you",
      items: [
        {
          title: "Disrupted operations",
          body: "Work stops at the point where the missing information used to be.",
        },
        {
          title: "Higher retraining costs",
          body: "New hires are taught from scratch because there's nothing to inherit.",
        },
      ],
    },
    solution: {
      heading: "How NINA fixes it",
      items: [
        {
          title: "Knowledge captured automatically",
          body: "Product understanding accumulates as a single source of truth instead of a folder nobody updates.",
        },
        {
          title: "Instant answers with full context",
          body: "Not just what the setting does, but why it's set that way here.",
        },
        {
          title: "Institutional memory that persists",
          body: "What the team learns stays with the product, not with the person.",
        },
      ],
    },
    results: [
      "100% knowledge retention",
      "Instant access to answers",
      "Zero disruption during transitions",
      "Faster onboarding",
    ],
    closing:
      "Knowledge that lives in the product outlasts everyone who contributed to it.",
  },
];

/** Look a page up by its section and slug. */
export const findPage = (section, slug) =>
  PAGES.find((p) => p.section === section && p.slug === slug);

/** Every page in a section, for the dropdowns and for generateStaticParams. */
export const pagesIn = (section) => PAGES.filter((p) => p.section === section);
