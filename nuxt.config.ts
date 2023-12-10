// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  i18n: {
    vueI18n: "~/i18n.config.ts",
  },
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vue-i18n"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
