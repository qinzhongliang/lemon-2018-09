//vue路由的基础操作  导入依赖
import Vue from 'vue'
import Router from 'vue-router'

//导入页面组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Registry from '@/views/Registry'
import Admin from '@/views/Admin'
import Goods from '@/views/Goods'
import NotFound from '@/views/NotFound'
import GoodsType from '@/views/GoodsType'
import GoodsList from '@/views/GoodsList'
import GoodsDetail from '@/views/GoodsDetail'
import GoodsTypeList from '@/views/GoodsTypeList'

//注册路由
Vue.use(Router)

//创建路由对象导出
export default new Router({
  mode:'history',// 默认是hash模式的
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/log.html',
      name: 'Login',
      component: Login
    },{
      path: '/reg.html',
      name: 'Registry',
      component: Registry
    },{
      path: '/admin.html',
      name: 'Admin',
      component: Admin,
      meta:{
        auth:true
      }
    },{
      path: '/goods',
      component: Goods,
      children:[
        {
          path:'/',
          component:GoodsList
        },{
          path:':type',
          component:GoodsType,
          children:[
            {
              path:'/',
              component:GoodsTypeList
            },{
              path:':sid',
              name:'GoodsDetail',
              component:GoodsDetail,
            }
          ]
        }
      ]
    },{
      path: '/404.html',
      name: 'NotFound',
      component: NotFound
    },{
      path: '*',
      component: NotFound
    }
  ]
})
