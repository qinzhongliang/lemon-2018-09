/*
路由器模块
*/
import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import About from '@/views/About'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
