(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{Dh1V:function(t,e,i){"use strict";i.r(e),i.d(e,"AccountChangeMessageTemplateTypeModule",function(){return ie});var s=i("Yvf7"),n=i("8VHZ"),r=i("Fk62"),a=i("/zEo"),o=i("Ub9n");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&o.Lb(0,"router-outlet")},directives:[r.h],styles:[""]}),t})();var l=i("J1Ni"),h=i("+ef2");function d(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function p(t,e){if(1&t&&o.Lb(0,"app-view-description",3),2&t){const t=o.ac(2);o.gc("system-type",t.systemType)("view-type",t.view)}}const y=function(){return["entry","create"]};function b(t,e){if(1&t&&(o.Pb(0,"li"),o.Pb(1,"a",5),o.xc(2),o.Ob(),o.Ob()),2&t){const t=o.ac(3);o.zb(1),o.gc("routerLink",o.kc(2,y)),o.zb(1),o.yc(" Add a ",t.systemType," ")}}const g=function(){return["entries"]},u=function(){return["entry","delete","all"]};function f(t,e){if(1&t&&(o.Pb(0,"div",4),o.Pb(1,"ul"),o.Pb(2,"li"),o.Pb(3,"a",5),o.xc(4),o.Ob(),o.Ob(),o.vc(5,b,3,3,"li",0),o.Pb(6,"li"),o.Pb(7,"a",5),o.xc(8),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t){const t=o.ac(2);o.zb(3),o.gc("routerLink",o.kc(5,g)),o.zb(1),o.yc(" Manage ",t.systemType," "),o.zb(1),o.gc("ngIf",t.canCreate),o.zb(2),o.gc("routerLink",o.kc(6,u)),o.zb(1),o.yc(" Delete All ",t.systemType," ")}}function m(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,d,2,1,"h2",0),o.vc(2,p,1,2,"app-view-description",1),o.vc(3,f,9,7,"div",2),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.systemType)}}let v=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-dashboard"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"]],template:function(t,e){1&t&&o.vc(0,m,4,4,"div",0),2&t&&o.gc("ngIf",!0)},directives:[s.l,h.a,r.f],styles:[""],data:{animation:[l.a]}}),t})();var O=i("9nlD"),E=i("EUGn"),$=i("jV/k"),T=i("vfyW"),w=i("XRyL"),I=i("oECA"),L=i("O6Zd"),k=i("VcWf"),P=i("FBrc");let z=(()=>{class t{constructor(t,e,i){this.http=t,this.apiConfig=e,this.ems=i}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object(T.a)(t=>console.log(t)),Object(w.a)(2e3),Object(I.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object(T.a)(t=>console.log(t)),Object(w.a)(2e3),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(T.a)(t=>console.log(t)),Object(w.a)(2e3),Object(L.a)(t=>({permitted:!0,$data:t})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object(T.a)(t=>console.log(t)),Object(L.a)(t=>({created:!0,$data:t})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(w.a)(2e3),Object(L.a)(t=>({permitted:!0,$data:t})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(L.a)(t=>({updated:!0,$data:t})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(w.a)(2e3),Object(L.a)(t=>({permitted:!0,$data:t})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(L.a)(t=>({deleted:!0})),Object(I.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(L.a)(t=>({manyDeleted:!0})),Object(I.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(w.a)(2e3),Object(I.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllAccountChangeMessageTemplateType(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(L.a)(t=>({allDeleted:!0})),Object(I.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object($.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(P.b),o.Tb(k.b),o.Tb(E.a))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var C=i("L6ME");let F=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.foreignValidator=[n.q.required,n.q.max(9e7)],this.permanentProps={status:this.foreignValidator},this.otherCtrls={title:[n.q.required,n.q.minLength(3),n.q.maxLength(150)]}}getPermanentProp(t){return this.permanentProps[t]}removeControls(t,e){C.a.removeControls(t,e)}createPermanent(t,e){C.a.createPermanent(this,t,e)}getMyData(t){return this.permanentData[t]}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(n.c))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();var j=i("OQDe"),x=i("FpjV"),A=i("uMT1"),M=i("TY4h"),N=i("Rxsk"),K=i("QHo3");let D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],eothers:["e-others","eothers"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},decls:0,vars:0,template:function(t,e){},styles:[""],data:{animation:[l.a]}}),t})();function S(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function W(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",5),2&t){const t=o.ac();o.gc("error",t.error)}}function G(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",6),o.Wb("finished",function(){return o.rc(t),o.ac().removeNotification()}),o.Ob()}if(2&t){const t=o.ac();o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function V(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",8),o.Pb(1,"app-gi-entry-create",9),o.Wb("processEntry",function(e){return o.rc(t),o.ac(2).changeEntry(e)}),o.Lb(2,"app-acmtt-form-input",10),o.Ob(),o.Ob()}if(2&t){const t=o.ac(2);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function Q(t,e){if(1&t&&(o.Nb(0),o.vc(1,V,3,13,"div",7),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",!t.isLoading)}}let q=(()=>{class t{constructor(t,e,i,s,n,r,a,o){this.route=t,this.router=e,this.rts=i,this.iofs=s,this.gifs=n,this.giecs=r,this.ems=a,this.ns=o,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.$link=t.create.$link,this.controlFilters=t.create.controlFilters,this.noEdit=t.create.noEdit,this.placeholder=t.create.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.isLoading=!0,this.rts.addEntry().subscribe(t=>{if(null==t)this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.isLoading=!1;let e=t.$data;this.eothers=e,this.entryForm=this.gifs.entryForm(),this.iofs.createPermanent(e,this.entryForm),this.iofs.removeControls(this.controlFilters,this.entryForm),this.entryForm.addControl("title",new n.d("",this.iofs.otherCtrls.title)),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.rts.addEntry$(t).subscribe(t=>{null==t?(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`),this.giecs.isEntryChanged.next(!1)):null!=t&&1==t.created&&(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is added.`),this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.e),o.Kb(z),o.Kb(F),o.Kb(j.a),o.Kb(x.a),o.Kb(E.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entry-create"]],features:[o.yb([E.a,O.a])],decls:6,vars:6,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"notified","message","finished"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,S,2,1,"h2",1),o.vc(2,W,1,1,"app-resource-unavailable",2),o.vc(3,G,1,2,"app-notification-screen",3),o.vc(4,Q,2,1,"ng-container",1),o.Ob(),o.Lb(5,"app-loading-menu",4)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.notificationAvailable),o.zb(1),o.gc("ngIf",e.entryForm),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[s.l,A.a,M.a,N.a,n.l,n.h,K.a,D],styles:[""],data:{animation:[l.a]}}),t})();var _=i("iPJu"),B=i("BeQt"),H=i("9Ku7"),U=i("9yhg"),J=i("xlhj"),Z=i("scZC");function R(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function X(t,e){if(1&t&&o.Lb(0,"app-view-description",11),2&t){const t=o.ac();o.gc("view-type",t.view)("system-type",t.systemType)}}function Y(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",12),o.Wb("finished",function(){return o.rc(t),o.ac().removeNotification()}),o.Ob()}if(2&t){const t=o.ac();o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function tt(t,e){1&t&&o.Lb(0,"app-list-entry-options")}function et(t,e){if(1&t&&o.Lb(0,"app-search",13),2&t){const t=o.ac();o.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function it(t,e){1&t&&(o.Pb(0,"td",19),o.xc(1," N/A "),o.Ob())}function st(t,e){if(1&t&&(o.Pb(0,"td",25),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.title," ")}}function nt(t,e){if(1&t&&(o.Pb(0,"td",19),o.xc(1),o.bc(2,"date"),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",o.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function rt(t,e){if(1&t&&(o.Pb(0,"td",19),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.num," ")}}function at(t,e){if(1&t&&(o.Pb(0,"td",19),o.xc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.yc(" ",null==t?null:t.status," ")}}function ot(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"input",30,31),o.Wb("click",function(){o.rc(t);const e=o.qc(2),i=o.ac(3),s=i.$implicit,n=i.index;return o.ac(3).addEntryToDeleteList(null==s?null:s.num,e.checked,n)}),o.Ob(),o.Lb(3,"span",32),o.Mb()}if(2&t){const t=e.$implicit,i=o.ac(3).$implicit;o.zb(1),o.gc("checked",t==(null==i?null:i.num))}}function ct(t,e){if(1&t&&(o.Nb(0),o.vc(1,ot,4,1,"ng-container",29),o.Mb()),2&t){const t=o.ac(5);o.zb(1),o.gc("ngForOf",t.esdl)}}function lt(t,e){if(1&t){const t=o.Qb();o.Pb(0,"input",33,31),o.Wb("click",function(){o.rc(t);const e=o.qc(1),i=o.ac(2),s=i.$implicit,n=i.index;return o.ac(3).addEntryToDeleteList(null==s?null:s.num,e.checked,n)}),o.Ob(),o.Lb(2,"span",32)}}function ht(t,e){if(1&t&&(o.Pb(0,"label",26),o.vc(1,ct,2,1,"ng-container",27),o.vc(2,lt,3,0,"ng-template",null,28,o.wc),o.Ob()),2&t){const t=o.qc(3),e=o.ac(4);o.zb(1),o.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const dt=function(t){return["../","entry",t,"detail"]},pt=function(t){return["../","entry",t,"update"]},yt=function(t){return["../","entry",t,"delete"]};function bt(t,e){if(1&t&&(o.Pb(0,"tr"),o.Pb(1,"td",19),o.xc(2),o.Ob(),o.vc(3,it,2,0,"ng-template",null,20,o.wc),o.vc(5,st,2,1,"td",21),o.vc(6,nt,3,4,"td",22),o.vc(7,rt,2,1,"td",22),o.vc(8,at,2,1,"td",22),o.Pb(9,"td",16),o.Pb(10,"a",23),o.xc(11,"View"),o.Ob(),o.Pb(12,"a",23),o.xc(13,"Update"),o.Ob(),o.Pb(14,"a",23),o.xc(15,"Delete"),o.Ob(),o.vc(16,ht,4,2,"label",24),o.Ob(),o.Ob()),2&t){const t=e.$implicit,i=e.index,s=o.qc(4);o.zb(2),o.yc(" ",i+1,". "),o.zb(3),o.gc("ngIf",null==t?null:t.title)("ngIfElse",s),o.zb(1),o.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",s),o.zb(1),o.gc("ngIf",null==t?null:t.num)("ngIfElse",s),o.zb(1),o.gc("ngIf",null==t?null:t.status)("ngIfElse",s),o.zb(2),o.gc("routerLink",o.lc(13,dt,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(15,pt,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(17,yt,null==t?null:t.slug)),o.zb(2),o.gc("ngIf",!0)}}function gt(t,e){if(1&t&&(o.Pb(0,"table"),o.Pb(1,"caption",15),o.xc(2," Entries "),o.Ob(),o.Pb(3,"colgroup"),o.Lb(4,"col",16),o.Lb(5,"col",16),o.Lb(6,"col",16),o.Lb(7,"col",16),o.Lb(8,"col",16),o.Lb(9,"col",16),o.Lb(10,"col",16),o.Lb(11,"col",16),o.Ob(),o.Pb(12,"thead"),o.Pb(13,"tr"),o.Pb(14,"th",17),o.xc(15," Index "),o.Ob(),o.Pb(16,"th",17),o.xc(17," Title "),o.Ob(),o.Pb(18,"th",17),o.xc(19," Updated On "),o.Ob(),o.Pb(20,"th",17),o.xc(21," Other Number "),o.Ob(),o.Pb(22,"th",17),o.xc(23," Status "),o.Ob(),o.Pb(24,"th",15),o.xc(25," Changes "),o.Ob(),o.Ob(),o.Ob(),o.Pb(26,"tbody"),o.vc(27,bt,17,19,"tr",18),o.Ob(),o.Pb(28,"tfoot"),o.Pb(29,"tr"),o.Lb(30,"td"),o.Ob(),o.Pb(31,"tr"),o.Lb(32,"td"),o.Ob(),o.Lb(33,"tr"),o.Ob(),o.Ob()),2&t){const t=o.ac(2);o.zb(26),o.gc("@listAnimation",t.entries.length),o.zb(1),o.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum)}}function ut(t,e){if(1&t&&(o.Pb(0,"div",14),o.vc(1,gt,34,3,"table",1),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",!t.isLoading)}}function ft(t,e){if(1&t&&o.Lb(0,"app-pagination",34),2&t){const t=o.ac();o.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)("is-loading",!t.isLoading)}}function mt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",35),2&t){const t=o.ac();o.gc("error",t.error)}}let vt=(()=>{class t{constructor(t,e,i,s,n,r,a,o){this.route=t,this.location=e,this.rts=i,this.gss=s,this.gas=n,this.ems=r,this.ns=a,this.aus=o,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.isLoading=!1,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.isLoading=!0,this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.isLoading=!0,this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.rts.getAllEntry(t).subscribe(t=>{null==t?(this.isLoading=!1,this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.isLoading=!1,this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,i){this.gas.addEntryToDeleteList(t,e,i,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.rts)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(s.h),o.Kb(z),o.Kb(_.a),o.Kb(B.a),o.Kb(E.a),o.Kb(O.a),o.Kb(H.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entries"]],features:[o.yb([O.a,E.a,_.a])],decls:13,vars:12,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option-delete","entry-option-small","center",3,"click"],["class","entries",4,"ngIf"],[3,"entries-length","entry-ref","page-number","is-loading",4,"ngIf"],["id","error",3,"error",4,"ngIf"],[3,"is-loading"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"bold","center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number","is-loading"],["id","error",3,"error"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,R,2,1,"h2",1),o.vc(2,X,1,2,"app-view-description",2),o.vc(3,Y,1,2,"app-notification-screen",3),o.vc(4,tt,1,0,"app-list-entry-options",1),o.Pb(5,"div",4),o.vc(6,et,1,3,"app-search",5),o.Pb(7,"a",6),o.Wb("click",function(){return e.deleteManyEntry()}),o.xc(8," Delete Many "),o.Ob(),o.Ob(),o.vc(9,ut,2,2,"div",7),o.vc(10,ft,1,4,"app-pagination",8),o.vc(11,mt,1,1,"app-resource-unavailable",9),o.Ob(),o.Lb(12,"app-loading-menu",10)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.view),o.zb(1),o.gc("ngIf",e.notificationAvailable),o.zb(1),o.gc("ngIf",e.$entriesLength>0),o.zb(2),o.gc("ngIf",e.systemType),o.zb(1),o.Cb("hide",e.esdl.length<2),o.zb(2),o.gc("ngIf",e.$entriesLength>0),o.zb(1),o.gc("ngIf",e.pageNumber),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[s.l,A.a,h.a,N.a,U.a,J.a,s.k,r.f,Z.a,M.a],pipes:[s.d],styles:[".entries[_ngcontent-%COMP%]{width:98%;overflow:auto}table[_ngcontent-%COMP%]{width:1270px;table-layout:fixed}col[_ngcontent-%COMP%]:first-of-type{width:5%}col[_ngcontent-%COMP%]:nth-of-type(2){width:27%}col[_ngcontent-%COMP%]:nth-of-type(3), col[_ngcontent-%COMP%]:nth-of-type(4){width:16%}col[_ngcontent-%COMP%]:nth-of-type(5){width:10%}col[_ngcontent-%COMP%]:nth-of-type(6){width:20%}"],data:{animation:[l.c,l.a]}}),t})();var Ot=i("XA6Z"),Et=i("2eHf");function $t(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function Tt(t,e){if(1&t&&o.Lb(0,"app-view-description",5),2&t){const t=o.ac(2);o.gc("view-type",t.view)("system-type",t.systemType)}}function wt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",6),2&t){const t=o.ac(2);o.gc("error",t.error)}}function It(t,e){if(1&t&&(o.Nb(0),o.Pb(1,"tr"),o.Pb(2,"th",7),o.xc(3," Title : "),o.Ob(),o.Pb(4,"td"),o.xc(5),o.Ob(),o.Ob(),o.Mb()),2&t){const t=o.ac(2);o.zb(5),o.yc(" ",null==t.entry?null:t.entry.title," ")}}function Lt(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,$t,2,1,"h2",0),o.vc(2,Tt,1,2,"app-view-description",2),o.vc(3,wt,1,1,"app-resource-unavailable",3),o.Pb(4,"app-gi-entry-detail",4),o.vc(5,It,6,1,"ng-container",0),o.Ob(),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.view),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("entry",t.entry),o.zb(1),o.gc("ngIf",null==t.entry?null:t.entry.title)}}let kt=(()=>{class t{constructor(t,e,i){this.route=t,this.ems=e,this.rts=i,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.detail.systemType,this.title=t.detail.title,this.view=t.detail.view,this.viewWord=t.detail.viewWord,this.link=t.detail.link,this.$link=t.detail.$link,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Ot.a)(t=>{let e=t.get("entry");return this.isLoading=!0,this.rts.getEntry(e)})).subscribe(t=>{null==t?(this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&(this.isLoading=!1,this.entry=t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(E.a),o.Kb(z))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entry-detail"]],features:[o.yb([E.a])],decls:2,vars:2,consts:[[4,"ngIf"],[3,"is-loading"],[3,"view-type","system-type",4,"ngIf"],[3,"error",4,"ngIf"],[3,"entry"],[3,"view-type","system-type"],[3,"error"],[1,"bold","left"]],template:function(t,e){1&t&&(o.vc(0,Lt,6,6,"div",0),o.Lb(1,"app-loading-menu",1)),2&t&&(o.gc("ngIf",!0),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[s.l,A.a,Et.a,h.a,M.a],styles:[""],data:{animation:[l.a]}}),t})();var Pt=i("8eo2");function zt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.yc(" ",t.title," ")}}function Ct(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",5),2&t){const t=o.ac();o.gc("error",t.error)}}function Ft(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",6),o.Wb("finished",function(){return o.rc(t),o.ac().removeNotification()}),o.Ob()}if(2&t){const t=o.ac();o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function jt(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",8),o.Pb(1,"app-gi-entry-update",9),o.Wb("processEntry",function(e){return o.rc(t),o.ac(2).changeEntry(e)}),o.Lb(2,"app-acmtt-form-input",10),o.Ob(),o.Ob()}if(2&t){const t=o.ac(2);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function xt(t,e){if(1&t&&(o.Nb(0),o.vc(1,jt,3,14,"div",7),o.Mb()),2&t){const t=o.ac();o.zb(1),o.gc("ngIf",!t.isLoading)}}let At=(()=>{class t{constructor(t,e,i,s,n,r,a,o){this.route=t,this.router=e,this.rts=i,this.iofs=s,this.gifs=n,this.giecs=r,this.ems=a,this.ns=o,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.update.systemType,this.title=t.update.title,this.view=t.update.view,this.link=t.update.link,this.$link=t.update.$link,this.controlFilters=t.update.controlFilters,this.noEdit=t.update.noEdit,this.placeholder=t.update.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Ot.a)(t=>{let e=t.get("entry");return this.eslug=e,this.isLoading=!0,this.rts.updateEntry(e)})).subscribe(t=>{if(null==t)this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.isLoading=!1,this.entry=t.$data.Entry;let e=t.$data;this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("title",new n.d("",this.iofs.otherCtrls.title)),this.entryForm.patchValue(this.entry),this.eothers=e,this.iofs.removeControls(this.controlFilters,this.entryForm),this.iofs.createPermanent(e,this.entryForm),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.rts.updateEntry$(this.eslug,t).subscribe(t=>{null==t?(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`),this.giecs.isEntryChanged.next(!1)):null!=t&&1==t.updated&&(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is updated.`),this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.e),o.Kb(z),o.Kb(F),o.Kb(j.a),o.Kb(x.a),o.Kb(E.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entry-update"]],features:[o.yb([E.a,O.a])],decls:6,vars:6,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"notified","message","finished"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.vc(1,zt,2,1,"h2",1),o.vc(2,Ct,1,1,"app-resource-unavailable",2),o.vc(3,Ft,1,2,"app-notification-screen",3),o.vc(4,xt,2,1,"ng-container",1),o.Ob(),o.Lb(5,"app-loading-menu",4)),2&t&&(o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.notificationAvailable),o.zb(1),o.gc("ngIf",e.entryForm),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[s.l,A.a,M.a,N.a,n.l,n.h,Pt.a,D],styles:[""],data:{animation:[l.a]}}),t})();var Mt=i("Iwuw");function Nt(t,e){if(1&t&&(o.Pb(0,"h2"),o.xc(1),o.Ob()),2&t){const t=o.ac(2);o.zb(1),o.yc(" ",t.title," ")}}function Kt(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",4),2&t){const t=o.ac(2);o.gc("error",t.error)}}function Dt(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",5),o.Wb("finished",function(){return o.rc(t),o.ac(2).removeNotification()}),o.Ob()}if(2&t){const t=o.ac(2);o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function St(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",7),o.Pb(1,"app-gi-entry-delete",8),o.Wb("processEntry",function(e){return o.rc(t),o.ac(3).changeEntry(e)}),o.Lb(2,"app-acmtt-form-input",9),o.Ob(),o.Ob()}if(2&t){const t=o.ac(3);o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)}}function Wt(t,e){if(1&t&&(o.Nb(0),o.vc(1,St,3,13,"div",6),o.Mb()),2&t){const t=o.ac(2);o.zb(1),o.gc("ngIf",!t.isLoading)}}function Gt(t,e){if(1&t&&(o.Pb(0,"div"),o.vc(1,Nt,2,1,"h2",0),o.vc(2,Kt,1,1,"app-resource-unavailable",2),o.vc(3,Dt,1,2,"app-notification-screen",3),o.vc(4,Wt,2,1,"ng-container",0),o.Ob()),2&t){const t=o.ac();o.gc("@fadeAnimation",void 0),o.zb(1),o.gc("ngIf",t.title),o.zb(1),o.gc("ngIf",t.isError),o.zb(1),o.gc("ngIf",t.notificationAvailable),o.zb(1),o.gc("ngIf",t.entryForm)}}let Vt=(()=>{class t{constructor(t,e,i,s,n,r,a,o){this.route=t,this.router=e,this.rts=i,this.iofs=s,this.gifs=n,this.giecs=r,this.ems=a,this.ns=o,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.delete.systemType,this.title=t.delete.title,this.view=t.delete.view,this.link=t.delete.link,this.$link=t.delete.$link,this.controlFilters=t.delete.controlFilters,this.noEdit=t.delete.noEdit,this.placeholder=t.delete.placeholder,this.rts.$systemType=this.systemType,this.rts.$sa=this.$link,this.route.paramMap.pipe(Object(Ot.a)(t=>{let e=t.get("entry");return this.eslug=e,this.isLoading=!0,this.rts.deleteEntry(e)})).subscribe(t=>{null==t?(this.isLoading=!1,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&1==t.permitted&&(this.isLoading=!1,this.entry=t.$data,this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("title",new n.d("",this.iofs.otherCtrls.title)),this.entryForm.patchValue(this.entry),this.iofs.removeControls(this.controlFilters,this.entryForm))})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.rts.deleteEntry$(this.eslug).subscribe(t=>{null==t?(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`),this.giecs.isEntryChanged.next(!1)):null!=t&&1==t.deleted&&(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is deleted.`),this.isLoading=!0,this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(r.e),o.Kb(z),o.Kb(F),o.Kb(j.a),o.Kb(x.a),o.Kb(E.a),o.Kb(O.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entry-delete"]],features:[o.yb([E.a,O.a])],decls:2,vars:2,consts:[[4,"ngIf"],[3,"is-loading"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"error"],[3,"notified","message","finished"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","e-others","placeholder","no-edit"]],template:function(t,e){1&t&&(o.vc(0,Gt,5,5,"div",0),o.Lb(1,"app-loading-menu",1)),2&t&&(o.gc("ngIf",!0),o.zb(1),o.gc("is-loading",e.isLoading))},directives:[s.l,A.a,M.a,N.a,n.l,n.h,Mt.a,D],styles:[""],data:{animation:[l.a]}}),t})();var Qt=i("ku54");function qt(t,e){if(1&t&&o.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=o.ac();o.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let _t=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-acmtt-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&o.vc(0,qt,1,6,"app-general-all-entry-delete-all",0),2&t&&o.gc("ngIf",e.systemType)},directives:[s.l,Qt.a],styles:[""]}),t})(),Bt={systemType:"Account Change Message Template Type",title:"Account Change Message Template Type",view:"gen-internal",viewWord:"Account Change Message Template Type",link:"account-change-message-template-type",$link:"account-change-message-template-type",systemGuideline:"gen-internal"};const Ht={title:"Status",description:"A template related to user account status"},Ut={dashboard:Object.assign({},Bt),create:Object.assign(Object.assign({},Bt),{title:"Add a "+Bt.systemType,controlFilters:["status","name"],noEdit:!1,placeholder:Ht}),detail:Object.assign(Object.assign({},Bt),{title:Bt.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},Bt),{title:Bt.systemType+" Entry Update",controlFilters:["name"],noEdit:!1,placeholder:Ht}),delete:Object.assign(Object.assign({},Bt),{title:Bt.systemType+" Entry Delete",controlFilters:["description","status","name"],noEdit:!0,placeholder:Ht}),deleteAll:Object.assign(Object.assign({},Bt),{title:Bt.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},Bt),{title:Bt.systemType+" Entries",searchFilters:{title:"Title",status:"Status"}})},Jt=[{path:"",component:c,children:[{path:"",component:v,data:{dashboard:Ut.dashboard}},{path:"entry/create",component:q,data:{create:Ut.create}},{path:"entries",component:vt,data:{entries:Ut.entries}},{path:"entry/:entry/detail",component:kt,data:{detail:Ut.detail}},{path:"entry/:entry/update",component:At,data:{update:Ut.update}},{path:"entry/:entry/delete",component:Vt,data:{delete:Ut.delete}},{path:"entry/delete/all",component:_t,canActivate:[a.a],data:{deleteAll:Ut.deleteAll}}]}];let Zt=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(Jt)],r.g]}),t})();var Rt=i("hxwH"),Xt=i("kPid"),Yt=i("T+6q"),te=i("pBQQ"),ee=i("O/oE");let ie=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[F,z],imports:[[s.b,Zt,n.n,Rt.a,Xt.a,Yt.a,te.a,ee.a]]}),t})()}}]);