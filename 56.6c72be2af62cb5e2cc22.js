(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{DppP:function(t,e,a){"use strict";a.r(e),a.d(e,"StatusModule",function(){return w});var n=a("Yvf7"),s=a("Fk62"),i=a("/zEo"),r=a("5+DG"),l=a("bJ3i"),o=a("zy3K"),c=a("eQhB"),d=a("Gk5b"),p=a("NRVt"),y=a("PF9a"),u=a("unfq");let b={systemType:"Status",title:"Status",view:"gen-internal",viewWord:"Status",link:"status",$link:"status",systemGuideline:"gen-internal"};const m={name:"active",description:"An entry that is currently active and available",word:"Active"},h={dashboard:Object.assign({},b),create:Object.assign(Object.assign({},b),{title:"Add a "+b.systemType,controlFilters:["status","description"],noEdit:!1,placeholder:m}),detail:Object.assign(Object.assign({},b),{title:b.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},b),{title:b.systemType+" Entry Update",controlFilters:["status"],noEdit:!1,placeholder:m}),delete:Object.assign(Object.assign({},b),{title:b.systemType+" Entry Delete",controlFilters:["description","status"],noEdit:!0,placeholder:m}),deleteAll:Object.assign(Object.assign({},b),{title:b.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},b),{title:b.systemType+" Entries",searchFilters:{name:"Name"}})};var g=a("Ub9n");const j=[{path:"",component:r.a,children:[{path:"",component:l.a,data:{dashboard:h.dashboard}},{path:"entry/create",component:o.a,data:{create:h.create}},{path:"entries",component:c.a,data:{entries:h.entries}},{path:"entry/:entry/detail",component:d.a,data:{detail:h.detail}},{path:"entry/:entry/update",component:p.a,data:{update:h.update}},{path:"entry/:entry/delete",component:y.a,data:{delete:h.delete}},{path:"entry/delete/all",component:u.a,canActivate:[i.a],data:{deleteAll:h.deleteAll}}]}];let O=(()=>{class t{constructor(){}}return t.\u0275mod=g.Ib({type:t}),t.\u0275inj=g.Hb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(j)],s.g]}),t})();var v=a("n44/");let w=(()=>{class t{}return t.\u0275mod=g.Ib({type:t}),t.\u0275inj=g.Hb({factory:function(e){return new(e||t)},providers:[],imports:[[n.b,v.a,O]]}),t})()}}]);