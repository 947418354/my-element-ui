import Vue from 'vue'
import Router from 'vue-router'
import cascaderPanel from './views/cascader-panel'
import loading from './views/loading'

Vue.use(Router) // Vue关联Router

var router = new Router({
    routes: [
        {
            path: '/',
            component: cascaderPanel,
        },
        {
            path: '/cascaderPanel',
            component: cascaderPanel
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
            name: 'table',
            path: '/table',
            components: {
                default: () => import(/* webpackChunkName: "table" */'@/views/table.vue')
            }
        },
    ]
})

export default router