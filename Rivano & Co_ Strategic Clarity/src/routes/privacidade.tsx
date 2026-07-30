import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero, Reveal, Section } from "@/components/site/primitives";

const title = "Política de Privacidade | Rivano & Co";
const description =
  "Como a Rivano & Co recolhe, utiliza e protege dados pessoais: finalidades, fundamentos de licitude, prazos de conservação, direitos dos titulares e utilização do Calendly.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacidadePage,
});

type Block = { h: string; body: React.ReactNode };

const EMAIL = "francisco@rivanoandco.com";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-muted-foreground">
          <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const SECTIONS: Block[] = [
  {
    h: "1. Introdução",
    body: (
      <>
        <P>
          A Rivano &amp; Co é uma consultoria de crescimento que trabalha com
          pequenas e médias empresas portuguesas. A relação com quem nos procura
          começa quase sempre por uma conversa, e essa conversa envolve
          informação sobre pessoas e sobre negócios. Tratamos essa informação com
          o mesmo cuidado com que tratamos as decisões que ajudamos a tomar.
        </P>
        <P>
          Esta política explica que dados pessoais podemos recolher através do
          website rivanoandco.com, para que fins os utilizamos, com que
          fundamento legal, durante quanto tempo os conservamos, com quem podem
          ser partilhados e como pode exercer os seus direitos. Está escrita para
          ser lida, não apenas para cumprir uma formalidade.
        </P>
        <P>
          O tratamento de dados pessoais é feito nos termos do Regulamento (UE)
          2016/679 (Regulamento Geral sobre a Proteção de Dados, «RGPD») e da Lei
          n.º 58/2019, de 8 de agosto, que assegura a sua execução na ordem
          jurídica portuguesa, bem como da restante legislação aplicável,
          incluindo a Lei n.º 41/2004 em matéria de comunicações eletrónicas.
        </P>
      </>
    ),
  },
  {
    h: "2. Responsável pelo tratamento",
    body: (
      <>
        <P>
          O responsável pelo tratamento dos dados pessoais recolhidos através
          deste website é a Rivano &amp; Co, com atividade em Portugal.
        </P>
        <UL
          items={[
            <>
              Contacto para questões de privacidade e proteção de dados:{" "}
              <a href={`mailto:${EMAIL}`} className="text-foreground underline decoration-accent underline-offset-4">
                {EMAIL}
              </a>
            </>,
            <>
              Não temos, à data desta política, encarregado de proteção de dados
              designado. Os pedidos e questões são tratados diretamente através
              do contacto acima.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    h: "3. Que dados pessoais recolhemos",
    body: (
      <>
        <P>
          Recolhemos apenas os dados necessários para responder ao seu contacto,
          preparar e realizar uma primeira conversa e, quando aplicável, gerir uma
          relação de trabalho subsequente. Dependendo da forma como interage
          connosco, podemos tratar:
        </P>
        <UL
          items={[
            <><strong className="font-medium text-foreground">Dados de identificação e contacto:</strong> nome, endereço de email e, quando o indicar, número de telefone.</>,
            <><strong className="font-medium text-foreground">Dados profissionais:</strong> empresa ou projeto, cargo ou função, setor e dimensão da equipa, quando partilhados.</>,
            <><strong className="font-medium text-foreground">Informação partilhada voluntariamente:</strong> contexto do negócio, objetivos, bloqueios ao crescimento e qualquer outro conteúdo que escreva num formulário, num email ou no campo de notas de uma marcação.</>,
            <><strong className="font-medium text-foreground">Dados de marcação de reuniões:</strong> data, hora, fuso horário, duração, disponibilidade indicada, confirmações, reagendamentos e cancelamentos.</>,
            <><strong className="font-medium text-foreground">Dados técnicos de navegação, quando aplicável:</strong> endereço IP, tipo de dispositivo, navegador e páginas visitadas, recolhidos de forma agregada ou mínima por serviços de alojamento e por ferramentas de terceiros incorporadas no site.</>,
          ]}
        />
        <P>
          Não recolhemos intencionalmente categorias especiais de dados (por
          exemplo, dados de saúde, convicções políticas ou religiosas) nem dados
          de menores. Pedimos que não inclua informação dessa natureza nos
          formulários ou nas mensagens que nos envia.
        </P>
      </>
    ),
  },
  {
    h: "4. Finalidades do tratamento",
    body: (
      <UL
        items={[
          "Responder a pedidos de contacto e a questões sobre os nossos serviços.",
          "Gerir a marcação, confirmação, reagendamento e cancelamento de reuniões.",
          "Preparar a primeira conversa e avaliar, com honestidade, se existe encaixe entre a sua situação e a forma como trabalhamos.",
          "Elaborar e negociar propostas, quando solicitado.",
          "Executar e acompanhar o serviço contratado, quando exista relação contratual.",
          "Cumprir obrigações legais, nomeadamente de natureza contabilística e fiscal, quando aplicável.",
          "Assegurar a segurança, disponibilidade e melhoria do website.",
        ]}
      />
    ),
  },
  {
    h: "5. Fundamentos de licitude",
    body: (
      <>
        <P>
          Todo o tratamento tem um fundamento jurídico. Em concreto:
        </P>
        <UL
          items={[
            <><strong className="font-medium text-foreground">Diligências pré-contratuais a seu pedido</strong> (artigo 6.º, n.º 1, alínea b) do RGPD): quando nos contacta ou marca uma reunião, tratamos os seus dados para responder e preparar essa conversa. Sem esses dados não é possível dar seguimento ao pedido.</>,
            <><strong className="font-medium text-foreground">Execução de contrato</strong> (artigo 6.º, n.º 1, alínea b)): quando existe um serviço contratado, tratamos os dados necessários para o prestar e acompanhar.</>,
            <><strong className="font-medium text-foreground">Cumprimento de obrigações legais</strong> (artigo 6.º, n.º 1, alínea c)): conservação de documentos de faturação e resposta a pedidos legítimos de autoridades, quando aplicável.</>,
            <><strong className="font-medium text-foreground">Interesse legítimo</strong> (artigo 6.º, n.º 1, alínea f)): manutenção de registos internos de contactos e conversas, segurança do website e prevenção de utilizações abusivas. Ponderamos este interesse com os seus direitos e pode opor-se, como se explica adiante.</>,
            <><strong className="font-medium text-foreground">Consentimento</strong> (artigo 6.º, n.º 1, alínea a)): quando necessário, designadamente para a colocação de cookies ou tecnologias semelhantes que não sejam estritamente necessários e para eventuais comunicações informativas. O consentimento é livre e pode ser retirado em qualquer momento, sem afetar a licitude do tratamento anterior.</>,
          ]}
        />
      </>
    ),
  },
  {
    h: "6. Como recolhemos os dados",
    body: (
      <UL
        items={[
          "Diretamente de si, quando preenche um formulário de contacto, nos escreve por email ou marca uma reunião.",
          "Através da ferramenta de marcação de reuniões utilizada no site (Calendly), nos termos descritos na secção 14.",
          "De forma automática e minimizada, através do serviço de alojamento e de tecnologias do website, para efeitos de funcionamento e segurança.",
          "Ocasionalmente, de fontes públicas ou profissionais (por exemplo, o website da sua empresa ou um perfil profissional público), apenas para preparar melhor a conversa que solicitou.",
        ]}
      />
    ),
  },
  {
    h: "7. Partilha de dados com terceiros",
    body: (
      <>
        <P>
          Não vendemos dados pessoais e não os partilhamos para finalidades
          alheias às descritas nesta política. Podemos, no entanto, recorrer a
          prestadores de serviços que tratam dados por nossa conta e segundo as
          nossas instruções, na qualidade de subcontratantes:
        </P>
        <UL
          items={[
            "Serviços de alojamento e infraestrutura do website.",
            "Serviço de correio eletrónico e de produtividade utilizado para comunicar com clientes e interessados.",
            "Calendly, para marcação e gestão de reuniões (ver secção 14).",
            "Prestadores de serviços de contabilidade e apoio administrativo, quando exista relação contratual e faturação.",
          ]}
        />
        <P>
          Com estes prestadores existem, ou procuramos assegurar, acordos de
          tratamento de dados que estabelecem obrigações de confidencialidade,
          segurança e utilização limitada às finalidades contratadas. Podemos
          ainda comunicar dados a autoridades públicas, tribunais ou consultores
          jurídicos quando tal seja legalmente exigido ou necessário à defesa dos
          nossos direitos.
        </P>
      </>
    ),
  },
  {
    h: "8. Transferências internacionais de dados",
    body: (
      <>
        <P>
          Alguns dos prestadores que utilizamos, incluindo o Calendly, estão
          estabelecidos fora do Espaço Económico Europeu ou podem tratar dados em
          infraestruturas localizadas em países terceiros, designadamente nos
          Estados Unidos da América.
        </P>
        <P>
          Nesses casos, procuramos que a transferência seja acompanhada de
          mecanismos adequados previstos no capítulo V do RGPD, tais como
          decisões de adequação da Comissão Europeia, cláusulas contratuais-tipo
          e, quando disponibilizados pelo prestador, acordos de tratamento de
          dados com salvaguardas adicionais. Pode solicitar informação sobre os
          mecanismos aplicáveis a um tratamento concreto através do contacto
          indicado na secção 16.
        </P>
      </>
    ),
  },
  {
    h: "9. Prazos de conservação",
    body: (
      <>
        <P>
          Conservamos os dados apenas durante o período necessário às finalidades
          para que foram recolhidos, com os seguintes critérios de referência:
        </P>
        <UL
          items={[
            "Contactos e pedidos que não deram origem a relação contratual: até 12 meses após o último contacto relevante, salvo se pedir o apagamento antes disso.",
            "Registos de marcação de reuniões: até 12 meses após a data da reunião, para efeitos de histórico e seguimento.",
            "Dados relativos a clientes e a serviços prestados: durante a vigência da relação e, depois, pelos prazos legais aplicáveis, nomeadamente os prazos fiscais e contabilísticos em vigor em Portugal.",
            "Dados tratados com base no consentimento: até à retirada do consentimento ou até deixarem de ser necessários.",
          ]}
        />
        <P>
          Findos estes prazos, os dados são apagados ou anonimizados de forma
          irreversível.
        </P>
      </>
    ),
  },
  {
    h: "10. Direitos dos titulares dos dados",
    body: (
      <>
        <P>Enquanto titular dos dados, assistem-lhe os seguintes direitos:</P>
        <UL
          items={[
            <><strong className="font-medium text-foreground">Acesso:</strong> saber se tratamos dados seus e obter cópia desses dados e informação sobre o tratamento.</>,
            <><strong className="font-medium text-foreground">Retificação:</strong> corrigir dados inexatos ou completar dados incompletos.</>,
            <><strong className="font-medium text-foreground">Apagamento:</strong> pedir a eliminação dos dados quando já não sejam necessários, quando retire o consentimento ou quando o tratamento não tenha fundamento válido.</>,
            <><strong className="font-medium text-foreground">Limitação:</strong> pedir a suspensão temporária do tratamento, por exemplo enquanto se verifica a exatidão dos dados.</>,
            <><strong className="font-medium text-foreground">Oposição:</strong> opor-se a tratamentos baseados em interesse legítimo, invocando a sua situação concreta.</>,
            <><strong className="font-medium text-foreground">Portabilidade:</strong> quando aplicável, receber os dados que nos forneceu em formato estruturado e de uso corrente, ou pedir a sua transmissão a outra entidade.</>,
            <><strong className="font-medium text-foreground">Retirada do consentimento:</strong> quando o tratamento se baseie no consentimento, retirá-lo em qualquer momento, sem afetar a licitude do tratamento já realizado.</>,
          ]}
        />
      </>
    ),
  },
  {
    h: "11. Como exercer os direitos",
    body: (
      <>
        <P>
          Pode exercer qualquer destes direitos enviando um pedido para{" "}
          <a href={`mailto:${EMAIL}`} className="text-foreground underline decoration-accent underline-offset-4">
            {EMAIL}
          </a>
          , identificando o direito que pretende exercer e o contexto do contacto
          que teve connosco. Poderemos pedir informação adicional apenas para
          confirmar a sua identidade e evitar divulgações indevidas.
        </P>
        <P>
          Respondemos em linguagem clara e, em regra, no prazo de um mês a contar
          da receção do pedido. Se o pedido for particularmente complexo, esse
          prazo pode ser prorrogado nos termos previstos no RGPD, informando-o da
          prorrogação e dos respetivos motivos. O exercício destes direitos é
          gratuito, salvo em casos de pedidos manifestamente infundados ou
          repetitivos.
        </P>
      </>
    ),
  },
  {
    h: "12. Segurança dos dados",
    body: (
      <>
        <P>
          Adotamos medidas técnicas e organizativas proporcionais à nossa
          dimensão e ao risco do tratamento, entre as quais: acesso restrito à
          informação, autenticação nas contas utilizadas, comunicações cifradas
          através do protocolo HTTPS, seleção de prestadores com práticas de
          segurança documentadas e princípio de minimização, tratando apenas os
          dados necessários.
        </P>
        <P>
          Nenhuma medida elimina por completo o risco de incidentes. Se ocorrer
          uma violação de dados pessoais suscetível de resultar em risco para os
          seus direitos e liberdades, cumpriremos os deveres de notificação
          previstos no RGPD, incluindo, quando aplicável, a comunicação à
          autoridade de controlo e aos titulares afetados.
        </P>
      </>
    ),
  },
  {
    h: "13. Cookies, tecnologias semelhantes e gestão do consentimento",
    body: (
      <>
        <P>
          Este website procura manter a utilização de cookies no mínimo
          indispensável. Organizamos essas tecnologias em quatro categorias:
        </P>
        <UL
          items={[
            "Necessários: garantem o funcionamento e a segurança do site e guardam o registo da sua escolha de privacidade. Não dependem de consentimento, nos termos do artigo 5.º, n.º 3, da Lei n.º 41/2004.",
            "Preferências: memorizam pequenas opções de utilização. Dependem do seu consentimento.",
            "Estatística: permitem compreender, de forma agregada, a leitura das páginas. Dependem do seu consentimento e não são utilizados para o identificar.",
            "Conteúdos de terceiros: permitem carregar ferramentas externas incorporadas no site, nomeadamente o calendário de marcações Calendly. Dependem do seu consentimento.",
          ]}
        />
        <P>
          Na primeira visita é apresentado um aviso de privacidade onde pode
          aceitar, rejeitar ou gerir as categorias uma a uma. As categorias não
          necessárias não vêm pré-selecionadas, não são ativadas pela simples
          navegação e nada dessas categorias é carregado antes da sua
          autorização. Rejeitar é tão simples e tão acessível como aceitar.
        </P>
        <P>
          Pode alterar ou retirar o consentimento em qualquer momento através da
          ligação «Preferências de privacidade», disponível no fim de todas as
          páginas. A retirada do consentimento não afeta a licitude dos
          tratamentos já realizados com base nele. Pode também configurar o seu
          navegador para bloquear ou eliminar cookies, embora isso possa afetar
          funcionalidades do site, incluindo o carregamento do calendário de
          marcações.
        </P>
      </>
    ),
  },

  {
    h: "14. Utilização do Calendly na marcação de reuniões",
    body: (
      <>
        <P>
          Para simplificar a marcação da primeira conversa, utilizamos o Calendly,
          um serviço de agendamento online prestado pela Calendly, LLC. O
          calendário é apresentado diretamente na página «Marcar conversa» através
          de um widget incorporado, o que implica que, ao carregar essa página ou
          ao interagir com o calendário, o seu navegador estabelece uma ligação
          aos servidores da Calendly.
        </P>
        <P>
          Quando marca uma reunião podem ser tratados dados como o seu nome, o
          endereço de email, o fuso horário e a disponibilidade escolhida, bem
          como qualquer informação que decida introduzir nos campos do formulário
          de marcação. Estes dados são utilizados para gerir o agendamento,
          organizar a reunião, enviar confirmações e recordatórios e assegurar o
          contacto associado ao seu pedido.
        </P>
        <P>
          Neste contexto, a Rivano &amp; Co atua como responsável pelo tratamento e
          a Calendly atua como prestador de serviço, na qualidade de
          subcontratante, tratando os dados por nossa conta para a finalidade de
          agendamento. A Calendly pode recorrer a subprocessadores para a
          prestação do serviço, designadamente para alojamento, infraestrutura e
          envio de comunicações, e disponibiliza um acordo de tratamento de dados
          (Data Processing Addendum) destinado a enquadrar essa relação à luz do
          RGPD.
        </P>
        <P>
          Poderão ocorrer transferências de dados para fora do Espaço Económico
          Europeu, nomeadamente para os Estados Unidos da América, com base em
          mecanismos previstos na legislação aplicável, incluindo cláusulas
          contratuais-tipo e outras salvaguardas disponibilizadas pela Calendly.
          Procuramos assegurar que essas salvaguardas se encontram em vigor, sem
          que isso constitua uma garantia absoluta quanto à atuação de terceiros.
        </P>
        <P>
          Recomendamos a consulta da política de privacidade da própria Calendly
          para informação adicional sobre o tratamento que realiza. Se preferir
          não utilizar esta ferramenta, pode marcar a conversa por email para{" "}
          <a href={`mailto:${EMAIL}`} className="text-foreground underline decoration-accent underline-offset-4">
            {EMAIL}
          </a>
          .
        </P>
      </>
    ),
  },
  {
    h: "15. Alterações a esta política",
    body: (
      <P>
        Esta política pode ser atualizada para refletir alterações nos serviços
        que utilizamos, na forma como tratamos dados ou no enquadramento legal
        aplicável. A versão em vigor é sempre a publicada nesta página, com
        indicação da data da última atualização. Quando as alterações forem
        materialmente relevantes, procuraremos informar de forma adequada as
        pessoas afetadas.
      </P>
    ),
  },
  {
    h: "16. Contactos",
    body: (
      <P>
        Para qualquer questão sobre esta política, sobre o tratamento dos seus
        dados ou para exercer os seus direitos, escreva para{" "}
        <a href={`mailto:${EMAIL}`} className="text-foreground underline decoration-accent underline-offset-4">
          {EMAIL}
        </a>
        . Respondemos a todos os pedidos com seriedade e no prazo indicado na
        secção 11.
      </P>
    ),
  },
  {
    h: "17. Reclamação junto da autoridade de controlo",
    body: (
      <P>
        Se considerar que o tratamento dos seus dados pessoais não respeita a
        legislação aplicável, pode apresentar reclamação junto da Comissão
        Nacional de Proteção de Dados (CNPD), autoridade de controlo competente em
        Portugal. Agradecemos, ainda assim, a oportunidade de esclarecer a
        situação diretamente connosco antes disso.
      </P>
    ),
  },
];

