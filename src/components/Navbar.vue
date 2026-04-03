<template>
    <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass-card py-3' : 'py-5']">
        <div class="container mx-auto flex items-center justify-between px-6">
            <RouterLink to="/" class="font-heading text-xl font-bold gradient-text">
                &lt; /&gt;
            </RouterLink>
    
            <!-- Desktop links -->
            <div class="hidden md:flex items-center gap-8">
                <button
                    v-for="link in navLinks"
                    :key="link.label"
                    @click="handleNav(link.href)"
                    class="text-sm font-medium transition-colors"
                    style="color: hsl(var(--muted-foreground))"
                >
                    {{ link.label }}
                </button>
                
                <a  href="/Lebenslauf_Joga_Singh_Dayal.pdf"
                    download
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                    :style="{ backgroundImage: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }"
                >
                    <Download :size="14" />
                    Download CV
                </a>
            </div>
    
            <!-- Mobile toggle -->
            <button @click="menuOpen = !menuOpen" class="md:hidden text-foreground">
            <X v-if="menuOpen" :size="24" />
            <Menu v-else :size="24" />
            </button>
        </div>
    
        <!-- Mobile menu -->
        <Transition name="slide">
            <div v-if="menuOpen" class="md:hidden glass-card mx-4 mt-2 rounded-lg overflow-hidden">
            <div class="flex flex-col p-4 gap-3">
                <button
                v-for="link in navLinks"
                :key="link.label"
                @click="handleNav(link.href)"
                class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                >
                {{ link.label }}
                </button>
            </div>
            </div>
        </Transition>
    </nav>
</template>
  
<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { Menu, X, Download } from 'lucide-vue-next'
    
    const scrolled = ref(false)
    const menuOpen = ref(false)
    const route = useRoute()
    
    const navLinks = [
        { label: 'Home', href: '/#hero' },
        { label: 'Skills', href: '/#skills' },
        { label: 'About', href: '/#about' },
        { label: 'Contact', href: '/#contact' },
    ]
    
    const onScroll = () => {
        scrolled.value = window.scrollY > 40
    }
    
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))
    
    const handleNav = (href: string) => {
        menuOpen.value = false
        if (route.path !== '/' && href.startsWith('/#')) {
        window.location.href = href
        return
        }
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
</script>
  
<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease;
    }
    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        max-height: 0;
    }
    .slide-enter-to,
    .slide-leave-from {
        opacity: 1;
        max-height: 200px;
    }
    
    .text-muted-foreground {
        color: hsl(var(--muted-foreground));
    }
    .text-foreground {
        color: hsl(var(--foreground));
    }
</style>