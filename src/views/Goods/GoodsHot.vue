<template>
  <div>
    <van-nav-bar
      title=" 店铺热榜"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="image">
      <img src="../../assets/hot.jpg" />
     
    </div>

    <div class="content">
        <div v-for="item in hotList" :key="item.id">
            <div class="box">
                <div class="left"><img :src="item.pictures.split(',')[0]"/>
                 <div class="number">{{item.ranking}}</div></div>
                <div class="right">
                    <div>{{item.title}}</div>
                    <div class="down">￥{{item.min_price}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<script lang="ts">
import { useRouter } from "vue-router";
import xqaxios from "../../utils/axios.js";
import { reactive, toRefs } from "vue";
export default {
  name: "GoodsHot",
  setup() {
    const state = reactive({
      hotList: [],
    });
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    const getHot = async () => {
      let result = await xqaxios("GET", "/api/hot");
      state.hotList = result.message;
      console.log(state.hotList,"222222222")
    };
    getHot();

    return { onClickLeft,...toRefs(state) };
  },
};
</script>

<style lang="less" scoped>
.image {
  width: 100%;
  height: 120px;
  img {
    width: 100%;
    height: 100%;
  }
}

.content{
    padding:10px;
    background-color: #e8e8e8;
    .box{
        padding:0;
        background-color: #fff;
        border-radius:10px;
        height:140px;
        display:flex;
        margin-bottom:20px;
        font-size:14px;
        font-weight:bold;
        .left{
            position:relative;
            width:140px;
            img{
                width:100%;
                height:100%
            }
            .number{
                position:absolute;
                color:#fff;
                width:40px;
                height:40px;
                top:15px;
                left:10px;
                background-color:rgba(235, 155, 155, 0.418);
                border-radius:50%;
                text-align:center;
                line-height:40px;
                font-size: 20px;
            }
        }

        .right{
            flex:1;
            position:relative;
            .down{
                position:absolute;
                bottom:10px;
                left:5px;
            }
        }


}
}

</style>