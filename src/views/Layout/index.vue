<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeaderSticky from './components/AppHeaderSticky.vue'
import { useCateList } from '@/stores/cateList.js'
const cateListStore = useCateList()
const { queryCateList } = cateListStore
queryCateList()
</script>

<template>
  <AppHeaderSticky />
  <AppNavbar />
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
