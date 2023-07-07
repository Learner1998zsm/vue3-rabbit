<script setup>
import { storeToRefs } from "pinia";
import { useCateList } from "@/stores/cateList.js";
import { ref } from "vue";
import throttle from "@/utils/throttle.js";

const cateListStore = useCateList();
const { cateList } = storeToRefs(cateListStore);

const isLayerVisible = ref(false);
const cateGoodsList = ref([]);
const activeId = ref(null);

const onMouseenter = cate => {
  activeId.value = cate.id;
  isLayerVisible.value = true;
  cateGoodsList.value = cate.goods;
}

const onMouseleave = () => {
  isLayerVisible.value = false;
  cateGoodsList.value = [];
  activeId.value = null;
};
</script>
<template>
  <div class="home-category" @mouseleave="onMouseleave">
    <ul class="cate-list">
      <li
        class="cate-item"
        :class="{ active: activeId === cate.id }"
        v-for="cate in cateList"
        :key="cate.id"
        @mouseenter="onMouseenter(cate)"
      >
        <router-link :to="`/category/${cate.id}`">{{ cate.name }}</router-link>
        <router-link v-for="(num, i) in 2" :key="i" :to="`/category/sub/${cate.children[i]?.id}`">{{
          cate.children[i]?.name
        }}</router-link>
      </li>
    </ul>
    <div class="layer" v-show="isLayerVisible">
      <h4>
        分类推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul>
        <li v-for="item in cateGoodsList" :key="item.id">
          <router-link to="/">
            <img :src="item.picture" alt="" />
            <div class="goods-info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-category {
  position: relative;
  z-index: 999;
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  .cate-item {
    height: 50px;
    padding-left: 40px;
    line-height: 50px;
    &.active {
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
.layer {
  position: absolute;
  top: 0;
  left: 250px;
  padding: 0 15px;
  width: 990px;
  height: 500px;
  background: hsla(0, 0%, 100%, 0.8);
  h4 {
    line-height: 82px;
    font-size: 20px;
    font-weight: normal;
    small {
      margin-left: 5px;
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 310px;
    margin: 0 15px 15px 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
    a {
      width: 100%;
      padding: 10px;
      display: flex;
      background-color: #fff;
      border-radius: 5px;
      img {
        width: 95px;
        height: 95px;
      }
      &:hover {
        background-color: #e3f9f4;
      }
    }
  }
  .goods-info {
    padding-left: 10px;
    width: 190px;
    .name {
      font-size: 16px;
      color: #666;
    }
    .desc {
      font-size: 14px;
      color: #999;
    }
    .price {
      font-size: 22px;
      color: $priceColor;
      i {
        font-size: 16px;
      }
    }
  }
}
</style>