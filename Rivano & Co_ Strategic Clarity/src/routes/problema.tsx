import { createFileRoute } from "@tanstack/react-router";
import { PageHero, NextStep } from "@/components/site/primitives";
import {
  ProblemaTese,
  ProblemaSintomas,
  ProblemaConsequencias,
} from "@/components/site/sections";

const title = "O problema | Rivano & Co";
const description =
  "As empresas não estagnam por falta de esforço. Estagnam por falta de perspetiva externa. Sintomas, causas e consequências do crescimento bloqueado.";

export const Route = createFileRoute("/problema")({
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
  component: ProblemaPage,
});

function ProblemaPage() {
  return (
    <>
      <PageHero
        kicker="O problema"
        title="As empresas não estagnam por falta de esforço. Estagnam por falta de perspetiva externa."
        intro="Quase todas as PMEs com que falamos trabalham muito. O que falta raramente é energia. É distância suficiente para ver o negócio como o mercado o vê."
      />
      <ProblemaTese />
      <ProblemaSintomas />
      <ProblemaConsequencias />
      <NextStep
        label="A seguir"
        title="Se o problema te parece familiar, vale a pena ver como o abordamos."
        to="/abordagem"
        cta="Ver a abordagem"
      />
    </>
  );
}
