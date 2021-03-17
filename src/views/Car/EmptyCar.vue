<template>
    <div>
         <div class="img">
      <img src="../../assets/car.png" />
      <div class="toast">购物车还是空的</div>
      <router-link :to="'/'"><button >进店逛逛吧</button></router-link>
    </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"EmptyCar"
    
}
</script>

<style lang="less" scoped>
.img {
  font-size: 30px;
 font-family: cursive;
  img {
    margin-left: 70px;
    margin-top: 40px;
  }
  .toast {
    margin-left: 90px;
    margin-top: 20px;
  }
  button {
    width: 150px;
    height: 50px;
    font-size:22px;
    border-radius: 20px;
    background-color:#fb5039;
    margin-top: 30px;
    margin-left: 115px;
    border:0;
    color:#000  ;
}
}

</style>