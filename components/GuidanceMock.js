/**
 * Illustrations for the three "Three Kinds of Guidance" cards.
 *
 * Same language as VerticalMock.js — cool blue-grey wash, hairline-bordered
 * white panels on a soft shadow, flat brand blue, no decorative objects — but
 * drawn on its own 380x228 viewBox, which is roughly 1:1 with the slot these
 * sit in (a ~371px-wide card over a 13.5rem strip). Keeping the viewBox near
 * the rendered size matters here: the type is the content, and scaling a
 * larger canvas down would have shrunk 10px labels below legibility.
 *
 * One panel carries each scene. At this size a second overlapping panel
 * crowds rather than layers, so depth comes from the shadow alone.
 */

const INK = "#0d0f2c";
const SLATE = "#545876";
const MUTE = "#8b90a8";
const LINE = "#e6e8f0";
const BRAND = "#1d4ed8";
const BRAND2 = "#3b82f6";
const GREEN = "#16a34a";

const W = 380;
const H = 228;

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#eef1f8" />
        <stop offset="50%" stopColor="#f6f8fc" />
        <stop offset="100%" stopColor="#e9eff9" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow
          dx="0"
          dy="7"
          stdDeviation="9"
          floodColor="#1c2551"
          floodOpacity="0.13"
        />
      </filter>
    </defs>
  );
}

/** Quiet dot field, used to keep an otherwise bare corner from reading empty. */
function DotField({ x, y, cols, rows }) {
  const dots = [];
  for (let c = 0; c < cols; c++)
    for (let r = 0; r < rows; r++)
      dots.push(
        <circle
          key={`${c}-${r}`}
          cx={x + c * 10}
          cy={y + r * 10}
          r="1.4"
          fill={BRAND2}
          opacity="0.16"
        />
      );
  return dots;
}

function Panel({ id, x, y, w, h, rx = 12, stroke = LINE }) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={rx}
        fill="#ffffff"
        filter={`url(#${id}-shadow)`}
      />
      <rect
        x={x + 0.5}
        y={y + 0.5}
        width={w - 1}
        height={h - 1}
        rx={rx - 0.5}
        fill="none"
        stroke={stroke}
      />
    </>
  );
}

/** Flat brand-blue card header with the product name and a close affordance. */
function ChatHead({ x, y, w }) {
  return (
    <>
      <path
        d={`M${x} ${y + 12}a12 12 0 0 1 12-12h${w - 24}a12 12 0 0 1 12 12v14H${x}z`}
        fill={BRAND}
      />
      <text x={x + 13} y={y + 17} fontSize="10.5" fontWeight="600" fill="#fff">
        AgenQ
      </text>
      <path
        d={`M${x + w - 23} ${y + 10}l8 8M${x + w - 15} ${y + 10}l-8 8`}
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </>
  );
}

/** One chat bubble. 15px line spacing at 9.5px type reads clearly at 1:1. */
function Bubble({ x, y, w, lines, me }) {
  const h = 12 + lines.length * 15;
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
          x={x + 11}
          y={y + 17 + i * 15}
          fontSize="9.5"
          fill={me ? "#fff" : SLATE}
        >
          {l}
        </text>
      ))}
    </>
  );
}

function CheckDot({ x, y, r = 7, fill = GREEN }) {
  return (
    <>
      <circle cx={x} cy={y} r={r} fill={fill} />
      <path
        d={`M${x - r * 0.42} ${y} l${r * 0.3} ${r * 0.32} l${r * 0.55} ${-r * 0.62}`}
        stroke="#fff"
        strokeWidth={r * 0.28}
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
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <Defs id={id} />
      <rect width={W} height={H} fill={`url(#${id}-bg)`} />
      {children}
    </svg>
  );
}

/**
 * Product Knowledge — a coverage question answered in place, with the clause
 * it came from cited underneath. The citation is the point of the card: the
 * answer is traceable, not generated out of nowhere.
 */
export function CoverageMock() {
  const id = "gd-cov";
  return (
    <Frame id={id}>
      <DotField x={16} y={20} cols={3} rows={3} />

      <Panel id={id} x={40} y={26} w={300} h={176} />
      <ChatHead x={40} y={26} w={300} />

      <Bubble
        x={150}
        y={64}
        w={176}
        lines={["Is flood damage covered?"]}
        me
      />
      <Bubble
        x={54}
        y={100}
        w={196}
        lines={["Yes, up to $50,000 under", "the extended peril rider"]}
      />

      {/* Cited source */}
      <rect
        x={54}
        y={160}
        width={142}
        height={20}
        rx="10"
        fill="#eef4ff"
        stroke="#dbe6fb"
      />
      <rect x={64} y={166} width="7" height="9" rx="1.5" fill={BRAND2} />
      <text x={77} y={174} fontSize="8.5" fontWeight="500" fill={BRAND}>
        Policy wording 4.2
      </text>
    </Frame>
  );
}

/**
 * Software Workflows — a quote part-finished, with AgenQ marking the field
 * that comes next. The filled rows above it show the work already done, so
 * the highlight reads as progress rather than an error state.
 */
