<script setup>
import HomePanel from "./HomePanel.vue";
import GoodsItem from "@/components/GoodsItem.vue";
import { getGoodsListAPI } from "@/apis/home.js";
import { onMounted, ref } from "vue";
const list = ref([]);
const getGoodsList = async () => {
  const res = await getGoodsListAPI();
  list.value = res.result;
};
onMounted(() => {
  getGoodsList();
});
</script>

<template>
  <div class="home-product">
    <home-panel
      :title="item.name"
      btnType="1"
      v-for="item in list"
      :key="item.id"
    >
      <template #nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="nav in item.children" :key="nav.id">
            <router-link to="/">{{ nav.name }}</router-link>
          </li>
        </ul>
      </template>
      <template #default>
        <div class="goods-container">
          <div class="goods-left">
            <router-link to="/">
              <img v-lazy="item.picture" alt="" />
            </router-link>
            <strong class="label">
              <span>{{ item.name }}馆</span>
              <span>{{ item.saleInfo }}</span>
            </strong>
          </div>
          <ul class="goods-list">
            <li v-for="goods in item.goods" :key="goods.id">
              <goods-item :goods="goods" />
              <div class="extra">
                <router-link to="/">
                  <span>找相似</span>
                  <small>发现更多宝贝 ></small>
                </router-link>
              </div>
            </li>
            <!-- <li v-for="goods in item.goods" :key="goods.id">
              <router-link to="/">
                <img v-lazy="goods.picture" alt="" />
                <p class="goods-name ellipsis-2">{{ goods.name }}</p>
                <p class="goods-desc">{{ goods.desc }}</p>
                <p class="goods-price">¥{{ goods.price }}</p>
              </router-link>
              <div class="extra">
                <router-link to="/">
                  <span>找相似</span>
                  <small>发现更多宝贝 ></small>
                </router-link>
              </div>
            </li> -->
          </ul>
        </div>
      </template>
    </home-panel>
  </div>
</template>

<style lang="scss" scoped>
.home-product {
  background-color: #fff;
}
.nav-list {
  display: flex;
  padding: 0 60px;
}
.nav-item {
  a {
    display: block;
    padding: 0 12px;
    font-size: 16px;
    line-height: 26px;
    color: #333;
    border-radius: 3px;
    &:hover {
      background-color: $xtxColor;
      color: #fff;
    }
  }
}
.goods-container {
  display: flex;
  // justify-content: space-between;
}
.goods-left {
  position: relative;
  margin-right: 10px;
  .label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 188px;
    height: 66px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 66px;
    span {
      &:first-child {
        width: 76px;
        background: rgba(0, 0, 0, 0.9);
      }
      &:last-child {
        flex: 1;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
  a {
    display: block;
    img {
      max-width: none;
      width: 240px;
      height: 610px;
    }
  }
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  li {
    position: relative;
    width: 240px;
    padding: 10px 30px;
    margin: 0 10px 10px 0;
    border: 1px solid transparent;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
      border-color: $xtxColor;
      .extra {
        transform: translateY(0);
      }
    }
    &:nth-child(4n) {
      margin-right: 0;
    }

    //   a {
    //     display: block;
    //     text-align: center;
    //     font-size: 16px;
    //     p {
    //       margin-top: 6px;
    //       text-align: left;
    //     }
    //     img {
    //       width: 160px;
    //       height: 160px;
    //     }
    //     .goods-desc {
    //       overflow: hidden;
    //       white-space: nowrap;
    //       text-overflow: ellipsis;
    //       color: #666;
    //     }
    //     .goods-price {
    //       margin-top: 10px;
    //       font-size: 20px;
    //       color: $priceColor;
    //     }
    //   }
      .extra {
        width: 240px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: $xtxColor;
        transform: translateY(101%);
        transition: all .3s linear;
        a {
          padding: 3px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          text-align: center;
          span {
            width: 120px;

            font-weight: 500;
            font-size: 18px;
            line-height: 40px;
            border-bottom: 1px solid #fff;
          }
          small {
            padding: 10px 0;
            font-size: 14px;
          }
        }
      }
  }
}
</style>