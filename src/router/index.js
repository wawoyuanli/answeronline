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
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('@/views/signup/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
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
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },

        {
            path: '/consumerrights',
            name: 'consumerrights',
            component: () => import('@/views/consumerrights/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },

        {
            path: '/contactUs',
            name: 'contactUs',
            component: () => import('@/views/contactUs/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
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
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },

        {
            path: '/privacyPolicy',
            name: 'privacyPolicy',
            component: () => import('@/views/privacyPolicy/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },

        {
            path: '/security',
            name: 'security',
            component: () => import('@/views/security/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },

        {
            path: '/statement',
            name: 'statement',
            component: () => import('@/views/statement/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('@/views/terms/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/resetpwd',
            name: 'resetpwd',
            component: () => import('@/views/resetpwd/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        },
        {
            path: '/termsDetail',
            name: 'termsDetail',
            component: () => import('@/views/termsDetail/index.vue'),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0)
                next()
            }
        }
    ]
})
