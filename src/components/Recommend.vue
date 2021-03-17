<template>
  <div class="body">
    <div class="title">更多精选商品</div>
    <van-grid
      :border="false"
      :column-num="2"
    >
      <van-grid-item
        v-for="item in recommendList"
        :key="item.id"
        @click="goInfo(item.id)"
      >
        <van-image :src="item.pictures.split(',')[0]" />
        <div class="foot">
          <div class="title">{{item.title}}</div>
          <div class="under">
            <span>￥{{item.min_price}}</span>
            <div class="car">
              <img src="../assets/购物车.png" />
            </div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script lang="ts">
import List from "./List.vue";
import xqaxios from "../utils/axios";
import { toRefs,reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Recommend",
  components: { List },
  setup() {
    const state = reactive({
      recommendList: [],
    });

    const getList = async () => {
      let result = await xqaxios("GET", "/api/recommend");
      state.recommendList = result.message;
      // console.log(state.recommendList, "jjjjjjjjjjjjj");
    };

    const router=useRouter()
    const goInfo=(id)=>{
      console.log(id,"gogogogo")
      router.push(`/goodsInfo/${id}`)
    }
    getList();

    return { ...toRefs(state),goInfo };
  },
};
</script>

<style scoped lang="less">
.body {
  padding: 10;
  padding-bottom: 30px;
  .van-grid-item {
    margin-top: 20px;
  }
  .title {
    height: 30px;
    padding: 10px 0;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
  }
  .foot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    width: 145px;
    padding: 0 8px;
    .title {
      height: 20px;
      text-align: left;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .under {
      height: 20px;
      width: 145px;
      display: flex;
      font-weight: 550;
      color: #2c2c2c;
      justify-content: space-between;
      margin-top: 15px;
      .car {
        border: 1px solid #2c2c2c;
        border-radius: 50%;
      }
    }
  }
}
</style>