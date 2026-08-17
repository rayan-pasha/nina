"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { POSTS, CATEGORIES, postHref } from "@/lib/posts";

const featured = POSTS[0];
const latest = POSTS.slice(1, 4);

function Eyebrow({ children, tone = "brand" }) {
  return (
    <p
      className={`text-[12.5px] font-semibold uppercase tracking-[0.14em] ${
        tone === "brand" ? "text-brand" : "text-mute"
      }`}
    >
      {children}
    </p>
  );
}

function Tags({ tags, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 ${className}`}>
      {tags.map((t) => (
        <span
          key={t}
          className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** Author · date · read time, the same line everywhere it appears. */
function Meta({ post, className = "" }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 text-[13px] text-mute ${className}`}>
      <span className="font-medium text-slate">{post.author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.date}>{post.dateLabel}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
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

export default function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const inCategory = category === "All" || p.tags.includes(category);
      if (!inCategory) return false;
      if (!q) return true;
      return `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(q);
    });
  }, [query, category]);

  return (
    <main id="top" className="overflow-x-clip pt-28 sm:pt-32">
      {/* ── Featured ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="sr-only">Blog</h1>

          <Reveal>
            <Eyebrow>Featured</Eyebrow>
          </Reveal>

          <div className="mt-7 grid items-center gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
            <Reveal>
              <Link
                href={postHref(featured)}
                aria-label={featured.title}
                className="block overflow-hidden rounded-3xl border border-line shadow-soft transition-colors duration-300 hover:border-brand-2/40"
              >
                {/* No forced ratio here — these covers carry headline text
                    close to their edges, and cropping a single hero image to
                    a fixed box cuts words off. */}
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  width="1200"
                  height="627"
                  className="block h-auto w-full"
                />
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <Tags tags={featured.tags} />
                <h2 className="display mt-3.5 text-[2rem] sm:text-[2.6rem]">
                  <Link
                    href={postHref(featured)}
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-5 text-[16.5px] leading-relaxed">
                  {featured.excerpt}
                </p>
                <Meta post={featured} className="mt-6" />
                <Link
                  href={postHref(featured)}
                  className="group mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-medium text-white transition-all duration-200 hover:bg-ink-2 active:scale-[0.98]"
                >
                  Read article
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Latest articles ──────────────────────────────────────────── */}
      <section className="bg-tint/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Eyebrow tone="mute">Latest</Eyebrow>
            <h2 className="display mt-2.5 text-[1.85rem] sm:text-[2.25rem]">
              Latest <span className="text-grad">articles</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="card group h-full overflow-hidden"
                >
                  <Link href={postHref(p)} className="flex h-full flex-col">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      width="1200"
                      height="750"
                      loading="lazy"
                      className="aspect-[16/9] w-full border-b border-line object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <Tags tags={p.tags} />
                      <h3 className="mt-3 text-[18px] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-brand">
                        {p.title}
                      </h3>
                      <p className="mb-6 mt-3 text-[14.5px] leading-relaxed">
                        {p.excerpt}
                      </p>
                      {/* mt-auto pins the byline to the card floor so the
                          rules line up across a row of uneven excerpts. */}
                      <Meta post={p} className="mt-auto pt-5 border-t border-line" />
                    </div>
                  </Link>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── All articles ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow tone="mute">Browse</Eyebrow>
                <h2 className="display mt-2.5 text-[1.85rem] sm:text-[2.25rem]">
                  All <span className="text-grad">articles</span>
                </h2>
              </div>

              <label className="relative w-full sm:w-72">
                <span className="sr-only">Search articles</span>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mute">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  className="h-11 w-full rounded-full border border-line bg-paper pl-11 pr-4 text-[14px] text-ink outline-none transition-all duration-200 placeholder:text-mute focus:border-brand-2/50 focus:ring-4 focus:ring-brand-2/10"
                />
              </label>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-7 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      active
                        ? "bg-ink text-white"
                        : "border border-line bg-paper text-slate hover:border-brand-2/40 hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p className="mt-8 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>

          {filtered.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-line bg-tint/50 px-6 py-16 text-center">
              <p className="text-[16px] font-medium text-ink">No articles found</p>
              <p className="mt-2 text-[14.5px]">
                Try a different search term or clear the filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-6 inline-flex min-h-[44px] items-center rounded-full border border-line bg-paper px-5 text-[14px] font-medium text-ink transition-colors hover:border-brand-2/40 hover:text-brand"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <ul className="mt-4">
              {filtered.map((p, i) => (
                <li key={p.slug} className="border-t border-line last:border-b">
                  <Link
                    href={postHref(p)}
                    className="group grid gap-x-6 gap-y-3 py-8 sm:grid-cols-[4.5rem_1fr] lg:grid-cols-[4.5rem_1fr_9rem]"
                  >
                    {/* Index + date, the way the list is numbered top to bottom. */}
                    <div className="flex items-baseline gap-3 sm:block">
                      <span className="text-[13px] font-medium tabular-nums text-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <time
                        dateTime={p.date}
                        className="text-[13px] text-mute sm:mt-2 sm:block"
                      >
                        {p.dateLabel}
                      </time>
                    </div>

                    <div>
                      <Tags tags={p.tags} />
                      <h3 className="mt-2.5 flex items-start gap-2 text-[19px] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-brand sm:text-[21px]">
                        {p.title}
                        <span className="mt-1 shrink-0 text-[16px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </h3>
                      <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed">
                        {p.excerpt}
                      </p>
                      <p className="mt-4 text-[13px] font-medium text-slate">
                        {p.author}
                        <span className="ml-2 font-normal text-mute">
                          {p.readTime}
                        </span>
                      </p>
                    </div>

                    <img
                      src={p.image}
                      alt=""
                      width="1200"
                      height="750"
                      loading="lazy"
                      className="hidden h-[5.5rem] w-full rounded-2xl border border-line object-cover transition-colors duration-300 group-hover:border-brand-2/40 lg:block"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
