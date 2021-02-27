exports.ids = ["account-general-request-general-request-module"];
exports.modules = {

/***/ "4O2g":
/*!***********************************************************************!*\
  !*** ./src/app/account/general-request/general-request-route-data.ts ***!
  \***********************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'General Request',
    'title': 'General Request',
    'view': 'gr',
    'viewWord': 'GeneralRequest',
    'link': 'general-request',
    '$link': 'general-request',
    'systemGuideline': 'request',
    'base': 'general-request'
};
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Request review of your semester ${$$.systemType}` }),
    'comment': Object.assign(Object.assign({}, $$), { 'title': `Add a Comment : ${$$.systemType} Entry` }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry`, 'generateCred': null }),
    'timeline': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Timeline` }),
    'transfer': Object.assign(Object.assign({}, $$), { 'title': `Transfer and Move ${$$.systemType} Entry` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'application_number': 'Application Number', 'status': 'Status' } }),
    'reply': Object.assign(Object.assign({}, $$), { 'title': `Add a Reply to a Comment : ${$$.systemType} Entry` }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
};


/***/ }),

/***/ "7I/V":
/*!********************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-timeline/general-request-entry-timeline.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GeneralRequestEntryTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryTimelineComponent", function() { return GeneralRequestEntryTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles */ "B+PW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_request_entry_request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-status/request-entry-status.component */ "P2jk");
/* harmony import */ var _shared_pipes_replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipes/replace-line-break.pipe */ "2Cyu");
















