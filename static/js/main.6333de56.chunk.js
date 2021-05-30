(this["webpackJsonpbuilding-o-react"]=this["webpackJsonpbuilding-o-react"]||[]).push([[0],{564:function(e,t,n){},898:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(14),c=n.n(r),s=(n(564),n(32)),o=n(378),l=n(35),d=n(2),u=n(935),p=n(83),m=n(934),g=n(367),b=n(77),j=n(292),f=n(938),h=n(538),O=n.n(h),y=n(539),v=n.n(y),x=n(134),S=n.n(x),w=n(220),A=n(923),N=n(177),C=n(922),D=n(221),q=n(283),P=n(15),E=Object(D.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(P.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(q.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),spaceDivider:{paddingBottom:e.spacing(4)},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),B=n(72),k=n.n(B),I="https://buildingo-backend.herokuapp.com/api/v1",M=function(e){return I+Object.entries(F)[e][1].apiPath},T=["Brigade","Brigade Specification","Building","Building Steps","Construction Management","Contract","Customer","Employee","Employee Specification","Machinery","Machinery Storage","Plot","Request","Schedule Event","Spending"],z="Not specified",R=function(e){return Object(P.a)(Object(P.a)({},e),{},{createdAt:e.createdAt,modifiedAt:e.modifiedAt})},F={brigade:{name:"Brigade",apiPath:"/brigades",alter:function(e){var t;return Object(P.a)(Object(P.a)({},e),{},{chief:e.chief?"".concat(e.chief.name," ").concat(e.chief.surname):z,specification:(null===(t=e.specification)||void 0===t?void 0:t.name)||z,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/employees/names","/brigade-specs/names"]},brigadeSpec:{name:"Brigade Specification",apiPath:"/brigade-specs",alter:R,requires:[]},building:{name:"Building",apiPath:"/buildings",alter:function(e){var t;return Object(P.a)(Object(P.a)({},e),{},{chief:e.chief?"".concat(e.chief.name," ").concat(e.chief.surname):z,plot:(null===(t=e.plot)||void 0===t?void 0:t.address)||z,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/plots/addresses","/employees/names"]},buildingStep:{name:"Building Steps",apiPath:"/building-steps",alter:R,requires:[]},management:{name:"Construction Management",apiPath:"/managements",alter:function(e){return Object(P.a)(Object(P.a)({},e),{},{createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:[]},contract:{name:"Contract",apiPath:"/contracts",alter:function(e){var t,n,i;return Object(P.a)(Object(P.a)({},e),{},{customer:(null===(t=e.customer)||void 0===t?void 0:t.name)||z,plot:(null===(n=e.plot)||void 0===n?void 0:n.address)||z,constructionManagement:(null===(i=e.constructionManagement)||void 0===i?void 0:i.name)||z,projectFinishedDate:e.projectFinishedDate,projectStartDate:e.projectStartDate,signedDate:e.signedDate,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/customers/contacts","/managements/addresses","/plots/addresses"]},customer:{name:"Customer",apiPath:"/customers",alter:R,requires:[]},employee:{name:"Employee",apiPath:"/employees",alter:function(e){var t,n;return Object(P.a)(Object(P.a)({},e),{},{specification:(null===(t=e.specification)||void 0===t?void 0:t.name)||z,brigade:(null===(n=e.brigade)||void 0===n?void 0:n.name)||z,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/employee-specs/names","/brigades/names"]},employeeSpec:{name:"Employee Specification",apiPath:"/employee-specs",alter:R,requires:[]},machinery:{name:"Machinery",apiPath:"/machineries",alter:function(e){var t;return Object(P.a)(Object(P.a)({},e),{},{machineryStorage:(null===(t=e.machineryStorage)||void 0===t?void 0:t.name)||z,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/machinery-storages/addresses"]},storage:{name:"Machinery Storage",apiPath:"/machinery-storages",alter:R,requires:[]},plot:{name:"Plot",apiPath:"/plots",alter:function(e){return Object(P.a)(Object(P.a)({},e),{},{chief:e.chief?"".concat(e.chief.name," ").concat(e.chief.surname):z,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/employees/names"]},request:{name:"Request",apiPath:"/requests",alter:function(e){var t,n,i,a=Object(P.a)(Object(P.a)({},e),{},{building:(null===(t=e.building)||void 0===t?void 0:t.plan)||z,brigadeThatAsked:void 0,brigade:(null===(n=e.brigadeThatAsked)||void 0===n?void 0:n.name)||z,constructionManagement:(null===(i=e.constructionManagement)||void 0===i?void 0:i.name)||z,createdAt:e.createdAt,modifiedAt:e.modifiedAt});return delete a.brigadeThatAsked,a},requires:["/buildings/addresses","/brigades/names","/managements/addresses"]},scheduleEvent:{name:"Schedule Event",apiPath:"/schedule-events",alter:function(e){var t,n,i;return Object(P.a)(Object(P.a)({},e),{},{buildingStep:(null===(t=e.buildingStep)||void 0===t?void 0:t.name)||z,brigade:(null===(n=e.brigade)||void 0===n?void 0:n.name)||z,building:void 0===e.building?z:null===(i=e.building)||void 0===i?void 0:i.plan,beginning:e.beginning,ending:e.ending,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/buildings/addresses","/building-steps/names","/brigades/names"]},spending:{name:"Spending",apiPath:"/spendings",alter:function(e){var t,n;return Object(P.a)(Object(P.a)({},e),{},{building:void 0===e.building?z:null===(t=e.building)||void 0===t||null===(n=t.plot)||void 0===n?void 0:n.address,createdAt:e.createdAt,modifiedAt:e.modifiedAt})},requires:["/buildings/addresses"]},task_1:{name:"Engineers from specified plot",apiPath:"/specials/engineers-from-plot",alter:function(e){var t;return Object(P.a)(Object(P.a)({},e),{},{first:(null===(t=e.first)||void 0===t?void 0:t.address)||z,second:"".concat(e.second.name," ").concat(e.second.second)})}},task_2:{name:"Engineers from specified plot",apiPath:"/specials/managements-earnings",alter:function(e){return e}}},L=n(6),H=Object(D.a)((function(e){return{title:{},modelListTitle:{padding:e.spacing(3)},helloTitle:{marginBottom:e.spacing(4)},contentText:{marginBottom:e.spacing(4)},btnMargin:{margin:e.spacing(2)},numberInPage:{margin:e.spacing(2)},paperHeight:{height:e.spacing(10)}}}));function V(e){var t=E(),n=H(),i=a.a.useState(0),r=Object(s.a)(i,2),c=r[0],o=r[1],l=a.a.useState(0),d=Object(s.a)(l,2),u=d[0],p=d[1],m=a.a.useState(0),g=Object(s.a)(m,2),j=g[0],f=g[1],h=function(){var e=Object(w.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(I,"/specials/main-numbers")).then((function(e){var t=e.data;o(t.employeeNumber),p(t.managementNumber),f(t.contractsInProgress)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){h()}),[c,u,j]),Object(L.jsxs)(C.a,{children:[Object(L.jsx)(b.a,{variant:"h3",className:n.helloTitle,children:"Hello!"}),Object(L.jsxs)(A.a,{container:!0,spacing:3,children:[Object(L.jsx)(A.a,{item:!0,xs:4,children:Object(L.jsxs)(N.a,{className:t.paper,children:[Object(L.jsx)(b.a,{variant:"h5",align:"center",className:n.numberInPage,children:c}),Object(L.jsx)(b.a,{variant:"h6",align:"center",children:"Employees"})]})}),Object(L.jsx)(A.a,{item:!0,xs:4,children:Object(L.jsxs)(N.a,{className:t.paper,children:[Object(L.jsx)(b.a,{variant:"h5",align:"center",className:n.numberInPage,children:u}),Object(L.jsx)(b.a,{variant:"h6",align:"center",children:"Managements"})]})}),Object(L.jsx)(A.a,{item:!0,xs:4,children:Object(L.jsxs)(N.a,{className:t.paper,children:[Object(L.jsx)(b.a,{variant:"h5",align:"center",className:n.numberInPage,children:j}),Object(L.jsx)(b.a,{variant:"h6",align:"center",children:"Contracts in Progress"})]})})]})]})}var W=n(365),G=n(924),U=Object(D.a)((function(e){return{title:{},modelListTitle:{padding:e.spacing(3)},helloTitle:{marginBottom:e.spacing(4)},contentText:{marginBottom:e.spacing(4)},btnMargin:{textDecoration:"none",margin:e.spacing(2)}}}));function _(e){var t=U();return Object(L.jsxs)(C.a,{children:[Object(L.jsx)(b.a,{variant:"h3",className:t.helloTitle,children:"Hello!"}),Object(L.jsx)(b.a,{children:"This is an application for building organization. This project is powered with Spring Boot and React."}),Object(L.jsx)(G.a,{href:"https://github.com/OnufreiArtem",underlineNone:!0,children:Object(L.jsx)(W.a,{className:t.btnMargin,variant:"contained",color:"primary",children:"See my GitHub"})}),Object(L.jsx)(G.a,{href:"https://buildingo-backend.herokuapp.com/swagger-ui.html",underlineNone:!0,children:Object(L.jsx)(W.a,{className:t.btnMargin,variant:"contained",color:"secondary",children:"See Swagger"})}),Object(L.jsx)(b.a,{children:"Developed by Artem Onufrei"})]})}var Y=n(456),J=n(901),X=n(439),Z=n(925),K=n(528),Q=n.n(K),$=n(530),ee=n.n($),te=n(529),ne=n.n(te),ie=n(531),ae=n.n(ie),re=n(542),ce=function(e,t,n){return Object(L.jsx)("div",{children:e.map((function(e,i){return Object(L.jsx)(J.a,{selected:void 0!==t&&t===i,onClick:function(e){return void 0!==n&&n(e,i)},button:!0,children:Object(L.jsx)(X.a,{primary:e})},Object(re.a)())}))})},se=function(e){var t=Object(l.f)();return Object(L.jsxs)("div",{children:[Object(L.jsxs)(J.a,{onClick:function(){return t.push("/")},button:!0,children:[Object(L.jsx)(Z.a,{children:Object(L.jsx)(Q.a,{})}),Object(L.jsx)(X.a,{primary:"Dashboard"})]}),Object(L.jsxs)(J.a,{onClick:function(){return t.push("/models")},button:!0,children:[Object(L.jsx)(Z.a,{children:Object(L.jsx)(ne.a,{})}),Object(L.jsx)(X.a,{primary:"Models"})]}),Object(L.jsxs)(J.a,{onClick:function(){return t.push("/info")},button:!0,children:[Object(L.jsx)(Z.a,{children:Object(L.jsx)(ee.a,{})}),Object(L.jsx)(X.a,{primary:"Info"})]})]})},oe=function(e){var t=Object(l.f)();return Object(L.jsx)("div",{children:Object(L.jsxs)(J.a,{onClick:function(){return t.push("/task_1")},button:!0,children:[Object(L.jsx)(Z.a,{children:Object(L.jsx)(ae.a,{})}),Object(L.jsx)(X.a,{primary:"Management income"})]})})},le=n(366),de=n.n(le);function ue(e){var t,n=e.listOfData,i=e.title,a=e.noActions,r=void 0!==a&&a,c=e.onDelete,s=e.onEdit;return Object(L.jsx)(de.a,{columns:(t=n?n[0]:void 0,void 0===t?[]:Object.keys(t).filter((function(e){return"tableData"!==e})).map((function(e){return{title:(t=e,t.charAt(0).toUpperCase()+t.slice(1)),field:e};var t}))),options:{headerStyle:{whiteSpace:"nowrap"},rowStyle:{whiteSpace:"nowrap"}},data:n,title:i,actions:r?[]:[{tooltip:"Remove All Selected Items",icon:"delete",onClick:c},{tooltip:"Edit Selected Item",icon:"edit",onClick:s}]})}var pe=n(939),me=n(537),ge=n.n(me),be=n(299),je=n.n(be),fe=n(929),he=n(931),Oe=n(930),ye=n(936),ve=n(937);function xe(e){var t=e.shown,n=e.cancelEvent,i=e.applyEvent;return Object(L.jsxs)(fe.a,{open:t,onClose:n,"aria-labelledby":"form-delete-item",children:[Object(L.jsx)(ve.a,{id:"form-delete-item",children:"Delete selection"}),Object(L.jsx)(Oe.a,{children:Object(L.jsx)(ye.a,{children:"Are you sure, you want to delete this item?"})}),Object(L.jsxs)(he.a,{children:[Object(L.jsx)(W.a,{onClick:n,color:"primary",children:"Cancel"}),Object(L.jsx)(W.a,{variant:"contained",onClick:i,color:"primary",children:"Yes, Delete"})]})]})}var Se=n(376),we=n.n(Se),Ae=n(451),Ne=n(453),Ce=n(373),De=function(e){return e?e.map((function(e){return Object(L.jsx)(Ce.a,{style:{color:"red",fontSize:12,marginTop:0,marginBottom:8},children:e},e)}))[0]:null},qe=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors;return Object(L.jsxs)("div",{children:[Object(L.jsx)(Ae.a,{id:t,error:!(!c||!c.length),disabled:i.disabled,label:i.title,required:n,value:a||"",onChange:function(e){return r(e.target.value||null)},autoComplete:!1,InputProps:{style:{fontSize:18},startAdornment:i.prefix?Object(L.jsx)(Ne.a,{position:"start",style:{fontSize:22},children:i.prefix}):null,endAdornment:i.suffix?Object(L.jsx)(Ne.a,{position:"end",style:{fontSize:22},children:i.suffix}):null},InputLabelProps:{style:{fontSize:18}},style:{width:"100%",margin:0,marginBottom:20},type:i.format}),De(c)]})},Pe=n(371),Ee=n(372),Be=n(379),ke=n(294),Ie=n(443),Me=n(911),Te=(n(540),n(543),n(535)),ze=n(536),Re=n(544),Fe=n(541),Le=function(e){Object(Re.a)(n,e);var t=Object(Fe.a)(n);function n(){var e;Object(Te.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).popperNode=null,e.handleStateChange=function(t){var n=e.props.onChange;t.hasOwnProperty("selectedItem")?n(t.selectedItem.value):t.hasOwnProperty("inputValue")&&n(t.inputValue)},e.getError=function(e){return e?e.map((function(e){return Object(L.jsx)(Ce.a,{style:{color:"red",fontSize:12},children:e},e)})):null},e}return Object(ze.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.id,e.required),n=e.schema,i=(e.value,e.rawErrors,e.options),a=e.suggestionComponent,r=void 0===a?function(e){return Object(L.jsx)("span",{children:e.label})}:a,c=e.isItemSelected,s=void 0===c?function(e,t){return"object"===typeof e?e.value===t.value:e===t.value}:c,o=i.enumOptions,l="".concat(n.title).concat(t?"*":"");return console.log(this.props),console.log(o,l,s,r),null}}]),n}(i.Component);var He=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors,s=e.options;return"array"===i.type?Object(L.jsx)(Le,Object(P.a)({},e)):Object(L.jsxs)(Pe.a,{disabled:i.disabled,required:n,error:!(!c||!c.length),style:{width:"100%"},children:[Object(L.jsx)(Ee.a,{style:{fontSize:18},htmlFor:"".concat(i.title,"-helper"),children:i.title}),Object(L.jsx)(Be.a,{id:t,style:{fontSize:18,marginBottom:20,width:450},value:a||"",onChange:function(e){return r(e.target.value)},name:i.title,input:Object(L.jsx)(ke.a,{name:i.title,id:"".concat(i.title,"-helper")}),MenuProps:{style:{fontSize:18}},children:s&&s.enumOptions.map((function(e){return Object(L.jsx)(Ie.a,{value:e.value,style:{fontSize:18,padding:"4px 16px"},children:e.label},e.value)}))}),De(c)&&De(c)[0]]})},Ve=n(374),We=n(452),Ge=n(523),Ue=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors;return Object(L.jsxs)(Pe.a,{disabled:i.disabled,required:n,error:!(!c||!c.length),style:{width:"100%"},children:[Object(L.jsx)(Ve.a,{children:Object(L.jsx)(We.a,{control:Object(L.jsx)(Ge.a,{id:t,name:t,checked:!!a,onChange:function(e){return r(e.target.checked)},value:i.title}),label:i.title})}),De(c)&&De(c)[0]]})},_e=n(216),Ye=n(943),Je=n(163),Xe=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors;return Object(L.jsxs)(Pe.a,{component:"fieldset",disabled:i.disabled,required:n,error:!(!c||!c.length),style:{width:"100%",marginTop:18},children:[Object(L.jsx)(Me.a,{style:{fontSize:18},component:"legend",children:i.title}),Object(L.jsx)(_e.b,{utils:Je.default,children:Object(L.jsx)(Ye.b,{id:t,"aria-label":i.title,name:i.title,variant:"inline",format:"yyyy-MM-dd",margin:"normal",value:Date.parse(a||" "),onChange:function(e){console.log(null!==e?e.toISOString().slice(0,10):null),r(null!==e?e.toISOString().slice(0,10):null)}})}),De(c)&&De(c)[0]]})},Ze=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors;return Object(L.jsxs)(Pe.a,{component:"fieldset",disabled:i.disabled,required:n,error:!(!c||!c.length),style:{width:"100%",marginTop:18},children:[Object(L.jsx)(Me.a,{style:{fontSize:18},component:"legend",children:i.title}),Object(L.jsx)(_e.b,{utils:Je.default,children:Object(L.jsx)(Ye.b,{id:t,"aria-label":i.title,name:i.title,variant:"inline",margin:"normal",value:Date.parse(a),onChange:function(e){return r(e.toISOString())}})}),De(c)&&De(c)[0]]})},Ke=function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors;return Object(L.jsxs)("div",{children:[Object(L.jsx)(Ae.a,{id:t,error:!(!c||!c.length),disabled:i.disabled,label:i.title,required:n,value:a||0,onChange:function(e){return r(Number.parseInt(e.target.value.replace("/[^d]/",""))||null)},fillWidth:!0,autoComplete:"nope",InputProps:{style:{fontSize:18},startAdornment:i.prefix?Object(L.jsx)(Ne.a,{position:"start",style:{fontSize:18},children:i.prefix}):null,endAdornment:i.suffix?Object(L.jsx)(Ne.a,{position:"end",style:{fontSize:18},children:i.suffix}):null},InputLabelProps:{style:{fontSize:18}},style:{width:"100%",margin:0,marginBottom:20},type:i.format}),De(c)&&De(c)[0]]})};var Qe=function(e){var t=e.classNames,n=e.description,i=e.children;return Object(L.jsxs)("div",{className:t,children:[n,i]})},$e=n(457),et=n(941),tt={BaseInput:qe,SelectWidget:He,CheckboxWidget:Ue,RadioWidget:function(e){var t=e.id,n=e.required,i=e.schema,a=e.value,r=e.onChange,c=e.rawErrors,s=e.options;return Object(L.jsxs)(Pe.a,{component:"fieldset",disabled:i.disabled,required:n,error:!(!c||!c.length),style:{width:"100%",marginTop:22},children:[Object(L.jsx)(Me.a,{style:{fontSize:22},component:"legend",children:i.title}),Object(L.jsx)($e.a,{id:t,"aria-label":i.title,name:i.title,value:a,onChange:function(e){return r(e.target.value)},row:!0,children:s&&s.enumOptions.map((function(e){return Object(L.jsx)(We.a,{value:e.value,control:Object(L.jsx)(et.a,{}),label:e.label,disabled:e.disabled},e.value)}))}),De(c)&&De(c)[0]]})},DateWidget:Xe,datetime:Ze,number:Ke},nt=function(e){var t=e.title,n=e.formData,i=void 0===n?{}:n,a=e.onCancel,r=e.onSubmit,c=e.uiSchema,s=void 0===c?{}:c,o=e.schema,l=e.liveValidate,d=void 0===l||l;return Object(L.jsxs)("div",{style:{},children:[Object(L.jsx)(ve.a,{children:Object(L.jsx)(b.a,{variant:"h4",component:"h5",align:"center",children:t})}),Object(L.jsx)(Oe.a,{children:Object(L.jsx)(we.a,{formData:i,style:{width:500,padding:10},noHtml5Validate:!0,FieldTemplate:Qe,schema:o,uiSchema:s,widgets:tt,showErrorList:!1,liveValidate:d,onSubmit:r,children:Object(L.jsxs)(he.a,{children:[Object(L.jsx)(W.a,{onClick:a,variant:"outlined",color:"primary",children:"Cancel"}),Object(L.jsx)(W.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})})})]})},it=[{scheme:function(e){return{type:"object",required:["name","specification","chief"],properties:{name:{type:"string",title:"Brigade name"},description:{type:"string",title:"Description"},chief:{type:"string",title:"Chief",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},specification:{type:"string",title:"Specification",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},active:{type:"boolean",title:"Active"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["name"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["chief","plan","plot"],properties:{chief:{type:"string",title:"Chief",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},plan:{type:"string",title:"Plan"},plot:{type:"string",title:"Plot",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))}}}},widget:{}},{scheme:function(e){return{type:"object",required:["name"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["name","address"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"},address:{type:"string",title:"Address"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["constructionManagement","plot","customer","price","signedDate"],properties:{constructionManagement:{type:"string",title:"Management",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},plot:{type:"string",title:"Plot",anyOf:e[2].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},customer:{type:"string",title:"Customer",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},failed:{type:"boolean",title:"Failed"},finished:{type:"boolean",title:"Finished"},price:{type:"number",title:"Price"},signedDate:{type:"string",title:"Signed date",format:"date"},projectStartDate:{type:"string",title:"Start date"},projectFinishedDate:{type:"string",title:"Finish date",format:"date"}}}},widget:{price:{"ui:widget":"number"},projectStartDate:{"ui:widget":"date"},projectFinishedDate:{"ui:widget":"date"},signedDate:{"ui:widget":"date"}}},{scheme:function(e){return{type:"object",required:["name","type","contactName","contactSurname","contactEMail"],properties:{name:{type:"string",title:"Name"},type:{type:"string",title:"Type",anyOf:[{type:"string",title:"Person",enum:["PERSON"]},{type:"string",title:"Organization",enum:["ORGANIZATION"]},{type:"string",title:"Company",enum:["COMPANY"]}]},contactName:{type:"string",title:"Contact Name"},contactSurname:{type:"string",title:"Contact Surname"},contactPhoneNumber:{type:"string",title:"Contact Phone Number"},contactEMail:{type:"string",title:"Contact Email"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["name","surname","specification","dateOfBirth","email","salary","hiredDate"],properties:{name:{type:"string",title:"Name"},surname:{type:"string",title:"Surname"},specification:{type:"string",title:"Specification",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},dateOfBirth:{type:"string",title:"Date Of Birth",format:"date"},brigade:{type:"string",title:"Brigade",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},email:{type:"string",title:"Email"},phoneNumber:{type:"string",title:"Phone Number"},salary:{type:"number",title:"Salary"},active:{type:"boolean",title:"Active"},hiredDate:{type:"string",title:"HiredDate"},firedDate:{type:"string",title:"FiredDate",defaultValue:""}}}},widget:{salary:{"ui:widget":"number"},dateOfBirth:{"ui:widget":"date"},hiredDate:{"ui:widget":"date"},firedDate:{"ui:widget":"date"}}},{scheme:function(e){return{type:"object",required:["name","description"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"},type:{type:"string",title:"Type",anyOf:[{type:"string",title:"Person",enum:["ENGINEER"]},{type:"string",title:"Organization",enum:["GENERAL"]}]}}}},widget:{}},{scheme:function(e){return{type:"object",required:["number","model","usage","year","machineryStorage"],properties:{number:{type:"string",title:"Number"},model:{type:"string",title:"Model"},description:{type:"string",title:"Description"},usage:{type:"string",title:"Usage"},year:{type:"string",title:"Year"},inUsage:{type:"boolean",title:"In Usage"},machineryStorage:{type:"string",title:"MachineryStorage",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},active:{type:"boolean",title:"Active"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["name","address"],properties:{name:{type:"string",title:"Name"},address:{type:"string",title:"Address"},description:{type:"string",title:"Description"}}}},widget:{}},{scheme:function(e){return{type:"object",required:["address"],properties:{address:{type:"string",title:"Address"},chief:{type:"string",title:"Chief",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))}}}},widget:{}},{scheme:function(e){return{type:"object",required:["title","type","building","constructionManagement","date","brigadeThatAsked"],properties:{title:{type:"string",title:"Title"},description:{type:"string",title:"Description"},type:{type:"string",title:"Type",anyOf:[{type:"string",title:"Resource",enum:["RESOURCE"]},{type:"string",title:"Machinery",enum:["MACHINERY"]}]},building:{type:"string",title:"Buildinge",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},constructionManagement:{type:"string",title:"Construction Management",anyOf:e[2].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},date:{type:"string",title:"Date",format:"date"},satisfied:{type:"boolean",title:"Satisfied"},brigadeThatAsked:{type:"string",title:"Brigade That Asked",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))}}}},widget:{date:{"ui:widget":"date"}}},{scheme:function(e){return{type:"object",required:["name","description","building","brigade","buildingStep","beginning","ending"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"},building:{type:"string",title:"Building",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},brigade:{type:"string",title:"Brigade",anyOf:e[2].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},buildingStep:{type:"string",title:"Building Step",anyOf:e[1].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},beginning:{type:"string",title:"Beginning"},ending:{type:"string",title:"Ending"}}}},widget:{beginning:{"ui:widget":"datetime"},ending:{"ui:widget":"datetime"}}},{scheme:function(e){return{type:"object",required:["name","price","count","building","requestDate"],properties:{name:{type:"string",title:"Name"},description:{type:"string",title:"Description"},price:{type:"number",title:"Price"},count:{type:"number",title:"Count"},building:{type:"string",title:"Building",anyOf:e[0].map((function(e){return{type:"string",title:e.second,enum:[e.first]}}))},requestDate:{type:"string",title:"Request Date",format:"date"},satisfiedDate:{type:"string",title:"Satisfied Date",format:"date"}}}},widget:{count:{"ui:widget":"number"},price:{"ui:widget":"number"},requestDate:{"ui:widget":"date"},satisfiedDate:{"ui:widget":"date"}}}],at=Object(D.a)((function(e){return{formStyles:{padding:e.spacing(5),border:"none"},formControl:{width:"300px",paddingBottom:e.spacing(1)},divider:{height:e.spacing(3)}}})),rt=[[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}]];function ct(e){var t=e.shown,n=e.cancelEvent,i=e.applyEvent,r=e.formIndex,c=at(),o=a.a.useState(rt),l=Object(s.a)(o,2),d=l[0],u=l[1];a.a.useEffect((function(){t&&p(Object.entries(F)[r][1].requires)}),[t]);var p=function(e){var t=e.map((function(e){return k.a.get(I+e)}));Promise.all(t).then((function(e){console.log(e),u(e.map((function(e){return e.data})))}))};return Object(L.jsx)(fe.a,{open:t,"aria-labelledby":"form-add-item",children:Object(L.jsx)(nt,{title:"Add ".concat(Object.entries(F)[r][1].name),onCancel:n,className:c.formStyles,schema:d.length!==Object.entries(F)[r][1].requires.length?it[r].scheme(rt):it[r].scheme(d),onSubmit:function(e){var t=e.formData;k.a.post(M(r)+"/",t),i()},uiSchema:it[r].widget})})}var st=n(331),ot=Object(D.a)((function(e){return{formStyles:{padding:e.spacing(5),border:"none"},formControl:{width:"300px",paddingBottom:e.spacing(1)},divider:{height:e.spacing(3)}}})),lt=[[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}],[{first:"",second:"No data"}]];function dt(e){var t=e.shown,n=e.cancelEvent,i=e.applyEvent,r=e.formIndex,c=e.itemId,o=ot(),l=a.a.useState(lt),d=Object(s.a)(l,2),u=d[0],p=d[1],m=a.a.useState({}),g=Object(s.a)(m,2),b=g[0],j=g[1],f=function(){k.a.get("".concat(I).concat(Object.entries(F)[r][1].apiPath,"/").concat(c)).then((function(e){var t;j(function(e){return Object.entries(e).reduce((function(e,t){return"boolean"!==typeof t[1]&&"number"!==typeof t[1]&&(e[t[0]]="".concat(t[1])),e}),Object(P.a)({},e))}((t=e.data,console.log(t),Object.entries(t).reduce((function(e,t){return"object"===typeof t[1]&&null!==t[1]&&(e[t[0]]=t[1].id),e}),Object(P.a)({},t)))))})).catch((function(e){return console.error(e)}))};a.a.useEffect((function(){t&&(h(Object.entries(F)[r][1].requires),f())}),[t]);var h=function(e){var t=e.map((function(e){return k.a.get(I+e)}));Promise.all(t).then((function(e){console.log(e),p(e.map((function(e){return e.data})))}))};return Object(L.jsx)(fe.a,{open:t,"aria-labelledby":"form-add-item",children:Object(L.jsx)(nt,{title:"Edit ".concat(Object.entries(F)[r][1].name),formData:b,onCancel:n,className:o.formStyles,schema:u.length!==Object.entries(F)[r][1].requires.length?it[r].scheme(lt):it[r].scheme(u),onSubmit:function(e){var t=e.formData;k.a.put(M(r)+"/",Object(P.a)(Object(P.a)({},b),t)),i()},uiSchema:it[r].widget})})}var ut=Object(D.a)((function(e){return{title:{marginBottom:e.spacing(4)},floatingActionBtn:{margin:0,top:"auto",right:50,bottom:50,left:"auto",position:"fixed"},visible:{visibility:"visible"},notVisible:{visibility:"hidden"},someSpacing:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}));function pt(e){var t=E(),n=ut(),i=a.a.useState(0),r=Object(s.a)(i,2),c=r[0],o=r[1],l=a.a.useState(!1),d=Object(s.a)(l,2),u=d[0],m=d[1],g=a.a.useState(!1),f=Object(s.a)(g,2),h=f[0],O=f[1],y=a.a.useState(!1),v=Object(s.a)(y,2),x=v[0],N=v[1],D=a.a.useState([]),q=Object(s.a)(D,2),P=q[0],B=q[1],M=a.a.useState(!1),z=Object(s.a)(M,2),R=z[0],H=z[1],V=a.a.useState(!1),G=Object(s.a)(V,2),U=G[0],_=G[1],J=a.a.useState(void 0),X=Object(s.a)(J,2),Z=X[0],K=X[1],Q=a.a.useState(void 0),$=Object(s.a)(Q,2),ee=$[0],te=$[1],ne=function(){m(!1)},ie=function(e){H(!0),se(!0)},ae=function(){_(!1),K(void 0)},re=function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(I).concat(Object.values(F)[c].apiPath,"/").concat(t)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(w.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(I).concat(Object.values(F)[c].apiPath,"/")).then((function(e){t&&(console.log(e.data),B(e.data.map((function(e){return Object.values(F)[c].alter(e)}))),H(!1))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.useEffect((function(){console.log(it[c]);var e=!0;return H(!0),se(e),function(){e=!1}}),[c]),Object(L.jsxs)(C.a,{maxWidth:"lg",className:t.container,children:[Object(L.jsx)(A.a,{container:!0,spacing:1,children:Object(L.jsxs)(A.a,{item:!0,xs:12,children:[Object(L.jsxs)(st.a,{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",children:[Object(L.jsx)(b.a,{className:n.someSpacing,variant:"h4",component:"h4",children:"Models"}),Object(L.jsxs)(st.a,{children:[Object(L.jsx)(W.a,{onClick:function(){return N(!0)},children:"Select Model"}),Object(L.jsx)(j.a,{"aria-label":"refresh",className:n.someSpacing,onClick:ie,children:Object(L.jsx)(je.a,{})})]})]}),Object(L.jsx)(Y.a,{className:R?n.visible:n.notVisible}),Object(L.jsx)(ue,{listOfData:P,title:Object.values(F)[c].name,onEdit:function(e,t){console.log(t),te(t.id),O(!0)},onDelete:function(e,t){K(t),_(!0)}})]})}),Object(L.jsx)(pe.a,{className:n.floatingActionBtn,onClick:function(){m(!0)},color:"primary","aria-label":"add",children:Object(L.jsx)(ge.a,{})}),Object(L.jsx)(ct,{shown:u,formIndex:c,cancelEvent:ne,applyEvent:function(){ne(),ie()}}),Object(L.jsx)(dt,{shown:h,formIndex:c,cancelEvent:function(){O(!1),te(void 0)},applyEvent:function(){O(!1),te(void 0),ie()},itemId:ee}),Object(L.jsx)(xe,{shown:U,cancelEvent:ae,applyEvent:function(){re(Z.id),ie(),ae()}}),Object(L.jsx)(p.a,{anchor:"right",open:x,onClose:function(){return N(!1)},children:ce(T,c,(function(e,t){o(t),N(!1)}))})]})}var mt=Object(D.a)((function(e){return{title:{marginBottom:e.spacing(4)},floatingActionBtn:{margin:0,top:"auto",right:50,bottom:50,left:"auto",position:"fixed"},visible:{visibility:"visible"},notVisible:{visibility:"hidden"},someSpacing:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}));function gt(e){var t=mt(),n=a.a.useState(!1),i=Object(s.a)(n,2),r=i[0],c=i[1],o=a.a.useState([]),l=Object(s.a)(o,2),d=l[0],u=l[1],p=function(){c(!0),k.a.get(I+F.task_2.apiPath+"/").then((function(e){u(e.data),c(!1)}))};return a.a.useEffect(p,[]),Object(L.jsx)(C.a,{maxWidth:"lg",children:Object(L.jsx)(A.a,{container:!0,spacing:1,children:Object(L.jsxs)(A.a,{item:!0,xs:12,children:[Object(L.jsxs)(st.a,{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",children:[Object(L.jsx)(b.a,{className:t.someSpacing,variant:"h4",component:"h4"}),Object(L.jsx)(st.a,{children:Object(L.jsx)(j.a,{"aria-label":"refresh",className:t.someSpacing,onClick:p,children:Object(L.jsx)(je.a,{})})})]}),Object(L.jsx)(Y.a,{className:r?t.visible:t.notVisible}),Object(L.jsx)(ue,{listOfData:d.map((function(e){return{id:e.management.id,name:e.management.name,address:e.management.address,earnings:e.earning}})),noActions:!0,title:"The income from managements"})]})})})}function bt(e){var t=E(),n=a.a.useState(!1),i=Object(s.a)(n,2),r=i[0],c=i[1],h=a.a.useState(!1),y=Object(s.a)(h,2);y[0],y[1];return Object(L.jsx)(o.a,{children:Object(L.jsxs)("div",{className:t.root,children:[Object(L.jsx)(u.a,{}),Object(L.jsx)(m.a,{position:"absolute",className:Object(d.a)(t.appBar,r&&t.appBarShift),children:Object(L.jsxs)(g.a,{className:t.toolbar,children:[Object(L.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(d.a)(t.menuButton,r&&t.menuButtonHidden),children:Object(L.jsx)(O.a,{})}),Object(L.jsx)(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:"Building Organization Application"})]})}),Object(L.jsxs)(p.a,{variant:"permanent",classes:{paper:Object(d.a)(t.drawerPaper,!r&&t.drawerPaperClose)},open:r,children:[Object(L.jsx)("div",{className:t.toolbarIcon,children:Object(L.jsx)(j.a,{onClick:function(){c(!1)},children:Object(L.jsx)(v.a,{})})}),Object(L.jsx)(se,{}),Object(L.jsx)(f.a,{}),Object(L.jsx)(oe,{})]}),Object(L.jsxs)("main",{className:t.content,children:[Object(L.jsx)("div",{className:t.appBarSpacer}),Object(L.jsx)("div",{className:t.spaceDivider}),Object(L.jsxs)(l.c,{children:[Object(L.jsx)(l.a,{exact:!0,path:"/",children:Object(L.jsx)(V,{})}),Object(L.jsx)(l.a,{path:"/models",children:Object(L.jsx)(pt,{})}),Object(L.jsx)(l.a,{path:"/settings",children:Object(L.jsx)(b.a,{children:"Settings"})}),Object(L.jsx)(l.a,{path:"/info",children:Object(L.jsx)(_,{})}),Object(L.jsx)(l.a,{path:"/task_1",children:Object(L.jsx)(gt,{})})]})]})]})})}var jt=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,1315)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};n(897);c.a.render(Object(L.jsx)(bt,{}),document.getElementById("root")),jt()}},[[898,1,2]]]);
//# sourceMappingURL=main.6333de56.chunk.js.map