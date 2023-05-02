<script setup>
       import {toRefs, ref, computed} from "vue"
       import {useTodo} from "../stores/todo";
       const store = useTodo();
       const {toggleTodo} = store;
       const {deleteTodo} = store;
       const props = defineProps(
        {
            id : Number,
            task : String,
            completed : Boolean,
            fecha : Date
        }
        );

        const {id,task,completed,fecha} =  toRefs(props)  ;
        const fec = new Date;
        const fechaCorta = ref(fec.getDay(fecha) + '-' + (fec.getMonth(fecha)+1) + '-' + fec.getFullYear(fecha));    
        const completado = computed (() => {
              return (completed.value) ? 'completado' : 'pendiente';
        })
        
</script>
<template>
    <li > 
        <div class="task">
            <div >
                {{ props.task }} 
                <button @click="toggleTodo(id)">{{ completado }}</button> {{ fechaCorta  }}         
            </div>
            <div>
                <button @click="deleteTodo(id)">Borrar</button>
            </div>
        </div>
    </li> 
</template>

<style scoped>
    .task {
        display: flex;
        gap : 6px    }
</style>