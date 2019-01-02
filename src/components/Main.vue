<template>
  <div class="container" v-on:scroll="nextPage">
    <div class="pt-main">
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===0}">
        <PageOne></PageOne>
      </div>
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===1}">
        <PageTwo></PageTwo>
      </div>
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===2}">
        <PageThree></PageThree>
      </div>
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===3}">
        <PageFour></PageFour>
      </div>
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===4}">
        <PageFive></PageFive>
      </div>
      <div class="pt-page" v-bind:class="{'current':scrollPageIndex===5}">
        <PageSix></PageSix>
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
</template>

<script>
import PageOne from './MainPage/PageOne'
import PageTwo from './MainPage/PageTwo'
import PageThree from './MainPage/PageThree'
import PageFour from './MainPage/PageFour'
import PageFive from './MainPage/PageFive'
import PageSix from './MainPage/PageSix'

export default {
  name: 'Index',
  components: {PageSix, PageFive, PageFour, PageThree, PageTwo, PageOne},
  data () {
    return {
      scrollTop: 0,
      scrollPageIndex: 0
    }
  },
  methods: {
    nextPage (event) {
      // 每个切换页面
      const ptActPages = event.srcElement.querySelectorAll('.pt-page')
      // 总滚动长度 += 每次滚动长度
      const scrollDis = event.srcElement.scrollTop - (event.srcElement.clientHeight * this.scrollPageIndex)
      this.scrollTop += scrollDis

      // 翻页滚动距离
      let disEveryPage = 0
      if (this.isMobile) {
        disEveryPage = event.srcElement.clientHeight * 50
      } else {
        disEveryPage = event.srcElement.clientHeight / 50
      }

      if (this.scrollTop > disEveryPage) {
        event.srcElement.scrollTop = event.srcElement.clientHeight * this.scrollPageIndex

        console.log('down')
        ptActPages[this.scrollPageIndex].setAttribute(
          'style',
          'animation: moveFromBottomFade .7s ease both;'
        )
        this.scrollTop = 0
        this.scrollPageIndex++
        event.srcElement.scrollTop = event.srcElement.clientHeight * this.scrollPageIndex
        // 防抖函数
        // this.Debounce(function () {
        // }, 2000, this)()
      } else if (this.scrollTop < -disEveryPage) {
        event.srcElement.scrollTop = event.srcElement.clientHeight * this.scrollPageIndex
        console.log('up')
        ptActPages[this.scrollPageIndex].setAttribute(
          'style',
          'animation: moveFromTopFade .7s ease both;'
        )
        this.scrollTop = 0
        this.scrollPageIndex--
        event.srcElement.scrollTop = event.srcElement.clientHeight * this.scrollPageIndex
      } else {
        event.srcElement.scrollTop = event.srcElement.clientHeight * this.scrollPageIndex
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
