<template>
  <div class="body">
    <div class="dd">
      <van-form
        @submit="onSubmit"
        class="form"
      >
        <van-field
          v-model="state.userName"
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
          <van-button
            round
            block
            type="info"
            native-type="submit"
            class="button"
            @click="onSubmit"
          >登录</van-button>
          <van-button
            round
            block
            type="info"
            native-type="submit"
            class="button"
            :to="'/api/register'"
          >注册</van-button>
        </div>
      </van-form>

    </div>

  </div>
</template>

<script>
import { reactive, ref } from "vue";
import xqaxios from "../../utils/axios.js";
import checkUrl from "../../utils/api.js";
import { Toast } from "vant";
export default {
  name: "Login",
  setup(props, context) {
    const state = reactive({
      userName: "",
      password: "",
      list: {},
      userList: [],
      name: "",
      login: false,
    });
    let psTrue = false;
    const checkOut = async () => {
      let result = await xqaxios("GET", "/api/login");
      state.userList = result.message;
    };

    checkOut();
    const onSubmit = (values) => {
      console.log("submit", values, "333333333333");
      console.log(state.userList, "kkkkkkkkkk");
      const isright = state.userList.find((item) => {
        if (
          item.userName == state.userName &&
          item.password == state.password
        ) {
          let user = JSON.stringify(item);
          sessionStorage.user = user;
          sessionStorage.isLogin = true;
          return true;
        } else {
          return false;
        }
      });

      psTrue = isright;
      context.emit("func", state.login, state.name);
      if (psTrue) {
        Toast("登录成功");
        window.location.reload();
      } else {
        Toast("用户名或密码错误请重新输入！！");
      }
    };

    // const send=()=>{

    // }

    return {
      state,
      onSubmit,
      // send
    };
  },
};
</script>


<style scoped lang="less">
.body {
  .dd {
    width: 375px;
    height: 621px;
    background-image: url("../../assets/bj.jpg");
    background-size: cover;
    .form {
      opacity: 0.7;
      position: relative;
      font-size: 20px !important;
      top: 200px;
      .van-cell {
        line-height: 50px;
        height: 50px;
        margin-top: 30px;
        border-radius: 28px;
        width: 280px;
        margin-left: 45px;
        .van-cell__title {
          /deep/span {
            font-size: 20px;
          }
        }
      }
      .button {
        width: 200px;
        margin-top: 20px;
        margin-left: -100px;
        left: 50%;
        background-color: rgba(233, 233, 233, 0.788);
        border: 0;
      }
    }
  }
}
</style>