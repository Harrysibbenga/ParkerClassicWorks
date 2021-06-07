import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as CarouselMobileHead } from '../../components/Carousel/mobileHead.vue'
export { default as SectionFeature } from '../../components/Section/feature.vue'
export { default as UiMoreBtn } from '../../components/Ui/moreBtn.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselMobileHead = import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c))
export const LazySectionFeature = import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMoreBtn = import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c))
