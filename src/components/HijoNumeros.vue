<template>
  <div>
    <h1>Numero hijo: {{ nuevoNumero }}</h1>
    <button @click="pasarNumero">Sumar Numeros</button>
  </div>
</template>

<script>
export default {
    name:"HijoNumeros",
    props:["nuevoNumero"],
    data(){
        return{
            suma:0
        }
    },
    methods:{
        pasarNumero(){
            this.$emit("sumaHijos",this.nuevoNumero)
        }
    }
}
</script>