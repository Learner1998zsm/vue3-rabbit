// webpack 写法
/*
const importFn = require.context('./', false, /\.vue$/)

export default {
  install(app) {
    importFn.keys().forEach(key => {
      const component = importFn(key).default;
      app.component(component.name, component)
    });
  }
}
*/


// vite 写法 （vite中没有 require函数）
// 1.获取library目录下所有的.vue文件组成的对象 键：路径 值：一个返回该组件的函数
import { defineAsyncComponent } from "vue"

const components = import.meta.glob('./*.vue')
export default {
  install(app) {
    // 2.遍历注册组件
    // Object.entries(components) 返回 [[key, value],[key, value]]
    for(const [path, component] of Object.entries(components)) {
      const name = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
      app.component(name, defineAsyncComponent(component))
    }
  }
}