(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"51Xn":function(t,e,n){"use strict";n.r(e),n.d(e,"AccountChangeRequestEntryCreateModule",function(){return R});var s=n("Yvf7"),i=n("8VHZ"),r=n("hxwH"),a=n("0FyI"),c=n("Fk62"),o=n("jiyY"),u=n("Ub9n");let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Eb({type:t,selectors:[["app-acr-entry-create-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&u.Lb(0,"router-outlet")},directives:[c.h],styles:[""]}),t})();var l=n("XA6Z"),y=n("EUGn"),f=n("9nlD"),p=n("jV/k"),b=n("vfyW"),d=n("XRyL"),g=n("O6Zd"),m=n("oECA"),v=n("VcWf"),E=n("FBrc");let C=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n,this.$systemType="Account Change Request",this.$sa="account-change-request"}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(b.a)(t=>console.log(t)),Object(d.a)(2e3),Object(g.a)(t=>({permitted:!0,$data:t})),Object(m.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object(b.a)(t=>console.log(t)),Object(g.a)(t=>({created:!0,$data:t})),Object(m.a)(this.handleError(this.$systemType+" Entry",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(p.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(u.Tb(E.b),u.Tb(v.b),u.Tb(y.a))},t.\u0275prov=u.Gb({token:t,factory:t.\u0275fac}),t})();var O=n("5bm+"),w=n("WEao"),T=n("uMT1"),$=n("TY4h"),j=n("Rxsk"),q=n("wczn");function I(t,e){if(1&t&&(u.Pb(0,"h2"),u.xc(1),u.Ob()),2&t){const t=u.ac();u.zb(1),u.yc(" ",t.title," ")}}function A(t,e){if(1&t&&u.Lb(0,"app-resource-unavailable",5),2&t){const t=u.ac();u.gc("error",t.error)}}function L(t,e){if(1&t){const t=u.Qb();u.Pb(0,"app-notification-screen",6),u.Wb("finished",function(){return u.rc(t),u.ac().removeNotification()}),u.Ob()}if(2&t){const t=u.ac();u.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function k(t,e){if(1&t){const t=u.Qb();u.Nb(0),u.Pb(1,"app-request-entry-create",7),u.Wb("processEntry",function(e){return u.rc(t),u.ac(2).createEntry(e)}),u.Ob(),u.Mb()}if(2&t){const t=u.ac(2);u.zb(1),u.gc("system-type",t.systemType)("system-guideline",t.systemGuideline)("view",t.view)("entry-create-form",t.entryCreateForm)}}function N(t,e){if(1&t&&(u.Nb(0),u.vc(1,k,2,4,"ng-container",1),u.Mb()),2&t){const t=u.ac();u.zb(1),u.gc("ngIf",!t.isLoading)}}let z=(()=>{class t{constructor(t,e,n,s,i,r,a){this.route=t,this.router=e,this.acrecs=n,this.recfs=s,this.recs=i,this.ems=r,this.ns=a,this.isError=!1,this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.systemGuideline=t.create.systemGuideline,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.route.paramMap.pipe(Object(l.a)(t=>(this.isLoading=!0,this.acrecs.addEntry()))).subscribe(t=>{null==t?(this.isLoading=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):null!=t&&1==t.permitted&&(this.isLoading=!1,this.entryCreateForm=this.recfs.entryCreateForm())})}ngOnDestroy(){clearTimeout(this.entryCreateT)}createEntry(t){this.error=null,this.isError=!1,this.acrecs.addEntry$(t).subscribe(t=>{null==t?(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`),this.recs.isEntryCreated.next(!1)):null!=t&&1==t.created&&(this.isLoading=!0,this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`),this.recs.isEntryCreated.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryCreateT=setTimeout(()=>this.router.navigate(["account-change-request","entries"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(u.Kb(c.a),u.Kb(c.e),u.Kb(C),u.Kb(O.a),u.Kb(w.a),u.Kb(y.a),u.Kb(f.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-acr-entry-create"]],features:[u.yb([y.a,f.a])],decls:6,vars:5,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"notified","message","finished"],[3,"system-type","system-guideline","view","entry-create-form","processEntry"]],template:function(t,e){1&t&&(u.Pb(0,"div",0),u.vc(1,I,2,1,"h2",1),u.vc(2,A,1,1,"app-resource-unavailable",2),u.vc(3,L,1,2,"app-notification-screen",3),u.vc(4,N,2,1,"ng-container",1),u.Ob(),u.Lb(5,"app-loading-menu",4)),2&t&&(u.zb(1),u.gc("ngIf",e.title),u.zb(1),u.gc("ngIf",e.isError),u.zb(1),u.gc("ngIf",e.notificationAvailable),u.zb(1),u.gc("ngIf",e.entryCreateForm),u.zb(1),u.gc("is-loading",e.isLoading))},directives:[s.l,T.a,$.a,j.a,q.a],styles:[""]}),t})(),M={systemType:"Account Change Request",title:"Account Change Request",view:"acr",viewWord:"AccountChangeRequest",link:"account-change-request",$link:"account-change-request",systemGuideline:"general",base:"account-change-request"};const x={create:Object.assign(Object.assign({},M),{title:M.systemType+" Entry Create"})},F=[{path:"",component:h,canActivate:[o.a],canLoad:[o.a],children:[{path:"",canActivateChild:[o.a],children:[{path:"",component:z,data:{create:x.create}}]}]}];let G=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(F)],c.g]}),t})(),K=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.otherCtrls={text:[i.q.required,i.q.max(1e3)]}}getMyData(t){return this.permanentData[t]}}return t.\u0275fac=function(e){return new(e||t)(u.Tb(i.c))},t.\u0275prov=u.Gb({token:t,factory:t.\u0275fac}),t})(),R=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(e){return new(e||t)},providers:[C,K],imports:[[s.b,i.n,G,a.a,r.a]]}),t})()}}]);