<template>
    <div class="container">
        <table class="table table-bordered text-center" border="1">
            <thead>
                <tr>
                    <th class="text-center">编号</th>
                    <th class="text-center">名称</th>
                    <th class="text-center">单价</th>
                    <th class="text-center">数量</th>
                    <th class="text-center">总价</th>
                </tr>
            </thead>
            <MyMain :arrs="list"></MyMain>
        </table>   
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import MyMain from './MyMain.vue'
    export default {
        data(){
            return{
                list:[
                    {pname:'apple',price:3,count:2,sub:6},
                    {pname:'pear',price:4,count:3,sub:12},
                    {pname:'banana',price:5,count:4,sub:20}
                ]
            }
        },
        components:{
           MyMain 
        }
    }
</script>

<style scoped>

</style>