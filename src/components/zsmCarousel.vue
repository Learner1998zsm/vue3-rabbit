<script setup>
import { onMounted, toRefs, ref } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  interval: {
    type: Number,
    default: 2000
  }
});
// 解构出轮播图列表
const { list, interval } = toRefs(props);
// 当前显示项的索引 通过改变其值进行轮播
const indexId = ref(0);

// 左侧按钮
const prevHandler = () => {
  const last = list.value.length - 1
  // 如果当前在第一张图片则跳到最后一张
  if (indexId.value === 0) {
    indexId.value = last;
  } else {
    indexId.value--;
  }
};
// 右侧按钮
const nextHandler = () => {
  const last = list.value.length - 1
  // 如果当前在第一张图片则跳到最后一张
  if (indexId.value === last) {
    indexId.value = 0;
  } else {
    indexId.value++;
  }
};

// 定时器
const timer = ref(null)
timer.value = setInterval(nextHandler, interval.value);

// 鼠标移入图片暂停播放
const pauseHandler = () => {
  clearInterval(timer.value)
  timer.value = null
}
// 鼠标移出图片暂停播放
const playHandler = () => {
  timer.value = setInterval(nextHandler, interval.value)
}
</script>

<template>
  <div class="zsm-carousel" @mouseover="pauseHandler" @mouseleave="playHandler">
    <ul class="banner-box">
      <li
        class="carousel-item"
        :class="{ fade: indexId === i }"
        v-for="(item, i) in list"
        :key="item.id"
      >
        <router-link to="/"
          ><img style="background-color: pink" :src="item.imgUrl" alt=""
        /></router-link>
      </li>
    </ul>
    <!-- pagenation -->
    <ul class="pagenation">
      <li class="page-point" :class="{ active: indexId === i }" v-for="(item, i) in list" :key="item.id" @click="indexId = i"></li>
    </ul>
    <!-- button -->
    <a href="javascript:;" class="carousel-btn prev" @click="prevHandler"
      ><i class="iconfont icon-angleleft"></i
    ></a>
    <a href="javascript:;" class="carousel-btn next" @click="nextHandler"
      ><i class="iconfont icon-angleright"></i
    ></a>
  </div>
</template>

<style lang="scss" scoped>
.zsm-carousel {
  height: 500px;
  .banner-box {
    position: relative;
  }
  .carousel-item {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.5s linear;
    &.fade {
      z-index: 101;
      opacity: 1;
    }
    a {
      img {
        width: 100%;
        height: 500px;
      }
    }
  }

  .pagenation {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    li {
      width: 12px;
      height: 12px;
      margin: 0 5px;
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      &.active {
        background-color: #fff;
      }
    }
  }
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 200;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all 0.3s;
    i {
      color: #fff;
    }
    &.prev {
      left: 270px;
    }
    &.next {
      right: 20px;
    }
  }
  &:hover .carousel-btn {
    opacity: 1;
  }
}
</style>