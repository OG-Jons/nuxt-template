import en from "~/locales/en.json";
import de from "~/locales/de.json";
import da from "~/locales/da.json";

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: "en",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "lang",
  },
  fallbackLocale: "en",
  messages: {
    en,
    de,
    da,
  },
}));
