<script setup>
import {ref, watch} from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: 1
  },
})
const emit = defineEmits(['update:modelValue'])

const subDisabled = ref(false)
const handleBlur = e => {
  let newVal = e.target.value
  if((-newVal + '') === 'NaN' || newVal < 1)  newVal = e.target.value = 1
  emit('update:modelValue', +newVal)
}
const handleAdd = () => emit('update:modelValue', props.modelValue + 1)
const handleSub = () => {
  if(props.modelValue <= 1) return 
  emit('update:modelValue', props.modelValue -1)
}
watch(
  () => props.modelValue, newVal => {
  subDisabled.value = newVal <= 1
})
</script>

<template>
  <div class="zsm-counter">
    <label v-if="label">{{label}}</label>
    <div class="counter">
      <i class="subtract" :class="{disabled: subDisabled}" @click="handleSub">-</i>
      <input type="text" class="count" :value="modelValue" @blur="handleBlur" />
      <i class="add" @click="handleAdd">+</i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.zsm-counter {
  margin-bottom: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  label {
    width: 50px;
    color: #999;
  }
  .counter {
    display: flex;
    width: 120px;
    height: 30px;
    line-height: 28px;
    border: 1px solid #e4e4e4;
    text-align: center;
    i {
      display: block;
      width: 30px;
      background-color: #f8f8f8;
      font-size: 16px;
      cursor: pointer;
      &.disabled {
        cursor: not-allowed;
      }
    }
    .count {
      width: 60px;
      border-left: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
      color: #666;
      outline: none;
      text-align: center;
      font-size: 15px;
    }
  }
}
</style>