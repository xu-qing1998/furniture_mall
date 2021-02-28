<template>
    <div class="continer">
        
        <div class="big">{{title.big_title}}</div>
        <div class="small">{{title.small_title}}</div>

    </div>
</template>

<script lang='ts'>
export default {
  name: "Title",
  props: {
   title:{}
  },
};
</script>

<style scoped lang="less">
    .continer{
        text-align:center;
        .big{
            
            font-size: 18px;
            font-weight:bold;
        
            }
        .small{
            padding-top:10px;
            font-size: 14px;
            color:#888;
        }

    }
   
</style>