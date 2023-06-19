import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入api全局注册
import API from '@/apis'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.API = API

app.mount('#app')