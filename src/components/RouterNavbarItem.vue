<script setup>
const props = defineProps({ content: String, route: String })
</script>

<template>
    <li class="pl-8">
        <RouterLink :to="route"
            class="text-xl text-text-primary hover:text-primary transition-all duration-200 font-bold">{{ content }}
        </RouterLink>
    </li>
</template>