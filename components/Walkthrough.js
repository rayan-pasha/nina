"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Deliberately no framer-motion here. This subtree renders inside the hero's
// `variants={item}` wrapper, and framer propagates variant state to nested
// motion components — a self-driving loop like this one shouldn't have to
// coordinate with that. Plain CSS transitions keep it independent.

/**
 * Scripted walkthrough of NINA completing a task inside an app. Everything on
 * screen comes from a config in lib/walkthroughs.js, so the same engine drives
 * the hero's AgenQ Studio demo and the Ledgerly demo further down the page.
 *
 * Timeline is a flat step index driven by one chained timeout — each step has
 * its own duration so the field fills can move faster than the conversational
 * beats. With N fields:
 *
 *   0          reset + NINA greeting
 *   1          user asks
 *   2          NINA replies, modal opens
 *   3 … 2+N    fields fill, one per step
 *   3+N        submit enables
 *   4+N        NINA confirms, saved
 *   5+N        modal closes, the counter tile ticks up
 *
 * Widths come from container queries, not viewport breakpoints — the hero
 * gives this ~900px while the solution section gives it about half that, and
 * the layout has to answer to its own box rather than the window.
 */

// One dial for the whole timeline. Every duration below is a base value at
// 1×, so raising this slows the walkthrough evenly — typing, cursor travel and
// the conversational beats all stretch together and stay in proportion.
const PACE = 1.25;

// Typing runs at a constant rate, so a field's step has to be long enough to
// hold its own text — a fixed step with the window divided by length made
// short values crawl and long ones blur past.
const CLICK_DELAY = 340 * PACE; // cursor travel + click, before the first character
const MS_PER_CHAR = 36 * PACE; // constant typing speed across every field
const SETTLE = 130 * PACE; // beat after the last character, before moving on

const fieldStep = (value) => CLICK_DELAY + value.length * MS_PER_CHAR + SETTLE;

const PATHS = {
  dashboard: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  chart: "M5 20v-8M10 20V6M15 20v-9M20 20V9",
  dollar:
    "M12 3v18M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 0 1-3.4 0",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 2v2M12 20v2M22 12h-2M4 12H2M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6",
  clipboard:
    "M9 4h6v3H9zM7 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1",
  users:
    "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.9",
  branch:
    "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 9a9 9 0 0 1-9 9",
  message: "M21 11.5a8.4 8.4 0 0 1-9 8.4L4 21l1.1-4.4A8.4 8.4 0 1 1 21 11.5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  stopwatch: "M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 10v4M9 2h6M19.5 5.5 18 7",
  sparkles:
    "M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3ZM19 15l.8 2L22 17.8l-2.2.8L19 21l-.8-2.2L16 17.8l2.2-.8L19 15Z",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  micOff:
    "M3 3l18 18M9 9v3a3 3 0 0 0 5.1 2.1M15 9.3V5a3 3 0 0 0-5.7-1.3M19 10v2a7 7 0 0 1-1.2 3.9M12 19v3",
  volumeOff: "M11 5 6 9H2v6h4l5 4V5ZM23 9l-6 6M17 9l6 6",
  send: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z",
  check: "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14.1l-3-3",
  close: "M18 6 6 18M6 6l12 12",
  thumbUp:
    "M7 22V11M2 13v7a2 2 0 0 0 2 2h13.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3H14V5a3 3 0 0 0-3-3l-4 9",
  // Bare tick, for dropping inside the filled dot on a completed row —
  // `check` carries its own circle and would double up.
  tick: "M20 6 9 17l-5-5",
};

