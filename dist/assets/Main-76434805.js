import{P as le}from"./ProgressModal-25b8d8d1.js";import{d as K,r as o,i as Q,w as ie,o as ae,f as q,g as y,j as r,x as R,h as e,y as V,k as E,z as de,T as ue,F as J,A as ce,n as f,C as re,_ as W,t as z,D as ve,E as ee,G as te,p as se,m as oe,H as pe,I as fe}from"./index-875ad9d4.js";import{s as S}from"./services-39e6a1b0.js";const me={id:"teleport-upload-modal",class:"contents"},ge={class:"title-area"},_e={class:"original"},be={class:"pixell-ai"},ye=["src"],he=["src"],xe={key:0,class:"timeline-area"},ke={class:"video-menu-area"},Ie=K({__name:"Video",props:{isUploaded:{type:Boolean},isInferred:{type:Boolean},originalVideoSrc:{},inferredVideoSrc:{}},setup(B){const v=B,C=o(null),h=o(null),A=o(null),d=o(null),m=o(null),_=o(null),x=o(!1),g=o(!1),U=Q("signOut"),L=o(!1),n=o(null),{isUploaded:k,isInferred:O,originalVideoSrc:P,inferredVideoSrc:D}=ie(v),F=()=>{const u="test.mp4".split(".").pop();n.value!==null&&clearTimeout(n.value),window.navigator.clipboard.writeText("copy").then(()=>{ce.get("",{responseType:"blob"}).then(s=>{console.log(s)});const t=new Blob([""],{type:`video/${u}`}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="test",a.click(),URL.revokeObjectURL(a.href),L.value=!0,n.value=setTimeout(()=>{L.value=!1},2e3)})},j=u=>{const t=C.value;let a=!1;document.onmouseup=()=>{a=!1,g.value=!1};const s=()=>{a=!0,g.value=!0},p=I=>{if(a&&t!==null){const i=t.getBoundingClientRect();if("pageX"in I){const l=(I.pageX-i.left)/t.offsetWidth*100;l<100&&l>0?u.style.left=l+"%":l<=0?u.style.left="0px":l>=100&&(u.style.left="100%")}}},b=()=>{a=!1,g.value=!1};u.onmousedown=s,u.onmouseup=b,t!==null&&(t.onmousemove=p,t.onmouseout=p)},$=u=>{if(g.value){const t=C.value,a=A.value,s=m.value;if(t!==null){const p=t.getBoundingClientRect();if("pageX"in u){const b=(u.pageX-p.left)/t.offsetWidth*100;b<100&&b>0?(a.style.width=b+"%",s.style.width=100/b*100+"%",s.style.zIndex="3"):b<=0?(a.style.width="0",s.style.width="0"):b>=100&&(a.style.width="100%",s.style.width="100%")}}}},T=()=>{d.value!==null&&m.value!==null&&(d.value.paused?(d.value.play(),m.value.play(),x.value=!0):(d.value.pause(),m.value.pause(),x.value=!1))},w=u=>{d.value!==null&&m.value!==null&&(u=="forward"?(m.value.currentTime+=10,d.value.currentTime+=10):(m.value.currentTime-=10,d.value.currentTime-=10))},H=()=>{x.value=!1};return ae(()=>{const u=C.value,t=_.value;t!==null&&u!==null&&(j(t),u.addEventListener("mousemove",$,!1),u.addEventListener("mouseout",$,!1),u.addEventListener("touchstart",$,!1),u.addEventListener("touchmove",$,!1)),d.value!==null&&(d.value.addEventListener("ended",H,!1),d.value.addEventListener("timeupdate",a=>{},!1),d.value.addEventListener("seeking",a=>{d.value!==null&&console.log(Math.floor(d.value.currentTime))},!1))}),(u,t)=>{const a=q("FontAwesomeIcon");return f(),y(J,null,[r(a,{icon:"right-from-bracket",class:"sign-out-button",onClick:R(U)},null,8,["onClick"]),e("div",{class:"video-container",ref_key:"videoContainerRef",ref:C},[e("div",me,[e("div",ge,[e("div",_e,[e("strong",{class:V(R(k)?"uploaded":"not-uploaded")},"Original ",2)]),e("div",be,[e("strong",{class:V(R(O)?"uploaded":"not-uploaded")},"PIXELL AI",2)])]),e("div",{class:"video-area",ref_key:"videoAreaRef",ref:h},[R(O)?(f(),y("button",{key:0,ref_key:"draggableButton",ref:_,class:"drag-btn"},null,512)):E("",!0),e("video",{ref_key:"originalVideo",ref:d},[e("source",{src:R(P)},null,8,ye)],512),e("div",{id:"video-clipper",ref_key:"videoClipperRef",ref:A},[e("video",{ref_key:"inferenceVideo",ref:m},[e("source",{src:R(D)},null,8,he)],512)],512),R(O)?(f(),y("button",{key:1,class:"share-btn",onClick:F},[r(ue,{name:"fade",mode:"out-in"},{default:de(()=>[L.value?(f(),y("span",{key:0,class:"copy-text",onClick:t[0]||(t[0]=re(()=>{},["stop"]))},"copied.")):E("",!0)]),_:1})])):E("",!0)],512),R(O)?(f(),y("div",xe,[e("div",ke,[r(a,{icon:"play",class:"fa-flip-both fa-3x prev-button",onClick:t[1]||(t[1]=s=>w("backward"))}),r(a,{icon:"circle-play",class:"fa-3x play-button",onClick:T}),r(a,{icon:"play",class:"fa-3x next-button",onClick:t[2]||(t[2]=s=>w("forward"))})])])):E("",!0)])],512)],64)}}});const Ve=W(Ie,[["__scopeId","data-v-e12fa026"]]),Be="http://172.168.10.91:49090/assets/sample_video_img-8e9d2f79.png",G=B=>(se("data-v-a5bf2b61"),B=B(),oe(),B),Ce={class:"upload-modal-container"},we={class:"contents"},Ae=G(()=>e("label",{class:"file-upload-txt",for:"file-upload"},"Choose File",-1)),Le=G(()=>e("p",{class:"guide-msg"}," Your Video Files are safely stored and secured using encryption ",-1)),Oe={class:"sample-video-area"},$e=G(()=>e("h3",{class:"h3-title"},"Try Sample Video",-1)),Se={class:"sample-video-list"},Ue=["onClick"],Ee={key:0,class:"file-name-area"},Me={class:"file-name"},Pe={key:1,class:"file-name-area"},Re={class:"upload-btn-area"},qe=K({__name:"UploadModal",emits:["update:close","update:upload","update:abort"],setup(B,{emit:v}){const C=Q("defaultInstance"),h=Q("emitter"),A=o([{name:"tes1.mp4"},{name:"tes2.mp4"},{name:"tes3.mp4"}]),d=o(0),m=o(!1),_=o(0),x=o(-1),g=o([]),U=o(!1),L=new AbortController,n=t=>{g.value.length>0?h.emit("update:alert",{isActive:!0,message:"이미 업로드된 파일이 존재합니다."}):x.value=t},k=()=>{U.value=!0},O=()=>{U.value=!1},P=t=>{U.value=!0,t.preventDefault()},D=t=>{if(x.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{t.preventDefault();const a=/(\.mov|\.mp4|\.mkv)$/i;U.value=!1;const s=t.dataTransfer;if(s&&s.files){for(const p of s.files)if(!a.exec(p.name)){h.emit("update:alert",{isActive:!0,message:"mp4,mov,mkv 확장자만 지원합니다."});break}F(s.files,"drop")}}},F=(t,a)=>{let s;if(a=="change"?s=t.files:s=t,s!==null)for(let p=0;p<s.length;p++)g.value.push({title:s[p].name,file:s[p]})},j=t=>{g.value.splice(t,1)},$=t=>{if(x.value!==-1)h.emit("update:alert",{isActive:!0,message:"이미 샘플비디오를 선택하셨습니다."});else{const a=t.target;a&&a.files&&F(a,"change")}},T=()=>{v("update:close")},w=()=>{v("update:abort"),L.abort()},H=()=>{Promise.all([C.get(S.videoList),C.get(S.inferenceModelList)]).then(t=>{v("update:upload",{videoList:t[0].data,inferenceModelList:t[1].data.data.filter(a=>a!==null)}),T()})},u=()=>{if(g.value.length>0){m.value=!0;const t=g.value,a=new FormData;for(let s=0;s<t.length;s++)console.log(t[s].file),a.append("file",t[s].file);C.postForm(S.upload,a,{signal:L.signal,onUploadProgress:s=>{const p=s.loaded*100/s.total;_.value=Number(p.toFixed(0)),p==100&&(m.value=!1)},headers:{"Content-Type":"multipart/form-data",type:"video"}}).then(s=>{console.log("output-> result",s),H()})}else h.emit("update:alert",{isActive:!0,message:"파일을 업로드 해주세요."})};return(t,a)=>{const s=q("FontAwesomeIcon"),p=q("BaseButton");return f(),y(J,null,[m.value?(f(),z(le,{key:0,text:"video file uploading...",progressValue:_.value,"onUpdate:closeProgressModal":w},null,8,["progressValue"])):E("",!0),e("div",Ce,[e("button",{class:"close-btn",onClick:T}),e("div",we,[e("div",{class:V(["file-upload-area",U.value?"dragged":""]),onDragenter:k,onDragover:P,onDragleave:O,onDrop:D},[e("strong",null,[ve(" Drop Video File here to upload or "),Ae,(f(),y("input",{key:d.value,type:"file",id:"file-upload",accept:".mp4, .mov, .mkv",onChange:$,onClick:a[0]||(a[0]=b=>d.value+=1),multiple:""},null,32))])],34),Le,e("div",Oe,[$e,e("ul",Se,[(f(!0),y(J,null,ee(A.value,(b,I)=>(f(),y("li",{key:I},[e("img",{onClick:i=>n(I),src:Be,class:V(I==x.value?"selected":"")},null,10,Ue)]))),128))])]),g.value.length>0?(f(),y("ul",Ee,[(f(!0),y(J,null,ee(g.value,(b,I)=>(f(),y("li",{key:I},[e("span",Me,te(b.file.name),1),r(s,{icon:"xmark",class:"delete-button",onClick:i=>j(I)},null,8,["onClick"])]))),128))])):E("",!0),x.value!=-1?(f(),y("ul",Pe,[e("li",null,te(A.value[x.value].name),1)])):E("",!0),e("div",Re,[r(p,{text:"Upload",onClick:u})])])])],64)}}});const De=W(qe,[["__scopeId","data-v-a5bf2b61"]]),M=B=>(se("data-v-f51824fe"),B=B(),oe(),B),Fe={class:"upload-area"},Te=M(()=>e("h2",{class:"h2-title"},"PIXELL AI",-1)),Ne={class:"row"},je={class:"row"},Xe=M(()=>e("label",{class:"label"},"video File",-1)),He={class:"setting-area"},Je=M(()=>e("h2",{class:"h2-title"},"Output Setting",-1)),Qe={class:"row"},ze=M(()=>e("label",{class:"label"},"AI Model",-1)),Ke={class:"row"},We=M(()=>e("label",{class:"label"},"Format",-1)),Ge={class:"row"},Ye=M(()=>e("label",{class:"label"},"Encoder",-1)),Ze={class:"row check-area"},et=M(()=>e("label",{for:"BestQuality"},"Best Quality",-1)),tt={class:"row check-area"},lt={class:"row"},at=M(()=>e("label",{class:"bitrate"},"AVg.Bitrate : ",-1)),st=M(()=>e("span",{class:"unit"},"(kbps)",-1)),ot={class:"row"},nt=K({__name:"Main",setup(B){const v=Q("emitter"),C=o(0),h=Q("defaultInstance"),A=o([]),d=o(null),m=o([]),_=o(null),x=[{name:"mp4"},{name:"mov"},{name:"mkv"}],g=o({name:"mp4"}),U=[{name:"H.264"},{name:"H.265"},{name:"ProRes"}],L=o({name:"H.264"}),n=o([]),k=o("VBR"),O=o(!1),P=o(!1),D=o("128"),F=o(0),j=o(!1),$=o(!1),T=o("");let w;const H=i=>{d.value=null,m.value=[],A.value=[],m.value=i.inferenceModelList,A.value=i.videoList},u=()=>{Promise.all([h.get(S.videoList),h.get(S.inferenceModelList)]).then(i=>{A.value=i[0].data,m.value=i[1].data.data.filter(l=>l!==null)})},t=i=>{const l=n.value.indexOf(i);l>=0?n.value.splice(l,1):i=="best quality"?(n.value=[],n.value.push("best quality")):n.value.push(i)},a=()=>{d.value==null?v.emit("update:alert",{isActive:!0,message:"Please select a video file."}):_.value==null?v.emit("update:alert",{isActive:!0,message:"Please select ai model."}):(v.emit("update:loading",{isLoading:!0}),h.post(S.videoInference,{videoId:d.value&&d.value.videoId,containerId:_.value.containerId,format:g.value.name,encoder:L.value.name,bestQuality:n.value.indexOf("best quality")>=0?1:0,twoPassEncoding:n.value.indexOf("best quality")>=0?0:n.value.indexOf("2-Pass Encoding")>=0?1:0,avgBitrate:n.value.indexOf("best quality")>=0?0:D.value,vbr:n.value.indexOf("best quality")>=0?!1:k.value=="VBR",cbr:n.value.indexOf("best quality")>=0?!1:k.value=="CBR"}).then(i=>{console.log(i),localStorage.setItem("inference",JSON.stringify({uuid:i.data.data,containerId:_.value.containerId})),T.value=i.data.data,p(i.data.data)}))},s=()=>{v.emit("update:alert",{isActive:!0,message:"취소하시겠습니까?",fn:()=>{w.close(),P.value=!1,$.value=!1,v.emit("update:loading",{isLoading:!0}),I({containerId:_.value.containerId,uuid:T.value})}})},p=i=>{w=new EventSource(S.connectSSE+`?uuid=${i}`),w.onopen=()=>{console.log(S.connectSSE+`?uuid=${i}----connect`)},w.onmessage=l=>{try{if(typeof JSON.parse(l.data)=="object"){const N=JSON.parse(l.data);N.step=="inference"&&(P.value=!0,v.emit("update:loading",{isLoading:!1}),F.value=N.progress,N.progress==100&&(w.close(),$.value=!0,localStorage.removeItem("inference"),P.value=!1,v.emit("update:loading",{isLoading:!0}),h.get(S.videoDownload+`?video_id=${i}`).then(X=>{console.log("video download",X),v.emit("update:loading",{isLoading:!1})})))}}catch{}},w.onerror=l=>{v.emit("update:loading",{isLoading:!1}),console.log(l)}},b=i=>(i.preventDefault(),i.stopImmediatePropagation(),""),I=i=>{v.emit("update:alert",{isActive:!0,message:"추론 정지중입니다. 잠시만 기다려주세요."}),h.delete(S.videoInference+`?containerId=${i.containerId}&uuid=${i.uuid}`).then(l=>{console.log("삭제",l),u(),v.emit("update:loading",{isLoading:!1}),v.emit("update:alert",{isActive:!0,message:"추론 정지가 완료되었습니다."}),localStorage.removeItem("inference")})};return pe(()=>{window.removeEventListener("beforeunload",b)}),ae(()=>{window.addEventListener("beforeunload",b),u(),localStorage.getItem("inference")!=null&&I(JSON.parse(localStorage.getItem("inference")))}),(i,l)=>{const N=q("BaseButton"),X=q("BaseSelect"),Y=q("BaseCheckBox"),Z=q("BaseRadio"),ne=q("BaseInput");return f(),y(J,null,[P.value?(f(),z(le,{key:0,text:"Inference is in progress...",progressValue:F.value,"onUpdate:closeProgressModal":s},null,8,["progressValue"])):E("",!0),e("main",null,[O.value?(f(),z(fe,{key:0,to:"#teleport-upload-modal"},[(f(),z(De,{key:C.value,"onUpdate:close":l[0]||(l[0]=c=>O.value=!1),"onUpdate:upload":l[1]||(l[1]=c=>H(c)),"onUpdate:abort":l[2]||(l[2]=c=>C.value+=1)}))])):E("",!0),e("aside",null,[e("section",Fe,[Te,e("div",Ne,[r(N,{onClick:l[3]||(l[3]=c=>O.value=!0),text:"Upload Video"})]),e("div",je,[Xe,r(X,{"onUpdate:selectBox":l[4]||(l[4]=c=>{j.value=!0,d.value=c}),name:"fileName",options:A.value,text:d.value==null?"<span class=not-selected>Please Upload Video Files</span>":d.value.fileName},null,8,["options","text"])])]),e("section",He,[Je,e("div",Qe,[ze,r(X,{"onUpdate:selectBox":l[5]||(l[5]=c=>{_.value=c}),options:m.value,name:"projectName,modelName",text:_.value==null?"<span class=not-selected>Select AI Model</span>":_.value.projectName+"/"+_.value.modelName},null,8,["options","text"])]),e("div",Ke,[We,r(X,{"onUpdate:selectBox":l[6]||(l[6]=c=>g.value=c),options:x,name:"name",text:g.value.name},null,8,["text"])]),e("div",Ge,[Ye,r(X,{"onUpdate:selectBox":l[7]||(l[7]=c=>L.value=c),options:U,name:"name",text:L.value.name},null,8,["text"])]),e("div",Ze,[e("div",null,[r(Y,{"onUpdate:checkModelValue":t,id:"BestQuality",value:"best quality"}),et]),e("div",null,[e("span",{class:V(["check-box",n.value.indexOf("best quality")<0?"active":"inActive"])},[r(Y,{"onUpdate:checkModelValue":t,id:n.value.indexOf("best quality")<0?"2PassEncoding":"",value:"2-Pass Encoding"},null,8,["id"])],2),e("label",{for:"2PassEncoding",class:V(n.value.indexOf("best quality")<0?"active":"inActive")},"2-Pass Encoding",2)])]),e("div",tt,[e("div",null,[r(Z,{class:V(["radio",n.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[8]||(l[8]=c=>k.value=c),l[9]||(l[9]=c=>k.value=c)],name:"vbrOrCbr",value:"VBR",isDisabled:!(n.value.indexOf("best quality")<0),modelValue:k.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"VBR",class:V(n.value.indexOf("best quality")<0?"active":"inActive")},"VBR",2)]),e("div",null,[r(Z,{class:V(["radio",n.value.indexOf("best quality")<0?"active":"inActive"]),"onUpdate:modelValue":[l[10]||(l[10]=c=>k.value=c),l[11]||(l[11]=c=>k.value=c)],name:"vbrOrCbr",value:"CBR",isDisabled:!(n.value.indexOf("best quality")<0),modelValue:k.value},null,8,["class","isDisabled","modelValue"]),e("label",{for:"CBR",class:V(n.value.indexOf("best quality")<0?"active":"inActive")},"CBR",2)])]),e("div",lt,[at,r(ne,{"onUpdate:modelValue":l[12]||(l[12]=c=>D.value=c),placeholder:"",type:"text",onlyText:!0,modelValue:n.value.indexOf("best quality")>=0?0:D.value,class:V(n.value.indexOf("best quality")<0?"active":"inActive"),isDisabled:!(n.value.indexOf("best quality")<0)},null,8,["modelValue","class","isDisabled"]),st]),e("div",ot,[r(N,{text:"Preview",class:V(d.value==null||_.value==null?"inActive":"active"),onClick:a},null,8,["class"])])])]),r(Ve,{isUploaded:j.value,isInferred:$.value,originalVideoSrc:"",inferredVideoSrc:""},null,8,["isUploaded","isInferred"])])],64)}}});const ct=W(nt,[["__scopeId","data-v-f51824fe"]]);export{ct as default};
