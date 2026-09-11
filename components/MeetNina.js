"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * Each card names the thing the user no longer has to do, so the icon draws
 * that thing rather than a generic tick: the browser they were tabbing
 * between, the search they were running, the wait, the video.
 *
 * Same drawing convention as StepIcon in Product.js — 24x24, no fill, 1.6
 * stroke in currentColor — so these inherit the card's hover colour change.
 */
const points = [
  {
    label: "No tab switching",
    // Browser window split into three tabs.
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
        <path d="M3 9.5h18" />
        <path d="M9 4.5v5" />
        <path d="M15 4.5v5" />
      </>
    ),
  },
  {
    label: "No help center search",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.25" />
        <path d="m15.6 15.6 4.4 4.4" />
      </>
    ),
  },
  {
    label: "No waiting for support",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.25" />
        <path d="M12 7.2V12l3.2 1.9" />
      </>
    ),
  },
  {
    label: "No 12-minute videos",
    // Camera body plus the lens wedge, rather than a play triangle — keeps it
    // distinct from the clock above at 20px.
    icon: (
      <>
        <rect x="2.75" y="6" width="13" height="12" rx="2.5" />
        <path d="M15.75 10.4 21.25 7v10l-5.5-3.4z" />
      </>
    ),
  },
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
            <Reveal key={point.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="card group h-full p-6 text-left"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-2 group-hover:to-brand group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {point.icon}
                  </svg>
                </span>
                <p className="mt-5 text-[15.5px] font-semibold text-ink">
                  {point.label}
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
          <p className="mt-3 text-[17px] font-medium tracking-[-0.01em] text-ink sm:text-[19px]">
            Happier users. Faster onboarding. Lower training and support costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
