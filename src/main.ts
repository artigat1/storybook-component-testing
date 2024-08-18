import { createApp } from 'vue'

// Fonts
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Needed for Bryntum Grid
import 'typeface-roboto'
import 'typeface-ibm-plex-sans'

import './styles/style.scss'

import App from './App.vue'

createApp(App).mount('#app')
