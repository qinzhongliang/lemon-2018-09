// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 导入iview
import iview from 'iview'
// 导入iview的样式
import 'iview/dist/styles/iview.css'

// 注册iview插件
Vue.use(iview)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
