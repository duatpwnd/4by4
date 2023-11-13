(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $o(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ge={},sr=[],pt=()=>{},jm=()=>!1,Hm=/^on[^a-z]/,_i=e=>Hm.test(e),Na=e=>e.startsWith("onUpdate:"),be=Object.assign,La=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Um=Object.prototype.hasOwnProperty,le=(e,t)=>Um.call(e,t),W=Array.isArray,ar=e=>_r(e)==="[object Map]",Wn=e=>_r(e)==="[object Set]",cc=e=>_r(e)==="[object Date]",Vm=e=>_r(e)==="[object RegExp]",ee=e=>typeof e=="function",xe=e=>typeof e=="string",Qr=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Ia=e=>ve(e)&&ee(e.then)&&ee(e.catch),vf=Object.prototype.toString,_r=e=>vf.call(e),Ym=e=>_r(e).slice(8,-1),yf=e=>_r(e)==="[object Object]",Da=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zr=$o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wm=/-(\w)/g,Xe=No(e=>e.replace(Wm,(t,n)=>n?n.toUpperCase():"")),qm=/\B([A-Z])/g,rt=No(e=>e.replace(qm,"-$1").toLowerCase()),xi=No(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=No(e=>e?`on${xi(e)}`:""),pr=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},po=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},mo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ho=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let uc;const Hs=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Km="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",Xm=$o(Km);function ln(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=xe(r)?Qm(r):ln(r);if(i)for(const o in i)t[o]=i[o]}return t}else{if(xe(e))return e;if(ve(e))return e}}const Gm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Zm=/\/\*[^]*?\*\//g;function Qm(e){const t={};return e.replace(Zm,"").split(Gm).forEach(n=>{if(n){const r=n.split(Jm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Et(e){let t="";if(xe(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Et(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function bf(e){if(!e)return null;let{class:t,style:n}=e;return t&&!xe(t)&&(e.class=Et(t)),n&&(e.style=ln(n)),e}const eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",th=$o(eh);function wf(e){return!!e||e===""}function nh(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=pn(e[r],t[r]);return n}function pn(e,t){if(e===t)return!0;let n=cc(e),r=cc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Qr(e),r=Qr(t),n||r)return e===t;if(n=W(e),r=W(t),n||r)return n&&r?nh(e,t):!1;if(n=ve(e),r=ve(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const s in e){const a=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(a&&!l||!a&&l||!pn(e[s],t[s]))return!1}}return String(e)===String(t)}function Lo(e,t){return e.findIndex(n=>pn(n,t))}const Nn=e=>xe(e)?e:e==null?"":W(e)||ve(e)&&(e.toString===vf||!ee(e.toString))?JSON.stringify(e,_f,2):String(e),_f=(e,t)=>t&&t.__v_isRef?_f(e,t.value):ar(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Wn(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!W(t)&&!yf(t)?String(t):t;let Ze;class za{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!t&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ze;try{return Ze=this,t()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ma(e){return new za(e)}function xf(e,t=Ze){t&&t.active&&t.effects.push(e)}function Ba(){return Ze}function kf(e){Ze&&Ze.cleanups.push(e)}const Fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sf=e=>(e.w&mn)>0,Ef=e=>(e.n&mn)>0,rh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mn},ih=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Sf(i)&&!Ef(i)?i.delete(e):t[n++]=i,i.w&=~mn,i.n&=~mn}t.length=n}},go=new WeakMap;let Nr=0,mn=1;const Us=30;let lt;const Ln=Symbol(""),Vs=Symbol("");class ki{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xf(this,r)}run(){if(!this.active)return this.fn();let t=lt,n=cn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=lt,lt=this,cn=!0,mn=1<<++Nr,Nr<=Us?rh(this):fc(this),this.fn()}finally{Nr<=Us&&ih(this),mn=1<<--Nr,lt=this.parent,cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(fc(this),this.onStop&&this.onStop(),this.active=!1)}}function fc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function oh(e,t){e.effect&&(e=e.effect.fn);const n=new ki(e);t&&(be(n,t),t.scope&&xf(n,t.scope)),(!t||!t.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function sh(e){e.effect.stop()}let cn=!0;const Cf=[];function xr(){Cf.push(cn),cn=!1}function kr(){const e=Cf.pop();cn=e===void 0?!0:e}function Ge(e,t,n){if(cn&&lt){let r=go.get(e);r||go.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Fa()),Af(i)}}function Af(e,t){let n=!1;Nr<=Us?Ef(e)||(e.n|=mn,n=!Sf(e)):n=!e.has(lt),n&&(e.add(lt),lt.deps.push(e))}function Mt(e,t,n,r,i,o){const s=go.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&W(e)){const l=Number(r);s.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":W(e)?Da(n)&&a.push(s.get("length")):(a.push(s.get(Ln)),ar(e)&&a.push(s.get(Vs)));break;case"delete":W(e)||(a.push(s.get(Ln)),ar(e)&&a.push(s.get(Vs)));break;case"set":ar(e)&&a.push(s.get(Ln));break}if(a.length===1)a[0]&&Ys(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ys(Fa(l))}}function Ys(e,t){const n=W(e)?e:[...e];for(const r of n)r.computed&&dc(r);for(const r of n)r.computed||dc(r)}function dc(e,t){(e!==lt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function ah(e,t){var n;return(n=go.get(e))==null?void 0:n.get(t)}const lh=$o("__proto__,__v_isRef,__isVue"),Pf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qr)),ch=Io(),uh=Io(!1,!0),fh=Io(!0),dh=Io(!0,!0),pc=ph();function ph(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=se(this);for(let o=0,s=this.length;o<s;o++)Ge(r,"get",o+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){xr();const r=se(this)[t].apply(this,n);return kr(),r}}),e}function mh(e){const t=se(this);return Ge(t,"has",e),t.hasOwnProperty(e)}function Io(e=!1,t=!1){return function(r,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?If:Lf:t?Nf:$f).get(r))return r;const s=W(r);if(!e){if(s&&le(pc,i))return Reflect.get(pc,i,o);if(i==="hasOwnProperty")return mh}const a=Reflect.get(r,i,o);return(Qr(i)?Pf.has(i):lh(i))||(e||Ge(r,"get",i),t)?a:Se(a)?s&&Da(i)?a:a.value:ve(a)?e?Ua(a):Ht(a):a}}const hh=Of(),gh=Of(!0);function Of(e=!1){return function(n,r,i,o){let s=n[r];if(Mn(s)&&Se(s)&&!Se(i))return!1;if(!e&&(!ei(i)&&!Mn(i)&&(s=se(s),i=se(i)),!W(n)&&Se(s)&&!Se(i)))return s.value=i,!0;const a=W(n)&&Da(r)?Number(r)<n.length:le(n,r),l=Reflect.set(n,r,i,o);return n===se(o)&&(a?pr(i,s)&&Mt(n,"set",r,i):Mt(n,"add",r,i)),l}}function vh(e,t){const n=le(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Mt(e,"delete",t,void 0),r}function yh(e,t){const n=Reflect.has(e,t);return(!Qr(t)||!Pf.has(t))&&Ge(e,"has",t),n}function bh(e){return Ge(e,"iterate",W(e)?"length":Ln),Reflect.ownKeys(e)}const Tf={get:ch,set:hh,deleteProperty:vh,has:yh,ownKeys:bh},Rf={get:fh,set(e,t){return!0},deleteProperty(e,t){return!0}},wh=be({},Tf,{get:uh,set:gh}),_h=be({},Rf,{get:dh}),ja=e=>e,Do=e=>Reflect.getPrototypeOf(e);function Li(e,t,n=!1,r=!1){e=e.__v_raw;const i=se(e),o=se(t);n||(t!==o&&Ge(i,"get",t),Ge(i,"get",o));const{has:s}=Do(i),a=r?ja:n?Ya:ti;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function Ii(e,t=!1){const n=this.__v_raw,r=se(n),i=se(e);return t||(e!==i&&Ge(r,"has",e),Ge(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Di(e,t=!1){return e=e.__v_raw,!t&&Ge(se(e),"iterate",Ln),Reflect.get(e,"size",e)}function mc(e){e=se(e);const t=se(this);return Do(t).has.call(t,e)||(t.add(e),Mt(t,"add",e,e)),this}function hc(e,t){t=se(t);const n=se(this),{has:r,get:i}=Do(n);let o=r.call(n,e);o||(e=se(e),o=r.call(n,e));const s=i.call(n,e);return n.set(e,t),o?pr(t,s)&&Mt(n,"set",e,t):Mt(n,"add",e,t),this}function gc(e){const t=se(this),{has:n,get:r}=Do(t);let i=n.call(t,e);i||(e=se(e),i=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return i&&Mt(t,"delete",e,void 0),o}function vc(){const e=se(this),t=e.size!==0,n=e.clear();return t&&Mt(e,"clear",void 0,void 0),n}function zi(e,t){return function(r,i){const o=this,s=o.__v_raw,a=se(s),l=t?ja:e?Ya:ti;return!e&&Ge(a,"iterate",Ln),s.forEach((c,u)=>r.call(i,l(c),l(u),o))}}function Mi(e,t,n){return function(...r){const i=this.__v_raw,o=se(i),s=ar(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=i[e](...r),u=n?ja:t?Ya:ti;return!t&&Ge(o,"iterate",l?Vs:Ln),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Xt(e){return function(...t){return e==="delete"?!1:this}}function xh(){const e={get(o){return Li(this,o)},get size(){return Di(this)},has:Ii,add:mc,set:hc,delete:gc,clear:vc,forEach:zi(!1,!1)},t={get(o){return Li(this,o,!1,!0)},get size(){return Di(this)},has:Ii,add:mc,set:hc,delete:gc,clear:vc,forEach:zi(!1,!0)},n={get(o){return Li(this,o,!0)},get size(){return Di(this,!0)},has(o){return Ii.call(this,o,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:zi(!0,!1)},r={get(o){return Li(this,o,!0,!0)},get size(){return Di(this,!0)},has(o){return Ii.call(this,o,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Mi(o,!1,!1),n[o]=Mi(o,!0,!1),t[o]=Mi(o,!1,!0),r[o]=Mi(o,!0,!0)}),[e,n,t,r]}const[kh,Sh,Eh,Ch]=xh();function zo(e,t){const n=t?e?Ch:Eh:e?Sh:kh;return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(le(n,i)&&i in r?n:r,i,o)}const Ah={get:zo(!1,!1)},Ph={get:zo(!1,!0)},Oh={get:zo(!0,!1)},Th={get:zo(!0,!0)},$f=new WeakMap,Nf=new WeakMap,Lf=new WeakMap,If=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $h(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(Ym(e))}function Ht(e){return Mn(e)?e:Mo(e,!1,Tf,Ah,$f)}function Ha(e){return Mo(e,!1,wh,Ph,Nf)}function Ua(e){return Mo(e,!0,Rf,Oh,Lf)}function Nh(e){return Mo(e,!0,_h,Th,If)}function Mo(e,t,n,r,i){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=$h(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function Nt(e){return Mn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mn(e){return!!(e&&e.__v_isReadonly)}function ei(e){return!!(e&&e.__v_isShallow)}function Va(e){return Nt(e)||Mn(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Si(e){return po(e,"__v_skip",!0),e}const ti=e=>ve(e)?Ht(e):e,Ya=e=>ve(e)?Ua(e):e;function Wa(e){cn&&lt&&(e=se(e),Af(e.dep||(e.dep=Fa())))}function Bo(e,t){e=se(e);const n=e.dep;n&&Ys(n)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return zf(e,!1)}function Df(e){return zf(e,!0)}function zf(e,t){return Se(e)?e:new Lh(e,t)}class Lh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:ti(t)}get value(){return Wa(this),this._value}set value(t){const n=this.__v_isShallow||ei(t)||Mn(t);t=n?t:se(t),pr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ti(t),Bo(this))}}function Ih(e){Bo(e)}function ne(e){return Se(e)?e.value:e}function Dh(e){return ee(e)?e():ne(e)}const zh={get:(e,t,n)=>ne(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qa(e){return Nt(e)?e:new Proxy(e,zh)}class Mh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Wa(this),()=>Bo(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Bh(e){return new Mh(e)}function Ut(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Mf(e,n);return t}class Fh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ah(se(this._object),this._key)}}class jh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Hh(e,t,n){return Se(e)?e:ee(e)?new jh(e):ve(e)&&arguments.length>1?Mf(e,t,n):Oe(e)}function Mf(e,t,n){const r=e[t];return Se(r)?r:new Fh(e,t,n)}class Uh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ki(t,()=>{this._dirty||(this._dirty=!0,Bo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=se(this);return Wa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vh(e,t,n=!1){let r,i;const o=ee(e);return o?(r=e,i=pt):(r=e.get,i=e.set),new Uh(r,i,o||!i,n)}function Yh(e,...t){}function Wh(e,t){}function Lt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){qn(o,t,n)}return i}function et(e,t,n,r){if(ee(e)){const o=Lt(e,t,n,r);return o&&Ia(o)&&o.catch(s=>{qn(s,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(et(e[o],t,n,r));return i}function qn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Lt(l,null,10,[e,s,a]);return}}qh(e,n,i,r)}function qh(e,t,n,r=!0){console.error(e)}let ni=!1,Ws=!1;const Fe=[];let bt=0;const cr=[];let Tt=null,Pn=0;const Bf=Promise.resolve();let Ka=null;function Sr(e){const t=Ka||Bf;return e?t.then(this?e.bind(this):e):t}function Kh(e){let t=bt+1,n=Fe.length;for(;t<n;){const r=t+n>>>1;ri(Fe[r])<e?t=r+1:n=r}return t}function Fo(e){(!Fe.length||!Fe.includes(e,ni&&e.allowRecurse?bt+1:bt))&&(e.id==null?Fe.push(e):Fe.splice(Kh(e.id),0,e),Ff())}function Ff(){!ni&&!Ws&&(Ws=!0,Ka=Bf.then(jf))}function Xh(e){const t=Fe.indexOf(e);t>bt&&Fe.splice(t,1)}function Xa(e){W(e)?cr.push(...e):(!Tt||!Tt.includes(e,e.allowRecurse?Pn+1:Pn))&&cr.push(e),Ff()}function yc(e,t=ni?bt+1:0){for(;t<Fe.length;t++){const n=Fe[t];n&&n.pre&&(Fe.splice(t,1),t--,n())}}function vo(e){if(cr.length){const t=[...new Set(cr)];if(cr.length=0,Tt){Tt.push(...t);return}for(Tt=t,Tt.sort((n,r)=>ri(n)-ri(r)),Pn=0;Pn<Tt.length;Pn++)Tt[Pn]();Tt=null,Pn=0}}const ri=e=>e.id==null?1/0:e.id,Gh=(e,t)=>{const n=ri(e)-ri(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function jf(e){Ws=!1,ni=!0,Fe.sort(Gh);const t=pt;try{for(bt=0;bt<Fe.length;bt++){const n=Fe[bt];n&&n.active!==!1&&Lt(n,null,14)}}finally{bt=0,Fe.length=0,vo(),ni=!1,Ka=null,(Fe.length||cr.length)&&jf()}}let nr,Bi=[];function Hf(e,t){var n,r;nr=e,nr?(nr.enabled=!0,Bi.forEach(({event:i,args:o})=>nr.emit(i,...o)),Bi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{Hf(o,t)}),setTimeout(()=>{nr||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Bi=[])},3e3)):Bi=[]}function Jh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ge;let i=n;const o=t.startsWith("update:"),s=o&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:f,trim:p}=r[u]||ge;p&&(i=n.map(h=>xe(h)?h.trim():h)),f&&(i=n.map(mo))}let a,l=r[a=Mr(t)]||r[a=Mr(Xe(t))];!l&&o&&(l=r[a=Mr(rt(t))]),l&&et(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(c,e,6,i)}}function Uf(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!ee(e)){const l=c=>{const u=Uf(c,t,!0);u&&(a=!0,be(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ve(e)&&r.set(e,null),null):(W(o)?o.forEach(l=>s[l]=null):be(s,o),ve(e)&&r.set(e,s),s)}function jo(e,t){return!e||!_i(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,rt(t))||le(e,t))}let De=null,Ho=null;function ii(e){const t=De;return De=e,Ho=e&&e.type.__scopeId||null,t}function Vf(e){Ho=e}function Yf(){Ho=null}const Wf=e=>Bn;function Bn(e,t=De,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Qs(-1);const o=ii(t);let s;try{s=e(...i)}finally{ii(o),r._d&&Qs(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ro(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:h,ctx:v,inheritAttrs:w}=e;let S,g;const m=ii(e);try{if(n.shapeFlag&4){const _=i||r;S=Qe(u.call(_,_,f,o,h,p,v)),g=l}else{const _=t;S=Qe(_.length>1?_(o,{attrs:l,slots:a,emit:c}):_(o,null)),g=t.props?l:Qh(l)}}catch(_){Hr.length=0,qn(_,e,1),S=pe(He)}let x=S;if(g&&w!==!1){const _=Object.keys(g),{shapeFlag:E}=x;_.length&&E&7&&(s&&_.some(Na)&&(g=eg(g,s)),x=kt(x,g))}return n.dirs&&(x=kt(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),S=x,ii(m),S}function Zh(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(vn(r)){if(r.type!==He||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Qh=e=>{let t;for(const n in e)(n==="class"||n==="style"||_i(n))&&((t||(t={}))[n]=e[n]);return t},eg=(e,t)=>{const n={};for(const r in e)(!Na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tg(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bc(r,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(s[p]!==r[p]&&!jo(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?bc(r,s,c):!0:!!s;return!1}function bc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!jo(n,o))return!0}return!1}function Ga({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const qf=e=>e.__isSuspense,ng={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,o,s,a,l,c){e==null?ig(t,n,r,i,o,s,a,l,c):og(e,t,n,r,i,s,a,l,c)},hydrate:sg,create:Ja,normalize:ag},rg=ng;function oi(e,t){const n=e.props&&e.props[t];ee(n)&&n()}function ig(e,t,n,r,i,o,s,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),p=e.suspense=Ja(e,i,r,t,f,n,o,s,a,l);c(null,p.pendingBranch=e.ssContent,f,null,r,p,o,s),p.deps>0?(oi(e,"onPending"),oi(e,"onFallback"),c(null,e.ssFallback,t,n,r,null,o,s),ur(p,e.ssFallback)):p.resolve(!1,!0)}function og(e,t,n,r,i,o,s,a,{p:l,um:c,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const p=t.ssContent,h=t.ssFallback,{activeBranch:v,pendingBranch:w,isInFallback:S,isHydrating:g}=f;if(w)f.pendingBranch=p,ct(p,w)?(l(w,p,f.hiddenContainer,null,i,f,o,s,a),f.deps<=0?f.resolve():S&&(l(v,h,n,r,i,null,o,s,a),ur(f,h))):(f.pendingId++,g?(f.isHydrating=!1,f.activeBranch=w):c(w,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),S?(l(null,p,f.hiddenContainer,null,i,f,o,s,a),f.deps<=0?f.resolve():(l(v,h,n,r,i,null,o,s,a),ur(f,h))):v&&ct(p,v)?(l(v,p,n,r,i,f,o,s,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,i,f,o,s,a),f.deps<=0&&f.resolve()));else if(v&&ct(p,v))l(v,p,n,r,i,f,o,s,a),ur(f,p);else if(oi(t,"onPending"),f.pendingBranch=p,f.pendingId++,l(null,p,f.hiddenContainer,null,i,f,o,s,a),f.deps<=0)f.resolve();else{const{timeout:m,pendingId:x}=f;m>0?setTimeout(()=>{f.pendingId===x&&f.fallback(h)},m):m===0&&f.fallback(h)}}function Ja(e,t,n,r,i,o,s,a,l,c,u=!1){const{p:f,m:p,um:h,n:v,o:{parentNode:w,remove:S}}=c;let g;const m=lg(e);m&&t!=null&&t.pendingBranch&&(g=t.pendingId,t.deps++);const x=e.props?ho(e.props.timeout):void 0,_={vnode:e,parent:t,parentComponent:n,isSVG:s,container:r,hiddenContainer:i,anchor:o,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,N=!1){const{vnode:$,activeBranch:C,pendingBranch:T,pendingId:D,effects:H,parentComponent:z,container:X}=_;if(_.isHydrating)_.isHydrating=!1;else if(!E){const G=C&&T.transition&&T.transition.mode==="out-in";G&&(C.transition.afterLeave=()=>{D===_.pendingId&&p(T,X,re,0)});let{anchor:re}=_;C&&(re=v(C),h(C,z,_,!0)),G||p(T,X,re,0)}ur(_,T),_.pendingBranch=null,_.isInFallback=!1;let B=_.parent,ie=!1;for(;B;){if(B.pendingBranch){B.effects.push(...H),ie=!0;break}B=B.parent}ie||Xa(H),_.effects=[],m&&t&&t.pendingBranch&&g===t.pendingId&&(t.deps--,t.deps===0&&!N&&t.resolve()),oi($,"onResolve")},fallback(E){if(!_.pendingBranch)return;const{vnode:N,activeBranch:$,parentComponent:C,container:T,isSVG:D}=_;oi(N,"onFallback");const H=v($),z=()=>{_.isInFallback&&(f(null,E,T,H,C,null,D,a,l),ur(_,E))},X=E.transition&&E.transition.mode==="out-in";X&&($.transition.afterLeave=z),_.isInFallback=!0,h($,C,null,!0),X||z()},move(E,N,$){_.activeBranch&&p(_.activeBranch,E,N,$),_.container=E},next(){return _.activeBranch&&v(_.activeBranch)},registerDep(E,N){const $=!!_.pendingBranch;$&&_.deps++;const C=E.vnode.el;E.asyncDep.catch(T=>{qn(T,E,0)}).then(T=>{if(E.isUnmounted||_.isUnmounted||_.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:D}=E;ea(E,T,!1),C&&(D.el=C);const H=!C&&E.subTree.el;N(E,D,w(C||E.subTree.el),C?null:v(E.subTree),_,s,l),H&&S(H),Ga(E,D.el),$&&--_.deps===0&&_.resolve()})},unmount(E,N){_.isUnmounted=!0,_.activeBranch&&h(_.activeBranch,n,E,N),_.pendingBranch&&h(_.pendingBranch,n,E,N)}};return _}function sg(e,t,n,r,i,o,s,a,l){const c=t.suspense=Ja(t,r,n,e.parentNode,document.createElement("div"),null,i,o,s,a,!0),u=l(e,c.pendingBranch=t.ssContent,n,c,o,s);return c.deps===0&&c.resolve(!1,!0),u}function ag(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=wc(r?n.default:n),e.ssFallback=r?wc(n.fallback):pe(He)}function wc(e){let t;if(ee(e)){const n=Hn&&e._c;n&&(e._d=!1,fe()),e=e(),n&&(e._d=!0,t=Ke,Cd())}return W(e)&&(e=Zh(e)),e=Qe(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Kf(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Xa(e)}function ur(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,Ga(r,i))}function lg(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function cg(e,t){return Ei(e,null,t)}function Xf(e,t){return Ei(e,null,{flush:"post"})}function ug(e,t){return Ei(e,null,{flush:"sync"})}const Fi={};function ot(e,t,n){return Ei(e,t,n)}function Ei(e,t,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=ge){var a;const l=Ba()===((a=Pe)==null?void 0:a.scope)?Pe:null;let c,u=!1,f=!1;if(Se(e)?(c=()=>e.value,u=ei(e)):Nt(e)?(c=()=>e,r=!0):W(e)?(f=!0,u=e.some(_=>Nt(_)||ei(_)),c=()=>e.map(_=>{if(Se(_))return _.value;if(Nt(_))return Tn(_);if(ee(_))return Lt(_,l,2)})):ee(e)?t?c=()=>Lt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),et(e,l,3,[h])}:c=pt,t&&r){const _=c;c=()=>Tn(_())}let p,h=_=>{p=m.onStop=()=>{Lt(_,l,4)}},v;if(hr)if(h=pt,t?n&&et(t,l,3,[c(),f?[]:void 0,h]):c(),i==="sync"){const _=Id();v=_.__watcherHandles||(_.__watcherHandles=[])}else return pt;let w=f?new Array(e.length).fill(Fi):Fi;const S=()=>{if(m.active)if(t){const _=m.run();(r||u||(f?_.some((E,N)=>pr(E,w[N])):pr(_,w)))&&(p&&p(),et(t,l,3,[_,w===Fi?void 0:f&&w[0]===Fi?[]:w,h]),w=_)}else m.run()};S.allowRecurse=!!t;let g;i==="sync"?g=S:i==="post"?g=()=>Me(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),g=()=>Fo(S));const m=new ki(c,g);t?n?S():w=m.run():i==="post"?Me(m.run.bind(m),l&&l.suspense):m.run();const x=()=>{m.stop(),l&&l.scope&&La(l.scope.effects,m)};return v&&v.push(x),x}function fg(e,t,n){const r=this.proxy,i=xe(e)?e.includes(".")?Gf(r,e):()=>r[e]:e.bind(r,r);let o;ee(t)?o=t:(o=t.handler,n=t);const s=Pe;yn(this);const a=Ei(i,o.bind(r),n);return s?yn(s):un(),a}function Gf(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Tn(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Tn(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)Tn(e[n],t);else if(Wn(e)||ar(e))e.forEach(n=>{Tn(n,t)});else if(yf(e))for(const n in e)Tn(e[n],t);return e}function Jf(e,t){const n=De;if(n===null)return e;const r=Xo(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,l,c=ge]=t[o];s&&(ee(s)&&(s={mounted:s,updated:s}),s.deep&&Tn(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function yt(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(xr(),et(l,n,8,[e.el,a,e,t]),kr())}}function Za(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const nt=[Function,Array],Qa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},dg={name:"BaseTransition",props:Qa,setup(e,{slots:t}){const n=Wt(),r=Za();let i;return()=>{const o=t.default&&Uo(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const w of o)if(w.type!==He){s=w;break}}const a=se(e),{mode:l}=a;if(r.isLeaving)return ys(s);const c=_c(s);if(!c)return ys(s);const u=mr(c,a,r,n);Fn(c,u);const f=n.subTree,p=f&&_c(f);let h=!1;const{getTransitionKey:v}=c.type;if(v){const w=v();i===void 0?i=w:w!==i&&(i=w,h=!0)}if(p&&p.type!==He&&(!ct(c,p)||h)){const w=mr(p,a,r,n);if(Fn(p,w),l==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ys(s);l==="in-out"&&c.type!==He&&(w.delayLeave=(S,g,m)=>{const x=Qf(r,p);x[String(p.key)]=p,S._leaveCb=()=>{g(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return s}}},Zf=dg;function Qf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mr(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:h,onLeaveCancelled:v,onBeforeAppear:w,onAppear:S,onAfterAppear:g,onAppearCancelled:m}=t,x=String(e.key),_=Qf(n,e),E=(C,T)=>{C&&et(C,r,9,T)},N=(C,T)=>{const D=T[1];E(C,T),W(C)?C.every(H=>H.length<=1)&&D():C.length<=1&&D()},$={mode:o,persisted:s,beforeEnter(C){let T=a;if(!n.isMounted)if(i)T=w||a;else return;C._leaveCb&&C._leaveCb(!0);const D=_[x];D&&ct(e,D)&&D.el._leaveCb&&D.el._leaveCb(),E(T,[C])},enter(C){let T=l,D=c,H=u;if(!n.isMounted)if(i)T=S||l,D=g||c,H=m||u;else return;let z=!1;const X=C._enterCb=B=>{z||(z=!0,B?E(H,[C]):E(D,[C]),$.delayedLeave&&$.delayedLeave(),C._enterCb=void 0)};T?N(T,[C,X]):X()},leave(C,T){const D=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return T();E(f,[C]);let H=!1;const z=C._leaveCb=X=>{H||(H=!0,T(),X?E(v,[C]):E(h,[C]),C._leaveCb=void 0,_[D]===e&&delete _[D])};_[D]=e,p?N(p,[C,z]):z()},clone(C){return mr(C,t,n,r)}};return $}function ys(e){if(Ci(e))return e=kt(e),e.children=null,e}function _c(e){return Ci(e)?e.children?e.children[0]:void 0:e}function Fn(e,t){e.shapeFlag&6&&e.component?Fn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Uo(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===Ce?(s.patchFlag&128&&i++,r=r.concat(Uo(s.children,t,a))):(t||s.type!==He)&&r.push(a!=null?kt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Re(e,t){return ee(e)?(()=>be({name:e.name},t,{setup:e}))():e}const In=e=>!!e.type.__asyncLoader;function pg(e){ee(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,timeout:o,suspensible:s=!0,onError:a}=e;let l=null,c,u=0;const f=()=>(u++,l=null,p()),p=()=>{let h;return l||(h=l=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),a)return new Promise((w,S)=>{a(v,()=>w(f()),()=>S(v),u+1)});throw v}).then(v=>h!==l&&l?l:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return Re({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const h=Pe;if(c)return()=>bs(c,h);const v=m=>{l=null,qn(m,h,13,!r)};if(s&&h.suspense||hr)return p().then(m=>()=>bs(m,h)).catch(m=>(v(m),()=>r?pe(r,{error:m}):null));const w=Oe(!1),S=Oe(),g=Oe(!!i);return i&&setTimeout(()=>{g.value=!1},i),o!=null&&setTimeout(()=>{if(!w.value&&!S.value){const m=new Error(`Async component timed out after ${o}ms.`);v(m),S.value=m}},o),p().then(()=>{w.value=!0,h.parent&&Ci(h.parent.vnode)&&Fo(h.parent.update)}).catch(m=>{v(m),S.value=m}),()=>{if(w.value&&c)return bs(c,h);if(S.value&&r)return pe(r,{error:S.value});if(n&&!g.value)return pe(n)}}})}function bs(e,t){const{ref:n,props:r,children:i,ce:o}=t.vnode,s=pe(e,r,i);return s.ref=n,s.ce=o,delete t.vnode.ce,s}const Ci=e=>e.type.__isKeepAlive,mg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Wt(),r=n.ctx;if(!r.renderer)return()=>{const m=t.default&&t.default();return m&&m.length===1?m[0]:m};const i=new Map,o=new Set;let s=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=r,p=f("div");r.activate=(m,x,_,E,N)=>{const $=m.component;c(m,x,_,0,a),l($.vnode,m,x,_,$,a,E,m.slotScopeIds,N),Me(()=>{$.isDeactivated=!1,$.a&&lr($.a);const C=m.props&&m.props.onVnodeMounted;C&&qe(C,$.parent,m)},a)},r.deactivate=m=>{const x=m.component;c(m,p,null,1,a),Me(()=>{x.da&&lr(x.da);const _=m.props&&m.props.onVnodeUnmounted;_&&qe(_,x.parent,m),x.isDeactivated=!0},a)};function h(m){ws(m),u(m,n,a,!0)}function v(m){i.forEach((x,_)=>{const E=na(x.type);E&&(!m||!m(E))&&w(_)})}function w(m){const x=i.get(m);!s||!ct(x,s)?h(x):s&&ws(s),i.delete(m),o.delete(m)}ot(()=>[e.include,e.exclude],([m,x])=>{m&&v(_=>Lr(m,_)),x&&v(_=>!Lr(x,_))},{flush:"post",deep:!0});let S=null;const g=()=>{S!=null&&i.set(S,_s(n.subTree))};return Kn(g),Yo(g),Wo(()=>{i.forEach(m=>{const{subTree:x,suspense:_}=n,E=_s(x);if(m.type===E.type&&m.key===E.key){ws(E);const N=E.component.da;N&&Me(N,_);return}h(m)})}),()=>{if(S=null,!t.default)return null;const m=t.default(),x=m[0];if(m.length>1)return s=null,m;if(!vn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return s=null,x;let _=_s(x);const E=_.type,N=na(In(_)?_.type.__asyncResolved||{}:E),{include:$,exclude:C,max:T}=e;if($&&(!N||!Lr($,N))||C&&N&&Lr(C,N))return s=_,x;const D=_.key==null?E:_.key,H=i.get(D);return _.el&&(_=kt(_),x.shapeFlag&128&&(x.ssContent=_)),S=D,H?(_.el=H.el,_.component=H.component,_.transition&&Fn(_,_.transition),_.shapeFlag|=512,o.delete(D),o.add(D)):(o.add(D),T&&o.size>parseInt(T,10)&&w(o.values().next().value)),_.shapeFlag|=256,s=_,qf(x.type)?x:_}}},hg=mg;function Lr(e,t){return W(e)?e.some(n=>Lr(n,t)):xe(e)?e.split(",").includes(t):Vm(e)?e.test(t):!1}function ed(e,t){nd(e,"a",t)}function td(e,t){nd(e,"da",t)}function nd(e,t,n=Pe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vo(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ci(i.parent.vnode)&&gg(r,t,n,i),i=i.parent}}function gg(e,t,n,r){const i=Vo(t,e,r,!0);qo(()=>{La(r[t],i)},n)}function ws(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _s(e){return e.shapeFlag&128?e.ssContent:e}function Vo(e,t,n=Pe,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;xr(),yn(n);const a=et(t,n,e,s);return un(),kr(),a});return r?i.unshift(o):i.push(o),o}}const Vt=e=>(t,n=Pe)=>(!hr||e==="sp")&&Vo(e,(...r)=>t(...r),n),rd=Vt("bm"),Kn=Vt("m"),id=Vt("bu"),Yo=Vt("u"),Wo=Vt("bum"),qo=Vt("um"),od=Vt("sp"),sd=Vt("rtg"),ad=Vt("rtc");function ld(e,t=Pe){Vo("ec",e,t)}const el="components",vg="directives";function hn(e,t){return tl(el,e,!0,t)||e}const cd=Symbol.for("v-ndc");function yg(e){return xe(e)?tl(el,e,!1)||e:e||cd}function bg(e){return tl(vg,e)}function tl(e,t,n=!0,r=!1){const i=De||Pe;if(i){const o=i.type;if(e===el){const a=na(o,!1);if(a&&(a===t||a===Xe(t)||a===xi(Xe(t))))return o}const s=xc(i[e]||o[e],t)||xc(i.appContext[e],t);return!s&&r?o:s}}function xc(e,t){return e&&(e[t]||e[Xe(t)]||e[xi(Xe(t))])}function ud(e,t,n,r){let i;const o=n&&n[r];if(W(e)||xe(e)){i=new Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=t(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,o&&o[s])}else if(ve(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>t(s,a,void 0,o&&o[a]));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];i[a]=t(e[c],c,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}function wg(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(W(r))for(let i=0;i<r.length;i++)e[r[i].name]=r[i].fn;else r&&(e[r.name]=r.key?(...i)=>{const o=r.fn(...i);return o&&(o.key=r.key),o}:r.fn)}return e}function gn(e,t,n={},r,i){if(De.isCE||De.parent&&In(De.parent)&&De.parent.isCE)return t!=="default"&&(n.name=t),pe("slot",n,r&&r());let o=e[t];o&&o._c&&(o._d=!1),fe();const s=o&&fd(o(n)),a=Yt(Ce,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function fd(e){return e.some(t=>vn(t)?!(t.type===He||t.type===Ce&&!fd(t.children)):!0)?e:null}function _g(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:Mr(r)]=e[r];return n}const qs=e=>e?Td(e)?Xo(e)||e.proxy:qs(e.parent):null,Br=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qs(e.parent),$root:e=>qs(e.root),$emit:e=>e.emit,$options:e=>nl(e),$forceUpdate:e=>e.f||(e.f=()=>Fo(e.update)),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>fg.bind(e)}),xs=(e,t)=>e!==ge&&!e.__isScriptSetup&&le(e,t),Ks={get({_:e},t){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(xs(r,t))return s[t]=1,r[t];if(i!==ge&&le(i,t))return s[t]=2,i[t];if((c=e.propsOptions[0])&&le(c,t))return s[t]=3,o[t];if(n!==ge&&le(n,t))return s[t]=4,n[t];Xs&&(s[t]=0)}}const u=Br[t];let f,p;if(u)return t==="$attrs"&&Ge(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ge&&le(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,le(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return xs(i,t)?(i[t]=n,!0):r!==ge&&le(r,t)?(r[t]=n,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||e!==ge&&le(e,s)||xs(t,s)||(a=o[0])&&le(a,s)||le(r,s)||le(Br,s)||le(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},xg=be({},Ks,{get(e,t){if(t!==Symbol.unscopables)return Ks.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Xm(t)}});function kg(){return null}function Sg(){return null}function Eg(e){}function Cg(e){}function Ag(){return null}function Pg(){}function Og(e,t){return null}function dd(){return pd().slots}function Tg(){return pd().attrs}function Rg(e,t,n){const r=Wt();if(n&&n.local){const i=Oe(e[t]);return ot(()=>e[t],o=>i.value=o),ot(i,o=>{o!==e[t]&&r.emit(`update:${t}`,o)}),i}else return{__v_isRef:!0,get value(){return e[t]},set value(i){r.emit(`update:${t}`,i)}}}function pd(){const e=Wt();return e.setupContext||(e.setupContext=Nd(e))}function si(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function $g(e,t){const n=si(e);for(const r in t){if(r.startsWith("__skip"))continue;let i=n[r];i?W(i)||ee(i)?i=n[r]={type:i,default:t[r]}:i.default=t[r]:i===null&&(i=n[r]={default:t[r]}),i&&t[`__skip_${r}`]&&(i.skipFactory=!0)}return n}function Ng(e,t){return!e||!t?e||t:W(e)&&W(t)?e.concat(t):be({},si(e),si(t))}function Lg(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Ig(e){const t=Wt();let n=e();return un(),Ia(n)&&(n=n.catch(r=>{throw yn(t),r})),[n,()=>yn(t)]}let Xs=!0;function Dg(e){const t=nl(e),n=e.proxy,r=e.ctx;Xs=!1,t.beforeCreate&&kc(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:h,updated:v,activated:w,deactivated:S,beforeDestroy:g,beforeUnmount:m,destroyed:x,unmounted:_,render:E,renderTracked:N,renderTriggered:$,errorCaptured:C,serverPrefetch:T,expose:D,inheritAttrs:H,components:z,directives:X,filters:B}=t;if(c&&zg(c,r,null),s)for(const re in s){const ue=s[re];ee(ue)&&(r[re]=ue.bind(n))}if(i){const re=i.call(n,n);ve(re)&&(e.data=Ht(re))}if(Xs=!0,o)for(const re in o){const ue=o[re],At=ee(ue)?ue.bind(n,n):ee(ue.get)?ue.get.bind(n,n):pt,Kt=!ee(ue)&&ee(ue.set)?ue.set.bind(n):pt,gt=Ne({get:At,set:Kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Ye=>gt.value=Ye})}if(a)for(const re in a)md(a[re],r,n,re);if(l){const re=ee(l)?l.call(n):l;Reflect.ownKeys(re).forEach(ue=>{Fr(ue,re[ue])})}u&&kc(u,e,"c");function G(re,ue){W(ue)?ue.forEach(At=>re(At.bind(n))):ue&&re(ue.bind(n))}if(G(rd,f),G(Kn,p),G(id,h),G(Yo,v),G(ed,w),G(td,S),G(ld,C),G(ad,N),G(sd,$),G(Wo,m),G(qo,_),G(od,T),W(D))if(D.length){const re=e.exposed||(e.exposed={});D.forEach(ue=>{Object.defineProperty(re,ue,{get:()=>n[ue],set:At=>n[ue]=At})})}else e.exposed||(e.exposed={});E&&e.render===pt&&(e.render=E),H!=null&&(e.inheritAttrs=H),z&&(e.components=z),X&&(e.directives=X)}function zg(e,t,n=pt){W(e)&&(e=Gs(e));for(const r in e){const i=e[r];let o;ve(i)?"default"in i?o=je(i.from||r,i.default,!0):o=je(i.from||r):o=je(i),Se(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[r]=o}}function kc(e,t,n){et(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function md(e,t,n,r){const i=r.includes(".")?Gf(n,r):()=>n[r];if(xe(e)){const o=t[e];ee(o)&&ot(i,o)}else if(ee(e))ot(i,e.bind(n));else if(ve(e))if(W(e))e.forEach(o=>md(o,t,n,r));else{const o=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(o)&&ot(i,o,e)}}function nl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>yo(l,c,s,!0)),yo(l,t,s)),ve(t)&&o.set(t,l),l}function yo(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&yo(e,o,n,!0),i&&i.forEach(s=>yo(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=Mg[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Mg={data:Sc,props:Ec,emits:Ec,methods:Ir,computed:Ir,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Ir,directives:Ir,watch:Fg,provide:Sc,inject:Bg};function Sc(e,t){return t?e?function(){return be(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Bg(e,t){return Ir(Gs(e),Gs(t))}function Gs(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Ir(e,t){return e?be(Object.create(null),e,t):t}function Ec(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:be(Object.create(null),si(e),si(t??{})):t}function Fg(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=Ue(e[r],t[r]);return n}function hd(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jg=0;function Hg(e,t){return function(r,i=null){ee(r)||(r=be({},r)),i!=null&&!ve(i)&&(i=null);const o=hd(),s=new Set;let a=!1;const l=o.app={_uid:jg++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:zd,get config(){return o.config},set config(c){},use(c,...u){return s.has(c)||(c&&ee(c.install)?(s.add(c),c.install(l,...u)):ee(c)&&(s.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,f){if(!a){const p=pe(r,i);return p.appContext=o,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Xo(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){ai=l;try{return c()}finally{ai=null}}};return l}}let ai=null;function Fr(e,t){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=Pe||De;if(r||ai){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ai._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(r&&r.proxy):t}}function gd(){return!!(Pe||De||ai)}function Ug(e,t,n,r=!1){const i={},o={};po(o,Ko,1),e.propsDefaults=Object.create(null),vd(e,t,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:Ha(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Vg(e,t,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=se(i),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(jo(e.emitsOptions,p))continue;const h=t[p];if(l)if(le(o,p))h!==o[p]&&(o[p]=h,c=!0);else{const v=Xe(p);i[v]=Js(l,a,v,h,e,!1)}else h!==o[p]&&(o[p]=h,c=!0)}}}else{vd(e,t,i,o)&&(c=!0);let u;for(const f in a)(!t||!le(t,f)&&((u=rt(f))===f||!le(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Js(l,a,f,void 0,e,!0)):delete i[f]);if(o!==a)for(const f in o)(!t||!le(t,f))&&(delete o[f],c=!0)}c&&Mt(e,"set","$attrs")}function vd(e,t,n,r){const[i,o]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(zr(l))continue;const c=t[l];let u;i&&le(i,u=Xe(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:jo(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=se(n),c=a||ge;for(let u=0;u<o.length;u++){const f=o[u];n[f]=Js(i,l,f,c[f],e,!le(c,f))}}return s}function Js(e,t,n,r,i,o){const s=e[n];if(s!=null){const a=le(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(yn(i),r=c[n]=l.call(null,t),un())}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===rt(n))&&(r=!0))}return r}function yd(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let l=!1;if(!ee(e)){const u=f=>{l=!0;const[p,h]=yd(f,t,!0);be(s,p),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ve(e)&&r.set(e,sr),sr;if(W(o))for(let u=0;u<o.length;u++){const f=Xe(o[u]);Cc(f)&&(s[f]=ge)}else if(o)for(const u in o){const f=Xe(u);if(Cc(f)){const p=o[u],h=s[f]=W(p)||ee(p)?{type:p}:be({},p);if(h){const v=Oc(Boolean,h.type),w=Oc(String,h.type);h[0]=v>-1,h[1]=w<0||v<w,(v>-1||le(h,"default"))&&a.push(f)}}}const c=[s,a];return ve(e)&&r.set(e,c),c}function Cc(e){return e[0]!=="$"}function Ac(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Pc(e,t){return Ac(e)===Ac(t)}function Oc(e,t){return W(t)?t.findIndex(n=>Pc(n,e)):ee(t)&&Pc(t,e)?0:-1}const bd=e=>e[0]==="_"||e==="$stable",rl=e=>W(e)?e.map(Qe):[Qe(e)],Yg=(e,t,n)=>{if(t._n)return t;const r=Bn((...i)=>rl(t(...i)),n);return r._c=!1,r},wd=(e,t,n)=>{const r=e._ctx;for(const i in e){if(bd(i))continue;const o=e[i];if(ee(o))t[i]=Yg(i,o,r);else if(o!=null){const s=rl(o);t[i]=()=>s}}},_d=(e,t)=>{const n=rl(t);e.slots.default=()=>n},Wg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),po(t,"_",n)):wd(t,e.slots={})}else e.slots={},t&&_d(e,t);po(e.slots,Ko,1)},qg=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,s=ge;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(be(i,t),!n&&a===1&&delete i._):(o=!t.$stable,wd(t,i)),s=t}else t&&(_d(e,t),s={default:1});if(o)for(const a in i)!bd(a)&&!(a in s)&&delete i[a]};function bo(e,t,n,r,i=!1){if(W(e)){e.forEach((p,h)=>bo(p,t&&(W(t)?t[h]:t),n,r,i));return}if(In(r)&&!i)return;const o=r.shapeFlag&4?Xo(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,le(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),ee(l))Lt(l,a,12,[s,u]);else{const p=xe(l),h=Se(l);if(p||h){const v=()=>{if(e.f){const w=p?le(f,l)?f[l]:u[l]:l.value;i?W(w)&&La(w,o):W(w)?w.includes(o)||w.push(o):p?(u[l]=[o],le(f,l)&&(f[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else p?(u[l]=s,le(f,l)&&(f[l]=s)):h&&(l.value=s,e.k&&(u[e.k]=s))};s?(v.id=-1,Me(v,n)):v()}}}let Gt=!1;const ji=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Hi=e=>e.nodeType===8;function Kg(e){const{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:o,parentNode:s,remove:a,insert:l,createComment:c}}=e,u=(g,m)=>{if(!m.hasChildNodes()){n(null,g,m),vo(),m._vnode=g;return}Gt=!1,f(m.firstChild,g,null,null,null),vo(),m._vnode=g,Gt&&console.error("Hydration completed but contains mismatches.")},f=(g,m,x,_,E,N=!1)=>{const $=Hi(g)&&g.data==="[",C=()=>w(g,m,x,_,E,$),{type:T,ref:D,shapeFlag:H,patchFlag:z}=m;let X=g.nodeType;m.el=g,z===-2&&(N=!1,m.dynamicChildren=null);let B=null;switch(T){case jn:X!==3?m.children===""?(l(m.el=i(""),s(g),g),B=g):B=C():(g.data!==m.children&&(Gt=!0,g.data=m.children),B=o(g));break;case He:X!==8||$?B=C():B=o(g);break;case Dn:if($&&(g=o(g),X=g.nodeType),X===1||X===3){B=g;const ie=!m.children.length;for(let G=0;G<m.staticCount;G++)ie&&(m.children+=B.nodeType===1?B.outerHTML:B.data),G===m.staticCount-1&&(m.anchor=B),B=o(B);return $?o(B):B}else C();break;case Ce:$?B=v(g,m,x,_,E,N):B=C();break;default:if(H&1)X!==1||m.type.toLowerCase()!==g.tagName.toLowerCase()?B=C():B=p(g,m,x,_,E,N);else if(H&6){m.slotScopeIds=E;const ie=s(g);if(t(m,ie,null,x,_,ji(ie),N),B=$?S(g):o(g),B&&Hi(B)&&B.data==="teleport end"&&(B=o(B)),In(m)){let G;$?(G=pe(Ce),G.anchor=B?B.previousSibling:ie.lastChild):G=g.nodeType===3?sl(""):pe("div"),G.el=g,m.component.subTree=G}}else H&64?X!==8?B=C():B=m.type.hydrate(g,m,x,_,E,N,e,h):H&128&&(B=m.type.hydrate(g,m,x,_,ji(s(g)),E,N,e,f))}return D!=null&&bo(D,null,_,m),B},p=(g,m,x,_,E,N)=>{N=N||!!m.dynamicChildren;const{type:$,props:C,patchFlag:T,shapeFlag:D,dirs:H}=m,z=$==="input"&&H||$==="option";if(z||T!==-1){if(H&&yt(m,null,x,"created"),C)if(z||!N||T&48)for(const B in C)(z&&B.endsWith("value")||_i(B)&&!zr(B))&&r(g,B,null,C[B],!1,void 0,x);else C.onClick&&r(g,"onClick",null,C.onClick,!1,void 0,x);let X;if((X=C&&C.onVnodeBeforeMount)&&qe(X,x,m),H&&yt(m,null,x,"beforeMount"),((X=C&&C.onVnodeMounted)||H)&&Kf(()=>{X&&qe(X,x,m),H&&yt(m,null,x,"mounted")},_),D&16&&!(C&&(C.innerHTML||C.textContent))){let B=h(g.firstChild,m,g,x,_,E,N);for(;B;){Gt=!0;const ie=B;B=B.nextSibling,a(ie)}}else D&8&&g.textContent!==m.children&&(Gt=!0,g.textContent=m.children)}return g.nextSibling},h=(g,m,x,_,E,N,$)=>{$=$||!!m.dynamicChildren;const C=m.children,T=C.length;for(let D=0;D<T;D++){const H=$?C[D]:C[D]=Qe(C[D]);if(g)g=f(g,H,_,E,N,$);else{if(H.type===jn&&!H.children)continue;Gt=!0,n(null,H,x,null,_,E,ji(x),N)}}return g},v=(g,m,x,_,E,N)=>{const{slotScopeIds:$}=m;$&&(E=E?E.concat($):$);const C=s(g),T=h(o(g),m,C,x,_,E,N);return T&&Hi(T)&&T.data==="]"?o(m.anchor=T):(Gt=!0,l(m.anchor=c("]"),C,T),T)},w=(g,m,x,_,E,N)=>{if(Gt=!0,m.el=null,N){const T=S(g);for(;;){const D=o(g);if(D&&D!==T)a(D);else break}}const $=o(g),C=s(g);return a(g),n(null,m,C,$,x,_,ji(C),E),$},S=g=>{let m=0;for(;g;)if(g=o(g),g&&Hi(g)&&(g.data==="["&&m++,g.data==="]")){if(m===0)return o(g);m--}return g};return[u,f]}const Me=Kf;function xd(e){return Sd(e)}function kd(e){return Sd(e,Kg)}function Sd(e,t){const n=Hs();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:h=pt,insertStaticContent:v}=e,w=(y,b,k,A=null,R=null,L=null,U=!1,M=null,F=!!b.dynamicChildren)=>{if(y===b)return;y&&!ct(y,b)&&(A=O(y),Ye(y,R,L,!0),y=null),b.patchFlag===-2&&(F=!1,b.dynamicChildren=null);const{type:I,ref:Z,shapeFlag:q}=b;switch(I){case jn:S(y,b,k,A);break;case He:g(y,b,k,A);break;case Dn:y==null&&m(b,k,A,U);break;case Ce:z(y,b,k,A,R,L,U,M,F);break;default:q&1?E(y,b,k,A,R,L,U,M,F):q&6?X(y,b,k,A,R,L,U,M,F):(q&64||q&128)&&I.process(y,b,k,A,R,L,U,M,F,j)}Z!=null&&R&&bo(Z,y&&y.ref,L,b||y,!b)},S=(y,b,k,A)=>{if(y==null)r(b.el=a(b.children),k,A);else{const R=b.el=y.el;b.children!==y.children&&c(R,b.children)}},g=(y,b,k,A)=>{y==null?r(b.el=l(b.children||""),k,A):b.el=y.el},m=(y,b,k,A)=>{[y.el,y.anchor]=v(y.children,b,k,A,y.el,y.anchor)},x=({el:y,anchor:b},k,A)=>{let R;for(;y&&y!==b;)R=p(y),r(y,k,A),y=R;r(b,k,A)},_=({el:y,anchor:b})=>{let k;for(;y&&y!==b;)k=p(y),i(y),y=k;i(b)},E=(y,b,k,A,R,L,U,M,F)=>{U=U||b.type==="svg",y==null?N(b,k,A,R,L,U,M,F):T(y,b,R,L,U,M,F)},N=(y,b,k,A,R,L,U,M)=>{let F,I;const{type:Z,props:q,shapeFlag:Q,transition:te,dirs:oe}=y;if(F=y.el=s(y.type,L,q&&q.is,q),Q&8?u(F,y.children):Q&16&&C(y.children,F,null,A,R,L&&Z!=="foreignObject",U,M),oe&&yt(y,null,A,"created"),$(F,y,y.scopeId,U,A),q){for(const he in q)he!=="value"&&!zr(he)&&o(F,he,null,q[he],L,y.children,A,R,Be);"value"in q&&o(F,"value",null,q.value),(I=q.onVnodeBeforeMount)&&qe(I,A,y)}oe&&yt(y,null,A,"beforeMount");const ye=(!R||R&&!R.pendingBranch)&&te&&!te.persisted;ye&&te.beforeEnter(F),r(F,b,k),((I=q&&q.onVnodeMounted)||ye||oe)&&Me(()=>{I&&qe(I,A,y),ye&&te.enter(F),oe&&yt(y,null,A,"mounted")},R)},$=(y,b,k,A,R)=>{if(k&&h(y,k),A)for(let L=0;L<A.length;L++)h(y,A[L]);if(R){let L=R.subTree;if(b===L){const U=R.vnode;$(y,U,U.scopeId,U.slotScopeIds,R.parent)}}},C=(y,b,k,A,R,L,U,M,F=0)=>{for(let I=F;I<y.length;I++){const Z=y[I]=M?sn(y[I]):Qe(y[I]);w(null,Z,b,k,A,R,L,U,M)}},T=(y,b,k,A,R,L,U)=>{const M=b.el=y.el;let{patchFlag:F,dynamicChildren:I,dirs:Z}=b;F|=y.patchFlag&16;const q=y.props||ge,Q=b.props||ge;let te;k&&Sn(k,!1),(te=Q.onVnodeBeforeUpdate)&&qe(te,k,b,y),Z&&yt(b,y,k,"beforeUpdate"),k&&Sn(k,!0);const oe=R&&b.type!=="foreignObject";if(I?D(y.dynamicChildren,I,M,k,A,oe,L):U||ue(y,b,M,null,k,A,oe,L,!1),F>0){if(F&16)H(M,b,q,Q,k,A,R);else if(F&2&&q.class!==Q.class&&o(M,"class",null,Q.class,R),F&4&&o(M,"style",q.style,Q.style,R),F&8){const ye=b.dynamicProps;for(let he=0;he<ye.length;he++){const Ae=ye[he],at=q[Ae],Qn=Q[Ae];(Qn!==at||Ae==="value")&&o(M,Ae,at,Qn,R,y.children,k,A,Be)}}F&1&&y.children!==b.children&&u(M,b.children)}else!U&&I==null&&H(M,b,q,Q,k,A,R);((te=Q.onVnodeUpdated)||Z)&&Me(()=>{te&&qe(te,k,b,y),Z&&yt(b,y,k,"updated")},A)},D=(y,b,k,A,R,L,U)=>{for(let M=0;M<b.length;M++){const F=y[M],I=b[M],Z=F.el&&(F.type===Ce||!ct(F,I)||F.shapeFlag&70)?f(F.el):k;w(F,I,Z,null,A,R,L,U,!0)}},H=(y,b,k,A,R,L,U)=>{if(k!==A){if(k!==ge)for(const M in k)!zr(M)&&!(M in A)&&o(y,M,k[M],null,U,b.children,R,L,Be);for(const M in A){if(zr(M))continue;const F=A[M],I=k[M];F!==I&&M!=="value"&&o(y,M,I,F,U,b.children,R,L,Be)}"value"in A&&o(y,"value",k.value,A.value)}},z=(y,b,k,A,R,L,U,M,F)=>{const I=b.el=y?y.el:a(""),Z=b.anchor=y?y.anchor:a("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:te}=b;te&&(M=M?M.concat(te):te),y==null?(r(I,k,A),r(Z,k,A),C(b.children,k,Z,R,L,U,M,F)):q>0&&q&64&&Q&&y.dynamicChildren?(D(y.dynamicChildren,Q,k,R,L,U,M),(b.key!=null||R&&b===R.subTree)&&il(y,b,!0)):ue(y,b,k,Z,R,L,U,M,F)},X=(y,b,k,A,R,L,U,M,F)=>{b.slotScopeIds=M,y==null?b.shapeFlag&512?R.ctx.activate(b,k,A,U,F):B(b,k,A,R,L,U,F):ie(y,b,F)},B=(y,b,k,A,R,L,U)=>{const M=y.component=Od(y,A,R);if(Ci(y)&&(M.ctx.renderer=j),Rd(M),M.asyncDep){if(R&&R.registerDep(M,G),!y.el){const F=M.subTree=pe(He);g(null,F,b,k)}return}G(M,y,b,k,R,L,U)},ie=(y,b,k)=>{const A=b.component=y.component;if(tg(y,b,k))if(A.asyncDep&&!A.asyncResolved){re(A,b,k);return}else A.next=b,Xh(A.update),A.update();else b.el=y.el,A.vnode=b},G=(y,b,k,A,R,L,U)=>{const M=()=>{if(y.isMounted){let{next:Z,bu:q,u:Q,parent:te,vnode:oe}=y,ye=Z,he;Sn(y,!1),Z?(Z.el=oe.el,re(y,Z,U)):Z=oe,q&&lr(q),(he=Z.props&&Z.props.onVnodeBeforeUpdate)&&qe(he,te,Z,oe),Sn(y,!0);const Ae=ro(y),at=y.subTree;y.subTree=Ae,w(at,Ae,f(at.el),O(at),y,R,L),Z.el=Ae.el,ye===null&&Ga(y,Ae.el),Q&&Me(Q,R),(he=Z.props&&Z.props.onVnodeUpdated)&&Me(()=>qe(he,te,Z,oe),R)}else{let Z;const{el:q,props:Q}=b,{bm:te,m:oe,parent:ye}=y,he=In(b);if(Sn(y,!1),te&&lr(te),!he&&(Z=Q&&Q.onVnodeBeforeMount)&&qe(Z,ye,b),Sn(y,!0),q&&de){const Ae=()=>{y.subTree=ro(y),de(q,y.subTree,y,R,null)};he?b.type.__asyncLoader().then(()=>!y.isUnmounted&&Ae()):Ae()}else{const Ae=y.subTree=ro(y);w(null,Ae,k,A,y,R,L),b.el=Ae.el}if(oe&&Me(oe,R),!he&&(Z=Q&&Q.onVnodeMounted)){const Ae=b;Me(()=>qe(Z,ye,Ae),R)}(b.shapeFlag&256||ye&&In(ye.vnode)&&ye.vnode.shapeFlag&256)&&y.a&&Me(y.a,R),y.isMounted=!0,b=k=A=null}},F=y.effect=new ki(M,()=>Fo(I),y.scope),I=y.update=()=>F.run();I.id=y.uid,Sn(y,!0),I()},re=(y,b,k)=>{b.component=y;const A=y.vnode.props;y.vnode=b,y.next=null,Vg(y,b.props,A,k),qg(y,b.children,k),xr(),yc(),kr()},ue=(y,b,k,A,R,L,U,M,F=!1)=>{const I=y&&y.children,Z=y?y.shapeFlag:0,q=b.children,{patchFlag:Q,shapeFlag:te}=b;if(Q>0){if(Q&128){Kt(I,q,k,A,R,L,U,M,F);return}else if(Q&256){At(I,q,k,A,R,L,U,M,F);return}}te&8?(Z&16&&Be(I,R,L),q!==I&&u(k,q)):Z&16?te&16?Kt(I,q,k,A,R,L,U,M,F):Be(I,R,L,!0):(Z&8&&u(k,""),te&16&&C(q,k,A,R,L,U,M,F))},At=(y,b,k,A,R,L,U,M,F)=>{y=y||sr,b=b||sr;const I=y.length,Z=b.length,q=Math.min(I,Z);let Q;for(Q=0;Q<q;Q++){const te=b[Q]=F?sn(b[Q]):Qe(b[Q]);w(y[Q],te,k,null,R,L,U,M,F)}I>Z?Be(y,R,L,!0,!1,q):C(b,k,A,R,L,U,M,F,q)},Kt=(y,b,k,A,R,L,U,M,F)=>{let I=0;const Z=b.length;let q=y.length-1,Q=Z-1;for(;I<=q&&I<=Q;){const te=y[I],oe=b[I]=F?sn(b[I]):Qe(b[I]);if(ct(te,oe))w(te,oe,k,null,R,L,U,M,F);else break;I++}for(;I<=q&&I<=Q;){const te=y[q],oe=b[Q]=F?sn(b[Q]):Qe(b[Q]);if(ct(te,oe))w(te,oe,k,null,R,L,U,M,F);else break;q--,Q--}if(I>q){if(I<=Q){const te=Q+1,oe=te<Z?b[te].el:A;for(;I<=Q;)w(null,b[I]=F?sn(b[I]):Qe(b[I]),k,oe,R,L,U,M,F),I++}}else if(I>Q)for(;I<=q;)Ye(y[I],R,L,!0),I++;else{const te=I,oe=I,ye=new Map;for(I=oe;I<=Q;I++){const Je=b[I]=F?sn(b[I]):Qe(b[I]);Je.key!=null&&ye.set(Je.key,I)}let he,Ae=0;const at=Q-oe+1;let Qn=!1,sc=0;const Pr=new Array(at);for(I=0;I<at;I++)Pr[I]=0;for(I=te;I<=q;I++){const Je=y[I];if(Ae>=at){Ye(Je,R,L,!0);continue}let vt;if(Je.key!=null)vt=ye.get(Je.key);else for(he=oe;he<=Q;he++)if(Pr[he-oe]===0&&ct(Je,b[he])){vt=he;break}vt===void 0?Ye(Je,R,L,!0):(Pr[vt-oe]=I+1,vt>=sc?sc=vt:Qn=!0,w(Je,b[vt],k,null,R,L,U,M,F),Ae++)}const ac=Qn?Xg(Pr):sr;for(he=ac.length-1,I=at-1;I>=0;I--){const Je=oe+I,vt=b[Je],lc=Je+1<Z?b[Je+1].el:A;Pr[I]===0?w(null,vt,k,lc,R,L,U,M,F):Qn&&(he<0||I!==ac[he]?gt(vt,k,lc,2):he--)}}},gt=(y,b,k,A,R=null)=>{const{el:L,type:U,transition:M,children:F,shapeFlag:I}=y;if(I&6){gt(y.component.subTree,b,k,A);return}if(I&128){y.suspense.move(b,k,A);return}if(I&64){U.move(y,b,k,j);return}if(U===Ce){r(L,b,k);for(let q=0;q<F.length;q++)gt(F[q],b,k,A);r(y.anchor,b,k);return}if(U===Dn){x(y,b,k);return}if(A!==2&&I&1&&M)if(A===0)M.beforeEnter(L),r(L,b,k),Me(()=>M.enter(L),R);else{const{leave:q,delayLeave:Q,afterLeave:te}=M,oe=()=>r(L,b,k),ye=()=>{q(L,()=>{oe(),te&&te()})};Q?Q(L,oe,ye):ye()}else r(L,b,k)},Ye=(y,b,k,A=!1,R=!1)=>{const{type:L,props:U,ref:M,children:F,dynamicChildren:I,shapeFlag:Z,patchFlag:q,dirs:Q}=y;if(M!=null&&bo(M,null,k,y,!0),Z&256){b.ctx.deactivate(y);return}const te=Z&1&&Q,oe=!In(y);let ye;if(oe&&(ye=U&&U.onVnodeBeforeUnmount)&&qe(ye,b,y),Z&6)Ni(y.component,k,A);else{if(Z&128){y.suspense.unmount(k,A);return}te&&yt(y,null,b,"beforeUnmount"),Z&64?y.type.remove(y,b,k,R,j,A):I&&(L!==Ce||q>0&&q&64)?Be(I,b,k,!1,!0):(L===Ce&&q&384||!R&&Z&16)&&Be(F,b,k),A&&Jn(y)}(oe&&(ye=U&&U.onVnodeUnmounted)||te)&&Me(()=>{ye&&qe(ye,b,y),te&&yt(y,null,b,"unmounted")},k)},Jn=y=>{const{type:b,el:k,anchor:A,transition:R}=y;if(b===Ce){Zn(k,A);return}if(b===Dn){_(y);return}const L=()=>{i(k),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:U,delayLeave:M}=R,F=()=>U(k,L);M?M(y.el,L,F):F()}else L()},Zn=(y,b)=>{let k;for(;y!==b;)k=p(y),i(y),y=k;i(b)},Ni=(y,b,k)=>{const{bum:A,scope:R,update:L,subTree:U,um:M}=y;A&&lr(A),R.stop(),L&&(L.active=!1,Ye(U,y,b,k)),M&&Me(M,b),Me(()=>{y.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Be=(y,b,k,A=!1,R=!1,L=0)=>{for(let U=L;U<y.length;U++)Ye(y[U],b,k,A,R)},O=y=>y.shapeFlag&6?O(y.component.subTree):y.shapeFlag&128?y.suspense.next():p(y.anchor||y.el),Y=(y,b,k)=>{y==null?b._vnode&&Ye(b._vnode,null,null,!0):w(b._vnode||null,y,b,null,null,null,k),yc(),vo(),b._vnode=y},j={p:w,um:Ye,m:gt,r:Jn,mt:B,mc:C,pc:ue,pbc:D,n:O,o:e};let J,de;return t&&([J,de]=t(j)),{render:Y,hydrate:J,createApp:Hg(Y,J)}}function Sn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function il(e,t,n=!1){const r=e.children,i=t.children;if(W(r)&&W(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=sn(i[o]),a.el=s.el),n||il(s,a)),a.type===jn&&(a.el=s.el)}}function Xg(e){const t=e.slice(),n=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=t[s];return n}const Gg=e=>e.__isTeleport,jr=e=>e&&(e.disabled||e.disabled===""),Tc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zs=(e,t)=>{const n=e&&e.to;return xe(n)?t?t(n):null:n},Jg={__isTeleport:!0,process(e,t,n,r,i,o,s,a,l,c){const{mc:u,pc:f,pbc:p,o:{insert:h,querySelector:v,createText:w,createComment:S}}=c,g=jr(t.props);let{shapeFlag:m,children:x,dynamicChildren:_}=t;if(e==null){const E=t.el=w(""),N=t.anchor=w("");h(E,n,r),h(N,n,r);const $=t.target=Zs(t.props,v),C=t.targetAnchor=w("");$&&(h(C,$),s=s||Tc($));const T=(D,H)=>{m&16&&u(x,D,H,i,o,s,a,l)};g?T(n,N):$&&T($,C)}else{t.el=e.el;const E=t.anchor=e.anchor,N=t.target=e.target,$=t.targetAnchor=e.targetAnchor,C=jr(e.props),T=C?n:N,D=C?E:$;if(s=s||Tc(N),_?(p(e.dynamicChildren,_,T,i,o,s,a),il(e,t,!0)):l||f(e,t,T,D,i,o,s,a,!1),g)C||Ui(t,n,E,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const H=t.target=Zs(t.props,v);H&&Ui(t,H,null,c,0)}else C&&Ui(t,N,$,c,1)}Ed(t)},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:p}=e;if(f&&o(u),(s||!jr(p))&&(o(c),a&16))for(let h=0;h<l.length;h++){const v=l[h];i(v,t,n,!0,!!v.dynamicChildren)}},move:Ui,hydrate:Zg};function Ui(e,t,n,{o:{insert:r},m:i},o=2){o===0&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=e,f=o===2;if(f&&r(s,t,n),(!f||jr(u))&&l&16)for(let p=0;p<c.length;p++)i(c[p],t,n,2);f&&r(a,t,n)}function Zg(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=t.target=Zs(t.props,l);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(jr(t.props))t.anchor=c(s(e),t,a(e),n,r,i,o),t.targetAnchor=f;else{t.anchor=s(e);let p=f;for(;p;)if(p=s(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,u._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(f,t,u,n,r,i,o)}Ed(t)}return t.anchor&&s(t.anchor)}const Qg=Jg;function Ed(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ce=Symbol.for("v-fgt"),jn=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Hr=[];let Ke=null;function fe(e=!1){Hr.push(Ke=e?null:[])}function Cd(){Hr.pop(),Ke=Hr[Hr.length-1]||null}let Hn=1;function Qs(e){Hn+=e}function Ad(e){return e.dynamicChildren=Hn>0?Ke||sr:null,Cd(),Hn>0&&Ke&&Ke.push(e),e}function ke(e,t,n,r,i,o){return Ad(Le(e,t,n,r,i,o,!0))}function Yt(e,t,n,r,i){return Ad(pe(e,t,n,r,i,!0))}function vn(e){return e?e.__v_isVNode===!0:!1}function ct(e,t){return e.type===t.type&&e.key===t.key}function ev(e){}const Ko="__vInternal",Pd=({key:e})=>e??null,io=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Se(e)||ee(e)?{i:De,r:e,k:t,f:!!n}:e:null);function Le(e,t=null,n=null,r=0,i=null,o=e===Ce?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Pd(t),ref:t&&io(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:De};return a?(al(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Hn>0&&!s&&Ke&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ke.push(l),l}const pe=tv;function tv(e,t=null,n=null,r=0,i=null,o=!1){if((!e||e===cd)&&(e=He),vn(e)){const a=kt(e,t,!0);return n&&al(a,n),Hn>0&&!o&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(cv(e)&&(e=e.__vccOpts),t){t=ol(t);let{class:a,style:l}=t;a&&!xe(a)&&(t.class=Et(a)),ve(l)&&(Va(l)&&!W(l)&&(l=be({},l)),t.style=ln(l))}const s=xe(e)?1:qf(e)?128:Gg(e)?64:ve(e)?4:ee(e)?2:0;return Le(e,t,n,r,i,s,o,!0)}function ol(e){return e?Va(e)||Ko in e?be({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=e,a=t?ll(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Pd(a),ref:t&&t.ref?n&&i?W(i)?i.concat(io(t)):[i,io(t)]:io(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function sl(e=" ",t=0){return pe(jn,null,e,t)}function nv(e,t){const n=pe(Dn,null,e);return n.staticCount=t,n}function It(e="",t=!1){return t?(fe(),Yt(He,null,e)):pe(He,null,e)}function Qe(e){return e==null||typeof e=="boolean"?pe(He):W(e)?pe(Ce,null,e.slice()):typeof e=="object"?sn(e):pe(jn,null,String(e))}function sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function al(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),al(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ko in t)?t._ctx=De:i===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[sl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Et([t.class,r.class]));else if(i==="style")t.style=ln([t.style,r.style]);else if(_i(i)){const o=t[i],s=r[i];s&&o!==s&&!(W(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=r[i])}return t}function qe(e,t,n,r=null){et(e,t,7,[n,r])}const rv=hd();let iv=0;function Od(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||rv,o={uid:iv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yd(r,i),emitsOptions:Uf(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Jh.bind(null,o),e.ce&&e.ce(o),o}let Pe=null;const Wt=()=>Pe||De;let cl,er,Rc="__VUE_INSTANCE_SETTERS__";(er=Hs()[Rc])||(er=Hs()[Rc]=[]),er.push(e=>Pe=e),cl=e=>{er.length>1?er.forEach(t=>t(e)):er[0](e)};const yn=e=>{cl(e),e.scope.on()},un=()=>{Pe&&Pe.scope.off(),cl(null)};function Td(e){return e.vnode.shapeFlag&4}let hr=!1;function Rd(e,t=!1){hr=t;const{props:n,children:r}=e.vnode,i=Td(e);Ug(e,n,i,t),Wg(e,r);const o=i?ov(e,t):void 0;return hr=!1,o}function ov(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Si(new Proxy(e.ctx,Ks));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Nd(e):null;yn(e),xr();const o=Lt(r,e,0,[e.props,i]);if(kr(),un(),Ia(o)){if(o.then(un,un),t)return o.then(s=>{ea(e,s,t)}).catch(s=>{qn(s,e,0)});e.asyncDep=o}else ea(e,o,t)}else $d(e,t)}function ea(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=qa(t)),$d(e,n)}let wo,ta;function sv(e){wo=e,ta=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,xg))}}const av=()=>!wo;function $d(e,t,n){const r=e.type;if(!e.render){if(!t&&wo&&!r.render){const i=r.template||nl(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=be(be({isCustomElement:o,delimiters:a},s),l);r.render=wo(i,c)}}e.render=r.render||pt,ta&&ta(e)}yn(e),xr(),Dg(e),kr(),un()}function lv(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ge(e,"get","$attrs"),t[n]}}))}function Nd(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return lv(e)},slots:e.slots,emit:e.emit,expose:t}}function Xo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qa(Si(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Br)return Br[n](e)},has(t,n){return n in t||n in Br}}))}function na(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function cv(e){return ee(e)&&"__vccOpts"in e}const Ne=(e,t)=>Vh(e,t,hr);function Er(e,t,n){const r=arguments.length;return r===2?ve(t)&&!W(t)?vn(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vn(n)&&(n=[n]),pe(e,t,n))}const Ld=Symbol.for("v-scx"),Id=()=>je(Ld);function uv(){}function fv(e,t,n,r){const i=n[r];if(i&&Dd(i,e))return i;const o=t();return o.memo=e.slice(),n[r]=o}function Dd(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(pr(n[r],t[r]))return!1;return Hn>0&&Ke&&Ke.push(e),!0}const zd="3.3.4",dv={createComponentInstance:Od,setupComponent:Rd,renderComponentRoot:ro,setCurrentRenderingInstance:ii,isVNode:vn,normalizeVNode:Qe},pv=dv,mv=null,hv=null,gv="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,$c=On&&On.createElement("template"),vv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?On.createElementNS(gv,e):On.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>On.createTextNode(e),createComment:e=>On.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>On.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{$c.innerHTML=r?`<svg>${e}</svg>`:e;const a=$c.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yv(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bv(e,t,n){const r=e.style,i=xe(n);if(n&&!i){if(t&&!xe(t))for(const o in t)n[o]==null&&ra(r,o,"");for(const o in n)ra(r,o,n[o])}else{const o=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const Nc=/\s*!important$/;function ra(e,t,n){if(W(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wv(e,t);Nc.test(n)?e.setProperty(rt(r),n.replace(Nc,""),"important"):e[r]=n}}const Lc=["Webkit","Moz","ms"],ks={};function wv(e,t){const n=ks[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return ks[t]=r;r=xi(r);for(let i=0;i<Lc.length;i++){const o=Lc[i]+r;if(o in e)return ks[t]=o}return t}const Ic="http://www.w3.org/1999/xlink";function _v(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ic,t.slice(6,t.length)):e.setAttributeNS(Ic,t,n);else{const o=th(t);n==null||o&&!wf(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function xv(e,t,n,r,i,o,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=wf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Rt(e,t,n,r){e.addEventListener(t,n,r)}function kv(e,t,n,r){e.removeEventListener(t,n,r)}function Sv(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[a,l]=Ev(t);if(r){const c=o[t]=Pv(r,i);Rt(e,a,c,l)}else s&&(kv(e,a,s,l),o[t]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Ev(e){let t;if(Dc.test(e)){t={};let r;for(;r=e.match(Dc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}let Ss=0;const Cv=Promise.resolve(),Av=()=>Ss||(Cv.then(()=>Ss=0),Ss=Date.now());function Pv(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;et(Ov(r,n.value),t,5,[r])};return n.value=e,n.attached=Av(),n}function Ov(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const zc=/^on[a-z]/,Tv=(e,t,n,r,i=!1,o,s,a,l)=>{t==="class"?yv(e,r,i):t==="style"?bv(e,n,r):_i(t)?Na(t)||Sv(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rv(e,t,r,i))?xv(e,t,r,o,s,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_v(e,t,r,i))};function Rv(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&zc.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||zc.test(t)&&xe(n)?!1:t in e}function Md(e,t){const n=Re(e);class r extends Go{constructor(o){super(n,o,t)}}return r.def=n,r}const $v=e=>Md(e,Qd),Nv=typeof HTMLElement<"u"?HTMLElement:class{};class Go extends Nv{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Sr(()=>{this._connected||(sa(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const t=(r,i=!1)=>{const{props:o,styles:s}=r;let a;if(o&&!W(o))for(const l in o){const c=o[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ho(this._props[l])),(a||(a=Object.create(null)))[Xe(l)]=!0)}this._numberProps=a,i&&this._resolveProps(r),this._applyStyles(s),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=W(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(Xe))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(o){this._setProp(i,o)}})}_setAttr(t){let n=this.getAttribute(t);const r=Xe(t);this._numberProps&&this._numberProps[r]&&(n=ho(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,i=!0){n!==this._props[t]&&(this._props[t]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(rt(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(rt(t),n+""):n||this.removeAttribute(rt(t))))}_update(){sa(this._createVNode(),this.shadowRoot)}_createVNode(){const t=pe(this._def,be({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(o,s)=>{this.dispatchEvent(new CustomEvent(o,{detail:s}))};n.emit=(o,...s)=>{r(o,s),rt(o)!==o&&r(rt(o),s)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Go){n.parent=i._instance,n.provides=i._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function Lv(e="$style"){{const t=Wt();if(!t)return ge;const n=t.type.__cssModules;if(!n)return ge;const r=n[e];return r||ge}}function Iv(e){const t=Wt();if(!t)return;const n=t.ut=(i=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o=>oa(o,i))},r=()=>{const i=e(t.proxy);ia(t.subTree,i),n(i)};Xf(r),Kn(()=>{const i=new MutationObserver(r);i.observe(t.subTree.el.parentNode,{childList:!0}),qo(()=>i.disconnect())})}function ia(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ia(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)oa(e.el,t);else if(e.type===Ce)e.children.forEach(n=>ia(n,t));else if(e.type===Dn){let{el:n,anchor:r}=e;for(;n&&(oa(n,t),n!==r);)n=n.nextSibling}}function oa(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const Jt="transition",Or="animation",ul=(e,{slots:t})=>Er(Zf,Fd(e),t);ul.displayName="Transition";const Bd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dv=ul.props=be({},Qa,Bd),En=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Mc=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function Fd(e){const t={};for(const z in e)z in Bd||(t[z]=e[z]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,v=zv(i),w=v&&v[0],S=v&&v[1],{onBeforeEnter:g,onEnter:m,onEnterCancelled:x,onLeave:_,onLeaveCancelled:E,onBeforeAppear:N=g,onAppear:$=m,onAppearCancelled:C=x}=t,T=(z,X,B)=>{tn(z,X?u:a),tn(z,X?c:s),B&&B()},D=(z,X)=>{z._isLeaving=!1,tn(z,f),tn(z,h),tn(z,p),X&&X()},H=z=>(X,B)=>{const ie=z?$:m,G=()=>T(X,z,B);En(ie,[X,G]),Bc(()=>{tn(X,z?l:o),Ot(X,z?u:a),Mc(ie)||Fc(X,r,w,G)})};return be(t,{onBeforeEnter(z){En(g,[z]),Ot(z,o),Ot(z,s)},onBeforeAppear(z){En(N,[z]),Ot(z,l),Ot(z,c)},onEnter:H(!1),onAppear:H(!0),onLeave(z,X){z._isLeaving=!0;const B=()=>D(z,X);Ot(z,f),Hd(),Ot(z,p),Bc(()=>{z._isLeaving&&(tn(z,f),Ot(z,h),Mc(_)||Fc(z,r,S,B))}),En(_,[z,B])},onEnterCancelled(z){T(z,!1),En(x,[z])},onAppearCancelled(z){T(z,!0),En(C,[z])},onLeaveCancelled(z){D(z),En(E,[z])}})}function zv(e){if(e==null)return null;if(ve(e))return[Es(e.enter),Es(e.leave)];{const t=Es(e);return[t,t]}}function Es(e){return ho(e)}function Ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function tn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Bc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Mv=0;function Fc(e,t,n,r){const i=e._endId=++Mv,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=jd(e,t);if(!s)return r();const c=s+"end";let u=0;const f=()=>{e.removeEventListener(c,p),o()},p=h=>{h.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),e.addEventListener(c,p)}function jd(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),i=r(`${Jt}Delay`),o=r(`${Jt}Duration`),s=jc(i,o),a=r(`${Or}Delay`),l=r(`${Or}Duration`),c=jc(a,l);let u=null,f=0,p=0;t===Jt?s>0&&(u=Jt,f=s,p=o.length):t===Or?c>0&&(u=Or,f=c,p=l.length):(f=Math.max(s,c),u=f>0?s>c?Jt:Or:null,p=u?u===Jt?o.length:l.length:0);const h=u===Jt&&/\b(transform|all)(,|$)/.test(r(`${Jt}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:h}}function jc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Hc(n)+Hc(e[r])))}function Hc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Hd(){return document.body.offsetHeight}const Ud=new WeakMap,Vd=new WeakMap,Yd={name:"TransitionGroup",props:be({},Dv,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Wt(),r=Za();let i,o;return Yo(()=>{if(!i.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!Vv(i[0].el,n.vnode.el,s))return;i.forEach(jv),i.forEach(Hv);const a=i.filter(Uv);Hd(),a.forEach(l=>{const c=l.el,u=c.style;Ot(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,tn(c,s))};c.addEventListener("transitionend",f)})}),()=>{const s=se(e),a=Fd(s);let l=s.tag||Ce;i=o,o=t.default?Uo(t.default()):[];for(let c=0;c<o.length;c++){const u=o[c];u.key!=null&&Fn(u,mr(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Fn(u,mr(u,a,r,n)),Ud.set(u,u.el.getBoundingClientRect())}return pe(l,null,o)}}},Bv=e=>delete e.mode;Yd.props;const Fv=Yd;function jv(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Hv(e){Vd.set(e,e.el.getBoundingClientRect())}function Uv(e){const t=Ud.get(e),n=Vd.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${r}px,${i}px)`,o.transitionDuration="0s",e}}function Vv(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=jd(r);return i.removeChild(r),o}const bn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>lr(t,n):t};function Yv(e){e.target.composing=!0}function Uc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _o={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=bn(i);const o=r||i.props&&i.props.type==="number";Rt(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=mo(a)),e._assign(a)}),n&&Rt(e,"change",()=>{e.value=e.value.trim()}),t||(Rt(e,"compositionstart",Yv),Rt(e,"compositionend",Uc),Rt(e,"change",Uc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},o){if(e._assign=bn(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&mo(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},fl={deep:!0,created(e,t,n){e._assign=bn(n),Rt(e,"change",()=>{const r=e._modelValue,i=gr(e),o=e.checked,s=e._assign;if(W(r)){const a=Lo(r,i),l=a!==-1;if(o&&!l)s(r.concat(i));else if(!o&&l){const c=[...r];c.splice(a,1),s(c)}}else if(Wn(r)){const a=new Set(r);o?a.add(i):a.delete(i),s(a)}else s(qd(e,o))})},mounted:Vc,beforeUpdate(e,t,n){e._assign=bn(n),Vc(e,t,n)}};function Vc(e,{value:t,oldValue:n},r){e._modelValue=t,W(t)?e.checked=Lo(t,r.props.value)>-1:Wn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=pn(t,qd(e,!0)))}const dl={created(e,{value:t},n){e.checked=pn(t,n.props.value),e._assign=bn(n),Rt(e,"change",()=>{e._assign(gr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=bn(r),t!==n&&(e.checked=pn(t,r.props.value))}},Wd={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=Wn(t);Rt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,s=>s.selected).map(s=>n?mo(gr(s)):gr(s));e._assign(e.multiple?i?new Set(o):o:o[0])}),e._assign=bn(r)},mounted(e,{value:t}){Yc(e,t)},beforeUpdate(e,t,n){e._assign=bn(n)},updated(e,{value:t}){Yc(e,t)}};function Yc(e,t){const n=e.multiple;if(!(n&&!W(t)&&!Wn(t))){for(let r=0,i=e.options.length;r<i;r++){const o=e.options[r],s=gr(o);if(n)W(t)?o.selected=Lo(t,s)>-1:o.selected=t.has(s);else if(pn(gr(o),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function gr(e){return"_value"in e?e._value:e.value}function qd(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Kd={created(e,t,n){Vi(e,t,n,null,"created")},mounted(e,t,n){Vi(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Vi(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Vi(e,t,n,r,"updated")}};function Xd(e,t){switch(e){case"SELECT":return Wd;case"TEXTAREA":return _o;default:switch(t){case"checkbox":return fl;case"radio":return dl;default:return _o}}}function Vi(e,t,n,r,i){const s=Xd(e.tagName,n.props&&n.props.type)[i];s&&s(e,t,n,r)}function Wv(){_o.getSSRProps=({value:e})=>({value:e}),dl.getSSRProps=({value:e},t)=>{if(t.props&&pn(t.props.value,e))return{checked:!0}},fl.getSSRProps=({value:e},t)=>{if(W(e)){if(t.props&&Lo(e,t.props.value)>-1)return{checked:!0}}else if(Wn(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Kd.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=Xd(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const qv=["ctrl","shift","alt","meta"],Kv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qv.some(n=>e[`${n}Key`]&&!t.includes(n))},Xv=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const o=Kv[t[i]];if(o&&o(n,t))return}return e(n,...r)},Gv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pl=(e,t)=>n=>{if(!("key"in n))return;const r=rt(n.key);if(t.some(i=>i===r||Gv[i]===r))return e(n)},ml={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Tr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Tr(e,!0),r.enter(e)):r.leave(e,()=>{Tr(e,!1)}):Tr(e,t))},beforeUnmount(e,{value:t}){Tr(e,t)}};function Tr(e,t){e.style.display=t?e._vod:"none"}function Jv(){ml.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Gd=be({patchProp:Tv},vv);let Ur,Wc=!1;function Jd(){return Ur||(Ur=xd(Gd))}function Zd(){return Ur=Wc?Ur:kd(Gd),Wc=!0,Ur}const sa=(...e)=>{Jd().render(...e)},Qd=(...e)=>{Zd().hydrate(...e)},hl=(...e)=>{const t=Jd().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ep(r);if(!i)return;const o=t._component;!ee(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t},Zv=(...e)=>{const t=Zd().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ep(r);if(i)return n(i,!0,i instanceof SVGElement)},t};function ep(e){return xe(e)?document.querySelector(e):e}let qc=!1;const Qv=()=>{qc||(qc=!0,Wv(),Jv())},ey=()=>{},ty=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Zf,BaseTransitionPropsValidators:Qa,Comment:He,EffectScope:za,Fragment:Ce,KeepAlive:hg,ReactiveEffect:ki,Static:Dn,Suspense:rg,Teleport:Qg,Text:jn,Transition:ul,TransitionGroup:Fv,VueElement:Go,assertNumber:Wh,callWithAsyncErrorHandling:et,callWithErrorHandling:Lt,camelize:Xe,capitalize:xi,cloneVNode:kt,compatUtils:hv,compile:ey,computed:Ne,createApp:hl,createBlock:Yt,createCommentVNode:It,createElementBlock:ke,createElementVNode:Le,createHydrationRenderer:kd,createPropsRestProxy:Lg,createRenderer:xd,createSSRApp:Zv,createSlots:wg,createStaticVNode:nv,createTextVNode:sl,createVNode:pe,customRef:Bh,defineAsyncComponent:pg,defineComponent:Re,defineCustomElement:Md,defineEmits:Sg,defineExpose:Eg,defineModel:Pg,defineOptions:Cg,defineProps:kg,defineSSRCustomElement:$v,defineSlots:Ag,get devtools(){return nr},effect:oh,effectScope:Ma,getCurrentInstance:Wt,getCurrentScope:Ba,getTransitionRawChildren:Uo,guardReactiveProps:ol,h:Er,handleError:qn,hasInjectionContext:gd,hydrate:Qd,initCustomFormatter:uv,initDirectivesForSSR:Qv,inject:je,isMemoSame:Dd,isProxy:Va,isReactive:Nt,isReadonly:Mn,isRef:Se,isRuntimeOnly:av,isShallow:ei,isVNode:vn,markRaw:Si,mergeDefaults:$g,mergeModels:Ng,mergeProps:ll,nextTick:Sr,normalizeClass:Et,normalizeProps:bf,normalizeStyle:ln,onActivated:ed,onBeforeMount:rd,onBeforeUnmount:Wo,onBeforeUpdate:id,onDeactivated:td,onErrorCaptured:ld,onMounted:Kn,onRenderTracked:ad,onRenderTriggered:sd,onScopeDispose:kf,onServerPrefetch:od,onUnmounted:qo,onUpdated:Yo,openBlock:fe,popScopeId:Yf,provide:Fr,proxyRefs:qa,pushScopeId:Vf,queuePostFlushCb:Xa,reactive:Ht,readonly:Ua,ref:Oe,registerRuntimeCompiler:sv,render:sa,renderList:ud,renderSlot:gn,resolveComponent:hn,resolveDirective:bg,resolveDynamicComponent:yg,resolveFilter:mv,resolveTransitionHooks:mr,setBlockTracking:Qs,setDevtoolsHook:Hf,setTransitionHooks:Fn,shallowReactive:Ha,shallowReadonly:Nh,shallowRef:Df,ssrContextKey:Ld,ssrUtils:pv,stop:sh,toDisplayString:Nn,toHandlerKey:Mr,toHandlers:_g,toRaw:se,toRef:Hh,toRefs:Ut,toValue:Dh,transformVNodeArgs:ev,triggerRef:Ih,unref:ne,useAttrs:Tg,useCssModule:Lv,useCssVars:Iv,useModel:Rg,useSSRContext:Id,useSlots:dd,useTransitionState:Za,vModelCheckbox:fl,vModelDynamic:Kd,vModelRadio:dl,vModelSelect:Wd,vModelText:_o,vShow:ml,version:zd,warn:Yh,watch:ot,watchEffect:cg,watchPostEffect:Xf,watchSyncEffect:ug,withAsyncContext:Ig,withCtx:Bn,withDefaults:Og,withDirectives:Jf,withKeys:pl,withMemo:fv,withModifiers:Xv,withScopeId:Wf},Symbol.toStringTag,{value:"Module"}));var ny=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let tp;const Jo=e=>tp=e,np=Symbol();function aa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Vr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Vr||(Vr={}));function ry(){const e=Ma(!0),t=e.run(()=>Oe({}));let n=[],r=[];const i=Si({install(o){Jo(i),i._a=o,o.provide(np,i),o.config.globalProperties.$pinia=i,r.forEach(s=>n.push(s)),r=[]},use(o){return!this._a&&!ny?r.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const rp=()=>{};function Kc(e,t,n,r=rp){e.push(t);const i=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),r())};return!n&&Ba()&&kf(i),i}function tr(e,...t){e.slice().forEach(n=>{n(...t)})}const iy=e=>e();function la(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];aa(i)&&aa(r)&&e.hasOwnProperty(n)&&!Se(r)&&!Nt(r)?e[n]=la(i,r):e[n]=r}return e}const oy=Symbol();function sy(e){return!aa(e)||!e.hasOwnProperty(oy)}const{assign:nn}=Object;function ay(e){return!!(Se(e)&&e.effect)}function ly(e,t,n,r){const{state:i,actions:o,getters:s}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=i?i():{});const u=Ut(n.state.value[e]);return nn(u,o,Object.keys(s||{}).reduce((f,p)=>(f[p]=Si(Ne(()=>{Jo(n);const h=n._s.get(e);return s[p].call(h,h)})),f),{}))}return l=ip(e,c,t,n,r,!0),l}function ip(e,t,n={},r,i,o){let s;const a=nn({actions:{}},n),l={deep:!0};let c,u,f=[],p=[],h;const v=r.state.value[e];!o&&!v&&(r.state.value[e]={}),Oe({});let w;function S(C){let T;c=u=!1,typeof C=="function"?(C(r.state.value[e]),T={type:Vr.patchFunction,storeId:e,events:h}):(la(r.state.value[e],C),T={type:Vr.patchObject,payload:C,storeId:e,events:h});const D=w=Symbol();Sr().then(()=>{w===D&&(c=!0)}),u=!0,tr(f,T,r.state.value[e])}const g=o?function(){const{state:T}=n,D=T?T():{};this.$patch(H=>{nn(H,D)})}:rp;function m(){s.stop(),f=[],p=[],r._s.delete(e)}function x(C,T){return function(){Jo(r);const D=Array.from(arguments),H=[],z=[];function X(G){H.push(G)}function B(G){z.push(G)}tr(p,{args:D,name:C,store:E,after:X,onError:B});let ie;try{ie=T.apply(this&&this.$id===e?this:E,D)}catch(G){throw tr(z,G),G}return ie instanceof Promise?ie.then(G=>(tr(H,G),G)).catch(G=>(tr(z,G),Promise.reject(G))):(tr(H,ie),ie)}}const _={_p:r,$id:e,$onAction:Kc.bind(null,p),$patch:S,$reset:g,$subscribe(C,T={}){const D=Kc(f,C,T.detached,()=>H()),H=s.run(()=>ot(()=>r.state.value[e],z=>{(T.flush==="sync"?u:c)&&C({storeId:e,type:Vr.direct,events:h},z)},nn({},l,T)));return D},$dispose:m},E=Ht(_);r._s.set(e,E);const N=r._a&&r._a.runWithContext||iy,$=r._e.run(()=>(s=Ma(),N(()=>s.run(t))));for(const C in $){const T=$[C];if(Se(T)&&!ay(T)||Nt(T))o||(v&&sy(T)&&(Se(T)?T.value=v[C]:la(T,v[C])),r.state.value[e][C]=T);else if(typeof T=="function"){const D=x(C,T);$[C]=D,a.actions[C]=T}}return nn(E,$),nn(se(E),$),Object.defineProperty(E,"$state",{get:()=>r.state.value[e],set:C=>{S(T=>{nn(T,C)})}}),r._p.forEach(C=>{nn(E,s.run(()=>C({store:E,app:r._a,pinia:r,options:a})))}),v&&o&&n.hydrate&&n.hydrate(E.$state,v),c=!0,u=!0,E}function cy(e,t,n){let r,i;const o=typeof t=="function";typeof e=="string"?(r=e,i=o?n:t):(i=e,r=e.id);function s(a,l){const c=gd();return a=a||(c?je(np,null):null),a&&Jo(a),a=tp,a._s.has(r)||(o?ip(r,t,i,a):ly(r,i,a)),a._s.get(r)}return s.$id=r,s}const uy="modulepreload",fy=function(e){return"http://222.107.124.161:64000/"+e},Xc={},Yi=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=fy(o),o in Xc)return;Xc[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":uy,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof window<"u";function dy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const me=Object.assign;function Cs(e,t){const n={};for(const r in t){const i=t[r];n[r]=ht(i)?i.map(e):e(i)}return n}const Yr=()=>{},ht=Array.isArray,py=/\/$/,my=e=>e.replace(py,"");function As(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=yy(r??t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function hy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Gc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gy(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vr(t.matched[r],n.matched[i])&&op(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function op(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vy(e[n],t[n]))return!1;return!0}function vy(e,t){return ht(e)?Jc(e,t):ht(t)?Jc(t,e):e===t}function Jc(e,t){return ht(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function yy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var li;(function(e){e.pop="pop",e.push="push"})(li||(li={}));var Wr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Wr||(Wr={}));function by(e){if(!e)if(rr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),my(e)}const wy=/^[^#]+#/;function _y(e,t){return e.replace(wy,"#")+t}function xy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Zo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ky(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=xy(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Zc(e,t){return(history.state?history.state.position-t:-1)+e}const ca=new Map;function Sy(e,t){ca.set(e,t)}function Ey(e){const t=ca.get(e);return ca.delete(e),t}let Cy=()=>location.protocol+"//"+location.host;function sp(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Gc(l,"")}return Gc(n,e)+r+i}function Ay(e,t,n,r){let i=[],o=[],s=null;const a=({state:p})=>{const h=sp(e,location),v=n.value,w=t.value;let S=0;if(p){if(n.value=h,t.value=p,s&&s===v){s=null;return}S=w?p.position-w.position:0}else r(h);i.forEach(g=>{g(n.value,v,{delta:S,type:li.pop,direction:S?S>0?Wr.forward:Wr.back:Wr.unknown})})};function l(){s=n.value}function c(p){i.push(p);const h=()=>{const v=i.indexOf(p);v>-1&&i.splice(v,1)};return o.push(h),h}function u(){const{history:p}=window;p.state&&p.replaceState(me({},p.state,{scroll:Zo()}),"")}function f(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Qc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Zo():null}}function Py(e){const{history:t,location:n}=window,r={value:sp(e,n)},i={value:t.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Cy()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](p)}}function s(l,c){const u=me({},t.state,Qc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=me({},i.value,t.state,{forward:l,scroll:Zo()});o(u.current,u,!0);const f=me({},Qc(r.value,l,null),{position:u.position+1},c);o(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function Oy(e){e=by(e);const t=Py(e),n=Ay(e,t.state,t.location,t.replace);function r(o,s=!0){s||n.pauseListeners(),history.go(o)}const i=me({location:"",base:e,go:r,createHref:_y.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ty(e){return typeof e=="string"||e&&typeof e=="object"}function ap(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lp=Symbol("");var eu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(eu||(eu={}));function yr(e,t){return me(new Error,{type:e,[lp]:!0},t)}function Pt(e,t){return e instanceof Error&&lp in e&&(t==null||!!(e.type&t))}const tu="[^/]+?",Ry={sensitive:!1,strict:!1,start:!0,end:!0},$y=/[.+*?^${}()[\]/\\]/g;function Ny(e,t){const n=me({},Ry,t),r=[];let i=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const p=c[f];let h=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace($y,"\\$&"),h+=40;else if(p.type===1){const{value:v,repeatable:w,optional:S,regexp:g}=p;o.push({name:v,repeatable:w,optional:S});const m=g||tu;if(m!==tu){h+=10;try{new RegExp(`(${m})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${m}): `+_.message)}}let x=w?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;f||(x=S&&c.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),i+=x,h+=20,S&&(h+=-8),w&&(h+=-20),m===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(s),f={};if(!u)return null;for(let p=1;p<u.length;p++){const h=u[p]||"",v=o[p-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of p)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:w,optional:S}=h,g=v in c?c[v]:"";if(ht(g)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const m=ht(g)?g.join("/"):g;if(!m)if(S)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=m}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function Ly(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Iy(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const o=Ly(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(nu(r))return 1;if(nu(i))return-1}return i.length-r.length}function nu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dy={type:0,value:""},zy=/[a-zA-Z0-9_]/;function My(e){if(!e)return[[]];if(e==="/")return[[Dy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function f(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),s()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:zy.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),s(),i}function By(e,t,n){const r=Ny(My(e.path),n),i=me(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Fy(e,t){const n=[],r=new Map;t=ou({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function o(u,f,p){const h=!p,v=jy(u);v.aliasOf=p&&p.record;const w=ou(t,u),S=[v];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of x)S.push(me({},v,{components:p?p.record.components:v.components,path:_,aliasOf:p?p.record:v}))}let g,m;for(const x of S){const{path:_}=x;if(f&&_[0]!=="/"){const E=f.record.path,N=E[E.length-1]==="/"?"":"/";x.path=f.record.path+(_&&N+_)}if(g=By(x,f,w),p?p.alias.push(g):(m=m||g,m!==g&&m.alias.push(g),h&&u.name&&!iu(g)&&s(u.name)),v.children){const E=v.children;for(let N=0;N<E.length;N++)o(E[N],g,p&&p.children[N])}p=p||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&l(g)}return m?()=>{s(m)}:Yr}function s(u){if(ap(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Iy(u,n[f])>=0&&(u.record.path!==n[f].record.path||!cp(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!iu(u)&&r.set(u.record.name,u)}function c(u,f){let p,h={},v,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw yr(1,{location:u});w=p.record.name,h=me(ru(f.params,p.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&ru(u.params,p.keys.map(m=>m.name))),v=p.stringify(h)}else if("path"in u)v=u.path,p=n.find(m=>m.re.test(v)),p&&(h=p.parse(v),w=p.record.name);else{if(p=f.name?r.get(f.name):n.find(m=>m.re.test(f.path)),!p)throw yr(1,{location:u,currentLocation:f});w=p.record.name,h=me({},f.params,u.params),v=p.stringify(h)}const S=[];let g=p;for(;g;)S.unshift(g.record),g=g.parent;return{name:w,path:v,params:h,matched:S,meta:Uy(S)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ru(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function jy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function iu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Uy(e){return e.reduce((t,n)=>me(t,n.meta),{})}function ou(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function cp(e,t){return t.children.some(n=>n===e||cp(e,n))}const up=/#/g,Vy=/&/g,Yy=/\//g,Wy=/=/g,qy=/\?/g,fp=/\+/g,Ky=/%5B/g,Xy=/%5D/g,dp=/%5E/g,Gy=/%60/g,pp=/%7B/g,Jy=/%7C/g,mp=/%7D/g,Zy=/%20/g;function gl(e){return encodeURI(""+e).replace(Jy,"|").replace(Ky,"[").replace(Xy,"]")}function Qy(e){return gl(e).replace(pp,"{").replace(mp,"}").replace(dp,"^")}function ua(e){return gl(e).replace(fp,"%2B").replace(Zy,"+").replace(up,"%23").replace(Vy,"%26").replace(Gy,"`").replace(pp,"{").replace(mp,"}").replace(dp,"^")}function e0(e){return ua(e).replace(Wy,"%3D")}function t0(e){return gl(e).replace(up,"%23").replace(qy,"%3F")}function n0(e){return e==null?"":t0(e).replace(Yy,"%2F")}function xo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function r0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(fp," "),s=o.indexOf("="),a=xo(s<0?o:o.slice(0,s)),l=s<0?null:xo(o.slice(s+1));if(a in t){let c=t[a];ht(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function su(e){let t="";for(let n in e){const r=e[n];if(n=e0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ht(r)?r.map(o=>o&&ua(o)):[r&&ua(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function i0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ht(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const o0=Symbol(""),au=Symbol(""),Qo=Symbol(""),vl=Symbol(""),fa=Symbol("");function Rr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function an(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const l=f=>{f===!1?a(yr(4,{from:n,to:t})):f instanceof Error?a(f):Ty(f)?a(yr(2,{from:t,to:f})):(o&&r.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),s())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ps(e,t,n,r){const i=[];for(const o of e)for(const s in o.components){let a=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(s0(a)){const c=(a.__vccOpts||a)[t];c&&i.push(an(c,n,r,o,s))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const u=dy(c)?c.default:c;o.components[s]=u;const p=(u.__vccOpts||u)[t];return p&&an(p,n,r,o,s)()}))}}return i}function s0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function lu(e){const t=je(Qo),n=je(vl),r=Ne(()=>t.resolve(ne(e.to))),i=Ne(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(vr.bind(null,u));if(p>-1)return p;const h=cu(l[c-2]);return c>1&&cu(u)===h&&f[f.length-1].path!==h?f.findIndex(vr.bind(null,l[c-2])):p}),o=Ne(()=>i.value>-1&&u0(n.params,r.value.params)),s=Ne(()=>i.value>-1&&i.value===n.matched.length-1&&op(n.params,r.value.params));function a(l={}){return c0(l)?t[ne(e.replace)?"replace":"push"](ne(e.to)).catch(Yr):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}const a0=Re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lu,setup(e,{slots:t}){const n=Ht(lu(e)),{options:r}=je(Qo),i=Ne(()=>({[uu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Er("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),l0=a0;function c0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function u0(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!ht(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function cu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uu=(e,t,n)=>e??t??n,f0=Re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(fa),i=Ne(()=>e.route||r.value),o=je(au,0),s=Ne(()=>{let c=ne(o);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ne(()=>i.value.matched[s.value]);Fr(au,Ne(()=>s.value+1)),Fr(o0,a),Fr(fa,i);const l=Oe();return ot(()=>[l.value,a.value,e.name],([c,u,f],[p,h,v])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!vr(u,h)||!p)&&(u.enterCallbacks[f]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return fu(n.default,{Component:p,route:c});const h=f.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,S=Er(p,me({},v,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return fu(n.default,{Component:S,route:c})||S}}});function fu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const d0=f0;function p0(e){const t=Fy(e.routes,e),n=e.parseQuery||r0,r=e.stringifyQuery||su,i=e.history,o=Rr(),s=Rr(),a=Rr(),l=Df(Zt);let c=Zt;rr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cs.bind(null,O=>""+O),f=Cs.bind(null,n0),p=Cs.bind(null,xo);function h(O,Y){let j,J;return ap(O)?(j=t.getRecordMatcher(O),J=Y):J=O,t.addRoute(J,j)}function v(O){const Y=t.getRecordMatcher(O);Y&&t.removeRoute(Y)}function w(){return t.getRoutes().map(O=>O.record)}function S(O){return!!t.getRecordMatcher(O)}function g(O,Y){if(Y=me({},Y||l.value),typeof O=="string"){const k=As(n,O,Y.path),A=t.resolve({path:k.path},Y),R=i.createHref(k.fullPath);return me(k,A,{params:p(A.params),hash:xo(k.hash),redirectedFrom:void 0,href:R})}let j;if("path"in O)j=me({},O,{path:As(n,O.path,Y.path).path});else{const k=me({},O.params);for(const A in k)k[A]==null&&delete k[A];j=me({},O,{params:f(k)}),Y.params=f(Y.params)}const J=t.resolve(j,Y),de=O.hash||"";J.params=u(p(J.params));const y=hy(r,me({},O,{hash:Qy(de),path:J.path})),b=i.createHref(y);return me({fullPath:y,hash:de,query:r===su?i0(O.query):O.query||{}},J,{redirectedFrom:void 0,href:b})}function m(O){return typeof O=="string"?As(n,O,l.value.path):me({},O)}function x(O,Y){if(c!==O)return yr(8,{from:Y,to:O})}function _(O){return $(O)}function E(O){return _(me(m(O),{replace:!0}))}function N(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:j}=Y;let J=typeof j=="function"?j(O):j;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=m(J):{path:J},J.params={}),me({query:O.query,hash:O.hash,params:"path"in J?{}:O.params},J)}}function $(O,Y){const j=c=g(O),J=l.value,de=O.state,y=O.force,b=O.replace===!0,k=N(j);if(k)return $(me(m(k),{state:typeof k=="object"?me({},de,k.state):de,force:y,replace:b}),Y||j);const A=j;A.redirectedFrom=Y;let R;return!y&&gy(r,J,j)&&(R=yr(16,{to:A,from:J}),gt(J,J,!0,!1)),(R?Promise.resolve(R):D(A,J)).catch(L=>Pt(L)?Pt(L,2)?L:Kt(L):ue(L,A,J)).then(L=>{if(L){if(Pt(L,2))return $(me({replace:b},m(L.to),{state:typeof L.to=="object"?me({},de,L.to.state):de,force:y}),Y||A)}else L=z(A,J,!0,b,de);return H(A,J,L),L})}function C(O,Y){const j=x(O,Y);return j?Promise.reject(j):Promise.resolve()}function T(O){const Y=Zn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function D(O,Y){let j;const[J,de,y]=m0(O,Y);j=Ps(J.reverse(),"beforeRouteLeave",O,Y);for(const k of J)k.leaveGuards.forEach(A=>{j.push(an(A,O,Y))});const b=C.bind(null,O,Y);return j.push(b),Be(j).then(()=>{j=[];for(const k of o.list())j.push(an(k,O,Y));return j.push(b),Be(j)}).then(()=>{j=Ps(de,"beforeRouteUpdate",O,Y);for(const k of de)k.updateGuards.forEach(A=>{j.push(an(A,O,Y))});return j.push(b),Be(j)}).then(()=>{j=[];for(const k of y)if(k.beforeEnter)if(ht(k.beforeEnter))for(const A of k.beforeEnter)j.push(an(A,O,Y));else j.push(an(k.beforeEnter,O,Y));return j.push(b),Be(j)}).then(()=>(O.matched.forEach(k=>k.enterCallbacks={}),j=Ps(y,"beforeRouteEnter",O,Y),j.push(b),Be(j))).then(()=>{j=[];for(const k of s.list())j.push(an(k,O,Y));return j.push(b),Be(j)}).catch(k=>Pt(k,8)?k:Promise.reject(k))}function H(O,Y,j){a.list().forEach(J=>T(()=>J(O,Y,j)))}function z(O,Y,j,J,de){const y=x(O,Y);if(y)return y;const b=Y===Zt,k=rr?history.state:{};j&&(J||b?i.replace(O.fullPath,me({scroll:b&&k&&k.scroll},de)):i.push(O.fullPath,de)),l.value=O,gt(O,Y,j,b),Kt()}let X;function B(){X||(X=i.listen((O,Y,j)=>{if(!Ni.listening)return;const J=g(O),de=N(J);if(de){$(me(de,{replace:!0}),J).catch(Yr);return}c=J;const y=l.value;rr&&Sy(Zc(y.fullPath,j.delta),Zo()),D(J,y).catch(b=>Pt(b,12)?b:Pt(b,2)?($(b.to,J).then(k=>{Pt(k,20)&&!j.delta&&j.type===li.pop&&i.go(-1,!1)}).catch(Yr),Promise.reject()):(j.delta&&i.go(-j.delta,!1),ue(b,J,y))).then(b=>{b=b||z(J,y,!1),b&&(j.delta&&!Pt(b,8)?i.go(-j.delta,!1):j.type===li.pop&&Pt(b,20)&&i.go(-1,!1)),H(J,y,b)}).catch(Yr)}))}let ie=Rr(),G=Rr(),re;function ue(O,Y,j){Kt(O);const J=G.list();return J.length?J.forEach(de=>de(O,Y,j)):console.error(O),Promise.reject(O)}function At(){return re&&l.value!==Zt?Promise.resolve():new Promise((O,Y)=>{ie.add([O,Y])})}function Kt(O){return re||(re=!O,B(),ie.list().forEach(([Y,j])=>O?j(O):Y()),ie.reset()),O}function gt(O,Y,j,J){const{scrollBehavior:de}=e;if(!rr||!de)return Promise.resolve();const y=!j&&Ey(Zc(O.fullPath,0))||(J||!j)&&history.state&&history.state.scroll||null;return Sr().then(()=>de(O,Y,y)).then(b=>b&&ky(b)).catch(b=>ue(b,O,Y))}const Ye=O=>i.go(O);let Jn;const Zn=new Set,Ni={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,hasRoute:S,getRoutes:w,resolve:g,options:e,push:_,replace:E,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:G.add,isReady:At,install(O){const Y=this;O.component("RouterLink",l0),O.component("RouterView",d0),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),rr&&!Jn&&l.value===Zt&&(Jn=!0,_(i.location).catch(de=>{}));const j={};for(const de in Zt)Object.defineProperty(j,de,{get:()=>l.value[de],enumerable:!0});O.provide(Qo,Y),O.provide(vl,Ha(j)),O.provide(fa,l);const J=O.unmount;Zn.add(O),O.unmount=function(){Zn.delete(O),Zn.size<1&&(c=Zt,X&&X(),X=null,l.value=Zt,Jn=!1,re=!1),J()}}};function Be(O){return O.reduce((Y,j)=>Y.then(()=>T(j)),Promise.resolve())}return Ni}function m0(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const a=t.matched[s];a&&(e.matched.find(c=>vr(c,a))?r.push(a):n.push(a));const l=e.matched[s];l&&(t.matched.find(c=>vr(c,l))||i.push(l))}return[n,r,i]}function N2(){return je(Qo)}function h0(){return je(vl)}var du={expireTimes:"1d",path:"; path=/",domain:"",secure:!1,sameSite:"; SameSite=Lax"},g0=function(){function e(){this.current_default_config=du}return e.prototype.config=function(t){for(var n in this.current_default_config)this.current_default_config[n]=t[n]?t[n]:du[n]},e.prototype.get=function(t){var n=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(n&&n.substring(0,1)==="{"&&n.substring(n.length-1,n.length)==="}")try{n=JSON.parse(n)}catch{return n}return n},e.prototype.set=function(t,n,r,i,o,s,a){if(t){if(/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+t)}else throw new Error("Cookie name is not found in the first argument.");n&&n.constructor===Object&&(n=JSON.stringify(n));var l="";if(r==null&&(r=this.current_default_config.expireTimes?this.current_default_config.expireTimes:""),r&&r!=0)switch(r.constructor){case Number:r===1/0||r===-1?l="; expires=Fri, 31 Dec 9999 23:59:59 GMT":l="; max-age="+r;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(r)){var c=r.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(r.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":l="; max-age="+ +c*2592e3;break;case"d":l="; max-age="+ +c*86400;break;case"h":l="; max-age="+ +c*3600;break;case"min":l="; max-age="+ +c*60;break;case"s":l="; max-age="+c;break;case"y":l="; max-age="+ +c*31104e3;break}}else l="; expires="+r;break;case Date:l="; expires="+r.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+l+(o?"; domain="+o:this.current_default_config.domain?this.current_default_config.domain:"")+(i?"; path="+i:this.current_default_config.path?this.current_default_config.path:"; path=/")+(s==null?this.current_default_config.secure?"; Secure":"":s?"; Secure":"")+(a==null?this.current_default_config.sameSite?"; SameSute="+this.current_default_config.sameSite:"":a?"; SameSite="+a:""),this},e.prototype.remove=function(t,n,r){return!t||!this.isKey(t)?!1:(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(r?"; domain="+r:this.current_default_config.domain?this.current_default_config.domain:"")+(n?"; path="+n:this.current_default_config.path?this.current_default_config.path:"; path=/")+"; SameSite=Lax",!0)},e.prototype.isKey=function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},e.prototype.keys=function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<t.length;n++)t[n]=decodeURIComponent(t[n]);return t},e}(),Os=null;function yl(){Os==null&&(Os=new g0);var e=Ht(Os);return{cookies:e}}const{cookies:v0}=yl(),y0=[{path:"/",redirect:"/main"},{path:"/sign-in/:code(.*)*",name:"signIn",component:()=>Yi(()=>import("./SignInView-0d508658.js"),["assets/SignInView-0d508658.js","assets/services-39e6a1b0.js","assets/SignInView-8e13ab6b.css"])},{path:"/main",name:"main",meta:{requiresAuth:!0},component:()=>Yi(()=>import("./Main-3689e7aa.js"),["assets/Main-3689e7aa.js","assets/ProgressModal-e4167bbe.js","assets/ProgressModal-3ac54157.css","assets/services-39e6a1b0.js","assets/Main-90cd399c.css"])},{path:"/password-setting/:code(.*)",name:"passwordSetting",component:()=>Yi(()=>import("./PasswordSetting-e0a5e615.js"),["assets/PasswordSetting-e0a5e615.js","assets/services-39e6a1b0.js","assets/PasswordSetting-e0248b41.css"])},{path:"/admin",name:"admin",meta:{requiresAuth:!0},component:()=>Yi(()=>import("./Admin-05cdbdfe.js"),["assets/Admin-05cdbdfe.js","assets/services-39e6a1b0.js","assets/ProgressModal-e4167bbe.js","assets/ProgressModal-3ac54157.css","assets/Admin-3cea60a1.css"])}],es=p0({history:Oy("http://222.107.124.161:64000"),routes:y0,scrollBehavior(e,t,n){if(n!=null)return new Promise((r,i)=>{setTimeout(()=>{r({left:0,top:n.top})},500)})}});es.beforeEach((e,t,n)=>{const r=v0.get("token");if(e.path==="/sign-in"){if(r)return n({path:"/main"});n()}else if(r){if(e.path==="/")return n({path:"/"});n()}else return e.matched.some(i=>i.meta.requiresAuth)?(je("emitter").emit("update:alert",{isActive:!0,message:"Please log in."}),n({path:"/sign-in"})):n()});function b0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var $e={};const w0=b0(ty);var d=w0;const _0={class:"v-spinner"},x0={name:"BeatLoader"};var bl=Object.assign(x0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size,margin:t.margin,borderRadius:t.radius}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",_0,[d.createElementVNode("div",{class:"v-beat v-beat-odd",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-beat v-beat-even",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-beat v-beat-odd",style:d.normalizeStyle(d.unref(n))},null,4)],512)),[[d.vShow,e.loading]])}});function ze(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var k0=`
.v-spinner .v-beat {
  -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
  animation: v-beatStretchDelay 0.7s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}
