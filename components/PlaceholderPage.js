import Nav from "@/components/Nav";

/**
 * Stand-in for a route that exists in the nav but has no content yet.
 * Keeps the site nav so the page is navigable rather than a dead end.
 */
export default function PlaceholderPage({ title }) {
  return (
    <>
      <Nav />
      <main className="grid min-h-screen place-items-center px-5 pb-24 pt-32">
        <h1 className="display text-center text-[2.5rem] sm:text-[3.25rem]">
          {title}
        </h1>
      </main>
    </>
  );
}
