import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

// The white wordmark, not the black one used in the nav: this card sits on a
// near-black background. Inlined as a data URI because the card is rendered
// during the build, when there's no server to fetch a URL from.
const logo = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "content/images/agenq-logo-white.png")
).toString("base64")}`;

export const alt = "Nina - AgenQ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The site builds to a static export, which has no server to render this on
// request — force-static bakes it to a PNG during the build instead.
export const dynamic = "force-static";

/**
 * Generated at build time — no binary asset to keep in sync.
 * Uses a system font stack rather than Poppins so rendering never depends on
 * a network fetch during the build.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0f2c",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow. Satori ignores `closest-side` and paints the element's box,
            so the shape has to come from the element itself: an ellipse via
            border-radius, with the gradient fading out well inside it. */}
        <div
          style={{
            position: "absolute",
            top: -300,
            left: 280,
            width: 760,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.42) 0%, rgba(59,130,246,0.16) 45%, rgba(13,15,44,0) 72%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={228} height={75} alt="AgenQ" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#93c5fd",
              fontSize: 24,
              letterSpacing: 1,
              marginBottom: 22,
            }}
          >
            In-product onboarding
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Your product should onboard its own users.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["Ask NINA", "Follow highlighted steps", "Done"].map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  padding: "12px 22px",
                  borderRadius: 999,
                  background: i === 0 ? "#1d4ed8" : "rgba(255,255,255,0.08)",
                  color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.65)",
                  fontSize: 24,
                }}
              >
                {step}
              </div>
              {i < 2 && (
                <div style={{ display: "flex", color: "rgba(255,255,255,0.3)", fontSize: 24 }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
