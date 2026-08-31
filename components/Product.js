"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import BackedBy from "./BackedBy";
import Walkthrough from "./Walkthrough";
import { STUDIO, LEDGERLY } from "@/lib/walkthroughs";
import {
  ASKS,
  STEPS,
  STEPS_SUBHEAD,
  STEPS_NOTE,
  VERTICALS,
} from "@/lib/product";
import { LINKS, newTab } from "@/lib/links";

/**
 * The Product page, built from the AgenQ Home design file: same sections, same
 * copy, same order — rendered in this site's type, colour and motion.
 *
 * Two substitutions the design file called for as static images are live
 * components instead: the "Backed by" row is the infinite logo marquee, and
 * the two large demo panels run the scripted NINA walkthroughs rather than
 * showing a screenshot of one.
 */

/** Stand-in for a screenshot that doesn't exist yet, labelled with what goes
 *  there. Swap the whole element for an <img> when the asset arrives. */
function MediaSlot({ label, className = "" }) {
  return (
    <div
      className={`grid place-items-center rounded-3xl border border-line bg-tint/60 ${className}`}
    >
      <p className="max-w-[20rem] px-6 text-center text-[13px] leading-relaxed text-mute">
        {label}
      </p>
    </div>
  );
}

const STEP_ICONS = {
  bubble: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L4 21l1.1-4.4A8.4 8.4 0 1 1 21 11.5Z" />
      <circle cx="8.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="11.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 9-11.5H12.5L13 2Z" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.8 2.8L16 9.5" />
    </>
  ),
  shield: <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />,
};

function StepIcon({ name, className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {STEP_ICONS[name]}
    </svg>
  );
}

/** The line and chevron between two steps. Only rendered from lg up, where
 *  the four steps sit in a row. */
function Connector() {
  return (
    <svg
      viewBox="0 0 80 10"
      className="w-20 text-brand-2/60"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 5h68" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="m66 1.5 4 3.5-4 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h10m0 0L8.5 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** No backend to post to, so submitting opens the visitor's mail client with
 *  their address already in the body. Swap for a real form service later. */
function SignupForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Please send me the 60-second overview.\n\n${email}`
    );
    window.location.href = `mailto:founder@agenq.com?subject=${encodeURIComponent(
      "Send me the AgenQ overview"
    )}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-[29rem] gap-2.5">
      <label className="min-w-0 flex-1">
        <span className="sr-only">Your email address</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-12 w-full rounded-full border border-line bg-paper px-5 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-mute focus:border-brand-2/50 focus:ring-4 focus:ring-brand-2/10"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-6 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
      >
        Send It
      </button>
    </form>
  );
}

