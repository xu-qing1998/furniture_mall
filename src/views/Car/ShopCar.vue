<template>
  <div class="body">
    <div class="top">
      <div class="left">
        <van-icon name="shop-o" />
        <span>Cabana家具店</span>
        <van-icon name="arrow" />
      </div>
      <div class="right">
        编辑
      </div>
    </div>

    <div
      v-for="item in carList"
      :key="item.id"
    >
      <van-swipe-cell class="card">
        <van-checkbox
          v-model="item.checked"
          class="checkbox"
          @click="choose"
        />
        
        <img :src="item.picture"/>
        <div class="right">
          <div class="name">{{item.name}}</div>
        <div class="price">￥{{item.price/100}}</div>
        <div class="title">{{item.title}}</div>
        </div>
         <div class="count">
            <van-stepper v-model="item.count" min="1"  />
        </div>  
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteCar(item.id)"
          />
        </template>
      </van-swipe-cell>

    </div>
  <div class="hh">
    <van-submit-bar :price="price" button-text="提交订单"  @click="goConfirm"></van-submit-bar>
     <van-checkbox v-model="checkedAll" @click="chooseAll">全选</van-checkbox>
  
  </div>
  </div>
</template>

<script lang="ts">
import xqaxios from '../../utils/axios'
import { toRefs, ref ,reactive, defineComponent,computed} from "vue";
import {useRouter} from 'vue-router'
import {Toast}from 'vant'
export default defineComponent({
  name: "ShopCar",
  props: { goods:<any>[] },
  setup(props, context) {
    const checked = ref(true);
    const checkedAll = ref(false);
    const state=reactive({
      carList:props.goods
    })

    const deleteCar=async(id)=>{
      let result = await xqaxios("POST", "/api/deleteCar", {"id":id});
      window.location.reload();
    }


    const zhuanhuan=()=>{
      for(let i=0;i<state.carList.length;i++){
       state.carList[i].checked=(state.carList[i].checked=="1"?false:true);
       console.log(state.carList[i].checked,"kkkkkkkkkk")
      }
    }

    zhuanhuan();
      const price = computed(() => {
        let sum=0;
        for(let i=0;i<state.carList.length;i++){
          console.log(state.carList[i].checked,"llllllllllll")
          if(state.carList[i].checked==true){
            sum+=state.carList[i].price*state.carList[i].count;
          }
        }
        return sum ;
    })

    const choose=()=>{
      let t=true
      for(let i=0;i<state.carList.length;i++){
        if(state.carList[i].checked==false){
          t=false;
        }
      }
      if(t==true) checkedAll.value=true
    }

    const original=()=>{
      let t=true
      for(let i=0;i<state.carList.length;i++){
        if(state.carList[i].checked==false){
          t=false;
        }
      }
      if(t==true) checkedAll.value=true

    }
    original();
    const chooseAll=()=>{
      if(checkedAll.value==true){
          for(let i=0;i<state.carList.length;i++){
        state.carList[i].checked=true
      }
      } 
      if(checkedAll.value==false){
        for(let i=0;i<state.carList.length;i++){
        state.carList[i].checked=false
      }
      
    }
    }



    const router=useRouter()
    const orderList=[]
    const goConfirm=()=>{
      if(price.value==0){
        Toast("您还未选商品，请先选中商品")
      }
      else{
        for(let i=0;i<state.carList.length;i++){
        if( state.carList[i].checked==true){
          orderList.push(state.carList[i]);
        }
      }
      sessionStorage.orderList=JSON.stringify(orderList) ;
      router.push('/api/confirm')
      }
      
    }

    return { deleteCar,checkedAll,price ,...toRefs(state),chooseAll,goConfirm,choose};

  },
});
</script>

<style lang="less">
.body {
  background-color: #fafafa !important;
  padding: 0 10px;
  
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
    background-color: #fff;
  }
  .card {
    margin-top: 20px;
    border-radius: 10px;
    background-color: #fff;
    padding:10px 0;
    padding-left: 10px;
    position:relative;
    height:100px;
     .delete-button {
        height: 120px;
      }
   
    .checkbox {
      position:absolute;
      top:40px;
      display: inline-block;
    }
    .right{
      position:absolute;
      left:100px;
      top:0;
       .name{
      position:absolute;
      display:inline-block;
      top:15px;
      left:40px;
      font-size:15px;
      width:200px;
    }

    .title{
      border-radius: 8px;
      width:150px;
      height:20px;
      background-color: #e8e8e8;
      font-size:12px;
      position:absolute;
      top:50px;
      left:40px;

      overflow:hidden;
    }

    .price{
      position:absolute;
      top:80px;
      left:40px;

    }
    }
     .count{
      position: absolute;
      margin-top:80px;
      margin-left:230px;
    }
    img {
      width: 100px;
      position:absolute;
      left:30px;
      border-radius: 10px;
    }
  }

  /deep/.hh{
    margin-bottom:50px;
    display:flex;
    position:relative;
  }
  /deep/.van-submit-bar__bar{
    margin-bottom:50px;
  }
 /deep/.van-checkbox{
    position:absolute;
    top:122px;
    z-index:999;

  }
}
</style>