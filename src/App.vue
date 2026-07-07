<template>
  <!-- 路由容器（路由出口）就是当前url路由对应显示组件的位置 -->
  <RouterView />
  <!-- 使用自定义组件MyTabBar -->
  <MyTabBar></MyTabBar>
</template>
<script setup>
//导入自定义组件myTabbar
import MyTabBar from './components/MyTabBar.vue'
</script>
<style lang="scss" scoped></style>
