<script setup>
import GoodsPreview from './GoodsPreview.vue'
import GoodsSales from './GoodsSales.vue'
import GoodsSku from './GoodsSku.vue';

import { inject, ref } from 'vue'
const goods = inject('goods')
// 商品数量
const count = ref(1)
</script>

<template>
  <div class="goods-intro">
    <div class="preview-wrap">
      <!-- 预览图 -->
      <goods-preview :imgs="goods.mainPictures" />
      <!-- 销售信息 -->
      <goods-sales />
    </div>
    <div class="spec-wrap">
      <div class="goods-spec">
        <h3 class="g-name">{{goods.name}}</h3>
        <p class="g-desc">{{goods.desc}}</p>
        <p class="g-price"><span>{{goods.price}}</span><span>{{goods.oldPrice}}</span></p>
        <div class="g-service">
          <dl>
            <dt>促销</dt>
            <dd>12月好物放送，App领券购买直降120元</dd>
          </dl>
          <dl>
            <dt>配送</dt>
            <dd>至</dd>
          </dl>
          <dl>
            <dt>服务</dt>
            <dd>
              <span>无忧退货</span>
              <span>快速退款</span>
              <span>免费包邮</span>
              <a href="javascript:;">了解详情</a>
            </dd>
          </dl>
        </div>
        <!-- 参数选择 -->
        <goods-sku :skus="goods.specs" />
        <!-- 数量 -->
        <zsm-counter label="数量" v-model="count" />
        <zsm-button type="primary">加入购物车</zsm-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goods-intro {
  padding: 30px 50px;
  margin-bottom: 20px;
  display: flex;
  background-color: #fff;
}
.preview-wrap {
  width: 480px;
  margin-right: 40px;
}
.spec-wrap {
  height: 540px;
  flex: 1;
}
.goods-spec {
  padding: 0 10px;
  .g-name {
    font-size: 22px;
    font-weight: normal;
  }
  .g-desc {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }
  .g-price {
    margin-top: 10px;
    span {
      &:first-child {
        font-size: 22px;
        color: $priceColor;
      }
      &:last-child {
        margin-left: 10px;
        font-size: 16px;
        color: #999;
        text-decoration: line-through;
      }
      &::before {
        content: '¥';
        font-size: 14px;
      }
    }
  }
  .g-service {
    width: 500px;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f5f5f5;
    dl {
      height: 45px;
      display: flex;
      align-items: center;
      font-size: 14px;
      dt {
        width: 50px;
        color: #999;
      }
      dd {
        color: #666;
        span {
          margin-right: 10px;
          &::before {
            content: '•';
            margin-right: 2px;
            color: $xtxColor;
          }
        }
        a {
          color: $xtxColor;
        }
      }
    }
  }
}
</style>
