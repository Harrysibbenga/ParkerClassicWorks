import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AdminAddPost: () => import('../../components/Admin/addPost.vue' /* webpackChunkName: "components/admin-add-post" */).then(c => wrapFunctional(c.default || c)),
  AdminEditPosts: () => import('../../components/Admin/editPosts.vue' /* webpackChunkName: "components/admin-edit-posts" */).then(c => wrapFunctional(c.default || c)),
  AppFoot: () => import('../../components/App/foot.vue' /* webpackChunkName: "components/app-foot" */).then(c => wrapFunctional(c.default || c)),
  AppHead: () => import('../../components/App/head.vue' /* webpackChunkName: "components/app-head" */).then(c => wrapFunctional(c.default || c)),
  DetailHead: () => import('../../components/Detail/head.vue' /* webpackChunkName: "components/detail-head" */).then(c => wrapFunctional(c.default || c)),
  DetailMid: () => import('../../components/Detail/mid.vue' /* webpackChunkName: "components/detail-mid" */).then(c => wrapFunctional(c.default || c)),
  DetailSteps: () => import('../../components/Detail/steps.vue' /* webpackChunkName: "components/detail-steps" */).then(c => wrapFunctional(c.default || c)),
  CarouselAbout: () => import('../../components/Carousel/about.vue' /* webpackChunkName: "components/carousel-about" */).then(c => wrapFunctional(c.default || c)),
  CarouselLaptopHead: () => import('../../components/Carousel/laptopHead.vue' /* webpackChunkName: "components/carousel-laptop-head" */).then(c => wrapFunctional(c.default || c)),
  CarouselMobileHead: () => import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c)),
  ModalsDeleteModal: () => import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modals-delete-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsEditModal: () => import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modals-edit-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsExistsModal: () => import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modals-exists-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsMultiUpload: () => import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modals-multi-upload" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectImageModal: () => import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modals-select-image-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectImagesModal: () => import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modals-select-images-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectModal: () => import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modals-select-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsUploadModal: () => import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modals-upload-modal" */).then(c => wrapFunctional(c.default || c)),
  PostEditPosts: () => import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c)),
  PostGallery: () => import('../../components/Post/Gallery.vue' /* webpackChunkName: "components/post-gallery" */).then(c => wrapFunctional(c.default || c)),
  PostImageUpload: () => import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c)),
  PostQuotes: () => import('../../components/Post/Quotes.vue' /* webpackChunkName: "components/post-quotes" */).then(c => wrapFunctional(c.default || c)),
  PostStandardForm: () => import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c)),
  SectionAffiliates: () => import('../../components/Section/affiliates.vue' /* webpackChunkName: "components/section-affiliates" */).then(c => wrapFunctional(c.default || c)),
  SectionContact: () => import('../../components/Section/contact.vue' /* webpackChunkName: "components/section-contact" */).then(c => wrapFunctional(c.default || c)),
  SectionFeature: () => import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c)),
  SectionInsta: () => import('../../components/Section/insta.vue' /* webpackChunkName: "components/section-insta" */).then(c => wrapFunctional(c.default || c)),
  SectionMap: () => import('../../components/Section/map.vue' /* webpackChunkName: "components/section-map" */).then(c => wrapFunctional(c.default || c)),
  SectionPartners: () => import('../../components/Section/partners.vue' /* webpackChunkName: "components/section-partners" */).then(c => wrapFunctional(c.default || c)),
  SectionSubscribe: () => import('../../components/Section/subscribe.vue' /* webpackChunkName: "components/section-subscribe" */).then(c => wrapFunctional(c.default || c)),
  ServiceBooking: () => import('../../components/Service/booking.vue' /* webpackChunkName: "components/service-booking" */).then(c => wrapFunctional(c.default || c)),
  ServiceContactInfo: () => import('../../components/Service/contactInfo.vue' /* webpackChunkName: "components/service-contact-info" */).then(c => wrapFunctional(c.default || c)),
  ServiceHead: () => import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c)),
  ServiceMid: () => import('../../components/Service/mid.vue' /* webpackChunkName: "components/service-mid" */).then(c => wrapFunctional(c.default || c)),
  ServiceRegCheck: () => import('../../components/Service/regCheck.vue' /* webpackChunkName: "components/service-reg-check" */).then(c => wrapFunctional(c.default || c)),
  ServiceType: () => import('../../components/Service/type.vue' /* webpackChunkName: "components/service-type" */).then(c => wrapFunctional(c.default || c)),
  UiEditor: () => import('../../components/Ui/editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c)),
  UiMessage: () => import('../../components/Ui/message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c)),
  UiMoreBtn: () => import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
