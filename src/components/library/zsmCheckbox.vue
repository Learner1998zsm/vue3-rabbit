<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  label: {
    type: [String, Number],
    default: '33434',
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
})
onMounted(() => {
  const root = document.querySelector('.zsm-checkbox')
  root.style.setProperty('--zsm-checkbox-input-width', '14px')
  root.style.setProperty('--zsm-checkbox-input-height', '14px')
})

const emit = defineEmits(['update:modelValue', 'change'])
const handleChange = () => {
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<template>
  <label
    class="zsm-checkbox"
    :class="{ 'is-checked': modelValue }"
    @click="handleChange"
  >
    <span class="zsm-checkbox__input" :class="{ 'is-checked': modelValue }">
      <input
        class="zsm-checkbox__original"
        type="checkbox"
        :checked="modelValue"
        @change="handleChange"
      />
      <span class="zsm-checkbox__inner"></span>
    </span>
    <span class="zsm-checkbox__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
$inputWidth: var(--zsm-checkbox-input-width, 14px);
$inputHeight: var(--zsm-checkbox-input-height, 14px);
$themeColor: var(--zsm-checkbox-theme-color, #999);
$iconColor: var(--zsm-checkbox-icon-color, #fff);
.zsm-checkbox {
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
  color: #999;
  cursor: pointer;
  &.is-checked {
    color: $xtxColor;
  }
}
.zsm-checkbox__input {
  display: inline-flex;
  position: relative;
  &.is-checked {
    span {
      border-color: $xtxColor;
      &::after {
        border-color: $xtxColor;
        transform: rotate(45deg);
      }
    }
  }
}
.zsm-checkbox__label {
  padding-left: 8px;
  line-height: 1;
  font-size: 14px;
}
.zsm-checkbox__original {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
}
.zsm-checkbox__inner {
  position: relative;
  display: inline-block;
  width: $inputWidth;
  height: $inputHeight;
  border: 1px solid #999;
  border-radius: 2px;
  background-color: #fff;
  &::after {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 1px;
    left: 4px;
    display: block;
    width: 3px;
    height: 7px;
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    transform: rotate(0) scaleY(0);
    transition: all 0.15s ease-in 0.05s;
    transform-origin: center;
  }
}
</style>
