<script setup>
import HomePanel from './HomePanel.vue'
import { getHotBrandsAPI } from '@/apis/home.js'
import { nextTick, onMounted, ref } from 'vue'
const brandsList = ref([])
const limit = 10
const maxNumOfBrandsInScreen = 5
const btnClickLimit = Math.ceil(limit / maxNumOfBrandsInScreen) - 1
const getBrands = async () => {
  const res = await getHotBrandsAPI({ limit })
  if (res.code === '1') {
    brandsList.value = res.result
  }
}
onMounted(() => {
  getBrands()
})
const panelRef = ref(null)
let nextClickTimes = 0
const prevHandler = () => {
  if (nextClickTimes <= 0) return
  const brandDom = document.querySelector('.brands-list')
  const parentWidth = brandDom.parentElement.offsetWidth
  panelRef.value.nextDisabled = false

  if (--nextClickTimes <= 0) {
    panelRef.value.prevDisabled = true
  }
  brandDom.style.transform = `translateX(-${parentWidth * nextClickTimes}px)`
}
const nextHandler = () => {
  if (nextClickTimes >= btnClickLimit) return
  const brandDom = document.querySelector('.brands-list')
  const parentWidth = brandDom.parentElement.offsetWidth
  panelRef.value.prevDisabled = false
  if (++nextClickTimes >= btnClickLimit) {
    panelRef.value.nextDisabled = true
  }
  brandDom.style.transform = `translateX(-${parentWidth * nextClickTimes}px)`
}
</script>

<template>
  <div class="home-brands">
    <home-panel
      ref="panelRef"
      title="热门品牌"
      subtitle="国际经典 品质保证"
      btnType="2"
      @prev-click="prevHandler"
      @next-click="nextHandler"
    >
      <template #default>
        <div class="brans-container">
          <ul class="brands-list">
            <li class="brands-item" v-for="brand in brandsList" :key="brand.id">
              <router-link to="/">
                <img :src="brand.picture" alt="" />
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </home-panel>
  </div>
</template>

<style scoped lang="scss">
.brans-container {
  overflow: hidden;
}
.brands-list {
  display: flex;
  flex-wrap: nowrap;
  transition: all 0.5s linear;
}
.brands-item {
  width: 240px;
  margin-right: 10px;
  &:nth-child(5n) {
    margin-right: 0;
  }
  a {
    display: block;
    img {
      max-width: fit-content;
      width: 240px !important;
      height: 305px;
    }
  }
}
</style>
