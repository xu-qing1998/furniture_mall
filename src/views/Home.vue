<template>
  <div class="box">
    <van-nav-bar
      fixed
      title="Cabana家具店"
    />
    <!-- 轮播大图 -->
    <swipe :lunboList="lunboList"></swipe>

    <!-- 品牌推荐和空行 -->
    <sign :generalList="generalList"></sign>

    <!-- 品牌图标 -->
    <!-- <van-swipe
      :autoplay="7000"
      class="swipe_1"
    >
      <van-swipe-item
        v-for="item in iconList"
        :key="item.image_id"
      >
        <img :src="item.image_url" />
      </van-swipe-item>
    </van-swipe> -->
    
    <div class="big">
        <div class="middle">
    <div v-for="item in iconList" :key="item.image_id" class="small" >
        <img :src="item.image_url"/>
    </div>
    </div>
    </div>
    <!-- <grid :gridList="gridList"></grid> -->
    
    <!-- 新品上架和空行 -->
    <sign :generalList="generalList2"></sign>

    <!-- 推荐商品 -->
    <grid :gridList="gridList"></grid>

    <blank :blankList="blankList"></blank>

    <!-- 去逛逛 -->
    <go :goList="goList"></go>

    <!-- 自然之美 -->
    <div class="swipe">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/FgEbAWyAaIGAHvMyHSwJt2q6bcLc.jpg" />
    </div>

    <grid
      :gridList="goodsNatureList"
      class="box"
    ></grid>

    <!-- 去逛逛 -->
    <go
      :goList="goList"
      class="top"
    ></go>

    <!-- 玻璃艺术品 -->
    <div class="swipe">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/Frva2FhvXeg59Dsvr9xCl4hMAv_c.jpg" />
    </div>
    <grid :gridList="cupList"></grid>

    <!-- 椅子 -->
    <blank :blankList="blankList"></blank>
    <div class="swipe">
      <img src="http://img01.yzcdn.cn/upload_files/2020/04/03/FtmsDt0GVeLpyt6mRcSTOodJ4N3k.jpg" />

    </div>
    <blank :blankList="blankList"></blank>
    <blank :blankList="blankList"></blank>
    <div class="sign">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/Fk8-fjW3Tp433lwKEUW0EI6ztgOi.jpg" />
    </div>
    <grid :gridList="chairList"></grid>
    <!-- 去逛逛 -->
    <go
      :goList="goList"
      class="top"
    ></go>
    <blank :blankList="blankList"></blank>
    <div class="sign">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/FvgGm8ilpxn1qIXqjBCJ16Zgs2E5.jpg" />
    </div>

    <swipe :lunboList="easyList"></swipe>
    <grid :gridList="chair2List"></grid>

    <!-- 去逛逛 -->
    <go
      :goList="goList"
      class="top"
    ></go>
    <blank :blankList="blankList"></blank>
    <div class="sign">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/FnA__hIhfGzgI4VCSal2CqCAviC5.jpg" />
    </div>
    <grid :gridList="officeList"></grid>
    <blank :blankList="blankList"></blank>
    <blank :blankList="blankList"></blank>
    <!-- 办公 -->
    <div class="sign">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/26/Fi71FYXsImfkdQh8qYcTectuvGuF.jpg" />
    </div>

    <swipe :lunboList="biglightList"></swipe>
    <grid :gridList="lamps"></grid>
    <!-- 去逛逛 -->
    <go
      :goList="goList"
      class="top"
    ></go>
    <blank :blankList="blankList"></blank>
    <blank :blankList="blankList"></blank>

    <!-- FREDERICIA -->
    <div class="sign">
      <img src="http://img01.yzcdn.cn/upload_files/2020/03/25/Fs9ICO0eUh214dIynQBwblXvI0MA.jpg" />
    </div>
    <swipe :lunboList="deskList"></swipe>
    <grid :gridList="woodsList"></grid>

    <blank :blankList="blankList"></blank>
    

  </div>

