<template>
  <div class="body">
    <div class="head">
      <div class="left">
        <img
          :src="goodInfo.pictures.split(',')[0]"
          style="width:100px"
        />
      </div>
      <div class="right">
        <div class="price">
          <span>￥{{goodInfo.min_price}}</span>
          <span v-if="goodInfo.max_price>0">-{{goodInfo.max_price}}</span>
        </div>
        <div class="second">剩余{{goodInfo.counts}}件</div>
        <div class="second">请选择款式</div>
      </div>
    </div>
    <div class="ks">
      <div class="title">款式</div>
      <div
        v-for="(item,index) in list"
        :key="item.id"
        class="form"
        
         @click="hh(index)"
      >
        <div
          class="item"
          id="choose"
          @click="select(item)"
          
        >
        
          <img
            :src="item.imgUrl"
            style="width:40px"
          />
          <div class="name" :class="{'active':index==selected}" >
            <span>{{item.name}}</span>
          </div>
          
        </div>   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
       <div class="count">
          
            <div>购买数量</div>
            <van-stepper v-model="value" min="1" :max="goodInfo.counts" />
        
        </div>  
    </div>
      <van-action-bar
          safe-area-inset-bottom
          style="padding:0 10px"
        >
          <van-action-bar-button
            color="#E8E8E8"
            type="warning"
            text="加入购物车"
            style="color:black"
            @click="addCar(goods)"
          />
          <van-action-bar-button
            color="#282828 "
            type="danger"
            text="立即购买"
            @click="buy(goods)"
          />
        </van-action-bar>
  </div>
</template>

<script>
import { toRefs ,ref} from "vue";
import axios from "axios";
import xqaxios from "../utils/axios.js"
import { useRoute, useRouter } from 'vue-router';
export default {
  name: "GoodsStyle",
  props: { list: [], goodInfo: {} },

  setup(props) {
    const state = {
      flag: false,
      flag2:false,
      show:0,
      goods:{}
    };

    const value = ref(1);
    let selected=ref(0);
    const hh=(index)=>{
       
      console.log(index,"indexindexindex")
      selected.value=index;

    }
    const select = (goods) => {
      // document.getElementById("choose").style.backgroundColor="red";
      
      state.flag = true;
      state.show=1;
      state.goods=goods;

    };
    const add = async (goods) => {
      goods.count=value.value;
      goods.pictures=props.goodInfo.pictures.split(',')[0];
      goods.bigname=props.goodInfo.title;
      console.log(goods,"kkkkkkkkkkkkkk");
      let result = await xqaxios("POST", "/api/car",goods);
        };  
    const addCar=(goods)=>{
        add(goods);
    }
    
    const handleClick=()=>{
        state.flag2=true;
    }

    const router=useRouter();
    const buy=(goods)=>{
      console.log(goods,"mmmmmmmmmmmmmm");
      let good=[];
      good.push(goods)
      sessionStorage.orderList=JSON.stringify(good) ;
      router.push('/api/confirm')
    }


    return { select, ...toRefs(state), addCar,handleClick ,value,selected,hh,buy};
  },
};
</script>

<style lang="less" scoped>
.body{
  padding-bottom:40px;
}
.count{
  margin-top:20px;
  display: flex;
  padding: 10px ;
  justify-content: space-between;
}

.bg{
  background-color: red;
}
.head {
  display: flex;
  .left {
    padding: 15px;
  }
}
van-action-bar {
  .left {
    color: black;
  }
}

.right {
  // padding-left: 10px;
  .price {
    margin-top: 40px;
    font-weight: bold;
    font-size: 20px;
  }
  .second {
    margin-top: 5px;
    color: #c8c8c8;
    font-size: 14px;
  }
}

.ks {
  padding-left: 15px;
  .title {
    font-size: 16px;
  }
  .form {
    margin-top: 20px;
    .item {
      background-color: #f0f0f0;
      display: flex;
      padding: 2px;
      width: 300px;
      border-radius: 10px;
      img {
        border-radius: 8px;
      }
      .name {
        margin-top: 12px;
        margin-left: 10px;
        flex: auto;
        display: inline-block;
        span {
          display: block;
          color: #444;
        }
      }
    }
  }
  .active{
    background-color:rgb(138, 138, 138);
  }
}
</style>