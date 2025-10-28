<template>
  <div>
    <h1 style="color:red">{{ nombredeporte }}</h1>
    <button @click="seleccionarFavorito">Seleccionar Favorito</button>
  </div>
</template>

<script>
export default {
    name:"HijoDeporte",
    props:["nombredeporte"],
    methods: {
      seleccionarFavorito(){
        console.log("Soy el hijo " + this.nombredeporte);
        // Para enviar informacion se realiza a partir de la llamada
        // con cada parametro separado con comas, dentro del metodo
        // $emit
        this.$emit("seleccionarFavoritoParent",this.nombredeporte)
      }
    }
}
</script>