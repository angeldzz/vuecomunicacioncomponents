<template>
  <div>
    <h1 style="color:green">Padre deportes</h1>
    <h2 style="background-color:red;" v-if="favorito">
        Su deporte favorito es {{ favorito }}
    </h2>
    <ul>
        <li v-for="sport in deportes" :key="sport">
            <HijoDeporte :nombredeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
        </li>
    </ul>
  </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'
export default {
    name:"PadreDeportes",
    components:{
        HijoDeporte
    },
    data() {
        return {
            deportes: ["Curling", "Peonza","Canicas","Bolos"],
            favorito:null
        }
    },
    methods:{
        seleccionarFavoritoParent(deporteFavorito){
            console.log("Yo soy tu padre");
            this.favorito = deporteFavorito;
        }
    }
}
</script>