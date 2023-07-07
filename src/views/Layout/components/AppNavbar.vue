<script setup>
  
</script>

<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <li><a href="javascript:;">周杰伦</a></li>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
    </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-top-nav {
  height: 53px;
  background-color: #333;
  ul {
    display: flex;
    justify-content: end;
    li {
      height: 53px;
      line-height: 53px;
      &:first-child {
          a {
            border: 0;
          }
        }
      a {
        padding: 0 15px;
        border-left: 2px solid #666;
        font-size: 14px;
        color: #cdcdcd;
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}
</style>