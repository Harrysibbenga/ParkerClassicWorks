import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c11c5b6c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _2b5e8edc = () => interopDefault(import('../pages/admin/articles.vue' /* webpackChunkName: "pages/admin/articles" */))
const _1746fe33 = () => interopDefault(import('../pages/admin/services.vue' /* webpackChunkName: "pages/admin/services" */))
const _0288b673 = () => interopDefault(import('../pages/akrapovic.vue' /* webpackChunkName: "pages/akrapovic" */))
const _3906eff4 = () => interopDefault(import('../pages/caterham.vue' /* webpackChunkName: "pages/caterham" */))
const _45835328 = () => interopDefault(import('../pages/detailing.vue' /* webpackChunkName: "pages/detailing" */))
const _37aa2164 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _26a0b7a8 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _f13ee172 = () => interopDefault(import('../pages/policy.vue' /* webpackChunkName: "pages/policy" */))
const _5a08ac4a = () => interopDefault(import('../pages/porsche.vue' /* webpackChunkName: "pages/porsche" */))
const _350f6898 = () => interopDefault(import('../pages/trackstar.vue' /* webpackChunkName: "pages/trackstar" */))
const _b50ebfa8 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
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
    path: "/akrapovic",
    component: _0288b673,
    name: "akrapovic"
  }, {
    path: "/caterham",
    component: _3906eff4,
    name: "caterham"
  }, {
    path: "/detailing",
    component: _45835328,
    name: "detailing"
  }, {
    path: "/login",
    component: _37aa2164,
    name: "login"
  }, {
    path: "/news",
    component: _26a0b7a8,
    name: "news"
  }, {
    path: "/policy",
    component: _f13ee172,
    name: "policy"
  }, {
    path: "/porsche",
    component: _5a08ac4a,
    name: "porsche"
  }, {
    path: "/trackstar",
    component: _350f6898,
    name: "trackstar"
  }, {
    path: "/article/:slug?",
    component: _b50ebfa8,
    name: "article-slug"
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
