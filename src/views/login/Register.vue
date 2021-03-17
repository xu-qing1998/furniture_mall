<template>
  <div>
    <van-nav-bar
      title="注册"
      left-arrow
      @click-left="onClickLeft"
      fixed="true"
    />
    <div class="body">
<van-form @submit="onSubmit">
  <van-field
    v-model="state.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="state.password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" >
      提交
    </van-button>
  </div>
</van-form>
</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {reactive} from 'vue'
import xqaxios from "../../utils/axios.js"
import { Toast } from 'vant';
export default {
  name: "Register",
  setup() {
    const route = useRouter();
    const state = reactive({
      username: '',
      password: '',
      userName:'',
      pw:''
    });
    const onSubmit = async(values) => {
      state.userName=state.username;
      state.pw=state.password;
      let result = await xqaxios("POST", "/api/register",{username:state.userName,password:state.pw});
      Toast("注册成功！！！")
      route.push("/personal");
    };
    const onClickLeft = () => {
      route.push("/personal");
    };
    return {onClickLeft, state,onSubmit,};
  },
};
</script>

<style scoped>
    .body{
        padding-top:50px;
    }
</style>