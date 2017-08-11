import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Game from '@/components/Game'
import Login from '@/components/Login'

Vue.use(Router)

// import auth from '../auth'
// Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
// auth.checkAuth()

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

