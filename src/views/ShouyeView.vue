<template>
  <!-- 最外层容器 -->
  <div class="shouye-page">
    <!-- 顶部导航栏 -->
    <div class="top-nav"></div>

    <!-- 轮播图部分 -->
    <div class="banner">
      <!-- vant提供的轮播图组件容器 -->
      <!-- autoplay自动轮播的间隔时间，单位声毫秒数 -->
      <van-swipe :autoplay="3000" indicator-color="re#0c34ba" class="mybanner">
        <!-- 轮播页 -->
        <van-swipe-item v-for="item in bannerData">
          <img :src="item.bannerImg" class="bannerImg" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 商品列表部分 -->
    <div class="hotRecommend">
      <!-- 标题部分 -->
      <div class="title"><span class="text">热卖推荐</span></div>
      <!-- 商品列表部分 -->
      <div class="productlist">
        <!-- column-num是列数 -->
        <!-- ：border是否需要边框 -->
        <van-grid :border="false" :column-num="2" :center="false" gutter="10">
          <!-- 列表渲染 -->
          <van-grid-item v-for="item in hotRecommendData">
            <!-- 商品图片 -->
            <van-image :src="item.smallImg" radius="10" />
            <!-- 商品中文名称 -->
            <div class="zhname">{{ item.name }}</div>
            <!-- 商品英文名称 -->
            <div class="enname">{{ item.enname }}</div>
            <!-- 商品价格 -->
            <div class="price">{{ item.price }}</div>
            <!-- hot图标 -->
            <div class="hot-icon">hot</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script setup>
//导入ref函数
import { onMounted, ref } from 'vue';
//导入我们封装好的接口
//import导入的时候，可以使用@代表项目的src目录
import { bannerApi, hotRecommendApi } from '@/api/request.js';

//定义轮播图数据
const bannerData = ref([]);
//定义热卖商品推荐数据
const hotRecommendData = ref([]);
//生命周期函数onmounted
onMounted(() => {
  bannerApi().then(res => {
    console.log('轮播图接口数据')
    console.log(res.result);
    //赋值目标数据
    bannerData.value = res.result;
  })

  hotRecommendApi().then(res => {
    console.log('推荐商品接口数据')
    console.log(res.result)
    //赋值目标 数据
    hotRecommendData.value = res.result
  })
})
</script>

<style lang="scss" scoped>
.shouye-page {
  background: pink;
  padding-bottom: 10px;

  .banner {
    .mybanner {
      margin: 10px;
      border-radius: 10px;
      height: 240px;

      .bannerImg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .hotRecommend {
    .title {
      margin: 10px;
      background: white;
      padding: 10px;

      .text {
        background: #0c34ba;
        color: white;
        display: inline-block;
        padding: 10px;
        border-top-right-radius: 20px;
      }
    }
    .productlist {
      .zhname {
        color: #646566;
        font-size: 18px;
      }
      .enname {
        color: #646566;
        margin-top: 5px;
        margin-bottom: 5px;
        //css实现当行省略号
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        font-weight: bold;
        color: #0c34ba;
      }
      .hot-icon {
        //子元素绝对定位
        position: absolute;
        left: 18px;
        top: 17px;
        background: #0c34ba;
        color: white;
        padding: 5px;
        border-radius: 0 0 5px 5px;
      }
    }
  }
}
</style>
