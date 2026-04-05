import { ref, onMounted } from 'vue'
import { skills as localSkills, aboutData as localAboutData } from '../data/portfolio'
import type { Skill } from '../data/portfolio'

export interface AboutData {
    summary: string
    highlights: string[]
    experience: {
        role: string
        company: string
        period: string
        description: string
    }[]
    contact: {
        email: string
        phone: string
        github: string
        linkedin: string
    }
}

const GITHUB_DATA_URL = 'https://raw.githubusercontent.com/joga-singh-dayal/portfolio-data/refs/heads/main/data.json'

export const usePortfolio = () => {
    const skills = ref<Skill[]>([])
    const aboutData = ref<AboutData>(localAboutData)
    const isLoading = ref(true)
    const error = ref('')

    const fetchData = async () => {
        isLoading.value = true
        try {
            const response = await fetch(GITHUB_DATA_URL)

            if (!response.ok) {
                throw new Error('Failed to fetch portfolio data')
            }

            const data = await response.json()
            skills.value = data.skills
            aboutData.value = data.about

        } catch (e) {
            console.warn('GitHub fetch failed, using local data as fallback', e)
            skills.value = localSkills
            aboutData.value = localAboutData
        } finally {
            isLoading.value = false
        }
    }

    onMounted(() => {
        fetchData()
    })
    return { skills, aboutData, isLoading, error }
}