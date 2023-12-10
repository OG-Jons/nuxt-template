<script setup>
const colorMode = useColorMode();

const changeColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div
    class="m-1 rounded-full dark:bg-slate-600 bg-slate-200 h-fit w-fit p-1 flex justify-center items-center cursor-pointer"
    @click="changeColorMode()"
  >
    <span v-if="colorMode.value === 'dark'" class="i-iconamoon-mode-dark-bold">
    </span>
    <span
      v-if="colorMode.value === 'light'"
      class="i-iconamoon-mode-light-bold"
    >
    </span>
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200 transition-colors duration-1000;
}
</style>
