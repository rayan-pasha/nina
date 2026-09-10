"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import BackedBy from "./BackedBy";
import Walkthrough from "./Walkthrough";
import { InsuranceMock, SaasMock } from "./VerticalMock";
import { STUDIO, LEDGERLY } from "@/lib/walkthroughs";
import {
  ASKS,
  STEPS,
  STEPS_SUBHEAD,
  BOUNDARIES,
  BOUNDARIES_SUBHEAD,
  BOUNDARIES_NOTE,
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

/** Keyed by VERTICALS[].mock so the data file names an illustration without
 *  importing a component. */
const VERTICAL_MOCKS = { insurance: InsuranceMock, saas: SaasMock };

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
  "shield-check": (
    <>
      <path d="M12 2.9 4.5 5.7v6c0 4.4 3.2 8 7.5 8.8 4.3-.8 7.5-4.4 7.5-8.8v-6L12 2.9Z" />
      <path d="m8.8 11.7 2.4 2.4 4.1-4.4" />
    </>
  ),

  // The four boundary icons. Each pairs line art with one solid brand shape,
  // so the thing being asserted (the approval, the authorised step) reads
  // first at the 40px size these render at.
  "person-check": (
    <>
      <circle cx="9.8" cy="7.8" r="3.5" />
      <path d="M3.4 20.2a6.6 6.6 0 0 1 10.2-5.5" />
      <circle cx="16.8" cy="16.8" r="4.2" fill="currentColor" stroke="none" />
      <path
        d="m15 16.9 1.3 1.3 2.4-2.7"
        stroke="var(--color-paper)"
        strokeWidth="1.6"
      />
    </>
  ),
  approved: (
    <>
      <rect
        x="8.7"
        y="2.6"
        width="6.6"
        height="6.6"
        rx="1.7"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="m10.6 5.9 1.2 1.2 2.3-2.4"
        stroke="var(--color-paper)"
        strokeWidth="1.6"
      />
      <path d="M12 9.2v2.2" />
      <path d="M5.6 14.2v-1.3a1.5 1.5 0 0 1 1.5-1.5h9.8a1.5 1.5 0 0 1 1.5 1.5v1.3" />
      <path d="M12 11.4v3" />
      <rect x="3.3" y="14.4" width="4.6" height="4.6" rx="1.3" />
      <circle cx="12" cy="16.7" r="2.3" />
      <rect x="16.1" y="14.4" width="4.6" height="4.6" rx="1.3" />
    </>
  ),
  cloud: (
    <>
      {/* Closed and symmetric, sitting clear of the bars below. An open arc
          left its two ends pointing at them and the pair read as one shape. */}
      <path d="M7 10.4a3.1 3.1 0 0 1 .5-6.1 4.4 4.4 0 0 1 8.2 0 3.1 3.1 0 0 1 .5 6.1Z" />
      {/* Narrower than the cloud above them, or the two read as one block. */}
      <rect x="7.4" y="13.6" width="9.2" height="3.1" rx="1.1" />
      <rect x="7.4" y="17.6" width="9.2" height="3.1" rx="1.1" />
      <path d="M9.7 15.15h.01M9.7 19.15h.01" />
      <path d="M11.8 15.15h2.8M11.8 19.15h2.8" />
    </>
  ),
  "lock-doc": (
    <>
      <path d="M9.4 3.4h5.9l3.4 3.4v11a1.8 1.8 0 0 1-1.8 1.8H9.4a1.8 1.8 0 0 1-1.8-1.8V5.2a1.8 1.8 0 0 1 1.8-1.8Z" />
      <path d="M15.1 3.5v3.5h3.5" />
      <path d="M11.4 9.6h4.2M11.4 12.4h4.2" />
      {/* Filled with the badge's own background so the lock knocks a clean
          hole in the page behind it rather than crossing its lines. */}
      <rect
        x="2.6"
        y="13.4"
        width="8.4"
        height="6.8"
        rx="1.7"
        fill="var(--color-brand-soft)"
      />
      <path d="M4.9 13.3v-1.8a1.9 1.9 0 0 1 3.8 0v1.8" />
      <circle cx="6.8" cy="16.4" r="1" />
      <path d="M6.8 17.4v1.2" />
    </>
  ),
};

