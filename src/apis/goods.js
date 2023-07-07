import http from '@/utils/http.js'

export function getGoodsInfoAPI({id}) {
  return http.get('/goods', { params: {id} })
}