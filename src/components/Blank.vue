<template>
  <div>
    <div
      class="sign"
      v-for="item in blankList"
      :key="item.image_id"
      style="height:30px"
    >
      <img :src="item.image_url" />
    </div>
  </div>
</template>

<script lang='ts'>
export default {
   
   name:'Sign',
   props:{
       blankList:[]
   },


}
</script>
