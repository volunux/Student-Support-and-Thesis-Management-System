(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{U6G5:function(e,t,n){"use strict";n.r(t),n.d(t,"InternalModule",function(){return P});var a=n("Yvf7"),l=n("Fk62"),r=n("jiyY"),o=n("5kR8"),i=n("ikh+"),s=n("Ub9n");function u(e,t){if(1&e&&(s.Pb(0,"h2"),s.xc(1),s.Ob()),2&e){const e=s.ac();s.zb(1),s.yc(" ",e.title," ")}}const d=function(e){return["./",e]};function h(e,t){if(1&e&&(s.Pb(0,"li"),s.Pb(1,"a",2),s.xc(2),s.Ob(),s.Ob()),2&e){const e=t.$implicit;s.zb(1),s.gc("routerLink",s.lc(2,d,e.key)),s.zb(1),s.yc(" ",e.value," ")}}function c(e,t){if(1&e&&(s.Nb(0),s.vc(1,h,3,4,"li",3),s.bc(2,"keyvalue"),s.Mb()),2&e){const e=s.ac();s.zb(1),s.gc("ngForOf",s.cc(2,1,e.entries))}}const p=function(){return["/account/","profile"]};let m=(()=>{class e{constructor(){this.title="Internal Dashboard",this.entries={country:"Country",department:"Department",faculty:"Faculty",level:"Level","payment-type":"Payment Type","payment-session":"Payment Session","payment-status":"Payment Status","refund-comment":"Refund Comment","refund-letter":"Refund Letter","refund-signature":"Refund Signature","refund-stage":"Refund Stage","general-request-status":"Request Status","request-type":"Request Type","general-request-comment":"General Request Comment","request-credential":"Request Credential",reply:"Reply","user-role":"User Role",unit:"Unit",user:"User","user-upload":"General Upload","user-signature":"User Signature","user-photo":"User Photo","user-status":"User Status"}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-internal-dashboard"]],decls:9,vars:4,consts:[[4,"ngIf"],["id","dashboard"],[1,"center",3,"routerLink"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.vc(0,u,2,1,"h2",0),s.Pb(1,"p"),s.xc(2," Only Administrators and Moderators are allowed to perform an action within this part of the system. Anybody with a privilege less than an Administrator and Moderator are not allowed or permitted to make permanent or temporary changes to the records available in the system. In this dashboard, the Administrator and Moderator will be able to monitor and evaluate entries that are specifically meant for internal decision making to drive the development of the system and entries that have been made by the user for the purpose the system have been created for. "),s.Ob(),s.Pb(3,"div",1),s.Pb(4,"ul"),s.vc(5,c,3,3,"ng-container",0),s.Pb(6,"li"),s.Pb(7,"a",2),s.xc(8," Profile "),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.gc("ngIf",t.title),s.zb(5),s.gc("ngIf",t.entries),s.zb(2),s.gc("routerLink",s.kc(3,p)))},directives:[a.l,l.f,a.k],pipes:[a.f],styles:[""]}),e})();var b=n("J1Ni");const f=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}getAnimationData(e){return e&&e.activatedRouteData&&e.activatedRouteData.animation}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-internal"]],decls:3,vars:1,consts:[["routerOutlet","outlet"]],template:function(e,t){if(1&e&&(s.Pb(0,"div"),s.Lb(1,"router-outlet",null,0),s.Ob()),2&e){const e=s.qc(2);s.gc("@routeAnimation",t.getAnimationData(e))}},directives:[l.h],styles:[""],data:{animation:[b.c]}}),e})(),canActivate:[r.a,i.a,o.a],canLoad:[r.a,i.a,o.a],children:[{path:"",canActivateChild:[r.a,i.a,o.a],children:[{path:"",component:m},{path:"country",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(33)]).then(n.bind(null,"63eC")).then(e=>e.CountryModule)},{path:"faculty",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(34)]).then(n.bind(null,"LXD8")).then(e=>e.FacultyModule)},{path:"level",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(35)]).then(n.bind(null,"9wAj")).then(e=>e.LevelModule)},{path:"payment-session",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(36)]).then(n.bind(null,"ezFT")).then(e=>e.PaymentSessionModule)},{path:"payment-type",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(37)]).then(n.bind(null,"mh4J")).then(e=>e.PaymentTypeModule)},{path:"refund-stage",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(38)]).then(n.bind(null,"9287")).then(e=>e.RefundStageModule)},{path:"unit",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(39)]).then(n.bind(null,"Cuey")).then(e=>e.UnitModule)},{path:"general-request-status",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(43)]).then(n.bind(null,"0V1E")).then(e=>e.GeneralRequestStatusModule)},{path:"payment-status",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(44)]).then(n.bind(null,"72si")).then(e=>e.PaymentStatusModule)},{path:"general-status",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(45)]).then(n.bind(null,"DppP")).then(e=>e.StatusModule)},{path:"user-role",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(46)]).then(n.bind(null,"qJR5")).then(e=>e.UserRoleModule)},{path:"user-status",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(47)]).then(n.bind(null,"QIz/")).then(e=>e.UserStatusModule)},{path:"general-request-comment",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(8),n.e(40)]).then(n.bind(null,"bhWz")).then(e=>e.GeneralRequestCommentModule)},{path:"refund-comment",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(8),n.e(41)]).then(n.bind(null,"MNd0")).then(e=>e.RefundCommentModule)},{path:"reply",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(8),n.e(42)]).then(n.bind(null,"1PmC")).then(e=>e.ReplyModule)},{path:"department",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(31)]).then(n.bind(null,"bfZe")).then(e=>e.DepartmentModule)},{path:"refund-signature",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,"dtd9")).then(e=>e.RefundSignatureModule)},{path:"request-type",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(32)]).then(n.bind(null,"5L02")).then(e=>e.RequestTypeModule)},{path:"request-credential",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,"K1fT")).then(e=>e.RequestCredentialModule)},{path:"user",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(10),n.e(18)]).then(n.bind(null,"Zi4T")).then(e=>e.UserModule)},{path:"user-upload",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(24)]).then(n.bind(null,"6/ph")).then(e=>e.UserUploadModule)}]}]}];let y=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[l.g.forChild(f)],l.g]}),e})(),P=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[],imports:[[a.b,y]]}),e})()}}]);