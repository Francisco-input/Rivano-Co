import { createFileRoute } from "@tanstack/react-router";
import { PageHero, NextStep } from "@/components/site/primitives";
import {
  Abordagem,
  SomosNaoSomos,
  Principios,
  Credibilidade,
} from "@/components/site/sections";

const title = "Abordagem | Rivano & Co";
const description =
  "Entramos como perspetiva externa: diagnóstico, clareza de prioridades e acompanhamento continuado. Sem execução tática, sem caixa preta.";

export const Route = createFileRoute("/abordagem")({
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
  component: AbordagemPage,
});

function AbordagemPage() {
  return (
    <>
      <PageHero
        kicker="Abordagem"
        title="Entramos como perspetiva externa, não como mais um fornecedor."
        intro="O nosso valor está no raciocínio, na priorização e na continuidade. Pensamos crescimento como um sistema onde marketing, vendas e operações têm de contar a mesma história."
      />
      <Abordagem />
      <SomosNaoSomos />
      <Principios />
      <Credibilidade />
      <NextStep
        label="A seguir"
        title="Duas formas de trabalhar connosco, ambas com o mesmo ponto de partida."
        to="/servicos"
        cta="Ver serviços"
      />
    </>
  );
}
