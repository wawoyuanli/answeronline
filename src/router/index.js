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
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/signup/index.vue'),
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('@/views/faq/index.vue'),
        },

        {
            path: '/affiliate',
            name: 'affiliate',
            component: () => import('@/views/affiliate/index.vue'),
        },

        {
            path: '/consumerrights',
            name: 'consumerrights',
            component: () => import('@/views/consumerrights/index.vue'),
        },

        {
            path: '/contactUs',
            name: 'contactUs',
            component: () => import('@/views/contactUs/index.vue'),
        },

        {
            path: '/language',
            name: 'language',
            component: () => import('@/views/language/index.vue'),
        },

        {
            path: '/personalInfoRequest',
            name: 'personalInfoRequest',
            component: () => import('@/views/personalInfoRequest/index.vue'),
        },

        {
            path: '/privacyPolicy',
            name: 'privacyPolicy',
            component: () => import('@/views/privacyPolicy/index.vue'),
        },

        {
            path: '/security',
            name: 'security',
            component: () => import('@/views/security/index.vue'),
        },

        {
            path: '/statement',
            name: 'statement',
            component: () => import('@/views/statement/index.vue'),
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('@/views/terms/index.vue'),
        },
        {
            path: '/resetpwd',
            name: 'resetpwd',
            component: () => import('@/views/resetpwd/index.vue'),
        },
        {
            path: '/termsDetail',
            name: 'termsDetail',
            component:()=>import('@/views/termsDetail/index.vue')
        }
    ]
})
