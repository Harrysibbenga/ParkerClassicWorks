(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{564:function(e,t,r){var content=r(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("cc033526",content,!0,{sourceMap:!1})},724:function(e,t,r){"use strict";r(564)},725:function(e,t,r){var n=r(16)(!1);n.push([e.i,"h3[data-v-ee0968aa]{text-align:right;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}",""]),e.exports=n},733:function(e,t,r){"use strict";r.r(t);var n=r(30),o=r(217),l=r(94),source=r(216),m=r.n(source),c={mixins:[o.validationMixin],validations:{fname:{required:l.required},lname:{required:l.required},phone:{required:l.required,maxLength:Object(l.maxLength)(11)},email:{required:l.required,email:l.email},message:{required:l.required}},props:{carDetails:{type:Object,default:function(){return{}}},services:{type:Array,default:function(){return[]}},subject:{type:String,default:"General Enquiry"},title:{type:String,default:""},btnColor:{type:String,default:"white"}},data:function(){return{fname:"",lname:"",phone:"",email:"",message:"",msg:{type:"",message:""}}},computed:{fnameErrors:function(){var e=[];return this.$v.fname.$dirty?(!this.$v.fname.required&&e.push("Frist name is required."),e):e},lnameErrors:function(){var e=[];return this.$v.lname.$dirty?(!this.$v.lname.required&&e.push("Last name is required."),e):e},phoneErrors:function(){var e=[];return this.$v.phone.$dirty?(!this.$v.phone.maxLength&&e.push("Phone number must be at most 11 digits long"),!this.$v.phone.required&&e.push("Phone number is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},messageErrors:function(){var e=[];return this.$v.message.$dirty?(!this.$v.message.required&&e.push("A message is required."),e):e}},methods:{submit:function(){if(this.$v.$touch(),this.$v.$invalid)this.msg={type:"error",message:"Please fill the form correctly!"};else{this.msg={type:"info",message:"Sending ..."};var e={fname:this.fname,lname:this.lname,phone:this.phone,message:this.message,email:this.email,subject:this.subject};this.carDetails!=={}&&(e.make=this.carDetails.carInfo.CarMake.CurrentTextValue,e.model=this.carDetails.carInfo.CarModel.CurrentTextValue,e.reg=this.carDetails.carInfo.reg,e.year=this.carDetails.carInfo.RegistrationYear,e.tax=this.carDetails.motInfo.taxDate,e.history=this.carDetails.motInfo.tests),this.services!==[]&&(e.services=this.services),this.save(),this.sendEmail(e)}},sendEmail:function(e){var t=this;m.a.send("service_mqk22oq","pcw_template_ac3abx9",e,"user_nzDfhN2MWfSPkCKqEp7Td").then((function(e){console.log("SUCCESS!",e.status,e.text),t.msg={type:"success",message:"Message sent someone will be in touch shortly"}}),(function(e){console.log("FAILED...",e),t.msg={type:"error",message:e}})).then((function(){t.reset()}))},save:function(){n.c.add({fname:this.fname,lname:this.lname,email:this.email,services:this.services,message:this.message,carInfo:this.carDetails.carInfo,motInfo:this.carDetails.motInfo}).catch((function(e){console.log(e)}))},clear:function(){this.reset(),this.msg={type:"",message:""}},reset:function(){this.$v.$reset(),this.fname="",this.lname="",this.phone="",this.email="",this.message=""}}},h=(r(724),r(22)),f=r(19),v=r.n(f),d=r(542),$=r(133),x=r(536),y=r(541),w=r(533),_=r(117),E=r(538),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{staticClass:"offset-lg-2",attrs:{cols:"12",lg:"8"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{solo:"","error-messages":e.fnameErrors,name:"fname",label:"First name",color:"white",required:""},on:{input:function(t){return e.$v.fname.$touch()},blur:function(t){return e.$v.fname.$touch()}},model:{value:e.fname,callback:function(t){e.fname=t},expression:"fname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{solo:"","error-messages":e.lnameErrors,name:"lname",label:"Last name",color:"white",required:""},on:{input:function(t){return e.$v.lname.$touch()},blur:function(t){return e.$v.lname.$touch()}},model:{value:e.lname,callback:function(t){e.lname=t},expression:"lname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{"error-messages":e.phoneErrors,counter:11,solo:"",label:"Phone number",name:"phone",color:"white",required:""},on:{input:function(t){return e.$v.phone.$touch()},blur:function(t){return e.$v.phone.$touch()}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"Email",name:"email",color:"white",solo:"",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{name:"message",label:"Message",light:"",solo:"","error-messages":e.messageErrors,color:"white",clearable:"",required:""},on:{input:function(t){return e.$v.message.$touch()},blur:function(t){return e.$v.message.$touch()}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-4 rounded-pill",class:e.btnColor,attrs:{type:"submit"}},[e._v("\n              submit\n            ")]),e._v(" "),r("v-btn",{staticClass:"mr-4 white rounded-pill",nativeOn:{click:function(t){return e.clear.apply(null,arguments)}}},[e._v("\n              clear\n            ")])],1)],1),e._v(" "),e.msg.message?r("v-alert",{staticClass:"mt-6",attrs:{type:e.msg.type}},[e._v("\n          "+e._s(e.msg.message)+"\n        ")]):e._e()],1)])],1)],1)}),[],!1,null,"ee0968aa",null);t.default=component.exports;v()(component,{VAlert:d.a,VBtn:$.a,VCol:x.a,VContainer:y.a,VRow:w.a,VTextField:_.a,VTextarea:E.a})}}]);