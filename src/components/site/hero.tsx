import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const meta = ["Casablanca / Morocco", "Available for selected projects", "2026"];

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const stage = (delay: number) =>
    ({ "--reveal-delay": `${delay}ms` }) as React.CSSProperties;

  return (
    <section id="top" className="relative flex min-h-[92svh] flex-col justify-between pt-28 md:min-h-screen md:pt-36">
      <div className="shell grid gap-6 border-b border-border pb-8 md:grid-cols-3">
        {meta.map((m, i) => (
          <div key={m} className="reveal" data-visible={loaded} style={stage(200 + i * 120)}>
            <span className="label-xs">{m}</span>
          </div>
        ))}
      </div>

      <div className="shell flex-1 py-10 md:py-16">
        <h1 className="display text-foreground">
          {["Nasr", "Eddine"].map((line, i) => (
            <span
              key={line}
              className="reveal-mask block"
              data-visible={loaded}
              style={stage(520 + i * 140)}
            >
              <span
                className={cn(
                  "block text-[20vw] leading-[0.82] md:text-[15.5vw]",
                  i === 1 && "md:pl-[8vw]",
                )}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-end gap-8 border-t border-border py-7 md:py-9">
        <div className="reveal max-w-md" data-visible={loaded} style={stage(980)}>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Mobile &amp; web developer focused on building thoughtful digital products,
            interfaces and experiences.
          </p>
        </div>
        <a
          href="#introduction"
          data-cursor="link"
          aria-label="Scroll to introduction"
          className="reveal flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-500 hover:border-foreground md:h-20 md:w-20"
          data-visible={loaded}
          style={stage(1100)}
        >
          <span aria-hidden className="drift text-lg">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
