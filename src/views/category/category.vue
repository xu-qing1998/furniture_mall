<template>
  <div>
    <van-nav-bar
      left-arrow
      placeholder="true"
    @click-left="onClickLeft"
    >
      <template #title>
        {{name}}
      </template>
    </van-nav-bar>
   <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <list :goodsList="goodsList"></list>
    </van-pull-refresh>

  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import xqaxios from "../../utils/axios.js";
import {useRouter} from 'vue-router';
import { Toast } from 'vant';
import List from '../../components/List.vue'

export default defineComponent({
  name: "Category",
  props: ["name"],
  components:{List},
  setup(props, context) {
    const state = reactive({
      goodsList: [],
      name: props.name,
      List: [],
      count: 0,
      loading: false,
      finished: false,
    });
    const router=useRouter();
    const getGoodsList = async () => {
      let result = await xqaxios("GET", "/api/getlist/" + `${state.name}`);
      state.goodsList = result.message;
    };
    const onClickLeft=()=>{
      router.push('/classify')
    }
const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };
    

    getGoodsList();
    return { ...toRefs(state),onClickLeft,onRefresh,};
  },
});
</script>

<style scoped lang="less">
.head {
  .foot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    width:149px;
    padding:0 8px;
    .title {
      
      height: 20px;
      text-align: left;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .under {
      height: 20px;
      width: 149px;
      display: flex;
      font-weight:550;
      color:#2c2c2c;
      justify-content: space-between;
      margin-top:15px;
      .car{
        border:1px solid #2c2c2c;
        border-radius: 50%;
      }
    }
  }
}
</style>