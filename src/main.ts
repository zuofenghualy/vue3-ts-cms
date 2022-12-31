import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'
import useLoginStore from './store/login/login'

const app = createApp(App)
app.use(pinia)
const loginStore = useLoginStore()
loginStore.loadLocalCacheAction()

app.use(router)
app.use(registerIcons)
app.mount('#app')
