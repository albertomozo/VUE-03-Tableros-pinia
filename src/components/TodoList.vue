<script setup>
   
    import {useTodo} from "../stores/todo";
    import TodoListItem from "./TodoListItem.vue";
    import { defineProps } from "vue";
    const store = useTodo();
    const props = defineProps({  
        boardId : Number
    } )
    console.log(props.boardId)
    
  /*   const TodoListBoard = store.itemsBoard(props.boardId);

    console.log(TodoListBoard) */
    /* const itemsBoard = store.getters.itemsBoard(boardId) */
/*     const itemsBoard = computed(() => store.getters.itemsBoard(boardId.value)); */
    const itemsBoard = store.getters.itemsBoard(props.boardId);
</script>

<template>
  <!--   <p> boardId {{  props.boardId }}</p>
    <p>{{ TodoListBoard }}</p> -->
    <ul> 
        <template v-for="todo in itemsBoard" :key="todo.id">
        
            {{ todo }}
            <TodoListItem 
                :id="todo.id"
                :task="todo.task"
                :completed="todo.completed"
                :fecha="todo.fecha"
            />
        </template>
    </ul>
</template>