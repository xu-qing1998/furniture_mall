<template>
  <div>
    <van-nav-bar
      title=" 编辑收货地址"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="收货人"
        placeholder="收货人"
        :rules="[{ required: true, message: '请填写收货人' }]"
      />
      <van-field
        v-model="phone"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="provinces"
        label="选择地区"
        placeholder="省、市、区"
        :rules="[{ required: true, message: '选择填写地区' }]"
      />
      <van-field
        v-model="address"
        label="详细地址"
        placeholder="详细地址"
        :rules="[{ required: true, message: '请填写详细地址' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
        >
          保存
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import xqaxios from "../../utils/axios.js";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "EditAddress",
  props: ["id"],
  setup(props) {
    const state = reactive({
      id: props.id,
      address: {},
      username: "",
      phone: "",
      provinces: "",
      address:'',
      msg: [],
    });
    const getAddressByid = async (id) => {
      let result = await xqaxios("GET", "/api/oneaddress/" + `${id}`);
      state.msg = result.message[0];
      state.username=state.msg.username;
      state.phone=state.msg.phone;
      state.provinces=state.msg.provinces;
      state.address=state.msg.address;
      console.log(state.msg, "sssssssss");
    };
    getAddressByid(state.id);

     const editAddress = async (goods) => {
      let result = await xqaxios("POST", "/api/editAddress",goods);
      router.go(-1)

        };  
    const onSubmit = (value) => {
       editAddress(state);
    };
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    return { ...toRefs(state), onSubmit, onClickLeft };
  },
});
</script>

<style scoped lang="less">
/deep/.van-button--primary {
  color: #fff;
  background-color: #ff4400;
  border: 1px solid #ff4400;
}
</style>