import http from '@/utils/http'

export function getCategory() {
  return http.get('home/category/head')
}