import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useConsent } from "./consent";

const SRC = "https://assets.calendly.com/assets/external/widget.js";
const URL =
  "https://calendly.com/francisco-rivanoandco/30min?primary_color=01006e";

function CalendlyWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${SRC}"]`)) {
      // Script já presente: pedimos ao Calendly para inicializar este contentor.
      const w = window as unknown as {
        Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
      };
      if (w.Calendly && ref.current) {
        w.Calendly.initInlineWidget({ url: URL, parentElement: ref.current });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={URL}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}

function CalendlyPlaceholder() {
  const { consent, save } = useConsent();

  return (
    <div className="flex min-h-[520px] flex-col justify-center px-6 py-16 text-center md:px-12">
      <p className="label-xs text-muted-foreground">Conteúdo de terceiros</p>
      <p className="display mx-auto mt-6 max-w-xl text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">
        O calendário de marcações só carrega com a sua autorização.
      </p>
      <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
        A marcação é feita através do Calendly, um serviço externo. Ao carregá-lo,
        o Calendly pode receber dados como o seu endereço IP e utilizar cookies
        ou armazenamento local no seu dispositivo.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => save({ ...consent, necessary: true, embeds: true })}
          className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm text-background transition-colors hover:bg-primary"
        >
          Aceitar e carregar o Calendly
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <a
          href="mailto:francisco@rivanoandco.com?subject=Conversa%20estrat%C3%A9gica"
          className="inline-flex items-center border-b border-foreground/30 pb-1 text-sm transition-colors hover:border-foreground"
        >
          Prefiro combinar por email
        </a>
      </div>
      <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
        Esta autorização abrange apenas a categoria «Conteúdos de terceiros» e
        pode ser retirada em qualquer momento. Ver a{" "}
        <Link
          to="/privacidade"
          className="text-foreground underline decoration-accent underline-offset-4"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}

export function CalendlyInline() {
  const { consent, ready } = useConsent();

  if (!ready) {
    return <div className="min-h-[520px]" aria-hidden />;
  }

  return consent.embeds ? <CalendlyWidget /> : <CalendlyPlaceholder />;
}
