<script setup>
    import {ref} from 'vue';
    import {useTodo} from '../stores/todo';
    const store = useTodo()
    const task = ref('')
    function addNewTask(){
        store.addTodo(task.value);
    }
</script>

<template>
    <form @submit.prevent="addNewTask">
        <input type="text"  v-model="task">
        <button>Añadir</button>
    </form>
</template>