// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {sync} from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from '@/store/store'
import VueScrollStop from 'vue-scroll-stop'

import './styles/icons/awesome'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.component('icon', Icon)
Vue.use(VueScrollStop)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
