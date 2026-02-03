<script setup>
const props = defineProps({ content: String, link: String })
</script>

<template>
    <li class="pl-8"><a :href="link"
            class="text-xl text-text-primary bg-primary p-4 rounded-4xl hover:bg-accent font-bold">{{ content }}</a>
    </li>
</template>