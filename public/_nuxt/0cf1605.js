(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{742:function(t,e,o){var content=o(762);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("242aae9f",content,!0,{sourceMap:!1})},761:function(t,e,o){"use strict";o(742)},762:function(t,e,o){var n=o(16)(!1);n.push([t.i,".zoom-show{transform:scale(1)}.zoom-hide,.zoom-show{transition:transform .5s ease-in;position:relative}.zoom-hide{transform:scale(0)}.default-img,.default-img-row-detail{transition:all .5s ease-in}.default-img{transform:scale(0);position:absolute}.default-text{transition:all .2s ease-in;opacity:1}.pointer{cursor:pointer}.fade-text{opacity:0;transition:opacity 1s ease-in}.move-up-1{transition:all .2s ease-in}.move-up-1,.move-up-2{transform:translateY(-400px)}.move-up-2{transition:all .2s ease-in .2s}.move-down-2{transition:all .2s ease-in}.move-down-1,.move-down-2{transform:translateY(400px)}.move-down-1{transition:all .2s ease-in .2s}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(27,63,121,.6)}.list-style{list-style-type:none;font-size:1.5rem;font-weight:700}.default-left-detail{position:absolute;left:0;bottom:20%;margin-left:50px;text-align:right;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}",""]),t.exports=n},803:function(t,e,o){"use strict";o.r(e);o(69);var n={data:function(){return{slide:null,active:null,side:null,items:[{url:"detail/02021000-01-SONAX-XTREME-Polish-Wax-3-Hybrid-NPT.png",title:"Cleaning & decontamination",text:"This consists of touchless decontamination with snow foam and pressure wash, touchless tar and removal, and touchless iron fallout removal. The wheels will be fully decontaminated with appropriate chemicals and the car will be pressure washed and hand washed using pH neutral products. The car is also treated with a clay bar as well. Once dried, it will then be moved into the detailing lab where the paint will be inspected. From here your vehicle will go through the stage process, dependent on your needs or requirements."},{url:"detail/4-Stage-Polish.png",title:"Polishing stages",text:"Our stage one services involves giving your vehicle a once over with a fine machine polish, while stage two utilises both a medium and fine finish with a suitable brush and chemicals. If required, stage three involves a coarse polish, before the medium and fine levels from stages one and two, while stage four involves wet sand. This may only be minor in places, or it could be on whole panels to remove orange peel."},{url:"detail/Decontamination.png",title:"Final sealing",text:"On top of the polishing stages, your car can be finished and protected with a quality wax, ceramic coating, or with paint protection film. Once work has been completed there will be a serum application ranging from one to seven years, dependent on specific customer requirements, so it leaves Parker Classic Works with a finish better than it had in the showroom and level of service that will leave your car looking its very best for years to come."},{url:"detail/Wax-Ceramic-PPF.png",title:"Finishing touches",text:"To complete the job, Parker Classic Works can provide necessary attention on areas such as the trim, lights, plastics, tyres, arches, plates, and so forth, so your bodywork isn’t the only part of your car that looks the part."}]}},methods:{view:function(t){var e=this;this.slide=t,setTimeout((function(){e.active=t}),500)},goBack:function(){var t=this;this.active=null,setTimeout((function(){t.slide=null}),600)},hover:function(t){this.side=t}}},l=(o(761),o(22)),r=o(19),c=o.n(r),h=o(133),d=o(536),m=o(541),v=o(287),f=o(533),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"primary",staticStyle:{"min-height":"100vh"}},[t._l(t.items,(function(e,i){return n("v-img",{key:i,class:{"zoom-show":t.active===i,"default-img":t.active!==i},attrs:{src:o(168)("./"+e.url),height:"100vh"}},[n("div",{staticClass:"overlay"},[n("v-container",{staticClass:"fill-height"},[n("v-row",{staticClass:"text-center white--text",staticStyle:{width:"60vw"}},[n("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[n("h2",{staticClass:"display-1 font-weight-bold py-10 pointer",on:{click:t.goBack}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),n("p",[t._v(t._s(e.text))]),t._v(" "),n("v-btn",{attrs:{plain:"",color:"white"},on:{click:t.goBack}},[t._v("Click to return >>")])],1)],1)],1)],1)])})),t._v(" "),n("v-col",{staticClass:"d-none d-lg-block pa-0 default-img-row-detail",class:{"zoom-hide":null!==t.slide},attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":""}},t._l(t.items,(function(e,i){return n("v-col",{key:i,attrs:{cols:"6"}},[n("v-img",{staticClass:"pointer",class:{"d-none":null!==t.active},attrs:{src:o(168)("./"+e.url),height:"50vh"},on:{mouseenter:function(e){return t.hover(i)},mouseleave:function(e){return t.hover(null)},click:function(e){return t.view(i)}}},[n("div",{staticClass:"px-2 default-left-detail primary"},[n("h2",{staticClass:"text-h4 white--text text-uppercase"},[n("span",[t._v(t._s(e.title))])])])])],1)})),1)],1),t._v(" "),n("v-row",{staticClass:"overflow-hidden d-lg-none"},[n("v-col",{staticClass:"d-flex flex-center",attrs:{cols:"12"}},[n("ul",{staticClass:"text-center white--text ma-auto list-style"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"py-2 default-text pointer",class:{"move-up-1":null!==t.slide&&0==i,"move-up-2":null!==t.slide&&1==i,"move-down-1":null!==t.slide&&2==i,"move-down-2":null!==t.slide&&3==i,"fade-text":null!==t.slide,"d-none":null!==t.active},on:{click:function(e){return t.view(i)}}},[t._v("\n            "+t._s(e.title)+"\n          ")])})),0)])],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCol:d.a,VContainer:m.a,VImg:v.a,VRow:f.a})}}]);