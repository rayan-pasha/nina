"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cards = [
  {
    title: "Sign up and install NINA",
    body: "Install the lightweight SDK and match NINA to your brand.",
  },
  {
    title: "Add your documentation",
    body: "NINA starts answering product questions right away.",
  },
  {
    title: "Create your workflows",
    body: "Capture the tasks users need help with most.",
  },
];

export default function Setup() {
  return (
    <section id="resources" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>⚡</span> Fast to install. Easy to manage.
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mx-auto mt-7 max-w-2xl text-[2rem] sm:text-[2.75rem]">
              Answering questions in 10 minutes.
              <br />
              <span className="text-grad">Fully live in an afternoon.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-lg text-[16.5px] leading-relaxed">
              Get NINA up and running quickly — no lengthy implementation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="card group h-full p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-[15px] font-semibold text-brand transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-2 group-hover:to-brand group-hover:text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed">{c.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
