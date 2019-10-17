// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
// import './assets/css/index.css'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible'

Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
