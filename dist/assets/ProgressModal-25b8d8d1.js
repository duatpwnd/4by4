import{d as g,w as f,f as v,g as r,h as s,D as x,G as n,x as o,F as l,E as B,j as h,p as b,m as C,n as p,y as V,_ as k}from"./index-875ad9d4.js";const y=e=>(b("data-v-6e98f4fb"),e=e(),C(),e),I=y(()=>s("div",{class:"mask"},null,-1)),N={class:"progress-modal"},P={class:"progress-value"},S={class:"progress-bar-area"},M=g({__name:"ProgressModal",props:{text:{},progressValue:{}},emits:["update:close-progress-modal"],setup(e,{emit:c}){const d=e,{progressValue:t,text:_}=f(d);return(w,a)=>{const i=v("BaseButton");return p(),r(l,null,[I,s("div",N,[s("p",null,[x(n(o(_)),1),s("strong",P,n(o(t))+"%",1)]),s("div",S,[(p(),r(l,null,B(10,(u,m)=>s("span",{class:V(["item",Number(m+1)*10<=o(t)?"fill":""])},null,2)),64))]),h(i,{onClick:a[0]||(a[0]=u=>c("update:close-progress-modal")),text:"Cancel"})])],64)}}});const E=k(M,[["__scopeId","data-v-6e98f4fb"]]);export{E as P};
