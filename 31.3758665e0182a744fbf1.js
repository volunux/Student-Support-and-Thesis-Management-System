(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{bfZe:function(t,e,n){"use strict";n.r(e),n.d(e,"DepartmentModule",function(){return ye});var i=n("Yvf7"),s=n("8VHZ"),r=n("Fk62"),a=n("/zEo"),o=n("Ub9n");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&o.Lb(0,"router-outlet")},directives:[r.h],styles:[""]}),t})();var l=n("J1Ni"),b=n("+ef2");function h(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function d(t,e){if(1&t&&o.Lb(0,"app-view-description",3),2&t){const t=o.ac(2);o.gc("system-type",t.systemType)("view-type",t.view)}}const p=function(){return["entry","create"]};function y(t,e){if(1&t&&(o.Pb(0,"li"),o.Pb(1,"a",5),o.xc(2),o.Ob(),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.gc("routerLink",o.kc(2,p)),o.zb(1),o.yc(" Add a ",t.systemType," ")}}const u=function(){return["entries"]},g=function(){return["entry","delete","all"]};function f(t,e){if(1&t&&(o.Pb(0,"div",4),o.Pb(1,"ul"),o.Pb(2,"li"),o.Pb(3,"a",5),o.xc(4),o.Ob(),o.Ob(),o.vc(5,y,3,3,"li",0),o.Pb(6,"li"),o.Pb(7,"a",5),o.xc(8),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t){const t=o.ac(2);o.zb(3),o.gc("routerLink",o.kc(5,u)),o.zb(1),o.yc(" Manage ",t.systemType," "),o.zb(1),o.gc("ngIf",t.canCreate),o.zb(2),o.gc("routerLink",o.kc(6,g)),o.zb(1),o.yc(" Delete All ",t.systemType," ")}}function m(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,h,2,1,"h2",0),o.vc(2,d,1,2,"app-view-description",1),o.vc(3,f,9,7,"div",2),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.systemType)}}let v=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-dashboard"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"]],template:function(t,e){1&t&&o.vc(0,m,4,4,"div",0),2&t&&o.gc("ngIf",!0)},directives:[i.l,b.a,r.f],styles:[""],data:{animation:[l.a]}}),t})();var O=n("EUGn"),E=n("jV/k"),$=n("vfyW"),I=n("XRyL"),T=n("oECA"),z=n("O6Zd"),P=n("VcWf"),k=n("FBrc");let L=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object($.a)(t=>console.log(t)),Object(I.a)(3e3),Object(T.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object($.a)(t=>console.log(t)),Object(I.a)(3e3),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object($.a)(t=>console.log(t)),Object(I.a)(3e3),Object(z.a)(t=>({permitted:!0,$data:t})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object($.a)(t=>console.log(t)),Object(z.a)(t=>({created:!0,$data:t})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(I.a)(3e3),Object(z.a)(t=>({permitted:!0,$data:t})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(z.a)(t=>({updated:!0,$data:t})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(I.a)(3e3),Object(z.a)(t=>({permitted:!0,$data:t})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(z.a)(t=>({deleted:!0})),Object(T.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(z.a)(t=>({manyDeleted:!0})),Object(T.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(I.a)(3e3),Object(T.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllDepartment(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(z.a)(t=>({allDeleted:!0})),Object(T.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(E.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(k.b),o.Tb(P.b),o.Tb(O.a))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var w=n("L6ME");let F=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.foreignValidator=[s.o.required,s.o.max(9e7)],this.permanentProps={status:this.foreignValidator},this.otherCtrls={abbreviation:[s.o.required,s.o.minLength(2),s.o.maxLength(8)],faculty:this.foreignValidator}}getPermanentProp(t){return this.permanentProps[t]}getMyData(t){return this.permanentData[t]}removeControls(t,e){w.a.removeControls(t,e)}createPermanent(t,e){w.a.createPermanent(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(s.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var x=n("OQDe"),j=n("FpjV"),C=n("uMT1"),A=n("TY4h"),K=n("Iwuw");function M(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Abbreviation of ",t.systemType," should be provided and cannot be empty ")}}function D(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Abbreviation of ",t.systemType," cannot be less than 2 characters in length ")}}function N(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Abbreviation of ",t.systemType," cannot be greater than 8 characters in length ")}}function G(t,e){if(1&t&&(o.Pb(0,"div",2),o.Pb(1,"ul"),o.vc(2,M,2,1,"li",0),o.vc(3,D,2,1,"li",0),o.vc(4,N,2,1,"li",0),o.Ob(),o.Ob()),2&t){const t=o.ac(2);o.gc("@fadeAnimation",void 0),o.zb(2),o.gc("ngIf",null==t.abbreviation.errors?null:t.abbreviation.errors.required),o.zb(1),o.gc("ngIf",(null==t.abbreviation.errors?null:t.abbreviation.errors.required)||(null==t.abbreviation.errors?null:t.abbreviation.errors.minlength)),o.zb(1),o.gc("ngIf",(null==t.abbreviation.errors?null:t.abbreviation.errors.required)||(null==t.abbreviation.errors?null:t.abbreviation.errors.maxLength))}}function q(t,e){if(1&t&&(o.Nb(0),o.vc(1,G,5,4,"div",1),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",t.abbreviation.invalid&&(t.abbreviation.touched||t.abbreviation.dirty))}}function S(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Faculty of ",t.systemType," should be provided and cannot be empty ")}}function V(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Faculty of ",t.systemType," cannot be greater than specified length ")}}function W(t,e){if(1&t&&(o.Pb(0,"li"),o.xc(1),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.yc(" Faculty of ",t.systemType," should be available from existing record before it can be considered valid ")}}function Q(t,e){if(1&t&&(o.Pb(0,"div",2),o.Pb(1,"ul"),o.vc(2,S,2,1,"li",0),o.vc(3,V,2,1,"li",0),o.vc(4,W,2,1,"li",0),o.Ob(),o.Ob()),2&t){const t=o.ac(2);o.gc("@fadeAnimation",void 0),o.zb(2),o.gc("ngIf",null==t.faculty.errors?null:t.faculty.errors.required),o.zb(1),o.gc("ngIf",null==t.faculty.errors?null:t.faculty.errors.max),o.zb(1),o.gc("ngIf",null==t.faculty.errors?null:t.faculty.errors.Faculty)}}function B(t,e){if(1&t&&(o.Nb(0),o.vc(1,Q,5,4,"div",1),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",t.faculty.invalid&&(t.faculty.touched||t.faculty.dirty))}}let H=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-validator"]],inputs:{systemType:["system-type","systemType"],abbreviation:"abbreviation",faculty:"faculty"},decls:2,vars:2,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&(o.vc(0,q,2,1,"ng-container",0),o.vc(1,B,2,1,"ng-container",0)),2&t&&(o.gc("ngIf",e.abbreviation),o.zb(1),o.gc("ngIf",e.faculty))},directives:[i.l],styles:[""],data:{animation:[l.a]}}),t})();function U(t,e){if(1&t&&o.Lb(0,"app-department-entry-validator",6),2&t){const t=o.ac(2);o.gc("system-type",t.systemType)("abbreviation",t.abbreviation)}}function Z(t,e){if(1&t&&(o.Nb(0),o.Pb(1,"div",2),o.Pb(2,"label",3),o.xc(3," Abbreviation * : "),o.Ob(),o.Lb(4,"input",4),o.vc(5,U,1,2,"app-department-entry-validator",5),o.Ob(),o.Mb()),2&t){const t=o.ac();o.zb(4),o.gc("placeholder",null==t.placeholder?null:t.placeholder.abbreviation)("readOnly",t.noEdit),o.zb(1),o.gc("ngIf",t.abbreviation)}}function J(t,e){if(1&t&&(o.Pb(0,"option",9),o.xc(1),o.Ob()),2&t){const t=e.$implicit;o.gc("value",t._id),o.zb(1),o.yc(" ",t.name," ")}}function R(t,e){if(1&t&&o.Lb(0,"app-department-entry-validator",12),2&t){const t=o.ac(2);o.gc("system-type",t.systemType)("faculty",t.faculty)}}function _(t,e){if(1&t&&(o.Nb(0),o.Pb(1,"div",2),o.Pb(2,"label",7),o.xc(3," Faculty * : "),o.Ob(),o.Pb(4,"select",8),o.Lb(5,"option",9),o.vc(6,J,2,2,"option",10),o.Ob(),o.vc(7,R,1,2,"app-department-entry-validator",11),o.Ob(),o.Mb()),2&t){const t=o.ac();o.zb(4),o.gc("readOnly",t.noEdit),o.zb(2),o.gc("ngForOf",t.eothers.Faculty),o.zb(1),o.gc("ngIf",t.faculty)}}let X=(()=>{class t{constructor(){}ngOnInit(){}get abbreviation(){return this.entryForm.get("abbreviation")}get faculty(){return this.entryForm.get("faculty")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},decls:3,vars:4,consts:[[3,"formGroup"],[4,"ngIf"],[1,"form-group"],["for","abbreviation",1,"form-label","bold"],["type","text","id","abbreviation","required","required","name","abbreviation","formControlName","abbreviation",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","abbreviation",4,"ngIf"],[3,"system-type","abbreviation"],["for","faculty",1,"form-label","bold"],["name","faculty","id","faculty","required","required","formControlName","faculty",1,"form-control",3,"readOnly"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","faculty",4,"ngIf"],[3,"system-type","faculty"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,Z,6,3,"ng-container",1),o.vc(2,_,8,3,"ng-container",1),o.Ob()),2&t&&(o.gc("@fadeAnimation",void 0)("formGroup",e.entryForm),o.zb(1),o.gc("ngIf",e.abbreviation),o.zb(1),o.gc("ngIf",e.faculty&&e.eothers&&e.eothers.Faculty&&e.eothers.Faculty.length>0))},directives:[s.j,s.g,i.l,s.a,s.m,s.i,s.e,H,s.n,s.k,s.p,i.k],styles:[""],data:{animation:[l.a]}}),t})();function Y(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function tt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",4),2&t){const t=o.ac();o.gc("error",t.error)}}function et(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",6),o.Pb(1,"app-gi-entry-delete",7),o.Wb("processEntry",function(e){return o.rc(t),o.ac(2).changeEntry(e)}),o.Lb(2,"app-department-form-input",8),o.Ob(),o.Ob()}if(2&t){const t=o.ac(2);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function nt(t,e){if(1&t&&(o.Nb(0),o.vc(1,et,3,13,"div",5),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",!t.isLoading)}}let it=(()=>{class t{constructor(t,e,n,i,s,r,a){this.route=t,this.router=e,this.dps=n,this.dpfs=i,this.gifs=s,this.giecs=r,this.ems=a,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.$link=t.create.$link,this.controlFilters=t.create.controlFilters,this.noEdit=t.create.noEdit,this.placeholder=t.create.placeholder,this.dps.$systemType=this.systemType,this.dps.$sa=this.$link,this.isLoading=!0,this.dps.addEntry().subscribe(t=>{if(null==t)this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.isLoading=!1;let e=t.$data;this.eothers=e,this.entryForm=this.gifs.entryForm(),this.dpfs.createPermanent(e,this.entryForm),this.dpfs.removeControls(this.controlFilters,this.entryForm),this.entryForm.addControl("abbreviation",new s.c("",this.dpfs.otherCtrls.abbreviation)),this.entryForm.addControl("faculty",new s.c("",this.dpfs.otherCtrls.faculty)),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.dps.addEntry$(t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.created&&(this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.d),o.Kb(L),o.Kb(F),o.Kb(x.a),o.Kb(j.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-create"]],features:[o.yb([O.a])],decls:5,vars:5,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,Y,2,1,"h2",1),o.vc(2,tt,1,1,"app-resource-unavailable",2),o.vc(3,nt,2,1,"ng-container",1),o.Ob(),o.Lb(4,"app-loading-menu",3)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.entryForm),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[i.l,C.a,A.a,s.j,s.g,K.a,X],styles:[""],data:{animation:[l.a]}}),t})();var st=n("iPJu"),rt=n("9nlD"),at=n("BeQt"),ot=n("9Ku7"),ct=n("Rxsk"),lt=n("9yhg"),bt=n("xlhj"),ht=n("scZC");function dt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function pt(t,e){if(1&t&&o.Lb(0,"app-view-description",9),2&t){const t=o.ac();o.gc("view-type",t.view)("system-type",t.systemType)}}function yt(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",10),o.Wb("finished",function(){return o.rc(t),o.ac().removeNotification()}),o.Ob()}if(2&t){const t=o.ac();o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function ut(t,e){1&t&&o.Lb(0,"app-list-entry-options")}function gt(t,e){if(1&t&&o.Lb(0,"app-search",11),2&t){const t=o.ac();o.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function ft(t,e){1&t&&(o.Pb(0,"td",23),o.xc(1," Nil "),o.Ob())}function mt(t,e){if(1&t&&(o.Pb(0,"td",29),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.name," ")}}function vt(t,e){if(1&t&&(o.Pb(0,"td",23),o.xc(1),o.bc(2,"date"),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",o.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function Ot(t,e){if(1&t&&(o.Pb(0,"td",23),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.abbreviation," ")}}function Et(t,e){if(1&t&&(o.Pb(0,"td",23),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.status," ")}}function $t(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"input",34,35),o.Wb("click",function(){o.rc(t);const e=o.qc(2),n=o.ac(3),i=n.$implicit,s=n.index;return o.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,s)}),o.Ob(),o.Lb(3,"span",36),o.Mb()}if(2&t){const t=e.$implicit,n=o.ac(3).$implicit;o.zb(1),o.gc("checked",t==(null==n?null:n.num))}}function It(t,e){if(1&t&&(o.Nb(0),o.vc(1,$t,4,1,"ng-container",33),o.Mb()),2&t){const t=o.ac(4);o.zb(1),o.gc("ngForOf",t.esdl)}}function Tt(t,e){if(1&t){const t=o.Qb();o.Pb(0,"input",37,35),o.Wb("click",function(){o.rc(t);const e=o.qc(1),n=o.ac(2),i=n.$implicit,s=n.index;return o.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,s)}),o.Ob(),o.Lb(2,"span",36)}}function zt(t,e){if(1&t&&(o.Pb(0,"label",30),o.vc(1,It,2,1,"ng-container",31),o.vc(2,Tt,3,0,"ng-template",null,32,o.wc),o.Ob()),2&t){const t=o.qc(3),e=o.ac(3);o.zb(1),o.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const Pt=function(t){return["../","entry",t,"detail"]},kt=function(t){return["../","entry",t,"update"]},Lt=function(t){return["../","entry",t,"delete"]};function wt(t,e){if(1&t&&(o.Pb(0,"tr"),o.Pb(1,"td",23),o.xc(2),o.Ob(),o.vc(3,ft,2,0,"ng-template",null,24,o.wc),o.vc(5,mt,2,1,"td",25),o.vc(6,vt,3,4,"td",26),o.vc(7,Ot,2,1,"td",26),o.vc(8,Et,2,1,"td",26),o.Pb(9,"td",14),o.Pb(10,"a",27),o.xc(11,"View"),o.Ob(),o.Pb(12,"a",27),o.xc(13,"Update"),o.Ob(),o.Pb(14,"a",27),o.xc(15,"Delete"),o.Ob(),o.vc(16,zt,4,2,"label",28),o.Ob(),o.Ob()),2&t){const t=e.$implicit,n=e.index,i=o.qc(4);o.zb(2),o.yc(" ",n+1,". "),o.zb(3),o.gc("ngIf",null==t?null:t.name)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.abbreviation)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.status)("ngIfElse",i),o.zb(2),o.gc("routerLink",o.lc(13,Pt,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(15,kt,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(17,Lt,null==t?null:t.slug)),o.zb(2),o.gc("ngIf",!0)}}function Ft(t,e){if(1&t&&o.Lb(0,"app-pagination",38),2&t){const t=o.ac(2);o.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)}}function xt(t,e){if(1&t&&(o.Pb(0,"div"),o.Pb(1,"table",12),o.Pb(2,"caption",13),o.xc(3," Entries "),o.Ob(),o.Pb(4,"colgroup"),o.Lb(5,"col",14),o.Lb(6,"col",14),o.Lb(7,"col",14),o.Lb(8,"col",14),o.Lb(9,"col",14),o.Lb(10,"col",14),o.Lb(11,"col",14),o.Lb(12,"col",15),o.Ob(),o.Pb(13,"thead"),o.Pb(14,"tr"),o.Pb(15,"th",16),o.xc(16," Index "),o.Ob(),o.Pb(17,"th",17),o.xc(18," Name "),o.Ob(),o.Pb(19,"th",18),o.xc(20," Updated On "),o.Ob(),o.Pb(21,"th",19),o.xc(22," Abbreviation "),o.Ob(),o.Pb(23,"th",20),o.xc(24," Status "),o.Ob(),o.Pb(25,"th",13),o.xc(26," Changes "),o.Ob(),o.Ob(),o.Ob(),o.Pb(27,"tbody"),o.vc(28,wt,17,19,"tr",21),o.Ob(),o.Pb(29,"tfoot"),o.Pb(30,"tr"),o.Lb(31,"td"),o.Ob(),o.Pb(32,"tr"),o.Lb(33,"td"),o.Ob(),o.Pb(34,"tr"),o.vc(35,Ft,1,3,"app-pagination",22),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t){const t=o.ac();o.zb(27),o.gc("@listAnimation",t.entries.length),o.zb(1),o.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum),o.zb(7),o.gc("ngIf",t.pageNumber)}}function jt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",39),2&t){const t=o.ac();o.gc("error",t.error)}}let Ct=(()=>{class t{constructor(t,e,n,i,s,r,a,o){this.route=t,this.location=e,this.dps=n,this.gss=i,this.gas=s,this.ems=r,this.ns=a,this.aus=o,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.isLoading=!1,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.dps.$systemType=this.systemType,this.dps.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.isLoading=!0,this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.dps.getAllEntry(t).subscribe(t=>{null==t?(this.isLoading=!1,this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.isLoading=!1,this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,n){this.gas.addEntryToDeleteList(t,e,n,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.dps)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(i.h),o.Kb(L),o.Kb(st.a),o.Kb(at.a),o.Kb(O.a),o.Kb(rt.a),o.Kb(ot.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entries"]],features:[o.yb([rt.a,O.a,st.a])],decls:12,vars:11,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"is-loading"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center","name-internal"],[1,"bold","center"],[1,"bold","center","short-code"],[1,"bold","center","status"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,dt,2,1,"h2",1),o.vc(2,pt,1,2,"app-view-description",2),o.vc(3,yt,1,2,"app-notification-screen",3),o.vc(4,ut,1,0,"app-list-entry-options",1),o.Pb(5,"div",4),o.vc(6,gt,1,3,"app-search",5),o.Pb(7,"a",6),o.Wb("click",function(){return e.deleteManyEntry()}),o.xc(8," Delete Many "),o.Ob(),o.Ob(),o.vc(9,xt,36,4,"div",1),o.vc(10,jt,1,1,"app-resource-unavailable",7),o.Ob(),o.Lb(11,"app-loading-menu",8)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.view),o.zb(1),o.gc("ngIf",e.notificationAvailable),o.zb(1),o.gc("ngIf",e.$entriesLength>0),o.zb(2),o.gc("ngIf",e.systemType),o.zb(1),o.Cb("hide",e.esdl.length<2),o.zb(2),o.gc("ngIf",e.$entriesLength>0),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[i.l,C.a,b.a,ct.a,lt.a,bt.a,i.k,r.f,ht.a,A.a],pipes:[i.d],styles:[""],data:{animation:[l.c,l.a]}}),t})();var At=n("XA6Z"),Kt=n("2eHf");function Mt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function Dt(t,e){if(1&t&&o.Lb(0,"app-view-description",5),2&t){const t=o.ac(2);o.gc("view-type",t.view)("system-type",t.systemType)}}function Nt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",6),2&t){const t=o.ac(2);o.gc("error",t.error)}}function Gt(t,e){if(1&t&&(o.Nb(0),o.Pb(1,"tr"),o.Pb(2,"th",7),o.xc(3," Abbreviation : "),o.Ob(),o.Pb(4,"td"),o.xc(5),o.Ob(),o.Ob(),o.Mb()),2&t){const t=o.ac(2);o.zb(5),o.yc(" ",null==t.entry?null:t.entry.abbreviation," ")}}function qt(t,e){if(1&t&&(o.Nb(0),o.Pb(1,"tr"),o.Pb(2,"th",7),o.xc(3," Faculty : "),o.Ob(),o.Pb(4,"td"),o.xc(5),o.Ob(),o.Ob(),o.Mb()),2&t){const t=o.ac(2);o.zb(5),o.yc(" ",null==t.entry?null:t.entry.faculty," ")}}function St(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,Mt,2,1,"h2",0),o.vc(2,Dt,1,2,"app-view-description",2),o.vc(3,Nt,1,1,"app-resource-unavailable",3),o.Pb(4,"app-gi-entry-detail",4),o.vc(5,Gt,6,1,"ng-container",0),o.vc(6,qt,6,1,"ng-container",0),o.Ob(),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("entry",t.entry),o.zb(1),o.gc("ngIf",null==t.entry?null:t.entry.abbreviation),o.zb(1),o.gc("ngIf",null==t.entry?null:t.entry.faculty)}}let Vt=(()=>{class t{constructor(t,e,n){this.route=t,this.ems=e,this.dps=n,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.detail.systemType,this.title=t.detail.title,this.view=t.detail.view,this.viewAbbreviation=t.detail.viewAbbreviation,this.link=t.detail.link,this.$link=t.detail.$link,this.dps.$systemType=this.systemType,this.dps.$sa=this.$link,this.route.paramMap.pipe(Object(At.a)(t=>{let e=t.get("entry");return this.isLoading=!1,this.dps.getEntry(e)})).subscribe(t=>{null==t?(this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&(this.isLoading=!1,this.entry=t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(O.a),o.Kb(L))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-detail"]],features:[o.yb([O.a])],decls:2,vars:2,consts:[[4,"ngIf"],[3,"is-loading"],[3,"view-type","system-type",4,"ngIf"],[3,"error",4,"ngIf"],[3,"entry"],[3,"view-type","system-type"],[3,"error"],[1,"bold","left"]],template:function(t,e){1&t&&(o.vc(0,St,7,7,"div",0),o.Lb(1,"app-loading-menu",1)),2&t&&(o.gc("ngIf",!0),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[i.l,C.a,Kt.a,b.a,A.a],styles:[""],data:{animation:[l.a]}}),t})();var Wt=n("8eo2");function Qt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function Bt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",4),2&t){const t=o.ac();o.gc("error",t.error)}}function Ht(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",6),o.Pb(1,"app-gi-entry-update",7),o.Wb("processEntry",function(e){return o.rc(t),o.ac(2).changeEntry(e)}),o.Lb(2,"app-department-form-input",8),o.Ob(),o.Ob()}if(2&t){const t=o.ac(2);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function Ut(t,e){if(1&t&&(o.Nb(0),o.vc(1,Ht,3,14,"div",5),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",!t.isLoading)}}let Zt=(()=>{class t{constructor(t,e,n,i,s,r,a){this.route=t,this.router=e,this.dps=n,this.dpfs=i,this.gifs=s,this.giecs=r,this.ems=a,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.update.systemType,this.title=t.update.title,this.view=t.update.view,this.link=t.update.link,this.$link=t.update.$link,this.controlFilters=t.update.controlFilters,this.noEdit=t.update.noEdit,this.placeholder=t.update.placeholder,this.dps.$systemType=this.systemType,this.dps.$sa=this.$link,this.route.paramMap.pipe(Object(At.a)(t=>{let e=t.get("entry");return this.eslug=e,this.isLoading=!0,this.dps.updateEntry(e)})).subscribe(t=>{if(null==t)this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.isLoading=!1,this.entry=t.$data.Entry;let e=t.$data;this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new s.c("",this.dpfs.otherCtrls.abbreviation)),this.entryForm.addControl("faculty",new s.c("",this.dpfs.otherCtrls.faculty)),this.entryForm.patchValue(this.entry),this.eothers=e,this.dpfs.removeControls(this.controlFilters,this.entryForm),this.dpfs.createPermanent(e,this.entryForm),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.dps.updateEntry$(this.eslug,t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.updated&&(this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.d),o.Kb(L),o.Kb(F),o.Kb(x.a),o.Kb(j.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-update"]],features:[o.yb([O.a])],decls:5,vars:5,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,Qt,2,1,"h2",1),o.vc(2,Bt,1,1,"app-resource-unavailable",2),o.vc(3,Ut,2,1,"ng-container",1),o.Ob(),o.Lb(4,"app-loading-menu",3)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.entryForm),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[i.l,C.a,A.a,s.j,s.g,Wt.a,X],styles:[""],data:{animation:[l.a]}}),t})();function Jt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function Rt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",3),2&t){const t=o.ac(2);o.gc("error",t.error)}}function _t(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",5),o.Pb(1,"app-gi-entry-delete",6),o.Wb("processEntry",function(e){return o.rc(t),o.ac(3).changeEntry(e)}),o.Lb(2,"app-department-form-input",7),o.Ob(),o.Ob()}if(2&t){const t=o.ac(3);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function Xt(t,e){if(1&t&&(o.Nb(0),o.vc(1,_t,3,13,"div",4),o.Mb()),2&t){const t=o.ac(2);o.zb(1),o.gc("ngIf",!t.isLoading)}}function Yt(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,Jt,2,1,"h2",0),o.vc(2,Rt,1,1,"app-resource-unavailable",2),o.vc(3,Xt,2,1,"ng-container",0),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("ngIf",t.entryForm)}}let te=(()=>{class t{constructor(t,e,n,i,s,r,a){this.route=t,this.router=e,this.dps=n,this.dpfs=i,this.gifs=s,this.giecs=r,this.ems=a,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.delete.systemType,this.title=t.delete.title,this.view=t.delete.view,this.link=t.delete.link,this.$link=t.delete.$link,this.controlFilters=t.delete.controlFilters,this.noEdit=t.delete.noEdit,this.placeholder=t.delete.placeholder,this.dps.$systemType=this.systemType,this.dps.$sa=this.$link,this.route.paramMap.pipe(Object(At.a)(t=>{let e=t.get("entry");return this.eslug=e,this.isLoading=!0,this.dps.deleteEntry(e)})).subscribe(t=>{null==t?(this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&1==t.permitted&&(this.isLoading=!1,this.entry=t.$data,this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new s.c("",this.dpfs.otherCtrls.abbreviation)),this.entryForm.patchValue(this.entry),this.dpfs.removeControls(this.controlFilters,this.entryForm))})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.dps.deleteEntry$(this.eslug).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.deleted&&(this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.d),o.Kb(L),o.Kb(F),o.Kb(x.a),o.Kb(j.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-delete"]],features:[o.yb([O.a])],decls:2,vars:2,consts:[[4,"ngIf"],[3,"is-loading"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.vc(0,Yt,4,4,"div",0),o.Lb(1,"app-loading-menu",1)),2&t&&(o.gc("ngIf",!0),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[i.l,C.a,A.a,s.j,s.g,K.a,X],styles:[""],data:{animation:[l.a]}}),t})();var ee=n("ku54");function ne(t,e){if(1&t&&o.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=o.ac();o.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let ie=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-department-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&o.vc(0,ne,1,6,"app-general-all-entry-delete-all",0),2&t&&o.gc("ngIf",e.systemType)},directives:[i.l,ee.a],styles:[""]}),t})(),se={systemType:"Department",title:"Department",view:"gen-internal",viewWord:"Department",link:"department",$link:"department",systemGuideline:"gen-internal"};const re={name:"Information and Media Technology",description:"Information and Media",abbreviation:"IMT"},ae={dashboard:Object.assign({},se),create:Object.assign(Object.assign({},se),{title:"Add a "+se.systemType,controlFilters:["status","description"],noEdit:!1,placeholder:re}),detail:Object.assign(Object.assign({},se),{title:se.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},se),{title:se.systemType+" Entry Update",controlFilters:[],noEdit:!1,placeholder:re}),delete:Object.assign(Object.assign({},se),{title:se.systemType+" Entry Delete",controlFilters:["description","status","faculty"],noEdit:!0,placeholder:re}),deleteAll:Object.assign(Object.assign({},se),{title:se.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},se),{title:se.systemType+" Entries",searchFilters:{abbreviation:"Abbreviation",name:"Name",status:"Status"}})},oe=[{path:"",component:c,children:[{path:"",component:v,data:{dashboard:ae.dashboard}},{path:"entry/create",component:it,data:{create:ae.create}},{path:"entries",component:Ct,data:{entries:ae.entries}},{path:"entry/:entry/detail",component:Vt,data:{detail:ae.detail}},{path:"entry/:entry/update",component:Zt,data:{update:ae.update}},{path:"entry/:entry/delete",component:te,data:{delete:ae.delete}},{path:"entry/delete/all",component:ie,canActivate:[a.a],data:{deleteAll:ae.deleteAll}}]}];let ce=(()=>{class t{constructor(){}}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(oe)],r.g]}),t})();var le=n("hxwH"),be=n("kPid"),he=n("T+6q"),de=n("pBQQ"),pe=n("O/oE");let ye=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[F,L],imports:[[i.b,ce,s.l,le.a,be.a,he.a,de.a,pe.a]]}),t})()}}]);