import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Recharge from '@/components/Recharge'
import Menshipcard from '@/components/Menshipcard'
import Consumption from '@/components/Consumption'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      //component: Login
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      redirect: '/recharge',
      children: [
        { path: '/recharge', component:Recharge },
        { path: '/menshipcard', component:Menshipcard },
        { path: '/consumption', component:Consumption },
      ]
    }
  ]
})
