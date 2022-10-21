<template>
  <Disclosure as="nav" v-on:mouseleave="active = false" class="bg-white" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
          <div class="flex flex-shrink-0 items-center">
            <a href="/" class="h4 text-black fw-bold">Primervue</a>
            <!--<img class="block h-8 w-auto lg:hidden"
              src="https://img.lovepik.com/element/45006/1283.png_860.png" alt="Mi logo" />
            <img class="hidden h-8 w-auto lg:block"
              src="https://img.lovepik.com/element/45006/1283.png_860.png" alt="Mi logo" />-->
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a href="/" class="text-slate-700 fw-bold px-3 py-2 rounded-md text-sm font-medium transition delay-150 duration-150 ease-in-out ..."
                :class="['text-slate-700 fw-bold hover:bg-slate-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">Inicio</a>
              <router-link to="/servicios" v-on:mouseover="active = !active"
                class="text-slate-700 fw-bold px-3 py-2 rounded-md text-sm font-medium transition delay-150 duration-150 ease-in-out ..."
                :class="['text-slate-700 fw-bold hover:bg-slate-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">
                Servicios</router-link>
              <router-link to="/acerca" class="text-slate-700 fw-bold px-3 py-2 rounded-md text-sm font-medium transition delay-150 duration-150 ease-in-out ..."
                :class="['text-slate-700 fw-bold hover:bg-slate-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">
                Acerca</router-link>
              <router-link to="/contactos" class="text-slate-700 fw-bold px-3 py-2 rounded-md text-sm font-medium transition delay-150 duration-150 ease-in-out ..."
                :class="['text-slate-700 fw-bold hover:bg-slate-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']">
                Contacto</router-link>
            </div>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <div v-if="active"
                class=" absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-1 bg-white sm:gap-8">
                    <router-link v-for="item in solutions" :key="item.name" :to="item.href"
                      class="flex items-start rounded-lg pt-3 pl-3 hover:bg-slate-50">
                      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-slate-900">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-slate-500">{{ item.description }}</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


          <!-- items lado derecho -->

        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-slate-900 text-white' : 'text-slate-900 hover:bg-slate-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : false ">{{ item.name }}</DisclosureButton>

          <DisclosureButton v-on:mouseover="active = !active"
          :class="['text-slate-900 hover:bg-slate-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          >Servicios</DisclosureButton>
          <DisclosureButton 
          :class="['text-slate-900 hover:bg-slate-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          >Acerca</DisclosureButton>
          <DisclosureButton
          :class="['text-slate-900 hover:bg-slate-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          >Contacto</DisclosureButton>

      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import router from '../../router/index'

</script>
<script>

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
const valor = true;
const navigation = [
  { name: 'Inicio', href: '/', current: false },
]
const solutions = [
  {
    name: 'Imagenes',
    description: '',
    href: '/imagenes',
    icon: ChartBarIcon,
  },
  {
    name: 'Productos',
    description: '',
    href: '/productos',
    icon: ChartBarIcon,
  },
  {
    name: 'Cartas',
    description: '',
    href: '/cartas',
    icon: ChartBarIcon,
  },

]



export default {
  data() {
    return {
      active: false
    }
  },
  mounted() {
    this.navegar
  },
  methods: {
    navegar(path) {
      console.log(path)

    },

  }
}

</script>