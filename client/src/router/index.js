import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Firebase from '@/components/Firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/firebase',
      name: 'Firebase',
      component: Firebase
    }
  ]
})
