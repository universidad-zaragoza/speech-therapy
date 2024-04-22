import{j as t,r as u,R as D}from"./react-ePaza90U.js";import{c as X}from"./react-dom-BGCucnFv.js";import{L as Z,B as ee}from"./react-router-dom-hlOzkE61.js";import{B as C,C as O,R as g,a as v,N as S,b as te,F as A}from"./react-bootstrap-JrysSMUi.js";import{a as B,d as ae,e as T}from"./react-router-CSlUcBGA.js";import{u as y,a as I,P as se}from"./react-redux-Ce23xZ5m.js";import{c as P,a as ie}from"./@reduxjs-CJetLCaM.js";import{l as ne}from"./socket.io-client-DFi9RC7o.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyRdwddT.js";import"./@restart-BR1W1S6M.js";import"./dom-helpers-BCHGzjX0.js";import"./prop-types-ZMHxiqrO.js";import"./prop-types-extra-_x66_ok4.js";import"./uncontrollable-CNb32MsV.js";import"./@babel-XUcqRoeX.js";import"./react-transition-group-DoHwZBwe.js";import"./use-sync-external-store-R5Bn9tbY.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";import"./engine.io-client-DBBxzneW.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io-Dkula2eQ.js";import"./socket.io-parser-BBkuslX-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const oe="/",le="/speech-therapy",re="/mainMenu",ce="/debug",f={START_APP_ROUTE:oe,BASE_ROUTE:le,MAIN_MENU_ROUTE:re,DEBUG_ROUTE:ce},de=()=>{const e=B();return{onClickNavigateToPath:a=>{e(a)}}},R=e=>{const{id:a,classStyle:n,children:i,path:s,type:o,onClick:c,isDisabled:d}=e,{onClickNavigateToPath:l}=de();return t.jsx(t.Fragment,{children:o==="button"&&c?t.jsx(C,{id:a,type:"button",variant:"primary",className:`${n}`,onTouchEnd:c,disabled:!!d,children:i}):o==="button"&&!c?t.jsx(C,{id:a,type:"button",variant:"primary",className:`${n}`,onTouchEnd:()=>l(s),disabled:!!d,children:i}):t.jsx(C,{id:a,type:o,variant:"primary",className:`${n}`,disabled:!!d,children:i})})},ue="_container_yjrep_19",he="_row_yjrep_39",pe="_rowTitle_yjrep_51",me="_rowButton_yjrep_65",be="_col_yjrep_73",xe="_button_yjrep_85",ge="_buttonText_yjrep_103",h={container:ue,row:he,rowTitle:pe,rowButton:me,col:be,button:xe,buttonText:ge},ve=()=>t.jsx(t.Fragment,{children:t.jsxs(O,{fluid:!0,className:h.container,children:[t.jsx(g,{className:`${h.row} ${h.rowTitle}`,children:t.jsx(v,{className:h.col,children:t.jsx("p",{children:"Ejercicios Logopedia"})})}),t.jsx(g,{className:`${h.row} ${h.rowButton}`,children:t.jsx(v,{className:h.col,children:t.jsx(R,{id:"start",classStyle:h.button,path:"/mainMenu",type:"button",isDisabled:!1,children:t.jsx("p",{className:h.buttonText,children:"Comenzar"})})})})]})}),ke={isOptionChecked:!1},w=P({name:"menuState",initialState:ke,reducers:{setIsOptionChecked:(e,a)=>{e.isOptionChecked=a.payload}}}),{setIsOptionChecked:L}=w.actions,je=w.reducer,Ce="https://192.168.1.109",U=ne(Ce),Ne=()=>{const[e,a]=u.useState(1);u.useState("");const{printDebug:n}=u.useContext($),i=y(),s=()=>{a(l=>l+1),c()},o=()=>{a(l=>l-1),c()},c=()=>{i(L(!1))},d=()=>{U.emit("tomarFoto")};return u.useEffect(()=>{console.log("Sending image to socket io..."),n("Sending image to socket io..."),d()},[]),u.useEffect(()=>{U.on("fotoLista",l=>{console.log("Received image by socket => "+l),n("Received image by socket => "+l)})},[]),{menuNumber:e,handleNextButtonClick:s,handlePreviousButtonClick:o}},Se=e=>{const{links:a}=e,n=B(),i=o=>{n(o)},s={color:"white",fontWeight:"bold",backgroundColor:"transparent",border:"none",textDecoration:"none"};return t.jsx(S,{collapseOnSelect:!0,expand:"md",bg:"dark",children:t.jsxs(O,{style:{width:"100%"},children:[t.jsx(S.Brand,{style:{color:"white",fontWeight:"bold"},href:"#home",children:"Logopedia"}),t.jsx(S.Toggle,{style:{backgroundColor:"white"},"aria-controls":"responsive-navbar-nav"}),t.jsx(S.Collapse,{id:"responsive-navbar-nav",children:t.jsx(te,{className:"justify-content-end",style:{width:"100%",color:"white",fontWeight:"bold"},children:a.map((o,c)=>t.jsx(C,{variant:"link",style:s,onClick:()=>{i(o.href)},children:o.label},c))})})]})})},ye="_menuView_o2kvl_1",fe="_container_o2kvl_13",_e="_col_o2kvl_33",Ee="_content_o2kvl_45",Me="_title_o2kvl_63",Oe="_buttonDiv_o2kvl_77",Te="_button_o2kvl_77",Pe="_buttonText_o2kvl_107",m={menuView:ye,container:fe,col:_e,content:Ee,title:Me,buttonDiv:Oe,button:Te,buttonText:Pe},k=e=>{const{title:a,navLinks:n,children:i,buttons:s}=e,o=I(c=>c.menuState.isOptionChecked);return t.jsxs("div",{className:m.menuView,children:[t.jsx(Se,{links:n}),t.jsx(O,{fluid:!0,className:m.container,children:t.jsx(g,{className:`${m.content}`,children:t.jsxs(v,{className:"p-0",children:[t.jsx(g,{children:t.jsx(v,{children:t.jsx("h1",{className:m.title,children:a})})}),t.jsx(g,{children:t.jsx(v,{className:"p-10",children:t.jsx("div",{children:i})})}),t.jsx(g,{children:t.jsx(v,{className:"p-10",children:t.jsx("div",{className:m.buttonDiv,children:s.map((c,d)=>t.jsx(R,{id:c.id,classStyle:m.button,onClick:c.onClick,path:c.path,type:"button",isDisabled:!o,children:t.jsx("p",{className:m.buttonText,children:c.label})},d))})})})]})})})]})},De={variables:{task:"",mode:"",source:"",responseMode:"",algorithm:""}},V=P({name:"facialModuleState",initialState:De,reducers:{setTask:(e,a)=>{e.variables.task=a.payload},setMode:(e,a)=>{e.variables.mode=a.payload},setSource:(e,a)=>{e.variables.source=a.payload},setResponseMode:(e,a)=>{e.variables.responseMode=a.payload},setAlgorithm:(e,a)=>{e.variables.algorithm=a.payload}}}),{setTask:Ae,setMode:Be,setSource:Ie,setResponseMode:Re,setAlgorithm:we}=V.actions,Le=V.reducer,Ue=()=>{const e=y(),a=(l,M)=>{switch(d(),M){case"task-id":n(l.target.value);break;case"mode-id":i(l.target.value);break;case"source-id":s(l.target.value);break;case"response-id":o(l.target.value);break;case"algorithm-id":c(l.target.value);break}},n=l=>{e(Ae(l))},i=l=>{e(Be(l))},s=l=>{e(Ie(l))},o=l=>{e(Re(l))},c=l=>{e(we(l))},d=()=>{e(L(!0))};return{handleOptionChange:a}},j=e=>{const{variableId:a,items:n}=e,{handleOptionChange:i}=Ue();return t.jsxs(t.Fragment,{children:[t.jsx("h4",{children:"Seleccione una de las siguientes opciones: "}),t.jsx(A,{children:t.jsx("div",{className:"mb-3",children:n.map((s,o)=>t.jsx(A.Check,{type:"radio",id:a,label:s.label,value:s.label,name:"options",onChange:c=>i(c,a)},o))},"default-radio")})]})},Ve=e=>{const{handleNextButtonClick:a}=e,n=[{label:"Debug",href:"/debug"},{label:"Salir",href:"/"}],i=[{label:"Detectar la cara"},{label:"Detectar la persona"},{label:"Detectar puntos clave de la cara"},{label:"Detectar la expresi\xF3n facial"},{label:"Detectar la edad y el g\xE9nero"},{label:"Reconocimiento facial"},{label:"Eliminar fondo"}],s=[{id:"next",path:"/mainMenu",label:"Siguiente",onClick:a}];return t.jsx(k,{title:"1.- TAREA",navLinks:n,buttons:s,children:t.jsx(j,{variableId:"task-id",items:i})})},He=e=>{const{handleNextButtonClick:a,handlePreviousButtonClick:n}=e,i=[{label:"Salir",href:"/"}],s=[{label:"Modo imagen"},{label:"Modo v\xEDdeo"}],o=[{id:"previous",path:"/mainMenu",label:"Anterior",onClick:n},{id:"next",path:"/mainMenu",label:"Siguiente",onClick:a}];return t.jsx(k,{title:"2.- MODO",navLinks:i,buttons:o,children:t.jsx(j,{variableId:"mode-id",items:s})})},qe=e=>{const{handleNextButtonClick:a,handlePreviousButtonClick:n}=e,i=[{label:"Salir",href:"/"}],s=[{label:"Respuesta en texto"},{label:"Respuesta sobre imagen"}],o=[{id:"previous",path:"/mainMenu",label:"Anterior",onClick:n},{id:"next",path:"/mainMenu",label:"Siguiente",onClick:a}];return t.jsx(k,{title:"4.- RESPUESTA",navLinks:i,buttons:o,children:t.jsx(j,{variableId:"algorithm-id",items:s})})},Fe=e=>{const{handleNextButtonClick:a,handlePreviousButtonClick:n}=e,i=[{label:"Salir",href:"/"}],s=[{label:"Subir im\xE1genes"},{label:"Tomar foto"}],o=[{id:"previous",path:"/mainMenu",label:"Anterior",onClick:n},{id:"next",path:"/mainMenu",label:"Siguiente",onClick:a}];return t.jsx(k,{title:"3.- FUENTE IMAGEN",navLinks:i,buttons:o,children:t.jsx(j,{variableId:"source-id",items:s})})},$e=e=>{const{handleNextButtonClick:a,handlePreviousButtonClick:n}=e,i=[{label:"Salir",href:"/"}],s=[{label:"Subir v\xEDdeo"},{label:"Grabar v\xEDdeo"}],o=[{id:"previous",path:"/mainMenu",label:"Anterior",onClick:n},{id:"next",path:"/mainMenu",label:"Siguiente",onClick:a}];return t.jsx(k,{title:"3.- FUENTE V\xCDDEO",navLinks:i,buttons:o,children:t.jsx(j,{variableId:"source-id",items:s})})},Ge=e=>{let a;const{handleNextButtonClick:n,handlePreviousButtonClick:i}=e,s=I(o=>o.facialModuleState.variables.mode);switch(console.log("+++ Inside SourceMenuView - facialModuleMode => "+s),s){case"Modo imagen":a=t.jsx(Fe,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;case"Modo v\xEDdeo":a=t.jsx($e,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;default:a=null}return t.jsx("div",{children:a})},Ke=e=>{const{handleNextButtonClick:a,handlePreviousButtonClick:n}=e,i=[{label:"Salir",href:"/"}],s=[{label:"YOLOv8"},{label:"InsightFace"}],o=[{id:"previous",path:"/mainMenu",label:"Anterior",onClick:n},{id:"finish",path:"/mainMenu",label:"Acabar",onClick:a}];return t.jsx(k,{title:"5.- ALGORITMO",navLinks:i,buttons:o,children:t.jsx(j,{variableId:"response-id",items:s})})},ze=()=>{let e;const{menuNumber:a,handleNextButtonClick:n,handlePreviousButtonClick:i}=Ne();switch(a){case 1:e=t.jsx(Ve,{handleNextButtonClick:n});break;case 2:e=t.jsx(He,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;case 3:e=t.jsx(Ge,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;case 4:e=t.jsx(qe,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;case 5:e=t.jsx(Ke,{handleNextButtonClick:n,handlePreviousButtonClick:i});break;default:e=null}return t.jsx("div",{children:e})},We=({msg:e})=>t.jsx(t.Fragment,{children:t.jsx("div",{className:"debug-container",children:t.jsxs("div",{className:"debug-container-grid",children:[t.jsx("div",{className:"debug-container-grid-item-traza",children:t.jsx("ul",{children:e.map((a,n)=>a&&t.jsx("li",{children:a},n))})}),t.jsx("div",{className:"debug-container-grid-item-input-btns",children:t.jsx("div",{className:"debug-container-grid-item-input-field",children:t.jsxs("div",{className:"input-group mb-3",children:[t.jsx("div",{className:"input-group-prepend",children:t.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),t.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0}),t.jsx(Z,{to:"/",children:t.jsx(C,{style:{marginLeft:"10px"},children:"Volver"})})]})})})]})})});var b=(e=>(e.SEND_SPEECH="send-msg",e.START_SPEECH="start-saying-msg",e.END_SPEECH="end-saying-msg",e.NONE="none",e))(b||{}),p=(e=>(e.LOADING="loading",e.OK="ok",e.NOT_OK="not-ok",e))(p||{}),_=(e=>(e.MICROPHONE_OPENED="opened",e.MICROPHONE_CLOSED="closed",e))(_||{});const H={data:{intentType:"",userRequest:""},voiceAPIStatus:p.LOADING,voiceMicroStatus:_.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:b.NONE},deviceId:"1",processingUserRequest:!1},q=P({name:"voiceState",initialState:H,reducers:{setVoiceAPIStatus:(e,a)=>{e.voiceAPIStatus=a.payload},setVoiceMicroStatus:(e,a)=>{e.voiceMicroStatus=a.payload},setVoiceMsgBody:(e,a)=>{e.voiceMsgProps.body=a.payload},setVoiceMsgStatus:(e,a)=>{e.voiceMsgProps.status=a.payload},setDeviceId:(e,a)=>{e.deviceId=a.payload},setProcessingUserRequest:(e,a)=>{e.processingUserRequest=a.payload},setUserSpeechData:(e,a)=>{e.data=a.payload},resetUserSpeechData:e=>{e.data=H.data}}}),{setVoiceAPIStatus:E,setVoiceMicroStatus:F,setVoiceMsgBody:Pt,setVoiceMsgStatus:N,setDeviceId:Je,setProcessingUserRequest:Ye,setUserSpeechData:Qe,resetUserSpeechData:Xe}=q.actions,Ze=q.reducer,et=()=>{const[e,a]=u.useState(null),[n,i]=u.useState([]),s=y(),o=u.useCallback(async()=>{l("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(r=>{r.alexa?(a(r.alexa),r.alexa.skill.onMessage(K),r.alexa.speech.onStarted(z),r.alexa.speech.onStopped(W),r.alexa.voice.onMicrophoneOpened(J),r.alexa.voice.onMicrophoneClosed(Y),l("Alexa is ready - newest version 5 :) Received initial data 45"),r.message.deviceId&&(l("Alexa Skill init data: "+r.message.deviceId),console.log("Alexa Skill init data: "+r.message.deviceId),s(Je(r.message.deviceId))),s(E(p.OK))):(l(`Alexa failed to initialize, code: ${r.code}`),s(E(p.NOT_OK)))}).catch(r=>{l(`Alexa not ready :(. Error: ${r}`),s(E(p.NOT_OK))}):s(E(p.NOT_OK))},[]),c=r=>{i(x=>[...x,r]),console.log(r)},d=()=>{i([])},l=r=>{c(typeof r!="string"?JSON.stringify(r,null,2):r)},M=r=>{r.statusCode==200?l("message was sent to backend successfully"):(s(N(b.END_SPEECH)),l("failed to send message to skill backend:"))},G=u.useCallback(async r=>{try{l("sending message to skill endpoint ==> "+JSON.stringify(r)),l("+++ INSIDE sendMessage - alexaClient ==> "+e),await e.skill.sendMessage(r,M)}catch(x){s(N(b.END_SPEECH)),l("Alexa error ==> "+x)}},[e]),K=r=>{let x;l("Web APP received a message from the skill endpoint"),l(r),r&&(x={intentType:r.intentType,userRequest:r.userRequest},s(Ye(!0)),s(Qe(x)))},z=()=>{s(N(b.START_SPEECH))},W=()=>{s(N(b.END_SPEECH))},J=()=>{s(F(_.MICROPHONE_OPENED))},Y=()=>{s(F(_.MICROPHONE_CLOSED))},Q=u.useCallback(()=>{s(Xe())},[]);return u.useEffect(()=>{o()},[]),{debugMessages:n,printDebug:l,sendMessage:G,resetVoiceIntent:Q,resetDebugMessages:d}},tt=()=>{const e=y(),{debugMessages:a,printDebug:n,sendMessage:i,resetDebugMessages:s}=et();return{debugMessages:a,printDebug:n,sendLogToAlexa:async(o,c)=>{o===p.OK&&await i({intentRequest:"log-text-intent",logTxt:c})},sendTextToAlexa:async(o,c,d)=>{o===p.OK&&(e(N(b.SEND_SPEECH)),await i({intentRequest:"text-to-speech-intent",speech:c,otherInfo:d}))},resetDebugMessages:s}};D.createContext({});const $=D.createContext({});function at(){const{debugMessages:e,printDebug:a,sendLogToAlexa:n,sendTextToAlexa:i,resetDebugMessages:s}=tt();return t.jsx(t.Fragment,{children:t.jsx($.Provider,{value:{debugMessages:e,printDebug:a,sendLogToAlexa:n,sendTextToAlexa:i,resetDebugMessages:s},children:t.jsx(ee,{basename:f.BASE_ROUTE,children:t.jsxs(ae,{children:[t.jsx(T,{path:f.START_APP_ROUTE,element:t.jsx(ve,{})}),t.jsx(T,{path:f.MAIN_MENU_ROUTE,element:t.jsx(ze,{})}),t.jsx(T,{path:f.DEBUG_ROUTE,element:t.jsx(We,{msg:e})})]})})})})}const st=ie({reducer:{facialModuleState:Le,menuState:je,voiceState:Ze}});X.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(se,{store:st,children:t.jsx(at,{})})}));
