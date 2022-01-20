import Vue from 'vue'
import Router from 'vue-router'
import loading from './views/loading'

Vue.use(Router) // Vue关联Router

var router = new Router({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "table" */'@/views/table.vue'),
        },
        {
            path: '/loading',
            component: loading
        },
        {
            path: '/collapse',
            components: {
                default: () => import(/* webpackChunkName: "collapse" */'@/pagesUsage/collapse/collapse.vue')
            }
        },
        {
            path: '/loopForm',
            components: {
                default: () => import(/* webpackChunkName: "loopForm" */'@/views/loopForm.vue')
            }
        },
        {
            path: '/select',
            components: {
                default: () => import(/* webpackChunkName: "select" */'@/views/select.vue')
            }
        },
        {
            name: 'table',
            path: '/table',
            components: {
                default: () => import(/* webpackChunkName: "table" */'@/views/table.vue')
            }
        },
    ]
})

export default router