import { ImageResponse } from "next/og";

export const alt = "Nina - AgenQ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 300,
            width: 700,
            height: 520,
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.45), rgba(13,15,44,0))",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 600 }}>
            AgenQ
          </div>
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
