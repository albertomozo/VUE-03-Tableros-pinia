<script setup>
    import {defineProps,  ref} from 'vue';
    import {useTodo} from '../stores/todo';
    const store = useTodo()
    const task = ref('')
    const props = defineProps(
        {
            boardId : Number,
        })
    

    function addNewTask(boardId){
        if (task.value.trim().length === 0) { return}
        store.addTodo(task.value.trim(),boardId);
        task.value = ''
    }

</script>

<template>
    <form @submit.prevent="addNewTask(props.boardId)">
        <input type="text"  v-model="task">
        <button>Añadir</button>
    </form>
</template>