import { useEffect, useRef, useState } from "react";

type Mode = "default" | "link" | "view" | "button";

/** Desktop-only easing circular cursor. Hidden for touch / reduced-motion users. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as HTMLElement | null;
      const hit = el?.closest?.("[data-cursor]") as HTMLElement | null;
      setMode(((hit?.dataset.cursor as Mode) ?? "default") satisfies Mode);
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const size = mode === "view" ? 112 : mode === "link" ? 44 : mode === "button" ? 32 : 12;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div
        className="flex items-center justify-center rounded-full border border-foreground transition-[width,height,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor:
            mode === "view" || mode === "button"
              ? "var(--foreground)"
              : mode === "default"
                ? "var(--foreground)"
                : "transparent",
        }}
      >
        {mode === "view" ? (
          <span className="text-center text-[10px] font-medium leading-tight tracking-[0.16em] text-background">
            VIEW
            <br />
            PROJECT
          </span>
        ) : null}
      </div>
    </div>
  );
}
