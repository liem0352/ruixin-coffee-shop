<template>
  <div>
    <!-- vant按钮组件 -->
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <!-- vant的divider 分割线 -->
    <van-divider dashed :style="{ color: 'red', borderdColor: 'red', padding: '0 16px' }" />

    <!-- vant评分组件 -->
    <van-rate
      v-model="scoreVal"
      count="10"
      size="30"
      color="blue"
      void-color="orange"
      :allow-half="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const scoreVal = ref(3, 5)
</script>

<style lang="scss" scoped></style>
