"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { DOC_CATEGORIES, POPULAR } from "@/lib/docs";
import { LINKS, newTab } from "@/lib/links";

const ICONS = {
  rocket:
    "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.85-.85.84-2.15-.02-3a2.12 2.12 0 0 0-2.98 0ZM12.5 11.5 15 14M9 12 6.5 9.5M14.5 4.5C17 2 21 3 21 3s1 4-1.5 6.5L14 15l-5-5 5.5-5.5Z",
  code: "M8 6 3 12l5 6M16 6l5 6-5 6",
  route:
    "M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3",
  sparkles:
    "M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3ZM19 15l.8 2L22 17.8l-2.2.8L19 21l-.8-2.2L16 17.8l2.2-.8L19 15Z",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM13 13h7v7h-7zM4 13h7v7H4z",
  chart: "M5 20v-8M10 20V6M15 20v-9M20 20V9",
  shield: "M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z",
  card: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7ZM3 10h18",
  lifebuoy:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M18.4 5.6l-3.2 3.2M8.8 15.2l-3.2 3.2",
};

function Icon({ name, className = "h-[18px] w-[18px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

function SearchIcon({ className = "h-[18px] w-[18px]" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="9" r="5.4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m13.2 13.2 3.3 3.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * One article row. Entries without an `href` aren't written yet, so they render
 * as muted, non-interactive text — the shape of the docs is visible without
 * offering links that would dead-end.
 */
function ArticleRow({ article }) {
  const label = (
    <>
      <span className="min-w-0 flex-1">{article.title}</span>
      {article.href ? (
        <span className="shrink-0 opacity-0 transition-all duration-200 group-hover/row:translate-x-0.5 group-hover/row:opacity-100">
          →
        </span>
      ) : (
        <span className="shrink-0 rounded-full bg-tint px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.1em] text-mute">
          Soon
        </span>
      )}
    </>
  );

  if (!article.href) {
    return (
      <li className="flex items-center gap-2 py-[7px] text-[14px] leading-snug text-mute">
        {label}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={article.href}
        className="group/row flex items-center gap-2 py-[7px] text-[14px] leading-snug text-slate transition-colors duration-200 hover:text-brand"
      >
        {label}
      </Link>
    </li>
  );
}

export default function Docs() {
  const [query, setQuery] = useState("");

  // Search matches a category by its own name or description, and otherwise
  // narrows it to the articles that match — so a hit deep in one section
  // doesn't drag the other eight along with it.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DOC_CATEGORIES;

    return DOC_CATEGORIES.map((cat) => {
      const catMatch =
        cat.title.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q);
      const articles = cat.articles.filter((a) =>
        `${a.title} ${(a.keywords || []).join(" ")}`.toLowerCase().includes(q)
      );
      if (catMatch) return cat;
      return articles.length ? { ...cat, articles } : null;
    }).filter(Boolean);
  }, [query]);

  const hits = results.reduce((n, c) => n + c.articles.length, 0);

  return (
    <main id="top" className="overflow-x-clip">
      {/* ── Header + search ──────────────────────────────────────────── */}
      <section className="relative px-5 pb-14 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-medium text-brand shadow-soft">
              <span>✦</span> Documentation
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display mt-7 text-[2.1rem] sm:text-[3.25rem]">
              How can we <span className="text-grad">help?</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed">
              Guides for installing NINA, teaching her your workflows, and
              running her inside your product.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <label className="relative mt-9 block">
              <span className="sr-only">Search documentation</span>
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-mute">
                <SearchIcon />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the docs"
                className="h-14 w-full rounded-2xl border border-line bg-paper pl-[3.25rem] pr-5 text-[15.5px] text-ink shadow-soft outline-none transition-all duration-200 placeholder:text-mute focus:border-brand-2/50 focus:ring-4 focus:ring-brand-2/10"
              />
            </label>
          </Reveal>

          {query.trim() && (
            <p className="mt-4 text-[13.5px] text-mute">
              {hits === 0
                ? "No matches"
                : `${hits} ${hits === 1 ? "result" : "results"} in ${results.length} ${
                    results.length === 1 ? "section" : "sections"
                  }`}
            </p>
          )}
        </div>
      </section>

      {/* ── Popular, hidden once a search is running ─────────────────── */}
      {!query.trim() && (
        <section className="px-5 pb-14">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
                Start here
              </p>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {POPULAR.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-tint/50 p-5">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand">
                      {p.category}
                    </p>
                    <p className="mt-2.5 text-[15px] font-medium leading-snug text-ink">
                      {p.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Category columns ─────────────────────────────────────────── */}
      <section className="px-5 pb-24 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          {results.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-line bg-tint/50 px-6 py-16 text-center">
              <p className="text-[16px] font-medium text-ink">
                Nothing matched “{query.trim()}”
              </p>
              <p className="mt-2 text-[14.5px]">
                Try a broader term, or ask us directly.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 inline-flex min-h-[44px] items-center rounded-full border border-line bg-paper px-5 text-[14px] font-medium text-ink transition-colors hover:border-brand-2/40 hover:text-brand"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {results.map((cat, i) => (
                <Reveal key={cat.title} delay={(i % 3) * 0.07} className="h-full">
                  <motion.section
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    className="card h-full p-6 sm:p-7"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon name={cat.icon} />
                    </span>
                    <h2 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-relaxed">
                      {cat.description}
                    </p>
                    <ul className="mt-5 divide-y divide-line border-t border-line pt-1">
                      {cat.articles.map((a) => (
                        <ArticleRow key={a.title} article={a} />
                      ))}
                    </ul>
                  </motion.section>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="bg-tint/60 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="display text-[1.85rem] sm:text-[2.35rem]">
              Can&apos;t find <span className="text-grad">what you need?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed">
              We&apos;re still writing these guides. In the meantime, ask us
              directly and we&apos;ll walk you through it.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                Talk to us
              </a>
              <a
                href="mailto:founder@agenq.com"
                className="inline-flex min-h-[48px] items-center rounded-full border border-line bg-paper px-6 text-[15px] font-medium text-ink shadow-soft transition-colors duration-200 hover:border-brand-2/35"
              >
                founder@agenq.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
