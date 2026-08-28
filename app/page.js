import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Product from "@/components/Product";

// No page-level title on purpose: the root inherits the site title and social
// card from app/layout.js, so link previews for the domain stay branded.

export default function Page() {
  return (
    <>
      <Nav />
      <Product />
      <Footer />
    </>
  );
}
