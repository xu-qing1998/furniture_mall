<template>
<div>
   
    <van-nav-bar
  title=" 添加收货地址"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-form @submit="onSubmit">
  <van-field
    v-model="state.username"
    label="收货人"
    placeholder="收货人"
    :rules="[{ required: true, message: '请填写收货人' }]"
  />
  <van-field
    v-model="state.phone"
    label="手机号码"
    placeholder="手机号码"
    :rules="[{ required: true, message: '请填写手机号码' }]"
  />
  <van-field
    v-model="state.province"
    label="选择地区"
    placeholder="省、市、区"
    :rules="[{ required: true, message: '选择填写地区' }]"
  />
  <van-field
    v-model="state.address"
    label="详细地址"
    placeholder="详细地址"
    :rules="[{ required: true, message: '请填写详细地址' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      保存
    </van-button>
  </div>
</van-form>
</div>
</template>

<script>
import { Toast } from 'vant'
import { defineComponent,ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import xqaxios from "../../utils/axios.js"
export default defineComponent ({
    name:"AddAddress",
    setup() {
        const router=useRouter()
        const state=reactive({
            username:'',
            phone:'',
            province:'',
            address:''
        })
        const onClickLeft=()=>{
            router.go(-1)

        }
        const onSubmit = (values) => {
            addAddress(state);
        
    };

     const addAddress = async (goods) => {
      let result = await xqaxios("POST", "/api/addAddress",goods);
      router.go(-1)

        };  


      
        return{onClickLeft,state,onSubmit}
    }

})
</script>

<style scoped lang="less">
    /deep/.van-button--primary {
    color: #fff;
    background-color: #ff4400;
    border: 1px solid #ff4400;
}

</style>