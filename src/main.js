import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import Router from './router'
import "@/assets/css.css"
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
