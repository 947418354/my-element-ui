import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myLoading from './my-element-ui/packages/loading'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(myLoading)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
