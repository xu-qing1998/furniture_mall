import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Classify from '../views/Classify.vue'
import Personl from '../views/Personal.vue'
import GoodsInfo from '../views/GoodsInfo.vue'
import Member from '../views/mine/member.vue'
import Category from '../views/category/category.vue'
import Search from '../views/search/search.vue'
import Address from '../views/mine/Address.vue'
import Register from '../views/login/Register.vue'
import Message from '../views/mine/message.vue'
import AddAddress from '../views/mine/AddAddress.vue'
import EditAddress from '../views/mine/EditAddress.vue'
import GoodsHot from '../views/Goods/GoodsHot.vue'
import ConfirmOrder from '../views/Order/ConfirmOrder.vue'
import myOrder from '../views/Order/myOrder.vue'
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
    path:'/code/:name',
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
  },{
    path:'/api/address',
    name:'Address',
    props: true,
    component:Address,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/register',
    name:'Register',
    props: true,
    component:Register,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/message',
    name:'Message',
    props: true,
    component:Message,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/address/add',
    name:'AddAddress',
    props: true,
    component:AddAddress,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/address/edit/:id',
    name:'EditAddress',
    props: true,
    component:EditAddress,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/hot',
    name:'GoodsHot',
    props: true,
    component:GoodsHot,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/confirm',
    name:'ConfirmOrder',
    props: true,
    component:ConfirmOrder,
    meta:{
      showTabbar:false
    }
  },{
    path:'/api/order',
    name:'myOrder',
    props: true,
    component:myOrder,
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
