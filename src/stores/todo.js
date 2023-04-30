import { defineStore } from "pinia";

export const  useTodo  = defineStore("todo", {
    state : () =>({
        todoList: [],
        id:0
    }),
    actions :{
        addTodo(task){
            const fecha = new Date();
            const newTask = {id:this.id++,task:task, completed : false, fecha:fecha}
            this.todoList.push(newTask);
        }
    
    }
})