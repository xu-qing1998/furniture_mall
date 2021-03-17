<template>
    <div>
        <van-nav-bar
  title="我的订单"
  left-arrow
  @click-left="onClickLeft"
  fixed
/>
    <div class="contents">
          <div
            v-for="item in List"
            :key="item.id"
          >
            <div class="top">
              <div class="img">
                <img
                  :src="item.imgUrl"
                  alt=""
                >
              </div>
              <div class="right">
                <div class="first">{{item.name}}</div>
                <div class="second">{{item.title}}</div>
                <div class="third">
                  <span class="left">￥{{item.price/100}}</span>
                  <span class="right">x{{item.count}}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
    name:'myOrder',
    setup(){
        const router=useRouter()
        const onClickLeft = () => {
            router.push('/personal')
        };
        const List = JSON.parse(sessionStorage.getItem("orderList"));

        return{onClickLeft,List}
    }
    
})
</script>

<style lang="less" scoped>
    .contents{
        padding-top:46px;
        background-color:#f0f0f0;
        height:620px;
        .top{
            padding:15px;
            margin-top:20px;
            background-color: #fff;
            border-radius:10px;
            display:flex;
            .img{
                width:100px;
                height:100px;
                img{
                    border-radius:10px;
                    width:100%;
                    height:100%;

                }
            }
            .right{
                margin-left: 10px;
                .first{
                    font-weight: 600;
                }
                .second{
                    color:#3f3d3d;
                    font-size:14px;
                }
                .third{
                    margin-top:20px;
                    display:flex;
                    justify-content: space-between;
                }
            }
        }
    }

</style>