import{h as p,d as W,u as N,y as $,i as M,w as g,e as s,r as C,o as b,c as D,a as t,b as m,j as h,k as f,A as E,g as H,t as _,m as G,F as O,q as J,z as K,B as Q,l as u,_ as X}from"./index-cd8d84e6.js";import{D as Y}from"./download-054b0c90.js";/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=p("ArrowDownLeftIcon",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=p("ArrowDownRightIcon",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=p("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=p("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("ArrowUpLeftIcon",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=p("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=p("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("CircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),re={key:1,class:"watermark-container"},ce={class:"control-bar"},ue={class:"control-left"},de=["placeholder"],me={class:"color-selector"},pe={class:"tile-mode-options"},ve={class:"checkbox-label"},ge={key:0,class:"tile-spacing"},he={class:"position-grid"},we=["onClick","title"],ke={class:"control-right"},be={class:"slider-container"},fe={class:"slider-value"},_e={class:"slider-container"},ye={class:"slider-value"},xe={class:"slider-container"},Te={class:"slider-value"},Ae={class:"preview-section"},Ie={class:"preview-container"},Ce={class:"action-buttons"},Le=W({__name:"Watermark",setup(Ue){const{t:o}=N(),v=u(""),V=u(null),S=u(!1),w=u("Sample Watermark"),r=u(63),A=u(24),y=u(-39),L=u("#FF0000"),I=u(!0),U=u(50),R=u("center"),x=u(),B=[{label:o("imageTools.watermark.positions.topLeft"),value:"topLeft",icon:le},{label:o("imageTools.watermark.positions.topCenter"),value:"topCenter",icon:ie},{label:o("imageTools.watermark.positions.topRight"),value:"topRight",icon:ne},{label:o("imageTools.watermark.positions.left"),value:"left",icon:ae},{label:o("imageTools.watermark.positions.center"),value:"center",icon:se},{label:o("imageTools.watermark.positions.right"),value:"right",icon:oe},{label:o("imageTools.watermark.positions.bottomLeft"),value:"bottomLeft",icon:Z},{label:o("imageTools.watermark.positions.bottomCenter"),value:"bottomCenter",icon:te},{label:o("imageTools.watermark.positions.bottomRight"),value:"bottomRight",icon:ee}],z=i=>{S.value=i},F=i=>{if(i.length>0){const e=i[0];V.value=e,v.value=URL.createObjectURL(e)}},P=i=>{R.value=i,d()},d=()=>{if(!v.value||!x.value)return;const i=document.createElement("canvas"),e=i.getContext("2d");if(!e)return;const a=new Image;a.onload=()=>{if(i.width=a.width,i.height=a.height,e.drawImage(a,0,0),w.value){if(e.globalAlpha=A.value/100,e.fillStyle=L.value,e.font=`${r.value}px Arial`,e.textAlign="center",e.textBaseline="middle",e.save(),I.value){const n=e.measureText(w.value).width,c=U.value,k=Math.sqrt(a.width*a.width+a.height*a.height);e.translate(a.width/2,a.height/2),e.rotate(y.value*Math.PI/180),e.translate(-a.width/2,-a.height/2);for(let l=-k;l<k;l+=n+c)for(let T=-k;T<k;T+=r.value+c)e.fillText(w.value,l,T)}else{let n=a.width/2,c=a.height/2;switch(R.value){case"topLeft":n=r.value,c=r.value;break;case"topCenter":n=a.width/2,c=r.value;break;case"topRight":n=a.width-r.value,c=r.value;break;case"left":n=r.value,c=a.height/2;break;case"right":n=a.width-r.value,c=a.height/2;break;case"bottomLeft":n=r.value,c=a.height-r.value;break;case"bottomCenter":n=a.width/2,c=a.height-r.value;break;case"bottomRight":n=a.width-r.value,c=a.height-r.value;break}e.translate(n,c),e.rotate(y.value*Math.PI/180),e.translate(-n,-c),e.fillText(w.value,n,c)}e.restore()}x.value.src=i.toDataURL()},a.src=v.value},j=()=>{v.value&&URL.revokeObjectURL(v.value),v.value="",V.value=null},q=()=>{if(!x.value)return;const i=document.createElement("a");i.href=x.value.src,i.download="watermarked-image.png",document.body.appendChild(i),i.click(),document.body.removeChild(i)};return $(v,i=>{i&&setTimeout(d,100)}),(i,e)=>{const a=C("FileUploadArea"),n=C("InputGroup"),c=C("ActionButton"),k=C("ToolPageLayout");return b(),M(k,{title:s(o)("imageTools.watermark.title"),description:s(o)("imageTools.watermark.description")},{default:g(()=>[v.value?(b(),D("div",re,[t("div",ce,[t("div",ue,[m(n,{label:s(o)("imageTools.watermark.text")},{default:g(()=>[h(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=l=>w.value=l),placeholder:s(o)("imageTools.watermark.textPlaceholder"),class:"input-field",onInput:d},null,40,de),[[f,w.value]])]),_:1},8,["label"]),m(n,{label:s(o)("imageTools.watermark.color")},{default:g(()=>[t("div",me,[h(t("input",{type:"color","onUpdate:modelValue":e[3]||(e[3]=l=>L.value=l),class:"color-input",onInput:d},null,544),[[f,L.value]])])]),_:1},8,["label"]),m(n,{label:s(o)("imageTools.watermark.tileMode")},{default:g(()=>[t("div",pe,[t("label",ve,[h(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=l=>I.value=l),onChange:d},null,544),[[E,I.value]]),H(" "+_(s(o)("imageTools.watermark.tileAll")),1)]),I.value?(b(),D("div",ge,[t("span",null,_(s(o)("imageTools.watermark.spacing"))+":",1),h(t("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=l=>U.value=l),min:"10",max:"200",class:"input-field small",onInput:d},null,544),[[f,U.value,void 0,{number:!0}]]),e[9]||(e[9]=t("span",null,"px",-1))])):G("",!0)])]),_:1},8,["label"]),m(n,{label:s(o)("imageTools.watermark.position")},{default:g(()=>[t("div",he,[(b(),D(O,null,J(B,(l,T)=>t("button",{key:T,class:K(["position-button",{active:R.value===l.value}]),onClick:Re=>P(l.value),title:l.label},[(b(),M(Q(l.icon),{class:"position-icon"}))],10,we)),64))])]),_:1},8,["label"])]),t("div",ke,[m(n,{label:s(o)("imageTools.watermark.fontSize")},{default:g(()=>[t("div",be,[h(t("input",{type:"range",class:"range-input slider","onUpdate:modelValue":e[6]||(e[6]=l=>r.value=l),min:"10",max:"100",onInput:d},null,544),[[f,r.value,void 0,{number:!0}]]),t("span",fe,_(r.value)+"px",1)])]),_:1},8,["label"]),m(n,{label:s(o)("imageTools.watermark.opacity")},{default:g(()=>[t("div",_e,[h(t("input",{type:"range",class:"range-input slider","onUpdate:modelValue":e[7]||(e[7]=l=>A.value=l),min:"10",max:"100",onInput:d},null,544),[[f,A.value,void 0,{number:!0}]]),t("span",ye,_(A.value)+"%",1)])]),_:1},8,["label"]),m(n,{label:s(o)("imageTools.watermark.rotation")},{default:g(()=>[t("div",xe,[h(t("input",{type:"range",class:"range-input slider","onUpdate:modelValue":e[8]||(e[8]=l=>y.value=l),min:"-180",max:"180",onInput:d},null,544),[[f,y.value,void 0,{number:!0}]]),t("span",Te,_(y.value)+"°",1)])]),_:1},8,["label"])])]),t("div",Ae,[t("h3",null,_(s(o)("imageTools.watermark.preview")),1),t("div",Ie,[t("img",{ref_key:"previewRef",ref:x,class:"preview-image",alt:"Preview"},null,512)]),t("div",Ce,[m(c,{text:s(o)("imageTools.watermark.reselect"),onClick:j},null,8,["text"]),m(c,{primary:"",text:s(o)("imageTools.watermark.download"),icon:s(Y),onClick:q},null,8,["text","icon"])])])])):(b(),M(a,{key:0,text:s(o)("imageTools.uploadText"),subtext:s(o)("imageTools.watermark.uploadSubtext"),accept:"image/png,image/jpeg,image/webp",multiple:!1,"is-dragging":S.value,onSelect:F,onDragover:e[0]||(e[0]=l=>z(!0)),onDragleave:e[1]||(e[1]=l=>z(!1))},null,8,["text","subtext","is-dragging"]))]),_:1},8,["title","description"])}}});const Ve=X(Le,[["__scopeId","data-v-21be3def"]]);export{Ve as default};
