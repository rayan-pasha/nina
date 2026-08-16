import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MarketingPage from "@/components/MarketingPage";
import { findPage, pagesIn } from "@/lib/pages";

const SECTION = "features";

// Every page is known at build time, so the export can prerender them all and
// refuse anything else rather than trying to render an unknown slug.
export const dynamicParams = false;

export function generateStaticParams() {
  return pagesIn(SECTION).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findPage(SECTION, slug);
  if (!page) return {};

  const title = `${page.navLabel} - AgenQ`;
  const url = `/${SECTION}/${page.slug}`;
  return {
    title,
    description: page.subhead,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description: page.subhead },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = findPage(SECTION, slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <MarketingPage page={page} />
      <Footer />
    </>
  );
}
