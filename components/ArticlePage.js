import Link from "next/link";
import BlogCover from "./BlogCover";
import Reveal from "./Reveal";
import { ShareRow, BackToTop, ReadingProgress } from "./ArticleChrome";

/**
 * Single-article layout, following the shape of a Lantern post: back link,
 * title, standfirst, byline, hero, then a body column indented under the
 * header so the page reads as one stepped editorial block.
 */

/** Renders the `**bold**` spans used throughout the post copy. */
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="font-semibold text-ink">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    )
  );
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function Bullets({ items }) {
  return (
    <ul className="mt-5 space-y-3.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3.5 text-[17px] leading-[1.72]">
          <span
            aria-hidden="true"
            className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2"
          />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Note({ title, items }) {
  return (
    <aside className="my-10 rounded-3xl bg-gradient-to-br from-brand-soft to-paper p-6 ring-1 ring-brand-2/20 sm:p-8">
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brand">
        {title}
      </p>
      <ul className="mt-5 space-y-3.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3.5 text-[15.5px] leading-[1.68]">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-paper text-[10px] font-semibold text-brand ring-1 ring-brand-2/25">
              ✓
            </span>
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Stats({ items }) {
  return (
    <div className="my-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-line bg-paper p-5 text-center"
        >
          <p className="text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-grad">
            {s.value}
          </p>
          <p className="mt-2.5 text-[13px] leading-snug text-mute">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={slugify(block.text)}
          className="mt-14 scroll-mt-28 text-[1.5rem] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[1.75rem]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-9 text-[1.075rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
          {block.text}
        </h3>
      );
    case "ul":
      return <Bullets items={block.items} />;
    case "note":
      return <Note title={block.title} items={block.items} />;
    case "stats":
      return <Stats items={block.items} />;
    default:
      return (
        <p className="mt-5 text-[17px] leading-[1.75]">
          <RichText text={block.text} />
        </p>
      );
  }
}

export default function ArticlePage({ post }) {
  const { faq = [], sources = [] } = post;

  return (
    <>
      <ReadingProgress />

      <main className="overflow-x-clip pt-28 sm:pt-32">
        <article className="pb-8">
          {/* ── Header ─────────────────────────────────────────────── */}
          <header className="mx-auto max-w-5xl px-5 pt-10">
            <Reveal>
              <Link
                href="/blog"
                className="group inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-medium text-mute transition-colors hover:text-brand"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1">
                  ←
                </span>
                Back to blog
              </Link>

              <h1 className="display mt-5 max-w-[52rem] text-[2.1rem] sm:text-[3rem]">
                {post.title}
              </h1>

              <p className="mt-6 max-w-[40rem] text-[17.5px] leading-relaxed">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-2 to-brand text-[15px] font-semibold text-white shadow-brand">
                  {post.author.charAt(0)}
                </span>
                <div>
                  <p className="text-[14.5px] font-medium text-ink">
                    {post.author}
                  </p>
                  <p className="text-[13px] text-mute">{post.authorRole}</p>
                </div>
                <p className="ml-auto flex items-center gap-2 text-[13px] text-mute">
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </p>
              </div>
            </Reveal>
          </header>

          {/* ── Hero + body, stepped in under the header ───────────── */}
          <div className="mx-auto max-w-5xl px-5 lg:pl-[13rem]">
            <Reveal delay={0.1}>
              <div className="mt-10 aspect-[16/9] max-w-[40rem] overflow-hidden rounded-3xl border border-line shadow-soft">
                <BlogCover variant={post.cover} />
              </div>
            </Reveal>

            <div className="max-w-[40rem]">
              {post.subhead && (
                <p className="mt-4 text-[13px] text-mute">{post.subhead}</p>
              )}

              <div className="mt-10">
                {post.body.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>

              {faq.length > 0 && (
                <section className="mt-16 border-t border-line pt-12">
                  <h2
                    id="faq"
                    className="scroll-mt-28 text-[1.5rem] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[1.75rem]"
                  >
                    Frequently asked questions
                  </h2>
                  <dl className="mt-8 space-y-8">
                    {faq.map((item) => (
                      <div key={item.q}>
                        <dt className="text-[1.075rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                          {item.q}
                        </dt>
                        <dd>
                          {item.a.map((para, i) => (
                            <p key={i} className="mt-3 text-[17px] leading-[1.75]">
                              <RichText text={para} />
                            </p>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {sources.length > 0 && (
                <section className="mt-14">
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
                    Sources
                  </p>
                  <ul className="mt-4 space-y-2">
                    {sources.map((s) => (
                      <li key={s} className="text-[14.5px] leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* ── Share ───────────────────────────────────────────── */}
              <div className="mt-12 border-t border-line pt-8">
                <ShareRow title={post.title} />
              </div>
            </div>
          </div>
        </article>
      </main>

      <BackToTop />
    </>
  );
}
