import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c11c5b6c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _2b5e8edc = () => interopDefault(import('../pages/admin/articles.vue' /* webpackChunkName: "pages/admin/articles" */))
const _1746fe33 = () => interopDefault(import('../pages/admin/services.vue' /* webpackChunkName: "pages/admin/services" */))
const _662bd8dc = () => interopDefault(import('../pages/articles.vue' /* webpackChunkName: "pages/articles" */))
const _3906eff4 = () => interopDefault(import('../pages/caterham.vue' /* webpackChunkName: "pages/caterham" */))
const _2abf4a34 = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _92fb8898 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _37aa2164 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5a08ac4a = () => interopDefault(import('../pages/porsche.vue' /* webpackChunkName: "pages/porsche" */))
const _e1bb0c32 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _b50ebfa8 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _024f7c3a = () => interopDefault(import('../pages/service/_type.vue' /* webpackChunkName: "pages/service/_type" */))
const _6e027e4d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _c11c5b6c,
    name: "admin",
    children: [{
      path: "articles",
      component: _2b5e8edc,
      name: "admin-articles"
    }, {
      path: "services",
      component: _1746fe33,
      name: "admin-services"
    }]
  }, {
    path: "/articles",
    component: _662bd8dc,
    name: "articles"
  }, {
    path: "/caterham",
    component: _3906eff4,
    name: "caterham"
  }, {
    path: "/detail",
    component: _2abf4a34,
    name: "detail"
  }, {
    path: "/home",
    component: _92fb8898,
    name: "home"
  }, {
    path: "/login",
    component: _37aa2164,
    name: "login"
  }, {
    path: "/porsche",
    component: _5a08ac4a,
    name: "porsche"
  }, {
    path: "/test",
    component: _e1bb0c32,
    name: "test"
  }, {
    path: "/article/:slug?",
    component: _b50ebfa8,
    name: "article-slug"
  }, {
    path: "/service/:type?",
    component: _024f7c3a,
    name: "service-type"
  }, {
    path: "/",
    component: _6e027e4d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
