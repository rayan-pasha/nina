import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaqPage from "@/components/FaqPage";

export const metadata = {
  title: "FAQ - AgenQ",
  description:
    "What NINA is, how it differs from a copilot or a digital adoption platform, what it is allowed to do inside your product, and what it costs.",
  alternates: { canonical: "/resources/faq" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Nav />
      <FaqPage />
      <Footer />
    </>
  );
}
