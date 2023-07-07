<script setup>
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSubFilterAPI } from '@/apis/category.js'

const subFilterInfo = ref({})
const getSubFilter = async id => {
  const res = await getSubFilterAPI({ id })
  res.result.brands.unshift({ id: '', name: '全部' })
  res.result.saleProperties.forEach(item =>{
    item.properties.forEach(x => x.active = false)
    item.properties.unshift({ id: '', name: '全部', active: true })
  })
  subFilterInfo.value = res.result || {}
}

const route = useRoute()
watch(
  () => route.params.cid,
  (newId, oldId) => {
    newId && getSubFilter(newId)
  },
  {
    immediate: true,
  }
)
// 参数
const params = reactive({
  brandId: '',
  attrs: [],
})
const selectAttrs = (group, value) => {
  // 排他
  group.properties.forEach(x => x.active = false)
  value.active = true
  let matchIndex = -1
  const attr = params.attrs.find((item, i) => {
    if(item.groupName === group.name) {
      matchIndex = i
      return true
    }
  })
  if(value.name === '全部') {
   return (matchIndex >= 0) && params.attrs.splice(matchIndex, 1)
  }
  if (attr) {
    attr.propertyName = value.name
  } else {
    params.attrs.push({
      groupName: group.name,
      propertyName: value.name,
    })
  }
}
const emit = defineEmits(['filter-change'])
watch(params, newVal => {
  emit('filter-change', newVal)
})
</script>

<template>
  <div class="filter">
    <div class="filter-row">
      <span class="filter-row-name" v-if="subFilterInfo.brands">品牌：</span>
      <div class="filter-row-options">
        <span
          :class="{ active: params.brandId === brand.id }"
          v-for="brand in subFilterInfo.brands"
          :key="brand.id"
          @click="params.brandId = brand.id"
          >{{ brand.name }}</span
        >
      </div>
    </div>
    <div
      class="filter-row"
      v-for="row in subFilterInfo.saleProperties"
      :key="row.id"
    >
      <span class="filter-row-name">{{ row.name }}：</span>
      <div class="filter-row-options">
        <span
          class="ellipsis"
          :class="{ active: option.active }"
          v-for="option in row.properties"
          :key="option.id"
          @click="selectAttrs(row, option)"
          >{{ option.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  padding: 35px 25px 0;
  margin-bottom: 25px;
  background-color: #fff;
}
.filter-row {
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
  .filter-row-name {
    width: 80px;
    color: #999;
  }
  .filter-row-options {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    span {
      margin-right: 30px;
      margin-bottom: 30px;
      max-width: 112px;
      cursor: pointer;
      &:hover,
      &.active {
        color: $xtxColor;
      }
    }
  }
}
</style>
