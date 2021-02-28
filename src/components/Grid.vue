<template>
  <div>
    <van-grid
      :gutter="3"
      class="grid"
      :border="false"
    >
      <van-grid-item
        v-for="item in gridList"
        :key="item.image_url"
        :to="'/goodsInfo/' + item.id"
        class="box"
      >
        <van-image :src="item.image_url" />
        <div class="content">{{item.title}}</div>
        <div class="content">￥{{item.price}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Grid",
  props: {
    gridList: [],
  },
};
</script>

<style scoped lang="less">
.van-grid {
  margin-top: 20px;
  /deep/ .van-grid-item {
      padding:0;
       /deep/ .van-grid-item__content {
           padding-top:0;
           padding-left:0;
           padding-right:0;
           padding-bottom:0;
           .content{
               width:100%;
               height:35px;
               font-size: 12px;
               font-weight:bold;
               overflow:hidden;
               text-overflow:ellipsis;
               text-align:center;

           }
  }
  }
}
</style>