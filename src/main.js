import { createApp } from 'vue'
import App from './App.vue'
import FlareVue from "@lkmx/flare-vue";
import './scss/main.scss';

createApp(App)
    .use(FlareVue)
    .mount('#app');
