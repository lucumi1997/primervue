<script>
import { RouterLink, RouterView } from 'vue-router'
import { computed, defineComponent } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';

export default defineComponent({
  name: 'ReCaptcha',
  components: {
    VueRecaptcha
  },
  setup() {
    const siteKey = computed(() => {
      return '6LcW-50iAAAAAPwQGxOr76KNec6e7anvuwD72MPt';
    });

    const handleError = () => {
      // Do some validation
    };

    const handleSuccess = () => {
     // Do some validation
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  }
});

</script>

<template>
  <div class="">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactanos
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Dinos que deseas
          aprender y continua con nosotros.</p>
        <form action="#" class="space-y-8 overflow-hidden bg-white shadow sm:rounded-lg p-4">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo
              electrónico</label>
            <input type="email" id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="ejemplo@gmail.com" required>
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
            <input type="text" id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Asunto" required>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
            <textarea id="message" rows="6" required
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Escribe el mensaje"></textarea>
          </div>
          <div class="sm:col-span-2">
            <vue-recaptcha :sitekey="siteKey" :load-recaptcha-script="true" required @verify="handleSuccess" @error="handleError">
            </vue-recaptcha>
          </div>
          <button type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar
            Mensaje</button>
        </form>
      </div>
    </section>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

* {
  font-family: 'Outfit', sans-serif;

}
</style>
