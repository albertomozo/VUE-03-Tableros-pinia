import { defineStore } from "pinia";

export const  useTodo  = defineStore("todo", {
    state : () =>({
        boardList : [],
        boardId :0,
        todoList: [],
        id:0
    }),
    getters : {
        totalTodo : (state) => {
            return state.todoList.length
        },
        totalBoard (state){
            return state.boardList.length
        },
        itemsBoardCompleted : (state) => (boardId) =>{
            const total = state.todoList.filter((item)=> item.completed === true && item.boardId == boardId)
            return total.length;
        },

        itemsBoard: (state) => (boardId) => {
            console.log('entro')
             console.log(state.todoList)
            const TodoListBoard = state.todoList.filter((item) => item.boardId === boardId)
            console.log(TodoListBoard)
            return TodoListBoard
       },
       itemsBoardTotal: (state) => (boardId) => {
        
        const TodoListBoard = state.todoList.filter((item) => item.boardId === boardId)
        return TodoListBoard.length
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
            console.log('toogle todo',taskid);
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