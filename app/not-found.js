import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Exported as /404.html, which wrangler.jsonc serves for any unknown path.
 * Same chrome as every other page so a bad link lands somewhere navigable
 * instead of on Next's bare default.
 */

export const metadata = {
  title: "Page not found - AgenQ",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="top"
        className="relative grid min-h-[70vh] place-items-center px-5 pb-24 pt-40"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>
        <div className="max-w-xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-mute">
            404
          </p>
          <h1 className="display mt-4 text-[2.5rem] sm:text-[3.25rem]">
            That page isn&apos;t <span className="text-grad">here</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[16.5px] leading-relaxed">
            The link may be out of date, or the page may have moved
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center rounded-full bg-gradient-to-r from-brand-2 to-brand px-7 text-[15px] font-semibold text-white shadow-brand transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
            >
              Back to home
            </Link>
            <Link
              href="/solutions/saas-onboarding"
              className="inline-flex min-h-[48px] items-center rounded-full border border-line bg-paper px-7 text-[15px] font-medium text-ink shadow-soft transition-all duration-200 hover:border-brand-2/35"
            >
              See NINA
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
