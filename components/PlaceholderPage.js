import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Metadata for a placeholder route. Spread into the page's `metadata` so the
 * page is kept out of search: indexing "Coming soon" would show an empty
 * result under the AgenQ name, and it's excluded from the sitemap for the
 * same reason. Drop this when the page gets real content.
 */
export function placeholderMetadata(title, path) {
  return {
    title: `${title} - AgenQ`,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
  };
}

/**
 * Stand-in for a route that exists in the nav but has no content yet.
 * Keeps the site chrome so the page is navigable rather than a dead end, and
 * says "Coming soon" so a visitor knows the page is unfinished rather than
 * broken. Replace the whole file with a real page when the content is written.
 */
export default function PlaceholderPage({ title }) {
  return (
    <>
      <Nav />
      <main id="top" className="relative grid min-h-[70vh] place-items-center px-5 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-tint/70 to-transparent" />
        </div>
        <div className="text-center">
          <h1 className="display text-[2.5rem] sm:text-[3.25rem]">{title}</h1>
          <p className="mt-6 inline-flex items-center rounded-full border border-line bg-paper px-4 py-2 text-[13.5px] font-medium text-mute shadow-soft">
            Coming soon
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
