import { Reveal, SectionLabel } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="shell flex min-h-[85svh] flex-col justify-center border-t border-border py-24 md:py-40"
    >
      <SectionLabel>Ready to build something?</SectionLabel>

      <h2 className="display mt-12 text-[15vw] leading-[0.86] md:mt-16 md:text-[9.5vw]">
        <Reveal mask>Let&apos;s make</Reveal>
        <Reveal mask delay={120} className="md:pl-[10vw]">
          something
        </Reveal>
        <Reveal mask delay={240}>useful.</Reveal>
      </h2>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 md:mt-24 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Available for selected projects in 2026. Send a short brief and I&apos;ll reply within
            two days.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="mailto:hello@nasreddine.dev"
            data-cursor="button"
            className="group inline-flex items-center gap-8 border border-border px-8 py-6 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground hover:text-background md:px-12 md:py-8"
          >
            <span className="display text-2xl md:text-4xl">Contact</span>
            <span
              aria-hidden
              className="text-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-rotate-45"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
