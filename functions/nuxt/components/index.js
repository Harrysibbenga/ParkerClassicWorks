import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as AdminAddPost } from '../../components/Admin/addPost.vue'
export { default as AdminEditPosts } from '../../components/Admin/editPosts.vue'
export { default as AppFoot } from '../../components/App/foot.vue'
export { default as AppHead } from '../../components/App/head.vue'
export { default as DetailHead } from '../../components/Detail/head.vue'
export { default as DetailMid } from '../../components/Detail/mid.vue'
export { default as DetailSteps } from '../../components/Detail/steps.vue'
export { default as CarouselAbout } from '../../components/Carousel/about.vue'
export { default as CarouselLaptopHead } from '../../components/Carousel/laptopHead.vue'
export { default as CarouselMobileHead } from '../../components/Carousel/mobileHead.vue'
export { default as ModalsDeleteModal } from '../../components/Modals/DeleteModal.vue'
export { default as ModalsEditModal } from '../../components/Modals/EditModal.vue'
export { default as ModalsExistsModal } from '../../components/Modals/ExistsModal.vue'
export { default as ModalsMultiUpload } from '../../components/Modals/MultiUpload.vue'
export { default as ModalsSelectImageModal } from '../../components/Modals/SelectImageModal.vue'
export { default as ModalsSelectImagesModal } from '../../components/Modals/SelectImagesModal.vue'
export { default as ModalsSelectModal } from '../../components/Modals/SelectModal.vue'
export { default as ModalsUploadModal } from '../../components/Modals/UploadModal.vue'
export { default as PostEditPosts } from '../../components/Post/EditPosts.vue'
export { default as PostGallery } from '../../components/Post/Gallery.vue'
export { default as PostImageUpload } from '../../components/Post/ImageUpload.vue'
export { default as PostQuotes } from '../../components/Post/Quotes.vue'
export { default as PostStandardForm } from '../../components/Post/StandardForm.vue'
export { default as SectionAffiliates } from '../../components/Section/affiliates.vue'
export { default as SectionContact } from '../../components/Section/contact.vue'
export { default as SectionFeature } from '../../components/Section/feature.vue'
export { default as SectionInsta } from '../../components/Section/insta.vue'
export { default as SectionMap } from '../../components/Section/map.vue'
export { default as SectionPartners } from '../../components/Section/partners.vue'
export { default as SectionSubscribe } from '../../components/Section/subscribe.vue'
export { default as ServiceBooking } from '../../components/Service/booking.vue'
export { default as ServiceContactInfo } from '../../components/Service/contactInfo.vue'
export { default as ServiceHead } from '../../components/Service/head.vue'
export { default as ServiceMid } from '../../components/Service/mid.vue'
export { default as ServiceRegCheck } from '../../components/Service/regCheck.vue'
export { default as ServiceType } from '../../components/Service/type.vue'
export { default as UiEditor } from '../../components/Ui/editor.vue'
export { default as UiMessage } from '../../components/Ui/message.vue'
export { default as UiMoreBtn } from '../../components/Ui/moreBtn.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminAddPost = import('../../components/Admin/addPost.vue' /* webpackChunkName: "components/admin-add-post" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminEditPosts = import('../../components/Admin/editPosts.vue' /* webpackChunkName: "components/admin-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const LazyAppFoot = import('../../components/App/foot.vue' /* webpackChunkName: "components/app-foot" */).then(c => wrapFunctional(c.default || c))
export const LazyAppHead = import('../../components/App/head.vue' /* webpackChunkName: "components/app-head" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailHead = import('../../components/Detail/head.vue' /* webpackChunkName: "components/detail-head" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailMid = import('../../components/Detail/mid.vue' /* webpackChunkName: "components/detail-mid" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailSteps = import('../../components/Detail/steps.vue' /* webpackChunkName: "components/detail-steps" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselAbout = import('../../components/Carousel/about.vue' /* webpackChunkName: "components/carousel-about" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselLaptopHead = import('../../components/Carousel/laptopHead.vue' /* webpackChunkName: "components/carousel-laptop-head" */).then(c => wrapFunctional(c.default || c))
export const LazyCarouselMobileHead = import('../../components/Carousel/mobileHead.vue' /* webpackChunkName: "components/carousel-mobile-head" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsDeleteModal = import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modals-delete-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsEditModal = import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modals-edit-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsExistsModal = import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modals-exists-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsMultiUpload = import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modals-multi-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectImageModal = import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modals-select-image-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectImagesModal = import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modals-select-images-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectModal = import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modals-select-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsUploadModal = import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modals-upload-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyPostEditPosts = import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const LazyPostGallery = import('../../components/Post/Gallery.vue' /* webpackChunkName: "components/post-gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyPostImageUpload = import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyPostQuotes = import('../../components/Post/Quotes.vue' /* webpackChunkName: "components/post-quotes" */).then(c => wrapFunctional(c.default || c))
export const LazyPostStandardForm = import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c))
export const LazySectionAffiliates = import('../../components/Section/affiliates.vue' /* webpackChunkName: "components/section-affiliates" */).then(c => wrapFunctional(c.default || c))
export const LazySectionContact = import('../../components/Section/contact.vue' /* webpackChunkName: "components/section-contact" */).then(c => wrapFunctional(c.default || c))
export const LazySectionFeature = import('../../components/Section/feature.vue' /* webpackChunkName: "components/section-feature" */).then(c => wrapFunctional(c.default || c))
export const LazySectionInsta = import('../../components/Section/insta.vue' /* webpackChunkName: "components/section-insta" */).then(c => wrapFunctional(c.default || c))
export const LazySectionMap = import('../../components/Section/map.vue' /* webpackChunkName: "components/section-map" */).then(c => wrapFunctional(c.default || c))
export const LazySectionPartners = import('../../components/Section/partners.vue' /* webpackChunkName: "components/section-partners" */).then(c => wrapFunctional(c.default || c))
export const LazySectionSubscribe = import('../../components/Section/subscribe.vue' /* webpackChunkName: "components/section-subscribe" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceBooking = import('../../components/Service/booking.vue' /* webpackChunkName: "components/service-booking" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceContactInfo = import('../../components/Service/contactInfo.vue' /* webpackChunkName: "components/service-contact-info" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceHead = import('../../components/Service/head.vue' /* webpackChunkName: "components/service-head" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceMid = import('../../components/Service/mid.vue' /* webpackChunkName: "components/service-mid" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceRegCheck = import('../../components/Service/regCheck.vue' /* webpackChunkName: "components/service-reg-check" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceType = import('../../components/Service/type.vue' /* webpackChunkName: "components/service-type" */).then(c => wrapFunctional(c.default || c))
export const LazyUiEditor = import('../../components/Ui/editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMessage = import('../../components/Ui/message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMoreBtn = import('../../components/Ui/moreBtn.vue' /* webpackChunkName: "components/ui-more-btn" */).then(c => wrapFunctional(c.default || c))
