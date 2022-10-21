<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Estructura/Navbar.vue'
import Footer from './components/Estructura/Footer.vue'
</script>

<template>
  <Navbar/>
  <RouterView />
  <Footer/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
*{
  font-family: 'Outfit', sans-serif;

}
</style>
