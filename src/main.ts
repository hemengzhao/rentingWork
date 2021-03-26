import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import '@/assets/style/index.scss';

import animated from 'animate.css';

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(animated)
app.mount('#app')
