// importamos defineStore
import {computed, ref} from 'vue';
import { defineStore } from "pinia"; 

export const UseCounter = defineStore("counter", ()=>{
  const count = ref(0);
  const name = ref('Alberto');

  const double = computed (() => { return count.value * 2  });
  const nameUpper = computed(() => { return name.value.toUpperCase()});

  function increment(){
    count.value++;
  }
  function reverseName(){
    const reverse = name.value.split('').reverse().join('');
    name.value = reverse
  }

  
  return {count,name,increment,reverseName, double, nameUpper}
})



// regla  const comenzar con UseNombre 
/* export const UseCounter = defineStore ("Counter", {
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
}) */