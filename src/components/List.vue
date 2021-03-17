<template>
    <div>
        <div class="head">
      <van-grid
        :gutter="3"
        :border="false"
        :column-num="2"
      >
        <van-grid-item
          v-for="item in goodsList"
          :key="item"
          :to="'/goodsInfo/' + item.id"
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
    </div>
</template>
<script lang="ts">
export default {
    name:'List',
    props: {
    goodsList: [],
  },
  setup(props){
    const ss=()=>{
      console.log(props.goodsList,"kkkkkkkkkkkk")
    }
    ss();
  }

    
}
</script>

<style scoped lang="less">
.head {
  .foot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    width:149px;
    padding:0 8px;
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
      width: 149px;
      display: flex;
      font-weight:550;
      color:#2c2c2c;
      justify-content: space-between;
      margin-top:15px;
      .car{
        border:1px solid #2c2c2c;
        border-radius: 50%;
      }
    }
  }
}
</style>