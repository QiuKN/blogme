/*
 * @Author: your name
 * @Date: 2021-09-13 16:23:27
 * @LastEditTime: 2021-09-13 16:55:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DiorsBlog\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router