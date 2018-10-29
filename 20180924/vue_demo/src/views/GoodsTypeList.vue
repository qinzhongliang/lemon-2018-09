<template>
    <div>
        <h1>商品类型{{type}}</h1>
        <ul>
            <li v-for="(item,index) in Array(5)" :key="index">
                <router-link :to="'/goods/'+type+'/'+'nz'+(index+1)+'.html'">
                    男装{{index+1}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                type:''
            }
        },
        //这个路由参数  在第一次加载的时候是检查不了路由的变化的
        //第一次加载的路由数据需要通过  vur的生命周期函数来获取
        //预加载
        created() {
            const {type} =this.$route.params;
            this.type=type;
        },
        watch:{
            //这个路由参数  在第一次加载的时候是检查不了路由的变化的
            $route({params}){//监听路由数据
                this.type=params.type;
            }
        }
    }
</script>

<style scoped>

</style>