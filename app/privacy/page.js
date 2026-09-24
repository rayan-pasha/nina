import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import { PRIVACY } from "@/lib/privacy";

export const metadata = {
  title: "Privacy Policy - AgenQ",
  description:
    "What AgenQ collects when you visit agenq.com, why, who else sees it, and how to opt out.",
  alternates: { canonical: "/privacy" },
  // Indexable: people look for a company's privacy policy by name, and a
  // missing one reads as something to hide.
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Nav />
      <LegalPage doc={PRIVACY} />
      <Footer />
    </>
  );
}
