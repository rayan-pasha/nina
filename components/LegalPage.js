import Link from "next/link";
import Reveal from "./Reveal";
import { newTab } from "@/lib/links";

/**
 * Layout for a legal document — privacy policy today, terms later.
 *
 * Narrower than an article and without the byline, hero, or share row: nobody
 * shares a privacy policy, and the parts people actually arrive for (opt-outs,
 * contact) are buried unless there's a way to jump. Hence the contents list,
 * which is the one piece of chrome a document this long earns.
 */

/** `**bold**` and `[text](url)` in the copy, so lib/privacy.js stays prose. */
function RichText({ text }) {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((chunk, i) => {
      if (chunk.startsWith("**") && chunk.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-ink">
            {chunk.slice(2, -2)}
          </strong>
        );
      }

      const link = chunk.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (!link) return chunk;

      const [, label, href] = link;
      const className =
        "font-medium text-brand underline decoration-brand/30 underline-offset-[3px] transition-colors hover:decoration-brand";

      // An in-page anchor stays a plain <a> so it doesn't trigger a route
      // change; http(s) opens in a new tab so the reader keeps their place in
      // the policy; mailto/tel hand off to the device.
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return (
          <a key={i} href={href} className={className}>
            {label}
          </a>
        );
      }

      return (
        <a key={i} href={href} {...newTab} className={className}>
          {label}
        </a>
      );
    });
}

function Table({ head, rows }) {
  return (
    // Tables are the one block that can't reflow to phone width, so the table
    // scrolls rather than the page.
    <div className="my-8 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <thead>
          <tr className="bg-tint">
            {head.map((cell) => (
              <th
                key={cell}
                scope="col"
                className="px-5 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-mute"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-4 text-[14.5px] leading-[1.6] ${
                    j === 0 ? "font-medium text-ink" : ""
                  }`}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="mt-9 text-[1.075rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5 text-[16.5px] leading-[1.72]">
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
    case "table":
      return <Table head={block.head} rows={block.rows} />;
    default:
      return (
        <p className="mt-5 text-[16.5px] leading-[1.75]">
          <RichText text={block.text} />
        </p>
      );
  }
}

export default function LegalPage({ doc }) {
  return (
    <main id="top" className="overflow-x-clip pb-8 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 pt-10">
        <Reveal>
          <Link
            href="/"
            className="group inline-flex min-h-[44px] items-center gap-2 text-[13.5px] font-medium text-mute transition-colors hover:text-brand"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to home
          </Link>

          <h1 className="display mt-5 text-[2.1rem] sm:text-[3rem]">{doc.title}</h1>

          <p className="mt-5 text-[13.5px] text-mute">
            Last updated{" "}
            <time dateTime={doc.updated}>{doc.updatedLabel}</time>
          </p>

          <p className="mt-7 text-[17.5px] leading-relaxed">{doc.intro}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <nav
            aria-label="Contents"
            className="mt-10 rounded-3xl border border-line bg-tint/60 p-6 sm:p-7"
          >
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
              Contents
            </p>
            <ol className="mt-4 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {doc.sections.map((section, i) => (
                <li key={section.id} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45em] text-[12px] tabular-nums text-mute/70"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${section.id}`}
                    className="min-h-[32px] py-1 text-[14.5px] leading-snug text-slate transition-colors hover:text-brand"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="mt-6">
          {doc.sections.map((section) => (
            <section key={section.id}>
              <h2
                id={section.id}
                className="mt-14 scroll-mt-28 text-[1.5rem] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[1.65rem]"
              >
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
