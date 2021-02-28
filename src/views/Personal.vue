<template>
  <div class="vv">
   
    <van-nav-bar
      title="个人中心"
      class="car"
      fixed="true"
    />
     <div v-if="isLogin">
    <div class="top">
      <div class="avator">
        <img src="https://img.yzcdn.cn/upload_files/2020/03/18/Fh621V9kuCPPuPUYHhN9Ktxs9DU7.jpg" />
      </div>
      <div class="name">{{username}}</div>
      <div class="qr" @click="memberQd">
        <img src="../assets/二维码.png">
        <span>会员码</span>
      </div>
      <div class="card">
        <div class="left">
          <img src='../assets/钻石.png' />
          <span>Cabana家具店</span>
        </div>
        <div class="right">
          成为会员
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <div class="center">
      <div class="grid">
        <van-grid
          :border="false"
          :column-num="5"
        >
          <van-grid-item>
            <div>0.00</div>
            <div>余额</div>
          </van-grid-item>
          <van-grid-item>
            <div>0</div>
            <div>积分</div>
          </van-grid-item>
          <van-grid-item>
            <div>0</div>
            <div>卡</div>
          </van-grid-item>
          <van-grid-item>
            <div>0</div>
            <div>优惠券</div>
          </van-grid-item>
          <van-grid-item>
            <van-icon
              name="gold-coin-o"
              size="20"
            />
            <div>零钱</div>
          </van-grid-item>
        </van-grid>
      </div>

      <div class="order">
        <div class="head">
          <div class="left">我的订单</div>
          <div class="right">查看全部订单
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="main">
          <van-grid
            :border="false"
            :column-num="5"
          >
            <van-grid-item
              icon="coupon"
              text="待付款"
            />
            <van-grid-item
              icon="invition"
              text="待发货"
            />
            <van-grid-item
              icon="send-gift"
              text="待收货"
            />
            <van-grid-item
              icon="chat"
              text="评价"
            />
            <van-grid-item
              icon="gold-coin"
              text="退款售后"
            />
          </van-grid>
        </div>
      </div>
      <div class="third">
      <van-cell  is-link class="cell">
        <van-icon name="cart-o" size="20" />
        购物车
      </van-cell>
      <van-cell  is-link class="cell">
        <van-icon name="gold-coin-o" size="25" />
        返现
      </van-cell>
      <van-cell  is-link class="cell">
        <van-icon name="bag-o" size="25" />
        赠品
      </van-cell>
    </div>
    <van-cell  is-link class="cell">
        
      <van-icon name="location-o" size="25" />
        收货地址
      </van-cell>
      <van-cell  is-link class="cell">
      <van-icon  name="user-o" size="25" />
        个人信息
      </van-cell>
      <van-cell  is-link class="cell"> 
      <van-icon name="manager-o" size="25" />
        账号设置
      </van-cell>


    </div>
    </div>
      <login v-if="!isLogin" :msg="isLogin" :name="name" @func="receiveFromChild"></login>

    
  </div>

</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import {useRouter }  from "vue-router";
import Login from './login/Login.vue'
export default defineComponent({
  name: "Personal",
  components:{Login},
  setup(){
    const router=useRouter();
    const isLogin=ref(false);
    const username=ref("");

    const memberQd=()=>{
        router.push("/code")
    }

    const receiveFromChild=(msg,name)=>{
      isLogin.value=msg;
      console.log(name);
      username.value=name
      console.log(username.value);
      console.log(isLogin.value,'点击登录后')
  
    }

    return {memberQd,isLogin,receiveFromChild,username}
  }
});
</script>


<style scoped lang="less">
.vv{
  padding-bottom: 50px;
}
.top {
  position:absolute;
   top: 46px;
  width: 355px;
  padding: 10px;
  height: 150px;
  background-image: url("http://img.yzcdn.cn/upload_files/2019/01/31/Fp3kIohim8ZiB1yLepoMMW8is_qY.png");
  background-size: over;
  .avator {
    width: 80px;
    height: 80px;
    background-color: #f0f0f0;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 55px;
    left: 110px;
  }

  .qr {
    position: absolute;
    top: 30px;
    right: 20px;
    background-color: #7e552f;
    border-radius: 8px;
    font-size: 12px;
    width: 60px;
    padding:0 5px;
    height: 20px;
    color: #fff;
    display: flex;
    span {
      line-height: 20px;
      text-align: center;
    }
  }

  .card {
    width: 325px;
    padding: 10px;
    height: 15px;
    background-color: #37332d;
    position: absolute;
    bottom: 0px;
    left: 15px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #fff;
    .left {
      color: #ffcc00;
    }
  }
}

.center {
  padding: 10px;
  background-color: #f0f0f0;
  .grid {
    margin-top: 220px;
    border-radius: 8px;
    
  }
  .order {
    margin-top: 10px;
    background-color: #fff;
    padding: 5px;
    .head {
      height: 40px;
      border-bottom: 1px #f0f0f0 solid;
      display: flex;
      justify-content: space-between;
      line-height: 40px;
      .left {
        font-size: 18px;
        font-weight: bold;
      }
      .right {
        color: #aca9a99a;
      }
    }
  }

  .third{
    margin-top:10px;
    padding:5px ;
    background-color: #fff;
    .cell{
      border-bottom:1px #f0f0f0 solid;
    }


  }
}
</style>