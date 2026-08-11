"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const withoutItems = [
  "Record a new Loom every time the product changes",
  "Answer the same onboarding questions weekly",
  "New users wait for a human to show them around",
  "Onboarding depends on your availability",
];

const withItems = [
  "NINA always knows the current workflow",
  "Users get answers the moment they need them",
  "Onboarding happens inside your product, automatically",
  "Scales to 1 user or 10,000 without extra effort",
];

/** Dark blue-black band — the Synthesia-style contrast moment. */
export default function Compare() {
  return (
    <section id="features" className="px-5 py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.38),transparent)] blur-3xl" />
        </div>

        <div className="relative">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[2rem] !text-white sm:text-[2.75rem]">
              Spend less time{" "}
              <span className="bg-gradient-to-r from-brand-3 to-white bg-clip-text text-transparent">
                teaching your software.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-[16px] font-semibold text-white/45">
                  Without AgenQ
                </h3>
                <ul className="mt-6 space-y-4">
                  {withoutItems.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.45 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[10px] text-white/45">
                        ✕
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-white/45">
                        {t}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-brand-2/40 bg-brand-2/[0.09] p-7">
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(closest-side,rgba(147,197,253,0.3),transparent)]" />
                <h3 className="relative text-[16px] font-semibold text-white">
                  With AgenQ
                </h3>
                <ul className="relative mt-6 space-y-4">
                  {withItems.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.45 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-3 to-brand-2 text-[10px] text-ink">
                        ✓
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-white/90">
                        {t}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
