import{P as ie}from"./ProgressModal-1f33805e.js";import{d as te,r as a,i as z,w as ge,o as de,f as P,g,j as f,x as T,h as e,y as U,z as be,A as ye,C as ue,T as he,k as X,F as j,n as r,D as ke,_ as le,t as W,E as xe,G,H as Y,p as ce,m as re,I as Ie,J as Ve}from"./index-a18b3883.js";import{s as C}from"./services-eb80de62.js";const Ce={id:"teleport-upload-modal",class:"contents"},we={class:"title-area"},Be={class:"original"},Se={class:"pixell-ai"},Ae=["src"],$e=["src"],Le={key:0,class:"timeline-area"},Oe={class:"video-menu-area"},Ue=te({__name:"Video",props:{isUploaded:{type:Boolean},isInferred:{type:Boolean},originalVideoSrc:{},inferredVideoSrc:{}},setup(w){const v=w,B=a(null),h=a(null),S=a(null),n=a(null),_=a(null),y=a(null),x=a(!1),m=a(!1),M=z("signOut"),$=a(!1),d=a(null),{isUploaded:I,isInferred:L,originalVideoSrc:F,inferredVideoSrc:V}=ge(v),J=()=>{V.value.split(".").pop(),d.value!==null&&clearTimeout(d.value),console.log(V.value),window.navigator.clipboard.writeText(V.value).then(()=>{const u=document.createElement("a");u.href=V.value,u.download=V.value,u.click(),$.value=!0,d.value=setTimeout(()=>{$.value=!1},2e3)})},H=u=>{const t=B.value;console.log(t);let o=!1;document.onmouseup=()=>{o=!1,m.value=!1};const s=()=>{o=!0,m.value=!0},p=k=>{if(o&&t!==null){const E=t.getBoundingClientRect();if("pageX"in k){const D=(k.pageX-E.left)/t.offsetWidth*100;D<100&&D>0?u.style.left=D+"%":D<=0?u.style.left="0px":D>=100&&(u.style.left="100%")}}},b=()=>{o=!1,m.value=!1};u.onmousedown=s,u.onmouseup=b,t!==null&&(t.onmousemove=p,t.onmouseout=p)},A=u=>{if(m.value){const t=B.value,o=S.value,s=_.value;if(t!==null){const p=t.getBoundingClientRect();if("pageX"in u){const b=(u.pageX-p.left)/t.offsetWidth*100;b<100&&b>0?(o.style.width=b+"%",s.style.width=100/b*100+"%",s.style.zIndex="3"):b<=0?(o.style.width="0",s.style.width="0"):b>=100&&(o.style.width="100%",s.style.width="100%")}}}},q=()=>{n.value!==null&&_.value!==null&&(n.value.paused?(n.value.play(),_.value.play(),x.value=!0):(n.value.pause(),_.value.pause(),x.value=!1))},N=u=>{n.value!==null&&_.value!==null&&(u=="forward"?(_.value.currentTime+=10,n.value.currentTime+=10):(_.value.currentTime-=10,n.value.currentTime-=10))},Q=()=>{x.value=!1};return de(()=>{const u=B.value,t=y.value;t!==null&&u!==null&&(H(t),u.addEventListener("mousemove",A,!1),u.addEventListener("mouseout",A,!1),u.addEventListener("touchstart",A,!1),u.addEventListener("touchmove",A,!1)),n.value!==null&&(n.value.addEventListener("ended",Q,!1),n.value.addEventListener("timeupdate",o=>{},!1),n.value.addEventListener("seeking",o=>{n.value!==null&&console.log(Math.floor(n.value.currentTime))},!1))}),(u,t)=>{const o=P("FontAwesomeIcon");return r(),g(j,null,[f(o,{icon:"right-from-bracket",class:"sign-out-button",onClick:T(M)},null,8,["onClick"]),e("div",{class:"video-container",ref_key:"videoContainerRef",ref:B},[e("div",Ce,[e("div",we,[e("div",Be,[e("strong",{class:U(T(I)?"uploaded":"not-uploaded")},"Original ",2)]),e("div",Se,[e("strong",{class:U(T(L)?"uploaded":"not-uploaded")},"PIXELL AI",2)])]),e("div",{class:"video-area",ref_key:"videoAreaRef",ref:h},[be(e("button",{ref_key:"draggableButton",ref:y,class:"drag-btn"},null,512),[[ye,T(L)]]),e("video",{ref_key:"originalVideo",ref:n,src:T(F)},null,8,Ae),e("div",{id:"video-clipper",ref_key:"videoClipperRef",ref:S},[e("video",{ref_key:"inferenceVideo",ref:_,src:T(V)},null,8,$e)],512),T(L)?(r(),g("button",{key:0,class:"share-btn",onClick:J},[f(he,{name:"fade",mode:"out-in"},{default:ue(()=>[$.value?(r(),g("span",{key:0,class:"copy-text",onClick:t[0]||(t[0]=ke(()=>{},["stop"]))},"download and copy")):X("",!0)]),_:1})])):X("",!0)],512),T(L)?(r(),g("div",Le,[e("div",Oe,[f(o,{icon:"play",class:"fa-flip-both fa-3x prev-button",onClick:t[1]||(t[1]=s=>N("backward"))}),f(o,{icon:"circle-play",class:"fa-3x play-button",onClick:q}),f(o,{icon:"play",class:"fa-3x next-button",onClick:t[2]||(t[2]=s=>N("forward"))})])])):X("",!0)])],512)],64)}}});const Me=le(Ue,[["__scopeId","data-v-aaf53aee"]]),Ee="http://222.107.124.161:64000/assets/sample_video_img-8e9d2f79.png",ae=w=>(ce("data-v-e55f1bc4"),w=w(),re(),w),De={class:"upload-modal-container"},Pe={class:"contents"},Re=ae(()=>e("label",{class:"file-upload-txt",for:"file-upload"},"Choose File",-1)),Fe=ae(()=>e("p",{class:"guide-msg"}," Your Video Files are safely stored and secured using encryption ",-1)),qe={class:"sample-video-area"},Ne=ae(()=>e("h3",{class:"h3-title"},"Try Sample Video",-1)),Te={class:"sample-video-list"},Xe=["onClick"],Je={key:0,class:"file-name-area"},je={class:"file-name"},He={key:1,class:"file-name-area"},Qe={class:"upload-btn-area"},ze=te({__name:"UploadModal",emits:["update:close","update:upload","update:abort"],setup(w,{emit:v}){const B=z("defaultInstance"),h=z("emitter"),S=a([{name:"tes1.mp4"},{name:"tes2.mp4"},{name:"tes3.mp4"}]),n=a(0),_=a(!1),y=a(0),x=a(-1),m=a([]),M=a(!1),$=new AbortController,d=t=>{m.value.length>0?h.emit("update:alert",{isActive:!0,message:"이미 업로드된 파일이 존재합니다."}):x.value=t},I=()=>{M.value=!0},L=()=>{M.value=!1},F=t=>{M.value=!0,t.preventDefault()},V=t=>{if(x.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{t.preventDefault();const o=/(\.mov|\.mp4|\.mkv)$/i;M.value=!1;const s=t.dataTransfer;if(s&&s.files){for(const p of s.files)if(!o.exec(p.name)){h.emit("update:alert",{isActive:!0,message:"mp4,mov,mkv 확장자만 지원합니다."});break}J(s.files,"drop")}}},J=(t,o)=>{let s;if(o=="change"?s=t.files:s=t,s!==null)for(let p=0;p<s.length;p++){m.value.push({title:s[p].name,file:s[p]});const b=m.value.filter((k,E,D)=>E===D.findIndex(Z=>Z.title===k.title));m.value=b}},H=t=>{m.value.splice(t,1)},A=t=>{if(x.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{const o=t.target;o&&o.files&&J(o,"change")}},q=()=>{v("update:close")},N=()=>{v("update:abort"),$.abort()},Q=()=>{Promise.all([B.get(C.videoList),B.get(C.inferenceModelList)]).then(t=>{v("update:upload",{videoList:t[0].data,inferenceModelList:t[1].data.data.filter(o=>o!==null)}),q()})},u=()=>{if(m.value.length>0){_.value=!0;const t=m.value,o=new FormData;for(let s=0;s<t.length;s++)console.log(t[s].file),o.append("file",t[s].file);B.postForm(C.upload,o,{signal:$.signal,onUploadProgress:s=>{const p=s.loaded*100/s.total;y.value=Number(p.toFixed(0)),p==100&&(_.value=!1)},headers:{"Content-Type":"multipart/form-data",type:"video"}}).then(s=>{console.log("output-> result",s),Q()})}else h.emit("update:alert",{isActive:!0,message:"파일을 업로드 해주세요."})};return(t,o)=>{const s=P("FontAwesomeIcon"),p=P("BaseButton");return r(),g(j,null,[_.value?(r(),W(ie,{key:0,text:"video file uploading...",progressValue:y.value,"onUpdate:closeProgressModal":N},null,8,["progressValue"])):X("",!0),e("div",De,[e("button",{class:"close-btn",onClick:q}),e("div",Pe,[e("div",{class:U(["file-upload-area",M.value?"dragged":""]),onDragenter:I,onDragover:F,onDragleave:L,onDrop:V},[e("strong",null,[xe(" Drop Video File here to upload or "),Re,(r(),g("input",{key:n.value,type:"file",id:"file-upload",accept:".mp4, .mov, .mkv",onChange:A,onClick:o[0]||(o[0]=b=>n.value+=1),multiple:""},null,32))])],34),Fe,e("div",qe,[Ne,e("ul",Te,[(r(!0),g(j,null,G(S.value,(b,k)=>(r(),g("li",{key:k},[e("img",{onClick:E=>d(k),src:Ee,class:U(k==x.value?"selected":"")},null,10,Xe)]))),128))])]),m.value.length>0?(r(),g("ul",Je,[(r(!0),g(j,null,G(m.value,(b,k)=>(r(),g("li",{key:k},[e("span",je,Y(b.file.name),1),f(s,{icon:"xmark",class:"delete-button",onClick:E=>H(k)},null,8,["onClick"])]))),128))])):X("",!0),x.value!=-1?(r(),g("ul",He,[e("li",null,Y(S.value[x.value].name),1)])):X("",!0),e("div",Qe,[f(p,{text:"Upload",onClick:u})])])])],64)}}});const Ke=le(ze,[["__scopeId","data-v-e55f1bc4"]]),R=w=>(ce("data-v-ae0737eb"),w=w(),re(),w),We={class:"upload-area"},Ge=R(()=>e("h2",{class:"h2-title"},"PIXELL AI",-1)),Ye={class:"row"},Ze={class:"row video-file-select-area"},et=R(()=>e("label",{class:"label"},"video File",-1)),tt={class:"date"},lt={class:"file-name-area"},at=["onClick"],st={class:"setting-area"},ot=R(()=>e("h2",{class:"h2-title"},"Output Setting",-1)),nt={class:"row"},it=R(()=>e("label",{class:"label"},"AI Model",-1)),dt={class:"row"},ut=R(()=>e("label",{class:"label"},"Format",-1)),ct={class:"row"},rt=R(()=>e("label",{class:"label"},"Encoder",-1)),vt={class:"row check-area"},pt=R(()=>e("label",{for:"BestQuality"},"Best Quality",-1)),ft={class:"row check-area"},mt={class:"row"},_t=R(()=>e("label",{class:"bitrate"},"Bitrate : ",-1)),gt=R(()=>e("span",{class:"unit"},"(kbps)",-1)),bt={class:"row"},yt=te({__name:"Main",setup(w){const v=z("emitter"),B=a(0),h=z("defaultInstance"),S=a([]),n=a(null),_=a([]),y=a(null),x=[{name:"mp4"},{name:"mov"},{name:"mkv"}],m=a({name:"mp4"}),M=[{name:"H.264"},{name:"H.265"},{name:"ProRes"}],$=a({name:"H.264"}),d=a([]),I=a("VBR"),L=a(!1),F=a(!1),V=a("1000"),J=a(0),H=a(!1),A=a(!1),q=a(""),N=a(""),Q=a(""),u=a("");let t;const o=i=>{n.value=null,_.value=[],S.value=[],_.value=i.inferenceModelList,S.value=i.videoList},s=i=>{v.emit("update:alert",{isActive:!0,message:"삭제하시겠습니까?",fn:()=>{console.log("삭제api"),v.emit("update:loading",{isLoading:!0}),h.delete(C.video+`?videoId=${i}`).then(l=>{console.log(l),v.emit("update:loading",{isLoading:!1}),p()})}})},p=()=>{Promise.all([h.get(C.videoList),h.get(C.inferenceModelList)]).then(i=>{S.value=i[0].data,_.value=i[1].data.data.filter(l=>l!==null)})},b=i=>{const l=d.value.indexOf(i);l>=0?d.value.splice(l,1):i=="best quality"?(d.value=[],d.value.push("best quality")):d.value.push(i)},k=()=>{n.value==null?v.emit("update:alert",{isActive:!0,message:"Please select a video file."}):y.value==null?v.emit("update:alert",{isActive:!0,message:"Please select ai model."}):(A.value=!1,q.value="",N.value="",v.emit("update:loading",{isLoading:!0}),h.post(C.videoInference,{videoId:n.value&&n.value.videoId,containerId:y.value.containerId,format:m.value.name,encoder:$.value.name,bestQuality:d.value.indexOf("best quality")>=0?1:0,twoPassEncoding:d.value.indexOf("best quality")>=0?0:d.value.indexOf("2-Pass Encoding")>=0?1:0,avgBitrate:d.value.indexOf("best quality")>=0?"1000":V.value,vbr:d.value.indexOf("best quality")>=0?!1:I.value=="VBR",cbr:d.value.indexOf("best quality")>=0?!1:I.value=="CBR"}).then(i=>{console.log(i),sessionStorage.setItem("inference",JSON.stringify({uuid:i.data.data,containerId:y.value.containerId})),Q.value=i.data.data,Z(i.data.data)}))},E=()=>{t.close(),F.value=!1,A.value=!1,oe({containerId:y.value.containerId,uuid:Q.value})},D=()=>{v.emit("update:alert",{isActive:!0,message:"취소하시겠습니까?",fn:()=>{v.emit("update:loading",{isLoading:!0}),E()}})},Z=i=>{t=new EventSource(C.connectSSE+`?uuid=${i}`),t.onopen=()=>{v.emit("update:loading",{isLoading:!1}),console.log(C.connectSSE+`?uuid=${i}----connect`)},t.onmessage=l=>{try{if(typeof JSON.parse(l.data)=="object"){const O=JSON.parse(l.data);u.value=O.step,J.value=O.progress,F.value=!0,O.status=="error"&&E(),O.step=="all"&&O.progress==100&&O.result=="true"&&(t.close(),F.value=!1,sessionStorage.removeItem("inference"),v.emit("update:loading",{isLoading:!0}),q.value="http://222.107.124.161:64000"+C.videoDownload+`?videoId=${n.value&&n.value.videoId}`,N.value="http://222.107.124.161:64000"+C.videoDownload+`?uuid=${i}`,A.value=!0,v.emit("update:loading",{isLoading:!1}))}}catch{}},t.onerror=l=>{console.log(l),E()}},se=i=>(i.preventDefault(),i.stopImmediatePropagation(),""),oe=i=>{v.emit("update:alert",{isActive:!0,message:"추론 정지중입니다. 잠시만 기다려주세요."}),h.delete(C.videoInference+`?containerId=${i.containerId}&uuid=${i.uuid}`).then(l=>{console.log("삭제",l),p(),v.emit("update:loading",{isLoading:!1}),v.emit("update:alert",{isActive:!0,message:"추론 정지가 완료되었습니다."}),sessionStorage.removeItem("inference")})};return Ie(()=>{window.removeEventListener("beforeunload",se)}),de(()=>{window.addEventListener("beforeunload",se),p(),sessionStorage.getItem("inference")!=null&&oe(JSON.parse(sessionStorage.getItem("inference")))}),(i,l)=>{const O=P("BaseButton"),ve=P("FontAwesomeIcon"),K=P("BaseSelect"),pe=P("BaseCheckBox"),ne=P("BaseRadio"),fe=P("BaseInput");return r(),g(j,null,[F.value?(r(),W(ie,{key:0,text:u.value+" in_progress...",progressValue:J.value,"onUpdate:closeProgressModal":D},null,8,["text","progressValue"])):X("",!0),e("main",null,[L.value?(r(),W(Ve,{key:0,to:"#teleport-upload-modal"},[(r(),W(Ke,{key:B.value,"onUpdate:close":l[0]||(l[0]=c=>L.value=!1),"onUpdate:upload":l[1]||(l[1]=c=>o(c)),"onUpdate:abort":l[2]||(l[2]=c=>B.value+=1)}))])):X("",!0),e("aside",null,[e("section",We,[Ge,e("div",Ye,[f(O,{onClick:l[3]||(l[3]=c=>L.value=!0),text:"Upload Video"})]),e("div",Ze,[et,f(K,{name:"fileName",options:S.value,text:n.value==null?"<span class=not-selected>Please Upload Video Files</span>":n.value.fileName},{list:ue(()=>[(r(!0),g(j,null,G(S.value,(c,me)=>(r(),g("li",{class:"optionItem",key:me},[e("span",tt,Y(c.date),1),(r(!0),g(j,null,G(c.video,ee=>(r(),g("div",lt,[e("span",{class:"file-name",onClick:_e=>{H.value=!0,n.value=ee}},Y(ee.fileName),9,at),f(ve,{icon:"xmark",class:"delete-button",onClick:_e=>s(ee.videoId)},null,8,["onClick"])]))),256))]))),128))]),_:1},8,["options","text"])])]),e("section",st,[ot,e("div",nt,[it,f(K,{"onUpdate:selectBox":l[4]||(l[4]=c=>{y.value=c}),options:_.value,name:"projectName,modelName",text:y.value==null?"<span class=not-selected>Select AI Model</span>":y.value.projectName+"/"+y.value.modelName},null,8,["options","text"])]),e("div",dt,[ut,f(K,{"onUpdate:selectBox":l[5]||(l[5]=c=>m.value=c),options:x,name:"name",text:m.value.name},null,8,["text"])]),e("div",ct,[rt,f(K,{"onUpdate:selectBox":l[6]||(l[6]=c=>$.value=c),options:M,name:"name",text:$.value.name},null,8,["text"])]),e("div",vt,[e("div",null,[f(pe,{"onUpdate:checkModelValue":b,id:"BestQuality",value:"best quality"}),pt])]),e("div",ft,[e("div",null,[f(ne,{class:U(["radio",d.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[7]||(l[7]=c=>I.value=c),l[8]||(l[8]=c=>I.value=c)],name:"vbrOrCbr",value:"VBR",isDisabled:!(d.value.indexOf("best quality")<0),modelValue:I.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"VBR",class:U(d.value.indexOf("best quality")<0?"active":"inActive")},"VBR",2)]),e("div",null,[f(ne,{class:U(["radio",d.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[9]||(l[9]=c=>I.value=c),l[10]||(l[10]=c=>I.value=c)],name:"vbrOrCbr",value:"CBR",isDisabled:!(d.value.indexOf("best quality")<0),modelValue:I.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"CBR",class:U(d.value.indexOf("best quality")<0?"active":"inActive")},"CBR",2)])]),e("div",mt,[_t,f(fe,{"onUpdate:modelValue":l[11]||(l[11]=c=>V.value=c),placeholder:"",type:"text",onlyText:!0,modelValue:d.value.indexOf("best quality")>=0?1e3:V.value,class:U(d.value.indexOf("best quality")<0?"active":"inActive"),isDisabled:!(d.value.indexOf("best quality")<0)},null,8,["modelValue","class","isDisabled"]),gt]),e("div",bt,[f(O,{text:"Preview",class:U(n.value==null||y.value==null?"inActive":"active"),onClick:k},null,8,["class"])])])]),f(Me,{isUploaded:H.value,isInferred:A.value,originalVideoSrc:q.value,inferredVideoSrc:N.value},null,8,["isUploaded","isInferred","originalVideoSrc","inferredVideoSrc"])])],64)}}});const It=le(yt,[["__scopeId","data-v-ae0737eb"]]);export{It as default};
