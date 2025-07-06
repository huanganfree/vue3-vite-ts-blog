import { createApp } from 'vue'
import './init.css'
import App from './App.vue'
import './utils/rem'

import { router } from './router'

createApp(App).use(router).mount('#app')
