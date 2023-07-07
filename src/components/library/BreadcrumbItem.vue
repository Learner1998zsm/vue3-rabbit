<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    default: ''
  }
})
</script>

<template>
  <div class="breadcrumb-item">
    <router-link v-if="to" :to="to"><slot /></router-link>
    <span v-else><slot /></span>
  </div>
</template>

<style lang="scss" scoped>
</style>