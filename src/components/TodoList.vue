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
    <TodoForm
        :boardId = "props.boardId"
    />
</template>