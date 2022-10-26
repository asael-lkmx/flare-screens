import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import FlareVue from "@lkmx/flare-vue";
import './scss/main.scss';

createApp(App)
    .use(router)
    .use(FlareVue)
    .mount('#app');
