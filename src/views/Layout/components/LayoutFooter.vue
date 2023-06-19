<script setup>
</script>

<template>
  <footer class="app-footer">
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd>
            <i class="iconfont icon-kefu"></i>
            在线客服
          </dd>
          <dd>
            <i class="iconfont icon-changjianwenti"></i>
            问题反馈
          </dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd>
            <i class="iconfont icon-wechat"></i>
            公众号
          </dd>
          <dd>
            <i class="iconfont icon-weibo"></i>
            微博
          </dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd style="padding: 5px;"><img src="@/assets/images/qrcode.jpg" alt=""></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            400-0000-000
            <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <ul>
            <li>
              <a href="javascript:;"><i class="iconfont icon-cart"></i><span>价格亲民</span></a>
            </li>
            <li>
              <a href="javascript:;"><i class="iconfont icon-footer2"></i><span>物流快捷</span></a>
            </li>
            <li>
              <a href="javascript:;"><i class="iconfont icon-footer3"></i><span>品质新鲜</span></a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <ul>
            <li><a href="javascript:;">关于我们</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
            <li><a href="javascript:;">售后服务</a></li>
            <li><a href="javascript:;">配送与验收</a></li>
            <li><a href="javascript:;">商务合作</a></li>
            <li><a href="javascript:;">搜索推荐</a></li>
            <li><a href="javascript:;">友情链接</a></li>
          </ul>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  .contact {
    .container {
      height: 190px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      line-height: 25px;
      color: #999;
    }
    padding: 60px 0 40px;
    // box-sizing: content-box;
    background-color: #fff;
    dl {
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
        border: 0;
      }
    }

    dt {
      font-size: 18px;
    }
    dd {
      width: 90px;
      height: 90px;
      float: left;
      font-size: 14px;
      margin-top: 36px;
      margin-right: 12px;
      padding-top: 10px;
      border: 1px solid #ededed;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:hover i {
        color: $xtxColor;
      }
      i {
        display: block;
        width: 90px;
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        color: #666;
      }
    }
    .download {
      width: 106px;
      padding-top: 0;
      border: 0;
      line-height: 22px;
      span {
        display: block;
      }
      a {
        display: block;
        height: 34px;
        margin-top: 5px;
        line-height: 34px;
        background-color: $xtxColor;
        color: #fff;
        border-radius: 2px;
      }
    }
    .hotline {
      width: 160px;
      padding-top: 20px;
      border: 0;
      font-size: 22px;
      color: #666;
      small {
        font-size: 15px;
      }
    }
  }
  .extra {
    height: 348px;
    background-color: #333;
    .slogan {
      border-bottom: 1px solid #434343;
      ul {
        display: flex;
        justify-content: space-around;
        padding: 60px 0;
      }
      a {
        display: flex;
        align-items: center;
        // line-height: 58px;
        i {
          display: inline-block;
          margin-right: 5px;
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
        span {
          font-size: 28px;
          color: #fff;
          text-shadow: 0 0 1px #333;
        }
      }
    }
    .copyright {
      padding-top: 40px;
      color: #999;
      font-size: 15px;
      ul {
        display: flex;
        justify-content: center;
      }
      li {
        
        a {
          display: block;
          padding: 0 10px;
          border-right: 1px solid #999;
          color: #999;
          
        }
        &:last-child>a {
            border: 0;
          }
      }
      p {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
}
</style>