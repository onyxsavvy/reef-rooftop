import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Mood } from "@/components/sections/mood";
import { Menu } from "@/components/sections/menu";
import { MarqueeBand } from "@/components/motion/marquee-band";
import { Gallery } from "@/components/sections/gallery";
import { Events } from "@/components/sections/events";
import { Reviews } from "@/components/sections/reviews";
import { Visit } from "@/components/sections/visit";
import { Reserve } from "@/components/sections/reserve";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navigation />
      <Hero />
      <Experience />
      <Mood />
      <Menu />
      <MarqueeBand text="ROOFTOP · LOUNGE · RANCHI · 4.6★ · " />
      <Gallery />
      <Events />
      <Reviews />
      <Visit />
      <Reserve />
      <Footer />
    </main>
  );
}
