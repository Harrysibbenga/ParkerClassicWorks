(window.webpackJsonp=window.webpackJsonp||[]).push([[26,20],{293:function(t,e,n){"use strict";var l=n(117);e.a=l.a},510:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(24),n(48);var l={props:{size:{type:Number,required:!1,default:8}},data:function(){return{pageNumber:0}},computed:{pageCount:function(){if(this.items){var t=this.items.length,s=this.size;return Math.ceil(t/s)}return 0},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.items?this.items.slice(t,e):[]}},methods:{nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--}}}},512:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("83ff91dc",content,!0,{sourceMap:!1})},513:function(t,e,n){var l=n(16)(!1);l.push([t.i,"@import url(https://use.typekit.net/dne1bad.css);"]),l.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=l},656:function(t,e,n){"use strict";n.r(e);n(9),n(41);var l={props:{images:{type:Array,default:function(){return[]}}},data:function(){return{files:[],uploadImage:!1,exists:!1,uploadImages:[]}},computed:{uploadMsg:function(){return this.$store.getters["images/message"]},imgs:function(){return this.uploadImages}},methods:{upload:function(){this.uploadImage=!0},closeUpload:function(){this.uploadImage=!1,this.imgs.length>0&&this.$emit("update:images",this.imgs),this.uploadImages=[]},uploadImagesMethod:function(){var t=this;this.files.forEach((function(e){e.alt=e.name,t.$store.dispatch("images/multiUpload",e).then((function(e){t.uploadImages.push(e)}))}))}}},r=n(27),o=n(23),c=n.n(o),d=n(133),v=n(661),f=n(506),h=n(704),m=n(497),_=n(770),y=n(679),x=n(199),C=n(498),V=n(499),I=n(81),S=n(507),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",nativeOn:{click:function(e){return t.upload.apply(null,arguments)}}},[t._v("Multi Upload")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",scrollable:""},model:{value:t.uploadImage,callback:function(e){t.uploadImage=e},expression:"uploadImage"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Multi upload")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.closeUpload}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{"prepend-icon":"mdi-camera",multiple:"",label:"File input","aria-describedby":"Muiti image upload",accept:"image/jpeg image/png"},scopedSlots:t._u([{key:"selection",fn:function(e){var text=e.text;return[n("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v("\n                  "+t._s(text)+"\n                ")])]}}]),model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),t._v(" "),n("v-row",t._l(t.uploadImages,(function(img,e){return n("v-col",{key:e,staticClass:"pt-3",attrs:{cols:"6",md:"4"}},[img?n("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}}):t._e()])})),1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:0==t.files.length},on:{click:t.uploadImagesMethod}},[t._v("Upload")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},nativeOn:{click:function(e){return t.closeUpload.apply(null,arguments)}}},[t._v("Close")])],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("UIMessage",{attrs:{msg:t.uploadMsg}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VChip:h.a,VCol:m.a,VDialog:_.a,VFileInput:y.a,VIcon:x.a,VRow:C.a,VSpacer:V.a,VToolbar:I.a,VToolbarTitle:S.b})},657:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(510).a],props:{images:{type:Array,default:function(){return[]}}},data:function(){return{selectedImages:[],selectModel:!1}},computed:{items:function(){return this.$store.getters["images/imageImages"]}},methods:{select:function(){this.selectModel=!0},close:function(){this.selectModel=!1,this.selectedImages=[]},saveSelection:function(){this.$emit("update:images",this.selectedImages),this.close()}}},r=n(27),o=n(23),c=n.n(o),d=n(133),v=n(661),f=n(506),h=n(497),m=n(503),_=n(770),y=n(489),x=n(199),C=n(498),V=n(499),I=n(81),S=n(507),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",nativeOn:{click:function(e){return t.select.apply(null,arguments)}}},[t._v("Select")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",scrollable:""},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Select images")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.close}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:t.selectedImages==[]},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n              Save\n            ")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"9"}},[n("v-row",[t._l(t.paginatedData,(function(img,e){return n("v-col",{key:e,staticClass:"p-2",attrs:{cols:"3"}},[n("div",{staticClass:"\n                      custom-control custom-checkbox custom-control\n                      text-center\n                    "},[n("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedImages,expression:"selectedImages"}],staticClass:"custom-control-input",attrs:{id:img.id,type:"checkbox"},domProps:{value:img,checked:Array.isArray(t.selectedImages)?t._i(t.selectedImages,img)>-1:t.selectedImages},on:{change:function(e){var n=t.selectedImages,l=e.target,r=!!l.checked;if(Array.isArray(n)){var o=img,c=t._i(n,o);l.checked?c<0&&(t.selectedImages=n.concat([o])):c>-1&&(t.selectedImages=n.slice(0,c).concat(n.slice(c+1)))}else t.selectedImages=r}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:img.id}},[t._v("\n                      "+t._s(img.alt)+"\n                    ")])])])})),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",class:{"d-none":0==t.pageNumber},nativeOn:{click:function(e){return t.prevPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-left")])],1),t._v("\n                  "+t._s(t.pageNumber+1)+" of "+t._s(t.pageCount)+"\n                  "),n("v-btn",{staticClass:"primary",class:{"d-none":t.pageNumber>=t.pageCount-1},nativeOn:{click:function(e){return t.nextPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-right")])],1)],1)],2)],1),t._v(" "),n("v-divider",{attrs:{vertical:""}}),t._v(" "),n("v-col",{attrs:{cols:"2",fixed:""}},[t._l(t.selectedImages,(function(img,t){return n("v-col",{key:t,staticClass:"p-2",attrs:{cols:"12"}},[n("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}})])})),t._v(" "),n("div",{staticClass:"d-flex"},[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary"},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("Confirm")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}},[t._v("Close")])],1)],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:f.c,VCardTitle:f.d,VCol:h.a,VContainer:m.a,VDialog:_.a,VDivider:y.a,VIcon:x.a,VRow:C.a,VSpacer:V.a,VToolbar:I.a,VToolbarItems:S.a,VToolbarTitle:S.b})},669:function(t,e,n){"use strict";n.r(e);n(9),n(166);var l={props:{gallery:{type:Array,default:function(){return[]}}},data:function(){return{imageProp:[],type:"image"}},computed:{galleryContent:{get:function(){return this.gallery},set:function(t){this.$emit("update:gallery",t)}},images:{get:function(){return this.imageProp},set:function(t){var e=this;t.forEach((function(img){e.galleryContent.push(img)}))}}},methods:{removeItem:function(t,e){e.splice(t,1)}}},r=n(27),o=n(23),c=n.n(o),d=n(133),v=n(497),f=n(498),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pt-3"},[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Gallery content")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex"},[n("ModalsMultiUpload",{attrs:{images:t.images,type:t.type},on:{"update:images":function(e){t.images=e}}}),t._v(" "),n("ModalsSelectImagesModal",{attrs:{images:t.images},on:{"update:images":function(e){t.images=e}}})],1)]),t._v(" "),n("v-row",t._l(t.galleryContent,(function(img,e){return n("v-col",{key:e,attrs:{cols:"6",md:"4"}},[n("img",{staticClass:"img-fluid",attrs:{src:img.url,alt:img.alt}}),t._v(" "),n("v-btn",{attrs:{elevation:"2",outlined:""},on:{click:function(n){return t.removeItem(e,t.galleryContent)}}},[t._v("Delete")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ModalsMultiUpload:n(656).default,ModalsSelectImagesModal:n(657).default}),c()(component,{VBtn:d.a,VCol:v.a,VRow:f.a})},679:function(t,e,n){"use strict";n(12),n(10),n(13),n(14),n(15);var l=n(205),r=n(1),o=n(28),c=(n(24),n(52),n(70),n(41),n(33),n(166),n(9),n(48),n(512),n(293)),d=n(704),v=n(3),f=n(11),h=n(60);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(v.A)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(v.r)(e,1024===this.base))},internalArrayValue:function(){return Object(v.A)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,l=void 0===n?"":n,r=e.size,o=void 0===r?0:r,c=t.truncateText(l);return t.showSize?"".concat(c," (").concat(Object(v.r)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(f.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(v.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(h.c)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,l){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[l],file:n,index:l}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=_(_({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(l.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})}}]);