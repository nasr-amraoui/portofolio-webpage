import { Reveal, SectionLabel } from "./reveal";

type Row = { year: string; role: string; org: string; desc?: string };

const experience: Row[] = [
  {
    year: "2024",
    role: "Android Developer",
    org: "Freelance / Casablanca",
    desc: "Shipped native Kotlin apps for local operators — booking, payments and offline-first data.",
  },
  {
    year: "2025",
    role: "Mobile & Web Developer",
    org: "Product Studio",
    desc: "Built cross-platform products end to end, from architecture to interface systems.",
  },
  {
    year: "2026",
    role: "Product Developer",
    org: "Independent",
    desc: "Working with founders on focused digital products and interface engineering.",
  },
];

const education: Row[] = [
  { year: "2024", role: "Technician Specialized", org: "Digital Development" },
  { year: "2026", role: "Professional License", org: "Software Engineering" },
];

function Rows({ rows }: { rows: Row[] }) {
  return (
    <div className="border-b border-border">
      {rows.map((r, i) => (
        <Reveal key={`${r.year}-${r.role}`} delay={i * 80}>
          <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-t border-border py-7 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-elevated md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,20rem)] md:gap-10 md:py-9">
            <span className="label-xs">{r.year}</span>
            <div className="min-w-0">
              <h3 className="display text-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 md:text-4xl">
                {r.role}
              </h3>
              <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
                {r.org}
              </p>
            </div>
            {r.desc ? (
              <p className="col-span-2 text-xs leading-relaxed text-muted-foreground md:col-span-1 md:text-sm">
                {r.desc}
              </p>
            ) : (
              <span className="hidden md:block" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="shell py-24 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>Experience</SectionLabel>
        </div>
        <div className="md:col-span-9">
          <Rows rows={experience} />
        </div>
      </div>

      <div className="mt-24 grid gap-10 md:mt-36 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>Education</SectionLabel>
        </div>
        <div className="md:col-span-9">
          <Rows rows={education} />
        </div>
      </div>
    </section>
  );
}
