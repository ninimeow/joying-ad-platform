import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/edmPage',
      name: 'EdmPage',
      meta: { title: 'EDM' },
      component: () => import('@/views/Page/Page'),
      children: [
        {
          path: 'edm',
          name: 'edm',
          component: () => import('@/views/EDM/EDM'),
          meta: { title: 'EDM管理' }
        },
        {
          path: 'template',
          name: 'EDMTemplate',
          component: () => import('@/views/Template/Template'),
          meta: { title: 'EDM模版' }
        }
      ]
    }, {
      path: '/h5page',
      name: 'H5Page',
      component: () => import('@/views/Page/Page'),
      meta: { title: 'H5页面' },
      children: [
        {
          path: 'h5',
          name: 'h5',
          component: () => import('@/views/H5/H5'),
          meta: { title: 'H5页面管理' }
        },
        {
          path: 'template',
          name: 'H5Template',
          component: () => import('@/views/Template/Template'),
          meta: { title: 'H5页面模版' }
        }
      ]
    }]
})
