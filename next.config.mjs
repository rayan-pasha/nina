/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every route prerenders — no server rendering, middleware, or route
  // handlers — so the build emits a plain folder of HTML to `out/`. That's
  // what Cloudflare Pages serves, and it keeps the site portable to any
  // static host.
  output: "export",

  // Static hosts resolve /blog by looking for /blog/index.html, so emit the
  // trailing-slash directory form rather than a bare blog.html.
  trailingSlash: true,

  // Hides the floating Next.js dev badge in the bottom-left corner. Dev-only
  // chrome — it never shipped to production, but it reads as part of the UI
  // when reviewing the page.
  devIndicators: false,
};

export default nextConfig;
