<template>
  <div class="continer">
    <van-nav-bar fixed><template #title>
        {{goodsInfo.title}}
      </template>
    </van-nav-bar>
    <div class="top">
      <goods-swipe :lunboList="lunboList"></goods-swipe>
      <div class="price">
        <span>￥{{goodsInfo.min_price}}</span>
        <span v-if="goodsInfo.max_price>0">-{{goodsInfo.max_price}}</span>
      </div>
      <div class="title">
        <div class="left">{{goodsInfo.title}}</div>
        <div
          class="right"
          @click="showShare = true"
        >

          <van-icon
            name="share"
            color="#555"
            style="text-align:center"
          />
          <span>分享</span>
        </div>
        <van-share-sheet
          v-model:show="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
        />

      </div>

      <div
        v-if='goodsInfo.presaleinfo>0'
        class="presaleinfo"
      >
        <span class="radio">预售</span>
        <span>付款后{{goodsInfo.presaleinfo}}天后发货</span>
      </div>
    </div>

    <div
      class="second"
      v-if="goodsInfo.ranking>0"
    >
      <div>
        <img src="../assets/火.png" />
        <span class="desc">店铺商品热榜排行第{{goodsInfo.ranking}}名</span>
      </div>
      <van-icon name="arrow" />
    </div>

    <div class="third">
      <div class="box">
        <span class="left">运费</span>
        <span>免运费</span>
      </div>
      <div>剩余{{goodsInfo.counts}}</div>

    </div>

    <div
      class="third"
      is-link
      @click="showPopup"
    >
      <div class="box">
        <span class="left">服务</span>
        <span>{{goodsInfo.labelname}}</span>
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <div class="prop">
        <div class="title">{{smallList[0]}}</div>
        <div class="content">{{bigList[0]}}</div>
        <div class="title">{{smallList[1]}}</div>
        <div class="content">{{bigList[1]}}</div>
        <div class="title">{{smallList[2]}}</div>
        <div class="content">{{bigList[2]}}</div>
        <div><button
            class="btn"
            @click="closePopup"
          >我知道了</button></div>

      </div>

    </van-popup>

    <div class="third big">
      <div class="box">
        <span class="left">选择</span>
        <span>款式</span>
      </div>
      <van-icon name="arrow" />

    </div>

    <div class="third">
      <div class="box">
        <span class="left">
          <img
            :src="goodsInfo.logo"
            class="img"
          />
        </span>
        <span class="name">Canban家具店</span>
      </div>
      <div class="right">

        <router-link :to="'/'"><button
            class='btn'
            :to="'/'"
          >进店逛逛</button></router-link>
      </div>

    </div>

    <div
      v-html="goodsInfo.content"
      class="desc"
    ></div>

    <van-action-bar>
      <van-action-bar-icon
        icon="shop-o"
        text="店铺"
        :to="'/'"
      />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :to="'/car'"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
      />
      <van-action-bar-button
        type="danger"
        text="立即购买"
      />
    </van-action-bar>

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import xqaxios from "../utils/axios.js";
import { newUrl } from "../utils/api.js";
import axios from "axios";

import GoodsSwipe from "../components/GoodsSwipe.vue";
export default defineComponent({
  name: "GoodsInfo",
  props: ["id"],
  components: { GoodsSwipe },
  setup(props: any, context) {
    const showShare = ref(false);
    const options = [
      [
        { name: "微信", icon: "wechat" },
        { name: "朋友圈", icon: "wechat-moments" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
      ],
      [
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
        { name: "小程序码", icon: "weapp-qrcode" },
      ],
    ];
    const state: any = reactive({
      loading: true,
      id: props.id,
      goodsInfo: [],
      lunboList: [],
      smallList: [],
      bigList: [],
    });
    const getGoodsInfo = async () => {
      let result = await xqaxios("GET", newUrl + `${state.id}`);
      state.goodsInfo = result.message[0];
      state.lunboList = state.goodsInfo.pictures.split(",");
      state.smallList = state.goodsInfo.labelname.split(",");
      state.bigList = state.goodsInfo.labeldesc.split("·");
    };

    getGoodsInfo();
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const closePopup = () => {
      show.value = false;
    };
    const onSelect = () => {
      showShare.value = false;
    };

    // state.lunboList=state.goodsInfo.pictures.split(',');
    return {
      ...toRefs(state),
      show,
      showPopup,
      closePopup,
      options,
      showShare,
      onSelect,
    };
  },
});
</script>

<style scoped lang="less">
/deep/.van-swipe__track {
    padding-top: 46px;
}
.continer {
  padding-top: 0px;
  margin-top: 0;
  padding-bottom: 50px;
  font-size: 14px;
  background-color: #f0f0f0;
  /deep/ .desc {
    padding: 10px;
    background-color: #fff;
    /deep/ p {
      font-size: 16px;
      margin-bottom: 10px;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  .top {
    margin-top: 0;
    padding: 0 10px;
    background-color: #fff;
    margin-bottom: 20px;
    padding-bottom: 10px;
    .price {
      font-weight: bold;
      font-size: 20px;
    }
    .title {
      margin: 10px auto;
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      .van-popup {
        .van-share-sheet__options {
          padding: 16px 0;
          display: flex;
          justify-content: center;
        }
      }
      .left {
        line-height: 33px;
      }
      .right {
        display: flex;
        flex-direction: column;
      }
    }

    .presaleinfo {
      font-size: 12px;
      .radio {
        padding: 0 4px;
        border-radius: 4px;
        background-color: #d8d8d8;
      }
    }
  }

  .second {
    margin-top: 20px;
    padding: 10px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .desc {
      position: absolute;
      top: 615px;
    }
  }

  .third {
    margin-top: 10px;
    padding: 10px 20px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    /deep/.box {
      padding: 0;
      position: relative;
      overflow: inherit;
      .left {
        color: rgb(168, 165, 165);
        margin-right: 20px;
        .img {
          width: 50px;
          height: 50px;
        }
      }

      .name {
        font-size: 18px;
        width: 120px;
        position: absolute;
        top: 20px;
        z-index: 999;
      }
    }

    .right {
      position: relative;
      .btn {
        width: 80px;
        height: 30px;
        border: 1px solid #000;
        color: #000;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        top: 17px;
        right: 10px;
      }
    }
  }

  .big {
    height: 80px;
  }

  .van-popup {
    .prop {
      padding: 20px;
      .title {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
      }
      .content {
        margin-bottom: 10px;
        color: #b8b8b8;
      }

      .btn {
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -140px;
        width: 280px;
        height: 40px;
        background-color: #2f2f34;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
}
</style>