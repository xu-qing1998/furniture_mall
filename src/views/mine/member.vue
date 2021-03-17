<template>
  <div>
    <van-nav-bar
      title="会员码"
      left-arrow
      @click-left="onClickLeft"
    />
    <q-rcode :name="state.name"></q-rcode>

    

  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import QRcode from "../../components/QRcode.vue";
import Login from "../login/Login.vue"
import { ref,reactive } from 'vue';
export default {
  name: "Member",
  components: { QRcode,Login },
  props:["name"],
  setup(props) {
    const state=reactive({
      name:sessionStorage
    })
    const router = useRouter();
    const onClickLeft = () => {
      router.push("/personal");
    };

    return { onClickLeft ,state};
  },
};
</script>

