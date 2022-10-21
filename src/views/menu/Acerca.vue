<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../../components/Estructura/Navbar.vue'
</script>

<template>

<div class="m-8">
  <h1 class="mt-5">UN POCO DE HISTORIA</h1>
  <p>
    El Grupo de Investigación de Textos para la Historia del Español (GITHE) pretende poner al alcance de los investigadores y de los interesados por la Historia de lengua española en general, la presente colección de Textos para la Historia del Español. Estos manuales están presentados de modo que puedan ser directamente utilizados y citados en sus investigaciones, gracias al cuidado proceso de preparación y revisión de todos los materiales que aquí se incluyen. El principio metodológico fundamental de la colección se basa en la necesidad de acudir de primera mano a los testimonios antiguos de la lengua, por lo que el texto se constituye como objeto prioritario de su indagación. De este modo, las tareas del grupo se centran en la edición y estudio de los textos españoles (incluyendo los dialectos antiguos). El estudio que se lleva a cabo sobre los textos atiende sobre todos los aspectos lingüísticos (paleografía, grafía y fonética, morfología y sintaxis, léxico), pero también a otros aspectos generales como la tipología del documento, así como el marco histórico general, pues son necesarias estas referencias para valorar con rigor los aspectos lingüísticos.
  </p>

</div>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

* {
  font-family: 'Outfit', sans-serif;

}
</style>
