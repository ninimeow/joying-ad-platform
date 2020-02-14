import Vue from 'vue'
import Router from 'vue-router'
import Edm from '@/components/Edm'
import H5 from '@/components/H5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/template',
      name: 'Template',
      component: () => import('@/views/Template/Template')
    },
    {
      path: '/edmPage',
      name: 'EdmPage',
      meta: { title: 'EDM' },
      component: Edm,
      children: [
        {
          path: 'edm',
          name: 'edm',
          component: Edm,
          meta: { title: 'EDM管理' }
        }
      ]
    }, {
      path: '/h5page',
      name: 'H5Page',
      component: H5,
      meta: { title: 'H5页面' },
      children: [
        {
          path: 'h5',
          name: 'h5',
          component: H5,
          meta: { title: 'H5页面管理' }
        }
      ]
    }]
})
