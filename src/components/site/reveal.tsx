import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  mask?: boolean;
};

/** Fade + rise reveal on scroll. */
export function Reveal({ children, className, delay = 0, as, mask }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(mask ? "reveal-mask" : "reveal", className)}
    >
      {mask ? <span>{children}</span> : children}
    </Tag>
  );
}

/** Small uppercase editorial section label. */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className={cn("label-xs flex items-start gap-3", className)}>
      <span aria-hidden className="text-faint-foreground">
        //
      </span>
      <span>{children}</span>
    </Reveal>
  );
}
