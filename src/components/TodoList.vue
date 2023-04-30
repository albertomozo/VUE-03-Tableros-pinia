<script setup>
    import {useTodo} from "../stores/todo";
    const store = useTodo();
</script>

<template>
    <ul>
        {{ store.todoList }}
        <li v-for="todo in store.todoList" :key="todo.id">
        {{ todo.task }}
        </li>
    </ul>
</template>