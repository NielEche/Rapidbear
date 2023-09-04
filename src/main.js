import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"


const app = createApp(App)

// PINIA
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)
// Export the Pinia instance
export { pinia }


// ROUTER
app.use(router)


// TOAST
var toast_options = {
	timeout: 5000,
}
app.use(Toast, toast_options)



app.mount('#app')



