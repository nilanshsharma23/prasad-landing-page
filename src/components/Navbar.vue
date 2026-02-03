<script setup>
import LinkNavbarItem from "./LinkNavbarItem.vue";
import RouterNavbarItem from "./RouterNavbarItem.vue";
</script>

<template>
  <nav class="p-8 pl-16 pr-16 flex justify-between items-center fixed w-screen">
    <img src="@/assets/logo.svg" alt="" class="h-16" />
    <ul class="hidden md:flex">
      <RouterNavbarItem content="Home" route="/" />
      <RouterNavbarItem content="About" route="/" />
      <RouterNavbarItem content="Contact" route="/" />
      <LinkNavbarItem content="Download" link="https://youtube.com" />
    </ul>
  </nav>
</template>
