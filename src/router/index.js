import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/page/:page',
    name: 'page',
    props: true,
    component: () => import('../views/Home.vue')
  }
]


const router = new VueRouter({
  routes,
  // mode: 'history',
  // base: process.env.BASE_URL,
})

// eslint-disable-next-line
router.beforeEach((to, from, next)=>{
  if (from.name === null) {
    let page = to.params.page ? parseInt(to.params.page) - 1 : 0
    store.dispatch('getTasks', {startItem: page * 10, limit: 10} )
  }
  next()
})

export default router
