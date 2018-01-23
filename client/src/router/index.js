import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home'

import register from '@/pages/register'
import registerNew from '@/pages/register/new'
import registerActivation from '@/pages/register/activation'

import login from '@/pages/login'

import image from '@/pages/image'

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
        },
        {
          path: '/register/activation/:code/:alias',
          name: 'registerActivation',
          component: registerActivation,
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/image',
      name: 'image',
      component: image
    },
    {
      path: '*',
      redirect: {name: 'home'}
    }
  ]
})
