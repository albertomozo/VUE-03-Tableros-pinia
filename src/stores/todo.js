import { defineStore } from "pinia";

export const  useTodo  = defineStore("todo", {
    state : () =>({
        todoList: [],
        id:0
    }),
    getters : {
        totalTodo : (state) => {
            return state.todoList.length
        },
        totalCompleted : (state) => {
            const total = state.todoList.filter((item)=> item.completed === true)
            return total.length;
        }
    },
    actions :{
        addTodo(task){
            const fecha = new Date();
            const newTask = {id:this.id++,task:task, completed : false, fecha:fecha}
            this.todoList.push(newTask);
        },
        toggleTodo (taskid){
            const task =   this.todoList.find(item=>item.id === taskid) ;
            if (task){
                task.completed = !task.completed;
            }   
        },
        deleteTodo(id){
            console.log('delete')
            this.todoList = this.todoList.filter(item => item.id !== id)
        }
    
    }
})