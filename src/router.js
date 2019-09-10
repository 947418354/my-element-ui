import Vue from 'vue'
import Router from 'vue-router'
import cascaderPanel from './views/cascader-panel'

Vue.use(Router)
var router = new Router({
    routes: [
        {
            path: '/',
            component: cascaderPanel,
        },
        {
            path: '/cascaderPanel',
            component: cascaderPanel
        }
    ]
})

export default router