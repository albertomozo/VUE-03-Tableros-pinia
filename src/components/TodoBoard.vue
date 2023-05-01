<script setup>
    import {useTodo} from "../stores/todo";
    /* import TodoList from "./TodoList.vue"; */
    const store = useTodo();
    
</script>

<template>
    <h3>Lista de tableros</h3>
    {{ store.boardList }}
    <ul> 
        <template v-for="board in store.boardList" :key="board.id">
            <li>
                {{ board.title}}
            </li>
        </template>
    </ul>
</template>