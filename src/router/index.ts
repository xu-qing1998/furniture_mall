import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Classify from '../views/Classify.vue'
import Personl from '../views/Personal.vue'
import GoodsInfo from '../views/GoodsInfo.vue'
import Member from '../views/mine/member.vue'
import Category from '../views/category/category.vue'
import Search from '../views/search/search.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      showTabbar:true
    }
  },
  {
    path:'/car',
    name:'Car',
    component:Car,
    meta:{
      showTabbar:true
    }
  },
  {
    path:'/classify',
    name:'Classify',
    component:Classify,
    meta:{
      showTabbar:true
    }
  },{
    path:'/personal',
    name:'Personl',
    component:Personl,
    props: true,
    meta:{
      showTabbar:true
    }
  },{
    path:'/goodsInfo/:id',
    name:'GoodsInfo',
    component:GoodsInfo,
    props: true,
    meta:{
      showTabbar:false
    }
  },{
    path:'/code',
    name:'Member',
    component:Member,
    meta:{
      showTabbar:false
    }
  },{
    path:'/category/:name',
    name:'Category',
    props: true,
    component:Category,
    meta:{
      showTabbar:false
    }
  },{
    path:'/search',
    name:'Search',
    props: true,
    component:Search,
    meta:{
      showTabbar:false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
