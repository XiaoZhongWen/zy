import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColumnDetail from './components/ColumnDetail.vue'
import App from './App.vue'

const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
