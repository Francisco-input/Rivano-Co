import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "rivano-consent-v1";

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "embeds";

export type ConsentState = Record<ConsentCategory, boolean>;

const DENIED: ConsentState = {
  necessary: true,
  preferences: false,
  analytics: false,
  embeds: false,
};

const GRANTED: ConsentState = {
  necessary: true,
  preferences: true,
  analytics: true,
  embeds: true,
};

type Stored = { version: 1; date: string; consent: ConsentState };

export const CATEGORIES: {
  key: ConsentCategory;
  name: string;
  description: string;
  locked?: boolean;
}[] = [
  {
    key: "necessary",
    name: "Necessários",
    description:
      "Garantem o funcionamento e a segurança do site e guardam a sua escolha de privacidade. Sem eles o site não funciona, por isso estão sempre ativos.",
    locked: true,
  },
  {
    key: "preferences",
    name: "Preferências",
    description:
      "Memorizam pequenas opções de utilização, para que não tenha de as repetir em visitas seguintes.",
  },
  {
    key: "analytics",
    name: "Estatística",
    description:
      "Ajudam-nos a compreender, de forma agregada, que páginas são lidas e onde a leitura se interrompe. Nunca usamos estes dados para o identificar.",
  },
  {
    key: "embeds",
    name: "Conteúdos de terceiros",
    description:
      "Permitem carregar ferramentas externas incorporadas no site, nomeadamente o calendário de marcações Calendly. Quando ativa esta categoria, o Calendly pode receber dados como o seu endereço IP e colocar cookies ou armazenamento local no seu dispositivo.",
  },
];

type Ctx = {
  consent: ConsentState;
  decided: boolean;
  ready: boolean;
  openPreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (next: ConsentState) => void;
};

const ConsentContext = createContext<Ctx | null>(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider");
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DENIED);
  const [decided, setDecided] = useState(false);
  const [ready, setReady] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Stored;
        if (parsed?.consent) {
          setConsent({ ...DENIED, ...parsed.consent, necessary: true });
          setDecided(true);
        }
      }
    } catch {
      /* armazenamento indisponível: mantemos a recusa por omissão */
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: ConsentState) => {
    setConsent(next);
    setDecided(true);
    setPanelOpen(false);
    try {
      const payload: Stored = {
        version: 1,
        date: new Date().toISOString(),
        consent: next,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* sem persistência, a escolha vale para esta sessão */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      consent,
      decided,
      ready,
      openPreferences: () => setPanelOpen(true),
      acceptAll: () => persist(GRANTED),
      rejectAll: () => persist(DENIED),
      save: persist,
    }),
    [consent, decided, ready, persist],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {ready && !decided && !panelOpen && <ConsentBanner />}
      {panelOpen && <ConsentDialog onClose={() => setPanelOpen(false)} />}
    </ConsentContext.Provider>
  );
}

function ConsentBanner() {
  const { acceptAll, rejectAll, openPreferences } = useConsent();

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Privacidade e cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6"
    >
      <div
        className="mx-auto w-full max-w-3xl border border-border bg-card/95 p-6 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-8"
        style={{
          animation: "reveal-in .7s cubic-bezier(.22,1,.36,1) both",
        }}
      >
        <p className="label-xs text-muted-foreground">Privacidade</p>
        <p className="mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
          Usamos apenas o essencial para o site funcionar. Com a sua autorização,
          usamos também tecnologias de terceiros, como o calendário de marcações{" "}
          <span className="text-foreground">Calendly</span>, e medição agregada de
          leitura. Pode aceitar, rejeitar ou escolher categoria a categoria, e
          mudar de ideias quando quiser.
        </p>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={acceptAll}
              className="inline-flex items-center bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              Aceitar
            </button>
            <button
              onClick={rejectAll}
              className="inline-flex items-center border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              Rejeitar
            </button>
            <button
              onClick={openPreferences}
              className="inline-flex items-center border-b border-foreground/30 pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Gerir preferências
            </button>
          </div>
          <Link
            to="/privacidade"
            className="shrink-0 text-xs text-muted-foreground underline decoration-accent underline-offset-4 hover:text-foreground"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-5 w-10 shrink-0 border transition-colors ${
        checked ? "border-foreground bg-foreground" : "border-border bg-transparent"
      } ${disabled ? "cursor-not-allowed opacity-45" : ""}`}
    >
      <span
        aria-hidden
        className={`absolute top-[3px] h-3 w-3 transition-all ${
          checked ? "left-[22px] bg-background" : "left-[3px] bg-muted-foreground"
        }`}
      />
    </button>
  );
}

function ConsentDialog({ onClose }: { onClose: () => void }) {
  const { consent, save, acceptAll, rejectAll } = useConsent();
  const [draft, setDraft] = useState<ConsentState>(consent);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center md:p-6">
      <div
        className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Preferências de privacidade"
        className="relative max-h-[86vh] w-full max-w-2xl overflow-y-auto border border-border bg-card p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.5)] md:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="label-xs text-muted-foreground">Preferências</p>
            <h2 className="display mt-4 text-[clamp(1.6rem,3vw,2.15rem)] leading-tight">
              Escolha o que autoriza.
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar preferências"
            className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fechar
          </button>
        </div>

        <p className="mt-5 leading-relaxed text-muted-foreground">
          Nada fora da categoria «Necessários» é carregado antes da sua
          autorização. Pode alterar esta escolha em qualquer momento através de
          «Preferências de privacidade», no fim de cada página.
        </p>

        <div className="mt-9 divide-y divide-border border-y border-border">
          {CATEGORIES.map((c) => (
            <div key={c.key} className="flex items-start gap-6 py-6">
              <div className="flex-1">
                <p className="text-foreground">{c.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                {c.locked && (
                  <p className="label-xs mt-3 text-muted-foreground">
                    Sempre ativos
                  </p>
                )}
              </div>
              <div className="pt-1">
                <Toggle
                  label={c.name}
                  checked={c.locked ? true : draft[c.key]}
                  disabled={c.locked}
                  onChange={(v) => setDraft((d) => ({ ...d, [c.key]: v }))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => save({ ...draft, necessary: true })}
              className="inline-flex items-center bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary"
            >
              Guardar preferências
            </button>
            <button
              onClick={acceptAll}
              className="inline-flex items-center border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              Aceitar tudo
            </button>
            <button
              onClick={rejectAll}
              className="inline-flex items-center border-b border-foreground/30 pb-1 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Rejeitar tudo
            </button>
          </div>
          <Link
            to="/privacidade"
            onClick={onClose}
            className="shrink-0 text-xs text-muted-foreground underline decoration-accent underline-offset-4 hover:text-foreground"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ManageConsentButton({ className = "" }: { className?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button
      onClick={openPreferences}
      className={className || "hover:text-foreground"}
    >
      Preferências de privacidade
    </button>
  );
}
