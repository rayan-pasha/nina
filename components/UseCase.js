"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const signals = [
  "Complex, multi-step workflows",
  "Onboarding calls you repeat every week",
  "The same how-to questions, again and again",
  "A Slack or support channel full of “how do I…?”",
  "A product manual or user guide nobody reads",
  "Users who sign up but never reach value",
];

// The first chip is where the user starts, written as a breadcrumb; the rest
// are what happens to them, not screens they visit.
const without = [
  "User > Dashboard",
  "Gets stuck",
  "Searches for help elsewhere",
  "Gets frustrated",
  "Churns",
];
const withNina = ["Ask NINA", "Follow highlighted steps", "Done"];

function Path({ label, items, lit }) {
  return (
    <div
      className={`h-full rounded-3xl p-6 sm:p-7 ${
        lit
          ? "bg-gradient-to-br from-brand-soft to-paper ring-1 ring-brand-2/20"
          : "border border-line bg-paper"
      }`}
    >
      <p
        className={`text-[12.5px] font-semibold uppercase tracking-[0.14em] ${
          lit ? "text-brand" : "text-mute"
        }`}
      >
        {label}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
        {items.map((step, i) => (
          <motion.span
            key={step}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="flex items-center gap-1.5"
          >
            <span
              className={`rounded-full px-3 py-1.5 text-[13px] font-medium ${
                lit
                  ? "bg-paper text-brand ring-1 ring-brand-2/25"
                  : "bg-tint text-slate"
              }`}
            >
              {step}
            </span>
            {i < items.length - 1 && (
              <span className={lit ? "text-brand-2" : "text-mute"}>→</span>
            )}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function UseCase() {
  return (
    <section id="use-case" className="bg-tint/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="display text-[2rem] sm:text-[2.5rem]">
                Built for software that{" "}
                <span className="text-grad">takes time to learn</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-[16.5px] leading-relaxed">
                If any of these sound familiar, NINA is for you:
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {signals.map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <motion.li
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                  className="card flex h-full items-center gap-3 p-4"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-semibold text-brand">
                    ✓
                  </span>
                  <span className="text-[14px] leading-snug text-ink">{s}</span>
                </motion.li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {/* h-full on the wrappers and the card itself so the shorter
              "With NINA" path matches the taller one instead of hugging
              its three chips. */}
          <Reveal className="h-full">
            <Path label="Without help" items={without} />
          </Reveal>
          <Reveal className="h-full" delay={0.12}>
            <Path label="With NINA" items={withNina} lit />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
