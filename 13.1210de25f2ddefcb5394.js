(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+0I3":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("Ub9n"),s=i("Fk62");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["app-request-credential-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&n.Lb(0,"router-outlet")},directives:[s.h],styles:[""]}),t})()},"1Yu0":function(t,e,i){"use strict";i.d(e,"a",function(){return K});var n=i("iPJu"),s=i("EUGn"),r=i("9nlD"),a=i("J1Ni"),c=i("Ub9n"),o=i("Fk62"),l=i("Yvf7"),h=i("R+ww"),b=i("BeQt"),u=i("9Ku7"),p=i("uMT1"),d=i("+ef2"),g=i("Rxsk"),f=i("9yhg"),y=i("xlhj"),m=i("scZC"),v=i("TY4h");function O(t,e){if(1&t&&(c.Pb(0,"h2"),c.xc(1),c.Ob()),2&t){const t=c.ac();c.zb(1),c.yc(" ",t.title," ")}}function $(t,e){if(1&t&&c.Lb(0,"app-view-description",11),2&t){const t=c.ac();c.gc("view-type",t.view)("system-type",t.systemType)}}function E(t,e){if(1&t){const t=c.Qb();c.Pb(0,"app-notification-screen",12),c.Wb("finished",function(){return c.rc(t),c.ac().removeNotification()}),c.Ob()}if(2&t){const t=c.ac();c.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function w(t,e){1&t&&c.Lb(0,"app-list-entry-options")}function k(t,e){if(1&t&&c.Lb(0,"app-search",13),2&t){const t=c.ac();c.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function P(t,e){1&t&&(c.Pb(0,"td",19),c.xc(1," N/A "),c.Ob())}function I(t,e){if(1&t&&(c.Pb(0,"td",24),c.xc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.yc(" ",null==t?null:t.username," ")}}function T(t,e){if(1&t&&(c.Pb(0,"td",24),c.xc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.yc(" ",null==t?null:t.password," ")}}function L(t,e){if(1&t&&(c.Pb(0,"td",19),c.xc(1),c.bc(2,"date"),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.yc(" ",c.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function z(t,e){if(1&t&&(c.Pb(0,"td",19),c.xc(1),c.Ob()),2&t){const t=c.ac().$implicit;c.zb(1),c.yc(" ",null==t?null:t.status," ")}}function j(t,e){if(1&t){const t=c.Qb();c.Nb(0),c.Pb(1,"input",29,30),c.Wb("click",function(){c.rc(t);const e=c.qc(2),i=c.ac(3),n=i.$implicit,s=i.index;return c.ac(3).addEntryToDeleteList(null==n?null:n.num,e.checked,s)}),c.Ob(),c.Lb(3,"span",31),c.Mb()}if(2&t){const t=e.$implicit,i=c.ac(3).$implicit;c.zb(1),c.gc("checked",t==(null==i?null:i.num))}}function x(t,e){if(1&t&&(c.Nb(0),c.vc(1,j,4,1,"ng-container",28),c.Mb()),2&t){const t=c.ac(5);c.zb(1),c.gc("ngForOf",t.esdl)}}function A(t,e){if(1&t){const t=c.Qb();c.Pb(0,"input",32,30),c.Wb("click",function(){c.rc(t);const e=c.qc(1),i=c.ac(2),n=i.$implicit,s=i.index;return c.ac(3).addEntryToDeleteList(null==n?null:n.num,e.checked,s)}),c.Ob(),c.Lb(2,"span",31)}}function C(t,e){if(1&t&&(c.Pb(0,"label",25),c.vc(1,x,2,1,"ng-container",26),c.vc(2,A,3,0,"ng-template",null,27,c.wc),c.Ob()),2&t){const t=c.qc(3),e=c.ac(4);c.zb(1),c.gc("ngIf",e.esdl.length)("ngIfElse",t)}}function M(t,e){if(1&t&&(c.Pb(0,"tr"),c.Pb(1,"td",19),c.xc(2),c.Ob(),c.vc(3,P,2,0,"ng-template",null,20,c.wc),c.vc(5,I,2,1,"td",21),c.vc(6,T,2,1,"td",21),c.vc(7,L,3,4,"td",22),c.vc(8,z,2,1,"td",22),c.Pb(9,"td",16),c.vc(10,C,4,2,"label",23),c.Ob(),c.Ob()),2&t){const t=e.$implicit,i=e.index,n=c.qc(4);c.zb(2),c.yc(" ",i+1,". "),c.zb(3),c.gc("ngIf",null==t?null:t.username)("ngIfElse",n),c.zb(1),c.gc("ngIf",null==t?null:t.password)("ngIfElse",n),c.zb(1),c.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",n),c.zb(1),c.gc("ngIf",null==t?null:t.status)("ngIfElse",n),c.zb(2),c.gc("ngIf",!0)}}function F(t,e){if(1&t&&(c.Pb(0,"table"),c.Pb(1,"caption",15),c.xc(2," Entries "),c.Ob(),c.Pb(3,"colgroup"),c.Lb(4,"col",16),c.Lb(5,"col",16),c.Lb(6,"col",16),c.Lb(7,"col",16),c.Lb(8,"col",16),c.Lb(9,"col",16),c.Lb(10,"col",16),c.Lb(11,"col",16),c.Ob(),c.Pb(12,"thead"),c.Pb(13,"tr"),c.Pb(14,"th",17),c.xc(15," Index "),c.Ob(),c.Pb(16,"th",15),c.xc(17," Username "),c.Ob(),c.Pb(18,"th",15),c.xc(19," Password "),c.Ob(),c.Pb(20,"th",17),c.xc(21," Updated On "),c.Ob(),c.Pb(22,"th",17),c.xc(23," Status "),c.Ob(),c.Pb(24,"th",15),c.xc(25," Changes "),c.Ob(),c.Ob(),c.Ob(),c.Pb(26,"tbody"),c.vc(27,M,11,10,"tr",18),c.Ob(),c.Pb(28,"tfoot"),c.Pb(29,"tr"),c.Lb(30,"td"),c.Ob(),c.Pb(31,"tr"),c.Lb(32,"td"),c.Ob(),c.Lb(33,"tr"),c.Ob(),c.Ob()),2&t){const t=c.ac(2);c.zb(26),c.gc("@listAnimation",t.entries.length),c.zb(1),c.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum)}}function N(t,e){if(1&t&&(c.Pb(0,"div",14),c.vc(1,F,34,3,"table",1),c.Ob()),2&t){const t=c.ac();c.gc("@fadeAnimation",void 0),c.zb(1),c.gc("ngIf",!t.isLoading)}}function D(t,e){if(1&t&&c.Lb(0,"app-pagination",33),2&t){const t=c.ac();c.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)("is-loading",!t.isLoading)}}function S(t,e){if(1&t&&c.Lb(0,"app-resource-unavailable",34),2&t){const t=c.ac();c.gc("error",t.error)}}let K=(()=>{class t{constructor(t,e,i,n,s,r,a,c){this.route=t,this.location=e,this.rcs=i,this.gss=n,this.gas=s,this.ems=r,this.ns=a,this.aus=c,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.isLoading=!1,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.isLoading=!0,this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.rcs.$systemType=this.systemType,this.rcs.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.isLoading=!0,this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.rcs.getAllEntry(t).subscribe(t=>{null==t?(this.isLoading=!1,this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.isLoading=!1,this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,i){this.gas.addEntryToDeleteList(t,e,i,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.rcs)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(o.a),c.Kb(l.h),c.Kb(h.a),c.Kb(n.a),c.Kb(b.a),c.Kb(s.a),c.Kb(r.a),c.Kb(u.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-request-credential-entries"]],features:[c.yb([r.a,s.a,n.a])],decls:13,vars:12,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option-delete","entry-option-small","center",3,"click"],["class","entries",4,"ngIf"],[3,"entries-length","entry-ref","page-number","is-loading",4,"ngIf"],["id","error",3,"error",4,"ngIf"],[3,"is-loading"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"bold","center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number","is-loading"],["id","error",3,"error"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.vc(1,O,2,1,"h2",1),c.vc(2,$,1,2,"app-view-description",2),c.vc(3,E,1,2,"app-notification-screen",3),c.vc(4,w,1,0,"app-list-entry-options",1),c.Pb(5,"div",4),c.vc(6,k,1,3,"app-search",5),c.Pb(7,"a",6),c.Wb("click",function(){return e.deleteManyEntry()}),c.xc(8," Delete Many "),c.Ob(),c.Ob(),c.vc(9,N,2,2,"div",7),c.vc(10,D,1,4,"app-pagination",8),c.vc(11,S,1,1,"app-resource-unavailable",9),c.Ob(),c.Lb(12,"app-loading-menu",10)),2&t&&(c.gc("@fadeAnimation",void 0),c.zb(1),c.gc("ngIf",e.title),c.zb(1),c.gc("ngIf",e.view),c.zb(1),c.gc("ngIf",e.notificationAvailable),c.zb(1),c.gc("ngIf",e.$entriesLength>0),c.zb(2),c.gc("ngIf",e.systemType),c.zb(1),c.Cb("hide",e.esdl.length<2),c.zb(2),c.gc("ngIf",e.$entriesLength>0),c.zb(1),c.gc("ngIf",e.pageNumber),c.zb(1),c.gc("ngIf",e.isError),c.zb(1),c.gc("is-loading",e.isLoading))},directives:[l.l,p.a,d.a,g.a,f.a,y.a,l.k,m.a,v.a],pipes:[l.d],styles:[".entries[_ngcontent-%COMP%]{width:98%;overflow:auto}table[_ngcontent-%COMP%]{width:1270px;table-layout:fixed}col[_ngcontent-%COMP%]:first-of-type{width:5%}col[_ngcontent-%COMP%]:nth-of-type(2){width:27%}col[_ngcontent-%COMP%]:nth-of-type(3), col[_ngcontent-%COMP%]:nth-of-type(4){width:16%}col[_ngcontent-%COMP%]:nth-of-type(5){width:10%}col[_ngcontent-%COMP%]:nth-of-type(6){width:20%}"],data:{animation:[a.c,a.a]}}),t})()},"4Bz5":function(t,e,i){"use strict";i.d(e,"a",function(){return d});var n=i("J1Ni"),s=i("Ub9n"),r=i("Fk62"),a=i("Yvf7"),c=i("+ef2");function o(t,e){if(1&t&&(s.Pb(0,"h2"),s.xc(1),s.Ob()),2&t){const t=s.ac(2);s.zb(1),s.yc(" ",t.title," ")}}function l(t,e){if(1&t&&s.Lb(0,"app-view-description",3),2&t){const t=s.ac(2);s.gc("system-type",t.systemType)("view-type",t.view)}}const h=function(){return["entries"]},b=function(){return["entry","delete","all"]};function u(t,e){if(1&t&&(s.Pb(0,"div",4),s.Pb(1,"ul"),s.Pb(2,"li"),s.Pb(3,"a",5),s.xc(4),s.Ob(),s.Ob(),s.Pb(5,"li"),s.Pb(6,"a",5),s.xc(7),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t){const t=s.ac(2);s.zb(3),s.gc("routerLink",s.kc(4,h)),s.zb(1),s.yc(" Manage ",t.systemType," "),s.zb(2),s.gc("routerLink",s.kc(5,b)),s.zb(1),s.yc(" Delete All ",t.systemType," ")}}function p(t,e){if(1&t&&(s.Pb(0,"div"),s.vc(1,o,2,1,"h2",0),s.vc(2,l,1,2,"app-view-description",1),s.vc(3,u,8,6,"div",2),s.Ob()),2&t){const t=s.ac();s.gc("@fadeAnimation",void 0),s.zb(1),s.gc("ngIf",t.title),s.zb(1),s.gc("ngIf",t.view),s.zb(1),s.gc("ngIf",t.systemType)}}let d=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(r.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-request-credential-dashboard"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"]],template:function(t,e){1&t&&s.vc(0,p,4,4,"div",0),2&t&&s.gc("ngIf",!0)},directives:[a.l,c.a,r.f],styles:[""],data:{animation:[n.a]}}),t})()},L6ME:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("tTBu");class s{static createPermanent(t,e,i){if(null!=e){for(let s in e){let r=s.toLowerCase().split(" ").join(" ");t.permanentData[r]=e[s],i.get(r)&&i.get(r).setValidators([...t.permanentProps[r],Object(n.a)(t.getMyData(r),s)]),i.get(r)&&i.get(r).updateValueAndValidity()}i.updateValueAndValidity()}}static removeControls(t,e){null!=t&&t.length>0&&t.forEach(t=>e.get(t)?e.removeControl(t):null)}static removeAsyncValidators(t,e){null!=t&&t.length>0&&(t.forEach(t=>{e.get(t)&&(e.get(t).clearAsyncValidators(),e.get(t).updateValueAndValidity())}),e.updateValueAndValidity())}}},"R+ww":function(t,e,i){"use strict";i.d(e,"a",function(){return u});var n=i("jV/k"),s=i("vfyW"),r=i("XRyL"),a=i("oECA"),c=i("O6Zd"),o=i("VcWf"),l=i("Ub9n"),h=i("FBrc"),b=i("EUGn");let u=(()=>{class t{constructor(t,e,i){this.http=t,this.apiConfig=e,this.ems=i}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object(s.a)(t=>console.log(t)),Object(r.a)(2e3),Object(a.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object(s.a)(t=>console.log(t)),Object(r.a)(2e3),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(s.a)(t=>console.log(t)),Object(r.a)(2e3),Object(c.a)(t=>({permitted:!0,$data:t})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object(s.a)(t=>console.log(t)),Object(c.a)(t=>({created:!0,$data:t})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(r.a)(2e3),Object(c.a)(t=>({permitted:!0,$data:t})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(c.a)(t=>({updated:!0,$data:t})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(r.a)(2e3),Object(c.a)(t=>({permitted:!0,$data:t})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(c.a)(t=>({deleted:!0})),Object(a.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(c.a)(t=>({manyDeleted:!0})),Object(a.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(r.a)(2e3),Object(a.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllRequestCredential(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(c.a)(t=>({allDeleted:!0})),Object(a.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(n.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(l.Tb(h.b),l.Tb(o.b),l.Tb(b.a))},t.\u0275prov=l.Gb({token:t,factory:t.\u0275fac}),t})()},"T+6q":function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i("Yvf7"),s=i("BeQt"),r=i("hxwH"),a=i("Ub9n");let c=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[s.a],imports:[[n.b,r.a]]}),t})()},hslF:function(t,e,i){"use strict";i.d(e,"a",function(){return f});var n=i("Yvf7"),s=i("8VHZ"),r=i("Fk62"),a=i("Ub9n");const c=[];let o=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[r.g.forChild(c)],r.g]}),t})();var l=i("hxwH"),h=i("kPid"),b=i("T+6q"),u=i("O/oE"),p=i("R+ww"),d=i("L6ME");let g=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.permanentProps={status:[s.q.required,s.q.max(9e7)]},this.otherCtrls={}}getPermanentProp(t){return this.permanentProps[t]}getMyData(t){return this.permanentData[t]}removeControls(t,e){d.a.removeControls(t,e)}createPermanent(t,e){d.a.createPermanent(this,t,e)}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(s.c))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),f=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[g,p.a],imports:[[n.b,o,s.n,l.a,h.a,b.a,u.a]]}),t})()},ku54:function(t,e,i){"use strict";i.d(e,"a",function(){return P});var n=i("XA6Z"),s=i("EUGn"),r=i("9nlD"),a=i("J1Ni"),c=i("Ub9n"),o=i("Fk62"),l=i("BeQt"),h=i("Yvf7"),b=i("uMT1"),u=i("+ef2"),p=i("Rxsk"),d=i("TY4h"),g=i("1B5t");function f(t,e){if(1&t&&(c.Pb(0,"h2"),c.xc(1),c.Ob()),2&t){const t=c.ac();c.zb(1),c.yc(" ",t.title," ")}}function y(t,e){if(1&t&&c.Lb(0,"app-view-description",7),2&t){const t=c.ac();c.gc("system-type",t.systemType)("view-type",t.view)}}function m(t,e){if(1&t){const t=c.Qb();c.Pb(0,"app-notification-screen",8),c.Wb("finished",function(){return c.rc(t),c.ac().removeNotification()}),c.Ob()}if(2&t){const t=c.ac();c.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function v(t,e){if(1&t&&c.Lb(0,"app-resource-unavailable",9),2&t){const t=c.ac();c.gc("error",t.error)}}function O(t,e){if(1&t&&c.Lb(0,"app-delete-all-entry",13),2&t){const t=c.ac(3);c.gc("system-type",t.systemType)}}function $(t,e){if(1&t){const t=c.Qb();c.Pb(0,"button",14),c.Wb("click",function(){return c.rc(t),c.ac(3).deleteAllEntry()}),c.xc(1," Confirm "),c.Ob()}}function E(t,e){1&t&&(c.Pb(0,"p"),c.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),c.Ob())}function w(t,e){if(1&t&&(c.Nb(0),c.vc(1,O,1,1,"app-delete-all-entry",11),c.vc(2,$,2,0,"button",12),c.vc(3,E,2,0,"p",1),c.Mb()),2&t){const t=c.ac(2);c.zb(1),c.gc("ngIf",t.systemType),c.zb(1),c.gc("ngIf",!t.isFormProcessing),c.zb(1),c.gc("ngIf",t.isFormSubmitted)}}function k(t,e){if(1&t&&(c.Pb(0,"div",10),c.vc(1,w,4,3,"ng-container",1),c.Ob()),2&t){const t=c.ac();c.gc("@fadeAnimation",void 0),c.zb(1),c.gc("ngIf",!t.isLoading)}}let P=(()=>{class t{constructor(t,e,i,n,s){this.route=t,this.router=e,this.gas=i,this.ems=n,this.ns=s,this.isError=!1,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.canDelete=!1,this.isLoading=!1}ngOnInit(){this.gas.$sa=this.$link,this.route.paramMap.pipe(Object(n.a)(t=>(this.isLoading=!0,this.gas.deleteAllEntry()))).subscribe(t=>{null==t&&(this.isLoading=!1,this.canDelete=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)),null!=t&&t.length>0&&(this.isLoading=!1,this.canDelete=!0)})}ngOnDestroy(){clearTimeout(this.deleteAllT)}deleteAllEntry(){if(!confirm("Are you sure you want to proceed with this action?"))return!1;this.gas.$systemType=this.systemType,this.gas.$sa=this.$link,this.isFormSubmitted=!0,this.error=null,this.isError=!1,this.isFormProcessing=!0,this.gas.$deleteAllEntry().subscribe(t=>{null==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1,this.isError=!0,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`),this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):(this.isLoading=!0,this.isFormSubmitted=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`),this.$entryChanges({}))})}$entryChanges(t){this.deleteAllT=setTimeout(()=>this.router.navigate(["system","internal",this.link]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(o.a),c.Kb(o.e),c.Kb(l.a),c.Kb(s.a),c.Kb(r.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-general-all-entry-delete-all"]],inputs:{systemType:["system-type","systemType"],viewWord:["view-word","viewWord"],title:"title",view:"view",link:"link",$link:"$link"},features:[c.yb([r.a,s.a])],decls:7,vars:6,consts:[["id","entry-delete-all"],[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"error",4,"ngIf"],["id","entry-detail",4,"ngIf"],[3,"is-loading"],[3,"system-type","view-type"],[3,"notified","message","finished"],[3,"error"],["id","entry-detail"],[3,"system-type",4,"ngIf"],["class","btn-submit","type","submit",3,"click",4,"ngIf"],[3,"system-type"],["type","submit",1,"btn-submit",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.vc(1,f,2,1,"h2",1),c.vc(2,y,1,2,"app-view-description",2),c.vc(3,m,1,2,"app-notification-screen",3),c.vc(4,v,1,1,"app-resource-unavailable",4),c.vc(5,k,2,2,"div",5),c.Ob(),c.Lb(6,"app-loading-menu",6)),2&t&&(c.zb(1),c.gc("ngIf",e.title),c.zb(1),c.gc("ngIf",e.view),c.zb(1),c.gc("ngIf",e.notificationAvailable),c.zb(1),c.gc("ngIf",e.isError),c.zb(1),c.gc("ngIf",e.canDelete),c.zb(1),c.gc("is-loading",e.isLoading))},directives:[h.l,b.a,u.a,p.a,d.a,g.a],styles:[""],data:{animation:[a.a]}}),t})()},oNs5:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("Ub9n"),s=i("Fk62"),r=i("Yvf7"),a=i("ku54");function c(t,e){if(1&t&&n.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=n.ac();n.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let o=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(s.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-req-cred-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&n.vc(0,c,1,6,"app-general-all-entry-delete-all",0),2&t&&n.gc("ngIf",e.systemType)},directives:[r.l,a.a],styles:[""]}),t})()},tTBu:function(t,e,i){"use strict";function n(t,e){return i=>{let n=i.value,s=t.map(t=>t._id);return"number"==typeof s[0]&&(n=+n),""!=n&&s.indexOf(n)<0?{[e]:{value:n,name:e}}:null}}i.d(e,"a",function(){return n})}}]);