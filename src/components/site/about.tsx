import { Reveal, SectionLabel } from "./reveal";
import { Download } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const tech = [
  "Kotlin",
  "Jetpack Compose",
  "Android",
  "Flutter",
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "Git",
];

export function About() {
  return (
    <section id="about" className="shell py-24 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>Who I Am</SectionLabel>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-[12vw] leading-[0.86] md:text-[6vw]">
            <Reveal mask>Mobile &amp; Web</Reveal>
            <Reveal mask delay={120}>
              Developer
            </Reveal>
          </h2>
        </div>
      </div>

      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <img
            src={portrait}
            alt="Portrait of NasrEddine Amraoui"
            loading="lazy"
            width={1200}
            height={1504}
            className="w-full object-cover grayscale"
            style={{ aspectRatio: "4 / 5" }}
          />
          <p className="label-xs mt-4">Fig. 01 — Casablanca, 2026</p>
          <Reveal delay={240}>
            <a
              href="/cv.pdf"
              download="NasrEddine_Amraoui_CV.pdf"
              data-cursor="link"
              className="group inline-flex items-center gap-8 border border-border px-8 py-6 mt-8 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground hover:text-background md:px-12 md:py-8"
            >
              <span className="display text-2xl md:text-4xl">Download CV</span>
              <Download
                size={24}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-1"
                aria-hidden
              />
            </a>
          </Reveal>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="text-lg leading-relaxed md:text-2xl md:leading-[1.4]">
              I&apos;m NasrEddine, a Moroccan developer focused on creating mobile and web
              experiences that combine clean engineering with thoughtful interface design.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              I care about the parts most people never name: how a screen enters, how a list
              settles, how a product feels on a slow connection. Precision over decoration.
            </p>
          </Reveal>

          <div className="mt-14">
            <SectionLabel className="mb-6">Stack</SectionLabel>
            <ul className="border-b border-border">
              {tech.map((t, i) => (
                <Reveal key={t} delay={i * 40} as="li">
                  <div className="group flex items-baseline justify-between border-t border-border py-3 transition-colors duration-500 hover:bg-elevated">
                    <span className="text-sm tracking-[0.06em] uppercase md:text-base">{t}</span>
                    <span className="label-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
