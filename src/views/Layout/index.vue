<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted, ref, VueElement } from 'vue'
import {useCateList} from '@/stores/cateList.js'
onMounted(() => {
  const cateListStore = useCateList()
  const { queryCateList } = cateListStore
  queryCateList()
})
  
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>

<style lang="scss" scoped>

</style>