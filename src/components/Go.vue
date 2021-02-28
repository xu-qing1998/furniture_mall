<template>
  <div>
    <div
      class="sign"
      v-for="item in goList"
      :key="item.image_id"
    >
      <img :src="item.image_url" />
    </div>
  </div>
</template>

<script lang='ts'>
export default {
   
   name:'Go',
   props:{
       goList:[]
   },


}
</script>

<style scoped lang="less">
.sign {
  width: 750rpx;
  height: 70rpx;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom:20px;
}
</style>