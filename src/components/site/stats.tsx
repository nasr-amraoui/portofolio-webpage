import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./reveal";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: null, suffix: "∞", label: "Curiosity" },
];

function Counter({ to, visible }: { to: number; visible: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);

  return <>{String(n).padStart(2, "0")}</>;
}

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section className="shell py-24 md:py-40">
      <SectionLabel className="mb-12">In Numbers</SectionLabel>
      <div ref={ref} className="grid border-b border-border md:grid-cols-4 md:border-b-0 md:border-t">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-t border-border py-10 md:border-t-0 md:border-l md:px-6 md:py-14 md:first:border-l-0 md:first:pl-0"
          >
            <p className="display text-[16vw] leading-none md:text-[5.6vw]">
              {s.value === null ? s.suffix : (
                <>
                  <Counter to={s.value} visible={visible} />
                  {s.suffix}
                </>
              )}
            </p>
            <p className="label-xs mt-5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
