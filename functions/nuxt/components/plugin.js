import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  CarouselAbout: () => import('../../components/Carousel/about.vue' /* webpackChunkName: "components/carousel-about" */).then(c => wrapFunctional(c.default || c)),
  CarouselLaptopHead: () => import('../../components/Carousel/laptopHead.vue' /* webpackChunkName: "components/carousel-laptop-head" */).then(c => wrapFunctional(c.default || c)),
  CarouselMobileHead: () => import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c)),
  AppFoot: () => import('../../components/App/foot.vue' /* webpackChunkName: "components/app-foot" */).then(c => wrapFunctional(c.default || c)),
  AppHead: () => import('../../components/App/head.vue' /* webpackChunkName: "components/app-head" */).then(c => wrapFunctional(c.default || c)),
  UiMoreBtn: () => import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c)),
  SectionContact: () => import('../../components/Section/contact.vue' /* webpackChunkName: "components/section-contact" */).then(c => wrapFunctional(c.default || c)),
  SectionFeature: () => import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c)),
  SectionMap: () => import('../../components/Section/map.vue' /* webpackChunkName: "components/section-map" */).then(c => wrapFunctional(c.default || c)),
  SectionPartners: () => import('../../components/Section/partners.vue' /* webpackChunkName: "components/section-partners" */).then(c => wrapFunctional(c.default || c)),
  ServiceBooking: () => import('../../components/Service/booking.vue' /* webpackChunkName: "components/service-booking" */).then(c => wrapFunctional(c.default || c)),
  ServiceHead: () => import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c)),
  ServiceMid: () => import('../../components/Service/mid.vue' /* webpackChunkName: "components/service-mid" */).then(c => wrapFunctional(c.default || c)),
  ServiceRegCheck: () => import('../../components/Service/regCheck.vue' /* webpackChunkName: "components/service-reg-check" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
