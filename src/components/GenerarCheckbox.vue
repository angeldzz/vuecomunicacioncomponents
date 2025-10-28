<template>
  <div>
    <h1>Generador Checkbox</h1>
    <button @click="generarRandom">Generar CheckBox</button>
    <div v-for="numero in numeros"  :key="numero">
        <label for="input">{{ numero }}</label>
        <input type="checkbox" @click="sumarNumeros" :value="numero"/>
    </div>
    <h2 style="color: blue;">La suma es: {{ suma }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
    name:"GenerarCheckbox",
    data(){
        return{
            numeros:[],
            suma: 0,
        }
    },
    methods:{
        generarRandom(){
            this.numeros = [];
            for (let i = 0; i < parseInt(Math.random() * 10) + 1; i++) {
                this.numeros.push(parseInt(Math.random() * 100) + 1)
            }
        },
        sumarNumeros($event){
            if ($event.target.checked) {
                this.suma += parseInt($event.target.value)
            }else{
                this.suma -= parseInt($event.target.value)
            }
        }
    }
}
</script>

<style>

</style>