<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['infinite'])
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      emit('infinite')
      if (props.finished) {
        observer.unobserve(entry.target)
      }
    }
  })
})
onMounted(() => {
  const infiniteDom = document.querySelector('.zsm-infinite-loading')
  observer.observe(infiniteDom)
})
</script>

<template>
  <div class="zsm-infinite-loading">
    <div class="loading" v-if="loading && !finished">
      <img src="@/assets/images/loading.gif" alt="" />
      <span>正在加载...</span>
    </div>
    <!-- 加载完毕 -->
    <div class="finished" v-if="finished">
      <img src="@/assets/images/none.png" alt="" />
      <span>亲，没有更多了</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.zsm-infinite-loading {
  color: #999;
  font-size: 16px;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    img {
      width: 50px;
      height: 50px;
      background: none;
    }
  }
  .finished {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