function GeneralRequestEntryTimelineComponent_app_view_description_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function GeneralRequestEntryTimelineComponent_app_resource_unavailable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function GeneralRequestEntryTimelineComponent_app_request_entry_status_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-status", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry", ctx_r2.entry);
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8 == null ? null : comment_r8.author == null ? null : comment_r8.author.full_name, " ");
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anonymous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8 == null ? null : comment_r8.text, " ");
} }
const _c0 = function (a0, a2, a4, a6) { return [a0, "t", a2, "entry", a4, "comment", a6, "reply", "add"]; };
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", comment_r8 == null ? null : comment_r8.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, ctx_r18.isAdmin, ctx_r18.rslug, ctx_r18.entry == null ? null : ctx_r18.entry.slug, comment_r8 == null ? null : comment_r8.slug));
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_ng_container_1_Template, 3, 7, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const comment_r8 = ctx_r20.$implicit;
    const i_r9 = ctx_r20.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (comment_r8.replies == null || (comment_r8 == null ? null : comment_r8.replies == null ? null : comment_r8.replies.length) < 1) && i_r9 != 0);
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const j_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", j_r23 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, comment_r8 == null ? null : comment_r8.updated_on, "longDate"), " ");
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reply_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author : ", reply_r22 == null ? null : reply_r22.author == null ? null : reply_r22.author.full_name, " ");
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Anonymous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Handler : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reply_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reply_r22 == null ? null : reply_r22.entry_handler == null ? null : reply_r22.entry_handler.full_name, " ");
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "replaceLineBreak");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reply_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", (reply_r22 == null ? null : reply_r22.comment_author_name) ? "@" + (reply_r22 == null ? null : reply_r22.comment_author_name) : "", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, reply_r22 == null ? null : reply_r22.text), " ");
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_2_Template, 7, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_3_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_template_4_Template, 4, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_6_Template, 6, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_7_Template, 6, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reply_r22 = ctx.$implicit;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r8.updated_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r22 == null ? null : reply_r22.author)("ngIfElse", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r22 == null ? null : reply_r22.entry_handler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r22 == null ? null : reply_r22.text);
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_Template, 8, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r8 == null ? null : comment_r8.replies);
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_8_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_template_9_Template, 3, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_11_Template, 5, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r9 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, comment_r8 == null ? null : comment_r8.updated_on, "longDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r8 == null ? null : comment_r8.author)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r8 == null ? null : comment_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.entry == null ? null : ctx_r7.entry.status) != "Fulfilled" && (ctx_r7.entry == null ? null : ctx_r7.entry.status) != "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (comment_r8 == null ? null : comment_r8.replies) != null && (comment_r8 == null ? null : comment_r8.replies == null ? null : comment_r8.replies.length) > 0);
} }
function GeneralRequestEntryTimelineComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryTimelineComponent_ng_container_7_ng_container_4_Template, 14, 10, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.comments);
} }
function GeneralRequestEntryTimelineComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comments entries not available for this entry. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "timeline"]; };
function GeneralRequestEntryTimelineComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c1, ctx_r37.isAdmin, ctx_r37.rslug, ctx_r37.entry == null ? null : ctx_r37.entry.slug));
} }
const _c2 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "transfer"]; };
function GeneralRequestEntryTimelineComponent_div_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Transfer or Move Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c2, ctx_r40.isAdmin, ctx_r40.rslug, ctx_r40.entry == null ? null : ctx_r40.entry.slug));
} }
function GeneralRequestEntryTimelineComponent_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTimelineComponent_div_10_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.canUpdateEntry);
} }
const _c3 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "comment", "add"]; };
function GeneralRequestEntryTimelineComponent_div_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add a Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c3, ctx_r39.isAdmin, ctx_r39.rslug, ctx_r39.entry == null ? null : ctx_r39.entry.slug));
} }
const _c4 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "detail"]; };
function GeneralRequestEntryTimelineComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTimelineComponent_div_10_ng_container_1_Template, 3, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryTimelineComponent_div_10_ng_container_2_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryTimelineComponent_div_10_ng_container_3_Template, 3, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Entry Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.entry == null ? null : ctx_r6.entry.status) != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.entry == null ? null : ctx_r6.entry.status) == "Review" || (ctx_r6.entry == null ? null : ctx_r6.entry.status) == "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.entry == null ? null : ctx_r6.entry.status) == "Update" || (ctx_r6.entry == null ? null : ctx_r6.entry.status) == "Transferred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c4, ctx_r6.isAdmin, ctx_r6.rslug, ctx_r6.entry == null ? null : ctx_r6.entry.slug));
} }
class GeneralRequestEntryTimelineComponent {
    constructor(router, route, grs, ns, ems, aus) {
        this.router = router;
        this.route = route;
        this.grs = grs;
        this.ns = ns;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.timeline.systemType;
        this.title = data.timeline.title;
        this.view = data.timeline.view;
        this.viewWord = data.timeline.viewWord;
        this.link = data.timeline.link;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            let $r = params.get('request');
            this.rslug = $r;
            this.eslug = $e;
            return this.grs.getTimeline($r, $e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry Timeline` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
                this.comments = result.timeline;
            }
        });
    }
    get userRole() {
        return this.aus.userRole;
    }
    get isAdmin() {
        if (['moderator', 'administrator', 'superAdministrator'].indexOf(this.userRole) > -1)
            return '/general-request';
        return '/general-request';
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_4__["canUpdate"].indexOf(this.userRole) > -1;
    }
}
GeneralRequestEntryTimelineComponent.ɵfac = function GeneralRequestEntryTimelineComponent_Factory(t) { return new (t || GeneralRequestEntryTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"])); };
GeneralRequestEntryTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryTimelineComponent, selectors: [["app-general-request-entry-timeline"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 11, vars: 6, consts: [["id", "general-timeline"], ["id", "general-entry-details"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "system-type", "entry", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noComments", ""], ["id", "entry-detail-options", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], [3, "system-type", "entry"], [1, "comments"], [4, "ngFor", "ngForOf"], [1, "comment"], [1, "bold"], [1, "timestamp"], ["anonymousTemplate", ""], [4, "ngIf"], [1, "author"], [1, "text"], [1, "reply-add", 3, "id", "routerLink"], [1, "replies"], [1, "reply"], ["anonymousTemplate1", ""], ["id", "entry-detail-options"], [1, "center", 3, "routerLink"]], template: function GeneralRequestEntryTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Entry Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryTimelineComponent_app_view_description_4_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryTimelineComponent_app_resource_unavailable_5_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryTimelineComponent_app_request_entry_status_6_Template, 1, 2, "app-request-entry-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralRequestEntryTimelineComponent_ng_container_7_Template, 5, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralRequestEntryTimelineComponent_ng_template_8_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralRequestEntryTimelineComponent_div_10_Template, 6, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comments != null && (ctx.comments == null ? null : ctx.comments.length) > 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _shared_component_request_entry_request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_11__["RequestEntryStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _shared_pipes_replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_12__["ReplaceLineBreakPipe"]], styles: [".comment[_ngcontent-%COMP%] {\r\n\r\n\tborder-bottom : 1px solid lightblue;\r\n\tpadding : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]:hover {\r\n\r\n\tbackground-color : #fdfdfd;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em !important;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\r\n\tfont-style : italic;\r\n\tmargin-left : 2em;\r\n\tfont-size : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 11px;\r\n\tmargin-right : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 12px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   a.reply-add[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 11px;\r\n\tbackground-color : #290140;\r\n\tcolor : #a0a7a0;\r\n\tpadding : 5px 15px;\r\n\tborder-radius : 6px;\r\n\tborder : 1.5px solid #ac4bd8;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   a.reply-add[_ngcontent-%COMP%]:hover {\r\n\r\n\tcolor : #fff;\r\n\tbackground-color : #210140;\r\n}\r\n\r\n.replies[_ngcontent-%COMP%] {\r\n\r\n\tmargin-left : 30px;\r\n}\r\n\r\n.reply[_ngcontent-%COMP%] {\r\n\r\n\tmargin-top : 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtcmVxdWVzdC1lbnRyeS10aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLG1DQUFtQztDQUNuQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLDhCQUE4QjtBQUMvQjs7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoiZ2VuZXJhbC1yZXF1ZXN0LWVudHJ5LXRpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudCB7XHJcblxyXG5cdGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG5cdHBhZGRpbmcgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudDpob3ZlciB7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjZmRmZGZkO1xyXG59XHJcblxyXG4uY29tbWVudCBwIHtcclxuXHJcblx0bGluZS1oZWlnaHQgOiAyLjBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tbWVudCAudGltZXN0YW1wIHtcclxuXHJcblx0Zm9udC1zdHlsZSA6IGl0YWxpYztcclxuXHRtYXJnaW4tbGVmdCA6IDJlbTtcclxuXHRmb250LXNpemUgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCBiIHtcclxuXHJcblx0Zm9udC1zaXplIDogMTFweDtcclxuXHRtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCBwLnRleHQge1xyXG5cclxuXHRmb250LXNpemUgOiAxMnB4O1xyXG59XHJcblxyXG4uY29tbWVudCBhLnJlcGx5LWFkZCB7XHJcblxyXG5cdGZvbnQtc2l6ZSA6IDExcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvciA6ICMyOTAxNDA7XHJcblx0Y29sb3IgOiAjYTBhN2EwO1xyXG5cdHBhZGRpbmcgOiA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzIDogNnB4O1xyXG5cdGJvcmRlciA6IDEuNXB4IHNvbGlkICNhYzRiZDg7XHJcbn1cclxuXHJcbi5jb21tZW50IGEucmVwbHktYWRkOmhvdmVyIHtcclxuXHJcblx0Y29sb3IgOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjMjEwMTQwO1xyXG59XHJcblxyXG4ucmVwbGllcyB7XHJcblxyXG5cdG1hcmdpbi1sZWZ0IDogMzBweDtcclxufVxyXG5cclxuLnJlcGx5IHtcclxuXHJcblx0bWFyZ2luLXRvcCA6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-timeline',
                'templateUrl': './general-request-entry-timeline.component.html',
                'styleUrls': ['./general-request-entry-timeline.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "8qr7":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-generate-username-password/general-request-entry-generate-username-password.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryGenerateUsernamePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryGenerateUsernamePasswordComponent", function() { return GeneralRequestEntryGenerateUsernamePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generate-username-password.service */ "YhH2");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-request-form.service */ "qC4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-request-entry-credential-validator/general-request-entry-credential-validator.component */ "ShQc");
/* harmony import */ var _shared_pipes_proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/proposed-credential.pipe */ "Mdff");









const _c0 = ["proposedCredential"];
function GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "proposedCredential");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.entry));
} }
function GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 14, 13);
} }
function GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.createNewCredentials($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Generate Request Username and Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_ng_container_6_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-general-request-entry-credential-validator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-general-request-entry-credential-validator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry && (ctx_r0.entry == null ? null : ctx_r0.entry.author))("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.entry == null ? null : ctx_r0.entry.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r0.systemType)("username", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.entry == null ? null : ctx_r0.entry.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r0.systemType)("password", ctx_r0.password);
} }
class GeneralRequestEntryGenerateUsernamePasswordComponent {
    constructor(gups, grfs) {
        this.gups = gups;
        this.grfs = grfs;
    }
    ngOnInit() {
        this.entryForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.grfs.otherCtrls.username));
        this.entryForm.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.grfs.otherCtrls.password));
    }
    createNewCredentials(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        let proposed = this.proposedCredential.nativeElement.value;
        this.gups.createUsernamePassword$({ 'username': proposed, 'user': this.entry.author._id, 'entry': this.entry._id })
            .subscribe((result) => {
            if (result != null && result.created == true) {
                let data = result.$data;
                this.entryForm.patchValue({ 'username': data.username, 'password': data.password });
            }
        });
    }
    get username() {
        return this.entryForm.get('username');
    }
    get password() {
        return this.entryForm.get('password');
    }
}
GeneralRequestEntryGenerateUsernamePasswordComponent.ɵfac = function GeneralRequestEntryGenerateUsernamePasswordComponent_Factory(t) { return new (t || GeneralRequestEntryGenerateUsernamePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__["GenerateUsernamePasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"])); };
GeneralRequestEntryGenerateUsernamePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryGenerateUsernamePasswordComponent, selectors: [["app-general-request-entry-generate-username-password"]], viewQuery: function GeneralRequestEntryGenerateUsernamePasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.proposedCredential = _t.first);
    } }, inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "generate-username-password-form", 3, "formGroup"], [1, "form-group"], ["id", "generateCredentials", 1, "btn-submit", 3, "click"], [4, "ngIf", "ngIfElse"], ["noAuthor", ""], ["for", "request-username", 1, "form-label", "bold"], ["type", "text", "name", "username", "id", "request-username", "formControlName", "username", 1, "form-control", 3, "value"], [3, "system-type", "username"], ["for", "request-password", 1, "form-label", "bold"], ["type", "text", "name", "password", "id", "request-password", "formControlName", "password", 1, "form-control", 3, "value"], [3, "system-type", "password"], ["type", "hidden", "id", "proposedCredential", "name", "proposal", 1, "form-control", 3, "value"], ["proposedCredential", ""], ["type", "hidden", "id", "proposedCredential", "name", "proposal", "value", ""]], template: function GeneralRequestEntryGenerateUsernamePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryGenerateUsernamePasswordComponent_ng_container_0_Template, 19, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCredentialValidatorComponent"]], pipes: [_shared_pipes_proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_6__["ProposedCredentialPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktZ2VuZXJhdGUtdXNlcm5hbWUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryGenerateUsernamePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-generate-username-password',
                'templateUrl': './general-request-entry-generate-username-password.component.html',
                'styleUrls': ['./general-request-entry-generate-username-password.component.css']
            }]
    }], function () { return [{ type: _generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__["GenerateUsernamePasswordService"] }, { type: _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], proposedCredential: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['proposedCredential']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9G3S":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-transfer-validator/general-request-entry-transfer-validator.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryTransferValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryTransferValidatorComponent", function() { return GeneralRequestEntryTransferValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r2.systemType, " should be provided and cannot be empty ");
} }
function GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r3.systemType, " cannot be greater than specified length ");
} }
function GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r4.systemType, " should be available from existing record before it can be considered valid ");
} }
function GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.unit.errors == null ? null : ctx_r1.unit.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.unit.errors == null ? null : ctx_r1.unit.errors.required) || (ctx_r1.unit.errors == null ? null : ctx_r1.unit.errors.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.unit.errors == null ? null : ctx_r1.unit.errors.Unit);
} }
function GeneralRequestEntryTransferValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTransferValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.unit.invalid && (ctx_r0.unit.touched || ctx_r0.unit.dirty));
} }
class GeneralRequestEntryTransferValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralRequestEntryTransferValidatorComponent.ɵfac = function GeneralRequestEntryTransferValidatorComponent_Factory(t) { return new (t || GeneralRequestEntryTransferValidatorComponent)(); };
GeneralRequestEntryTransferValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryTransferValidatorComponent, selectors: [["app-general-request-entry-transfer-validator"]], inputs: { systemType: "systemType", unit: "unit" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function GeneralRequestEntryTransferValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryTransferValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktdHJhbnNmZXItdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryTransferValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-transfer-validator',
                'templateUrl': './general-request-entry-transfer-validator.component.html',
                'styleUrls': ['./general-request-entry-transfer-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9ySI":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-dashboard/general-request-entry-dashboard.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GeneralRequestEntryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryDashboardComponent", function() { return GeneralRequestEntryDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "vlQ6");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");












function GeneralRequestEntryDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.entry.name, " Request ");
} }
function GeneralRequestEntryDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralRequestEntryDashboardComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
const _c0 = function () { return ["entry", "create"]; };
function GeneralRequestEntryDashboardComponent_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create ", ctx_r4.entry.name, " Entry ");
} }
const _c1 = function () { return ["entry", "delete", "all"]; };
function GeneralRequestEntryDashboardComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Delete All ", ctx_r5.entry.name, " Entry ");
} }
const _c2 = function () { return ["entries"]; };
const _c3 = function () { return ["../../"]; };
const _c4 = function () { return ["/account", "profile"]; };
function GeneralRequestEntryDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryDashboardComponent_div_3_li_5_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Other Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralRequestEntryDashboardComponent_div_3_li_9_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Manage ", ctx_r3.entry.name, " Entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.canCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.canDeleteAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
} }
class GeneralRequestEntryDashboardComponent {
    constructor(route, ts, grs, ems, aus) {
        this.route = route;
        this.ts = ts;
        this.grs = grs;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.dashboard.systemType;
        this.title = data.dashboard.title;
        this.view = data.dashboard.view;
        this.link = data.dashboard.link;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $r = params.get('request');
            this.rslug = $r;
            return this.grs.manageRequestEntry($r);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
                this.ts.setTitle(result.name + ` Request`);
            }
        });
    }
    get canCreate() {
        return ['student', 'departmentPresident', 'facultyPresident'].indexOf(this.aus.userRole) > -1;
    }
    get canDeleteAll() {
        return this.aus.isSuperAdministrator;
    }
}
GeneralRequestEntryDashboardComponent.ɵfac = function GeneralRequestEntryDashboardComponent_Factory(t) { return new (t || GeneralRequestEntryDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
GeneralRequestEntryDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryDashboardComponent, selectors: [["app-general-request-entry-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], [3, "error"], ["id", "dashboard"], [1, "center", 3, "routerLink"]], template: function GeneralRequestEntryDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDashboardComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDashboardComponent_div_3_Template, 13, 9, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry && (ctx.entry == null ? null : ctx.entry.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-dashboard',
                'templateUrl': './general-request-entry-dashboard.component.html',
                'styleUrls': ['./general-request-entry-dashboard.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "B+PW":
/*!**************************************************!*\
  !*** ./src/app/account/general-request/roles.ts ***!
  \**************************************************/
/*! exports provided: roles, $entryUpdateRole, canUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$entryUpdateRole", function() { return $entryUpdateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUpdate", function() { return canUpdate; });
const roles = [
    { 'name': 'Student', 'role': 'student' },
    { 'name': 'Department President', 'role': 'departmentPresident' },
    { 'name': 'Faculty President', 'role': 'facultyPresident' },
    { 'name': 'Lecturer', 'role': 'lecturer' },
    { 'name': 'Head of Department', 'role': 'hod' },
    { 'name': 'Dean of Faculty', 'role': 'dean' },
    { 'name': 'Bursar', 'role': 'bursar' },
    { 'name': 'Staff', 'role': 'staff' },
    { 'name': 'Moderator', 'role': 'moderator' },
    { 'name': 'Administrator', 'role': 'administrator' },
    { 'name': 'Super Administrator', 'role': 'superAdministrator' }
];
const $entryUpdateRole = ['staff', 'moderator', 'administrator', 'superAdministrator'];
const canUpdate = ['staff', 'moderator', 'administrator', 'superAdministrator'];


/***/ }),

/***/ "B4yo":
/*!***********************************************************!*\
  !*** ./src/app/account/general-request/request-others.ts ***!
  \***********************************************************/
/*! exports provided: GeneralRequestOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestOther", function() { return GeneralRequestOther; });
class GeneralRequestOther {
    constructor(data) {
        this.faculties = data.Faculty ? data.Faculty : [];
        this.departments = data.Department ? data.Department : [];
        this.units = data.Unit ? data.Unit : [];
        this.levels = data.Level ? data.Level : [];
        this.countries = data.Country ? data.Country : [];
    }
}


/***/ }),

/***/ "GFOR":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-generate-password/general-request-entry-generate-password.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryGeneratePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryGeneratePasswordComponent", function() { return GeneralRequestEntryGeneratePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generate-username-password.service */ "YhH2");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-request-form.service */ "qC4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-request-entry-credential-validator/general-request-entry-credential-validator.component */ "ShQc");








function GeneralRequestEntryGeneratePasswordComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-general-request-entry-credential-validator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.entry == null ? null : ctx_r1.entry.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("password", ctx_r1.password);
} }
function GeneralRequestEntryGeneratePasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntryGeneratePasswordComponent_ng_container_0_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.createNewCredentials($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryGeneratePasswordComponent_ng_container_0_div_5_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Generate ", ctx_r0.systemType, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.password);
} }
class GeneralRequestEntryGeneratePasswordComponent {
    constructor(gups, grfs) {
        this.gups = gups;
        this.grfs = grfs;
    }
    ngOnInit() {
        this.entryForm.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.grfs.otherCtrls.password));
    }
    createNewCredentials(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        let newPassword = Math.random().toString(36).substr(2, 9);
        this.entryForm.patchValue({ 'password': newPassword });
        this.gups.createPassword$({ 'password': newPassword })
            .subscribe();
    }
    get password() {
        return this.entryForm.get('password');
    }
}
GeneralRequestEntryGeneratePasswordComponent.ɵfac = function GeneralRequestEntryGeneratePasswordComponent_Factory(t) { return new (t || GeneralRequestEntryGeneratePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__["GenerateUsernamePasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"])); };
GeneralRequestEntryGeneratePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryGeneratePasswordComponent, selectors: [["app-general-request-entry-generate-password"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "generate-username-password-form", 3, "formGroup"], [1, "form-group"], ["id", "generateCredentials", 1, "btn-submit", 3, "click"], ["class", "form-group", 4, "ngIf"], ["for", "request-password", 1, "form-label", "bold"], ["type", "text", "name", "password", "id", "request-password", "formControlName", "password", 1, "form-control", 3, "value"], [3, "system-type", "password"]], template: function GeneralRequestEntryGeneratePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryGeneratePasswordComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCredentialValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktZ2VuZXJhdGUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryGeneratePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-generate-password',
                'templateUrl': './general-request-entry-generate-password.component.html',
                'styleUrls': ['./general-request-entry-generate-password.component.css']
            }]
    }], function () { return [{ type: _generate_username_password_service__WEBPACK_IMPORTED_MODULE_2__["GenerateUsernamePasswordService"] }, { type: _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Keds":
/*!**********************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-dashboard/general-request-dashboard.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GeneralRequestDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestDashboardComponent", function() { return GeneralRequestDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");









function GeneralRequestDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralRequestDashboardComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
const _c0 = function (a2) { return ["./", "t", a2]; };
function GeneralRequestDashboardComponent_div_3_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, entry_r6 == null ? null : entry_r6.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r6 == null ? null : entry_r6.name, " ");
} }
function GeneralRequestDashboardComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestDashboardComponent_div_3_ng_container_2_li_1_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.entries);
} }
const _c1 = function () { return ["/account", "profile"]; };
function GeneralRequestDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestDashboardComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entries != null && (ctx_r3.entries == null ? null : ctx_r3.entries.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
class GeneralRequestDashboardComponent {
    constructor(route, grs, ems) {
        this.route = route;
        this.grs = grs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.dashboard.systemType;
        this.title = data.dashboard.title;
        this.view = data.dashboard.view;
        this.grs.manageRequest()
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.length > 0) {
                this.entries = result;
            }
        });
    }
}
GeneralRequestDashboardComponent.ɵfac = function GeneralRequestDashboardComponent_Factory(t) { return new (t || GeneralRequestDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"])); };
GeneralRequestDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestDashboardComponent, selectors: [["app-general-request-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]])], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], [3, "error"], ["id", "dashboard"], [1, "center", 3, "routerLink"], [4, "ngFor", "ngForOf"]], template: function GeneralRequestDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestDashboardComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestDashboardComponent_div_3_Template, 6, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_6__["ResourceUnavailableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-dashboard',
                'templateUrl': './general-request-dashboard.component.html',
                'styleUrls': ['./general-request-dashboard.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "Q94X":
/*!***************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GeneralRequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestRoutingModule", function() { return GeneralRequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _general_request_homepage_general_request_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-request-homepage/general-request-homepage.component */ "Wo98");
/* harmony import */ var _general_request_dashboard_general_request_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-request-dashboard/general-request-dashboard.component */ "Keds");
/* harmony import */ var _general_request_entry_dashboard_general_request_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-request-entry-dashboard/general-request-entry-dashboard.component */ "9ySI");
/* harmony import */ var _general_request_entries_general_request_entries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-request-entries/general-request-entries.component */ "TNCL");
/* harmony import */ var _general_request_entry_detail_general_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-request-entry-detail/general-request-entry-detail.component */ "TkAe");
/* harmony import */ var _general_request_entry_timeline_general_request_entry_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-request-entry-timeline/general-request-entry-timeline.component */ "7I/V");
/* harmony import */ var _general_request_create_comment_general_request_create_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-request-create-comment/general-request-create-comment.component */ "ohbn");
/* harmony import */ var _general_request_entry_transfer_general_request_entry_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-request-entry-transfer/general-request-entry-transfer.component */ "rqdH");
/* harmony import */ var _general_request_create_reply_general_request_create_reply_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-request-create-reply/general-request-create-reply.component */ "f5lg");
/* harmony import */ var _general_request_entry_delete_all_general_request_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-request-entry-delete-all/general-request-entry-delete-all.component */ "T7yI");
/* harmony import */ var _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-request-route-data */ "4O2g");

















const routes = [
    { 'path': '',
        'component': _general_request_homepage_general_request_homepage_component__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _general_request_dashboard_general_request_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestDashboardComponent"], 'data': { 'dashboard': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].dashboard } },
                    { 'path': 't/:request', 'component': _general_request_entry_dashboard_general_request_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestEntryDashboardComponent"], 'data': { 'dashboard': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].dashboard } },
                    { 'path': 't/:request/entries', 'component': _general_request_entries_general_request_entries_component__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntriesComponent"], 'data': { 'entries': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].entries } },
                    { 'path': 't/:request/entry/create', 'loadChildren': () => Promise.all(/*! import() | general-request-entry-create-general-request-entry-create-module */[__webpack_require__.e("general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe"), __webpack_require__.e("general-request-entry-create-general-request-entry-create-module~refund-entry-create-refund-entry-cr~653d4a90"), __webpack_require__.e("general-request-entry-create-general-request-entry-create-module")]).then(__webpack_require__.bind(null, /*! ./general-request-entry-create/general-request-entry-create.module */ "5dIA")).then(m => m.GeneralRequestEntryCreateModule) },
                    { 'path': 't/:request/entry/:entry/detail', 'component': _general_request_entry_detail_general_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestEntryDetailComponent"], 'data': { 'detail': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].detail } },
                    { 'path': 't/:request/entry/:entry/timeline', 'component': _general_request_entry_timeline_general_request_entry_timeline_component__WEBPACK_IMPORTED_MODULE_9__["GeneralRequestEntryTimelineComponent"], 'data': { 'timeline': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].timeline } },
                    { 'path': 't/:request/entry/:entry/transfer', 'component': _general_request_entry_transfer_general_request_entry_transfer_component__WEBPACK_IMPORTED_MODULE_11__["GeneralRequestEntryTransferComponent"], 'data': { 'transfer': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].transfer } },
                    { 'path': 't/:request/entry/:entry/comment/add', 'component': _general_request_create_comment_general_request_create_comment_component__WEBPACK_IMPORTED_MODULE_10__["GeneralRequestCreateCommentComponent"], 'data': { 'comment': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].comment } },
                    { 'path': 't/:request/entry/:entry/comment/:comment/reply/add', 'component': _general_request_create_reply_general_request_create_reply_component__WEBPACK_IMPORTED_MODULE_12__["GeneralRequestCreateReplyComponent"], 'data': { 'reply': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].reply } },
                    { 'path': 't/:request/entry/delete/all', 'component': _general_request_entry_delete_all_general_request_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_13__["GeneralRequestEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_3__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _general_request_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].deleteAll } },
                ] }
        ] }
];
class GeneralRequestRoutingModule {
}
GeneralRequestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestRoutingModule });
GeneralRequestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestRoutingModule_Factory(t) { return new (t || GeneralRequestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ShQc":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-credential-validator/general-request-entry-credential-validator.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCredentialValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCredentialValidatorComponent", function() { return GeneralRequestEntryCredentialValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Username of ", ctx_r3.systemType, " should be provided and cannot be empty ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Username of ", ctx_r4.systemType, " cannot be less than 5 characters in length ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Username of ", ctx_r5.systemType, " cannot be greater than 100 characters in length ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.username.errors == null ? null : ctx_r2.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.username.errors == null ? null : ctx_r2.username.errors.required) || (ctx_r2.username.errors == null ? null : ctx_r2.username.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.username.errors == null ? null : ctx_r2.username.errors.required) || (ctx_r2.username.errors == null ? null : ctx_r2.username.errors.maxlength));
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryCredentialValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username.invalid && (ctx_r0.username.touched || ctx_r0.username.dirty));
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Password of ", ctx_r7.systemType, " should be provided and cannot be empty ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Password of ", ctx_r8.systemType, " cannot be less than 5 characters in length ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request Password of ", ctx_r9.systemType, " cannot be greater than 100 characters in length ");
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.password.errors == null ? null : ctx_r6.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.password.errors == null ? null : ctx_r6.password.errors.required) || (ctx_r6.password.errors == null ? null : ctx_r6.password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.password.errors == null ? null : ctx_r6.password.errors.required) || (ctx_r6.password.errors == null ? null : ctx_r6.password.errors.maxlength));
} }
function GeneralRequestEntryCredentialValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryCredentialValidatorComponent_ng_container_1_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.invalid && (ctx_r1.password.touched || ctx_r1.password.dirty));
} }
class GeneralRequestEntryCredentialValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralRequestEntryCredentialValidatorComponent.ɵfac = function GeneralRequestEntryCredentialValidatorComponent_Factory(t) { return new (t || GeneralRequestEntryCredentialValidatorComponent)(); };
GeneralRequestEntryCredentialValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryCredentialValidatorComponent, selectors: [["app-general-request-entry-credential-validator"]], inputs: { systemType: ["system-type", "systemType"], username: "username", password: "password" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function GeneralRequestEntryCredentialValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryCredentialValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryCredentialValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktY3JlZGVudGlhbC12YWxpZGF0b3IuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCredentialValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-credential-validator',
                'templateUrl': './general-request-entry-credential-validator.component.html',
                'styleUrls': ['./general-request-entry-credential-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "T7yI":
/*!************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-delete-all/general-request-entry-delete-all.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryDeleteAllComponent", function() { return GeneralRequestEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/delete-all-entry/delete-all-entry.component */ "1B5t");














function GeneralRequestEntryDeleteAllComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestEntryDeleteAllComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralRequestEntryDeleteAllComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralRequestEntryDeleteAllComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function GeneralRequestEntryDeleteAllComponent_app_resource_unavailable_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r3.error);
} }
function GeneralRequestEntryDeleteAllComponent_div_5_app_delete_all_entry_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-delete-all-entry", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r7.systemType);
} }
function GeneralRequestEntryDeleteAllComponent_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntryDeleteAllComponent_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteAllEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryDeleteAllComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryDeleteAllComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDeleteAllComponent_div_5_app_delete_all_entry_1_Template, 1, 1, "app-delete-all-entry", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDeleteAllComponent_div_5_button_2_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDeleteAllComponent_div_5_p_3_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class GeneralRequestEntryDeleteAllComponent {
    constructor(route, router, grs, ems, ns) {
        this.route = route;
        this.router = router;
        this.grs = grs;
        this.ems = ems;
        this.ns = ns;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.canDelete = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.deleteAll.systemType;
        this.viewWord = data.deleteAll.viewWord;
        this.title = data.deleteAll.title;
        this.view = data.deleteAll.view;
        this.link = data.deleteAll.link;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $r = params.get('request');
            this.rslug = $r;
            return this.grs.deleteAllEntry($r);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.canDelete = false;
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.length > 0) {
                this.canDelete = true;
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    deleteAllEntry() {
        let isConfirmed = confirm('Are you sure you want to proceed with this action?');
        if (!isConfirmed)
            return false;
        this.grs.$systemType = this.systemType;
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.grs.deleteAllEntry$(this.rslug)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`);
                return this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`);
                this.$entryChanges({});
            }
        });
    }
    $entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['system', 'general-request']);
        }, 5000);
    }
    get notificationAvailable() {
        return this.ns.notificationStatus();
    }
    get notificationMessage() {
        return this.ns.getNotificationMessage();
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
GeneralRequestEntryDeleteAllComponent.ɵfac = function GeneralRequestEntryDeleteAllComponent_Factory(t) { return new (t || GeneralRequestEntryDeleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
GeneralRequestEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryDeleteAllComponent, selectors: [["app-general-request-entry-delete-all"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "entry-delete-all"], [4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "entry-detail", 4, "ngIf"], [3, "system-type", "view-type"], [3, "notified", "message", "finished"], [3, "error"], ["id", "entry-detail"], [3, "system-type", 4, "ngIf"], ["class", "btn-submit", "type", "submit", 3, "click", 4, "ngIf"], [3, "system-type"], ["type", "submit", 1, "btn-submit", 3, "click"]], template: function GeneralRequestEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDeleteAllComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDeleteAllComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDeleteAllComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryDeleteAllComponent_app_resource_unavailable_4_Template, 1, 1, "app-resource-unavailable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryDeleteAllComponent_div_5_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _general_delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_10__["DeleteAllEntryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktZGVsZXRlLWFsbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-delete-all',
                'templateUrl': './general-request-entry-delete-all.component.html',
                'styleUrls': ['./general-request-entry-delete-all.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "TNCL":
/*!******************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entries/general-request-entries.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GeneralRequestEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntriesComponent", function() { return GeneralRequestEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module/general-all/general-all.service */ "BeQt");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roles */ "B+PW");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../general/search/search.component */ "xlhj");
/* harmony import */ var _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/module/simples/pagination/pagination.component */ "scZC");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");






















function GeneralRequestEntriesComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, "");
} }
function GeneralRequestEntriesComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralRequestEntriesComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralRequestEntriesComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function GeneralRequestEntriesComponent_app_search_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("$link", ctx_r3.$link)("search-filters", ctx_r3.searchFilters);
} }
function GeneralRequestEntriesComponent_div_9_tr_32_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntriesComponent_div_9_tr_32_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.application_number, " ");
} }
function GeneralRequestEntriesComponent_div_9_tr_32_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.full_name, " ");
} }
function GeneralRequestEntriesComponent_div_9_tr_32_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entry_r10 == null ? null : entry_r10.updated_on, "longDate"), " ");
} }
function GeneralRequestEntriesComponent_div_9_tr_32_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.level, " ");
} }
function GeneralRequestEntriesComponent_div_9_tr_32_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.identity_number, " ");
} }
const _c0 = function (a0, a1, a2) { return { "rejected": a0, "fulfilled": a1, "update": a2 }; };
function GeneralRequestEntriesComponent_div_9_tr_32_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, (entry_r10 == null ? null : entry_r10.status) == "Rejected", (entry_r10 == null ? null : entry_r10.status) == "Fulfilled", (entry_r10 == null ? null : entry_r10.status) == "Update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.status, " ");
} }
function GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const entry_r10 = ctx_r34.$implicit; const i_r11 = ctx_r34.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r32.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const $ed_r31 = ctx.$implicit;
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", $ed_r31 == (entry_r10 == null ? null : entry_r10.num));
} }
function GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template, 4, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.esdl);
} }
function GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const entry_r10 = ctx_r39.$implicit; const i_r11 = ctx_r39.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r37.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);
} }
function GeneralRequestEntriesComponent_div_9_tr_32_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.esdl.length)("ngIfElse", _r28);
} }
const _c1 = function (a2) { return ["../", "entry", a2, "detail"]; };
function GeneralRequestEntriesComponent_div_9_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntriesComponent_div_9_tr_32_ng_template_3_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntriesComponent_div_9_tr_32_td_5_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntriesComponent_div_9_tr_32_td_6_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralRequestEntriesComponent_div_9_tr_32_td_7_Template, 3, 4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralRequestEntriesComponent_div_9_tr_32_td_8_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralRequestEntriesComponent_div_9_tr_32_td_9_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralRequestEntriesComponent_div_9_tr_32_td_10_Template, 2, 6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeneralRequestEntriesComponent_div_9_tr_32_label_14_Template, 4, 2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r11 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.application_number)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.full_name)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.updated_on)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.level)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.identity_number)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.status)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.canUpdateEntry);
} }
function GeneralRequestEntriesComponent_div_9_app_pagination_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 42);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entries-length", ctx_r9.$entriesLength)("entry-ref", ctx_r9.$entryRef)("page-number", ctx_r9.pageNumber);
} }
function GeneralRequestEntriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "caption", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Application Unique ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Date Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Student Identity No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GeneralRequestEntriesComponent_div_9_tr_32_Template, 15, 17, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GeneralRequestEntriesComponent_div_9_app_pagination_39_Template, 1, 3, "app-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnimation", ctx_r4.entries.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.entries)("ngForTrackBy", ctx_r4.trackByAppNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pageNumber);
} }
function GeneralRequestEntriesComponent_app_resource_unavailable_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 43);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r5.error);
} }
class GeneralRequestEntriesComponent {
    constructor(route, location, grs, gss, gas, ems, ns, aus) {
        this.route = route;
        this.location = location;
        this.grs = grs;
        this.gss = gss;
        this.gas = gas;
        this.ems = ems;
        this.ns = ns;
        this.aus = aus;
        this.entries = [];
        this.isError = false;
        this.esdl = [];
        this.p$esdl = false;
        this.pageNumber = 1;
        this.$entriesLength = 0;
        this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result) => {
            this.location.replaceState(`/general-request/t/${this.rslug}/entries`);
            this.pageNumber = 1;
            if (result == null) {
                this.entries = [];
                this.$entriesLength = 0;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry or Entries` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null && result.length > 0) {
                this.error = null;
                this.isError = false;
                this.$entriesLength = result.length;
                this.entries = result;
                if (this.entries.length <= 10)
                    this.pageNumber = 1;
                if (this.entries.length > 10)
                    this.entries.pop();
            }
        });
        this.clearSearchOb = this.gss.clearSearch$.subscribe((cleared) => {
            this.clearSearch$();
        });
        this.errorExistOb = this.gss.errorExist$.subscribe((exists) => {
            this.isError = exists;
        });
    }
    searchErr$(err) {
        this.error = null;
        this.isError = false;
    }
    clearSearch$() {
        this.error = null;
        this.isError = false;
        this.pageNumber = 1;
        this.location.replaceState(`/general-request/t/${this.rslug}/entries`);
        this.gss.searchCleared.next(true);
        this.getAllEntry({});
    }
    trackByAppNumber(idx, entry) {
        return entry.application_number;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.entries.systemType;
        this.title = data.entries.title;
        this.view = data.entries.view;
        this.link = data.entries.link;
        this.searchFilters = data.entries.searchFilters;
        this.grs.$systemType = this.systemType;
        this.route.queryParamMap.subscribe((params) => {
            let $p = this.route.snapshot.paramMap;
            let $q = this.gas.paramProcessor(params, this);
            this.rslug = $p.get('request');
            this.$link = `general-request/t/${this.rslug}`;
            this.grs.rtype = this.rslug;
            return this.getAllEntry($q);
        });
    }
    ngOnDestroy() {
        if (this.entriesSearchedOb != null)
            this.entriesSearchedOb.unsubscribe();
        if (this.clearSearchOb != null)
            this.clearSearchOb.unsubscribe();
        if (this.errorExistOb != null)
            this.errorExistOb.unsubscribe();
    }
    getAllEntry(sq) {
        this.grs.getAllEntry(sq)
            .subscribe((result) => {
            if (result == null) {
                this.entries = [];
                this.$entriesLength = 0;
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry or Entries` }, this.ems.message);
            }
            else if (result != null && result.length > 0) {
                this.error = null;
                this.isError = false;
                this.$entriesLength = result.length;
                this.entries = result;
            }
            if (this.entries.length > 10)
                this.entries.pop();
        });
    }
    addEntryToDeleteList(gridx, checked, idx) {
        this.gas.addEntryToDeleteList(gridx, checked, idx, this);
    }
    deleteManyEntry() {
        this.gas.deleteManyEntry(this, this.grs);
    }
    get userRole() {
        return this.aus.userRole;
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_5__["canUpdate"].indexOf(this.userRole) > -1;
    }
    get notificationAvailable() {
        return this.ns.notificationStatus();
    }
    get notificationMessage() {
        return this.ns.getNotificationMessage();
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
GeneralRequestEntriesComponent.ɵfac = function GeneralRequestEntriesComponent_Factory(t) { return new (t || GeneralRequestEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_9__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"])); };
GeneralRequestEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntriesComponent, selectors: [["app-general-request-entries"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"], _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]])], decls: 11, vars: 8, consts: [["id", "entry-main"], [4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [1, "search-bar"], [3, "system-type", "$link", "search-filters", 4, "ngIf"], [1, "entry-option", "entry-option-small", "center", 3, "click"], [3, "error", 4, "ngIf"], [3, "system-type", "view-type"], [3, "notified", "message", "finished"], [3, "system-type", "$link", "search-filters"], [1, "entries"], [1, "bold", "left"], [1, "index"], [1, "app-number"], [1, "full-name"], [1, "date"], [1, "level"], [1, "stdid"], [1, "status"], [1, "changes"], [1, "bold", "center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entries-length", "entry-ref", "page-number", 4, "ngIf"], [1, "center"], ["nilValue", ""], ["class", "center bold app-number", 4, "ngIf", "ngIfElse"], ["class", "center", 4, "ngIf", "ngIfElse"], ["class", "center", 3, "ngClass", 4, "ngIf", "ngIfElse"], [1, ""], [1, "center", "changes-option", "changes-option-full", 3, "routerLink"], ["class", "changes-mark", 4, "ngIf"], [1, "center", "bold", "app-number"], [1, "center", 3, "ngClass"], [1, "changes-mark"], [4, "ngIf", "ngIfElse"], ["normalChecks", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "click"], ["checked", ""], [1, "checkmark"], ["type", "checkbox", 3, "click"], [3, "entries-length", "entry-ref", "page-number"], [3, "error"]], template: function GeneralRequestEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntriesComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntriesComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntriesComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-entry-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntriesComponent_app_search_6_Template, 1, 3, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntriesComponent_Template_a_click_7_listener() { return ctx.deleteManyEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Many ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralRequestEntriesComponent_div_9_Template, 40, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralRequestEntriesComponent_app_resource_unavailable_10_Template, 1, 1, "app-resource-unavailable", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.esdl.length < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.$entriesLength > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__["ListEntryOptionsComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__["NotificationScreenComponent"], _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__["ResourceUnavailableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cmllcy5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entries',
                'templateUrl': './general-request-entries.component.html',
                'styleUrls': ['./general-request-entries.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"], _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_9__["GeneralRequestService"] }, { type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"] }, { type: _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "TkAe":
/*!****************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-detail/general-request-entry-detail.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralRequestEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryDetailComponent", function() { return GeneralRequestEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles */ "B+PW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-request-form.service */ "qC4T");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-detail/request-entry-detail.component */ "013A");
/* harmony import */ var _shared_component_request_entry_request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-student-detail/request-entry-student-detail.component */ "ujQ7");
/* harmony import */ var _general_request_entry_option_general_request_entry_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../general-request-entry-option/general-request-entry-option.component */ "jt8R");
/* harmony import */ var _shared_module_simples_file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/module/simples/file-attachments-two/file-attachments-two.component */ "6hA3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_request_entry_update_field_general_request_entry_update_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../general-request-entry-update-field/general-request-entry-update-field.component */ "hTCP");






















function GeneralRequestEntryDetailComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestEntryDetailComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function GeneralRequestEntryDetailComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function GeneralRequestEntryDetailComponent_app_notification_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralRequestEntryDetailComponent_app_notification_screen_4_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function GeneralRequestEntryDetailComponent_div_5_app_request_entry_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-detail", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r7.entry)("view", ctx_r7.view);
} }
function GeneralRequestEntryDetailComponent_div_5_app_request_entry_student_detail_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-student-detail", 14);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r8.entry);
} }
function GeneralRequestEntryDetailComponent_div_5_app_general_request_entry_option_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-general-request-entry-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReviewEntry", function GeneralRequestEntryDetailComponent_div_5_app_general_request_entry_option_3_Template_app_general_request_entry_option_onReviewEntry_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.$confirmEntryOnReview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r9.view)("entry", ctx_r9.entry)("link", ctx_r9.link)("system-type", ctx_r9.systemType);
} }
function GeneralRequestEntryDetailComponent_div_5_app_file_attachments_two_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-file-attachments-two", 14);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r10.entry);
} }
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_app_general_request_entry_update_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-general-request-entry-update-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("on-submit-btn", function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_app_general_request_entry_update_field_3_Template_app_general_request_entry_update_field_on_submit_btn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r17.openSubBtn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r15.entry)("entry-form", ctx_r15.entryForm)("system-type", ctx_r15.systemType);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r19.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.isFormValid);
} }
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_button_1_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_p_2_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isFormSubmitted);
} }
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.updateEntry(ctx_r21.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_app_general_request_entry_update_field_3_Template, 1, 3, "app-general-request-entry-update-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.readyToSubmit == true);
} }
function GeneralRequestEntryDetailComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDetailComponent_div_5_ng_container_5_ng_container_1_Template, 5, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.canUpdateEntry);
} }
function GeneralRequestEntryDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDetailComponent_div_5_app_request_entry_detail_1_Template, 1, 2, "app-request-entry-detail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDetailComponent_div_5_app_request_entry_student_detail_2_Template, 1, 1, "app-request-entry-student-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDetailComponent_div_5_app_general_request_entry_option_3_Template, 1, 4, "app-general-request-entry-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryDetailComponent_div_5_app_file_attachments_two_4_Template, 1, 1, "app-file-attachments-two", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryDetailComponent_div_5_ng_container_5_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry != null && (ctx_r4.entry == null ? null : ctx_r4.entry.status) != "Pending" && (ctx_r4.entry == null ? null : ctx_r4.entry.status) != "Fulfilled" && (ctx_r4.entry == null ? null : ctx_r4.entry.status) != "Rejected");
} }
class GeneralRequestEntryDetailComponent {
    constructor(router, route, grs, ns, grfs, ems, aus) {
        this.router = router;
        this.route = route;
        this.grs = grs;
        this.ns = ns;
        this.grfs = grfs;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.detail.systemType;
        this.title = data.detail.title;
        this.view = data.detail.view;
        this.viewWord = data.detail.viewWord;
        this.link = data.detail.link;
        this.generateCred = data.detail.generateCred;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            let $r = params.get('request');
            this.rslug = $r;
            this.eslug = $e;
            return this.grs.getEntry($r, $e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
                this.entryForm = this.grfs.entryUpdateForm();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    updateEntry($entry) {
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.isFormSubmitted = true;
        this.grs.updateEntry$(this.rslug, this.eslug, $entry)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);
            }
            if (result != null && result.updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);
                this.$entryChanges($entry.$data);
            }
        });
    }
    $entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['general-request', 't', this.rslug, 'entries']);
        }, 5000);
    }
    $confirmEntryOnReview(result) {
        this.entry.status = result.status;
    }
    openSubBtn(toSubmit) {
        if (toSubmit == true) {
            this.readyToSubmit = true;
        }
    }
    get notificationAvailable() {
        return this.ns.notificationStatus();
    }
    get notificationMessage() {
        return this.ns.getNotificationMessage();
    }
    get userRole() {
        return this.aus.userRole;
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_4__["canUpdate"].indexOf(this.userRole) > -1;
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
GeneralRequestEntryDetailComponent.ɵfac = function GeneralRequestEntryDetailComponent_Factory(t) { return new (t || GeneralRequestEntryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"])); };
GeneralRequestEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryDetailComponent, selectors: [["app-general-request-entry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "entry-view"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "request-entry-detail", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], [3, "notified", "message", "finished"], ["id", "request-entry-detail"], [3, "entry", "view", 4, "ngIf"], [3, "entry", 4, "ngIf"], [3, "view", "entry", "link", "system-type", "onReviewEntry", 4, "ngIf"], [3, "entry", "view"], [3, "entry"], [3, "view", "entry", "link", "system-type", "onReviewEntry"], ["id", "entry-detail-form"], ["method", "post", 3, "formGroup", "ngSubmit"], [3, "entry", "entry-form", "system-type", "on-submit-btn", 4, "ngIf"], [3, "entry", "entry-form", "system-type", "on-submit-btn"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function GeneralRequestEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryDetailComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryDetailComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryDetailComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryDetailComponent_app_notification_screen_4_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryDetailComponent_div_5_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__["NotificationScreenComponent"], _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__["RequestEntryDetailComponent"], _shared_component_request_entry_request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_14__["RequestEntryStudentDetailComponent"], _general_request_entry_option_general_request_entry_option_component__WEBPACK_IMPORTED_MODULE_15__["GeneralRequestEntryOptionComponent"], _shared_module_simples_file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_16__["FileAttachmentsTwoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _general_request_entry_update_field_general_request_entry_update_field_component__WEBPACK_IMPORTED_MODULE_18__["GeneralRequestEntryUpdateFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-detail',
                'templateUrl': './general-request-entry-detail.component.html',
                'styleUrls': ['./general-request-entry-detail.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _general_request_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestFormService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "Wo98":
/*!********************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-homepage/general-request-homepage.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GeneralRequestHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestHomepageComponent", function() { return GeneralRequestHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class GeneralRequestHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
GeneralRequestHomepageComponent.ɵfac = function GeneralRequestHomepageComponent_Factory(t) { return new (t || GeneralRequestHomepageComponent)(); };
GeneralRequestHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestHomepageComponent, selectors: [["app-general-request-homepage"]], decls: 1, vars: 0, template: function GeneralRequestHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-homepage',
                'templateUrl': './general-request-homepage.component.html',
                'styleUrls': ['./general-request-homepage.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YhH2":
/*!*******************************************************************************!*\
  !*** ./src/app/account/general-request/generate-username-password.service.ts ***!
  \*******************************************************************************/
/*! exports provided: GenerateUsernamePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateUsernamePasswordService", function() { return GenerateUsernamePasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/error-messages.service */ "EUGn");







class GenerateUsernamePasswordService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
    }
    createUsernamePassword$(credentials) {
        let link = `${this.apiConfig.host}/request-credential/entry/create`;
        let httpOptions = { 'headers': { 'Content-Type': 'application/json' } };
        return this.http.post(link, credentials, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Credentials Entry`, null)));
    }
    createPassword$(credentials) {
        let link = `${this.apiConfig.host}/request-password/entry/create`;
        let httpOptions = { 'headers': { 'Content-Type': 'application/json' } };
        return this.http.post(link, credentials, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Credentials Entry`, null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
GenerateUsernamePasswordService.ɵfac = function GenerateUsernamePasswordService_Factory(t) { return new (t || GenerateUsernamePasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GenerateUsernamePasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenerateUsernamePasswordService, factory: GenerateUsernamePasswordService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateUsernamePasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "f5lg":
/*!****************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-create-reply/general-request-create-reply.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralRequestCreateReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestCreateReplyComponent", function() { return GeneralRequestCreateReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/reply/reply-create-form.service */ "41Vw");
/* harmony import */ var _shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/reply/reply-create.service */ "Mwf2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_reply_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/reply/entry-reply-create/entry-reply-create.component */ "zki3");












function GeneralRequestCreateReplyComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestCreateReplyComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function GeneralRequestCreateReplyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-entry-reply-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function GeneralRequestCreateReplyComponent_ng_container_3_Template_app_entry_reply_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("comment", ctx_r2.comment)("entry-create-form", ctx_r2.entryCreateForm);
} }
class GeneralRequestCreateReplyComponent {
    constructor(route, router, grs, rcfs, rcs, ems) {
        this.route = route;
        this.router = router;
        this.grs = grs;
        this.rcfs = rcfs;
        this.rcs = rcs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.reply.systemType;
        this.title = data.reply.title;
        this.view = data.reply.view;
        this.link = data.reply.link;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $r = params.get('request');
            let $e = params.get('entry');
            let $c = params.get('comment');
            this.rslug = $r;
            this.eslug = $e;
            this.cslug = $c;
            return this.grs.addReply($r, $e, $c);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.permitted == true) {
                this.entry = result.$data.Entry;
                this.comment = result.$data.Comment;
                this.entryCreateForm = this.rcfs.entryCreateForm();
                let authorName = this.comment.author.full_name;
                this.entryCreateForm.patchValue({ 'comment_author_name': authorName });
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryCreatedT);
    }
    createEntry(body) {
        this.error = null;
        this.isError = false;
        this.grs.addReply$(this.rslug, this.eslug, this.cslug, body)
            .subscribe((result) => {
            if (result == null) {
                this.rcs.isEntryCreated.next(false);
            }
            if (result != null && result.updated == true) {
                this.rcs.isEntryCreated.next(true);
                this.entryChanges(result.$data);
            }
        });
    }
    entryChanges(data) {
        this.entryCreatedT = setTimeout(() => {
            return this.router.navigate(['general-request', 't', this.rslug, 'entries']);
        }, 5000);
    }
}
GeneralRequestCreateReplyComponent.ɵfac = function GeneralRequestCreateReplyComponent_Factory(t) { return new (t || GeneralRequestCreateReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__["ReplyCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__["ReplyCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
GeneralRequestCreateReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestCreateReplyComponent, selectors: [["app-general-request-create-reply"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "general-entry"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "view", "entry", "comment", "entry-create-form", "processEntry"]], template: function GeneralRequestCreateReplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestCreateReplyComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestCreateReplyComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestCreateReplyComponent_ng_container_3_Template, 2, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"], _shared_component_reply_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_9__["EntryReplyCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtY3JlYXRlLXJlcGx5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestCreateReplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-create-reply',
                'templateUrl': './general-request-create-reply.component.html',
                'styleUrls': ['./general-request-create-reply.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestService"] }, { type: _shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__["ReplyCreateFormService"] }, { type: _shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__["ReplyCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "ghUV":
/*!*******************************************************************!*\
  !*** ./src/app/account/general-request/general-request.module.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestModule", function() { return GeneralRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/general.module */ "hxwH");
/* harmony import */ var _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/module/simples/simples.module */ "O/oE");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/component/request-entry/request-entry.module */ "FVf3");
/* harmony import */ var _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/component/comment/comment.module */ "DQuc");
/* harmony import */ var _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/component/reply/reply.module */ "vipk");
/* harmony import */ var _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/module/general-all/general-all.module */ "T+6q");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/general-services.module */ "kPid");
/* harmony import */ var _general_request_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-request-routing.module */ "Q94X");
/* harmony import */ var _general_request_homepage_general_request_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-request-homepage/general-request-homepage.component */ "Wo98");
/* harmony import */ var _general_request_dashboard_general_request_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-request-dashboard/general-request-dashboard.component */ "Keds");
/* harmony import */ var _general_request_entry_dashboard_general_request_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-request-entry-dashboard/general-request-entry-dashboard.component */ "9ySI");
/* harmony import */ var _general_request_entries_general_request_entries_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general-request-entries/general-request-entries.component */ "TNCL");
/* harmony import */ var _general_request_entry_detail_general_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general-request-entry-detail/general-request-entry-detail.component */ "TkAe");
/* harmony import */ var _general_request_entry_timeline_general_request_entry_timeline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general-request-entry-timeline/general-request-entry-timeline.component */ "7I/V");
/* harmony import */ var _general_request_create_comment_general_request_create_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./general-request-create-comment/general-request-create-comment.component */ "ohbn");
/* harmony import */ var _general_request_create_reply_general_request_create_reply_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./general-request-create-reply/general-request-create-reply.component */ "f5lg");
/* harmony import */ var _general_request_entry_transfer_general_request_entry_transfer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./general-request-entry-transfer/general-request-entry-transfer.component */ "rqdH");
/* harmony import */ var _general_request_entry_delete_all_general_request_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./general-request-entry-delete-all/general-request-entry-delete-all.component */ "T7yI");
/* harmony import */ var _general_request_entry_option_general_request_entry_option_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./general-request-entry-option/general-request-entry-option.component */ "jt8R");
/* harmony import */ var _general_request_entry_update_field_general_request_entry_update_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./general-request-entry-update-field/general-request-entry-update-field.component */ "hTCP");
/* harmony import */ var _general_request_entry_generate_password_general_request_entry_generate_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./general-request-entry-generate-password/general-request-entry-generate-password.component */ "GFOR");
/* harmony import */ var _general_request_entry_generate_username_password_general_request_entry_generate_username_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./general-request-entry-generate-username-password/general-request-entry-generate-username-password.component */ "8qr7");
/* harmony import */ var _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./general-request-entry-credential-validator/general-request-entry-credential-validator.component */ "ShQc");
/* harmony import */ var _general_request_entry_transfer_validator_general_request_entry_transfer_validator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./general-request-entry-transfer-validator/general-request-entry-transfer-validator.component */ "9G3S");
/* harmony import */ var _generate_username_password_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./generate-username-password.service */ "YhH2");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./general-request.service */ "kyVf");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./general-request-form.service */ "qC4T");
































class GeneralRequestModule {
}
GeneralRequestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestModule });
GeneralRequestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestModule_Factory(t) { return new (t || GeneralRequestModule)(); }, providers: [
        _general_request_service__WEBPACK_IMPORTED_MODULE_29__["GeneralRequestService"],
        _general_request_form_service__WEBPACK_IMPORTED_MODULE_30__["GeneralRequestFormService"],
        _generate_username_password_service__WEBPACK_IMPORTED_MODULE_28__["GenerateUsernamePasswordService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _general_request_routing_module__WEBPACK_IMPORTED_MODULE_11__["GeneralRequestRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
            _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
            _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
            _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
            _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestModule, { declarations: [_general_request_homepage_general_request_homepage_component__WEBPACK_IMPORTED_MODULE_12__["GeneralRequestHomepageComponent"],
        _general_request_dashboard_general_request_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["GeneralRequestDashboardComponent"],
        _general_request_entry_dashboard_general_request_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["GeneralRequestEntryDashboardComponent"],
        _general_request_entries_general_request_entries_component__WEBPACK_IMPORTED_MODULE_15__["GeneralRequestEntriesComponent"],
        _general_request_entry_detail_general_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_16__["GeneralRequestEntryDetailComponent"],
        _general_request_entry_timeline_general_request_entry_timeline_component__WEBPACK_IMPORTED_MODULE_17__["GeneralRequestEntryTimelineComponent"],
        _general_request_create_comment_general_request_create_comment_component__WEBPACK_IMPORTED_MODULE_18__["GeneralRequestCreateCommentComponent"],
        _general_request_create_reply_general_request_create_reply_component__WEBPACK_IMPORTED_MODULE_19__["GeneralRequestCreateReplyComponent"],
        _general_request_entry_transfer_general_request_entry_transfer_component__WEBPACK_IMPORTED_MODULE_20__["GeneralRequestEntryTransferComponent"],
        _general_request_entry_delete_all_general_request_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__["GeneralRequestEntryDeleteAllComponent"],
        _general_request_entry_option_general_request_entry_option_component__WEBPACK_IMPORTED_MODULE_22__["GeneralRequestEntryOptionComponent"],
        _general_request_entry_update_field_general_request_entry_update_field_component__WEBPACK_IMPORTED_MODULE_23__["GeneralRequestEntryUpdateFieldComponent"],
        _general_request_entry_generate_password_general_request_entry_generate_password_component__WEBPACK_IMPORTED_MODULE_24__["GeneralRequestEntryGeneratePasswordComponent"],
        _general_request_entry_generate_username_password_general_request_entry_generate_username_password_component__WEBPACK_IMPORTED_MODULE_25__["GeneralRequestEntryGenerateUsernamePasswordComponent"],
        _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_26__["GeneralRequestEntryCredentialValidatorComponent"],
        _general_request_entry_transfer_validator_general_request_entry_transfer_validator_component__WEBPACK_IMPORTED_MODULE_27__["GeneralRequestEntryTransferValidatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _general_request_routing_module__WEBPACK_IMPORTED_MODULE_11__["GeneralRequestRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
        _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
        _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
        _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
        _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
        _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _general_request_homepage_general_request_homepage_component__WEBPACK_IMPORTED_MODULE_12__["GeneralRequestHomepageComponent"],
                    _general_request_dashboard_general_request_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["GeneralRequestDashboardComponent"],
                    _general_request_entry_dashboard_general_request_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["GeneralRequestEntryDashboardComponent"],
                    _general_request_entries_general_request_entries_component__WEBPACK_IMPORTED_MODULE_15__["GeneralRequestEntriesComponent"],
                    _general_request_entry_detail_general_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_16__["GeneralRequestEntryDetailComponent"],
                    _general_request_entry_timeline_general_request_entry_timeline_component__WEBPACK_IMPORTED_MODULE_17__["GeneralRequestEntryTimelineComponent"],
                    _general_request_create_comment_general_request_create_comment_component__WEBPACK_IMPORTED_MODULE_18__["GeneralRequestCreateCommentComponent"],
                    _general_request_create_reply_general_request_create_reply_component__WEBPACK_IMPORTED_MODULE_19__["GeneralRequestCreateReplyComponent"],
                    _general_request_entry_transfer_general_request_entry_transfer_component__WEBPACK_IMPORTED_MODULE_20__["GeneralRequestEntryTransferComponent"],
                    _general_request_entry_delete_all_general_request_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__["GeneralRequestEntryDeleteAllComponent"],
                    _general_request_entry_option_general_request_entry_option_component__WEBPACK_IMPORTED_MODULE_22__["GeneralRequestEntryOptionComponent"],
                    _general_request_entry_update_field_general_request_entry_update_field_component__WEBPACK_IMPORTED_MODULE_23__["GeneralRequestEntryUpdateFieldComponent"],
                    _general_request_entry_generate_password_general_request_entry_generate_password_component__WEBPACK_IMPORTED_MODULE_24__["GeneralRequestEntryGeneratePasswordComponent"],
                    _general_request_entry_generate_username_password_general_request_entry_generate_username_password_component__WEBPACK_IMPORTED_MODULE_25__["GeneralRequestEntryGenerateUsernamePasswordComponent"],
                    _general_request_entry_credential_validator_general_request_entry_credential_validator_component__WEBPACK_IMPORTED_MODULE_26__["GeneralRequestEntryCredentialValidatorComponent"],
                    _general_request_entry_transfer_validator_general_request_entry_transfer_validator_component__WEBPACK_IMPORTED_MODULE_27__["GeneralRequestEntryTransferValidatorComponent"]
                ],
                providers: [
                    _general_request_service__WEBPACK_IMPORTED_MODULE_29__["GeneralRequestService"],
                    _general_request_form_service__WEBPACK_IMPORTED_MODULE_30__["GeneralRequestFormService"],
                    _generate_username_password_service__WEBPACK_IMPORTED_MODULE_28__["GenerateUsernamePasswordService"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _general_request_routing_module__WEBPACK_IMPORTED_MODULE_11__["GeneralRequestRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
                    _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
                    _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
                    _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
                    _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
                    _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hTCP":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-update-field/general-request-entry-update-field.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryUpdateFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryUpdateFieldComponent", function() { return GeneralRequestEntryUpdateFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-request-form.service */ "qC4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-update-validator/request-entry-update-validator.component */ "yHSd");
/* harmony import */ var _general_request_entry_generate_username_password_general_request_entry_generate_username_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-request-entry-generate-username-password/general-request-entry-generate-username-password.component */ "8qr7");
/* harmony import */ var _general_request_entry_generate_password_general_request_entry_generate_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-request-entry-generate-password/general-request-entry-generate-password.component */ "GFOR");










function GeneralRequestEntryUpdateFieldComponent_ng_container_0_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntryUpdateFieldComponent_ng_container_0_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.otherCol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r14.name, " ");
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_ng_container_1_option_2_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.estatuses);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.entry == null ? null : ctx_r10.entry.status);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_app_request_entry_update_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-update-validator", 15);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r11.systemType)("status", ctx_r11.status);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_app_request_entry_update_validator_5_Template, 1, 2, "app-request-entry-update-validator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.estatuses != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.status);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_2_app_request_entry_update_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-update-validator", 19);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r15.systemType)("text", ctx_r15.text);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_2_app_request_entry_update_validator_5_Template, 1, 2, "app-request-entry-update-validator", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.text);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Additional Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Username and Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.otherOptions);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_5_app_general_request_entry_generate_username_password_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-request-entry-generate-username-password", 26);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r16.systemType)("entry", ctx_r16.entry)("entry-form", ctx_r16.entryForm);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_5_app_general_request_entry_generate_username_password_1_Template, 1, 3, "app-general-request-entry-generate-username-password", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.entry);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_6_app_general_request_entry_generate_password_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-request-entry-generate-password", 26);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r17.systemType)("entry", ctx_r17.entry)("entry-form", ctx_r17.entryForm);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_6_app_general_request_entry_generate_password_1_Template, 1, 3, "app-general-request-entry-generate-password", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.entry);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_1_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_2_Template, 6, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_div_3_Template, 9, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_5_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_ng_container_6_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.otherOptions.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
} }
function GeneralRequestEntryUpdateFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryUpdateFieldComponent_ng_container_0_a_5_Template, 2, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryUpdateFieldComponent_ng_container_0_ng_container_6_Template, 7, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isOtherColAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOtherColAvailable == true);
} }
class GeneralRequestEntryUpdateFieldComponent {
    constructor(grs, grfs) {
        this.grs = grs;
        this.grfs = grfs;
        this.isOtherColAvailable = false;
        this.otherOptions = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.setSubmitButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    otherCol() {
        this.grs.status()
            .subscribe((result) => {
            if (result != null) {
                this.isOtherColAvailable = true;
                this.estatuses = result.Status;
                this.eother = { 'Status': result.Status };
                this.setSubmitButton.emit(true);
                this.grfs.createPermanent(this.eother, this.entryForm);
            }
        });
    }
    get status() {
        return this.entryForm.get('status');
    }
    get text() {
        return this.entryForm.get('text');
    }
}
GeneralRequestEntryUpdateFieldComponent.ɵfac = function GeneralRequestEntryUpdateFieldComponent_Factory(t) { return new (t || GeneralRequestEntryUpdateFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"])); };
GeneralRequestEntryUpdateFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryUpdateFieldComponent, selectors: [["app-general-request-entry-update-field"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], entry: "entry" }, outputs: { setSubmitButton: "on-submit-btn" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "center"], [3, "formGroup"], ["id", "entry-detail-options"], ["class", "center", 3, "click", 4, "ngIf"], [1, "center", 3, "click"], ["class", "form-group", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "form-group"], ["for", "status", 1, "form-label", "bold"], ["name", "status", "id", "status", "formControlName", "status", 1, "form-control"], [3, "system-type", "status", 4, "ngIf"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "status"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "formControlName", "text"], [3, "system-type", "text", 4, "ngIf"], [3, "system-type", "text"], ["for", "addition-input", 1, "form-label", "bold"], ["name", "other-options", "id", "addition-input", 1, "form-control", 3, "formControl"], ["value", ""], ["value", "1"], ["value", "2"], [3, "system-type", "entry", "entry-form", 4, "ngIf"], [3, "system-type", "entry", "entry-form"]], template: function GeneralRequestEntryUpdateFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryUpdateFieldComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_5__["RequestEntryUpdateValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _general_request_entry_generate_username_password_general_request_entry_generate_username_password_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestEntryGenerateUsernamePasswordComponent"], _general_request_entry_generate_password_general_request_entry_generate_password_component__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntryGeneratePasswordComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktdXBkYXRlLWZpZWxkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryUpdateFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-update-field',
                'templateUrl': './general-request-entry-update-field.component.html',
                'styleUrls': ['./general-request-entry-update-field.component.css']
            }]
    }], function () { return [{ type: _general_request_service__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestService"] }, { type: _general_request_form_service__WEBPACK_IMPORTED_MODULE_3__["GeneralRequestFormService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setSubmitButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['on-submit-btn']
        }] }); })();


/***/ }),

/***/ "jt8R":
/*!****************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-option/general-request-entry-option.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralRequestEntryOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryOptionComponent", function() { return GeneralRequestEntryOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../roles */ "B+PW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");










function GeneralRequestEntryOptionComponent_app_notification_screen_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralRequestEntryOptionComponent_app_notification_screen_0_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r0.notificationAvailable)("message", ctx_r0.notificationMessage);
} }
const _c0 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "timeline"]; };
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx_r4.isAdmin, ctx_r4.rslug, ctx_r4.entry == null ? null : ctx_r4.entry.slug));
} }
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.setEntryOnReview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Set Application on Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your request is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.canUpdateEntry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isProcessingReview);
} }
const _c1 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "transfer"]; };
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Transfer or Move Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c1, ctx_r12.isAdmin, ctx_r12.rslug, ctx_r12.entry == null ? null : ctx_r12.entry.slug));
} }
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_4_ng_container_1_Template, 3, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.canUpdateEntry);
} }
const _c2 = function (a0, a2, a4) { return [a0, "t", a2, "entry", a4, "comment", "add"]; };
function GeneralRequestEntryOptionComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add a Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c2, ctx_r7.isAdmin, ctx_r7.rslug, ctx_r7.entry == null ? null : ctx_r7.entry.slug));
} }
function GeneralRequestEntryOptionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_2_Template, 3, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryOptionComponent_ng_container_1_ng_container_5_Template, 3, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Review" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Update" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Fulfilled" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Review" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Update" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Transferred");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Update" || (ctx_r1.entry == null ? null : ctx_r1.entry.status) == "Transferred");
} }
class GeneralRequestEntryOptionComponent {
    constructor(route, aus, grs, ns) {
        this.route = route;
        this.aus = aus;
        this.grs = grs;
        this.ns = ns;
        this.onReviewEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.route.paramMap
            .subscribe((params) => {
            let $r = params.get('request');
            this.rslug = $r;
        });
    }
    setEntryOnReview(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isProcessingReview != true) {
            this.isProcessingReview = true;
            this.grs.confirmEntryOnReview$(this.rslug, this.entry.slug)
                .subscribe((result) => {
                if (result == null) {
                    this.isProcessingReview = false;
                    this.ns.setNotificationStatus(true);
                    this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);
                }
                if (result != null && result.onReview == true) {
                    this.isProcessingReview = false;
                    this.ns.setNotificationStatus(true);
                    this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and on review.`);
                    this.onReviewEntry.emit(result.$data);
                }
            });
        }
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_2__["canUpdate"].indexOf(this.userRole) > -1;
    }
    get userRole() {
        return this.aus.userRole;
    }
    get isAdmin() {
        if (['moderator', 'administrator', 'superAdministrator'].indexOf(this.userRole) > -1)
            return '/general-request';
        return '/general-request';
    }
    get notificationAvailable() {
        return this.ns.notificationStatus();
    }
    get notificationMessage() {
        return this.ns.getNotificationMessage();
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
GeneralRequestEntryOptionComponent.ɵfac = function GeneralRequestEntryOptionComponent_Factory(t) { return new (t || GeneralRequestEntryOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"])); };
GeneralRequestEntryOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryOptionComponent, selectors: [["app-general-request-entry-option"]], inputs: { systemType: ["system-type", "systemType"], view: "view", link: "link", entry: "entry" }, outputs: { onReviewEntry: "onReviewEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])], decls: 2, vars: 2, consts: [[3, "notified", "message", "finished", 4, "ngIf"], [4, "ngIf"], [3, "notified", "message", "finished"], ["id", "entry-detail-options"], [1, "center", 3, "routerLink"], [1, "center", 3, "click"]], template: function GeneralRequestEntryOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralRequestEntryOptionComponent_app_notification_screen_0_Template, 1, 2, "app-notification-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryOptionComponent_ng_container_1_Template, 6, 4, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_7__["NotificationScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktb3B0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-option',
                'templateUrl': './general-request-entry-option.component.html',
                'styleUrls': ['./general-request-entry-option.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onReviewEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "kyVf":
/*!********************************************************************!*\
  !*** ./src/app/account/general-request/general-request.service.ts ***!
  \********************************************************************/
/*! exports provided: GeneralRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestService", function() { return GeneralRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/error-messages.service */ "EUGn");







class GeneralRequestService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.$systemType = 'General Request';
        this.$sa = 'general-request';
    }
    manageRequest() {
        let link = `${this.apiConfig.host}/${this.$sa}/manage`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Request Type Entries`, null)));
    }
    manageRequestEntry(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/manage/t/${entry}`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Request Type Entry`, null)));
    }
    getAllEntry(params) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${this.rtype}/entries`;
        let httpOptions = { 'params': params };
        return this.http.get(link, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries`, null)));
    }
    getEntry(rtype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/detail`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addComment(rtype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Comment Entry`, null)));
    }
    addComment$(rtype, entry, comment) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment`;
        return this.http.post(link, comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Comment Entry`, null)));
    }
    addReply(rtype, entry, comment) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment/${comment}/reply`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => { console.log(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Reply Entry`, null)));
    }
    addReply$(rtype, entry, comment, reply) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/comment/${comment}/reply`;
        return this.http.post(link, reply)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => { console.log(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Reply Entry`, null)));
    }
    getTimeline(rtype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/timeline`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry Timeline`, null)));
    }
    updateEntry$(rtype, entry, request) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/detail`;
        return this.http.put(link, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    confirmEntryOnReview$(rtype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/review`;
        return this.http.put(link, { 'entry': entry })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'onReview': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    status() {
        let link = `${this.apiConfig.host}/${this.$sa}/status`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    transferEntry(rtype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/transfer`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    transferEntry$(rtype, entry, request) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/${entry}/transfer`;
        return this.http.put(link, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    deleteManyEntry$(rtype, arrayIdx) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${this.rtype}/delete/entry/many`;
        let body = { 'entries': arrayIdx };
        return this.http.patch(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'manyDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries Delete`, null)));
    }
    deleteAllEntry(rtype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/delete/entry/all/`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    deleteAllEntry$(rtype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/$rtype/delete/entry/all/`;
        return this.http.delete(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'allDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
GeneralRequestService.ɵfac = function GeneralRequestService_Factory(t) { return new (t || GeneralRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GeneralRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralRequestService, factory: GeneralRequestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "ohbn":
/*!********************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-create-comment/general-request-create-comment.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GeneralRequestCreateCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestCreateCommentComponent", function() { return GeneralRequestCreateCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/comment/comment-create-form.service */ "eIaO");
/* harmony import */ var _shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/comment/comment-create.service */ "7U3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_comment_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/comment/entry-comment-create/entry-comment-create.component */ "x7qt");












function GeneralRequestCreateCommentComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestCreateCommentComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function GeneralRequestCreateCommentComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-entry-comment-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function GeneralRequestCreateCommentComponent_ng_container_3_Template_app_entry_comment_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("entry-create-form", ctx_r2.entryCreateForm);
} }
class GeneralRequestCreateCommentComponent {
    constructor(route, router, grs, ccfs, ccs, ems) {
        this.route = route;
        this.router = router;
        this.grs = grs;
        this.ccfs = ccfs;
        this.ccs = ccs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.comment.systemType;
        this.title = data.comment.title;
        this.view = data.comment.view;
        this.link = data.comment.link;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            let $r = params.get('request');
            this.rslug = $r;
            this.eslug = $e;
            return this.grs.addComment($r, $e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.permitted == true) {
                this.entry = result.$data;
                this.entryCreateForm = this.ccfs.entryCreateForm();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryCreateT);
    }
    createEntry(body) {
        this.error = null;
        this.isError = false;
        this.grs.addComment$(this.rslug, this.eslug, body)
            .subscribe((result) => {
            if (result == null) {
                this.ccs.isEntryCreated.next(false);
            }
            if (result != null && result.updated == true) {
                this.ccs.isEntryCreated.next(true);
                this.entryChanges(result.$data);
            }
        });
    }
    entryChanges(data) {
        this.entryCreateT = setTimeout(() => {
            return this.router.navigate(['general-request', 't', this.rslug, 'entries']);
        }, 5000);
    }
}
GeneralRequestCreateCommentComponent.ɵfac = function GeneralRequestCreateCommentComponent_Factory(t) { return new (t || GeneralRequestCreateCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__["CommentCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__["CommentCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
GeneralRequestCreateCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestCreateCommentComponent, selectors: [["app-general-request-create-comment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "general-entry"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "view", "entry", "entry-create-form", "processEntry"]], template: function GeneralRequestCreateCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestCreateCommentComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestCreateCommentComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestCreateCommentComponent_ng_container_3_Template, 2, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"], _shared_component_comment_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_9__["EntryCommentCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestCreateCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-create-comment',
                'templateUrl': './general-request-create-comment.component.html',
                'styleUrls': ['./general-request-create-comment.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestService"] }, { type: _shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__["CommentCreateFormService"] }, { type: _shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__["CommentCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "qC4T":
/*!*************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-form.service.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralRequestFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestFormService", function() { return GeneralRequestFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/dynamic-control-validator */ "tTBu");





class GeneralRequestFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.permanentProps = {
            'unit': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)],
            'status': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)]
        };
        this.otherCtrls = {
            'request_type': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000000)],
            'unit': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000000)],
            'username': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)],
            'password': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]
        };
    }
    getPermanentProp(prop) {
        return this.permanentProps[prop];
    }
    removeControls(controls, form) {
        if (controls != null && controls.length > 0) {
            controls.forEach((control) => {
                let ctrl = form.get(control);
                return ctrl ? form.removeControl(control) : null;
            });
        }
    }
    entryUpdateForm() {
        let form = this.fb.group({
            'text': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)] }],
            'status': ['', { 'validators': [...this.getPermanentProp('status')] }]
        });
        return form;
    }
    entryTransferForm() {
        let form = this.fb.group({
            'text': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)] }],
            'unit': ['', { 'validators': [...this.getPermanentProp('unit')] }]
        });
        return form;
    }
    createPermanent(datas, form) {
        if (datas != null) {
            for (let $prop in datas) {
                let propVal = $prop.toLowerCase();
                this.permanentData[propVal] = datas[$prop];
                form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal], Object(_shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_2__["dynamicDataValidator"])(this.getMyData(propVal), $prop)]) : null;
                form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
            }
            form.updateValueAndValidity();
        }
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
}
GeneralRequestFormService.ɵfac = function GeneralRequestFormService_Factory(t) { return new (t || GeneralRequestFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GeneralRequestFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralRequestFormService, factory: GeneralRequestFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "rqdH":
/*!********************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-transfer/general-request-entry-transfer.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GeneralRequestEntryTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryTransferComponent", function() { return GeneralRequestEntryTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _request_others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-others */ "B4yo");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roles */ "B+PW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-request.service */ "kyVf");
/* harmony import */ var _general_request_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general-request-form.service */ "qC4T");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-detail/request-entry-detail.component */ "013A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_request_entry_transfer_validator_general_request_entry_transfer_validator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../general-request-entry-transfer-validator/general-request-entry-transfer-validator.component */ "9G3S");
/* harmony import */ var _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-update-validator/request-entry-update-validator.component */ "yHSd");





















function GeneralRequestEntryTransferComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function GeneralRequestEntryTransferComponent_app_resource_unavailable_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function GeneralRequestEntryTransferComponent_app_notification_screen_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralRequestEntryTransferComponent_app_notification_screen_5_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function GeneralRequestEntryTransferComponent_div_6_app_request_entry_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-detail", 11);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r6.entry);
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_ng_container_5_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r14.name, " ");
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Set Request new Unit or Office * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_ng_container_5_option_6_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-general-request-entry-transfer-validator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.generalOthers == null ? null : ctx_r9.generalOthers.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unit", ctx_r9.unit);
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-request-entry-update-validator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r10.text);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r11.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.isFormValid);
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Request Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.updateEntry(ctx_r15.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_ng_container_5_Template, 8, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_div_6_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_button_7_Template, 2, 5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_p_8_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r8.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.generalOthers && (ctx_r8.generalOthers == null ? null : ctx_r8.generalOthers.units) != null && (ctx_r8.generalOthers == null ? null : ctx_r8.generalOthers.units == null ? null : ctx_r8.generalOthers.units.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isFormSubmitted);
} }
function GeneralRequestEntryTransferComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTransferComponent_div_6_ng_container_2_ng_container_1_Template, 9, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.canUpdateEntry);
} }
function GeneralRequestEntryTransferComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryTransferComponent_div_6_app_request_entry_detail_1_Template, 1, 1, "app-request-entry-detail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryTransferComponent_div_6_ng_container_2_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry && (ctx_r3.entry == null ? null : ctx_r3.entry.status) != "Pending" && (ctx_r3.entry == null ? null : ctx_r3.entry.status) != "Fulfilled" && (ctx_r3.entry == null ? null : ctx_r3.entry.status) != "Rejected");
} }
class GeneralRequestEntryTransferComponent {
    constructor(router, route, grs, ns, grfs, ems, aus) {
        this.router = router;
        this.route = route;
        this.grs = grs;
        this.ns = ns;
        this.grfs = grfs;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.transfer.systemType;
        this.title = data.transfer.title;
        this.view = data.transfer.view;
        this.viewWord = data.transfer.viewWord;
        this.link = data.transfer.link;
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $r = params.get('request');
            let $e = params.get('entry');
            this.eslug = $e;
            this.rslug = $r;
            return this.grs.transferEntry($r, $e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.permitted == true) {
                this.entry = result.$data.Entry;
                this.generalOthers = result.$data != null ? new _request_others__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestOther"](result.$data) : {};
                this.entryForm = this.grfs.entryTransferForm();
                this.grfs.createPermanent(result.$data.Unit, this.entryForm);
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    updateEntry(body) {
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.isFormSubmitted = true;
        this.grs.transferEntry$(this.rslug, this.eslug, body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);
            }
            else if (result != null && result.updated) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and transferred.`);
                return this.entryChanges(result.$data);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['general-request', 't', this.rslug, 'entries']);
        }, 5000);
    }
    get notificationAvailable() {
        return this.ns.notificationStatus();
    }
    get notificationMessage() {
        return this.ns.getNotificationMessage();
    }
    get userRole() {
        return this.aus.userRole;
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_5__["canUpdate"].indexOf(this.userRole) > -1;
    }
    get text() {
        return this.entryForm.get('text');
    }
    get unit() {
        return this.entryForm.get('unit');
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
GeneralRequestEntryTransferComponent.ɵfac = function GeneralRequestEntryTransferComponent_Factory(t) { return new (t || GeneralRequestEntryTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"])); };
GeneralRequestEntryTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryTransferComponent, selectors: [["app-general-request-entry-transfer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 7, vars: 5, consts: [["id", "entry-view"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "request-entry-detail", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], [3, "notified", "message", "finished"], ["id", "request-entry-detail"], [3, "entry", 4, "ngIf"], [4, "ngIf"], [3, "entry"], ["id", "transfer-form"], [1, "center"], ["method", "post", 3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [1, "form-group"], ["for", "unit", 1, "form-label", "bold"], ["name", "unit", "id", "unit", "required", "required", "formControlName", "unit", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "unit"], [3, "value"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "formControlName", "text"], [3, "text"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function GeneralRequestEntryTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryTransferComponent_app_view_description_3_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralRequestEntryTransferComponent_app_resource_unavailable_4_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralRequestEntryTransferComponent_app_notification_screen_5_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralRequestEntryTransferComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.systemType, " Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_12__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__["NotificationScreenComponent"], _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_14__["RequestEntryDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _general_request_entry_transfer_validator_general_request_entry_transfer_validator_component__WEBPACK_IMPORTED_MODULE_16__["GeneralRequestEntryTransferValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_17__["RequestEntryUpdateValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktdHJhbnNmZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-transfer',
                'templateUrl': './general-request-entry-transfer.component.html',
                'styleUrls': ['./general-request-entry-transfer.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _general_request_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _general_request_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestFormService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=account-general-request-general-request-module.js.map