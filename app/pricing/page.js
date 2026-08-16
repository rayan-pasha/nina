import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const description =
  "Plans for deploying NINA, AgenQ's AI product assistant. Priced per assistant, not per user — Starter, Growth, and Enterprise.";

export const metadata = {
  title: "Pricing - AgenQ",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "/pricing",
    title: "Pricing - AgenQ",
    description,
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <Pricing />
      <Footer />
    </>
  );
}
