<template>
    <div class="col-md-8 content">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <Item @deleteItem1="deleteItem2(index)" v-for="(comment,index) in comments" :key="index" :comment="comment"></Item>
        </ul>
      </div>
</template>

<script>
    import Item from "./Item.vue"
    export default {
        //声明接收属性:这个属性就会成为组件对象的属性
        props:["comments"],//只指定属性名
        components:{
            Item
        },
        methods:{
            deleteItem2(index){
                //第一个参数是父组件中v-on绑定的自定义回调方法，第二个参数为传递的参数
                this.$emit("deleteItem3",index);
            }
        }
    }
</script>

<style>
.content{
    height: 320px;
    overflow: auto;
}
.content .reply {
  margin-top: 0px;
}
</style>