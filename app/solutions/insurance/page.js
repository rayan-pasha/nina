import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Insurance from "@/components/Insurance";

const description =
  "AgenQ turns your insurance platform into its own expert — product knowledge and workflow guidance, without leaving the software.";

export const metadata = {
  title: "For Insurance - AgenQ",
  description,
  alternates: { canonical: "/solutions/insurance" },
  openGraph: {
    type: "website",
    url: "/solutions/insurance",
    title: "For Insurance - AgenQ",
    description,
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <Insurance />
      <Footer />
    </>
  );
}
