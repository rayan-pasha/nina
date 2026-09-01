"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LINKS, newTab } from "@/lib/links";

import { NAV as links } from "@/lib/nav";

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3 w-3 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Desktop hover/click dropdown. One instance per nav item with children. */
function DropdownMenu({ item }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  // Small grace period on leave so the pointer can cross the gap between the
  // trigger and the panel without the menu snapping shut.
  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      clearTimeout(closeTimer.current);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3.5 text-[14px] font-medium text-slate transition-colors duration-200 hover:bg-tint hover:text-ink"
      >
        {item.label}
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            role="menu"
            // Sized to the longest label rather than a fixed width — "Trained
            // on Your Product Knowledge" would otherwise wrap to three lines.
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
          >
            <div className="w-max min-w-[13rem] max-w-[20rem] overflow-hidden rounded-2xl border border-line bg-paper p-1.5 shadow-soft">
              {item.children.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[40px] items-center rounded-xl px-3 text-[14px] font-medium text-slate transition-colors duration-200 hover:bg-tint hover:text-brand"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Mobile version of the Resources menu: a collapsed row that expands in
 * place. Its state lives here rather than in Nav because the whole sheet
 * unmounts when the burger closes, which resets the disclosure for free.
 */
function MobileDisclosure({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[44px] w-full items-center justify-between rounded-2xl px-4 py-2.5 text-[15px] font-medium text-slate transition-colors hover:bg-tint hover:text-ink"
      >
        {item.label}
        <Chevron open={open} />
      </button>

      {/* `initial={false}` so the panel doesn't animate open on first paint
          when the sheet itself is still sliding in. */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-0.5 pt-1">
              {item.children.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center rounded-2xl py-2.5 pl-8 pr-4 text-[15px] font-medium text-slate transition-colors hover:bg-tint hover:text-brand"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-400 ${
          scrolled
            ? "border border-line bg-paper/85 shadow-soft backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        {/* The wordmark carries the name, so the link needs its own label for
            anyone not seeing the image. */}
        <Link
          href="/"
          aria-label="AgenQ home"
          className="flex min-h-[44px] items-center"
        >
          <img
            src="/images/agenq-logo.webp"
            alt="AgenQ"
            width="357"
            height="110"
            className="h-8 w-auto"
          />
        </Link>

        {/* The whitespace between two labels is the flex gap plus each item's
            own px-3.5, so gap-12 reads as 48 + 14 + 14 = 76px. That is close
            to the ceiling: at the lg breakpoint itself (1024px) it leaves only
            ~45px before the links crowd the logo and the CTA pair, so don't
            push it much further without shrinking something else. */}
        <ul className="hidden items-center gap-12 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              {l.children ? (
                <DropdownMenu item={l} />
              ) : (
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[14px] font-medium text-slate transition-colors duration-200 hover:bg-tint hover:text-ink"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={LINKS.logIn}
            className="inline-flex min-h-[44px] items-center px-3 text-[14px] font-medium text-slate transition-colors hover:text-ink"
          >
            Log In
          </a>
          <a
            href={LINKS.bookMeeting}
            {...newTab}
            className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-ink-2 active:scale-[0.98]"
          >
            Book Meeting
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
        >
          {/* Three bars on whole-pixel offsets (3 / 7 / 11 in a 16px box) so
              they render crisply and space evenly. All three are positioned
              with `top` only, mixing top and bottom made the two strokes
              cross 1.5px apart, which is why the X looked lopsided. */}
          <span className="relative block h-4 w-[18px]" aria-hidden="true">
            <span
              className={`absolute left-0 h-[2px] w-[18px] rounded-full bg-ink transition-all duration-300 ease-out ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[3px] rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-[18px] -translate-y-1/2 rounded-full bg-ink transition-all duration-200 ease-out ${
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-[18px] rounded-full bg-ink transition-all duration-300 ease-out ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[11px] rotate-0"
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-line bg-paper/95 p-3 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <ul className="grid gap-1">
              {links.map((l) =>
                l.children ? (
                  <MobileDisclosure
                    key={l.label}
                    item={l}
                    onNavigate={() => setOpen(false)}
                  />
                ) : (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-2.5 text-[15px] font-medium text-slate transition-colors hover:bg-tint hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                )
              )}
            </ul>
            {/* Both pills centre their label with flex rather than padding.
                Only the Log In pill has a border, so padding-based centring
                left the two labels sitting 1px apart once the grid row
                stretched them to a common height. */}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <a
                href={LINKS.logIn}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-full border border-line px-4 text-[14px] font-medium leading-none text-ink"
              >
                Log In
              </a>
              <a
                href={LINKS.bookMeeting}
                {...newTab}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-full bg-ink px-4 text-[14px] font-medium leading-none text-white"
              >
                Book Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
