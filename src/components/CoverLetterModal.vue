<template>
    <Teleport to="body">
        <Transition name="fade">
            <div
                v-if="isOpen"
                class="fixed inset-0 z-[100] flex items-center justify-center p-4"
                style="
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                "
                @click.self="$emit('close')"
            >
                <Transition name="slide-up">
                    <div
                        v-if="isOpen"
                        class="glass-card rounded-2xl p-6 md:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                    >
                        <!-- Header -->
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <h2
                                    class="font-heading text-xl font-bold"
                                    style="color: hsl(var(--foreground))"
                                >
                                    {{ 'Cover Letter + CV' }}
                                </h2>
                                <p
                                    class="text-xs mt-1"
                                    style="color: hsl(var(--muted-foreground))"
                                >
                                    {{
                                        isGenerated
                                            ? 'Download as one PDF (Cover Letter + CV)'
                                            : 'Personalized letter + CV — all in one PDF'
                                    }}
                                </p>
                            </div>
                            <button
                                style="color: hsl(var(--muted-foreground))"
                                @click="$emit('close')"
                            >
                                <X :size="20" />
                            </button>
                        </div>

                        <!-- Form -->
                        <div v-if="!isGenerated" class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                        style="color: hsl(var(--primary))"
                                    >
                                        Contact Person *
                                    </label>
                                    <input
                                        v-model="form.contactPerson"
                                        type="text"
                                        placeholder="Frau Müller / Mr. Smith"
                                        class="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                                        style="
                                            background: hsl(var(--secondary));
                                            border: 1px solid hsl(var(--border));
                                            color: hsl(var(--foreground));
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                        style="color: hsl(var(--primary))"
                                    >
                                        Company Name *
                                    </label>
                                    <input
                                        v-model="form.companyName"
                                        type="text"
                                        placeholder="musterFirma GmbH"
                                        class="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                                        style="
                                            background: hsl(var(--secondary));
                                            border: 1px solid hsl(var(--border));
                                            color: hsl(var(--foreground));
                                        "
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                    style="color: hsl(var(--primary))"
                                >
                                    Company Address *
                                </label>
                                <input
                                    v-model="form.companyAddress"
                                    type="text"
                                    placeholder="Musterstraße 123, 01234 Musterstadt"
                                    class="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                                    style="
                                        background: hsl(var(--secondary));
                                        border: 1px solid hsl(var(--border));
                                        color: hsl(var(--foreground));
                                    "
                                />
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                        style="color: hsl(var(--primary))"
                                    >
                                        Job Title *
                                    </label>
                                    <input
                                        v-model="form.jobTitle"
                                        type="text"
                                        placeholder="e.g. Frontend Developer (Vue.js)"
                                        class="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                                        style="
                                            background: hsl(var(--secondary));
                                            border: 1px solid hsl(var(--border));
                                            color: hsl(var(--foreground));
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                        style="color: hsl(var(--primary))"
                                    >
                                        Technologies - looking for *
                                    </label>
                                    <input
                                        v-model="form.technologies"
                                        type="text"
                                        placeholder="e.g. Vue.js, Laravel, TypeScript"
                                        class="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
                                        style="
                                            background: hsl(var(--secondary));
                                            border: 1px solid hsl(var(--border));
                                            color: hsl(var(--foreground));
                                        "
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    class="text-xs font-medium uppercase tracking-wider mb-1.5 block"
                                    style="color: hsl(var(--primary))"
                                >
                                    Language
                                </label>
                                <div class="flex gap-3">
                                    <button
                                        class="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                                        :style="
                                            form.language === 'german'
                                                ? {
                                                      backgroundImage:
                                                          'var(--gradient-primary)',
                                                      color: 'white',
                                                  }
                                                : {
                                                      background:
                                                          'hsl(var(--secondary))',
                                                      color: 'hsl(var(--muted-foreground))',
                                                  }
                                        "
                                        @click="form.language = 'german'"
                                    >
                                        Deutsch
                                    </button>
                                    <button
                                        class="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                                        :style="
                                            form.language === 'english'
                                                ? {
                                                      backgroundImage:
                                                          'var(--gradient-primary)',
                                                      color: 'white',
                                                  }
                                                : {
                                                      background:
                                                          'hsl(var(--secondary))',
                                                      color: 'hsl(var(--muted-foreground))',
                                                  }
                                        "
                                        @click="form.language = 'english'"
                                    >
                                        English
                                    </button>
                                </div>
                            </div>

                            <p
                                v-if="error"
                                class="text-xs"
                                style="color: hsl(var(--destructive))"
                            >
                                {{ error }}
                            </p>

                            <button
                                class="w-full py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 mt-2 flex items-center justify-center gap-2"
                                :style="{
                                    backgroundImage: 'var(--gradient-primary)',
                                    boxShadow: 'var(--shadow-glow)',
                                }"
                                @click="generate"
                            >
                                <Sparkles :size="16" />
                                Generate Cover Letter
                            </button>
                        </div>

                        <!-- Generated Letter Preview -->
                        <div v-else>
                            <div
                                id="cover-letter-content"
                                class="rounded-xl p-6 text-sm leading-relaxed mb-6"
                                style="
                                    background: hsl(var(--secondary));
                                    color: hsl(var(--foreground));
                                "
                            >
                                <LetterPreview :letter="letterData" />
                            </div>

                            <!-- Download button -->
                            <button
                                :disabled="isDownloading"
                                class="w-full py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mb-3"
                                :style="{
                                    backgroundImage: 'var(--gradient-primary)',
                                    boxShadow: 'var(--shadow-glow)',
                                    opacity: isDownloading ? '0.7' : '1',
                                }"
                                @click="downloadMergedPdf"
                            >
                                <Loader
                                    v-if="isDownloading"
                                    :size="16"
                                    class="animate-spin"
                                />
                                <Download v-else :size="16" />
                                {{
                                    isDownloading
                                        ? 'Preparing PDF...'
                                        : 'Download'
                                }}
                            </button>

                            <button
                                class="w-full text-xs transition-colors"
                                style="color: hsl(var(--muted-foreground))"
                                @click="reset"
                            >
                                ← Switch Language
                            </button>
                        </div>
                        <div
                            v-if="!isGenerated"
                            class="text-sm text-center mt-4"
                        >
                            <span class=""
                                >No data will be saved to our Database</span
                            >
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { X, Sparkles, Download, Loader } from 'lucide-vue-next'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import LetterPreview from './LetterPreview.vue'
import type { LetterData } from './LetterPreview.vue'
import fontkit from '@pdf-lib/fontkit'

