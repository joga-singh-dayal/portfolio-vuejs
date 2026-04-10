import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ContactSection from '../src/components/ContactSection.vue'

describe('ContactSection', () => {
    it('renders the section heading', () => {
        const wrapper = mount(ContactSection, {
            global: { stubs: { 'v-motion': true } },
        })
        expect(wrapper.text()).toContain('Contact')
    })

    it('renders a mailto link with the correct email address', () => {
        const wrapper = mount(ContactSection, {
            global: { stubs: { 'v-motion': true } },
        })
        const mailtoLink = wrapper.find('a[href^="mailto:"]')
        expect(mailtoLink.exists()).toBe(true)
        expect(mailtoLink.attributes('href')).toContain('joga')
    })

    it('renders a LinkedIn or GitHub link', () => {
        const wrapper = mount(ContactSection, {
            global: { stubs: { 'v-motion': true } },
        })
        const links = wrapper.findAll('a[href]')
        const hrefs = links.map(l => l.attributes('href') ?? '')
        const hasSocialLink = hrefs.some(
            h => h.includes('linkedin') || h.includes('github')
        )
        expect(hasSocialLink).toBe(true)
    })
})