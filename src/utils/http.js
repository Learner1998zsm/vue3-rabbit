import axios from "axios";

const service = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request
  .use(
    config => {
      return config
    },
    err => Promise.resolve(err)
  )

// 响应拦截器
service.interceptors.response
  .use(
    response => {
      return response.data
    },
    err => Promise.resolve(err)
  )

export default service