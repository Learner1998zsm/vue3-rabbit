<script setup>
const props = defineProps({
  goods: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <router-link to="/" class="goods-item">
    <img v-lazy="goods.picture" alt="" />
    <p class="goods-name ellipsis">{{ goods.name }}</p>
    <p class="goods-desc ellipsis">{{ goods.desc }}</p>
    <p class="goods-price">¥{{ goods.price }}</p>
  </router-link>
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  text-align: center;
  font-size: 16px;
  p {
    width: 178px;
    margin-top: 6px;
  }
  img {
    width: 160px;
    height: 160px;
  }
  .goods-desc {
    color: #666;
  }
  .goods-price {
    margin-top: 10px;
    font-size: 20px;
    color: $priceColor;
  }
}
</style>