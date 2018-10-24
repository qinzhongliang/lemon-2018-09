<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add @addComment1="addComment"></Add>
      <List :comments="comments" @deleteItem3="deleteComment"></List>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  data(){
    return{
      comments:[//数组在哪个组件,跟新数据的行为(方法)就应该定义在哪个组件
        {
          name:"青子",
          content:"Vue 还不错"
        },{
          name:"灵棋",
          content:"Vue So Easy"
        },{
          name:"柚子",
          content:"Vue So So"
        }
      ],
    }
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment);
    },
    //删除指定下标的评论
    deleteComment(index){//回调方法,接收子组件传的参数
      this.comments.splice(index,1);
    }
  },
  name: 'App',
  components:{
    Add,
    List
  }
}
</script>

<style>

</style>
