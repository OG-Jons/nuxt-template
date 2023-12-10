<script setup>
const colorMode = useColorMode();
</script>

<template>
  <div>
    <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">{{ $t("system") }}</option>
        <option value="light">{{ $t("light") }}</option>
        <option value="dark">{{ $t("dark") }}</option>
      </select>
    </p>
  </div>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200 transition-colors duration-1000;
}
</style>