</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import swipe from "../components/Swipe.vue";
import sign from "../components/Sign.vue";
import blank from "../components/Blank.vue";
import Grid from "../components/Grid.vue";
import Go from "../components/Go.vue";
import Title from "../components/Title.vue";
import xqaxios from "../utils/axios.js";
import {
  LunboUrl,
  generalUrl,
  blankUrl,
  goUrl,
  general2Url,
  iconUrl,
  goodsNatureUrl,
  TitleUrl,
  cupUrl,
  chairUrl,
  easyUrl,
  chair2Url,
  officeUrl,
  bigLightUrl,
  lampsUrl,
  goodsUrl,
  deskUrl,
  woodsUrl,
} from "../utils/api.js";

export default defineComponent({
  name: "Home",
  components: {
    swipe,
    sign,
    blank,
    Grid,
    Go,
    Title,
  
  },
  setup() {
    const state = reactive({
      lunboList: [],
      generalList: [],
      iconList: [],
      generalList2: [],
      blankList: [],
      gridList: [],
      goList: [],
      goodsNatureList: [],
      titleList: [],
      cupList: [],
      chairList: [],
      easyList: [],
      chair2List: [],
      officeList: [],
      biglightList: [],
      lamps: [],
      deskList: [],
      woodsList: [],
    });

    const getLunbo = async () => {
      let result = await xqaxios("GET", LunboUrl);
      state.lunboList = result.message;
    };
    const getGeneral = async () => {
      let result = await xqaxios("GET", generalUrl);
      state.generalList = result.message;
    };

    const getblank = async () => {
      let result = await xqaxios("GET", blankUrl);
      state.blankList = result.message;
    };

    const getgo = async () => {
      let result = await xqaxios("GET", goUrl);
      state.goList = result.message;
    };

    const getGeneral2 = async () => {
      let result = await xqaxios("GET", general2Url);
      state.generalList2 = result.message;
    };

    const getIcon = async () => {
      let result = await xqaxios("GET", iconUrl);
      state.iconList = result.message;
    };

    const getgoods = async () => {
      let result = await xqaxios("GET", goodsUrl);
      state.gridList = result.message;
    };

    const getgoodsNature = async () => {
      let result = await xqaxios("GET", goodsNatureUrl);
      state.goodsNatureList = result.message;
    };

    const getTitle = async () => {
      let result = await xqaxios("GET", TitleUrl);
      state.titleList = result.message;
    };

    const getCup = async () => {
      let result = await xqaxios("GET", cupUrl);
      state.cupList = result.message;
    };

    const getChair = async () => {
      let result = await xqaxios("GET", chairUrl);
      state.chairList = result.message;
    };

    const getEasy = async () => {
      let result = await xqaxios("GET", easyUrl);
      state.easyList = result.message;
    };

    const getchair2 = async () => {
      let result = await xqaxios("GET", chair2Url);
      state.chair2List = result.message;
    };

    const getoffice = async () => {
      let result = await xqaxios("GET", officeUrl);
      state.officeList = result.message;
    };

    const getbiglight = async () => {
      let result = await xqaxios("GET", bigLightUrl);
      state.biglightList = result.message;
    };

    const getlamps = async () => {
      let result = await xqaxios("GET", lampsUrl);
      state.lamps = result.message;
    };

    const getdesk = async () => {
      let result = await xqaxios("GET", deskUrl);
      state.deskList = result.message;
    };

    const getwoods = async () => {
      let result = await xqaxios("GET", woodsUrl);
      state.woodsList = result.message;
    };

    getLunbo();
    getGeneral();
    getblank();
    getGeneral2();
    getIcon();
    getgoods();
    getgo();
    getgoodsNature();
    getTitle();
    getCup();
    getChair();
    getEasy();
    getchair2();
    getoffice();
    getbiglight();
    getlamps();
    getdesk();
    getwoods();
    return { ...toRefs(state) };
  },
});
</script>

<style lang='less'>
.box {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow: hidden;
  .swipe_1 {
    width: 750rpx;
    height: 200rpx;
    overflow: hidden;
    img {
      width: 100px;
      height: 100px;
    }
  }

  .swipe {
    width: 750rpx;
    height: 900rpx;
    overflow: hidden;
    margin-bottom: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .top {
    margin-top: 30px;
  }

  .sign {
    width: 750rpx;
    height: 70rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .big{
    margin-top:30px;
    width:100%;
    height:100px;
    overflow-x: scroll;
    .middle{
      width:1200px;
         .small{
      width:80px;
      height:80px;
      display: inline-block;
        img{
          width:80px;
          height:80px;
        }
    
    }
    }
   
  }
}
</style>