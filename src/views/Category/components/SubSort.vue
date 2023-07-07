<script setup>
import { ref, reactive, watch } from 'vue'

// 排序选项
const sortOptions = ref([
  { label: '默认排序', value: '', active: true },
  { label: '最新商品', value: 'publishTime', active: false },
  { label: '最高人气', value: 'orderNum', active: false },
  { label: '评论最多', value: 'evaluateNum', active: false },
  { label: '价格排序', value: 'price', active: false, order: '' },
])
const params = reactive({
  inventory: false, // 仅显示有货
  onlyDiscount: false,
  sortField: '', // publishTime orderNum evaluateNum price
  sortMethod: '', // 升序or降序 asc/desc
})
const emit = defineEmits(['sort-change'])
const sortHandler = option => {
  sortOptions.value.forEach(item => (item.active = false))
  option.active = true
  params.sortField = option.value
  if (option.label === '价格排序') {
    if (option.order) {
      option.order = option.order === 'asc' ? 'desc' : 'asc'
    } else {
      option.order = 'asc'
    }
    params.sortMethod = option.order
  } else {
    sortOptions.value.at(-1).order = ''
    params.sortMethod = ''
  }
}
watch(params, newVal => {
  const { sortField, sortMethod } = newVal
  if (sortField === 'price' && !sortMethod) return
  emit('sort-change', params)
})
</script>

<template>
  <div class="sort-and-check">
    <div class="sort">
      <span
        :class="{
          active: item.active,
        }"
        v-for="(item, i) in sortOptions"
        :key="i"
        @click="sortHandler(item)"
      >
        {{ item.label
        }}<i
          class="arrow arrow-up"
          :class="{ active: item.order === 'asc' }"
          v-if="i === sortOptions.length - 1"
        ></i
        ><i
          class="arrow arrow-down"
          :class="{ active: item.order === 'desc' }"
          v-if="i === sortOptions.length - 1"
        ></i>
      </span>
    </div>
    <div class="check">
      <zsm-checkbox
        v-model="params.inventory"
        label="仅显示有货商品"
      ></zsm-checkbox>
      <zsm-checkbox
        v-model="params.onlyDiscount"
        label="仅显示特惠商品"
      ></zsm-checkbox>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort-and-check {
  display: flex;
  justify-content: space-between;
  .sort {
    span {
      position: relative;
      display: inline-block;
      width: 98px;
      height: 30px;
      margin-right: 20px;
      line-height: 28px;
      text-align: center;
      border: 1px solid #e4e4e4;
      border-radius: 3px;
      color: #999;
      background-color: #fff;
      cursor: pointer;
      &:not(:last-child).active {
        background-color: $xtxColor;
        color: #fff;
      }
      &:last-child {
        text-indent: -6px;
        &.active {
          border-color: $xtxColor;
        }
      }
      i.arrow {
        position: absolute;
        right: 12px;
        border: 5px solid transparent;
        &.arrow-up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: $xtxColor;
          }
        }
        &.arrow-down {
          bottom: 3px;
          border-top-color: #bbb;
          &.active {
            border-top-color: $xtxColor;
          }
        }
      }
    }
  }
  .check {
  }
}
</style>
