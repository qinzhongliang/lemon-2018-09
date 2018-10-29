import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Admin'
import AdminHome from '@/pages/AdminHome'
import AdminArticleManager from '@/pages/AdminArticleManager'
import AdminCommentManager from '@/pages/AdminCommentManager'
import AdminInformManager from '@/pages/AdminInformManager'
import UserList from '@/pages/UserList'
import UserAdd from '@/pages/UserAdd'
import UserUpdate from '@/pages/UserUpdate'
import Login from '@/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
          name: 'AdminHome',
          component: AdminHome
        },
        {
          path: '/articles',
          name: 'AdminArticleManager',
          component: AdminArticleManager
        },{
          path: '/comment',
          name: 'AdminCommentManager',
          component: AdminCommentManager
        },{
          path: '/110',
          name: 'AdminInformManager',
          component: AdminInformManager
        },{
          path: '/userList',
          name: 'UserList',
          component: UserList
        },{
          path: '/userAdd',
          name: 'UserAdd',
          component: UserAdd
        },,{
          path: '/userUpdate',
          name: 'UserUpdate',
          component: UserUpdate
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