const props = defineProps<{ isOpen: boolean }>()
defineEmits(['close'])

const letterData = ref<LetterData>({
    companyName: '',
    department: '',
    companyAddress: '',
    date: '',
    subject: '',
    salutation: '',
    paragraphs: [],
    signoff: '',
})

watch(
    () => props.isOpen,
    (newVal) => {
        if (newVal) {
            isGenerated.value = false
            generatedLetter.value = ''
            error.value = ''
            form.contactPerson = ''
            form.companyName = ''
            form.companyAddress = ''
            form.jobTitle = ''
            form.technologies = ''
            form.referral = ''
            form.language = 'german'
        }
    },
)

const isGenerated = ref(false)
const isDownloading = ref(false)
const error = ref('')
const generatedLetter = ref('')

const form = reactive({
    contactPerson: '',
    companyName: '',
    companyAddress: '',
    jobTitle: '',
    technologies: '',
    referral: '',
    language: 'german' as 'german' | 'english',
})

const validate = () => {
    if (
        !form.contactPerson ||
        !form.companyName ||
        !form.companyAddress ||
        !form.jobTitle ||
        !form.technologies
    ) {
        error.value =
            form.language === 'german'
                ? 'Bitte alle Pflichtfelder ausfüllen.'
                : 'Please fill in all required fields.'
        return false
    }
    error.value = ''
    return true
}

