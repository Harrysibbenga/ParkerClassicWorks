import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as CarouselAbout } from '../../components/Carousel/about.vue'
export { default as CarouselLaptopHead } from '../../components/Carousel/laptopHead.vue'
export { default as CarouselMobileHead } from '../../components/Carousel/mobileHead.vue'
export { default as AppFoot } from '../../components/App/foot.vue'
export { default as AppHead } from '../../components/App/head.vue'
export { default as UiMoreBtn } from '../../components/Ui/moreBtn.vue'
export { default as SectionContact } from '../../components/Section/contact.vue'
export { default as SectionFeature } from '../../components/Section/feature.vue'
export { default as SectionMap } from '../../components/Section/map.vue'
export { default as SectionPartners } from '../../components/Section/partners.vue'
export { default as ServiceBooking } from '../../components/Service/booking.vue'
export { default as ServiceHead } from '../../components/Service/head.vue'
export { default as ServiceMid } from '../../components/Service/mid.vue'
export { default as ServiceRegCheck } from '../../components/Service/regCheck.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselAbout = import('../../components/Carousel/about.vue' /* webpackChunkName: "components/carousel-about" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselLaptopHead = import('../../components/Carousel/laptopHead.vue' /* webpackChunkName: "components/carousel-laptop-head" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselMobileHead = import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c))
export const LazyAppFoot = import('../../components/App/foot.vue' /* webpackChunkName: "components/app-foot" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHead = import('../../components/App/head.vue' /* webpackChunkName: "components/app-head" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMoreBtn = import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c))
export const LazySectionContact = import('../../components/Section/contact.vue' /* webpackChunkName: "components/section-contact" */).then(c => wrapFunctional(c.default || c))
export const LazySectionFeature = import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c))
export const LazySectionMap = import('../../components/Section/map.vue' /* webpackChunkName: "components/section-map" */).then(c => wrapFunctional(c.default || c))
export const LazySectionPartners = import('../../components/Section/partners.vue' /* webpackChunkName: "components/section-partners" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceBooking = import('../../components/Service/booking.vue' /* webpackChunkName: "components/service-booking" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceHead = import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceMid = import('../../components/Service/mid.vue' /* webpackChunkName: "components/service-mid" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceRegCheck = import('../../components/Service/regCheck.vue' /* webpackChunkName: "components/service-reg-check" */).then(c => wrapFunctional(c.default || c))
