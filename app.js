// import { Persona } from "./Persona.js";

//createApp
//Destructuring es como poner const createApp = Vue.createApp, crea la variable y la va a bsucar al bojeto
const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,
      titulo: "Contador usando Vue JS",
     
      nombre_input: "",
      laHora: "",
      classBtn: {
        "background-color": "red",
        cursor: "pointer",
      },
      mostrar: true,
     
    };
  },
  created() {
    // Created es para lo que se ejecuta al cargar la página.
  
  },
  methods: {
    aumentar(){
      this.contador += 1;
    },
    disminuir(){
      this.contador -= 1;
    },
    resetCounter(){
      this.contador=0;
    },
   
    saludar() {
      console.log("Hola " + this.nombre_input);
    },
  },
  computed: {
    sumaComputed() {
      return this.numero * this.a;
    },
  },
}).mount("#app");
