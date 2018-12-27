// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

/* 定义每个页面title */
router.afterEach((to, form) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
