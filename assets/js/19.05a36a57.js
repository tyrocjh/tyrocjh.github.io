(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{464:function(t,a,e){"use strict";e.r(a);e(209);var o={data:function(){return{formModel:{data1:"",data2:"",data3:""},formData:{list:[{type:"select",label:"联动数据1",model:"data1",props:{value:"customerValue1",label:"customerLabel1"},remoteOptionsName:"data1List",remoteOptions:[],events:{change:this.changeData1}},{type:"select",label:"联动数据2",model:"data2",attrs:{disabled:!1},props:{value:"customerValue2",label:"customerLabel2"},remoteOptionsName:"data2List",remoteOptions:[],events:{change:this.changeData2}},{type:"select",label:"联动数据3",model:"data3",attrs:{disabled:!1},props:{value:"customerValue3",label:"customerLabel3"},remoteOptionsName:"data3List",remoteOptions:[]}]},remoteData:{data1List:[],data2List:[],data3List:[]}}},watch:{"formModel.data1":{handler:function(t){this.formData.list[1].attrs.disabled=!t},immediate:!0},"formModel.data2":{handler:function(t){this.formData.list[2].attrs.disabled=!t},immediate:!0}},created:function(){this.getData1List()},methods:{getData1List:function(){var t=this;setTimeout((function(){for(var a=1;a<=3;a++)t.remoteData.data1List.push({customerValue1:a,customerLabel1:"数据".concat(a)})}),200)},getData2List:function(){var t=this;setTimeout((function(){for(var a=1;a<=3;a++)t.remoteData.data2List.push({customerValue2:"".concat(t.formModel.data1,"-").concat(a),customerLabel2:"数据".concat(t.formModel.data1,"-").concat(a)})}),200)},getData3List:function(){var t=this;setTimeout((function(){for(var a=1;a<=3;a++)t.remoteData.data3List.push({customerValue3:"".concat(t.formModel.data2,"-").concat(a),customerLabel3:"数据".concat(t.formModel.data2,"-").concat(a)})}),200)},changeData1:function(){this.formModel.data2="",this.formModel.data3="",this.remoteData.data2List=[],this.remoteData.data3List=[],this.getData2List()},changeData2:function(){this.formModel.data3="",this.remoteData.data3List=[],this.getData3List()}}},s=e(47),r=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-box"},[e("form-builder",{attrs:{"form-data":t.formData,"remote-data":t.remoteData},model:{value:t.formModel,callback:function(a){t.formModel=a},expression:"formModel"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);