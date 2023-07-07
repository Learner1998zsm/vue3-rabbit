<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  imgs: {
    type: Array,
    default: () => [],
  },
})
const currIndex = ref(0)
// 鼠标移动预览大图
const maskX = ref(0)
const maskY = ref(0)
const show = ref(false)
const handleMousemove = e => {
  show.value = true
  const x = e.offsetX - 100
  const y = e.offsetY - 100

  if(x < 0) maskX.value = 0
  else if(x > 200) maskX.value = 200
  else maskX.value = x

  if(y < 0) maskY.value = 0
  else if( y > 200) maskY.value = 200
  else maskY.value = y
}
// 放大局部图的位置
const bigLeft = computed(() => - maskX.value * 2)
const bigTop = computed(() => - maskY.value * 2)
</script>

<template>
  <div class="goods-preview">
    <!-- 局部放大 -->
    <div v-show="show" class="scale" :style="`background: #f8f8f8 url(${imgs[currIndex]}) ${bigLeft}px ${bigTop}px;`"></div>
    <!-- 大图 -->
    <div class="main-img" @mousemove="handleMousemove" @mouseleave="show = false">
      <img :src="imgs[currIndex]" alt="" />
      <!-- 遮罩层 -->
      <div class="mask" :style="`position: absolute; top: ${maskY}px;left: ${maskX}px;`" v-show="show"></div>
    </div>
    <ul class="img-list">
      <li
        :class="{ active: i === currIndex }"
        v-for="(img, i) in imgs"
        :key="i"
        @mouseenter="currIndex = i"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.goods-preview {
  display: flex;
  height: 400px;
  position: relative;
  .scale {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 410px;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
  }
  .main-img {
    position: relative;
    margin-right: 12px;
    cursor: move;
    img {
      width: 400px;
      height: 400px;
      background: #f5f5f5;
      pointer-events: none;
    }
    .mask {
      width: 200px;
      height: 200px;
      pointer-events: none;
      background: rgba(0,0,0,.2);
    }
  }
  .img-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      width: 68px;
      height: 68px;
      cursor: pointer;
      img {
        background: none;
      }
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
