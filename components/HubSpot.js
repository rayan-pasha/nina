"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

/**
 * HubSpot tracking code, plus the one thing it can't do on its own here.
 *
 * The loader records a page view when it runs, and then never again: it
 * predates sites that change page without reloading, which is how every
 * link on this one works. So each route change is reported by hand, the
 * way HubSpot documents for single-page apps. The first render is skipped
 * because the loader has already counted it.
 *
 * `_hsq` is HubSpot's command queue. Pushing to it before the script has
 * loaded is fine — the script drains whatever it finds when it arrives.
 */
export default function HubSpot({ portalId }) {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const hsq = (window._hsq = window._hsq || []);
    hsq.push(["setPath", pathname]);
    hsq.push(["trackPageView"]);
  }, [pathname]);

  return (
    <Script
      id="hs-script-loader"
      src={`https://js.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
