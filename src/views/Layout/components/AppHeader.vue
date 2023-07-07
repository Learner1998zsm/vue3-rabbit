<script setup>
import AppHeaderNav from "./AppHeaderNav.vue";
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo"><a href="/"></a></h1>
      <!-- 导航栏 -->
      <app-header-nav></app-header-nav>
      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 购物车 -->
      <div class="cart">
        <a href="javascript:;">
          <i class="iconfont icon-cart"></i>
          <em>0</em>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  height: 132px;
  background-color: #fff;
}
.container {
  display: flex;
  align-items: center;
  position: relative;
}
.logo {
  a {
    display: block;
    width: 200px;
    height: 132px;
    background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
  }
}
// .app-header-nav {
//   flex: 1;
//   display: flex;
//   justify-content: space-around;
//   .cate-name {
//     display: inline-block;
//     height: 32px;
//     line-height: 32px;
//     font-size: 16px;
//     color: #333;
//     &:hover,
//     &.active {
//       color: $xtxColor;
//       border-bottom: 1px solid $xtxColor;
//     }
    
//   }
// }
.search {
  // position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 32px;
  width: 170px;
  height: 32px;
  border-bottom: 1px solid #efefef;
  i {
    font-size: 18px;
  }
  input {
    width: 140px;
    padding-left: 5px;
    color: #666;
    vertical-align: center;
    font-size: 14px;
  }
}
.cart {
  width: 50px;
  text-align: center;
  a {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32px;
    i {
      font-size: 22px;
    }
    em {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1px 6px;
      background-color: $helpColor;
      border-radius: 10px;
      font-size: 12px;
      color: #fff;
      font-family: Arial;
      font-style: normal;
      line-height: 1;
    }
  }
}
// .drop-down {
//   position: absolute;
//   top: 100px;
//   left: 0;
//   width: 100%;
//   height: 0;
//   z-index: 9999;
//   background-color: #fff;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   opacity: 0;
//   overflow: hidden;
//   transition: all 0.2s 0.1s;
//   &.drop {
//     opacity: 1;
//     height: 132px;
//   }
// }
// .cate-child-list {
//   height: 100%;
//   padding: 0 70px;
//   display: flex;
//   align-items: center;
// }
// .cate-child-item {
//   &:hover a {
//     color: $xtxColor;
//   }
//   a {
//     display: block;
//     width: 110px;
//     text-align: center;
//     img {
//       width: 60px;
//       height: 60px;
//       background: none;
//     }
//     p {
//       margin-top: 10px;
//       font-size: 14px;
//     }
//   }
// }
</style>