// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//Vue使用axios模块来完成ajax操作



//路由进入之前调用
//router.beforeEach
router.beforeEach((to,from,next)=>{
  //to  是要到哪里去
  //from  你要哪里来
  //next  要不要让你去

  //如果要到的那个路由的meta元信息里的auth属性为true  那么就需要验证后才能访问
  if(to.meta.auth){
    //如果没有登录就跳转至登录页面
    next('/log.html');
  }else{
    next();
  }
});

//路由进入之后调用
//router.afterEach


//Promise  用来处理异步的
// const a=new Promise(function(resolve,reject){
//   if(true){
//     //第一个参数resolve 传递正确的结果到Promise对象的then函数里
//     resolve(200)
//   }else{
//     //第二个参数reject 传递错误的结果到Promise对象的catch函数里
//     reject(new Error("err"))
//   }
// });

const a=function(x){
  return new Promise(function(resolve,reject){
    if(true){
      //第一个参数resolve 传递正确的结果到Promise对象的then函数里
      resolve(x)
    }else{
      //第二个参数reject 传递错误的结果到Promise对象的catch函数里
      reject(new Error("err"))
    }
  });
}

// const b=new Promise(function(resolve,reject){
//   if(true){
//     //第一个参数resolve 传递正确的结果到Promise对象的then函数里
//     resolve(100)
//   }else{
//     //第二个参数reject 传递错误的结果到Promise对象的catch函数里
//     reject(new Error("err"))
//   }
// });

const b=function(x){
  return new Promise(function(resolve,reject){
    if(true){
      //第一个参数resolve 传递正确的结果到Promise对象的then函数里
      resolve(x)
    }else{
      //第二个参数reject 传递错误的结果到Promise对象的catch函数里
      reject(new Error("err"))
    }
  });
}



// Promise.all([a,b]).then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// })

Promise.all([a(100),b(200)]).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

// a.then(function(result){
//   console.log(result);
// })
// .catch(function(err){
//   console.log(err);
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
