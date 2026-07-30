import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(16px)",
        transition: `opacity .9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .9s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="label-xs inline-flex items-center gap-2 text-muted-foreground">
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="reveal">
          <Kicker>{kicker}</Kicker>
        </div>
        <h1
          className="reveal display mt-8 max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)]"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        <p
          className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}

export function NextStep({
  label,
  title,
  to,
  cta,
}: {
  label: string;
  title: string;
  to: string;
  cta: string;
}) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label-xs text-muted-foreground">{label}</p>
            <p className="display mt-5 max-w-2xl text-[clamp(1.8rem,3.6vw,2.75rem)]">
              {title}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
            <Link
              to={to as never}
              className="group inline-flex shrink-0 items-center gap-3 border-b border-foreground/30 pb-2 text-sm transition-colors hover:border-foreground"
            >
              {cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            {to !== "/contacto" && (
              <Link
                to="/contacto"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Ou marca já a conversa
              </Link>
            )}
          </div>
        </div>

      </Reveal>
    </Section>
  );
}
