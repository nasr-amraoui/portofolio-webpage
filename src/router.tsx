import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./routes/index";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/timeline";
import { Faq } from "@/components/site/faq";
import { Stats } from "@/components/site/stats";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Statement } from "@/components/site/statement";
import { CustomCursor } from "@/components/site/cursor";
import { Footer } from "@/components/site/footer";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { Faq } from "@/components/site/faq";
import { Experience } from "@/components/site/timeline";
import { Contact } from "@/components/site/contact";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  </BrowserRouter>
);