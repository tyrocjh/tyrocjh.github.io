(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11,28],{401:function(t,e,o){"use strict";o.r(e);o(84),o(124),o(120);var n={name:"FormItem",components:{customComponent:{functional:!0,render:function(t,e){return t(e.props.component,e.data,e.children)}},VNode:{functional:!0,render:function(t,e){return e.props.content}}},props:{model:{type:Object,default:function(){}},widget:{type:Object,default:function(){}},remoteData:{type:Object,default:function(){}}},computed:{show:function(){var t=this.widget.hidden;return!t||!t(this.model)},listeners:function(){return this.widget.events||{}}},data:function(){return{}},watch:{widget:{handler:function(t){!function(t){if(!t)throw new Error("form data widget must be an Object.");if(!t.model&&!t.component)throw new Error("'model' is unvalidated.");if(!t.type&&!t.component)throw new Error("'type' and 'component' cannot both be null.")}(t)},immediate:!0},remoteData:{handler:function(){this.setRemoteOption()},deep:!0}},created:function(){this.setRemoteOption()},methods:{setRemoteOption:function(){var t=this;if(this.remoteData){var e=this.remoteData[this.widget.remoteOptionsName];e&&(this.widget.remoteOptions=e.map((function(e){return e.propsForAllOption?{key:e[t.widget.propsForAllOption.key||t.widget.propsForAllOption.value],value:e[t.widget.propsForAllOption.value],label:e[t.widget.propsForAllOption.label]}:t.widget.props?{key:e[t.widget.props.key||t.widget.props.value||t.widget.props.label],value:t.widget.attrs&&t.widget.attrs.valueKey?e:e[t.widget.props.value||t.widget.props.key],label:t.getLabel(t.widget.props.label,e)}:{key:e.key||e.value,value:e.value,label:e.label}})))}},getLabel:function(t,e){return function(t){return"function"==typeof t}(t)?t(e):e[t]},keyupEnterNative:function(){this.widget.nativeEvents&&this.widget.nativeEvents["keyup.enter"]&&this.widget.nativeEvents["keyup.enter"]()}}},r=o(47),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("el-form-item",{style:t.widget.formItemStyles,attrs:{label:t.widget.label,prop:t.widget.model}},[t.widget.slot&&t.widget.slot.prefix?[o("v-node",{attrs:{content:t.widget.slot.prefix}})]:t._e(),t._v(" "),t.widget.component||t.widget.type?o("custom-component",t._g(t._b({style:t.widget.styles,attrs:{component:t.widget.component||"el-"+(t.widget.type||"input")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyupEnterNative.apply(null,arguments)}},model:{value:t.model[t.widget.model],callback:function(e){t.$set(t.model,t.widget.model,e)},expression:"model[widget.model]"}},"custom-component",t.widget.attrs,!1),t.listeners),[t._l(t.widget.remoteOptions||t.widget.options,(function(e){return["select"===t.widget.type?o("el-option",{key:e.key,attrs:{label:e.label,value:e.value}}):"radio-group"===t.widget.type?o("el-radio",{key:e.key,attrs:{label:e.value}},[t._v("\n        "+t._s(e.label)+"\n      ")]):"checkbox-group"===t.widget.type?o("el-checkbox",{key:e.key,attrs:{label:e.label}}):t._e()]})),t._v(" "),t.widget.content?[o("v-node",{attrs:{content:t.widget.content}})]:t._e()],2):t._e(),t._v(" "),t.widget.slot&&t.widget.slot.suffix?[o("v-node",{attrs:{content:t.widget.slot.suffix}})]:t._e()],2):t._e()}),[],!1,null,null,null);e.default=i.exports},429:function(t,e,o){"use strict";o.r(e);var n={name:"FormGroup",components:{FormItem:o(401).default},props:{model:{type:Object,default:function(){}},widget:{type:Object,default:function(){}},remoteData:{type:Object,default:function(){}}},data:function(){return{}},methods:{}},r=o(47),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.widget.styles},[t._l(t.widget.items,(function(e,n){return[o("form-item",{key:n,attrs:{model:t.model,widget:e,"remote-data":t.remoteData}})]}))],2)}),[],!1,null,"dbb403de",null);e.default=i.exports},453:function(t,e,o){var n=o(4),r=o(1),i=o(19),l=o(30).f,u=o(11),s=r((function(){l(1)}));n({target:"Object",stat:!0,forced:!u||s,sham:!u},{getOwnPropertyDescriptor:function(t,e){return l(i(t),e)}})},460:function(t,e,o){"use strict";o.r(e);var n=o(81);o(120),o(38),o(37),o(453),o(121),o(213);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}o(127),o(84),o(209),o(13);var u=o(429),s=o(401),a={apiCall:null,showButtonGroup:!1,showSubmitButton:!0,showResetButton:!0,submitButtonText:"提交",resetButtonText:"重置",submitHandler:null,resetHandler:null},c={name:"FormBuilder",components:{FormGroup:u.default,FormItem:s.default},model:{prop:"formModel",event:"input"},props:{formModel:{type:Object,default:function(){return null}},formData:{type:Object,default:function(){}},remoteData:{type:Object,default:function(){}},formAction:{type:Object,default:function(){}}},data:function(){return{GRID:"grid",GROUP:"group",submitLoading:!1,formConfig:{},formItemList:[],formActionConfig:a,model:{}}},watch:{formModel:{handler:function(t){t&&this.setValueFromModel()},deep:!0},model:{handler:function(t){t&&this.$emit("input",t)},deep:!0}},created:function(){this.setElFormEvents(),this.setData()},methods:{setData:function(){this.formConfig=this.formData.config||{},this.formItemList=this.formData.list||[],this.formActionConfig=l(l({},this.formActionConfig),this.formAction),this.generateModel()},generateModel:function(){var t=this;!function e(o){o.map((function(o){"group"===o.type?e(o.items):t.$set(t.model,o.model,t.getModelType(o.type))}))}(this.formItemList),this.model=this.formModel||this.model},getModelType:function(t){return["checkbox-group"].includes(t)?[]:""},getModel:function(){var t=this;return new Promise((function(e,o){t.$refs.elForm.validate((function(n){n?e(t.model):o()}))}))},getModelValue:function(t){return this.model[t]},updateModel:function(t){var e=Object.assign({},this.model,t);this.model=e},setValueFromModel:function(){this.model=this.formModel},resetFields:function(){this.$refs.elForm.resetFields()},setElFormEvents:function(){var t=this;this.$nextTick((function(){Object.keys(t.$refs.elForm.$options.methods).forEach((function(e){e in t||(t[e]=t.$refs.elForm[e])}))}))},handleSubmit:function(){var t=this;if(!this.formActionConfig.showButtonGroup||!this.formActionConfig.showSubmitButton)return!1;this.formActionConfig.submitHandler?this.formActionConfig.submitHandler():this.getModel().then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,!t.formActionConfig.apiCall){e.next=7;break}return t.submitLoading=!0,e.next=5,t.formActionConfig.apiCall(o);case 5:n=e.sent,t.submitLoading=!1;case 7:t.$emit("handle-submit",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw t.submitLoading=!1,new Error(e)}))},handleReset:function(){this.formActionConfig.resetHandler?this.formActionConfig.resetHandler():(this.resetFields(),this.$emit("handle-reset"))}}},m=o(47),d=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-builder-container"},[o("el-form",t._b({ref:"elForm",attrs:{model:t.model},nativeOn:{submit:function(t){t.preventDefault()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit.apply(null,arguments)}}},"el-form",t.formConfig,!1),[t._l(t.formItemList,(function(e,n){return[e.type===t.GRID?[o("el-row",t._b({key:n},"el-row",e.attrs,!1),[t._l(e.columns,(function(e,n){return[t._t("column:"+e.columnName),t._v(" "),o("el-col",t._b({key:n},"el-col",e.attrs,!1),[t._l(e.list,(function(e){return[o(e.type===t.GROUP?"form-group":"form-item",{key:e.model,tag:"component",attrs:{model:t.model,widget:e,"remote-data":t.remoteData}})]}))],2),t._v(" "),t._t("$column:"+e.columnName)]}))],2)]:[t._t("model:"+e.model),t._v(" "),o(e.type===t.GROUP?"form-group":"form-item",{key:e.model,tag:"component",attrs:{model:t.model,widget:e,"remote-data":t.remoteData}}),t._v(" "),t._t("$model:"+e.model)]]})),t._v(" "),t.formActionConfig.showButtonGroup?o("el-form-item",[t.formActionConfig.showSubmitButton?o("el-button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handleSubmit}},[t._v("\n        "+t._s(t.formActionConfig.submitButtonText)+"\n      ")]):t._e(),t._v(" "),t.formActionConfig.showResetButton?o("el-button",{on:{click:t.handleReset}},[t._v("\n        "+t._s(t.formActionConfig.resetButtonText)+"\n      ")]):t._e()],1):t._e(),t._v(" "),t._t("actions")],2)],1)}),[],!1,null,null,null);e.default=d.exports}}]);