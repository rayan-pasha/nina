"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import BackedBy from "./BackedBy";
import Walkthrough from "./Walkthrough";
import { NORTHWIND } from "@/lib/walkthroughs";
import { GUIDANCE, EXCHANGES, CONTROLS, AUDIENCES } from "@/lib/insurance";
import { LINKS, newTab } from "@/lib/links";

/**
 * The Insurance page, built from the AgenQ Insurance design file: same
 * sections, same copy, same order — rendered in this site's type, colour and
 * motion, with the hero wash carried over from the design.
 */

function MediaSlot({ label, className = "" }) {
  return (
    <div
      className={`grid place-items-center rounded-3xl border border-line bg-tint/60 ${className}`}
    >
      <p className="max-w-[20rem] px-6 text-center text-[13px] leading-relaxed text-mute">
        {label}
      </p>
    </div>
  );
}

export default function Insurance() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-24 pt-32 sm:pb-28 sm:pt-40">
        <div className="aurora pointer-events-none absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper" />

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="display mx-auto max-w-3xl text-[clamp(2.125rem,9vw,2.6rem)] sm:text-[clamp(3rem,7vw,3.6rem)] lg:text-[4rem]">
              Make Complex Insurance{" "}
              <span className="text-grad">Easier to Understand and Use.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed sm:mt-8 sm:text-[18px]">
              AgenQ turns your platform into its own expert: product knowledge
              and workflow guidance, without leaving the software.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.watchDemo}
                {...newTab}
                className="group inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[9px] transition-transform duration-300 group-hover:scale-110">
                  ▷
                </span>
                Watch 60-sec Video
              </a>
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="inline-flex min-h-[52px] items-center rounded-full border border-line bg-paper px-7 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
              >
                Book an Insurance Demo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <BackedBy />
        </Reveal>
      </section>

      {/* ── Insurance carries more complexity ────────────────────────── */}
      <section className="px-5 py-20 pt-8 sm:py-24 sm:pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
                Insurance Carries More Complexity{" "}
                <span className="text-grad">Than Most Software</span>
              </h2>
              <p className="mt-6 max-w-[30rem] text-[16.5px] leading-relaxed">
                Products change. Rules vary by carrier and region.
              </p>
              <p className="mt-4 max-w-[30rem] text-[16.5px] leading-relaxed">
                The knowledge that explains a policy lives in PDFs, portals, and
                training sessions, none of which are open when the user is
                quoting.
              </p>
              <p className="mt-5 max-w-[30rem] text-[17px] font-medium leading-relaxed text-ink">
                AgenQ puts product knowledge and workflow guidance in the same
                place.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <MediaSlot
              label="Photo: broker at work"
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ── Three kinds of guidance ──────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] sm:text-[2.5rem]">
              Three Kinds of <span className="text-grad">Guidance</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {GUIDANCE.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08} className="h-full">
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card h-full overflow-hidden"
                >
                  <MediaSlot
                    label={g.media}
                    className="h-[13.5rem] w-full rounded-none border-0 border-b border-line"
                  />
                  <div className="p-7">
                    <h3 className="text-[19px] font-semibold tracking-[-0.025em] text-ink">
                      {g.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed">{g.body}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── From question to action ──────────────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] sm:text-[2.5rem]">
              From Question <span className="text-grad">to Action</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4">
            {EXCHANGES.map((x, i) => (
              <Reveal key={x.ask} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card p-6 sm:p-7"
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
                    {x.speaker}
                  </p>
                  <p className="mt-2.5 text-[17px] font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[18px]">
                    {x.ask}
                  </p>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed">
                    {x.answer}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-11 max-w-2xl text-center text-[17px] font-medium leading-relaxed text-ink sm:text-[18.5px]">
              Knowledge and execution in one conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Built for control ────────────────────────────────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.38),transparent)] blur-3xl" />
          </div>

          <div className="relative">
            <Reveal>
              <h2 className="display mx-auto max-w-2xl text-center text-[1.95rem] !text-white sm:text-[2.5rem]">
                Built for{" "}
                <span className="bg-gradient-to-r from-brand-3 to-white bg-clip-text text-transparent">
                  Control
                </span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
              {CONTROLS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.07} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                    <h3 className="text-[17px] font-semibold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32}>
              <div className="mt-10 text-center">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[13.5px] font-semibold text-brand-3">
                  SOC 2 in progress
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Works with your existing platform ────────────────────────── */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="display text-[1.95rem] sm:text-[2.5rem]">
              Works With Your{" "}
              <span className="text-grad">Existing Platform</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-lg text-[16.5px] leading-relaxed">
              No core-system replacement. No rebuild.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-3 max-w-xl text-[17px] font-medium leading-relaxed text-ink">
              AgenQ works alongside the software your users are already in.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <h3 className="mt-14 text-[20px] font-semibold tracking-[-0.025em] text-ink">
              Built For
            </h3>
          </Reveal>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {AUDIENCES.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className="inline-flex items-center rounded-full border border-line bg-paper px-5 py-2.5 text-[15px] font-medium text-ink shadow-soft transition-colors hover:border-brand-2/35"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── See how it works inside an insurance platform ─────────────── */}
      <section className="px-5 pb-20 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.32),transparent)] blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <Reveal>
              <div>
                <h2 className="display text-[1.75rem] !text-white sm:text-[2.2rem]">
                  See How It Works Inside an Insurance Platform
                </h2>
                <p className="mt-5 max-w-[26rem] text-[16px] leading-relaxed text-white/60">
                  A walkthrough in one of our insurance customers&apos;
                  software, with real products and real workflows.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={LINKS.watchDemo}
                    {...newTab}
                    className="inline-flex min-h-[48px] items-center rounded-full bg-paper px-6 text-[15px] font-semibold text-ink transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
                  >
                    Watch the Walkthrough
                  </a>
                  <a
                    href={LINKS.bookMeeting}
                    {...newTab}
                    className="inline-flex min-h-[48px] items-center rounded-full border border-white/25 px-6 text-[15px] font-medium text-white/85 transition-colors duration-200 hover:border-white/50 hover:text-white"
                  >
                    Book an Insurance Demo
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Walkthrough config={NORTHWIND} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display text-[2.1rem] sm:text-[3rem]">
              Give Users the Guidance They Need,{" "}
              <span className="text-grad">Where They Work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={LINKS.bookMeeting}
              {...newTab}
              className="mt-9 inline-flex min-h-[52px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-8 text-[15.5px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
            >
              Talk to Founders
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
