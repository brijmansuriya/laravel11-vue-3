// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

const app = createApp(App)

// Vue.config.productionTip = false;
// Setup the router
app.use(router)

// Setup Pinia
const pinia = createPinia();
app.use(pinia);

// Mount the app
app.mount('#app')
