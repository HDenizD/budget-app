import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';
import { routes } from './router/routes'

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "@/styles/index.scss";
import 'uno.css'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"


const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App);
app.use(pinia);
app.use(router)
// app.use(ElementPlus);
app.mount("#app");
