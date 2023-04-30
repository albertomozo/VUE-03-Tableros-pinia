<script setup>
       import {toRefs} from "vue"
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
           {{  `${props.id} --  ${props.task}  -- ${completed} -- ${fecha}`  }} 
        </li>
    </template>