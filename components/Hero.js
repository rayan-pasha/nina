"use client";

import { motion } from "framer-motion";
import WorkflowFlow from "./WorkflowFlow";
import Walkthrough from "./Walkthrough";
import { STUDIO } from "@/lib/walkthroughs";
import { LINKS, newTab } from "@/lib/links";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-tint/70 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-5 text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
            <span>✦</span> In-product onboarding
          </span>
        </motion.div>

        {/* max-w-5xl, not 4xl: at the lg size "Your product should onboard"
            measures ~939px, so a 896px box broke it across two lines and the
            headline ran to three. 1024px holds it on one, down to ~900px
            wide; below that the type is small enough that the phrase wraps
            again, which is fine on a tablet. */}
        <motion.h1
          variants={item}
          className="display mx-auto mt-6 max-w-5xl text-[clamp(2.125rem,10.5vw,2.6rem)] sm:mt-7 sm:text-[clamp(3rem,8vw,3.75rem)] lg:text-[4.15rem]"
        >
          Your product should onboard
          <br className="hidden sm:block" />{" "}
          <span className="text-grad">its own users</span>
        </motion.h1>

        {/* Animated workflow, immediately below the headline */}
        <motion.div variants={item} className="mt-7 sm:mt-10">
          <WorkflowFlow />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-9 sm:text-[18px]"
        >
          NINA guides users through real workflows inside your software, no
          training calls, no videos, no support tickets.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9"
        >
          <a
            href={LINKS.onboarding}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-2 to-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            Try NINA Today
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

          <a
            href={LINKS.watchDemo}
            {...newTab}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-5 py-3.5 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-[9px] text-brand transition-transform duration-300 group-hover:scale-110">
              ▷
            </span>
            Watch NINA in Action
          </a>
        </motion.div>

        <motion.div variants={item} className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <Walkthrough config={STUDIO} />
        </motion.div>
      </motion.div>
    </section>
  );
}
