<template>
    <div class="min-h-screen" :style="{ background: 'var(--gradient-hero)' }">
        <Navbar />
        <div class="container mx-auto px-6 pt-32 pb-20 max-w-2xl">
            <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
                <h1 class="font-heading text-3xl font-bold mb-8" style="color: hsl(var(--foreground))">
                    Impressum
                </h1>

                <div class="glass-card rounded-2xl p-8 space-y-6">

                    <div>
                        <h2 class="font-heading text-lg font-semibold mb-2" style="color: hsl(var(--foreground))">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <p class="text-sm leading-relaxed" style="color: hsl(var(--muted-foreground))">
                            Joga Singh Dayal<br />
                            Emil-Schüller-Str. 6D<br />
                            01445 Radebeul<br />
                            Deutschland
                        </p>
                    </div>

                    <div>
                        <h2 class="font-heading text-lg font-semibold mb-2" style="color: hsl(var(--foreground))">
                            Kontakt
                        </h2>
                        <p class="text-sm leading-relaxed" style="color: hsl(var(--muted-foreground))">
                            Telefon: +49 176 5781 8593<br />
                            E-Mail: joga-singh@web.de
                        </p>
                    </div>

                    <div>
                        <h2 class="font-heading text-lg font-semibold mb-2" style="color: hsl(var(--foreground))">
                            Haftungsausschluss
                        </h2>
                        <p class="text-sm leading-relaxed" style="color: hsl(var(--muted-foreground))">
                            Diese Website dient ausschließlich zur persönlichen Vorstellung als Bewerber.
                            Alle Inhalte wurden sorgfältig erstellt. Für die Richtigkeit, Vollständigkeit
                            und Aktualität der Inhalte kann keine Gewähr übernommen werden.
                        </p>
                    </div>

                    <div>
                        <h2 class="font-heading text-lg font-semibold mb-2" style="color: hsl(var(--foreground))">
                            Datenschutz
                        </h2>
                        <p class="text-sm leading-relaxed" style="color: hsl(var(--muted-foreground))">
                            Diese Website verwendet keine Cookies, kein Tracking und keine Analyse-Tools.
                            Es werden keine personenbezogenen Daten erhoben oder gespeichert.
                        </p>
                    </div>

                </div>

                <RouterLink to="/" class="inline-flex items-center gap-2 mt-8 text-sm transition-colors" style="color: hsl(var(--muted-foreground))">
                    <ArrowLeft :size="16" /> Zurück zur Startseite
                </RouterLink>
            </div>
        </div>
    </div>
</template>

  
<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import { ArrowLeft } from 'lucide-vue-next'
    import Navbar from '../components/Navbar.vue'
</script>
