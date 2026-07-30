import { Link } from "@tanstack/react-router";
import { Kicker, Reveal } from "./primitives";
import { ManageConsentButton } from "./consent";

const EMAIL = "francisco@rivanoandco.com";

export function Contacto() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <Kicker>Próximo passo</Kicker>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-8 text-[clamp(2.4rem,6.5vw,4.75rem)]">
            Trinta minutos podem mudar a próxima decisão que vais tomar.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Conta-nos onde sentes que o crescimento está a travar. Damos-te a
            nossa leitura inicial na própria conversa. Sem apresentação
            comercial, sem proposta no fim. Se acharmos que não somos as pessoas
            certas, dizemos-te logo.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-sm text-background transition-colors hover:bg-primary"
            >
              Marcar conversa estratégica
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={`mailto:${EMAIL}?subject=Conversa%20estrat%C3%A9gica`}
              className="inline-flex items-center border-b border-foreground/30 pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Enviar email
            </a>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-8 text-sm text-muted-foreground">
            Respondemos em 24 horas úteis. Trabalhamos com um número limitado de
            empresas em simultâneo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="display text-2xl leading-none">
            Rivano <span className="text-muted-foreground">&amp;</span> Co
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Consultoria de crescimento para PMEs portuguesas. Diagnóstico,
            prioridades e acompanhamento em marketing, vendas e operações.
          </p>
        </div>

        <div className="text-sm md:justify-self-center">
          <p className="label-xs text-muted-foreground">Contacto</p>
          <ul className="mt-5 space-y-2.5">
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href="tel:+351966888153" className="hover:text-primary">
                +351 966 888 153
              </a>
            </li>
            <li className="text-muted-foreground">Leiria, Portugal</li>
          </ul>
        </div>

        <div className="text-sm md:justify-self-end md:text-right">
          <p className="label-xs text-muted-foreground">Legal</p>
          <ul className="mt-5 space-y-2.5">
            <li>
              <Link to="/privacidade" className="text-muted-foreground hover:text-foreground">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-muted-foreground hover:text-foreground">
                Marcar conversa
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rivano &amp; Co. Todos os direitos reservados.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <ManageConsentButton />
          <p>Clareza sobre conforto. Prova sobre promessa.</p>
        </div>
      </div>
    </footer>
  );
}
