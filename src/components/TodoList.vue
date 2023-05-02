<script setup>
   
    import {useTodo} from "../stores/todo";
    import TodoListItem from "./TodoListItem.vue";
    import TodoForm from "./TodoForm.vue";
    import { defineProps, computed } from "vue";
    const store = useTodo();
    const props = defineProps({  
        boardId : Number
    } )
    console.log(props.boardId)
    
  
 
    const itemsBoard = computed (() => {
        return store.itemsBoard(props.boardId);
    })
    const itemsBoardCompleted = computed (() => {
        return store.itemsBoardCompleted(props.boardId);
    });  
    const itemsBoardTotal  = computed (() => {
        return store.itemsBoardTotal(props.boardId);
    });  
    const hasItemsBoard = computed (() =>  {
        return store.itemsBoardTotal(props.boardId) >0 ? true : false;
    }) 

    

</script>

<template>
    <p v-if="hasItemsBoard">Tienes  {{ itemsBoardCompleted }}
    tareas completadas de un total de  {{ itemsBoardTotal}}</p>
    <ul> 
        <template v-for="todo in itemsBoard" :key="todo.id">
        
            <TodoListItem 
                :id="todo.id"
                :task="todo.task"
                :completed="todo.completed"
                :fecha="todo.fecha"
            />
        </template>
    </ul>
    <TodoForm
        :boardId = "props.boardId"
    />
    <p v-if="!hasItemsBoard">Upps !!! .No has introducido ninguna tarea. </p>
</template>