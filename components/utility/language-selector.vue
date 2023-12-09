<template>
  <span>{{ $t("language") }}</span>

  <div
    class="rounded-full flex w-fit gap-2 bg-slate-200 dark:bg-slate-600 px-2 py-1"
  >
    <span
      class="i-circle-flags-dk text-4xl cursor-pointer bg-slate-100 rounded-full"
      @click="changeLang('da')"
    ></span>
    <span
      class="i-circle-flags-de text-4xl cursor-pointer"
      @click="changeLang('de')"
    ></span>
    <span
      class="i-circle-flags-en text-4xl cursor-pointer"
      @click="changeLang('en')"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLangStore } from "~/store/lang-store";

const i18n = useI18n();
const langStore = useLangStore();

const changeLang = (lang: string) => {
  i18n.locale.value = lang;
  langStore.setLang(lang);
};
</script>
