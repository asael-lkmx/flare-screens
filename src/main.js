import { createApp } from 'vue'
import App from './App.vue'
import FlareVue from "@lkmx/flare-vue";
import "@lkmx/flare/src/flare.scss";
import './scss/main.scss';

createApp(App)
    .use(FlareVue)
    .mount('#app');