(window.webpackJsonp=window.webpackJsonp||[]).push([[46,14,15,16],{691:function(t,e,l){var content=l(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(17).default)("242aae9f",content,!0,{sourceMap:!1})},700:function(t,e,l){"use strict";l(691)},701:function(t,e,l){var n=l(16)(!1);n.push([t.i,".animate-text{padding-top:100px;transition:all 1s ease-in;padding-bottom:100px}.default-text{transition:all 1s ease-in;opacity:1}.fade-text{opacity:0;transition:opacity 1.25s ease-in}",""]),t.exports=n},707:function(t,e,l){"use strict";l.r(e);var n={props:{head:{type:Object,required:!0}}},r=l(27),o=l(23),c=l.n(o),d=l(283),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{attrs:{src:l(295)("./"+t.head.url),height:"100vh"}},[n("div",{staticClass:"px-2 default-left primary",staticStyle:{width:"auto"}},[n("h2",{staticClass:"text-h4 white--text text-uppercase"},[t._v("\n      "+t._s(t.head.title)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a})},708:function(t,e,l){"use strict";l.r(e);var n={props:{mid:{type:Object,required:!0}}},r=l(27),o=l(23),c=l.n(o),d=l(283),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",{attrs:{src:l(295)("./"+t.mid.url),height:"100vh"}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a})},709:function(t,e,l){"use strict";l.r(e);var n={methods:{test:function(){document.getElementById("test3").classList.toggle("fade-text"),document.getElementById("test2").classList.toggle("animate-text"),document.getElementById("test1").classList.toggle("fade-text")}}},r=(l(700),l(27)),o=l(23),c=l.n(o),d=l(497),f=l(498),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{staticClass:"primary",staticStyle:{"min-height":"600px"}},[l("v-col",{staticClass:"overflow-hidden white--text d-flex flex-center",attrs:{cols:"12"}},[l("ul",{staticClass:"ma-auto overflow-hidden"},[l("li",{staticClass:"default-text",attrs:{id:"test1"}},[t._v("Test")]),t._v(" "),l("li",{staticClass:"default-text",attrs:{id:"test2"},on:{click:t.test}},[t._v("Test2")]),t._v(" "),l("li",{staticClass:"default-text",attrs:{id:"test3"}},[t._v("Test3")])])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VRow:f.a})},759:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{detail:{head:{url:"detail/Wash.png",title:"Detailing"},mid:{url:"detail/Polish.png"}}}}},r=l(27),o=l(23),c=l.n(o),d=l(497),f=l(503),v=l(498),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},[l("v-col",{attrs:{cols:"12"}},[l("detail-head",{attrs:{head:t.detail.head}})],1),t._v(" "),l("v-col",{staticClass:"primary white--text",attrs:{cols:"12"}},[l("v-container",{staticClass:"text-center py-16"},[l("p",{staticClass:"text-size py-8"},[t._v("\n        In case you aren’t familiar, car detailing involves undertaking a\n        deep, or detailed, clean of a car, accompanied with restoration of\n        damaged panels or poor paintwork. This can be as simple as a light\n        polish or as in-depth as wet sand surface removal but will vary from\n        owner to owner.\n        "),l("br"),t._v(" "),l("br"),t._v("\n        What Parker Classic Works can do for you\n        "),l("br"),t._v(" "),l("br"),t._v("\n        The Parker Classic Works detailing team is led by Operations and\n        Vehicle Cosmetic specialist Adam Davies, who is qualified in in\n        Paintwork Polishing and Ceramic Coatings. The team uses high-quality\n        SONAX car care products and can finish your car with wax, ceramic\n        coating, or paint protection film, to provide a lasting look.\n        "),l("br"),t._v(" "),l("br"),t._v("\n        Parker Classic Works is "),l("strong",[t._v("Precision. Delivered.")])])])],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[l("detail-mid",{attrs:{mid:t.detail.mid}})],1),t._v(" "),l("v-col",{attrs:{cols:"12"}},[l("detail-steps")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DetailHead:l(707).default,DetailMid:l(708).default,DetailSteps:l(709).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:v.a})}}]);