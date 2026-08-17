import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Docs from "@/components/Docs";

const description =
  "Guides for installing NINA, teaching her your workflows, and running her inside your product.";

export const metadata = {
  title: "Documentation - AgenQ",
  description,
  alternates: { canonical: "/documentation" },
  openGraph: {
    type: "website",
    url: "/documentation",
    title: "Documentation - AgenQ",
    description,
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <Docs />
      <Footer />
    </>
  );
}
