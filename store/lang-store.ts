import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => ({
    _lang: useLocalStorage("app-language", "en"),
  }),
  getters: {
    lang: (state) => state._lang,
  },
  actions: {
    setLang(value: "en" | "de" | "da" | string) {
      // update the value in both cookie and memory
      const ls = useLocalStorage("app-language", "en");

      ls.value = value;
      this._lang = ls.value;
    },
  },
});
