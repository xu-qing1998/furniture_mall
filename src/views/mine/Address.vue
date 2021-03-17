<template>
  <div>
    <van-nav-bar
      title="我的收货地址"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="body">
      <div
        v-for="item in addressList"
        :key="item.id"
        class="box"
      >
        <!-- 姓名 号码 -->
        <div class="contines">
          <div class="up">
            <!-- 上 -->
            <div class="left">
              <div class="name">{{item.username}}</div>

            </div>

            <div class="center">
              <div class="center_1">
                <span class="name">{{item.username}}</span>
                <span class="phone">{{item.phone}}</span>
              </div>
              <div class="center_2">{{item.provinces}}{{item.address}}</div>

            </div>

            <div class="right">
              <div class="edit"  @click="goEdit(item.id)">
                <van-icon
                  name="edit"
                  size="20"
                />
              </div>
            </div>

          </div>
          <div
            class="down"
            @click="deleteAddress(item.id)"
          >
            <div class="delete">删除</div>
          </div>

        </div>

        <!-- 下 -->

      </div>

      <div
        class="add"
        @click="addAddress"
      >
        <van-button block>添加收货地址</van-button>
      </div>

    </div>

  </div>
</template>


<script>
import { reactive, toRefs } from "vue";
import xqaxios from "../../utils/axios.js";
import { useRouter } from "vue-router";

export default {
  name: "Address",
  setup() {
    const state = reactive({
      addressList: [],
    });

    const getAddress = async () => {
      let result = await xqaxios("GET", "/api/address");
      state.addressList = result.message;
    };

    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    getAddress();
    const addAddress = () => {
      router.push("/api/address/add");
    };

    const deleteAddress = async (id) => {
      let result = await xqaxios("POST", "/api/deleteAddress", {"id":id});
      window.location.reload();
    };

    const goEdit=(id)=>{
        router.push(`/api/address/edit/${id}`)
    }

    return { ...toRefs(state), onClickLeft, addAddress, deleteAddress,goEdit };
  },
};
</script>

<style scoped lang="less">
.body {
  background-color: #e6e6e6;
  padding: 60px 10px 10px 0;

  height: 600px;
  position: relative;
  .box {
    font-size: 12px;
    padding: 10px;
    border-radius: 10px;
    .contines {
      background-color: #fff;
      .up {
        display: flex;
        margin-bottom: 20px;

        border-bottom: 1px solid rgba(102, 102, 102, 0.178);
        padding: 10px 0;
        .left {
          width: 30px;
          position: relative;
          .name {
            position: absolute;
            background-color: #f7e3c99f;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            top: 50%;
            margin-top:-15px;
            margin-right:10px;
            left: 5px;
            color: rgb(250, 142, 0);
          }
        }

        .center {
          flex: 1;
          margin-left:10px;
          .center_1 {
            .name {
              display: inline-block;
              font-size: 16px;
              margin-right: 10px;
              color: #413f3fe8;
            }
            .phone {
              display: inline-block;
              color: #c2bfbfd5;
            }
          }
          .center_2 {
            font-size: 14px;
            font-size: 16px;
          }
        }

        .right {
          width: 30px;
          position: relative;
          .edit {
            position: absolute;
            top: 15px;
            right: 10px;
          }
        }
        
      }
      .down {
          height: 20px;
          position: relative;
          .delete {
            position: absolute;
            right:10px;
            bottom:5px;
            text-align: right;
            color: #413f3fe8;
          }
        }
    }
  }

  .add {
    position: fixed;
    bottom: 0;
    .van-button {
      width: 320px;
      background-color: #ff4200;
      border-radius: 20px;
      margin-left: 23px;
      color: #fff;
    }
  }
}
</style>