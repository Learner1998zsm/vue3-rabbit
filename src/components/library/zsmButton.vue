<script setup>

const props = defineProps({
  type: {
    type: String,
    default: '' // 'primary'| 'success'| 'warning'| 'danger'
  },
  size: {
    type: String,
    default: 'middle' // large middle small mini
  },
})


</script>

<template>
  <button class="zsm-button ellipsis" :class="[type, size]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">

.zsm-button {
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  text-align: center;
  background-color: #fff;
  color: #606266;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.primary {
  border-color: $xtxColor;
  background-color: $xtxColor;
  color: #fff;
}
.success {
  border-color: #1dc779;
  background-color: #1dc779;
  color: #fff;

}
.warning {
  border-color: #ffb302;
  background-color: #ffb302;
  color: #fff;

}
.danger {
  border-color: #e26237;
  background-color: #e26237;
  color: #fff;
}
</style>