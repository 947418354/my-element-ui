import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myLoading from './my-element-ui/packages/loading'

Vue.config.productionTip = false
Vue.use(myLoading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
