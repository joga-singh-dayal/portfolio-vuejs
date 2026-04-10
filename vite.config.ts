import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { InlineConfig } from 'vitest/node'

interface VitestConfigExport extends UserConfig {
    test?: InlineConfig;
}

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
    },
} as VitestConfigExport)