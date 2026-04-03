<template>
    <section
        id="hero"
        class="relative min-h-screen flex items-center overflow-hidden"
        :style="{ background: 'var(--gradient-hero)' }"
    >
        <!-- Animated background particles -->
        <div class="absolute inset-0 z-0 overflow-hidden">
            <div
                v-for="i in 20"
                :key="i"
                class="particle"
                :style="getParticleStyle(i)"
            />
        </div>
  
        <!-- Overlay -->
        <div
            class="absolute inset-0 z-[1]"
            :style="{ background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, hsl(230,25%,7%,0.7) 70%)' }"
        />
  
            <div class="container mx-auto px-6 relative z-10 py-24 md:py-0">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
        
                <!-- Left: Text -->
                <div
                    v-motion
                    :initial="{ opacity: 0, x: -40 }"
                    :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
                >
                    <!-- Badge -->
                    <div
                        v-motion
                        :initial="{ opacity: 0, y: 10 }"
                        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
                        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
                        style="background: hsl(var(--secondary) / 0.6); border: 1px solid hsl(var(--border)); color: hsl(var(--muted-foreground))"
                    >
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            Available for opportunities
                    </div>
        
                    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Hi, <br />I'm
                        <span class="gradient-text"> Joga Singh Dayal</span>
                        <br />
                    </h1>
        
                    <p class="text-xl md:text-2xl font-light mb-2" style="color: hsl(var(--muted-foreground))">
                        Frontend Developer
                    </p>
                    <p class="text-sm mb-2 flex items-center gap-1.5" style="color: hsl(var(--muted-foreground))">
                        <MapPin :size="14" style="color: hsl(var(--primary))" />
                        ReactJS · TypeScript · Next.js · Vue.js · TailwindCSS
                    </p>
                    <p class="text-base max-w-lg mb-8 leading-relaxed" style="color: hsl(var(--muted-foreground))">
                        6+ years crafting high-performance web applications with clean
                        architecture, pixel-perfect interfaces, and scalable solutions.
                    </p>
        
                    <div class="flex flex-wrap items-center gap-4">
                        <button
                            @click="scrollToSkills"
                            class="px-7 py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            :style="{ backgroundImage: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }"
                        >
                            Explore Skills
                        </button>
                    
                        <a  href="#contact"
                            class="px-7 py-3 rounded-full font-medium border transition-all duration-300 hover:scale-105"
                            style="color: hsl(var(--foreground)); border-color: hsl(var(--border))"
                        >
                            Get In Touch
                        </a>
                    </div>
        
                    <!-- Stats -->
                    <div
                        v-motion
                        :initial="{ opacity: 0, y: 20 }"
                        :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
                        class="flex gap-8 mt-10"
                    >
                        <div v-for="stat in stats" :key="stat.label">
                            <p class="font-heading text-2xl font-bold gradient-text">{{ stat.value }}</p>
                            <p class="text-xs" style="color: hsl(var(--muted-foreground))">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
        
                <!-- Right: Profile image -->
                <div
                    v-motion
                    :initial="{ opacity: 0, scale: 0.8 }"
                    :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 300 } }"
                    class="flex justify-center lg:justify-end mt-8 lg:mt-0"
                >
                    <div class="relative">
                        <!-- Glow ring -->
                        <div
                            class="absolute inset-0 rounded-full blur-2xl scale-110 animate-pulse"
                            :style="{ background: 'var(--gradient-primary)', opacity: 0.25 }"
                        />
        
                        <!-- Profile image with gradient border -->
                        <div class="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full gradient-border p-1">
                            <div class="w-full h-full rounded-full overflow-hidden" style="background: hsl(var(--card))">
                                <img
                                    :src="profileImg"
                                    alt="Joga Singh Dayal"
                                    class="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
        
                        <!-- Floating badges -->
                        <div class="absolute top-6 -right-2 glass-card px-3 py-1.5 rounded-full text-xs font-medium float-badge">
                            ⚛️ React
                        </div>
                        <div class="absolute bottom-8 -left-4 glass-card px-3 py-1.5 rounded-full text-xs font-medium float-badge-slow">
                            🔷 TypeScript
                        </div>
                        <div class="absolute bottom-0 right-0 glass-card px-3 py-1.5 rounded-full text-xs font-medium float-badge-medium">
                            ▲ Next.js
                        </div>
                        <div class="absolute bottom-48 -left-8 glass-card px-3 py-1.5 rounded-full text-xs font-medium float-badge flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
                                <path d="M161.096 0L130.88 51.5 100.664 0H0l130.88 226.69L261.76 0z" fill="#41b883"/>
                                <path d="M161.096 0L130.88 51.5 100.664 0H52.344l78.536 136.01L209.416 0z" fill="#34495e"/>
                            </svg>
                            Vue.js
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Scroll indicator -->
            <div class="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
                <div class="float-badge">
                    <ArrowDown style="color: hsl(var(--muted-foreground))" :size="20" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
    import { ArrowDown, MapPin } from 'lucide-vue-next'
    import profileImg from '../assets/profile.png'
 
    const stats = [
        { value: '6+', label: 'Years Exp.' },
        { value: '20+', label: 'Projects' },
        { value: '7+', label: 'Technologies' },
    ]
  
    const getParticleStyle = (i: number) => ({
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        animationDelay: `${(i * 0.7) % 5}s`,
        animationDuration: `${4 + (i % 4)}s`,
        width: `${2 + (i % 3)}px`,
        height: `${2 + (i % 3)}px`,
    })
  
    const scrollToSkills = () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
    }
</script>
  
<style scoped>
    .particle {
        position: absolute;
        border-radius: 50%;
        background: hsl(250, 85%, 65%, 0.4);
        animation: float linear infinite;
    }
    
    @keyframes float {
        0% { transform: translateY(0px) scale(1); opacity: 0.4; }
        50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
        100% { transform: translateY(0px) scale(1); opacity: 0.4; }
    }
    
    .float-badge {
        animation: floatY 3s ease-in-out infinite;
    }
    .float-badge-slow {
        animation: floatY 3.5s ease-in-out infinite 0.5s;
    }
    .float-badge-medium {
        animation: floatY 4s ease-in-out infinite 1s;
    }
    
    @keyframes floatY {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
    }
    
    .text-muted-foreground { color: hsl(var(--muted-foreground)); }
    .text-foreground { color: hsl(var(--foreground)); }
    .bg-card { background-color: hsl(var(--card)); }
    .border-border { border-color: hsl(var(--border)); }
</style>