/** The solid check that opens each card's assurance line. */
function CheckBadge() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-[18px] w-[18px] shrink-0 text-brand"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path
        d="m6.2 10.2 2.4 2.4 5.2-5.4"
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

/** The size each demo page is authored for. It sets its own minimum at
 *  880x500, so it has to be given real room and then scaled down. */
const DEMO_W = 1120;
const DEMO_H = 630;

/**
 * One of the silent workflow demos, scaled to fit the card.
 *
 * The demo is a whole page rather than a component, so it runs in an iframe.
 * It can't be made to fit by giving the iframe a percentage width — the page
 * inside has a hard 880px minimum and would just clip — so the frame is laid
 * out at full size and scaled by the ratio the card actually has. That ratio
 * is measured rather than assumed, since the card is fluid.
 */
function DemoFrame({ src, title }) {
  const wrap = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / DEMO_W)
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-tint/40"
    >
      <iframe
        src={src}
        title={title}
        // Decorative: the quote beneath says what the demo shows, and the
        // frame is not somewhere a keyboard user should land.
        tabIndex={-1}
        aria-hidden="true"
        scrolling="no"
        className="absolute left-0 top-0 origin-top-left border-0"
        style={{
          width: DEMO_W,
          height: DEMO_H,
          transform: `scale(${scale})`,
          // Hidden until measured, so it can't flash at full size first.
          visibility: scale ? "visible" : "hidden",
        }}
      />
    </div>
  );
}

/** How long each ask holds before the card turns over. */
const ASK_HOLD = 5000;

