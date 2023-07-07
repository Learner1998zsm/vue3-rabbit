<script setup>
import { useCateList } from '@/stores/cateList.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const cateListStore = useCateList()
const route = useRoute()
const cate = computed(() => {
  const topCate = {}
  cateListStore.cateList.some(parent => {
    let flag = false
    const children = parent.children
    if(children && children.length > 0) {
      const sub = children.find(sub => sub.id === route.params.cid)
      if(sub) {
        flag = true
        topCate.top = { id: parent.id, name: parent.name }
        topCate.sub = { id: sub.id, name: sub.name }
      }
    }
    return flag
  })
  return topCate
})
</script>

<template>
  <breadcrumb>
    <breadcrumb-item to="/">首页</breadcrumb-item>
    <breadcrumb-item :to="`/category/${cate.top.id}`" v-if="cate.top">{{
      cate.top.name
    }}</breadcrumb-item>
    <transition name="fade-right" mode="out-in">
      <breadcrumb-item :key="cate.sub.id" v-if="cate.sub">{{
        cate.sub.name
      }}</breadcrumb-item>
    </transition>
  </breadcrumb>
</template>

<style scoped lang="scss"></style>
