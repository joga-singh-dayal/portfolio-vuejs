import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'


import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './style.css'

createApp(App)
    .use(router)
    .use(MotionPlugin)
    .mount('#app')