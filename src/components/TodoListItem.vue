<script setup>
       import {toRefs} from "vue"
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

        
    </script>
    <template>
        <li > 
        <div @click="toggleTodo(id)">
                  {{  `${props.id} --  ${props.task}  -- ${completed} -- ${fecha}`  }}         
        </div>
        <button @click="deleteTodo(id)">Borrar</button>
     </li> 
    </template>