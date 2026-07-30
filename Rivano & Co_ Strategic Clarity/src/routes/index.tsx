import { createFileRoute } from "@tanstack/react-router";
import { Hero, HomeTese, HomeOferta, HomeIndice } from "@/components/site/sections";
import { Contacto } from "@/components/site/closing";

const title = "Rivano & Co, consultoria de crescimento para PMEs portuguesas";
const description =
  "Diagnóstico, prioridades e acompanhamento em marketing, vendas e operações. Trabalhas diretamente com quem pensa a estratégia.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HomeTese />
      <HomeOferta />
      <HomeIndice />
      <Contacto />
    </>
  );
}
