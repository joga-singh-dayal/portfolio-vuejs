<template>
    <div class="space-y-4 text-sm" style="color: hsl(var(--foreground))">
        <!-- Company block -->
        <div style="line-height: 1.6">
            <p style="font-weight: 600">{{ letter.companyName }}</p>
            <p style="color: hsl(var(--muted-foreground))">
                {{ letter.department }}
            </p>
            <p style="color: hsl(var(--muted-foreground))">
                {{ letter.companyAddress }}
            </p>
        </div>

        <!-- Date -->
        <p class="text-right" style="color: hsl(var(--muted-foreground))">
            Radebeul, {{ letter.date }}
        </p>

        <!-- Subject -->
        <p style="font-weight: 600">{{ letter.subject }}</p>

        <!-- Salutation -->
        <p>{{ letter.salutation }}</p>

        <!-- Paragraphs -->
        <p v-for="(paragraph, i) in letter.paragraphs" :key="i">
            {{ paragraph }}
        </p>

        <!-- Sign off -->
        <p>{{ letter.signoff }}</p>

        <!-- Signature -->
        <div style="line-height: 1.8">
            <p style="font-weight: 600">Joga Singh Dayal</p>
            <p style="color: hsl(var(--muted-foreground))">+49 176 5781 8593</p>
            <p style="color: hsl(var(--primary))">joga-singh@web.de</p>
            <p style="color: hsl(var(--muted-foreground))">01445 Radebeul</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface LetterData {
        companyName: string
        department: string
        companyAddress: string
        date: string
        subject: string
        salutation: string
        paragraphs: string[]
        signoff: string
    }

    defineProps<{ letter: LetterData }>()
</script>
