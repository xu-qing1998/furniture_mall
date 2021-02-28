<template>
  <div id="qrCode">
    <div id="code"></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import QRcode from "qrcode";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  name: "QRcode",
  setup() {
    const state = {
      msg: "欢迎来到Cabana家具店",
      code: "",
    };

    const useqrcode = () => {
      const canvas = document.getElementById("canvas");
      QRcode.toCanvas(
        canvas,
        state.msg,
      );
    };
    onMounted(() => {
        useqrcode();
    });

    return { ...toRefs(state), useqrcode };
  },
});
</script>

<style scoped lang="less">
 #canvas{
   margin-top:50px;
   margin-left:120px;
 }
</style>