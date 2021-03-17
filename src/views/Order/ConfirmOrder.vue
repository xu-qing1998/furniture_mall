<template>
  <div>
    <van-nav-bar
      title=" 确认订单"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="body">
      <div class="address">
        <div class="provinces">{{provinces}}</div>
        <div class="more">{{address}}</div>
        <div class="connenxt">
          <span class="left">{{username}}</span>
          <span class="right">{{phone}}</span>
        </div>
        <div class="send">
          <div>配送方式</div>
          <div>快递&nbsp;&nbsp;&nbsp;免运费</div>
        </div>
      </div>

      <div class="goods">
        <div class="title">
          <van-icon name="shop-o" />
          <span class="name">Cabana家具店</span>
        </div>
        <div class="boxes">
          <div
            v-for="item in List"
            :key="item.id"
          >
            <div class="top">
              <div class="img">
                <img
                  :src="item.imgUrl"
                  alt=""
                >
              </div>
              <div class="right">
                <div class="first">{{item.name}}</div>
                <div class="second">{{item.title}}</div>
                <div class="third">
                  <span class="left">￥{{item.price/100}}</span>
                  <span class="right">x{{item.count}}</span>
                </div>
              </div>
            </div>

          </div>
          <div class="bottom">
            <span class="left">共{{count}}件</span>
            <span class="right">商品小计：￥{{price}}</span>
          </div>
        </div>

      </div>

    </div>
    <van-tabbar class="tab">
      <div class="text">应付：￥{{price}}</div>
      <button
        class="btn"
        @click="pay"
      >提交订单</button>
    </van-tabbar>
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '70%' }"
    >
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :error-info="errorInfo"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </van-popup>

  </div>
</template>

<script lang="ts">
import { Toast } from "vant";
import { defineComponent, reactive, toRefs, ref, watch } from "vue";
import { useRouter } from "vue-router";
import xqaxios from "../../utils/axios.js";
export default defineComponent({
  name: "ConfirmOrder",
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    const state = reactive({
      addressList: [],
      provinces: "",
      address: "",
      username: "",
      phone: "",
    });
    let price = 0;
    let count = 0;
    const value = ref("");
    const errorInfo = ref("");
    const showKeyboard = ref(true);
    const List = JSON.parse(sessionStorage.getItem("orderList"));
    console.log(List,"xxxxxxxxxxxxxxxxx")
    const getprice = () => {
      for (let i = 0; i < List.length; i++) {
        price += List[i].price / 100;
        count += List[i].count;
      }
    };

    getprice();
    const getAddress = async () => {
      let result = await xqaxios("GET", "/api/address");
      state.addressList = result.message;
      state.provinces = state.addressList[0].provinces;
      state.address = state.addressList[0].address;
      state.username = state.addressList[0].username;
      state.phone = state.addressList[0].phone;
      console.log(state.addressList[0].provinces, "111111111");
    };
    getAddress();
    const show = ref(false);
    const pay = () => {
      show.value = true;
    };
    watch(value, (newVal) => {
      if (newVal.length === 6 && newVal !== "123456") {
        errorInfo.value = "密码错误";
      } else if (newVal.length === 6 && newVal == "123456") {
        Toast({
          message: "支付成功",
          icon: "passed",
        });
        router.push('/personal')
      }


    });

    return {
      onClickLeft,
      List,
      ...toRefs(state),
      price,
      count,
      show,
      pay,
      value,
      errorInfo,
      showKeyboard,
    };
  },
});
</script>

<style lang="less" scoped>
.body {
  background-color: #f0f0f0 !important;
  height: 600px;
  padding: 10px;
  padding-top: 60px;
  padding-bottom: 80px;
  .address {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    .more {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .provinces {
      margin-bottom: 10px;
    }
    .connenxt {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px #f0f0f0 solid;
      .left {
        margin-right: 10px;
      }
    }
    .send {
      display: flex;
      justify-content: space-between;
      color: rgb(170, 170, 170);
    }
  }

  .goods {
    margin-top: 10px;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px;
    padding-bottom: 40px;
    .title {
      margin-bottom: 20px;
      .name {
        display: inline-block;
        margin-left: 10px;
      }
    }

    .boxes {
      .top {
        margin-top: 10px;
        .img {
          width: 100px;
          height: 100px;
          margin-left: 0;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        .right {
          color: #383838;
          margin-left: 0;
          .second {
            font-size: 13px;
            color: rgb(182, 181, 181);
          }
          .third {
            margin-top: 45px;
            position: relative;
            .left {
              display: inline-block;
            }
            .right {
              display: inline-block;
              position: absolute;
              right: 0;
              color: rgb(182, 181, 181);
            }
          }
        }
      }

      .bottom {
        margin-top: 10px;
        position: relative;
        font-size: 12px;
        .left {
          position: absolute;
          display: inline-block;
          right: 120px;
        }

        .right {
          position: absolute;
          display: inline-block;
          right: 0;
        }
      }
    }
  }
}

.tab {
  padding: 0 10px;
  display: flex;
  background-color: #fff;

  .text {
    margin-top: 12px;
  }
  .btn {
    background-color: #383838;
    color: #fff;
    border-radius: 30px;
    padding: 0 30px;
    margin-left: 125px;
  }
}
</style>