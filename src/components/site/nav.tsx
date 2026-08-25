import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "shell grid grid-cols-[minmax(0,1fr)_auto] items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "py-3.5" : "py-5 md:py-7",
        )}
      >
        <a
          href="#top"
          data-cursor="link"
          className="min-w-0 text-[11px] font-medium tracking-[0.18em] uppercase text-foreground"
        >
          Nasreddine <span className="text-faint-foreground">/</span> Amraoui
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="link"
                className="label-xs transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-cursor="link"
            className="hidden border border-border px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground hover:text-background sm:block"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="label-xs md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="shell flex flex-col py-2">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-border py-4 text-2xl last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
