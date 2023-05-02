<script setup>
    import { computed } from "vue";
    import {useTodo} from "../stores/todo";
    import TodoList from "./TodoList.vue";
    const store = useTodo();
  
    
</script>

<template>
      <section> 
        <template v-for="board in store.boardList" :key="board.id">
            <article>
                <h3>{{ board.title}} </h3>
              
                <TodoList 
                    :boardId=board.boardId
                  
                />
            </article>
            <hr>
        </template>
    </section>
</template>