import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      meta: {
        title: 'Main'
      }
    },
    {
      path: '/blog',
      component: Blog,
      meta: {
        title: '博客'
      }
    }
  ]
})
