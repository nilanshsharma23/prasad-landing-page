<script setup>
import LinkNavbarItem from "./LinkNavbarItem.vue";
import RouterNavbarItem from "./RouterNavbarItem.vue";

const navbar = document.getElementsByTagName("nav");

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-card-background');
  }
})
</script>

<template>
  <nav class="p-8 pl-16 pr-16 flex justify-between items-center fixed w-full h-32">
    <RouterLink to="/">
      <img src="@/assets/logo.svg" alt="" class="h-16" />
    </RouterLink>
    <ul class="hidden md:flex">
      <RouterNavbarItem content="Home" route="/" />
      <RouterNavbarItem content="About" route="/about" />
      <RouterNavbarItem content="Contact" route="/" />
      <LinkNavbarItem content="Download" link="https://youtube.com" />
    </ul>
  </nav>
</template>
