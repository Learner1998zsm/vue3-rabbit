<script setup>
import { useCateList } from "@/stores/cateList.js";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const cateListStore = useCateList();
const { cateList } = storeToRefs(cateListStore);

// show 和 hide 控制下拉框显示与隐藏
const show = id => {
  cateListStore.open(id)
}
const hide = id => {
  cateListStore.hide(id)
}

const activeId = ref(null);
// 根据当前路由设置activeId
const route = useRoute()
watch(
  () => route.params.id,
  (newId, oldId) => {
    activeId.value = newId
  },
  {
    immediate: true
  }
)
</script>

<template>
  <ul class="app-header-nav">
    <li>
      <router-link to="/" class="cate-name" @click="activeId = null"
        >首页</router-link
      >
    </li>
    <li
      v-for="cate in cateList"
      :key="cate.id"
      @mousemove="show(cate.id)"
      @mouseleave="hide(cate.id)"
    >
      <router-link
        :class="{ active: activeId === cate.id }"
        :to="`/category/${cate.id}`"
        class="cate-name"
        @click="hide(cate.id)"
        >{{ cate.name }}</router-link
      >
      <!-- 分类下拉框 -->
      <div class="drop-down" :class="{ drop: cate.open }">
        <ul class="cate-child-list">
          <li
            class="cate-child-item"
            v-for="item in cate.children"
            :key="item.id"
            @click="hide(cate.id)"
          >
            <router-link :to="`/category/sub/${item.id}`">
              <img :src="item.picture" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.app-header-nav {
  flex: 1;
  display: flex;
  justify-content: space-around;
  .cate-name {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    color: #333;
    &:hover,
    &.active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
.drop-down {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s 0.1s;
  &.drop {
    opacity: 1;
    height: 132px;
  }
}
.cate-child-list {
  height: 100%;
  padding: 0 70px;
  display: flex;
  align-items: center;
}
.cate-child-item {
  &:hover a {
    color: $xtxColor;
  }
  a {
    display: block;
    width: 110px;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
      background: none;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
