import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/LoginForm.vue'),
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: () => import('@/components/ForgotForm.vue'),
      },
      {
        path: 'reset/:redirect',
        name: 'Reset',
        component: () => import('@/components/ResetForm.vue'),
        props: route => ({ code: route.query.code})
      },
    ],
  },
  {
    path: '/connect/google/redirect',
    component: ()=> import('@/components/auth/google/googleLoginButton.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
