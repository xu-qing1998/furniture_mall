<template>
  <div>
    <van-nav-bar
      left-arrow
      placeholder="true"
      @click-left="onClickLeft"
    >
      <template #title>
        商品搜索
      </template>
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      />
    </form>
     <list :goodsList="goodsList"></list>
  </div>
</template>

<script lang="ts">
import { ref,reactive,toRefs } from "vue";
import { Toast } from "vant";
import xqaxios from "../../utils/axios.js";
import {useRouter} from 'vue-router';
import List from '../../components/List.vue'
export default {
  name: "Search",
  components:{List},
  setup() {
    const state=reactive({
        goodsList:[]
    })

    const value = ref("");
    const getGoodsList = async (name) => {
        console.log(name,"9999999999");
      let result = await xqaxios("GET", "/api/search/" + `${name}`);
      state.goodsList = result.message;
    };
    const onSearch = (val) => {
        console.log(val);
        getGoodsList(val)
    };
    const router=useRouter();
    
    const onClickLeft=()=>{
      router.push('/classify')
    }

    return {
      value,
      onSearch,
      onClickLeft,
      ...toRefs(state)
    };
  },
};
</script>