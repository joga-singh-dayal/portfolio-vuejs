import { config } from '@vue/test-utils'

// Silence [Vue warn]: Failed to resolve directive: motion
// @vueuse/motion directives are not needed in unit tests
config.global.directives = {
    motion: {
        mounted() {},
        updated() {},
    },
}