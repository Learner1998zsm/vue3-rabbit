<script setup>
import zsmCarouselVue from "@/components/zsmCarousel.vue";
import { getBannerListAPI } from '@/apis/home.js'
import { onMounted, ref } from "vue";
const bannerList = ref([])
const getBannerList = async () => {
  const res = await getBannerListAPI()
  console.log({res});
  if(res.code === '1') {
    bannerList.value = res.result
  }
}
onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="home-banner">
    <zsmCarouselVue :list="bannerList" />
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>