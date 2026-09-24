/**
 * Privacy policy copy.
 *
 * Written against what this site actually does rather than from a template:
 * every tool named here is one that really loads (lib/links.js, app/layout.js,
 * components/HubSpot.js), and the things the site doesn't do — accounts, forms,
 * advertising cookies — are stated as plainly as the things it does. If a
 * tracker is ever added or removed, this file is the second edit.
 *
 * Copy supports `**bold**` and `[text](url)`; see components/LegalPage.js.
 */

export const PRIVACY = {
  title: "Privacy Policy",
  // ISO for the <time> element, the readable form for the page.
  updated: "2026-09-24",
  updatedLabel: "September 24, 2026",
  intro:
    "This policy explains what happens to information when you visit agenq.com — what we collect, why, who else sees it, and how to opt out. It is written to be read, not filed away.",

  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      blocks: [
        {
          type: "p",
          text: "AgenQ is a software company based in Toronto, Canada. We build NINA, an AI product assistant that guides and executes work inside other companies' software. For anything in this policy, you can reach us at [founder@agenq.com](mailto:founder@agenq.com).",
        },
        {
          type: "p",
          text: "AgenQ is the **controller** of the information described here — we decide what is collected on this website and why.",
        },
      ],
    },
    {
      id: "what-this-covers",
      heading: "What this policy covers",
      blocks: [
        {
          type: "p",
          text: "This policy covers **agenq.com**, our public marketing website — the pages you are reading now.",
        },
        {
          type: "p",
          text: "It does not cover the AgenQ Studio product at studio.agenq.com, which is a separate application governed by the agreement in place with your organisation. It also does not cover other companies' sites we link to, including YouTube, LinkedIn, X, and our scheduling page. Once you follow a link off this site, that company's privacy policy applies.",
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      blocks: [
        {
          type: "h3",
          text: "Information you choose to give us",
        },
        {
          type: "p",
          text: "This website has no accounts, no sign-up, and no contact form. You share information with us only by deliberately reaching out:",
        },
        {
          type: "ul",
          items: [
            "**Booking a demo.** The \"Book a Demo\" buttons open Koalendar, a third-party scheduling tool. The name, email address, and any notes you enter there are collected by Koalendar and passed to us. We use them to hold the meeting and to follow up about it.",
            "**Emailing or calling us.** If you write to founder@agenq.com or call the number in the footer, we keep the contents of that conversation so we can respond and continue it.",
          ],
        },
        {
          type: "h3",
          text: "Information collected automatically",
        },
        {
          type: "p",
          text: "When you browse the site, our analytics tools record things like which pages you viewed and in what order, which page referred you, which buttons you clicked, roughly where you are (city level, worked out from your IP address), and your device, browser, screen size, and language.",
        },
        {
          type: "p",
          text: "Our hosting provider also keeps short-lived server logs — IP address, request time, and browser identifier — which are used to serve the site and to block automated abuse.",
        },
        {
          type: "p",
          text: "One thing worth saying plainly: the search boxes on the blog and documentation pages run entirely in your browser. What you type into them is never sent to us or to anyone else.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "Cookies are small files a site stores in your browser. We use them to measure how the site is used and to keep it secure. **We do not use advertising cookies**, and nothing here follows you around other websites to show you ads.",
        },
        {
          type: "table",
          head: ["Set by", "What it does", "How long it lasts"],
          rows: [
            [
              "Google Analytics",
              "Tells a returning visitor from a new one and groups page views into a single visit, so we can count real sessions rather than raw hits.",
              "Up to 2 years",
            ],
            [
              "HubSpot",
              "Recognises a returning visitor and, if you later contact us, links your earlier visits to that conversation so we know what you had already read.",
              "Session to 6 months",
            ],
            [
              "Cloudflare",
              "Distinguishes real visitors from automated traffic. Required for the site to be served securely.",
              "Session to 30 minutes",
            ],
          ],
        },
        {
          type: "p",
          text: "You can clear or block cookies in your browser settings at any time; the site will continue to work without them. See [Your choices](#your-choices) below for how to opt out of analytics specifically.",
        },
      ],
    },
    {
      id: "how-we-use-it",
      heading: "How we use this information",
      blocks: [
        {
          type: "ul",
          items: [
            "**To understand what works.** Which pages get read, which explanations land, and where people lose interest — so we write better ones.",
            "**To respond to you.** To reply to an email, hold a booked meeting, and follow up about it.",
            "**To keep the site working.** To find broken pages and slow ones, and to block abusive or automated traffic.",
          ],
        },
        {
          type: "p",
          text: "We do not use this information to make automated decisions about you, and we do not build advertising profiles.",
        },
      ],
    },
    {
      id: "legal-bases",
      heading: "Our legal bases (UK and EEA visitors)",
      blocks: [
        {
          type: "p",
          text: "If you are in the United Kingdom or the European Economic Area, we rely on the following bases under the GDPR:",
        },
        {
          type: "ul",
          items: [
            "**Legitimate interests** — to measure how our website is used, to keep it secure, and to follow up on enquiries we receive. We balance these against your rights and use the least identifying data that answers the question.",
            "**Consent** — where consent is required for non-essential cookies. Where we ask for it, you can withdraw it at any time, and withdrawing it does not affect what happened before.",
            "**Taking steps at your request** — to arrange and hold a meeting you booked.",
          ],
        },
      ],
    },
    {
      id: "who-we-share-with",
      heading: "Who else sees it",
      blocks: [
        {
          type: "p",
          text: "**We do not sell personal information, and we do not share it for cross-context behavioural advertising.** We have never done so.",
        },
        {
          type: "p",
          text: "We use a small number of service providers who process information on our behalf, under contracts that limit them to doing so for us:",
        },
        {
          type: "table",
          head: ["Provider", "What we use it for", "Its privacy policy"],
          rows: [
            [
              "Google (Google Analytics)",
              "Website analytics",
              "[policies.google.com/privacy](https://policies.google.com/privacy)",
            ],
            [
              "HubSpot",
              "Customer records and website analytics",
              "[legal.hubspot.com/privacy-policy](https://legal.hubspot.com/privacy-policy)",
            ],
            [
              "Cloudflare",
              "Website hosting, delivery, and security",
              "[cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/)",
            ],
            [
              "Koalendar",
              "Meeting scheduling",
              "[koalendar.com/privacy](https://koalendar.com/privacy)",
            ],
          ],
        },
        {
          type: "p",
          text: "Beyond that, we would disclose information only if the law required it, or if AgenQ were involved in a merger, acquisition, or sale of assets — in which case we would say so here before your information became subject to a different policy.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "Where information goes",
      blocks: [
        {
          type: "p",
          text: "AgenQ is in Canada, and the providers above operate in the United States and other countries. Information about your visit is therefore stored and processed outside your country, where local authorities may have rights of access under their own laws.",
        },
        {
          type: "p",
          text: "Where information moves out of the UK or EEA, our providers rely on the European Commission's Standard Contractual Clauses or an equivalent approved safeguard.",
        },
      ],
    },
    {
      id: "retention",
      heading: "How long we keep it",
      blocks: [
        {
          type: "ul",
          items: [
            "**Analytics data** is kept for the retention period configured in Google Analytics, after which Google deletes the visitor-level records. Aggregate reports — counts and trends with no individual in them — are kept indefinitely.",
            "**Contact records** from a demo booking or an email are kept while there is a realistic prospect of working together, and then deleted on request.",
            "**Server logs** are kept briefly by our hosting provider for security and troubleshooting.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Depending on where you live, you have some or all of the following rights over the information we hold about you:",
        },
        {
          type: "ul",
          items: [
            "**Access** — ask what we hold and get a copy.",
            "**Correction** — have something inaccurate fixed.",
            "**Deletion** — ask us to erase it.",
            "**Withdraw consent** — where we relied on your consent.",
            "**Object or restrict** — tell us to stop a particular use, including our use of legitimate interests.",
            "**Portability** — receive what you gave us in a machine-readable form.",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these, email [founder@agenq.com](mailto:founder@agenq.com). We will respond within 30 days, and we will not charge you or treat you differently for asking. We may need to confirm your identity first, which for a website visit usually means asking which browser and approximate dates to look for.",
        },
        {
          type: "p",
          text: "If you are not satisfied with our answer, you can complain to the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca/), or to the data protection authority where you live.",
        },
      ],
    },
    {
      id: "your-choices",
      heading: "Your choices",
      blocks: [
        {
          type: "ul",
          items: [
            "**Block cookies in your browser.** Every major browser lets you block or delete them per site. The site works normally without them.",
            "**Opt out of Google Analytics everywhere** with Google's [browser opt-out add-on](https://tools.google.com/dlpage/gaoptout), which stops Analytics on every site you visit, not just ours.",
            "**Use a content blocker.** We do not detect, penalise, or work around blockers.",
          ],
        },
        {
          type: "p",
          text: "Browsers send a **Do Not Track** signal inconsistently and there is no agreed standard for honouring it, so we do not currently respond to it. The options above are effective regardless.",
        },
      ],
    },
    {
      id: "security",
      heading: "Security",
      blocks: [
        {
          type: "p",
          text: "This website is served over HTTPS only, with HSTS enabled, so traffic between your browser and the site is encrypted and cannot be downgraded. The site itself is static — there is no database behind it and no place for your information to be stored here.",
        },
        {
          type: "p",
          text: "We never ask for payment details, passwords, or identification documents on this website. If a page claiming to be ours does, it is not ours; please tell us.",
        },
      ],
    },
    {
      id: "children",
      heading: "Children",
      blocks: [
        {
          type: "p",
          text: "This site sells business software and is not directed at children. We do not knowingly collect information from anyone under 16. If you believe a child has given us information, email us and we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "When this policy changes, the revised version is posted on this page with a new date at the top. If a change materially affects what we collect or who receives it, we will say so prominently rather than leaving you to spot the difference.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      blocks: [
        {
          type: "p",
          text: "Questions, requests, or corrections about this policy:",
        },
        {
          type: "ul",
          items: [
            "Email: [founder@agenq.com](mailto:founder@agenq.com)",
            "Phone: [+1 (416) 316-7435](tel:+14163167435)",
            "AgenQ, Toronto, Canada",
          ],
        },
      ],
    },
  ],
};
