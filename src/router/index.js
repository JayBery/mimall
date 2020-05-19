import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
      ]
    },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order.vue'),
    children:[
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../pages/orderList.vue')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../pages/orderConfirm.vue')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../pages/orderPay.vue')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../pages/aliPay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
