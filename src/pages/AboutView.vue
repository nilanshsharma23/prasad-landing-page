<script setup>
import AboutCard from '@/components/AboutCard.vue';
import MainFooter from '@/components/MainFooter.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <Navbar />
    <img src="@/assets/covers/bhandara-horizontal.jpg" alt="" class="min-w-480 fixed z-[-1] opacity-50">
    <div
        class="h-screen flex justify-end items-start p-24 flex-col bg-linear-to-t from-black via-transparent to-transparent">
        <div class="text-7xl font-bold text-text-primary">About Us</div>
        <div class="text-4xl font-bold">
            <div class="text-text-primary">Free food.</div>
            <div class="text-accent">Good karma.</div>
            <div class="text-secondary">Real community.</div>
        </div>
    </div>
    <div class="bg-background w-full p-12 lg:grid lg:grid-cols-3 gap-4 flex flex-col" id="content">
        <AboutCard title="Prasad"
            subtitle="Prasad is the easiest way to find bhandaras happening near you. Whether it's a langar, community feast, or prasad distribution, we help you discover free meals while connecting you with the spirit of giving in your city."
            class="row-span-2" />
        <AboutCard title="Find Free Food"
            subtitle="Stop missing out on bhandaras in your area. Get notified about free meals, timings, and locations—all in one app. From daily langars to special occasion feasts, find prasad near you with just a few taps." />
        <AboutCard title="Host a Bhandara"
            subtitle="Organizing a bhandara? Let people know. Reach more devotees, share your act of seva with the community, and make sure your generosity finds the people who'll appreciate it most." />
        <AboutCard title="Why Prasad?"
            subtitle="Prasad brings an age-old tradition into the modern age. Because doing good and eating well shouldn't be complicated."
            class="col-span-2" />
    </div>
    <MainFooter />
</template>