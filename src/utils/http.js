import axios from "axios";

const service = axios.create({
  // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net/',
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request
  .use(
    config => {
      return config
    },
    err => Promise.reject(err)
  )

// 响应拦截器
service.interceptors.response
  .use(
    response => {
      return response.data
    },
    err => Promise.reject(err)
  )

export default service