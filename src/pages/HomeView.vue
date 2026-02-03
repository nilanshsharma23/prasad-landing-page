<script setup>
import LinkNavbarItem from "@/components/LinkNavbarItem.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="p-12 flex flex-row justify-around items-center h-screen">
    <div class="flex flex-col gap-2">
      <div class="text-text-primary text-7xl font-bold">Find Free Food.</div>
      <div class="text-text-primary text-3xl">Prasad can help you find bhandaras, and host bhandaras.</div>
      <div class="flex flex-row gap-4">
        <a href="#" class="p-4 pl-8 pr-8 bg-primary rounded-4xl text-xl font-bold">Download Now</a>
        <RouterLink to="/" class="p-4 pl-8 pr-8 bg-card-background rounded-4xl text-xl text-text-primary">Know More
        </RouterLink>
      </div>
    </div>
    <div class="2xl:flex flex-row justify-center hidden h-screen items-center gap-2">
      <img src="@/assets/screenshots/2.png" alt="" class="border-secondary border-2 rounded-2xl h-139.5">
      <img src="@/assets/screenshots/1.png" alt="" class="border-secondary border-2 rounded-2xl h-162.75">
      <img src="@/assets/screenshots/3.png" alt="" class="border-secondary border-2 rounded-2xl h-139.5">
    </div>
  </div>
  <footer class="w-full bg-card-background flex flex-row p-8 items-center justify-around">
    <div class="text-2xl text-text-primary">Made by Nilansh Sharma.</div>
    <div class="flex flex-row gap-4">
      <a href="https://www.instagram.com/prasadbhandara">
        <img src="@/assets/social/instagram.svg" alt="" class="size-6"></a>
      <a href="https://www.youtube.com/@pyscrap">
        <img src="@/assets/social/youtube.png" alt="" class="h-6"></a>
    </div>
  </footer>
</template>
