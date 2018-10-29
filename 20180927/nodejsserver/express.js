//导入模块
var express=require("express");
//创建实例
var app=express();
//设置路由
app.get("/",function(request,response){
    response.send("hello express");
});
app.get("/abc",function (request,response) {
    response.send("abc");
});
app.get("/abcd",function (request,response) {
    response.send("abcd");
})
//监听
app.listen(3000);