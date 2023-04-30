<script setup>
    import {UseCounter} from "../stores/counter";
    import { storeToRefs } from "pinia";
    const store = UseCounter();
    const {name,count, double, nameUpper } = storeToRefs(store)
    // vamoa a usar la funcion increment del store
    const {increment, reverseName} = store;
</script>
<template>
    <div>
        <p>
             Counter : {{ count }}  {{ double  }}
        </p>
        <p>
             Name : {{ name }}   {{ nameUpper }}
        </p>
        <button @click="increment">Incrementar</button>
        <button @click="reverseName">Invertir Name</button>
    </div>
</template>