/** Step control for the ask carousel. `dir` is -1 or 1. */
function AskArrow({ dir, onClick, side }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? "Previous example" : "Next example"}
      // Two stops rather than one: the copy under the media takes up a much
      // bigger share of a narrow card, so the media's centre sits at ~27% of
      // the card on mobile and ~40% on desktop.
      className={`absolute top-[27%] z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper/90 text-slate shadow-soft backdrop-blur transition-all duration-200 hover:border-brand-2/40 hover:text-brand active:scale-95 sm:top-[40%] sm:h-11 sm:w-11 ${side}`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={`h-4 w-4 ${dir === -1 ? "rotate-180" : ""}`}
      >
        <path
          d="m6 3 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/**
 * The three asks share one card that cycles between them.
 *
 * All three slides stay mounted in the same grid cell and crossfade, rather
 * than swapping one out for the other: the card is then always as tall as the
 * tallest slide, so nothing below it shifts when it turns over.
 *
 * The timer is keyed on `active`, so clicking a dot restarts the full hold
 * instead of leaving a part-spent one running.
 */
function AskCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % ASKS.length),
      ASK_HOLD
    );
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion]);

  // Wraps in both directions, so back from the first lands on the last.
  const step = (dir) => () =>
    setActive((i) => (i + dir + ASKS.length) % ASKS.length);

  return (
    <div
      // Hovering or tabbing in holds the current slide, so it can't change
      // out from under someone mid-sentence.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="card relative grid overflow-hidden">
        {/* Sat at 34% rather than the card's midpoint: the copy below the media
            pulls the true centre down past the image the arrows belong to. */}
        <AskArrow dir={-1} side="left-3 sm:left-5" onClick={step(-1)} />
        <AskArrow dir={1} side="right-3 sm:right-5" onClick={step(1)} />

        {ASKS.map((ask, i) => {
          const on = i === active;

          return (
            <motion.article
              key={ask.quote}
              className="col-start-1 row-start-1"
              style={{ pointerEvents: on ? "auto" : "none" }}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
              aria-hidden={!on}
            >
              {/* One column at every width, so the copy always sits under the
                  media. Capped rather than full-bleed: at the card's full
                  1104px a 16/9 box would stand over 600px tall on its own. */}
              <div className="mx-auto max-w-3xl p-6 text-center sm:p-7">
                <DemoFrame src={ask.demo} title={ask.quote} />
                <p className="mt-7 text-[19px] font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[21px]">
                  {ask.quote}
                </p>
                {/* Held narrower than the media above it: centred text over the
                    full 712px runs to a measure that's tiring to read. */}
                <p className="mx-auto mt-3 max-w-xl text-[15.5px] leading-relaxed">
                  {ask.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-1">
        {ASKS.map((ask, i) => (
          <button
            key={ask.quote}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${ask.quote}`}
            aria-current={i === active}
            // The bar is 8px tall; the button carries the 44px tap target.
            className="group flex h-11 items-center px-1.5"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-brand"
                  : "w-2 bg-line group-hover:bg-mute/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
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
              Users say what they need, AgenQ gets it done inside your product
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
                They signed up to get something done. Instead, they search the
                docs, watch tutorials, or wait for help.
              </p>
              <p className="mt-5 max-w-[30rem] text-[17px] font-medium leading-relaxed text-ink">
                The expertise exists. It just isn&apos;t there when they need
                it.
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

          <Reveal>
            <div className="mt-14">
              <AskCarousel />
            </div>
          </Reveal>

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

          {/* Same four-up card grid as the boundaries section. The numbered
              badges carry the sequence that the connector arrows used to, so
              the steps no longer need their own column template. */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card flex h-full flex-col items-center p-7 text-center sm:p-8"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-[13px] font-semibold text-white">
                    {i + 1}
                  </span>

                  <div className="mt-5 grid h-20 w-20 place-items-center rounded-full bg-brand-soft text-brand">
                    <StepIcon name={s.icon} className="h-10 w-10" />
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold leading-snug tracking-[-0.025em] text-ink">
                    {s.title}
                  </h3>

                  {/* mt-auto pins the rule so the four bodies start on one
                      line however the titles above them fall. */}
                  <div className="mt-auto w-full pt-6">
                    <div className="h-px w-full bg-line" />
                    <p className="mt-5 text-[14.5px] leading-relaxed text-slate">
                      {s.body}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

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
            {VERTICALS.map((v, i) => {
              const Mock = VERTICAL_MOCKS[v.mock];
              return (
              <Reveal key={v.title} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card group h-full overflow-hidden"
                >
                  <Link href={v.href} className="flex h-full flex-col">
                    {/* Fixed ratio rather than a fixed height: the drawn scene
                        has to keep its proportions or the panels crop. */}
                    <div className="aspect-[566/354] w-full border-b border-line">
                      <Mock />
                    </div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The boundaries you set ───────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            {/* Broken at the phrase from sm up. Left to wrap on its own the
                second line keeps only "you set." and the emphasis strands. */}
            <h2 className="display mx-auto max-w-3xl text-center text-[1.95rem] sm:text-[2.5rem]">
              AgenQ works inside
              <br className="hidden sm:block" />{" "}
              the boundaries{" "}
              {/* Held together so narrow screens don't strand "set." alone on
                  a third line. */}
              <span className="text-grad whitespace-nowrap">you set.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-center text-[16.5px] leading-relaxed">
              {BOUNDARIES_SUBHEAD}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BOUNDARIES.map((b, i) => (
              <Reveal key={b.icon} delay={i * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card flex h-full flex-col items-center p-7 text-center sm:p-8"
                >
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-soft text-brand">
                    <StepIcon name={b.icon} className="h-10 w-10" />
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold leading-snug tracking-[-0.025em] text-ink">
                    {b.lines[0]}
                    <br />
                    {b.lines[1]}
                  </h3>

                  {/* mt-auto pins the rule and its line to the bottom, so the
                      four assurances sit on one row however the titles fall. */}
                  <div className="mt-auto w-full pt-6">
                    <div className="h-px w-full bg-line" />
                    <p className="mt-5 flex items-center justify-center gap-2 text-[14.5px] leading-snug text-slate">
                      <CheckBadge />
                      {b.assurance}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          {/* Sits on the same gutter as the card grid, so it reads as the row's
              footer rather than a separate band. */}
          <Reveal delay={0.34}>
            <div className="mt-5 flex items-start gap-5 rounded-3xl border border-line bg-tint/70 p-6 sm:items-center sm:gap-6 sm:p-7">
              <span className="shrink-0 text-brand">
                <StepIcon name="shield-check" className="h-11 w-11" />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-ink">
                  {BOUNDARIES_NOTE.title}
                </p>
                <p className="mt-1.5 max-w-[46rem] text-[15px] leading-relaxed">
                  {BOUNDARIES_NOTE.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
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
