import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Home from '@/components/home'
import Find from '@/components/home/find/Find'
import Mine from '@/components/home/mine/Mine'
import Order from '@/components/home/order/Order'
import Take from '@/components/home/take/Take'
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'index',
     redirect:'/home/take',
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/home',
      name:'Home',

      component:Home,
      children:[
        {
          path:'find',
          name:'Find',
          component:Find
        },
        {
          path:'mine',
          name:'Mine',
          component:Mine
        },
        {
          path:'order',
          name:'Order',
          component:Order
        },{
          path:'take',
          name:'Take',
          component:Take
        }
      ]
    }
  ]
})
