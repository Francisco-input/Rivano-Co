import { createFileRoute } from "@tanstack/react-router";
import { PageHero, NextStep } from "@/components/site/primitives";
import { Servicos, ServicosDistincao, Faq } from "@/components/site/sections";

const title = "Serviços | Rivano & Co";
const description =
  "Diagnóstico Estratégico e Acompanhamento Estratégico: o que incluem, para quem fazem sentido e o que levas contigo em cada um.";

export const Route = createFileRoute("/servicos")({
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
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <PageHero
        kicker="Serviços"
        title="Duas formas de trabalho. Ambas começam pelo diagnóstico."
        intro="Uma entrega clareza e um plano fechado. A outra mantém essa clareza viva enquanto implementas. Nenhuma delas inclui execução tática."
      />
      <Servicos />
      <ServicosDistincao />
      <Faq />
      <NextStep
        label="A seguir"
        title="Vê como o trabalho decorre, semana a semana."
        to="/metodo"
        cta="Ver o método"
      />
    </>
  );
}
