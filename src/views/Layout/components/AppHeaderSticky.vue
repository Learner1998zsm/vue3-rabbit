<script setup>
import AppHeaderNav from "./AppHeaderNav.vue";
import { ref } from "vue"

let isShow = ref(false)
window.addEventListener('scroll', e => {
  const scrollTop = document.documentElement.scrollTop
  isShow.value = scrollTop > 78
})

</script>

<template>
  <header class="app-header-sticky"  :class="{show: isShow}">
    <div class="container">
      <h1 class="logo"><router-link to="/"></router-link></h1>
      <!-- 导航栏 -->
      <app-header-nav></app-header-nav>
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  // left: 0;
  transform: translateY(-100px);
  opacity: 0;
  background-color: #fff;
  z-index: 9999;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
}
.logo {
  a {
    display: block;
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }
}
.app-header-sticky-nav {
  flex: 1;
  display: flex;
  justify-content: space-around;
  li {
    a {
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
}
.right {
  padding-left: 40px;
  width: 220px;
  display: flex;
  border-left: 2px solid $xtxColor;
  a {
    margin-right: 40px;
    line-height: 1;
    font-size: 16px;
    color: #333;
    &:hover {
      color: $xtxColor;
    }
  }
}
:deep(.drop-down) {
  top: 80px !important;
}
</style>
