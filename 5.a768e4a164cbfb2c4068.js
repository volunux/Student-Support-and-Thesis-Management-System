(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4jD0":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("8VHZ"),s=n("tTBu"),i=n("Ub9n");let o=(()=>{class t{constructor(t){this.fb=t,this.permanentData={},this.permanentProps={status:[r.o.required,r.o.max(9e7)]},this.otherCtrls={word:[r.o.required,r.o.minLength(3),r.o.maxLength(20)]}}getPermanentProp(t){return this.permanentProps[t]}removeControls(t,e){null!=t&&t.length>0&&t.forEach(t=>e.get(t)?e.removeControl(t):null)}createPermanent(t,e){if(null!=t){for(let n in t){let r=n.toLowerCase();this.permanentData[r]=t[n],e.get(r)&&e.get(r).setValidators([...this.permanentProps[r],Object(s.a)(this.getMyData(r),n)]),e.get(r)&&e.get(r).updateValueAndValidity()}e.updateValueAndValidity()}}getMyData(t){return this.permanentData[t]}}return t.\u0275fac=function(e){return new(e||t)(i.Tb(r.b))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac}),t})()},"5+DG":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("Ub9n"),s=n("Fk62");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-internal-two-homepage"]],decls:1,vars:0,template:function(t,e){1&t&&r.Lb(0,"router-outlet")},directives:[s.h],styles:[""]}),t})()},E1qh:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r=n("jV/k"),s=n("vfyW"),i=n("oECA"),o=n("O6Zd"),a=n("VcWf"),c=n("Ub9n"),l=n("FBrc"),h=n("EUGn");let y=(()=>{class t{constructor(t,e,n){this.http=t,this.apiConfig=e,this.ems=n}getAllEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entries`,{params:t}).pipe(Object(s.a)(t=>console.log(t)),Object(i.a)(this.handleError(this.$systemType+" Entries",null)))}getEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/detail`).pipe(Object(s.a)(t=>console.log(t)),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/create`).pipe(Object(s.a)(t=>console.log(t)),Object(o.a)(t=>({permitted:!0,$data:t})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}addEntry$(t){return this.http.post(`${this.apiConfig.host}/${this.$sa}/entry/create`,t).pipe(Object(s.a)(t=>console.log(t)),Object(o.a)(t=>({created:!0,$data:t})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update/`).pipe(Object(o.a)(t=>({permitted:!0,$data:t})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}updateEntry$(t,e){return this.http.put(`${this.apiConfig.host}/${this.$sa}/entry/${t}/update`,e).pipe(Object(o.a)(t=>({updated:!0,$data:t})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry(t){return this.http.get(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(o.a)(t=>({permitted:!0,$data:t})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}deleteEntry$(t){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/entry/${t}/delete/`).pipe(Object(o.a)(t=>({deleted:!0})),Object(i.a)(this.handleError(this.$systemType+" Entry",null)))}$deleteManyEntry(t){return this.http.patch(`${this.apiConfig.host}/${this.$sa}/delete/entry/many`,{entries:t}).pipe(Object(o.a)(t=>({manyDeleted:!0})),Object(i.a)(this.handleError(this.$systemType+" Entries Delete",null)))}deleteAllEntry(){return this.http.get(`${this.apiConfig.host}/${this.$sa}/delete/entry/all`).pipe(Object(i.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}$deleteAllInternalTwo(){return this.http.delete(`${this.apiConfig.host}/${this.$sa}/delete/entry/all/`).pipe(Object(o.a)(t=>({allDeleted:!0})),Object(i.a)(this.handleError(this.$systemType+" Entry or Entries Delete",null)))}handleError(t="operation",e){return t=>(this.ems.message=t,Object(r.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(l.b),c.Tb(a.b),c.Tb(h.a))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac}),t})()},Gk5b:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("XA6Z"),s=n("EUGn"),i=n("Ub9n"),o=n("Fk62"),a=n("E1qh"),c=n("Yvf7"),l=n("hLGb"),h=n("+ef2"),y=n("TY4h");function u(t,e){if(1&t&&(i.Pb(0,"h2"),i.yc(1),i.Ob()),2&t){const t=i.ac();i.zb(1),i.zc(" ",t.title," ")}}function b(t,e){if(1&t&&i.Lb(0,"app-view-description",4),2&t){const t=i.ac();i.gc("view-type",t.view)("system-type",t.systemType)}}function p(t,e){if(1&t&&i.Lb(0,"app-resource-unavailable",5),2&t){const t=i.ac();i.gc("error",t.error)}}function d(t,e){if(1&t&&(i.Nb(0),i.Pb(1,"tr"),i.Pb(2,"th",6),i.yc(3," Word : "),i.Ob(),i.Pb(4,"td"),i.yc(5),i.Ob(),i.Ob(),i.Mb()),2&t){const t=i.ac();i.zb(5),i.zc(" ",null==t.entry?null:t.entry.word," ")}}let g=(()=>{class t{constructor(t,e,n){this.route=t,this.ems=e,this.its=n,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.detail.systemType,this.title=t.detail.title,this.view=t.detail.view,this.viewWord=t.detail.viewWord,this.link=t.detail.link,this.$link=t.detail.$link,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.route.paramMap.pipe(Object(r.a)(t=>{let e=t.get("entry");return this.its.getEntry(e)})).subscribe(t=>{null==t?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&(this.entry=t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.a),i.Kb(s.a),i.Kb(a.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-two-entry-detail"]],features:[i.yb([s.a])],decls:5,vars:5,consts:[[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"error",4,"ngIf"],[3,"entry"],[3,"view-type","system-type"],[3,"error"],[1,"bold","left"]],template:function(t,e){1&t&&(i.wc(0,u,2,1,"h2",0),i.wc(1,b,1,2,"app-view-description",1),i.wc(2,p,1,1,"app-resource-unavailable",2),i.Pb(3,"app-general-internal-entry-detail",3),i.wc(4,d,6,1,"ng-container",0),i.Ob()),2&t&&(i.gc("ngIf",e.title),i.zb(1),i.gc("ngIf",e.view),i.zb(1),i.gc("ngIf",e.isError),i.zb(1),i.gc("entry",e.entry),i.zb(1),i.gc("ngIf",null==e.entry?null:e.entry.word))},directives:[c.l,l.a,h.a,y.a],styles:[""]}),t})()},NRVt:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("8VHZ"),s=n("XA6Z"),i=n("EUGn"),o=n("Ub9n"),a=n("Fk62"),c=n("E1qh"),l=n("4jD0"),h=n("ZVmh"),y=n("J1zS"),u=n("Yvf7"),b=n("TY4h"),p=n("o+TJ"),d=n("SzYl");function g(t,e){if(1&t&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.zc(" ",t.title," ")}}function f(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",3),2&t){const t=o.ac();o.gc("error",t.error)}}function m(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"div",4),o.Pb(2,"app-general-internal-entry-update",5),o.Wb("processEntry",function(e){return o.rc(t),o.ac().changeEntry(e)}),o.Lb(3,"app-internal-two-form-input",6),o.Ob(),o.Ob(),o.Mb()}if(2&t){const t=o.ac();o.zb(1),o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let w=(()=>{class t{constructor(t,e,n,r,s,i,o){this.route=t,this.router=e,this.its=n,this.iots=r,this.gifs=s,this.giecs=i,this.ems=o,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.update.systemType,this.title=t.update.title,this.view=t.update.view,this.link=t.update.link,this.$link=t.update.$link,this.controlFilters=t.update.controlFilters,this.noEdit=t.update.noEdit,this.placeholder=t.update.placeholder,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.route.paramMap.pipe(Object(s.a)(t=>{let e=t.get("entry");return this.eslug=e,this.its.updateEntry(e)})).subscribe(t=>{if(null==t)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){this.entry=t.$data.Entry;let e=t.$data;this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("word",new r.c("",this.iots.otherCtrls.word)),this.entryForm.patchValue(this.entry),this.eothers=e,this.iots.removeControls(this.controlFilters,this.entryForm),this.iots.createPermanent(e,this.entryForm),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.its.updateEntry$(this.eslug,t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.updated&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get word(){return this.entryForm.get("word")}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(a.a),o.Kb(a.d),o.Kb(c.a),o.Kb(l.a),o.Kb(h.a),o.Kb(y.a),o.Kb(i.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-internal-two-entry-update"]],features:[o.yb([i.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.wc(1,g,2,1,"h2",1),o.wc(2,f,1,1,"app-resource-unavailable",2),o.wc(3,m,4,13,"ng-container",1),o.Ob()),2&t&&(o.zb(1),o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.entryForm))},directives:[u.l,b.a,r.j,r.g,p.a,d.a],styles:[""]}),t})()},PF9a:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("8VHZ"),s=n("XA6Z"),i=n("EUGn"),o=n("Ub9n"),a=n("Fk62"),c=n("E1qh"),l=n("4jD0"),h=n("ZVmh"),y=n("J1zS"),u=n("Yvf7"),b=n("TY4h"),p=n("FL99"),d=n("SzYl");function g(t,e){if(1&t&&(o.Pb(0,"h2"),o.yc(1),o.Ob()),2&t){const t=o.ac();o.zb(1),o.zc(" ",t.title," ")}}function f(t,e){if(1&t&&o.Lb(0,"app-resource-unavailable",2),2&t){const t=o.ac();o.gc("error",t.error)}}function m(t,e){if(1&t){const t=o.Qb();o.Nb(0),o.Pb(1,"div",3),o.Pb(2,"app-general-internal-entry-delete",4),o.Wb("processEntry",function(e){return o.rc(t),o.ac().changeEntry(e)}),o.Lb(3,"app-internal-two-form-input",5),o.Ob(),o.Ob(),o.Mb()}if(2&t){const t=o.ac();o.zb(1),o.gc("formGroup",t.entryForm),o.zb(1),o.gc("system-type",t.systemType)("view",t.view)("entry",t.entry)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),o.zb(1),o.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let w=(()=>{class t{constructor(t,e,n,r,s,i,o){this.route=t,this.router=e,this.its=n,this.iots=r,this.gifs=s,this.giecs=i,this.ems=o,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.delete.systemType,this.title=t.delete.title,this.view=t.delete.view,this.link=t.delete.link,this.$link=t.delete.$link,this.controlFilters=t.delete.controlFilters,this.noEdit=t.delete.noEdit,this.placeholder=t.delete.placeholder,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.route.paramMap.pipe(Object(s.a)(t=>{let e=t.get("entry");return this.eslug=e,this.its.deleteEntry(e)})).subscribe(t=>{null==t?(this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0):null!=t&&1==t.permitted&&(this.entry=t.$data,this.entryForm=this.gifs.entryForm(),this.entryForm.addControl("word",new r.c("",this.iots.otherCtrls.word)),this.entryForm.patchValue(this.entry),this.iots.removeControls(this.controlFilters,this.entryForm))})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.its.deleteEntry$(this.eslug).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.deleted&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get word(){return this.entryForm.get("word")}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(a.a),o.Kb(a.d),o.Kb(c.a),o.Kb(l.a),o.Kb(h.a),o.Kb(y.a),o.Kb(i.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-internal-two-entry-delete"]],features:[o.yb([i.a])],decls:3,vars:3,consts:[[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry","entry-form","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(o.wc(0,g,2,1,"h2",0),o.wc(1,f,1,1,"app-resource-unavailable",1),o.wc(2,m,4,12,"ng-container",0)),2&t&&(o.gc("ngIf",e.title),o.zb(1),o.gc("ngIf",e.isError),o.zb(1),o.gc("ngIf",e.entryForm))},directives:[u.l,b.a,r.j,r.g,p.a,d.a],styles:[""]}),t})()},SzYl:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n("Ub9n"),s=n("8VHZ"),i=n("Yvf7"),o=n("J1Ni");function a(t,e){if(1&t&&(r.Pb(0,"li"),r.yc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.zc(" Word of ",t.systemType," should be provided and cannot be empty ")}}function c(t,e){if(1&t&&(r.Pb(0,"li"),r.yc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.zc(" Word of ",t.systemType," cannot be less than 3 characters in length ")}}function l(t,e){if(1&t&&(r.Pb(0,"li"),r.yc(1),r.Ob()),2&t){const t=r.ac(3);r.zb(1),r.zc(" Word of ",t.systemType," cannot be greater than 20 characters in length ")}}function h(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"ul"),r.wc(2,a,2,1,"li",0),r.wc(3,c,2,1,"li",0),r.wc(4,l,2,1,"li",0),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.gc("@fadeAnimation",void 0),r.zb(2),r.gc("ngIf",null==t.word.errors?null:t.word.errors.required),r.zb(1),r.gc("ngIf",(null==t.word.errors?null:t.word.errors.required)||(null==t.word.errors?null:t.word.errors.minlength)),r.zb(1),r.gc("ngIf",(null==t.word.errors?null:t.word.errors.required)||(null==t.word.errors?null:t.word.errors.maxLength))}}function y(t,e){if(1&t&&(r.Nb(0),r.wc(1,h,5,4,"div",1),r.Mb()),2&t){const t=r.ac();r.zb(1),r.gc("ngIf",t.word.invalid&&(t.word.touched||t.word.dirty))}}let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-internal-two-entry-validator"]],inputs:{systemType:["system-type","systemType"],word:"word"},decls:1,vars:1,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(t,e){1&t&&r.wc(0,y,2,1,"ng-container",0),2&t&&r.gc("ngIf",e.word)},directives:[i.l],styles:[""],data:{animation:[o.a]}}),t})();function b(t,e){if(1&t&&r.Lb(0,"app-internal-two-entry-validator",6),2&t){const t=r.ac(2);r.gc("system-type",t.systemType)("word",t.word)}}function p(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"label",3),r.yc(3," Word * : "),r.Ob(),r.Lb(4,"input",4),r.wc(5,b,1,2,"app-internal-two-entry-validator",5),r.Ob(),r.Mb()),2&t){const t=r.ac();r.zb(4),r.gc("placeholder",null==t.placeholder?null:t.placeholder.word)("readOnly",t.noEdit),r.zb(1),r.gc("ngIf",t.word)}}let d=(()=>{class t{constructor(){}ngOnInit(){}get word(){return this.entryForm.get("word")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-internal-two-form-input"]],inputs:{systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],placeholder:"placeholder",noEdit:["no-edit","noEdit"]},decls:2,vars:2,consts:[[3,"formGroup"],[4,"ngIf"],[1,"form-group"],["for","word",1,"form-label","bold"],["type","text","id","word","required","required","name","word","formControlName","word",1,"form-control",3,"placeholder","readOnly"],[3,"system-type","word",4,"ngIf"],[3,"system-type","word"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.wc(1,p,6,3,"ng-container",1),r.Ob()),2&t&&(r.gc("formGroup",e.entryForm),r.zb(1),r.gc("ngIf",e.word))},directives:[s.j,s.g,i.l,s.a,s.m,s.i,s.e,u],styles:[""]}),t})()},bJ3i:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("Ub9n"),s=n("Fk62"),i=n("Yvf7"),o=n("+ef2");function a(t,e){if(1&t&&(r.Pb(0,"h2"),r.yc(1),r.Ob()),2&t){const t=r.ac();r.zb(1),r.zc(" ",t.title," ")}}function c(t,e){if(1&t&&r.Lb(0,"app-view-description",3),2&t){const t=r.ac();r.gc("system-type",t.systemType)("view-type",t.view)}}const l=function(){return["entry","create"]};function h(t,e){if(1&t&&(r.Pb(0,"li"),r.Pb(1,"a",5),r.yc(2),r.Ob(),r.Ob()),2&t){const t=r.ac(2);r.zb(1),r.gc("routerLink",r.kc(2,l)),r.zb(1),r.zc(" Add a ",t.systemType," ")}}const y=function(){return["entries"]},u=function(){return["entry","delete","all"]};function b(t,e){if(1&t&&(r.Pb(0,"div",4),r.Pb(1,"ul"),r.Pb(2,"li"),r.Pb(3,"a",5),r.yc(4),r.Ob(),r.Ob(),r.wc(5,h,3,3,"li",0),r.Pb(6,"li"),r.Pb(7,"a",5),r.yc(8),r.Ob(),r.Ob(),r.Pb(9,"li"),r.Pb(10,"a",6),r.yc(11),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&t){const t=r.ac();r.zb(3),r.gc("routerLink",r.kc(6,y)),r.zb(1),r.zc(" Manage ",t.systemType," "),r.zb(1),r.gc("ngIf",t.canCreate),r.zb(2),r.gc("routerLink",r.kc(7,u)),r.zb(1),r.zc(" Delete All ",t.systemType," "),r.zb(3),r.zc(" ",t.systemType," Statistics ")}}let p=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.dashboard.systemType,this.title=t.dashboard.title,this.view=t.dashboard.view,this.canCreate=null==t.dashboard.canCreate||t.dashboard.canCreate}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(s.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-internal-two-dashboard"]],decls:3,vars:3,consts:[[4,"ngIf"],[3,"system-type","view-type",4,"ngIf"],["id","dashboard",4,"ngIf"],[3,"system-type","view-type"],["id","dashboard"],[1,"center",3,"routerLink"],["href","#",1,"center"]],template:function(t,e){1&t&&(r.wc(0,a,2,1,"h2",0),r.wc(1,c,1,2,"app-view-description",1),r.wc(2,b,12,8,"div",2)),2&t&&(r.gc("ngIf",e.title),r.zb(1),r.gc("ngIf",e.view),r.zb(1),r.gc("ngIf",e.systemType))},directives:[i.l,o.a,s.f],styles:[""]}),t})()},eQhB:function(t,e,n){"use strict";n.d(e,"a",function(){return M});var r=n("iPJu"),s=n("EUGn"),i=n("9nlD"),o=n("J1Ni"),a=n("Ub9n"),c=n("Fk62"),l=n("Yvf7"),h=n("E1qh"),y=n("yjbJ"),u=n("9Ku7"),b=n("9yhg"),p=n("+ef2"),d=n("Rxsk"),g=n("xlhj"),f=n("RBZI"),m=n("TY4h");function w(t,e){if(1&t&&(a.Pb(0,"h2"),a.yc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.zc(" ",t.title," ")}}function E(t,e){if(1&t&&a.Lb(0,"app-view-description",8),2&t){const t=a.ac();a.gc("view-type",t.view)("system-type",t.systemType)}}function v(t,e){if(1&t){const t=a.Qb();a.Pb(0,"app-notification-screen",9),a.Wb("finished",function(){return a.rc(t),a.ac().removeNotification()}),a.Ob()}if(2&t){const t=a.ac();a.gc("notified",t.notificationAvailable)("message",t.notificationMessage)}}function O(t,e){if(1&t&&a.Lb(0,"app-search",10),2&t){const t=a.ac();a.gc("system-type",t.systemType)("$link",t.$link)("search-filters",t.searchFilters)}}function $(t,e){1&t&&(a.Pb(0,"td",22),a.yc(1," Nil "),a.Ob())}function z(t,e){if(1&t&&(a.Pb(0,"td",28),a.yc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.zc(" ",null==t?null:t.name," ")}}function T(t,e){if(1&t&&(a.Pb(0,"td",22),a.yc(1),a.bc(2,"date"),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.zc(" ",a.dc(2,1,null==t?null:t.updated_on,"longDate")," ")}}function k(t,e){if(1&t&&(a.Pb(0,"td",22),a.yc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.zc(" ",null==t?null:t.word," ")}}function I(t,e){if(1&t&&(a.Pb(0,"td",22),a.yc(1),a.Ob()),2&t){const t=a.ac().$implicit;a.zb(1),a.zc(" ",null==t?null:t.status," ")}}function P(t,e){if(1&t){const t=a.Qb();a.Nb(0),a.Pb(1,"input",33,34),a.Wb("click",function(){a.rc(t);const e=a.qc(2),n=a.ac(3),r=n.$implicit,s=n.index;return a.ac(2).addEntryToDeleteList(null==r?null:r.num,e.checked,s)}),a.Ob(),a.Lb(3,"span",35),a.Mb()}if(2&t){const t=e.$implicit,n=a.ac(3).$implicit;a.zb(1),a.gc("checked",t==(null==n?null:n.num))}}function F(t,e){if(1&t&&(a.Nb(0),a.wc(1,P,4,1,"ng-container",32),a.Mb()),2&t){const t=a.ac(4);a.zb(1),a.gc("ngForOf",t.esdl)}}function L(t,e){if(1&t){const t=a.Qb();a.Pb(0,"input",36,34),a.Wb("click",function(){a.rc(t);const e=a.qc(1),n=a.ac(2),r=n.$implicit,s=n.index;return a.ac(2).addEntryToDeleteList(null==r?null:r.num,e.checked,s)}),a.Ob(),a.Lb(2,"span",35)}}function C(t,e){if(1&t&&(a.Pb(0,"label",29),a.wc(1,F,2,1,"ng-container",30),a.wc(2,L,3,0,"ng-template",null,31,a.xc),a.Ob()),2&t){const t=a.qc(3),e=a.ac(3);a.zb(1),a.gc("ngIf",e.esdl.length)("ngIfElse",t)}}const j=function(t){return["../","entry",t,"detail"]},K=function(t){return["../","entry",t,"update"]},D=function(t){return["../","entry",t,"delete"]};function x(t,e){if(1&t&&(a.Pb(0,"tr"),a.Pb(1,"td",22),a.yc(2),a.Ob(),a.wc(3,$,2,0,"ng-template",null,23,a.xc),a.wc(5,z,2,1,"td",24),a.wc(6,T,3,4,"td",25),a.wc(7,k,2,1,"td",25),a.wc(8,I,2,1,"td",25),a.Pb(9,"td",13),a.Pb(10,"a",26),a.yc(11,"View"),a.Ob(),a.Pb(12,"a",26),a.yc(13,"Update"),a.Ob(),a.Pb(14,"a",26),a.yc(15,"Delete"),a.Ob(),a.wc(16,C,4,2,"label",27),a.Ob(),a.Ob()),2&t){const t=e.$implicit,n=e.index,r=a.qc(4);a.zb(2),a.zc(" ",n+1,". "),a.zb(3),a.gc("ngIf",null==t?null:t.name)("ngIfElse",r),a.zb(1),a.gc("ngIf",null==t?null:t.updated_on)("ngIfElse",r),a.zb(1),a.gc("ngIf",null==t?null:t.word)("ngIfElse",r),a.zb(1),a.gc("ngIf",null==t?null:t.status)("ngIfElse",r),a.zb(2),a.gc("routerLink",a.lc(13,j,null==t?null:t.slug)),a.zb(2),a.gc("routerLink",a.lc(15,K,null==t?null:t.slug)),a.zb(2),a.gc("routerLink",a.lc(17,D,null==t?null:t.slug)),a.zb(2),a.gc("ngIf",!0)}}function A(t,e){if(1&t&&a.Lb(0,"app-pagination",37),2&t){const t=a.ac(2);a.gc("entries-length",t.$entriesLength)("entry-ref",t.$entryRef)("page-number",t.pageNumber)}}function N(t,e){if(1&t&&(a.Pb(0,"div"),a.Pb(1,"table",11),a.Pb(2,"caption",12),a.yc(3," Entries "),a.Ob(),a.Pb(4,"colgroup"),a.Lb(5,"col",13),a.Lb(6,"col",13),a.Lb(7,"col",13),a.Lb(8,"col",13),a.Lb(9,"col",13),a.Lb(10,"col",13),a.Lb(11,"col",13),a.Lb(12,"col",14),a.Ob(),a.Pb(13,"thead"),a.Pb(14,"tr"),a.Pb(15,"th",15),a.yc(16," Index "),a.Ob(),a.Pb(17,"th",16),a.yc(18," Name "),a.Ob(),a.Pb(19,"th",17),a.yc(20," Updated On "),a.Ob(),a.Pb(21,"th",18),a.yc(22," Word "),a.Ob(),a.Pb(23,"th",19),a.yc(24," Status "),a.Ob(),a.Pb(25,"th",12),a.yc(26," Changes "),a.Ob(),a.Ob(),a.Ob(),a.Pb(27,"tbody"),a.wc(28,x,17,19,"tr",20),a.Ob(),a.Pb(29,"tfoot"),a.Pb(30,"tr"),a.Lb(31,"td"),a.Ob(),a.Pb(32,"tr"),a.Lb(33,"td"),a.Ob(),a.Pb(34,"tr"),a.wc(35,A,1,3,"app-pagination",21),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t){const t=a.ac();a.zb(27),a.gc("@listAnimation",t.entries.length),a.zb(1),a.gc("ngForOf",t.entries)("ngForTrackBy",t.trackByNum),a.zb(7),a.gc("ngIf",t.pageNumber)}}function V(t,e){if(1&t&&a.Lb(0,"app-resource-unavailable",38),2&t){const t=a.ac();a.gc("error",t.error)}}let M=(()=>{class t{constructor(t,e,n,r,s,i,o,a){this.route=t,this.location=e,this.its=n,this.gss=r,this.gas=s,this.ems=i,this.ns=o,this.aus=a,this.entries=[],this.isError=!1,this.esdl=[],this.p$esdl=!1,this.pageNumber=1,this.$entriesLength=0,this.entriesSearchedOb=this.gss.entriesSearched$.subscribe(t=>{this.location.replaceState(`/system/internal/${this.link}/entries`),this.pageNumber=1,null==t?(this.entries=[],this.$entriesLength=0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message),this.isError=!0):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t,this.entries.length<=10&&(this.pageNumber=1),this.entries.length>10&&this.entries.pop())}),this.clearSearchOb=this.gss.clearSearch$.subscribe(t=>{this.clearSearch$()}),this.errorExistOb=this.gss.errorExist$.subscribe(t=>{this.isError=t})}searchErr$(t){this.error=null,this.isError=!1}clearSearch$(){this.error=null,this.isError=!1,this.pageNumber=1,this.location.replaceState(`/system/internal/${this.link}/entries`),this.gss.searchCleared.next(!0),this.getAllEntry({})}trackByNum(t,e){return e.num}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.entries.systemType,this.title=t.entries.title,this.view=t.entries.view,this.link=t.entries.link,this.$link=t.entries.link,this.searchFilters=t.entries.searchFilters,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.route.queryParamMap.subscribe(t=>{let e=this.gas.paramProcessor(t,this);return this.getAllEntry(e)})}ngOnDestroy(){null!=this.entriesSearchedOb&&this.entriesSearchedOb.unsubscribe(),null!=this.clearSearchOb&&this.clearSearchOb.unsubscribe(),null!=this.errorExistOb&&this.errorExistOb.unsubscribe()}getAllEntry(t){this.its.getAllEntry(t).subscribe(t=>{null==t?(this.entries=[],this.$entriesLength=0,this.isError=!0,this.error=Object.assign({resource:this.systemType+" Entry or Entries"},this.ems.message)):null!=t&&t.length>0&&(this.error=null,this.isError=!1,this.$entriesLength=t.length,this.entries=t),this.entries.length>10&&this.entries.pop()})}addEntryToDeleteList(t,e,n){this.gas.addEntryToDeleteList(t,e,n,this)}deleteManyEntry(){this.gas.deleteManyEntry(this,this.its)}get notificationAvailable(){return this.ns.notificationStatus()}get notificationMessage(){return this.ns.getNotificationMessage()}removeNotification(){this.ns.removeNotification()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(c.a),a.Kb(l.h),a.Kb(h.a),a.Kb(r.a),a.Kb(y.a),a.Kb(s.a),a.Kb(i.a),a.Kb(u.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-internal-two-entries"]],features:[a.yb([i.a,s.a,r.a])],decls:11,vars:8,consts:[["id","entry-main"],[4,"ngIf"],[3,"view-type","system-type",4,"ngIf"],[3,"notified","message","finished",4,"ngIf"],[1,"search-bar"],[3,"system-type","$link","search-filters",4,"ngIf"],[1,"entry-option","entry-option-small","center",3,"click"],["id","error",3,"error",4,"ngIf"],[3,"view-type","system-type"],[3,"notified","message","finished"],[3,"system-type","$link","search-filters"],[1,"entries"],[1,"bold","left"],[1,""],[1,"changes"],[1,"bold","center","index-2"],[1,"bold","center","name-internal"],[1,"bold","center"],[1,"bold","center","short-code"],[1,"bold","center","status"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"entries-length","entry-ref","page-number",4,"ngIf"],[1,"center"],["nilValue",""],["class","left",4,"ngIf","ngIfElse"],["class","center",4,"ngIf","ngIfElse"],[1,"center","changes-option",3,"routerLink"],["class","changes-mark",4,"ngIf"],[1,"left"],[1,"changes-mark"],[4,"ngIf","ngIfElse"],["normalChecks",""],[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","click"],["checked",""],[1,"checkmark"],["type","checkbox",3,"click"],[3,"entries-length","entry-ref","page-number"],["id","error",3,"error"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.wc(1,w,2,1,"h2",1),a.wc(2,E,1,2,"app-view-description",2),a.wc(3,v,1,2,"app-notification-screen",3),a.Lb(4,"app-list-entry-options"),a.Pb(5,"div",4),a.wc(6,O,1,3,"app-search",5),a.Pb(7,"a",6),a.Wb("click",function(){return e.deleteManyEntry()}),a.yc(8," Delete Many "),a.Ob(),a.Ob(),a.wc(9,N,36,4,"div",1),a.wc(10,V,1,1,"app-resource-unavailable",7),a.Ob()),2&t&&(a.zb(1),a.gc("ngIf",e.title),a.zb(1),a.gc("ngIf",e.view),a.zb(1),a.gc("ngIf",e.notificationAvailable),a.zb(3),a.gc("ngIf",e.systemType),a.zb(1),a.Cb("hide",e.esdl.length<2),a.zb(2),a.gc("ngIf",e.$entriesLength>0),a.zb(1),a.gc("ngIf",e.isError))},directives:[l.l,b.a,p.a,d.a,g.a,l.k,c.f,f.a,m.a],pipes:[l.d],styles:[""],data:{animation:[o.b]}}),t})()},"n44/":function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("Yvf7"),s=n("8VHZ"),i=n("Fk62"),o=n("Ub9n");const a=[];let c=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(a)],i.g]}),t})();var l=n("hxwH"),h=n("kPid"),y=n("gh/l"),u=n("pBQQ"),b=n("mHYI"),p=n("E1qh"),d=n("4jD0");let g=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[d.a,p.a],imports:[[r.b,c,s.l,l.a,h.a,y.a,u.a,b.a]]}),t})()},unfq:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("Ub9n"),s=n("Fk62"),i=n("Yvf7"),o=n("oxaT");function a(t,e){if(1&t&&r.Lb(0,"app-general-all-entry-delete-all",1),2&t){const t=r.ac();r.gc("system-type",t.systemType)("view-word",t.viewWord)("view",t.view)("title",t.title)("link",t.link)("$link",t.$link)}}let c=(()=>{class t{constructor(t){this.route=t}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.deleteAll.systemType,this.viewWord=t.deleteAll.viewWord,this.title=t.deleteAll.title,this.view=t.deleteAll.view,this.link=t.deleteAll.link,this.$link=t.deleteAll.$link}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(s.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-internal-two-entry-delete-all"]],decls:1,vars:1,consts:[[3,"system-type","view-word","view","title","link","$link",4,"ngIf"],[3,"system-type","view-word","view","title","link","$link"]],template:function(t,e){1&t&&r.wc(0,a,1,6,"app-general-all-entry-delete-all",0),2&t&&r.gc("ngIf",e.systemType)},directives:[i.l,o.a],styles:[""]}),t})()},zy3K:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n("8VHZ"),s=n("EUGn"),i=n("Ub9n"),o=n("Fk62"),a=n("E1qh"),c=n("4jD0"),l=n("ZVmh"),h=n("J1zS"),y=n("Yvf7"),u=n("TY4h"),b=n("FL99"),p=n("SzYl");function d(t,e){if(1&t&&(i.Pb(0,"h2"),i.yc(1),i.Ob()),2&t){const t=i.ac();i.zb(1),i.zc(" ",t.title," ")}}function g(t,e){if(1&t&&i.Lb(0,"app-resource-unavailable",3),2&t){const t=i.ac();i.gc("error",t.error)}}function f(t,e){if(1&t){const t=i.Qb();i.Nb(0),i.Pb(1,"div",4),i.Pb(2,"app-general-internal-entry-delete",5),i.Wb("processEntry",function(e){return i.rc(t),i.ac().changeEntry(e)}),i.Lb(3,"app-internal-two-form-input",6),i.Ob(),i.Ob(),i.Mb()}if(2&t){const t=i.ac();i.zb(1),i.gc("formGroup",t.entryForm),i.zb(1),i.gc("system-type",t.systemType)("view",t.view)("entry-form",t.entryForm)("e-others",t.eothers)("placeholder",t.placeholder)("no-edit",t.noEdit)("system-guideline",t.systemGuideline),i.zb(1),i.gc("system-type",t.systemType)("entry-form",t.entryForm)("placeholder",t.placeholder)("no-edit",t.noEdit)}}let m=(()=>{class t{constructor(t,e,n,r,s,i,o){this.route=t,this.router=e,this.its=n,this.iots=r,this.gifs=s,this.giecs=i,this.ems=o,this.isError=!1}ngOnInit(){let t=this.route.snapshot.data;this.systemType=t.create.systemType,this.title=t.create.title,this.view=t.create.view,this.link=t.create.link,this.$link=t.create.$link,this.controlFilters=t.create.controlFilters,this.noEdit=t.create.noEdit,this.placeholder=t.create.placeholder,this.its.$systemType=this.systemType,this.its.$sa=this.$link,this.its.addEntry().subscribe(t=>{if(null==t)this.error=Object.assign({resource:this.systemType+" Entry"},this.ems.message),this.isError=!0;else if(null!=t&&1==t.permitted){let e=t.$data;this.eothers=e,this.entryForm=this.gifs.entryForm(),this.iots.createPermanent(e,this.entryForm),this.iots.removeControls(this.controlFilters,this.entryForm),this.entryForm.addControl("word",new r.c("",this.iots.otherCtrls.word)),this.entryForm.updateValueAndValidity()}})}ngOnDestroy(){clearTimeout(this.entryChangesT)}changeEntry(t){this.error=null,this.isError=!1,this.its.addEntry$(t).subscribe(t=>{null==t?this.giecs.isEntryChanged.next(!1):null!=t&&1==t.created&&(this.giecs.isEntryChanged.next(!0),this.entryChanges(t))})}entryChanges(t){this.entryChangesT=setTimeout(()=>this.router.navigate(["system","internal",this.link,"entries"]),5e3)}get word(){return this.entryForm.get("word")}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.a),i.Kb(o.d),i.Kb(a.a),i.Kb(c.a),i.Kb(l.a),i.Kb(h.a),i.Kb(s.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-internal-two-entry-create"]],features:[i.yb([s.a])],decls:4,vars:3,consts:[["id","entry-create"],[4,"ngIf"],[3,"error",4,"ngIf"],[3,"error"],[3,"formGroup"],[3,"system-type","view","entry-form","e-others","placeholder","no-edit","system-guideline","processEntry"],[3,"system-type","entry-form","placeholder","no-edit"]],template:function(t,e){1&t&&(i.Pb(0,"div",0),i.wc(1,d,2,1,"h2",1),i.wc(2,g,1,1,"app-resource-unavailable",2),i.wc(3,f,4,12,"ng-container",1),i.Ob()),2&t&&(i.zb(1),i.gc("ngIf",e.title),i.zb(1),i.gc("ngIf",e.isError),i.zb(1),i.gc("ngIf",e.entryForm))},directives:[y.l,u.a,r.j,r.g,b.a,p.a],styles:[""]}),t})()}}]);