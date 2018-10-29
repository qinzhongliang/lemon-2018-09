
import Vue from "vue/dist/vue.esm"
import App from "./App.vue"
//const test=require("./test.js")
import test from "./test.js"
import "./style.css"
import "./style.less"

new Vue({
    el:"#app",
    template:"<App/>",
    components:{
        App
    }
})