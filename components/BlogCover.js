/**
 * Generated cover art for blog cards.
 *
 * The live posts have no artwork we can ship, so each one gets a drawn scene
 * built from the site's own palette and shapes — the same fake-app-window and
 * step-chip vocabulary used in Walkthrough and WorkflowFlow. Every scene shares
 * a frame (tinted gradient + faint grid) so a row of cards reads as one set.
 *
 * `compact` drops the numeric labels for the small thumbnails in the All
 * articles list, where 11px type would only render as noise.
 */

const INK = "#0d0f2c";
const BRAND = "#1d4ed8";
const BRAND_2 = "#3b82f6";
const BRAND_3 = "#93c5fd";
const LINE = "#e6e8f0";

function Frame({ id, children }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef4ff" />
          <stop offset="55%" stopColor="#f7f9ff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={`${id}-bar`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={BRAND} />
          <stop offset="100%" stopColor={BRAND_2} />
        </linearGradient>
        <pattern
          id={`${id}-grid`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke={BRAND}
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="640" height="400" fill={`url(#${id}-bg)`} />
      <rect width="640" height="400" fill={`url(#${id}-grid)`} />
      {children}
    </>
  );
}

/* 12% today → 60% by 2034. Five bars climbing toward a dashed target. */
function Adoption({ id, compact }) {
  const bars = [70, 104, 146, 196, 258];
  return (
    <Frame id={id}>
      <line
        x1="96"
        y1="104"
        x2="544"
        y2="104"
        stroke={BRAND_2}
        strokeWidth="2"
        strokeDasharray="7 8"
        strokeLinecap="round"
        opacity="0.7"
      />
      {!compact && (
        <text
          x="544"
          y="90"
          textAnchor="end"
          fill={BRAND}
          fontSize="17"
          fontWeight="600"
        >
          60%
        </text>
      )}
      {bars.map((h, i) => (
        <rect
          key={h}
          x={130 + i * 78}
          y={330 - h}
          width="46"
          height={h}
          rx="12"
          fill={i === bars.length - 1 ? `url(#${id}-bar)` : BRAND_3}
          opacity={i === bars.length - 1 ? 1 : 0.45 + i * 0.12}
        />
      ))}
      {!compact && (
        <text x="130" y="286" fill={INK} fontSize="16" fontWeight="600" opacity="0.55">
          12%
        </text>
      )}
      <line
        x1="96"
        y1="330"
        x2="544"
        y2="330"
        stroke={LINE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Frame>
  );
}

/* Time-to-value compressing: three tracks, each reaching value sooner. */
function TimeToValue({ id, compact }) {
  const tracks = [
    { y: 128, reach: 400, dim: true },
    { y: 200, reach: 300, dim: true },
    { y: 272, reach: 186, dim: false },
  ];
  return (
    <Frame id={id}>
      {tracks.map((t) => (
        <g key={t.y}>
          <rect
            x="110"
            y={t.y - 11}
            width="420"
            height="22"
            rx="11"
            fill={INK}
            opacity="0.05"
          />
          <rect
            x="110"
            y={t.y - 11}
            width={t.reach}
            height="22"
            rx="11"
            fill={t.dim ? BRAND_3 : `url(#${id}-bar)`}
            opacity={t.dim ? 0.55 : 1}
          />
          <circle
            cx={110 + t.reach}
            cy={t.y}
            r={t.dim ? 7 : 11}
            fill="#ffffff"
            stroke={t.dim ? BRAND_3 : BRAND}
            strokeWidth={t.dim ? 3 : 4}
          />
        </g>
      ))}
      <path
        d="M510 128 C 470 176, 380 224, 306 268"
        fill="none"
        stroke={BRAND}
        strokeWidth="2.5"
        strokeDasharray="6 9"
        strokeLinecap="round"
        opacity="0.5"
      />
      {!compact && (
        <text x="110" y="86" fill={INK} fontSize="15" fontWeight="600" opacity="0.5">
          Time to value
        </text>
      )}
    </Frame>
  );
}

/* 90 minutes down to 15 — the case study's headline number. */
function SixX({ id, compact }) {
  return (
    <Frame id={id}>
      <rect x="118" y="112" width="128" height="206" rx="16" fill={BRAND_3} opacity="0.5" />
      <rect x="270" y="284" width="128" height="34" rx="16" fill={`url(#${id}-bar)`} />
      {!compact && (
        <>
          <text x="182" y="352" textAnchor="middle" fill={INK} fontSize="15" opacity="0.5">
            90 min
          </text>
          <text x="334" y="352" textAnchor="middle" fill={BRAND} fontSize="15" fontWeight="600">
            15 min
          </text>
          <text x="470" y="228" textAnchor="middle" fill={INK} fontSize="62" fontWeight="600">
            6×
          </text>
          <text
            x="470"
            y="258"
            textAnchor="middle"
            fill={BRAND}
            fontSize="13"
            fontWeight="600"
            letterSpacing="2"
          >
            FASTER
          </text>
        </>
      )}
      {compact && (
        <text x="470" y="230" textAnchor="middle" fill={INK} fontSize="76" fontWeight="600">
          6×
        </text>
      )}
      <line
        x1="96"
        y1="318"
        x2="544"
        y2="318"
        stroke={LINE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Frame>
  );
}

/* Dashboard V2: one window, a sidebar, and a grid of deployed agents. */
function Dashboard({ id, compact }) {
  const tiles = [
    [268, 150],
    [404, 150],
    [268, 236],
    [404, 236],
  ];
  return (
    <Frame id={id}>
      <rect
        x="96"
        y="76"
        width="448"
        height="248"
        rx="18"
        fill="#ffffff"
        stroke={LINE}
        strokeWidth="2"
      />
      <path
        d="M96 94a18 18 0 0 1 18-18h412a18 18 0 0 1 18 18v22H96Z"
        fill={INK}
        opacity="0.04"
      />
      {[118, 136, 154].map((cx) => (
        <circle key={cx} cx={cx} cy="96" r="4.5" fill={INK} opacity="0.16" />
      ))}
      <rect x="96" y="116" width="140" height="208" fill={INK} opacity="0.03" />
      {[144, 174, 204, 234].map((y, i) => (
        <rect
          key={y}
          x="118"
          y={y}
          width={i === 0 ? 84 : 96}
          height="12"
          rx="6"
          fill={i === 0 ? BRAND : INK}
          opacity={i === 0 ? 1 : 0.13}
        />
      ))}
      {tiles.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width="120"
            height="68"
            rx="14"
            fill={i === 0 ? "#eef4ff" : "#ffffff"}
            stroke={i === 0 ? BRAND_2 : LINE}
            strokeWidth="2"
          />
          <circle cx={x + 22} cy={y + 24} r="9" fill={i === 0 ? BRAND : BRAND_3} opacity={i === 0 ? 1 : 0.6} />
          <rect x={x + 40} y={y + 19} width="52" height="9" rx="4.5" fill={INK} opacity="0.16" />
          <rect x={x + 16} y={y + 44} width="76" height="8" rx="4" fill={INK} opacity="0.09" />
        </g>
      ))}
      {!compact && (
        <rect x="268" y="112" width="94" height="12" rx="6" fill={INK} opacity="0.13" />
      )}
    </Frame>
  );
}

const SCENES = {
  adoption: Adoption,
  timeToValue: TimeToValue,
  sixX: SixX,
  dashboard: Dashboard,
};

export default function BlogCover({ variant, compact = false, className = "" }) {
  const Scene = SCENES[variant] ?? Adoption;
  // The gradient/pattern ids have to be unique per instance — the same cover
  // can appear twice on the page (Latest grid + All articles thumbnail).
  const id = `${variant}-${compact ? "sm" : "lg"}`;

  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    >
      <Scene id={id} compact={compact} />
    </svg>
  );
}
