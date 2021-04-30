import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        /**主页路由 */
        {
            path: '/',
            name: 'home',
            redirect: 'home',
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
        },
        
    ]
})
