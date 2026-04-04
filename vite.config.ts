import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Import the Vitest config type specifically
import type { InlineConfig } from 'vitest/node'

interface VitestConfigExport extends UserConfig {
    test?: InlineConfig;
}

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
} as VitestConfigExport) // Force TypeScript to accept the 'test' property