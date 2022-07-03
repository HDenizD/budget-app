import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { router } from './router'

import { primeVueComponents } from '@/components/primevue';
import Ripple from 'primevue/ripple';

import 'primevue/resources/themes/lara-dark-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import '@/scss/index.scss'

const app = createApp(App)


app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple)

for (const item of primeVueComponents) {
  app.component(item.name, item.component);
}

app.use(router)
app.mount('#app')