<script setup>
import { onMounted } from 'vue'
import { getCategory } from '@/apis/testAPI'
onMounted(async () => {
  const res = await getCategory()
  console.log(res);
})
</script>

<template>
  <div>
    <el-button type="primary" >button</el-button>
  </div>
</template>

<style>
</style>
