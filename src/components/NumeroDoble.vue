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
            mensaje:""
        }
    },
    mounted(){
        let numero = this.$route.params.numero
        if (numero === "") {
            this.mensaje = "Sin Parametros en el Routing"
        }else{
            this.mensaje = "Parametro Recibido " + numero
        }
    }
    }
</script>
