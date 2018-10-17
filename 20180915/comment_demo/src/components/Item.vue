<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:void(0);" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
    </li>
</template>

<script>
    export default {
        props:{//指定属性名和属性值的类型
            comment:Object,
            required:true//必须
        },
        methods:{
            deleteItem(){
                const{comment}=this;
                if(window.confirm(`确定删除${comment.name}的评论吗？`)){
                    this.$emit("deleteItem1");
                }
            }
        }
    }
</script>

<style>
li {
  transition: .5s;
  overflow: hidden;
}

li .handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

li .handle a {
  display: block;
  text-decoration: none;
}

li .centence {
  padding: 0px 50px;
}

li .user {
  font-size: 22px;
}
</style>