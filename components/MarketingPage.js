"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { LINKS, newTab } from "@/lib/links";

/**
 * Renderer for every Solution, Features, and Use Case page. All of them make
 * the same argument in the same order, so the page is a function of its
 * config in lib/pages.js — problem, cost, fix, outcome.
 *
 * The three middle sections alternate surface (white → ink → white) so a long
 * page still has rhythm without introducing new colours.
 */

function Numbered({ items, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08} className="h-full">
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={`h-full rounded-3xl p-6 sm:p-7 ${
              dark
                ? "border border-white/10 bg-white/[0.03]"
                : "card"
            }`}
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-xl text-[13px] font-semibold ${
                dark
                  ? "bg-brand-2/20 text-brand-3"
                  : "bg-brand-soft text-brand"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`mt-5 text-[16.5px] font-semibold tracking-[-0.01em] ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-2.5 text-[14.5px] leading-relaxed ${
                dark ? "text-white/60" : ""
              }`}
            >
              {item.body}
            </p>
          </motion.article>
        </Reveal>
      ))}
    </div>
  );
}

export default function MarketingPage({ page }) {
  const { eyebrow, headline, accent, subhead, problem, impact, solution, results, closing } = page;

  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>✦</span> {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mx-auto mt-7 max-w-3xl text-[2.1rem] sm:text-[3.25rem]">
              {headline} <span className="text-grad">{accent}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed sm:text-[17.5px]">
              {subhead}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                Book Live Demo
              </a>
              <a
                href={LINKS.watchDemo}
                {...newTab}
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-line bg-paper px-6 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-[9px] text-brand transition-transform duration-300 group-hover:scale-110">
                  ▷
                </span>
                Watch 60-sec Video
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.85rem] sm:text-[2.35rem]">
              {problem.heading}
            </h2>
          </Reveal>
          <Numbered items={problem.items} />
        </div>
      </section>

      {/* ── Impact — the dark band, as on the home page ──────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.38),transparent)] blur-3xl" />
          </div>

          <div className="relative">
            <Reveal>
              <h2 className="display mx-auto max-w-2xl text-center text-[1.85rem] !text-white sm:text-[2.35rem]">
                {impact.heading}
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
              {impact.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                    <h3 className="text-[17px] font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.85rem] sm:text-[2.35rem]">
              {solution.heading}
            </h2>
          </Reveal>
          <Numbered items={solution.items} />
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="display text-[1.85rem] sm:text-[2.35rem]">
              What you can <span className="text-grad">expect</span>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {results.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-[14.5px] font-medium text-ink shadow-soft transition-colors hover:border-brand-2/35"
              >
                <span className="text-[11px] text-brand">✓</span>
                {r}
              </motion.span>
            ))}
          </div>

          {closing && (
            <Reveal delay={0.2}>
              <p className="mx-auto mt-12 max-w-2xl text-[17px] leading-relaxed sm:text-[18.5px]">
                <span className="font-medium text-ink">{closing}</span>
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display text-[1.85rem] sm:text-[2.35rem]">
              See it inside <span className="text-grad">your product.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed">
              Tell us where your users get stuck and we&apos;ll show you exactly
              what NINA would walk them through.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <a
              href={LINKS.onboarding}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 py-4 text-[15.5px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
            >
              Get Started
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.5 8h10m0 0L8.5 4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
