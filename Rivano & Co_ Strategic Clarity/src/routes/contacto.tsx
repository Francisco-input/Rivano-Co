import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Reveal, Section } from "@/components/site/primitives";
import { CalendlyInline } from "@/components/site/calendly";

const title = "Marcar conversa | Rivano & Co";
const description =
  "Uma primeira conversa de 30 minutos para perceber contexto, objetivos e potencial de encaixe. Sem apresentação comercial e sem proposta no fim.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const expect = [
    {
      n: "01",
      t: "Contexto",
      d: "Contas-nos onde o crescimento está a travar e o que já tentaram fazer para o resolver.",
    },
    {
      n: "02",
      t: "Leitura inicial",
      d: "Damos-te a nossa primeira leitura na própria conversa, com as perguntas que consideramos decisivas.",
    },
    {
      n: "03",
      t: "Encaixe",
      d: "Dizemos com franqueza se achamos que somos úteis. Não trabalhamos com todas as empresas e preferimos dizê-lo cedo.",
    },
  ];

  return (
    <>
      <PageHero
        kicker="Marcar conversa"
        title="Uma primeira conversa estratégica, não uma call de vendas."
        intro="Trinta minutos para perceber contexto, objetivos e potencial de encaixe. Sem apresentação comercial, sem proposta no fim e sem seguimento insistente."
      />

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-3">
          {expect.map((e, i) => (
            <Reveal key={e.n} delay={i * 70}>
              <div className="border-t border-foreground pt-6">
                <span className="label-xs text-muted-foreground">{e.n}</span>
                <h2 className="display mt-4 text-2xl">{e.t}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="label-xs text-muted-foreground">Escolher horário</p>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight">
                Escolhe o horário que te dá espaço para pensar.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Trinta minutos, por videochamada. Basta escolher uma hora no
                calendário. Recebes a confirmação por email logo depois.
              </p>

              <div className="mt-8 border-l border-accent pl-5 text-sm leading-relaxed text-muted-foreground">
                A marcação é processada pela Calendly, um serviço externo de
                agendamento que atua como subcontratante. O calendário só é
                carregado depois de autorizar a categoria «Conteúdos de
                terceiros»; ao escolher um horário, dados como nome, email e
                disponibilidade são tratados para gerir a reunião. Pode alterar
                a sua autorização em «Preferências de privacidade», no fim da
                página, e ler os detalhes na{" "}
                <Link
                  to="/privacidade"
                  className="text-foreground underline decoration-accent underline-offset-4"
                >
                  Política de Privacidade
                </Link>
                .
              </div>


              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Preferes não usar o calendário? Escreve-nos para{" "}
                <a
                  href="mailto:francisco@rivanoandco.com?subject=Conversa%20estrat%C3%A9gica"
                  className="text-foreground underline decoration-accent underline-offset-4"
                >
                  francisco@rivanoandco.com
                </a>{" "}
                e combinamos por email.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-border bg-background p-2 md:p-3">
              <CalendlyInline />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Respondemos em 24 horas úteis. Trabalhamos com um número limitado
              de empresas em simultâneo.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
