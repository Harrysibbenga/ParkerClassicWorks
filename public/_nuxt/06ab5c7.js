(window.webpackJsonp=window.webpackJsonp||[]).push([[17,50],{710:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(41);var l={computed:{laptopRes:function(){switch(this.$vuetify.breakpoint.name){case"md":case"lg":case"xl":return!0;default:return!1}}}}},733:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(710).a],props:{link:{type:String,default:""},page:{type:Object,default:function(){}}}},r=n(22),o=n(19),c=n.n(o),d=n(133),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.laptopRes?n("v-btn",{attrs:{to:""==t.link?t.page:t.link,nuxt:!0,plain:"",color:"white"}},[t._v("Click for more >>")]):n("v-btn",{attrs:{nuxt:!0,to:""==t.link?t.page:t.link,plain:"",color:"white"}},[t._v("Tap for more >>")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},772:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{items:[{url:"caterham/MALC4695.jpg",title:"Caterham",type:"/caterham"},{url:"porsche/IMG_3569.jpg",title:"Porsche",type:"/porsche"}],slide:0}},methods:{moveTo:function(t){this.slide=t}}},r=n(22),o=n(19),c=n.n(o),d=n(133),m=n(799),f=n(800),v=n(529),h=n(534),x=n(288),k=n(526),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-carousel",{attrs:{"show-arrows":!1,"hide-delimiters":"",cycle:"",height:"100vh"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[t._l(t.items,(function(t,i){return l("v-carousel-item",{key:i},[l("v-img",{attrs:{src:n(168)("./"+t.url),height:"100vh"}})],1)})),t._v(" "),l("v-container",{staticClass:"absolute fill-height",attrs:{fluid:""}},[l("v-row",{staticClass:"d-flex flex-column text-uppercase white--text my-auto mr-3",attrs:{align:"end",justify:"end"}},t._l(t.items,(function(e,i){return l("transition",{key:i,attrs:{name:"expand",mode:"in-out"}},[l("div",{staticClass:"default px-2",class:{primary:t.slide===i,grow:t.slide===i,shrink:t.slide!==i}},[t.slide===i?l("h2",{staticClass:"text-h4 white--text text-uppercase"},[t._v("\n            "+t._s(e.title)+"\n          ")]):l("h2",{staticClass:"text-h5"})])])})),1),t._v(" "),l("v-row",t._l(t.items,(function(e,i){return l("v-col",{key:i,attrs:{cols:"12 z-index-20 absolute"}},[t.slide===i?l("ui-more-btn",{staticClass:"text-center",attrs:{link:e.type}}):t._e()],1)})),1),t._v(" "),l("v-row",{staticClass:"px-10 align-end",attrs:{justify:"center"}},t._l(t.items,(function(e,i){return l("div",{key:i},[t.slide===i?l("v-btn",{staticClass:"primary mx-5",attrs:{"x-small":""},nativeOn:{click:function(e){return t.moveTo(i)}}}):l("v-btn",{staticClass:"secondary mx-5",attrs:{"x-small":""},nativeOn:{click:function(e){return t.moveTo(i)}}})],1)})),0)],1)],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiMoreBtn:n(733).default}),c()(component,{VBtn:d.a,VCarousel:m.a,VCarouselItem:f.a,VCol:v.a,VContainer:h.a,VImg:x.a,VRow:k.a})}}]);