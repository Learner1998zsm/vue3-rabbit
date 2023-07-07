<script setup>
const props = defineProps({
  skus: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="g-sku">
    <dl v-for="(sku, i) in skus" :key="i">
      <dt>{{ sku.name }}</dt>
      <dd>
        <template v-for="(val, index) in sku.values" :key="index">
          <img v-if="sku.name === '颜色'" :src="val.picture" alt="" />
          <span v-if="sku.name === '尺码'">{{ val.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
.g-sku {
  padding: 20px 10px 0;
  dl {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      line-height: 40px;
      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border: 1px solid #e4e4e4;
        cursor: pointer;
        &.selected {
          border-color: $xtxColor;
        }
      }
      span {
        margin-right: 10px;
        padding: 0 20px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #666;
        border: 1px solid #e4e4e4;
        cursor: pointer;
        &.selected {
          border-color: $xtxColor;
        }
      }
    }
  }
}
</style>
