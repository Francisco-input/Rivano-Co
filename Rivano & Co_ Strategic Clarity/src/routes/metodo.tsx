import { createFileRoute } from "@tanstack/react-router";
import { PageHero, NextStep } from "@/components/site/primitives";
import { Metodo, MetodoParticipacao } from "@/components/site/sections";

const title = "Método | Rivano & Co";
const description =
  "Seis etapas para transformar contexto em decisões: entender, diagnosticar, priorizar, alinhar, acompanhar e rever.";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MetodoPage,
});

function MetodoPage() {
  return (
    <>
      <PageHero
        kicker="Método"
        title="Sabemos como pensar, organizar e acompanhar decisões de crescimento."
        intro="O método não é um processo de agência. É a forma como transformamos contexto disperso em poucas decisões defensáveis, e como garantimos que elas sobrevivem ao dia a dia."
      />
      <Metodo />
      <MetodoParticipacao />
      <NextStep
        label="A seguir"
        title="Vê se o teu momento de negócio encaixa no nosso critério."
        to="/criterios"
        cta="Ver critérios"
      />
    </>
  );
}
