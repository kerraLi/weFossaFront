<template>
  <!--<el-container>-->
  <!--<el-header>-->
  <!--<el-menu-->
  <!--class="el-menu-demo"-->
  <!--mode="horizontal"-->
  <!--@select="handleSelect"-->
  <!--background-color="rgba(0,0,0,0)"-->
  <!--text-color="black"-->
  <!--active-text-color="#ffd04b">-->
  <!--<el-menu-item index="1">处理中心</el-menu-item>-->
  <!--<el-submenu index="2">-->
  <!--<template slot="title">博客</template>-->
  <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
  <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
  <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
  <!--<el-submenu index="2-4">-->
  <!--<template slot="title">选项4</template>-->
  <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
  <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
  <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
  <!--</el-submenu>-->
  <!--</el-submenu>-->
  <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
  <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
  <!--</el-menu>-->
  <!--</el-header>-->
  <div class="container" v-on:scroll="netPage">
    <div class="pt-main">
      <div class="pt-page pt-page-1" v-bind:class="{'current':scrollPageIndex===0}">
        <h1>
          <span>A collection of</span>页面切换效果1
        </h1>
      </div>
      <div class="pt-page pt-page-2" v-bind:class="{'current':scrollPageIndex===1}">
        <h1>
          <span>A collection of</span>页面切换效果2</h1>
      </div>
      <div class="pt-page pt-page-3" v-bind:class="{'current':scrollPageIndex===2}">
        <h1>
          <span>A collection of</span>页面切换效果3</h1>
      </div>
      <div class="pt-page pt-page-4" v-bind:class="{'current':scrollPageIndex===3}">
        <h1>
          <span>A collection of</span>页面切换效果4</h1>
      </div>
      <div class="pt-page pt-page-5" v-bind:class="{'current':scrollPageIndex===4}">
        <h1>
          <span>A collection of</span>页面切换效果5</h1>
      </div>
      <div class="pt-page pt-page-6" v-bind:class="{'current':scrollPageIndex===5}">
        <h1>
          <span>A collection of</span>页面切换效果6</h1>
      </div>
    </div>
    <div class="pt-main-fake">
      <div class="pt-page-fake"></div>
      <div class="pt-page-fake"></div>
      <div class="pt-page-fake"></div>
      <div class="pt-page-fake"></div>
      <div class="pt-page-fake"></div>
      <div class="pt-page-fake"></div>
    </div>
  </div>

  <!--<el-footer>Footer</el-footer>-->
  <!--</el-container>-->
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      scrollTop: 0,
      scrollPageIndex: 0
    }
  },
  methods: {
    netPage (event) {
      // 每个切换页面
      const ptActPages = event.srcElement.querySelectorAll('.pt-page')
      const ptPages = event.srcElement.querySelectorAll('.pt-page-fake')
      // 获取当前滚动条与顶部的距离
      const ptPageTop = ptPages[this.scrollPageIndex].offsetTop || ptPages[this.scrollPageIndex].scrollTop
      // 总滚动长度 += 每次滚动长度
      this.scrollTop += event.srcElement.scrollTop - ptPageTop

      if (this.scrollTop >= (ptPageTop + ptPages[this.scrollPageIndex].scrollHeight) * 2) {
        event.srcElement.scrollTop = ptPageTop + ptPages[this.scrollPageIndex].scrollHeight
        ptActPages[this.scrollPageIndex].setAttribute(
          'style',
          'animation: moveFromBottomFade .7s ease both;'
        )
        this.scrollPageIndex++
      } else if (this.scrollTop <= (ptPageTop - ptPages[this.scrollPageIndex].scrollHeight) * 2) {
        event.srcElement.scrollTop = ptPageTop - ptPages[this.scrollPageIndex].scrollHeight
        ptActPages[this.scrollPageIndex].setAttribute(
          'style',
          'animation: moveFromTopFade .7s ease both;'
        )
        this.scrollPageIndex--
      } else {
        // 控制滚动条不变
        event.srcElement.scrollTop = ptPageTop
      }
    }
  }
}
</script>

<style>
  /*隐藏滚轮*/
  ::-webkit-scrollbar {
    display: none;
  }

  .container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .pt-main-fake {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .pt-page-fake {
    width: 100%;
    height: 100%;
    visibility: visible;
    overflow: hidden;
  }

  .pt-main {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .pt-page {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    visibility: visible;
    overflow: hidden;
  }

  .pt-page, .current {
    visibility: visible;
    z-index: 99;
  }

  /* Text Styles, Colors, Backgrounds */
  .pt-page h1 {
    position: relative;
    font-weight: 300;
    font-size: 4.4em;
    line-height: 1;
    letter-spacing: 6px;
    margin: 0;
    top: 12%;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    word-spacing: -0.3em;
  }

  .pt-page h1 span {
    font-family: 'Satisfy', serif;
    font-weight: 400;
    font-size: 40%;
    text-transform: none;
    word-spacing: 0;
    letter-spacing: 0;
    display: block;
    opacity: 0.4;
  }

  .pt-page h1 strong {
    color: rgba(0, 0, 0, 0.1);
  }

  .pt-page-1 {
    background: #0ac2d2;
  }

  .pt-page-2 {
    background: #7bb7fa;
  }

  .pt-page-3 {
    background: #60d7a9;
  }

  .pt-page-4 {
    background: #fdc162;
  }

  .pt-page-5 {
    background: #fd6a62;
  }

  .pt-page-6 {
    background: #f68dbb;
  }

  @-webkit-keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      -webkit-transform: translateY(100%);
    }
  }

  @-moz-keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      -moz-transform: translateY(100%);
    }
  }

  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }

  @-webkit-keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      -webkit-transform: translateY(-100%);
    }
  }

  @-moz-keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      -moz-transform: translateY(-100%);
    }
  }

  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }

</style>
