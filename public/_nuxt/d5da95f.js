(window.webpackJsonp=window.webpackJsonp||[]).push([[10,25,28,41,42],{295:function(t,e,n){"use strict";var l=n(117);e.a=l.a},533:function(t,e,n){"use strict";n.r(e);n(69);var l={props:{msg:{type:Object,default:function(){return{type:"info"}}}},watch:{msg:function(t){var e=this;!0===t.status&&setTimeout((function(){e.msg.status=!1}),5e3)}}},o=n(24),r=n(21),c=n.n(r),d=n(528),h=n(521),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"text-center mt-2 d-none",class:{"d-block":t.msg.status},attrs:{cols:"12"}},[n("v-alert",{attrs:{color:t.msg.type}},[t._v("\n    "+t._s(t.msg.message)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VCol:h.a})},534:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(25),n(48);var l={props:{size:{type:Number,required:!1,default:8}},data:function(){return{pageNumber:0}},computed:{pageCount:function(){if(this.items){var t=this.items.length,s=this.size;return Math.ceil(t/s)}return 0},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.items?this.items.slice(t,e):[]}},methods:{nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--}}}},535:function(t,e,n){"use strict";n.r(e);var l;l=n(694);var o={components:{ckeditor:n(695).component},props:{content:{type:String,required:!0,default:"Enter text here"}},data:function(){return{editor:l,editorConfig:{fontFamily:{options:["default","Ubuntu, Arial, sans-serif","Ubuntu Mono, Courier New, Courier, monospace"],supportAllValues:!0},fontSize:{options:[9,11,13,"default",17,19,21]},fontColor:{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"}]},link:{addTargetToExternalLinks:!0,decorators:[{mode:"manual",label:"Downloadable",attributes:{download:"download"}}]},toolbar:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","imageUpload","insertTable","|","alignment","outdent","indent","|","link","undo","redo"],language:"en",image:{toolbar:["imageTextAlternative","|","imageStyle:full","imageStyle:side","|","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter"],styles:["full","alignLeft","alignRight","side","alignCenter"]},alignment:{options:["left","right"]},tableProperties:{borderColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}],backgroundColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}}}}},r=n(24),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,value:t.content},on:{input:function(content){return t.$emit("update:content",content)}}})],1)}),[],!1,null,null,null);e.default=component.exports},539:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("83ff91dc",content,!0,{sourceMap:!1})},540:function(t,e,n){var l=n(16)(!1);l.push([t.i,"@import url(https://use.typekit.net/dne1bad.css);"]),l.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=l},543:function(t,e,n){"use strict";n.r(e);var l={props:{image:{type:Object,default:function(){return{url:"",alt:"",id:""}}}},data:function(){return{defaultImg:{url:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7",alt:"Placeholder Image"},postImage:null}},computed:{images:function(){return this.$store.getters["images/images"]}},watch:{postImage:function(t,e){t&&this.$emit("update:image",t)}}},o=n(24),r=n(21),c=n.n(r),d=n(521),h=n(284),f=n(522),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[""!=t.image.url?n("v-img",{attrs:{src:t.image.url,alt:t.image.alt,width:"100%"}}):n("v-img",{attrs:{src:t.defaultImg.url,alt:t.defaultImg.alt,width:"100%"}})],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("ModalsUploadModal",{attrs:{image:t.postImage},on:{"update:image":function(e){t.postImage=e}}}),t._v(" "),n("ModalsSelectImageModal",{attrs:{item:t.postImage,images:t.images},on:{"update:item":function(e){t.postImage=e}}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ModalsUploadModal:n(544).default,ModalsSelectImageModal:n(545).default}),c()(component,{VCol:d.a,VImg:h.a,VRow:f.a})},544:function(t,e,n){"use strict";n.r(e);n(41),n(9),n(69);var l=n(35),o={props:{image:{type:Object,default:function(){return{}}}},data:function(){return{file:"",uploadImage:!1,exists:!1,exisitsImg:{},uploadedImage:{alt:"",url:"",id:""},payload:{file:"",alt:"",type:""}}},computed:{uploadMsg:function(){return this.$store.getters["images/message"]},img:{get:function(){return this.image},set:function(t){this.$emit("update:image",t)}}},methods:{upload:function(){this.uploadImage=!0},reset:function(){this.uploadedImage={alt:"",url:"",id:""},this.file="",this.payload={file:"",alt:"",type:""}},closeUpload:function(){this.uploadImage=!1,this.reset()},checkFile:function(){var t=this;l.b.where("name","==",this.file.name).get().then((function(e){e.forEach((function(e){e.exists&&(t.uploadImage=!1,t.img.url=e.data().url,t.img.alt=e.data().alt,t.img.id=e.id,t.exists=!0)}))}))},saveFile:function(){var t=this;this.payload={file:this.file,alt:this.uploadedImage.alt},this.$store.dispatch("global/setLoading",!0),this.$store.dispatch("images/uploadImage",this.payload).then((function(e){t.uploadedImage=e,t.$store.dispatch("global/setLoading",!1),t.$emit("update:image",t.uploadedImage),setTimeout((function(){t.reset(),t.uploadImage=!1,t.$store.commit("images/SET_MSG",{})}),4e3)}))}}},r=n(24),c=n(21),d=n.n(c),h=n(133),f=n(536),m=n(530),v=n(521),y=n(800),_=n(693),x=n(199),C=n(522),w=n(523),k=n(117),V=n(81),S=n(531),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",on:{click:t.upload}},[t._v("Upload")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",transition:"dialog-bottom-transition"},model:{value:t.uploadImage,callback:function(e){t.uploadImage=e},expression:"uploadImage"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Upload image")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.closeUpload}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Description",inline:""},model:{value:t.uploadedImage.alt,callback:function(e){t.$set(t.uploadedImage,"alt","string"==typeof e?e.trim():e)},expression:"uploadedImage.alt"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{label:"File upload","prepend-icon":"mdi-camera",accept:"image/jpeg image/png"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:""==t.uploadedImage.alt},nativeOn:{click:function(e){return t.saveFile.apply(null,arguments)}}},[t._v("Save")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},nativeOn:{click:function(e){return t.closeUpload.apply(null,arguments)}}},[t._v("Close")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("UiMessage",{attrs:{msg:t.uploadMsg}})],1)],1)],1)],1),t._v(" "),t.exists?n("UiExistsModal",{attrs:{exists:t.exists,image:t.img},on:{"update:exists":function(e){t.exists=e},"update:image":function(e){t.img=e}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{UiMessage:n(533).default}),d()(component,{VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:v.a,VDialog:y.a,VFileInput:_.a,VIcon:x.a,VRow:C.a,VSpacer:w.a,VTextField:k.a,VToolbar:V.a,VToolbarTitle:S.b})},545:function(t,e,n){"use strict";n.r(e);var l={mixins:[n(534).a],props:{item:{type:Object,default:function(){return{}}},images:{type:Array,default:function(){return[]}}},data:function(){return{selected:"",selectModel:!1,itemData:{},radios:null}},computed:{items:{get:function(){return this.images},set:function(t){return t}}},methods:{select:function(){this.selectModel=!0},saveSelection:function(){this.$emit("update:item",this.selected.itemData),this.reset()},reset:function(){this.selected="",this.selectModel=!1,this.itemData={},this.radios=null},close:function(){this.reset()}}},o=n(24),r=n(21),c=n.n(r),d=n(133),h=n(536),f=n(530),m=n(521),v=n(527),y=n(800),_=n(199),x=n(284),C=n(522),w=n(523),k=n(81),V=n(531),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",nativeOn:{click:function(e){return t.select.apply(null,arguments)}}},[t._v("Select")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",scrollable:""},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Select an image")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.selectModel=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n              Save\n            ")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[t._l(t.paginatedData,(function(e,l){return n("v-col",{key:l,attrs:{cols:"3"}},[n("div",{staticClass:"custom-control custom-radio custom-control text-center"},[n("v-img",{attrs:{src:e.url,alt:e.alt,width:"100%",height:"100%"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{id:e.id,name:"images",type:"radio"},domProps:{value:{itemData:e},checked:t._q(t.selected,{itemData:e})},on:{change:function(n){t.selected={itemData:e}}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v("\n                  "+t._s(e.alt)+"\n                ")])],1)])})),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",class:{"d-none":0==t.pageNumber},nativeOn:{click:function(e){return t.prevPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-left")])],1),t._v("\n              "+t._s(t.pageNumber+1)+" of "+t._s(t.pageCount)+"\n              "),n("v-btn",{staticClass:"primary",class:{"d-none":t.pageNumber>=t.pageCount-1},nativeOn:{click:function(e){return t.nextPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-right")])],1)],1)],2)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("Save")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},on:{click:t.close}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:v.a,VDialog:y.a,VIcon:_.a,VImg:x.a,VRow:C.a,VSpacer:w.a,VToolbar:k.a,VToolbarItems:V.a,VToolbarTitle:V.b})},546:function(t,e,n){"use strict";n.r(e);var l={props:{content:{type:Object,default:function(){}}},computed:{postContent:{get:function(){return this.content},set:function(t){this.$emit("update:content",t)}}}},o=n(24),r=n(21),c=n.n(r),d=n(521),h=n(781),f=n(522),m=n(117),v=n(524),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["article"==t.content.type?n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-text-field",{attrs:{label:"Title"},model:{value:t.postContent.title,callback:function(e){t.$set(t.postContent,"title","string"==typeof e?e.trim():e)},expression:"postContent.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-date-picker",{attrs:{type:"date"},model:{value:t.postContent.date,callback:function(e){t.$set(t.postContent,"date","string"==typeof e?e.trim():e)},expression:"postContent.date"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{counter:"",label:"Excerpt",value:t.postContent.excerpt,rows:2},model:{value:t.postContent.excerpt,callback:function(e){t.$set(t.postContent,"excerpt","string"==typeof e?e.trim():e)},expression:"postContent.excerpt"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"pb-1"},[t._v("Main content")]),t._v(" "),n("UiEditor",{attrs:{content:t.postContent.content},on:{"update:content":function(e){return t.$set(t.postContent,"content",e)}}})],1)],1):t._e(),t._v(" "),"service"==t.content.type?n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-text-field",{attrs:{label:"Title"},model:{value:t.postContent.title,callback:function(e){t.$set(t.postContent,"title","string"==typeof e?e.trim():e)},expression:"postContent.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-text-field",{attrs:{label:"Subtitle"},model:{value:t.postContent.subtitle,callback:function(e){t.$set(t.postContent,"subtitle","string"==typeof e?e.trim():e)},expression:"postContent.subtitle"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{counter:"",label:"Excerpt",value:t.postContent.excerpt,rows:2},model:{value:t.postContent.excerpt,callback:function(e){t.$set(t.postContent,"excerpt","string"==typeof e?e.trim():e)},expression:"postContent.excerpt"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"pb-1"},[t._v("Main content")]),t._v(" "),n("UiEditor",{attrs:{content:t.postContent.content},on:{"update:content":function(e){return t.$set(t.postContent,"content",e)}}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiEditor:n(535).default}),c()(component,{VCol:d.a,VDatePicker:h.a,VRow:f.a,VTextField:m.a,VTextarea:v.a})},693:function(t,e,n){"use strict";n(12),n(10),n(13),n(14),n(15);var l=n(206),o=n(1),r=n(28),c=(n(25),n(52),n(70),n(41),n(33),n(166),n(9),n(48),n(539),n(295)),d=n(733),h=n(3),f=n(11),m=n(60);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(h.A)(t).every((function(t){return null!=t&&"object"===Object(r.a)(t)}))}}},computed:{classes:function(){return y(y({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(h.r)(e,1024===this.base))},internalArrayValue:function(){return Object(h.A)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,l=void 0===n?"":n,o=e.size,r=void 0===o?0:o,c=t.truncateText(l);return t.showSize?"".concat(c," (").concat(Object(h.r)(r,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(f.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(h.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(m.c)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,l){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[l],file:n,index:l}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=y(y({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(l.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},797:function(t,e,n){"use strict";n.r(e);n(34),n(75),n(9),n(98),n(69);var l=n(35),o={props:{postData:{type:Object,default:function(){}}},data:function(){return{defaultImg:{url:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7",alt:"Placeholder Image"},msg:{type:"",message:""}}},computed:{post:{get:function(){return this.postData},set:function(t){this.$emit("update:postData",t)}}},methods:{reset:function(){this.post={image:{id:"",url:"",alt:""},gallery:[],content:{type:"service",title:"",track:"",content:"",excerpt:"",date:""},quotes:[{name:"",content:""}],slug:"",year:""},this.confirmEdit=!1,this.confirmDelete=!1},addPost:function(){var t=this,e=[],n=[],o="";e=this.post.content.title.split(" "),o=this.post.content.date,this.post.year=o.split("-")[0],e.forEach((function(t){n.push(t.toLowerCase())})),this.post.slug=n.join("-")+"-"+o,""===this.post.image.url&&(this.post.image.url=this.defaultImg.url,this.post.image.alt=this.defaultImg.alt),l.d.add({title:this.post.content.title,excerpt:this.post.content.excerpt,slug:this.post.slug,date:this.post.content.date,content:this.post.content.content,quotes:this.post.quotes,track:this.post.content.track,year:this.post.year,createdOn:new Date,imgId:this.post.image.id,url:this.post.image.url,alt:this.post.image.alt,type:this.post.content.type,gallery:this.post.gallery}).then((function(){t.reset(),t.msg={type:"success",message:"Post added"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.msg={type:"warning",message:e.message},setTimeout((function(){t.msg={type:"",message:""}}),2e3)}))},submitForm:function(){var t=this;""===this.post.content.date||""===this.post.content.title?(this.msg={type:"Warning",message:"Missing information please make sure the post information is filled"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)):this.addPost()}}},r=n(24),c=n(21),d=n.n(c),h=n(133),f=n(521),m=n(527),v=n(522),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("h1",{staticClass:"font-weight-bold text-center pb-2"},[t._v("Add New Service")]),t._v(" "),n("v-row",{staticClass:"pt-2"},[n("v-col",{attrs:{cols:"12"}},[n("h2",[t._v("Images")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("PostImageUpload",{attrs:{image:t.post.image},on:{"update:image":function(e){return t.$set(t.post,"image",e)}}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("PostImageUpload",{attrs:{image:t.post.subimage},on:{"update:image":function(e){return t.$set(t.post,"subimage",e)}}})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("PostStandardForm",{attrs:{content:t.post.content},on:{"update:content":function(e){return t.$set(t.post,"content",e)}}}),t._v(" "),n("UiMessage",{attrs:{msg:t.msg}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{color:"primary"},nativeOn:{click:function(e){return t.submitForm.apply(null,arguments)}}},[t._v("Add Service")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{PostImageUpload:n(543).default,PostStandardForm:n(546).default,UiMessage:n(533).default}),d()(component,{VBtn:h.a,VCol:f.a,VContainer:m.a,VRow:v.a})}}]);