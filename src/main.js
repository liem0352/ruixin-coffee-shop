// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//导入Vant
import Vant from 'vant'
//导入Vant对应的样式文件
import 'vant/lib/index.css'
//注册Vant
app.use(Vant)

app.mount('#app')
