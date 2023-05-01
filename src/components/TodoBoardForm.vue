<script setup>
    import {ref} from 'vue';
    import {useTodo} from '../stores/todo';
    const store = useTodo()
    const boardTitle = ref('')
    function addNewBoard(){
        if (boardTitle.value.trim().length === 0) { return}
        store.addBoard(boardTitle.value.trim());
        task.value = ''
    }
</script>

<template>
    <form @submit.prevent="addNewBoard">
        <input type="text"  v-model="boardTitle">
        <button>Añadir tablero</button>
    </form>
</template>