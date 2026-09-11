"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const points = [
  "No tab switching",
  "No help center search",
  "No waiting for support",
  "No 12-minute videos",
];

export default function MeetNina() {
  return (
    <section id="meet-nina" className="relative overflow-hidden py-24 sm:py-28">
      {/* Soft blue wash so this reads as its own beat between the tinted
          problem section above and the plain solution section below. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14rem] h-[32rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.14),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
            Meet NINA
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display mx-auto mt-7 max-w-3xl text-[2rem] sm:text-[2.75rem]">
            The expert already inside{" "}
            <span className="text-grad">your product</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed sm:text-[17px]">
            NINA uses your workflows, documentation, FAQs, and product
            knowledge to answer questions and guide users step by step right
            inside your application
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="card group h-full p-6 text-left"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-[14px] font-semibold text-brand transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-2 group-hover:to-brand group-hover:text-white">
                  ✓
                </span>
                <p className="mt-5 text-[15.5px] font-semibold text-ink">
                  {point}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-[19px] font-medium tracking-[-0.01em] sm:text-[22px]">
            <span className="text-mute">Users ask.</span>{" "}
            <span className="text-ink">NINA guides.</span>{" "}
            <span className="text-grad">Work gets done.</span>
          </p>
        </Reveal>

        {/* All one tone, a step down in size from the line above: this reads
            as the consequence of that line rather than a second headline, so
            it doesn't repeat its three-colour emphasis. */}
        <Reveal delay={0.26}>
          <p className="mt-3 text-[17px] font-medium tracking-[-0.01em] text-mute sm:text-[19px]">
            Happier users. Faster onboarding. Lower training and support costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
