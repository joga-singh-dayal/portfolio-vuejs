<template>
    <div class="min-h-screen">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection @openModal="showModal = true" />
        <footer class="py-8 text-center text-xs border-t" style="color: hsl(var(--muted-foreground)); border-color: hsl(var(--border))">
            <p>© {{ new Date().getFullYear() }} Joga Singh Dayal. All rights reserved.</p>
            <RouterLink
            to="/impressum"
            class="mt-2 inline-block hover:underline"
            style="color: hsl(var(--muted-foreground))"
            >
            Impressum
            </RouterLink>
        </footer>
        <CoverLetterModal :isOpen="showModal" @close="showModal = false" />
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import Navbar from '../components/Navbar.vue'
    import HeroSection from '../components/HeroSection.vue'
    import SkillsSection from '../components/SkillsSection.vue'
    import AboutSection from '../components/AboutSection.vue'
    import ContactSection from '../components/ContactSection.vue'
    import CoverLetterModal from '../components/CoverLetterModal.vue'
  
    const showModal = ref(false)
</script>