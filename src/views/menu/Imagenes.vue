<template>
  <div class="m-8 grid grid-cols-4 gap-4">
    <div v-for="foto in fotos" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" :src="foto.thumbnailUrl" alt="">
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
            acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

</template>
    
<script setup>

import { mapGetters, mapActions } from 'vuex';
import router from '../../router/index'
import axios from 'axios'
import { ref } from 'vue';
</script>
<script>

const fotos = ref();
export default {
  created() {
    this.cargarImagenes()
  },

  data() {
    return {
      fotos: {}
    }
  },
  mounted() {
    this.cargarImagenes()

  },
  methods: {
    cargarImagenes() {
      try {
        var limit = 3;
        axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(function (response) {
            fotos.value = response.data.slice(0, limit)
            console.log(response)
          }).catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });

      } catch (error) {
        console.log(error);
      }
    }
  },

}

</script>

