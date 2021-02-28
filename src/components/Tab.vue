<template>
    <div>
        <ul v-for="item in List" :key="item.id" class="box">
          <list class="list">
            <span>{{item.name}}</span>
            <van-icon name="arrow" />
          </list>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: "Tab",
  props: {
   List:[]
  },
}; 
    

</script>


<style scoped lang="less">
  .box{
    padding:0 30px;
    .list{
      padding:15px 0;
      display:flex;
      justify-content: space-between;
      border-bottom:1px #c0c0c0 solid;
  }
  }
  

</style>
    
