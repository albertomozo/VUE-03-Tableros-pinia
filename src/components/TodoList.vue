<script setup>
    import {useTodo} from "../stores/todo";
    import TodoListItem from "./TodoListItem.vue";
    const store = useTodo();
</script>

<template>
    <ul> 
        <template v-for="todo in store.todoList" :key="todo.id">
            <TodoListItem 
                :id="todo.id"
                :task="todo.task"
                :completed="todo.completed"
                :fecha="todo.fecha"
            />
        </template>
    </ul>
</template>