import "./ezlynx.css";
import EzlynxDemo from "@/components/EzlynxDemo";
import RevealOnScroll from "@/components/RevealOnScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// TODO: agar lib/links.js me booking URL pehle se hai to wahi import karo
const BOOK_URL = "https://koalendar.com/e/meet-with-varun-mishra?duration=30";
const PAGE_URL = "https://agenq.com/use-cases/ezlynx/";

const FAQS = [
  {
    q: "Does AgenQ replace EZLynx?",
    a: "No. AgenQ works inside EZLynx. EZLynx remains your agency management system and system of record.",
  },
  {
    q: "Who is AgenQ for?",
    a: "AgenQ is for new employees learning EZLynx and experienced employees who need help with tasks they do not perform often.",
  },
  {
    q: "Can employees type or speak to AgenQ?",
    a: "Both. Employees can type a question or say it out loud in plain English.",
  },
  {
    q: "Does AgenQ make changes in EZLynx?",
    a: "No. AgenQ shows the steps and explains what to do. Your employees remain in control and complete the work.",
  },
  {
    q: "How is AgenQ different from a training video?",
    a: "A training video explains a general process. AgenQ shows the exact next step on the screen the employee is using for the task they are completing.",
  },
  {
    q: "Can AgenQ help onboard new employees?",
    a: "Yes. New employees learn EZLynx by completing real agency work with AgenQ instead of relying only on training sessions, videos and documents.",
  },
  {
    q: "Is AgenQ affiliated with EZLynx or Applied Systems?",
    a: "No. AgenQ is an independent company and is not affiliated with or endorsed by EZLynx or Applied Systems.",
  },
];

