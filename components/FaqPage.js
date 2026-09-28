import Link from "next/link";
import Reveal from "./Reveal";
import { FAQ_GROUPS } from "@/lib/faq";
import { LINKS, newTab } from "@/lib/links";

/**
 * The FAQ page. Same shape as the rest of the site: centred hero, content in
 * the 3xl column the pricing FAQ already uses, dark closing band.
 *
 * Questions are grouped rather than listed flat — ten in one run is a wall,
 * and the groups let someone reading for security skip the billing answers.
 */

/** `[text](/path)` in an answer, for the few cross-links the copy needs. */
function Answer({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((chunk, i) => {
    const link = chunk.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!link) return chunk;
    const [, label, href] = link;
    return (
      <Link
        key={i}
        href={href}
        className="font-medium text-brand underline decoration-brand/30 underline-offset-[3px] transition-colors hover:decoration-brand"
      >
        {label}
      </Link>
    );
  });
}

/** Pricing answers are strings, the rest are arrays of paragraphs. */
function Paragraphs({ a }) {
  const paras = Array.isArray(a) ? a : [a];
  return paras.map((text, i) => (
    <p
      key={i}
      className={`text-[14.5px] leading-relaxed ${i === 0 ? "mt-2.5" : "mt-3"}`}
    >
      <Answer text={text} />
    </p>
  ));
}

export default function FaqPage() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-12 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>✦</span> FAQ
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mx-auto mt-7 max-w-3xl text-[2.1rem] sm:text-[3.25rem]">
              Questions, <span className="text-grad">answered.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed sm:text-[17.5px]">
              What NINA is, what it is allowed to do inside your product, what
              it takes to install, and what it costs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Groups ───────────────────────────────────────────────────── */}
      <section className="px-5 pb-8 pt-8">
        <div className="mx-auto max-w-3xl">
          {FAQ_GROUPS.map((group, g) => (
            <div key={group.title} className={g === 0 ? "" : "mt-16"}>
              <Reveal>
                <h2 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
                  {group.title}
                </h2>
              </Reveal>

              <dl className="mt-5 space-y-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.q} delay={i * 0.06}>
                    <div className="card p-6">
                      <dt className="text-[16px] font-semibold text-ink">
                        {item.q}
                      </dt>
                      <dd>
                        <Paragraphs a={item.a} />
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="px-5 py-24 sm:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.38),transparent)] blur-3xl" />
          </div>

          <div className="relative">
            <Reveal>
              <h2 className="display mx-auto max-w-2xl text-[2rem] !text-white sm:text-[2.6rem]">
                Still have a{" "}
                <span className="bg-gradient-to-r from-brand-3 to-white bg-clip-text text-transparent">
                  question?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/60">
                Tell us where your users get stuck and we&apos;ll show you
                exactly what NINA would walk them through.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={LINKS.bookMeeting}
                  {...newTab}
                  className="inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
                >
                  Book a Demo
                </a>
                <Link
                  href="/documentation"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-white/15 px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/35"
                >
                  Read the docs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
