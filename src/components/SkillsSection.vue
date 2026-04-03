<template>
    <section id="skills" class="py-24 relative">
        <div class="container mx-auto px-6">
    
            <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            class="text-center mb-16"
            >
            <p class="text-sm font-medium tracking-widest uppercase mb-2" style="color: hsl(var(--primary))">
                Expertise
            </p>
            <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color: hsl(var(--foreground))">
                Skills & Technologies
            </h2>
            </div>
    
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <SkillCard
                v-for="(skill, i) in skills"
                :key="skill.id"
                :skill="skill"
                :index="i"
            />
            </div>
    
        </div>
    </section>
</template>
  
<script setup lang="ts">
    import { skills } from '../data/portfolio'
    import SkillCard from './SkillCard.vue'
</script>