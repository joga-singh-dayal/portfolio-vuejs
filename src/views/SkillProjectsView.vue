<template>
    <div class="min-h-screen">
        <Navbar />

        <!-- Skill not found -->
        <div
            v-if="!skill"
            class="min-h-screen flex items-center justify-center"
        >
            <div class="text-center">
                <h2
                    class="font-heading text-2xl font-bold mb-4"
                    style="color: hsl(var(--foreground))"
                >
                    Skill not found
                </h2>
                <RouterLink
                    to="/"
                    style="color: hsl(var(--primary))"
                    class="hover:underline"
                >
                    ← Back home
                </RouterLink>
            </div>
        </div>

        <!-- Skill found -->
        <div v-else class="pt-28 pb-20 container mx-auto px-6">
            <!-- Header -->
            <div
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
            >
                <RouterLink
                    to="/"
                    class="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover-back"
                    style="color: hsl(var(--muted-foreground))"
                >
                    <ArrowLeft :size="16" /> Back to Home
                </RouterLink>

                <div class="flex items-center gap-4 mb-10">
                    <span class="text-5xl">{{ skill.icon }}</span>
                    <div>
                        <h1
                            class="font-heading text-3xl md:text-4xl font-bold"
                            style="color: hsl(var(--foreground))"
                        >
                            {{ skill.name }}
                        </h1>
                        <p style="color: hsl(var(--muted-foreground))">
                            {{ skill.description }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Projects -->
            <div class="space-y-8">
                <article
                    v-for="(project, i) in skill.projects"
                    :key="project.id"
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 150, duration: 500 },
                    }"
                    class="glass-card rounded-2xl p-6 md:p-8"
                >
                    <h3
                        class="font-heading text-xl font-semibold mb-3"
                        style="color: hsl(var(--foreground))"
                    >
                        {{ project.title }}
                    </h3>
                    <p
                        class="leading-relaxed mb-5"
                        style="color: hsl(var(--muted-foreground))"
                    >
                        {{ project.description }}
                    </p>

                    <!-- Technologies -->
                    <div class="mb-5">
                        <h4
                            class="text-xs font-semibold uppercase tracking-wider mb-2"
                            style="color: hsl(var(--primary))"
                        >
                            Technologies
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tech in project.technologies"
                                :key="tech"
                                class="text-xs px-3 py-1 rounded-full"
                                style="
                                    background: hsl(var(--secondary));
                                    color: hsl(var(--secondary-foreground));
                                "
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- Why these techs -->
                    <div class="mb-5">
                        <h4
                            class="text-xs font-semibold uppercase tracking-wider mb-2"
                            style="color: hsl(var(--primary))"
                        >
                            Why These Technologies
                        </h4>
                        <p
                            class="text-sm leading-relaxed"
                            style="color: hsl(var(--muted-foreground))"
                        >
                            {{ project.whyTech }}
                        </p>
                    </div>

                    <!-- Key Features -->
                    <div class="mb-6">
                        <h4
                            class="text-xs font-semibold uppercase tracking-wider mb-2"
                            style="color: hsl(var(--primary))"
                        >
                            Key Features
                        </h4>
                        <ul class="space-y-2">
                            <li
                                v-for="feature in project.features"
                                :key="feature"
                                class="text-sm flex items-start gap-2"
                                style="color: hsl(var(--muted-foreground))"
                            >
                                <span
                                    class="mt-1"
                                    style="color: hsl(var(--primary))"
                                    >•</span
                                >
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <!-- Actions -->
                    <div
                        class="flex flex-wrap gap-3 pt-4 border-t"
                        style="border-color: hsl(var(--border))"
                    >
                        <a
                            v-if="project.github"
                            :href="project.github"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-sm transition-colors hover-link"
                            style="color: hsl(var(--muted-foreground))"
                        >
                            <Github :size="16" /> GitHub
                        </a>

                        <a
                            v-if="project.demo"
                            :href="project.demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-sm transition-colors hover-link"
                            style="color: hsl(var(--muted-foreground))"
                        >
                            <ExternalLink :size="16" /> Live Demo
                        </a>
                        <!-- Need to add later a download button for documentation for each project
                        <button
                            class="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-colors"
                            style="background: hsl(var(--secondary)); color: hsl(var(--secondary-foreground))"
                        >
                            <Download :size="16" /> Download Docs
                        </button> -->
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { useRoute, RouterLink } from 'vue-router'
    import { ArrowLeft, Github, ExternalLink } from 'lucide-vue-next'
    import { usePortfolio } from '../composables/usePortfolio'
    import Navbar from '../components/Navbar.vue'

    const route = useRoute()
    const { skills } = usePortfolio()
    const skill = computed(() => skills.value.find((s) => s.id === route.params.skillId))
</script>

<style scoped>
.hover-back:hover {
    color: hsl(var(--foreground));
}
.hover-link:hover {
    color: hsl(var(--foreground));
}
</style>
