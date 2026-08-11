import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Blog - AgenQ",
  description:
    "Writing from the AgenQ team on AI adoption, SaaS onboarding, time-to-value, and agentic workflows.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog - AgenQ",
    description:
      "Writing from the AgenQ team on AI adoption, SaaS onboarding, time-to-value, and agentic workflows.",
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <BlogIndex />
      <Footer />
    </>
  );
}
