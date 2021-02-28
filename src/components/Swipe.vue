<template>
    <div>
         <van-swipe
      :autoplay="5000"
      class="swipe"
    >
      <van-swipe-item
        v-for="item in lunboList"
        :key="item.image_id"
      >
        <img :src="item.image_url" />
      </van-swipe-item>
    </van-swipe>
    </div>
</template>

<script lang='ts'>
export default {
   
   name:'Swipe',
   props:{
       lunboList:[]
   },


}
</script>

<style scoped lang="less">
  .swipe {
  width: 750rpx;
  height: 950rpx;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
