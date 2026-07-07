<template>
    <div class="search-page">
       <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" right-text="取消" @click-right="clearSearch">
        <template #title>
       <van-search v-model="searchKeyword" @search="handleSearch" placeholder="请输入搜索关键词" shape="round">
       </van-search>
       </template>
       </van-nav-bar>


       <div class="search-history" v-if="searchHistory.length >0">
        <div class="history-header">
            <span class="history-title">搜索历史</span>
            <van-icon  name="delete-o"/>
        </div>
        <div class="history-list">
            <van-tag type="primary" v-for="(item, index) in searchHistory" :key="index" class="history-tag">{{ item }}</van-tag>
        </div>
       </div>


       <div class="search-result" v-if="searchResult.length >0">
        <van-grid :border="false" :column-num="2" :center="false" gutter="10">

            <van-grid-item v-for="item in searchResult" :key="item.id">

                <div class="product-card">

                    <van-image :src="item.smallImg" radius="10" />

                    <div class="hot-badge" v-if="item.isHot === 1">
                        <van-icon name="fire" class="hot-icon" color="#fff" />
                        <span>热卖</span>
                    </div>
                    <div class="product-info">

                        <div class="zhname">{{ item.name }}</div>

                        <div class="enname">{{ item.enname }}</div>

                        <div class="price">￥{{ item.price }}</div>
                    </div>
                </div>

            </van-grid-item>
        </van-grid>
       </div>

       <div class="null" v-else>
        <van-empty description="暂无搜索结果">
         <van-button type="primary" size="small" @click="clearSearch">清除搜索</van-button>
        </van-empty>
       </div>
    </div>
</template>

<script setup>
import { onMounted,  ref } from 'vue';
import { showToast } from 'vant';
import { searchApi } from '../api/request';


const searchKeyword = ref('');

const searchResult = ref([]);

const searchHistory = ref([]);

const MAX_HISTORY_COUNT = 10;

const HISTORY_KEY = 'search_history';

onMounted(() => {
    const history = localStorage.getItem(HISTORY_KEY);
    if(history) {
        searchHistory.value = JSON.parse(history)
    }
})

const handleSearch = () => {
    console.log(searchKeyword);

    const keyword = searchKeyword.value.trim();

    if (!keyword) {

        showToast({

            message:'请输入搜索内容',

            icon:'smile',
            duration: 1500,
            forbidClick: true
        });

        return;
    }
    searchKeyword.value = keyword;

    onSearch();

    saveSearchHistory(keyword);
}

const onSearch = async () => {
    try{
        const res = await searchApi(searchKeyword.value)

        console.log("搜索出来的数据=>",res);


        searchResult.value = res.result;
    }catch (error) {

        console.log("搜索出错:=>",error)
    }
}


const saveSearchHistory = (keyword) => {
    const index = searchHistory.value.indexOf(keyword);
    if(index !== -1) {
        searchHistory.value.splice(index,1)
    }

    searchHistory.value.unshift(keyword);

    if(searchHistory.value.length > MAX_HISTORY_COUNT) {
        searchHistory.value.pop();
    }


    localStorage.setItem(HISTORY_KEY, JSON.stringify(searchHistory.value))
}











const clearSearch = () => {

    searchKeyword.value = '';

    searchResult.value = [];
};

const onClickLeft = () => {

    history.back();
    return{
        onClickLeft,
    };
}
</script>

<style lang="scss" scoped>
.search-history {
    padding: 15px;
    margin-bottom: 10px;

    .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        .history-title {
            color: #666;
            font-size: 10px;
        }
    }

    .history-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .history-tag {
            border-color: #f5f5f5;
            color: #666;
            padding: 4px 10px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                border-color: #e6e6e6;
            }
        }
    }
}

.search-result {

    .product-card{

        position: relative;
        margin-bottom: 15px;

        .hot-badge {
            position: absolute;
            top: 0;
            right: 0;
            color: white;
            background-color: #E4393D;
            padding: 2px 6px;
            font-size: 12px;
            text-align: center;

            .hot-icon{
                color: white;
            }
        }

        .product-info{
            .zhname{
                color: #646566;
                font-size: 18px;
            }

            .enname {
                color: #646566;
                margin-top: 5px;
                margin-bottom: 5px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 12px;
            }

            .price {
                font-weight: bold;
                color: #E4393D;
            }
        }
    }
}



</style>