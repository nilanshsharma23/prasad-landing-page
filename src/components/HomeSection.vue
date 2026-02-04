<script setup>
const props = defineProps({
    title: String, subtitle: String, imagePath: String, reverse: Boolean = false,
});

const getImageURL = (path) => {
    const fullPath = `../assets/${path}`
    return new URL(fullPath, import.meta.url).pathname
}
</script>

<template>
    <div class="p-12 min-h-225">
        <div v-if="reverse" class="flex flex-row-reverse justify-around items-center" id="home-section">
            <div class="flex flex-col gap-2">
                <div class="text-text-primary text-7xl font-bold">{{ title }}</div>
                <div class="text-text-primary text-3xl">{{ subtitle }}</div>
                <div class="flex flex-row gap-4">
                    <a href="#" class="p-4 pl-8 pr-8 bg-primary rounded-4xl text-xl font-bold">Download Now</a>
                    <RouterLink to="/about"
                        class="p-4 pl-8 pr-8 bg-card-background rounded-4xl text-xl text-text-primary">
                        Know
                        More
                    </RouterLink>
                </div>
            </div>
            <div class="xl:flex flex-row justify-center hidden h-screen items-center gap-2">
                <img :src="getImageURL(imagePath)" alt="" class="border-secondary border-2 rounded-2xl h-162.75">
            </div>
        </div>
        <div v-else class="flex flex-row justify-around items-center">
            <div class="flex flex-col gap-2">
                <div class="text-text-primary text-7xl font-bold">{{ title }}</div>
                <div class="text-text-primary text-3xl">{{ subtitle }}</div>
                <div class="flex flex-row gap-4">
                    <a href="#" class="p-4 pl-8 pr-8 bg-primary rounded-4xl text-xl font-bold">Download Now</a>
                    <RouterLink to="/about"
                        class="p-4 pl-8 pr-8 bg-card-background rounded-4xl text-xl text-text-primary">
                        Know
                        More
                    </RouterLink>
                </div>
            </div>
            <div class="xl:flex flex-row justify-center hidden h-screen items-center gap-2">
                <img :src="getImageURL(imagePath)" alt="" class="border-secondary border-2 rounded-2xl h-162.75">
            </div>
        </div>
    </div>
</template>