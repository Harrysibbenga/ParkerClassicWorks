(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{737:function(e,t,n){var content=n(750);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("242aae9f",content,!0,{sourceMap:!1})},749:function(e,t,n){"use strict";n(737)},750:function(e,t,n){var o=n(16)(!1);o.push([e.i,".zoom-show{transform:scale(1)}.zoom-hide,.zoom-show{transition:transform .5s ease-in;position:relative}.zoom-hide{transform:scale(0)}.default-img,.default-img-row-detail{transition:all .5s ease-in}.default-img{transform:scale(0);position:absolute}.default-text{transition:all .2s ease-in;opacity:1}.pointer{cursor:pointer}.fade-text{opacity:0;transition:opacity 1s ease-in}.move-up-1{transition:all .2s ease-in}.move-up-1,.move-up-2{transform:translateY(-400px)}.move-up-2{transition:all .2s ease-in .2s}.move-down-2{transition:all .2s ease-in}.move-down-1,.move-down-2{transform:translateY(400px)}.move-down-1{transition:all .2s ease-in .2s}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(27,63,121,.6)}.list-style{list-style-type:none;font-size:1.5rem;font-weight:700}.default-left-detail{position:absolute;left:0;bottom:20%;margin-left:50px;text-align:right;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}",""]),e.exports=o},756:function(e,t,n){"use strict";n.r(t);n(69);var o={data:function(){return{slide:null,active:null,side:null,items:[{url:"detail/Decontamination.png",title:"Cleaning & decontamination",text:"This consists of touchless decontamination with snow foam and pressure wash, touchless tar and removal, and touchless iron fallout removal. The wheels will be fully decontaminated with appropriate chemicals and the car will be pressure washed and hand washed using pH neutral products. The car is also treated with a clay bar as well. Once dried, it will then be moved into the detailing lab where the paint will be inspected. From here your vehicle will go through the stage process, dependent on your needs or requirements."},{url:"detail/4-Stage-Polish.png",title:"Polishing stages",text:"Our stage one services involves giving your vehicle a once over with a fine machine polish, while stage two utilises both a medium and fine finish with a suitable brush and chemicals. If required, stage three involves a coarse polish, before the medium and fine levels from stages one and two, while stage four involves wet sand. This may only be minor in places, or it could be on whole panels to remove orange peel."},{url:"detail/Serum-Protection.png",title:"Serum application",text:"On top of the polishing stages, there will be a serum application ranging from one to seven years, dependent on specific customer requirements, to help your car have a long-lasting showroom shine."},{url:"detail/Wax-Ceramic-PPF.png",title:"Final protection",text:"Once work has been completed, your car can be finished and protected with a quality wax, ceramic coating, or with paint protection film, so it leaves Parker "}]}},methods:{view:function(e){var t=this;this.slide=e,setTimeout((function(){t.active=e}),500)},goBack:function(){var e=this;this.active=null,setTimeout((function(){e.slide=null}),600)},hover:function(e){this.side=e}}},l=(n(749),n(22)),r=n(19),c=n.n(r),d=n(527),h=n(532),m=n(290),v=n(524),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("v-row",{staticClass:"primary",staticStyle:{"min-height":"100vh"}},[e._l(e.items,(function(t,i){return o("v-img",{key:i,class:{"zoom-show":e.active===i,"default-img":e.active!==i},attrs:{src:n(168)("./"+t.url),height:"100vh"}},[o("div",{staticClass:"overlay"},[o("v-container",{staticClass:"fill-height"},[o("v-row",{staticClass:"text-center white--text",staticStyle:{width:"60vw"}},[o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[o("h2",{staticClass:"display-1 font-weight-bold py-10 pointer",on:{click:e.goBack}},[e._v("\n                "+e._s(t.title)+"\n              ")]),e._v(" "),o("p",[e._v(e._s(t.text))])])],1)],1)],1)])})),e._v(" "),o("v-col",{staticClass:"d-none d-lg-block pa-0 default-img-row-detail",class:{"zoom-hide":null!==e.slide},attrs:{cols:"12"}},[o("v-row",{attrs:{"no-gutters":""}},e._l(e.items,(function(t,i){return o("v-col",{key:i,attrs:{cols:"6"}},[o("v-img",{staticClass:"pointer",class:{"d-none":null!==e.active},attrs:{src:n(168)("./"+t.url),height:"50vh"},on:{mouseenter:function(t){return e.hover(i)},mouseleave:function(t){return e.hover(null)},click:function(t){return e.view(i)}}},[o("div",{staticClass:"px-2 default-left-detail primary"},[o("h2",{staticClass:"text-h4 white--text text-uppercase"},[o("span",[e._v(e._s(t.title))])])])])],1)})),1)],1),e._v(" "),o("v-row",{staticClass:"overflow-hidden d-lg-none"},[o("v-col",{staticClass:"d-flex flex-center",attrs:{cols:"12"}},[o("ul",{staticClass:"text-center white--text ma-auto list-style"},e._l(e.items,(function(t,i){return o("li",{key:i,staticClass:"py-2 default-text pointer",class:{"move-up-1":null!==e.slide&&0==i,"move-up-2":null!==e.slide&&1==i,"move-down-1":null!==e.slide&&2==i,"move-down-2":null!==e.slide&&3==i,"fade-text":null!==e.slide,"d-none":null!==e.active},on:{click:function(t){return e.view(i)}}},[e._v("\n            "+e._s(t.title)+"\n          ")])})),0)])],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:d.a,VContainer:h.a,VImg:m.a,VRow:v.a})}}]);