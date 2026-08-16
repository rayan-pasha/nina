"use client";

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { BILLING, PLANS, COMPARISON, FAQ } from "@/lib/pricing";
import { LINKS, newTab } from "@/lib/links";

function Check({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M13 4.5 6.5 11.5 3 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Monthly/annual switch. Two buttons rather than a checkbox so each period is
 *  a real, labelled target for screen readers and thumbs alike. */
function BillingToggle({ period, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-paper p-1 shadow-soft">
      {Object.entries(BILLING).map(([key, cfg]) => {
        const on = key === period;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={on}
            className={`relative inline-flex min-h-[40px] items-center gap-2 rounded-full px-5 text-[14px] font-medium transition-colors duration-200 ${
              on ? "text-white" : "text-slate hover:text-ink"
            }`}
          >
            {on && (
              <motion.span
                layoutId="billing-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-ink"
              />
            )}
            <span className="relative z-10">{cfg.label}</span>
            {key === "annual" && (
              <span
                className={`relative z-10 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  on ? "bg-white/15 text-white" : "bg-brand-soft text-brand"
                }`}
              >
                {cfg.save}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, period }) {
  const price = plan.price[period];
  const isCustom = price === "Custom";

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-7 transition-shadow duration-300 ${
        plan.featured
          ? "bg-ink text-white shadow-[0_28px_60px_-28px_rgba(13,15,44,0.5)]"
          : "border border-line bg-paper shadow-soft"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-brand-2 to-brand px-3 py-1 text-[11.5px] font-semibold text-white shadow-brand">
          {plan.badge}
        </span>
      )}

      <h3
        className={`text-[17px] font-semibold ${
          plan.featured ? "text-white" : "text-ink"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-1 text-[13.5px] ${
          plan.featured ? "text-white/55" : "text-mute"
        }`}
      >
        {plan.tagline}
      </p>

      <div className="mt-6 flex items-end gap-1.5">
        <span
          className={`text-[2.5rem] font-semibold leading-none tracking-[-0.03em] ${
            plan.featured ? "text-white" : "text-ink"
          }`}
        >
          {price}
        </span>
        {!isCustom && (
          <span
            className={`pb-1 text-[13.5px] ${
              plan.featured ? "text-white/55" : "text-mute"
            }`}
          >
            {BILLING[period].suffix}
          </span>
        )}
      </div>
      {/* Reserve the line whether or not it renders, so the three cards keep
          their price blocks on one baseline. */}
      <p
        className={`mt-1.5 min-h-[18px] text-[12.5px] ${
          plan.featured ? "text-white/45" : "text-mute"
        }`}
      >
        {!isCustom && period === "annual" ? BILLING.annual.note : ""}
      </p>

      <a
        href={LINKS.bookMeeting}
        {...newTab}
        className={`mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-[14.5px] font-medium transition-all duration-200 active:scale-[0.98] ${
          plan.featured
            ? "bg-paper text-ink hover:bg-white/90"
            : "border border-line text-ink hover:border-brand-2/40 hover:text-brand"
        }`}
      >
        {plan.cta}
      </a>

      {plan.inherits && (
        <p
          className={`mt-7 text-[13px] font-medium ${
            plan.featured ? "text-white/70" : "text-slate"
          }`}
        >
          {plan.inherits}
        </p>
      )}

      <ul className={`space-y-3 ${plan.inherits ? "mt-4" : "mt-7"}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={`mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                plan.featured ? "bg-brand-2/25 text-brand-3" : "bg-brand-soft text-brand"
              }`}
            >
              <Check className="h-2.5 w-2.5" />
            </span>
            <span
              className={`text-[14px] leading-relaxed ${
                plan.featured ? "text-white/80" : "text-slate"
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const [period, setPeriod] = useState("monthly");

  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>✦</span> Pricing
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mx-auto mt-7 max-w-3xl text-[2.1rem] sm:text-[3.25rem]">
              Choose the right NINA for{" "}
              <span className="text-grad">your product.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed sm:text-[17.5px]">
              Every plan delivers the same end-user experience. They differ by
              scale, autonomy, and control.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <BillingToggle period={period} onChange={setPeriod} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Plans ────────────────────────────────────────────────────── */}
      <section className="px-5 pb-8">
        <div className="mx-auto grid max-w-6xl items-start gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <PlanCard plan={plan} period={period} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15.5px] leading-relaxed">
            Pricing is based on deploying an AI Product Assistant —{" "}
            <span className="font-medium text-ink">
              not on the number of users.
            </span>
          </p>
        </Reveal>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display text-center text-[1.85rem] sm:text-[2.25rem]">
              Compare <span className="text-grad">every plan</span>
            </h2>
          </Reveal>

          {/* The table is the only wide element on the page — it scrolls inside
              its own container so the page body never does. */}
          <Reveal delay={0.08}>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-line">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-tint/60">
                    <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-mute">
                      Feature
                    </th>
                    {PLANS.map((p) => (
                      <th
                        key={p.name}
                        className="px-6 py-4 text-[15px] font-semibold text-ink"
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((group) => (
                    <Fragment key={group.group}>
                      <tr>
                        <td
                          colSpan={4}
                          className="border-t border-line bg-paper px-6 pb-2 pt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand"
                        >
                          {group.group}
                        </td>
                      </tr>
                      {group.rows.map(([label, ...cells]) => (
                        <tr key={label} className="border-t border-line">
                          <td className="px-6 py-3.5 text-[14px] font-medium text-ink">
                            {label}
                          </td>
                          {cells.map((c, i) => (
                            <td
                              key={i}
                              className="px-6 py-3.5 text-[14px] text-slate"
                            >
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="display text-center text-[1.85rem] sm:text-[2.25rem]">
              Questions, <span className="text-grad">answered</span>
            </h2>
          </Reveal>

          <dl className="mt-10 space-y-3">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.06}>
                <div className="card p-6">
                  <dt className="text-[16px] font-semibold text-ink">
                    {item.q}
                  </dt>
                  <dd className="mt-2.5 text-[14.5px] leading-relaxed">
                    {item.a}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.38),transparent)] blur-3xl" />
          </div>

          <div className="relative">
            <Reveal>
              <h2 className="display mx-auto max-w-2xl text-[2rem] !text-white sm:text-[2.6rem]">
                Not sure which plan{" "}
                <span className="bg-gradient-to-r from-brand-3 to-white bg-clip-text text-transparent">
                  fits your product?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/60">
                Tell us how your users get stuck and we&apos;ll show you what
                NINA would guide them through.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
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
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-white/20 px-6 text-[15px] font-medium text-white/85 transition-colors duration-200 hover:border-white/40 hover:text-white"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[9px]">
                    ▷
                  </span>
                  Watch 60-sec Video
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
