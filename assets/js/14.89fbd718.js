(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{470:function(e,l,t){"use strict";t.r(l);var a={data:function(){return{formModel:{name:"TyroCCC",area:"AREA1",date:"2020-5-20",switch:!0,multi:["多选B","多选C"],single:"A",description:"你好，世界！"},formData:{config:{labelWidth:"50px"},list:[{type:"input",model:"name",label:"名字",attrs:{placeholder:"请填写名字",clearable:!0}},{type:"select",model:"area",label:"区域",options:[{value:"AREA1",label:"区域一"},{value:"AREA2",label:"区域二"}]},{type:"date-picker",model:"date",label:"日期",attrs:{type:"date",placeholder:"请选择日期"}},{type:"switch",model:"switch",label:"开关"},{type:"checkbox-group",model:"multi",label:"多选",options:[{label:"多选A"},{label:"多选B"},{label:"多选C"}]},{type:"radio-group",model:"single",label:"单选",options:[{value:"A",label:"单选A"},{value:"B",label:"单选B"}]},{type:"input",label:"描述",model:"description",attrs:{type:"textarea",rows:3}}]}}}},o=t(47),r=Object(o.a)(a,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"demo-box"},[t("form-builder",{ref:"formBuilder",attrs:{"form-data":e.formData},model:{value:e.formModel,callback:function(l){e.formModel=l},expression:"formModel"}},[t("template",{slot:"actions"},[t("el-form-item",[t("pre",{staticStyle:{background:"none"}},[e._v(e._s(e.formModel))])])],1)],2)],1)}),[],!1,null,null,null);l.default=r.exports}}]);