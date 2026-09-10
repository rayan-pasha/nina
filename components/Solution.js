"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Walkthrough from "./Walkthrough";
import { LEDGERLY } from "@/lib/walkthroughs";

const steps = [
  { n: "01", title: "Add NINA", body: "Install NINA inside your product" },
  {
    n: "02",
    title: "Teach Your Workflows",
    body: "Show NINA the steps users need to learn",
  },
  {
    n: "03",
    title: "Users Ask",
    body: "“How do I invite my team?”",
  },
  {
    n: "04",
    title: "NINA Guides",
    body: "Users follow highlighted steps to complete the task",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="display mx-auto max-w-3xl text-center text-[2rem] sm:text-[2.75rem]">
            NINA doesn&apos;t answer with steps.
            <br />
            <span className="text-grad">She walks users through them</span>
          </h2>
        </Reveal>

        {/* The mock needs ~512px to keep its two-column layout — below that it
            stacks and doubles in height, so it gets the larger share. */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="grid gap-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <motion.article
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card group flex gap-4 p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center self-start rounded-xl bg-brand-soft text-[13px] font-semibold text-brand transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-2 group-hover:to-brand group-hover:text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Walkthrough config={LEDGERLY} />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-[17.5px] leading-relaxed sm:text-[19px]">
            A chatbot tells users what to do.{" "}
            <span className="font-medium text-ink">
              NINA shows them, inside your product, on the screen, step by step.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
