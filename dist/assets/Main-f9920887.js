import{P as ie}from"./ProgressModal-17d46f99.js";import{d as te,r as a,i as z,w as ye,o as de,f as P,g as y,j as p,x as N,h as e,y as E,z as be,A as he,C as ue,T as ke,k as T,F as j,n as v,D as xe,_ as le,t as W,E as Ie,G,H as Y,p as ce,m as re,I as Ve,J as Ce}from"./index-19bc380e.js";import{s as w}from"./services-eb80de62.js";const we={id:"teleport-upload-modal",class:"contents"},Be={class:"title-area"},Ae={class:"original"},Se={class:"pixell-ai"},$e=["src"],Le=["src"],Oe={key:0,class:"timeline-area"},Ue={class:"video-menu-area"},Ee=te({__name:"Video",props:{isUploaded:{type:Boolean},isInferred:{type:Boolean},originalVideoSrc:{},inferredVideoSrc:{}},setup(B){const r=B,A=a(null),h=a(null),x=a(null),i=a(null),g=a(null),b=a(null),I=a(!1),f=a(!1),M=z("signOut"),L=a(!1),d=a(null),{isUploaded:V,isInferred:O,originalVideoSrc:R,inferredVideoSrc:C}=ye(r),X=()=>{C.value.split(".").pop(),d.value!==null&&clearTimeout(d.value),console.log(C.value),window.navigator.clipboard.writeText(C.value).then(()=>{const u=document.createElement("a");u.href=C.value,u.download=C.value,u.click(),L.value=!0,d.value=setTimeout(()=>{L.value=!1},2e3)})},H=u=>{const t=A.value;console.log(t);let o=!1;document.onmouseup=()=>{o=!1,f.value=!1};const s=()=>{o=!0,f.value=!0},m=k=>{if(o&&t!==null){const J=t.getBoundingClientRect();if("pageX"in k){const $=(k.pageX-J.left)/t.offsetWidth*100;$<100&&$>0?u.style.left=$+"%":$<=0?u.style.left="0px":$>=100&&(u.style.left="100%")}}},_=()=>{o=!1,f.value=!1};u.onmousedown=s,u.onmouseup=_,t!==null&&(t.onmousemove=m,t.onmouseout=m)},S=u=>{if(f.value){const t=A.value,o=x.value,s=g.value;if(t!==null){const m=t.getBoundingClientRect();if("pageX"in u){const _=(u.pageX-m.left)/t.offsetWidth*100;_<100&&_>0?(o.style.width=_+"%",s.style.width=100/_*100+"%",s.style.zIndex="3"):_<=0?(o.style.width="0",s.style.width="0"):_>=100&&(o.style.width="100%",s.style.width="100%")}}}},F=()=>{i.value!==null&&g.value!==null&&(i.value.paused?(i.value.play(),g.value.play(),I.value=!0):(i.value.pause(),g.value.pause(),I.value=!1))},q=u=>{i.value!==null&&g.value!==null&&(u=="forward"?(g.value.currentTime+=10,i.value.currentTime+=10):(g.value.currentTime-=10,i.value.currentTime-=10))},Q=()=>{I.value=!1};return de(()=>{const u=A.value,t=b.value;t!==null&&u!==null&&(H(t),u.addEventListener("mousemove",S,!1),u.addEventListener("mouseout",S,!1),u.addEventListener("touchstart",S,!1),u.addEventListener("touchmove",S,!1)),i.value!==null&&(i.value.addEventListener("ended",Q,!1),i.value.addEventListener("timeupdate",o=>{},!1),i.value.addEventListener("seeking",o=>{i.value!==null&&console.log(Math.floor(i.value.currentTime))},!1))}),(u,t)=>{const o=P("FontAwesomeIcon");return v(),y(j,null,[p(o,{icon:"right-from-bracket",class:"sign-out-button",onClick:N(M)},null,8,["onClick"]),e("div",{class:"video-container",ref_key:"videoContainerRef",ref:A},[e("div",we,[e("div",Be,[e("div",Ae,[e("strong",{class:E(N(V)?"uploaded":"not-uploaded")},"Original ",2)]),e("div",Se,[e("strong",{class:E(N(O)?"uploaded":"not-uploaded")},"PIXELL AI",2)])]),e("div",{class:"video-area",ref_key:"videoAreaRef",ref:h},[be(e("button",{ref_key:"draggableButton",ref:b,class:"drag-btn"},null,512),[[he,N(O)]]),e("video",{ref_key:"originalVideo",ref:i,src:N(R)},null,8,$e),e("div",{id:"video-clipper",ref_key:"videoClipperRef",ref:x},[e("video",{ref_key:"inferenceVideo",ref:g,src:N(C)},null,8,Le)],512),N(O)?(v(),y("button",{key:0,class:"share-btn",onClick:X},[p(ke,{name:"fade",mode:"out-in"},{default:ue(()=>[L.value?(v(),y("span",{key:0,class:"copy-text",onClick:t[0]||(t[0]=xe(()=>{},["stop"]))},"download and copy")):T("",!0)]),_:1})])):T("",!0)],512),N(O)?(v(),y("div",Oe,[e("div",Ue,[p(o,{icon:"play",class:"fa-flip-both fa-3x prev-button",onClick:t[1]||(t[1]=s=>q("backward"))}),p(o,{icon:"circle-play",class:"fa-3x play-button",onClick:F}),p(o,{icon:"play",class:"fa-3x next-button",onClick:t[2]||(t[2]=s=>q("forward"))})])])):T("",!0)])],512)],64)}}});const Me=le(Ee,[["__scopeId","data-v-aaf53aee"]]),Pe="http://222.107.124.161:64000/assets/sample_video_img-8e9d2f79.png",ae=B=>(ce("data-v-e55f1bc4"),B=B(),re(),B),De={class:"upload-modal-container"},Re={class:"contents"},Fe=ae(()=>e("label",{class:"file-upload-txt",for:"file-upload"},"Choose File",-1)),qe=ae(()=>e("p",{class:"guide-msg"}," Your Video Files are safely stored and secured using encryption ",-1)),Ne={class:"sample-video-area"},Te=ae(()=>e("h3",{class:"h3-title"},"Try Sample Video",-1)),Xe={class:"sample-video-list"},Je=["onClick"],je={key:0,class:"file-name-area"},He={class:"file-name"},Qe={key:1,class:"file-name-area"},ze={class:"upload-btn-area"},Ke=te({__name:"UploadModal",emits:["update:close","update:upload","update:abort"],setup(B,{emit:r}){const A=z("defaultInstance"),h=z("emitter"),x=a([{name:"tes1.mp4"},{name:"tes2.mp4"},{name:"tes3.mp4"}]),i=a(0),g=a(!1),b=a(0),I=a(-1),f=a([]),M=a(!1),L=new AbortController,d=t=>{f.value.length>0?h.emit("update:alert",{isActive:!0,message:"이미 업로드된 파일이 존재합니다."}):I.value=t},V=()=>{M.value=!0},O=()=>{M.value=!1},R=t=>{M.value=!0,t.preventDefault()},C=t=>{if(I.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{t.preventDefault();const o=/(\.mov|\.mp4|\.mkv)$/i;M.value=!1;const s=t.dataTransfer;if(s&&s.files){for(const m of s.files)if(!o.exec(m.name)){h.emit("update:alert",{isActive:!0,message:"mp4,mov,mkv 확장자만 지원합니다."});break}X(s.files,"drop")}}},X=(t,o)=>{let s;if(o=="change"?s=t.files:s=t,s!==null)for(let m=0;m<s.length;m++){f.value.push({title:s[m].name,file:s[m]});const _=f.value.filter((k,J,$)=>J===$.findIndex(Z=>Z.title===k.title));f.value=_}},H=t=>{f.value.splice(t,1)},S=t=>{if(I.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{const o=t.target;o&&o.files&&X(o,"change")}},F=()=>{r("update:close")},q=()=>{r("update:abort"),L.abort()},Q=()=>{Promise.all([A.get(w.videoList),A.get(w.inferenceModelList)]).then(t=>{r("update:upload",{videoList:t[0].data,inferenceModelList:t[1].data.data.filter(o=>o!==null)}),F()})},u=()=>{if(f.value.length>0){g.value=!0;const t=f.value,o=new FormData;for(let s=0;s<t.length;s++)console.log(t[s].file),o.append("file",t[s].file);A.postForm(w.upload,o,{signal:L.signal,onUploadProgress:s=>{const m=s.loaded*100/s.total;b.value=Number(m.toFixed(0)),m==100&&(g.value=!1)},headers:{"Content-Type":"multipart/form-data",type:"video"}}).then(s=>{console.log("output-> result",s),Q()})}else h.emit("update:alert",{isActive:!0,message:"파일을 업로드 해주세요."})};return(t,o)=>{const s=P("FontAwesomeIcon"),m=P("BaseButton");return v(),y(j,null,[g.value?(v(),W(ie,{key:0,text:"video file uploading...",progressValue:b.value,"onUpdate:closeProgressModal":q},null,8,["progressValue"])):T("",!0),e("div",De,[e("button",{class:"close-btn",onClick:F}),e("div",Re,[e("div",{class:E(["file-upload-area",M.value?"dragged":""]),onDragenter:V,onDragover:R,onDragleave:O,onDrop:C},[e("strong",null,[Ie(" Drop Video File here to upload or "),Fe,(v(),y("input",{key:i.value,type:"file",id:"file-upload",accept:".mp4, .mov, .mkv",onChange:S,onClick:o[0]||(o[0]=_=>i.value+=1),multiple:""},null,32))])],34),qe,e("div",Ne,[Te,e("ul",Xe,[(v(!0),y(j,null,G(x.value,(_,k)=>(v(),y("li",{key:k},[e("img",{onClick:J=>d(k),src:Pe,class:E(k==I.value?"selected":"")},null,10,Je)]))),128))])]),f.value.length>0?(v(),y("ul",je,[(v(!0),y(j,null,G(f.value,(_,k)=>(v(),y("li",{key:k},[e("span",He,Y(_.file.name),1),p(s,{icon:"xmark",class:"delete-button",onClick:J=>H(k)},null,8,["onClick"])]))),128))])):T("",!0),I.value!=-1?(v(),y("ul",Qe,[e("li",null,Y(x.value[I.value].name),1)])):T("",!0),e("div",ze,[p(m,{text:"Upload",onClick:u})])])])],64)}}});const We=le(Ke,[["__scopeId","data-v-e55f1bc4"]]),D=B=>(ce("data-v-1f90029a"),B=B(),re(),B),Ge={class:"upload-area"},Ye=D(()=>e("h2",{class:"h2-title"},"PIXELL AI",-1)),Ze={class:"row"},et={class:"row video-file-select-area"},tt=D(()=>e("label",{class:"label"},"video File",-1)),lt={class:"date"},at={class:"file-name-area"},st=["onClick"],ot={class:"setting-area"},nt=D(()=>e("h2",{class:"h2-title"},"Output Setting",-1)),it={class:"row"},dt=D(()=>e("label",{class:"label"},"AI Model",-1)),ut={class:"row"},ct=D(()=>e("label",{class:"label"},"Format",-1)),rt={class:"row"},vt=D(()=>e("label",{class:"label"},"Encoder",-1)),pt={class:"row check-area"},ft=D(()=>e("label",{for:"BestQuality"},"Best Quality",-1)),mt={class:"row check-area"},_t={class:"row"},gt=D(()=>e("label",{class:"bitrate"},"Bitrate : ",-1)),yt=D(()=>e("span",{class:"unit"},"(kbps)",-1)),bt={class:"row"},ht=te({__name:"Main",setup(B){const r=z("emitter"),A=a(0),h=z("defaultInstance"),x=a([]),i=a(null),g=a([]),b=a(null),I=[{name:"mp4"},{name:"mov"},{name:"mkv"}],f=a({name:"mp4"}),M=[{name:"H.264"},{name:"H.265"},{name:"ProRes"}],L=a({name:"H.264"}),d=a([]),V=a("VBR"),O=a(!1),R=a(!1),C=a("1000"),X=a(0),H=a(!1),S=a(!1),F=a(""),q=a(""),Q=a(""),u=a("");let t;const o=n=>{x.value.length==0&&(r.emit("update:alert",{isActive:!0,message:"Please upload your video files."}),n.stopPropagation())},s=n=>{i.value=null,g.value=[],x.value=[],g.value=n.inferenceModelList,x.value=n.videoList},m=n=>{r.emit("update:alert",{isActive:!0,message:"삭제하시겠습니까?",fn:()=>{console.log("삭제api"),r.emit("update:loading",{isLoading:!0}),h.delete(w.video+`?videoId=${n}`).then(l=>{console.log(l),r.emit("update:loading",{isLoading:!1}),_()})}})},_=()=>{Promise.all([h.get(w.videoList),h.get(w.inferenceModelList)]).then(n=>{x.value=n[0].data,g.value=n[1].data.data.filter(l=>l!==null)})},k=n=>{const l=d.value.indexOf(n);l>=0?d.value.splice(l,1):n=="best quality"?(d.value=[],d.value.push("best quality")):d.value.push(n)},J=()=>{i.value==null?r.emit("update:alert",{isActive:!0,message:"Please select a video file."}):b.value==null?r.emit("update:alert",{isActive:!0,message:"Please select ai model."}):(S.value=!1,F.value="",q.value="",r.emit("update:loading",{isLoading:!0}),h.post(w.videoInference,{videoId:i.value&&i.value.videoId,containerId:b.value.containerId,format:f.value.name,encoder:L.value.name,bestQuality:d.value.indexOf("best quality")>=0?1:0,twoPassEncoding:d.value.indexOf("best quality")>=0?0:d.value.indexOf("2-Pass Encoding")>=0?1:0,avgBitrate:d.value.indexOf("best quality")>=0?"1000":C.value,vbr:d.value.indexOf("best quality")>=0?!1:V.value=="VBR",cbr:d.value.indexOf("best quality")>=0?!1:V.value=="CBR"}).then(n=>{console.log(n),sessionStorage.setItem("inference",JSON.stringify({uuid:n.data.data,containerId:b.value.containerId})),Q.value=n.data.data,ve(n.data.data)}))},$=()=>{t.close(),R.value=!1,S.value=!1,oe({containerId:b.value.containerId,uuid:Q.value})},Z=()=>{r.emit("update:alert",{isActive:!0,message:"취소하시겠습니까?",fn:()=>{r.emit("update:loading",{isLoading:!0}),$()}})},ve=n=>{t=new EventSource(w.connectSSE+`?uuid=${n}`),t.onopen=()=>{r.emit("update:loading",{isLoading:!1}),console.log(w.connectSSE+`?uuid=${n}----connect`)},t.onmessage=l=>{try{if(typeof JSON.parse(l.data)=="object"){const U=JSON.parse(l.data);u.value=U.step,X.value=U.progress,R.value=!0,U.status=="error"&&$(),U.step=="all"&&U.progress==100&&U.result=="true"&&(t.close(),R.value=!1,sessionStorage.removeItem("inference"),r.emit("update:loading",{isLoading:!0}),F.value="http://222.107.124.161:64000"+w.videoDownload+`?videoId=${i.value&&i.value.videoId}`,q.value="http://222.107.124.161:64000"+w.videoDownload+`?uuid=${n}`,S.value=!0,r.emit("update:loading",{isLoading:!1}))}}catch{}},t.onerror=l=>{console.log(l),$()}},se=n=>(n.preventDefault(),n.stopImmediatePropagation(),""),oe=n=>{r.emit("update:alert",{isActive:!0,message:"추론 정지중입니다. 잠시만 기다려주세요."}),h.delete(w.videoInference+`?containerId=${n.containerId}&uuid=${n.uuid}`).then(l=>{console.log("삭제",l),_(),r.emit("update:loading",{isLoading:!1}),r.emit("update:alert",{isActive:!0,message:"추론 정지가 완료되었습니다."}),sessionStorage.removeItem("inference")})};return Ve(()=>{window.removeEventListener("beforeunload",se)}),de(()=>{window.addEventListener("beforeunload",se),_(),sessionStorage.getItem("inference")!=null&&oe(JSON.parse(sessionStorage.getItem("inference")))}),(n,l)=>{const U=P("BaseButton"),pe=P("FontAwesomeIcon"),K=P("BaseSelect"),fe=P("BaseCheckBox"),ne=P("BaseRadio"),me=P("BaseInput");return v(),y(j,null,[R.value?(v(),W(ie,{key:0,text:u.value+" in_progress...",progressValue:X.value,"onUpdate:closeProgressModal":Z},null,8,["text","progressValue"])):T("",!0),e("main",null,[O.value?(v(),W(Ce,{key:0,to:"#teleport-upload-modal"},[(v(),W(We,{key:A.value,"onUpdate:close":l[0]||(l[0]=c=>O.value=!1),"onUpdate:upload":l[1]||(l[1]=c=>s(c)),"onUpdate:abort":l[2]||(l[2]=c=>A.value+=1)}))])):T("",!0),e("aside",null,[e("section",Ge,[Ye,e("div",Ze,[p(U,{onClick:l[3]||(l[3]=c=>O.value=!0),text:"Upload Video"})]),e("div",et,[tt,p(K,{onClick:o,name:"fileName",options:x.value,text:i.value==null?"<span class=not-selected>Please Upload Video Files</span>":i.value.fileName},{list:ue(()=>[(v(!0),y(j,null,G(x.value,(c,_e)=>(v(),y("li",{class:"optionItem",key:_e},[e("span",lt,Y(c.date),1),(v(!0),y(j,null,G(c.video,ee=>(v(),y("div",at,[e("span",{class:"file-name",onClick:ge=>{H.value=!0,i.value=ee}},Y(ee.fileName),9,st),p(pe,{icon:"xmark",class:"delete-button",onClick:ge=>m(ee.videoId)},null,8,["onClick"])]))),256))]))),128))]),_:1},8,["options","text"])])]),e("section",ot,[nt,e("div",it,[dt,p(K,{"onUpdate:selectBox":l[4]||(l[4]=c=>{b.value=c}),options:g.value,name:"projectName,modelName",text:b.value==null?"<span class=not-selected>Select AI Model</span>":b.value.projectName+"/"+b.value.modelName},null,8,["options","text"])]),e("div",ut,[ct,p(K,{"onUpdate:selectBox":l[5]||(l[5]=c=>f.value=c),options:I,name:"name",text:f.value.name},null,8,["text"])]),e("div",rt,[vt,p(K,{"onUpdate:selectBox":l[6]||(l[6]=c=>L.value=c),options:M,name:"name",text:L.value.name},null,8,["text"])]),e("div",pt,[e("div",null,[p(fe,{"onUpdate:checkModelValue":k,id:"BestQuality",value:"best quality"}),ft])]),e("div",mt,[e("div",null,[p(ne,{class:E(["radio",d.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[7]||(l[7]=c=>V.value=c),l[8]||(l[8]=c=>V.value=c)],name:"vbrOrCbr",value:"VBR",isDisabled:!(d.value.indexOf("best quality")<0),modelValue:V.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"VBR",class:E(d.value.indexOf("best quality")<0?"active":"inActive")},"VBR",2)]),e("div",null,[p(ne,{class:E(["radio",d.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[9]||(l[9]=c=>V.value=c),l[10]||(l[10]=c=>V.value=c)],name:"vbrOrCbr",value:"CBR",isDisabled:!(d.value.indexOf("best quality")<0),modelValue:V.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"CBR",class:E(d.value.indexOf("best quality")<0?"active":"inActive")},"CBR",2)])]),e("div",_t,[gt,p(me,{"onUpdate:modelValue":l[11]||(l[11]=c=>C.value=c),placeholder:"",type:"text",onlyText:!0,modelValue:d.value.indexOf("best quality")>=0?1e3:C.value,class:E(d.value.indexOf("best quality")<0?"active":"inActive"),isDisabled:!(d.value.indexOf("best quality")<0)},null,8,["modelValue","class","isDisabled"]),yt]),e("div",bt,[p(U,{text:"Preview",class:E(i.value==null||b.value==null?"inActive":"active"),onClick:J},null,8,["class"])])])]),p(Me,{isUploaded:H.value,isInferred:S.value,originalVideoSrc:F.value,inferredVideoSrc:q.value},null,8,["isUploaded","isInferred","originalVideoSrc","inferredVideoSrc"])])],64)}}});const Vt=le(ht,[["__scopeId","data-v-1f90029a"]]);export{Vt as default};
