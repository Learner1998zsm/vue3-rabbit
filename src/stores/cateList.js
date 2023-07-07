import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCateList } from '@/apis/home.js'

export const useCateList = defineStore('cateList', () => {
  const cateList = ref([])
  const queryCateList = async () => {
    if (cateList.value.length) return
    const res = await getCateList()
    // open用于控制二级分类显示与隐藏
    res.result.open = false
    cateList.value = res.result
  }
  const open = id => {
    const currCate = cateList.value.find(item => item.id === id)
    currCate.open = true
  }
  const hide = id => {
    const currCate = cateList.value.find(item => item.id === id)
    currCate.open = false
  }
  return {
    cateList,
    queryCateList,
    open,
    hide,
  }
})
