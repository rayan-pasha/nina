import PlaceholderPage from "@/components/PlaceholderPage";

// No page-level metadata on purpose: the root inherits the site title and
// social card from app/layout.js, so link previews for agenq.com stay branded
// while this page is still a placeholder.

export default function Page() {
  return <PlaceholderPage title="Product" />;
}
