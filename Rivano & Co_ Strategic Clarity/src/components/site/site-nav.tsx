import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LINKS = [
  { to: "/problema", label: "O problema" },
  { to: "/abordagem", label: "Abordagem" },
  { to: "/servicos", label: "Serviços" },
  { to: "/metodo", label: "Método" },
  { to: "/criterios", label: "Critérios" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="display text-xl leading-none tracking-tight">
          Rivano <span className="text-muted-foreground">&amp;</span> Co
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to as never}
                activeProps={{ className: "text-foreground border-foreground" }}
                inactiveProps={{ className: "text-muted-foreground border-transparent" }}
                className="border-b pb-1 text-sm transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden border border-foreground px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            Marcar conversa
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="p-2 lg:hidden"
          >
            <span className="block h-px w-6 bg-foreground" />
            <span className="mt-1.5 block h-px w-6 bg-foreground" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to as never}
                  onClick={() => setOpen(false)}
                  className="display text-2xl"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="display text-2xl text-primary"
              >
                Marcar conversa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
