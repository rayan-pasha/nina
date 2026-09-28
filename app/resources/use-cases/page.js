import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UseCaseIndex from "@/components/UseCaseIndex";

export const metadata = {
  title: "Use Cases - AgenQ",
  description:
    "Every AgenQ solution, feature, and use-case page in one place — by industry, by outcome, by capability, and by team.",
  alternates: { canonical: "/resources/use-cases" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <Nav />
      <UseCaseIndex />
      <Footer />
    </>
  );
}