const getTechSentence = () => {
    const techs = form.technologies.split(',').map((t) => t.trim())
    const hasVue = techs.some((t) => t.toLowerCase().includes('vue'))
    const hasPhp = techs.some(
        (t) =>
            t.toLowerCase().includes('php') ||
            t.toLowerCase().includes('laravel'),
    )
    const otherTechs = techs.filter(
        (t) =>
            !t.toLowerCase().includes('vue') &&
            !t.toLowerCase().includes('php') &&
            !t.toLowerCase().includes('laravel'),
    )

    if (form.language === 'german') {
        let sentence = ''
        if (hasVue) {
            sentence += `Da Vue.js auf denselben Grundlagen wie ReactJS basiert – komponentenbasierte Entwicklung, State-Management und reaktive Datenbindung – fällt mir der Umstieg leicht. Ich beschäftige mich bereits privat intensiv damit und bin zuversichtlich, schnell produktiv mitzuarbeiten. `
        }
        if (hasPhp) {
            sentence += `Meine PHP- und Laravel-Kenntnisse bringe ich als zusätzlichen Pluspunkt mit. `
        }
        if (otherTechs.length > 0) {
            sentence += `Ich freue mich darauf, mich auch in ${otherTechs.join(
                ', ',
            )} schnell einzuarbeiten und neue Technologien als Chance zur Weiterentwicklung zu sehen. `
        }
        return sentence
    } else {
        let sentence = ''
        if (hasVue) {
            sentence += `Since Vue.js is built on the same principles as ReactJS — component-based development, state management and reactive data binding — the transition comes naturally to me. I have already been working with Vue.js privately and am confident I can contribute quickly. `
        }
        if (hasPhp) {
            sentence += `My PHP and Laravel experience is an additional strength I bring to the role. `
        }
        if (otherTechs.length > 0) {
            sentence += `I look forward to quickly getting up to speed with ${otherTechs.join(
                ', ',
            )} and see new technologies as an opportunity for growth. `
        }
        return sentence
    }
}

const getReferralSentence = () => {
    if (!form.referral) return ''
    if (form.language === 'german') {
        return `${form.referral} – und ich freue mich sehr, dass Sie auf mein Profil aufmerksam geworden sind. `
    } else {
        return `${form.referral} — and I am very glad that my profile caught your attention. `
    }
}

const generate = () => {
    if (!validate()) return

    const today = new Date().toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const techSentence = getTechSentence()
    const referralSentence = getReferralSentence()
    const isGerman = form.language === 'german'

    const p1 = isGerman
        ? `vielen Dank, dass Sie sich die Zeit genommen haben, mein Portfolio zu besuchen und sich für mein Profil zu interessieren. ${referralSentence}Ich freue mich sehr über die Möglichkeit, mich als ${form.jobTitle} bei der ${form.companyName} vorzustellen.`
        : `Thank you very much for taking the time to visit my portfolio and showing interest in my profile. ${referralSentence}I am truly excited about the opportunity to introduce myself as a candidate for the position of ${form.jobTitle} at ${form.companyName}.`

    const p2 = isGerman
        ? `Ich bringe mehr als 6 Jahre Erfahrung in der IT mit – als Web-Entwickler, Software Tester und seit 2023 als Frontend-Entwickler. TypeScript, JavaScript, HTML5, CSS3, Git und die Arbeit in agilen Teams gehören zu meinem täglichen Arbeitsalltag. Meine bevorzugte JavaScript-Bibliothek ist ReactJS, mit dem ich aktuell an FreeDesign® arbeite – einem hochskalierbaren Online-Design-Editor mit über 1 Million Nutzern in 22 europäischen Ländern.`
        : `I bring over 6 years of experience in IT — as a web developer, software tester and since 2023 as a frontend developer. TypeScript, JavaScript, HTML5, CSS3, Git and agile teamwork are part of my daily workflow. My main JavaScript library is ReactJS, which I currently use to develop FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries.`

    const p4 = isGerman
        ? `Die Möglichkeit, bei ${form.companyName} mitzuwirken, reizt mich sehr. Ich bin überzeugt, dass ich gut ins Team passe und schnell einen wertvollen Beitrag leisten kann. Ich freue mich sehr auf ein persönliches Gespräch.`
        : `I am genuinely excited about the opportunity to contribute to ${form.companyName}. I am confident that I would be a great fit for the team and can make a valuable contribution quickly. I very much look forward to a personal conversation.`

    const paragraphs = [p1, p2]
    if (techSentence.trim()) paragraphs.push(techSentence.trim())
    paragraphs.push(p4)

    letterData.value = {
        companyName: form.companyName,
        department: isGerman ? 'Personalabteilung' : 'HR Department',
        companyAddress: form.companyAddress,
        date: today,
        subject: isGerman
            ? `Bewerbung als ${form.jobTitle}`
            : `Application for ${form.jobTitle}`,
        salutation: isGerman
            ? `Sehr geehrte/r ${form.contactPerson},`
            : `Respected ${form.contactPerson},`,
        paragraphs,
        signoff: isGerman ? 'Mit freundlichen Grüßen' : 'Kind regards,',
    }

    isGenerated.value = true
}

