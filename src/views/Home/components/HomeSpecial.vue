<script setup>
import HomePanel from "./HomePanel.vue";
import { getSpecialAPI } from "@/apis/home.js";
import { onMounted, ref } from "vue";
const list = ref([]);
const getSpecialList = async () => {
  const res = await getSpecialAPI();
  list.value = res.result;
};
onMounted(() => {
  getSpecialList();
});
</script>

<template>
  <div class="home-special">
    <home-panel title="最新专题" btnType="1">
      <template #default>
        <ul class="special-list">
          <li class="special-item" v-for="item in list" :key="item.id">
            <router-link to="/">
              <img :src="item.cover" alt="" />
              <div class="meta">
                <div class="info-box">
                  <div class="info">
                    <p class="title ellipsis">{{ item.title }}</p>
                    <p class="summary ellipsis">{{ item.summary }}</p>
                  </div>
                  <div class="lowest-price">¥{{ item.lowestPrice }}起</div>
                </div>
              </div>
            </router-link>
            <div class="foot">
              <span class="like"><i class="iconfont icon-like"></i>{{ item.collectNum }}</span>
              <span class="view"><i class="iconfont icon-see1"></i>{{ item.viewNum }}</span>
              <span class="comment"
                ><i class="iconfont icon-icmessage"></i>{{ item.replyNum }}</span
              >
            </div>
          </li>
        </ul>
      </template>
    </home-panel>
  </div>
</template>

<style lang="scss" scoped>
.special-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.special-item {
  width: 404px;
  margin-bottom: 10px;
  transition: all 0.3s linear;
  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0,0,0,.2);
  }
  a {
    display: block;
    position: relative;
    img {
      width: 100%;
      height: 288px;
    }
  }
  .foot {
    height: 72px;
    padding: 0 20px;

    background-color: #fff;
    line-height: 72px;
    font-size: 16px;
    i {
      margin-right: 5px;
      font-size: 16px;
      color: #999;
    }
    .like {
      float: left;
      margin-right: 25px;
    }
    .view {
      float: left;
    }
    .comment {
      float: right;
    }
  }
  .meta {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(0deg,rgba(0,0,0,.8),transparent 50%);
  }
  .info-box {
    padding: 15px;
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      width: 70%;
    }
    .title {
      font-size: 22px;
      color: #fff;
    }
    .summary {
      font-size: 19px;
      color: #999;
    }
    .lowest-price {
      padding: 0 7px;
      background-color: #fff;
      border-radius: 3px;
      font-size: 17px;
      color: $priceColor;
    }
  }
}
</style>