<script setup>
    import {UseCounter} from "../stores/counter";
    const store = UseCounter();
</script>
<template>
    <div>
        <p>
             Counter : {{ store.count }}
        </p><p>
             Name : {{ store.name }}
        </p>
    </div>
</template>