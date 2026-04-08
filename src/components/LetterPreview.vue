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
