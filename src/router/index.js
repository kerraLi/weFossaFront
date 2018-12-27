import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: 'Index'
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
