(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{AMmf:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var i=n("jV/k"),r=n("vfyW"),s=n("oECA"),a=n("O6Zd"),o=n("VcWf"),c=n("Ub9n"),l=n("FBrc"),b=n("EUGn");let h=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object(r.a)(t=>console.log(t)),Object(s.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object(r.a)(t=>console.log(t)),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(r.a)(t=>console.log(t)),Object(a.a)(t=>({permitted:!0,$data:t})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object(r.a)(t=>console.log(t)),Object(a.a)(t=>({created:!0,$data:t})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(a.a)(t=>({permitted:!0,$data:t})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(a.a)(t=>({updated:!0,$data:t})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(a.a)(t=>({permitted:!0,$data:t})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(a.a)(t=>({deleted:!0})),Object(s.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(a.a)(t=>({manyDeleted:!0})),Object(s.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(s.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllInternalOne(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(a.a)(t=>({allDeleted:!0})),Object(s.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(i.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(l.b),c.Tb(o.b),c.Tb(b.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})()},CFut:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var i=n("8VHZ"),r=n("XA6Z"),s=n("EUGn"),a=n("Ub9n"),o=n("Fk62"),c=n("AMmf"),l=n("Ujde"),b=n("ZVmh"),h=n("J1zS"),y=n("Yvf7"),u=n("TY4h"),p=n("o+TJ"),d=n("wAtm");function f(t,e){if(1&t&&(a.Pb(0,"h2"),a.yc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.zc(" ",t.title," ")}}function g(t,e){if(1&t&&a.Lb(0,"app-resource-unavailable",3),2&t){const t=a.ac();a.gc("error",t.error)}}function m(t,e){if(1&t){const t=a.Qb();a.Nb(0),a.Pb(1,"div",4),a.Pb(2,"app-general-internal-entry-update",5),a.Wb("processEntry",function(e){return a.rc(t),a.ac().changeEntry(e)}),a.Lb(3,"app-internal-one-form-input",6),a.Ob(),a.Ob(),a.Mb()}if(2&t){const t=a.ac();a.zb(1),a.gc("formGroup",t.entryForm),a.zb(1),a.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),a.zb(1),a.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let v=(()=>{class t{constructor(t,e,n,i,r,s,a){this.route=t,this.router=e,this.ios=n,this.iofs=i,this.gifs=r,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.update.systemType,this.title=t.update.title,this.view=t.update.view,this.link=t.update.link,this.$link=t.update.$link,this.controlFilters=t.update.controlFilters,this.noEdit=t.update.noEdit,this.placeholder=t.update.placeholder,this.ios.$systemType=this.systemType,this.ios.$sa=this.$link,this.route.paramMap.pipe(Object(r.a)(t=>{let e=t.get("entry");return this.eslug=e,this.ios.updateEntry(e)})).subscribe(t=>{if(null==t)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.entry=t.$data.Entry;let e=t.$data;this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.patchValue(this.entry),this.eothers=e,this.iofs.removeControls(this.controlFilters,this.entryForm),this.iofs.createPermanent(e,this.entryForm),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.ios.updateEntry$(this.eslug,t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.updated&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(o.a),a.Kb(o.d),a.Kb(c.a),a.Kb(l.a),a.Kb(b.a),a.Kb(h.a),a.Kb(s.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-one-entry-update"]],features:[a.yb([s.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.wc(1,f,2,1,"h2",1),a.wc(2,g,1,1,"app-resource-unavailable",2),a.wc(3,m,4,13,"ng-container",1),a.Ob()),2&t&&(a.zb(1),a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.isError),a.zb(1),a.gc("ngIf",e.entryForm))},directives:[y.l,u.a,i.j,i.g,p.a,d.a],styles:[""]}),t})()},CceY:function(t,e,n){"use strict";n.d(e,"a",function(){return D});var i=n("iPJu"),r=n("EUGn"),s=n("9nlD"),a=n("J1Ni"),o=n("Ub9n"),c=n("Fk62"),l=n("Yvf7"),b=n("AMmf"),h=n("yjbJ"),y=n("9Ku7"),u=n("9yhg"),p=n("+ef2"),d=n("Rxsk"),f=n("xlhj"),g=n("RBZI"),m=n("TY4h");function v(t,e){if(1&t&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.zc(" ",t.title," ")}}function E(t,e){if(1&t&&o.Lb(0,"app-view-description",8),2&t){const t=o.ac();o.gc("view-type",t.view)("system-type",t.systemType)}}function O(t,e){if(1&t){const t=o.Qb();o.Pb(0,"app-notification-screen",9),o.Wb("finished",function(){return o.rc(t),o.ac().removeNotification()}),o.Ob()}if(2&t){const t=o.ac();o.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function w(t,e){if(1&t&&o.Lb(0,"app-search",10),2&t){const t=o.ac();o.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function $(t,e){1&t&&(o.Pb(0,"td",22),o.yc(1," Nil "),o.Ob())}function T(t,e){if(1&t&&(o.Pb(0,"td",28),o.yc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.zc(" ",null==t?null:t.name," ")}}function k(t,e){if(1&t&&(o.Pb(0,"td",22),o.yc(1),o.bc(2,"date"),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.zc(" ",o.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function z(t,e){if(1&t&&(o.Pb(0,"td",22),o.yc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.zc(" ",null==t?null:t.abbreviation," ")}}function I(t,e){if(1&t&&(o.Pb(0,"td",22),o.yc(1),o.Ob()),2&t){const t=o.ac().$implicit;o.zb(1),o.zc(" ",null==t?null:t.status," ")}}function P(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"input",33,34),o.Wb("click",function(){o.rc(t);const e=o.qc(2),n=o.ac(3),i=n.$implicit,r=n.index;return o.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,r)}),o.Ob(),o.Lb(3,"span",35),o.Mb()}if(2&t){const t=e.$implicit,n=o.ac(3).$implicit;o.zb(1),o.gc("checked",t==(null==n?null:n.num))}}function F(t,e){if(1&t&&(o.Nb(0),o.wc(1,P,4,1,"ng-container",32),o.Mb()),2&t){const t=o.ac(4);o.zb(1),o.gc("ngForOf",t.esdl)}}function C(t,e){if(1&t){const t=o.Qb();o.Pb(0,"input",36,34),o.Wb("click",function(){o.rc(t);const e=o.qc(1),n=o.ac(2),i=n.$implicit,r=n.index;return o.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,r)}),o.Ob(),o.Lb(2,"span",35)}}function L(t,e){if(1&t&&(o.Pb(0,"label",29),o.wc(1,F,2,1,"ng-container",30),o.wc(2,C,3,0,"ng-template",null,31,o.xc),o.Ob()),2&t){const t=o.qc(3),e=o.ac(3);o.zb(1),o.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const j=function(t){return["../","entry",t,"detail"]},A=function(t){return["../","entry",t,"update"]},K=function(t){return["../","entry",t,"delete"]};function M(t,e){if(1&t&&(o.Pb(0,"tr"),o.Pb(1,"td",22),o.yc(2),o.Ob(),o.wc(3,$,2,0,"ng-template",null,23,o.xc),o.wc(5,T,2,1,"td",24),o.wc(6,k,3,4,"td",25),o.wc(7,z,2,1,"td",25),o.wc(8,I,2,1,"td",25),o.Pb(9,"td",13),o.Pb(10,"a",26),o.yc(11,"View"),o.Ob(),o.Pb(12,"a",26),o.yc(13,"Update"),o.Ob(),o.Pb(14,"a",26),o.yc(15,"Delete"),o.Ob(),o.wc(16,L,4,2,"label",27),o.Ob(),o.Ob()),2&t){const t=e.$implicit,n=e.index,i=o.qc(4);o.zb(2),o.zc(" ",n+1,". "),o.zb(3),o.gc("ngIf",null==t?null:t.name)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.abbreviation)("ngIfElse",i),o.zb(1),o.gc("ngIf",null==t?null:t.status)("ngIfElse",i),o.zb(2),o.gc("routerLink",o.lc(13,j,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(15,A,null==t?null:t.slug)),o.zb(2),o.gc("routerLink",o.lc(17,K,null==t?null:t.slug)),o.zb(2),o.gc("ngIf",!0)}}function x(t,e){if(1&t&&o.Lb(0,"app-pagination",37),2&t){const t=o.ac(2);o.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)}}function N(t,e){if(1&t&&(o.Pb(0,"div"),o.Pb(1,"table",11),o.Pb(2,"caption",12),o.yc(3," Entries "),o.Ob(),o.Pb(4,"colgroup"),o.Lb(5,"col",13),o.Lb(6,"col",13),o.Lb(7,"col",13),o.Lb(8,"col",13),o.Lb(9,"col",13),o.Lb(10,"col",13),o.Lb(11,"col",13),o.Lb(12,"col",14),o.Ob(),o.Pb(13,"thead"),o.Pb(14,"tr"),o.Pb(15,"th",15),o.yc(16," Index "),o.Ob(),o.Pb(17,"th",16),o.yc(18," Name "),o.Ob(),o.Pb(19,"th",17),o.yc(20," Updated On "),o.Ob(),o.Pb(21,"th",18),o.yc(22," Abbreviation "),o.Ob(),o.Pb(23,"th",19),o.yc(24," Status "),o.Ob(),o.Pb(25,"th",12),o.yc(26," Changes "),o.Ob(),o.Ob(),o.Ob(),o.Pb(27,"tbody"),o.wc(28,M,17,19,"tr",20),o.Ob(),o.Pb(29,"tfoot"),o.Pb(30,"tr"),o.Lb(31,"td"),o.Ob(),o.Pb(32,"tr"),o.Lb(33,"td"),o.Ob(),o.Pb(34,"tr"),o.wc(35,x,1,3,"app-pagination",21),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t){const t=o.ac();o.zb(27),o.gc("@listAnimation",t.entries.length),o.zb(1),o.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum),o.zb(7),o.gc("ngIf",t.pageNumber)}}function U(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",38),2&t){const t=o.ac();o.gc("error",t.error)}}let D=(()=>{class t{constructor(t,e,n,i,r,s,a,o){this.route=t,this.location=e,this.ios=n,this.gss=i,this.gas=r,this.ems=s,this.ns=a,this.aus=o,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.ios.$systemType=this.systemType,this.ios.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.ios.getAllEntry(t).subscribe(t=>{null==t?(this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,n){this.gas.addEntryToDeleteList(t,e,n,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.ios)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(c.a),o.Kb(l.h),o.Kb(b.a),o.Kb(i.a),o.Kb(h.a),o.Kb(r.a),o.Kb(s.a),o.Kb(y.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-internal-one-entries"]],features:[o.yb([s.a,r.a,i.a])],decls:11,vars:8,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center","name-internal"],[1,"bold","center"],[1,"bold","center","short-code"],[1,"bold","center","status"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.wc(1,v,2,1,"h2",1),o.wc(2,E,1,2,"app-view-description",2),o.wc(3,O,1,2,"app-notification-screen",3),o.Lb(4,"app-list-entry-options"),o.Pb(5,"div",4),o.wc(6,w,1,3,"app-search",5),o.Pb(7,"a",6),o.Wb("click",function(){return e.deleteManyEntry()}),o.yc(8," Delete Many "),o.Ob(),o.Ob(),o.wc(9,N,36,4,"div",1),o.wc(10,U,1,1,"app-resource-unavailable",7),o.Ob()),2&t&&(o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.view),o.zb(1),o.gc("ngIf",e.notificationAvailable),o.zb(3),o.gc("ngIf",e.systemType),o.zb(1),o.Cb("hide",e.esdl.length<2),o.zb(2),o.gc("ngIf",e.$entriesLength>0),o.zb(1),o.gc("ngIf",e.isError))},directives:[l.l,u.a,p.a,d.a,f.a,l.k,c.f,g.a,m.a],pipes:[l.d],styles:[""],data:{animation:[a.b]}}),t})()},IWK0:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("Ub9n"),r=n("Fk62");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-one-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&i.Lb(0,"router-outlet")},directives:[r.h],styles:[""]}),t})()},Ujde:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("8VHZ"),r=n("tTBu"),s=n("Ub9n");let a=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.permanentProps={status:[i.o.required,i.o.max(9e7)]},this.otherCtrls={abbreviation:[i.o.required,i.o.minLength(2),i.o.maxLength(8)]}}getPermanentProp(t){return this.permanentProps[t]}removeControls(t,e){null!=t&&t.length>0&&t.forEach(t=>e.get(t)?e.removeControl(t):null)}createPermanent(t,e){if(null!=t){for(let n in t){let i=n.toLowerCase();this.permanentData[i]=t[n],e.get(i)&&e.get(i).setValidators([...this.permanentProps[i],Object(r.a)(this.getMyData(i),n)]),e.get(i)&&e.get(i).updateValueAndValidity()}e.updateValueAndValidity()}}getMyData(t){return this.permanentData[t]}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(i.b))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac}),t})()},YCNZ:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n("XA6Z"),r=n("EUGn"),s=n("Ub9n"),a=n("Fk62"),o=n("AMmf"),c=n("Yvf7"),l=n("hLGb"),b=n("+ef2"),h=n("TY4h");function y(t,e){if(1&t&&(s.Pb(0,"h2"),s.yc(1),s.Ob()),2&t){const t=s.ac();s.zb(1),s.zc(" ",t.title," ")}}function u(t,e){if(1&t&&s.Lb(0,"app-view-description",4),2&t){const t=s.ac();s.gc("view-type",t.view)("system-type",t.systemType)}}function p(t,e){if(1&t&&s.Lb(0,"app-resource-unavailable",5),2&t){const t=s.ac();s.gc("error",t.error)}}function d(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"tr"),s.Pb(2,"th",6),s.yc(3," Abbreviation : "),s.Ob(),s.Pb(4,"td"),s.yc(5),s.Ob(),s.Ob(),s.Mb()),2&t){const t=s.ac();s.zb(5),s.zc(" ",null==t.entry?null:t.entry.abbreviation," ")}}const f=["*"];let g=(()=>{class t{constructor(t,e,n){this.route=t,this.ems=e,this.ios=n,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.detail.systemType,this.title=t.detail.title,this.view=t.detail.view,this.viewWord=t.detail.viewWord,this.link=t.detail.link,this.$link=t.detail.$link,this.ios.$systemType=this.systemType,this.ios.$sa=this.$link,this.route.paramMap.pipe(Object(i.a)(t=>{let e=t.get("entry");return this.ios.getEntry(e)})).subscribe(t=>{null==t?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&(this.entry=t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(a.a),s.Kb(r.a),s.Kb(o.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-internal-one-entry-detail"]],features:[s.yb([r.a])],ngContentSelectors:f,decls:6,vars:5,consts:[[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"error",4,"ngIf"],[3,"entry"],[3,"view-type","system-type"],[3,"error"],[1,"bold","left"]],template:function(t,e){1&t&&(s.fc(),s.wc(0,y,2,1,"h2",0),s.wc(1,u,1,2,"app-view-description",1),s.wc(2,p,1,1,"app-resource-unavailable",2),s.Pb(3,"app-general-internal-entry-detail",3),s.wc(4,d,6,1,"ng-container",0),s.ec(5),s.Ob()),2&t&&(s.gc("ngIf",e.title),s.zb(1),s.gc("ngIf",e.view),s.zb(1),s.gc("ngIf",e.isError),s.zb(1),s.gc("entry",e.entry),s.zb(1),s.gc("ngIf",null==e.entry?null:e.entry.abbreviation))},directives:[c.l,l.a,b.a,h.a],styles:[""]}),t})()},YQjp:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("Yvf7"),r=n("8VHZ"),s=n("Fk62"),a=n("Ub9n");const o=[];let c=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(o)],s.g]}),t})();var l=n("hxwH"),b=n("kPid"),h=n("gh/l"),y=n("pBQQ"),u=n("mHYI"),p=n("AMmf"),d=n("Ujde");let f=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[d.a,p.a],imports:[[i.b,c,r.l,l.a,b.a,h.a,y.a,u.a]]}),t})()},f4D1:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("Ub9n"),r=n("Fk62"),s=n("Yvf7"),a=n("oxaT");function o(t,e){if(1&t&&i.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=i.ac();i.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let c=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(r.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-one-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&i.wc(0,o,1,6,"app-general-all-entry-delete-all",0),2&t&&i.gc("ngIf",e.systemType)},directives:[s.l,a.a],styles:[""]}),t})()},nXPr:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var i=n("8VHZ"),r=n("XA6Z"),s=n("EUGn"),a=n("Ub9n"),o=n("Fk62"),c=n("AMmf"),l=n("Ujde"),b=n("ZVmh"),h=n("J1zS"),y=n("Yvf7"),u=n("TY4h"),p=n("FL99"),d=n("wAtm");function f(t,e){if(1&t&&(a.Pb(0,"h2"),a.yc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.zc(" ",t.title," ")}}function g(t,e){if(1&t&&a.Lb(0,"app-resource-unavailable",2),2&t){const t=a.ac();a.gc("error",t.error)}}function m(t,e){if(1&t){const t=a.Qb();a.Nb(0),a.Pb(1,"div",3),a.Pb(2,"app-general-internal-entry-delete",4),a.Wb("processEntry",function(e){return a.rc(t),a.ac().changeEntry(e)}),a.Lb(3,"app-internal-one-form-input",5),a.Ob(),a.Ob(),a.Mb()}if(2&t){const t=a.ac();a.zb(1),a.gc("formGroup",t.entryForm),a.zb(1),a.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),a.zb(1),a.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let v=(()=>{class t{constructor(t,e,n,i,r,s,a){this.route=t,this.router=e,this.ios=n,this.iofs=i,this.gifs=r,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.delete.systemType,this.title=t.delete.title,this.view=t.delete.view,this.link=t.delete.link,this.$link=t.delete.$link,this.controlFilters=t.delete.controlFilters,this.noEdit=t.delete.noEdit,this.placeholder=t.delete.placeholder,this.ios.$systemType=this.systemType,this.ios.$sa=this.$link,this.route.paramMap.pipe(Object(r.a)(t=>{let e=t.get("entry");return this.eslug=e,this.ios.deleteEntry(e)})).subscribe(t=>{null==t?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&1==t.permitted&&(this.entry=t.$data,this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.patchValue(this.entry),this.iofs.removeControls(this.controlFilters,this.entryForm))})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.ios.deleteEntry$(this.eslug).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.deleted&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(o.a),a.Kb(o.d),a.Kb(c.a),a.Kb(l.a),a.Kb(b.a),a.Kb(h.a),a.Kb(s.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-one-entry-delete"]],features:[a.yb([s.a])],decls:3,vars:3,consts:[[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(a.wc(0,f,2,1,"h2",0),a.wc(1,g,1,1,"app-resource-unavailable",1),a.wc(2,m,4,12,"ng-container",0)),2&t&&(a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.isError),a.zb(1),a.gc("ngIf",e.entryForm))},directives:[y.l,u.a,i.j,i.g,p.a,d.a],styles:[""]}),t})()},sIR1:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("Ub9n"),r=n("Fk62"),s=n("Yvf7"),a=n("+ef2");function o(t,e){if(1&t&&(i.Pb(0,"h2"),i.yc(1),i.Ob()),2&t){const t=i.ac();i.zb(1),i.zc(" ",t.title," ")}}function c(t,e){if(1&t&&i.Lb(0,"app-view-description",3),2&t){const t=i.ac();i.gc("system-type",t.systemType)("view-type",t.view)}}const l=function(){return["entry","create"]};function b(t,e){if(1&t&&(i.Pb(0,"li"),i.Pb(1,"a",5),i.yc(2),i.Ob(),i.Ob()),2&t){const t=i.ac(2);i.zb(1),i.gc("routerLink",i.kc(2,l)),i.zb(1),i.zc(" Add a ",t.systemType," ")}}const h=function(){return["entries"]},y=function(){return["entry","delete","all"]};function u(t,e){if(1&t&&(i.Pb(0,"div",4),i.Pb(1,"ul"),i.Pb(2,"li"),i.Pb(3,"a",5),i.yc(4),i.Ob(),i.Ob(),i.wc(5,b,3,3,"li",0),i.Pb(6,"li"),i.Pb(7,"a",5),i.yc(8),i.Ob(),i.Ob(),i.Pb(9,"li"),i.Pb(10,"a",6),i.yc(11),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t){const t=i.ac();i.zb(3),i.gc("routerLink",i.kc(6,h)),i.zb(1),i.zc(" Manage ",t.systemType," "),i.zb(1),i.gc("ngIf",t.canCreate),i.zb(2),i.gc("routerLink",i.kc(7,y)),i.zb(1),i.zc(" Delete All ",t.systemType," "),i.zb(3),i.zc(" ",t.systemType," Statistics ")}}let p=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(r.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-one-dashboard"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"],["href","#",1,"center"]],template:function(t,e){1&t&&(i.wc(0,o,2,1,"h2",0),i.wc(1,c,1,2,"app-view-description",1),i.wc(2,u,12,8,"div",2)),2&t&&(i.gc("ngIf",e.title),i.zb(1),i.gc("ngIf",e.view),i.zb(1),i.gc("ngIf",e.systemType))},directives:[s.l,a.a,r.f],styles:[""]}),t})()},up7i:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var i=n("8VHZ"),r=n("EUGn"),s=n("Ub9n"),a=n("Fk62"),o=n("AMmf"),c=n("Ujde"),l=n("ZVmh"),b=n("J1zS"),h=n("Yvf7"),y=n("TY4h"),u=n("FL99"),p=n("wAtm");function d(t,e){if(1&t&&(s.Pb(0,"h2"),s.yc(1),s.Ob()),2&t){const t=s.ac();s.zb(1),s.zc(" ",t.title," ")}}function f(t,e){if(1&t&&s.Lb(0,"app-resource-unavailable",3),2&t){const t=s.ac();s.gc("error",t.error)}}function g(t,e){if(1&t){const t=s.Qb();s.Nb(0),s.Pb(1,"div",4),s.Pb(2,"app-general-internal-entry-delete",5),s.Wb("processEntry",function(e){return s.rc(t),s.ac().changeEntry(e)}),s.Lb(3,"app-internal-one-form-input",6),s.Ob(),s.Ob(),s.Mb()}if(2&t){const t=s.ac();s.zb(1),s.gc("formGroup",t.entryForm),s.zb(1),s.gc("system-type",t.systemType)("view",t.view)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),s.zb(1),s.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let m=(()=>{class t{constructor(t,e,n,i,r,s,a){this.route=t,this.router=e,this.ios=n,this.iofs=i,this.gifs=r,this.giecs=s,this.ems=a,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.$link=t.create.$link,this.controlFilters=t.create.controlFilters,this.noEdit=t.create.noEdit,this.placeholder=t.create.placeholder,this.ios.$systemType=this.systemType,this.ios.$sa=this.$link,this.ios.addEntry().subscribe(t=>{if(null==t)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){let e=t.$data;this.eothers=e,this.entryForm=this.gifs.entryForm(),this.iofs.createPermanent(e,this.entryForm),this.iofs.removeControls(this.controlFilters,this.entryForm),this.entryForm.addControl("abbreviation",new i.c("",this.iofs.otherCtrls.abbreviation)),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.ios.addEntry$(t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.created&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(a.a),s.Kb(a.d),s.Kb(o.a),s.Kb(c.a),s.Kb(l.a),s.Kb(b.a),s.Kb(r.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-internal-one-entry-create"]],features:[s.yb([r.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.wc(1,d,2,1,"h2",1),s.wc(2,f,1,1,"app-resource-unavailable",2),s.wc(3,g,4,12,"ng-container",1),s.Ob()),2&t&&(s.zb(1),s.gc("ngIf",e.title),s.zb(1),s.gc("ngIf",e.isError),s.zb(1),s.gc("ngIf",e.entryForm))},directives:[h.l,y.a,i.j,i.g,u.a,p.a],styles:[""]}),t})()},wAtm:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("Ub9n"),r=n("8VHZ"),s=n("Yvf7"),a=n("J1Ni");function o(t,e){if(1&t&&(i.Pb(0,"li"),i.yc(1),i.Ob()),2&t){const t=i.ac(3);i.zb(1),i.zc(" Abbreviation of ",t.systemType," should be provided and cannot be empty ")}}function c(t,e){if(1&t&&(i.Pb(0,"li"),i.yc(1),i.Ob()),2&t){const t=i.ac(3);i.zb(1),i.zc(" Abbreviation of ",t.systemType," cannot be less than 2 characters in length ")}}function l(t,e){if(1&t&&(i.Pb(0,"li"),i.yc(1),i.Ob()),2&t){const t=i.ac(3);i.zb(1),i.zc(" Abbreviation of ",t.systemType," cannot be greater than 8 characters in length ")}}function b(t,e){if(1&t&&(i.Pb(0,"div",2),i.Pb(1,"ul"),i.wc(2,o,2,1,"li",0),i.wc(3,c,2,1,"li",0),i.wc(4,l,2,1,"li",0),i.Ob(),i.Ob()),2&t){const t=i.ac(2);i.gc("@fadeAnimation",void 0),i.zb(2),i.gc("ngIf",null==t.abbreviation.errors?null:t.abbreviation.errors.required),i.zb(1),i.gc("ngIf",(null==t.abbreviation.errors?null:t.abbreviation.errors.required)||(null==t.abbreviation.errors?null:t.abbreviation.errors.minlength)),i.zb(1),i.gc("ngIf",(null==t.abbreviation.errors?null:t.abbreviation.errors.required)||(null==t.abbreviation.errors?null:t.abbreviation.errors.maxLength))}}function h(t,e){if(1&t&&(i.Nb(0),i.wc(1,b,5,4,"div",1),i.Mb()),2&t){const t=i.ac();i.zb(1),i.gc("ngIf",t.abbreviation.invalid&&(t.abbreviation.touched||t.abbreviation.dirty))}}let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-one-entry-validator"]],inputs:{systemType:["system-type","systemType"],abbreviation:"abbreviation"},decls:1,vars:1,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&i.wc(0,h,2,1,"ng-container",0),2&t&&i.gc("ngIf",e.abbreviation)},directives:[s.l],styles:[""],data:{animation:[a.a]}}),t})();function u(t,e){if(1&t&&i.Lb(0,"app-internal-one-entry-validator",6),2&t){const t=i.ac(2);i.gc("system-type",t.systemType)("abbreviation",t.abbreviation)}}function p(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"div",2),i.Pb(2,"label",3),i.yc(3," Abbreviation * : "),i.Ob(),i.Lb(4,"input",4),i.wc(5,u,1,2,"app-internal-one-entry-validator",5),i.Ob(),i.Mb()),2&t){const t=i.ac();i.zb(4),i.gc("placeholder",null==t.placeholder?null:t.placeholder.abbreviation)("readOnly",t.noEdit),i.zb(1),i.gc("ngIf",t.abbreviation)}}let d=(()=>{class t{constructor(){}ngOnInit(){}get abbreviation(){return this.entryForm.get("abbreviation")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-one-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},decls:2,vars:2,consts:[[3,"formGroup"],[4,"ngIf"],[1,"form-group"],["for","abbreviation",1,"form-label","bold"],["type","text","id","abbreviation","required","required","name","abbreviation","formControlName","abbreviation",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","abbreviation",4,"ngIf"],[3,"system-type","abbreviation"]],template:function(t,e){1&t&&(i.Pb(0,"div",0),i.wc(1,p,6,3,"ng-container",1),i.Ob()),2&t&&(i.gc("formGroup",e.entryForm),i.zb(1),i.gc("ngIf",e.abbreviation))},directives:[r.j,r.g,s.l,r.a,r.m,r.i,r.e,y],styles:[""]}),t})()}}]);