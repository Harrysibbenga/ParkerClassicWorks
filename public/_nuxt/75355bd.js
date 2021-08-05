(window.webpackJsonp=window.webpackJsonp||[]).push([[50,32,33,34,35,36,37,39],{508:function(t,e,r){"use strict";r.r(e);r(69);var c={props:{msg:{type:Object,default:function(){return{type:"info"}}}},watch:{msg:function(t){var e=this;!0===t.status&&setTimeout((function(){e.msg.status=!1}),5e3)}}},l=r(27),n=r(23),o=r.n(n),v=r(504),d=r(497),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"text-center mt-2 d-none",class:{"d-block":t.msg.status},attrs:{cols:"12"}},[r("v-alert",{attrs:{color:t.msg.type}},[t._v("\n    "+t._s(t.msg.message)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VAlert:v.a,VCol:d.a})},658:function(t,e,r){"use strict";r.r(e);r(41),r(19),r(44),r(49),r(297);var c={props:{data:{type:Object,default:function(){return{}}}},data:function(){return{reg:"",msg:{status:!1,message:"",type:""},view:!1}},computed:{result:function(){return this.$store.getters["dvla/result"]},error:function(){return this.$store.getters["dvla/error"]},carInfo:function(){return this.data},mobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return!0;default:return!1}}},methods:{getReg:function(){var t=this,e=new URLSearchParams;e.append("username","Torque"),e.append("RegistrationNumber",this.reg);this.$axios.post("http://www.regcheck.org.uk/api/reg.asmx/Check",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){t.$emit("update:data",e.data),t.view=!0})).catch((function(e){t.msg={type:"error",message:e.message,status:!0}}))},confirm:function(){this.$emit("update:confirm",!0)},decline:function(){this.reset()},reset:function(){this.$emit("update:data",{}),this.view=!1}}},l=r(27),n=r(23),o=r.n(n),v=r(133),d=r(497),m=r(503),f=r(498),h=r(117),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"text-center py-16",attrs:{cols:"12",md:"6"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"car-reg"}},[t._v("Enter your car registration:")]),t._v(" "),r("v-text-field",{staticClass:"white--text mt-4 mx-auto",staticStyle:{width:"500px"},attrs:{name:"car-reg",solo:"",dense:""},model:{value:t.reg,callback:function(e){t.reg=e},expression:"reg"}}),t._v(" "),r("v-btn",{staticClass:"rounded-pill pa-6 mt-n3",staticStyle:{width:"150px"},attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.getReg.apply(null,arguments)}}},[t._v("Submit")]),t._v("\n      "+t._s(t.data)+"\n    ")],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[t.mobile?r("v-btn",{staticClass:"rounded-pill pa-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.manualDialog.apply(null,arguments)}}},[t._v("Enter Manually")]):r("v-btn",{staticClass:"rounded-pill pa-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.manualDialog.apply(null,arguments)}}},[t._v("Manually submit details")])],1),t._v(" "),r("ui-message",{attrs:{msg:t.msg}}),t._v(" "),t.view?r("v-col",{staticClass:"py-10",attrs:{cols:"12"}},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"car-reg"}},[t._v("Make:")]),t._v(" "),r("v-text-field",{staticClass:"white--text mt-4 mx-auto",attrs:{name:"car-reg",solo:"",dense:""},model:{value:t.carInfo.make,callback:function(e){t.$set(t.carInfo,"make",e)},expression:"carInfo.make"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"car-reg"}},[t._v("Model:")]),t._v(" "),r("v-text-field",{staticClass:"white--text mt-4 mx-auto",attrs:{name:"car-reg",solo:"",dense:""},model:{value:t.carInfo.model,callback:function(e){t.$set(t.carInfo,"model",e)},expression:"carInfo.model"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"car-reg"}},[t._v("Year:")]),t._v(" "),r("v-text-field",{staticClass:"white--text mt-4 mx-auto",attrs:{name:"car-reg",solo:"",dense:""},model:{value:t.carInfo.year,callback:function(e){t.$set(t.carInfo,"year",e)},expression:"carInfo.year"}})],1)],1)],1):t._e(),t._v(" "),t.view?r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12",md:"6"}},[t.mobile?r("v-btn",{staticClass:"rounded-pill pa-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.manualDialog.apply(null,arguments)}}},[t._v("That’s my car")]):r("v-btn",{staticClass:"rounded-pill pa-md-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.confirm.apply(null,arguments)}}},[t._v("Okay, that’s my car")])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[t.mobile?r("v-btn",{staticClass:"rounded-pill pa-md-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.decline.apply(null,arguments)}}},[t._v("Not my car")]):r("v-btn",{staticClass:"rounded-pill pa-md-6 mt-n3",attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.decline.apply(null,arguments)}}},[t._v("No, that’s not my car")])],1)],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{UiMessage:r(508).default}),o()(component,{VBtn:v.a,VCol:d.a,VContainer:m.a,VRow:f.a,VTextField:h.a})},659:function(t,e,r){"use strict";r.r(e);var c={props:{services:{type:Array,default:function(){return[]}},confirm:{type:Boolean,default:!1}},data:function(){return{items:["Minor Service","Major Service","MOT","Health Checks","Pre-Purchase Inspection","Suspension and Geometry","Engine and Gearbox rebuild","Track preparation","Restoration"],selectedServices:[],msg:{status:!1,message:"",type:""}}},methods:{updateServices:function(){this.selectedServices.length>0?(this.$emit("update:services",this.selectedServices),this.$emit("update:confirm",!0)):this.msg={status:!0,message:"Please select a service",type:"error"}}}},l=r(27),n=r(23),o=r.n(n),v=r(133),d=r(497),m=r(503),f=r(498),h=r(753),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"fill-height my-auto",attrs:{align:"center"}},[r("v-col",{staticClass:"text-center py-16",attrs:{cols:"12"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"services"}},[t._v("What service or services do you require ?")]),t._v(" "),r("v-select",{staticClass:"white--text mt-4 mx-auto",staticStyle:{width:"500px"},attrs:{items:t.items,name:"services",multiple:"",chips:"",label:"Services",solo:"",dense:""},model:{value:t.selectedServices,callback:function(e){t.selectedServices=e},expression:"selectedServices"}}),t._v(" "),r("v-btn",{staticClass:"rounded-pill pa-6 mt-n3",staticStyle:{width:"150px"},attrs:{color:"secondary","x-large":""},nativeOn:{click:function(e){return t.updateServices.apply(null,arguments)}}},[t._v("Confirm")])],1),t._v(" "),r("ui-message",{attrs:{msg:t.msg}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{UiMessage:r(508).default}),o()(component,{VBtn:v.a,VCol:d.a,VContainer:m.a,VRow:f.a,VSelect:h.a})},660:function(t,e,r){"use strict";r.r(e);var c={props:{contact:{type:Object,default:function(){return{}}}},data:function(){return{items:["Minor Service","Major Service","MOT","Health Checks","Pre-Purchase Inspection","Suspension and Geometry","Engine and Gearbox rebuild","Track preparation","Restoration"]}},computed:{carDetails:function(){return this.contact.carDetails},services:function(){return this.contact.services}}},l=r(27),n=r(23),o=r.n(n),v=r(497),d=r(503),m=r(498),f=r(753),h=r(117),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"make"}},[t._v("Make:")]),t._v(" "),r("v-text-field",{staticClass:"mt-4 mx-auto disabled-input",attrs:{name:"make",solo:"",dense:"",disabled:""},model:{value:t.carDetails.make,callback:function(e){t.$set(t.carDetails,"make",e)},expression:"carDetails.make"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"model"}},[t._v("Model:")]),t._v(" "),r("v-text-field",{staticClass:"mt-4 mx-auto disabled-input",attrs:{name:"model",solo:"",dense:"",disabled:""},model:{value:t.carDetails.model,callback:function(e){t.$set(t.carDetails,"model",e)},expression:"carDetails.model"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"year"}},[t._v("Year:")]),t._v(" "),r("v-text-field",{staticClass:"mt-4 mx-auto disabled-input",attrs:{name:"year",solo:"",dense:"",disabled:""},model:{value:t.carDetails.year,callback:function(e){t.$set(t.carDetails,"year",e)},expression:"carDetails.year"}})],1),t._v(" "),r("v-col",{staticClass:"offset-4",attrs:{cols:"4"}},[r("label",{staticClass:"text-h5 mx-auto",attrs:{for:"services"}},[t._v("Services: ")]),t._v(" "),r("v-select",{staticClass:"mt-4 mx-auto disabled-input",attrs:{items:t.items,name:"services",multiple:"",chips:"",solo:"",dense:"",disabled:""},model:{value:t.services,callback:function(e){t.services=e},expression:"services"}})],1)],1),t._v(" "),r("v-row",[r("section-contact")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{SectionContact:r(298).default}),o()(component,{VCol:v.a,VContainer:d.a,VRow:m.a,VSelect:f.a,VTextField:h.a})},670:function(t,e,r){"use strict";r.r(e);r(69);var c={props:{head:{type:Object,required:!0}},data:function(){return{active:!1}},created:function(){var t=this;setTimeout((function(){t.active=!0}),500)}},l=r(27),n=r(23),o=r.n(n),v=r(283),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-img",{attrs:{src:r(295)("./"+t.head.url),height:"100vh"}},[c("div",{staticClass:"px-2",class:{"default-left":"right"===t.head.position,"default-right":"left"===t.head.position,primary:t.active,grow:t.active}},[t.active?c("h2",{staticClass:"text-h4 white--text text-uppercase"},[t._v("\n      "+t._s(t.head.title)+"\n    ")]):c("h2",{staticClass:"text-h5"})])])}),[],!1,null,null,null);e.default=component.exports;o()(component,{VImg:v.a})},671:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{slide:0,formData:{carDetails:{},contact:{firstName:"",lastName:"",phone:"",email:"",message:""},services:[]}}},computed:{confirmReg:{get:function(){return!1},set:function(t){!0===t&&(this.slide=1)}},confirmServ:{get:function(){return!1},set:function(t){!0===t&&(this.slide=2)}}}},l=r(27),n=r(23),o=r.n(n),v=r(497),d=r(503),m=r(283),f=r(498),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-container",{staticClass:"primary white--text",attrs:{fluid:""}},[c("h1",{staticClass:"text-h3 pa-5 py-16"},[t._v("SERVICE COST INDICATOR")]),t._v(" "),c("v-row",{staticClass:"pb-10"},[c("v-col",{staticClass:"service-section",attrs:{cols:"4"},on:{click:function(e){t.slide=0}}},[c("v-img",{class:{opacity:0!=t.slide},attrs:{src:r(299)}})],1),t._v(" "),c("v-col",{staticClass:"service-section",attrs:{cols:"4"},on:{click:function(e){t.slide=1}}},[c("v-img",{class:{opacity:1!=t.slide},attrs:{src:r(301)}})],1),t._v(" "),c("v-col",{staticClass:"service-section",attrs:{cols:"4"},on:{click:function(e){t.slide=2}}},[c("v-img",{class:{opacity:2!=t.slide},attrs:{src:r(300)}})],1)],1),t._v(" "),c("transition",{staticClass:"row",attrs:{mode:"out-in",name:"slide"}},[0===t.slide?c("v-col",{attrs:{cols:"12"}},[c("keep-alive",[c("service-reg-check",{attrs:{data:t.formData.carDetails,confirm:t.confirmReg},on:{"update:data":function(e){return t.$set(t.formData,"carDetails",e)},"update:confirm":function(e){t.confirmReg=e}}})],1)],1):t._e(),t._v(" "),1===t.slide?c("v-col",{attrs:{cols:"12"}},[c("keep-alive",[c("service-type",{attrs:{services:t.formData.services,confirm:t.confirmServ},on:{"update:services":function(e){return t.$set(t.formData,"services",e)},"update:confirm":function(e){t.confirmServ=e}}})],1)],1):t._e(),t._v(" "),2===t.slide?c("v-col",{attrs:{cols:"12"}},[c("keep-alive",[c("service-contact-info",{attrs:{contact:t.formData}})],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{ServiceRegCheck:r(658).default,ServiceType:r(659).default,ServiceContactInfo:r(660).default}),o()(component,{VCol:v.a,VContainer:d.a,VImg:m.a,VRow:f.a})},686:function(t,e,r){"use strict";r.r(e);var c={props:{mid:{type:Object,required:!0}}},l=r(27),n=r(23),o=r.n(n),v=r(497),d=r(283),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-img",{attrs:{src:r(295)("./"+t.mid.url),height:"100vh"}},[c("v-col",{staticClass:"text-center",attrs:{col:"12",md:"6",lg:"4"}},[c("h2",{staticClass:"text-h1 white--text pa-5 font-weight-bold"},[t._v("\n      "+t._s(t.mid.title)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCol:v.a,VImg:d.a})},762:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{post:{head:{url:"porsche/IMG_3569.jpg",title:"Porcshe",position:"left"},mid:{url:"svg/feature.svg",title:"The Porcshe range"}}}}},l=r(27),n=r(23),o=r.n(n),v=r(497),d=r(503),m=r(498),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("service-head",{attrs:{head:t.post.head}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("service-mid",{attrs:{mid:t.post.mid}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("service-booking")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{ServiceHead:r(670).default,ServiceMid:r(686).default,ServiceBooking:r(671).default}),o()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})}}]);