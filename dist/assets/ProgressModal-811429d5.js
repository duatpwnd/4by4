import{d as v,w as x,f,g as r,h as s,E as h,H as n,x as o,F as l,G as B,j as b,p as C,m as V,n as c,y as k,_ as y}from"./index-bd17afd0.js";const p=e=>(C("data-v-61526b3d"),e=e(),V(),e),I=p(()=>s("div",{class:"mask"},null,-1)),N={class:"progress-modal"},P=p(()=>s("br",null,null,-1)),S={class:"progress-value"},M={class:"progress-bar-area"},w=v({__name:"ProgressModal",props:{text:{},progressValue:{}},emits:["update:close-progress-modal"],setup(e,{emit:d}){const _=e,{progressValue:t,text:u}=x(_);return(E,a)=>{const i=f("BaseButton");return c(),r(l,null,[I,s("div",N,[s("p",null,[h(n(o(u)),1),P,s("strong",S,n(o(t))+"%",1)]),s("div",M,[(c(),r(l,null,B(10,(m,g)=>s("span",{class:k(["item",Number(g+1)*10<=o(t)?"fill":""])},null,2)),64))]),b(i,{onClick:a[0]||(a[0]=m=>d("update:close-progress-modal")),text:"Cancel"})])],64)}}});const j=y(w,[["__scopeId","data-v-61526b3d"]]);export{j as P};
