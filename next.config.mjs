/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hides the floating Next.js dev badge in the bottom-left corner. Dev-only
  // chrome — it never shipped to production, but it reads as part of the UI
  // when reviewing the page.
  devIndicators: false,
};

export default nextConfig;
