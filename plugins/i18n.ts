import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import de from "../locales/de.json";
import da from "../locales/da.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const ls = useLocalStorage("app-language", "en");
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: ls.value,
    messages: {
      en,
      de,
      da,
    },
  });

  vueApp.use(i18n);
});
