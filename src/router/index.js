import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: () => import('../views/home.vue'), name: '首页',
      children: [
        {path: '/page_first', component: () => import('../views/page_first.vue'), name: '页面1'},
        {path: '/page_second', component: () => import('../views/page_second.vue'), name: '页面2'},
      ]
    },
  ]
})
