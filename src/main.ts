/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 11:19:02
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 16:21:00
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
// import 'tdesign-vue-next/dist/reset.css'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router);
app.use(TDesign);
app.use(pinia)
app.mount('#app');
