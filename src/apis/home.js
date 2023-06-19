import http from '@/utils/http.js'

export function getCateList() {
    return http.get('/home/category/head')
}

export function getBannerListAPI() {
    return http.get('/home/banner')
}