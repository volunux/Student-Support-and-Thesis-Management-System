(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7N37":function(e,t,r){"use strict";r.r(t),r.d(t,"RefundEntryCreateModule",function(){return A});var n=r("Yvf7"),s=r("hxwH"),i=r("0FyI"),a=r("Fk62"),o=r("jiyY"),c=r("iojP"),l=r("Ub9n");let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Eb({type:e,selectors:[["app-refund-entry-create-homepage"]],decls:1,vars:0,template:function(e,t){1&e&&l.Lb(0,"router-outlet")},directives:[a.h],styles:[""]}),e})(),h=[{label:"Photo I",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo II",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo III",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo IV",key:"photos",accepts:"image/*",controlType:"file"}],y={add:"user-upload/entry/create",remove:"o/photo",sign:"o/sign/photo"};var p=r("EUGn"),f=r("jV/k"),d=r("vfyW"),b=r("XRyL"),g=r("O6Zd"),m=r("oECA"),v=r("VcWf"),E=r("FBrc");let T=(()=>{class e{constructor(e,t,r){this.http=e,this.apiConfig=t,this.ems=r,this.$systemType="Refund",this.aurl="refund"}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.aurl}/entry/create`).pipe(Object(d.a)(e=>console.log(e)),Object(b.a)(3e3),Object(g.a)(e=>({permitted:!0})),Object(m.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(e){return this.http.post(`${this.apiConfig.host}/${this.aurl}/entry/create`,e).pipe(Object(d.a)(e=>console.log(e)),Object(g.a)(e=>({created:!0,$data:e})),Object(m.a)(this.handleError(this.$systemType+" Entry",null)))}handleError(e="operation",t){return e=>(this.ems.message=e,Object(f.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(E.b),l.Tb(v.b),l.Tb(p.a))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac}),e})();var C=r("5bm+"),w=r("WEao"),I=r("uMT1"),O=r("TY4h"),j=r("wczn");function k(e,t){if(1&e&&(l.Pb(0,"h2"),l.xc(1),l.Ob()),2&e){const e=l.ac();l.zb(1),l.yc(" ",e.title," ")}}function L(e,t){if(1&e&&l.Lb(0,"app-resource-unavailable",4),2&e){const e=l.ac();l.gc("error",e.error)}}function $(e,t){if(1&e){const e=l.Qb();l.Nb(0),l.Pb(1,"app-request-entry-create",5),l.Wb("processEntry",function(t){return l.rc(e),l.ac(2).createEntry(t)}),l.Ob(),l.Mb()}if(2&e){const e=l.ac(2);l.zb(1),l.gc("system-type",e.systemType)("system-guideline",e.systemGuideline)("view",e.view)("input-file-control",e.fileControl)("attachment-config",e.attachmentConfig)("entry-create-form",e.entryCreateForm)("upload-config-u",e.uploadConfig)}}function z(e,t){if(1&e&&(l.Nb(0),l.vc(1,$,2,7,"ng-container",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",!e.isLoading)}}let P=(()=>{class e{constructor(e,t,r,n,s,i){this.route=e,this.router=t,this.rfecs=r,this.recfs=n,this.recs=s,this.ems=i,this.isError=!1,this.fileControl=h,this.uploadConfig=y,this.attachmentConfig={name:"Image",type:"image"},this.isLoading=!1}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.create.systemType,this.systemGuideline=e.create.systemGuideline,this.title=e.create.title,this.view=e.create.view,this.link=e.create.link,this.rfecs.$systemType=this.systemType,this.isLoading=!0,this.rfecs.addEntry().subscribe(e=>{null==e?(this.isLoading=!1,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message)):null!=e&&1==e.permitted&&(this.isLoading=!1,this.entryCreateForm=this.recfs.entryCreateForm())})}ngOnDestroy(){clearTimeout(this.entryCreateT)}createEntry(e){this.error=null,this.isError=!1,this.rfecs.addEntry$(e).subscribe(e=>{null==e?this.recs.isEntryCreated.next(!1):null!=e&&1==e.created&&(this.isLoading=!0,this.recs.isEntryCreated.next(!0),this.entryChanges(e))})}entryChanges(e){this.entryCreateT=setTimeout(()=>this.router.navigate(e&&e.slug?[this.link]:[this.link,"entries"]),5e3)}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(a.a),l.Kb(a.d),l.Kb(T),l.Kb(C.a),l.Kb(w.a),l.Kb(p.a))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-refund-entry-create"]],features:[l.yb([p.a])],decls:5,vars:4,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"is-loading"],[3,"error"],[3,"system-type","system-guideline","view","input-file-control","attachment-config","entry-create-form","upload-config-u","processEntry"]],template:function(e,t){1&e&&(l.Pb(0,"div",0),l.vc(1,k,2,1,"h2",1),l.vc(2,L,1,1,"app-resource-unavailable",2),l.vc(3,z,2,1,"ng-container",1),l.Ob(),l.Lb(4,"app-loading-menu",3)),2&e&&(l.zb(1),l.gc("ngIf",t.title),l.zb(1),l.gc("ngIf",t.isError),l.zb(1),l.gc("ngIf",t.entryCreateForm),l.zb(1),l.gc("is-loading",t.isLoading))},directives:[n.l,I.a,O.a,j.a],styles:[""]}),e})(),F={systemType:"Refund",title:"Refund",view:"rf",viewWord:"Refund",link:"refund",$link:"refund",systemGuideline:"request",base:"refund"};const G={create:Object.assign(Object.assign({},F),{title:"Request a "+F.systemType})},R=[{path:"",component:u,canActivate:[o.a],canLoad:[o.a],children:[{path:"",canActivateChild:[o.a],children:[{path:"",component:P,data:{create:G.create},canActivate:[c.a]}]}]}];let K=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(R)],a.g]}),e})();var W=r("8VHZ");let x=(()=>{class e{constructor(e){this.fb=e}}return e.\u0275fac=function(t){return new(t||e)(l.Tb(W.b))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac}),e})(),A=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},providers:[T,x],imports:[[n.b,K,i.a,s.a]]}),e})()}}]);