import {defineStore} from 'pinia'
import {ref} from 'vue'
import {getCateList} from '@/apis/home.js'

export const useCateList = defineStore('cateList', () => {
  const cateList = ref([])
  const queryCateList = async () => {
    if(cateList.value.length) return
    const res = await getCateList()
    if(res.code === '1') {
      cateList.value = res.result
    }
  }

  return {
    cateList,
    queryCateList
  }
})