<script setup>
import { inject } from 'vue'
const goods = inject('goods')
</script>

<template>
  <div class="goods-breadcrumb" v-if="goods.id">
    <breadcrumb>
      <breadcrumb-item to="/">首页</breadcrumb-item>
      <breadcrumb-item :to="`/category/sub/${goods.categories[1].id}`">{{goods.categories[1].name}}</breadcrumb-item>
      <breadcrumb-item :to="`/category/sub/${goods.categories[0].id}`">{{goods.categories[0].name}}</breadcrumb-item>
        <breadcrumb-item :key="goods.id">{{goods.name}}</breadcrumb-item>
    </breadcrumb>
  </div>
</template>

<style scoped lang="scss">

</style>