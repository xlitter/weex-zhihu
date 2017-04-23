<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <text v-for="item in list">{{item.name}}</text>
  </div>
</template>

<style>
  .wrapper {
    align-items: center;
    margin-top: 120px;
  }

  .title {
    font-size: 48px;
  }

  .logo {
    width: 360px;
    height: 82px;
  }
</style>

<script>
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World',
      flag: true,
      list: Array.apply(null, {
        length: 5
      }).map((v, i) => ({
        name: `name${i}`,
      }))
    },
    methods: {
      update: function (e) {
        if (this.flag) {
          this.target = 'Weex';
          this.flag = false;
        } else {
          this.target = 'World'
          this.flag = true;
        }

        console.log('target:', this.target)
      }
    }
  }
</script>