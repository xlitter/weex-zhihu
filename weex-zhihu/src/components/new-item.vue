<template>
  <cell class="row">
    <div class="item">
      <text class="content">{{item.title}}</text>
      <image class="img" :src="item.images[0]"></image>
    </div>
  </cell>
</template>


<script>
  export default {
    props: ['item']

  };
</script>

<style>
  .item {
    flex-direction: row;
    justify-content: space-between;
    height: 180px;
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #fff;
  }

  .content {
    flex: 2;
    font-size: 32px;
    height: 180px;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    text-align: left;
  }

  .img {
    flex: 1;
    height: 180px;
  }
</style>