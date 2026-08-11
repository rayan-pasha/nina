"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/links";

const perks = [
  "Early product access",
  "Direct setup support",
  "Access to founding team",
  "Influence the roadmap",
  "Early-partner pricing",
];

export default function Partner() {
  return (
    <section id="partner" className="scroll-mt-24 bg-tint/60 px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
            <span>✦</span> Limited spots
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display mx-auto mt-7 max-w-2xl text-[2.1rem] sm:text-[3rem]">
            Become a NINA <span className="text-grad">Design Partner.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed">
            Get early access, direct setup support from the founding team, and a
            meaningful role in shaping what we build next.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {perks.map((p, i) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 + i * 0.07, duration: 0.45 }}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-[14px] font-medium text-ink shadow-soft transition-colors hover:border-brand-2/35"
            >
              <span className="text-[11px] text-brand">✓</span>
              {p}
            </motion.span>
          ))}
        </div>

        <Reveal delay={0.3}>
          <a
            href={LINKS.onboarding}
            className="group mt-11 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 py-4 text-[15.5px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            Apply for Early Access
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
  );
}
