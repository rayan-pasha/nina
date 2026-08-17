import Link from "next/link";
import Reveal from "./Reveal";
import { FOOTER_GROUPS, CONTACT } from "@/lib/footer";
import { LINKS, newTab } from "@/lib/links";

const socials = [
  {
    label: "Youtube",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.28 5 12 5 12 5s-6.28 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.72 19 12 19 12 19s6.28 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
  {
    label: "Linkedin",
    path: "M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 20h3.2V9.4H3.4V20Zm6 0h3.2v-5.9c0-1.6 2.9-1.7 2.9 0V20h3.2v-7c0-4.9-5.3-4.7-6.1-2.3V9.4H9.4V20Z",
  },
  {
    label: "X-twitter",
    path: "M17.5 3h3l-6.6 7.5L21.8 21h-6.1l-4.8-6.2L5.4 21h-3l7-8L2.5 3h6.2l4.3 5.7L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z",
  },
];

/** Tap targets clear 44px on touch, then tighten on desktop — at 44px the
 *  five-row columns would sit unreadably far apart. */
const ROW =
  "inline-flex min-h-[44px] items-center text-[14px] leading-snug lg:min-h-[34px]";

function FooterLink({ link }) {
  // Keys into LINKS rather than paths — the outbound URLs live in one place.
  const external = LINKS[link.href];

  if (!link.href) {
    return (
      <li>
        <span className={`${ROW} text-white/35`}>{link.label}</span>
      </li>
    );
  }

  if (external) {
    return (
      <li>
        <a
          href={external}
          {...newTab}
          className={`${ROW} text-white/70 transition-colors hover:text-white`}
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
        className={`${ROW} text-white/70 transition-colors hover:text-white`}
      >
        {link.label}
      </Link>
    </li>
  );
}

/** Blue-black footer, matching the dark band above it. */
export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))] lg:gap-x-8">
          {/* Brand — full width until there's room for it to sit as a column */}
          <Reveal className="col-span-2 md:col-span-3 lg:col-span-1">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-2 to-brand text-[13px] font-semibold text-white">
                  N
                </span>
                <span className="text-[15px] font-semibold text-white">
                  AgenQ
                </span>
              </div>

              <p className="mt-4 max-w-[15rem] text-[14.5px] leading-relaxed text-white/55">
                Built for SaaS. Powered by Agentic AI.
              </p>

              <div className="mt-6 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/60 hover:bg-brand-2/15 hover:text-white"
                  >
                    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {FOOTER_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={0.06 + i * 0.05}>
              <div>
                <h4 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {group.title}
                </h4>
                <ul className="mt-3 space-y-0.5">
                  {group.links.map((link) => (
                    <FooterLink key={link.label} link={link} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.26}>
            <div>
              <h4 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Contact
              </h4>
              <ul className="mt-3 space-y-0.5">
                {CONTACT.map((c) => (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className={`${ROW} text-white/70 transition-colors hover:text-white`}
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className={`${ROW} text-white/70`}>{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-[13.5px] text-white/40">
            © AgenQ Inc. 2026 — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
