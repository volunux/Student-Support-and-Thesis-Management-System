(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"6lis":function(e,t,r){"use strict";r.r(t),r.d(t,"GeneralRequestEntryCreateModule",function(){return z});var s=r("Yvf7"),n=r("8VHZ"),i=r("hxwH"),a=r("0FyI"),o=r("Fk62"),c=r("jiyY"),l=r("iojP"),u=r("Ub9n");let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Eb({type:e,selectors:[["app-gr-entry-create-homepage"]],decls:1,vars:0,template:function(e,t){1&e&&u.Lb(0,"router-outlet")},directives:[o.h],styles:[""]}),e})();var p=r("XA6Z");let y=[{label:"Photo I",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo II",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo III",key:"photos",accepts:"image/*",controlType:"file"},{label:"Photo IV",key:"photos",accepts:"image/*",controlType:"file"}],g={add:"user-upload/entry/create",remove:"o/photo",sign:"o/sign/photo"};var m=r("EUGn"),b=r("vlQ6"),f=r("jV/k"),d=r("vfyW"),v=r("O6Zd"),C=r("oECA"),E=r("VcWf"),w=r("FBrc");let T=(()=>{class e{constructor(e,t,r){this.http=e,this.apiConfig=t,this.ems=r,this.$systemType="General Request",this.$sa="general-request"}addEntry(e){return this.http.get(`${this.apiConfig.host}/${this.$sa}/t/${e}/entry/create`).pipe(Object(d.a)(e=>console.log(e)),Object(v.a)(e=>({permitted:!0,$data:e})),Object(C.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(e,t){let r=`${this.apiConfig.host}/${this.$sa}/t/${e}/entry/create`;return console.log(t),this.http.post(r,t).pipe(Object(d.a)(e=>console.log(e)),Object(v.a)(e=>({created:!0,$data:e})),Object(C.a)(this.handleError(this.$systemType+" Entry",null)))}handleError(e="operation",t){return e=>(this.ems.message=e,Object(f.a)(t))}}return e.\u0275fac=function(t){return new(t||e)(u.Tb(w.b),u.Tb(E.b),u.Tb(m.a))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac}),e})(),q=(()=>{class e{constructor(e){this.fb=e,this.permanentData={},this.otherCtrls={request_type:[n.o.required,n.o.max(1e7)],unit:[n.o.required,n.o.max(1e7)],username:[n.o.minLength(5),n.o.maxLength(100)],password:[n.o.minLength(5),n.o.maxLength(100)]}}getMyData(e){return this.permanentData[e]}}return e.\u0275fac=function(t){return new(t||e)(u.Tb(n.b))},e.\u0275prov=u.Gb({token:e,factory:e.\u0275fac}),e})();var $=r("5bm+"),I=r("WEao"),O=r("TY4h"),j=r("wczn");function k(e,t){if(1&e&&(u.Pb(0,"h2"),u.xc(1),u.Ob()),2&e){const e=u.ac();u.zb(1),u.yc(" ",e.title," ")}}function G(e,t){if(1&e&&u.Lb(0,"app-resource-unavailable",3),2&e){const e=u.ac();u.gc("error",e.error)}}function F(e,t){if(1&e){const e=u.Qb();u.Nb(0),u.Pb(1,"app-request-entry-create",4),u.Wb("processEntry",function(t){return u.rc(e),u.ac().createEntry(t)}),u.Ob(),u.Mb()}if(2&e){const e=u.ac();u.zb(1),u.gc("system-type",e.systemType)("system-guideline",e.systemGuideline)("view",e.view)("input-file-control",e.fileControl)("attachment-config",e.attachmentConfig)("entry-create-form",e.entryCreateForm)("upload-config-u",e.uploadConfig)}}let x=(()=>{class e{constructor(e,t,r,s,n,i,a,o){this.route=e,this.ts=t,this.router=r,this.grs=s,this.grfs=n,this.recfs=i,this.recs=a,this.ems=o,this.isError=!1,this.fileControl=y,this.uploadConfig=g,this.attachmentConfig={name:"Image",type:"image"}}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.create.systemType,this.systemGuideline=e.create.systemGuideline,this.title=e.create.title,this.view=e.create.view,this.link=e.create.link,this.grs.$systemType=this.systemType,this.route.paramMap.pipe(Object(p.a)(e=>{let t=e.get("request");return this.rslug=t,this.grs.addEntry(t)})).subscribe(e=>{if(null==e)this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message);else if(null!=e&&1==e.permitted){let t=e.$data;this.ts.setTitle(t.title),this.title=t.title,this.entryCreateForm=this.recfs.entryCreateForm(),this.entryCreateForm.addControl("unit",new n.c("",this.grfs.otherCtrls.unit)),this.entryCreateForm.addControl("request_type",new n.c("",this.grfs.otherCtrls.request_type)),this.entryCreateForm.patchValue({unit:t.unit,request_type:t.request_type}),this.entryCreateForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryCreateT)}createEntry(e){this.error=null,this.isError=!1,this.grs.addEntry$(this.rslug,e).subscribe(e=>{null==e?this.recs.isEntryCreated.next(!1):null!=e&&1==e.created&&(this.recs.isEntryCreated.next(!0),this.entryChanges(e))})}entryChanges(e){this.entryCreateT=setTimeout(()=>this.router.navigate(e&&e.slug?["general-request","t",this.rslug]:["general-request","t",this.rslug,"entries"]),5e3)}}return e.\u0275fac=function(t){return new(t||e)(u.Kb(o.a),u.Kb(b.b),u.Kb(o.d),u.Kb(T),u.Kb(q),u.Kb($.a),u.Kb(I.a),u.Kb(m.a))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-gr-entry-create"]],features:[u.yb([m.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"system-type","system-guideline","view","input-file-control","attachment-config","entry-create-form","upload-config-u","processEntry"]],template:function(e,t){1&e&&(u.Pb(0,"div",0),u.vc(1,k,2,1,"h2",1),u.vc(2,G,1,1,"app-resource-unavailable",2),u.vc(3,F,2,7,"ng-container",1),u.Ob()),2&e&&(u.zb(1),u.gc("ngIf",t.title),u.zb(1),u.gc("ngIf",t.isError),u.zb(1),u.gc("ngIf",t.entryCreateForm))},directives:[s.l,O.a,j.a],styles:[""]}),e})(),K={systemType:"General Request",title:"General Request",view:"gr",viewWord:"GeneralRequest",link:"general-request",$link:"general-request",systemGuideline:"request",base:"general-request"};const P={create:Object.assign(Object.assign({},K),{title:"Request review of your semester "+K.systemType})},L=[{path:"",component:h,canActivate:[c.a],canLoad:[c.a],children:[{path:"",canActivateChild:[c.a],children:[{path:"",component:x,data:{create:P.create},canActivate:[l.a]}]}]}];let V=(()=>{class e{}return e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(L)],o.g]}),e})(),z=(()=>{class e{}return e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(t){return new(t||e)},providers:[T,q],imports:[[s.b,n.l,V,a.a,i.a]]}),e})()}}]);