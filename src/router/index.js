import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// const __import = require('_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
},
{
  path: '/authredirect',
  component: _import('login/authredirect'),
  hidden: true
},
{
  path: '/404',
  component: _import('error/404'),
  hidden: true
},
{
  path: '/401',
  component: _import('error/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: '首页',
  hidden: true,
  children: [{
    path: 'dashboard',
    component: _import('dashboard/index')
  }]
},
{
  path: '/introduction',
  component: Layout,
  redirect: '/introduction/index',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: 'index',
    component: _import('introduction/index'),
    name: '简述'
  }]
},
{
  path: '/gate',
  component: Layout,
  redirect: '/gate/index',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: 'index',
    component: _import('gate/index'),
    name: '路由列表操作'
  }]
},
{
  path: '/gate/groovyFilter',
  component: Layout,
  redirect: '/gate/filter',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: '/',
    component: _import('gate/filter'),
    name: '动态过滤'
  }]
},
{
  path: '/gate/gateAuthProvider',
  component: Layout,
  redirect: '/gate/authprovider',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: '/',
    component: _import('gate/authprovider'),
    name: '动态过滤'
  }]
},
{
  path: '/gate/gateIgnoreUri',
  component: Layout,
  redirect: '/gate/gateIgnoreUri',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: '/',
    component: _import('gate/gateIgnoreUri'),
    name: '动态过滤'
  }]
},

{
  path: '/message',
  component: Layout,
  redirect: '/message/index',
  icon: 'form',
  noDropdown: true,
  children: [{
    path: 'index',
    component: _import('message/index'),
    name: '路由列表操作'
  }]
}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
  path: '/baseManager',
  component: Layout,
  name: '基础配置管理',
  icon: 'setting',
  authority: 'baseManager',
  children: [{
    path: 'userManager',
    icon: 'fa-user',
    component: _import('admin/user/index'),
    name: '用户管理',
    authority: 'userManager'
  }, {
    path: 'menuManager',
    icon: 'category',
    component: _import('admin/menu/index'),
    name: '菜单管理',
    authority: 'menuManager'
  }, {
    path: 'groupManager',
    icon: 'group_fill',
    component: _import('admin/group/index'),
    name: '角色权限管理',
    authority: 'groupManager'
  }, {
    path: 'groupTypeManager',
    icon: 'fa-users',
    component: _import('admin/groupType/index'),
    name: '角色类型管理',
    authority: 'groupTypeManager'
  }, {
    path: 'gateLogManager',
    icon: 'viewlist',
    component: _import('admin/gateLog/index'),
    name: '操作日志管理',
    authority: 'gateLogManager'
  }]
}]

export const asyncRouterMap2 = [{
  path: '/gateManager',
  component: Layout,
  name: '路由列表',
  icon: 'setting',
  authority: 'gateManager',
  children: [{
    path: 'gateList',
    icon: 'fa-user',
    component: _import('gate/index'),
    name: '路由列表操作',
    authority: 'gate'
  }
  // , {
  //   path: 'groovyFilter',
  //   icon: 'viewlist',
  //   component: _import('gate/filter'),
  //   name: '操作日志管理',
  //   authority: 'gateLogManager'
  // }
  ]
}]
