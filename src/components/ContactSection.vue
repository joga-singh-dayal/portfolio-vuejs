<template>
    <section id="contact" class="py-24">
        <div class="container mx-auto px-6 max-w-3xl">
            <div
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
                class="text-center mb-12"
            >
                <p
                class="text-sm font-medium tracking-widest uppercase mb-2"
                style="color: hsl(var(--primary))"
                >
                Get In Touch
                </p>
                <h2
                class="font-heading text-3xl md:text-4xl font-bold"
                style="color: hsl(var(--foreground))"
                >
                Contact
                </h2>
            </div>

            <div
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
                class="glass-card rounded-2xl p-8 md:p-10"
            >
                <div class="grid sm:grid-cols-2 gap-6 ml-20">
                <a
                    :href="`mailto:${contact.email}`"
                    class="flex items-center gap-3 transition-colors hover-link"
                >
                    <Mail :size="18" style="color: hsl(var(--primary))" />
                    <span class="text-sm" style="color: hsl(var(--muted-foreground))">{{
                    contact.email
                    }}</span>
                </a>
                <a
                    :href="`tel:${contact.phone}`"
                    class="flex items-center gap-3 transition-colors hover-link"
                >
                    <Phone :size="18" style="color: hsl(var(--primary))" />
                    <span class="text-sm" style="color: hsl(var(--muted-foreground))">{{
                    contact.phone
                    }}</span>
                </a>

                <a
                    :href="contact.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 transition-colors hover-link"
                >
                    <Github :size="18" style="color: hsl(var(--primary))" />
                    <span class="text-sm" style="color: hsl(var(--muted-foreground))"
                    >GitHub</span
                    >
                </a>

                <a
                    :href="contact.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 transition-colors hover-link"
                >
                    <Linkedin :size="18" style="color: hsl(var(--primary))" />
                    <span class="text-sm" style="color: hsl(var(--muted-foreground))"
                    >LinkedIn</span
                    >
                </a>
                </div>

                <!-- Download CV -->
                <div class="mt-8 pt-6 border-t text-center" style="border-color: hsl(var(--border))">
                    <button
                        @click="$emit('openModal')"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        :style="{ backgroundImage: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }"
                    >
                        <Download :size="16" />
                        Download CV
                    </button>
                    <div
                        class="mt-8 pt-6 border-t text-center"
                        style="border-color: hsl(var(--border))"
                    >
                       <p class="text-sm" style="color: hsl(var(--muted-foreground))">
                            Open to exciting frontend opportunities. Let's build something great
                            together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { Mail, Phone, Github, Linkedin, Download } from "lucide-vue-next";
    import { aboutData } from "../data/portfolio";
    defineEmits(['openModal'])

    const { contact } = aboutData;
</script>

<style scoped>
.hover-link:hover span {
  color: hsl(var(--foreground));
}
</style>
