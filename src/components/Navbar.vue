<script setup>
import { onMounted } from "vue";
import LinkNavbarItem from "./LinkNavbarItem.vue";
import RouterNavbarItem from "./RouterNavbarItem.vue";


onMounted(() => {
  const navbar = document.getElementById("navbar")

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-card-background")
    } else {
      if (navbar.classList.contains("bg-card-background")) {
        navbar.classList.remove("bg-card-background")
      }
    }
  })
})
</script>

<template>
  <nav class="p-8 pl-16 pr-16 flex justify-between items-center fixed w-full h-32 transition-all duration-300"
    id="navbar">
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
