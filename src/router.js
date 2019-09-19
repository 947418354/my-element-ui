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
        }
    ]
})

export default router