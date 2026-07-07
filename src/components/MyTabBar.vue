<template>
  <!-- Tabbar属性 route是否开启路由模式 -->
  <van-tabbar v-model="tabbarActive" :route="true" :placeholder="true">
    <!-- TabberItem属性 to点击后跳转的目标路由对象，等同于Vue Router 的to属性 -->
    <!-- v-for列表渲染 -->
    <van-tabbar-item v-for="item in tabbarData" :to="item.url">
      <span> {{ item.text }}</span>
      <template #icon="props">
        <img :src="props.active ? item.active : item.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
//tabbar的索引值
const tabbarActive = ref(0)
//tabbar数据
const tabbarData = ref([
  {
    text: '首页 ', //文本
    active: '../src/assets/images/home_active.png',
    inactive: '../src/assets/images/home.png',
    url: '/shouye', //跳转目标地址
  },
  {
    text: '菜单', //文本
    active: '../src/assets/images/menu_active.png',
    inactive: '../src/assets/images/menu.png',
    url: '/caidan', //跳转目标地址
  },
  {
    text: '购物袋', //文本

    active: '../src/assets/images/shopbag_active.png',
    inactive: '../src/assets/images/shopbag.png',
    url: '/gouwudai', //跳转目标地址
  },
  {
    text: 'Dengshengyu', //文本
    active: '../src/assets/images/my_active.png',
    inactive: '../src/assets/images/my.png',
    url: '/wode', //跳转目标地址
  },
])
</script>

<style lang="scss" scoped></style>
