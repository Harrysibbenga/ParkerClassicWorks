import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  CarouselMobileHead: () => import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c)),
  SectionFeature: () => import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c)),
  UiMoreBtn: () => import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