export const metadata = {
  title: "AgenQ for EZLynx | EZLynx Training on Your Screen",
  description:
    "AgenQ trains employees inside EZLynx. It shows where to click and explains each step while they complete real work. See AgenQ inside EZLynx.",
  keywords:
    "EZLynx training, EZLynx new employee training, how to use EZLynx, EZLynx tutorial, EZLynx workflow help, AI training for EZLynx",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AgenQ for EZLynx | EZLynx Training on Your Screen",
    description:
      "Learn EZLynx while doing real work. AgenQ shows employees where to click and explains each step on screen.",
    url: PAGE_URL,
    siteName: "AgenQ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AgenQ for EZLynx | EZLynx Training on Your Screen",
    description:
      "Learn EZLynx while doing real work. AgenQ shows employees where to click and explains each step on screen.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${PAGE_URL}#software`,
      name: "AgenQ for EZLynx",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "On screen EZLynx training that shows insurance agency employees where to click and explains each step while they complete real work.",
      publisher: { "@id": "https://agenq.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AgenQ",
          item: "https://agenq.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Use Cases",
          item: "https://agenq.com/resources/use-cases/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AgenQ for EZLynx",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "AgenQ for EZLynx | EZLynx Training on Your Screen",
      about: { "@id": `${PAGE_URL}#software` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function EzlynxPage() {
  return (
    <>
      <Nav />
      <div className="ezlynx-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealOnScroll />
        <div id="main">
          <section className="hero section">
            <div className="aurora" aria-hidden="true"></div>
            <div className="hero-content reveal">
              <p className="eyebrow">AGENQ FOR EZLYNX</p>
              <h1>
                Learn EZLynx While
                <br />
                <span className="text-gradient">Doing the Real Work</span>
              </h1>
              <p className="hero-copy">
                Employees type or say what they need to do. AgenQ shows where to
                click and explains each step on the EZLynx screen.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#demo">
                  <span className="play-dot" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m9 7 8 5-8 5Z" />
                    </svg>
                  </span>
                  See AgenQ Inside EZLynx
                </a>
                <a
                  className="button button-secondary"
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Meeting
                </a>
              </div>
              <p className="hero-note">
                No videos to search. No manuals to read. No waiting for a
                colleague.
              </p>
            </div>
            <EzlynxDemo />
          </section>

          <section className="section split-section">
            <div className="split-copy reveal">
              <p className="section-label">WHAT IS AGENQ FOR EZLYNX?</p>
              <h2>
                On Screen Training{" "}
                <span className="text-gradient">Inside EZLynx</span>
              </h2>
              <p className="answer-lead">
                AgenQ for EZLynx is AI training that shows employees where to
                click and explains each step while they complete real agency
                work.
              </p>
              <h3 className="problem-heading">
                Your employees understand insurance. EZLynx is the hard part.
              </h3>
              <p>
                An employee may know that a customer needs a home and auto
                quote. They may not know which screen to open, which information
                is required or what to do when something does not match.
              </p>
              <p>
                They ask an experienced colleague, search for a training video
                or risk making a mistake.
              </p>
              <p className="strong-copy">
                AgenQ gives them help on the screen they are already using, at
                the moment they need it.
              </p>
            </div>
            <div className="help-card reveal">
              <div className="help-screen">
                <div className="mini-top">
                  <span></span>
                  <span></span>
                </div>
                <div className="mini-content">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="guide-popover">
                  <span className="guide-kicker">AGENQ</span>
                  <strong>Choose Home and Auto</strong>
                  <p>This starts one combined quote for the customer.</p>
                  <button type="button" tabIndex="-1">
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="section tint-section">
            <div className="section-heading reveal">
              <p className="section-label">ON SCREEN GUIDANCE</p>
              <h2>
                How AgenQ Works{" "}
                <span className="text-gradient">Inside EZLynx</span>
              </h2>
            </div>
            <div className="three-grid">
              <article className="info-card reveal">
                <span className="step-number">1</span>
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 8h10M7 12h7M9 19l-4 2 1-4a8 8 0 1 1 3 2Z" />
                  </svg>
                </div>
                <h3>The employee asks</h3>
                <p>They type or say what they need to do in plain English.</p>
              </article>
              <article className="info-card reveal">
                <span className="step-number">2</span>
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="m5 12 4 4L19 6M4 4h6M4 8h3M14 16h6M17 12h3" />
                  </svg>
                </div>
                <h3>AgenQ shows the way</h3>
                <p>
                  It highlights where to click and explains each step on screen.
                </p>
              </article>
              <article className="info-card reveal">
                <span className="step-number">3</span>
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="5" y="4" width="14" height="17" rx="2" />
                    <path d="M9 4V2h6v2M8.5 12l2 2 4.5-5" />
                  </svg>
                </div>
                <h3>The employee completes it</h3>
                <p>
                  They do the work themselves and learn the workflow by doing
                  it.
                </p>
              </article>
            </div>
          </section>

          <section className="section workflows-section">
            <div className="section-heading reveal">
              <p className="section-label">EVERYDAY AGENCY WORK</p>
              <h2>
                Five EZLynx Workflows{" "}
                <span className="text-gradient">Employees Can Learn</span>
              </h2>
            </div>
            <div className="workflow-grid">
              <article className="workflow-card reveal">
                <span className="workflow-index">01</span>
                <h3>Home and auto quotes</h3>
                <p>
                  Set up the customer, enter risk information, compare carrier
                  results and prepare the proposal.
                </p>
              </article>
              <article className="workflow-card reveal">
                <span className="workflow-index">02</span>
                <h3>Policy changes and endorsements</h3>
                <p>
                  Receive the request, update the customer record, follow the
                  required process and document the outcome.
                </p>
              </article>
              <article className="workflow-card reveal">
                <span className="workflow-index">03</span>
                <h3>Certificates and ID cards</h3>
                <p>
                  Find the correct policy, add certificate holders, create the
                  document and deliver it to the customer.
                </p>
              </article>
              <article className="workflow-card reveal">
                <span className="workflow-index">04</span>
                <h3>Renewals and remarketing</h3>
                <p>
                  Review premium and coverage changes, identify customers who
                  need attention and compare alternatives.
                </p>
              </article>
              <article className="workflow-card workflow-wide reveal">
                <span className="workflow-index">05</span>
                <h3>Policy downloads and matching</h3>
                <p>
                  Review downloaded policies, match them to the correct customer
                  and resolve unmatched information.
                </p>
              </article>
            </div>
          </section>

          <section className="section outcome-section">
            <div className="section-heading reveal">
              <p className="section-label">BUSINESS OUTCOMES</p>
              <h2>
                What AgenQ Means{" "}
                <span className="text-gradient">for Your Agency</span>
              </h2>
            </div>
            <div className="outcome-grid">
              <article className="outcome-card reveal">
                <div className="outcome-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19V6a2 2 0 0 1 2-2h5v15H6a2 2 0 0 0-2 2M20 19V6a2 2 0 0 0-2-2h-5v15h5a2 2 0 0 1 2 2" />
                    <path d="m8 10 1.5 1.5L12 9" />
                  </svg>
                </div>
                <h3>Reduce training cost</h3>
                <p>
                  New employees learn EZLynx while completing real work. Your
                  agency spends less time and money on repetitive training.
                </p>
              </article>
              <article className="outcome-card reveal">
                <div className="outcome-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </div>
                <h3>Give experts time back</h3>
                <p>
                  Experienced employees answer fewer repeated questions. Those
                  hours return to selling and retaining customers.
                </p>
              </article>
              <article className="outcome-card reveal">
                <div className="outcome-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 5 6v5c0 4.8 3 8.3 7 10 4-1.7 7-5.2 7-10V6Z" />
                    <path d="m9 12 2 2 4-5" />
                  </svg>
                </div>
                <h3>Reduce costly mistakes</h3>
                <p>
                  Employees see the correct steps while they work, making
                  avoidable rework and errors less likely.
                </p>
              </article>
            </div>
          </section>

          <section className="section comparison-section">
            <div className="comparison-card reveal">
              <div className="comparison-copy">
                <p className="section-label light-label">
                  TRAINING AT THE MOMENT OF NEED
                </p>
                <h2>
                  Videos Explain.
                  <br />
                  <span>AgenQ Shows the Next Step.</span>
                </h2>
                <p>
                  Videos and manuals teach EZLynx away from the work. Employees
                  must find the right information and remember it when they
                  return to the task.
                </p>
                <p className="comparison-strong">
                  AgenQ trains employees inside EZLynx, on the real screen,
                  while they complete the real task.
                </p>
              </div>
              <div className="comparison-list">
                <div>
                  <span>01</span>
                  <p>
                    <strong>In the workflow</strong>Help appears on the screen
                    where the employee is working.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>For the exact task</strong>Guidance responds to what
                    the employee is doing right now.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Employee controlled</strong>The employee makes every
                    change and remains in control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section security-section">
            <div className="section-heading reveal">
              <p className="section-label">CONTROL AND SECURITY</p>
              <h2>
                Your Agency{" "}
                <span className="text-gradient">Stays in Control</span>
              </h2>
              <p>
                Each AgenQ customer runs in its own private cloud environment.
                Employees make every change in EZLynx themselves.
              </p>
            </div>
            <div className="security-grid">
              <article className="security-card reveal">
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 11V8a5 5 0 0 1 10 0v3" />
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M12 15v2" />
                  </svg>
                </div>
                <h3>Private environment</h3>
                <p>Your AgenQ environment is separate from other customers.</p>
              </article>
              <article className="security-card reveal">
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="m5 3 12 8-5 1 3 6-3 1-3-6-4 4Z" />
                  </svg>
                </div>
                <h3>Employee control</h3>
                <p>Your employee completes the work and makes each change.</p>
              </article>
              <article className="security-card reveal">
                <div className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 8h10M7 12h6M9 20l-4 2 1-4a8 8 0 1 1 3 2Z" />
                    <path d="m14 16 1.5 1.5L19 14" />
                  </svg>
                </div>
                <h3>Clear guidance</h3>
                <p>
                  AgenQ explains the next step before the employee takes it.
                </p>
              </article>
            </div>
          </section>

          <section className="section faq-section" id="faq">
            <div className="faq-layout">
              <div className="faq-intro reveal">
                <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
                <h2>
                  Questions About{" "}
                  <span className="text-gradient">AgenQ for EZLynx</span>
                </h2>
                <p>Clear answers for agency owners, managers and employees.</p>
              </div>
              <div className="faq-list reveal">
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>
                      {f.q}
                      <span>+</span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="section final-cta">
            <div className="reveal">
              <h2>
                Train Your Employees
                <br />
                <span className="text-gradient">Inside EZLynx</span>
              </h2>
              <p>
                Show us which EZLynx workflows slow your team down. We will show
                you AgenQ guiding employees through them.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#demo">
                  See AgenQ Inside EZLynx
                </a>
                <a
                  className="button button-secondary"
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>{" "}
      <Footer />{" "}
    </>
  );
}
