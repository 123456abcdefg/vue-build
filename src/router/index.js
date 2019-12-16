import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: () => import('../views/home.vue'), name: '首页',redirect: to =>'/pageFirst',
      children: [
        {path: '/pageFirst', component: () => import('../views/pageFirst.vue'), name: '页面1'},
      ]
    },
  ]
})
