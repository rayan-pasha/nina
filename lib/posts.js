/**
 * Blog content. Most posts are transcribed from the live articles at
 * agenq.com/blogs; unpublished drafts come from the Word docs in /content.
 *
 * Ordered newest first — the index derives everything from that order:
 * `posts[0]` is the featured article, the next three fill "Latest articles",
 * and the whole list feeds "All articles". Adding a post here is the only
 * edit needed; /blog/[slug] is generated from the same array.
 *
 * Body blocks:
 *   { type: "p",     text }                      paragraph
 *   { type: "h2",    text }                      section heading
 *   { type: "h3",    text }                      sub-heading
 *   { type: "ul",    items: [] }                 bullet list
 *   { type: "note",  title, items: [] }          "In short" / key-takeaways card
 *   { type: "stats", items: [{ value, label }] } result figures
 *
 * `**bold**` inside any string renders as <strong> — see RichText in
 * components/ArticlePage.js. The prose is edited down from the originals:
 * the live posts repeat their target keyword phrase for SEO, which reads
 * badly at this type size, so those repetitions are dropped, and headings
 * are set in sentence case throughout. `sourceUrl` points back at the
 * published version, and is absent on drafts that aren't live yet.
 */
export const POSTS = [
  {
    slug: "canada-ai-adoption-all-in-2026",
    // No sourceUrl: unpublished. Drafted 2026-08-09; supersedes the earlier
    // "Canada's Next AI Advantage Is Adoption" cut of the same piece, so it
    // keeps that slug and any links already pointing at it.
    title: "Canada’s AI Adoption Gap: What the ALL IN 2026 Top 100 Shows",
    excerpt:
      "For years Canada’s AI story was a research story. The ALL IN 2026 Top 100 shows what its founders are building now — almost no foundation models, almost all operational software for healthcare, insurance, finance, and infrastructure. The gap that matters is no longer research or funding. It is adoption.",
    date: "2026-08-09",
    dateLabel: "August 9, 2026",
    author: "Varun Mishra",
    authorRole: "Founder & CEO, AgenQ",
    readTime: "7 min read",
    tags: ["AI Adoption", "Industry"],
    cover: "adoption",
    body: [
      {
        type: "note",
        title: "In short",
        items: [
          "Only **12% of Canadian businesses** used AI to produce goods or services between mid-2024 and mid-2025, according to Statistics Canada. The national AI strategy aims to reach **60% by 2034**.",
          "The ALL IN 2026 Top 100 selected 100 Canadian AI startups from more than 330 applicants. Almost none are building foundation models or consumer chatbots.",
          "The selected companies are focused on operational industries including healthcare, insurance, financial services, manufacturing, agriculture, construction, and public infrastructure.",
          "For enterprise buyers, the workflow now matters more than the model. The real value lies in software integrations, approvals, permissions, and execution — not just AI-generated answers.",
          "A new category is emerging: **controlled execution** — AI that completes work inside an organization’s existing systems while respecting business rules, approval processes, and audit requirements.",
        ],
      },

      { type: "h2", text: "Canada solved research. Usage is the open question." },
      {
        type: "p",
        text: "For years, Canada’s AI story was primarily a research story. The country produced world-class talent, groundbreaking research, and globally respected institutions. Yet much of the commercial value created from those innovations ended up elsewhere.",
      },
      {
        type: "p",
        text: "That is beginning to change. Today, Canadian founders are building companies designed not to invent the next AI breakthrough, but to put AI to work inside hospitals, insurance companies, factories, banks, and government institutions.",
      },
      {
        type: "p",
        text: "The biggest challenge for Canada’s adoption of AI is no longer research. It is enterprise implementation. It is no longer about whether Canada can build AI, but **whether Canadian organizations will actually use it.**",
      },

      { type: "h2", text: "What the ALL IN 2026 Top 100 actually shows" },
      {
        type: "p",
        text: "More than 330 startups applied, with 100 companies selected to present in Montreal this September. While the list is not a ranking, it provides one of the clearest snapshots of where Canadian AI entrepreneurship is heading.",
      },
      {
        type: "p",
        text: "The selected startups span healthcare, enterprise software, insurance, financial services, manufacturing, agriculture, cybersecurity, construction, and public infrastructure. One pattern stands out immediately: **very few companies are building foundation models or consumer AI chatbots.**",
      },
      {
        type: "p",
        text: "Instead, founders are tackling operational problems where:",
      },
      {
        type: "ul",
        items: [
          "Workflows are long and complex",
          "Data is highly sensitive",
          "Regulations matter",
          "Mistakes are expensive",
          "Legacy systems cannot simply be replaced",
        ],
      },
      {
        type: "p",
        text: "These are significantly harder problems than consumer AI, but they also represent where most of the economy operates.",
      },

      { type: "h2", text: "The 12% to 60% opportunity for Canada" },
      {
        type: "p",
        text: "The shift toward enterprise AI is not accidental. Canada already has strong industries in healthcare, insurance, energy, banking, and public infrastructure. What Canada lacks is widespread adoption.",
      },
      {
        type: "p",
        text: "Statistics Canada reports that only **12% of Canadian businesses** used AI to produce goods or services between mid-2024 and mid-2025. Recognizing the gap, the Government of Canada’s AI for All strategy has set a national target: **60% of Canadian businesses using AI by 2034.**",
      },
      {
        type: "p",
        text: "That gap represents one of the biggest commercial opportunities in Canadian technology today. It is no longer a research problem. It is no longer a funding problem. It is an adoption problem.",
      },

      { type: "h2", text: "The ecosystem is building rooms for buyers, not vendors" },
      {
        type: "p",
        text: "Canada’s AI ecosystem has recognized this shift. Scale AI, Mila, NEXT Canada, and MaRS have spent years moving the conversation beyond research papers and demonstrations toward real-world deployment.",
      },
      {
        type: "p",
        text: "The ALL IN conference reflects the same philosophy. Instead of filling conference halls with technology vendors pitching other technology vendors, the event intentionally prioritizes enterprise buyers, industry operators, business leaders, and public institutions. The goal is not to showcase innovation. The goal is to get AI deployed inside organizations.",
      },

      { type: "h2", text: "Why the model matters less than the workflow" },
      {
        type: "p",
        text: "Enterprise buying decisions have quietly changed. For several years, AI conversations focused almost entirely on the model. Questions included:",
      },
      {
        type: "ul",
        items: [
          "Which model is larger?",
          "Which one reasons better?",
          "Which one produces more accurate responses?",
        ],
      },
      {
        type: "p",
        text: "Those questions still matter, but they are no longer the deciding factor. As AI models continue to converge in capability, the real competitive advantage increasingly exists outside the model itself.",
      },
      {
        type: "p",
        text: "Success depends on how well AI integrates with existing software, business rules, user permissions, exception handling, approval workflows, and accountability systems. **The model is becoming less important than the workflow.**",
      },

      { type: "h2", text: "From answering questions to completing work" },
      {
        type: "p",
        text: "The strongest enterprise AI companies are changing what they sell. Instead of selling answers, they sell completed work: invoices automatically reconciled, compliance cases assembled for review, clinical notes generated during patient appointments.",
      },
      {
        type: "p",
        text: "This represents a fundamental shift. Most organizations are not lacking information — they already have documentation, training material, and experienced employees. **The real bottleneck is execution.** Someone still has to:",
      },
      {
        type: "ul",
        items: [
          "Open multiple applications",
          "Navigate complex workflows",
          "Handle undocumented exceptions",
          "Complete tasks without making mistakes",
        ],
      },
      {
        type: "p",
        text: "AI explanations help people understand work. They do not complete the work. And in industries like healthcare, finance, and insurance, fully autonomous AI is often unacceptable. What organizations actually need is **controlled execution.** That means AI performs work:",
      },
      {
        type: "ul",
        items: [
          "Inside existing enterprise software",
          "According to company policies",
          "With approval gates where necessary",
          "While maintaining a complete audit trail",
        ],
      },

      { type: "h2", text: "Where AgenQ fits" },
      {
        type: "p",
        text: "This is exactly the problem we are solving at AgenQ, and we are proud to be one of the companies included in the ALL IN 2026 Top 100.",
      },
      {
        type: "p",
        text: "AgenQ builds an execution layer that sits inside enterprise software. Users describe what they need in plain language, and AgenQ completes the task inside the organization’s existing software while respecting business rules, user permissions, and approval workflows. The organization’s existing software remains the system of record. **AgenQ becomes the system of action.**",
      },

      { type: "h2", text: "GPS for enterprise software" },
      {
        type: "p",
        text: "We often describe AgenQ as GPS for software. GPS never replaced roads. It simply understood where you wanted to go and guided you along infrastructure that already existed.",
      },
      {
        type: "p",
        text: "An execution layer works the same way. Organizations have already invested years, and significant resources, building their software ecosystems. Those systems do not need replacing. Users simply need an easier way to accomplish work inside them.",
      },
      {
        type: "p",
        text: "We began in the insurance industry, where workflows are lengthy and mistakes are costly. But the underlying challenge exists across nearly every enterprise sector, and stronger enterprise workflows will accelerate Canada’s AI adoption across regulated industries.",
      },

      { type: "h2", text: "What closes the gap" },
      {
        type: "p",
        text: "Canada has already proven it can lead in AI research. That debate is settled. The next opportunity is far more practical: the winners will be the companies that make AI usable, trusted, deployable, and measurable inside industries Canada already understands.",
      },
      {
        type: "p",
        text: "Talent, capital, infrastructure, and public support are increasingly aligned. Closing Canada’s AI adoption gap will not come from another foundation model. It will come from hundreds of companies solving specific operational problems where the work is real and the business impact is measurable. Judging by the ALL IN 2026 Top 100, that transformation is already underway.",
      },
    ],
    faq: [
      {
        q: "What percentage of Canadian businesses currently use AI?",
        a: [
          "According to Statistics Canada, 12% of Canadian businesses used AI to produce goods or services between mid-2024 and mid-2025. Canada’s national AI strategy, AI for All, aims to increase that number to 60% by 2034.",
        ],
      },
      {
        q: "What is the ALL IN 2026 Top 100 AI Startups list?",
        a: [
          "The ALL IN 2026 Top 100 is an annual selection of Canada’s most promising AI startups. Announced on July 21, 2026, the list was organized jointly by Scale AI and Mila for Canada’s largest AI and technology event.",
          "More than 330 startups applied and 100 companies were selected. It is a selection, not a ranking.",
        ],
      },
      {
        q: "What is an execution layer for enterprise software?",
        a: [
          "An execution layer is software that sits inside an organization’s existing enterprise applications and performs work on behalf of users. Instead of clicking through multiple screens manually, users describe what they want in plain language.",
          "The execution layer then completes the task while following the organization’s business rules, permissions, approvals, and compliance requirements.",
        ],
      },
      {
        q: "How is an execution layer different from an AI copilot or a digital adoption platform?",
        a: [
          "An AI copilot primarily answers questions. A digital adoption platform guides users by showing them where to click. In both cases, the user still performs the work.",
          "An execution layer performs the task itself inside the enterprise software while respecting business-specific rules, approvals, and governance.",
        ],
      },
    ],
    sources: [
      "AI for All: Canada’s National Artificial Intelligence Strategy — Government of Canada (June 4, 2026)",
      "Statistics Canada — Business AI Adoption Data (mid-2024 to mid-2025)",
      "ALL IN 2026 Top 100 AI Startups Announcement (July 21, 2026)",
    ],
  },

  {
    slug: "insurance-saas-time-to-value",
    sourceUrl: "https://agenq.com/blogs/insurance-saas-time-to-value/",
    title: "Insurance SaaS Time-to-Value: 7 Proven Ways to Reduce Onboarding Time",
    excerpt:
      "Insurance SaaS activation sits near 5% against a 37.5% industry average — the gap isn’t the feature set, it’s the domain knowledge new agencies have to absorb before anything works. Seven ways to close it: role-based paths, contextual in-app guidance, and embedded AI that answers at the moment of confusion.",
    date: "2026-07-06",
    dateLabel: "July 6, 2026",
    author: "AgenQ Team",
    authorRole: "AgenQ",
    readTime: "9 min read",
    tags: ["Insurance SaaS", "Onboarding"],
    cover: "timeToValue",
    subhead:
      "How insurance SaaS companies reduce time-to-value for new agency customers.",
    body: [
      {
        type: "p",
        text: "Insurance SaaS companies reduce time-to-value by collapsing the gap between account activation and the first meaningful workflow win — replacing front-loaded training programs with role-specific in-app guidance, progressive feature disclosure, and contextual Q&A that meets agents where they are in the product. The biggest lever is not a better help center; it is getting the right guidance to the right person at the exact moment they are about to get lost. That is what separates products agencies adopt from products agencies resent.",
      },
      {
        type: "note",
        title: "Key takeaways",
        items: [
          "FinTech and Insurance has one of the lowest user activation rates in B2B SaaS — just **5%**, versus a cross-industry average of **37.5%** (Userpilot 2024 benchmark, 62 companies).",
          "About **26% of insurance agencies** report prolonged onboarding timelines specifically because of data migration complexity (Global Growth Insights).",
          "Cutting time-to-value by 20% has been linked to an **18% lift in ARR growth** for mid-market SaaS companies (Amplitude, 2024).",
          "A Pendo survey found **80% of respondents** believe better in-app guidance would help them get more value from the software they use.",
          "**43% of all SMB customer losses** happen in the first 90 days post-purchase, making the onboarding window the highest-leverage period for retention (Focus Digital, 2025).",
        ],
      },

      {
        type: "h2",
        text: "Why is insurance SaaS onboarding so much harder than other verticals?",
      },
      {
        type: "p",
        text: "Most SaaS onboarding complexity comes from features. Insurance SaaS onboarding complexity comes from the world the product lives in — and those are two completely different problems.",
      },
      {
        type: "p",
        text: "A new agency user is not just learning software. They are simultaneously navigating state licensing requirements, carrier appointment processes that can take 30 to 60 days per carrier, E&O documentation rules, compliance workflows, and a customer-facing service obligation that does not pause while they figure out the platform. AMS training alone can consume two to three weeks of a new hire’s ramp-up period. **That is not a UI problem. That is a domain problem wearing a UI problem’s clothes.**",
      },
      {
        type: "p",
        text: "The result is predictable. Userpilot’s 2024 benchmark shows FinTech and Insurance products activating at just 5% — the lowest category in the study by a wide margin, against a cross-industry average of 37.5%. That spread exists because most insurance platforms design for the power user who has been in the industry for a decade, not for the CSR who just passed their licensing exam and logged in for the first time at 8:47 AM on a Monday.",
      },
      {
        type: "p",
        text: "Admin-heavy means the path to first value is long by default. Policy lifecycle management, document automation, renewal tracking, quoting, compliance reporting — these are not features you demo in ten minutes. They are workflows that require context, judgment, and hands-on repetition. Every step that is unclear is a moment where someone stops, googles something, interrupts a colleague, opens a support ticket, or quietly decides the product is not worth the effort.",
      },
      {
        type: "p",
        text: "**Time-to-value (TTV)** means the elapsed time between a customer signing up and that customer experiencing the specific outcome they paid for — not the time they finish a checklist. Those are two different things, and conflating them is where most insurance SaaS teams go wrong.",
      },

      {
        type: "h2",
        text: "What does “reducing time-to-value” actually mean for a complex product?",
      },
      {
        type: "p",
        text: "It does not mean making the product simpler. It means making complexity survivable.",
      },
      {
        type: "p",
        text: "There is a tempting but wrong answer here: strip features to reduce cognitive load. A claims management system that cannot handle the edge cases is not a simpler product — it is a weaker one. Agencies buy insurance software precisely because their workflows are complicated. The goal is not simplicity; it is **guided complexity**.",
      },
      {
        type: "p",
        text: "**First, define a real first-value event.** Not “completed setup.” Not “logged in twice.” An actual, observable moment where an agency user has done something that mirrors the work they were sold on — run a quote, issued a certificate, tracked a renewal, generated a compliance report. Most teams have never defined this precisely enough to measure it, which is why TTV stays a concept rather than a metric.",
      },
      {
        type: "p",
        text: "**Second, build the path to that event around the user’s role.** A producer, a CSR, and an agency owner all have different jobs in the same platform. Progressive disclosure means showing each persona only what they need to accomplish their first win, then expanding from there. Personalized onboarding increases activation rates by 30 to 50% compared to generic, one-size-fits-all approaches.",
      },
      {
        type: "p",
        text: "**Third, answer questions at the point of confusion, not the point of inquiry.** A knowledge base requires a user to know they have a question, leave the workflow, search for an answer, translate it into their context, and come back. An embedded AI training assistant surfaces the answer inside the workflow, triggered by the user’s actual behaviour, without any of that overhead. Help you have to hunt for does not reduce TTV. Help that finds you does.",
      },

      {
        type: "h2",
        text: "Why do agencies abandon insurance software before it delivers value?",
      },
      {
        type: "p",
        text: "The abandonment data is uncomfortable. Users who do not engage within the first three days have a 90% chance of churning, according to UserGuiding’s 2025 research. Amplitude’s 2025 benchmark across more than 2,600 companies found that over 98% of new users churn within two weeks when they never hit a value milestone.",
      },
      {
        type: "p",
        text: "For insurance agencies, the specific failure modes look like this:",
      },
      {
        type: "ul",
        items: [
          "**Data migration paralysis.** About 26% of agencies report prolonged onboarding timelines specifically because of data migration complexity. When an agency cannot get its existing book of business into the platform cleanly, the product is useless — no amount of feature polish fixes this.",
          "**Training debt.** Over 90% of insurance agents quit within the first year, and burnout during that period runs higher than most other occupations. When AMS training itself takes weeks, it compounds an already fragile retention situation.",
          "**Role mismatch in onboarding.** A generic product tour that walks every user through the same screens ignores the fact that the person handling renewals and the person managing E&O documentation have almost nothing in common day to day. Generic onboarding creates confusion that looks like disengagement in the analytics.",
          "**Support lag.** A 15% rise in assisted resolutions — users getting answers from AI or self-help rather than waiting for a human — links to an 11% drop in churn, per Zendesk’s 2025 benchmark. That relationship is direct and measurable.",
        ],
      },

      { type: "h2", text: "What specific tactics work?" },
      {
        type: "p",
        text: "**Role-gated onboarding flows.** On signup or first login, capture the user’s role — producer, CSR, owner, compliance officer — then route them to a condensed path that reaches their first win in the fewest possible steps. Nielsen Norman Group research shows a 30 to 45% improvement in task completion when contextual guidance is present versus absent.",
      },
      {
        type: "p",
        text: "**Milestone-based feature unlocking.** Hide the full feature surface until users earn access by completing foundational tasks. This is not gatekeeping — it is cognitive protection. Reducing onboarding steps by 30% increases completion rates by up to 50%, according to Appcues research.",
      },
      {
        type: "p",
        text: "**Embedded, contextual Q&A.** The shift that matters is from help-on-demand to help-in-context. An assistant that understands where a user is in the product and what they are trying to do can answer “how do I attach a certificate of insurance to this account” without requiring the user to leave the workflow. This matters especially in insurance, where compliance-adjacent workflows are unforgiving and a wrong step has real consequences.",
      },
      {
        type: "p",
        text: "**Behavioral triggers over scheduled emails.** Contextual messages achieve 4.5x higher engagement than scheduled broadcasts, per Intercom. Emailing a new user on Day 7 to try renewal tracking is not as effective as triggering a tooltip the first time they hover over the renewals screen.",
      },
      {
        type: "p",
        text: "**Dedicated migration support in the first 14 days.** Given that migration complexity is a top blocker for agencies specifically, teams that front-load migration assistance — not just documentation, but human-assisted data import and validation — dramatically shrink the pre-value dead zone.",
      },

      {
        type: "h2",
        text: "How does an embedded AI training assistant help?",
      },
      {
        type: "p",
        text: "In-app guidance means instructional content delivered inside the product interface that helps users navigate features, complete tasks, or discover new value. The embedded AI training assistant is the evolved form: it does not just guide users through predefined paths, it responds to what the user is actually asking, in the context of what they are actually doing.",
      },
      {
        type: "p",
        text: "For insurance SaaS, that carries advantages generic B2B products do not need as badly:",
      },
      {
        type: "ul",
        items: [
          "**Compliance workflow reinforcement.** Insurance workflows have mandatory sequences — specific documentation, approvals, audit trails. An assistant can prompt users to complete required steps without requiring them to know they missed one.",
          "**Multi-role concurrent onboarding.** An agency going live often has 5 to 15 users who need to be functional within 30 days. Scaling human training to that volume requires something that can answer “why do I see a red flag on this policy” at 3 PM on a Thursday without a human in the loop.",
          "**Support ticket deflection.** In-app guidance alone reduces support ticket volume by 30%, per Product Fruits. With AI-based contextual Q&A, the reduction in human-handled cases is often 50% or more.",
        ],
      },
      {
        type: "p",
        text: "The business case is not subtle. Customers who complete onboarding are 30% more likely to purchase additional services. A shorter time-to-value does not just prevent churn — it creates the conditions for expansion revenue.",
      },
    ],
    faq: [],
    sources: [
      "Userpilot — 2024 Product Benchmarks, user activation by category (62 companies)",
      "Global Growth Insights — Insurance software market analysis",
      "Amplitude — 2025 Product Benchmarks (2,600+ companies) and 2024 TTV/ARR study",
      "Focus Digital — 2025 SMB churn analysis; Zendesk 2025 CX Benchmark",
    ],
  },

  {
    slug: "ai-guided-workflows-for-insurance-software",
    sourceUrl: "https://agenq.com/blogs/ai-guided-workflows-for-insurance-software/",
    title: "How AgenQ Reduced Insurance Software Onboarding Time by 6X",
    excerpt:
      "Onboarding from 90 minutes to 15. Policy comparison from hours to minutes. A look at what changed when NINA started guiding users through claims, compliance, and quoting workflows in real time instead of documenting them.",
    date: "2026-05-27",
    dateLabel: "May 27, 2026",
    author: "AgenQ Team",
    authorRole: "AgenQ",
    readTime: "5 min read",
    tags: ["Case Study", "Insurance SaaS"],
    cover: "sixX",
    subhead: "AI-guided workflows for insurance software — a customer case study.",
    body: [
      { type: "h2", text: "Insurance software is complex" },
      {
        type: "p",
        text: "Users must navigate onboarding, policy comparison, claims filing, and compliance workflows inside systems that often require extensive training and support. That complexity creates real business problems: slow onboarding, high support costs, claims filing errors, missed upsell opportunities, and low feature adoption.",
      },
      {
        type: "p",
        text: "AgenQ deploys AI-guided workflows directly inside insurance software using embedded AI agents and conversational workflow automation. Instead of forcing users to learn complex systems, **NINA guides users step by step inside the product itself.**",
      },

      { type: "h2", text: "The challenge" },
      {
        type: "p",
        text: "One insurance SaaS company approached AgenQ with four operational problems.",
      },
      { type: "h3", text: "Slow policy comparisons" },
      {
        type: "p",
        text: "Sales teams spent hours manually comparing coverage, premiums, deductibles, and claims timelines for customers.",
      },
      { type: "h3", text: "Long customer onboarding" },
      {
        type: "p",
        text: "Every onboarding session required a trained onboarding specialist and lasted nearly 90 minutes.",
      },
      { type: "h3", text: "Missed upsell opportunities" },
      {
        type: "p",
        text: "The platform had no intelligent system to recommend upgrades or additional modules based on user behaviour.",
      },
      { type: "h3", text: "Claims filing errors" },
      {
        type: "p",
        text: "Customers frequently submitted incomplete claims, entered incorrect information, or abandoned workflows midway — increasing support volume and slowing claims processing.",
      },
      {
        type: "p",
        text: "This is the reality for most insurance software products: high complexity, high error cost, and workflows that demand expert guidance, with no scalable way to deliver that guidance.",
      },

      { type: "h2", text: "Why traditional solutions were failing" },
      {
        type: "p",
        text: "The company had already tried documentation portals, video tutorials, training sessions, FAQ systems, and traditional chatbots. None solved the real problem.",
      },
      {
        type: "p",
        text: "Users didn’t need more information. They needed real-time guidance inside the workflow itself. **Traditional onboarding tools explain software. They do not help users complete work inside the software.**",
      },

      { type: "h2", text: "The AgenQ approach" },
      {
        type: "p",
        text: "AgenQ deployed NINA, an embedded AI product assistant built for enterprise software workflows. Unlike traditional chatbots, NINA understands:",
      },
      {
        type: "ul",
        items: [
          "Product UI",
          "Workflow state",
          "Insurance onboarding flows",
          "Claims filing logic",
          "Policy comparison workflows",
          "User context",
        ],
      },
      {
        type: "p",
        text: "That lets AgenQ guide users through workflows in real time, directly inside the insurance platform. Instead of leaving the application to search documentation or contact support, users receive live guidance while completing the task.",
      },

      { type: "h2", text: "Results" },
      {
        type: "stats",
        items: [
          { value: "6X", label: "faster customer activation" },
          { value: "90 → 15", label: "minutes to onboard" },
          { value: "+20%", label: "conversion rate" },
          { value: "+10%", label: "upsell revenue" },
        ],
      },
      { type: "h3", text: "AI-powered policy comparisons" },
      {
        type: "p",
        text: "NINA generated real-time policy comparisons based on customer profiles and highlighted the most relevant differences automatically. Policy comparison time dropped from hours to minutes, and conversion rates increased by 20%.",
      },
      { type: "h3", text: "AI-guided customer onboarding" },
      {
        type: "p",
        text: "NINA guided customers step by step through onboarding workflows, validated inputs, and reduced confusion. Onboarding time fell from 90 minutes to 15 — **6X faster customer activation.**",
      },
      { type: "h3", text: "AI-powered upsell recommendations" },
      {
        type: "p",
        text: "AgenQ introduced contextual upgrade recommendations inside the workflow, based on user behaviour and product usage. The result was a 10% increase in upsell revenue with no additional sales headcount.",
      },
      { type: "h3", text: "AI-assisted claims filing" },
      {
        type: "p",
        text: "NINA guided users through claims workflows conversationally, validated information before submission, and reduced workflow abandonment — producing 20% faster claims resolution, fewer filing errors, and lower support ticket volume.",
      },

      { type: "h2", text: "Why AI-guided workflows matter" },
      {
        type: "p",
        text: "Insurance software is one of the most workflow-heavy categories in enterprise SaaS. When workflows fail, support costs increase, claims processing slows, customers become frustrated, and revenue opportunities are lost.",
      },
      {
        type: "p",
        text: "Modern platforms are shifting from static software experiences to AI-guided workflows that improve onboarding, claims processing, and support efficiency. Instead of expecting users to learn complicated systems, companies are embedding AI agents directly inside workflows to guide execution in real time. That shift is quickly becoming the new standard for enterprise software.",
      },
    ],
    faq: [],
    sources: [],
  },

  {
    slug: "best-ai-saas-automation-platform",
    sourceUrl: "https://agenq.com/blogs/best-ai-saas-automation-platform/",
    title: "Best AI Automation SaaS Platform: AgenQ Dashboard",
    excerpt:
      "Dashboard V2 puts every agent you deploy behind one control surface — persona settings, voice integration, and per-agent behaviour — on a Next.js and React 19 foundation built to scale across business operations.",
    date: "2026-03-13",
    dateLabel: "March 13, 2026",
    author: "AgenQ Team",
    authorRole: "AgenQ",
    readTime: "4 min read",
    tags: ["Product", "Automation"],
    cover: "dashboard",
    subhead: "AgenQ Dashboard V2, explained.",
    body: [
      {
        type: "p",
        text: "As AI capabilities expand, managing multiple agents, crafting their personas, and configuring their voices quickly becomes a complex challenge. That is where **AgenQ Dashboard V2** comes in — a platform designed to give businesses and developers complete control over their AI ecosystem. Whether you are building customer support agents, virtual educators, or voice assistants, AgenQ acts as your centralised command center.",
      },

      { type: "h2", text: "Centralized agent control" },
      {
        type: "p",
        text: "Managing AI agents shouldn’t require deep technical expertise. Dashboard V2 is built around a simple, intuitive interface that prioritises user experience: from creating agents to managing integrations, everything is unified in one place.",
      },
      {
        type: "p",
        text: "Built on Next.js with modern UI frameworks and smooth animation, the platform delivers a fast, responsive experience — and makes it easier for businesses to scale their AI operations.",
      },

      { type: "h2", text: "Customize behaviour with persona control" },
      {
        type: "p",
        text: "An AI system is only as effective as the instructions behind it. AgenQ allows precise customisation of agent behaviour through three configuration surfaces:",
      },
      {
        type: "ul",
        items: [
          "**Custom personas** — define tone, behaviour, and objectives for each agent.",
          "**Welcome messages** — create engaging first impressions with personalised greetings.",
          "**Security and access control** — restrict access using domain and IP configuration for secure deployment.",
        ],
      },

      { type: "h2", text: "Voice AI integration" },
      {
        type: "p",
        text: "Voice-enabled AI is rapidly becoming the default mode of digital interaction. Dashboard V2 integrates advanced voice technology to bring agents to life:",
      },
      {
        type: "ul",
        items: [
          "**Kokoro TTS (private)** — high-quality, private voice generation with a wide range of options.",
          "**Public and premium voices** — integration with ElevenLabs and Google Text-to-Speech.",
          "**Smart voice filtering** — select voices by gender, tone, and use case in a few clicks.",
        ],
      },

      { type: "h2", text: "Built for scale" },
      {
        type: "p",
        text: "Performance is critical for any AI system. Dashboard V2 is engineered on Next.js 15 and React 19, giving it fast load times, real-time updates, and reliable performance at scale — whether you are managing a handful of agents or hundreds of enterprise deployments.",
      },

      { type: "h2", text: "Why AgenQ stands out" },
      {
        type: "p",
        text: "Unlike traditional AI tools, AgenQ provides centralised agent management, advanced customisation, built-in voice integration, and a scalable, high-performance architecture — a complete solution for businesses looking to adopt AI efficiently.",
      },

      { type: "h2", text: "Getting started" },
      {
        type: "p",
        text: "Dashboard V2 lets you create agents, customise behaviour and voice, and deploy at scale. It is more than a tool — it is a complete automation platform built for modern businesses, simplifying complexity so AI deployment can actually scale.",
      },
    ],
    faq: [],
    sources: [],
  },
];

/** Every tag in use, in first-appearance order, for the filter row. */
export const CATEGORIES = [
  "All",
  ...POSTS.flatMap((p) => p.tags).filter((t, i, all) => all.indexOf(t) === i),
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

/** Route for a post's page on this site. */
export function postHref(post) {
  return `/blog/${post.slug}`;
}
