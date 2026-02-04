<script setup>
import { onMounted } from "vue";
import LinkNavbarItem from "./LinkNavbarItem.vue";
import RouterNavbarItem from "./RouterNavbarItem.vue";

let opened = false;
let menuButton;

onMounted(() => {
  const navbar = document.getElementById("navbar")
  menuButton = document.getElementById("menu-button");
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
  if (opened) {
    menuButton.classList.remove("relative");
    menuButton.classList.add("flex");
    menuButton.classList.add("flex-col");
    menuButton.classList.add("gap-1");

    menuButton.children[0].classList.remove("rotate-45");
    menuButton.children[1].classList.remove("rotate-135");
    menuButton.children[0].classList.remove("absolute");
    menuButton.children[1].classList.remove("absolute");
    menuButton.children[2].classList.remove("hidden");
  } else {
    menuButton.classList.add("relative");
    menuButton.classList.remove("flex");
    menuButton.classList.remove("flex-col");
    menuButton.classList.remove("gap-1");

    menuButton.children[0].classList.add("rotate-45");
    menuButton.children[1].classList.add("rotate-135");
    menuButton.children[0].classList.add("absolute");
    menuButton.children[1].classList.add("absolute");
    menuButton.children[2].classList.add("hidden");
  }

  opened = !opened;
}
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
    <div class="flex flex-col gap-1 md:hidden transition-all duration-300 cursor-pointer" v-on:click="toggleMenu"
      id="menu-button">
      <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
      <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
      <div class="w-6 h-1 bg-text-primary rounded-2xl transition-all duration-300"></div>
    </div>
  </nav>
</template>
