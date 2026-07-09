import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { TRANSLATIONS, type Lang, type TranslationKey } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends TranslationKey>(key: K) => (typeof TRANSLATIONS)["fr"][K];
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "bougainvilla.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // French is the default. We initialize with 'fr' for SSR-safe render,
  // then hydrate the stored preference on the client.
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
        return;
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const t = <K extends TranslationKey>(key: K) => TRANSLATIONS[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-background/60 text-xs ${className}`}>
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "fr" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}
