<script setup>
import HomePanel from './HomePanel.vue'
import { getHotGoodsAPI } from '@/apis/home.js'
import { onMounted, ref } from 'vue'
const goodsList = ref([])
const getGoodsList = async () => {
  const res = await getHotGoodsAPI()
  if (res.code === '1') {
    goodsList.value = res.result
  }
}
onMounted(() => {
  getGoodsList()
})
</script>
<template>
  <div class="home-hot">
    <home-panel title="人气推荐" subtitle="人气爆款 不容错过">
      <template #default>
        <ul class="goods-list">
          <li class="goods-item" v-for="goods in goodsList" :key="goods.id">
            <router-link to="/">
              <img :src="goods.picture" alt="" />
              <div class="info-box">
                <p class="title">{{ goods.title }}</p>
                <p class="alt">{{ goods.alt }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </template>
    </home-panel>
  </div>
</template>

<style lang="scss" scoped>
.home-hot {
  background-color: #fff;
  .goods-list {
    display: flex;
    justify-content: space-between;
  }
  .goods-item {
    transition: all 0.3s linear;
    a {
      display: block;
    }
    width: 306px;
    height: 406px;
    background-color: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
      font-size: 0;
    }
    .info-box {
      text-align: center;
      .title {
        padding: 12px 30px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333;
        font-size: 22px;
      }
      .alt {
        padding: 12px 30px 0;
        color: #999;
        font-size: 18px;
      }
    }
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
