<template>
    <button
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: index * 80, duration: 500 },
        }"
        class="glass-card skill-card-hover rounded-xl p-6 text-left cursor-pointer group w-full"
        @click="router.push(`/skill/${skill.id}`)"
    >
        <div class="text-4xl mb-4">{{ skill.icon }}</div>
        <h3
            class="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors"
            style="color: hsl(var(--foreground))"
        >
            {{ skill.name }}
        </h3>
        <p
            class="text-sm leading-relaxed"
            style="color: hsl(var(--muted-foreground))"
        >
            {{ skill.description }}
        </p>
        <div
            class="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            style="color: hsl(var(--primary))"
        >
            View projects →
        </div>
    </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Skill } from '../data/portfolio'

defineProps<{
    skill: Skill
    index: number
}>()

const router = useRouter()
</script>
