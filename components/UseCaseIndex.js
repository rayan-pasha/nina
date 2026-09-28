import Link from "next/link";
import Reveal from "./Reveal";
import { USE_CASE_GROUPS } from "@/lib/usecases";
import { LINKS, newTab } from "@/lib/links";

/**
 * Directory of every solution, feature, and use-case page.
 *
 * Follows the Documentation page's shape — hero, then groups introduced by a
 * small uppercase label — because this is the same kind of page: a way into
 * content that already exists rather than an argument of its own.
 *
 * The lift on hover is CSS rather than Framer Motion: these are links, and
 * `.card` already transitions transform, so it matches the cards elsewhere
 * without making the page a client component.
 */
function Card({ item }) {
  return (
    <Link
      href={item.href}
      className="card group flex h-full flex-col p-6 hover:-translate-y-1"
    >
      <h3 className="flex items-start gap-2 text-[16.5px] font-semibold tracking-[-0.01em] text-ink">
        <span className="min-w-0 flex-1">{item.title}</span>
        <span
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          →
        </span>
      </h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed">{item.body}</p>
    </Link>
  );
}

export default function UseCaseIndex() {
  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-5 pb-14 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>✦</span> Use cases
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mt-7 text-[2.1rem] sm:text-[3.25rem]">
              Where NINA <span className="text-grad">earns its keep.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed">
              Find the page closest to your situation — by the industry you are
              in, the number you are trying to move, or the capability you need.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Groups ───────────────────────────────────────────────────── */}
      <section className="px-5 pb-8">
        <div className="mx-auto max-w-6xl">
          {USE_CASE_GROUPS.map((group, g) => (
            <div key={group.title} className={g === 0 ? "" : "mt-16"}>
              <Reveal>
                <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
                  {group.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {group.blurb}
                </p>
              </Reveal>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {group.items.map((item, i) => (
                  <Reveal key={item.href} delay={i * 0.07} className="h-full">
                    <Card item={item} />
                  </Reveal>
                ))}
              </div>
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
                Not sure which one{" "}
                <span className="bg-gradient-to-r from-brand-3 to-white bg-clip-text text-transparent">
                  fits you?
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
                  href="/resources/faq"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-white/15 px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/35"
                >
                  Read the FAQ
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
