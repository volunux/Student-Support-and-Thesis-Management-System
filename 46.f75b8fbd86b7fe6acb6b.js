(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{qJR5:function(e,t,n){"use strict";n.r(t),n.d(t,"UserRoleModule",function(){return f});var a=n("Yvf7"),s=n("Fk62"),r=n("/zEo"),i=n("5+DG"),o=n("bJ3i"),l=n("zy3K"),d=n("eQhB"),c=n("Gk5b"),p=n("NRVt"),y=n("PF9a"),b=n("unfq");let m={systemType:"User Role",title:"User Role",view:"gen-internal",viewWord:"User Role",link:"user-role",$link:"user-role",systemGuideline:"gen-internal"};const u={name:"student",description:"A primary member of the system",word:"Student"},h={dashboard:Object.assign({},m),create:Object.assign(Object.assign({},m),{title:"Add a "+m.systemType,controlFilters:["status","description"],noEdit:!1,placeholder:u}),detail:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Update",controlFilters:[],noEdit:!1,placeholder:u}),delete:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Delete",controlFilters:["description","status"],noEdit:!0,placeholder:u}),deleteAll:Object.assign(Object.assign({},m),{title:m.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},m),{title:m.systemType+" Entries",searchFilters:{word:"Word",name:"Name",status:"Status"}})};var g=n("Ub9n");const j=[{path:"",component:i.a,children:[{path:"",component:o.a,data:{dashboard:h.dashboard}},{path:"entry/create",component:l.a,data:{create:h.create}},{path:"entries",component:d.a,data:{entries:h.entries}},{path:"entry/:entry/detail",component:c.a,data:{detail:h.detail}},{path:"entry/:entry/update",component:p.a,data:{update:h.update}},{path:"entry/:entry/delete",component:y.a,data:{delete:h.delete}},{path:"entry/delete/all",component:b.a,canActivate:[r.a],data:{deleteAll:h.deleteAll}}]}];let O=(()=>{class e{constructor(){}}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(j)],s.g]}),e})();var w=n("n44/");let f=(()=>{class e{}return e.\u0275mod=g.Ib({type:e}),e.\u0275inj=g.Hb({factory:function(t){return new(t||e)},providers:[],imports:[[a.b,w.a,O]]}),e})()}}]);