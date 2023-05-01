<script setup>
    import {computed} from "vue"
    import {useTodo} from "../stores/todo"
    import {storeToRefs} from "pinia"
    import TodoForm from "./TodoForm.vue";
    import TodoList from "./TodoList.vue";
    const store = useTodo()
    const {totalTodo, totalCompleted} = storeToRefs(store)
    const hasTodo = computed (() => {
        return store.totalTodo >0 ? true : false;
    })
</script>

<template>
    <h1>Todo </h1>
    <p v-if="hasTodo">{{ `${totalCompleted} tareas completadas de ${totalTodo}` }}</p>
    <TodoForm />
    <TodoList />
    <p v-if = "!hasTodo">Todavía no tienes ninguna tarea. Animate!!</p>
</template>