<template>
  <div>
      <!-- 轮播图 -->
    <van-swipe
      :autoplay="3000"
      class="swipe"
    >
      <van-swipe-item
        v-for="item in lunboList"
        :key="item"
      >
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script lang='ts'>
export default {
  name: "GoodsSwipe",
  props: {
    lunboList: [],
  },
};
</script>

<style scoped lang="less">
.swipe {
  width: 750rpx;
  height: 800rpx;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>