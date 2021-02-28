<template>
  <div>
    <van-nav-bar
      title="会员码"
      left-arrow
      @click-left="onClickLeft"
    />
    <q-rcode></q-rcode>

    

  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import QRcode from "../../components/QRcode.vue";
import Login from "../login/Login.vue"
import { ref } from 'vue';
export default {
  name: "Member",
  components: { QRcode,Login },
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.push("/personal");
    };

    return { onClickLeft };
  },
};
</script>

