import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-tw";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);

app.use(ElementPlus, {
    locale: { locale },
});

app.use(router).mount('#app')
