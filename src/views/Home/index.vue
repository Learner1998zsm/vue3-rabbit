<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeBrands from './components/HomeBrands.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeSpecial from './components/HomeSpecial.vue'
</script>

<template>
  <div class="home-entry">
    <div class="container">
      <HomeCategory />
      <HomeBanner />
    </div>
  </div>
  <HomeNew />
  <HomeHot />
  <HomeBrands />
  <HomeProduct />
  <HomeSpecial />
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
