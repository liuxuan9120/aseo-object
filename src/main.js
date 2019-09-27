import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import { Lazyload } from 'vant';
import { Skeleton } from 'vant';

Vue.config.productionTip = false
// options 为可选参数，无则不传
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(Skeleton);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
