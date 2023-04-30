// imnportamos defineStore
import { defineStore } from "pinia"; 

// regla  const comenzar con UseNombre 
export const UseCounter = defineStore ("Counter", {
    //state 
    state : ()=>({
      count : 0,
      name : "Alberto"
    })

    // getter
    // actions
})