(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{MPzu:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfileEntryUpdateSignatureModule",function(){return C});var n=i("Yvf7"),s=i("hxwH"),r=i("M35K"),a=i("8yhi"),o=i("Fk62"),c=i("jiyY"),p=i("Ub9n");let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Eb({type:e,selectors:[["app-p-entry-update-s-home"]],decls:1,vars:0,template:function(e,t){1&e&&p.Lb(0,"router-outlet")},directives:[o.h],styles:[""]}),e})();var l=i("8VHZ");let h=(()=>{class e{constructor(){this.$controls=[{label:"Signature",key:"signature",accepts:"image/*",controlType:"file"}],this.uploadConfigUrl={add:"user/entry/change-signature",remove:"o/user-signature",sign:"o/sign/user-signature"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p.Gb({token:e,factory:e.\u0275fac}),e})();var m=i("bhAK"),d=i("+ef2"),y=i("RvSM");function f(e,t){if(1&e&&(p.Pb(0,"h2"),p.xc(1),p.Ob()),2&e){const e=p.ac();p.zb(1),p.yc(" ",e.title," ")}}function g(e,t){if(1&e&&p.Lb(0,"app-view-description",6),2&e){const e=p.ac();p.gc("view-type",e.view)}}function b(e,t){if(1&e){const e=p.Qb();p.Pb(0,"app-attachment-upload",7,8),p.Wb("myFile",function(t){return p.rc(e),p.ac().pushFile(t)}),p.Ob()}if(2&e){const e=t.$implicit,i=t.index,n=p.ac();p.gc("theControl",e.key)("theForm",n.entryForm)("myProps",e)("myNumber",i+1)("attachment-name",n.attachmentConfig.name)("attachment-type",n.attachmentConfig.type)("end-points",n.uploadConfigU)}}let v=(()=>{class e{constructor(e,t){this.route=e,this.peusfcs=t,this.systemType="User",this.viewWord="User",this.systemGuideline="file",this.title="Update Signature",this.view="cppas",this.link="profile",this.$myFiles=[],this.attachmentConfig={name:"Image",type:"image"},this.entryForm=new l.f({upload:new l.c("",[l.o.required])})}ngOnInit(){let e=this.route.snapshot.data;this.systemType=e.signature.systemType,this.systemGuideline=e.signature.systemGuideline,this.title=e.signature.title,this.view=e.signature.view,this.viewWord=e.signature.viewWord,this.link=e.signature.link,this.$controls=this.peusfcs.$controls,this.uploadConfigU=this.peusfcs.uploadConfigUrl}pushFile(e){this.$myFiles.push(e)}}return e.\u0275fac=function(t){return new(t||e)(p.Kb(o.a),p.Kb(h))},e.\u0275cmp=p.Eb({type:e,selectors:[["app-p-entry-update-s"]],decls:6,vars:4,consts:[[4,"ngIf"],["id","update-profile"],[3,"view-type",4,"ngIf"],["id","guidelines"],[3,"system-guideline"],[3,"theControl","theForm","myProps","myNumber","attachment-name","attachment-type","end-points","myFile",4,"ngFor","ngForOf"],[3,"view-type"],[3,"theControl","theForm","myProps","myNumber","attachment-name","attachment-type","end-points","myFile"],["attachments",""]],template:function(e,t){1&e&&(p.vc(0,f,2,1,"h2",0),p.Pb(1,"div",1),p.vc(2,g,1,1,"app-view-description",2),p.Pb(3,"div",3),p.Lb(4,"app-request-entry-create-file-guideline",4),p.Ob(),p.vc(5,b,2,7,"app-attachment-upload",5),p.Ob()),2&e&&(p.gc("ngIf",t.title),p.zb(2),p.gc("ngIf",t.view),p.zb(2),p.gc("system-guideline",t.systemGuideline),p.zb(1),p.gc("ngForOf",t.$controls))},directives:[n.l,m.a,n.k,d.a,y.a],styles:[""]}),e})();const w={signature:Object.assign({},{systemType:"User",title:"Update Signature",view:"cppas",viewWord:"User",link:"profile",$link:"user",systemGuideline:"file",base:"user"})},F=[{path:"",component:u,canActivate:[c.a],canLoad:[c.a],children:[{path:"",canActivateChild:[c.a],children:[{path:"",component:v,data:{signature:w.signature}}]}]}];let k=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(F)],o.g]}),e})(),C=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},providers:[h],imports:[[n.b,k,s.a,r.a,a.a]]}),e})()}}]);