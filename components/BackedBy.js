"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Infinite logo marquee.
 *
 * The track is two identical halves translated by -50%, so half two lands
 * exactly where half one began. For that to read as continuous, **one half
 * must be at least as wide as the visible container** — otherwise the track
 * runs out mid-cycle and you see it snap. Four logos only measure ~560px, so
 * each half repeats the list as many times as needed to cover the container,
 * measured at runtime rather than hardcoded (logo widths change once real
 * files are dropped in).
 *
 * Duration is derived from that width so the speed stays constant no matter
 * how many repeats it takes.
 */
// `size` and `width` are per-logo on purpose. These marks aren't visually
// equivalent at a shared cap — Marl is a stacked lockup (icon over two lines
// of type), so it carries far less weight per pixel than a plain wordmark and
// needs more room to read at the same optical size. Each is the only max-h /
// max-w source for its image so two competing Tailwind utilities can't fight
// over precedence.
//
// Width matters most for the long wordmarks: NEXT AI is 5.3:1, so at a 128px
// cap it would be clamped to ~24px tall and read as half the size of the
// square marks beside it.
const WIDTH = "max-w-[104px] sm:max-w-[128px]";

const BACKERS = [
  {
    name: "Marl Accelerator",
    src: "/logos/marl.png",
    size: "max-h-14 sm:max-h-16",
    width: WIDTH,
  },
  {
    name: "NEXT Canada",
    src: "/logos/next-canada.png",
    size: "max-h-12 sm:max-h-14",
    width: "max-w-[132px] sm:max-w-[160px]",
  },
  {
    name: "NEXT AI",
    src: "/logos/next-ai.png",
    size: "max-h-9 sm:max-h-11",
    width: "max-w-[150px] sm:max-w-[180px]",
  },
  { name: "MaRS", src: "/logos/mars.png", size: "max-h-10 sm:max-h-12", width: WIDTH },
  { name: "NEC X", src: "/logos/necx.png", size: "max-h-10 sm:max-h-12", width: WIDTH },
];

const PX_PER_SECOND = 55;

// Remembers logo files that 404 so the extra marquee copies — and any
// re-render from a resize — render the wordmark instead of re-requesting.
const missing = new Set();

function Logo({ name, src, size = "max-h-10 sm:max-h-12", width = WIDTH }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  const markMissing = () => {
    if (src) missing.add(src);
    setFailed(true);
  };

  // onError alone isn't enough: server-rendered images can finish failing
  // before React hydrates and attaches the handler, so a broken file would
  // sit there as a blank box. Re-check load state once on mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) markMissing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (failed || !src || missing.has(src)) {
    return (
      <span className="whitespace-nowrap text-[17px] font-semibold tracking-tight text-mute">
        {name}
      </span>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={name}
      onError={markMissing}
      // Bounded by both height and width rather than height alone: some of
      // these marks are square and some are long wordmarks, so a shared
      // height would leave the square ones looking shrunken beside them.
      className={`${size} ${width} w-auto object-contain`}
    />
  );
}

function Group({ innerRef, hidden }) {
  return (
    <div
      ref={innerRef}
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
    >
      {BACKERS.map((b) => (
        <div key={b.name} className="grid h-14 shrink-0 place-items-center sm:h-16">
          <Logo name={b.name} src={b.src} size={b.size} width={b.width} />
        </div>
      ))}
    </div>
  );
}

export default function BackedBy() {
  const wrapRef = useRef(null);
  const groupRef = useRef(null);
  const [reps, setReps] = useState(2);
  const [halfWidth, setHalfWidth] = useState(0);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const group = groupRef.current;
    if (!wrap || !group) return;

    const groupW = group.getBoundingClientRect().width;
    const wrapW = wrap.getBoundingClientRect().width;
    if (!groupW || !wrapW) return;

    // +1 so there's always a full group of slack — landing exactly flush
    // leaves no room for sub-pixel rounding at the loop point.
    const needed = Math.max(1, Math.ceil(wrapW / groupW) + 1);
    setReps(needed);
    setHalfWidth(needed * groupW);
  }, []);

  useEffect(() => {
    measure();
    // Re-measure once images and webfonts have settled, since either can
    // change how wide a group actually is.
    const t = setTimeout(measure, 400);

    // ResizeObserver rather than a window resize listener: it fires whenever
    // the container itself changes size, including layout shifts that never
    // resize the window.
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (groupRef.current) ro.observe(groupRef.current);

    // Redundant with the observer in a normal browser, but RO callbacks are
    // delivered on the frame lifecycle and get suppressed in environments
    // that aren't compositing. Cheap insurance.
    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section aria-label="Backed by" className="pt-14 sm:pt-16">
      <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.18em] text-mute">
        Backed by
      </p>

      <div
        ref={wrapRef}
        className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div
          className="flex w-max animate-marquee"
          style={
            halfWidth
              ? { animationDuration: `${halfWidth / PX_PER_SECOND}s` }
              : undefined
          }
        >
          {Array.from({ length: reps * 2 }, (_, i) => (
            <Group
              key={i}
              innerRef={i === 0 ? groupRef : undefined}
              hidden={i > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
