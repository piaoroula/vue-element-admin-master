import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [{
  //     path: 'page',
  //     component: () => import('@/views/permission/page'),
  //     name: 'pagePermission',
  //     meta: {
  //       title: 'pagePermission',
  //       roles: ['admin'] // or you can only set roles in sub nav
  //     }
  //   }, {
  //     path: 'directive',
  //     component: () => import('@/views/permission/directive'),
  //     name: 'directivePermission',
  //     meta: {
  //       title: 'directivePermission'
  //       // if do not set roles, means: this page does not require permission
  //     }
  //   }]
  // },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/svg-icons/index'),
  //     name: 'icons',
  //     meta: { title: 'icons', icon: 'icon', noCache: true }
  //   }]
  // },

  // {
  //   path: '/charts',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'charts',
  //   meta: {
  //     title: 'charts',
  //     icon: 'chart'
  //   },
  //   children: [
  //     { path: 'keyboard', component: () => import('@/views/charts/keyboard'), name: 'keyboardChart', meta: { title: 'keyboardChart', noCache: true } },
  //     { path: 'line', component: () => import('@/views/charts/line'), name: 'lineChart', meta: { title: 'lineChart', noCache: true } },
  //     { path: 'mixchart', component: () => import('@/views/charts/mixChart'), name: 'mixChart', meta: { title: 'mixChart', noCache: true } }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'errorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true } },
  //     { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true } }
  //   ]
  // },
  {
    path: '/account',
    component: Layout,
    redirect: 'noredirect',
    name: 'accountcenter',
    meta: {
      title: 'accountcenter',
      icon: 'chart'
    },
    children: [
      { path: 'uppass', component: () => import('@/views/account/password'), name: 'updatepass', meta: { title: 'updatepass', noCache: true } },
      { path: 'userinfo', component: () => import('@/views/account/userinfo'), name: 'accountmanage', meta: { title: 'accountmanage', noCache: true } },
      { path: 'verification', component: () => import('@/views/account/verification'), name: 'verification', meta: { title: '验证', noCache: true } }
    ]
  },
  {
    path: '/card',
    component: Layout,
    redirect: 'noredirect',
    name: 'card',
    meta: {
      title: 'consignmentbusiness',
      icon: 'chart'
    },
    children: [
      { path: 'consignment', component: () => import('@/views/card/consignment'), name: 'consignment', meta: { title: 'consignment', noCache: true } },
      { path: 'channel', component: () => import('@/views/card/channel'), name: 'channel', meta: { title: 'channel', noCache: true } },
      { path: 'record', component: () => import('@/views/card/record'), name: 'record', meta: { title: 'record', noCache: true } },
      { path: 'statistics', component: () => import('@/views/card/statistics'), name: 'statistics', meta: { title: 'statistics', noCache: true } },
      { path: 'channels', component: () => import('@/views/card/channels'), name: 'channels', meta: { title: 'channels', noCache: true } },
      { path: 'consumption', component: () => import('@/views/card/consumption'), name: 'consumption', meta: { title: 'consumption', noCache: true } },
      { path: 'cards', component: () => import('@/views/card/cards'), name: 'cards', meta: { title: 'cards', noCache: true } },
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/submit',
    name: 'order',
    meta: { title: 'order', icon: 'tab', roles: ['Order', 'OrderManage'] },
    children: [
      {
        path: 'submitorder',
        name: 'orderSubmit',
        component: () => import('@/views/order/submit/index'),
        meta: { title: 'orderSubmit', roles: ['Order'] }
      },
      {
        path: 'record',
        name: 'orderRecord',
        component: () => import('@/views/order/record/index'),
        meta: { title: 'orderRecord', roles: ['Order'] }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/order/products/index'),
        meta: { title: 'Products', roles: ['OrderManage'] }
      },
      {
        path: 'orders',
        name: 'orderManage',
        component: () => import('@/views/order/orders/index'),
        meta: { title: 'orderManage', roles: ['OrderManage'] }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/settlement',
    name: 'financesettlement',
    meta: { title: 'settlement', icon: 'lock', roles: ['Consign'] },
    children: [
      {
        path: 'settlement',
        name: 'addsettlement',
        component: () => import('@/views/finance/settlement/index'),
        meta: { title: 'addsettlement', roles: ['Consign'] }
      },
      {
        path: 'detail',
        name: 'financedetail',
        component: () => import('@/views/finance/index'),
        meta: { title: 'financedetail', roles: ['Consign'] }
      },
      {
        path: 'settlementrecord',
        name: 'settlementrecord',
        component: () => import('@/views/finance/settlementrecord/index'),
        meta: { title: 'settlementrecord', roles: ['Consign'] }
      },
      {
        path: 'settlements',
        name: 'settlements',
        component: () => import('@/views/finance/settlements/index'),
        meta: { title: 'settlements', roles: ['ConsignManage'] }
      },
      {
        path: 'finances',
        name: 'finances',
        component: () => import('@/views/finance/finances/index'),
        meta: { title: 'finances', roles: ['ConsignManage'] }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/users',
    name: 'systemmanager',
    meta: { title: 'systemmanager', icon: 'component', roles: ['ConsignManage', 'SuperManage', 'OrderManage'] },
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/manage/users/index'),
        meta: { title: 'users', roles: ['ConsignManage', 'SuperManage', 'OrderManage'] }
      },
      {
        path: 'notice',
        name: 'SystemNotice',
        component: () => import('@/views/manage/notice/index'),
        meta: { title: 'SystemNotice', roles: ['ConsignManage', 'SuperManage', 'OrderManage'] }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
