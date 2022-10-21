import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import './assets/main.css'

import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';
const app = createApp(App)

app.use(router)
app.mount('#app')

