<script>
import { h } from 'vue'
// const render = () =>
//   h('div', {
//     style: 'width: 100px;height: 50px;backgroundColor: pink;',
//   })
export default {
  name: 'Breadcrumb',
  render() {
    const items = this.$slots.default()
    const dynamicItems = []
    items.forEach((item, i) => {
      if (
        item.type.__name === 'BreadcrumbItem' ||
        item.type.displayName === 'Transition'
      ) {
        dynamicItems.push(item)
        if (i < items.length - 1) {
          dynamicItems.push(h('i', { class: 'iconfont icon-angleright' }))
        }
      }
    })
    return h('div', { class: 'breadcrumb' }, dynamicItems)
  },
}
</script>

<style lang="scss">
.breadcrumb {
  padding: 25px 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  i {
    font-size: 12px;
    margin: 0 5px;
  }
  &-item {
    a {
      color: #666;
      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>
