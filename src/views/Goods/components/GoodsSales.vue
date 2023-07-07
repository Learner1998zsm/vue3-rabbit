<script setup>
import { ref } from 'vue';

const sales = ref([
  {
    title: '销量人气',
    num: '200+',
    btn: '销量人气'
  },
  {
    title: '商品评价',
    num: '400+',
    btn: '查看评价'
  },
  {
    title: '收藏人气',
    num: '600+',
    btn: '收藏商品'
  },
  {
    title: '品牌信息',
    num: '苏宁电器',
    btn: '品牌主页'
  },
])
</script>

<template>
  <ul class="goods-sales">
    <li class="sales-item" v-for="(item, i) in sales" :key="i">
      <p class="title">{{item.title}}</p>
      <p class="num">{{item.num}}</p>
      <p class="btn"><i class="iconfont icon-comment-filling"></i>{{item.btn}}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.goods-sales {
  height: 140px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    .sales-item {
    position: relative;
    width: 25%;
    text-align: center;
    p {
      line-height: 25px;
    }
    .title {
      color: #999;
    }
    .num {
      color: $priceColor;
    }
    .btn {
      cursor: pointer;
      i {
        margin-right: 3px;
        font-size: 14px;
        color: $xtxColor;
      }
      &:hover {
        color: $xtxColor;
      }
    }
    &:not(:last-child)::after {
      content: '';
      display: block;
      width: 1px;
      height: 60px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-color: #e4e4e4;
    }
  }
}
</style>
