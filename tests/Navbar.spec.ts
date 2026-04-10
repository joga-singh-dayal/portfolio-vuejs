import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHashHistory } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: '/', component: { template: '<div />' } }],
})

const mountNavbar = () =>
    mount(Navbar, {
        global: {
        plugins: [router],
        stubs: {
            CoverLetterModal: true,
            Transition: { template: '<slot />' },
        },
    },
})

describe('Navbar', () => {
    it('renders the site logo link', () => {
        const wrapper = mountNavbar()
        expect(wrapper.find('a').exists()).toBe(true)
    })

    it('renders all four navigation links by label text', () => {
        const wrapper = mountNavbar()
        const text = wrapper.text()
        expect(text).toContain('Home')
        expect(text).toContain('Skills')
        expect(text).toContain('About')
        expect(text).toContain('Contact')
    })

    it('mobile menu is closed by default', () => {
        const wrapper = mountNavbar()
        expect((wrapper.vm as any).menuOpen).toBe(false)
    })

    it('toggle button flips menuOpen to true', async () => {
        const wrapper = mountNavbar()
        await wrapper.find('[data-testid="menu-toggle"]').trigger('click')
        expect((wrapper.vm as any).menuOpen).toBe(true)
    })

    it('toggle button closes menu on second click', async () => {
        const wrapper = mountNavbar()
        await wrapper.find('[data-testid="menu-toggle"]').trigger('click')
        await wrapper.find('[data-testid="menu-toggle"]').trigger('click')
        expect((wrapper.vm as any).menuOpen).toBe(false)
    })

    it('CV download button is present in desktop nav', () => {
        const wrapper = mountNavbar()
        expect(wrapper.find('[data-testid="cv-download-btn"]').exists()).toBe(true)
    })
})