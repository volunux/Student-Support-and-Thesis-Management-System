(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{MNd0:function(e,t,n){"use strict";n.r(t),n.d(t,"RefundCommentModule",function(){return f});var s=n("Yvf7"),a=n("Fk62"),i=n("/zEo"),r=n("7jiy"),l=n("2+2K"),o=n("pWki"),d=n("rA4p"),c=n("8mha"),p=n("41SA");let m={systemType:"Refund Comment",title:"Refund Comment",view:"gen-internal",viewWord:"Refund Comment",link:"refund-comment",$link:"refund-comment",systemGuideline:"gen-internal"};const y={text:"This is a comment"},u={dashboard:Object.assign({},m),create:Object.assign(Object.assign({},m),{title:"Add a "+m.systemType,controlFilters:["status"],noEdit:!1,placeholder:y}),detail:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Detail"}),update:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Update",controlFilters:[],noEdit:!1,placeholder:y}),delete:Object.assign(Object.assign({},m),{title:m.systemType+" Entry Delete",controlFilters:["status"],noEdit:!0,placeholder:y}),deleteAll:Object.assign(Object.assign({},m),{title:m.systemType+" Entries : Delete All"}),entries:Object.assign(Object.assign({},m),{title:m.systemType+" Entries",searchFilters:{status:"Status"}})};var b=n("Ub9n");const h=[{path:"",component:r.a,children:[{path:"",component:l.a,data:{dashboard:u.dashboard}},{path:"entries",component:o.a,data:{entries:u.entries}},{path:"entry/:entry/detail",component:d.a,data:{detail:u.detail}},{path:"entry/:entry/delete",component:c.a,data:{delete:u.delete}},{path:"entry/delete/all",component:p.a,canActivate:[i.a],data:{deleteAll:u.deleteAll}}]}];let g=(()=>{class e{constructor(){}}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(h)],a.g]}),e})();var j=n("rBWn");let f=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[s.b,j.a,g]]}),e})()}}]);