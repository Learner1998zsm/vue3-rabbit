<script setup>
import GoodsItem from "@/components/GoodsItem.vue";

import { useRoute } from 'vue-router'
import { useCateList } from '@/stores/cateList.js'
import { getBannerListAPI } from '@/apis/home.js'
import { getSubCateGoodsByIdAPI } from '@/apis/category.js'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const cateStore = useCateList()
const currCate = computed(() => {
  let cate = {}
  const item = cateStore.cateList.find(item => {
    return item.id === route.params.id
  })
  if (item) cate = item
  return cate
})

// 轮播图数据
const bannerList = ref([])
const getBannerList = async () => {
  const res = await getBannerListAPI()
  bannerList.value = res.result
}
getBannerList()

// 获取二级分类商品列表
const subList = ref({})
const getSubList = async () => {
  const res = await getSubCateGoodsByIdAPI({id: route.params.id})
  subList.value = res.result.children
}
// 路由切换更新数据
watch(
  () => route.params.id,
  (newId, oldId) => {
    newId && getSubList(newId)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="app-category">
    <div class="container">
      <!-- 面包屑 -->
      <breadcrumb>
        <breadcrumb-item to="/">首页</breadcrumb-item>
        <transition name="fade-right" mode="out-in">
          <breadcrumb-item :key="currCate.id">{{
            currCate.name
          }}</breadcrumb-item>
        </transition>
      </breadcrumb>
      <!-- 轮播图 -->
      <zsm-carousel :list="bannerList" />
      <!-- 全部二级分类 -->
      <div class="all-sub-category">
        <h3>全部分类</h3>
        <ul class="sub-cate-list">
          <li
            class="sub-cate-item"
            v-for="item in currCate.children"
            :key="item.id"
          >
            <router-link :to="`/category/sub/${item.id}`">
              <img :src="item.picture" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 各个分类的推荐商品 -->
      <div class="recommend-goods" v-for="item in subList" :key="item.id">
        <div class="head">
          <p class="title">- {{ item.name }} -</p>
          <p class="tag">温暖柔软，品质之选</p>
          <router-link to="/"
            >查看全部<i class="iconfont icon-angleright"></i
          ></router-link>
        </div>
        <ul class="recommend-goods-list">
          <li v-for="goods in item.goods" :key="goods.id">
            <goods-item :goods="goods"></goods-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-sub-category {
  margin: 20px 0;
  background-color: #fff;
  h3 {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    font-weight: normal;
    color: #666;
  }
}
.sub-cate-list {
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  .sub-cate-item {
    margin-bottom: 10px;
    height: 160px;
    display: flex;
    align-items: center;
    a {
      width: 168px;
      display: block;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        background: none;
      }
      p {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
      }
    }
    &:hover > a {
      color: $xtxColor;
    }
  }
}
.recommend-goods {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  .head {
    position: relative;
    text-align: center;
    .title {
      font-size: 28px;
      color: #666;
      line-height: 60px;
    }
    .tag {
      font-size: 20px;
      color: #999;
    }
    a {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 16px;
      color: #999;
      &:hover,
      &:hover > i {
        color: $xtxColor;
      }
      i {
        margin-left: 4px;
        font-size: 14px;
      }
    }
  }
  .recommend-goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    padding-bottom: 0;
    li {
      margin-bottom: 10px;
      padding: 20px 25px;
      transition: all .3s linear;
      transform: none;
      &:hover {
        transform: translate3d(0,-3px,0);
        box-shadow: 0 3px 8px rgba(0,0,0,.3);
      }
    }
  }
}
</style>
