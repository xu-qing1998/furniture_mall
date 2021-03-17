<template>
  <div class="body">
    <van-nav-bar
      title="购物车"
      class="car"
      fixed="true"
    />
     <shop-car v-if="goodsList.length>0"  :goods="goodsList"></shop-car>
     <empty-car v-else></empty-car>
  
     
  </div>

</template>
<script lang="ts">
import { defineComponent, toRefs ,reactive} from "vue";
import EmptyCar from "./Car/EmptyCar.vue"
import ShopCar from "./Car/ShopCar.vue"
import xqaxios from '../utils/axios'
import {Toast} from 'vant'
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Car",
  components:{EmptyCar,ShopCar},
  setup(){
    const state=reactive({
      goodsList:[],
      flag:false
    })
     const getGoodsList = async () => {
      let result = await xqaxios("GET", "/api/getcar");
      state.goodsList = result.message;
      console.log(state.goodsList,"000000000000")
    };
    const router=useRouter()
    const justify=()=>{
     if(!sessionStorage.getItem("isLogin")){
       router.push('/personal')
       Toast("请先登录")
     }
    }
    justify();
    getGoodsList();
    return {...toRefs(state)}
  }
});
</script>

<style scoped lang="less">
  .body{
    padding-bottom:100px;
  }


</style>