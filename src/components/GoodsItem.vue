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
    <p class="goods-name ellipsis-2">{{ goods.name }}</p>
    <p class="goods-desc">{{ goods.desc }}</p>
    <p class="goods-price">¥{{ goods.price }}</p>
  </router-link>
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  text-align: center;
  font-size: 16px;
  p {
    margin-top: 6px;
    text-align: left;
  }
  img {
    width: 160px;
    height: 160px;
  }
  .goods-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666;
  }
  .goods-price {
    margin-top: 10px;
    font-size: 20px;
    color: $priceColor;
  }
}
</style>