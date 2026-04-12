<template>
    <div class="space-y-4 text-sm" style="color: hsl(var(--foreground))">

        <div style="line-height: 1.6">
            <p style="font-weight: 600; color: rgb(10%, 20%, 60%); ">{{ letter.companyName }}</p>
            <p style="color: hsl(var(--muted-foreground))">
                {{ letter.department }}
            </p>
            <p style="color: hsl(var(--muted-foreground))">
                {{ letter.companyAddress }}
            </p>
        </div>


        <p class="text-right" style="color: hsl(var(--muted-foreground))">
            Radebeul, {{ letter.date }}
        </p>


        <p style="font-weight: 600; color: rgb(10%, 20%, 60%);">{{ letter.subject }}</p>
        <p>{{ letter.salutation }}</p>
        <p class="text-justify" v-for="(paragraph, i) in letter.paragraphs" :key="i">
            {{ paragraph }}
        </p>
        <p>{{ letter.signoff }}</p>
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
