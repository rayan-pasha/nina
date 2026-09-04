/**
 * Illustrations for the "Where Teams Use AgenQ" cards.
 *
 * Drawn as a single SVG each, on a fixed 566x354 viewBox, so the whole scene
 * scales as one piece instead of reflowing — the layered panels keep their
 * overlap at every card width, which a CSS layout wouldn't guarantee.
 *
 * Restrained on purpose: a cool blue-grey wash, hairline-bordered panels
 * floating on soft shadows, and no decorative objects beyond the shield the
 * insurance scene earns. The conversation is the subject, so the chat card
 * sits in front.
 */

const INK = "#0d0f2c";
const SLATE = "#545876";
const MUTE = "#8b90a8";
const LINE = "#e6e8f0";
const BRAND = "#1d4ed8";
const BRAND2 = "#3b82f6";
const GREEN = "#16a34a";

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#eef1f8" />
        <stop offset="50%" stopColor="#f6f8fc" />
        <stop offset="100%" stopColor="#e9eff9" />
      </linearGradient>
      <linearGradient id={`${id}-obj`} x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#7ba4f8" />
        <stop offset="100%" stopColor={BRAND} />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="11"
          floodColor="#1c2551"
          floodOpacity="0.13"
        />
      </filter>
    </defs>
  );
}

/** Quiet dot field for an otherwise empty corner. */
function DotField({ x, y, cols, rows }) {
  const dots = [];
  for (let c = 0; c < cols; c++)
    for (let r = 0; r < rows; r++)
      dots.push(
        <circle
          key={`${c}-${r}`}
          cx={x + c * 11}
          cy={y + r * 11}
          r="1.5"
          fill={BRAND2}
          opacity="0.16"
        />
      );
  return dots;
}

/** A rounded white panel: soft shadow plus a hairline to keep edges crisp. */
function Panel({ id, x, y, w, h, rotate = 0 }) {
  return (
    <g
      transform={
        rotate ? `rotate(${rotate} ${x + w / 2} ${y + h / 2})` : undefined
      }
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill="#ffffff"
        filter={`url(#${id}-shadow)`}
      />
      <rect
        x={x + 0.5}
        y={y + 0.5}
        width={w - 1}
        height={h - 1}
        rx="11.5"
        fill="none"
        stroke={LINE}
      />
    </g>
  );
}

/** Chat card header — flat brand blue, no gradient. */
function ChatHead({ x, y, w }) {
  return (
    <>
      <path
        d={`M${x} ${y + 12}a12 12 0 0 1 12-12h${w - 24}a12 12 0 0 1 12 12v14H${x}z`}
        fill={BRAND}
      />
      <text x={x + 14} y={y + 18} fontSize="11.5" fontWeight="600" fill="#fff">
        AgenQ
      </text>
      <path
        d={`M${x + w - 25} ${y + 10}l9 9M${x + w - 16} ${y + 10}l-9 9`}
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </>
  );
}

/**
 * One chat bubble. Smaller type than the panels around it, with generous
 * padding and 16px line spacing — at 11px in a tight box the text read as
 * cramped even though it fit.
 */
function Bubble({ x, y, w, lines, me }) {
  const h = 13 + lines.length * 16;
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={me ? BRAND : "#f5f6fa"}
        stroke={me ? "none" : LINE}
      />
      {lines.map((l, i) => (
        <text
          key={l}
          x={x + 12}
          y={y + 18 + i * 16}
          fontSize="10"
          fill={me ? "#fff" : SLATE}
        >
          {l}
        </text>
      ))}
    </>
  );
}

