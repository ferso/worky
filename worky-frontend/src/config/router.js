import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Char from '@/routes/Char'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/about',
      name:'about',
      component: About
    },
    {
      path: '/char/:id/:slug',
      component: Char
    }
  ]
})
