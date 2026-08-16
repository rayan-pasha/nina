import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BlogCover from "@/components/BlogCover";
import { POSTS } from "@/lib/posts";
import { LINKS, newTab } from "@/lib/links";

const description =
  "Real results from teams running NINA inside their software — measured onboarding time, activation, and support load.";

export const metadata = {
  title: "Case Studies - AgenQ",
  description,
  alternates: { canonical: "/use-cases/case-studies" },
  openGraph: {
    type: "website",
    url: "/use-cases/case-studies",
    title: "Case Studies - AgenQ",
    description,
  },
};

// The case study lives in the blog, so it's referenced rather than retyped —
// one set of numbers, one place to correct them.
const CASE_SLUG = "ai-guided-workflows-for-insurance-software";

const METRICS = [
  { value: "6×", label: "Faster onboarding" },
  { value: "90 → 15", label: "Minutes to onboard" },
  { value: "Hours → mins", label: "Policy comparison" },
];

export default function Page() {
  const study = POSTS.find((p) => p.slug === CASE_SLUG);

  return (
    <>
      <Nav />

      <main id="top" className="overflow-x-clip">
        <section className="relative px-5 pb-16 pt-32 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
                <span>✦</span> Case studies
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mx-auto mt-7 max-w-3xl text-[2.1rem] sm:text-[3.25rem]">
                Built for SaaS. <span className="text-grad">Measured in hours saved.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed sm:text-[17.5px]">
                What changes when NINA guides users through the workflow instead
                of documenting it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Featured case study */}
        <section className="px-5 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-line shadow-soft">
                  <div className="aspect-[16/10]">
                    <BlogCover variant={study.cover} />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand">
                    Insurance software
                  </p>
                  <h2 className="display mt-3.5 text-[1.9rem] sm:text-[2.4rem]">
                    {study.title}
                  </h2>
                  <p className="mt-5 text-[16px] leading-relaxed">
                    {study.excerpt}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {METRICS.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-line bg-tint/50 p-4"
                      >
                        <div className="text-[1.35rem] font-semibold tracking-[-0.02em] text-ink">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[12.5px] leading-snug text-mute">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${study.slug}`}
                    className="group mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-ink px-6 text-[14.5px] font-medium text-white transition-all duration-200 hover:bg-ink-2 active:scale-[0.98]"
                  >
                    Read the case study
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* More writing */}
        <section className="bg-tint/60 px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="display text-center text-[1.85rem] sm:text-[2.25rem]">
                More from <span className="text-grad">the team</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {POSTS.filter((p) => p.slug !== CASE_SLUG)
                .slice(0, 3)
                .map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.08}>
                    <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col overflow-hidden">
                      <div className="aspect-[16/10] overflow-hidden border-b border-line">
                        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
                          <BlogCover variant={p.cover} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-[16.5px] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-brand">
                          {p.title}
                        </h3>
                        <p className="mt-auto pt-5 text-[13px] text-mute">
                          {p.readTime}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="display text-[1.85rem] sm:text-[2.35rem]">
                Want numbers like these{" "}
                <span className="text-grad">for your product?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="mt-9 inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                Book Live Demo
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
