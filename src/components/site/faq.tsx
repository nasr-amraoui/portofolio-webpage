import { useState } from "react";
import { Reveal, SectionLabel } from "./reveal";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "What kind of projects do you work on?",
    a: "Focused digital products — mobile apps, marketing sites and interface systems where craft and clarity matter more than feature count.",
  },
  {
    q: "Can you build mobile applications?",
    a: "Yes. Native Android with Kotlin and Jetpack Compose, and cross-platform builds with Flutter when the product calls for it.",
  },
  {
    q: "Do you work with startups?",
    a: "Often. Early teams get the most out of a developer who can scope, design and ship without a long handoff chain.",
  },
  {
    q: "What technologies do you use?",
    a: "Kotlin, Jetpack Compose, Flutter, React, Next.js, TypeScript, Node.js, Firebase and PostgreSQL.",
  },
  {
    q: "How does the process work?",
    a: "Scope and constraints first, then a working prototype, then iteration on real screens. Short loops, visible progress, no black boxes.",
  },
  {
    q: "How can I contact you?",
    a: "Email is fastest — hello@nasreddine.dev. Tell me what you're building and the outcome you need.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="shell py-24 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel>FAQ</SectionLabel>
        </div>
        <div className="md:col-span-9">
          <div className="border-b border-border">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 60}>
                  <div className="border-t border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      data-cursor="link"
                      className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-5 py-7 text-left transition-colors duration-500 hover:bg-elevated md:gap-10"
                    >
                      <span className="label-xs pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="display text-lg leading-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 md:text-3xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "text-xl leading-none text-muted-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOpen && "rotate-45 text-foreground",
                        )}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pb-8 text-sm leading-relaxed text-muted-foreground md:ml-[calc(2rem+2.5rem)]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