const drawWrappedText = (
    page: any,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize: number,
    font: any,
    color: any,
    lineHeight: number,
): number => {
    const words = text.split(' ')
    let line = ''
    let currentY = y

    for (const word of words) {
        const testLine = line ? `${line} ${word}` : word
        const width = font.widthOfTextAtSize(testLine, fontSize)
        if (width > maxWidth && line) {
            page.drawText(line, {
                x,
                y: currentY,
                size: fontSize,
                font,
                color,
            })
            currentY -= lineHeight
            line = word
        } else {
            line = testLine
        }
    }
    if (line) {
        page.drawText(line, {
            x,
            y: currentY,
            size: fontSize,
            font,
            color,
        })
        currentY -= lineHeight
    }
    return currentY
}

const downloadMergedPdf = async () => {
    isDownloading.value = true

    try {
        const today = new Date().toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })

        const isGerman = form.language === 'german'
        const techSentence = getTechSentence()
        const referralSentence = getReferralSentence()

        // Create new PDF
        const pdfDoc = await PDFDocument.create()
        pdfDoc.registerFontkit(fontkit)
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

        // Embed signature font
        const signatureFontBytes = await fetch(
            '/fonts/GreatVibes-Regular.ttf',
        ).then((res) => res.arrayBuffer())
        const signatureFont = await pdfDoc.embedFont(signatureFontBytes)

        const black = rgb(0.1, 0.1, 0.1)
        const gray = rgb(0.4, 0.4, 0.4)
        const primary = rgb(0.4, 0.3, 0.9)

        // --- PAGE 1: Cover Letter ---
        const page1 = pdfDoc.addPage([595, 842]) // A4
        const margin = 60
        const contentWidth = 595 - margin * 2
        let y = 720

        // Company address block
        page1.drawText(form.companyName, {
            x: margin,
            y,
            size: 11,
            font: fontBold,
            color: black,
        })
        y -= 18
        page1.drawText(isGerman ? 'Personalabteilung' : 'HR Department', {
            x: margin,
            y,
            size: 10,
            font,
            color: gray,
        })
        y -= 16
        page1.drawText(form.companyAddress, {
            x: margin,
            y,
            size: 10,
            font,
            color: gray,
        })
        y -= 40

        // Date right aligned
        page1.drawText(`Radebeul, ${today}`, {
            x: 595 - margin - font.widthOfTextAtSize(`Radebeul, ${today}`, 10),
            y,
            size: 10,
            font,
            color: gray,
        })
        y -= 40

        // Subject line
        const subject = isGerman
            ? `Bewerbung als ${form.jobTitle}`
            : `Application for ${form.jobTitle}`
        page1.drawText(subject, {
            x: margin,
            y,
            size: 12,
            font: fontBold,
            color: black,
        })
        y -= 35

        // Salutation
        const salutation = isGerman
            ? `Sehr geehrte/r ${form.contactPerson},`
            : `Respected ${form.contactPerson},`
        page1.drawText(salutation, {
            x: margin,
            y,
            size: 10,
            font,
            color: black,
        })
        y -= 25

        // Paragraph 1
        const p1 = isGerman
            ? `vielen Dank, dass Sie sich die Zeit genommen haben, mein Portfolio zu besuchen und sich für mein Profil zu interessieren. ${referralSentence}Ich freue mich sehr über die Möglichkeit, mich als ${form.jobTitle} bei der ${form.companyName} vorzustellen.`
            : `Thank you very much for taking the time to visit my portfolio and showing interest in my profile. ${referralSentence}I am truly excited about the opportunity to introduce myself as a candidate for the position of ${form.jobTitle} at ${form.companyName}.`
        y = drawWrappedText(
            page1,
            p1,
            margin,
            y,
            contentWidth,
            10,
            font,
            black,
            16,
        )
        y -= 12

        // Paragraph 2
        const p2 = isGerman
            ? `Ich bringe mehr als 6 Jahre Erfahrung in der IT mit – als Web-Entwickler, Software Tester und seit 2023 als Frontend-Entwickler. TypeScript, JavaScript, HTML5, CSS3, Git und die Arbeit in agilen Teams gehören zu meinem täglichen Arbeitsalltag.Meine bevorzugte JavaScript-Bibliothek ist ReactJS, mit dem ich aktuell an FreeDesign® arbeite – einem hochskalierbaren Online-Design-Editor mit über 1 Million Nutzern in 22 europäischen Ländern.`
            : `I bring over 6 years of experience in IT — as a web developer, software tester and since 2023 as a frontend developer. TypeScript, JavaScript, HTML5, CSS3, Git and agile teamwork are part of my daily workflow. My main JavaScript library is ReactJS, which I currently use to develop FreeDesign® — a highly scalable online design editor with over 1 million users across 22 European countries.`
        y = drawWrappedText(
            page1,
            p2,
            margin,
            y,
            contentWidth,
            10,
            font,
            black,
            16,
        )
        y -= 12

        // Paragraph 3 - tech
        if (techSentence) {
            y = drawWrappedText(
                page1,
                techSentence.trim(),
                margin,
                y,
                contentWidth,
                10,
                font,
                black,
                16,
            )
            y -= 12
        }

        // Paragraph 4 - closing
        const p4 = isGerman
            ? `Die Möglichkeit, bei ${form.companyName} mitzuwirken, reizt mich sehr. Ich bin überzeugt, dass ich gut ins Team passe und schnell einen wertvollen Beitrag leisten kann. Ich freue mich sehr auf ein persönliches Gespräch.`
            : `I am genuinely excited about the opportunity to contribute to ${form.companyName}. I am confident that I would be a great fit for the team and can make a valuable contribution quickly. I very much look forward to a personal conversation.`
        y = drawWrappedText(
            page1,
            p4,
            margin,
            y,
            contentWidth,
            10,
            font,
            black,
            16,
        )
        y -= 30

        // Sign off
        const signoff = isGerman ? 'Mit freundlichen Grüßen' : 'Kind regards,'
        page1.drawText(signoff, {
            x: margin,
            y,
            size: 10,
            font,
            color: black,
        })
        y -= 20

        // Signature
        page1.drawText('Joga Singh Dayal', {
            x: margin,
            y,
            size: 14,
            font: signatureFont,
            color: rgb(0.1, 0.2, 0.6),
        })
        y -= 25
        page1.drawText('+49 176 5781 8593', {
            x: margin,
            y,
            size: 10,
            font,
            color: gray,
        })
        y -= 16
        page1.drawText('joga-singh@web.de', {
            x: margin,
            y,
            size: 10,
            font,
            color: primary,
        })
        y -= 16
        page1.drawText('01445 Radebeul', {
            x: margin,
            y,
            size: 10,
            font,
            color: gray,
        })

        // --- PAGE 2 & 3: Existing CV PDF with dynamic date ---
        const cvResponse = await fetch('/Lebenslauf_Joga_Singh_Dayal.pdf')
        const cvBytes = await cvResponse.arrayBuffer()
        const cvPdf = await PDFDocument.load(cvBytes)
        const cvPages = await pdfDoc.copyPages(cvPdf, cvPdf.getPageIndices())

        // Add CV pages
        cvPages.forEach((p) => pdfDoc.addPage(p))

        // Add dynamic date to last page of CV (page 3)
        const lastPage = pdfDoc.getPage(pdfDoc.getPageCount() - 1)

        const cvDate = new Date().toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })

        // White rectangle to cover any leftover space
        lastPage.drawRectangle({
            x: 65,
            y: 210,
            width: 200,
            height: 20,
            color: rgb(1, 1, 1),
        })

        // Draw dynamic date
        lastPage.drawText('Radebeul, ', {
            x: 65,
            y: 215,
            size: 10,
            font: fontBold,
            color: black,
        })

        // Date in regular font right after "Radebeul, "
        const radebuelWidth = fontBold.widthOfTextAtSize('Radebeul, ', 10)
        lastPage.drawText(cvDate, {
            x: 65 + radebuelWidth,
            y: 215,
            size: 10,
            font,
            color: black,
        })

        // Signature block below
        lastPage.drawText('Joga Singh Dayal', {
            x: 65,
            y: 195,
            size: 14,
            font: signatureFont,
            color: rgb(0.1, 0.2, 0.6),
        })
        // Save and download
        const pdfBytes = await pdfDoc.save()
        const blob = new Blob([pdfBytes.buffer as ArrayBuffer], {
            type: 'application/pdf',
        })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Bewerbung_Joga_Singh_Dayal_${form.companyName.replace(
            /\s+/g,
            '_',
        )}.pdf`
        a.click()
        URL.revokeObjectURL(url)
    } catch (e) {
        console.error(e)
        error.value =
            'Something went wrong generating the PDF. Please try again.'
    } finally {
        isDownloading.value = false
    }
}

const reset = () => {
    isGenerated.value = false
    generatedLetter.value = ''
    error.value = ''
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: all 0.3s ease;
    }

    .slide-up-enter-from,
    .slide-up-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>
