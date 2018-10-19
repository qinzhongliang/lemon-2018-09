<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @add="addTodo"></TodoHeader>
      <TodoList @delObj="d" :todos="todos"></TodoList>
      <TodoFooter :todos="todos" @selectAll="selectAllTodos" @deleteMany="deleteCompleteTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  name: 'App',
  data(){
    return{
      todos:[
        {
          title:"吃饭",
          complete:false
        },{
          title:"睡觉",
          complete:true
        },{
          title:"打代码",
          complete:false
        }
      ]
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo);
    },
    d(index){
      this.todos.splice(index,1)
    },
    deleteCompleteTodos(){
      this.todos=this.todos.filter(todo=>!todo.complete)
    },
    selectAllTodos(check){
      this.todos.forEach(todo=>todo.complete=check)
    }
  },
  components:{
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>


<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
