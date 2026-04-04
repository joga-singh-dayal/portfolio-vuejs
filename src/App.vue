<template>
    <Analytics />
    <RouterView />
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
import { RouterView } from 'vue-router'
</script>
