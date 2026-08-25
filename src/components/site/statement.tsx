import { Reveal, SectionLabel } from "./reveal";

const words = [
  "I",
  "build",
  "digital",
  "products",
  "that",
  "are",
  "simple",
  "to",
  "use,",
  "impossible",
  "to",
  "ignore.",
];

export function Statement() {
  return (
    <section id="introduction" className="shell py-32 md:py-52">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>Introduction</SectionLabel>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-[9vw] leading-[0.92] md:text-[4.6vw]">
            {words.map((w, i) => (
              <Reveal
                key={`${w}-${i}`}
                as="span"
                mask
                delay={i * 45}
                className="mr-[0.28em] inline-block align-top"
              >
                <span className={i > 8 ? "text-muted-foreground" : undefined}>{w}</span>
              </Reveal>
            ))}
          </h2>
          <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
            <Reveal>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Design. Code. Ship. I work end to end — from the first rough idea to a shipped
                interface that holds up under real use.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Software with intention: careful typography, restrained motion, and engineering
                that stays readable long after launch.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
