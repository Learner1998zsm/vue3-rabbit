<script setup>
import SubFilter from './components/SubFilter.vue'
import SubBreadcrumb from './components/SubBreadcrumb.vue'
import SubSort from './components/SubSort.vue'
import GoodsItem from '@/components/GoodsItem.vue'
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getGoodsListAPI } from '@/apis/category.js'

const route = useRoute()
const payload = reactive({
  page: 1,
  pageSize: 20,
  categoryId: route.params.cid,
})
const isLoading = ref(false)
const finished = ref(false)
const goodsList = ref([])

const getGoodsList = () => {
  if(isLoading.value) return
  isLoading.value = true
  getGoodsListAPI(payload)
    .then(res => {
      isLoading.value = false
      if (res.result.items.length <= 0) return (finished.value = true)
      goodsList.value = [...goodsList.value, ...res.result.items]
      payload.page++
    })
    .catch(err => {
      isLoading.value = false
      ElMessage.error('加载失败, 请检查网络')
    })
}

// 筛选方式or排序方式改变重新获取数据
const handleChange = params => {
  Object.assign(payload, params)
  payload.page = 1
  goodsList.value = []
  finished.value = false
  getGoodsList()
}
</script>

<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <sub-breadcrumb />
      <!-- 筛选 -->
      <sub-filter @filter-change="handleChange" />
      <!-- 商品展示区 -->
      <div class="goods-show-area">
        <!-- 筛选与排序 -->
        <sub-sort @sort-change="handleChange" />
        <!-- 商品列表 -->
        <ul class="goods-list">
          <li v-for="item in goodsList" :key="item.id">
            <goods-item :goods="item" />
          </li>
        </ul>
        <!-- 无限加载 -->
        <zsm-infinite-loading
          :loading="isLoading"
          :finished="finished"
          @infinite="getGoodsList"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-show-area {
  padding: 25px;
  margin-bottom: 20px;
  background-color: #fff;
}
.goods-list {
  padding: 20px 5px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 220px;
    padding: 20px;
    margin: 0 20px 20px 0;
    transition: all 0.3s linear;
    &:hover {
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -3px, 0);
    }
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}

</style>
