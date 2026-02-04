<script setup>
const props = defineProps({ title: String, subtitle: String })
</script>

<template>
    <div
        class="w-full h-full bg-card-background shadow-xl flex flex-col text-text-primary items-center justify-center p-8 gap-4">
        <div class="text-3xl font-bold">{{ title }}</div>
        <div class="text-xl text-center">{{ subtitle }}</div>
    </div>
</template>