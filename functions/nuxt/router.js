import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0beccef7 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _4812ae85 = () => interopDefault(import('../pages/admin/articles.vue' /* webpackChunkName: "pages/admin/articles" */))
const _e14a3ac6 = () => interopDefault(import('../pages/admin/careers.vue' /* webpackChunkName: "pages/admin/careers" */))
const _7508f426 = () => interopDefault(import('../pages/admin/services.vue' /* webpackChunkName: "pages/admin/services" */))
const _eaa8d6c0 = () => interopDefault(import('../pages/akrapovic.vue' /* webpackChunkName: "pages/akrapovic" */))
const _234aa546 = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _40c29f8e = () => interopDefault(import('../pages/caterham.vue' /* webpackChunkName: "pages/caterham" */))
const _65613499 = () => interopDefault(import('../pages/detailing.vue' /* webpackChunkName: "pages/detailing" */))
const _5ec3be43 = () => interopDefault(import('../pages/hre.vue' /* webpackChunkName: "pages/hre" */))
const _b7b5c3de = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5bacf15b = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _ab75af8c = () => interopDefault(import('../pages/policy.vue' /* webpackChunkName: "pages/policy" */))
const _0caa2f48 = () => interopDefault(import('../pages/porsche.vue' /* webpackChunkName: "pages/porsche" */))
const _1735ebf1 = () => interopDefault(import('../pages/sonax.vue' /* webpackChunkName: "pages/sonax" */))
const _859b7276 = () => interopDefault(import('../pages/trackstar.vue' /* webpackChunkName: "pages/trackstar" */))
const _f112c04e = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _4b050a0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0beccef7,
    name: "admin",
    children: [{
      path: "articles",
      component: _4812ae85,
      name: "admin-articles"
    }, {
      path: "careers",
      component: _e14a3ac6,
      name: "admin-careers"
    }, {
      path: "services",
      component: _7508f426,
      name: "admin-services"
    }]
  }, {
    path: "/akrapovic",
    component: _eaa8d6c0,
    name: "akrapovic"
  }, {
    path: "/careers",
    component: _234aa546,
    name: "careers"
  }, {
    path: "/caterham",
    component: _40c29f8e,
    name: "caterham"
  }, {
    path: "/detailing",
    component: _65613499,
    name: "detailing"
  }, {
    path: "/hre",
    component: _5ec3be43,
    name: "hre"
  }, {
    path: "/login",
    component: _b7b5c3de,
    name: "login"
  }, {
    path: "/news",
    component: _5bacf15b,
    name: "news"
  }, {
    path: "/policy",
    component: _ab75af8c,
    name: "policy"
  }, {
    path: "/porsche",
    component: _0caa2f48,
    name: "porsche"
  }, {
    path: "/sonax",
    component: _1735ebf1,
    name: "sonax"
  }, {
    path: "/trackstar",
    component: _859b7276,
    name: "trackstar"
  }, {
    path: "/article/:slug?",
    component: _f112c04e,
    name: "article-slug"
  }, {
    path: "/",
    component: _4b050a0c,
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
