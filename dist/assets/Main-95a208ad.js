import{v as Ve,w as Te,d as pe,r as y,x as Le,o as he,f as Y,g as B,h as a,y as Q,z as J,A as Oe,C as Be,j as M,D as fe,T as _e,k as X,q as ne,m as w,E as ve,_ as me,i as le,F as Pe,G as oe,H as re,I as se,p as be,l as xe,c as Re,J as Me,K as $e,L as Ue}from"./index-91fc79ee.js";import{P as ke,e as Ne}from"./eventsource-1186d1b3.js";import{s as K}from"./services-73bde18f.js";var we={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(P,C){(function($,O){P.exports=O()})(Te,function(){return function(){var N={686:function(c,l,e){e.d(l,{default:function(){return ce}});var n=e(279),r=e.n(n),d=e(370),k=e.n(d),h=e(817),S=e.n(h);function u(m){try{return document.execCommand(m)}catch{return!1}}var b=function(s){var o=S()(s);return u("cut"),o},g=b;function L(m){var s=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[s?"right":"left"]="-9999px";var v=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(v,"px"),o.setAttribute("readonly",""),o.value=m,o}var j=function(s,o){var v=L(s);o.container.appendChild(v);var p=S()(v);return u("copy"),v.remove(),p},W=function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},v="";return typeof s=="string"?v=j(s,o):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s==null?void 0:s.type)?v=j(s.value,o):(v=S()(s),u("copy")),v},F=W;function U(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?U=function(o){return typeof o}:U=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},U(m)}var D=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=s.action,v=o===void 0?"copy":o,p=s.container,t=s.target,f=s.text;if(v!=="copy"&&v!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(t!==void 0)if(t&&U(t)==="object"&&t.nodeType===1){if(v==="copy"&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(v==="cut"&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(f)return F(f,{container:p});if(t)return v==="cut"?g(t):F(t,{container:p})},q=D;function x(m){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(o){return typeof o}:x=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},x(m)}function T(m,s){if(!(m instanceof s))throw new TypeError("Cannot call a class as a function")}function i(m,s){for(var o=0;o<s.length;o++){var v=s[o];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(m,v.key,v)}}function _(m,s,o){return s&&i(m.prototype,s),o&&i(m,o),m}function E(m,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(s&&s.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),s&&V(m,s)}function V(m,s){return V=Object.setPrototypeOf||function(v,p){return v.__proto__=p,v},V(m,s)}function H(m){var s=te();return function(){var v=z(m),p;if(s){var t=z(this).constructor;p=Reflect.construct(v,arguments,t)}else p=v.apply(this,arguments);return R(this,p)}}function R(m,s){return s&&(x(s)==="object"||typeof s=="function")?s:Z(m)}function Z(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function z(m){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},z(m)}function ee(m,s){var o="data-clipboard-".concat(m);if(s.hasAttribute(o))return s.getAttribute(o)}var ue=function(m){E(o,m);var s=H(o);function o(v,p){var t;return T(this,o),t=s.call(this),t.resolveOptions(p),t.listenClick(v),t}return _(o,[{key:"resolveOptions",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof p.action=="function"?p.action:this.defaultAction,this.target=typeof p.target=="function"?p.target:this.defaultTarget,this.text=typeof p.text=="function"?p.text:this.defaultText,this.container=x(p.container)==="object"?p.container:document.body}},{key:"listenClick",value:function(p){var t=this;this.listener=k()(p,"click",function(f){return t.onClick(f)})}},{key:"onClick",value:function(p){var t=p.delegateTarget||p.currentTarget,f=this.action(t)||"copy",A=q({action:f,container:this.container,target:this.target(t),text:this.text(t)});this.emit(A?"success":"error",{action:f,text:A,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(p){return ee("action",p)}},{key:"defaultTarget",value:function(p){var t=ee("target",p);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(p){return ee("text",p)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(p){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return F(p,t)}},{key:"cut",value:function(p){return g(p)}},{key:"isSupported",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],t=typeof p=="string"?[p]:p,f=!!document.queryCommandSupported;return t.forEach(function(A){f=f&&!!document.queryCommandSupported(A)}),f}}]),o}(r()),ce=ue},828:function(c){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function n(r,d){for(;r&&r.nodeType!==l;){if(typeof r.matches=="function"&&r.matches(d))return r;r=r.parentNode}}c.exports=n},438:function(c,l,e){var n=e(828);function r(h,S,u,b,g){var L=k.apply(this,arguments);return h.addEventListener(u,L,g),{destroy:function(){h.removeEventListener(u,L,g)}}}function d(h,S,u,b,g){return typeof h.addEventListener=="function"?r.apply(null,arguments):typeof u=="function"?r.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(L){return r(L,S,u,b,g)}))}function k(h,S,u,b){return function(g){g.delegateTarget=n(g.target,S),g.delegateTarget&&b.call(h,g)}}c.exports=d},879:function(c,l){l.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},l.nodeList=function(e){var n=Object.prototype.toString.call(e);return e!==void 0&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in e&&(e.length===0||l.node(e[0]))},l.string=function(e){return typeof e=="string"||e instanceof String},l.fn=function(e){var n=Object.prototype.toString.call(e);return n==="[object Function]"}},370:function(c,l,e){var n=e(879),r=e(438);function d(u,b,g){if(!u&&!b&&!g)throw new Error("Missing required arguments");if(!n.string(b))throw new TypeError("Second argument must be a String");if(!n.fn(g))throw new TypeError("Third argument must be a Function");if(n.node(u))return k(u,b,g);if(n.nodeList(u))return h(u,b,g);if(n.string(u))return S(u,b,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function k(u,b,g){return u.addEventListener(b,g),{destroy:function(){u.removeEventListener(b,g)}}}function h(u,b,g){return Array.prototype.forEach.call(u,function(L){L.addEventListener(b,g)}),{destroy:function(){Array.prototype.forEach.call(u,function(L){L.removeEventListener(b,g)})}}}function S(u,b,g){return r(document.body,u,b,g)}c.exports=d},817:function(c){function l(e){var n;if(e.nodeName==="SELECT")e.focus(),n=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var r=e.hasAttribute("readonly");r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),n=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var d=window.getSelection(),k=document.createRange();k.selectNodeContents(e),d.removeAllRanges(),d.addRange(k),n=d.toString()}return n}c.exports=l},279:function(c){function l(){}l.prototype={on:function(e,n,r){var d=this.e||(this.e={});return(d[e]||(d[e]=[])).push({fn:n,ctx:r}),this},once:function(e,n,r){var d=this;function k(){d.off(e,k),n.apply(r,arguments)}return k._=n,this.on(e,k,r)},emit:function(e){var n=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),d=0,k=r.length;for(d;d<k;d++)r[d].fn.apply(r[d].ctx,n);return this},off:function(e,n){var r=this.e||(this.e={}),d=r[e],k=[];if(d&&n)for(var h=0,S=d.length;h<S;h++)d[h].fn!==n&&d[h].fn._!==n&&k.push(d[h]);return k.length?r[e]=k:delete r[e],this}},c.exports=l,c.exports.TinyEmitter=l}},$={};function O(c){if($[c])return $[c].exports;var l=$[c]={exports:{}};return N[c](l,l.exports,O),l.exports}return function(){O.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return O.d(l,{a:l}),l}}(),function(){O.d=function(c,l){for(var e in l)O.o(l,e)&&!O.o(c,e)&&Object.defineProperty(c,e,{enumerable:!0,get:l[e]})}}(),function(){O.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)}}(),O(686)}().default})})(we);var De=we.exports;const Fe=Ve(De),qe=P=>{const C=(P==null?void 0:P.appendToBody)===void 0?!0:P.appendToBody;return{toClipboard(N,$){return new Promise((O,c)=>{const l=document.createElement("button"),e=new Fe(l,{text:()=>N,action:()=>"copy",container:$!==void 0?$:document.body});e.on("success",n=>{e.destroy(),O(n)}),e.on("error",n=>{e.destroy(),c(n)}),C&&document.body.appendChild(l),l.click(),C&&document.body.removeChild(l)})}}},je={id:"teleport-upload-modal",class:"contents"},He={class:"title-area"},ze={class:"original"},Xe={class:"pixell-ai"},Je=["src"],Ke=["src"],Qe={key:0,class:"timeline-area"},Ye={class:"video-menu-area"},Ge=pe({__name:"Video",props:{isUploaded:{type:Boolean},isInferred:{type:Boolean},originalVideoSrc:{},inferredVideoSrc:{}},setup(P){const C=P,N=y(null),$=y(null),O=y(null),c=y(null),l=y(null),e=y(null),n=y(!1),r=y(!1),d=y(!1),k=y(!1),h=y(null),S=y(null),{toClipboard:u}=qe(),{isUploaded:b,isInferred:g,originalVideoSrc:L,inferredVideoSrc:j}=Le(C),W=()=>{h.value!==null&&clearTimeout(h.value),u(j.value),d.value=!0,h.value=setTimeout(()=>{d.value=!1},2e3)},F=()=>{S.value!==null&&clearTimeout(S.value);const i=document.createElement("a");i.href=j.value,i.download=j.value,i.click(),k.value=!0,S.value=setTimeout(()=>{k.value=!1},2e3)},U=i=>{const _=N.value;console.log(_);let E=!1;document.onmouseup=()=>{E=!1,r.value=!1};const V=()=>{E=!0,r.value=!0},H=Z=>{if(E&&_!==null){const te=_.getBoundingClientRect();if("pageX"in Z){const z=(Z.pageX-te.left)/_.offsetWidth*100;z<100&&z>0?i.style.left=z+"%":z<=0?i.style.left="0px":z>=100&&(i.style.left="100%")}}},R=()=>{E=!1,r.value=!1};i.onmousedown=V,i.onmouseup=R,_!==null&&(_.onmousemove=H,_.onmouseout=H)},D=i=>{if(r.value){const _=N.value,E=O.value,V=l.value;if(_!==null){const H=_.getBoundingClientRect();if("pageX"in i){const R=(i.pageX-H.left)/_.offsetWidth*100;R<100&&R>0?(E.style.width=R+"%",V.style.width=100/R*100+"%",V.style.zIndex="3"):R<=0?(E.style.width="0",V.style.width="0"):R>=100&&(E.style.width="100%",V.style.width="100%")}}}},q=()=>{c.value!==null&&l.value!==null&&(c.value.paused?(c.value.play(),l.value.play(),n.value=!0):(c.value.pause(),l.value.pause(),n.value=!1))},x=i=>{c.value!==null&&l.value!==null&&(i=="forward"?(l.value.currentTime+=10,c.value.currentTime+=10):(l.value.currentTime-=10,c.value.currentTime-=10))},T=()=>{n.value=!1};return he(()=>{const i=N.value,_=e.value;_!==null&&i!==null&&(U(_),i.addEventListener("mousemove",D,!1),i.addEventListener("mouseout",D,!1),i.addEventListener("touchstart",D,!1),i.addEventListener("touchmove",D,!1)),c.value!==null&&(c.value.addEventListener("ended",T,!1),c.value.addEventListener("timeupdate",E=>{},!1),c.value.addEventListener("seeking",E=>{c.value!==null&&console.log(Math.floor(c.value.currentTime))},!1))}),(i,_)=>{const E=Y("FontAwesomeIcon");return w(),B("div",{class:"video-container",ref_key:"videoContainerRef",ref:N},[a("div",je,[a("div",He,[a("div",ze,[a("strong",{class:Q(J(g)?"uploaded":"not-uploaded")},"PIXELL AI",2)]),a("div",Xe,[a("strong",{class:Q(J(b)?"uploaded":"not-uploaded")},"Original ",2)])]),a("div",{class:"video-area",ref_key:"videoAreaRef",ref:$},[Oe(a("button",{ref_key:"draggableButton",ref:e,class:"drag-btn"},null,512),[[Be,J(g)]]),a("video",{ref_key:"originalVideo",ref:c,src:J(L)},null,8,Je),a("div",{id:"video-clipper",ref_key:"videoClipperRef",ref:O},[a("video",{ref_key:"inferenceVideo",ref:l,src:J(j)},null,8,Ke)],512),J(g)?(w(),B("button",{key:0,class:"share-btn",onClick:W},[M(_e,{name:"fade",mode:"out-in"},{default:fe(()=>[d.value?(w(),B("span",{key:0,class:"copy-text",onClick:_[0]||(_[0]=ve(()=>{},["stop"]))},"copy")):X("",!0)]),_:1})])):X("",!0),J(g)?(w(),B("button",{key:1,class:"download-btn",onClick:F},[M(_e,{name:"fade",mode:"out-in"},{default:fe(()=>[k.value?(w(),B("span",{key:0,class:"download-text",onClick:_[1]||(_[1]=ve(()=>{},["stop"]))},"download")):X("",!0)]),_:1})])):X("",!0)],512),J(g)?(w(),B("div",Qe,[a("div",Ye,[M(E,{icon:"play",class:"fa-flip-both fa-3x prev-button",onClick:_[2]||(_[2]=V=>x("backward"))}),n.value?(w(),ne(E,{key:1,icon:"circle-pause",class:"fa-3x play-button",onClick:q})):(w(),ne(E,{key:0,icon:"circle-play",class:"fa-3x play-button",onClick:q})),M(E,{icon:"play",class:"fa-3x next-button",onClick:_[3]||(_[3]=V=>x("forward"))})])])):X("",!0)])],512)}}});const We=me(Ge,[["__scopeId","data-v-6c9c457f"]]),Ze="http://222.107.124.161:64000/assets/sample_video_img-8e9d2f79.png",ye=P=>(be("data-v-e2c3d5d3"),P=P(),xe(),P),et={class:"upload-modal-container"},tt={class:"contents"},nt=ye(()=>a("label",{class:"file-upload-txt",for:"file-upload"},"Choose File",-1)),ot=ye(()=>a("p",{class:"guide-msg"}," Your Video Files are safely stored and secured using encryption ",-1)),at={class:"sample-video-area"},lt=ye(()=>a("h3",{class:"h3-title"},"Try Sample Video",-1)),st={class:"sample-video-list"},it=["onClick"],rt={key:0,class:"file-name-area"},ut={class:"file-name"},ct={key:1,class:"file-name-area"},dt={class:"upload-btn-area"},ft=pe({__name:"UploadModal",emits:["update:close","update:upload","update:abort"],setup(P,{emit:C}){const N=le("defaultInstance"),$=le("emitter"),O=y([{name:"tes1.mp4"},{name:"tes2.mp4"},{name:"tes3.mp4"}]),c=y(0),l=y(!1),e=y(0),n=y(-1),r=y([]),d=y(!1),k=new AbortController,h=x=>{r.value.length>0?$.emit("update:alert",{isActive:!0,message:"이미 업로드된 파일이 존재합니다."}):n.value=x},S=()=>{d.value=!0},u=()=>{d.value=!1},b=x=>{d.value=!0,x.preventDefault()},g=x=>{if(n.value!==-1)$.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{x.preventDefault();const T=/(\.mov|\.mp4|\.mkv)$/i;d.value=!1;const i=x.dataTransfer;if(i&&i.files)for(const _ of i.files)if(T.test(_.name))L(i.files,"drop");else{$.emit("update:alert",{isActive:!0,message:"mp4 확장자만 지원합니다."});break}}},L=(x,T)=>{let i;if(T=="change"?i=x.files:i=x,i!==null)for(let _=0;_<i.length;_++){/(\.mov|\.mp4|\.mkv)$/i.test(i[_].name)&&r.value.push({title:i[_].name,file:i[_]});const V=r.value.filter((H,R,Z)=>R===Z.findIndex(te=>te.title===H.title));r.value=V}},j=x=>{r.value.splice(x,1)},W=x=>{if(n.value!==-1)$.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{const T=x.target;T&&T.files&&L(T,"change")}},F=()=>{C("update:close")},U=()=>{C("update:abort"),k.abort()},D=()=>{Promise.all([N.get(K.videoList),N.get(K.inferenceModelList)]).then(x=>{C("update:upload",{videoList:x[0].data,inferenceModelList:x[1].data.data.filter(T=>T!==null)}),F()})},q=()=>{if(r.value.length>0){l.value=!0;const x=r.value,T=new FormData;for(let i=0;i<x.length;i++)console.log(x[i].file),T.append("file",x[i].file);N.postForm(K.upload,T,{signal:k.signal,onUploadProgress:i=>{const _=i.loaded*100/i.total;e.value=Number(_.toFixed(0)),_==100&&(l.value=!1)},headers:{"Content-Type":"multipart/form-data",type:"video"}}).then(i=>{console.log("output-> result",i),D()})}else $.emit("update:alert",{isActive:!0,message:"파일을 업로드 해주세요."})};return(x,T)=>{const i=Y("FontAwesomeIcon"),_=Y("BaseButton");return w(),B(oe,null,[l.value?(w(),ne(ke,{key:0,text:"video file uploading...",progressValue:e.value,"onUpdate:closeProgressModal":U},null,8,["progressValue"])):X("",!0),a("div",et,[a("button",{class:"close-btn",onClick:F}),a("div",tt,[a("div",{class:Q(["file-upload-area",d.value?"dragged":""]),onDragenter:S,onDragover:b,onDragleave:u,onDrop:g},[a("strong",null,[Pe(" Drop Video File here to upload or "),nt,(w(),B("input",{key:c.value,type:"file",id:"file-upload",accept:".mp4,.mov,.mkv",onChange:W,onClick:T[0]||(T[0]=E=>c.value+=1),multiple:""},null,32))])],34),ot,a("div",at,[lt,a("ul",st,[(w(!0),B(oe,null,re(O.value,(E,V)=>(w(),B("li",{key:V},[a("img",{onClick:H=>h(V),src:Ze,class:Q(V==n.value?"selected":"")},null,10,it)]))),128))])]),r.value.length>0?(w(),B("ul",rt,[(w(!0),B(oe,null,re(r.value,(E,V)=>(w(),B("li",{key:V},[a("span",ut,se(E.file.name),1),M(i,{icon:"xmark",class:"delete-button",onClick:H=>j(V)},null,8,["onClick"])]))),128))])):X("",!0),n.value!=-1?(w(),B("ul",ct,[a("li",null,se(O.value[n.value].name),1)])):X("",!0),a("div",dt,[M(_,{text:"Upload",onClick:q})])])])],64)}}});const vt=me(ft,[["__scopeId","data-v-e2c3d5d3"]]),G=P=>(be("data-v-c5c1277d"),P=P(),xe(),P),pt={class:"upload-area"},mt=G(()=>a("h2",{class:"h2-title"},"PIXELL AI",-1)),yt={class:"row"},gt={class:"row video-file-select-area"},_t=G(()=>a("label",{class:"label"},"Video File",-1)),ht={class:"date"},bt=["onClick"],xt={key:0,class:"file-status"},kt={class:"file-size"},wt={class:"setting-area"},Ct=G(()=>a("h2",{class:"h2-title"},"Output Settings",-1)),St={class:"row"},Et=G(()=>a("label",{class:"label"},"AI Model",-1)),At={class:"row"},It=G(()=>a("label",{class:"label"},"Format",-1)),Vt={class:"row"},Tt=G(()=>a("label",{class:"label"},"Encoder",-1)),Lt={class:"row check-area"},Ot=G(()=>a("label",{for:"BestQuality"},"Best Quality",-1)),Bt={class:"row check-area"},Pt={class:"row"},Rt=G(()=>a("label",{class:"bitrate"},"Bitrate : ",-1)),Mt=G(()=>a("span",{class:"unit"},"(kbps)",-1)),$t={class:"row"},Ut=pe({__name:"Main",setup(P){const C=le("emitter"),N=y(-1),$=le("signOut"),O=Re(),c=y(0),l=le("defaultInstance"),e=y([]),n=y(null),r=y([]),d=y(null),k=[{name:"mp4"},{name:"mov"},{name:"mkv"}],h=y({name:"mp4"}),S=y({name:"H.264",value:"H.264"}),u=y([]),b=y("VBR"),g=y(!1),L=y(!1),j=y("1000"),W=y(0),F=y(!1),U=y(!1),D=y(""),q=y(""),x=y(""),T=y(""),i=y(0),_=()=>{g.value=!0,n.value=null,U.value=!1,F.value=!1,D.value="",q.value=""},E=(t,f)=>{N.value=f,i.value+=1,F.value=!0,n.value=t,g.value=!1,t.isInference?l.get(K.videoAlready+`?videoId=${t.videoId}`).then(A=>{console.log(A),U.value=!0,D.value=A.data.data.originalVideo,q.value=A.data.data.inferenceVideo}):(U.value=!1,D.value="",q.value="")},V=Me(()=>{const t=[{name:"H.264",value:"H.264"},{name:"H.265",value:"H.265"},{name:"ProRes(Unable to play video)",value:"ProRes",disabled:!0}];return h.value.name=="mkv"||h.value.name=="mov"?t[2].message="Unable to play video, download only ALERT":t[2].message="Unable to play video",t}),H=y(null);let R;const Z=t=>{e.value.length==0&&(C.emit("update:alert",{isActive:!0,message:"Please upload your video files."}),t.stopPropagation())},te=t=>{n.value=null,r.value=[],e.value=[],r.value=t.inferenceModelList,e.value=t.videoList;const f=t.videoList[t.videoList.length-1].video.findLastIndex(A=>A.isInference==!1);F.value=!0,n.value=t.videoList[t.videoList.length-1].video[f]},z=t=>{C.emit("update:alert",{isActive:!0,message:"삭제하시겠습니까?",fn:()=>{C.emit("update:loading",{isLoading:!0}),l.delete(K.video+`?videoId=${t}`).then(f=>{D.value="",q.value="",F.value=!1,U.value=!1,n.value=null,N.value=-1,C.emit("update:loading",{isLoading:!1}),ee()})}})},ee=()=>{Promise.all([l.get(K.videoList),l.get(K.inferenceModelList)]).then(t=>{e.value=t[0].data,r.value=t[1].data.data.filter(f=>f!==null)})},ue=t=>{const f=u.value.indexOf(t);f>=0?u.value.splice(f,1):t=="best quality"?(u.value=[],u.value.push("best quality")):u.value.push(t)},ce=()=>{if(h.value.name=="mp4"&&S.value.value=="ProRes")return!1;n.value==null?C.emit("update:alert",{isActive:!0,message:"Please select a video file."}):d.value==null?C.emit("update:alert",{isActive:!0,message:"Please select ai model."}):(g.value=!1,U.value=!1,D.value="",q.value="",C.emit("update:loading",{isLoading:!0}),l.post(K.videoInference,{videoId:n.value&&n.value.videoId,containerId:d.value.containerId,format:h.value.name,encoder:S.value.value,bestQuality:u.value.indexOf("best quality")>=0?1:0,twoPassEncoding:u.value.indexOf("best quality")>=0?0:u.value.indexOf("2-Pass Encoding")>=0?1:0,avgBitrate:u.value.indexOf("best quality")>=0?"1000":j.value,vbr:u.value.indexOf("best quality")>=0?!1:b.value=="VBR",cbr:u.value.indexOf("best quality")>=0?!1:b.value=="CBR"}).then(t=>{sessionStorage.setItem("inference",JSON.stringify({uuid:t.data.data,containerId:d.value.containerId})),i.value+=1,x.value=t.data.data,o(t.data.data)}))},m=()=>{R.close(),L.value=!1,U.value=!1,p({containerId:d.value.containerId,uuid:x.value})},s=()=>{C.emit("update:alert",{isActive:!0,message:"취소하시겠습니까?",fn:()=>{m()}})},o=t=>{R=new Ne.EventSourcePolyfill("http://222.107.124.161:64000"+K.connectSSE+`?uuid=${t}`,{headers:{Authorization:O.user.token}}),R.onopen=()=>{C.emit("update:loading",{isLoading:!1})},R.onmessage=f=>{try{if(typeof JSON.parse(f.data)=="object"){const A=JSON.parse(f.data);console.log(A),T.value=A.step,W.value=A.progress,L.value=!0,A.status=="error"&&m(),A.step=="all"&&A.progress==100&&A.result=="true"&&(R.close(),L.value=!1,sessionStorage.removeItem("inference"),C.emit("update:loading",{isLoading:!0}),D.value=A.originalVideo,q.value=A.inferenceVideo,U.value=!0,ee(),C.emit("update:loading",{isLoading:!1}))}}catch{}}},v=t=>{if(L.value)return t.preventDefault(),t.stopImmediatePropagation(),""},p=t=>{C.emit("update:alert",{isActive:!0,message:"추론 정지중입니다. 잠시만 기다려주세요.&nbsp;&nbsp;<div class='loader'></div>"}),l.delete(K.videoInference+`?containerId=${t.containerId}&uuid=${t.uuid}`).then(f=>{ee(),C.emit("update:loading",{isLoading:!1}),C.emit("update:alert",{isActive:!0,message:"추론 정지가 완료되었습니다."}),setTimeout(()=>{C.emit("update:alert",{isActive:!1})},2e3),sessionStorage.removeItem("inference")})};return $e(()=>{window.removeEventListener("beforeunload",v)}),he(()=>{window.addEventListener("beforeunload",v),ee(),sessionStorage.getItem("inference")!=null&&p(JSON.parse(sessionStorage.getItem("inference")))}),(t,f)=>{const A=Y("FontAwesomeIcon"),de=Y("BaseButton"),ie=Y("BaseSelect"),Ce=Y("BaseCheckBox"),ge=Y("BaseRadio"),Se=Y("BaseInput");return w(),B(oe,null,[L.value?(w(),ne(ke,{key:0,text:T.value+" in_progress...",progressValue:W.value,"onUpdate:closeProgressModal":s},null,8,["text","progressValue"])):X("",!0),a("main",null,[g.value?(w(),ne(Ue,{key:0,to:"#teleport-upload-modal"},[(w(),ne(vt,{key:c.value,"onUpdate:close":f[0]||(f[0]=I=>g.value=!1),"onUpdate:upload":f[1]||(f[1]=I=>te(I)),"onUpdate:abort":f[2]||(f[2]=I=>c.value+=1)}))])):X("",!0),a("aside",null,[a("section",pt,[mt,M(A,{icon:"right-from-bracket",class:"sign-out-button",onClick:J($)},null,8,["onClick"]),a("div",yt,[M(de,{onClick:_,text:"Upload Video"})]),a("div",gt,[_t,M(ie,{onClick:Z,name:"fileName",options:e.value,text:n.value==null?"<span class=not-selected>Please Upload Video Files</span>":n.value.fileName},{list:fe(()=>[(w(!0),B(oe,null,re(e.value,(I,Ee)=>(w(),B("li",{class:"optionItem",key:Ee},[a("span",ht,se(I.date),1),(w(!0),B(oe,null,re(I.video,(ae,Ae)=>(w(),B("div",{class:"file-name-area",onClick:Ie=>E(ae,Ae)},[a("span",{class:"file-name",ref_for:!0,ref_key:"fileName",ref:H},se(ae.fileName),513),a("span",null,[ae.isInference?(w(),B("span",xt,"완료")):X("",!0),a("span",kt,se(ae.fileSize),1),M(A,{icon:"xmark",class:"delete-button",onClick:ve(Ie=>z(ae.videoId),["stop"])},null,8,["onClick"])])],8,bt))),256))]))),128))]),_:1},8,["options","text"])])]),a("section",wt,[Ct,a("div",St,[Et,M(ie,{"onUpdate:selectBox":f[3]||(f[3]=I=>{d.value=I}),options:r.value,name:"projectName,containerName",text:d.value==null?"<span class=not-selected>Select AI Model</span>":d.value.projectName+"/"+d.value.containerName},null,8,["options","text"])]),a("div",At,[It,M(ie,{"onUpdate:selectBox":f[4]||(f[4]=I=>h.value=I),options:k,name:"name",text:h.value.name},null,8,["text"])]),a("div",Vt,[Tt,M(ie,{"onUpdate:selectBox":f[5]||(f[5]=I=>{I.disabled&&J(C).emit("update:alert",{isActive:!0,message:I.message}),S.value=I}),options:V.value,name:"name",text:S.value.name},null,8,["options","text"])]),a("div",Lt,[a("div",null,[M(Ce,{"onUpdate:checkModelValue":ue,id:"BestQuality",value:"best quality"}),Ot])]),a("div",Bt,[a("div",null,[M(ge,{class:Q(["radio",u.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[f[6]||(f[6]=I=>b.value=I),f[7]||(f[7]=I=>b.value=I)],name:"vbrOrCbr",value:"VBR",isDisabled:!(u.value.indexOf("best quality")<0),modelValue:b.value},null,8,["class","isDisabled","modelValue"]),a("label",{for:"VBR",class:Q(u.value.indexOf("best quality")<0?"active":"inActive")},"VBR",2)]),a("div",null,[M(ge,{class:Q(["radio",u.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[f[8]||(f[8]=I=>b.value=I),f[9]||(f[9]=I=>b.value=I)],name:"vbrOrCbr",value:"CBR",isDisabled:!(u.value.indexOf("best quality")<0),modelValue:b.value},null,8,["class","isDisabled","modelValue"]),a("label",{for:"CBR",class:Q(u.value.indexOf("best quality")<0?"active":"inActive")},"CBR",2)])]),a("div",Pt,[Rt,M(Se,{"onUpdate:modelValue":f[10]||(f[10]=I=>j.value=I),placeholder:"",type:"text",onlyText:!0,modelValue:u.value.indexOf("best quality")>=0?1e3:j.value,class:Q(u.value.indexOf("best quality")<0?"active":"inActive"),isDisabled:!(u.value.indexOf("best quality")<0)},null,8,["modelValue","class","isDisabled"]),Mt]),a("div",$t,[M(de,{text:"Preview",class:Q(n.value==null||d.value==null||h.value.name=="mp4"&&S.value.value=="ProRes"?"inActive":"active"),onClick:ce},null,8,["class"])])])]),(w(),ne(We,{isUploaded:F.value,isInferred:U.value,originalVideoSrc:D.value,inferredVideoSrc:q.value,key:i.value},null,8,["isUploaded","isInferred","originalVideoSrc","inferredVideoSrc"]))])],64)}}});const qt=me(Ut,[["__scopeId","data-v-c5c1277d"]]);export{qt as default};
