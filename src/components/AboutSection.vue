<template>
    <section id="about" class="py-24">
        <div class="container mx-auto px-6">    
            <div v-motion :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
                class="text-center mb-16"
            >
                <p class="text-sm font-medium tracking-widest uppercase mb-2" style="color: hsl(var(--primary))">
                    Background
                </p>
                <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color: hsl(var(--foreground))">
                    About Me
                </h2>
            </div>
    
            <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">    
                <!-- Left: Summary -->
                <div v-motion :initial="{ opacity: 0, x: -20 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500 } }">
                    <p class="leading-relaxed mb-6" style="color: hsl(var(--muted-foreground))">
                        {{ aboutData.summary }}
                    </p>
                    <ul class="space-y-3">
                        <li v-for="highlight in aboutData.highlights" :key="highlight" class="flex items-start gap-3 text-sm" style="color: hsl(var(--foreground))" >
                            <CheckCircle :size="16" class="mt-0.5 shrink-0" style="color: hsl(var(--primary))" />
                            {{ highlight }}
                        </li>
                    </ul>
                </div>
    
                <!-- Right: Experience -->
                <div v-motion :initial="{ opacity: 0, x: 20 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500 } }" class="space-y-6" >
                    <div v-for="exp in aboutData.experience" :key="exp.period" class="glass-card rounded-xl p-5 border-2 skill-card-hover" style="border-color: hsl(var(--primary))" >
                        <div class="flex items-center gap-2 mb-1">
                            <Briefcase :size="14" style="color: hsl(var(--primary))" />
                            <span class="text-xs" style="color: hsl(var(--muted-foreground))">{{ exp.period }}</span>
                        </div>
                        <h4 class="font-heading font-semibold" style="color: hsl(var(--foreground))">{{ exp.role }}</h4>
                        <p class="text-sm mb-2" style="color: hsl(var(--primary))">{{ exp.company }}</p>
                        <p class="text-sm leading-relaxed" style="color: hsl(var(--muted-foreground))">{{ exp.description }}</p>
                    </div>
                </div>
    
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
    import { CheckCircle, Briefcase } from 'lucide-vue-next'
    import { aboutData } from '../data/portfolio'
</script>