<template>
  <div>
    <h1 style="color: red;">Numero Padre {{ sumaPadre }}</h1>
    <button @click="generarNumero">Generar Nuevo Numero</button>
    <HijoNumeros v-for="numero in numerosRandom" :key="numero" :nuevoNumero="numero" v-on:sumaHijos="sumaHijos"/>
  </div>
</template>

<script>
import HijoNumeros from './HijoNumeros.vue'
export default {
    name:"PadreNumeros",
    components:{
        HijoNumeros
    },
    data(){
        return{
            sumaPadre: 0,
            numerosRandom:[],
        }
    },
    methods:{
        generarNumero(){
            this.numerosRandom.push(parseInt(Math.random() * 100) + 1)
            },
        sumaHijos(numero){
            this.sumaPadre = this.sumaPadre + numero
        }
    }
}
</script>