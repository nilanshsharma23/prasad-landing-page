<script setup>
const props = defineProps({ title: String, subtitle: String })
</script>

<template>
    <div
        class="bg-card-background flex flex-col justify-between gap-4 rounded-2xl p-16 border-accent border-2 shadow-2xl">
        <div class="text-4xl font-bold text-text-primary text-center">{{ title }}</div>
        <div class="text-lg text-text-primary text-center">{{ subtitle }}</div>
    </div>
</template>