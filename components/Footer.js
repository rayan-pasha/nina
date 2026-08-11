import Reveal from "./Reveal";

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

/** Blue-black footer, matching the dark band above it. */
export default function Footer() {
  return (
    <footer id="blogs" className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
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
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h4 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Contact
              </h4>
              {/* Links use inline-flex + min-height so the tap target clears
                  44px on touch without changing the visual rhythm much. */}
              <ul className="mt-3 space-y-0.5 text-[14.5px] text-white/70">
                <li>
                  <a
                    href="tel:+14163167435"
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
                  >
                    +1 (416) 316-7435
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:founder@agenq.com"
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
                  >
                    founder@agenq.com
                  </a>
                </li>
                <li className="flex min-h-[44px] items-center">Toronto, Canada</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h4 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Company
              </h4>
              <ul className="mt-3 space-y-0.5 text-[14.5px] text-white/70">
                {["About us", "Career", "Privacy Policy"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex min-h-[44px] items-center gap-1.5 transition-colors hover:text-white"
                    >
                      {l}
                      <span className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <h4 className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Follow Us
              </h4>
              <div className="mt-4 flex gap-2.5">
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
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-[13.5px] text-white/40">
            @copyright AgenQ Inc. 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