function Icon({ name, className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

function Dots() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}

function Bubble({ show, from, children }) {
  const mine = from === "user";
  return (
    <div
      className={`mb-2 flex transition-all duration-300 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
      } ${mine ? "justify-end" : ""}`}
    >
      <span
        className={`max-w-[92%] rounded-xl px-2.5 py-2 text-[11.5px] leading-snug ${
          mine ? "bg-brand text-white" : "bg-brand-soft text-ink"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/** One line of NINA's progress list: pending, in flight, or ticked off. */
function ProgressRow({ label, state }) {
  return (
    <div
      className={`flex items-start gap-2 py-[3px] transition-opacity duration-300 ${
        state === "pending" ? "opacity-40" : "opacity-100"
      }`}
    >
      <span className="mt-[2.5px] shrink-0">
        {state === "done" ? (
          <span className="grid h-3 w-3 place-items-center rounded-full bg-brand text-white">
            <Icon name="tick" className="h-[7px] w-[7px]" />
          </span>
        ) : state === "active" ? (
          <span className="block h-3 w-3 animate-spin rounded-full border-[1.5px] border-brand border-t-transparent" />
        ) : (
          <span className="block h-3 w-3 rounded-full border-[1.5px] border-line" />
        )}
      </span>
      <span className="text-[11px] leading-snug text-ink">{label}</span>
    </div>
  );
}

/** Turn a config into the step indices and durations the timeline runs on. */
function useScript(config) {
  return useMemo(() => {
    const { fields, actions } = config;
    const submit = 3 + fields.length;
    const confirm = submit + 1;
    const close = confirm + 1;

    let prev = 0;
    const rows = actions.map((a) => {
      if (a.submit) return { label: a.label, from: submit, to: confirm };
      const row = { label: a.label, from: 3 + prev, to: 3 + a.until };
      prev = a.until;
      return row;
    });

    return {
      durations: [
        2100 * PACE, // greeting
        1900 * PACE, // user asks
        1400 * PACE, // NINA replies, modal opens
        ...fields.map((f) => fieldStep(f.value)),
        1000 * PACE, // submit enables
        1900 * PACE, // NINA confirms
        2600 * PACE, // modal closes, counter ticks
      ],
      lastField: 2 + fields.length,
      submit,
      confirm,
      close,
      total: close + 1,
      rows,
    };
  }, [config]);
}

export default function Walkthrough({ config }) {
  const { fields, brand, nav, metrics, panel, modal, chat } = config;
  const script = useScript(config);

  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, show: false });
  const [typed, setTyped] = useState(0);

  const cardRef = useRef(null);
  const fieldRefs = useRef([]);
  const submitRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setStep(script.confirm);
    }
  }, [script.confirm]);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(
      () => setStep((s) => (s + 1) % script.total),
      script.durations[step]
    );
    return () => clearTimeout(id);
  }, [step, reduced, script]);

  const modalOpen = step >= 2 && step <= script.confirm;
  const activeField = step >= 3 && step <= script.lastField ? step - 3 : -1;
  const submitReady = step >= script.submit;
  const saved = step >= script.confirm;
  const ticked = step >= script.close;

  // Fields *before* the active one are done; the active one is mid-typing.
  const completed =
    activeField >= 0 ? activeField : step >= script.submit ? fields.length : 0;

  const valueFor = (i) => {
    if (activeField === i) return fields[i].value.slice(0, typed);
    return i < completed ? fields[i].value : "";
  };

  // Type the active field out character by character, but only once the
  // cursor has arrived and clicked.
  useEffect(() => {
    setTyped(0);
    if (activeField < 0 || reduced) {
      if (reduced) setTyped(999);
      return;
    }

    const full = fields[activeField].value;

    let count = 0;
    let ticker;
    const starter = setTimeout(() => {
      ticker = setInterval(() => {
        count += 1;
        setTyped(count);
        if (count >= full.length) clearInterval(ticker);
      }, MS_PER_CHAR);
    }, CLICK_DELAY);

    return () => {
      clearTimeout(starter);
      clearInterval(ticker);
    };
  }, [activeField, reduced, fields]);

  // Park the cursor over whatever NINA is acting on this step, measured
  // against the modal card so it stays correct at any width.
  useEffect(() => {
    const place = () => {
      const target =
        activeField >= 0
          ? fieldRefs.current[activeField]
          : step === script.submit
            ? submitRef.current
            : null;

      if (!target || !cardRef.current) {
        setCursor((c) => (c.show ? { ...c, show: false } : c));
        return;
      }

      const t = target.getBoundingClientRect();
      const c = cardRef.current.getBoundingClientRect();
      // -3/-2 pulls the wrapper back so the arrow's *point* lands on the
      // target rather than the svg's top-left corner.
      const y = t.top - c.top + t.height * 0.6 - 2;
      setCursor({
        x: t.left - c.left + Math.min(t.width * 0.45, 54) - 3,
        y,
        // Near the bottom of the card the name tag would hang outside it,
        // so flip it above the arrow instead.
        flip: y + 40 > c.height,
        show: true,
      });
    };

    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [step, activeField, script.submit]);

  return (
    <div className="@container overflow-hidden rounded-2xl border border-line bg-paper text-left shadow-soft">
      <div className="grid grid-cols-1 @lg:grid-cols-[1fr_212px] @3xl:grid-cols-[132px_1fr_260px]">
        {/* Nav rail */}
        <div className="hidden border-r border-line px-2.5 py-3 @3xl:block">
          <div className="px-2 pb-3 text-[13px] font-semibold text-ink">
            {brand.head}
            <span className="text-brand">{brand.tail}</span>
          </div>
          {nav.map(([icon, label], i) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11.5px] ${
                i === 0 ? "bg-brand-soft font-medium text-brand" : "text-mute"
              }`}
            >
              <Icon name={icon} />
              {label}
            </div>
          ))}
        </div>

        {/* Main pane */}
        <div className="relative flex flex-col border-line @lg:border-r">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
            <span className="text-[12px] font-medium text-ink">
              {config.pageTitle}
            </span>
            <span className="ml-auto text-mute">
              <Icon name="bell" />
            </span>
            <span className="flex items-center gap-1 rounded-md bg-brand-soft px-2 py-1 text-[11px] font-medium text-brand">
              <Icon name="sparkles" className="h-3 w-3" />
              Ask NINA
            </span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-tint text-[10px] text-mute">
              A
            </span>
          </div>

          {/* Column layout so the panel card takes up whatever height NINA's
              chat adds, otherwise her progress list stretches the row and
              leaves the dashboard with dead space under it. */}
          <div className="flex min-h-[336px] flex-1 flex-col p-3">
            <div className="grid grid-cols-2 gap-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-lg border p-2 transition-shadow duration-500 ${
                    m.counter && ticked
                      ? "border-brand shadow-[0_0_0_1.5px_var(--color-brand)]"
                      : "border-line"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-mute">
                    <Icon name={m.icon} className="h-3 w-3" />
                    <span className="truncate">{m.label}</span>
                    {/* The badge is decorative, and in a narrow container it
                        steals enough width to clip the label beside it. */}
                    <span className="ml-auto hidden shrink-0 rounded bg-brand-soft px-1.5 py-px text-[10px] text-brand @3xl:inline-block">
                      {m.badge}
                    </span>
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-ink">
                    {m.counter ? m.counter[ticked ? 1 : 0] : m.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-1 flex-col rounded-lg border border-line p-2.5">
              <div className="text-[11.5px] font-medium text-ink">
                {panel.title}
              </div>
              <div className="mt-0.5 text-[11px] text-mute">
                {panel.subtitle}
              </div>
              <div className="grid flex-1 place-items-center py-4 text-center text-[11px] text-mute/70">
                {panel.empty}
              </div>
            </div>
          </div>

          {/* Task modal */}
          <div
            className={`absolute inset-0 grid place-items-center bg-ink/35 p-2.5 transition-opacity duration-300 ${
              modalOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div
              ref={cardRef}
              className={`relative w-full rounded-xl border border-line bg-paper p-3 transition-transform duration-300 ease-out ${
                modalOpen ? "scale-100" : "scale-[0.97]"
              }`}
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span className="text-[12px] font-medium text-ink">
                  {modal.title}
                </span>
                <span className="ml-auto text-mute/60">
                  <Icon name="close" className="h-3 w-3" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {fields.map((f, i) => (
                  <div key={f.label} className={f.full ? "col-span-2" : ""}>
                    <div className="mb-1 text-[11px] text-mute">{f.label}</div>
                    <div
                      ref={(el) => {
                        fieldRefs.current[i] = el;
                      }}
                      className={`min-h-[26px] rounded-md border px-2 py-1 text-[11px] text-ink transition-all duration-300 ${
                        activeField === i
                          ? "border-brand bg-paper shadow-[inset_0_0_0_1px_var(--color-brand)]"
                          : "border-line bg-tint/60"
                      }`}
                    >
                      {valueFor(i)}
                      {activeField === i && (
                        <span className="ml-px inline-block h-3 w-px animate-pulse bg-brand align-[-1px]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span
                  ref={submitRef}
                  className={`rounded-md bg-brand px-3 py-1.5 text-[11px] font-medium text-white transition-opacity duration-300 ${
                    submitReady ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {modal.submit}
                </span>
                <span
                  className={`flex items-center gap-1 text-[11px] font-medium text-brand transition-opacity duration-400 ${
                    saved ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Icon name="check" className="h-3.5 w-3.5" />
                  Saved
                </span>
              </div>

              {/* NINA's cursor — glides to whatever she's filling, taps, moves on */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute z-20 transition-all duration-300 ease-out"
                style={{
                  left: `${cursor.x}px`,
                  top: `${cursor.y}px`,
                  opacity: cursor.show ? 1 : 0,
                }}
              >
                <span
                  key={`ring-${step}`}
                  style={{ animationDelay: "300ms" }}
                  className="absolute -left-4 -top-4 block h-8 w-8 rounded-full bg-brand/30 animate-click-ring"
                />
                <svg
                  key={`tip-${step}`}
                  viewBox="0 0 24 24"
                  style={{ animationDelay: "300ms" }}
                  className="relative h-6 w-6 origin-top-left animate-tap drop-shadow-[0_1px_3px_rgba(13,15,44,0.4)]"
                >
                  <path
                    d="M3 2 20 12.8 12.2 13.8 9.4 21Z"
                    fill="var(--color-brand)"
                    stroke="#fff"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`absolute left-[17px] whitespace-nowrap rounded-md bg-brand px-1.5 py-0.5 text-[11px] font-medium leading-tight text-white shadow-[0_1px_3px_rgba(13,15,44,0.3)] ${
                    cursor.flip ? "bottom-[20px]" : "top-[21px]"
                  }`}
                >
                  Nina
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* NINA panel */}
        <div className="flex flex-col border-t border-line @lg:border-t-0">
          <div className="flex items-center gap-2 border-b border-line px-2.5 py-2.5">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-soft text-brand">
              <Icon name="user" className="h-3 w-3" />
            </span>
            <span className="text-[12px] font-medium text-ink">Nina</span>
            <span className="ml-auto flex items-center gap-1.5 text-mute">
              <Icon name="micOff" className="h-3 w-3" />
              <Icon name="volumeOff" className="h-3 w-3" />
              <Dots />
            </span>
          </div>

          <div className="flex-1 p-2.5">
            <Bubble show>
              I&apos;m Nina, your assistant. Ask me anything. I&apos;m here to
              help.
            </Bubble>
            <div
              className={`mb-2 flex gap-1.5 pl-0.5 text-mute/50 transition-opacity duration-300 ${
                step >= 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <Icon name="thumbUp" className="h-3 w-3" />
              <Icon name="thumbUp" className="h-3 w-3 rotate-180" />
            </div>
            <Bubble show={step >= 1} from="user">
              {chat.ask}
            </Bubble>
            <Bubble show={step >= 2}>{chat.ack}</Bubble>

            {/* Always mounted, faded until she starts, so the panel doesn't
                reflow the moment the list appears. */}
            <div
              className={`mb-2 rounded-xl border border-line bg-paper p-2.5 transition-all duration-300 ease-out ${
                step >= 3 ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
              }`}
            >
              {script.rows.map((r) => (
                <ProgressRow
                  key={r.label}
                  label={r.label}
                  state={
                    step < r.from ? "pending" : step < r.to ? "active" : "done"
                  }
                />
              ))}
            </div>

            <Bubble show={step >= script.confirm}>{chat.done}</Bubble>
          </div>

          <div className="border-t border-line px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="flex-1 rounded-full border border-line px-2.5 py-1.5 text-[11px] text-mute/60">
                Message Nina
              </span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                <Icon name="send" className="h-3 w-3" />
              </span>
            </div>
            <div className="mt-1 text-right text-[10px] text-mute/50">
              Powered by AgenQ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