export function QuoteMock() {
  const id = "gd-quote";
  const steps = [0, 1, 2];
  const filled = [
    ["Applicant", "M. Okafor"],
    ["Vehicle", "2021 Corolla"],
  ];

  return (
    <Frame id={id}>
      <DotField x={268} y={36} cols={3} rows={3} />

      {/* Panel held to 220 wide so the prompt beside it clears the fields
          entirely — overlapping them buried the values it is meant to
          follow on from. Rows run on a 44 pitch: at 34 each label sat on
          the field above it. */}
      <Panel id={id} x={24} y={18} w={220} h={194} />

      <text x={42} y={42} fontSize="12.5" fontWeight="600" fill={INK}>
        New Quote
      </text>

      {/* Step rail: step two of three is in progress */}
      <g>
        <rect x={42} y={57} width="108" height="2" rx="1" fill={LINE} />
        <rect x={42} y={57} width="54" height="2" rx="1" fill={BRAND} />
        {steps.map((s) => (
          <circle
            key={s}
            cx={42 + s * 54}
            cy={58}
            r="5"
            fill={s <= 1 ? BRAND : "#ffffff"}
            stroke={s <= 1 ? BRAND : LINE}
          />
        ))}
        <text x={162} y={62} fontSize="8.5" fill={MUTE}>
          Step 2 of 3
        </text>
      </g>

      {filled.map(([k, v], i) => (
        <g key={k}>
          <text x={42} y={84 + i * 44} fontSize="8.5" fill={MUTE}>
            {k}
          </text>
          <rect
            x={42}
            y={90 + i * 44}
            width="184"
            height="22"
            rx="6"
            fill="#f5f6fa"
            stroke={LINE}
          />
          <text x={52} y={105 + i * 44} fontSize="9.5" fill={INK}>
            {v}
          </text>
        </g>
      ))}

      {/* The field AgenQ is pointing at */}
      <text x={42} y={172} fontSize="8.5" fill={MUTE}>
        Coverage level
      </text>
      <rect
        x={42}
        y={178}
        width="184"
        height="22"
        rx="6"
        fill="#ffffff"
        stroke={BRAND}
        strokeWidth="1.6"
      />
      <rect x={52} y={185} width="2" height="9" fill={BRAND} />

      {/* Prompt, sitting clear of the panel with its tail on that field */}
      <g>
        <rect
          x={250}
          y={162}
          width={118}
          height={44}
          rx="10"
          fill={BRAND}
          filter={`url(#${id}-shadow)`}
        />
        <path d="M250 183 l-9 6 l9 6 z" fill={BRAND} />
        <text x={263} y={181} fontSize="9" fontWeight="600" fill="#fff">
          Next step
        </text>
        <text x={263} y={195} fontSize="8.5" fill="#dbe6fb">
          Choose a level
        </text>
      </g>
    </Frame>
  );
}

/**
 * Policy Guidance — two plans side by side, the recommended one lifted and
 * outlined in brand. Plain rows rather than a feature matrix: the card is
 * about a clear comparison, not an exhaustive one.
 */
export function CompareMock() {
  const id = "gd-cmp";
  const rows = [
    ["Deductible", "$1,000", "$500"],
    ["Liability", "$1M", "$2M"],
    ["Roadside", "No", "Yes"],
  ];

  return (
    <Frame id={id}>
      <DotField x={18} y={22} cols={3} rows={2} />

      {/* Standard */}
      <Panel id={id} x={46} y={52} w={132} h={146} />
      <text x={62} y={76} fontSize="11" fontWeight="600" fill={SLATE}>
        Standard
      </text>
      <rect x={62} y={86} width="100" height="1" fill={LINE} />

      {/* Recommended */}
      <Panel id={id} x={200} y={38} w={140} h={160} stroke={BRAND2} />
      <rect
        x={200.5}
        y={38.5}
        width={139}
        height={159}
        rx="11.5"
        fill="none"
        stroke={BRAND2}
        strokeWidth="1.6"
      />
      <text x={218} y={70} fontSize="11" fontWeight="600" fill={INK}>
        Premium
      </text>
      <CheckDot x={322} y={64} r={8} fill={BRAND} />
      <rect x={218} y={80} width="104" height="1" fill={LINE} />

      {rows.map(([k, a, b], i) => (
        <g key={k}>
          <text x={62} y={108 + i * 30} fontSize="8.5" fill={MUTE}>
            {k}
          </text>
          <text
            x={62}
            y={122 + i * 30}
            fontSize="10.5"
            fontWeight="500"
            fill={SLATE}
          >
            {a}
          </text>

          <text x={218} y={102 + i * 30} fontSize="8.5" fill={MUTE}>
            {k}
          </text>
          <text
            x={218}
            y={116 + i * 30}
            fontSize="10.5"
            fontWeight="600"
            fill={BRAND}
          >
            {b}
          </text>
        </g>
      ))}
    </Frame>
  );
}

/** Lets the copy in lib/insurance.js name a scene without importing it. */
export const GUIDANCE_MOCKS = {
  coverage: CoverageMock,
  quote: QuoteMock,
  compare: CompareMock,
};