export default function Product() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" />
        {/* The wash's lower blooms are positioned at 92–94% of the box, so they
            still carry colour at the bottom edge and would cut off as a hard
            line. Fade the last stretch into the page instead. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper" />

        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            {/* Two lines, broken at the sentence. The first half measures
                ~936px at the lg size, so the break is only forced from lg up
                where there's room for it; below that it wraps on its own. */}
            <h1 className="display mx-auto text-[clamp(2rem,8.5vw,2.5rem)] sm:text-[clamp(2.4rem,5.4vw,3rem)] lg:text-[3.4rem]">
              Your Product Shouldn&apos;t Just Answer.
              <br className="hidden lg:block" />{" "}
              <span className="text-grad">It Should Act</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              Users ask for what they need. AgenQ completes it, inside your
              product.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.watchDemo}
                {...newTab}
                className="group inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[9px] transition-transform duration-300 group-hover:scale-110">
                  ▷
                </span>
                Watch 60-sec Demo
              </a>
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="inline-flex min-h-[52px] items-center rounded-full border border-line bg-paper px-7 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
              >
                Book a Demo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <BackedBy />
        </Reveal>
      </section>

      {/* ── The demo panel ───────────────────────────────────────────── */}
      <section className="px-5 pb-24 pt-8 sm:pb-28 sm:pt-12">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <Walkthrough config={STUDIO} />
          </div>
        </Reveal>
      </section>

      {/* ── Nobody signed up to learn your software ──────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
                Nobody Signed Up to{" "}
                <span className="text-grad">Learn Your Software.</span>
              </h2>
              <p className="mt-6 max-w-[30rem] text-[16.5px] leading-relaxed">
                They signed up to get something done. Documentation explains.
                Training calls teach. Support answers questions. But all of them
                ask the user to stop working and learn the system.
              </p>
              <p className="mt-5 max-w-[30rem] text-[17px] font-medium leading-relaxed text-ink">
                The expertise already exists. It just isn&apos;t there when the
                user needs it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {/* Natural ratio rather than a fixed box: the typed line at the
                bottom of the screen is the whole point of the shot, and a
                crop would take it. */}
            <img
              src="/images/nobody-signed-up.webp"
              alt="A user at their desk mid-task in a CRM, having typed “I just want to set this customer up for annual billing”"
              width="1577"
              height="997"
              className="block h-auto w-full rounded-3xl border border-line shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* ── From "How do I?" to "Done." ──────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] sm:text-[2.5rem]">
              From “How Do I?” to <span className="text-grad">“Done.”</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5">
            {ASKS.map((ask, i) => (
              <Reveal key={ask.quote} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className={`card grid items-center gap-8 p-6 sm:p-7 lg:gap-12 ${
                    // The column template flips with the row, not just the
                    // order. `order` only moves a child between columns, so
                    // reusing one template would hand the media the narrow
                    // column on alternating rows and shrink that card.
                    i % 2 === 1
                      ? "lg:grid-cols-[1fr_1.3fr]"
                      : "lg:grid-cols-[1.3fr_1fr]"
                  }`}
                >
                  {/* Alternating sides, but the media stays first in the DOM on
                      small screens so every row reads image-then-text. */}
                  <MediaSlot
                    label={ask.media}
                    className={`aspect-[16/9] w-full ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  />
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[21px]">
                      {ask.quote}
                    </p>
                    <p className="mt-3 text-[15.5px] leading-relaxed">
                      {ask.body}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-[17px] font-medium leading-relaxed text-ink sm:text-[18.5px]">
              First day or fifth year, the user asks for the outcome, not the
              instructions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── How AgenQ gets it done ───────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] sm:text-[2.5rem]">
              How AgenQ <span className="text-grad">Gets It Done</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-center text-[16.5px] leading-relaxed">
              {STEPS_SUBHEAD}
            </p>
          </Reveal>

          {/* Seven columns at lg so the connectors are real grid items rather
              than absolutely positioned guesses. They're display:none below
              lg, which takes them out of the grid entirely, so the steps fall
              back to a plain two-up and then a single column. */}
          <div className="mt-14 grid items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-2">
            {STEPS.map((s, i) => (
              <Fragment key={s.title}>
                <Reveal delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-[13px] font-semibold text-white">
                      {i + 1}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mt-4 grid h-32 w-32 place-items-center rounded-3xl border border-line bg-paper text-brand shadow-soft transition-shadow duration-300 hover:border-brand-2/40 hover:shadow-[0_20px_44px_-20px_rgba(13,15,44,0.32)]"
                    >
                      <StepIcon name={s.icon} className="h-12 w-12" />
                    </motion.div>
                    <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 max-w-[15rem] text-[14.5px] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>

                {i < STEPS.length - 1 && (
                  // 107px clears the badge (32) + its gap (16) and lands on the
                  // icon card's centre line (64), less half the arrow.
                  <div className="hidden lg:mt-[107px] lg:block">
                    <Connector />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 flex items-start gap-5 rounded-3xl border border-line bg-paper p-6 sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <StepIcon name="shield" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-ink">
                  {STEPS_NOTE.title}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed">
                  {STEPS_NOTE.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── A closer look ────────────────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
                A Closer <span className="text-grad">Look</span>
              </h2>
              <p className="mt-6 text-[16.5px] leading-relaxed">
                AgenQ runs inside your product, where the work is already
                happening. The user stays in context while AgenQ moves the
                workflow forward.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-12 max-w-5xl">
              <Walkthrough config={LEDGERLY} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Two claims, side by side ─────────────────────────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="aurora h-full rounded-[1.75rem] border border-line p-8 sm:p-12">
              <h2 className="display text-[1.5rem] sm:text-[1.85rem]">
                It Runs on the Workflows You Already Have.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed">
                AgenQ works from your workflows, product rules, documentation,
                FAQs, and training material.
              </p>
              <p className="mt-5 text-[16.5px] font-medium text-ink">
                No rebuild. No data migration. No separate portal.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-ink p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),transparent)] blur-2xl" />
              <div className="relative">
                <h2 className="display text-[1.5rem] !text-white sm:text-[1.85rem]">
                  Most Assistants Stop at the Answer.
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/60">
                  An assistant tells the user to open Settings and select
                  Integrations. AgenQ opens Settings, carries out the workflow,
                  and tells them what changed.
                </p>
                <p className="mt-5 text-[17px] font-medium leading-relaxed text-white">
                  The user didn&apos;t want directions. They wanted it done.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Where teams use AgenQ ────────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Where Teams <span className="text-grad">Use AgenQ</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card group h-full overflow-hidden"
                >
                  <Link href={v.href} className="flex h-full flex-col">
                    <MediaSlot
                      label={v.media}
                      className="h-[13rem] w-full rounded-none border-0 border-b border-line"
                    />
                    <div className="flex flex-1 flex-col p-7 sm:p-9">
                      <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-brand">
                        {v.title}
                      </h3>
                      <p className="mt-3.5 text-[15.5px] leading-relaxed">
                        {v.body}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
                        {v.cta}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <Arrow />
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Action, with control ─────────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
                Action, <span className="text-grad">With Control.</span>
              </h2>
              <p className="mt-6 max-w-[29rem] text-[16.5px] leading-relaxed">
                Decide what AgenQ can execute on its own, what requires
                confirmation, and where the user needs to step in. Every action
                is recorded and traceable.
              </p>
              <p className="mt-5 max-w-[29rem] text-[17px] font-medium leading-relaxed text-ink">
                Automated where it should be. Human-approved where it matters.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <MediaSlot
              label="Screen: permission settings and an approval prompt"
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Security ─────────────────────────────────────────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
              Built for <span className="text-grad">Security Review</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[16.5px] leading-relaxed">
              AgenQ uses only the knowledge you approve and the workflows you
              permit. Permissions are controlled by your team, with actions
              logged for traceability. Data handling and residency options
              available on request.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[13.5px] font-semibold text-brand">
              SOC 2 in progress
            </span>
          </Reveal>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-line bg-paper p-8 text-center shadow-soft sm:p-12">
            <h2 className="display text-[1.5rem] sm:text-[1.85rem]">
              Not Ready for a Demo?
            </h2>
            <p className="mx-auto mt-4 max-w-[30rem] text-[16px] leading-relaxed">
              Get the 60-second overview and occasional AgenQ updates.
            </p>
            <p className="mt-1.5 text-[14.5px] text-mute">
              No sequence. No sales follow-up.
            </p>
            <SignupForm />
          </div>
        </Reveal>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display text-[2.1rem] sm:text-[3rem]">
              Give Your Users the Outcome,{" "}
              <span className="text-grad">Not the Instructions.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-md text-[16.5px] leading-relaxed">
              See AgenQ execute a real workflow inside your product.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={LINKS.bookMeeting}
              {...newTab}
              className="group mt-9 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gradient-to-r from-brand-2 to-brand px-8 text-[15.5px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
            >
              Book a Live Demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
