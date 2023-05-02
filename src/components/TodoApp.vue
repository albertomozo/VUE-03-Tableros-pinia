<script setup>
    import {computed} from "vue"
    import {useTodo} from "../stores/todo"
    import {storeToRefs} from "pinia"
    import TodoBoard from "./TodoBoard.vue";
    import TodoBoardForm from "./TodoBoardForm.vue";
    const store = useTodo()
    const {totalBoard} = storeToRefs(store)
    const hasTodo = computed (() => {
        return store.totalBoard >0 ? true : false;
    })
</script>

<template>
    <h1>Boards </h1>
    
    <p v-if="hasTodo">{{ ` hay un total de   ${totalBoard} tableros `}}</p>
    <TodoBoardForm />
    <TodoBoard />
    
    <p v-if = "!hasTodo">Todavía no tienes ningun Tablero. Animate!!</p>
</template>