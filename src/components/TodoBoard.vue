<script setup>
    import {useTodo} from "../stores/todo";
    import TodoList from "./TodoList.vue";
    const store = useTodo();
    
</script>

<template>
    <h3>Lista de tableros</h3>
    {{ store.boardList }}
    <section> 
        <template v-for="board in store.boardList" :key="board.id">
            <article>
                <h3>{{ board.title}}</h3>
                <TodoList 
                    :boardId=board.boardId
                  
                />
            </article>
        </template>
    </section>
</template>