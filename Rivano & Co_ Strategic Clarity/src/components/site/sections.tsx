import { Link } from "@tanstack/react-router";
import { Kicker, Reveal, Section } from "./primitives";

/* ---------------------------------- Home --------------------------------- */

export function Hero() {
  return (
    <section id="topo" className="px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="reveal">
              <Kicker>Consultoria de crescimento · Portugal</Kicker>
            </div>
            <h1
              className="reveal display mt-8 text-[clamp(2.6rem,7.2vw,5.5rem)]"
              style={{ animationDelay: "80ms" }}
            >
              Ajudamos PMEs portuguesas a crescer com clareza estratégica em
              marketing, vendas e operações.
            </h1>
            <p
              className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Diagnosticamos o que está a travar o crescimento, definimos as
              prioridades certas e acompanhamos as decisões mês a mês. Trabalha
              diretamente com quem pensa a estratégia, sem account managers, sem
              equipa anónima, sem caixa preta.
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm text-background transition-colors hover:bg-primary"
              >
                Marcar conversa estratégica
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/abordagem"
                className="inline-flex items-center gap-2 border-b border-foreground/30 py-1 text-sm transition-colors hover:border-foreground"
              >
                Ver como trabalhamos
              </Link>
            </div>

            <p
              className="reveal mt-8 text-sm text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              Conversa inicial de 30 minutos, sem custo e sem proposta comercial
              no fim. Se não formos as pessoas certas, dizemos.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:pl-10">
            <div
              className="reveal h-full border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
              style={{ animationDelay: "360ms" }}
            >
              <p className="label-xs text-muted-foreground">Posicionamento</p>
              <p className="display mt-5 text-2xl leading-snug">
                Vendemos um processo de decisão. Não vendemos horas, nem
                execução tática, nem resultados garantidos.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {[
                  "Para empresas com operação real e cashflow consistente",
                  "Um escritório externo de estratégia, pequeno e seletivo",
                  "Cada passo é visível, explicado e discutido",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function HomeTese() {
  return (
    <Section className="bg-foreground text-background">
      <Reveal>
        <Kicker>A tese</Kicker>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)]">
          A maioria das empresas não estagna por falta de esforço. Estagna por
          falta de perspetiva externa.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-10 max-w-3xl border-l border-accent pl-6 text-lg leading-relaxed text-background/85">
          Nada disto se resolve com mais um fornecedor de execução. Resolve-se
          com melhor pensamento e com alguém de fora que o mantenha vivo mês
          após mês.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <Link
          to="/problema"
          className="mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-1 text-sm transition-colors hover:border-background"
        >
          Ler sobre o problema →
        </Link>
      </Reveal>
    </Section>
  );
}

export function HomeOferta() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>O que fazemos</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Duas formas de trabalho. Ambas começam pelo diagnóstico.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Não substituímos a tua equipa nem os teus fornecedores. Damos-lhes
              direção e, a ti, critério para avaliar o que está a funcionar.
            </p>
            <Link
              to="/servicos"
              className="mt-8 inline-flex border-b border-foreground/30 pb-1 text-sm transition-colors hover:border-foreground"
            >
              Ver serviços em detalhe →
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          {[
            {
              t: "Diagnóstico Estratégico",
              d: "Trabalho fechado, com valor próprio. No fim sabes o que está a travar o crescimento e o que fazer nos próximos 90 dias.",
            },
            {
              t: "Acompanhamento Estratégico",
              d: "Perspetiva externa viva enquanto implementas. Desafiamos, ajustamos e ajudamos a decidir, sem executar o trabalho tático.",
            },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="border-t border-foreground pt-6">
                <h3 className="display text-2xl">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function HomeIndice() {
  const pages = [
    {
      to: "/problema",
      n: "01",
      t: "O problema",
      d: "Porque é que o crescimento trava mesmo quando ninguém trabalha pouco.",
    },
    {
      to: "/abordagem",
      n: "02",
      t: "Abordagem",
      d: "Como pensamos crescimento e o que escolhemos deliberadamente não fazer.",
    },
    {
      to: "/servicos",
      n: "03",
      t: "Serviços",
      d: "Diagnóstico e Acompanhamento, o que incluem e para quem fazem sentido.",
    },
    {
      to: "/metodo",
      n: "04",
      t: "Método",
      d: "As seis etapas do trabalho e o papel que tens em cada uma delas.",
    },
    {
      to: "/criterios",
      n: "05",
      t: "Critérios",
      d: "Com que empresas trabalhamos e em que casos dizemos que não.",
    },
    {
      to: "/contacto",
      n: "06",
      t: "Marcar conversa",
      d: "Trinta minutos para perceber se há encaixe. Sem apresentação comercial.",
    },
  ];
  return (
    <Section className="bg-muted">
      <Reveal>
        <Kicker>Índice</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          Explora pela ordem que preferires.
        </h2>
      </Reveal>
      <div className="mt-16 border-t border-border">
        {pages.map((p, i) => (
          <Reveal key={p.to} delay={i * 50}>
            <Link
              to={p.to as never}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-border py-7 md:gap-10"
            >
              <span className="label-xs text-muted-foreground">{p.n}</span>
              <span>
                <span className="display block text-2xl transition-colors group-hover:text-primary md:text-[1.75rem]">
                  {p.t}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.d}
                </span>
              </span>
              <span className="text-sm transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Problema -------------------------------- */

export function ProblemaSintomas() {
  return (
    <Section className="bg-foreground text-background">
      <Reveal>
        <Kicker>Sinais de bloqueio</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          Seis sintomas que vemos quase sempre juntos.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-10 border-t border-background/15 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            t: "Trabalha-se muito, decide-se depressa",
            d: "As decisões acontecem entre reuniões, no meio da operação, com a informação que estava à mão. Ninguém tem tempo para pensar o negócio de fora.",
          },
          {
            t: "O marketing tem esforço, mas não tem sistema",
            d: "Faz-se conteúdo, campanhas, presença. Falta a estrutura que liga tudo isso a uma proposta clara e a um funil que se consegue medir.",
          },
          {
            t: "As vendas dependem de pessoas, não de método",
            d: "O discurso muda consoante quem vende. Não há critério de qualificação nem previsibilidade no pipeline.",
          },
          {
            t: "A operação cria atrito ao crescimento",
            d: "Cada novo cliente custa mais do que devia. O crescimento entope processos que nunca foram desenhados para esta escala.",
          },
          {
            t: "O posicionamento é confuso para o mercado",
            d: "Internamente parece claro. Para quem está de fora, a empresa parece uma entre muitas e acaba a competir por preço.",
          },
          {
            t: "Não há ninguém que diga o que é preciso ouvir",
            d: "A equipa está demasiado dentro. Os fornecedores vendem o serviço que têm. Falta uma leitura externa, honesta e continuada.",
          },
        ].map((item, i) => (
          <Reveal key={item.t} delay={i * 60}>
            <div>
              <h3 className="text-base font-medium">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/65">
                {item.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProblemaTese() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>A tese</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              O problema raramente é só de marketing.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Quando o crescimento trava, a primeira reação é procurar mais
              procura. Mais anúncios, mais conteúdo, mais um fornecedor. Na
              maioria dos casos que analisamos, o bloqueio não vive dentro de
              uma área. Vive na fronteira entre elas.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O marketing atrai um tipo de cliente, as vendas prometem outro e a
              operação entrega um terceiro. Cada área faz o seu trabalho, o
              negócio no seu conjunto perde margem, tempo e confiança. Alinhar
              marketing, vendas e operações costuma libertar mais crescimento do
              que qualquer campanha nova.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function ProblemaConsequencias() {
  const items = [
    {
      t: "Decisões tomadas às cegas",
      d: "Sem critério partilhado, cada decisão é discutida do zero e ganha quem tem mais convicção, não quem tem melhor leitura.",
    },
    {
      t: "Capital investido no sítio errado",
      d: "Investe-se onde é mais visível, não onde há mais retorno. O custo real aparece meses depois, já difícil de reverter.",
    },
    {
      t: "Equipa cansada de recomeçar",
      d: "Muda-se de prioridade a cada trimestre. Nada tem tempo suficiente para provar se funciona ou não.",
    },
    {
      t: "O mercado avança primeiro",
      d: "Concorrentes com menos qualidade mas mais clareza ocupam o espaço que devia ser teu.",
    },
  ];
  return (
    <Section className="bg-muted">
      <Reveal>
        <Kicker>Custo de continuar</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          A falta de clareza não é neutra. Tem preço.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {items.map((v, i) => (
          <Reveal key={v.t} delay={i * 70}>
            <div className="border-t border-foreground pt-6">
              <h3 className="display text-2xl">{v.t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Abordagem ------------------------------- */

export function Abordagem() {
  const items = [
    {
      n: "01",
      t: "Diagnosticamos os bloqueios",
      d: "Research independente, entrevistas e leitura dos números. Separamos o que parece um problema do que está mesmo a travar o crescimento.",
    },
    {
      n: "02",
      t: "Clarificamos as prioridades",
      d: "Uma lista curta do que importa nos próximos 90 dias e uma lista explícita do que fica de fora, para libertar tempo e capital.",
    },
    {
      n: "03",
      t: "Alinhamos marketing, vendas e operações",
      d: "As três áreas passam a contar a mesma história e a trabalhar com os mesmos critérios. É aí que a maioria do crescimento perdido está.",
    },
    {
      n: "04",
      t: "Acompanhamos a implementação",
      d: "Ficamos ao lado da decisão enquanto ela é executada: revisão de KPIs, ajustes, e a pergunta difícil quando é preciso fazê-la.",
    },
  ];
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>Como trabalhamos</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Entramos onde as decisões são tomadas.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Não substituímos a tua equipa nem os teus fornecedores. Damos-lhes
              direção e, a ti, critério para avaliar o que está a funcionar.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 70}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-border py-8 md:gap-10">
                  <span className="label-xs pt-1.5 text-accent-foreground/50">
                    {it.n}
                  </span>
                  <div>
                    <h3 className="display text-2xl md:text-[1.75rem]">{it.t}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                      {it.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function SomosNaoSomos() {
  const somos = [
    "Um escritório externo de estratégia, pequeno e seletivo",
    "Trabalho direto com quem pensa a estratégia",
    "Diagnóstico, prioridades e acompanhamento continuado",
    "Raciocínio visível: explicamos sempre o porquê",
    "Uma leitura honesta, mesmo quando é desconfortável",
  ];
  const naoSomos = [
    "Uma agência que gere redes sociais ou anúncios",
    "Uma equipa anónima com account managers a intermediar",
    "Uma consultora de relatórios longos e jargão",
    "Horas de trabalho apresentadas como se fossem valor",
    "Promessas de resultados garantidos",
  ];
  return (
    <Section className="bg-muted">
      <Reveal>
        <Kicker>Onde estamos no mercado</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          Entre a agência de execução e a grande consultora, e deliberadamente
          nem uma coisa nem outra.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        <Reveal>
          <div className="h-full bg-background p-8 md:p-10">
            <p className="label-xs text-primary">O que somos</p>
            <ul className="mt-8 space-y-5">
              {somos.map((s) => (
                <li key={s} className="flex gap-4 text-[0.95rem] leading-relaxed">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="h-full bg-background p-8 md:p-10">
            <p className="label-xs text-muted-foreground">O que não somos</p>
            <ul className="mt-8 space-y-5">
              {naoSomos.map((s) => (
                <li
                  key={s}
                  className="flex gap-4 text-[0.95rem] leading-relaxed text-muted-foreground"
                >
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-border" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Principios() {
  const values = [
    {
      t: "Proximidade",
      d: "Falas com quem pensa a estratégia. Sempre. Não há camada intermédia entre a tua decisão e o nosso raciocínio.",
    },
    {
      t: "Clareza sobre conforto",
      d: "Dizemos o que achamos que precisas de ouvir. Se discordarmos do caminho, dizemos porquê antes de avançar.",
    },
    {
      t: "Foco sobre volume",
      d: "Poucas empresas ao mesmo tempo, poucas prioridades de cada vez. É a única forma de o acompanhamento ser real.",
    },
    {
      t: "Prova sobre promessa",
      d: "Não garantimos resultados. Mostramos o raciocínio, os critérios e os números, e deixamos que sejam eles a falar.",
    },
  ];
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>Princípios</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Quatro regras que não negociamos.
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 70}>
              <div className="border-t border-foreground pt-6">
                <h3 className="display text-2xl">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Credibilidade() {
  return (
    <Section className="bg-foreground text-background">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>Transparência</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Somos novos como marca. Não somos novos no trabalho.
            </h2>
            <p className="mt-6 leading-relaxed text-background/70">
              A Rivano &amp; Co é recente e não vamos encher esta página com
              logótipos emprestados ou testemunhos que não existem. Preferimos
              mostrar como pensamos e deixar que a primeira conversa sirva de
              amostra.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-px bg-background/15 sm:grid-cols-2">
            {[
              {
                t: "Uma leitura transversal",
                d: "Marketing, vendas e operações analisados em conjunto. A maioria dos bloqueios vive na fronteira entre eles.",
              },
              {
                t: "Raciocínio visível",
                d: "Recebes o pensamento por escrito: hipóteses, evidência, decisão recomendada e o que faria mudar de ideias.",
              },
              {
                t: "Seletividade real",
                d: "Aceitamos poucas empresas em simultâneo e recusamos projetos em que não acreditamos que somos úteis.",
              },
              {
                t: "Diagnóstico com valor próprio",
                d: "O diagnóstico não é um isco comercial. É entregável fechado, com plano de 90 dias que podes executar sozinho.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70} className="h-full">
                <div className="h-full bg-foreground p-8">
                  <h3 className="text-base font-medium">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/65">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Serviços -------------------------------- */

export function Servicos() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col border border-foreground p-8 md:p-12">
            <p className="label-xs text-muted-foreground">Ponto de partida</p>
            <h2 className="display mt-6 text-[2.25rem] leading-tight">
              Diagnóstico Estratégico
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Um trabalho fechado, com valor próprio. No fim sabes o que está a
              travar o crescimento e o que fazer nos próximos 90 dias, quer
              continues connosco quer não.
            </p>
            <div className="mt-8 border-t border-border pt-8">
              <p className="label-xs text-muted-foreground">O que inclui</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Questionário prévio e recolha de contexto",
                  "Research independente ao mercado e concorrência",
                  "Entrevistas com fundadores e equipa-chave",
                  "Análise dos bloqueios ao crescimento",
                  "Plano de ação priorizado para 90 dias",
                  "Sessão de apresentação e decisão",
                ].map((l) => (
                  <li key={l} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-border pt-8 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground">Faz sentido para</span> quem
                precisa de saber onde está o bloqueio real antes de investir
                mais dinheiro em execução.
              </p>
              <p className="mt-4">
                <span className="text-foreground">Levas contigo</span> um
                documento de decisão com hipóteses, evidência e prioridades, e a
                sessão onde tudo é discutido a fundo.
              </p>
            </div>
            <div className="mt-auto flex items-end justify-between gap-6 pt-10">
              <p className="text-sm text-muted-foreground">
                Investimento
                <span className="mt-1 block display text-2xl text-foreground">
                  1.000 €
                </span>
              </p>
              <Link
                to="/contacto"
                className="border-b border-foreground/30 pb-1 text-sm transition-colors hover:border-foreground"
              >
                Começar por aqui →
              </Link>
            </div>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <article className="flex h-full flex-col bg-foreground p-8 text-background md:p-12">
            <p className="label-xs text-background/50">Continuidade</p>
            <h2 className="display mt-6 text-[2.25rem] leading-tight">
              Acompanhamento Estratégico
            </h2>
            <p className="mt-5 leading-relaxed text-background/70">
              Para quem quer manter a perspetiva externa viva enquanto
              implementa. Não executamos o trabalho tático: desafiamos,
              ajustamos e ajudamos a decidir.
            </p>
            <div className="mt-8 border-t border-background/15 pt-8">
              <p className="label-xs text-background/50">O que inclui</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Compromisso de 6 meses",
                  "Reuniões de trabalho recorrentes",
                  "Revisão de KPIs e leitura dos números",
                  "Apoio à decisão entre reuniões",
                  "Acompanhamento da implementação",
                  "Alinhamento entre marketing, vendas e operações",
                ].map((l) => (
                  <li key={l} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-background/15 pt-8 text-sm text-background/70">
              <p>
                <span className="text-background">Faz sentido para</span> quem
                já sabe o que quer resolver e quer companhia crítica enquanto
                implementa.
              </p>
              <p className="mt-4">
                <span className="text-background">Levas contigo</span> um ritmo
                de decisão estável, prioridades revistas todos os meses e uma
                leitura externa sempre disponível.
              </p>
            </div>
            <div className="mt-auto flex items-end justify-between gap-6 pt-10">
              <p className="text-sm text-background/60">
                Investimento
                <span className="mt-1 block display text-2xl text-background">
                  2.000 a 2.500 € / mês
                </span>
              </p>
              <Link
                to="/contacto"
                className="border-b border-background/40 pb-1 text-sm transition-colors hover:border-background"
              >
                Falar sobre isto →
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

export function ServicosDistincao() {
  return (
    <Section className="bg-muted">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>Distinção</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Um responde ao que fazer. O outro sustenta o como decidir.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              O Diagnóstico é um produto completo. Termina com um plano que
              podes executar internamente, sem qualquer compromisso connosco.
              Muitas empresas ficam por aqui, e isso é um bom resultado.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              O Acompanhamento existe para quando a dificuldade não é saber o
              que fazer, mas manter o rumo enquanto a operação puxa em todas as
              direções. Não somos mais um par de mãos. Somos o critério que
              impede decisões apressadas.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------- Método --------------------------------- */

export function Metodo() {
  const steps = [
    {
      n: "Fase 01",
      t: "Entender o contexto",
      d: "Como se ganha dinheiro hoje, onde está a margem, o que já foi tentado e porque não funcionou.",
    },
    {
      n: "Fase 02",
      t: "Diagnosticar bloqueios",
      d: "Onde o crescimento trava: proposta, procura, conversão, entrega ou capacidade de decisão.",
    },
    {
      n: "Fase 03",
      t: "Definir prioridades",
      d: "Poucas decisões, na ordem certa, com o impacto esperado e o custo de as adiar.",
    },
    {
      n: "Fase 04",
      t: "Alinhar a equipa",
      d: "Marketing, vendas e operações a partilhar o mesmo diagnóstico, os mesmos critérios e a mesma linguagem.",
    },
    {
      n: "Fase 05",
      t: "Acompanhar a implementação",
      d: "Ritmo de reuniões, responsáveis claros e revisão do que os números estão a dizer.",
    },
    {
      n: "Fase 06",
      t: "Rever e ajustar",
      d: "O plano muda quando a realidade muda. O que não muda é o critério com que decidimos.",
    },
  ];
  return (
    <Section>
      <Reveal>
        <Kicker>Etapas</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          Um processo simples, repetido com disciplina.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 60} className="h-full">
            <div className="flex h-full flex-col bg-background p-6 pt-8 md:p-8">
              <span className="label-xs text-muted-foreground">{s.n}</span>
              <h3 className="display mt-6 text-xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function MetodoParticipacao() {
  return (
    <Section className="bg-muted">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Kicker>O teu papel</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              O método só funciona contigo dentro dele.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Não trabalhamos em silêncio para reaparecer com um relatório. As
              hipóteses são discutidas enquanto se formam, e as decisões são
              sempre tuas.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="border-t border-border">
            {[
              {
                t: "Acesso ao contexto real",
                d: "Números, histórico e conversas francas sobre o que não correu bem. Sem isso, o diagnóstico é opinião.",
              },
              {
                t: "Tempo do decisor",
                d: "Algumas horas por mês de quem decide. É pouco, mas não é opcional.",
              },
              {
                t: "Abertura para discordar",
                d: "As melhores decisões saem de conversas onde as duas partes podem mudar de ideias.",
              },
              {
                t: "Capacidade de executar",
                d: "Equipa interna ou fornecedores capazes de implementar o que fica decidido.",
              },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 70}>
                <div className="border-b border-border py-7">
                  <h3 className="display text-2xl">{it.t}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                    {it.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Critérios ------------------------------- */

export function Criterios() {
  return (
    <Section>
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="label-xs text-primary">Faz sentido para</p>
            <ul className="mt-8 space-y-6">
              {[
                "PMEs com operação real e cashflow consistente.",
                "Empresas com pelo menos um a dois anos de atividade.",
                "Quem trabalha muito e sente que o crescimento está bloqueado.",
                "Quem já investe em execução, interna ou externa, ou está disposto a fazê-lo.",
                "Quem não precisa de mais um fornecedor, precisa de melhor pensamento.",
                "Quem está disponível para ouvir uma leitura honesta e agir sobre ela.",
              ].map((t) => (
                <li key={t} className="flex gap-4 leading-relaxed">
                  <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div>
            <p className="label-xs text-muted-foreground">
              Provavelmente não faz sentido para
            </p>
            <ul className="mt-8 space-y-6 text-muted-foreground">
              {[
                "Negócios que ainda não têm capacidade de investimento.",
                "Quem procura um milagre em 30 dias.",
                "Startups pré-receita à procura de trabalho em troca de equity.",
                "Quem quer alguém para gerir redes sociais ou anúncios.",
                "Quem prefere que confirmemos o plano já decidido.",
              ].map((t) => (
                <li key={t} className="flex gap-4 leading-relaxed">
                  <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-border" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function CriteriosSinais() {
  return (
    <Section className="bg-foreground text-background">
      <Reveal>
        <Kicker>Seletividade</Kicker>
        <h2 className="display mt-8 max-w-3xl text-[clamp(2rem,4.4vw,3.25rem)]">
          Trabalhamos com poucas empresas em simultâneo, e isso é uma decisão.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-10 border-t border-background/15 pt-12 md:grid-cols-3">
        {[
          {
            t: "Sinal de encaixe",
            d: "Há um decisor disponível, números acessíveis e vontade genuína de rever o que se tem feito.",
          },
          {
            t: "Sinal de desalinhamento",
            d: "A conversa procura validação, prazos impossíveis ou uma garantia de resultado que ninguém pode dar.",
          },
          {
            t: "Se não formos os certos",
            d: "Dizemos na primeira conversa e, sempre que conseguimos, apontamos uma direção mais útil.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 70}>
            <div>
              <h3 className="display text-2xl">{c.t}</h3>
              <p className="mt-3 leading-relaxed text-background/65">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

export function Faq() {
  const faqs = [
    {
      q: "Executam o trabalho de marketing ou vendas?",
      a: "Não. Não fazemos gestão de redes sociais, anúncios nem produção de conteúdo. Definimos a direção, os critérios e as prioridades, e acompanhamos quem executa, seja a tua equipa ou fornecedores externos.",
    },
    {
      q: "Preciso de fazer o Diagnóstico antes do Acompanhamento?",
      a: "Sim. Não conseguimos acompanhar decisões sem primeiro entender o negócio a fundo. O Diagnóstico é fechado e tem valor próprio: podes ficar por aí e executar o plano internamente.",
    },
    {
      q: "Quanto tempo demora o Diagnóstico?",
      a: "Habitualmente três a quatro semanas, consoante a disponibilidade da equipa para as entrevistas e o acesso a dados.",
    },
    {
      q: "Com quem vou trabalhar?",
      a: "Com quem pensa a estratégia, do primeiro ao último dia. Não há account managers nem equipas de bastidores.",
    },
    {
      q: "Garantem resultados?",
      a: "Não, e desconfia de quem garante. Garantimos método, presença e honestidade na leitura. O crescimento depende também da execução e do mercado.",
    },
    {
      q: "Trabalham com que setores?",
      a: "Sem restrição de setor. O critério é o modelo de negócio: PMEs com receita recorrente ou vendas consistentes, e um decisor disponível para trabalhar connosco.",
    },
  ];
  return (
    <Section className="bg-muted">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker>Perguntas frequentes</Kicker>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.25rem)]">
              Antes de marcares.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <dl className="border-t border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="grid gap-3 border-b border-border py-7 md:grid-cols-5 md:gap-8">
                  <dt className="display text-xl md:col-span-2">{f.q}</dt>
                  <dd className="leading-relaxed text-muted-foreground md:col-span-3">
                    {f.a}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