function PrivacidadePage() {
  return (
    <>
      <PageHero
        kicker="Política de Privacidade"
        title="Transparência sobre os dados que nos confia."
        intro="Esta política explica que dados pessoais tratamos, com que finalidade e fundamento, durante quanto tempo, com quem podem ser partilhados e como pode exercer os seus direitos."
      />

      <Section className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-[240px_1fr] lg:gap-20">
          <Reveal>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="label-xs text-muted-foreground">Índice</p>
              <ul className="mt-5 space-y-2 text-sm">
                {SECTIONS.map((s, i) => (
                  <li key={s.h}>
                    <a
                      href={`#s${i + 1}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-muted-foreground">
                Última atualização: julho de 2026
              </p>
            </aside>
          </Reveal>

          <div className="max-w-2xl">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h}>
                <section
                  id={`s${i + 1}`}
                  className="scroll-mt-28 border-t border-border py-12 first:border-t-0 first:pt-0"
                >
                  <h2 className="display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight">
                    {s.h}
                  </h2>
                  {s.body}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="border-t border-border pt-12">
                <p className="text-sm text-muted-foreground">
                  Esta política tem natureza informativa e não substitui
                  aconselhamento jurídico individual.
                </p>
                <Link
                  to="/contacto"
                  className="group mt-6 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm transition-colors hover:border-foreground"
                >
                  Marcar conversa
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
