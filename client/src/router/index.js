import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home'

import register from '@/pages/register'
import registerNew from '@/pages/register/new'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      redirect: {name: 'registerNew'},
      children: [
        {
          path: '/register/new',
          name: 'registerNew',
          component: registerNew
        }
      ]
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
})
