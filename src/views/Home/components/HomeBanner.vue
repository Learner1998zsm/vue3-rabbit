<script setup>
import { getBannerListAPI } from '@/apis/home.js'
import { onMounted, ref } from 'vue'
const bannerList = ref([])
const getBannerList = async () => {
  const res = await getBannerListAPI()
  // console.log({res});
    bannerList.value = res.result || []
}
onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="home-banner">
    <zsm-carousel :list="bannerList" />
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
:deep(.zsm-carousel) {
  .pagination {
    padding-left: 250px;
  }
  .prev {
    left: 270px !important;
  }
}
</style>
