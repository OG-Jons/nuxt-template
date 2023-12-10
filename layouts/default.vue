<template>
  <div>
    <div class="flex flex-inline">
      <utility-language-selector />
      <utility-dark-mode-selector />
      <span>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </span>
    </div>
    <hr />
    <slot />
  </div>
</template>
