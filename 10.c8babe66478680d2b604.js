(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1NK+":function(e,n,t){"use strict";function r(){return e=>["123456789","1234567890","12345","abcdef"].indexOf(""+e.value)>-1?{simplePassword:{value:e.value}}:null}function l(){return e=>{let n=e.get("new_password")?e.get("new_password").value:null,t=e.get("confirm_password")?e.get("confirm_password"):null;if(n||(n=e.get("password")?e.get("password").value:null),t)return t.setErrors(t.value!=n?{confirm_password:!0,required:!0,minLength:!0,maxLength:!0}:null),null}}function i(){return e=>{let n=e.get("new_password")?e.get("new_password").value:null,t=e.get("new_password")?e.get("new_password"):null;if(n||(n=e.get("password")?e.get("password").value:null),t)return t.setErrors(t.value==n?{currentAndNew:!0,required:!0,minLength:!0,maxLength:!0}:null),null}}t.d(n,"c",function(){return r}),t.d(n,"a",function(){return l}),t.d(n,"b",function(){return i})},AWkT:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t("Ub9n");let l=(()=>{class e{constructor(e){this.el=e}lowercase(e){let n=this.el.nativeElement.value.replace(/\s+/g,"").toLowerCase();this.el.nativeElement.value=n}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(r.Kb(r.l))},e.\u0275dir=r.Fb({type:e,selectors:[["","appLowercase",""]],hostBindings:function(e,n){1&e&&r.Wb("blur",function(){return n.lowercase()})}}),e})()},DBaV:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t("Yvf7"),l=t("8VHZ"),i=t("Ub9n");let o=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(n){return new(n||e)},imports:[[r.b,l.n]]}),e})()},KDoO:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t("jV/k"),l=t("70cc"),i=t("WKA6"),o=t("XRyL"),c=t("XA6Z"),a=t("O6Zd"),u=t("qIlG"),s=t("oECA");function b(e,n,t,b){return e=>{if(!e.dirty)return Object(r.a)(null);let t=`${b.host}/confirm/username/${e.value}`,f={UsernameService:{value:e.value}},g=null;return e.valueChanges.pipe(Object(l.a)(e=>e!=g),Object(i.a)(1),Object(o.a)(2e3),Object(c.a)(e=>(g=e,n.get(t))),Object(a.a)(e=>e.isAvailable?null:f),Object(u.a)(),Object(s.a)(e=>Object(r.a)(f)))}}},UZWM:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t("Yvf7"),l=t("Ub9n");let i=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(n){return new(n||e)},imports:[[r.b]]}),e})()},ikjD:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t("jV/k"),l=t("70cc"),i=t("WKA6"),o=t("XRyL"),c=t("XA6Z"),a=t("O6Zd"),u=t("qIlG"),s=t("oECA");function b(e,n,t,b){return e=>{if(!e.dirty)return Object(r.a)(null);let t=`${b.host}/confirm/emailaddress/${e.value}`,f={EmailAddressService:{value:e.value}},g=null;return e.valueChanges.pipe(Object(l.a)(e=>e!=g),Object(i.a)(1),Object(o.a)(2e3),Object(c.a)(e=>(g=e,n.get(t))),Object(a.a)(e=>e.isAvailable?null:f),Object(u.a)(),Object(s.a)(e=>Object(r.a)(f)))}}},tTBu:function(e,n,t){"use strict";function r(e,n){return t=>{let r=t.value,l=e.map(e=>e._id);return"number"==typeof l[0]&&(r=+r),""!=r&&l.indexOf(r)<0?{[n]:{value:r,name:n}}:null}}t.d(n,"a",function(){return r})},vko6:function(e,n,t){"use strict";t.d(n,"a",function(){return Re});var r=t("J1Ni"),l=t("Ub9n"),i=t("Yvf7"),o=t("8VHZ");function c(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" About ",e.systemType," should be provided and cannot be empty ")}}function a(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" About ",e.systemType," cannot be less than 9 characters in length ")}}function u(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" About ",e.systemType," cannot be greater than 300 characters in length ")}}function s(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,c,2,1,"li",0),l.vc(3,a,2,1,"li",0),l.vc(4,u,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.about.errors?null:e.about.errors.required),l.zb(1),l.gc("ngIf",(null==e.about.errors?null:e.about.errors.required)||(null==e.about.errors?null:e.about.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.about.errors?null:e.about.errors.required)||(null==e.about.errors?null:e.about.errors.maxlength))}}function b(e,n){if(1&e&&(l.Nb(0),l.vc(1,s,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.about.invalid&&(e.about.touched||e.about.dirty))}}function f(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Department of ",e.systemType," should be provided and cannot be empty ")}}function g(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Department of ",e.systemType," cannot be greater than specified length ")}}function d(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Department of ",e.systemType," should be available from existing record before it can be considered valid ")}}function m(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,f,2,1,"li",0),l.vc(3,g,2,1,"li",0),l.vc(4,d,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.department.errors?null:e.department.errors.required),l.zb(1),l.gc("ngIf",null==e.department.errors?null:e.department.errors.max),l.zb(1),l.gc("ngIf",null==e.department.errors?null:e.department.errors.Department)}}function y(e,n){if(1&e&&(l.Nb(0),l.vc(1,m,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.department.invalid&&(e.department.touched||e.department.dirty))}}function p(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Faculty of ",e.systemType," should be provided and cannot be empty ")}}function v(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Faculty of ",e.systemType," cannot be greater than specified length ")}}function O(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Faculty of ",e.systemType," should be available from existing record before it can be considered valid ")}}function h(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,p,2,1,"li",0),l.vc(3,v,2,1,"li",0),l.vc(4,O,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.faculty.errors?null:e.faculty.errors.required),l.zb(1),l.gc("ngIf",null==e.faculty.errors?null:e.faculty.errors.max),l.zb(1),l.gc("ngIf",null==e.faculty.errors?null:e.faculty.errors.Faculty)}}function z(e,n){if(1&e&&(l.Nb(0),l.vc(1,h,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.faculty.invalid&&(e.faculty.touched||e.faculty.dirty))}}function _(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Country of ",e.systemType," should be provided and cannot be empty ")}}function I(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Country of ",e.systemType," cannot be greater than specified length ")}}function P(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Country of ",e.systemType," should be available from existing record before it can be considered valid ")}}function x(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,_,2,1,"li",0),l.vc(3,I,2,1,"li",0),l.vc(4,P,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.country.errors?null:e.country.errors.required),l.zb(1),l.gc("ngIf",null==e.country.errors?null:e.country.errors.max),l.zb(1),l.gc("ngIf",null==e.country.errors?null:e.country.errors.Country)}}function j(e,n){if(1&e&&(l.Nb(0),l.vc(1,x,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.country.invalid&&(e.country.touched||e.country.dirty))}}function T(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Level of ",e.systemType," should be provided and cannot be empty ")}}function w(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Level of ",e.systemType," cannot be greater than specified length ")}}function N(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Level of ",e.systemType," should be available from existing record before it can be considered valid ")}}function q(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,T,2,1,"li",0),l.vc(3,w,2,1,"li",0),l.vc(4,N,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.level.errors?null:e.level.errors.required),l.zb(1),l.gc("ngIf",null==e.level.errors?null:e.level.errors.max),l.zb(1),l.gc("ngIf",null==e.level.errors?null:e.level.errors.Level)}}function L(e,n){if(1&e&&(l.Nb(0),l.vc(1,q,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.level.invalid&&(e.level.touched||e.level.dirty))}}function F(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Unit of ",e.systemType," should be provided and cannot be empty ")}}function A(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Unit of ",e.systemType," cannot be greater than specified length ")}}function C(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Unit of ",e.systemType," should be available from existing record before it can be considered valid ")}}function M(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,F,2,1,"li",0),l.vc(3,A,2,1,"li",0),l.vc(4,C,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.unit.errors?null:e.unit.errors.required),l.zb(1),l.gc("ngIf",null==e.unit.errors?null:e.unit.errors.max),l.zb(1),l.gc("ngIf",null==e.unit.errors?null:e.unit.errors.Unit)}}function E(e,n){if(1&e&&(l.Nb(0),l.vc(1,M,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.unit.invalid&&(e.unit.touched||e.unit.dirty))}}function U(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Role of ",e.systemType," should be provided and cannot be empty ")}}function R(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Role of ",e.systemType," cannot be greater than specified length ")}}function $(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Role of ",e.systemType," should be available from existing record before it can be considered valid ")}}function k(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Role of ",e.systemType," cannot be greater than 30 characters in length ")}}function D(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,U,2,1,"li",0),l.vc(3,R,2,1,"li",0),l.vc(4,$,2,1,"li",0),l.vc(5,k,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.role.errors?null:e.role.errors.required),l.zb(1),l.gc("ngIf",null==e.role.errors?null:e.role.errors.max),l.zb(1),l.gc("ngIf",null==e.role.errors?null:e.role.errors.Role),l.zb(1),l.gc("ngIf",(null==e.about.errors?null:e.about.errors.required)||(null==e.about.errors?null:e.about.errors.maxlength))}}function W(e,n){if(1&e&&(l.Nb(0),l.vc(1,D,6,5,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.role.invalid&&(e.role.touched||e.role.dirty))}}function S(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Status of ",e.systemType," should be provided and cannot be empty ")}}function Z(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Status of ",e.systemType," cannot be greater than specified length ")}}function J(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Status of ",e.systemType," should be available from existing record before it can be considered valid ")}}function K(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,S,2,1,"li",0),l.vc(3,Z,2,1,"li",0),l.vc(4,J,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.status.errors?null:e.status.errors.required),l.zb(1),l.gc("ngIf",null==e.status.errors?null:e.status.errors.max),l.zb(1),l.gc("ngIf",null==e.status.errors?null:e.status.errors.Status)}}function G(e,n){if(1&e&&(l.Nb(0),l.vc(1,K,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.status.invalid&&(e.status.touched||e.status.dirty))}}function H(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Identity Number of ",e.systemType," should be provided and cannot be empty ")}}function V(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Identity Number of ",e.systemType," cannot be less than 2 characters in length ")}}function B(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Identity Number of ",e.systemType," cannot be greater than 30 characters in length ")}}function X(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,H,2,1,"li",0),l.vc(3,V,2,1,"li",0),l.vc(4,B,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",null==e.identity_number.errors?null:e.identity_number.errors.required),l.zb(1),l.gc("ngIf",(null==e.identity_number.errors?null:e.identity_number.errors.required)||(null==e.identity_number.errors?null:e.identity_number.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.identity_number.errors?null:e.identity_number.errors.required)||(null==e.identity_number.errors?null:e.identity_number.errors.maxlength))}}function Y(e,n){if(1&e&&(l.Nb(0),l.vc(1,X,5,4,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.identity_number.invalid&&(e.identity_number.touched||e.identity_number.dirty))}}function Q(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Matriculation Number of ",e.systemType," cannot be less than 2 characters in length ")}}function ee(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Matriculation Number of ",e.systemType," cannot be greater than 30 characters in length ")}}function ne(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,Q,2,1,"li",0),l.vc(3,ee,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",(null==e.matriculation_number.errors?null:e.matriculation_number.errors.required)||(null==e.matriculation_number.errors?null:e.matriculation_number.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.matriculation_number.errors?null:e.matriculation_number.errors.required)||(null==e.matriculation_number.errors?null:e.matriculation_number.errors.maxlength))}}function te(e,n){if(1&e&&(l.Nb(0),l.vc(1,ne,4,3,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.matriculation_number.invalid&&(e.matriculation_number.touched||e.matriculation_number.dirty))}}function re(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Jamb Registration Number of ",e.systemType," cannot be less than 2 characters in length ")}}function le(e,n){if(1&e&&(l.Pb(0,"li"),l.xc(1),l.Ob()),2&e){const e=l.ac(3);l.zb(1),l.yc(" Jamb Registration Number of ",e.systemType," cannot be greater than 30 characters in length ")}}function ie(e,n){if(1&e&&(l.Pb(0,"div",2),l.Pb(1,"ul"),l.vc(2,re,2,1,"li",0),l.vc(3,le,2,1,"li",0),l.Ob(),l.Ob()),2&e){const e=l.ac(2);l.gc("@fadeAnimation",void 0),l.zb(2),l.gc("ngIf",(null==e.jamb_registration_number.errors?null:e.jamb_registration_number.errors.required)||(null==e.jamb_registration_number.errors?null:e.jamb_registration_number.errors.minlength)),l.zb(1),l.gc("ngIf",(null==e.jamb_registration_number.errors?null:e.jamb_registration_number.errors.required)||(null==e.jamb_registration_number.errors?null:e.jamb_registration_number.errors.maxlength))}}function oe(e,n){if(1&e&&(l.Nb(0),l.vc(1,ie,4,3,"div",1),l.Mb()),2&e){const e=l.ac();l.zb(1),l.gc("ngIf",e.jamb_registration_number.invalid&&(e.jamb_registration_number.touched||e.jamb_registration_number.dirty))}}let ce=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Eb({type:e,selectors:[["app-user-other-field-validator"]],inputs:{about:"about",faculty:"faculty",department:"department",level:"level",unit:"unit",country:"country",role:"role",status:"status",matriculation_number:["matriculation-number","matriculation_number"],identity_number:["identity-number","identity_number"],jamb_registration_number:["jamb-registration-number","jamb_registration_number"]},decls:11,vars:11,consts:[[4,"ngIf"],["class","validation-error",4,"ngIf"],[1,"validation-error"]],template:function(e,n){1&e&&(l.vc(0,b,2,1,"ng-container",0),l.vc(1,y,2,1,"ng-container",0),l.vc(2,z,2,1,"ng-container",0),l.vc(3,j,2,1,"ng-container",0),l.vc(4,L,2,1,"ng-container",0),l.vc(5,E,2,1,"ng-container",0),l.vc(6,W,2,1,"ng-container",0),l.vc(7,G,2,1,"ng-container",0),l.vc(8,Y,2,1,"ng-container",0),l.vc(9,te,2,1,"ng-container",0),l.vc(10,oe,2,1,"ng-container",0)),2&e&&(l.gc("ngIf",n.about),l.zb(1),l.gc("ngIf",n.department),l.zb(1),l.gc("ngIf",n.faculty),l.zb(1),l.gc("ngIf",n.country),l.zb(1),l.gc("ngIf",n.level),l.zb(1),l.gc("ngIf",n.unit),l.zb(1),l.gc("ngIf",n.role),l.zb(1),l.gc("ngIf",n.status),l.zb(1),l.gc("ngIf",n.identity_number),l.zb(1),l.gc("ngIf",n.matriculation_number),l.zb(1),l.gc("ngIf",n.jamb_registration_number))},directives:[i.l],styles:[""],data:{animation:[r.a]}}),e})();function ae(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",8),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("about",e.about)}}function ue(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",5),l.xc(3," About * : "),l.Ob(),l.Lb(4,"textarea",6),l.vc(5,ae,1,2,"app-user-other-field-validator",7),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(1),l.gc("ngIf",e.about)}}function se(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.name," ")}}function be(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",14),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("faculty",e.faculty)}}function fe(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",9),l.xc(3," Faculty * : "),l.Ob(),l.Pb(4,"select",10),l.Lb(5,"option",11),l.vc(6,se,2,2,"option",12),l.Ob(),l.vc(7,be,1,2,"app-user-other-field-validator",13),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.faculties),l.zb(1),l.gc("ngIf",e.faculty)}}function ge(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.name," ")}}function de(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",18),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("department",e.department)}}function me(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",15),l.xc(3," Department * : "),l.Ob(),l.Pb(4,"select",16),l.Lb(5,"option",11),l.vc(6,ge,2,2,"option",12),l.Ob(),l.vc(7,de,1,2,"app-user-other-field-validator",17),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.departments),l.zb(1),l.gc("ngIf",e.department)}}function ye(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.name," ")}}function pe(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",22),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("level",e.level)}}function ve(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",19),l.xc(3," Level * : "),l.Ob(),l.Pb(4,"select",20),l.Lb(5,"option",11),l.vc(6,ye,2,2,"option",12),l.Ob(),l.vc(7,pe,1,2,"app-user-other-field-validator",21),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.levels),l.zb(1),l.gc("ngIf",e.level)}}function Oe(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.name," ")}}function he(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",26),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("country",e.country)}}function ze(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",23),l.xc(3," Country * : "),l.Ob(),l.Pb(4,"select",24),l.Lb(5,"option",11),l.vc(6,Oe,2,2,"option",12),l.Ob(),l.vc(7,he,1,2,"app-user-other-field-validator",25),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.countries),l.zb(1),l.gc("ngIf",e.country)}}function _e(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.name," ")}}function Ie(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",30),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("unit",e.unit)}}function Pe(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",27),l.xc(3," Unit * : "),l.Ob(),l.Pb(4,"select",28),l.Lb(5,"option",11),l.vc(6,_e,2,2,"option",12),l.Ob(),l.vc(7,Ie,1,2,"app-user-other-field-validator",29),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.units),l.zb(1),l.gc("ngIf",e.unit)}}function xe(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.word," ")}}function je(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",34),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("role",e.role)}}function Te(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",31),l.xc(3," Role * : "),l.Ob(),l.Pb(4,"select",32),l.Lb(5,"option",11),l.vc(6,xe,2,2,"option",12),l.Ob(),l.vc(7,je,1,2,"app-user-other-field-validator",33),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.roles),l.zb(1),l.gc("ngIf",e.role)}}function we(e,n){if(1&e&&(l.Pb(0,"option",11),l.xc(1),l.Ob()),2&e){const e=n.$implicit;l.gc("value",e._id),l.zb(1),l.yc(" ",e.word," ")}}function Ne(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",38),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("status",e.status)}}function qe(e,n){if(1&e&&(l.Nb(0),l.Pb(1,"div",4),l.Pb(2,"label",35),l.xc(3," Status * : "),l.Ob(),l.Pb(4,"select",36),l.Lb(5,"option",11),l.vc(6,we,2,2,"option",12),l.Ob(),l.vc(7,Ne,1,2,"app-user-other-field-validator",37),l.Ob(),l.Mb()),2&e){const e=l.ac(2);l.zb(4),l.gc("readOnly",e.noEdit),l.zb(2),l.gc("ngForOf",null==e.generalOthers?null:e.generalOthers.statuses),l.zb(1),l.gc("ngIf",e.status)}}function Le(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",42),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("matriculation-number",e.matriculation_number)}}function Fe(e,n){if(1&e&&(l.Pb(0,"div",4),l.Pb(1,"label",39),l.xc(2," Matriculation Number : "),l.Ob(),l.Lb(3,"input",40),l.vc(4,Le,1,2,"app-user-other-field-validator",41),l.Ob()),2&e){const e=l.ac(2);l.zb(3),l.gc("readOnly",e.noEdit),l.zb(1),l.gc("ngIf",e.matriculation_number)}}function Ae(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",46),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("jamb-registration-number",e.jamb_registration_number)}}function Ce(e,n){if(1&e&&(l.Pb(0,"div",4),l.Pb(1,"label",43),l.xc(2," Jamb Registration Number : "),l.Ob(),l.Lb(3,"input",44),l.vc(4,Ae,1,2,"app-user-other-field-validator",45),l.Ob()),2&e){const e=l.ac(2);l.zb(3),l.gc("readOnly",e.noEdit),l.zb(1),l.gc("ngIf",e.jamb_registration_number)}}function Me(e,n){if(1&e&&l.Lb(0,"app-user-other-field-validator",50),2&e){const e=l.ac(3);l.gc("system-type",e.systemType)("identity-number",e.identity_number)}}function Ee(e,n){if(1&e&&(l.Pb(0,"div",4),l.Pb(1,"label",47),l.xc(2," Identity Number : "),l.Ob(),l.Lb(3,"input",48),l.vc(4,Me,1,2,"app-user-other-field-validator",49),l.Ob()),2&e){const e=l.ac(2);l.zb(3),l.gc("readOnly",e.noEdit),l.zb(1),l.gc("ngIf",e.identity_number)}}function Ue(e,n){if(1&e&&(l.Pb(0,"div",1),l.vc(1,ue,6,2,"ng-container",2),l.vc(2,fe,8,3,"ng-container",2),l.vc(3,me,8,3,"ng-container",2),l.vc(4,ve,8,3,"ng-container",2),l.vc(5,ze,8,3,"ng-container",2),l.vc(6,Pe,8,3,"ng-container",2),l.vc(7,Te,8,3,"ng-container",2),l.vc(8,qe,8,3,"ng-container",2),l.vc(9,Fe,5,2,"div",3),l.vc(10,Ce,5,2,"div",3),l.vc(11,Ee,5,2,"div",3),l.Ob()),2&e){const e=l.ac();l.gc("@fadeAnimation",void 0)("formGroup",e.entryForm),l.zb(1),l.gc("ngIf",e.about),l.zb(1),l.gc("ngIf",e.faculty&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.faculties)&&(null==e.generalOthers||null==e.generalOthers.faculties?null:e.generalOthers.faculties.length)>0),l.zb(1),l.gc("ngIf",e.department&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.departments)&&(null==e.generalOthers||null==e.generalOthers.departments?null:e.generalOthers.departments.length)>0),l.zb(1),l.gc("ngIf",e.level&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.levels)&&(null==e.generalOthers||null==e.generalOthers.levels?null:e.generalOthers.levels.length)>0),l.zb(1),l.gc("ngIf",e.country&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.countries)&&(null==e.generalOthers||null==e.generalOthers.countries?null:e.generalOthers.countries.length)>0),l.zb(1),l.gc("ngIf",e.unit&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.units)&&(null==e.generalOthers||null==e.generalOthers.units?null:e.generalOthers.units.length)>0),l.zb(1),l.gc("ngIf",e.role&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.roles)&&(null==e.generalOthers||null==e.generalOthers.roles?null:e.generalOthers.roles.length)>0),l.zb(1),l.gc("ngIf",e.status&&e.generalOthers&&null!=(null==e.generalOthers?null:e.generalOthers.statuses)&&(null==e.generalOthers||null==e.generalOthers.statuses?null:e.generalOthers.statuses.length)>0),l.zb(1),l.gc("ngIf",e.matriculation_number),l.zb(1),l.gc("ngIf",e.jamb_registration_number),l.zb(1),l.gc("ngIf",e.identity_number)}}let Re=(()=>{class e{constructor(){}ngOnInit(){console.log("Whats going on?"),console.log(this.generalOthers),console.log("What?")}get about(){return this.entryForm.get("about")}get faculty(){return this.entryForm.get("faculty")}get department(){return this.entryForm.get("department")}get level(){return this.entryForm.get("level")}get country(){return this.entryForm.get("country")}get unit(){return this.entryForm.get("unit")}get status(){return this.entryForm.get("status")}get role(){return this.entryForm.get("role")}get matriculation_number(){return this.entryForm.get("matriculation_number")}get identity_number(){return this.entryForm.get("identity_number")}get jamb_registration_number(){return this.entryForm.get("jamb_registration_number")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Eb({type:e,selectors:[["app-user-other-field"]],inputs:{noEdit:["no-edit","noEdit"],systemType:["system-type","systemType"],entryForm:["entry-form","entryForm"],generalOthers:["general-others","generalOthers"],entry:"entry"},decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],[4,"ngIf"],["class","form-group",4,"ngIf"],[1,"form-group"],["for","about",1,"form-label","bold"],["id","about","name","about","placeholder","I am Me","required","required","formControlName","about",1,"form-control","form-textarea",3,"readOnly"],[3,"system-type","about",4,"ngIf"],[3,"system-type","about"],["for","faculty",1,"form-label","bold"],["name","faculty","id","faculty","required","required","formControlName","faculty",1,"form-control",3,"readOnly"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"system-type","faculty",4,"ngIf"],[3,"system-type","faculty"],["for","department",1,"form-label","bold"],["name","department","id","department","required","required","formControlName","department",1,"form-control",3,"readOnly"],[3,"system-type","department",4,"ngIf"],[3,"system-type","department"],["for","level",1,"form-label","bold"],["name","level","id","level","required","required","formControlName","level",1,"form-control",3,"readOnly"],[3,"system-type","level",4,"ngIf"],[3,"system-type","level"],["for","country",1,"form-label","bold"],["name","country","id","country","required","required","formControlName","country",1,"form-control",3,"readOnly"],[3,"system-type","country",4,"ngIf"],[3,"system-type","country"],["for","unit",1,"form-label","bold"],["name","unit","id","unit","required","required","formControlName","unit",1,"form-control",3,"readOnly"],[3,"system-type","unit",4,"ngIf"],[3,"system-type","unit"],["for","role",1,"form-label","bold"],["name","role","id","role","required","required","formControlName","role",1,"form-control",3,"readOnly"],[3,"system-type","role",4,"ngIf"],[3,"system-type","role"],["for","status",1,"form-label","bold"],["name","status","id","status","required","required","formControlName","status",1,"form-control",3,"readOnly"],[3,"system-type","status",4,"ngIf"],[3,"system-type","status"],["for","matriculation_number",1,"form-label","bold"],["type","text","id","matriculation_number","name","matriculation_number","placeholder","2015/1/57261CI","autocomplete","new-matriculation_number","formControlName","matriculation_number",1,"form-control",3,"readOnly"],[3,"system-type","matriculation-number",4,"ngIf"],[3,"system-type","matriculation-number"],["for","jamb_registration_number",1,"form-label","bold"],["type","text","id","jamb_registration_number","name","jamb_registration_number","placeholder","65223645DH","autocomplete","new-jamb_registration_number","formControlName","jamb_registration_number",1,"form-control",3,"readOnly"],[3,"system-type","jamb-registration-number",4,"ngIf"],[3,"system-type","jamb-registration-number"],["for","identity_number",1,"form-label","bold"],["type","text","id","identity_number","name","identity_number","placeholder","M1503186","autocomplete","new-identity_number","formControlName","identity_number",1,"form-control",3,"readOnly"],[3,"system-type","identity-number",4,"ngIf"],[3,"system-type","identity-number"]],template:function(e,n){1&e&&l.vc(0,Ue,12,13,"div",0),2&e&&l.gc("ngIf",n.entryForm)},directives:[i.l,o.l,o.h,o.b,o.o,o.k,o.f,ce,o.p,o.m,o.r,i.k],styles:[""],data:{animation:[r.a]}}),e})()},ws4g:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t("Ub9n");let l=(()=>{class e{constructor(e){this.el=e}capitalize(e){let n=this.el.nativeElement.value.replace(/\s+/g," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()).join(" ");this.el.nativeElement.value=n}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(r.Kb(r.l))},e.\u0275dir=r.Fb({type:e,selectors:[["","appCapitalize",""]],hostBindings:function(e,n){1&e&&r.Wb("blur",function(){return n.capitalize()})}}),e})()}}]);