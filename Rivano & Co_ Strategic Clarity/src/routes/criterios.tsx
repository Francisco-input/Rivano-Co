import { createFileRoute } from "@tanstack/react-router";
import { PageHero, NextStep } from "@/components/site/primitives";
import { Criterios, CriteriosSinais } from "@/components/site/sections";

const title = "Critérios | Rivano & Co";
const description =
  "Para quem a Rivano & Co faz sentido e para quem não faz. Sinais de encaixe, sinais de desalinhamento e porque somos seletivos.";

export const Route = createFileRoute("/criterios")({
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
  component: CriteriosPage,
});

function CriteriosPage() {
  return (
    <>
      <PageHero
        kicker="Critérios"
        title="Só funciona com o tipo certo de empresa, e preferimos dizê-lo antes."
        intro="Não trabalhamos com toda a gente, não por exclusividade de fachada, mas porque acompanhar bem exige tempo e limite. Aqui fica o critério, sem rodeios."
      />
      <Criterios />
      <CriteriosSinais />
      <NextStep
        label="A seguir"
        title="Se te reconheces do lado certo da lista, falamos trinta minutos."
        to="/contacto"
        cta="Marcar conversa"
      />
    </>
  );
}
