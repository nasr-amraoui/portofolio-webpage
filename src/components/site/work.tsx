import { Reveal, SectionLabel } from "./reveal";
import taxista from "@/assets/work-taxista.jpg";
import mabit from "@/assets/work-mabit.jpg";
import authengo from "@/assets/work-authengo.jpg";
import talkmate from "@/assets/work-talkmate.jpg";
import prayer from "@/assets/work-prayer.jpg";
import visulab from "@/assets/work-visulab.jpg";

const projects = [
  { n: "01", name: "Taxista", cat: "Mobile / Product Design / Kotlin", year: "2024", img: taxista, desc: "Ride-hailing app for local drivers — booking, live trips and fare logic.", wide: true },
  { n: "02", name: "Mabit", cat: "Web / Mobile / Product", year: "2025", img: mabit, desc: "Stay management platform with a dense operator dashboard.", wide: false },
  { n: "03", name: "Authengo", cat: "Mobile / Security / UX", year: "2025", img: authengo, desc: "Biometric authentication flows designed to disappear into the product.", wide: false },
  { n: "04", name: "Talk Mate", cat: "AI / Mobile / Product", year: "2025", img: talkmate, desc: "Conversational language practice with real-time speech feedback.", wide: true },
  { n: "05", name: "Prayer", cat: "Mobile / Kotlin / UI", year: "2026", img: prayer, desc: "Quiet, precise prayer timing built around typography and calm.", wide: false },
  { n: "06", name: "Visulab", cat: "Brand / Web / E-commerce", year: "2026", img: visulab, desc: "Identity system and storefront for a small print studio.", wide: false },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-40">
      <div className="shell grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>Selected Work</SectionLabel>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A selection of projects focused on useful products, thoughtful interfaces and
              purposeful digital experiences.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="shell mt-20 grid gap-x-10 gap-y-24 md:mt-32 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.n}
            delay={(i % 2) * 100}
            className={p.wide ? "md:col-span-2" : undefined}
          >
            <article data-cursor="view" className="group">
              <div className="overflow-hidden bg-elevated">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.cat}`}
                  loading="lazy"
                  width={1600}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.03]"
                  style={{ aspectRatio: p.wide ? "16 / 8" : "4 / 3" }}
                />
              </div>
              <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 border-t border-border pt-5">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-4">
                    <span className="label-xs">{p.n}</span>
                    <h3 className="display text-3xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 md:text-5xl">
                      {p.name}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {p.desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="label-xs">{p.year}</p>
                  <p className="mt-2 text-[10px] tracking-[0.14em] uppercase text-faint-foreground">
                    {p.cat}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-28 overflow-hidden border-y border-border py-6 md:mt-40">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {["Design", "Code", "Ship", "Useful Products", "Careful Details", "From Idea To Interface"].map(
                (w) => (
                  <span
                    key={w}
                    className="display mx-8 text-4xl text-faint-foreground md:mx-14 md:text-6xl"
                  >
                    {w}
                    <span className="mx-8 align-middle text-base md:mx-14">◦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
