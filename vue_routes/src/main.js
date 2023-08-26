import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // we don't need './router/index' bc its automatically using it - this is what happens when a folder contains an index file

const app = createApp(App)

app.use(router)

app.mount('#app')
