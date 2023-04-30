// importamos defineStore
import { defineStore } from "pinia"; 

// regla  const comenzar con UseNombre 
export const UseCounter = defineStore ("Counter", {
    //state 
    state : ()=>({
      count : 0,
      name : "Alberto"
    }),
    // getter
    // actions
    actions : {
      increment(){
        this.count++;
      },
      reverseName(){
        const reverse = this.name.split('').reverse().join('');
        this.name = reverse
     }
    },
    getters : {
      double : (state) => { return state.count * 2  },
      nameUpper : (state) => { return state.name.toUpperCase()}
    
    }
})