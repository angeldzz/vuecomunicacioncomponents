<template>
    <div>
        <h1>{{ mensaje }}</h1>

    </div>
</template>

<script>
export default {
    name:"NumeroDoble",
    data(){
        return{
            mensaje:"",
            doble:0
        }
    },
    mounted(){
        let numero = this.$route.params.numero
        if (numero === "") {
            this.mensaje = "Sin Parametros en el Routing"
        }else{
            this.doble = parseInt(numero) * 2;
            this.mensaje = "El doble del numero es: " + this.doble
        }
    },
    watch:{
        '$route.params.numero' (nextval, oldVal){
            this.doble = parseInt(this.$route.params.numero) * 2;
            this.mensaje = "El doble del numero es: " + this.doble
            console.log("NextVal: ",nextval," OldVal ",oldVal);
        }
    }
    }
</script>