function CheckDot({ x, y, r = 8, fill = GREEN }) {
  return (
    <>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <path
        d={`M${x - r * 0.42} ${y} l${r * 0.3} ${r * 0.32} l${r * 0.55} ${-r * 0.62}`}
        stroke="#fff"
        strokeWidth={r * 0.26}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function Frame({ id, children }) {
  return (
    <svg
      viewBox="0 0 566 354"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
    >
      <Defs id={id} />
      <rect width="566" height="354" fill={`url(#${id}-bg)`} />
      {children}
    </svg>
  );
}

export function InsuranceMock() {
  const id = "ins";
  const rows = [
    ["Policy Owner", "Acme Corporation"],
    ["Policy Number", "POL-2024-7865"],
    ["Effective Date", "May 15, 2026"],
    ["Liability limit", "$2,000,000"],
  ];

  return (
    <Frame id={id}>
      <g aria-hidden="true">
        <DotField x={26} y={28} cols={4} rows={3} />

        {/* Policy record, sitting behind and tilted away */}
        <Panel id={id} x={44} y={44} w={292} h={202} rotate={-2} />
        <g transform="rotate(-2 190 145)">
          <text x={66} y={78} fontSize="14.5" fontWeight="600" fill={INK}>
            Policy Details
          </text>
          <rect x={66} y={90} width="228" height="1" fill={LINE} />
          {rows.map(([k, v], i) => {
            const last = i === rows.length - 1;
            return (
              <g key={k}>
                <text x={66} y={114 + i * 30} fontSize="10.5" fill={MUTE}>
                  {k}
                </text>
                <text
                  x={182}
                  y={114 + i * 30}
                  fontSize={last ? "12.5" : "11"}
                  fontWeight={last ? "600" : "500"}
                  fill={last ? BRAND : INK}
                >
                  {v}
                </text>
                {!last && (
                  <rect
                    x={66}
                    y={124 + i * 30}
                    width="228"
                    height="1"
                    fill={LINE}
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* The one object in either scene, and the insurance mark earns it.
            Sits in the empty band below the record, clear of every row. */}
        <g transform="translate(58 258)">
          <path
            d="M31 2 5 12v22c0 15.5 11 28.5 26 32 15-3.5 26-16.5 26-32V12L31 2Z"
            fill={`url(#${id}-obj)`}
            filter={`url(#${id}-shadow)`}
          />
          <path
            d="M31 2 5 12v22c0 5 1.2 10 3.4 14.5C13.5 22.5 20.5 9.5 31 2Z"
            fill="#fff"
            opacity="0.2"
          />
          <path
            d="m20 33 7.8 7.8L44 24"
            stroke="#fff"
            strokeWidth="4.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* The conversation, in front. Starts clear of the record's values so
            the overlap never cuts a word. */}
        <Panel id={id} x={318} y={62} w={214} h={230} />
        <ChatHead x={318} y={62} w={214} />
        <Bubble x={332} y={104} w={132} lines={["What would you", "like to do?"]} />
        <Bubble
          x={368}
          y={160}
          w={150}
          me
          lines={["Show me the coverage", "for this policy."]}
        />
        <Bubble
          x={332}
          y={216}
          w={158}
          lines={["Here are the coverage", "details for this policy."]}
        />
        <CheckDot x={340} y={270} r={6.5} />
        <text x={352} y={274} fontSize="10" fontWeight="600" fill={GREEN}>
          Completed
        </text>
      </g>
    </Frame>
  );
}

export function SaasMock() {
  const id = "saas";
  const steps = [
    ["Create account", "done"],
    ["Team information", "done"],
    ["Workspace setup", "active"],
    ["Connect integrations", "todo"],
    ["Invite your team", "todo"],
  ];

  return (
    <Frame id={id}>
      <g aria-hidden="true">
        <DotField x={26} y={28} cols={4} rows={3} />

        {/* Onboarding checklist, with the rocket's job done by a progress bar */}
        <Panel id={id} x={44} y={44} w={244} h={252} rotate={-2} />
        <g transform="rotate(-2 166 170)">
          {/* Title trimmed and the count pushed to the panel's inner edge —
              at full width the two ran into each other. */}
          <text x={66} y={78} fontSize="13.5" fontWeight="600" fill={INK}>
            Onboarding
          </text>
          <text x={266} y={78} fontSize="10.5" fill={MUTE} textAnchor="end">
            2 of 5
          </text>
          <rect x={66} y={90} width="200" height="4" rx="2" fill="#e9ecf5" />
          <rect x={66} y={90} width="80" height="4" rx="2" fill={BRAND} />

          {steps.map(([label, state], i) => {
            const y = 128 + i * 34;
            return (
              <g key={label}>
                {i < steps.length - 1 && (
                  <rect x={75.5} y={y + 9} width="1.5" height="25" fill={LINE} />
                )}
                {state === "done" ? (
                  <CheckDot x={76} y={y} r={8} />
                ) : (
                  <>
                    <circle
                      cx={76}
                      cy={y}
                      r="8"
                      fill={state === "active" ? BRAND : "#eef0f7"}
                    />
                    <text
                      x={76}
                      y={y + 3.4}
                      fontSize="9"
                      fontWeight="600"
                      textAnchor="middle"
                      fill={state === "active" ? "#fff" : MUTE}
                    >
                      {i + 1}
                    </text>
                  </>
                )}
                <text
                  x={94}
                  y={y + 3.8}
                  fontSize="11"
                  fontWeight={state === "active" ? "600" : "400"}
                  fill={
                    state === "active" ? BRAND : state === "done" ? SLATE : MUTE
                  }
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        {/* The conversation */}
        <Panel id={id} x={318} y={62} w={214} h={230} />
        <ChatHead x={318} y={62} w={214} />
        <Bubble
          x={332}
          y={104}
          w={142}
          lines={["How can I help you", "complete setup?"]}
        />
        <Bubble
          x={368}
          y={160}
          w={150}
          me
          lines={["Connect our CRM and", "invite my team."]}
        />
        <Bubble
          x={332}
          y={216}
          w={150}
          lines={["Done. CRM connected", "and invites sent."]}
        />
        <CheckDot x={340} y={270} r={6.5} />
        <text x={352} y={274} fontSize="10" fontWeight="600" fill={GREEN}>
          Workspace ready
        </text>
      </g>
    </Frame>
  );
}
