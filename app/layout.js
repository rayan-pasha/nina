import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import CtaTracking from "@/components/CtaTracking";
import HubSpot from "@/components/HubSpot";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const title = "Nina - AgenQ";
const description =
  "AI-powered solutions by AgenQ to automate onboarding, customer support, and training for SaaS businesses.";

// Set NEXT_PUBLIC_SITE_URL in production so OG/Twitter tags resolve to
// absolute URLs — social crawlers reject relative image paths.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

// Analytics IDs live in the environment rather than here, so each tag only
// ships when its ID is set — local dev and preview builds send nothing, and
// time spent working on the site never shows up as traffic. All of these
// are read at build time (NEXT_PUBLIC_*), so changing one means a redeploy.
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const hubspotId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "AgenQ",
  keywords: [
    "in-product onboarding",
    "user onboarding",
    "SaaS onboarding",
    "product adoption",
    "agentic AI",
    "AgenQ",
    "NINA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AgenQ",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0d0f2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-[14px] focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        {gaId && <CtaTracking />}
        {hubspotId && <HubSpot portalId={hubspotId} />}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
