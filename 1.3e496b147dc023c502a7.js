(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2eHf":function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("J1Ni"),r=n("Ub9n"),s=n("Yvf7"),o=n("Fk62");function c(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"tr"),r.Pb(2,"th",8),r.xc(3," Name : "),r.Ob(),r.Pb(4,"td"),r.xc(5),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",null==t.entry?null:t.entry.name," ")}}function a(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"tr"),r.Pb(2,"th",8),r.xc(3," Created At : "),r.Ob(),r.Pb(4,"td"),r.xc(5),r.bc(6,"date"),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",r.dc(6,1,null==t.entry?null:t.entry.created_on,"fullDate")," ")}}function l(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"tr"),r.Pb(2,"th",8),r.xc(3," Updated At : "),r.Ob(),r.Pb(4,"td"),r.xc(5),r.bc(6,"date"),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",r.dc(6,1,null==t.entry?null:t.entry.updated_on,"fullDate")," ")}}function u(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"tr"),r.Pb(2,"th",8),r.xc(3," Description : "),r.Ob(),r.Pb(4,"td"),r.xc(5),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",null==t.entry?null:t.entry.description," ")}}function b(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"tr"),r.Pb(2,"th",8),r.xc(3," Status : "),r.Ob(),r.Pb(4,"td"),r.xc(5),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(5),r.yc(" ",null==t.entry?null:t.entry.status," ")}}const d=function(t){return["../../../","entry",t,"update"]},f=function(t){return["../../../","entry",t,"delete"]};function y(t,e){if(1&t&&(r.Pb(0,"div",1),r.Pb(1,"div",2),r.Pb(2,"table"),r.Pb(3,"colgroup"),r.Lb(4,"col",3),r.Lb(5,"col",4),r.Ob(),r.Pb(6,"tbody"),r.vc(7,c,6,1,"ng-container",5),r.vc(8,a,7,4,"ng-container",5),r.vc(9,l,7,4,"ng-container",5),r.vc(10,u,6,1,"ng-container",5),r.ec(11),r.vc(12,b,6,1,"ng-container",5),r.Ob(),r.Ob(),r.Pb(13,"div",6),r.Pb(14,"h3"),r.xc(15," Entry Options "),r.Ob(),r.Pb(16,"a",7),r.xc(17),r.Ob(),r.Pb(18,"a",7),r.xc(19),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(7),r.gc("ngIf",null==t.entry?null:t.entry.name),r.zb(1),r.gc("ngIf",null==t.entry?null:t.entry.created_on),r.zb(1),r.gc("ngIf",null==t.entry?null:t.entry.updated_on),r.zb(1),r.gc("ngIf",null==t.entry?null:t.entry.description),r.zb(2),r.gc("ngIf",null==t.entry?null:t.entry.status),r.zb(4),r.gc("routerLink",r.lc(10,d,null==t.entry?null:t.entry.slug)),r.zb(1),r.yc(" ",t.systemType," Update "),r.zb(1),r.gc("routerLink",r.lc(12,f,null==t.entry?null:t.entry.slug)),r.zb(1),r.yc(" ",t.systemType," Delete ")}}const m=["*"];let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-gi-entry-detail"]],inputs:{entry:"entry"},ngContentSelectors:m,decls:1,vars:1,consts:[["id","entry-view",4,"ngIf"],["id","entry-view"],["id","entry-detail"],[1,"parameter"],[1,"data"],[4,"ngIf"],[1,"entry-options"],[1,"entry-option","center",3,"routerLink"],[1,"bold","left"]],template:function(t,e){1&t&&(r.fc(),r.vc(0,y,20,14,"div",0)),2&t&&r.gc("ngIf",e.entry)},directives:[s.l,o.f],pipes:[s.d],styles:[""],data:{animation:[i.a]}}),t})()},"8eo2":function(t,e,n){"use strict";n.d(e,"a",function(){return F});var i=n("Ub9n"),r=n("Bp59"),s=n("J1Ni"),o=n("FpjV"),c=n("Yvf7"),a=n("+ef2"),l=n("8VHZ"),u=n("NSHn"),b=n("Fk62");function d(t,e){if(1&t&&i.Lb(0,"app-view-description",3),2&t){const t=i.ac(2);i.gc("view-type",t.view)("system-type",t.systemType)}}function f(t,e){if(1&t&&(i.Pb(0,"p"),i.Pb(1,"b",4),i.xc(2," Form Message : "),i.Ob(),i.xc(3),i.Ob()),2&t){const t=i.ac(2);i.zb(3),i.yc(" ",t.formMessage," ")}}const y=function(t){return{disabled:t}};function m(t,e){if(1&t){const t=i.Qb();i.Pb(0,"button",9),i.Wb("click",function(){i.rc(t);const e=i.ac(3);return e.changeEntry(e.entryForm.value)}),i.xc(1," Submit "),i.Ob()}if(2&t){const t=i.ac(3);i.Bb(i.lc(3,y,!t.isFormValid)),i.gc("disabled",!t.isFormValid)}}function p(t,e){1&t&&(i.Pb(0,"p"),i.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),i.Ob())}function g(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"div",5),i.Pb(2,"div",6),i.Lb(3,"app-gi-form-input",7),i.ec(4),i.vc(5,m,2,5,"button",8),i.vc(6,p,2,0,"p",0),i.Ob(),i.Ob(),i.Mb()),2&t){const t=i.ac(2);i.zb(1),i.gc("formGroup",t.entryForm),i.zb(2),i.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit),i.zb(2),i.gc("ngIf",!t.isFormProcessing),i.zb(1),i.gc("ngIf",t.isFormSubmitted)}}const h=function(t){return["../../../","entry",t,"detail"]},v=function(t){return["../../../","entry",t,"delete"]};function O(t,e){if(1&t&&(i.Pb(0,"div",10),i.Pb(1,"h3"),i.xc(2," Entry Options "),i.Ob(),i.Pb(3,"a",11),i.xc(4),i.Ob(),i.Pb(5,"a",11),i.xc(6),i.Ob(),i.Ob()),2&t){const t=i.ac(2);i.zb(3),i.gc("routerLink",i.lc(4,h,null==t.entry?null:t.entry.slug)),i.zb(1),i.yc(" ",t.systemType," Detail "),i.zb(1),i.gc("routerLink",i.lc(6,v,null==t.entry?null:t.entry.slug)),i.zb(1),i.yc(" ",t.systemType," Delete ")}}function P(t,e){if(1&t&&(i.Pb(0,"div"),i.vc(1,d,1,2,"app-view-description",1),i.vc(2,f,4,1,"p",0),i.vc(3,g,7,8,"ng-container",0),i.vc(4,O,7,8,"div",2),i.Ob()),2&t){const t=i.ac();i.gc("@fadeAnimation",void 0),i.zb(1),i.gc("ngIf",t.view),i.zb(1),i.gc("ngIf",!t.isFormModified),i.zb(1),i.gc("ngIf",t.entryForm),i.zb(1),i.gc("ngIf",t.systemType)}}const z=["*"];let F=(()=>{class t{constructor(t){this.giecs=t,this.processEntry=new i.n,this.isFormModified=!1,this.formMessage="Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.",this.isFormProcessing=!1,this.isFormSubmitted=!1,this.entryChangesOb=this.giecs.isEntryChanged$.subscribe(t=>{0==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1):1==t&&(this.isFormSubmitted=!1)})}ngOnInit(){}ngOnDestroy(){null!=this.entryChangesOb&&this.entryChangesOb.unsubscribe()}confirmChanges(t,e){return Object(r.a)(t,e,this),this.isFormModified}changeEntry(t){this.isFormProcessing=!0,this.confirmChanges(this.entry,t),1==this.isFormModified?(this.isFormSubmitted=!0,this.processEntry.emit(t)):this.isFormProcessing=!1}get isFormValid(){return this.entryForm.valid}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-gi-entry-update"]],inputs:{systemType:["system-type","systemType"],systemGuideline:["system-guideline","systemGuideline"],view:"view",entry:"entry",entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},outputs:{processEntry:"processEntry"},ngContentSelectors:z,decls:1,vars:1,consts:[[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],["class","entry-options",4,"ngIf"],[3,"view-type","system-type"],[1,"bold"],["id","entry-update",3,"formGroup"],["id","entry-detail"],[3,"system-type","entry-form","e-others","placeholder","no-edit"],["class","btn-submit",3,"class","disabled","click",4,"ngIf"],[1,"btn-submit",3,"disabled","click"],[1,"entry-options"],[1,"entry-option","center",3,"routerLink"]],template:function(t,e){1&t&&(i.fc(),i.vc(0,P,5,5,"div",0)),2&t&&i.gc("ngIf",!0)},directives:[c.l,a.a,l.l,l.h,u.a,b.f],styles:[""],data:{animation:[s.a]}}),t})()},Bp59:function(t,e,n){"use strict";function i(t){let e;for(let n in t)null==t[n]&&(t[n]="");return e=t,e}function r(t,e,n){for(let r in t)if(t[r]!=e[r]&&null!=e[r]&&1==e.hasOwnProperty(r)){n.isFormModified=!0;break}let i=Object.keys(t);return Object.keys(e).some(t=>{i.indexOf(t)>-1||(n.isFormModified=!0)}),n.isFormModified}n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r})},FpjV:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("EYJY"),r=n("Ub9n");let s=(()=>{class t{constructor(){this.isEntryChanged=new i.a,this.isEntryChanged$=this.isEntryChanged.asObservable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})()},Iwuw:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var i=n("Ub9n"),r=n("J1Ni"),s=n("FpjV"),o=n("Yvf7"),c=n("8VHZ"),a=n("NSHn"),l=n("Fk62");const u=function(t){return{disabled:t}};function b(t,e){if(1&t){const t=i.Qb();i.Pb(0,"button",6),i.Wb("click",function(){i.rc(t);const e=i.ac(3);return e.changeEntry(e.entryForm.value)}),i.xc(1," Submit "),i.Ob()}if(2&t){const t=i.ac(3);i.Bb(i.lc(3,u,!t.isFormValid)),i.gc("disabled",!t.isFormValid)}}function d(t,e){1&t&&(i.Pb(0,"p"),i.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),i.Ob())}function f(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"div",2),i.Pb(2,"div",3),i.Lb(3,"app-gi-form-input",4),i.ec(4),i.vc(5,b,2,5,"button",5),i.vc(6,d,2,0,"p",0),i.Ob(),i.Ob(),i.Mb()),2&t){const t=i.ac(2);i.zb(1),i.gc("formGroup",t.entryForm),i.zb(2),i.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit),i.zb(2),i.gc("ngIf",!t.isFormProcessing),i.zb(1),i.gc("ngIf",t.isFormSubmitted)}}const y=function(t){return["../../../","entry",t,"detail"]},m=function(t){return["../../../","entry",t,"update"]};function p(t,e){if(1&t&&(i.Pb(0,"div",7),i.Pb(1,"h3"),i.xc(2," Entry Options "),i.Ob(),i.Pb(3,"a",8),i.xc(4),i.Ob(),i.Pb(5,"a",8),i.xc(6),i.Ob(),i.Ob()),2&t){const t=i.ac(2);i.zb(3),i.gc("routerLink",i.lc(4,y,null==t.entry?null:t.entry.slug)),i.zb(1),i.yc(" ",t.systemType," Detail "),i.zb(1),i.gc("routerLink",i.lc(6,m,null==t.entry?null:t.entry.slug)),i.zb(1),i.yc(" ",t.systemType," Update ")}}function g(t,e){if(1&t&&(i.Pb(0,"div"),i.vc(1,f,7,8,"ng-container",0),i.vc(2,p,7,8,"div",1),i.Ob()),2&t){const t=i.ac();i.gc("@fadeAnimation",void 0),i.zb(1),i.gc("ngIf",t.entryForm),i.zb(1),i.gc("ngIf",t.systemType)}}const h=["*"];let v=(()=>{class t{constructor(t){this.giecs=t,this.processEntry=new i.n,this.isFormModified=!1,this.formMessage="Form will not be submitted and entry will not be deleted if data are unchanged since when they were retrieved from the database.",this.isFormProcessing=!1,this.isFormSubmitted=!1,this.entryChangesOb=this.giecs.isEntryChanged$.subscribe(t=>{0==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1):1==t&&(this.isFormSubmitted=!1)})}ngOnInit(){}ngOnDestroy(){null!=this.entryChangesOb&&this.entryChangesOb.unsubscribe()}changeEntry(t){if(!confirm("Are you sure you want to proceed with this action?"))return!1;this.isFormSubmitted=!0,this.isFormProcessing=!0,this.processEntry.emit(t)}get isFormValid(){return this.entryForm.valid}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(s.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-gi-entry-delete"]],inputs:{systemType:["system-type","systemType"],systemGuideline:["system-guideline","systemGuideline"],view:"view",entry:"entry",entryForm:["entry-form","entryForm"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},outputs:{processEntry:"processEntry"},ngContentSelectors:h,decls:1,vars:1,consts:[[4,"ngIf"],["class","entry-options",4,"ngIf"],["id","entry-delete",3,"formGroup"],["id","entry-detail"],[3,"system-type","entry-form","e-others","placeholder","no-edit"],["class","btn-submit",3,"class","disabled","click",4,"ngIf"],[1,"btn-submit",3,"disabled","click"],[1,"entry-options"],[1,"entry-option","center",3,"routerLink"]],template:function(t,e){1&t&&(i.fc(),i.vc(0,g,3,3,"div",0)),2&t&&i.gc("ngIf",!0)},directives:[o.l,c.l,c.h,a.a,l.f],styles:[""],data:{animation:[r.a]}}),t})()},L6ME:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("tTBu");class r{static createPermanent(t,e,n){if(null!=e){for(let r in e){let s=r.toLowerCase().split(" ").join(" ");t.permanentData[s]=e[r],n.get(s)&&n.get(s).setValidators([...t.permanentProps[s],Object(i.a)(t.getMyData(s),r)]),n.get(s)&&n.get(s).updateValueAndValidity()}n.updateValueAndValidity()}}static removeControls(t,e){null!=t&&t.length>0&&t.forEach(t=>e.get(t)?e.removeControl(t):null)}static removeAsyncValidators(t,e){null!=t&&t.length>0&&(t.forEach(t=>{e.get(t)&&(e.get(t).clearAsyncValidators(),e.get(t).updateValueAndValidity())}),e.updateValueAndValidity())}}},NSHn:function(t,e,n){"use strict";n.d(e,"a",function(){return G});var i=n("J1Ni"),r=n("Ub9n"),s=n("Yvf7"),o=n("8VHZ");function c(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Name of ",t.systemType," should be provided and cannot be empty ")}}function a(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Name of ",t.systemType," cannot be less than 3 characters in length ")}}function l(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Name of ",t.systemType," cannot be greater than 150 characters in length ")}}function u(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,c,2,1,"li",0),r.vc(3,a,2,1,"li",0),r.vc(4,l,2,1,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.name.errors?null:t.name.errors.required),r.zb(1),r.gc("ngIf",(null==t.name.errors?null:t.name.errors.required)||(null==t.name.errors?null:t.name.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.name.errors?null:t.name.errors.required)||(null==t.name.errors?null:t.name.errors.maxlength))}}function b(t,e){if(1&t&&(r.Nb(0),r.vc(1,u,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.name.invalid&&(t.name.touched||t.name.dirty))}}function d(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Title of ",t.systemType," should be provided and cannot be empty ")}}function f(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Title of ",t.systemType," cannot be less than 3 characters in length ")}}function y(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Title of ",t.systemType," cannot be greater than 150 characters in length ")}}function m(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,d,2,1,"li",0),r.vc(3,f,2,1,"li",0),r.vc(4,y,2,1,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.title.errors?null:t.title.errors.required),r.zb(1),r.gc("ngIf",(null==t.title.errors?null:t.title.errors.required)||(null==t.title.errors?null:t.title.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.title.errors?null:t.title.errors.required)||(null==t.title.errors?null:t.title.errors.maxlength))}}function p(t,e){if(1&t&&(r.Nb(0),r.vc(1,m,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.title.invalid&&(t.title.touched||t.title.dirty))}}function g(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Status of ",t.systemType," should be provided and cannot be empty ")}}function h(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Status of ",t.systemType," cannot be greater than specified length ")}}function v(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Status of ",t.systemType," should be available from existing record before it can be considered valid ")}}function O(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,g,2,1,"li",0),r.vc(3,h,2,1,"li",0),r.vc(4,v,2,1,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.status.errors?null:t.status.errors.required),r.zb(1),r.gc("ngIf",null==t.status.errors?null:t.status.errors.max),r.zb(1),r.gc("ngIf",null==t.status.errors?null:t.status.errors.Status)}}function P(t,e){if(1&t&&(r.Nb(0),r.vc(1,O,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.status.invalid&&(t.status.touched||t.status.dirty))}}function z(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Description of ",t.systemType," should be provided and cannot be empty ")}}function F(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Description of ",t.systemType," cannot be less than 10 characters in length ")}}function I(t,e){if(1&t&&(r.Pb(0,"li"),r.xc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.yc(" Description of ",t.systemType," cannot be greater than 250 characters in length ")}}function w(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.vc(2,z,2,1,"li",0),r.vc(3,F,2,1,"li",0),r.vc(4,I,2,1,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.description.errors?null:t.description.errors.required),r.zb(1),r.gc("ngIf",(null==t.description.errors?null:t.description.errors.required)||(null==t.description.errors?null:t.description.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.description.errors?null:t.description.errors.required)||(null==t.description.errors?null:t.description.errors.maxlength))}}function x(t,e){if(1&t&&(r.Nb(0),r.vc(1,w,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.description.invalid&&(t.description.touched||t.description.dirty))}}let E=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-gi-form-input-validator"]],inputs:{systemType:["system-type","systemType"],name:"name",title:"title",status:"status",description:"description"},decls:4,vars:4,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&(r.vc(0,b,2,1,"ng-container",0),r.vc(1,p,2,1,"ng-container",0),r.vc(2,P,2,1,"ng-container",0),r.vc(3,x,2,1,"ng-container",0)),2&t&&(r.gc("ngIf",e.name),r.zb(1),r.gc("ngIf",e.title),r.zb(1),r.gc("ngIf",e.status),r.zb(1),r.gc("ngIf",e.description))},directives:[s.l],styles:[""],data:{animation:[i.a]}}),t})();function T(t,e){if(1&t&&r.Lb(0,"app-gi-form-input-validator",6),2&t){const t=r.ac(3);r.gc("system-type",t.systemType)("name",t.name)}}function k(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"label",3),r.xc(3," Name * : "),r.Ob(),r.Lb(4,"input",4),r.vc(5,T,1,2,"app-gi-form-input-validator",5),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.gc("placeholder",null==t.placeholder?null:t.placeholder.name)("readOnly",t.noEdit),r.zb(1),r.gc("ngIf",t.name)}}function N(t,e){if(1&t&&r.Lb(0,"app-gi-form-input-validator",10),2&t){const t=r.ac(3);r.gc("system-type",t.systemType)("title",t.title)}}function S(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"label",7),r.xc(3," Title * : "),r.Ob(),r.Lb(4,"input",8),r.vc(5,N,1,2,"app-gi-form-input-validator",9),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.gc("placeholder",null==t.placeholder?null:t.placeholder.title)("readOnly",t.noEdit),r.zb(1),r.gc("ngIf",t.title)}}function L(t,e){if(1&t&&r.Lb(0,"app-gi-form-input-validator",14),2&t){const t=r.ac(3);r.gc("system-type",t.systemType)("description",t.description)}}function M(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"label",11),r.xc(3," Description * : "),r.Ob(),r.Pb(4,"textarea",12),r.xc(5,"\t\t\t\t\t\n\t\t\t\t"),r.Ob(),r.vc(6,L,1,2,"app-gi-form-input-validator",13),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.gc("placeholder",null==t.placeholder?null:t.placeholder.description)("readOnly",t.noEdit),r.zb(2),r.gc("ngIf",t.description)}}function C(t,e){if(1&t&&(r.Pb(0,"option",17),r.xc(1),r.Ob()),2&t){const t=e.$implicit;r.gc("value",t._id),r.zb(1),r.yc(" ",t.word," ")}}function V(t,e){if(1&t&&r.Lb(0,"app-gi-form-input-validator",20),2&t){const t=r.ac(3);r.gc("system-type",t.systemType)("status",t.status)}}function A(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"label",15),r.xc(3," Status * : "),r.Ob(),r.Pb(4,"select",16),r.Lb(5,"option",17),r.vc(6,C,2,2,"option",18),r.Ob(),r.vc(7,V,1,2,"app-gi-form-input-validator",19),r.Ob(),r.Mb()),2&t){const t=r.ac(2);r.zb(4),r.gc("readOnly",t.noEdit),r.zb(2),r.gc("ngForOf",t.eothers.Status),r.zb(1),r.gc("ngIf",t.status)}}function q(t,e){if(1&t&&(r.Pb(0,"div"),r.Pb(1,"div",1),r.vc(2,k,6,3,"ng-container",0),r.Pb(3,"div",1),r.vc(4,S,6,3,"ng-container",0),r.Ob(),r.vc(5,M,7,3,"ng-container",0),r.ec(6),r.vc(7,A,8,3,"ng-container",0),r.Ob(),r.Ob()),2&t){const t=r.ac();r.gc("@fadeAnimation",void 0),r.zb(1),r.gc("formGroup",t.entryForm),r.zb(1),r.gc("ngIf",t.name),r.zb(1),r.gc("@fadeAnimation",void 0)("formGroup",t.entryForm),r.zb(1),r.gc("ngIf",t.title),r.zb(1),r.gc("ngIf",t.description),r.zb(2),r.gc("ngIf",t.status&&t.eothers&&t.eothers.Status&&t.eothers.Status.length>0)}}const D=["*"];let G=(()=>{class t{constructor(){}ngOnInit(){}get name(){return this.entryForm.get("name")}get description(){return this.entryForm.get("description")}get status(){return this.entryForm.get("status")}get title(){return this.entryForm.get("title")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-gi-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},ngContentSelectors:D,decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[1,"form-group"],["for","name",1,"form-label","bold"],["type","text","id","name","required","required","name","name","formControlName","name",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","name",4,"ngIf"],[3,"system-type","name"],["for","title",1,"form-label","bold"],["type","text","id","title","required","required","name","title","formControlName","title",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","title",4,"ngIf"],[3,"system-type","title"],["for","description",1,"form-label","bold"],["id","description","name","description","required","required","formControlName","description",1,"form-control","form-textarea",3,"placeholder","readOnly"],[3,"system-type","description",4,"ngIf"],[3,"system-type","description"],["for","status",1,"form-label","bold"],["name","status","id","status","required","required","formControlName","status",1,"form-control",3,"readOnly"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","status",4,"ngIf"],[3,"system-type","status"]],template:function(t,e){1&t&&(r.fc(),r.vc(0,q,8,8,"div",0)),2&t&&r.gc("ngIf",!0)},directives:[s.l,o.l,o.h,o.b,o.o,o.k,o.f,E,o.p,o.m,o.r,s.k],styles:[""],data:{animation:[i.a]}}),t})()},OQDe:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("8VHZ"),r=n("Ub9n");let s=(()=>{class t{constructor(t){this.fb=t,this.foreignValidator=[i.q.required,i.q.max(9e7)]}entryForm(){return this.fb.group({name:["",{validators:[i.q.required,i.q.minLength(3),i.q.maxLength(150)]}],description:["",{validators:[i.q.required,i.q.minLength(10),i.q.maxLength(250)]}],status:["",{validators:this.foreignValidator}]})}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(i.c))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})()},QHo3:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n("Ub9n"),r=n("J1Ni"),s=n("FpjV"),o=n("Yvf7"),c=n("+ef2"),a=n("8VHZ"),l=n("NSHn");function u(t,e){if(1&t&&i.Lb(0,"app-view-description",2),2&t){const t=i.ac(2);i.gc("view-type",t.view)("system-type",t.systemType)}}const b=function(t){return{disabled:t}};function d(t,e){if(1&t){const t=i.Qb();i.Pb(0,"button",6),i.Wb("click",function(){i.rc(t);const e=i.ac(3);return e.createEntry(e.entryForm.value)}),i.xc(1," Submit "),i.Ob()}if(2&t){const t=i.ac(3);i.Bb(i.lc(3,b,!t.isFormValid)),i.gc("disabled",!t.isFormValid)}}function f(t,e){1&t&&(i.Pb(0,"p"),i.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),i.Ob())}function y(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"div",3),i.Lb(2,"app-gi-form-input",4),i.ec(3),i.vc(4,d,2,5,"button",5),i.vc(5,f,2,0,"p",0),i.Ob(),i.Mb()),2&t){const t=i.ac(2);i.zb(1),i.gc("formGroup",t.entryForm),i.zb(1),i.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit),i.zb(2),i.gc("ngIf",!t.isFormProcessing),i.zb(1),i.gc("ngIf",t.isFormSubmitted)}}function m(t,e){if(1&t&&(i.Pb(0,"div"),i.vc(1,u,1,2,"app-view-description",1),i.vc(2,y,6,8,"ng-container",0),i.Ob()),2&t){const t=i.ac();i.gc("@fadeAnimation",void 0),i.zb(1),i.gc("ngIf",t.view),i.zb(1),i.gc("ngIf",t.entryForm)}}const p=["*"];let g=(()=>{class t{constructor(t){this.giecs=t,this.processEntry=new i.n,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.entryChangesOb=this.giecs.isEntryChanged$.subscribe(t=>{0==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1):1==t&&(this.isFormSubmitted=!1)})}ngOnInit(){}ngOnDestroy(){null!=this.entryChangesOb&&this.entryChangesOb.unsubscribe()}createEntry(t){this.isFormSubmitted=!0,this.isFormProcessing=!0,this.processEntry.emit(t)}get isFormValid(){return this.entryForm.valid}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(s.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-gi-entry-create"]],inputs:{systemType:["system-type","systemType"],systemGuideline:["system-guideline","systemGuideline"],view:"view",entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},outputs:{processEntry:"processEntry"},ngContentSelectors:p,decls:1,vars:1,consts:[[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"view-type","system-type"],[3,"formGroup"],[3,"system-type","entry-form","e-others","placeholder","no-edit"],["class","btn-submit",3,"class","disabled","click",4,"ngIf"],[1,"btn-submit",3,"disabled","click"]],template:function(t,e){1&t&&(i.fc(),i.vc(0,m,3,3,"div",0)),2&t&&i.gc("ngIf",!0)},directives:[o.l,c.a,a.l,a.h,l.a],styles:[""],data:{animation:[r.a]}}),t})()},"T+6q":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("Yvf7"),r=n("BeQt"),s=n("hxwH"),o=n("Ub9n");let c=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[r.a],imports:[[i.b,s.a]]}),t})()},ku54:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var i=n("XA6Z"),r=n("EUGn"),s=n("9nlD"),o=n("J1Ni"),c=n("Ub9n"),a=n("Fk62"),l=n("BeQt"),u=n("Yvf7"),b=n("uMT1"),d=n("+ef2"),f=n("Rxsk"),y=n("TY4h"),m=n("1B5t");function p(t,e){if(1&t&&(c.Pb(0,"h2"),c.xc(1),c.Ob()),2&t){const t=c.ac();c.zb(1),c.yc(" ",t.title," ")}}function g(t,e){if(1&t&&c.Lb(0,"app-view-description",7),2&t){const t=c.ac();c.gc("system-type",t.systemType)("view-type",t.view)}}function h(t,e){if(1&t){const t=c.Qb();c.Pb(0,"app-notification-screen",8),c.Wb("finished",function(){return c.rc(t),c.ac().removeNotification()}),c.Ob()}if(2&t){const t=c.ac();c.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function v(t,e){if(1&t&&c.Lb(0,"app-resource-unavailable",9),2&t){const t=c.ac();c.gc("error",t.error)}}function O(t,e){if(1&t&&c.Lb(0,"app-delete-all-entry",13),2&t){const t=c.ac(3);c.gc("system-type",t.systemType)}}function P(t,e){if(1&t){const t=c.Qb();c.Pb(0,"button",14),c.Wb("click",function(){return c.rc(t),c.ac(3).deleteAllEntry()}),c.xc(1," Confirm "),c.Ob()}}function z(t,e){1&t&&(c.Pb(0,"p"),c.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),c.Ob())}function F(t,e){if(1&t&&(c.Nb(0),c.vc(1,O,1,1,"app-delete-all-entry",11),c.vc(2,P,2,0,"button",12),c.vc(3,z,2,0,"p",1),c.Mb()),2&t){const t=c.ac(2);c.zb(1),c.gc("ngIf",t.systemType),c.zb(1),c.gc("ngIf",!t.isFormProcessing),c.zb(1),c.gc("ngIf",t.isFormSubmitted)}}function I(t,e){if(1&t&&(c.Pb(0,"div",10),c.vc(1,F,4,3,"ng-container",1),c.Ob()),2&t){const t=c.ac();c.gc("@fadeAnimation",void 0),c.zb(1),c.gc("ngIf",!t.isLoading)}}let w=(()=>{class t{constructor(t,e,n,i,r){this.route=t,this.router=e,this.gas=n,this.ems=i,this.ns=r,this.isError=!1,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.canDelete=!1,this.isLoading=!1}ngOnInit(){this.gas.$sa=this.$link,this.route.paramMap.pipe(Object(i.a)(t=>(this.isLoading=!0,this.gas.deleteAllEntry()))).subscribe(t=>{null==t&&(this.isLoading=!1,this.canDelete=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)),null!=t&&t.length>0&&(this.isLoading=!1,this.canDelete=!0)})}ngOnDestroy(){clearTimeout(this.deleteAllT)}deleteAllEntry(){if(!confirm("Are you sure you want to proceed with this action?"))return!1;this.gas.$systemType=this.systemType,this.gas.$sa=this.$link,this.isFormSubmitted=!0,this.error=null,this.isError=!1,this.isFormProcessing=!0,this.gas.$deleteAllEntry().subscribe(t=>{null==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1,this.isError=!0,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`),this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):(this.isLoading=!0,this.isFormSubmitted=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`),this.$entryChanges({}))})}$entryChanges(t){this.deleteAllT=setTimeout(()=>this.router.navigate(["system","internal",this.link]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(a.a),c.Kb(a.e),c.Kb(l.a),c.Kb(r.a),c.Kb(s.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-general-all-entry-delete-all"]],inputs:{systemType:["system-type","systemType"],viewWord:["view-word","viewWord"],title:"title",view:"view",link:"link",$link:"$link"},features:[c.yb([s.a,r.a])],decls:7,vars:6,consts:[["id","entry-delete-all"],[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"error",4,"ngIf"],["id","entry-detail",4,"ngIf"],[3,"is-loading"],[3,"system-type","view-type"],[3,"notified","message","finished"],[3,"error"],["id","entry-detail"],[3,"system-type",4,"ngIf"],["class","btn-submit","type","submit",3,"click",4,"ngIf"],[3,"system-type"],["type","submit",1,"btn-submit",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.vc(1,p,2,1,"h2",1),c.vc(2,g,1,2,"app-view-description",2),c.vc(3,h,1,2,"app-notification-screen",3),c.vc(4,v,1,1,"app-resource-unavailable",4),c.vc(5,I,2,2,"div",5),c.Ob(),c.Lb(6,"app-loading-menu",6)),2&t&&(c.zb(1),c.gc("ngIf",e.title),c.zb(1),c.gc("ngIf",e.view),c.zb(1),c.gc("ngIf",e.notificationAvailable),c.zb(1),c.gc("ngIf",e.isError),c.zb(1),c.gc("ngIf",e.canDelete),c.zb(1),c.gc("is-loading",e.isLoading))},directives:[u.l,b.a,d.a,f.a,y.a,m.a],styles:[""],data:{animation:[o.a]}}),t})()},pBQQ:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("Yvf7"),r=n("Fk62"),s=n("8VHZ"),o=n("hxwH"),c=n("kPid"),a=n("Ub9n");let l=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();var u=n("FpjV"),b=n("OQDe");let d=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[l,u.a,b.a],imports:[[i.b,r.g.forChild([]),s.n,o.a,c.a]]}),t})()},tTBu:function(t,e,n){"use strict";function i(t,e){return n=>{let i=n.value,r=t.map(t=>t._id);return"number"==typeof r[0]&&(i=+i),""!=i&&r.indexOf(i)<0?{[e]:{value:i,name:e}}:null}}n.d(e,"a",function(){return i})}}]);