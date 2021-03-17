<template>
  <div>
    <van-nav-bar
      title="家具分类"
      @click-left="onClickLeft"
      fixed
      :z-index="999"
    >
      <template #left>
        <van-icon
          name="wap-home-o"
          size="28"
          color="black"
        />
      </template>
    </van-nav-bar>
    <div>
      <van-sticky :offset-top="46">
        <van-search
          v-model="value"
          placeholder="搜索商品"
          input-align="center"
          disabled 
          @click="toSearch"
        />
      </van-sticky>
    </div>

    <van-tabs
      v-model:active="active"
      class="tab"
    >
      <van-tab title="家具">
        <van-list>
          <van-cell
            v-for="item in furnitureList"
            :key="item.name"
            :title="item.name"
            :to="'/category/'+item.name"
            is-link
          />
        </van-list>
      </van-tab>
      <van-tab title="灯具">
        <van-list>
          <van-cell
            v-for="item in lamp"
            :key="item.name"
            :title="item.name"
           :to="'/category/'+item.name"
           is-link
          />
        </van-list>
      </van-tab>

      <van-tab title="配饰">
        <van-list>
          <van-cell
            v-for="item in accessory"
            :key="item.name"
            :title="item.name"
           :to="'/category/'+item.name"
           is-link
          />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>

</template>
<script lang="ts">
import { defineComponent, reactive, toRefs,ref } from "vue";
import Tab from "../components/Tab.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { Tab },
  name: "Classify",
  setup() {
     const active = ref(0);
    const state = reactive({

      furnitureList: [
        { name: "餐椅" },
        { name: "餐桌" },
        { name: "沙发" },
        { name: "咖啡桌" },
        { name: "柜架" },
        { name: "地毯" },
        { name: "吧椅板凳" },
        { name: "书桌" },
        { name: "办公椅" },
      ],
      lamp: [
        { name: "吊灯" },
        { name: "台灯" },
        { name: "落地灯" },
        { name: "壁灯" },
        { name: "吸顶灯" },
      ],
      accessory: [
        { name: "玻璃器皿" },
        { name: "咖啡茶具" },
        { name: "装饰画" },
        { name: "花瓶" },
        { name: "餐盘刀叉" },
        { name: "靠垫毯子" },
        { name: "香氛" },
        { name: "镜子" },
        { name: "洗浴用品" },
      ],
    });
    const router = useRouter();
    const onClickLeft = () => {
      router.push("/");
    };
    const toSearch=()=>{
      router.push("/search")
    }
    return { ...toRefs(state), onClickLeft,active ,toSearch};
  },
});
</script>

<style scoped lang="less">
.tab {
  padding-top: 50px;
  /deep/.van-tab {
    height: 24px;
    border-right: 1px #f0f0f0 solid;
    /deep/.van-tabs__line {
      background-position: #fff;
    }
  }
  .van-cell{
    padding:10px 26px;
  }
}
</style>