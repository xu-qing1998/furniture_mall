<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>
      <van-cell
        title="头像"
        isLink
        @click="showPopup"
      >
        <div v-if="imageUrl">
          <img :src="imageUrl" />
        </div>
      </van-cell>
      <van-cell
        title="用户名"
        isLink
      >{{name}}</van-cell>
      <van-cell
        title="性别"
        isLink
        @click="changeSex"
      >{{gender}}
      </van-cell>
      <van-cell
        title="生日"
        isLink
        @click="changeBirth"
      >{{birthday}}</van-cell>
      <!-- <van-cell
        title="地区"
        isLink
        @click="changeRegion"
      /> -->
      <van-cell
        title="收货地址"
        isLink
        :to="'/api/address'"
      />
    </van-cell-group>

    <!-- 头像弹出层 -->
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-uploader
        v-model="fileList"
        multiple
      />
      <button @click="ensure">确定</button>
    </van-popup>

    <!-- 性别弹出层 -->
    <van-popup
      v-model:show="sex"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <!-- <van-cell-group >
  <van-cell  value="男" @click="choose"   id="sex"/>
  <van-cell  value="女" @click="choose" id="sex" />
  <van-cell  value="保密" @click="choose"  id="sex"/>
</van-cell-group> -->
      <van-button
        type="default"
        block
        @click="choose"
        id="sex"
      >男</van-button>
      <van-button
        type="default"
        block
        id="sex"
        @click="choose"
      >女</van-button>
      <van-button
        type="default"
        block
        id="sex"
        @click="choose"
      >保密</van-button>
    </van-popup>

    <!-- 生日弹出层 -->
    <van-popup
      v-model:show="birth"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @click="chooseDay"
      />

    </van-popup>

    <!-- 地区弹出层 -->
    <!-- <van-popup
      v-model:show="regin"
      position="bottom"
      :style="{ height: '60%' }"
    >
    <van-area title="标题" :area-list="areaList" value="110101" />
    </van-popup> -->

  </div>

</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { toRefs, ref, reactive } from "vue";
import { Toast } from "vant";
export default {
  name: "Message",
  setup() {
    const state = reactive({
      name: "",
      imageUrl: "",
      gender: "",
      birthday:''
    });
    const router = useRouter();
    const show = ref(false);
    const sex = ref(false);
    const birth = ref(false);
    const regin = ref(false);
    const currentDate = ref(new Date());
    
    const onClickLeft = () => {
      router.push("/personal");
    };
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file.target);
    };

    const showPopup = () => {
      show.value = true;
    };

    const changeSex = () => {
      sex.value = true;
    };
    const changeBirth = () => {
      birth.value = true;
    };

    const changeRegion = () => {
      regin.value = true;
    };
    const getName = () => {
      state.name = JSON.parse(sessionStorage.user).userName;
    };
    const ensure = () => {
      show.value = false;
    };

    const choose = () => {
      let value = document.getElementById("sex").innerText;
      state.gender = value;
      Toast("修改成功");
      sex.value = false;
    };

    const chooseDay=()=>{
        state.birthday=currentDate.value.toLocaleDateString()
        Toast("修改成功");
        birth.value = false;

    }
   

    getName();
    return {
      onClickLeft,
      ...toRefs(state),
      show,
      showPopup,
      afterRead,
      ensure,
      changeSex,
      changeBirth,
      sex,
      birth,
      changeRegion,
      regin,
      choose,
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate,
      chooseDay
    };
  },
};
</script>

<style scoped lang="less">
</style>