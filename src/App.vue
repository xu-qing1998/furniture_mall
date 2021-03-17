
<template>
  <div>
    <div class="container">
      <router-view />
      <van-tabbar v-model="active" v-show='$route.meta.showTabbar' fixed="true" placeholder="true" >
        <van-tabbar-item
          icon="home-o"
          to='/'
        >首页</van-tabbar-item>
        <van-tabbar-item
          icon="bag-o"
          to='/classify'
        >分类</van-tabbar-item>
        <van-tabbar-item to='/car'>
          <van-action-bar-icon
            icon="shopping-cart-o"
            text="购物车"
          />
        </van-tabbar-item>
        <van-tabbar-item
          icon="friends-o"
          to='/personal'
        >个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style lang="less" >
* {
  margin: 0px;
  padding: 0px;
}
.container {
  
 /deep/ .van-tabbar--fixed {
    z-index: 999;
}
  .van-tabbar-item--active {
    background: #eee;
    .van-action-bar-icon {
      color: rgba(12, 168, 177, 0.801);
      background-color: transparent;
      .van-icon-shopping-cart-o {
        color: rgba(12, 168, 177, 0.801);
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const active = ref(0);
    return { active };
  },
  name: "Home",
  components: {},
});
</script>



