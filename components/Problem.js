"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const items = [
  "A Loom video.",
  "A training session.",
  "A Slack message.",
  "A support ticket.",
];

export default function Problem() {
  return (
    <section id="problem" className="bg-tint/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Statement */}
          <div>
            <Reveal>
              <h2 className="display text-[2rem] sm:text-[2.6rem]">
                You built the product.
                <br />
                You shouldn&apos;t have to{" "}
                <span className="text-grad">teach</span> it too.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-md text-[16.5px] leading-relaxed">
                Most SaaS teams still spend time teaching users how to use
                software that should already know how to teach itself. It
                doesn&apos;t scale. And it shouldn&apos;t be your job.
              </p>
            </Reveal>
          </div>

          {/* The recurring work */}
          <div>
            <Reveal>
              <p className="text-[15.5px]">
                Every new user creates the same work:
              </p>
            </Reveal>

            <ul className="mt-6 grid gap-3">
              {items.map((item, i) => (
                <Reveal key={item} delay={0.06 + i * 0.07}>
                  <motion.li
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    className="card group flex items-center gap-5 px-5 py-4"
                  >
                    <span className="text-[13px] font-medium tracking-[0.08em] text-mute transition-colors duration-300 group-hover:text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-[16.5px] font-medium text-ink sm:text-[17.5px]">
                      {item}
                    </span>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-4 w-4 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    >
                      <path
                        d="M4.5 11.5 11.5 4.5m0 0H5.6m5.9 0v5.9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
