(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2Cyu":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("Ub9n");let s=(()=>{class t{transform(t,...e){return t.replace(/\n/g,"<br/>")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Jb({name:"replaceLineBreak",type:t,pure:!0}),t})()},"41Vw":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("8VHZ"),s=n("Ub9n");let i=(()=>{class t{constructor(t){this.fb=t}entryCreateForm(){return this.fb.group({text:["",{validators:[r.q.required,r.q.minLength(10),r.q.maxLength(500)]}],comment_author_name:["",{validators:[r.q.required,r.q.maxLength(150)]}]})}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(r.c))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})()},"6NSF":function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("8VHZ"),s=n("L6ME"),i=n("J1Ni"),a=n("Ub9n"),o=n("Yvf7"),c=n("yHSd");function l(t,e){if(1&t&&(a.Pb(0,"option",7),a.xc(1),a.Ob()),2&t){const t=e.$implicit;a.gc("value",t._id),a.zb(1),a.yc(" ",t.name," ")}}function u(t,e){if(1&t&&(a.Nb(0),a.Lb(1,"option",7),a.vc(2,l,2,2,"option",8),a.Mb()),2&t){const t=a.ac(3);a.zb(2),a.gc("ngForOf",t.estatuses)}}function m(t,e){if(1&t&&(a.Nb(0),a.vc(1,u,3,1,"ng-container",5),a.Mb()),2&t){const t=a.ac(2);a.zb(1),a.gc("ngIf",null==t.entry?null:t.entry.status)}}function b(t,e){if(1&t&&a.Lb(0,"app-request-entry-update-validator",9),2&t){const t=a.ac(2);a.gc("system-type",t.systemType)("status",t.status)}}function f(t,e){if(1&t&&(a.Pb(0,"div",2),a.Pb(1,"label",3),a.xc(2," Entry Status "),a.Ob(),a.Pb(3,"select",4),a.vc(4,m,2,1,"ng-container",5),a.Ob(),a.vc(5,b,1,2,"app-request-entry-update-validator",6),a.Ob()),2&t){const t=a.ac();a.zb(4),a.gc("ngIf",null!=t.estatuses),a.zb(1),a.gc("ngIf",t.status)}}let g=(()=>{class t{constructor(){this.permanentData={},this.permanentProps={status:[r.q.required,r.q.max(9e7)]}}getMyData(t){return this.permanentData[t]}ngOnInit(){this.estatuses=this.entries.Status,this.eother={Status:this.entries.Status},s.a.createPermanent(this,this.eother,this.entryForm)}get status(){return this.entryForm.get("status")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-request-entry-update-status"]],inputs:{entryForm:["entry-form","entryForm"],entries:"entries",entry:"entry"},decls:2,vars:3,consts:[[3,"formGroup"],["class","form-group",4,"ngIf"],[1,"form-group"],["for","status",1,"form-label","bold"],["name","status","id","status","formControlName","status",1,"form-control"],[4,"ngIf"],[3,"system-type","status",4,"ngIf"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","status"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.vc(1,f,6,2,"div",1),a.Ob()),2&t&&(a.gc("@fadeAnimation",void 0)("formGroup",e.entryForm),a.zb(1),a.gc("ngIf",e.status))},directives:[r.l,r.h,o.l,r.p,r.k,r.f,r.m,r.r,o.k,c.a],styles:[""],data:{animation:[i.a]}}),t})()},"7U3D":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("EYJY"),s=n("Ub9n");let i=(()=>{class t{constructor(){this.isEntryCreated=new r.a,this.isEntryCreated$=this.isEntryCreated.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})()},"9Xeq":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("Yvf7"),s=n("Ub9n");let i=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[r.b]]}),t})()},BtNG:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n("8VHZ"),s=n("J1Ni"),i=n("Ub9n"),a=n("ROdZ"),o=n("CtxO"),c=n("Yvf7"),l=n("uMT1"),u=n("yHSd");function m(t,e){if(1&t){const t=i.Qb();i.Pb(0,"a",6),i.Wb("click",function(){return i.rc(t),i.ac(3).otherCol()}),i.xc(1," Get Request Message Templates "),i.Ob()}}function b(t,e){1&t&&(i.Pb(0,"p"),i.xc(1," Message Template Not Available. "),i.Ob())}function f(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"div",4),i.vc(2,m,2,0,"a",5),i.vc(3,b,2,0,"p",3),i.Ob(),i.Mb()),2&t){const t=i.ac(2);i.zb(2),i.gc("ngIf",!t.isOtherColAvailable),i.zb(1),i.gc("ngIf",t.templateNotAvailable)}}function g(t,e){if(1&t&&(i.Pb(0,"option",11),i.xc(1),i.Ob()),2&t){const t=e.$implicit;i.gc("value",t._id),i.zb(1),i.yc(" ",t.title," ")}}function p(t,e){if(1&t&&(i.Nb(0),i.Lb(1,"option",11),i.vc(2,g,2,2,"option",12),i.Mb()),2&t){const t=i.ac(3);i.zb(2),i.gc("ngForOf",t.etemplates)}}function d(t,e){if(1&t&&i.Lb(0,"app-request-entry-update-validator",13),2&t){const t=i.ac(3);i.gc("system-type",t.systemType)("request-message-template",t.request_message_template)}}function y(t,e){if(1&t){const t=i.Qb();i.Nb(0),i.Pb(1,"div",7),i.Pb(2,"label",8),i.xc(3," Entry Message Templates : "),i.Ob(),i.Pb(4,"select",9),i.Wb("change",function(e){return i.rc(t),i.ac(2).getMessageTemplate(e.target)}),i.vc(5,p,3,1,"ng-container",3),i.Ob(),i.vc(6,d,1,2,"app-request-entry-update-validator",10),i.Ob(),i.Mb()}if(2&t){const t=i.ac(2);i.zb(1),i.gc("@fadeAnimation",void 0),i.zb(4),i.gc("ngIf",null!=t.etemplates),i.zb(1),i.gc("ngIf",t.request_message_template)}}function v(t,e){if(1&t&&(i.Pb(0,"div",2),i.vc(1,f,4,2,"ng-container",3),i.vc(2,y,7,3,"ng-container",3),i.Ob()),2&t){const t=i.ac();i.gc("formGroup",t.entryForm),i.zb(1),i.gc("ngIf",t.entry),i.zb(1),i.gc("ngIf",1==t.isOtherColAvailable)}}let h=(()=>{class t{constructor(t,e){this.remts=t,this.remtfs=e,this.isOtherColAvailable=!1,this.isLoading=!1,this.templateNotAvailable=!1}ngOnInit(){this.remts.$systemType=this.systemType,this.remts.$sa=this.$link,this.entryForm.addControl("messagetemplate",new r.d("",this.remtfs.otherCtrls.request_message_template))}getMessageTemplate(t){return""!=t.value&&t.value!=this.prev_mtemplate&&(this.prev_mtemplate=t.value,this.isLoading=!0,void this.remts.getEntry(+t.value).subscribe(t=>{if(null==t)this.isLoading=!1;else if(null!=t){let e=t;this.isLoading=!1,this.entryForm.patchValue({text:e.body})}}))}otherCol(){this.isLoading=!0,this.templateNotAvailable=!1,this.remts.getEntries().subscribe(t=>{null==t?(this.isLoading=!1,this.templateNotAvailable=!0):null!=t&&(this.isLoading=!1,this.isOtherColAvailable=!0,this.etemplates=t.MessageTemplate,this.eother={MessageTemplate:t.MessageTemplate},this.remtfs.createPermanent(this.eother,this.entryForm))})}get request_message_template(){return this.entryForm.get("messagetemplate")}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(a.a),i.Kb(o.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-request-entry-message-template"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],entry:"entry",$link:"$link"},decls:2,vars:2,consts:[[3,"formGroup",4,"ngIf"],[3,"is-loading"],[3,"formGroup"],[4,"ngIf"],["id","entry-detail-options"],["class","center",3,"click",4,"ngIf"],[1,"center",3,"click"],[1,"form-group"],["for","messagetemplate",1,"form-label","bold"],["name","messagetemplate","id","messagetemplate","formControlName","messagetemplate",1,"form-control",3,"change"],[3,"system-type","request-message-template",4,"ngIf"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","request-message-template"]],template:function(t,e){1&t&&(i.vc(0,v,3,3,"div",0),i.Lb(1,"app-loading-menu",1)),2&t&&(i.gc("ngIf",e.entryForm),i.zb(1),i.gc("is-loading",e.isLoading))},directives:[c.l,l.a,r.l,r.h,r.p,r.k,r.f,r.m,r.r,c.k,u.a],styles:[""],data:{animation:[s.a]}}),t})()},CtxO:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("8VHZ"),s=n("L6ME"),i=n("Ub9n");let a=(()=>{class t{constructor(){this.permanentData={},this.commonValidators={dynamic:[r.q.max(9e7)]},this.permanentProps={messagetemplate:this.commonValidators.dynamic},this.otherCtrls={messagetemplate:this.commonValidators.dynamic}}getPermanentProp(t){return this.permanentProps[t]}getMyData(t){return this.permanentData[t]}createPermanent(t,e){s.a.createPermanent(this,t,e)}removeControls(t,e){s.a.removeControls(t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac}),t})()},DQuc:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("Yvf7"),s=n("8VHZ"),i=n("hxwH"),a=n("7U3D"),o=n("eIaO"),c=n("Ub9n");let l=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[a.a,o.a],imports:[[r.b,s.n,i.a]]}),t})()},FVf3:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("Yvf7"),s=n("8VHZ"),i=n("O/oE"),a=n("Ub9n");let o=(()=>{class t{constructor(){this.notificationAvailable=!1,this.notificationMessage=""}removeNotification(){this.notificationAvailable=!1,this.notificationMessage=null}addNotification(t){this.notificationMessage=t}notificationStatus(){return this.notificationAvailable}setNotificationStatus(t){this.notificationAvailable=t}getNotificationMessage(){return this.notificationMessage}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),c=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[o],imports:[[r.b]]}),t})();var l=n("hxwH");let u=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[r.b,s.n,i.a,c,l.a]]}),t})()},FpJS:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n("Yvf7"),s=n("8VHZ"),i=n("hxwH"),a=n("kPid"),o=n("FVf3"),c=n("CtxO"),l=n("ROdZ"),u=n("Ub9n");let m=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},providers:[c.a,l.a],imports:[[r.b,s.n,a.a,i.a,o.a]]}),t})()},L6ME:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("tTBu");class s{static createPermanent(t,e,n){if(null!=e){for(let s in e){let i=s.toLowerCase().split(" ").join(" ");t.permanentData[i]=e[s],n.get(i)&&n.get(i).setValidators([...t.permanentProps[i],Object(r.a)(t.getMyData(i),s)]),n.get(i)&&n.get(i).updateValueAndValidity()}n.updateValueAndValidity()}}static removeControls(t,e){null!=t&&t.length>0&&t.forEach(t=>e.get(t)?e.removeControl(t):null)}static removeAsyncValidators(t,e){null!=t&&t.length>0&&(t.forEach(t=>{e.get(t)&&(e.get(t).clearAsyncValidators(),e.get(t).updateValueAndValidity())}),e.updateValueAndValidity())}}},Mwf2:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("EYJY"),s=n("Ub9n");let i=(()=>{class t{constructor(){this.isEntryCreated=new r.a,this.isEntryCreated$=this.isEntryCreated.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})()},ROdZ:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n("jV/k"),s=n("vfyW"),i=n("XRyL"),a=n("oECA"),o=n("VcWf"),c=n("Ub9n"),l=n("FBrc"),u=n("EUGn");let m=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n,this.$systemType="General Request",this.$sa="general-request"}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/message-template/entry/${t}/detail`).pipe(Object(s.a)(t=>console.log(t)),Object(i.a)(2e3),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}getEntries(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/message-template`).pipe(Object(i.a)(2e3),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,console.log(t),Object(r.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(l.b),c.Tb(o.b),c.Tb(u.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})()},"T+6q":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("Yvf7"),s=n("BeQt"),i=n("hxwH"),a=n("Ub9n");let o=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[s.a],imports:[[r.b,i.a]]}),t})()},eIaO:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("8VHZ"),s=n("Ub9n");let i=(()=>{class t{constructor(t){this.fb=t}entryCreateForm(){return this.fb.group({text:["",{validators:[r.q.required,r.q.minLength(10),r.q.maxLength(500)]}]})}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(r.c))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})()},jiyY:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("Ub9n"),s=n("9Ku7"),i=n("Fk62");let a=(()=>{class t{constructor(t,e){this.aus=t,this.router=e}canActivate(t,e){return this.verifyLogin(e.url)}canActivateChild(t,e){return this.canActivate(t,e)}canLoad(t){return this.verifyLogin(t.path)}verifyLogin(t){return!!this.aus.isLoggedIn()||(this.aus.redirectAddress=t,this.router.parseUrl("/sign-in"))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(s.a),r.Tb(i.e))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},tTBu:function(t,e,n){"use strict";function r(t,e){return n=>{let r=n.value,s=t.map(t=>t._id);return"number"==typeof s[0]&&(r=+r),""!=r&&s.indexOf(r)<0?{[e]:{value:r,name:e}}:null}}n.d(e,"a",function(){return r})},vipk:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("Yvf7"),s=n("8VHZ"),i=n("hxwH"),a=n("41Vw"),o=n("Mwf2"),c=n("Ub9n");let l=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},providers:[a.a,o.a],imports:[[r.b,s.n,i.a]]}),t})()},x7qt:function(t,e,n){"use strict";n.d(e,"a",function(){return C});var r=n("Ub9n"),s=n("J1Ni"),i=n("7U3D"),a=n("Yvf7"),o=n("+ef2");function c(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"p"),r.Pb(2,"b",3),r.xc(3," Message : "),r.Ob(),r.xc(4),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.yc(" ",null==t.entry?null:t.entry.message," ")}}function l(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"p"),r.Pb(2,"b",3),r.xc(3," Status : "),r.Ob(),r.xc(4),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.yc(" ",null==t.entry?null:t.entry.status," ")}}function u(t,e){if(1&t&&(r.Pb(0,"div",1),r.Pb(1,"h2"),r.xc(2," Request Detail "),r.Ob(),r.vc(3,c,5,1,"ng-container",2),r.vc(4,l,5,1,"ng-container",2),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(3),r.gc("ngIf",null==t.entry?null:t.entry.message),r.zb(1),r.gc("ngIf",null==t.entry?null:t.entry.status)}}let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-comment-entry-status"]],inputs:{entry:"entry",systemType:["system-type","systemType"]},decls:1,vars:1,consts:[["id","general-entry-details",4,"ngIf"],["id","general-entry-details"],[4,"ngIf"],[1,"bold"]],template:function(t,e){1&t&&r.vc(0,u,5,3,"div",0),2&t&&r.gc("ngIf",e.entry)},directives:[a.l],styles:[""],data:{animation:[s.a]}}),t})();var b=n("8VHZ");function f(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply should be provided and cannot be empty "),r.Ob())}function g(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply cannot be less than 10 characters in length "),r.Ob())}function p(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply cannot be greater than 500 characters in length "),r.Ob())}function d(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,f,2,0,"li",0),r.vc(3,g,2,0,"li",0),r.vc(4,p,2,0,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.text.errors?null:t.text.errors.required),r.zb(1),r.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.maxlength))}}function y(t,e){if(1&t&&(r.Nb(0),r.vc(1,d,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.text.invalid&&(t.text.touched||t.text.dirty))}}let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-entry-comment-validator"]],inputs:{text:"text"},decls:1,vars:1,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&r.vc(0,y,2,1,"ng-container",0),2&t&&r.gc("ngIf",e.text)},directives:[a.l],styles:[""],data:{animation:[s.a]}}),t})();function h(t,e){if(1&t&&r.Lb(0,"app-view-description",3),2&t){const t=r.ac();r.gc("view-type",t.view)("system-type",t.systemType)}}function x(t,e){if(1&t&&r.Lb(0,"app-comment-entry-status",4),2&t){const t=r.ac();r.gc("entry",t.entry)("system-type",t.systemType)}}function O(t,e){if(1&t&&r.Lb(0,"app-entry-comment-validator",13),2&t){const t=r.ac(2);r.gc("text",t.text)}}const I=function(t){return{disabled:t}};function P(t,e){if(1&t){const t=r.Qb();r.Pb(0,"button",14),r.Wb("click",function(){r.rc(t);const e=r.ac(2);return e.createEntry(e.entryCreateForm.value)}),r.xc(1," Submit "),r.Ob()}if(2&t){const t=r.ac(2);r.Bb(r.lc(3,I,!t.isFormValid)),r.gc("disabled",!t.isFormValid)}}function z(t,e){1&t&&(r.Pb(0,"p"),r.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),r.Ob())}function w(t,e){if(1&t&&(r.Pb(0,"div",5),r.Pb(1,"div",6),r.Pb(2,"div",7),r.Pb(3,"label",8),r.xc(4," Message : "),r.Ob(),r.Pb(5,"textarea",9),r.xc(6," "),r.Ob(),r.vc(7,O,1,1,"app-entry-comment-validator",10),r.Ob(),r.vc(8,P,2,5,"button",11),r.vc(9,z,2,0,"p",12),r.Ob(),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(1),r.gc("formGroup",t.entryCreateForm),r.zb(6),r.gc("ngIf",t.text),r.zb(1),r.gc("ngIf",!t.isFormProcessing),r.zb(1),r.gc("ngIf",t.isFormSubmitted)}}let C=(()=>{class t{constructor(t){this.ccs=t,this.processEntry=new r.n,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.entryCreatedOb=this.ccs.isEntryCreated$.subscribe(t=>{0==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1):1==t&&(this.isFormSubmitted=!1)})}ngOnInit(){}ngOnDestroy(){this.entryCreatedOb.unsubscribe()}createEntry(t){this.isFormSubmitted=!0,this.isFormProcessing=!0,this.processEntry.emit(t)}get text(){return this.entryCreateForm.get("text")}get isFormValid(){return this.entryCreateForm.valid}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(i.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-entry-comment-create"]],inputs:{systemType:["system-type","systemType"],view:"view",entry:"entry",entryCreateForm:["entry-create-form","entryCreateForm"]},outputs:{processEntry:"processEntry"},decls:3,vars:3,consts:[[3,"view-type","system-type",4,"ngIf"],[3,"entry","system-type",4,"ngIf"],["id","comment-form",4,"ngIf"],[3,"view-type","system-type"],[3,"entry","system-type"],["id","comment-form"],[3,"formGroup"],[1,"form-group"],["for","text",1,"form-label","bold"],["name","text","id","text","required","required","autocomplete","new-text","formControlName","text"],[3,"text",4,"ngIf"],["class","btn-submit",3,"class","disabled","click",4,"ngIf"],[4,"ngIf"],[3,"text"],[1,"btn-submit",3,"disabled","click"]],template:function(t,e){1&t&&(r.vc(0,h,1,2,"app-view-description",0),r.vc(1,x,1,2,"app-comment-entry-status",1),r.vc(2,w,10,5,"div",2)),2&t&&(r.gc("ngIf",e.view),r.zb(1),r.gc("ngIf",e.entry),r.zb(1),r.gc("ngIf",e.entry))},directives:[a.l,o.a,m,b.l,b.h,b.b,b.o,b.k,b.f,v],styles:[""],data:{animation:[s.a]}}),t})()},yHSd:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("J1Ni"),s=n("Ub9n"),i=n("Yvf7");function a(t,e){1&t&&(s.Pb(0,"li"),s.xc(1," Body of Comment or Reply should be provided and cannot be empty "),s.Ob())}function o(t,e){1&t&&(s.Pb(0,"li"),s.xc(1," Body of Comment or Reply cannot be less than 10 characters in length "),s.Ob())}function c(t,e){1&t&&(s.Pb(0,"li"),s.xc(1," Body of Comment or Reply cannot be greater than 500 characters in length "),s.Ob())}function l(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"ul"),s.vc(2,a,2,0,"li",0),s.vc(3,o,2,0,"li",0),s.vc(4,c,2,0,"li",0),s.Ob(),s.Ob()),2&t){const t=s.ac(2);s.gc("@fadeAnimation",void 0),s.zb(2),s.gc("ngIf",null==t.text.errors?null:t.text.errors.required),s.zb(1),s.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.minlength)),s.zb(1),s.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.maxlength))}}function u(t,e){if(1&t&&(s.Nb(0),s.vc(1,l,5,4,"div",1),s.Mb()),2&t){const t=s.ac();s.zb(1),s.gc("ngIf",t.text.invalid&&(t.text.touched||t.text.dirty))}}function m(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Status of ",t.systemType," should be provided and cannot be empty ")}}function b(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Status of ",t.systemType," cannot be greater than specified length ")}}function f(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Status of ",t.systemType," should be available from existing record before it can be considered valid ")}}function g(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"ul"),s.vc(2,m,2,1,"li",0),s.vc(3,b,2,1,"li",0),s.vc(4,f,2,1,"li",0),s.Ob(),s.Ob()),2&t){const t=s.ac(2);s.gc("@fadeAnimation",void 0),s.zb(2),s.gc("ngIf",null==t.status.errors?null:t.status.errors.required),s.zb(1),s.gc("ngIf",null==t.status.errors?null:t.status.errors.max),s.zb(1),s.gc("ngIf",null==t.status.errors?null:t.status.errors.Status)}}function p(t,e){if(1&t&&(s.Nb(0),s.vc(1,g,5,4,"div",1),s.Mb()),2&t){const t=s.ac();s.zb(1),s.gc("ngIf",t.status.invalid&&(t.status.touched||t.status.dirty))}}function d(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Message Template of ",t.systemType," cannot be greater than specified length ")}}function y(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Message Template of ",t.systemType," should be available from existing record before it can be considered valid ")}}function v(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"ul"),s.vc(2,d,2,1,"li",0),s.vc(3,y,2,1,"li",0),s.Ob(),s.Ob()),2&t){const t=s.ac(2);s.gc("@fadeAnimation",void 0),s.zb(2),s.gc("ngIf",null==t.request_message_template.errors?null:t.request_message_template.errors.max),s.zb(1),s.gc("ngIf",null==t.request_message_template.errors?null:t.request_message_template.errors.MessageTemplate)}}function h(t,e){if(1&t&&(s.Nb(0),s.vc(1,v,4,3,"div",1),s.Mb()),2&t){const t=s.ac();s.zb(1),s.gc("ngIf",t.request_message_template.invalid&&(t.request_message_template.touched||t.request_message_template.dirty))}}function x(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Stage of ",t.systemType," should be provided and cannot be empty ")}}function O(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Stage of ",t.systemType," cannot be less than 1 characters in length ")}}function I(t,e){if(1&t&&(s.Pb(0,"li"),s.xc(1),s.Ob()),2&t){const t=s.ac(3);s.zb(1),s.yc(" Stage of ",t.systemType," cannot be greater than 30 characters in length ")}}function P(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"ul"),s.vc(2,x,2,1,"li",0),s.vc(3,O,2,1,"li",0),s.vc(4,I,2,1,"li",0),s.Ob(),s.Ob()),2&t){const t=s.ac(2);s.gc("@fadeAnimation",void 0),s.zb(2),s.gc("ngIf",null==t.stage.errors?null:t.stage.errors.required),s.zb(1),s.gc("ngIf",(null==t.stage.errors?null:t.stage.errors.required)||(null==t.stage.errors?null:t.stage.errors.minlength)),s.zb(1),s.gc("ngIf",(null==t.stage.errors?null:t.stage.errors.required)||(null==t.stage.errors?null:t.stage.errors.maxlength))}}function z(t,e){if(1&t&&(s.Nb(0),s.vc(1,P,5,4,"div",1),s.Mb()),2&t){const t=s.ac();s.zb(1),s.gc("ngIf",t.stage.invalid&&(t.stage.touched||t.stage.dirty))}}let w=(()=>{class t{constructor(){}ngOnInit(){}ngDoCheck(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-request-entry-update-validator"]],inputs:{systemType:["system-type","systemType"],text:"text",status:"status",stage:"stage",request_message_template:["request-message-template","request_message_template"]},decls:4,vars:4,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&(s.vc(0,u,2,1,"ng-container",0),s.vc(1,p,2,1,"ng-container",0),s.vc(2,h,2,1,"ng-container",0),s.vc(3,z,2,1,"ng-container",0)),2&t&&(s.gc("ngIf",e.text),s.zb(1),s.gc("ngIf",e.status),s.zb(1),s.gc("ngIf",e.request_message_template),s.zb(1),s.gc("ngIf",e.stage))},directives:[i.l],styles:[""],data:{animation:[r.a]}}),t})()},zki3:function(t,e,n){"use strict";n.d(e,"a",function(){return q});var r=n("Ub9n"),s=n("J1Ni"),i=n("Mwf2"),a=n("Yvf7"),o=n("+ef2");function c(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"p"),r.Pb(2,"b",1),r.xc(3," Author Name : "),r.Ob(),r.xc(4),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.yc(" ",null==t.comment||null==t.comment.author?null:t.comment.author.full_name," ")}}function l(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"p"),r.Pb(3,"b",1),r.xc(4," Text : "),r.Ob(),r.xc(5),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",null==t.comment?null:t.comment.text," ")}}function u(t,e){if(1&t&&(r.Pb(0,"div"),r.Pb(1,"h2"),r.xc(2," Comment Detail "),r.Ob(),r.vc(3,c,5,1,"ng-container",0),r.vc(4,l,6,1,"ng-container",0),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(3),r.gc("ngIf",null==t.comment?null:t.comment.author),r.zb(1),r.gc("ngIf",null==t.comment?null:t.comment.text)}}let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-reply-comment-detail"]],inputs:{systemType:["system-type","systemType"],comment:"comment"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bold"],[1,"comment"]],template:function(t,e){1&t&&r.vc(0,u,5,3,"div",0),2&t&&r.gc("ngIf",e.comment)},directives:[a.l],styles:[""],data:{animation:[s.a]}}),t})();var b=n("8VHZ");function f(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply should be provided and cannot be empty "),r.Ob())}function g(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply cannot be less than 10 characters in length "),r.Ob())}function p(t,e){1&t&&(r.Pb(0,"li"),r.xc(1," Body of Comment or Reply cannot be greater than 500 characters in length "),r.Ob())}function d(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,f,2,0,"li",0),r.vc(3,g,2,0,"li",0),r.vc(4,p,2,0,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.text.errors?null:t.text.errors.required),r.zb(1),r.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.text.errors?null:t.text.errors.required)||(null==t.text.errors?null:t.text.errors.maxlength))}}function y(t,e){if(1&t&&(r.Nb(0),r.vc(1,d,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.text.invalid&&(t.text.touched||t.text.dirty))}}let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-reply-validator"]],inputs:{text:"text",comment_author_name:"comment_author_name"},decls:1,vars:1,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&r.vc(0,y,2,1,"ng-container",0),2&t&&r.gc("ngIf",e.text)},directives:[a.l],styles:[""],data:{animation:[s.a]}}),t})();function h(t,e){if(1&t&&r.Lb(0,"app-view-description",3),2&t){const t=r.ac();r.gc("view-type",t.view)("system-type",t.systemType)}}function x(t,e){if(1&t&&r.Lb(0,"app-reply-comment-detail",6),2&t){const t=r.ac(2);r.gc("system-type",t.systemType)("comment",t.comment)}}function O(t,e){if(1&t&&(r.Pb(0,"div",4),r.vc(1,x,1,2,"app-reply-comment-detail",5),r.Ob()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.comment)}}function I(t,e){if(1&t&&r.Lb(0,"app-reply-validator",15),2&t){const t=r.ac(2);r.gc("text",t.text)}}const P=function(t){return{disabled:t}};function z(t,e){if(1&t){const t=r.Qb();r.Pb(0,"button",16),r.Wb("click",function(){r.rc(t);const e=r.ac(2);return e.createEntry(e.entryCreateForm.value)}),r.xc(1," Submit "),r.Ob()}if(2&t){const t=r.ac(2);r.Bb(r.lc(3,P,!t.isFormValid)),r.gc("disabled",!t.isFormValid)}}function w(t,e){1&t&&(r.Pb(0,"p"),r.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),r.Ob())}function C(t,e){if(1&t&&(r.Pb(0,"div",7),r.Pb(1,"div",8),r.Pb(2,"div",9),r.Pb(3,"label",10),r.xc(4," Message "),r.Ob(),r.Pb(5,"textarea",11),r.xc(6," "),r.Ob(),r.vc(7,I,1,1,"app-reply-validator",12),r.Ob(),r.vc(8,z,2,5,"button",13),r.vc(9,w,2,0,"p",14),r.Ob(),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(1),r.gc("formGroup",t.entryCreateForm),r.zb(6),r.gc("ngIf",t.text),r.zb(1),r.gc("ngIf",!t.isFormProcessing),r.zb(1),r.gc("ngIf",t.isFormSubmitted)}}let q=(()=>{class t{constructor(t){this.rcs=t,this.processEntry=new r.n,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.entryCreatedOb=this.rcs.isEntryCreated$.subscribe(t=>{0==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1):1==t&&(this.isFormSubmitted=!1)})}ngOnInit(){}ngOnDestroy(){this.entryCreatedOb.unsubscribe()}createEntry(t){this.isFormSubmitted=!0,this.isFormProcessing=!0,this.processEntry.emit(t)}get text(){return this.entryCreateForm.get("text")}get comment_author_name(){return this.entryCreateForm.get("comment_author_name")}get isFormValid(){return this.entryCreateForm.valid}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(i.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-entry-reply-create"]],inputs:{systemType:["system-type","systemType"],view:"view",entry:"entry",comment:"comment",entryCreateForm:["entry-create-form","entryCreateForm"]},outputs:{processEntry:"processEntry"},decls:3,vars:3,consts:[[3,"view-type","system-type",4,"ngIf"],["id","reply-comment-entry",4,"ngIf"],["id","reply-form",4,"ngIf"],[3,"view-type","system-type"],["id","reply-comment-entry"],[3,"system-type","comment",4,"ngIf"],[3,"system-type","comment"],["id","reply-form"],[3,"formGroup"],[1,"form-group"],["for","text",1,"form-label","bold"],["name","text","id","text","required","required","autocomplete","new-text","formControlName","text"],[3,"text",4,"ngIf"],["class","btn-submit",3,"class","disabled","click",4,"ngIf"],[4,"ngIf"],[3,"text"],[1,"btn-submit",3,"disabled","click"]],template:function(t,e){1&t&&(r.vc(0,h,1,2,"app-view-description",0),r.vc(1,O,2,1,"div",1),r.vc(2,C,10,5,"div",2)),2&t&&(r.gc("ngIf",e.view),r.zb(1),r.gc("ngIf",e.entry),r.zb(1),r.gc("ngIf",e.entry))},directives:[a.l,o.a,m,b.l,b.h,b.b,b.o,b.k,b.f,v],styles:[""],data:{animation:[s.a]}}),t})()}}]);