import { Hero } from "../components/sections/Hero";
import { Gallery } from "../components/sections/Gallery";
import { Blog } from "../components/sections/Blog";
import { Listings } from "../components/sections/Listings";
import { Events } from "../components/sections/Events";
import { Community } from "../components/sections/Community";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-[1120px] mx-auto">
        <Gallery />
        <Blog />
        <Listings />
        <Events />
        <Community />
      </main>
    </>
  );
}
