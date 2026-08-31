import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import MeetNina from "@/components/MeetNina";
import Solution from "@/components/Solution";
import UseCase from "@/components/UseCase";
import Compare from "@/components/Compare";
import Setup from "@/components/Setup";
import Partner from "@/components/Partner";
import Footer from "@/components/Footer";

const description =
  "NINA guides users through real workflows inside your software, no training calls, no videos, no support tickets.";

export const metadata = {
  title: "For SaaS Onboarding - AgenQ",
  description,
  alternates: { canonical: "/solutions/saas-onboarding" },
  openGraph: {
    type: "website",
    url: "/solutions/saas-onboarding",
    title: "For SaaS Onboarding - AgenQ",
    description,
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Problem />
        <MeetNina />
        <Solution />
        <UseCase />
        <Compare />
        <Setup />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
