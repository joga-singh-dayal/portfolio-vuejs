import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeroSection from '../src/components/HeroSection.vue'

describe('HeroSection', () => {
    it('renders the hero section', () => {
        const wrapper = mount(HeroSection, {
            global: { stubs: { 'v-motion': true } },
        })
        expect(wrapper.find('[data-testid="hero-section"]').exists()).toBe(true)
    })

    it('displays the developer name', () => {
        const wrapper = mount(HeroSection, {
            global: { stubs: { 'v-motion': true } },
        })
        expect(wrapper.text()).toContain('Joga Singh Dayal')
    })

    it('displays the Frontend Developer title', () => {
            const wrapper = mount(HeroSection, {
        global: { stubs: { 'v-motion': true } },
        })
        expect(wrapper.text()).toContain('Frontend Developer')
    })

    it('renders all three stats', () => {
        const wrapper = mount(HeroSection, {
            global: { stubs: { 'v-motion': true } },
        })
        const stats = wrapper.findAll('[data-testid^="stat-"]')
        expect(stats).toHaveLength(3)
    })

    it('renders the Explore Skills CTA button', () => {
        const wrapper = mount(HeroSection, {
            global: { stubs: { 'v-motion': true } },
        })
        const btn = wrapper.find('[data-testid="hero-cta-skills"]')
        expect(btn.exists()).toBe(true)
        expect(btn.text()).toContain('Explore Skills')
    })

    it('renders the Get In Touch anchor link pointing to #contact', () => {
        const wrapper = mount(HeroSection, {
            global: { stubs: { 'v-motion': true } },
        })
        const contactLink = wrapper.find('a[href="#contact"]')
        expect(contactLink.exists()).toBe(true)
        expect(contactLink.text()).toContain('Get In Touch')
    })
})