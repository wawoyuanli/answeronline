import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
/**引入路由 */
import router from './router/index'
/**引入less */
import less from 'less'
Vue.use(less)
/**引入bootstrap */
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

 
// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
import './icons'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
