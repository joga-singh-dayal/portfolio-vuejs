<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <h2 class="text-2xl font-bold text-white mb-4">Page not found</h2>
            <RouterLink to="/" class="text-primary hover:underline"
                >← Back home</RouterLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
