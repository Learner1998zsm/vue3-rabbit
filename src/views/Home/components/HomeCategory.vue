<script setup>
import {storeToRefs} from 'pinia'
import {useCateList} from '@/stores/cateList.js'
const cateListStore = useCateList()
const {cateList} = storeToRefs(cateListStore)
</script>
<template>
  <div class="home-category">
      <ul>
        <li v-for="cate in cateList" :key="cate.id">
          <router-link to="/">{{cate.name}}</router-link>
          <router-link v-for="(num, i) in 2" :key="i" to="/">{{cate.children[i]?.name}}</router-link>
        </li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
.home-category {
  width: 250px;
  height: 500px;
  position: relative;
  z-index: 999;
  background: rgba(0,0,0,.8);
  li {
    height: 50px;
    padding-left: 40px;
    line-height: 50px;
    &:hover {
      background-color: $xtxColor;
    }
    a {
      margin-right: 5px;
      color: #fff;
      font-size: 14px;
      &:first-child {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>