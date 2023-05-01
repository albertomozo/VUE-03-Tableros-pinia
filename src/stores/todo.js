import { defineStore } from "pinia";

export const  useTodo  = defineStore("todo", {
    state : () =>({
        boardList : [
            {boardid:0,title:'Primer Board'}
        ],
        boardId :1,
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
        addBoard(title){
            const fecha = new Date();
            const newBoard = {boardId:this.boardId++,title:title,  fecha:fecha}
            this.boardList.push(newBoard);

        },
        addTodo(task,boardId){
            const fecha = new Date();
            const newTask = {boardId:boardId,id:this.id++,task:task, completed : false, fecha:fecha}
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