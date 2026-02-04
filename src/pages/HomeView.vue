<script setup>
import HomeSection from "@/components/HomeSection.vue";
import MainFooter from "@/components/MainFooter.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="h-32 block xl:hidden"></div>
  <HomeSection title="Find Free Food." subtitle="Prasad can help you find bhandaras near your location." />
  <HomeSection title="Do a good deed." subtitle="Prasad can also help you host a bhandara." :reverse="true" />
  <MainFooter />
</template>
