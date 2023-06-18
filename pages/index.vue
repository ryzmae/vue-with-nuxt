<template>
    <div class="hella">
        Hello, Nuxt.js {{ version }}
    </div>
</template>

<script setup>
    const version = 2 + 1;

    definePageMeta({
        layout: 'default',
    })
</script>

<style scoped>
    .hella {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 3rem;
        padding: 10rem;
    }
</style>