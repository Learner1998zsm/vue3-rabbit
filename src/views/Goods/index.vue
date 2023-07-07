<script setup>
import GoodsBreadcrumb from '@/views/Goods/components/GoodsBreadcrumb.vue'
import GoodsIntro from '@/views/Goods/components/GoodsIntro.vue'
import { ref, watch, provide } from 'vue'
import { useRoute } from 'vue-router'
import { getGoodsInfoAPI } from '@/apis/goods.js'

const useGoods = () => {
  const route = useRoute()
  const goods = ref({})
  watch(
    () => route.params.gid,
    newId => {
      getGoodsInfoAPI({ id: newId })
        .then(res => {
          goods.value = res.result || {}
        })
        .catch(err => {})
    },
    {
      immediate: true,
    }
  )
  return goods
}
// 获取商品信息
const goods = useGoods()
// 将商品信息提供给后代组件使用
provide('goods', goods)
</script>

<template>
  <div class="app-goods">
    <div class="container">
      <!-- 面包屑 -->
      <goods-breadcrumb />
      <!-- 商品介绍与操作 -->
      <goods-intro />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
