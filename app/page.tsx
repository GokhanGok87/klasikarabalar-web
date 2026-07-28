import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";
import { Listings } from "./components/Listings";
import { Events } from "./components/Events";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
      <>
        <Nav />
        <Hero />
        <main className="max-w-[1120px] mx-auto">
          <Gallery />
          <Blog />
          <Listings />
          <Events />
          <Community />
        </main>
        <Footer />
      </>
  );
}