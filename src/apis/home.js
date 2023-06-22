import http from '@/utils/http.js'

// 分类
export function getCateList() {
    return http.get('/home/category/head')
}
// 轮播图
export function getBannerListAPI() {
    return http.get('/home/banner')
}
// 新鲜好物
export function getNewGoodsAPI() {
    return http.get('/home/new')
}
// 人气推荐
export function getHotGoodsAPI() {
    return http.get('/home/hot')
}
// 热门品牌
export function getHotBrandsAPI({limit}) {
    return http.get('/home/brand?limit=' + limit)
}
// 商品区
export function getGoodsListAPI() {
    return http.get('/home/goods')
}
// 最新专题
export function getSpecialAPI() {
    return http.get('/home/special')
}