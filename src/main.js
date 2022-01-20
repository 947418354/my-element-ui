import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@duguqiubai/boot-style/boot.css'
import '@/assets/styles/common.less'

Vue.config.productionTip = false
Vue.use(ElementUI)

let contexts = require.context('@/components/element-ui-p', true, /\.vue$/)
contexts.keys().forEach(component => {
  let componentEntity = contexts(component).default
  if(componentEntity.hasOwnProperty('name')) {
    Vue.component(componentEntity.name, componentEntity)
  } else {
    // console.log(`[warning]: Vue files without the name property will not be registered as global components! ${componentEntity.__file}`)
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
