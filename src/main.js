import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.scss'

const app = createApp(App)

app.use(store)

app.mount('#app')
