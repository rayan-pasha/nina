import Link from "next/link";
import Reveal from "./Reveal";
import { FOOTER_COLUMNS, FOOTER_META } from "@/lib/footer";
import { LINKS, newTab } from "@/lib/links";

/**
 * Light footer, following the design file: a brand bar with the demo CTA, five
 * link columns, a second row of Company / Contact / Follow, and the copyright.
 *
 * Tap targets clear 44px on touch and tighten on desktop — at 44px the long
 * columns would sit unreadably far apart.
 */
const ROW =
  "inline-flex min-h-[44px] items-center text-[14px] leading-snug lg:min-h-[30px]";

function FooterLink({ link }) {
  // A bare word (rather than a path) keys into LINKS, so outbound URLs stay in
  // one file.
  const external = link.href && !link.href.startsWith("/") && LINKS[link.href];

  if (!link.href) {
    return (
      <li>
        <span className={`${ROW} ${link.plain ? "text-slate" : "text-mute/60"}`}>
          {link.label}
        </span>
      </li>
    );
  }

  if (external || link.href.startsWith("tel:") || link.href.startsWith("mailto:")) {
    return (
      <li>
        <a
          href={external || link.href}
          {...(external ? newTab : {})}
          className={`${ROW} text-slate transition-colors hover:text-ink`}
        >
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={link.href}
        className={`${ROW} text-slate transition-colors hover:text-ink`}
      >
        {link.label}
      </Link>
    </li>
  );
}

function Column({ group }) {
  return (
    <div>
      <h4 className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
        {group.title}
      </h4>
      <ul className="mt-3 space-y-0.5">
        {group.links.map((link) => (
          <FooterLink key={link.label} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-gradient-to-b from-paper to-[oklch(0.975_0.02_275)]">
      <div className="mx-auto max-w-6xl px-5">
        {/* Brand bar */}
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-8 pt-16">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-2 to-brand text-[13px] font-semibold text-white shadow-brand">
                  N
                </span>
                <span className="text-[15px] font-semibold text-ink">AgenQ</span>
              </div>
              <p className="mt-4 max-w-[16rem] text-[14.5px] leading-relaxed text-slate">
                Software that guides its own users. Toronto, Canada.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={LINKS.logIn}
                className="inline-flex min-h-[44px] items-center text-[14px] font-medium text-slate transition-colors hover:text-ink"
              >
                Log In
              </a>
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                className="inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-6 text-[14px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </Reveal>

        {/* Five link columns */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {FOOTER_COLUMNS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <Column group={group} />
            </Reveal>
          ))}
        </div>

        {/* Company / Contact / Follow */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {FOOTER_META.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <Column group={group} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-line py-7">
          <p className="text-[13.5px] text-mute">© AgenQ · Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
}
