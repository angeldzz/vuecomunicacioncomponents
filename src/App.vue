<template>
  <div>
    <!-- <PadreDeportes/> -->
    <!-- <PadreNumeros/> -->
    <!-- <ComicsComponent/> -->
    <GenerarCheckboxVue/>
    <SeleccionMultiple/>
  </div>
</template>

<script>
import GenerarCheckboxVue from './components/GenerarCheckbox.vue'
import SeleccionMultiple from './components/SeleccionMultiple.vue'
// import ComicsComponent from './components/ComicsComponent.vue'
// import PadreDeportes from './components/PadreDeportes.vue'
// import PadreNumeros from './components/PadreNumeros.vue'
export default {
  name: 'App',
  components: {
    // PadreDeportes,
    // PadreNumeros,
    // ComicsComponent,
    SeleccionMultiple,GenerarCheckboxVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
