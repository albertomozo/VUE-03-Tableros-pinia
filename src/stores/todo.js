import { defineStore } from "pinia";

export const  useTodo  = defineStore("todo", {
    state : () =>({
        todoList: [],
        id:0
    }),
    actions :{
        addTodo(task){
            const newTask = {id:this.id++,task:task };
            this.todoList.push(newTask);
        }
    
    }
})