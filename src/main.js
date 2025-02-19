import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './assets/scss/main.scss'; 
// Add the solid icons to the library
library.add(fas);

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
