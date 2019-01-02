<template>
  <el-container>
    <el-header class="pt-menu ">
      <el-menu
        :mode="isMobile?'vertical':'horizontal'"
        :background-color="isMobile?'white':'rgba(0,0,0,0)'"
        default-active="1"
        text-color="black"
        active-text-color="#ffd04b"
        active-font-weight="bold"
        @select="handleSelect"
      >
        <el-menu-item index="1" current>Home</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Blog</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">Contact</el-menu-item>
        <el-menu-item index="4">About Me</el-menu-item>
      </el-menu>
    </el-header>
    <router-view/>
    <div>
      <span>下饭箭头</span>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  body {
    /*background: url("./assets/backgroud.jpg") no-repeat center top;*/
    /*background-size: 100%;*/
    color: #fff;
    background: #333;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pt-menu {
    /*position: absolute;*/
    z-index: 999;
  }

  .pt-menu-mobile {
    width: 100%;
    height: 100%;
    background: white;
  }
</style>
