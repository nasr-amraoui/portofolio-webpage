import { Reveal } from "./reveal";
import { Github, Linkedin, Instagram, Dribbble } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell py-16 md:py-24">
        <Reveal mask>
          <p className="display text-[13vw] leading-[0.86] md:text-[9vw]">
            Nasreddine
            <br />
            Amraoui
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="label-xs">Email</p>
            <a
              href="mailto:hello@nasreddine.dev"
              data-cursor="link"
              className="mt-3 inline-block text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-muted-foreground"
            >
              hello@nasreddine.dev
            </a>
          </div>
          <div>
            <p className="label-xs">Elsewhere</p>
            <ul className="mt-3 flex flex-col gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="label-xs">Base</p>
            <p className="mt-3 text-sm tracking-[0.1em] uppercase">Rabat / Morocco</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-border pt-6">
          <p className="label-xs">© 2026 Nasreddine Amraoui</p>
          <a
            href="#top"
            data-cursor="link"
            className="label-xs group transition-colors duration-300 hover:text-foreground"
          >
            Back to top{" "}
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
