<template>
  <div>
    <table>
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
                <td> {{ numero }} * {{ i }}</td>
                <td >{{ numero * i }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data(){
        return{
            numero:0
    }
    },
    mounted(){
        this.numero = parseInt(this.$route.params.numero)
    },
    watch:{
        '$route.params.numero'(newVal, oldVal){
            this.numero = parseInt(newVal)
            console.log(oldVal);
        }
    }
}
</script>

<style>

</style>