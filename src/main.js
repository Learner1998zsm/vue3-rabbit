import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入api全局注册
import API from '@/apis'

// 自定义指令
import {lazyloadPlugin} from './directives'

// 导入自己的UI组件
import UI from '@/components/library'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyloadPlugin)
app.use(UI)
app.config.globalProperties.API = API

app.mount('#app')