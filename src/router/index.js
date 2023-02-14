import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import PassResetView from '../views/auth/PassResetView.vue'
import PassResetView2 from '../views/auth/PassResetView2.vue'
import VerifyAccount from '../views/auth/VerifyAccount.vue'
import MyDashboard from '../views/profile/MyDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/log-in',
    name: 'LoginView',  
    component: LoginView
  }, {
    path: '/register',
    name: 'RegisterView',  
    component: RegisterView
  }, {
    path: '/reset-pass',
    name: 'PassResetView',  
    component: PassResetView
  }, {
    path: '/new-pass',
    name: 'PassResetView2',  
    component: PassResetView2
  }, {
    path: '/verifyAccount',
    name: 'VerifyAccount',  
    component: VerifyAccount
  }, {
    path: '/MyDashboard',
    name: 'MyDashboard',  
    component: MyDashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
