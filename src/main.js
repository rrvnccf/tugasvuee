import { createApp } from 'vue'
import App from './App.vue'
import Router from "./routes"
import 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(Router).mount('#app')