.v-spinner .v-beat-odd {
  animation-delay: 0s;
}
.v-spinner .v-beat-even {
  animation-delay: 0.35s;
}
@-webkit-keyframes v-beatStretchDelay {
50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;
    opacity: 0.2;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-beatStretchDelay {
50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;
    opacity: 0.2;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;ze(k0);bl.__file="src/components/BeatLoader.vue";const S0={class:"v-spinner"},E0={name:"BounceLoader"};var wl=Object.assign(E0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size,borderRadius:t.radius,opacity:.6,position:"absolute",top:0,left:0})),r=d.computed(()=>({height:t.size,width:t.size,position:"relative"}));return(i,o)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",S0,[d.createElementVNode("div",{class:"v-bounce v-bounce1",style:d.normalizeStyle(d.unref(r))},[d.createElementVNode("div",{class:"v-bounce v-bounce2",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-bounce v-bounce3",style:d.normalizeStyle(d.unref(n))},null,4)],4)],512)),[[d.vShow,e.loading]])}}),C0=`
.v-spinner .v-bounce {
}
.v-spinner .v-bounce1 {
}
.v-spinner .v-bounce2 {
  -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.v-spinner .v-bounce3 {
  -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes v-bounceStretchDelay {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@keyframes v-bounceStretchDelay {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
`;ze(C0);wl.__file="src/components/BounceLoader.vue";const A0={class:"v-spinner"},P0={name:"ClipLoader"};var _l=Object.assign(P0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"35px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({height:t.size,width:t.size,borderWidth:"2px",borderStyle:"solid",borderColor:t.color+" "+t.color+" transparent",borderRadius:t.radius,background:"transparent"}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",A0,[d.createElementVNode("div",{class:"v-clip",style:d.normalizeStyle(d.unref(n))},null,4)],512)),[[d.vShow,e.loading]])}}),O0=`
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
.v-spinner .v-clip {
  -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
  animation: v-clipDelay 0.75s 0s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
@-webkit-keyframes v-clipDelay {
0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
}
50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
}
100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
}
}
@keyframes v-clipDelay {
0% {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
}
50% {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
}
100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
}
}
`;ze(O0);_l.__file="src/components/ClipLoader.vue";const T0={class:"v-spinner"},R0={name:"DotLoader"};var xl=Object.assign(R0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:parseFloat(t.size)/2+"px",width:parseFloat(t.size)/2+"px",borderRadius:t.radius})),r=d.computed(()=>({height:t.size,width:t.size,position:"relative"}));return(i,o)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",T0,[d.createElementVNode("div",{class:"v-dot v-dot1",style:d.normalizeStyle(d.unref(r))},[d.createElementVNode("div",{class:"v-dot v-dot2",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-dot v-dot3",style:d.normalizeStyle(d.unref(n))},null,4)],4)],512)),[[d.vShow,e.loading]])}}),$0=`
.v-spinner .v-dot {
}
.v-spinner .v-dot1 {
  -webkit-animation: v-dotRotate 2s 0s infinite linear;
  animation: v-dotRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.v-spinner .v-dot2 {
  -webkit-animation: v-dotBounce 2s 0s infinite linear;
  animation: v-dotBounce 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  bottom: auto;
}
.v-spinner .v-dot3 {
  -webkit-animation: v-dotBounce 2s -1s infinite linear;
  animation: v-dotBounce 2s -1s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: auto;
  bottom: 0;
}
@-webkit-keyframes v-dotRotate {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-dotRotate {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@-webkit-keyframes v-dotBounce {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@keyframes v-dotBounce {
0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
}
50% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
`;ze($0);xl.__file="src/components/DotLoader.vue";const N0={class:"v-spinner",style:{position:"relative",fontSize:0}},L0={name:"FadeLoader"};var kl=Object.assign(L0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"15px"},width:{type:String,default:"5px"},margin:{type:String,default:"2px"},radius:{type:String,default:"20px"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.height,width:t.width,margin:t.margin,borderRadius:t.radius})),r=d.computed(()=>"-"+t.radius),i=d.computed(()=>parseFloat(t.radius)/2+parseFloat(t.radius)/5.5+"px"),o=d.computed(()=>"-"+i.value),s=d.computed(()=>({top:t.radius,left:0,animationDelay:"0.12s"})),a=d.computed(()=>({top:i.value,left:i.value,animationDelay:"0.24s",transform:"rotate(-45deg)"})),l=d.computed(()=>({top:0,left:t.radius,animationDelay:"0.36s",transform:"rotate(90deg)"})),c=d.computed(()=>({top:o.value,left:i.value,animationDelay:"0.48s",transform:"rotate(45deg)"})),u=d.computed(()=>({top:r.value,left:0,animationDelay:"0.60s"})),f=d.computed(()=>({top:o.value,left:o.value,animationDelay:"0.72s",transform:"rotate(-45deg)"})),p=d.computed(()=>({top:0,left:r.value,animationDelay:"0.84s",transform:"rotate(90deg)"})),h=d.computed(()=>({top:i.value,left:o.value,animationDelay:"0.96s",transform:"rotate(45deg)"}));return(v,w)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",N0,[d.createElementVNode("div",{class:"v-fade v-fade1",style:d.normalizeStyle([d.unref(n),d.unref(s)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade2",style:d.normalizeStyle([d.unref(n),d.unref(a)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade3",style:d.normalizeStyle([d.unref(n),d.unref(l)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade4",style:d.normalizeStyle([d.unref(n),d.unref(c)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade5",style:d.normalizeStyle([d.unref(n),d.unref(u)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade6",style:d.normalizeStyle([d.unref(n),d.unref(f)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade7",style:d.normalizeStyle([d.unref(n),d.unref(p)])},null,4),d.createElementVNode("div",{class:"v-fade v-fade8",style:d.normalizeStyle([d.unref(n),d.unref(h)])},null,4)],512)),[[d.vShow,e.loading]])}}),I0=`
.v-spinner .v-fade {
  -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
  animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
}
@-webkit-keyframes v-fadeStretchDelay {
50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
}
100% {
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-fadeStretchDelay {
50% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
}
100% {
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;ze(I0);kl.__file="src/components/FadeLoader.vue";const D0={name:"GridLoader"};var Sl=Object.assign(D0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,width:t.size,height:t.size,margin:t.margin,borderRadius:t.radius})),r=d.computed(()=>({animationName:"v-gridStretchDelay",animationIterationCount:"infinite",animationTimingFunction:"ease",animationFillMode:"both",display:"inline-block"})),i=d.computed(()=>({animationDelay:w(),animationDuration:S()})),o=d.computed(()=>({animationDelay:w(),animationDuration:S()})),s=d.computed(()=>({animationDelay:w(),animationDuration:S()})),a=d.computed(()=>({animationDelay:w(),animationDuration:S()})),l=d.computed(()=>({animationDelay:w(),animationDuration:S()})),c=d.computed(()=>({animationDelay:w(),animationDuration:S()})),u=d.computed(()=>({animationDelay:w(),animationDuration:S()})),f=d.computed(()=>({animationDelay:w(),animationDuration:S()})),p=d.computed(()=>({animationDelay:w(),animationDuration:S()})),h=d.computed(()=>({width:parseFloat(t.size)*3+parseFloat(t.margin)*6+"px",fontSize:0})),v=g=>Math.random()*g,w=()=>v(100)/100-.2+"s",S=()=>v(100)/100+.6+"s";return(g,m)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",{class:"v-spinner",style:d.normalizeStyle(d.unref(h))},[d.createElementVNode("div",{class:"v-grid v-grid1",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(i)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid2",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(o)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid3",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(s)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid4",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(a)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid5",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(l)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid6",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(c)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid7",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(u)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid8",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(f)])},null,4),d.createElementVNode("div",{class:"v-grid v-grid9",style:d.normalizeStyle([d.unref(n),d.unref(r),d.unref(p)])},null,4)],4)),[[d.vShow,e.loading]])}}),z0=`
@-webkit-keyframes v-gridStretchDelay {
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
@keyframes v-gridStretchDelay {
0% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
}
`;ze(z0);Sl.__file="src/components/GridLoader.vue";const M0={class:"whirlpool"},B0=d.createStaticVNode('<div class="ring ring0" data-v-b9d9af2e></div><div class="ring ring1" data-v-b9d9af2e></div><div class="ring ring2" data-v-b9d9af2e></div><div class="ring ring3" data-v-b9d9af2e></div><div class="ring ring4" data-v-b9d9af2e></div><div class="ring ring5" data-v-b9d9af2e></div><div class="ring ring6" data-v-b9d9af2e></div><div class="ring ring7" data-v-b9d9af2e></div><div class="ring ring8" data-v-b9d9af2e></div><div class="ring ring9" data-v-b9d9af2e></div>',10),F0=[B0],j0={name:"JellyfishLoader"};var ts=Object.assign(j0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"},width:{type:Number,default:100},height:{type:Number,default:100},speed:{type:String,default:"2.5s"},scale:{type:Number,default:1}},setup(e){const t=e;return d.useCssVars(n=>({"b9d9af2e-props.scale":t.scale,"b9d9af2e-props.color":t.color,"b9d9af2e-props.speed":t.speed})),(n,r)=>(d.openBlock(),d.createElementBlock("div",M0,F0))}}),H0=`
.whirlpool[data-v-b9d9af2e] {
  width: 100px;
  height: 100px;
  position: relative;
  transform: scale(var(--b9d9af2e-props\\.scale));
}
.ring[data-v-b9d9af2e]:before {
  content: "";
  border-radius: 50%;
  border: 1px solid var(--b9d9af2e-props\\.color);
  position: absolute;
}
.ring0[data-v-b9d9af2e]:before {
  left: 45px;
  width: 10px;
  top: 13px;
  height: 3px;
  animation: var(--b9d9af2e-props\\.speed) ease 0s infinite spinner-b9d9af2e;
}
.ring1[data-v-b9d9af2e]:before {
  left: 40px;
  width: 20px;
  top: 12px;
  height: 6px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.1s infinite spinner-b9d9af2e;
}
.ring2[data-v-b9d9af2e]:before {
  left: 35px;
  width: 30px;
  top: 11px;
  height: 9px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.2s infinite spinner-b9d9af2e;
}
.ring3[data-v-b9d9af2e]:before {
  left: 30px;
  width: 40px;
  top: 9px;
  height: 12px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.3s infinite spinner-b9d9af2e;
}
.ring4[data-v-b9d9af2e]:before {
  left: 25px;
  width: 50px;
  top: 8px;
  height: 15px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.4s infinite spinner-b9d9af2e;
}
.ring5[data-v-b9d9af2e]:before {
  left: 20px;
  width: 60px;
  top: 6px;
  height: 18px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.5s infinite spinner-b9d9af2e;
}
.ring6[data-v-b9d9af2e]:before {
  left: 15px;
  width: 70px;
  top: 5px;
  height: 21px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.6s infinite spinner-b9d9af2e;
}
.ring7[data-v-b9d9af2e]:before {
  left: 10px;
  width: 80px;
  top: 3px;
  height: 24px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.7s infinite spinner-b9d9af2e;
}
.ring8[data-v-b9d9af2e]:before {
  left: 5px;
  width: 90px;
  top: 2px;
  height: 27px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.8s infinite spinner-b9d9af2e;
}
.ring9[data-v-b9d9af2e]:before {
  width: 100px;
  height: 30px;
  animation: var(--b9d9af2e-props\\.speed) ease 0.9s infinite spinner-b9d9af2e;
}
@keyframes spinner-b9d9af2e {
0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
50% {
    transform: translateY(60px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
}
`;ze(H0);ts.__scopeId="data-v-b9d9af2e";ts.__file="src/components/JellyfishLoader.vue";const U0={class:"v-spinner"},V0={name:"MoonLoader"};var El=Object.assign(V0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({height:t.size,width:t.size,borderRadius:t.radius})),r=d.computed(()=>parseFloat(t.size)/7),i=d.computed(()=>({height:r.value+"px",width:r.value+"px",borderRadius:t.radius})),o=d.computed(()=>({top:parseFloat(t.size)/2-r.value/2+"px",backgroundColor:t.color})),s=d.computed(()=>({border:r.value+"px solid "+t.color}));return(a,l)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",U0,[d.createElementVNode("div",{class:"v-moon v-moon1",style:d.normalizeStyle(d.unref(n))},[d.createElementVNode("div",{class:"v-moon v-moon2",style:d.normalizeStyle([d.unref(i),d.unref(o)])},null,4),d.createElementVNode("div",{class:"v-moon v-moon3",style:d.normalizeStyle([d.unref(n),d.unref(s)])},null,4)],4)],512)),[[d.vShow,e.loading]])}}),Y0=`
.v-spinner .v-moon1 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: relative;
}
.v-spinner .v-moon2 {
  -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
  animation: v-moonStretchDelay 0.6s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  opacity: 0.8;
  position: absolute;
}
.v-spinner .v-moon3 {
  opacity: 0.1;
}
@-webkit-keyframes v-moonStretchDelay {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-moonStretchDelay {
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
`;ze(Y0);El.__file="src/components/MoonLoader.vue";const W0={class:"v-spinner",style:{position:"relative",fontSize:0}},q0={name:"PacmanLoader"};var Cl=Object.assign(q0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,width:t.size,height:t.size,margin:t.margin,borderRadius:t.radius})),r=d.computed(()=>t.size+" solid transparent"),i=d.computed(()=>t.size+" solid "+t.color),o=d.computed(()=>({width:0,height:0,borderTop:i.value,borderRight:r.value,borderBottom:i.value,borderLeft:i.value,borderRadius:t.size})),s=d.computed(()=>({width:"10px",height:"10px",transform:"translate(0, "+-parseFloat(t.size)/4+"px)",position:"absolute",top:"25px",left:"100px",animationName:"v-pacmanStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationFillMode:"both"})),a=d.computed(()=>({animationDelay:"0.25s"})),l=d.computed(()=>({animationDelay:"0.5s"})),c=d.computed(()=>({animationDelay:"0.75s"})),u=d.computed(()=>({animationDelay:"1s"}));return(f,p)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",W0,[d.createElementVNode("div",{class:"v-pacman v-pacman1",style:d.normalizeStyle(d.unref(o))},null,4),d.createElementVNode("div",{class:"v-pacman v-pacman2",style:d.normalizeStyle([d.unref(n),d.unref(s),d.unref(a)])},null,4),d.createElementVNode("div",{class:"v-pacman v-pacman3",style:d.normalizeStyle([d.unref(n),d.unref(s),d.unref(l)])},null,4),d.createElementVNode("div",{class:"v-pacman v-pacman4",style:d.normalizeStyle([d.unref(n),d.unref(s),d.unref(c)])},null,4),d.createElementVNode("div",{class:"v-pacman v-pacman5",style:d.normalizeStyle([d.unref(n),d.unref(s),d.unref(u)])},null,4)],512)),[[d.vShow,e.loading]])}}),K0=`
.v-spinner {
  text-align: center;
}

/*TODO computed transform */
@-webkit-keyframes v-pacmanStretchDelay {
75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
}
}
@keyframes v-pacmanStretchDelay {
75% {
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
}
}
`;ze(K0);Cl.__file="src/components/PacmanLoader.vue";const X0={class:""},G0={name:"Pacman2Loader"};var Al=Object.assign(G0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"25px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"},width:{type:Number,default:100},height:{type:Number,default:100}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,marginLeft:"0px",top:`${t.height/2.5}px`,width:`${t.width/5}px`,height:`${t.height/5}px`,"-moz-border-radius":`${t.height/3/2}px`,"-webkit-border-radius":`${t.height/3/2}px`,"-o-border-radius":`${t.height/3/2}px`,"border-radius":`${t.height/3/2}px`})),r=d.computed(()=>({backgroundColor:t.color,width:"50px",height:"50px","-moz-border-radius":t.height/2+"px","-webkit-border-radius":t.height/2+"px","-o-border-radius":t.height/2+"px","border-radius":t.height/2+"px"})),i=d.computed(()=>({width:t.width+"px",height:t.height+"px"})),o=d.computed(()=>({width:`${t.width}px`,height:`${t.height}px`,"-moz-border-radius":`${t.height/2}px`,"-webkit-border-radius":`${t.height/2}px`,"-o-border-radius":`${t.height/2}px`,"border-radius":`${t.height/2}px`,clip:`rect(0px, ${t.height/2}px, ${t.width}px, 0)`})),s=d.computed(()=>({left:`${t.height/60}px`,width:`${t.width+2}px`,height:`${t.height+2}px`,"-moz-border-radius":`${t.height/2}px`,"-webkit-border-radius":`${t.height/2}px`,"-o-border-radius":`${t.height/2}px`,"border-radius":`${t.height/2}px`,clip:`rect(0px, ${t.height}px, ${t.width}px, ${t.height/2+2}px)`}));return(a,l)=>(d.openBlock(),d.createElementBlock("div",X0,[d.createElementVNode("div",{class:"pacman-container",style:d.normalizeStyle(d.unref(i))},[d.createElementVNode("div",{class:"pacman-body",style:d.normalizeStyle(d.unref(r))},null,4),d.createElementVNode("div",{class:"pacman-mouth",style:d.normalizeStyle(d.unref(s))},[d.createElementVNode("div",{class:"pacman",style:d.normalizeStyle(d.unref(o))},null,4)],4)],4),d.createElementVNode("div",{class:"dot",style:d.normalizeStyle(d.unref(n))},null,4)]))}}),J0=`
.pacman-container {
  display: block;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -moz-animation: bite 0.5s linear infinite;
  -webkit-animation: bite 0.5s linear infinite;
  animation: bite 0.5s linear infinite;
}
.pacman-body {
  background-color: #ff0;
  position: absolute;
}
.dot {
  background-color: #318a47;
  position: absolute;
  z-index: 0;
  -moz-animation: movedot 0.5s linear infinite;
  -webkit-animation: movedot 0.5s linear infinite;
  animation: movedot 0.5s linear infinite;
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.pacman {
  position: absolute;
  z-index: 2;
}
.pacman-mouth {
  position: absolute;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  -o-border-radius: 50px;
  border-radius: 50px;
  clip: rect(0px, 100px, 100px, 52px);
}
.pacman-mouth .pacman {
  background-color: #ffffff;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  -moz-animation: munch 0.5s linear infinite;
  -webkit-animation: munch 0.5s linear infinite;
  animation: munch 0.5s linear infinite;

  /* To fix a yellow border on pacman's mouth */
  border: 10px solid #ffffff;
}
.dot {
  -moz-animation: movedot 1s linear infinite;
  -webkit-animation: movedot 1s linear infinite;
  animation: movedot 1s linear infinite;
  -moz-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
@-moz-keyframes munch {
0% {
    -moz-transform: rotate(90deg);
}
50% {
    -moz-transform: rotate(0deg);
}
100% {
    -moz-transform: rotate(90deg);
}
}
@-webkit-keyframes munch {
0% {
    -webkit-transform: rotate(90deg);
}
50% {
    -webkit-transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(90deg);
}
}
@keyframes munch {
0% {
    transform: rotate(90deg);
}
50% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(90deg);
}
}
@-moz-keyframes bite {
0% {
    -moz-transform: rotate(45deg);
}
50% {
    -moz-transform: rotate(90deg);
}
100% {
    -moz-transform: rotate(45deg);
}
}
@-webkit-keyframes bite {
0% {
    -webkit-transform: rotate(45deg);
}
50% {
    -webkit-transform: rotate(90deg);
}
100% {
    -webkit-transform: rotate(45deg);
}
}
@keyframes bite {
0% {
    transform: rotate(45deg);
}
50% {
    transform: rotate(90deg);
}
100% {
    transform: rotate(45deg);
}
}
@-webkit-keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
@-moz-keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
@keyframes movedot {
0% {
    left: 200px;
}
100% {
    left: 50px;
}
}
`;ze(J0);Al.__file="src/components/Pacman2Loader.vue";const Z0={class:"v-spinner"},Q0={name:"PulseLoader"};var Pl=Object.assign(Q0,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,width:t.size,height:t.size,margin:t.margin,borderRadius:t.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"})),r=d.computed(()=>({animationDelay:"0.12s"})),i=d.computed(()=>({animationDelay:"0.24s"})),o=d.computed(()=>({animationDelay:"0.36s"}));return(s,a)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",Z0,[d.createElementVNode("div",{class:"v-pulse v-pulse1",style:d.normalizeStyle([d.unref(n),d.unref(r)])},null,4),d.createElementVNode("div",{class:"v-pulse v-pulse2",style:d.normalizeStyle([d.unref(n),d.unref(i)])},null,4),d.createElementVNode("div",{class:"v-pulse v-pulse3",style:d.normalizeStyle([d.unref(n),d.unref(o)])},null,4)],512)),[[d.vShow,e.loading]])}}),eb=`
/*.v-spinner
{
    margin: 100px auto;
    text-align: center;
}
*/
@-webkit-keyframes v-pulseStretchDelay {
0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
}
@keyframes v-pulseStretchDelay {
0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
}
45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
}
}
`;ze(eb);Pl.__file="src/components/PulseLoader.vue";const tb={class:"v-spinner"},nb={name:"RingLoader"};var Ol=Object.assign(nb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({height:t.size,width:t.size,border:parseFloat(t.size)/10+"px solid"+t.color,opacity:.4,borderRadius:t.radius})),r=d.computed(()=>({height:t.size,width:t.size,position:"relative"}));return(i,o)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",tb,[d.createElementVNode("div",{class:"v-ring v-ring1",style:d.normalizeStyle(d.unref(r))},[d.createElementVNode("div",{class:"v-ring v-ring2",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-ring v-ring3",style:d.normalizeStyle(d.unref(n))},null,4)],4)],512)),[[d.vShow,e.loading]])}}),rb=`
.v-spinner .v-ring {
}
.v-spinner .v-ring1 {
}
.v-spinner .v-ring2 {
  -webkit-animation: v-ringRightRotate 2s 0s infinite linear;
  animation: v-ringRightRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  perspective: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
.v-spinner .v-ring3 {
  -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;
  animation: v-ringLeftRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  perspective: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
@-webkit-keyframes v-ringRightRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@keyframes v-ringRightRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
}
}
@-webkit-keyframes v-ringLeftRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
@keyframes v-ringLeftRotate {
0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
100% {
    -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
}
}
`;ze(rb);Ol.__file="src/components/RingLoader.vue";const ib={class:"v-spinner"},ob={name:"RiseLoader"};var Tl=Object.assign(ob,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size,margin:t.margin,borderRadius:t.radius}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",ib,[d.createElementVNode("div",{class:"v-rise v-rise-odd",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-rise v-rise-even",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-rise v-rise-odd",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-rise v-rise-even",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-rise v-rise-odd",style:d.normalizeStyle(d.unref(n))},null,4)],512)),[[d.vShow,e.loading]])}}),sb=`
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
.v-spinner .v-rise-odd {
  -webkit-animation: v-riseOddDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseOddDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
.v-spinner .v-rise-even {
  -webkit-animation: v-riseEvenDelay 1s 0s infinite
    cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: inline-block;
}
@-webkit-keyframes v-riseOddDelay {
0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
}
}
@keyframes v-riseOddDelay {
0% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
25% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
75% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
100% {
    -webkit-transform: translateY(0) scale(0.75);
    transform: translateY(0) scale(0.75);
}
}
@-webkit-keyframes v-riseEvenDelay {
0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
}
}
@keyframes v-riseEvenDelay {
0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
25% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
}
50% {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
}
75% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
}
100% {
    -webkit-transform: translateY(0) scale(1);
    transform: translateY(0) scale(1);
}
}
`;ze(sb);Tl.__file="src/components/RiseLoader.vue";const ab={class:"v-spinner"},lb={name:"RotateLoader"};var Rl=Object.assign(lb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size,margin:t.margin,borderRadius:t.radius}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",ab,[d.createElementVNode("div",{class:"v-rotate v-rotate1",style:d.normalizeStyle(d.unref(n))},[d.createElementVNode("div",{class:"v-rotate v-rotate2",style:d.normalizeStyle(d.unref(n))},null,4),d.createElementVNode("div",{class:"v-rotate v-rotate3",style:d.normalizeStyle(d.unref(n))},null,4)],4)],512)),[[d.vShow,e.loading]])}}),cb=`
.v-spinner .v-rotate1 {
  -webkit-animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  animation: v-rotateStretchDelay 1s 0s infinite
    cubic-bezier(0.7, -0.13, 0.22, 0.86);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  position: relative;
}
.v-spinner .v-rotate2 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: -28px;
}
.v-spinner .v-rotate3 {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 25px;
}
@-webkit-keyframes v-rotateStretchDelay {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes v-rotateStretchDelay {
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
`;ze(cb);Rl.__file="src/components/RotateLoader.vue";const ub={class:"v-spinner"},fb={name:"ScaleLoader"};var $l=Object.assign(fb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"35px"},width:{type:String,default:"4px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.height,width:t.width,margin:t.margin,borderRadius:t.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"})),r=d.computed(()=>({animationDelay:"0.1s"})),i=d.computed(()=>({animationDelay:"0.2s"})),o=d.computed(()=>({animationDelay:"0.3s"})),s=d.computed(()=>({animationDelay:"0.4s"})),a=d.computed(()=>({animationDelay:"0.5s"}));return(l,c)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",ub,[d.createElementVNode("div",{class:"v-scale v-scale1",style:d.normalizeStyle([d.unref(n),d.unref(r)])},null,4),d.createElementVNode("div",{class:"v-scale v-scale2",style:d.normalizeStyle([d.unref(n),d.unref(i)])},null,4),d.createElementVNode("div",{class:"v-scale v-scale3",style:d.normalizeStyle([d.unref(n),d.unref(o)])},null,4),d.createElementVNode("div",{class:"v-scale v-scale4",style:d.normalizeStyle([d.unref(n),d.unref(s)])},null,4),d.createElementVNode("div",{class:"v-scale v-scale5",style:d.normalizeStyle([d.unref(n),d.unref(a)])},null,4)],512)),[[d.vShow,e.loading]])}}),db=`
.v-spinner {
  /*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
}
@-webkit-keyframes v-scaleStretchDelay {
0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
}
50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
}
100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}
}
@keyframes v-scaleStretchDelay {
0% {
    -webkit-animation-name: inherit;
    -webkit-animation-duration: inherit;
    -webkit-animation-iteration-count: inherit;
    -webkit-animation-direction: inherit;
}
50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
}
100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}
}
`;ze(db);$l.__file="src/components/ScaleLoader.vue";const pb={class:"v-spinner"},mb={name:"SkewLoader"};var Nl=Object.assign(mb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"20px"}},setup(e){const t=e,n=d.computed(()=>({height:0,width:0,borderLeft:t.size+" solid transparent",borderRight:t.size+" solid transparent",borderBottom:t.size+" solid "+t.color}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",pb,[d.createElementVNode("div",{class:"v-skew",style:d.normalizeStyle(d.unref(n))},null,4)],512)),[[d.vShow,e.loading]])}}),hb=`
.v-spinner {
  text-align: center;
}
.v-spinner .v-skew {
  -webkit-animation: v-skewDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-skewDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}
@-webkit-keyframes v-skewDelay {
25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
}
}
@keyframes v-skewDelay {
25% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
    transform: perspective(100px) rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
    transform: perspective(100px) rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
    transform: perspective(100px) rotateX(0) rotateY(0);
}
}
`;ze(hb);Nl.__file="src/components/SkewLoader.vue";const gb={class:"v-spinner"},vb={name:"SquareLoader"};var Ll=Object.assign(vb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"50px"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size}));return(r,i)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",gb,[d.createElementVNode("div",{class:"v-square",style:d.normalizeStyle(d.unref(n))},null,4)],512)),[[d.vShow,e.loading]])}}),yb=`
.v-spinner {
  text-align: center;
}
.v-spinner .v-square {
  -webkit-animation: v-squareDelay 3s 0s infinite
    cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation: v-squareDelay 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  perspective: 100px;
  display: inline-block;
}
@-webkit-keyframes v-squareDelay {
25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
}
}
@keyframes v-squareDelay {
25% {
    -webkit-transform: rotateX(180deg) rotateY(0);
    transform: rotateX(180deg) rotateY(0);
}
50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg);
    transform: rotateX(180deg) rotateY(180deg);
}
75% {
    -webkit-transform: rotateX(0) rotateY(180deg);
    transform: rotateX(0) rotateY(180deg);
}
100% {
    -webkit-transform: rotateX(0) rotateY(0);
    transform: rotateX(0) rotateY(0);
}
}
`;ze(yb);Ll.__file="src/components/SquareLoader.vue";const bb={class:"v-spinner"},wb={name:"SyncLoader"};var Il=Object.assign(wb,{props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},setup(e){const t=e,n=d.computed(()=>({backgroundColor:t.color,height:t.size,width:t.size,margin:t.margin,borderRadius:t.radius,display:"inline-block",animationName:"v-syncStretchDelay",animationDuration:"0.6s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationFillMode:"both"})),r=d.computed(()=>({animationDelay:"0.07s"})),i=d.computed(()=>({animationDelay:"0.14s"})),o=d.computed(()=>({animationDelay:"0.21s"}));return(s,a)=>d.withDirectives((d.openBlock(),d.createElementBlock("div",bb,[d.createElementVNode("div",{class:"v-sync v-sync1",style:d.normalizeStyle([d.unref(n),d.unref(r)])},null,4),d.createElementVNode("div",{class:"v-sync v-sync2",style:d.normalizeStyle([d.unref(n),d.unref(i)])},null,4),d.createElementVNode("div",{class:"v-sync v-sync3",style:d.normalizeStyle([d.unref(n),d.unref(o)])},null,4)],512)),[[d.vShow,e.loading]])}}),_b=`
@-webkit-keyframes v-syncStretchDelay {
33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
}
@keyframes v-syncStretchDelay {
33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
}
`;ze(_b);Il.__file="src/components/SyncLoader.vue";var pu=Object.freeze({__proto__:null,BeatLoader:bl,BounceLoader:wl,ClipLoader:_l,DotLoader:xl,FadeLoader:kl,GridLoader:Sl,JellyfishLoader:ts,MoonLoader:El,PacmanLoader:Cl,Pacman2Loader:Al,PulseLoader:Pl,RingLoader:Ol,RiseLoader:Tl,RotateLoader:Rl,ScaleLoader:$l,SkewLoader:Nl,SquareLoader:Ll,SyncLoader:Il});const xb={install(e){for(const t in pu){const n=pu[t];e.component(n.name,n)}}};$e.BeatLoader=bl;$e.BounceLoader=wl;$e.ClipLoader=_l;var kb=$e.DotLoader=xl;$e.FadeLoader=kl;$e.GridLoader=Sl;$e.JellyfishLoader=ts;$e.MoonLoader=El;$e.Pacman2Loader=Al;$e.PacmanLoader=Cl;$e.PulseLoader=Pl;$e.RingLoader=Ol;$e.RiseLoader=Tl;$e.RotateLoader=Rl;$e.ScaleLoader=$l;$e.SkewLoader=Nl;$e.SquareLoader=Ll;$e.SyncLoader=Il;$e.vue3Spinner=xb;const Sb={key:1,class:"alert-modal-container"},Eb={class:"msg"},Cb={class:"close-area"},Ab=Re({__name:"BaseAlertModal",props:{text:{},isActiveAlert:{type:Boolean},fn:{type:Function}},setup(e){const t=e,n=je("emitter"),{text:r,isActiveAlert:i,fn:o}=Ut(t),s=()=>{o&&o.value&&o.value(),n.emit("update:alert",{isActive:!1})};return(a,l)=>{const c=hn("BaseButton");return fe(),ke(Ce,null,[ne(i)?(fe(),ke("div",{key:0,class:"mask",onClick:l[0]||(l[0]=u=>ne(n).emit("update:alert",{isActive:!1}))})):It("",!0),ne(i)?(fe(),ke("div",Sb,[Le("strong",Eb,Nn(ne(r)),1),Le("div",Cb,[ne(o)!==void 0?(fe(),Yt(c,{key:0,text:"Ok",onClick:s,class:"ok-button"})):It("",!0),pe(c,{text:"Close",class:"close-button",onClick:l[1]||(l[1]=u=>ne(n).emit("update:alert",{isActive:!1}))})])])):It("",!0)],64)}}});const Xn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Pb=Xn(Ab,[["__scopeId","data-v-91ef03ef"]]),Ob=Re({__name:"App",setup(e){const t=Oe(""),n=Oe(!1),r=Oe(!1),i=Oe(),o=je("emitter"),s=h0();return ot(s.query,(a,l)=>{console.log(a,l)}),o.on("update:alert",a=>{n.value=a.isActive,i.value=a.fn,a.message!==void 0&&(t.value=a.message)}),o.on("update:loading",a=>{r.value=a.isLoading}),(a,l)=>{const c=hn("router-view");return fe(),ke(Ce,null,[pe(ne(kb),{loading:r.value,color:"#686de0",size:"100px"},null,8,["loading"]),n.value?(fe(),Yt(Pb,{key:0,isActiveAlert:n.value,fn:i.value,text:t.value},null,8,["isActiveAlert","fn","text"])):It("",!0),pe(c)],64)}}});function hp(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tb}=Object.prototype,{getPrototypeOf:Dl}=Object,ns=(e=>t=>{const n=Tb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>ns(t)===e),rs=e=>t=>typeof t===e,{isArray:Cr}=Array,ci=rs("undefined");function Rb(e){return e!==null&&!ci(e)&&e.constructor!==null&&!ci(e.constructor)&&st(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gp=Ct("ArrayBuffer");function $b(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&gp(e.buffer),t}const Nb=rs("string"),st=rs("function"),vp=rs("number"),is=e=>e!==null&&typeof e=="object",Lb=e=>e===!0||e===!1,oo=e=>{if(ns(e)!=="object")return!1;const t=Dl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ib=Ct("Date"),Db=Ct("File"),zb=Ct("Blob"),Mb=Ct("FileList"),Bb=e=>is(e)&&st(e.pipe),Fb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||st(e.append)&&((t=ns(e))==="formdata"||t==="object"&&st(e.toString)&&e.toString()==="[object FormData]"))},jb=Ct("URLSearchParams"),Hb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ai(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Cr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function yp(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const bp=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),wp=e=>!ci(e)&&e!==bp;function da(){const{caseless:e}=wp(this)&&this||{},t={},n=(r,i)=>{const o=e&&yp(t,i)||i;oo(t[o])&&oo(r)?t[o]=da(t[o],r):oo(r)?t[o]=da({},r):Cr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ai(arguments[r],n);return t}const Ub=(e,t,n,{allOwnKeys:r}={})=>(Ai(t,(i,o)=>{n&&st(i)?e[o]=hp(i,n):e[o]=i},{allOwnKeys:r}),e),Vb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Wb=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Dl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Kb=e=>{if(!e)return null;if(Cr(e))return e;let t=e.length;if(!vp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Dl(Uint8Array)),Gb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Jb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Zb=Ct("HTMLFormElement"),Qb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),mu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),e1=Ct("RegExp"),_p=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ai(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},t1=e=>{_p(e,(t,n)=>{if(st(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(st(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},n1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Cr(e)?r(e):r(String(e).split(t)),n},r1=()=>{},i1=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ts="abcdefghijklmnopqrstuvwxyz",hu="0123456789",xp={DIGIT:hu,ALPHA:Ts,ALPHA_DIGIT:Ts+Ts.toUpperCase()+hu},o1=(e=16,t=xp.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function s1(e){return!!(e&&st(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const a1=e=>{const t=new Array(10),n=(r,i)=>{if(is(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Cr(r)?[]:{};return Ai(r,(s,a)=>{const l=n(s,i+1);!ci(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},l1=Ct("AsyncFunction"),c1=e=>e&&(is(e)||st(e))&&st(e.then)&&st(e.catch),P={isArray:Cr,isArrayBuffer:gp,isBuffer:Rb,isFormData:Fb,isArrayBufferView:$b,isString:Nb,isNumber:vp,isBoolean:Lb,isObject:is,isPlainObject:oo,isUndefined:ci,isDate:Ib,isFile:Db,isBlob:zb,isRegExp:e1,isFunction:st,isStream:Bb,isURLSearchParams:jb,isTypedArray:Xb,isFileList:Mb,forEach:Ai,merge:da,extend:Ub,trim:Hb,stripBOM:Vb,inherits:Yb,toFlatObject:Wb,kindOf:ns,kindOfTest:Ct,endsWith:qb,toArray:Kb,forEachEntry:Gb,matchAll:Jb,isHTMLForm:Zb,hasOwnProperty:mu,hasOwnProp:mu,reduceDescriptors:_p,freezeMethods:t1,toObjectSet:n1,toCamelCase:Qb,noop:r1,toFiniteNumber:i1,findKey:yp,global:bp,isContextDefined:wp,ALPHABET:xp,generateString:o1,isSpecCompliantForm:s1,toJSONObject:a1,isAsyncFn:l1,isThenable:c1};function ce(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const kp=ce.prototype,Sp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Sp[e]={value:e}});Object.defineProperties(ce,Sp);Object.defineProperty(kp,"isAxiosError",{value:!0});ce.from=(e,t,n,r,i,o)=>{const s=Object.create(kp);return P.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ce.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const u1=null;function pa(e){return P.isPlainObject(e)||P.isArray(e)}function Ep(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function gu(e,t,n){return e?e.concat(t).map(function(i,o){return i=Ep(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function f1(e){return P.isArray(e)&&!e.some(pa)}const d1=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function os(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!P.isUndefined(S[w])});const r=n.metaTokens,i=n.visitor||u,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(P.isDate(v))return v.toISOString();if(!l&&P.isBlob(v))throw new ce("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(v)||P.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function u(v,w,S){let g=v;if(v&&!S&&typeof v=="object"){if(P.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(P.isArray(v)&&f1(v)||(P.isFileList(v)||P.endsWith(w,"[]"))&&(g=P.toArray(v)))return w=Ep(w),g.forEach(function(x,_){!(P.isUndefined(x)||x===null)&&t.append(s===!0?gu([w],_,o):s===null?w:w+"[]",c(x))}),!1}return pa(v)?!0:(t.append(gu(S,w,o),c(v)),!1)}const f=[],p=Object.assign(d1,{defaultVisitor:u,convertValue:c,isVisitable:pa});function h(v,w){if(!P.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(v),P.forEach(v,function(g,m){(!(P.isUndefined(g)||g===null)&&i.call(t,g,P.isString(m)?m.trim():m,w,p))===!0&&h(g,w?w.concat(m):[m])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return h(e),t}function vu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function zl(e,t){this._pairs=[],e&&os(e,this,t)}const Cp=zl.prototype;Cp.append=function(t,n){this._pairs.push([t,n])};Cp.toString=function(t){const n=t?function(r){return t.call(this,r,vu)}:vu;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function p1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ap(e,t,n){if(!t)return e;const r=n&&n.encode||p1,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new zl(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class m1{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const yu=m1,Pp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},h1=typeof URLSearchParams<"u"?URLSearchParams:zl,g1=typeof FormData<"u"?FormData:null,v1=typeof Blob<"u"?Blob:null,y1=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),b1=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ft={isBrowser:!0,classes:{URLSearchParams:h1,FormData:g1,Blob:v1},isStandardBrowserEnv:y1,isStandardBrowserWebWorkerEnv:b1,protocols:["http","https","file","blob","url","data"]};function w1(e,t){return os(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ft.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function _1(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function x1(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Op(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&P.isArray(i)?i.length:s,l?(P.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&P.isArray(i[s])&&(i[s]=x1(i[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(_1(r),i,n,0)}),n}return null}function k1(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ml={transitional:Pp,adapter:ft.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(Op(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return w1(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return os(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),k1(t)):t}],transformResponse:[function(t){const n=this.transitional||Ml.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ce.from(a,ce.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Ml.headers[e]={}});const Bl=Ml,S1=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),E1=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&S1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},bu=Symbol("internals");function $r(e){return e&&String(e).trim().toLowerCase()}function so(e){return e===!1||e==null?e:P.isArray(e)?e.map(so):String(e)}function C1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const A1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Rs(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function P1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function O1(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class ss{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,c){const u=$r(l);if(!u)throw new Error("header name must be a non-empty string");const f=P.findKey(i,u);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=so(a))}const s=(a,l)=>P.forEach(a,(c,u)=>o(c,u,l));return P.isPlainObject(t)||t instanceof this.constructor?s(t,n):P.isString(t)&&(t=t.trim())&&!A1(t)?s(E1(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=$r(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return C1(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$r(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Rs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=$r(s),s){const a=P.findKey(r,s);a&&(!n||Rs(r,r[a],a,n))&&(delete r[a],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Rs(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const s=P.findKey(r,o);if(s){n[s]=so(i),delete n[o];return}const a=t?P1(o):String(o).trim();a!==o&&delete n[o],n[a]=so(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[bu]=this[bu]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=$r(s);r[a]||(O1(i,s),r[a]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}ss.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(ss.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(ss);const Dt=ss;function $s(e,t){const n=this||Bl,r=t||n,i=Dt.from(r.headers);let o=r.data;return P.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Tp(e){return!!(e&&e.__CANCEL__)}function Pi(e,t,n){ce.call(this,e??"canceled",ce.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Pi,ce,{__CANCEL__:!0});function T1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ce("Request failed with status code "+n.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const R1=ft.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),P.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),P.isString(o)&&l.push("path="+o),P.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function $1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function N1(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Rp(e,t){return e&&!$1(t)?N1(e,t):t}const L1=ft.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=P.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function I1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function D1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[o];s||(s=c),n[i]=l,r[i]=c;let f=o,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const h=u&&c-u;return h?Math.round(p*1e3/h):void 0}}function wu(e,t){let n=0;const r=D1(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),c=o<=s;n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const z1=typeof XMLHttpRequest<"u",M1=z1&&function(e){return new Promise(function(n,r){let i=e.data;const o=Dt.from(e.headers).normalize(),s=e.responseType;let a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}P.isFormData(i)&&(ft.isStandardBrowserEnv||ft.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(h+":"+v))}const u=Rp(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ap(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const h=Dt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};T1(function(g){n(g),l()},function(g){r(g),l()},w),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new ce("Request aborted",ce.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ce("Network Error",ce.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Pp;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new ce(v,w.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,e,c)),c=null},ft.isStandardBrowserEnv){const h=(e.withCredentials||L1(u))&&e.xsrfCookieName&&R1.read(e.xsrfCookieName);h&&o.set(e.xsrfHeaderName,h)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&P.forEach(o.toJSON(),function(v,w){c.setRequestHeader(w,v)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",wu(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",wu(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=h=>{c&&(r(!h||h.type?new Pi(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=I1(u);if(p&&ft.protocols.indexOf(p)===-1){r(new ce("Unsupported protocol "+p+":",ce.ERR_BAD_REQUEST,e));return}c.send(i||null)})},ao={http:u1,xhr:M1};P.forEach(ao,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $p={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=P.isString(n)?ao[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(P.hasOwnProp(ao,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ao};function Ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pi(null,e)}function _u(e){return Ns(e),e.headers=Dt.from(e.headers),e.data=$s.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$p.getAdapter(e.adapter||Bl.adapter)(e).then(function(r){return Ns(e),r.data=$s.call(e,e.transformResponse,r),r.headers=Dt.from(r.headers),r},function(r){return Tp(r)||(Ns(e),r&&r.response&&(r.response.data=$s.call(e,e.transformResponse,r.response),r.response.headers=Dt.from(r.response.headers))),Promise.reject(r)})}const xu=e=>e instanceof Dt?e.toJSON():e;function br(e,t){t=t||{};const n={};function r(c,u,f){return P.isPlainObject(c)&&P.isPlainObject(u)?P.merge.call({caseless:f},c,u):P.isPlainObject(u)?P.merge({},u):P.isArray(u)?u.slice():u}function i(c,u,f){if(P.isUndefined(u)){if(!P.isUndefined(c))return r(void 0,c,f)}else return r(c,u,f)}function o(c,u){if(!P.isUndefined(u))return r(void 0,u)}function s(c,u){if(P.isUndefined(u)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,u)=>i(xu(c),xu(u),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||i,p=f(e[u],t[u],u);P.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Np="1.5.0",Fl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ku={};Fl.transitional=function(t,n,r){function i(o,s){return"[Axios v"+Np+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ce(i(s," has been removed"+(n?" in "+n:"")),ce.ERR_DEPRECATED);return n&&!ku[s]&&(ku[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function B1(e,t,n){if(typeof e!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new ce("option "+o+" must be "+l,ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ce("Unknown option "+o,ce.ERR_BAD_OPTION)}}const ma={assertOptions:B1,validators:Fl},Qt=ma.validators;class ko{constructor(t){this.defaults=t,this.interceptors={request:new yu,response:new yu}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=br(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ma.assertOptions(r,{silentJSONParsing:Qt.transitional(Qt.boolean),forcedJSONParsing:Qt.transitional(Qt.boolean),clarifyTimeoutError:Qt.transitional(Qt.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:ma.assertOptions(i,{encode:Qt.function,serialize:Qt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Dt.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let u,f=0,p;if(!l){const v=[_u.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,c),p=v.length,u=Promise.resolve(n);f<p;)u=u.then(v[f++],v[f++]);return u}p=a.length;let h=n;for(f=0;f<p;){const v=a[f++],w=a[f++];try{h=v(h)}catch(S){w.call(this,S);break}}try{u=_u.call(this,h)}catch(v){return Promise.reject(v)}for(f=0,p=c.length;f<p;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=br(this.defaults,t);const n=Rp(t.baseURL,t.url);return Ap(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){ko.prototype[t]=function(n,r){return this.request(br(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(br(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}ko.prototype[t]=n(),ko.prototype[t+"Form"]=n(!0)});const lo=ko;class jl{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Pi(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jl(function(i){t=i}),cancel:t}}}const F1=jl;function j1(e){return function(n){return e.apply(null,n)}}function H1(e){return P.isObject(e)&&e.isAxiosError===!0}const ha={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ha).forEach(([e,t])=>{ha[t]=e});const U1=ha;function Lp(e){const t=new lo(e),n=hp(lo.prototype.request,t);return P.extend(n,lo.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Lp(br(e,i))},n}const Te=Lp(Bl);Te.Axios=lo;Te.CanceledError=Pi;Te.CancelToken=F1;Te.isCancel=Tp;Te.VERSION=Np;Te.toFormData=os;Te.AxiosError=ce;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=j1;Te.isAxiosError=H1;Te.mergeConfig=br;Te.AxiosHeaders=Dt;Te.formToJSON=e=>Op(P.isHTMLForm(e)?new FormData(e):e);Te.getAdapter=$p.getAdapter;Te.HttpStatusCode=U1;Te.default=Te;const Ip=Te;function Dp(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(i){i(n)}),(r=e.get("*"))&&r.slice().map(function(i){i(t,n)})}}}const zp=cy("user",()=>{const e=Oe(null);return{user:e,putUserInfo:n=>{e.value=n}}}),V1=Dp(),{cookies:ui}=yl(),Hl=Ip.create({baseURL:{}.VITE_BASE_URL,headers:{"Content-Type":"application/json",Authorization:ui.get("token")}}),Y1=Ip.create({baseURL:{}.VITE_BASE_URL,headers:{"Content-Type":"application/json",Authorization:"Bearer "+ui.get("token")}});Hl.interceptors.request.use(function(e){return console.log(e),ui.get("token")!==null&&(e.headers.Authorization=ui.get("token")),e},function(e){return console.log(e),Promise.reject(e)});Hl.interceptors.response.use(function(e){return console.log(e),e},function(e){if(e.response.status==401){const t=zp();ui.remove("token"),t.putUserInfo(null),es.push("/sign-in"),V1.emit("update:alert",{isActive:!0,message:"Logout has been processed."})}return Promise.reject(e)});const W1=["disabled"],q1=Re({__name:"BaseButton",props:{text:{},style:{},disabled:{type:Boolean}},setup(e){const t=e,{text:n,style:r,disabled:i}=Ut(t);return(o,s)=>(fe(),ke("button",{disabled:ne(i),type:"button",class:"base-button"},Nn(ne(n)),9,W1))}});const K1=Xn(q1,[["__scopeId","data-v-253526b4"]]),X1=["onKeyup","value","type","placeholder","disabled"],G1=Re({__name:"BaseInput",props:{modelValue:{},type:{},placeholder:{},onlyText:{type:Boolean},isDisabled:{type:Boolean}},emits:["update:modelValue","update:enterEvent"],setup(e,{emit:t}){const n=e,{type:r,placeholder:i,onlyText:o,modelValue:s,isDisabled:a=!1}=Ut(n),l=u=>{t("update:enterEvent")},c=u=>{const f=u.target;o.value&&(f.value=f.value.replace(/[^0-9]/g,""),f.value=="0"&&(f.value="")),t("update:modelValue",u.target.value)};return(u,f)=>(fe(),ke("input",{class:"base-input",autocomplete:"true",autofocus:"",onInput:c,onKeyup:pl(l,["enter"]),value:ne(s),type:ne(r),placeholder:ne(i),disabled:ne(a)},null,40,X1))}});const J1=Xn(G1,[["__scopeId","data-v-69d2ca38"]]),Z1={class:"select-box"},Q1=["innerHTML"],ew={class:"optionList"},tw=["onClick"],nw={key:0},rw={key:1},iw=Re({__name:"BaseSelect",props:{options:{},name:{},text:{}},emits:["update:select-box"],setup(e,{emit:t}){const n=e,r=Oe(null),{options:i,text:o,name:s}=Ut(n),a=Oe(!1),l=c=>{t("update:select-box",c),a.value=!1};return Kn(()=>{document.body.addEventListener("click",c=>{var f;const u=c.target;(f=r.value)!=null&&f.contains(u)?a.value=!a.value:a.value=!1})}),(c,u)=>(fe(),ke("div",Z1,[Le("button",{class:"label",innerHTML:ne(o),ref_key:"selectedText",ref:r},null,8,Q1),Jf(Le("ul",ew,[ne(i).length>0?(fe(!0),ke(Ce,{key:0},ud(ne(i),(f,p)=>(fe(),ke("li",{class:"optionItem",key:p,onClick:h=>l(f)},[ne(s).split(",").length==2?(fe(),ke("span",nw,Nn(f[ne(s).split(",")[0]])+"/"+Nn(f[ne(s).split(",")[1]]),1)):(fe(),ke("span",rw,Nn(f[ne(s)]),1))],8,tw))),128)):It("",!0)],512),[[ml,a.value]])]))}});const ow=Xn(iw,[["__scopeId","data-v-000f017c"]]),sw=["id"],aw=["for"],lw=Re({__name:"BaseCheckBox",props:{id:{},value:{}},emits:["update:checkModelValue"],setup(e,{emit:t}){const n=e,{id:r,value:i}=Ut(n);return(o,s)=>(fe(),ke(Ce,null,[Le("input",{type:"checkbox",id:ne(r),onClick:s[0]||(s[0]=a=>t("update:checkModelValue",ne(i)))},null,8,sw),Le("label",{for:ne(r)},null,8,aw)],64))}});const cw=Xn(lw,[["__scopeId","data-v-02ccc4a8"]]),uw=["checked","name","id","disabled"],fw=Re({__name:"BaseRadio",props:{name:{},modelValue:{},value:{},isDisabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,{name:r,value:i,modelValue:o,isDisabled:s=!1}=Ut(n);return(a,l)=>(fe(),ke("input",{type:"radio",checked:ne(i)==ne(o),name:ne(r),id:ne(i),disabled:ne(s),onClick:l[0]||(l[0]=c=>t("update:modelValue",ne(i)))},null,8,uw))}});const dw=Xn(fw,[["__scopeId","data-v-eeda46bd"]]),pw=["value"],mw=Re({__name:"BaseProgress",props:{value:{}},setup(e){const t=e,{value:n}=Ut(t);return(r,i)=>(fe(),ke("progress",{value:ne(n),max:"100"},null,8,pw))}});const hw=Xn(mw,[["__scopeId","data-v-36d93c7d"]]),gw={class:"table-box"},vw=Re({__name:"BaseTable",setup(e){return(t,n)=>(fe(),ke("div",gw,[Le("table",null,[Le("thead",null,[gn(t.$slots,"thead")]),Le("tbody",null,[gn(t.$slots,"tbody")])])]))}});const{cookies:yw}=yl(),bw={install:e=>{const t=Dp(),n=zp();[K1,J1,ow,cw,dw,hw,vw].forEach(o=>{o.__name&&e.component(o.__name,o)});const i=()=>{yw.remove("token"),n.putUserInfo(null),es.push("/sign-in"),t.emit("update:alert",{isActive:!0,message:"Logout has been processed."})};e.provide("emitter",t),e.provide("authInstance",Y1),e.provide("defaultInstance",Hl),e.provide("signOut",i)}};function Su(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Su(Object(n),!0).forEach(function(r){Ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Su(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function ww(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Eu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _w(e,t,n){return t&&Eu(e.prototype,t),n&&Eu(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ul(e,t){return kw(e)||Ew(e,t)||Mp(e,t)||Aw()}function Oi(e){return xw(e)||Sw(e)||Mp(e)||Cw()}function xw(e){if(Array.isArray(e))return ga(e)}function kw(e){if(Array.isArray(e))return e}function Sw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ew(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Mp(e,t){if(e){if(typeof e=="string")return ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(e,t)}}function ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cu=function(){},Vl={},Bp={},Fp=null,jp={mark:Cu,measure:Cu};try{typeof window<"u"&&(Vl=window),typeof document<"u"&&(Bp=document),typeof MutationObserver<"u"&&(Fp=MutationObserver),typeof performance<"u"&&(jp=performance)}catch{}var Pw=Vl.navigator||{},Au=Pw.userAgent,Pu=Au===void 0?"":Au,wn=Vl,_e=Bp,Ou=Fp,Wi=jp;wn.document;var qt=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",Hp=~Pu.indexOf("MSIE")||~Pu.indexOf("Trident/"),qi,Ki,Xi,Gi,Ji,Bt="___FONT_AWESOME___",va=16,Up="fa",Vp="svg-inline--fa",Un="data-fa-i2svg",ya="data-fa-pseudo-element",Ow="data-fa-pseudo-element-pending",Yl="data-prefix",Wl="data-icon",Tu="fontawesome-i2svg",Tw="async",Rw=["HTML","HEAD","STYLE","SCRIPT"],Yp=function(){try{return!0}catch{return!1}}(),we="classic",Ee="sharp",ql=[we,Ee];function Ti(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[we]}})}var fi=Ti((qi={},Ie(qi,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ie(qi,Ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),qi)),di=Ti((Ki={},Ie(Ki,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ie(Ki,Ee,{solid:"fass",regular:"fasr",light:"fasl"}),Ki)),pi=Ti((Xi={},Ie(Xi,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ie(Xi,Ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Xi)),$w=Ti((Gi={},Ie(Gi,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ie(Gi,Ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Gi)),Nw=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Wp="fa-layers-text",Lw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Iw=Ti((Ji={},Ie(Ji,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ie(Ji,Ee,{900:"fass",400:"fasr",300:"fasl"}),Ji)),qp=[1,2,3,4,5,6,7,8,9,10],Dw=qp.concat([11,12,13,14,15,16,17,18,19,20]),zw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mi=new Set;Object.keys(di[we]).map(mi.add.bind(mi));Object.keys(di[Ee]).map(mi.add.bind(mi));var Mw=[].concat(ql,Oi(mi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rn.GROUP,Rn.SWAP_OPACITY,Rn.PRIMARY,Rn.SECONDARY]).concat(qp.map(function(e){return"".concat(e,"x")})).concat(Dw.map(function(e){return"w-".concat(e)})),qr=wn.FontAwesomeConfig||{};function Bw(e){var t=_e.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Fw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(_e&&typeof _e.querySelector=="function"){var jw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jw.forEach(function(e){var t=Ul(e,2),n=t[0],r=t[1],i=Fw(Bw(n));i!=null&&(qr[r]=i)})}var Kp={styleDefault:"solid",familyDefault:"classic",cssPrefix:Up,replacementClass:Vp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qr.familyPrefix&&(qr.cssPrefix=qr.familyPrefix);var wr=V(V({},Kp),qr);wr.autoReplaceSvg||(wr.observeMutations=!1);var K={};Object.keys(Kp).forEach(function(e){Object.defineProperty(K,e,{enumerable:!0,set:function(n){wr[e]=n,Kr.forEach(function(r){return r(K)})},get:function(){return wr[e]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){wr.cssPrefix=t,Kr.forEach(function(n){return n(K)})},get:function(){return wr.cssPrefix}});wn.FontAwesomeConfig=K;var Kr=[];function Hw(e){return Kr.push(e),function(){Kr.splice(Kr.indexOf(e),1)}}var en=va,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uw(e){if(!(!e||!qt)){var t=_e.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return _e.head.insertBefore(t,r),e}}var Vw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hi(){for(var e=12,t="";e-- >0;)t+=Vw[Math.random()*62|0];return t}function Ar(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kl(e){return e.classList?Ar(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yw(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xp(e[n]),'" ')},"").trim()}function as(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xl(e){return e.size!==wt.size||e.x!==wt.x||e.y!==wt.y||e.rotate!==wt.rotate||e.flipX||e.flipY}function Ww(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function qw(e){var t=e.transform,n=e.width,r=n===void 0?va:n,i=e.height,o=i===void 0?va:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&Hp?l+="translate(".concat(t.x/en-r/2,"em, ").concat(t.y/en-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/en,"em), calc(-50% + ").concat(t.y/en,"em)) "):l+="translate(".concat(t.x/en,"em, ").concat(t.y/en,"em) "),l+="scale(".concat(t.size/en*(t.flipX?-1:1),", ").concat(t.size/en*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Kw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Gp(){var e=Up,t=Vp,n=K.cssPrefix,r=K.replacementClass,i=Kw;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ru=!1;function Ls(){K.autoAddCss&&!Ru&&(Uw(Gp()),Ru=!0)}var Xw={mixout:function(){return{dom:{css:Gp,insertCss:Ls}}},hooks:function(){return{beforeDOMElementCreation:function(){Ls()},beforeI2svg:function(){Ls()}}}},Ft=wn||{};Ft[Bt]||(Ft[Bt]={});Ft[Bt].styles||(Ft[Bt].styles={});Ft[Bt].hooks||(Ft[Bt].hooks={});Ft[Bt].shims||(Ft[Bt].shims=[]);var dt=Ft[Bt],Jp=[],Gw=function e(){_e.removeEventListener("DOMContentLoaded",e),Eo=1,Jp.map(function(t){return t()})},Eo=!1;qt&&(Eo=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Eo||_e.addEventListener("DOMContentLoaded",Gw));function Jw(e){qt&&(Eo?setTimeout(e,0):Jp.push(e))}function Ri(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Xp(e):"<".concat(t," ").concat(Yw(r),">").concat(o.map(Ri).join(""),"</").concat(t,">")}function $u(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zw=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},Is=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?Zw(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[o[0]]):(l=0,u=r);l<s;l++)c=o[l],u=a(u,t[c],c,t);return u};function Qw(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ba(e){var t=Qw(e);return t.length===1?t[0].toString(16):null}function e_(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Nu(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function wa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Nu(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,Nu(t)):dt.styles[e]=V(V({},dt.styles[e]||{}),o),e==="fas"&&wa("fa",t)}var Zi,Qi,eo,ir=dt.styles,t_=dt.shims,n_=(Zi={},Ie(Zi,we,Object.values(pi[we])),Ie(Zi,Ee,Object.values(pi[Ee])),Zi),Gl=null,Zp={},Qp={},em={},tm={},nm={},r_=(Qi={},Ie(Qi,we,Object.keys(fi[we])),Ie(Qi,Ee,Object.keys(fi[Ee])),Qi);function i_(e){return~Mw.indexOf(e)}function o_(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!i_(i)?i:null}var rm=function(){var t=function(o){return Is(ir,function(s,a,l){return s[l]=Is(a,o,{}),s},{})};Zp=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),Qp=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),nm=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in ir||K.autoFetchSvg,r=Is(t_,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});em=r.names,tm=r.unicodes,Gl=ls(K.styleDefault,{family:K.familyDefault})};Hw(function(e){Gl=ls(e.styleDefault,{family:K.familyDefault})});rm();function Jl(e,t){return(Zp[e]||{})[t]}function s_(e,t){return(Qp[e]||{})[t]}function $n(e,t){return(nm[e]||{})[t]}function im(e){return em[e]||{prefix:null,iconName:null}}function a_(e){var t=tm[e],n=Jl("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return Gl}var Zl=function(){return{prefix:null,iconName:null,rest:[]}};function ls(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?we:n,i=fi[r][e],o=di[r][e]||di[r][i],s=e in dt.styles?e:null;return o||s||null}var Lu=(eo={},Ie(eo,we,Object.keys(pi[we])),Ie(eo,Ee,Object.keys(pi[Ee])),eo);function cs(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Ie(t,we,"".concat(K.cssPrefix,"-").concat(we)),Ie(t,Ee,"".concat(K.cssPrefix,"-").concat(Ee)),t),s=null,a=we;(e.includes(o[we])||e.some(function(c){return Lu[we].includes(c)}))&&(a=we),(e.includes(o[Ee])||e.some(function(c){return Lu[Ee].includes(c)}))&&(a=Ee);var l=e.reduce(function(c,u){var f=o_(K.cssPrefix,u);if(ir[u]?(u=n_[a].includes(u)?$w[a][u]:u,s=u,c.prefix=u):r_[a].indexOf(u)>-1?(s=u,c.prefix=ls(u,{family:a})):f?c.iconName=f:u!==K.replacementClass&&u!==o[we]&&u!==o[Ee]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var p=s==="fa"?im(c.iconName):{},h=$n(c.prefix,c.iconName);p.prefix&&(s=null),c.iconName=p.iconName||h||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ir.far&&ir.fas&&!K.autoFetchSvg&&(c.prefix="fas")}return c},Zl());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ee&&(ir.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=$n(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=_n()||"fas"),l}var l_=function(){function e(){ww(this,e),this.definitions={}}return _w(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),s[a]),wa(a,s[a]);var l=pi[we][a];l&&wa(l,s[a]),rm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),e}(),Iu=[],or={},fr={},c_=Object.keys(fr);function u_(e,t){var n=t.mixoutsTo;return Iu=e,or={},Object.keys(fr).forEach(function(r){c_.indexOf(r)===-1&&delete fr[r]}),Iu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),So(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){or[s]||(or[s]=[]),or[s].push(o[s])})}r.provides&&r.provides(fr)}),n}function _a(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=or[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=or[e]||[];i.forEach(function(o){o.apply(null,n)})}function jt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return fr[e]?fr[e].apply(null,t):void 0}function xa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_n();if(t)return t=$n(n,t)||t,$u(om.definitions,n,t)||$u(dt.styles,n,t)}var om=new l_,f_=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Vn("noAuto")},d_={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qt?(Vn("beforeI2svg",t),jt("pseudoElements2svg",t),jt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,Jw(function(){m_({autoReplaceSvgRoot:n}),Vn("watch",t)})}},p_={icon:function(t){if(t===null)return null;if(So(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$n(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ls(t[0]);return{prefix:r,iconName:$n(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(Nw))){var i=cs(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:$n(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=_n();return{prefix:o,iconName:$n(o,t)||t}}}},tt={noAuto:f_,config:K,dom:d_,parse:p_,library:om,findIconDefinition:xa,toHtml:Ri},m_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(dt.styles).length>0||K.autoFetchSvg)&&qt&&K.autoReplaceSvg&&tt.dom.i2svg({node:r})};function us(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ri(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qt){var r=_e.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function h_(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Xl(s)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=as(V(V({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function g_(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(K.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},i),{},{id:s}),children:r}]}]}function Ql(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,h=p===void 0?!1:p,v=r.found?r:n,w=v.width,S=v.height,g=i==="fak",m=[K.replacementClass,o?"".concat(K.cssPrefix,"-").concat(o):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),x={children:[],attributes:V(V({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},_=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};h&&(x.attributes[Un]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||hi())},children:[l]}),delete x.attributes.title);var E=V(V({},x),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:s,symbol:a,styles:V(V({},_),f.styles)}),N=r.found&&n.found?jt("generateAbstractMask",E)||{children:[],attributes:{}}:jt("generateAbstractIcon",E)||{children:[],attributes:{}},$=N.children,C=N.attributes;return E.children=$,E.attributes=C,a?g_(E):h_(E)}function Du(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,c=V(V(V({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(c[Un]="");var u=V({},s.styles);Xl(i)&&(u.transform=qw({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=as(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function v_(e){var t=e.content,n=e.title,r=e.extra,i=V(V(V({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=as(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Ds=dt.styles;function ka(e){var t=e[0],n=e[1],r=e.slice(4),i=Ul(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Rn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Rn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var y_={found:!1,width:512,height:512};function b_(e,t){!Yp&&!K.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Sa(e,t){var n=t;return t==="fa"&&K.styleDefault!==null&&(t=_n()),new Promise(function(r,i){if(jt("missingIconAbstract"),n==="fa"){var o=im(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ds[t]&&Ds[t][e]){var s=Ds[t][e];return r(ka(s))}b_(e,t),r(V(V({},y_),{},{icon:K.showMissingIcons&&e?jt("missingIconAbstract")||{}:{}}))})}var zu=function(){},Ea=K.measurePerformance&&Wi&&Wi.mark&&Wi.measure?Wi:{mark:zu,measure:zu},Dr='FA "6.4.2"',w_=function(t){return Ea.mark("".concat(Dr," ").concat(t," begins")),function(){return sm(t)}},sm=function(t){Ea.mark("".concat(Dr," ").concat(t," ends")),Ea.measure("".concat(Dr," ").concat(t),"".concat(Dr," ").concat(t," begins"),"".concat(Dr," ").concat(t," ends"))},ec={begin:w_,end:sm},co=function(){};function Mu(e){var t=e.getAttribute?e.getAttribute(Un):null;return typeof t=="string"}function __(e){var t=e.getAttribute?e.getAttribute(Yl):null,n=e.getAttribute?e.getAttribute(Wl):null;return t&&n}function x_(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function k_(){if(K.autoReplaceSvg===!0)return uo.replace;var e=uo[K.autoReplaceSvg];return e||uo.replace}function S_(e){return _e.createElementNS("http://www.w3.org/2000/svg",e)}function E_(e){return _e.createElement(e)}function am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?S_:E_:n;if(typeof e=="string")return _e.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(am(s,{ceFn:r}))}),i}function C_(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var uo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(am(i),n)}),n.getAttribute(Un)===null&&K.keepOriginalSource){var r=_e.createComment(C_(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Kl(n).indexOf(K.replacementClass))return uo.replace(t);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===K.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Ri(a)}).join(`
`);n.setAttribute(Un,""),n.innerHTML=s}};function Bu(e){e()}function lm(e,t){var n=typeof t=="function"?t:co;if(e.length===0)n();else{var r=Bu;K.mutateApproach===Tw&&(r=wn.requestAnimationFrame||Bu),r(function(){var i=k_(),o=ec.begin("mutate");e.map(i),o(),n()})}}var tc=!1;function cm(){tc=!0}function Ca(){tc=!1}var Co=null;function Fu(e){if(Ou&&K.observeMutations){var t=e.treeCallback,n=t===void 0?co:t,r=e.nodeCallback,i=r===void 0?co:r,o=e.pseudoElementsCallback,s=o===void 0?co:o,a=e.observeMutationsRoot,l=a===void 0?_e:a;Co=new Ou(function(c){if(!tc){var u=_n();Ar(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Mu(f.addedNodes[0])&&(K.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&K.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Mu(f.target)&&~zw.indexOf(f.attributeName))if(f.attributeName==="class"&&__(f.target)){var p=cs(Kl(f.target)),h=p.prefix,v=p.iconName;f.target.setAttribute(Yl,h||u),v&&f.target.setAttribute(Wl,v)}else x_(f.target)&&i(f.target)})}}),qt&&Co.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function A_(){Co&&Co.disconnect()}function P_(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function O_(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=cs(Kl(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=s_(i.prefix,e.innerText)||Jl(i.prefix,ba(e.innerText))),!i.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function T_(e){var t=Ar(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return K.autoA11y&&(n?t["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||hi()):(t["aria-hidden"]="true",t.focusable="false")),t}function R_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ju(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=O_(e),r=n.iconName,i=n.prefix,o=n.rest,s=T_(e),a=_a("parseNodeAttributes",{},e),l=t.styleParser?P_(e):[];return V({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var $_=dt.styles;function um(e){var t=K.autoReplaceSvg==="nest"?ju(e,{styleParser:!1}):ju(e);return~t.extra.classes.indexOf(Wp)?jt("generateLayersText",e,t):jt("generateSvgReplacementMutation",e,t)}var xn=new Set;ql.map(function(e){xn.add("fa-".concat(e))});Object.keys(fi[we]).map(xn.add.bind(xn));Object.keys(fi[Ee]).map(xn.add.bind(xn));xn=Oi(xn);function Hu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qt)return Promise.resolve();var n=_e.documentElement.classList,r=function(f){return n.add("".concat(Tu,"-").concat(f))},i=function(f){return n.remove("".concat(Tu,"-").concat(f))},o=K.autoFetchSvg?xn:ql.map(function(u){return"fa-".concat(u)}).concat(Object.keys($_));o.includes("fa")||o.push("fa");var s=[".".concat(Wp,":not([").concat(Un,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(Un,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Ar(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ec.begin("onTree"),c=a.reduce(function(u,f){try{var p=um(f);p&&u.push(p)}catch(h){Yp||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(p){lm(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),f(p)})})}function N_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;um(e).then(function(n){n&&lm([n],t)})}function L_(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:xa(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xa(i||{})),e(r,V(V({},n),{},{mask:i}))}}var I_=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,p=f===void 0?null:f,h=n.titleId,v=h===void 0?null:h,w=n.classes,S=w===void 0?[]:w,g=n.attributes,m=g===void 0?{}:g,x=n.styles,_=x===void 0?{}:x;if(t){var E=t.prefix,N=t.iconName,$=t.icon;return us(V({type:"icon"},t),function(){return Vn("beforeDOMElementCreation",{iconDefinition:t,params:n}),K.autoA11y&&(p?m["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(v||hi()):(m["aria-hidden"]="true",m.focusable="false")),Ql({icons:{main:ka($),mask:l?ka(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:N,transform:V(V({},wt),i),symbol:s,title:p,maskId:u,titleId:v,extra:{attributes:m,styles:_,classes:S}})})}},D_={mixout:function(){return{icon:L_(I_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hu,n.nodeCallback=N_,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,o=n.callback,s=o===void 0?function(){}:o;return Hu(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(h,v){Promise.all([Sa(i,a),u.iconName?Sa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=Ul(w,2),g=S[0],m=S[1];h([n,Ql({icons:{main:g,mask:m},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:o,titleId:s,extra:p,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=as(a);l.length>0&&(i.style=l);var c;return Xl(s)&&(c=jt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},z_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return us({type:"layer"},function(){Vn("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Oi(o)).join(" ")},children:s}]})}}}},M_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return us({type:"counter",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),v_({content:n.toString(),title:o,extra:{attributes:c,styles:f,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Oi(a))}})})}}}},B_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?wt:i,s=r.title,a=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,p=r.styles,h=p===void 0?{}:p;return us({type:"text",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),Du({content:n,transform:V(V({},wt),o),title:a,extra:{attributes:f,styles:h,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Oi(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(Hp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return K.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Du({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},F_=new RegExp('"',"ug"),Uu=[1105920,1112319];function j_(e){var t=e.replace(F_,""),n=e_(t,0),r=n>=Uu[0]&&n<=Uu[1],i=t.length===2?t[0]===t[1]:!1;return{value:ba(i?t[0]:t),isSecondary:r||i}}function Vu(e,t){var n="".concat(Ow).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Ar(e.children),s=o.filter(function($){return $.getAttribute(ya)===t})[0],a=wn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(Lw),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?Ee:we,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?di[p][l[2].toLowerCase()]:Iw[p][c],v=j_(f),w=v.value,S=v.isSecondary,g=l[0].startsWith("FontAwesome"),m=Jl(h,w),x=m;if(g){var _=a_(w);_.iconName&&_.prefix&&(m=_.iconName,h=_.prefix)}if(m&&!S&&(!s||s.getAttribute(Yl)!==h||s.getAttribute(Wl)!==x)){e.setAttribute(n,x),s&&e.removeChild(s);var E=R_(),N=E.extra;N.attributes[ya]=t,Sa(m,h).then(function($){var C=Ql(V(V({},E),{},{icons:{main:$,mask:Zl()},prefix:h,iconName:x,extra:N,watchable:!0})),T=_e.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=C.map(function(D){return Ri(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function H_(e){return Promise.all([Vu(e,"::before"),Vu(e,"::after")])}function U_(e){return e.parentNode!==document.head&&!~Rw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ya)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yu(e){if(qt)return new Promise(function(t,n){var r=Ar(e.querySelectorAll("*")).filter(U_).map(H_),i=ec.begin("searchPseudoElements");cm(),Promise.all(r).then(function(){i(),Ca(),t()}).catch(function(){i(),Ca(),n()})})}var V_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yu,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;K.searchPseudoElements&&Yu(i)}}},Wu=!1,Y_={mixout:function(){return{dom:{unwatch:function(){cm(),Wu=!0}}}},hooks:function(){return{bootstrap:function(){Fu(_a("mutationObserverCallbacks",{}))},noAuto:function(){A_()},watch:function(n){var r=n.observeMutationsRoot;Wu?Ca():Fu(_a("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},qu=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},W_={mixout:function(){return{parse:{transform:function(n){return qu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=qu(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(s/2*-1," -256)")},h={outer:a,inner:f,path:p};return{tag:"g",attributes:V({},h.outer),children:[{tag:"g",attributes:V({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:V(V({},r.icon.attributes),h.path)}]}]}}}},zs={x:0,y:0,width:"100%",height:"100%"};function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function q_(e){return e.tag==="g"?e.children:[e]}var K_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?cs(i.split(" ").map(function(s){return s.trim()})):Zl();return o.prefix||(o.prefix=_n()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,c=o.width,u=o.icon,f=s.width,p=s.icon,h=Ww({transform:l,containerWidth:f,iconWidth:c}),v={tag:"rect",attributes:V(V({},zs),{},{fill:"white"})},w=u.children?{children:u.children.map(Ku)}:{},S={tag:"g",attributes:V({},h.inner),children:[Ku(V({tag:u.tag,attributes:V(V({},u.attributes),h.path)},w))]},g={tag:"g",attributes:V({},h.outer),children:[S]},m="mask-".concat(a||hi()),x="clip-".concat(a||hi()),_={tag:"mask",attributes:V(V({},zs),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:q_(p)},_]};return r.push(E,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(m,")")},zs)}),{children:r,attributes:i}}}},X_={provides:function(t){var n=!1;wn.matchMedia&&(n=wn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:V(V({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=V(V({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:V(V({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:V(V({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},G_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},J_=[Xw,D_,z_,M_,B_,V_,Y_,W_,K_,X_,G_];u_(J_,{mixoutsTo:tt});tt.noAuto;tt.config;var Z_=tt.library;tt.dom;var Aa=tt.parse;tt.findIconDefinition;tt.toHtml;var Q_=tt.icon;tt.layer;tt.text;tt.counter;function Xu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xu(Object(n),!0).forEach(function(r){We(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ao(e)}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ex(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tx(e,t){if(e==null)return{};var n=ex(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var nx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fm={exports:{}};(function(e){(function(t){var n=function(g,m,x){if(!c(m)||f(m)||p(m)||h(m)||l(m))return m;var _,E=0,N=0;if(u(m))for(_=[],N=m.length;E<N;E++)_.push(n(g,m[E],x));else{_={};for(var $ in m)Object.prototype.hasOwnProperty.call(m,$)&&(_[g($,x)]=n(g,m[$],x))}return _},r=function(g,m){m=m||{};var x=m.separator||"_",_=m.split||/(?=[A-Z])/;return g.split(_).join(x)},i=function(g){return v(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(m,x){return x?x.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},o=function(g){var m=i(g);return m.substr(0,1).toUpperCase()+m.substr(1)},s=function(g,m){return r(g,m).toLowerCase()},a=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return a.call(g)=="[object Array]"},f=function(g){return a.call(g)=="[object Date]"},p=function(g){return a.call(g)=="[object RegExp]"},h=function(g){return a.call(g)=="[object Boolean]"},v=function(g){return g=g-0,g===g},w=function(g,m){var x=m&&"process"in m?m.process:m;return typeof x!="function"?g:function(_,E){return x(_,g,E)}},S={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(g,m){return n(w(i,m),g)},decamelizeKeys:function(g,m){return n(w(s,m),g,m)},pascalizeKeys:function(g,m){return n(w(o,m),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(nx)})(fm);var rx=fm.exports,ix=["class","style"];function ox(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=rx.camelize(n.slice(0,r)),o=n.slice(r+1).trim();return t[i]=o,t},{})}function sx(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function dm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return dm(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=sx(u);break;case"style":l.style=ox(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var o=n.style,s=o===void 0?{}:o,a=tx(n,ix);return Er(e.tag,$t($t($t({},t),{},{class:i.class,style:$t($t({},i.style),s)},i.attrs),a),r)}var pm=!1;try{pm=!0}catch{}function ax(){if(!pm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ms(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?We({},e,t):{}}function lx(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},We(t,"fa-".concat(e.size),e.size!==null),We(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),We(t,"fa-pull-".concat(e.pull),e.pull!==null),We(t,"fa-swap-opacity",e.swapOpacity),We(t,"fa-bounce",e.bounce),We(t,"fa-shake",e.shake),We(t,"fa-beat",e.beat),We(t,"fa-fade",e.fade),We(t,"fa-beat-fade",e.beatFade),We(t,"fa-flash",e.flash),We(t,"fa-spin-pulse",e.spinPulse),We(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gu(e){if(e&&Ao(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Aa.icon)return Aa.icon(e);if(e===null)return null;if(Ao(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var cx=Re({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Ne(function(){return Gu(t.icon)}),o=Ne(function(){return Ms("classes",lx(t))}),s=Ne(function(){return Ms("transform",typeof t.transform=="string"?Aa.transform(t.transform):t.transform)}),a=Ne(function(){return Ms("mask",Gu(t.mask))}),l=Ne(function(){return Q_(i.value,$t($t($t($t({},o.value),s.value),a.value),{},{symbol:t.symbol,title:t.title}))});ot(l,function(u){if(!u)return ax("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=Ne(function(){return l.value?dm(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ux={prefix:"fas",iconName:"circle-minus",icon:[512,512,["minus-circle"],"f056","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},fx={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},dx={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]},px={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},mx={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},hx={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},gx={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},vx={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},yx={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},bx={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},wx={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},_x={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};Z_.add(hx,px,dx,mx,yx,vx,gx,_x,ux,wx,bx,fx);var fs={library:"https://accounts.google.com/gsi/client",defaultButtonConfig:{theme:"outline",size:"large"},scopes:"email profile openid"};const Ve=Ht({clientId:null,popupType:"CODE",prompt:!1,autoLogin:!1,idConfiguration:null,buttonConfig:fs.defaultButtonConfig,callback:()=>{},error:null}),zn=Ht({apiLoaded:!1,apiLoadIntitited:!1}),mm=new Promise(e=>{const t=typeof window<"u";if(!zn.apiLoadIntitited&&t){const n=document.createElement("script");zn.apiLoadIntitited=!0,n.addEventListener("load",()=>{zn.apiLoaded=!0,e(window.google)}),n.src=fs.library,n.async=!0,n.defer=!0,document.head.appendChild(n)}}),ds=e=>{zn.apiLoadIntitited?zn.apiLoaded?e(window.google):ot(()=>zn.apiLoaded,t=>{t&&e(window.google)}):mm.then(t=>{e(t)})},xx=(e,t,n,r)=>{if(!e.client_id)throw new Error("Prop client id required since plugin is not initialized with a client id");ds(()=>{((i,o,s,a,l)=>{if(l){const u=i.callback;i.callback=f=>{f.credential?u&&u(f):l(f)}}window.google.accounts.id.initialize(i);const c=o.value;c&&!a&&window.google.accounts.id.renderButton(c,s)})(e,t,n.buttonConfig,r,n.error),n.prompt&&Ex({clientId:n.clientId,callback:n.callback,error:n.error,autoLogin:n.autoLogin})})},kx=e=>new Promise((t,n)=>{ds(r=>{if(!(e&&e.clientId||Ve.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");r.accounts.oauth2.initCodeClient({client_id:e&&e.clientId||Ve.clientId||"",scope:fs.scopes,ux_mode:"popup",callback:i=>{i.code?t(i):n(i)},error_callback:i=>{n(i)}}).requestCode()})}),Sx=e=>new Promise((t,n)=>{ds(r=>{if(!(e&&e.clientId||Ve.clientId))throw new Error("clientId is required since the plugin is not initialized with a Client Id");r.accounts.oauth2.initTokenClient({client_id:e&&e.clientId||Ve.clientId||"",scope:fs.scopes,callback:i=>{i.access_token?t(i):n(i)},error_callback:i=>{n(i)}}).requestAccessToken()})}),Ex=e=>{if(!e&&(e={}),!e.clientId&&!Ve.clientId)throw new Error("clientId is required");const t={};return e.clientId&&(t.client_id=e.clientId),!e.clientId&&Ve.clientId&&(t.client_id=Ve.clientId),e.context&&(t.context=e.context),e.autoLogin!=null&&(t.auto_select=e.autoLogin),e.cancelOnTapOutside!=null&&(t.cancel_on_tap_outside=e.cancelOnTapOutside),new Promise((n,r)=>{t.callback=i=>{e&&e.callback&&e.callback(i),i.credential?n(i):r(i)},ds(i=>{i.accounts.id.initialize(t),i.accounts.id.prompt(o=>{e&&e.onNotification&&e.onNotification(o),(s=>{const a=s.notification;let l="";a.isNotDisplayed()&&(l=a.getNotDisplayedReason()==="suppressed_by_user"?"Prompt was suppressed by user'. Refer https://developers.google.com/identity/gsi/web/guides/features#exponential_cooldown for more info":`Prompt was not displayed, reason for not displaying: ${a.getNotDisplayedReason()}`),a.isSkippedMoment()&&(l=`Prompt was skipped, reason for skipping: ${a.getSkippedReason()}`),l.length&&(s.error?s.error(l):s.reject(l))})({notification:o,reject:r,error:e&&e.error})})})})};var Pa=Re({__name:"GoogleLogin",props:{clientId:{type:String,required:!1},prompt:{type:Boolean,required:!1,default:!1},autoLogin:{type:Boolean,required:!1,default:!1},popupType:{type:String,required:!1},idConfiguration:{type:Object,required:!1},buttonConfig:{type:Object,required:!1},callback:{type:Function,required:!1},error:{type:Function,required:!1}},setup(e){const t=e,n=!!dd().default,r=((s,a)=>{const l={...s};for(const c in a)a[c]!==void 0&&a[c]!==null&&(l[c]=a[c]);return l})(Ve,t),i={client_id:r.clientId||null,auto_select:r.autoLogin||!1,callback:r.callback,...r.idConfiguration},o=Oe();return Kn(()=>{xx(i,o,r,n),t.popupType&&!n&&console.warn("Option 'popupType' is ignored since a slot which act as a custom login button was not found!!!")}),(s,a)=>(fe(),ke("div",{class:Et(["g-btn-wrapper",[!ne(zn).apiLoaded&&"api-loading"]]),onClick:a[0]||(a[0]=l=>ne(n)&&void(ne(r).popupType==="TOKEN"?Sx({clientId:r.clientId}).then(c=>{r.callback&&r.callback(c)}).catch(c=>{r.error&&r.error(c)}):kx({clientId:r.clientId}).then(c=>{r.callback&&r.callback(c)}).catch(c=>{r.error&&r.error(c)})))},[ne(n)?It("v-if",!0):(fe(),ke("span",{key:0,ref_key:"buttonRef",ref:o,class:"g-btn"},null,512)),gn(s.$slots,"default")],2))}});(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(`
.g-btn-wrapper[data-v-5e610566] {
  display: inline-block;
}
.g-btn-wrapper.api-loading[data-v-5e610566] {
  opacity: 0.5;
  pointer-events: none;
}
`),Pa.__scopeId="data-v-5e610566",Pa.__file="src/plugin/GoogleLogin.vue";var Cx={install:(e,t)=>{t&&(n=>{n.clientId&&(Ve.clientId=n.clientId),n.popupType&&(Ve.popupType=n.popupType),n.prompt!=null&&(Ve.prompt=n.prompt),n.autoLogin!=null&&(Ve.autoLogin=n.autoLogin),n.idConfiguration&&(Ve.idConfiguration=n.idConfiguration),n.buttonConfig&&(Ve.buttonConfig=n.buttonConfig),n.callback&&(Ve.callback=n.callback)})(t),mm.then(()=>{if(t.clientId){const n={client_id:t.clientId,auto_select:t.autoLogin===!0,callback:t.callback,...t.idConfiguration};window.google.accounts.id.initialize(n),t.prompt&&window.google.accounts.id.prompt()}}),e.component("GoogleLogin",Pa)}};const Ax=["top","right","bottom","left"],Ju=["start","end"],Zu=Ax.reduce((e,t)=>e.concat(t,t+"-"+Ju[0],t+"-"+Ju[1]),[]),gi=Math.min,An=Math.max,Px={left:"right",right:"left",bottom:"top",top:"bottom"},Ox={start:"end",end:"start"};function Oa(e,t,n){return An(e,gi(t,n))}function Gn(e,t){return typeof e=="function"?e(t):e}function St(e){return e.split("-")[0]}function mt(e){return e.split("-")[1]}function hm(e){return e==="x"?"y":"x"}function nc(e){return e==="y"?"height":"width"}function $i(e){return["top","bottom"].includes(St(e))?"y":"x"}function rc(e){return hm($i(e))}function gm(e,t,n){n===void 0&&(n=!1);const r=mt(e),i=rc(e),o=nc(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Oo(s)),[s,Oo(s)]}function Tx(e){const t=Oo(e);return[Po(e),t,Po(t)]}function Po(e){return e.replace(/start|end/g,t=>Ox[t])}function Rx(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:s;default:return[]}}function $x(e,t,n,r){const i=mt(e);let o=Rx(St(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(Po)))),o}function Oo(e){return e.replace(/left|right|bottom|top/g,t=>Px[t])}function Nx(e){return{top:0,right:0,bottom:0,left:0,...e}}function vm(e){return typeof e!="number"?Nx(e):{top:e,right:e,bottom:e,left:e}}function Xr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Qu(e,t,n){let{reference:r,floating:i}=e;const o=$i(t),s=rc(t),a=nc(s),l=St(t),c=o==="y",u=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let h;switch(l){case"top":h={x:u,y:r.y-i.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:f};break;case"left":h={x:r.x-i.width,y:f};break;default:h={x:r.x,y:r.y}}switch(mt(t)){case"start":h[s]-=p*(n&&c?-1:1);break;case"end":h[s]+=p*(n&&c?-1:1);break}return h}const Lx=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=Qu(c,r,l),p=r,h={},v=0;for(let w=0;w<a.length;w++){const{name:S,fn:g}=a[w],{x:m,y:x,data:_,reset:E}=await g({x:u,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:c,platform:s,elements:{reference:e,floating:t}});if(u=m??u,f=x??f,h={...h,[S]:{...h[S],..._}},E&&v<=50){v++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(c=E.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):E.rects),{x:u,y:f}=Qu(c,p,l)),w=-1;continue}}return{x:u,y:f,placement:p,strategy:i,middlewareData:h}};async function ps(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:h=0}=Gn(t,e),v=vm(h),S=a[p?f==="floating"?"reference":"floating":f],g=Xr(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(S)))==null||n?S:S.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),m=f==="floating"?{...s.floating,x:r,y:i}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),_=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},E=Xr(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:x,strategy:l}):m);return{top:(g.top-E.top+v.top)/_.y,bottom:(E.bottom-g.bottom+v.bottom)/_.y,left:(g.left-E.left+v.left)/_.x,right:(E.right-g.right+v.right)/_.x}}const Ix=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Gn(e,t)||{};if(c==null)return{};const f=vm(u),p={x:n,y:r},h=rc(i),v=nc(h),w=await s.getDimensions(c),S=h==="y",g=S?"top":"left",m=S?"bottom":"right",x=S?"clientHeight":"clientWidth",_=o.reference[v]+o.reference[h]-p[h]-o.floating[v],E=p[h]-o.reference[h],N=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let $=N?N[x]:0;(!$||!await(s.isElement==null?void 0:s.isElement(N)))&&($=a.floating[x]||o.floating[v]);const C=_/2-E/2,T=$/2-w[v]/2-1,D=gi(f[g],T),H=gi(f[m],T),z=D,X=$-w[v]-H,B=$/2-w[v]/2+C,ie=Oa(z,B,X),G=!l.arrow&&mt(i)!=null&&B!=ie&&o.reference[v]/2-(B<z?D:H)-w[v]/2<0,re=G?B<z?B-z:B-X:0;return{[h]:p[h]+re,data:{[h]:ie,centerOffset:B-ie-re,...G&&{alignmentOffset:re}},reset:G}}});function Dx(e,t,n){return(e?[...n.filter(i=>mt(i)===e),...n.filter(i=>mt(i)!==e)]:n.filter(i=>St(i)===i)).filter(i=>e?mt(i)===e||(t?Po(i)!==i:!1):!0)}const zx=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var n,r,i;const{rects:o,middlewareData:s,placement:a,platform:l,elements:c}=t,{crossAxis:u=!1,alignment:f,allowedPlacements:p=Zu,autoAlignment:h=!0,...v}=Gn(e,t),w=f!==void 0||p===Zu?Dx(f||null,h,p):p,S=await ps(t,v),g=((n=s.autoPlacement)==null?void 0:n.index)||0,m=w[g];if(m==null)return{};const x=gm(m,o,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==m)return{reset:{placement:w[0]}};const _=[S[St(m)],S[x[0]],S[x[1]]],E=[...((r=s.autoPlacement)==null?void 0:r.overflows)||[],{placement:m,overflows:_}],N=w[g+1];if(N)return{data:{index:g+1,overflows:E},reset:{placement:N}};const $=E.map(D=>{const H=mt(D.placement);return[D.placement,H&&u?D.overflows.slice(0,2).reduce((z,X)=>z+X,0):D.overflows[0],D.overflows]}).sort((D,H)=>D[1]-H[1]),T=((i=$.filter(D=>D[2].slice(0,mt(D[0])?2:3).every(H=>H<=0))[0])==null?void 0:i[0])||$[0][0];return T!==a?{data:{index:g+1,overflows:E},reset:{placement:T}}:{}}}},Mx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...S}=Gn(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const g=St(i),m=St(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=p||(m||!w?[Oo(a)]:Tx(a));!p&&v!=="none"&&_.push(...$x(a,w,v,x));const E=[a,..._],N=await ps(t,S),$=[];let C=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&$.push(N[g]),f){const z=gm(i,s,x);$.push(N[z[0]],N[z[1]])}if(C=[...C,{placement:i,overflows:$}],!$.every(z=>z<=0)){var T,D;const z=(((T=o.flip)==null?void 0:T.index)||0)+1,X=E[z];if(X)return{data:{index:z,overflows:C},reset:{placement:X}};let B=(D=C.filter(ie=>ie.overflows[0]<=0).sort((ie,G)=>ie.overflows[1]-G.overflows[1])[0])==null?void 0:D.placement;if(!B)switch(h){case"bestFit":{var H;const ie=(H=C.map(G=>[G.placement,G.overflows.filter(re=>re>0).reduce((re,ue)=>re+ue,0)]).sort((G,re)=>G[1]-re[1])[0])==null?void 0:H[0];ie&&(B=ie);break}case"initialPlacement":B=a;break}if(i!==B)return{reset:{placement:B}}}return{}}}};async function Bx(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=St(n),a=mt(n),l=$i(n)==="y",c=["left","top"].includes(s)?-1:1,u=o&&l?-1:1,f=Gn(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof v=="number"&&(h=a==="end"?v*-1:v),l?{x:h*u,y:p*c}:{x:p*c,y:h*u}}const Fx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await Bx(t,e);return{x:n+i.x,y:r+i.y,data:i}}}},jx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:S=>{let{x:g,y:m}=S;return{x:g,y:m}}},...l}=Gn(e,t),c={x:n,y:r},u=await ps(t,l),f=$i(St(i)),p=hm(f);let h=c[p],v=c[f];if(o){const S=p==="y"?"top":"left",g=p==="y"?"bottom":"right",m=h+u[S],x=h-u[g];h=Oa(m,h,x)}if(s){const S=f==="y"?"top":"left",g=f==="y"?"bottom":"right",m=v+u[S],x=v-u[g];v=Oa(m,v,x)}const w=a.fn({...t,[p]:h,[f]:v});return{...w,data:{x:w.x-n,y:w.y-r}}}}},Hx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:i,elements:o}=t,{apply:s=()=>{},...a}=Gn(e,t),l=await ps(t,a),c=St(n),u=mt(n),f=$i(n)==="y",{width:p,height:h}=r.floating;let v,w;c==="top"||c==="bottom"?(v=c,w=u===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(w=c,v=u==="end"?"top":"bottom");const S=h-l[v],g=p-l[w],m=!t.middlewareData.shift;let x=S,_=g;if(f){const N=p-l.left-l.right;_=u||m?gi(g,N):N}else{const N=h-l.top-l.bottom;x=u||m?gi(S,N):N}if(m&&!u){const N=An(l.left,0),$=An(l.right,0),C=An(l.top,0),T=An(l.bottom,0);f?_=p-2*(N!==0||$!==0?N+$:An(l.left,l.right)):x=h-2*(C!==0||T!==0?C+T:An(l.top,l.bottom))}await s({...t,availableWidth:_,availableHeight:x});const E=await i.getDimensions(o.floating);return p!==E.width||h!==E.height?{reset:{rects:!0}}:{}}}};function it(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _t(e){return it(e).getComputedStyle(e)}const ef=Math.min,Gr=Math.max,To=Math.round;function ym(e){const t=_t(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,o=e.offsetHeight,s=To(n)!==i||To(r)!==o;return s&&(n=i,r=o),{width:n,height:r,fallback:s}}function kn(e){return wm(e)?(e.nodeName||"").toLowerCase():""}let to;function bm(){if(to)return to;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(to=e.brands.map(t=>t.brand+"/"+t.version).join(" "),to):navigator.userAgent}function xt(e){return e instanceof it(e).HTMLElement}function fn(e){return e instanceof it(e).Element}function wm(e){return e instanceof it(e).Node}function tf(e){return typeof ShadowRoot>"u"?!1:e instanceof it(e).ShadowRoot||e instanceof ShadowRoot}function ms(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=_t(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Ux(e){return["table","td","th"].includes(kn(e))}function Ta(e){const t=/firefox/i.test(bm()),n=_t(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const o=n.contain;return o!=null&&o.includes(i)})}function _m(){return!/^((?!chrome|android).)*safari/i.test(bm())}function ic(e){return["html","body","#document"].includes(kn(e))}function xm(e){return fn(e)?e:e.contextElement}const km={x:1,y:1};function dr(e){const t=xm(e);if(!xt(t))return km;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:o}=ym(t);let s=(o?To(n.width):n.width)/r,a=(o?To(n.height):n.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}function vi(e,t,n,r){var i,o;t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),a=xm(e);let l=km;t&&(r?fn(r)&&(l=dr(r)):l=dr(e));const c=a?it(a):window,u=!_m()&&n;let f=(s.left+(u&&((i=c.visualViewport)==null?void 0:i.offsetLeft)||0))/l.x,p=(s.top+(u&&((o=c.visualViewport)==null?void 0:o.offsetTop)||0))/l.y,h=s.width/l.x,v=s.height/l.y;if(a){const w=it(a),S=r&&fn(r)?it(r):r;let g=w.frameElement;for(;g&&r&&S!==w;){const m=dr(g),x=g.getBoundingClientRect(),_=getComputedStyle(g);x.x+=(g.clientLeft+parseFloat(_.paddingLeft))*m.x,x.y+=(g.clientTop+parseFloat(_.paddingTop))*m.y,f*=m.x,p*=m.y,h*=m.x,v*=m.y,f+=x.x,p+=x.y,g=it(g).frameElement}}return{width:h,height:v,top:p,right:f+h,bottom:p+v,left:f,x:f,y:p}}function dn(e){return((wm(e)?e.ownerDocument:e.document)||window.document).documentElement}function hs(e){return fn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Sm(e){return vi(dn(e)).left+hs(e).scrollLeft}function yi(e){if(kn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||tf(e)&&e.host||dn(e);return tf(t)?t.host:t}function Em(e){const t=yi(e);return ic(t)?t.ownerDocument.body:xt(t)&&ms(t)?t:Em(t)}function Ro(e,t){var n;t===void 0&&(t=[]);const r=Em(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),o=it(r);return i?t.concat(o,o.visualViewport||[],ms(r)?r:[]):t.concat(r,Ro(r))}function nf(e,t,n){return t==="viewport"?Xr(function(r,i){const o=it(r),s=dn(r),a=o.visualViewport;let l=s.clientWidth,c=s.clientHeight,u=0,f=0;if(a){l=a.width,c=a.height;const p=_m();(p||!p&&i==="fixed")&&(u=a.offsetLeft,f=a.offsetTop)}return{width:l,height:c,x:u,y:f}}(e,n)):fn(t)?Xr(function(r,i){const o=vi(r,!0,i==="fixed"),s=o.top+r.clientTop,a=o.left+r.clientLeft,l=xt(r)?dr(r):{x:1,y:1};return{width:r.clientWidth*l.x,height:r.clientHeight*l.y,x:a*l.x,y:s*l.y}}(t,n)):Xr(function(r){const i=dn(r),o=hs(r),s=r.ownerDocument.body,a=Gr(i.scrollWidth,i.clientWidth,s.scrollWidth,s.clientWidth),l=Gr(i.scrollHeight,i.clientHeight,s.scrollHeight,s.clientHeight);let c=-o.scrollLeft+Sm(r);const u=-o.scrollTop;return _t(s).direction==="rtl"&&(c+=Gr(i.clientWidth,s.clientWidth)-a),{width:a,height:l,x:c,y:u}}(dn(e)))}function rf(e){return xt(e)&&_t(e).position!=="fixed"?e.offsetParent:null}function of(e){const t=it(e);let n=rf(e);for(;n&&Ux(n)&&_t(n).position==="static";)n=rf(n);return n&&(kn(n)==="html"||kn(n)==="body"&&_t(n).position==="static"&&!Ta(n))?t:n||function(r){let i=yi(r);for(;xt(i)&&!ic(i);){if(Ta(i))return i;i=yi(i)}return null}(e)||t}function Vx(e,t,n){const r=xt(t),i=dn(t),o=vi(e,!0,n==="fixed",t);let s={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&n!=="fixed")if((kn(t)!=="body"||ms(i))&&(s=hs(t)),xt(t)){const l=vi(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}else i&&(a.x=Sm(i));return{x:o.left+s.scrollLeft-a.x,y:o.top+s.scrollTop-a.y,width:o.width,height:o.height}}const Yx={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=n==="clippingAncestors"?function(c,u){const f=u.get(c);if(f)return f;let p=Ro(c).filter(S=>fn(S)&&kn(S)!=="body"),h=null;const v=_t(c).position==="fixed";let w=v?yi(c):c;for(;fn(w)&&!ic(w);){const S=_t(w),g=Ta(w);(v?g||h:g||S.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=S:p=p.filter(m=>m!==w),w=yi(w)}return u.set(c,p),p}(t,this._c):[].concat(n),s=[...o,r],a=s[0],l=s.reduce((c,u)=>{const f=nf(t,u,i);return c.top=Gr(f.top,c.top),c.right=ef(f.right,c.right),c.bottom=ef(f.bottom,c.bottom),c.left=Gr(f.left,c.left),c},nf(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=xt(n),o=dn(n);if(n===o)return t;let s={scrollLeft:0,scrollTop:0},a={x:1,y:1};const l={x:0,y:0};if((i||!i&&r!=="fixed")&&((kn(n)!=="body"||ms(o))&&(s=hs(n)),xt(n))){const c=vi(n);a=dr(n),l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+l.x,y:t.y*a.y-s.scrollTop*a.y+l.y}},isElement:fn,getDimensions:function(e){return xt(e)?ym(e):e.getBoundingClientRect()},getOffsetParent:of,getDocumentElement:dn,getScale:dr,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||of,o=this.getDimensions;return{reference:Vx(t,await i(n),r),floating:{x:0,y:0,...await o(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>_t(e).direction==="rtl"},Wx=(e,t,n)=>{const r=new Map,i={platform:Yx,...n},o={...i.platform,_c:r};return Lx(e,t,{...i,platform:o})};function Cm(e,t){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(typeof t[n]=="object"&&e[n]?Cm(e[n],t[n]):e[n]=t[n])}const zt={disabled:!1,distance:5,skidding:0,container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",preventOverflow:!0,flip:!0,shift:!0,overflowPadding:0,arrowPadding:0,arrowOverflow:!0,themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:e=>[...e,"click"],delay:{show:200,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["click"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}};function bi(e,t){let n=zt.themes[e]||{},r;do r=n[t],typeof r>"u"?n.$extend?n=zt.themes[n.$extend]||{}:(n=null,r=zt[t]):n=null;while(n);return r}function qx(e){const t=[e];let n=zt.themes[e]||{};do n.$extend&&!n.$resetCss?(t.push(n.$extend),n=zt.themes[n.$extend]||{}):n=null;while(n);return t.map(r=>`v-popper--theme-${r}`)}function sf(e){const t=[e];let n=zt.themes[e]||{};do n.$extend?(t.push(n.$extend),n=zt.themes[n.$extend]||{}):n=null;while(n);return t}let Yn=!1;if(typeof window<"u"){Yn=!1;try{const e=Object.defineProperty({},"passive",{get(){Yn=!0}});window.addEventListener("test",null,e)}catch{}}let Am=!1;typeof window<"u"&&typeof navigator<"u"&&(Am=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);const Pm=["auto","top","bottom","left","right"].reduce((e,t)=>e.concat([t,`${t}-start`,`${t}-end`]),[]),af={hover:"mouseenter",focus:"focus",click:"click",touch:"touchstart",pointer:"pointerdown"},lf={hover:"mouseleave",focus:"blur",click:"click",touch:"touchend",pointer:"pointerup"};function cf(e,t){const n=e.indexOf(t);n!==-1&&e.splice(n,1)}function Bs(){return new Promise(e=>requestAnimationFrame(()=>{requestAnimationFrame(e)}))}const ut=[];let Cn=null;const uf={};function ff(e){let t=uf[e];return t||(t=uf[e]=[]),t}let Ra=function(){};typeof window<"u"&&(Ra=window.Element);function ae(e){return function(t){return bi(t.theme,e)}}const Fs="__floating-vue__popper",Om=()=>Re({name:"VPopper",provide(){return{[Fs]:{parentPopper:this}}},inject:{[Fs]:{default:null}},props:{theme:{type:String,required:!0},targetNodes:{type:Function,required:!0},referenceNode:{type:Function,default:null},popperNode:{type:Function,required:!0},shown:{type:Boolean,default:!1},showGroup:{type:String,default:null},ariaId:{default:null},disabled:{type:Boolean,default:ae("disabled")},positioningDisabled:{type:Boolean,default:ae("positioningDisabled")},placement:{type:String,default:ae("placement"),validator:e=>Pm.includes(e)},delay:{type:[String,Number,Object],default:ae("delay")},distance:{type:[Number,String],default:ae("distance")},skidding:{type:[Number,String],default:ae("skidding")},triggers:{type:Array,default:ae("triggers")},showTriggers:{type:[Array,Function],default:ae("showTriggers")},hideTriggers:{type:[Array,Function],default:ae("hideTriggers")},popperTriggers:{type:Array,default:ae("popperTriggers")},popperShowTriggers:{type:[Array,Function],default:ae("popperShowTriggers")},popperHideTriggers:{type:[Array,Function],default:ae("popperHideTriggers")},container:{type:[String,Object,Ra,Boolean],default:ae("container")},boundary:{type:[String,Ra],default:ae("boundary")},strategy:{type:String,validator:e=>["absolute","fixed"].includes(e),default:ae("strategy")},autoHide:{type:[Boolean,Function],default:ae("autoHide")},handleResize:{type:Boolean,default:ae("handleResize")},instantMove:{type:Boolean,default:ae("instantMove")},eagerMount:{type:Boolean,default:ae("eagerMount")},popperClass:{type:[String,Array,Object],default:ae("popperClass")},computeTransformOrigin:{type:Boolean,default:ae("computeTransformOrigin")},autoMinSize:{type:Boolean,default:ae("autoMinSize")},autoSize:{type:[Boolean,String],default:ae("autoSize")},autoMaxSize:{type:Boolean,default:ae("autoMaxSize")},autoBoundaryMaxSize:{type:Boolean,default:ae("autoBoundaryMaxSize")},preventOverflow:{type:Boolean,default:ae("preventOverflow")},overflowPadding:{type:[Number,String],default:ae("overflowPadding")},arrowPadding:{type:[Number,String],default:ae("arrowPadding")},arrowOverflow:{type:Boolean,default:ae("arrowOverflow")},flip:{type:Boolean,default:ae("flip")},shift:{type:Boolean,default:ae("shift")},shiftCrossAxis:{type:Boolean,default:ae("shiftCrossAxis")},noAutoFocus:{type:Boolean,default:ae("noAutoFocus")},disposeTimeout:{type:Number,default:ae("disposeTimeout")}},emits:["show","hide","update:shown","apply-show","apply-hide","close-group","close-directive","auto-hide","resize","dispose"],data(){return{isShown:!1,isMounted:!1,skipTransition:!1,classes:{showFrom:!1,showTo:!1,hideFrom:!1,hideTo:!0},result:{x:0,y:0,placement:"",strategy:this.strategy,arrow:{x:0,y:0,centerOffset:0},transformOrigin:null},shownChildren:new Set,lastAutoHide:!0}},computed:{popperId(){return this.ariaId!=null?this.ariaId:this.randomId},shouldMountContent(){return this.eagerMount||this.isMounted},slotData(){return{popperId:this.popperId,isShown:this.isShown,shouldMountContent:this.shouldMountContent,skipTransition:this.skipTransition,autoHide:typeof this.autoHide=="function"?this.lastAutoHide:this.autoHide,show:this.show,hide:this.hide,handleResize:this.handleResize,onResize:this.onResize,classes:{...this.classes,popperClass:this.popperClass},result:this.positioningDisabled?null:this.result,attrs:this.$attrs}},parentPopper(){var e;return(e=this[Fs])==null?void 0:e.parentPopper},hasPopperShowTriggerHover(){var e,t;return((e=this.popperTriggers)==null?void 0:e.includes("hover"))||((t=this.popperShowTriggers)==null?void 0:t.includes("hover"))}},watch:{shown:"$_autoShowHide",disabled(e){e?this.dispose():this.init()},async container(){this.isShown&&(this.$_ensureTeleport(),await this.$_computePosition())},...["triggers","positioningDisabled"].reduce((e,t)=>(e[t]="$_refreshListeners",e),{}),...["placement","distance","skidding","boundary","strategy","overflowPadding","arrowPadding","preventOverflow","shift","shiftCrossAxis","flip"].reduce((e,t)=>(e[t]="$_computePosition",e),{})},created(){this.$_isDisposed=!0,this.randomId=`popper_${[Math.random(),Date.now()].map(e=>e.toString(36).substring(2,10)).join("_")}`,this.autoMinSize&&console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),this.autoMaxSize&&console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")},mounted(){this.init(),this.$_detachPopperNode()},activated(){this.$_autoShowHide()},deactivated(){this.hide()},beforeUnmount(){this.dispose()},methods:{show({event:e=null,skipDelay:t=!1,force:n=!1}={}){var r,i;(r=this.parentPopper)!=null&&r.lockedChild&&this.parentPopper.lockedChild!==this||(this.$_pendingHide=!1,(n||!this.disabled)&&(((i=this.parentPopper)==null?void 0:i.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_scheduleShow(e,t),this.$emit("show"),this.$_showFrameLocked=!0,requestAnimationFrame(()=>{this.$_showFrameLocked=!1})),this.$emit("update:shown",!0))},hide({event:e=null,skipDelay:t=!1}={}){var n;if(!this.$_hideInProgress){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}if(this.hasPopperShowTriggerHover&&this.$_isAimingPopper()){this.parentPopper&&(this.parentPopper.lockedChild=this,clearTimeout(this.parentPopper.lockedChildTimer),this.parentPopper.lockedChildTimer=setTimeout(()=>{this.parentPopper.lockedChild===this&&(this.parentPopper.lockedChild.hide({skipDelay:t}),this.parentPopper.lockedChild=null)},1e3));return}((n=this.parentPopper)==null?void 0:n.lockedChild)===this&&(this.parentPopper.lockedChild=null),this.$_pendingHide=!1,this.$_scheduleHide(e,t),this.$emit("hide"),this.$emit("update:shown",!1)}},init(){var e;this.$_isDisposed&&(this.$_isDisposed=!1,this.isMounted=!1,this.$_events=[],this.$_preventShow=!1,this.$_referenceNode=((e=this.referenceNode)==null?void 0:e.call(this))??this.$el,this.$_targetNodes=this.targetNodes().filter(t=>t.nodeType===t.ELEMENT_NODE),this.$_popperNode=this.popperNode(),this.$_innerNode=this.$_popperNode.querySelector(".v-popper__inner"),this.$_arrowNode=this.$_popperNode.querySelector(".v-popper__arrow-container"),this.$_swapTargetAttrs("title","data-original-title"),this.$_detachPopperNode(),this.triggers.length&&this.$_addEventListeners(),this.shown&&this.show())},dispose(){this.$_isDisposed||(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.$_detachPopperNode(),this.isMounted=!1,this.isShown=!1,this.$_updateParentShownChildren(!1),this.$_swapTargetAttrs("data-original-title","title"),this.$emit("dispose"))},async onResize(){this.isShown&&(await this.$_computePosition(),this.$emit("resize"))},async $_computePosition(){if(this.$_isDisposed||this.positioningDisabled)return;const e={strategy:this.strategy,middleware:[]};(this.distance||this.skidding)&&e.middleware.push(Fx({mainAxis:this.distance,crossAxis:this.skidding}));const t=this.placement.startsWith("auto");if(t?e.middleware.push(zx({alignment:this.placement.split("-")[1]??""})):e.placement=this.placement,this.preventOverflow&&(this.shift&&e.middleware.push(jx({padding:this.overflowPadding,boundary:this.boundary,crossAxis:this.shiftCrossAxis})),!t&&this.flip&&e.middleware.push(Mx({padding:this.overflowPadding,boundary:this.boundary}))),e.middleware.push(Ix({element:this.$_arrowNode,padding:this.arrowPadding})),this.arrowOverflow&&e.middleware.push({name:"arrowOverflow",fn:({placement:r,rects:i,middlewareData:o})=>{let s;const{centerOffset:a}=o.arrow;return r.startsWith("top")||r.startsWith("bottom")?s=Math.abs(a)>i.reference.width/2:s=Math.abs(a)>i.reference.height/2,{data:{overflow:s}}}}),this.autoMinSize||this.autoSize){const r=this.autoSize?this.autoSize:this.autoMinSize?"min":null;e.middleware.push({name:"autoSize",fn:({rects:i,placement:o,middlewareData:s})=>{var a;if((a=s.autoSize)!=null&&a.skip)return{};let l,c;return o.startsWith("top")||o.startsWith("bottom")?l=i.reference.width:c=i.reference.height,this.$_innerNode.style[r==="min"?"minWidth":r==="max"?"maxWidth":"width"]=l!=null?`${l}px`:null,this.$_innerNode.style[r==="min"?"minHeight":r==="max"?"maxHeight":"height"]=c!=null?`${c}px`:null,{data:{skip:!0},reset:{rects:!0}}}})}(this.autoMaxSize||this.autoBoundaryMaxSize)&&(this.$_innerNode.style.maxWidth=null,this.$_innerNode.style.maxHeight=null,e.middleware.push(Hx({boundary:this.boundary,padding:this.overflowPadding,apply:({availableWidth:r,availableHeight:i})=>{this.$_innerNode.style.maxWidth=r!=null?`${r}px`:null,this.$_innerNode.style.maxHeight=i!=null?`${i}px`:null}})));const n=await Wx(this.$_referenceNode,this.$_popperNode,e);Object.assign(this.result,{x:n.x,y:n.y,placement:n.placement,strategy:n.strategy,arrow:{...n.middlewareData.arrow,...n.middlewareData.arrowOverflow}})},$_scheduleShow(e=null,t=!1){if(this.$_updateParentShownChildren(!0),this.$_hideInProgress=!1,clearTimeout(this.$_scheduleTimer),Cn&&this.instantMove&&Cn.instantMove&&Cn!==this.parentPopper){Cn.$_applyHide(!0),this.$_applyShow(!0);return}t?this.$_applyShow():this.$_scheduleTimer=setTimeout(this.$_applyShow.bind(this),this.$_computeDelay("show"))},$_scheduleHide(e=null,t=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0;return}this.$_updateParentShownChildren(!1),this.$_hideInProgress=!0,clearTimeout(this.$_scheduleTimer),this.isShown&&(Cn=this),t?this.$_applyHide():this.$_scheduleTimer=setTimeout(this.$_applyHide.bind(this),this.$_computeDelay("hide"))},$_computeDelay(e){const t=this.delay;return parseInt(t&&t[e]||t||0)},async $_applyShow(e=!1){clearTimeout(this.$_disposeTimer),clearTimeout(this.$_scheduleTimer),this.skipTransition=e,!this.isShown&&(this.$_ensureTeleport(),await Bs(),await this.$_computePosition(),await this.$_applyShowEffect(),this.positioningDisabled||this.$_registerEventListeners([...Ro(this.$_referenceNode),...Ro(this.$_popperNode)],"scroll",()=>{this.$_computePosition()}))},async $_applyShowEffect(){if(this.$_hideInProgress)return;if(this.computeTransformOrigin){const t=this.$_referenceNode.getBoundingClientRect(),n=this.$_popperNode.querySelector(".v-popper__wrapper"),r=n.parentNode.getBoundingClientRect(),i=t.x+t.width/2-(r.left+n.offsetLeft),o=t.y+t.height/2-(r.top+n.offsetTop);this.result.transformOrigin=`${i}px ${o}px`}this.isShown=!0,this.$_applyAttrsToTarget({"aria-describedby":this.popperId,"data-popper-shown":""});const e=this.showGroup;if(e){let t;for(let n=0;n<ut.length;n++)t=ut[n],t.showGroup!==e&&(t.hide(),t.$emit("close-group"))}ut.push(this),document.body.classList.add("v-popper--some-open");for(const t of sf(this.theme))ff(t).push(this),document.body.classList.add(`v-popper--some-open--${t}`);this.$emit("apply-show"),this.classes.showFrom=!0,this.classes.showTo=!1,this.classes.hideFrom=!1,this.classes.hideTo=!1,await Bs(),this.classes.showFrom=!1,this.classes.showTo=!0,this.noAutoFocus||this.$_popperNode.focus()},async $_applyHide(e=!1){if(this.shownChildren.size>0){this.$_pendingHide=!0,this.$_hideInProgress=!1;return}if(clearTimeout(this.$_scheduleTimer),!this.isShown)return;this.skipTransition=e,cf(ut,this),ut.length===0&&document.body.classList.remove("v-popper--some-open");for(const n of sf(this.theme)){const r=ff(n);cf(r,this),r.length===0&&document.body.classList.remove(`v-popper--some-open--${n}`)}Cn===this&&(Cn=null),this.isShown=!1,this.$_applyAttrsToTarget({"aria-describedby":void 0,"data-popper-shown":void 0}),clearTimeout(this.$_disposeTimer);const t=this.disposeTimeout;t!==null&&(this.$_disposeTimer=setTimeout(()=>{this.$_popperNode&&(this.$_detachPopperNode(),this.isMounted=!1)},t)),this.$_removeEventListeners("scroll"),this.$emit("apply-hide"),this.classes.showFrom=!1,this.classes.showTo=!1,this.classes.hideFrom=!0,this.classes.hideTo=!1,await Bs(),this.classes.hideFrom=!1,this.classes.hideTo=!0},$_autoShowHide(){this.shown?this.show():this.hide()},$_ensureTeleport(){if(this.$_isDisposed)return;let e=this.container;if(typeof e=="string"?e=window.document.querySelector(e):e===!1&&(e=this.$_targetNodes[0].parentNode),!e)throw new Error("No container for popover: "+this.container);e.appendChild(this.$_popperNode),this.isMounted=!0},$_addEventListeners(){const e=n=>{this.isShown&&!this.$_hideInProgress||(n.usedByTooltip=!0,!this.$_preventShow&&this.show({event:n}))};this.$_registerTriggerListeners(this.$_targetNodes,af,this.triggers,this.showTriggers,e),this.$_registerTriggerListeners([this.$_popperNode],af,this.popperTriggers,this.popperShowTriggers,e);const t=n=>{n.usedByTooltip||this.hide({event:n})};this.$_registerTriggerListeners(this.$_targetNodes,lf,this.triggers,this.hideTriggers,t),this.$_registerTriggerListeners([this.$_popperNode],lf,this.popperTriggers,this.popperHideTriggers,t)},$_registerEventListeners(e,t,n){this.$_events.push({targetNodes:e,eventType:t,handler:n}),e.forEach(r=>r.addEventListener(t,n,Yn?{passive:!0}:void 0))},$_registerTriggerListeners(e,t,n,r,i){let o=n;r!=null&&(o=typeof r=="function"?r(o):r),o.forEach(s=>{const a=t[s];a&&this.$_registerEventListeners(e,a,i)})},$_removeEventListeners(e){const t=[];this.$_events.forEach(n=>{const{targetNodes:r,eventType:i,handler:o}=n;!e||e===i?r.forEach(s=>s.removeEventListener(i,o)):t.push(n)}),this.$_events=t},$_refreshListeners(){this.$_isDisposed||(this.$_removeEventListeners(),this.$_addEventListeners())},$_handleGlobalClose(e,t=!1){this.$_showFrameLocked||(this.hide({event:e}),e.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),t&&(this.$_preventShow=!0,setTimeout(()=>{this.$_preventShow=!1},300)))},$_detachPopperNode(){this.$_popperNode.parentNode&&this.$_popperNode.parentNode.removeChild(this.$_popperNode)},$_swapTargetAttrs(e,t){for(const n of this.$_targetNodes){const r=n.getAttribute(e);r&&(n.removeAttribute(e),n.setAttribute(t,r))}},$_applyAttrsToTarget(e){for(const t of this.$_targetNodes)for(const n in e){const r=e[n];r==null?t.removeAttribute(n):t.setAttribute(n,r)}},$_updateParentShownChildren(e){let t=this.parentPopper;for(;t;)e?t.shownChildren.add(this.randomId):(t.shownChildren.delete(this.randomId),t.$_pendingHide&&t.hide()),t=t.parentPopper},$_isAimingPopper(){const e=this.$_referenceNode.getBoundingClientRect();if(Jr>=e.left&&Jr<=e.right&&Zr>=e.top&&Zr<=e.bottom){const t=this.$_popperNode.getBoundingClientRect(),n=Jr-rn,r=Zr-on,i=t.left+t.width/2-rn+(t.top+t.height/2)-on+t.width+t.height,o=rn+n*i,s=on+r*i;return no(rn,on,o,s,t.left,t.top,t.left,t.bottom)||no(rn,on,o,s,t.left,t.top,t.right,t.top)||no(rn,on,o,s,t.right,t.top,t.right,t.bottom)||no(rn,on,o,s,t.left,t.bottom,t.right,t.bottom)}return!1}},render(){return this.$slots.default(this.slotData)}});typeof document<"u"&&typeof window<"u"&&(Am?(document.addEventListener("touchstart",df,Yn?{passive:!0,capture:!0}:!0),document.addEventListener("touchend",Xx,Yn?{passive:!0,capture:!0}:!0)):(window.addEventListener("mousedown",df,!0),window.addEventListener("click",Kx,!0)),window.addEventListener("resize",Zx));function df(e){for(let t=0;t<ut.length;t++){const n=ut[t];try{const r=n.popperNode();n.$_mouseDownContains=r.contains(e.target)}catch{}}}function Kx(e){Tm(e)}function Xx(e){Tm(e,!0)}function Tm(e,t=!1){const n={};for(let r=ut.length-1;r>=0;r--){const i=ut[r];try{const o=i.$_containsGlobalTarget=Gx(i,e);i.$_pendingHide=!1,requestAnimationFrame(()=>{if(i.$_pendingHide=!1,!n[i.randomId]&&pf(i,o,e)){if(i.$_handleGlobalClose(e,t),!e.closeAllPopover&&e.closePopover&&o){let a=i.parentPopper;for(;a;)n[a.randomId]=!0,a=a.parentPopper;return}let s=i.parentPopper;for(;s&&pf(s,s.$_containsGlobalTarget,e);)s.$_handleGlobalClose(e,t),s=s.parentPopper}})}catch{}}}function Gx(e,t){const n=e.popperNode();return e.$_mouseDownContains||n.contains(t.target)}function pf(e,t,n){return n.closeAllPopover||n.closePopover&&t||Jx(e,n)&&!t}function Jx(e,t){if(typeof e.autoHide=="function"){const n=e.autoHide(t);return e.lastAutoHide=n,n}return e.autoHide}function Zx(e){for(let t=0;t<ut.length;t++)ut[t].$_computePosition(e)}let rn=0,on=0,Jr=0,Zr=0;typeof window<"u"&&window.addEventListener("mousemove",e=>{rn=Jr,on=Zr,Jr=e.clientX,Zr=e.clientY},Yn?{passive:!0}:void 0);function no(e,t,n,r,i,o,s,a){const l=((s-i)*(t-o)-(a-o)*(e-i))/((a-o)*(n-e)-(s-i)*(r-t)),c=((n-e)*(t-o)-(r-t)*(e-i))/((a-o)*(n-e)-(s-i)*(r-t));return l>=0&&l<=1&&c>=0&&c<=1}const Qx={extends:Om()},gs=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};function e2(e,t,n,r,i,o){return fe(),ke("div",{ref:"reference",class:Et(["v-popper",{"v-popper--shown":e.slotData.isShown}])},[gn(e.$slots,"default",bf(ol(e.slotData)))],2)}const t2=gs(Qx,[["render",e2]]);function n2(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var i=e.indexOf("Edge/");return i>0?parseInt(e.substring(i+5,e.indexOf(".",i)),10):-1}let fo;function $a(){$a.init||($a.init=!0,fo=n2()!==-1)}var vs={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){$a(),Sr(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",fo&&this.$el.appendChild(e),e.data="about:blank",fo||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!fo&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const r2=Wf();Vf("data-v-b329ee4c");const i2={class:"resize-observer",tabindex:"-1"};Yf();const o2=r2((e,t,n,r,i,o)=>(fe(),Yt("div",i2)));vs.render=o2;vs.__scopeId="data-v-b329ee4c";vs.__file="src/components/ResizeObserver.vue";const Rm=(e="theme")=>({computed:{themeClass(){return qx(this[e])}}}),s2=Re({name:"VPopperContent",components:{ResizeObserver:vs},mixins:[Rm()],props:{popperId:String,theme:String,shown:Boolean,mounted:Boolean,skipTransition:Boolean,autoHide:Boolean,handleResize:Boolean,classes:Object,result:Object},emits:["hide","resize"],methods:{toPx(e){return e!=null&&!isNaN(e)?`${e}px`:null}}}),a2=["id","aria-hidden","tabindex","data-popper-placement"],l2={ref:"inner",class:"v-popper__inner"},c2=Le("div",{class:"v-popper__arrow-outer"},null,-1),u2=Le("div",{class:"v-popper__arrow-inner"},null,-1),f2=[c2,u2];function d2(e,t,n,r,i,o){const s=hn("ResizeObserver");return fe(),ke("div",{id:e.popperId,ref:"popover",class:Et(["v-popper__popper",[e.themeClass,e.classes.popperClass,{"v-popper__popper--shown":e.shown,"v-popper__popper--hidden":!e.shown,"v-popper__popper--show-from":e.classes.showFrom,"v-popper__popper--show-to":e.classes.showTo,"v-popper__popper--hide-from":e.classes.hideFrom,"v-popper__popper--hide-to":e.classes.hideTo,"v-popper__popper--skip-transition":e.skipTransition,"v-popper__popper--arrow-overflow":e.result&&e.result.arrow.overflow,"v-popper__popper--no-positioning":!e.result}]]),style:ln(e.result?{position:e.result.strategy,transform:`translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`}:void 0),"aria-hidden":e.shown?"false":"true",tabindex:e.autoHide?0:void 0,"data-popper-placement":e.result?e.result.placement:void 0,onKeyup:t[2]||(t[2]=pl(a=>e.autoHide&&e.$emit("hide"),["esc"]))},[Le("div",{class:"v-popper__backdrop",onClick:t[0]||(t[0]=a=>e.autoHide&&e.$emit("hide"))}),Le("div",{class:"v-popper__wrapper",style:ln(e.result?{transformOrigin:e.result.transformOrigin}:void 0)},[Le("div",l2,[e.mounted?(fe(),ke(Ce,{key:0},[Le("div",null,[gn(e.$slots,"default")]),e.handleResize?(fe(),Yt(s,{key:0,onNotify:t[1]||(t[1]=a=>e.$emit("resize",a))})):It("",!0)],64)):It("",!0)],512),Le("div",{ref:"arrow",class:"v-popper__arrow-container",style:ln(e.result?{left:e.toPx(e.result.arrow.x),top:e.toPx(e.result.arrow.y)}:void 0)},f2,4)],4)],46,a2)}const $m=gs(s2,[["render",d2]]),Nm={methods:{show(...e){return this.$refs.popper.show(...e)},hide(...e){return this.$refs.popper.hide(...e)},dispose(...e){return this.$refs.popper.dispose(...e)},onResize(...e){return this.$refs.popper.onResize(...e)}}},p2=Re({name:"VPopperWrapper",components:{Popper:t2,PopperContent:$m},mixins:[Nm,Rm("finalTheme")],props:{theme:{type:String,default:null}},computed:{finalTheme(){return this.theme??this.$options.vPopperTheme}},methods:{getTargetNodes(){return Array.from(this.$el.children).filter(e=>e!==this.$refs.popperContent.$el)}}});function m2(e,t,n,r,i,o){const s=hn("PopperContent"),a=hn("Popper");return fe(),Yt(a,{ref:"popper",theme:e.finalTheme,"target-nodes":e.getTargetNodes,"popper-node":()=>e.$refs.popperContent.$el,class:Et([e.themeClass])},{default:Bn(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:p,show:h,hide:v,handleResize:w,onResize:S,classes:g,result:m})=>[gn(e.$slots,"default",{shown:c,show:h,hide:v}),pe(s,{ref:"popperContent","popper-id":l,theme:e.finalTheme,shown:c,mounted:u,"skip-transition":f,"auto-hide":p,"handle-resize":w,classes:g,result:m,onHide:v,onResize:S},{default:Bn(()=>[gn(e.$slots,"popper",{shown:c,hide:v})]),_:2},1032,["popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:3},8,["theme","target-nodes","popper-node","class"])}const oc=gs(p2,[["render",m2]]),h2={...oc,name:"VDropdown",vPopperTheme:"dropdown"},g2={...oc,name:"VMenu",vPopperTheme:"menu"},v2={...oc,name:"VTooltip",vPopperTheme:"tooltip"},y2=Re({name:"VTooltipDirective",components:{Popper:Om(),PopperContent:$m},mixins:[Nm],inheritAttrs:!1,props:{theme:{type:String,default:"tooltip"},html:{type:Boolean,default:e=>bi(e.theme,"html")},content:{type:[String,Number,Function],default:null},loadingContent:{type:String,default:e=>bi(e.theme,"loadingContent")},targetNodes:{type:Function,required:!0}},data(){return{asyncContent:null}},computed:{isContentAsync(){return typeof this.content=="function"},loading(){return this.isContentAsync&&this.asyncContent==null},finalContent(){return this.isContentAsync?this.loading?this.loadingContent:this.asyncContent:this.content}},watch:{content:{handler(){this.fetchContent(!0)},immediate:!0},async finalContent(){await this.$nextTick(),this.$refs.popper.onResize()}},created(){this.$_fetchId=0},methods:{fetchContent(e){if(typeof this.content=="function"&&this.$_isShown&&(e||!this.$_loading&&this.asyncContent==null)){this.asyncContent=null,this.$_loading=!0;const t=++this.$_fetchId,n=this.content(this);n.then?n.then(r=>this.onResult(t,r)):this.onResult(t,n)}},onResult(e,t){e===this.$_fetchId&&(this.$_loading=!1,this.asyncContent=t)},onShow(){this.$_isShown=!0,this.fetchContent()},onHide(){this.$_isShown=!1}}}),b2=["innerHTML"],w2=["textContent"];function _2(e,t,n,r,i,o){const s=hn("PopperContent"),a=hn("Popper");return fe(),Yt(a,ll({ref:"popper"},e.$attrs,{theme:e.theme,"target-nodes":e.targetNodes,"popper-node":()=>e.$refs.popperContent.$el,onApplyShow:e.onShow,onApplyHide:e.onHide}),{default:Bn(({popperId:l,isShown:c,shouldMountContent:u,skipTransition:f,autoHide:p,hide:h,handleResize:v,onResize:w,classes:S,result:g})=>[pe(s,{ref:"popperContent",class:Et({"v-popper--tooltip-loading":e.loading}),"popper-id":l,theme:e.theme,shown:c,mounted:u,"skip-transition":f,"auto-hide":p,"handle-resize":v,classes:S,result:g,onHide:h,onResize:w},{default:Bn(()=>[e.html?(fe(),ke("div",{key:0,innerHTML:e.finalContent},null,8,b2)):(fe(),ke("div",{key:1,textContent:Nn(e.finalContent)},null,8,w2))]),_:2},1032,["class","popper-id","theme","shown","mounted","skip-transition","auto-hide","handle-resize","classes","result","onHide","onResize"])]),_:1},16,["theme","target-nodes","popper-node","onApplyShow","onApplyHide"])}const x2=gs(y2,[["render",_2]]),Lm="v-popper--has-tooltip";function k2(e,t){let n=e.placement;if(!n&&t)for(const r of Pm)t[r]&&(n=r);return n||(n=bi(e.theme||"tooltip","placement")),n}function Im(e,t,n){let r;const i=typeof t;return i==="string"?r={content:t}:t&&i==="object"?r=t:r={content:!1},r.placement=k2(r,n),r.targetNodes=()=>[e],r.referenceNode=()=>e,r}let js,wi,S2=0;function E2(){if(js)return;wi=Oe([]),js=hl({name:"VTooltipDirectiveApp",setup(){return{directives:wi}},render(){return this.directives.map(t=>Er(x2,{...t.options,shown:t.shown||t.options.shown,key:t.id}))},devtools:{hide:!0}});const e=document.createElement("div");document.body.appendChild(e),js.mount(e)}function C2(e,t,n){E2();const r=Oe(Im(e,t,n)),i=Oe(!1),o={id:S2++,options:r,shown:i};return wi.value.push(o),e.classList&&e.classList.add(Lm),e.$_popper={options:r,item:o,show(){i.value=!0},hide(){i.value=!1}}}function Dm(e){if(e.$_popper){const t=wi.value.indexOf(e.$_popper.item);t!==-1&&wi.value.splice(t,1),delete e.$_popper,delete e.$_popperOldShown,delete e.$_popperMountTarget}e.classList&&e.classList.remove(Lm)}function mf(e,{value:t,modifiers:n}){const r=Im(e,t,n);if(!r.content||bi(r.theme||"tooltip","disabled"))Dm(e);else{let i;e.$_popper?(i=e.$_popper,i.options.value=r):i=C2(e,t,n),typeof t.shown<"u"&&t.shown!==e.$_popperOldShown&&(e.$_popperOldShown=t.shown,t.shown?i.show():i.hide())}}const A2={beforeMount:mf,updated:mf,beforeUnmount(e){Dm(e)}};function hf(e){e.addEventListener("click",zm),e.addEventListener("touchstart",Mm,Yn?{passive:!0}:!1)}function gf(e){e.removeEventListener("click",zm),e.removeEventListener("touchstart",Mm),e.removeEventListener("touchend",Bm),e.removeEventListener("touchcancel",Fm)}function zm(e){const t=e.currentTarget;e.closePopover=!t.$_vclosepopover_touch,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}function Mm(e){if(e.changedTouches.length===1){const t=e.currentTarget;t.$_vclosepopover_touch=!0;const n=e.changedTouches[0];t.$_vclosepopover_touchPoint=n,t.addEventListener("touchend",Bm),t.addEventListener("touchcancel",Fm)}}function Bm(e){const t=e.currentTarget;if(t.$_vclosepopover_touch=!1,e.changedTouches.length===1){const n=e.changedTouches[0],r=t.$_vclosepopover_touchPoint;e.closePopover=Math.abs(n.screenY-r.screenY)<20&&Math.abs(n.screenX-r.screenX)<20,e.closeAllPopover=t.$_closePopoverModifiers&&!!t.$_closePopoverModifiers.all}}function Fm(e){const t=e.currentTarget;t.$_vclosepopover_touch=!1}const P2={beforeMount(e,{value:t,modifiers:n}){e.$_closePopoverModifiers=n,(typeof t>"u"||t)&&hf(e)},updated(e,{value:t,oldValue:n,modifiers:r}){e.$_closePopoverModifiers=r,t!==n&&(typeof t>"u"||t?hf(e):gf(e))},beforeUnmount(e){gf(e)}};function O2(e,t={}){e.$_vTooltipInstalled||(e.$_vTooltipInstalled=!0,Cm(zt,t),e.directive("tooltip",A2),e.directive("close-popper",P2),e.component("VTooltip",v2),e.component("VDropdown",h2),e.component("VMenu",g2))}const T2={version:"2.0.0-beta.24",install:O2,options:zt};const R2=ry(),$2=hl(Ob);$2.component("FontAwesomeIcon",cx).use(Cx,{clientId:"510670340157-veces6pqflcbg0mgjin9tsf6k245qsjq.apps.googleusercontent.com"}).use(R2).use(es).use($e).use(bw).use(T2).mount("#app");export{ml as $,Hl as A,J1 as B,Xv as C,sl as D,ud as E,Ce as F,Nn as G,Qg as H,Tg as I,ll as J,Sr as K,Ne as L,gn as M,Wf as N,ln as O,pl as P,bf as Q,ol as R,ed as S,ul as T,td as U,Se as V,cg as W,hg as X,es as Y,Jf as Z,Xn as _,N2 as a,ow as a0,bg as a1,h0 as b,zp as c,Re as d,Ht as e,hn as f,ke as g,Le as h,je as i,pe as j,It as k,Sx as l,Yf as m,fe as n,Kn as o,Vf as p,K1 as q,Oe as r,Df as s,Yt as t,yl as u,yg as v,Ut as w,ne as x,Et as y,Bn as z};
