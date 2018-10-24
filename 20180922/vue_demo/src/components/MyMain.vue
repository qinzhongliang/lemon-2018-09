<template>
    
        <tbody>
            <tr v-for="(value,index) in arrs" :key="index">
                <td>{{index+1}}</td>
                <td>{{value.pname}}</td>
                <td>{{value.price}}</td>
                <td>
                    <button @click='add(index)'>+</button>
                    <span>{{value.count}}</span>
                        <button @click='redu(index)'>-</button>
                    </td>
                <td>{{value.sub}}</td>
            </tr>
            <tr>
                <td colspan="5">总价：￥{{sum}}</td>
            </tr>
        </tbody>
    
</template>

<script>
    export default {
        props:["arrs"],
        data(){
            return{
                sum:38
            }
        },
        methods:{
            add:function(index){//添加
                this.arrs[index].count++;
                this.arrs[index].sub=this.arrs[index].count*this.arrs[index].price;
                this.total();
            },
            redu:function(index){//减少
                if(this.arrs[index].count>0){
                    this.arrs[index].count--;
                }
                this.arrs[index].sub=this.arrs[index].count*this.arrs[index].price;
                this.total();
            },
            total: function () {//总计
                for (var i = 0, tota = 0; i < this.arrs.length; i++) {
                    tota += this.arrs[i].sub
                }
                this.sum = tota;
            }
        }
    }
</script>

<style scoped>

</style>