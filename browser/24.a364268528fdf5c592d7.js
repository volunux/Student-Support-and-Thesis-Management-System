(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6/ph":function(t,e,s){"use strict";s.r(e),s.d(e,"UserUploadModule",function(){return yt});var i=s("Yvf7"),n=s("Fk62"),r=s("/zEo"),a=s("Ub9n");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-four-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&a.Lb(0,"router-outlet")},directives:[n.h],styles:[""]}),t})();var l=s("+ef2");function o(t,e){if(1&t&&(a.Pb(0,"h2"),a.xc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.yc(" ",t.title," ")}}function h(t,e){if(1&t&&a.Lb(0,"app-view-description",3),2&t){const t=a.ac();a.gc("system-type",t.systemType)("view-type",t.view)}}const b=function(){return["entries"]},p=function(){return["entry","delete","all"]};function u(t,e){if(1&t&&(a.Pb(0,"div",4),a.Pb(1,"ul"),a.Pb(2,"li"),a.Pb(3,"a",5),a.xc(4),a.Ob(),a.Ob(),a.Pb(5,"li"),a.Pb(6,"a",5),a.xc(7),a.Ob(),a.Ob(),a.Pb(8,"li"),a.Pb(9,"a",6),a.xc(10),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(3),a.gc("routerLink",a.kc(5,b)),a.zb(1),a.yc(" Manage ",t.systemType," "),a.zb(2),a.gc("routerLink",a.kc(6,p)),a.zb(1),a.yc(" Delete All ",t.systemType," "),a.zb(3),a.yc(" ",t.systemType," Statistics ")}}let y=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(n.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-four-dashboard"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"],["href","#",1,"center"]],template:function(t,e){1&t&&(a.vc(0,o,2,1,"h2",0),a.vc(1,h,1,2,"app-view-description",1),a.vc(2,u,11,7,"div",2)),2&t&&(a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.view),a.zb(1),a.gc("ngIf",e.systemType))},directives:[i.l,l.a,n.f],styles:[""]}),t})();var d=s("iPJu"),g=s("EUGn"),f=s("9nlD"),m=s("J1Ni"),v=s("jV/k"),$=s("vfyW"),O=s("oECA"),E=s("O6Zd"),k=s("VcWf"),w=s("FBrc");let I=(()=>{class t{constructor(t,e,s){this.http=t,this.apiConfig=e,this.ems=s}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object($.a)(t=>console.log(t)),Object(O.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object($.a)(t=>console.log(t)),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object($.a)(t=>console.log(t)),Object(E.a)(t=>({permitted:!0,$data:t})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object($.a)(t=>console.log(t)),Object(E.a)(t=>({created:!0,$data:t})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(E.a)(t=>({permitted:!0,$data:t})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(E.a)(t=>({updated:!0,$data:t})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(E.a)(t=>({permitted:!0,$data:t})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(E.a)(t=>({deleted:!0})),Object(O.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(E.a)(t=>({manyDeleted:!0})),Object(O.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(O.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllInternalFour(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(E.a)(t=>({allDeleted:!0})),Object(O.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(v.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(w.b),a.Tb(k.b),a.Tb(g.a))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();var T=s("BeQt"),P=s("9Ku7"),z=s("9yhg"),j=s("Rxsk"),L=s("xlhj"),x=s("scZC"),A=s("TY4h");function C(t,e){if(1&t&&(a.Pb(0,"h2"),a.xc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.yc(" ",t.title," ")}}function D(t,e){if(1&t&&a.Lb(0,"app-view-description",8),2&t){const t=a.ac();a.gc("view-type",t.view)("system-type",t.systemType)}}function F(t,e){if(1&t){const t=a.Qb();a.Pb(0,"app-notification-screen",9),a.Wb("finished",function(){return a.rc(t),a.ac().removeNotification()}),a.Ob()}if(2&t){const t=a.ac();a.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function N(t,e){if(1&t&&a.Lb(0,"app-search",10),2&t){const t=a.ac();a.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function S(t,e){1&t&&(a.Pb(0,"td",21),a.xc(1," Nil "),a.Ob())}function M(t,e){if(1&t&&(a.Pb(0,"td",27),a.xc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.yc(" ",null==t||null==t.author?null:t.author.full_name," ")}}function K(t,e){if(1&t&&(a.Pb(0,"td",21),a.xc(1),a.bc(2,"date"),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.yc(" ",a.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function W(t,e){if(1&t&&(a.Pb(0,"td",21),a.xc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.yc(" ",null==t?null:t.status," ")}}function U(t,e){if(1&t){const t=a.Qb();a.Nb(0),a.Pb(1,"input",32,33),a.Wb("click",function(){a.rc(t);const e=a.qc(2),s=a.ac(3),i=s.$implicit,n=s.index;return a.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,n)}),a.Ob(),a.Lb(3,"span",34),a.Mb()}if(2&t){const t=e.$implicit,s=a.ac(3).$implicit;a.zb(1),a.gc("checked",t==(null==s?null:s.num))}}function B(t,e){if(1&t&&(a.Nb(0),a.vc(1,U,4,1,"ng-container",31),a.Mb()),2&t){const t=a.ac(4);a.zb(1),a.gc("ngForOf",t.esdl)}}function Q(t,e){if(1&t){const t=a.Qb();a.Pb(0,"input",35,33),a.Wb("click",function(){a.rc(t);const e=a.qc(1),s=a.ac(2),i=s.$implicit,n=s.index;return a.ac(2).addEntryToDeleteList(null==i?null:i.num,e.checked,n)}),a.Ob(),a.Lb(2,"span",34)}}function q(t,e){if(1&t&&(a.Pb(0,"label",28),a.vc(1,B,2,1,"ng-container",29),a.vc(2,Q,3,0,"ng-template",null,30,a.wc),a.Ob()),2&t){const t=a.qc(3),e=a.ac(3);a.zb(1),a.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const H=function(t){return["../","entry",t,"detail"]},G=function(t){return["../","entry",t,"delete"]};function V(t,e){if(1&t&&(a.Pb(0,"tr"),a.Pb(1,"td",21),a.xc(2),a.Ob(),a.vc(3,S,2,0,"ng-template",null,22,a.wc),a.vc(5,M,2,1,"td",23),a.vc(6,K,3,4,"td",24),a.vc(7,W,2,1,"td",24),a.Pb(8,"td",13),a.Pb(9,"a",25),a.xc(10,"View"),a.Ob(),a.Pb(11,"a",25),a.xc(12,"Delete"),a.Ob(),a.vc(13,q,4,2,"label",26),a.Ob(),a.Ob()),2&t){const t=e.$implicit,s=e.index,i=a.qc(4);a.zb(2),a.yc(" ",s+1,". "),a.zb(3),a.gc("ngIf",null==t||null==t.author?null:t.author.full_name)("ngIfElse",i),a.zb(1),a.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",i),a.zb(1),a.gc("ngIf",null==t?null:t.status)("ngIfElse",i),a.zb(2),a.gc("routerLink",a.lc(10,H,null==t?null:t.slug)),a.zb(2),a.gc("routerLink",a.lc(12,G,null==t?null:t.slug)),a.zb(2),a.gc("ngIf",!0)}}function Y(t,e){if(1&t&&a.Lb(0,"app-pagination",36),2&t){const t=a.ac(2);a.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)}}function J(t,e){if(1&t&&(a.Pb(0,"div"),a.Pb(1,"table",11),a.Pb(2,"caption",12),a.xc(3," Entries "),a.Ob(),a.Pb(4,"colgroup"),a.Lb(5,"col",13),a.Lb(6,"col",13),a.Lb(7,"col",13),a.Lb(8,"col",13),a.Lb(9,"col",13),a.Lb(10,"col",13),a.Lb(11,"col",13),a.Lb(12,"col",14),a.Ob(),a.Pb(13,"thead"),a.Pb(14,"tr"),a.Pb(15,"th",15),a.xc(16," Index "),a.Ob(),a.Pb(17,"th",16),a.xc(18," Author "),a.Ob(),a.Pb(19,"th",17),a.xc(20," Updated On "),a.Ob(),a.Pb(21,"th",18),a.xc(22," Status "),a.Ob(),a.Pb(23,"th",12),a.xc(24," Changes "),a.Ob(),a.Ob(),a.Ob(),a.Pb(25,"tbody"),a.vc(26,V,14,14,"tr",19),a.Ob(),a.Pb(27,"tfoot"),a.Pb(28,"tr"),a.Lb(29,"td"),a.Ob(),a.Pb(30,"tr"),a.Lb(31,"td"),a.Ob(),a.Pb(32,"tr"),a.vc(33,Y,1,3,"app-pagination",20),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(25),a.gc("@listAnimation",t.entries.length),a.zb(1),a.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum),a.zb(7),a.gc("ngIf",t.pageNumber)}}function Z(t,e){if(1&t&&a.Lb(0,"app-resource-unavailable",37),2&t){const t=a.ac();a.gc("error",t.error)}}let _=(()=>{class t{constructor(t,e,s,i,n,r,a,c){this.route=t,this.location=e,this.its=s,this.gss=i,this.gas=n,this.ems=r,this.ns=a,this.aus=c,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.its.getAllEntry(t).subscribe(t=>{null==t?(this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,s){this.gas.addEntryToDeleteList(t,e,s,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.its)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(n.a),a.Kb(i.h),a.Kb(I),a.Kb(d.a),a.Kb(T.a),a.Kb(g.a),a.Kb(f.a),a.Kb(P.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-four-entries"]],features:[a.yb([f.a,g.a,d.a])],decls:11,vars:8,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center","name-internal"],[1,"bold","center"],[1,"bold","center","status"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.vc(1,C,2,1,"h2",1),a.vc(2,D,1,2,"app-view-description",2),a.vc(3,F,1,2,"app-notification-screen",3),a.Lb(4,"app-list-entry-options"),a.Pb(5,"div",4),a.vc(6,N,1,3,"app-search",5),a.Pb(7,"a",6),a.Wb("click",function(){return e.deleteManyEntry()}),a.xc(8," Delete Many "),a.Ob(),a.Ob(),a.vc(9,J,34,4,"div",1),a.vc(10,Z,1,1,"app-resource-unavailable",7),a.Ob()),2&t&&(a.zb(1),a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.view),a.zb(1),a.gc("ngIf",e.notificationAvailable),a.zb(3),a.gc("ngIf",e.systemType),a.zb(1),a.Cb("hide",e.esdl.length<2),a.zb(2),a.gc("ngIf",e.$entriesLength>0),a.zb(1),a.gc("ngIf",e.isError))},directives:[i.l,z.a,l.a,j.a,L.a,i.k,n.f,x.a,A.a],pipes:[i.d],styles:[""],data:{animation:[m.c]}}),t})();var R=s("ku54");function X(t,e){if(1&t&&a.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=a.ac();a.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let tt=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(n.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-four-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&a.vc(0,X,1,6,"app-general-all-entry-delete-all",0),2&t&&a.gc("ngIf",e.systemType)},directives:[i.l,R.a],styles:[""]}),t})(),et={systemType:"User Upload",title:"User Upload",view:"gen-internal",viewWord:"User Upload",link:"user-upload",$link:"user-upload",systemGuideline:"gen-internal"};const st={dashboard:Object.assign({},et),deleteAll:Object.assign(Object.assign({},et),{title:et.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},et),{title:et.systemType+" Entries",searchFilters:{status:"Status"}})},it=[{path:"",component:c,children:[{path:"",component:y,data:{dashboard:st.dashboard}},{path:"entries",component:_,data:{entries:st.entries}},{path:"entry/delete/all",component:tt,canActivate:[r.a],data:{deleteAll:st.deleteAll}}]}];let nt=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(it)],n.g]}),t})();var rt=s("8VHZ");const at=[];let ct=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(at)],n.g]}),t})();var lt=s("hxwH"),ot=s("kPid"),ht=s("T+6q"),bt=s("O/oE");let pt=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.permanentProps={},this.otherCtrls={}}getPermanentProp(t){}removeControls(t,e){}createPermanent(t,e){}getMyData(t){return this.permanentData[t]}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(rt.b))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),ut=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[pt,I],imports:[[i.b,ct,rt.l,lt.a,ot.a,ht.a,bt.a]]}),t})(),yt=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i.b,nt,ut]]}),t})()},ku54:function(t,e,s){"use strict";s.d(e,"a",function(){return E});var i=s("XA6Z"),n=s("EUGn"),r=s("9nlD"),a=s("Ub9n"),c=s("Fk62"),l=s("BeQt"),o=s("Yvf7"),h=s("+ef2"),b=s("Rxsk"),p=s("TY4h"),u=s("1B5t");function y(t,e){if(1&t&&(a.Pb(0,"h2"),a.xc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.yc(" ",t.title," ")}}function d(t,e){if(1&t&&a.Lb(0,"app-view-description",6),2&t){const t=a.ac();a.gc("system-type",t.systemType)("view-type",t.view)}}function g(t,e){if(1&t){const t=a.Qb();a.Pb(0,"app-notification-screen",7),a.Wb("finished",function(){return a.rc(t),a.ac().removeNotification()}),a.Ob()}if(2&t){const t=a.ac();a.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function f(t,e){if(1&t&&a.Lb(0,"app-resource-unavailable",8),2&t){const t=a.ac();a.gc("error",t.error)}}function m(t,e){if(1&t&&a.Lb(0,"app-delete-all-entry",12),2&t){const t=a.ac(2);a.gc("system-type",t.systemType)}}function v(t,e){if(1&t){const t=a.Qb();a.Pb(0,"button",13),a.Wb("click",function(){return a.rc(t),a.ac(2).deleteAllEntry()}),a.xc(1," Confirm "),a.Ob()}}function $(t,e){1&t&&(a.Pb(0,"p"),a.xc(1," Your form is being processed. Please kindly be patient and wait while it completes. "),a.Ob())}function O(t,e){if(1&t&&(a.Pb(0,"div",9),a.vc(1,m,1,1,"app-delete-all-entry",10),a.vc(2,v,2,0,"button",11),a.vc(3,$,2,0,"p",1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.gc("ngIf",t.systemType),a.zb(1),a.gc("ngIf",!t.isFormProcessing),a.zb(1),a.gc("ngIf",t.isFormSubmitted)}}let E=(()=>{class t{constructor(t,e,s,i,n){this.route=t,this.router=e,this.gas=s,this.ems=i,this.ns=n,this.isError=!1,this.isFormSubmitted=!1,this.isFormProcessing=!1,this.canDelete=!1}ngOnInit(){this.gas.$sa=this.$link,this.route.paramMap.pipe(Object(i.a)(t=>this.gas.deleteAllEntry())).subscribe(t=>{null==t&&(this.canDelete=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)),null!=t&&t.length>0&&(this.canDelete=!0)})}ngOnDestroy(){clearTimeout(this.deleteAllT)}deleteAllEntry(){if(!confirm("Are you sure you want to proceed with this action?"))return!1;this.gas.$systemType=this.systemType,this.gas.$sa=this.$link,this.isFormSubmitted=!0,this.error=null,this.isError=!1,this.isFormProcessing=!0,this.gas.$deleteAllEntry().subscribe(t=>{null==t?(this.isFormSubmitted=!1,this.isFormProcessing=!1,this.isError=!0,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`),this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):(this.isFormSubmitted=!1,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`),this.$entryChanges({}))})}$entryChanges(t){this.deleteAllT=setTimeout(()=>this.router.navigate(["system","internal",this.link]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(c.a),a.Kb(c.d),a.Kb(l.a),a.Kb(n.a),a.Kb(r.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-general-all-entry-delete-all"]],inputs:{systemType:["system-type","systemType"],viewWord:["view-word","viewWord"],title:"title",view:"view",link:"link",$link:"$link"},features:[a.yb([r.a,n.a])],decls:6,vars:5,consts:[["id","entry-delete-all"],[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"error",4,"ngIf"],["id","entry-detail",4,"ngIf"],[3,"system-type","view-type"],[3,"notified","message","finished"],[3,"error"],["id","entry-detail"],[3,"system-type",4,"ngIf"],["class","btn-submit","type","submit",3,"click",4,"ngIf"],[3,"system-type"],["type","submit",1,"btn-submit",3,"click"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.vc(1,y,2,1,"h2",1),a.vc(2,d,1,2,"app-view-description",2),a.vc(3,g,1,2,"app-notification-screen",3),a.vc(4,f,1,1,"app-resource-unavailable",4),a.vc(5,O,4,3,"div",5),a.Ob()),2&t&&(a.zb(1),a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.view),a.zb(1),a.gc("ngIf",e.notificationAvailable),a.zb(1),a.gc("ngIf",e.isError),a.zb(1),a.gc("ngIf",e.canDelete))},directives:[o.l,h.a,b.a,p.a,u.a],styles:[""]}),t})()}}]);