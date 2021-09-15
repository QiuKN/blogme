/*
 * @Author: your name
 * @Date: 2021-09-13 15:29:13
 * @LastEditTime: 2021-09-13 16:54:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DiorsBlog\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/styles/normalize.css'
import './assets/styles/common.less'

createApp(App).use(router).use(store).mount('#app')
