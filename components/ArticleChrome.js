"use client";

import { useEffect, useState } from "react";

/**
 * The two pieces of the article page that need the browser: the share row
 * (which needs the current URL) and the floating back-to-top button.
 */

const ICONS = {
  linkedin:
    "M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 20h3.2V9.4H3.4V20Zm6 0h3.2v-5.9c0-1.6 2.9-1.7 2.9 0V20h3.2v-7c0-4.9-5.3-4.7-6.1-2.3V9.4H9.4V20Z",
  x: "M17.5 3h3l-6.6 7.5L21.8 21h-6.1l-4.8-6.2L5.4 21h-3l7-8L2.5 3h6.2l4.3 5.7L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z",
  facebook:
    "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z",
  link: "M10.6 13.4a3.5 3.5 0 0 0 5.3.4l2.5-2.5a3.5 3.5 0 0 0-5-5l-1.4 1.4M13.4 10.6a3.5 3.5 0 0 0-5.3-.4l-2.5 2.5a3.5 3.5 0 0 0 5 5l1.4-1.4",
};

function ShareButton({ label, icon, href, onClick, filled = true }) {
  const Tag = href ? "a" : "button";
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button", onClick };

  return (
    <Tag
      {...props}
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-line text-slate transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-2/50 hover:bg-brand-soft hover:text-brand"
    >
      <svg
        className="h-[17px] w-[17px]"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={filled ? undefined : 1.8}
        strokeLinecap="round"
      >
        <path d={icon} />
      </svg>
    </Tag>
  );
}

export function ShareRow({ title }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Read on mount rather than at render — the server has no location, and
  // reading it during render would desync the first client paint.
  useEffect(() => setUrl(window.location.href), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const e = encodeURIComponent;

  return (
    <div>
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-mute">
        Share this article
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <ShareButton
          label="Share on LinkedIn"
          icon={ICONS.linkedin}
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`}
        />
        <ShareButton
          label="Share on X"
          icon={ICONS.x}
          href={`https://twitter.com/intent/tweet?url=${e(url)}&text=${e(title)}`}
        />
        <ShareButton
          label="Share on Facebook"
          icon={ICONS.facebook}
          href={`https://www.facebook.com/sharer/sharer.php?u=${e(url)}`}
        />
        <ShareButton
          label={copied ? "Link copied" : "Copy link"}
          icon={ICONS.link}
          onClick={copy}
          filled={false}
        />
        <span
          aria-live="polite"
          className={`text-[13px] font-medium text-brand transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          Copied
        </span>
      </div>
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line bg-paper/90 px-4 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-slate shadow-soft backdrop-blur-xl transition-all duration-300 hover:text-brand ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span aria-hidden="true">↑</span>
      Back to top
    </button>
  );
}

/**
 * Thin brand rule that tracks read position. Sits directly under the fixed
 * nav so it reads as part of the header rather than a floating bar.
 */
export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-brand-2 to-brand"
        style={{ transform: `scaleX(${pct})` }}
      />
    </div>
  );
}
