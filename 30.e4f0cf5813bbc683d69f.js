(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"5L02":function(e,t,n){"use strict";n.r(t),n.d(t,"RequestTypeModule",function(){return st});var r=n("Yvf7"),i=n("8VHZ"),s=n("Fk62"),a=n("/zEo"),o=n("Ub9n");let c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-homepage"]],decls:1,vars:0,template:function(e,t){1&e&&o.Lb(0,"router-outlet")},directives:[s.h],styles:[""]}),e})();var l=n("+ef2");function b(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function h(e,t){if(1&e&&o.Lb(0,"app-view-description",3),2&e){const e=o.ac();o.gc("system-type",e.systemType)("view-type",e.view)}}const y=function(){return["entry","create"]};function u(e,t){if(1&e&&(o.Pb(0,"li"),o.Pb(1,"a",5),o.yc(2),o.Ob(),o.Ob()),2&e){const e=o.ac(2);o.zb(1),o.gc("routerLink",o.kc(2,y)),o.zb(1),o.zc(" Add a ",e.systemType," ")}}const p=function(){return["entries"]},d=function(){return["entry","delete","all"]};function g(e,t){if(1&e&&(o.Pb(0,"div",4),o.Pb(1,"ul"),o.Pb(2,"li"),o.Pb(3,"a",5),o.yc(4),o.Ob(),o.Ob(),o.wc(5,u,3,3,"li",0),o.Pb(6,"li"),o.Pb(7,"a",5),o.yc(8),o.Ob(),o.Ob(),o.Pb(9,"li"),o.Pb(10,"a",6),o.yc(11),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&e){const e=o.ac();o.zb(3),o.gc("routerLink",o.kc(6,p)),o.zb(1),o.zc(" Manage ",e.systemType," "),o.zb(1),o.gc("ngIf",e.canCreate),o.zb(2),o.gc("routerLink",o.kc(7,d)),o.zb(1),o.zc(" Delete All ",e.systemType," "),o.zb(3),o.zc(" ",e.systemType," Statistics ")}}let f=(()=>{class e{constructor(e){this.route=e}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.dashboard.systemType,this.title=e.dashboard.title,this.view=e.dashboard.view,this.canCreate=null==e.dashboard.canCreate||e.dashboard.canCreate}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-dashboard"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"],["href","#",1,"center"]],template:function(e,t){1&e&&(o.wc(0,b,2,1,"h2",0),o.wc(1,h,1,2,"app-view-description",1),o.wc(2,g,12,8,"div",2)),2&e&&(o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.systemType))},directives:[r.l,l.a,s.f],styles:[""]}),e})();var m=n("EUGn"),v=n("jV/k"),O=n("vfyW"),E=n("oECA"),w=n("O6Zd"),$=n("VcWf"),z=n("FBrc");let T=(()=>{class e{constructor(e,t,n){this.http=e,this.apiConfig=t,this.ems=n}getAllEntry(e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:e}).pipe(Object(O.a)(e=>console.log(e)),Object(E.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${e}/detail`).pipe(Object(O.a)(e=>console.log(e)),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(O.a)(e=>console.log(e)),Object(w.a)(e=>({permitted:!0,$data:e})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(e){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,e).pipe(Object(O.a)(e=>console.log(e)),Object(w.a)(e=>({created:!0,$data:e})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${e}/update/`).pipe(Object(w.a)(e=>({permitted:!0,$data:e})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(e,t){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${e}/update`,t).pipe(Object(w.a)(e=>({updated:!0,$data:e})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${e}/delete/`).pipe(Object(w.a)(e=>({permitted:!0,$data:e})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(e){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${e}/delete/`).pipe(Object(w.a)(e=>({deleted:!0})),Object(E.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(e){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:e}).pipe(Object(w.a)(e=>({manyDeleted:!0})),Object(E.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(E.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllRequestType(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(w.a)(e=>({allDeleted:!0})),Object(E.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(e="operation",t){return e=>(this.ems.message=e,Object(v.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(z.b),o.Tb($.b),o.Tb(m.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac}),e})();var I=n("tTBu");let P=(()=>{class e{constructor(e){this.fb=e,this.permanentData={},this.foreignValidator=[i.o.required,i.o.max(9e7)],this.permanentProps={status:this.foreignValidator},this.otherCtrls={abbreviation:[i.o.required,i.o.minLength(2),i.o.maxLength(8)],unit:this.foreignValidator}}getPermanentProp(e){return this.permanentProps[e]}removeControls(e,t){null!=e&&e.length>0&&e.forEach(e=>t.get(e)?t.removeControl(e):null)}createPermanent(e,t){if(null!=e){for(let n in e){let r=n.toLowerCase();this.permanentData[r]=e[n],t.get(r)&&t.get(r).setValidators([...this.permanentProps[r],Object(I.a)(this.getMyData(r),n)]),t.get(r)&&t.get(r).updateValueAndValidity()}t.updateValueAndValidity()}}getMyData(e){return this.permanentData[e]}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(i.b))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac}),e})();var k=n("ZVmh"),F=n("J1zS"),C=n("TY4h"),L=n("FL99"),j=n("J1Ni");function A(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Abbreviation of ",e.systemType," should be provided and cannot be empty ")}}function q(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Abbreviation of ",e.systemType," cannot be less than 2 characters in length ")}}function K(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Abbreviation of ",e.systemType," cannot be greater than 8 characters in length ")}}function x(e,t){if(1&e&&(o.Pb(0,"div",2),o.Pb(1,"ul"),o.wc(2,A,2,1,"li",0),o.wc(3,q,2,1,"li",0),o.wc(4,K,2,1,"li",0),o.Ob(),o.Ob()),2&e){const e=o.ac(2);o.gc("@fadeAnimation",void 0),o.zb(2),o.gc("ngIf",null==e.abbreviation.errors?null:e.abbreviation.errors.required),o.zb(1),o.gc("ngIf",(null==e.abbreviation.errors?null:e.abbreviation.errors.required)||(null==e.abbreviation.errors?null:e.abbreviation.errors.minlength)),o.zb(1),o.gc("ngIf",(null==e.abbreviation.errors?null:e.abbreviation.errors.required)||(null==e.abbreviation.errors?null:e.abbreviation.errors.maxLength))}}function N(e,t){if(1&e&&(o.Nb(0),o.wc(1,x,5,4,"div",1),o.Mb()),2&e){const e=o.ac();o.zb(1),o.gc("ngIf",e.abbreviation.invalid&&(e.abbreviation.touched||e.abbreviation.dirty))}}function M(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Unit of ",e.systemType," should be provided and cannot be empty ")}}function D(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Unit of ",e.systemType," cannot be greater than specified length ")}}function V(e,t){if(1&e&&(o.Pb(0,"li"),o.yc(1),o.Ob()),2&e){const e=o.ac(3);o.zb(1),o.zc(" Unit of ",e.systemType," should be available from existing record before it can be considered valid ")}}function S(e,t){if(1&e&&(o.Pb(0,"div",2),o.Pb(1,"ul"),o.wc(2,M,2,1,"li",0),o.wc(3,D,2,1,"li",0),o.wc(4,V,2,1,"li",0),o.Ob(),o.Ob()),2&e){const e=o.ac(2);o.gc("@fadeAnimation",void 0),o.zb(2),o.gc("ngIf",null==e.unit.errors?null:e.unit.errors.required),o.zb(1),o.gc("ngIf",null==e.unit.errors?null:e.unit.errors.max),o.zb(1),o.gc("ngIf",null==e.unit.errors?null:e.unit.errors.Unit)}}function G(e,t){if(1&e&&(o.Nb(0),o.wc(1,S,5,4,"div",1),o.Mb()),2&e){const e=o.ac();o.zb(1),o.gc("ngIf",e.unit.invalid&&(e.unit.touched||e.unit.dirty))}}let W=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-validator"]],inputs:{systemType:["system-type","systemType"],abbreviation:"abbreviation",unit:"unit"},decls:2,vars:2,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(e,t){1&e&&(o.wc(0,N,2,1,"ng-container",0),o.wc(1,G,2,1,"ng-container",0)),2&e&&(o.gc("ngIf",t.abbreviation),o.zb(1),o.gc("ngIf",t.unit))},directives:[r.l],styles:[""],data:{animation:[j.a]}}),e})();function U(e,t){if(1&e&&o.Lb(0,"app-request-type-entry-validator",6),2&e){const e=o.ac(2);o.gc("system-type",e.systemType)("abbreviation",e.abbreviation)}}function B(e,t){if(1&e&&(o.Nb(0),o.Pb(1,"div",2),o.Pb(2,"label",3),o.yc(3," Abbreviation * : "),o.Ob(),o.Lb(4,"input",4),o.wc(5,U,1,2,"app-request-type-entry-validator",5),o.Ob(),o.Mb()),2&e){const e=o.ac();o.zb(4),o.gc("placeholder",null==e.placeholder?null:e.placeholder.abbreviation)("readOnly",e.noEdit),o.zb(1),o.gc("ngIf",e.abbreviation)}}function Q(e,t){if(1&e&&(o.Pb(0,"option",9),o.yc(1),o.Ob()),2&e){const e=t.$implicit;o.gc("value",e._id),o.zb(1),o.zc(" ",e.name," ")}}function R(e,t){if(1&e&&o.Lb(0,"app-department-entry-validator",12),2&e){const e=o.ac(2);o.gc("system-type",e.systemType)("unit",e.unit)}}function J(e,t){if(1&e&&(o.Nb(0),o.Pb(1,"div",2),o.Pb(2,"label",7),o.yc(3," Unit * : "),o.Ob(),o.Pb(4,"select",8),o.Lb(5,"option",9),o.wc(6,Q,2,2,"option",10),o.Ob(),o.wc(7,R,1,2,"app-department-entry-validator",11),o.Ob(),o.Mb()),2&e){const e=o.ac();o.zb(4),o.gc("readOnly",e.noEdit),o.zb(2),o.gc("ngForOf",e.eothers.Unit),o.zb(1),o.gc("ngIf",e.unit)}}let H=(()=>{class e{constructor(){}ngOnInit(){}get abbreviation(){return this.entryForm.get("abbreviation")}get unit(){return this.entryForm.get("unit")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},decls:3,vars:3,consts:[[3,"formGroup"],[4,"ngIf"],[1,"form-group"],["for","abbreviation",1,"form-label","bold"],["type","text","id","abbreviation","required","required","name","abbreviation","formControlName","abbreviation",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","abbreviation",4,"ngIf"],[3,"system-type","abbreviation"],["for","unit",1,"form-label","bold"],["name","unit","id","unit","required","required","formControlName","unit",1,"form-control",3,"readOnly"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","unit",4,"ngIf"],[3,"system-type","unit"]],template:function(e,t){1&e&&(o.Pb(0,"div",0),o.wc(1,B,6,3,"ng-container",1),o.wc(2,J,8,3,"ng-container",1),o.Ob()),2&e&&(o.gc("formGroup",t.entryForm),o.zb(1),o.gc("ngIf",t.abbreviation),o.zb(1),o.gc("ngIf",t.unit&&t.eothers&&t.eothers.Unit&&t.eothers.Unit.length>0))},directives:[i.j,i.g,r.l,i.a,i.m,i.i,i.e,W,i.n,i.k,i.p,r.k],styles:[""]}),e})();function Z(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function Y(e,t){if(1&e&&o.Lb(0,"app-resource-unavailable",3),2&e){const e=o.ac();o.gc("error",e.error)}}function _(e,t){if(1&e){const e=o.Qb();o.Nb(0),o.Pb(1,"div",4),o.Pb(2,"app-general-internal-entry-delete",5),o.Wb("processEntry",function(t){return o.rc(e),o.ac().changeEntry(t)}),o.Lb(3,"app-request-type-form-input",6),o.Ob(),o.Ob(),o.Mb()}if(2&e){const e=o.ac();o.zb(1),o.gc("formGroup",e.entryForm),o.zb(1),o.gc("system-type",e.systemType)("view",e.view)("entry-form",e.entryForm)("e-others",e.eothers)("placeholder",e.placeholder)("no-edit",e.noEdit)("system-guideline",e.systemGuideline),o.zb(1),o.gc("system-type",e.systemType)("entry-form",e.entryForm)("e-others",e.eothers)("placeholder",e.placeholder)("no-edit",e.noEdit)}}let X=(()=>{class e{constructor(e,t,n,r,i,s,a){this.route=e,this.router=t,this.rts=n,this.iofs=r,this.gifs=i,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.create.systemType,this.title=e.create.title,this.view=e.create.view,this.link=e.create.link,this.$link=e.create.$link,this.controlFilters=e.create.controlFilters,this.noEdit=e.create.noEdit,this.placeholder=e.create.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.rts.addEntry().subscribe(e=>{if(null==e)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=e&&1==e.permitted){let t=e.$data;this.eothers=t,this.entryForm=this.gifs.entryForm(),this.iofs.createPermanent(t,this.entryForm),this.iofs.removeControls(this.controlFilters,this.entryForm),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.addControl("unit",new i.c("",this.iofs.otherCtrls.unit)),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(e){this.error=null,this.isError=!1,this.rts.addEntry$(e).subscribe(e=>{null==e?this.giecs.isEntryChanged.next(!1):null!=e&&1==e.created&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(e))})}entryChanges(e){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a),o.Kb(s.d),o.Kb(T),o.Kb(P),o.Kb(k.a),o.Kb(F.a),o.Kb(m.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-create"]],features:[o.yb([m.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(e,t){1&e&&(o.Pb(0,"div",0),o.wc(1,Z,2,1,"h2",1),o.wc(2,Y,1,1,"app-resource-unavailable",2),o.wc(3,_,4,13,"ng-container",1),o.Ob()),2&e&&(o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("ngIf",t.entryForm))},directives:[r.l,C.a,i.j,i.g,L.a,H],styles:[""]}),e})();var ee=n("iPJu"),te=n("9nlD"),ne=n("yjbJ"),re=n("9Ku7"),ie=n("9yhg"),se=n("Rxsk"),ae=n("xlhj"),oe=n("RBZI");function ce(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function le(e,t){if(1&e&&o.Lb(0,"app-view-description",8),2&e){const e=o.ac();o.gc("view-type",e.view)("system-type",e.systemType)}}function be(e,t){if(1&e){const e=o.Qb();o.Pb(0,"app-notification-screen",9),o.Wb("finished",function(){return o.rc(e),o.ac().removeNotification()}),o.Ob()}if(2&e){const e=o.ac();o.gc("notified",e.notificationAvailable)("message",e.notificationMessage)}}function he(e,t){if(1&e&&o.Lb(0,"app-search",10),2&e){const e=o.ac();o.gc("system-type",e.systemType)("$link",e.$link)("search-filters",e.searchFilters)}}function ye(e,t){1&e&&(o.Pb(0,"td",22),o.yc(1," Nil "),o.Ob())}function ue(e,t){if(1&e&&(o.Pb(0,"td",28),o.yc(1),o.Ob()),2&e){const e=o.ac().$implicit;o.zb(1),o.zc(" ",null==e?null:e.name," ")}}function pe(e,t){if(1&e&&(o.Pb(0,"td",22),o.yc(1),o.bc(2,"date"),o.Ob()),2&e){const e=o.ac().$implicit;o.zb(1),o.zc(" ",o.dc(2,1,null==e?null:e.updated_on,"longDate")," ")}}function de(e,t){if(1&e&&(o.Pb(0,"td",22),o.yc(1),o.Ob()),2&e){const e=o.ac().$implicit;o.zb(1),o.zc(" ",null==e?null:e.abbreviation," ")}}function ge(e,t){if(1&e&&(o.Pb(0,"td",22),o.yc(1),o.Ob()),2&e){const e=o.ac().$implicit;o.zb(1),o.zc(" ",null==e?null:e.status," ")}}function fe(e,t){if(1&e){const e=o.Qb();o.Nb(0),o.Pb(1,"input",33,34),o.Wb("click",function(){o.rc(e);const t=o.qc(2),n=o.ac(3),r=n.$implicit,i=n.index;return o.ac(2).addEntryToDeleteList(null==r?null:r.num,t.checked,i)}),o.Ob(),o.Lb(3,"span",35),o.Mb()}if(2&e){const e=t.$implicit,n=o.ac(3).$implicit;o.zb(1),o.gc("checked",e==(null==n?null:n.num))}}function me(e,t){if(1&e&&(o.Nb(0),o.wc(1,fe,4,1,"ng-container",32),o.Mb()),2&e){const e=o.ac(4);o.zb(1),o.gc("ngForOf",e.esdl)}}function ve(e,t){if(1&e){const e=o.Qb();o.Pb(0,"input",36,34),o.Wb("click",function(){o.rc(e);const t=o.qc(1),n=o.ac(2),r=n.$implicit,i=n.index;return o.ac(2).addEntryToDeleteList(null==r?null:r.num,t.checked,i)}),o.Ob(),o.Lb(2,"span",35)}}function Oe(e,t){if(1&e&&(o.Pb(0,"label",29),o.wc(1,me,2,1,"ng-container",30),o.wc(2,ve,3,0,"ng-template",null,31,o.xc),o.Ob()),2&e){const e=o.qc(3),t=o.ac(3);o.zb(1),o.gc("ngIf",t.esdl.length)("ngIfElse",e)}}const Ee=function(e){return["../","entry",e,"detail"]},we=function(e){return["../","entry",e,"update"]},$e=function(e){return["../","entry",e,"delete"]};function ze(e,t){if(1&e&&(o.Pb(0,"tr"),o.Pb(1,"td",22),o.yc(2),o.Ob(),o.wc(3,ye,2,0,"ng-template",null,23,o.xc),o.wc(5,ue,2,1,"td",24),o.wc(6,pe,3,4,"td",25),o.wc(7,de,2,1,"td",25),o.wc(8,ge,2,1,"td",25),o.Pb(9,"td",13),o.Pb(10,"a",26),o.yc(11,"View"),o.Ob(),o.Pb(12,"a",26),o.yc(13,"Update"),o.Ob(),o.Pb(14,"a",26),o.yc(15,"Delete"),o.Ob(),o.wc(16,Oe,4,2,"label",27),o.Ob(),o.Ob()),2&e){const e=t.$implicit,n=t.index,r=o.qc(4);o.zb(2),o.zc(" ",n+1,". "),o.zb(3),o.gc("ngIf",null==e?null:e.name)("ngIfElse",r),o.zb(1),o.gc("ngIf",null==e?null:e.updated_on)("ngIfElse",r),o.zb(1),o.gc("ngIf",null==e?null:e.abbreviation)("ngIfElse",r),o.zb(1),o.gc("ngIf",null==e?null:e.status)("ngIfElse",r),o.zb(2),o.gc("routerLink",o.lc(13,Ee,null==e?null:e.slug)),o.zb(2),o.gc("routerLink",o.lc(15,we,null==e?null:e.slug)),o.zb(2),o.gc("routerLink",o.lc(17,$e,null==e?null:e.slug)),o.zb(2),o.gc("ngIf",!0)}}function Te(e,t){if(1&e&&o.Lb(0,"app-pagination",37),2&e){const e=o.ac(2);o.gc("entries-length",e.$entriesLength)("entry-ref",e.$entryRef)("page-number",e.pageNumber)}}function Ie(e,t){if(1&e&&(o.Pb(0,"div"),o.Pb(1,"table",11),o.Pb(2,"caption",12),o.yc(3," Entries "),o.Ob(),o.Pb(4,"colgroup"),o.Lb(5,"col",13),o.Lb(6,"col",13),o.Lb(7,"col",13),o.Lb(8,"col",13),o.Lb(9,"col",13),o.Lb(10,"col",13),o.Lb(11,"col",13),o.Lb(12,"col",14),o.Ob(),o.Pb(13,"thead"),o.Pb(14,"tr"),o.Pb(15,"th",15),o.yc(16," Index "),o.Ob(),o.Pb(17,"th",16),o.yc(18," Name "),o.Ob(),o.Pb(19,"th",17),o.yc(20," Updated On "),o.Ob(),o.Pb(21,"th",18),o.yc(22," Abbreviation "),o.Ob(),o.Pb(23,"th",19),o.yc(24," Status "),o.Ob(),o.Pb(25,"th",12),o.yc(26," Changes "),o.Ob(),o.Ob(),o.Ob(),o.Pb(27,"tbody"),o.wc(28,ze,17,19,"tr",20),o.Ob(),o.Pb(29,"tfoot"),o.Pb(30,"tr"),o.Lb(31,"td"),o.Ob(),o.Pb(32,"tr"),o.Lb(33,"td"),o.Ob(),o.Pb(34,"tr"),o.wc(35,Te,1,3,"app-pagination",21),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&e){const e=o.ac();o.zb(27),o.gc("@listAnimation",e.entries.length),o.zb(1),o.gc("ngForOf",e.entries)("ngForTrackBy",e.trackByNum),o.zb(7),o.gc("ngIf",e.pageNumber)}}function Pe(e,t){if(1&e&&o.Lb(0,"app-resource-unavailable",38),2&e){const e=o.ac();o.gc("error",e.error)}}let ke=(()=>{class e{constructor(e,t,n,r,i,s,a,o){this.route=e,this.location=t,this.rts=n,this.gss=r,this.gas=i,this.ems=s,this.ns=a,this.aus=o,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(e=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==e?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=e&&e.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=e.length,this.entries=e,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(e=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(e=>{this.isError=e})}searchErr$(e){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.getAllEntry({})}trackByNum(e,t){return t.num}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.entries.systemType,this.title=e.entries.title,this.view=e.entries.view,this.link=e.entries.link,this.$link=e.entries.link,this.searchFilters=e.entries.searchFilters,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.queryParamMap.subscribe(e=>{let t=this.gas.paramProcessor(e,this);return this.getAllEntry(t)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(e){this.rts.getAllEntry(e).subscribe(e=>{null==e?(this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=e&&e.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=e.length,this.entries=e),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(e,t,n){this.gas.addEntryToDeleteList(e,t,n,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.rts)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a),o.Kb(r.h),o.Kb(T),o.Kb(ee.a),o.Kb(ne.a),o.Kb(m.a),o.Kb(te.a),o.Kb(re.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entries"]],features:[o.yb([te.a,m.a,ee.a])],decls:11,vars:8,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center","name-internal"],[1,"bold","center"],[1,"bold","center","short-code"],[1,"bold","center","status"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(e,t){1&e&&(o.Pb(0,"div",0),o.wc(1,ce,2,1,"h2",1),o.wc(2,le,1,2,"app-view-description",2),o.wc(3,be,1,2,"app-notification-screen",3),o.Lb(4,"app-list-entry-options"),o.Pb(5,"div",4),o.wc(6,he,1,3,"app-search",5),o.Pb(7,"a",6),o.Wb("click",function(){return t.deleteManyEntry()}),o.yc(8," Delete Many "),o.Ob(),o.Ob(),o.wc(9,Ie,36,4,"div",1),o.wc(10,Pe,1,1,"app-resource-unavailable",7),o.Ob()),2&e&&(o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.notificationAvailable),o.zb(3),o.gc("ngIf",t.systemType),o.zb(1),o.Cb("hide",t.esdl.length<2),o.zb(2),o.gc("ngIf",t.$entriesLength>0),o.zb(1),o.gc("ngIf",t.isError))},directives:[r.l,ie.a,l.a,se.a,ae.a,r.k,s.f,oe.a,C.a],pipes:[r.d],styles:[""],data:{animation:[j.b]}}),e})();var Fe=n("XA6Z"),Ce=n("hLGb");function Le(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function je(e,t){if(1&e&&o.Lb(0,"app-view-description",4),2&e){const e=o.ac();o.gc("view-type",e.view)("system-type",e.systemType)}}function Ae(e,t){if(1&e&&o.Lb(0,"app-resource-unavailable",5),2&e){const e=o.ac();o.gc("error",e.error)}}function qe(e,t){if(1&e&&(o.Nb(0),o.Pb(1,"tr"),o.Pb(2,"th",6),o.yc(3," Abbreviation : "),o.Ob(),o.Pb(4,"td"),o.yc(5),o.Ob(),o.Ob(),o.Mb()),2&e){const e=o.ac();o.zb(5),o.zc(" ",null==e.entry?null:e.entry.abbreviation," ")}}function Ke(e,t){if(1&e&&(o.Nb(0),o.Pb(1,"tr"),o.Pb(2,"th",6),o.yc(3," Unit : "),o.Ob(),o.Pb(4,"td"),o.yc(5),o.Ob(),o.Ob(),o.Mb()),2&e){const e=o.ac();o.zb(5),o.zc(" ",null==e.entry?null:e.entry.unit," ")}}let xe=(()=>{class e{constructor(e,t,n){this.route=e,this.ems=t,this.rts=n,this.isError=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.detail.systemType,this.title=e.detail.title,this.view=e.detail.view,this.viewWord=e.detail.viewWord,this.link=e.detail.link,this.$link=e.detail.$link,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Fe.a)(e=>{let t=e.get("entry");return this.rts.getEntry(t)})).subscribe(e=>{null==e?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=e&&(this.entry=e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a),o.Kb(m.a),o.Kb(T))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-detail"]],features:[o.yb([m.a])],decls:6,vars:6,consts:[[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"error",4,"ngIf"],[3,"entry"],[3,"view-type","system-type"],[3,"error"],[1,"bold","left"]],template:function(e,t){1&e&&(o.wc(0,Le,2,1,"h2",0),o.wc(1,je,1,2,"app-view-description",1),o.wc(2,Ae,1,1,"app-resource-unavailable",2),o.Pb(3,"app-general-internal-entry-detail",3),o.wc(4,qe,6,1,"ng-container",0),o.wc(5,Ke,6,1,"ng-container",0),o.Ob()),2&e&&(o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("entry",t.entry),o.zb(1),o.gc("ngIf",null==t.entry?null:t.entry.abbreviation),o.zb(1),o.gc("ngIf",null==t.entry?null:t.entry.unit))},directives:[r.l,Ce.a,l.a,C.a],styles:[""]}),e})();var Ne=n("o+TJ");function Me(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function De(e,t){if(1&e&&o.Lb(0,"app-resource-unavailable",3),2&e){const e=o.ac();o.gc("error",e.error)}}function Ve(e,t){if(1&e){const e=o.Qb();o.Nb(0),o.Pb(1,"div",4),o.Pb(2,"app-general-internal-entry-update",5),o.Wb("processEntry",function(t){return o.rc(e),o.ac().changeEntry(t)}),o.Lb(3,"app-request-type-form-input",6),o.Ob(),o.Ob(),o.Mb()}if(2&e){const e=o.ac();o.zb(1),o.gc("formGroup",e.entryForm),o.zb(1),o.gc("system-type",e.systemType)("view",e.view)("entry",e.entry)("entry-form",e.entryForm)("e-others",e.eothers)("placeholder",e.placeholder)("no-edit",e.noEdit)("system-guideline",e.systemGuideline),o.zb(1),o.gc("system-type",e.systemType)("entry-form",e.entryForm)("e-others",e.eothers)("placeholder",e.placeholder)("no-edit",e.noEdit)}}let Se=(()=>{class e{constructor(e,t,n,r,i,s,a){this.route=e,this.router=t,this.rts=n,this.iofs=r,this.gifs=i,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.update.systemType,this.title=e.update.title,this.view=e.update.view,this.link=e.update.link,this.$link=e.update.$link,this.controlFilters=e.update.controlFilters,this.noEdit=e.update.noEdit,this.placeholder=e.update.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Fe.a)(e=>{let t=e.get("entry");return this.eslug=t,this.rts.updateEntry(t)})).subscribe(e=>{if(null==e)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=e&&1==e.permitted){this.entry=e.$data.Entry;let t=e.$data;this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.addControl("unit",new i.c("",this.iofs.otherCtrls.unit)),this.entryForm.patchValue(this.entry),this.eothers=t,this.iofs.removeControls(this.controlFilters,this.entryForm),this.iofs.createPermanent(t,this.entryForm),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(e){this.error=null,this.isError=!1,this.rts.updateEntry$(this.eslug,e).subscribe(e=>{null==e?this.giecs.isEntryChanged.next(!1):null!=e&&1==e.updated&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(e))})}entryChanges(e){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a),o.Kb(s.d),o.Kb(T),o.Kb(P),o.Kb(k.a),o.Kb(F.a),o.Kb(m.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-update"]],features:[o.yb([m.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(e,t){1&e&&(o.Pb(0,"div",0),o.wc(1,Me,2,1,"h2",1),o.wc(2,De,1,1,"app-resource-unavailable",2),o.wc(3,Ve,4,14,"ng-container",1),o.Ob()),2&e&&(o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("ngIf",t.entryForm))},directives:[r.l,C.a,i.j,i.g,Ne.a,H],styles:[""]}),e})();function Ge(e,t){if(1&e&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&e){const e=o.ac();o.zb(1),o.zc(" ",e.title," ")}}function We(e,t){if(1&e&&o.Lb(0,"app-resource-unavailable",2),2&e){const e=o.ac();o.gc("error",e.error)}}function Ue(e,t){if(1&e){const e=o.Qb();o.Nb(0),o.Pb(1,"div",3),o.Pb(2,"app-general-internal-entry-delete",4),o.Wb("processEntry",function(t){return o.rc(e),o.ac().changeEntry(t)}),o.Lb(3,"app-request-type-form-input",5),o.Ob(),o.Ob(),o.Mb()}if(2&e){const e=o.ac();o.zb(1),o.gc("formGroup",e.entryForm),o.zb(1),o.gc("system-type",e.systemType)("view",e.view)("entry",e.entry)("entry-form",e.entryForm)("placeholder",e.placeholder)("no-edit",e.noEdit)("system-guideline",e.systemGuideline),o.zb(1),o.gc("system-type",e.systemType)("entry-form",e.entryForm)("e-others",e.eothers)("placeholder",e.placeholder)("no-edit",e.noEdit)}}let Be=(()=>{class e{constructor(e,t,n,r,i,s,a){this.route=e,this.router=t,this.rts=n,this.iofs=r,this.gifs=i,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.delete.systemType,this.title=e.delete.title,this.view=e.delete.view,this.link=e.delete.link,this.$link=e.delete.$link,this.controlFilters=e.delete.controlFilters,this.noEdit=e.delete.noEdit,this.placeholder=e.delete.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Fe.a)(e=>{let t=e.get("entry");return this.eslug=t,this.rts.deleteEntry(t)})).subscribe(e=>{null==e?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=e&&1==e.permitted&&(this.entry=e.$data,this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.patchValue(this.entry),this.iofs.removeControls(this.controlFilters,this.entryForm))})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(e){this.error=null,this.isError=!1,this.rts.deleteEntry$(this.eslug).subscribe(e=>{null==e?this.giecs.isEntryChanged.next(!1):null!=e&&1==e.deleted&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(e))})}entryChanges(e){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a),o.Kb(s.d),o.Kb(T),o.Kb(P),o.Kb(k.a),o.Kb(F.a),o.Kb(m.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-delete"]],features:[o.yb([m.a])],decls:3,vars:3,consts:[[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(e,t){1&e&&(o.wc(0,Ge,2,1,"h2",0),o.wc(1,We,1,1,"app-resource-unavailable",1),o.wc(2,Ue,4,13,"ng-container",0)),2&e&&(o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("ngIf",t.entryForm))},directives:[r.l,C.a,i.j,i.g,L.a,H],styles:[""]}),e})();var Qe=n("oxaT");function Re(e,t){if(1&e&&o.Lb(0,"app-general-all-entry-delete-all",1),2&e){const e=o.ac();o.gc("system-type",e.systemType)("view-word",e.viewWord)("view",e.view)("title",e.title)("link",e.link)("$link",e.$link)}}let Je=(()=>{class e{constructor(e){this.route=e}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.deleteAll.systemType,this.viewWord=e.deleteAll.viewWord,this.title=e.deleteAll.title,this.view=e.deleteAll.view,this.link=e.deleteAll.link,this.$link=e.deleteAll.$link}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(s.a))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-request-type-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(e,t){1&e&&o.wc(0,Re,1,6,"app-general-all-entry-delete-all",0),2&e&&o.gc("ngIf",t.systemType)},directives:[r.l,Qe.a],styles:[""]}),e})(),He={systemType:"Request Type",title:"Request Type",view:"gen-internal",viewWord:"Request Type",link:"request-type",$link:"request-type",systemGuideline:"gen-internal"};const Ze={name:"Internet Credential",description:"Internet Credentials including username and password",abbreviation:"IC"},Ye={dashboard:Object.assign({},He),create:Object.assign(Object.assign({},He),{title:"Add a "+He.systemType,controlFilters:["status","description"],noEdit:!1,placeholder:Ze}),detail:Object.assign(Object.assign({},He),{title:He.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},He),{title:He.systemType+" Entry Update",controlFilters:[],noEdit:!1,placeholder:Ze}),delete:Object.assign(Object.assign({},He),{title:He.systemType+" Entry Delete",controlFilters:["description","status","unit"],noEdit:!0,placeholder:Ze}),deleteAll:Object.assign(Object.assign({},He),{title:He.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},He),{title:He.systemType+" Entries",searchFilters:{abbreviation:"Abbreviation",name:"Name",status:"Status"}})},_e=[{path:"",component:c,children:[{path:"",component:f,data:{dashboard:Ye.dashboard}},{path:"entry/create",component:X,data:{create:Ye.create}},{path:"entries",component:ke,data:{entries:Ye.entries}},{path:"entry/:entry/detail",component:xe,data:{detail:Ye.detail}},{path:"entry/:entry/update",component:Se,data:{update:Ye.update}},{path:"entry/:entry/delete",component:Be,data:{delete:Ye.delete}},{path:"entry/delete/all",component:Je,canActivate:[a.a],data:{deleteAll:Ye.deleteAll}}]}];let Xe=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(_e)],s.g]}),e})();var et=n("hxwH"),tt=n("kPid"),nt=n("gh/l"),rt=n("pBQQ"),it=n("mHYI");let st=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},providers:[P,T],imports:[[r.b,Xe,i.l,et.a,tt.a,nt.a,rt.a,it.a]]}),e})()}}]);