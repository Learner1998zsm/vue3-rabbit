<script setup>
import { toRefs, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  // btnType: 0 无按钮 ; 1 查看全部 ; 2 翻页
  btnType: {
    type: [Number, String],
    default: 0,
  },
})
const { title, subtitle, btnType } = toRefs(props)

const emits = defineEmits(['prev-click', 'next-click'])
const prevHandler = () => emits('prev-click')
const nextHandler = () => emits('next-click')
const prevDisabled = ref(true)
const nextDisabled = ref(false)
defineExpose({
  prevDisabled,
  nextDisabled
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="panel-header">
        <h3 class="panel-title">
          {{ title }} <small>{{ subtitle }}</small>
        </h3>
        <div class="header-nav">
          <slot name="nav"></slot>
        </div>
        <div class="header-right">
          <router-link to="/" class="all" v-if="btnType == 1"
            >查看全部<i class="iconfont icon-angleright"></i
          ></router-link>
          <a
            href="javascript:;"
            class="prev"
            v-if="btnType == 2"
            :class="{disabled: prevDisabled}"
            @click="prevHandler"
            ><i class="iconfont icon-angleleft"></i
          ></a>
          <a
            href="javascript:;"
            class="next"
            v-if="btnType == 2"
            :class="{disabled: nextDisabled}"
            @click="nextHandler"
            ><i class="iconfont icon-angleright"></i
          ></a>
        </div>
      </div>
      <div class="panel-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  padding-bottom: 20px;
}
.panel-header {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  .panel-title {
    flex: 1;
    font-size: 32px;
    font-weight: 500;
    color: #333;
    small {
      font-size: 16px;
      color: #999;
    }
  }
  .header-right {
    .all {
      color: #999;
      font-size: 16px;
      line-height: 22px;
      i {
        margin-left: 4px;
        font-size: 14px;
        color: #ccc;
      }
      &:hover {
        color: $xtxColor;
        i {
          color: $xtxColor;
        }
      }
    }
    .prev,
    .next {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-left: 5px;
      background-color: #ccc;
      color: #fff;
      text-align: center;
      line-height: 20px;
      background-color: $xtxColor;
      cursor: pointer;
      &.disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
      i {
        font-size: 12px;
      }
    }
  }
}
</style>
