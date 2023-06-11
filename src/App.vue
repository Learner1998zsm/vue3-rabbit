<script setup>
import { onMounted } from 'vue'
import { getCategory } from '@/apis/testAPI'
onMounted(async () => {
  const res = await getCategory()
  console.log(res);
})
</script>

<template>
  <div class="test">test scss 变量</div>
  <router-view />
</template>

<style lang="scss" scoped>
.test {
  color: $priceColor
}
</style>
