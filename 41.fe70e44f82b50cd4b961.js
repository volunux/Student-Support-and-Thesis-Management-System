(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"7N37":function(t,e,i){"use strict";i.r(e),i.d(e,"RefundEntryCreateModule",function(){return H});var n=i("Yvf7"),s=i("hxwH"),r=i("0FyI"),a=i("Fk62"),o=i("jiyY"),c=i("iojP"),l=i("Ub9n");let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["app-refund-entry-create-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&l.Lb(0,"router-outlet")},directives:[a.h],styles:[""]}),t})(),u=[{label:"Photo I",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo II",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo III",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo IV",key:"photos",accepts:"image/*",controlType:"file"}],h={add:"user-upload/entry/create",remove:"o/photo",sign:"o/sign/photo"};var p=i("EUGn"),y=i("9nlD"),d=i("jV/k"),b=i("vfyW"),g=i("XRyL"),m=i("O6Zd"),v=i("oECA"),E=i("VcWf"),T=i("FBrc");let C=(()=>{class t{constructor(t,e,i){this.http=t,this.apiConfig=e,this.ems=i,this.$systemType="Refund",this.aurl="refund"}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.aurl}/entry/create`).pipe(Object(b.a)(t=>console.log(t)),Object(g.a)(2e3),Object(m.a)(t=>({permitted:!0})),Object(v.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.aurl}/entry/create`,t).pipe(Object(b.a)(t=>console.log(t)),Object(m.a)(t=>({created:!0,$data:t})),Object(v.a)(this.handleError(this.$systemType+" Entry",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(d.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(l.Tb(T.b),l.Tb(E.b),l.Tb(p.a))},t.\u0275prov=l.Gb({token:t,factory:t.\u0275fac}),t})();var w=i("5bm+"),I=i("WEao"),O=i("uMT1"),k=i("TY4h"),j=i("Rxsk"),$=i("wczn");function L(t,e){if(1&t&&(l.Pb(0,"h2"),l.xc(1),l.Ob()),2&t){const t=l.ac();l.zb(1),l.yc(" ",t.title," ")}}function N(t,e){if(1&t&&l.Lb(0,"app-resource-unavailable",5),2&t){const t=l.ac();l.gc("error",t.error)}}function z(t,e){if(1&t){const t=l.Qb();l.Pb(0,"app-notification-screen",6),l.Wb("finished",function(){return l.rc(t),l.ac().removeNotification()}),l.Ob()}if(2&t){const t=l.ac();l.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function P(t,e){if(1&t){const t=l.Qb();l.Nb(0),l.Pb(1,"app-request-entry-create",7),l.Wb("processEntry",function(e){return l.rc(t),l.ac(2).createEntry(e)}),l.Ob(),l.Mb()}if(2&t){const t=l.ac(2);l.zb(1),l.gc("system-type",t.systemType)("system-guideline",t.systemGuideline)("view",t.view)("input-file-control",t.fileControl)("attachment-config",t.attachmentConfig)("entry-create-form",t.entryCreateForm)("upload-config-u",t.uploadConfig)}}function R(t,e){if(1&t&&(l.Nb(0),l.vc(1,P,2,7,"ng-container",1),l.Mb()),2&t){const t=l.ac();l.zb(1),l.gc("ngIf",!t.isLoading)}}let A=(()=>{class t{constructor(t,e,i,n,s,r,a){this.route=t,this.router=e,this.rfecs=i,this.ns=n,this.recfs=s,this.recs=r,this.ems=a,this.isError=!1,this.fileControl=u,this.uploadConfig=h,this.attachmentConfig={name:"Image",type:"image"},this.isLoading=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.systemGuideline=t.create.systemGuideline,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.rfecs.$systemType=this.systemType,this.isLoading=!0,this.rfecs.addEntry().subscribe(t=>{null==t?(this.isLoading=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):null!=t&&1==t.permitted&&(this.isLoading=!1,this.entryCreateForm=this.recfs.entryCreateForm())})}ngOnDestroy(){clearTimeout(this.entryCreateT)}createEntry(t){this.error=null,this.isError=!1,this.rfecs.addEntry$(t).subscribe(t=>{null==t?(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not created.`),this.recs.isEntryCreated.next(!1)):null!=t&&1==t.created&&(this.ns.setNotificationStatus(!0),this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is created.`),this.isLoading=!0,this.recs.isEntryCreated.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryCreateT=setTimeout(()=>this.router.navigate(t&&t.slug?[this.link]:[this.link,"entries"]),5e3)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(l.Kb(a.a),l.Kb(a.e),l.Kb(C),l.Kb(y.a),l.Kb(w.a),l.Kb(I.a),l.Kb(p.a))},t.\u0275cmp=l.Eb({type:t,selectors:[["app-refund-entry-create"]],features:[l.yb([p.a,y.a])],decls:6,vars:5,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"notified","message","finished"],[3,"system-type","system-guideline","view","input-file-control","attachment-config","entry-create-form","upload-config-u","processEntry"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.vc(1,L,2,1,"h2",1),l.vc(2,N,1,1,"app-resource-unavailable",2),l.vc(3,z,1,2,"app-notification-screen",3),l.vc(4,R,2,1,"ng-container",1),l.Ob(),l.Lb(5,"app-loading-menu",4)),2&t&&(l.zb(1),l.gc("ngIf",e.title),l.zb(1),l.gc("ngIf",e.isError),l.zb(1),l.gc("ngIf",e.notificationAvailable),l.zb(1),l.gc("ngIf",e.entryCreateForm),l.zb(1),l.gc("is-loading",e.isLoading))},directives:[n.l,O.a,k.a,j.a,$.a],styles:[""]}),t})(),F={systemType:"Refund",title:"Refund",view:"rf",viewWord:"Refund",link:"refund",$link:"refund",systemGuideline:"request",base:"refund"};const G={create:Object.assign(Object.assign({},F),{title:"Request a "+F.systemType})},K=[{path:"",component:f,canActivate:[o.a],canLoad:[o.a],children:[{path:"",canActivateChild:[o.a],children:[{path:"",component:A,data:{create:G.create},canActivate:[c.a]}]}]}];let M=(()=>{class t{}return t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(K)],a.g]}),t})();var W=i("8VHZ");let x=(()=>{class t{constructor(t){this.fb=t}}return t.\u0275fac=function(e){return new(e||t)(l.Tb(W.c))},t.\u0275prov=l.Gb({token:t,factory:t.\u0275fac}),t})(),H=(()=>{class t{}return t.\u0275mod=l.Ib({type:t}),t.\u0275inj=l.Hb({factory:function(e){return new(e||t)},providers:[C,x],imports:[[n.b,M,r.a,s.a]]}),t})()}}]);