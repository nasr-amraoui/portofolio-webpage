import { CustomCursor } from "@/components/site/cursor";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Statement } from "@/components/site/statement";
import { Work } from "@/components/site/work";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/timeline";
import { Stats } from "@/components/site/stats";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const title = "NasrEddine Amraoui — Mobile & Web Developer";
const description =
  "Portfolio of NasrEddine Amraoui, a Moroccan mobile and web developer building thoughtful digital products, interfaces and experiences.";

export function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <CustomCursor />
      <Nav />
      <Hero />
      <Statement />
      <Work />
      <About />
      <Experience />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}