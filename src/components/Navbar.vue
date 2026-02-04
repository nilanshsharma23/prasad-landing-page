<script setup>
import { onMounted, ref } from "vue";
import LinkNavbarItem from "./LinkNavbarItem.vue";
import RouterNavbarItem from "./RouterNavbarItem.vue";

let opened = ref(false);

onMounted(() => {
  const navbar = document.getElementById("navbar")
  addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-card-background")
      navbar.classList.add("shadow-xl");
    } else {
      if (navbar.classList.contains("bg-card-background")) {
        navbar.classList.remove("bg-card-background")
      }
      if (navbar.classList.contains("shadow-xl")) {
        navbar.classList.remove("shadow-xl")
      }
    }
  })
})

function toggleMenu() {
  opened.value = !opened.value;
}
</script>

<template>
  <nav class="p-8 pl-16 pr-16 md:flex justify-between items-center fixed w-full h-32 transition-all duration-300 hidden"
    id="navbar">
    <RouterLink to="/">
      <img src="@/assets/logo.svg" alt="" class="h-16" />
    </RouterLink>
    <ul class="hidden md:flex">
      <RouterNavbarItem content="Home" route="/" />
      <RouterNavbarItem content="About" route="/about" />
      <LinkNavbarItem content="Download" link="https://youtube.com" />
    </ul>
    <ul class="flex md:hidden flex-col">
      <RouterNavbarItem content="Home" route="/" />
      <RouterNavbarItem content="About" route="/about" />
      <LinkNavbarItem content="Download" link="https://youtube.com" />
    </ul>
  </nav>
  <ul class="flex flex-col items-center fixed w-full h-32 transition-all duration-300 md:hidden bg-card-background"
    id="mobile">
    <div class="flex flex-row justify-between items-center w-full p-8">
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="" class="h-16" />
      </RouterLink>
      <div class="flex flex-col gap-1 md:hidden transition-all duration-300 cursor-pointer" v-on:click="toggleMenu"
        id="menu-button">
        <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
        <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
        <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-4 bg-card-background w-full" v-if="opened">
      <li class="pl-8 pb-8">
        <RouterLink to="/" class="text-4xl text-text-primary hover:text-primary transition-all duration-200 font-bold">
          Home
        </RouterLink>
      </li>
      <li class="pl-8 pb-8">
        <RouterLink to="/about"
          class="text-4xl text-text-primary hover:text-primary transition-all duration-200 font-bold">
          About
        </RouterLink>
      </li>
      <li class="pl-8 pb-8">
        <a href="#" class="text-4xl text-text-primary hover:text-primary transition-all duration-200 font-bold">
          Download
        </a>
      </li>
    </div>
  </ul>
</template>
