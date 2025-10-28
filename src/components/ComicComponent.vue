<template>
    <div id="comics">
        <h1 style="color: blue;">{{ comic.titulo }}</h1>
    <img :src="comic.imagen">
    <h4 :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000
    }">
        Year: {{ comic.year }}</h4>
        <button @click="seleccionarFavorito">Seleccionar Favorito</button>
        <button @click="deleteComic">Delete</button>
    </div>
</template>

<script>
export default {
    name:"ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        deleteComic(){
            this.$emit("deleteComic",this.index)
        }
    }
}
</script>

<style>

</style>