import http from '@/utils/http.js'

// 根据id获取二级分类下的商品列表
export function getSubCateGoodsByIdAPI({id}) {
  return http.get('/category', { params: {id} })
}
// 根据id获取二级分类的信息
export function getSubFilterAPI({ id }) {
  return http.get('/category/sub/filter', { params: { id } })
}
// 获取二级分类下的商品列表
export function getGoodsListAPI(payload) {
  return http.post('category/goods/temporary', payload)
}