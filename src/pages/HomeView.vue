<script setup>
import AboutSection from "@/components/AboutSection.vue";
import MainFooter from "@/components/MainFooter.vue";
import Navbar from "@/components/Navbar.vue";
// import gsap from "gsap";
// import { ScrambleTextPlugin } from "gsap/all";

// gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, ScrollSmoother);

// function onEnter(el, done) {
//   gsap.to(el, { x: -100, duration: 5 });
//   done()
// }
</script>

<template>
  <Navbar />
  <AboutSection title="Find Free Food." subtitle="Prasad can help you find bhandaras near your location."
    imagePath="screenshots/1.png" />
  <AboutSection title="Do a good deed." subtitle="Prasad can also help you host a bhandara." :reverse="true"
    imagePath="screenshots/2.png" />
  <MainFooter />
</template>
