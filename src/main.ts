import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { store, key } from './store'
import App from './App.vue'

import 'element-plus/dist/index.css'
import '@/style/index.css'

createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app')
