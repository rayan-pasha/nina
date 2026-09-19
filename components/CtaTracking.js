"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";

/**
 * Reports CTA clicks to Google Analytics as named events.
 *
 * One document-level listener rather than an onClick on each button: the
 * site has 23 CTAs across 8 components, all pointing at the four URLs in
 * lib/links.js, so matching on the href catches every one of them —
 * including any added later — with nothing to remember per button.
 *
 * Each event carries the page it happened on and the button's label, which
 * is what turns "how many people clicked Book a Demo" into "which page and
 * which wording got them there".
 *
 * No-op when GA isn't loaded (no NEXT_PUBLIC_GA_ID), so dev sends nothing.
 */

// Matched on the URL up to any query string, so a tweak to the scheduler's
// params doesn't silently stop the event firing.
const base = (url) => url.split("?")[0];

const EVENTS = [
  [base(LINKS.bookMeeting), "book_demo"],
  [base(LINKS.onboarding), "try_nina"],
  [base(LINKS.watchDemo), "watch_demo"],
  [base(LINKS.logIn), "log_in"],
];

export default function CtaTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a || typeof window.gtag !== "function") return;
      const href = a.getAttribute("href") || "";
      const hit = EVENTS.find(([url]) => href.startsWith(url));
      if (!hit) return;
      window.gtag("event", hit[1], {
        page_path: pathname,
        // Leading symbols dropped: the play buttons render a "▷" glyph
        // inside the link, which otherwise lands in the report as part of
        // the label.
        cta_label: (a.textContent || "")
          .replace(/\s+/g, " ")
          .replace(/^[^\p{L}\p{N}]+/u, "")
          .trim()
          .slice(0, 60),
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
