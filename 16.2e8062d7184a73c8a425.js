(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1NK+":function(e,t,r){"use strict";function n(){return e=>["123456789","1234567890","12345","abcdef"].indexOf(""+e.value)>-1?{simplePassword:{value:e.value}}:null}function s(){return e=>{let t=e.get("new_password")?e.get("new_password").value:null,r=e.get("confirm_password")?e.get("confirm_password"):null;if(t||(t=e.get("password")?e.get("password").value:null),r)return r.setErrors(r.value!=t?{confirm_password:!0,required:!0,minLength:!0,maxLength:!0}:null),null}}function i(){return e=>{let t=e.get("new_password")?e.get("new_password").value:null,r=e.get("new_password")?e.get("new_password"):null;if(t||(t=e.get("password")?e.get("password").value:null),r)return r.setErrors(r.value==t?{currentAndNew:!0,required:!0,minLength:!0,maxLength:!0}:null),null}}r.d(t,"c",function(){return n}),r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i})},"9nlD":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("Ub9n");let s=(()=>{class e{constructor(){this.notificationAvailable=!1,this.notificationMessage=""}removeNotification(){this.notificationAvailable=!1,this.notificationMessage=null}addNotification(e){this.notificationMessage=e}notificationStatus(){return this.notificationAvailable}setNotificationStatus(e){this.notificationAvailable=e}getNotificationMessage(){return this.notificationMessage}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},ESiG:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("Ub9n");let s=(()=>{class e{constructor(e){this.el=e}lowercase(e){let t=this.el.nativeElement.value.replace(/\s+/g,"").toLowerCase();this.el.nativeElement.value=t}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(n.l))},e.\u0275dir=n.Fb({type:e,selectors:[["","appLowercase",""]],hostBindings:function(e,t){1&e&&n.Wb("input",function(){return t.lowercase()})}}),e})()},EUGn:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("Tstc"),s=r("Ub9n");let i=(()=>{class e{constructor(){this.errorMessages=n.a}get message(){return this.errorMessages.search}set message(e){this.errorMessages.search=e,this.errorMessages.search.statusText=e.statusText}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac}),e})()},PpkA:function(e,t,r){"use strict";r.r(t),r.d(t,"UserSignInModule",function(){return Q});var n=r("Yvf7"),s=r("8VHZ"),i=r("hxwH"),a=r("c3CK"),o=r("Fk62"),c=r("PHaz"),l=r("Ub9n");let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Eb({type:e,selectors:[["app-user-sign-in-homepage"]],decls:1,vars:0,template:function(e,t){1&e&&l.Lb(0,"router-outlet")},directives:[o.h],styles:[""]}),e})();var d=r("EUGn"),f=r("9nlD"),b=r("MWCo"),m=r("9Ku7"),p=r("rE5M"),g=r("inDW"),h=r("1NK+");let y=(()=>{class e{constructor(e){this.fb=e}entryForm(){return this.fb.group({email_address:["",{validators:[s.o.required,s.o.minLength(7),s.o.maxLength(50),Object(g.a)(p.a)]}],password:["",{validators:[s.o.required,s.o.minLength(7),s.o.maxLength(35),Object(h.c)()]}]})}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(s.b))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac}),e})();var w=r("TY4h"),v=r("Rxsk"),O=r("ESiG"),I=r("J1Ni");function P(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Email Address of ",e.systemType," should be provided and cannot be empty ")}}function z(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Email Address of ",e.systemType," cannot be less than 7 characters in length ")}}function _(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Email Address of ",e.systemType," cannot be greater than 50 characters in length ")}}function E(e,t){1&e&&(l.Pb(0,"li"),l.yc(1," Email Address must be valid and should conform to standards for example david@gmail.com "),l.Ob())}function T(e,t){1&e&&(l.Pb(0,"li"),l.yc(1," Email Address cannot be used at the moment because it is already taken by another user. Please input another email address "),l.Ob())}function x(e,t){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.wc(2,P,2,1,"li",0),l.wc(3,z,2,1,"li",0),l.wc(4,_,2,1,"li",0),l.wc(5,E,2,0,"li",0),l.wc(6,T,2,0,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.email_address.errors?null:e.email_address.errors.required),l.zb(1),l.gc("ngIf",(null==e.email_address.errors?null:e.email_address.errors.required)||(null==e.email_address.errors?null:e.email_address.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.email_address.errors?null:e.email_address.errors.required)||(null==e.email_address.errors?null:e.email_address.errors.maxlength)),l.zb(1),l.gc("ngIf",(null==e.email_address.errors?null:e.email_address.errors.required)||(null==e.email_address.errors?null:e.email_address.errors.email_address)),l.zb(1),l.gc("ngIf",null==e.email_address.errors?null:e.email_address.errors.emailAddressService)}}function k(e,t){if(1&e&&(l.Nb(0),l.wc(1,x,7,6,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.email_address.invalid&&(e.email_address.touched||e.email_address.dirty))}}function A(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Password of ",e.systemType," should be provided and cannot be empty ")}}function M(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Password of ",e.systemType," cannot be less than 7 characters in length ")}}function N(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Password of ",e.systemType," cannot be greater than 35 characters in length ")}}function S(e,t){if(1&e&&(l.Pb(0,"li"),l.yc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.zc(" Password of ",e.systemType," is too simple and will not be allowed in this system. Please input another type of password ")}}function F(e,t){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.wc(2,A,2,1,"li",0),l.wc(3,M,2,1,"li",0),l.wc(4,N,2,1,"li",0),l.wc(5,S,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.password.errors?null:e.password.errors.required),l.zb(1),l.gc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.password.errors?null:e.password.errors.required)||(null==e.password.errors?null:e.password.errors.maxlength)),l.zb(1),l.gc("ngIf",null==e.password.errors?null:e.password.errors.simplePassword)}}function C(e,t){if(1&e&&(l.Nb(0),l.wc(1,F,6,5,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.password.invalid&&(e.password.touched||e.password.dirty))}}let q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Eb({type:e,selectors:[["app-user-sign-in-validator"]],inputs:{systemType:["system-type","systemType"],email_address:["email-address","email_address"],password:"password"},decls:2,vars:2,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(e,t){1&e&&(l.wc(0,k,2,1,"ng-container",0),l.wc(1,C,2,1,"ng-container",0)),2&e&&(l.gc("ngIf",t.email_address),l.zb(1),l.gc("ngIf",t.password))},directives:[n.l],styles:[""],data:{animation:[I.a]}}),e})();function U(e,t){if(1&e&&(l.Pb(0,"h2"),l.yc(1),l.Ob()),2&e){const e=l.ac();l.zb(1),l.zc(" ",e.title," ")}}function j(e,t){if(1&e&&(l.Pb(0,"div",7),l.Pb(1,"p"),l.yc(2),l.Ob(),l.Ob()),2&e){const e=l.ac();l.zb(2),l.zc(" ",e.description," ")}}function L(e,t){if(1&e&&l.Lb(0,"app-resource-unavailable",8),2&e){const e=l.ac();l.gc("error",e.error)}}function K(e,t){if(1&e){const e=l.Qb();l.Pb(0,"app-notification-screen",9),l.Wb("finished",function(){return l.rc(e),l.ac().removeNotification()}),l.Ob()}if(2&e){const e=l.ac();l.gc("notified",e.notificationAvailable)("message",e.notificationMessage)}}function $(e,t){if(1&e&&l.Lb(0,"app-user-sign-in-validator",14),2&e){const e=l.ac(2);l.gc("system-type",e.systemType)("email-address",e.email_address)}}function G(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",10),l.Pb(2,"label",11),l.yc(3," Email Address * : "),l.Ob(),l.Lb(4,"input",12),l.wc(5,$,1,2,"app-user-sign-in-validator",13),l.Ob(),l.Mb()),2&e){const e=l.ac();l.zb(5),l.gc("ngIf",e.email_address)}}function D(e,t){if(1&e&&l.Lb(0,"app-user-sign-in-validator",18),2&e){const e=l.ac(2);l.gc("system-type",e.systemType)("password",e.password)}}function H(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",10),l.Pb(2,"label",15),l.yc(3," Password * : "),l.Ob(),l.Lb(4,"input",16),l.wc(5,D,1,2,"app-user-sign-in-validator",17),l.Ob(),l.Mb()),2&e){const e=l.ac();l.zb(5),l.gc("ngIf",e.password)}}const W=function(e){return{disabled:e}};function Y(e,t){if(1&e&&(l.Pb(0,"button",19),l.yc(1," Submit "),l.Ob()),2&e){const e=l.ac();l.Bb(l.lc(3,W,!e.isFormValid)),l.gc("disabled",!e.isFormValid)}}function V(e,t){1&e&&(l.Pb(0,"p"),l.yc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),l.Ob())}let J=(()=>{class e{constructor(e,t,r,n,s,i,a){this.route=e,this.router=t,this.ds=r,this.ns=n,this.ems=s,this.auth=i,this.usifs=a,this.description="All members of the system are required to signin before they can complete or perform any action or task.",this.isError=!1,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.haveResetForm=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.signIn.systemType,this.viewWord=e.signIn.viewWord,this.systemGuideline=e.signIn.systemGuideline,this.title=e.signIn.title,this.view=e.signIn.view,this.ds.$systemType=this.systemType,this.entryForm=this.usifs.entryForm()}ngOnDestroy(){clearTimeout(this.entryChangesT)}confirmAuth(e){this.isFormSubmitted=!0,this.error=null,this.isError=!1,this.isFormProcessing=!0,this.ds.signIn(e).subscribe(e=>{null==e?(this.isFormSubmitted=!1,this.isFormProcessing=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`),this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=e&&(this.isFormSubmitted=!1,this.auth.saveToken(e),this.auth.saveUserId(e),this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and ${this.systemType} is logged in.`),this.entryChanges(e))})}entryChanges(e){this.entryChangesT=setTimeout(()=>this.router.navigate(this.auth.redirectAddress?[this.auth.redirectAddress]:["/user/dashboard"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}get email_address(){return this.entryForm.get("email_address")}get password(){return this.entryForm.get("password")}get isFormValid(){return this.entryForm.valid}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(o.a),l.Kb(o.d),l.Kb(b.a),l.Kb(f.a),l.Kb(d.a),l.Kb(m.a),l.Kb(y))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-user-sign-in"]],features:[l.yb([d.a,f.a])],decls:10,vars:9,consts:[["id","entry-create"],[4,"ngIf"],["class","description",4,"ngIf"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],["method","post",3,"formGroup","ngSubmit"],["type","submit","class","btn-submit",3,"class","disabled",4,"ngIf"],[1,"description"],[3,"error"],[3,"notified","message","finished"],[1,"form-group"],["for","email_address",1,"form-label","bold"],["type","text","id","email_address","name","email_address","placeholder","david@example.com","required","required","autocomplete","new-email_address","formControlName","email_address","appLowercase","appLowercase",1,"form-control"],[3,"system-type","email-address",4,"ngIf"],[3,"system-type","email-address"],["for","password",1,"form-label","bold"],["type","password","id","password","name","password","placeholder","*******************","required","required","autocomplete","new-password","formControlName","password",1,"form-control"],[3,"system-type","password",4,"ngIf"],[3,"system-type","password"],["type","submit",1,"btn-submit",3,"disabled"]],template:function(e,t){1&e&&(l.Pb(0,"div",0),l.wc(1,U,2,1,"h2",1),l.wc(2,j,3,1,"div",2),l.wc(3,L,1,1,"app-resource-unavailable",3),l.wc(4,K,1,2,"app-notification-screen",4),l.Pb(5,"form",5),l.Wb("ngSubmit",function(){return t.confirmAuth(t.entryForm.value)}),l.wc(6,G,6,1,"ng-container",1),l.wc(7,H,6,1,"ng-container",1),l.wc(8,Y,2,5,"button",6),l.wc(9,V,2,0,"p",1),l.Ob(),l.Ob()),2&e&&(l.zb(1),l.gc("ngIf",t.title),l.zb(1),l.gc("ngIf",t.description),l.zb(1),l.gc("ngIf",t.isError),l.zb(1),l.gc("ngIf",t.notificationAvailable),l.zb(1),l.gc("formGroup",t.entryForm),l.zb(1),l.gc("ngIf",t.email_address),l.zb(1),l.gc("ngIf",t.password),l.zb(1),l.gc("ngIf",!t.isFormProcessing),l.zb(1),l.gc("ngIf",t.isFormSubmitted))},directives:[n.l,s.q,s.j,s.g,w.a,v.a,s.a,s.m,s.i,s.e,O.a,q],styles:[""]}),e})();const B={signIn:Object.assign(Object.assign({},{systemType:"User",title:"User",view:"gen-internal",viewWord:"User",link:"user",$link:"authentication",systemGuideline:"gen-internal"}),{title:"Sign into User Account"})},R=[{path:"",component:u,canActivate:[c.a],children:[{path:"",children:[{path:"",component:J,data:{signIn:B.signIn},canActivate:[c.a]}]}]}];let Z=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(R)],o.g]}),e})(),Q=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},providers:[y],imports:[[n.b,Z,s.l,i.a,a.a]]}),e})()},Rxsk:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("Ub9n"),s=r("Yvf7");const i=function(e,t){return{notification:!0,"fade-in":e,"fade-out":t}};function a(e,t){if(1&e&&(n.Pb(0,"p"),n.yc(1),n.Ob()),2&e){const e=n.ac();n.Bb(n.mc(3,i,e.fadeIn,e.fadeOut)),n.zb(1),n.zc(" ",e.notificationMessage," ")}}let o=(()=>{class e{constructor(){this.finished=new n.n}set notified(e){this.notificationAvailable=e,e&&(this.fadeIn=!0,this.fadeOutNotification())}get notified(){return this.notificationAvailable}fadeOutNotification(){setTimeout(()=>{this.fadeIn=!1,this.fadeOut=!0,this.removeNotification()},4e3)}removeNotification(){setTimeout(()=>{this.finished.emit(!0)},4e3)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["app-notification-screen"]],inputs:{notificationMessage:["message","notificationMessage"],notified:"notified"},outputs:{finished:"finished"},decls:2,vars:1,consts:[["id","notification-parent"],[3,"class",4,"ngIf"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.wc(1,a,2,6,"p",1),n.Ob()),2&e&&(n.zb(1),n.gc("ngIf",t.notificationAvailable))},directives:[s.l],styles:["#notification-parent[_ngcontent-%COMP%]{position:relative;width:100%}.notification[_ngcontent-%COMP%]{position:fixed;width:600px;background-color:#2f0348;color:#fff;margin:0 auto;top:40px;left:50px;border-radius:6px;padding:0 10px;font-family:Arial;opacity:1;font-size:10px;border:2px solid #a984c7;display:block}.fade-in[_ngcontent-%COMP%]{animation:fadeIn 3s ease;-webkit-animation:fadeIn 3s ease;-moz-animation:fadeIn ease 3s;-o-animation:fadeIn ease 3s;-ms-animation:fadeIn ease 3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fade-out[_ngcontent-%COMP%]{animation:fadeOut 4s ease;-webkit-animation:fadeOut 4s ease;-moz-animation:fadeOut ease 4s;-o-animation:fadeOut ease 4s;-ms-animation:fadeOut ease 4s}@keyframes fadeOut{0%{opacity:1;display:block}to{opacity:0;display:none}}@media screen and (max-width:700px){.notification[_ngcontent-%COMP%]{left:50px;width:350px}}"],changeDetection:0}),e})()},TY4h:function(e,t,r){"use strict";r.d(t,"a",function(){return g});var n=r("Ub9n"),s=r("Yvf7");function i(e,t){if(1&e&&(n.Nb(0),n.Pb(1,"p"),n.yc(2),n.Ob(),n.Mb()),2&e){const e=n.ac(2);n.zb(1),n.vc("color","red"),n.zb(1),n.zc(" Message : ",e.error.error.message,"")}}function a(e,t){if(1&e&&(n.Nb(0),n.Pb(1,"p"),n.yc(2),n.Ob(),n.Mb()),2&e){const e=n.ac(3);n.zb(1),n.vc("color","red"),n.zb(1),n.zc(" Message : ",e.error.error.field.message,"")}}function o(e,t){if(1&e&&n.wc(0,a,3,3,"ng-container",1),2&e){n.ac();const e=n.qc(9),t=n.ac();n.gc("ngIf",null==t.error||null==t.error.error?null:t.error.error.field)("ngIfElse",e)}}function c(e,t){if(1&e&&(n.Nb(0),n.Pb(1,"ul",7),n.Pb(2,"li"),n.yc(3),n.Ob(),n.Ob(),n.Mb()),2&e){const e=t.$implicit,r=n.ac(4);n.zb(3),n.zc("",null==r.error.error[e]?null:r.error.error[e].message," ")}}function l(e,t){if(1&e&&(n.Nb(0),n.Pb(1,"h4"),n.yc(2,"List of Errors : "),n.Ob(),n.wc(3,c,4,1,"ng-container",6),n.Mb()),2&e){const e=n.ac(3);n.zb(3),n.gc("ngForOf",e.errorKeys)}}function u(e,t){if(1&e&&n.wc(0,l,4,1,"ng-container",0),2&e){const e=n.ac(2);n.gc("ngIf",(null==e.error?null:e.error.error)&&e.error.status&&(null==e.errorKeys?null:e.errorKeys.length))}}function d(e,t){if(1&e&&(n.Pb(0,"p"),n.yc(1),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.zc(" Status Code : ",e.error.status," ")}}function f(e,t){1&e&&(n.Pb(0,"p"),n.yc(1," Status Code : 00000 "),n.Ob())}function b(e,t){if(1&e&&(n.Pb(0,"p"),n.yc(1),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.zc(" Status Text : ",e.error.statusText," ")}}function m(e,t){1&e&&(n.Pb(0,"p"),n.yc(1," Status Text : This is probably a network error or internal server error. Please check your internet connection or restart your browser and try again or refresh the page."),n.Ob())}function p(e,t){if(1&e&&(n.Nb(0),n.Pb(1,"h3"),n.yc(2," An Error has occured "),n.Ob(),n.Pb(3,"p"),n.yc(4),n.Ob(),n.wc(5,i,3,3,"ng-container",1),n.wc(6,o,1,2,"ng-template",null,2,n.xc),n.wc(8,u,1,1,"ng-template",null,3,n.xc),n.wc(10,d,2,1,"p",1),n.wc(11,f,2,0,"ng-template",null,4,n.xc),n.wc(13,b,2,1,"p",1),n.wc(14,m,2,0,"ng-template",null,5,n.xc),n.Mb()),2&e){const e=n.qc(7),t=n.qc(12),r=n.qc(15),s=n.ac();n.zb(4),n.zc(" Resource : ",s.error.resource," "),n.zb(1),n.gc("ngIf",null==s.error||null==s.error.error?null:s.error.error.message)("ngIfElse",e),n.zb(5),n.gc("ngIf",s.error.status)("ngIfElse",t),n.zb(3),n.gc("ngIf","Unknown Error"!=s.error.statusText)("ngIfElse",r)}}let g=(()=>{class e{constructor(){this.errorKeys=[]}set $error(e){e.error&&(this.errorKeys=Object.keys(e.error),this.error=e)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["app-resource-unavailable"]],inputs:{$error:["error","$error"]},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["fieldErr",""],["otherErr",""],["noStatusCode",""],["noStatusText",""],[4,"ngFor","ngForOf"],[1,"validation-errors"]],template:function(e,t){1&e&&n.wc(0,p,16,7,"ng-container",0),2&e&&n.gc("ngIf",t.error)},directives:[s.l,s.k],styles:[""],changeDetection:0}),e})()},c3CK:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("Yvf7"),s=r("Ub9n");let i=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})()},hxwH:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r("Yvf7"),s=r("Fk62"),i=r("8VHZ"),a=r("skqr"),o=r("kPid"),c=r("Ub9n");let l=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},providers:[a.a],imports:[[n.b,o.a,i.l,s.g.forChild([])]]}),e})()},iPJu:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("VcWf"),s=r("FBrc"),i=r("EYJY"),a=r("jV/k"),o=r("oECA"),c=r("Ub9n"),l=r("EUGn");let u=(()=>{class e{constructor(e,t,r){this.apiConfig=e,this.http=t,this.ems=r,this.searchQuery={},this.searchTerm=new i.a,this.searchTerm$=this.searchTerm.asObservable(),this.entriesSearched=new i.a,this.entriesSearched$=this.entriesSearched.asObservable(),this.clearSearch=new i.a,this.clearSearch$=this.clearSearch.asObservable(),this.searchCleared=new i.a,this.searchCleared$=this.searchCleared.asObservable(),this.errorExist=new i.a,this.errorExist$=this.errorExist.asObservable()}searchTerms(e,t,r){let n=`${this.apiConfig.host}/${t}/entries`,i={params:new s.f({fromObject:Object.assign({},e)})};return this.http.get(n,i).pipe(Object(o.a)(this.handleError(this.$systemType+" Entries",null)))}handleError(e="operation",t){return e=>(this.ems.message=e,Object(a.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(n.b),c.Tb(s.b),c.Tb(l.a))},e.\u0275prov=c.Gb({token:e,factory:e.\u0275fac}),e})()},inDW:function(e,t,r){"use strict";function n(e){return t=>{let r=Object.keys(e),n=Object.values(e),s=t.value;return""!=s&&r.indexOf(s)<0?{searchError:{value:s,searches:n}}:null}}function s(e){return t=>e.test(t.value)?null:{email_address:{value:t.value}}}function i(e){let t=["Student","Department President","Faculty President","Lecturer","Staff","Head of Department","Dean of Faculty","Bursar","Moderator","Administrator","Super Administrator"],r=/moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;return e=>r.test(e.value)?{forbiddenNames:{value:e.value,names:t}}:null}function a(){return e=>{const t=e.get("first_name"),r=e.get("last_name");return t&&r&&t.value==r.value?{bothNames:{value:t.value+r.value}}:null}}r.d(t,"d",function(){return n}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return i}),r.d(t,"b",function(){return a})},kPid:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r("Yvf7"),s=r("EUGn"),i=r("9nlD"),a=r("iPJu"),o=r("Ub9n");let c=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},providers:[s.a,i.a,a.a],imports:[[n.b]]}),e})()},rE5M:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return s});const n=/moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i,s=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/},skqr:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("8VHZ"),s=r("inDW"),i=r("Ub9n");let a=(()=>{class e{constructor(){}searchForm(e){return new n.c("",[Object(s.d)(e)])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac}),e})()}}]);