exports.ids = ["account-general-payment-general-payment-module"];
exports.modules = {

/***/ "+MXy":
/*!******************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entries/general-payment-entries.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: GeneralPaymentEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntriesComponent", function() { return GeneralPaymentEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module/general-all/general-all.service */ "BeQt");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roles */ "oYNu");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../general/search/search.component */ "xlhj");
/* harmony import */ var _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/module/simples/pagination/pagination.component */ "scZC");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");






















function GeneralPaymentEntriesComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, "");
} }
function GeneralPaymentEntriesComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralPaymentEntriesComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralPaymentEntriesComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function GeneralPaymentEntriesComponent_app_search_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("$link", ctx_r3.$link)("search-filters", ctx_r3.searchFilters);
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.payment_reference, " ");
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.full_name, " ");
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.payment_session, " ");
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.department, " ");
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entry_r10 == null ? null : entry_r10.paid_on, "longDate"), " ");
} }
const _c0 = function () { return {}; };
function GeneralPaymentEntriesComponent_div_9_tr_32_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.status, " ");
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const entry_r10 = ctx_r34.$implicit; const i_r11 = ctx_r34.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r32.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const $ed_r31 = ctx.$implicit;
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", $ed_r31 == (entry_r10 == null ? null : entry_r10.num));
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template, 4, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.esdl);
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const entry_r10 = ctx_r39.$implicit; const i_r11 = ctx_r39.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r37.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);
} }
function GeneralPaymentEntriesComponent_div_9_tr_32_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.esdl.length)("ngIfElse", _r28);
} }
const _c1 = function (a2) { return ["../", "entry", a2, "detail"]; };
function GeneralPaymentEntriesComponent_div_9_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntriesComponent_div_9_tr_32_ng_template_3_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntriesComponent_div_9_tr_32_td_5_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntriesComponent_div_9_tr_32_td_6_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralPaymentEntriesComponent_div_9_tr_32_td_7_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralPaymentEntriesComponent_div_9_tr_32_td_8_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralPaymentEntriesComponent_div_9_tr_32_td_9_Template, 3, 4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralPaymentEntriesComponent_div_9_tr_32_td_10_Template, 2, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeneralPaymentEntriesComponent_div_9_tr_32_label_14_Template, 4, 2, "label", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.payment_reference)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.full_name)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.payment_session)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.department)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.paid_on)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.status)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.canUpdateEntry);
} }
function GeneralPaymentEntriesComponent_div_9_app_pagination_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 42);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entries-length", ctx_r9.$entriesLength)("entry-ref", ctx_r9.$entryRef)("page-number", ctx_r9.pageNumber);
} }
function GeneralPaymentEntriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Payment Reference No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Session ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Paid On ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GeneralPaymentEntriesComponent_div_9_tr_32_Template, 15, 17, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GeneralPaymentEntriesComponent_div_9_app_pagination_39_Template, 1, 3, "app-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnimation", ctx_r4.entries.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.entries)("ngForTrackBy", ctx_r4.trackByPaymentRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pageNumber);
} }
function GeneralPaymentEntriesComponent_app_resource_unavailable_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 43);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r5.error);
} }
class GeneralPaymentEntriesComponent {
    constructor(route, location, gps, gss, gas, ems, ns, aus) {
        this.route = route;
        this.location = location;
        this.gps = gps;
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
            this.location.replaceState(`/general-payment/t/${this.pslug}/entries`);
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
        this.location.replaceState(`/general-payment/t/${this.pslug}/entries`);
        this.gss.searchCleared.next(true);
        this.getAllEntry({});
    }
    trackByPaymentRef(idx, entry) {
        return entry.payment_reference;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.entries.systemType;
        this.title = data.entries.title;
        this.view = data.entries.view;
        this.link = data.entries.link;
        this.searchFilters = data.entries.searchFilters;
        this.gps.$systemType = this.systemType;
        this.route.queryParamMap.subscribe((params) => {
            let $p = this.route.snapshot.paramMap;
            let $q = this.gas.paramProcessor(params, this);
            this.pslug = $p.get('payment');
            this.$link = `general-payment/t/${this.pslug}`;
            this.gps.ptype = this.pslug;
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
        this.gps.getAllEntry(sq)
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
        this.gas.deleteManyEntry(this, this.gps);
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
GeneralPaymentEntriesComponent.ɵfac = function GeneralPaymentEntriesComponent_Factory(t) { return new (t || GeneralPaymentEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_9__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"])); };
GeneralPaymentEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntriesComponent, selectors: [["app-general-payment-entries"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"], _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]])], decls: 11, vars: 8, consts: [["id", "entry-main"], [4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [1, "search-bar"], [3, "system-type", "$link", "search-filters", 4, "ngIf"], [1, "entry-option", "entry-option-small", "center", 3, "click"], [3, "error", 4, "ngIf"], [3, "system-type", "view-type"], [3, "notified", "message", "finished"], [3, "system-type", "$link", "search-filters"], [1, "entries"], [1, "bold", "left"], [1, "index"], [1, "payment-reference"], [1, "full-name"], [1, "amount"], [1, "fee-department"], [1, "paid-on"], [1, "status"], [1, "changes"], [1, "bold", "center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entries-length", "entry-ref", "page-number", 4, "ngIf"], [1, "center"], ["nilValue", ""], ["class", "center bold payment-ref", 4, "ngIf", "ngIfElse"], ["class", "center", 4, "ngIf", "ngIfElse"], ["class", "center", 3, "ngClass", 4, "ngIf", "ngIfElse"], [1, ""], [1, "center", "changes-option", "changes-option-full", 3, "routerLink"], ["class", "changes-mark", 4, "ngIf"], [1, "center", "bold", "payment-ref"], [1, "center", 3, "ngClass"], [1, "changes-mark"], [4, "ngIf", "ngIfElse"], ["normalChecks", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "click"], ["checked", ""], [1, "checkmark"], ["type", "checkbox", 3, "click"], [3, "entries-length", "entry-ref", "page-number"], [3, "error"]], template: function GeneralPaymentEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntriesComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntriesComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntriesComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-entry-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntriesComponent_app_search_6_Template, 1, 3, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPaymentEntriesComponent_Template_a_click_7_listener() { return ctx.deleteManyEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Many ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralPaymentEntriesComponent_div_9_Template, 40, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralPaymentEntriesComponent_app_resource_unavailable_10_Template, 1, 1, "app-resource-unavailable", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__["ListEntryOptionsComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__["NotificationScreenComponent"], _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__["ResourceUnavailableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZW50cmllcy5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entries',
                'templateUrl': './general-payment-entries.component.html',
                'styleUrls': ['./general-payment-entries.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"], _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_6__["listAnimation"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_9__["GeneralPaymentService"] }, { type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"] }, { type: _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_2__["GeneralAllService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "/Pl6":
/*!********************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-homepage/general-payment-homepage.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GeneralPaymentHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentHomepageComponent", function() { return GeneralPaymentHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class GeneralPaymentHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
GeneralPaymentHomepageComponent.ɵfac = function GeneralPaymentHomepageComponent_Factory(t) { return new (t || GeneralPaymentHomepageComponent)(); };
GeneralPaymentHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentHomepageComponent, selectors: [["app-general-payment-homepage"]], decls: 1, vars: 0, template: function GeneralPaymentHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-homepage',
                'templateUrl': './general-payment-homepage.component.html',
                'styleUrls': ['./general-payment-homepage.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2Cyu":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/replace-line-break.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ReplaceLineBreakPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceLineBreakPipe", function() { return ReplaceLineBreakPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ReplaceLineBreakPipe {
    transform(value, ...args) {
        return value.replace(/\n/g, '<br/>');
    }
}
ReplaceLineBreakPipe.ɵfac = function ReplaceLineBreakPipe_Factory(t) { return new (t || ReplaceLineBreakPipe)(); };
ReplaceLineBreakPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replaceLineBreak", type: ReplaceLineBreakPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceLineBreakPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'replaceLineBreak'
            }]
    }], null, null); })();


/***/ }),

/***/ "36vH":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-create-validator/general-payment-entry-create-validator.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryCreateValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryCreateValidatorComponent", function() { return GeneralPaymentEntryCreateValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Name of ", ctx_r6.systemType, " should be provided and cannot be empty ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Name of ", ctx_r7.systemType, " cannot be less than 4 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Name of ", ctx_r8.systemType, " cannot be greater than 40 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.payerName.errors == null ? null : ctx_r5.payerName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.payerName.errors == null ? null : ctx_r5.payerName.errors.required) || (ctx_r5.payerName.errors == null ? null : ctx_r5.payerName.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.payerName.errors == null ? null : ctx_r5.payerName.errors.required) || (ctx_r5.payerName.errors == null ? null : ctx_r5.payerName.errors.maxlength));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.payerName.invalid && (ctx_r0.payerName.touched || ctx_r0.payerName.dirty));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Email Address of ", ctx_r10.systemType, " should be provided and cannot be empty ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Email Address of ", ctx_r11.systemType, " cannot be less than 4 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Email Address of ", ctx_r12.systemType, " cannot be greater than 40 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Payer Email Address should be valid and should conform to standards for example david@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_li_5_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.required) || (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.required) || (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.required) || (ctx_r9.payerEmail.errors == null ? null : ctx_r9.payerEmail.errors.emailAddress));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_div_1_Template, 6, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.payerEmail.invalid && (ctx_r1.payerEmail.touched || ctx_r1.payerEmail.dirty));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Phone Number of ", ctx_r15.systemType, " should be provided and cannot be empty ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Phone Number of ", ctx_r16.systemType, " cannot be less than 10 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Phone Number of ", ctx_r17.systemType, " cannot be greater than 14 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Phone Number of ", ctx_r18.systemType, " if starting with +234 before the last 10 digits should not be greater than 13 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payer Phone Number of ", ctx_r19.systemType, " if not starting with +234 before the last 10 digits should not be greater than 11 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_li_6_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.required) || (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.required) || (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.required) || (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.payerPhoneIntl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.required) || (ctx_r14.payerPhone.errors == null ? null : ctx_r14.payerPhone.errors.payerPhone));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_div_1_Template, 7, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.payerPhone.invalid && (ctx_r2.payerPhone.touched || ctx_r2.payerPhone.dirty));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description of Payment should be provided and cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description of Payment cannot be less than 4 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description of Payment cannot be greater than 100 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_2_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_li_4_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.description.errors == null ? null : ctx_r20.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.description.errors == null ? null : ctx_r20.description.errors.required) || (ctx_r20.description.errors == null ? null : ctx_r20.description.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.description.errors == null ? null : ctx_r20.description.errors.required) || (ctx_r20.description.errors == null ? null : ctx_r20.description.errors.maxlength));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_3_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.description.invalid && (ctx_r3.description.touched || ctx_r3.description.dirty));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount of ", ctx_r25.systemType, " should be provided and cannot be empty ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount of ", ctx_r26.systemType, " cannot be less than 2 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount of ", ctx_r27.systemType, " cannot be greater than 8 characters in length ");
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.amt.errors == null ? null : ctx_r24.amt.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r24.amt.errors == null ? null : ctx_r24.amt.errors.required) || (ctx_r24.amt.errors == null ? null : ctx_r24.amt.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r24.amt.errors == null ? null : ctx_r24.amt.errors.required) || (ctx_r24.amt.errors == null ? null : ctx_r24.amt.errors.maxlength));
} }
function GeneralPaymentEntryCreateValidatorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_4_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.amt.invalid && (ctx_r4.amt.touched || ctx_r4.amt.dirty));
} }
class GeneralPaymentEntryCreateValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralPaymentEntryCreateValidatorComponent.ɵfac = function GeneralPaymentEntryCreateValidatorComponent_Factory(t) { return new (t || GeneralPaymentEntryCreateValidatorComponent)(); };
GeneralPaymentEntryCreateValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryCreateValidatorComponent, selectors: [["app-general-payment-entry-create-validator"]], inputs: { systemType: ["system-type", "systemType"], payerName: ["payer-name", "payerName"], payerEmail: ["payer-email", "payerEmail"], payerPhone: ["payer-phone", "payerPhone"], description: "description", amt: "amt" }, decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function GeneralPaymentEntryCreateValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralPaymentEntryCreateValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryCreateValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryCreateValidatorComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateValidatorComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateValidatorComponent_ng_container_4_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payerPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.amt);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZW50cnktY3JlYXRlLXZhbGlkYXRvci5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryCreateValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-create-validator',
                'templateUrl': './general-payment-entry-create-validator.component.html',
                'styleUrls': ['./general-payment-entry-create-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], payerName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['payer-name']
        }], payerEmail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['payer-email']
        }], payerPhone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['payer-phone']
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], amt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8Yof":
/*!***********************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-route-data.ts ***!
  \***********************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'General Payment',
    'title': 'General Payment',
    'view': 'gp',
    'viewWord': 'Payment',
    'link': 'payment',
    '$link': 'general-payment',
    'systemGuideline': 'payment',
    'base': 'payment'
};
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Make ${$$.systemType} Payment`, 'paymentRule': { 'amount': '1000', 'description': 'Departmental Fee Payment', 'type': 'department',
            'callback': 'http://localhost:4200/payment/department/validation/' } }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'paymentReference': 'Payment Reference', 'department': 'Department', 'status': 'Status' } }),
    'validation': Object.assign(Object.assign({}, $$), { 'title': `Verifying ${$$.systemType}` }),
    'verify': Object.assign(Object.assign({}, $$), { 'title': `Verify ${$$.systemType} Status` }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
};


/***/ }),

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acronym.pipe */ "jECo");
/* harmony import */ var _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace-line-break.pipe */ "2Cyu");
/* harmony import */ var _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proposed-credential.pipe */ "Mdff");
/* harmony import */ var _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replace-tabs.pipe */ "Lhuk");







class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
        _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
        _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
        _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
        _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
        _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
        _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
                    _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
                    _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
                    _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
                    _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
                    _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
                    _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Amy8":
/*!******************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-receipt/general-payment-entry-receipt.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryReceiptComponent", function() { return GeneralPaymentEntryReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");














function GeneralPaymentEntryReceiptComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralPaymentEntryReceiptComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function GeneralPaymentEntryReceiptComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payment Reference of ", ctx_r9.systemType, " should be provided and cannot be empty ");
} }
function GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payment Reference of ", ctx_r10.systemType, " cannot be less than 4 characters in length ");
} }
function GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payment Reference of ", ctx_r11.systemType, " cannot be greater than 30 characters in length ");
} }
function GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_2_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_3_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_li_4_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.payment_reference.errors == null ? null : ctx_r8.payment_reference.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.payment_reference.errors == null ? null : ctx_r8.payment_reference.errors.required) || (ctx_r8.payment_reference.errors == null ? null : ctx_r8.payment_reference.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.payment_reference.errors == null ? null : ctx_r8.payment_reference.errors.required) || (ctx_r8.payment_reference.errors == null ? null : ctx_r8.payment_reference.errors.maxlength));
} }
function GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_div_1_Template, 5, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.payment_reference.invalid && (ctx_r5.payment_reference.touched || ctx_r5.payment_reference.dirty));
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralPaymentEntryReceiptComponent_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verify Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r6.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.isFormValid);
} }
function GeneralPaymentEntryReceiptComponent_div_4_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryReceiptComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralPaymentEntryReceiptComponent_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.verifyPayment(ctx_r12.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Payment Reference * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntryReceiptComponent_div_4_ng_container_6_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralPaymentEntryReceiptComponent_div_4_button_7_Template, 2, 5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralPaymentEntryReceiptComponent_div_4_p_8_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.payment_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted);
} }
const _c1 = function (a0, a1, a2, a3) { return { "pending": a0, "success": a1, "failed": a2, "refunded": a3 }; };
function GeneralPaymentEntryReceiptComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c1, (ctx_r4.entry == null ? null : ctx_r4.entry.status) == "Pending", (ctx_r4.entry == null ? null : ctx_r4.entry.status) == "Success", (ctx_r4.entry == null ? null : ctx_r4.entry.status) == "Failed", (ctx_r4.entry == null ? null : ctx_r4.entry.status) == "Refunded"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.entry.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Payment Type : ", ctx_r4.entry.payment_type_name, " ");
} }
class GeneralPaymentEntryReceiptComponent {
    constructor(router, route, gps, ems, aus) {
        this.router = router;
        this.route = route;
        this.gps = gps;
        this.ems = ems;
        this.aus = aus;
        this.entry = null;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.verify.systemType;
        this.title = data.verify.title;
        this.view = data.verify.view;
        this.viewWord = data.verify.viewWord;
        this.link = data.verify.link;
        this.gps.$systemType = this.systemType;
        this.gps.$sa = data.verify.$link;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            return this.gps.getStatus();
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'payment_reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)])
                });
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    verifyPayment(body) {
        if (this.payment_ref_checked != body.payment_reference) {
            this.payment_ref_checked = body.payment_reference;
            this.entry = null;
            this.isFormSubmitted = true;
            this.error = null;
            this.isError = false;
            this.isFormProcessing = true;
            this.gps.confirmStatus(body)
                .subscribe((result) => {
                if (result == null) {
                    this.isFormSubmitted = false;
                    this.isFormProcessing = false;
                    this.isError = true;
                    this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                }
                else if (result != null) {
                    this.isFormProcessing = false;
                    this.isFormSubmitted = false;
                    this.entry = result;
                }
            });
        }
    }
    get userRole() {
        return this.aus.userRole;
    }
    get payment_reference() {
        return this.entryForm.get('payment_reference');
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
}
GeneralPaymentEntryReceiptComponent.ɵfac = function GeneralPaymentEntryReceiptComponent_Factory(t) { return new (t || GeneralPaymentEntryReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"])); };
GeneralPaymentEntryReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryReceiptComponent, selectors: [["app-general-payment-entry-receipt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "general-payment"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], ["autocomplete", "new-payment-verification", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "payment-reference", 1, "form-label", "bold"], ["type", "text", "id", "payment-reference", "name", "payment_reference", "placeholder", "abczyxxyzaslkj", "formControlName", "payment_reference", "autocomplete", "new-payment_reference", 1, "form-control"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "payment-status"], [1, ""], [3, "ngClass"]], template: function GeneralPaymentEntryReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryReceiptComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryReceiptComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryReceiptComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryReceiptComponent_div_4_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryReceiptComponent_div_5_Template, 9, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".payment-status[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 18px;\r\n\tfont-family : Arial;\r\n}\r\n\r\n.pending[_ngcontent-%COMP%] {\r\n\r\n\tcolor : blue;\r\n}\r\n\r\n.failed[_ngcontent-%COMP%] {\r\n\r\n\tcolor : red;\r\n}\r\n\r\n.success[_ngcontent-%COMP%] {\r\n\r\n\tcolor : green;\r\n}\r\n\r\n.refunded[_ngcontent-%COMP%] {\r\n\r\n\tcolor : purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtcGF5bWVudC1lbnRyeS1yZWNlaXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUVBOztDQUVDLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2YiLCJmaWxlIjoiZ2VuZXJhbC1wYXltZW50LWVudHJ5LXJlY2VpcHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LXN0YXR1cyAqIHtcclxuXHJcblx0Zm9udC1zaXplIDogMThweDtcclxuXHRmb250LWZhbWlseSA6IEFyaWFsO1xyXG59XHJcblxyXG4ucGVuZGluZyB7XHJcblxyXG5cdGNvbG9yIDogYmx1ZTtcclxufVxyXG5cclxuLmZhaWxlZCB7XHJcblxyXG5cdGNvbG9yIDogcmVkO1xyXG59XHJcblxyXG4uc3VjY2VzcyB7XHJcblxyXG5cdGNvbG9yIDogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWZ1bmRlZCB7XHJcblxyXG5cdGNvbG9yIDogcHVycGxlO1xyXG59XHJcblxyXG4iXX0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryReceiptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-receipt',
                'templateUrl': './general-payment-entry-receipt.component.html',
                'styleUrls': ['./general-payment-entry-receipt.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "C5dX":
/*!****************************************************!*\
  !*** ./src/app/account/general-payment/general.ts ***!
  \****************************************************/
/*! exports provided: emailAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddress", function() { return emailAddress; });
const emailAddress = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


/***/ }),

/***/ "JaU0":
/*!**********************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-dashboard/general-payment-dashboard.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GeneralPaymentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentDashboardComponent", function() { return GeneralPaymentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");










function GeneralPaymentDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralPaymentDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralPaymentDashboardComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
const _c0 = function (a2) { return ["./", "t", a2]; };
function GeneralPaymentDashboardComponent_div_3_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, entry_r7 == null ? null : entry_r7.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r7 == null ? null : entry_r7.name, " ");
} }
function GeneralPaymentDashboardComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentDashboardComponent_div_3_ng_container_2_li_1_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.entries);
} }
const _c1 = function () { return ["./", "verify-status"]; };
function GeneralPaymentDashboardComponent_div_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Verify Payment Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/account", "profile"]; };
function GeneralPaymentDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentDashboardComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentDashboardComponent_div_3_li_3_Template, 3, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entries != null && (ctx_r3.entries == null ? null : ctx_r3.entries.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.canVerify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
class GeneralPaymentDashboardComponent {
    constructor(route, gps, ems, aus) {
        this.route = route;
        this.gps = gps;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.dashboard.systemType;
        this.title = data.dashboard.title;
        this.view = data.dashboard.view;
        this.gps.managePayment()
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
    get canVerify() {
        return ['student', 'departmentPresident', 'facultyPresident'].indexOf(this.aus.userRole) < 0;
    }
}
GeneralPaymentDashboardComponent.ɵfac = function GeneralPaymentDashboardComponent_Factory(t) { return new (t || GeneralPaymentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_3__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
GeneralPaymentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentDashboardComponent, selectors: [["app-general-payment-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]])], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], [3, "error"], ["id", "dashboard"], [1, "center", 3, "routerLink"], [4, "ngFor", "ngForOf"]], template: function GeneralPaymentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralPaymentDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentDashboardComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentDashboardComponent_div_3_Template, 7, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_7__["ResourceUnavailableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-dashboard',
                'templateUrl': './general-payment-dashboard.component.html',
                'styleUrls': ['./general-payment-dashboard.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_3__["GeneralPaymentService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "Lhuk":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/replace-tabs.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReplaceTabsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceTabsPipe", function() { return ReplaceTabsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ReplaceTabsPipe {
    transform(value, ...args) {
        return value.replace(/\t/g, '&emsp;')
            .replace('ql-align-center', 'center');
    }
}
ReplaceTabsPipe.ɵfac = function ReplaceTabsPipe_Factory(t) { return new (t || ReplaceTabsPipe)(); };
ReplaceTabsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replaceTabs", type: ReplaceTabsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceTabsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'replaceTabs'
            }]
    }], null, null); })();


/***/ }),

/***/ "LvTA":
/*!********************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment.service.ts ***!
  \********************************************************************/
/*! exports provided: GeneralPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentService", function() { return GeneralPaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/error-messages.service */ "EUGn");







class GeneralPaymentService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.$systemType = 'General Payment';
        this.$sa = 'general-payment';
    }
    managePayment() {
        let link = `${this.apiConfig.host}/${this.$sa}/manage`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Payment Type Entries`, null)));
    }
    managePaymentEntry(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/manage/t/${entry}`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Payment Type Entry`, null)));
    }
    getAllEntry(params) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${this.ptype}/entries`;
        let httpOptions = { 'params': params };
        return this.http.get(link, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries`, null)));
    }
    getEntry(ptype, entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/${entry}/detail`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    getStatus() {
        let link = `${this.apiConfig.host}/${this.$sa}/transaction-status`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    confirmStatus(body) {
        let link = `${this.apiConfig.host}/${this.$sa}/transaction-status`;
        return this.http.post(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry(ptype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry$(ptype, request) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;
        console.log(request);
        return this.http.post(link, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    checkPayment(ptype, payment) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/create`;
        return this.http.post(link, payment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $initializePayment(payment) {
        let link = `${this.apiConfig.host}/general-payment/initialize-transaction`;
        return this.http.post(link, payment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $verifyPayment(ref) {
        let link = `${this.apiConfig.host}/general-payment/verify-transaction?reference=${ref}`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'verified': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $refundEntry(entry, payment) {
        let link = `${this.apiConfig.host}/general-payment/refund-transaction?reference=${entry}`;
        return this.http.post(link, payment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $createRefund(entry, payment) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/refund`;
        return this.http.put(link, payment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    updateEntry$(ptype, entry, request) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/entry/${entry}/detail`;
        return this.http.put(link, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    deleteManyEntry$(ptype, arrayIdx) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${this.ptype}/delete/entry/many`;
        let body = { 'entries': arrayIdx };
        return this.http.patch(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'manyDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries Delete`, null)));
    }
    deleteAllEntry(ptype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${ptype}/delete/entry/all/`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    deleteAllEntry$(ptype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/$ptype/delete/entry/all/`;
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
GeneralPaymentService.ɵfac = function GeneralPaymentService_Factory(t) { return new (t || GeneralPaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GeneralPaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralPaymentService, factory: GeneralPaymentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "MWsK":
/*!************************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-delete-all/general-payment-entry-delete-all.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryDeleteAllComponent", function() { return GeneralPaymentEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class GeneralPaymentEntryDeleteAllComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralPaymentEntryDeleteAllComponent.ɵfac = function GeneralPaymentEntryDeleteAllComponent_Factory(t) { return new (t || GeneralPaymentEntryDeleteAllComponent)(); };
GeneralPaymentEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryDeleteAllComponent, selectors: [["app-general-payment-entry-delete-all"]], decls: 2, vars: 0, template: function GeneralPaymentEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "general-payment-entry-delete-all works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZW50cnktZGVsZXRlLWFsbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-payment-entry-delete-all',
                templateUrl: './general-payment-entry-delete-all.component.html',
                styleUrls: ['./general-payment-entry-delete-all.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mdff":
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/proposed-credential.pipe.ts ***!
  \**********************************************************/
/*! exports provided: ProposedCredentialPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposedCredentialPipe", function() { return ProposedCredentialPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ProposedCredentialPipe {
    transform(value, ...args) {
        return (value.author.full_name).split(' ').join('').toLowerCase();
    }
}
ProposedCredentialPipe.ɵfac = function ProposedCredentialPipe_Factory(t) { return new (t || ProposedCredentialPipe)(); };
ProposedCredentialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "proposedCredential", type: ProposedCredentialPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposedCredentialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'proposedCredential'
            }]
    }], null, null); })();


/***/ }),

/***/ "QP0/":
/*!****************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-detail/general-payment-entry-detail.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryDetailComponent", function() { return GeneralPaymentEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles */ "oYNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");















function GeneralPaymentEntryDetailComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " Detail ");
} }
function GeneralPaymentEntryDetailComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function GeneralPaymentEntryDetailComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function GeneralPaymentEntryDetailComponent_app_notification_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralPaymentEntryDetailComponent_app_notification_screen_4_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reference Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.entry == null ? null : ctx_r7.entry.payment_reference, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Paid Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r8.entry == null ? null : ctx_r8.entry.paid_on, "fullDate"), " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" N = ", ctx_r9.entry == null ? null : ctx_r9.entry.amount, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.entry == null ? null : ctx_r10.entry.full_name, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.entry == null ? null : ctx_r11.entry.email_address, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.entry == null ? null : ctx_r12.entry.phone_number, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Payment Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.entry == null ? null : ctx_r13.entry.description, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Full Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.entry == null ? null : ctx_r14.entry.author == null ? null : ctx_r14.entry.author.full_name, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Matriculation Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.entry == null ? null : ctx_r15.entry.author == null ? null : ctx_r15.entry.author.matriculation_number, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Identification Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.entry == null ? null : ctx_r16.entry.author == null ? null : ctx_r16.entry.author.identity_number, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.entry == null ? null : ctx_r17.entry.department_name, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.entry == null ? null : ctx_r18.entry.faculty_name, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Level : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.entry == null ? null : ctx_r19.entry.author == null ? null : ctx_r19.entry.author.level, " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r20.entry == null ? null : ctx_r20.entry.status), " ");
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Print ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tfoot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPaymentEntryDetailComponent_div_5_ng_container_31_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.refundEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Refund ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralPaymentEntryDetailComponent_div_5_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tfoot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPaymentEntryDetailComponent_div_5_ng_container_32_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.refundEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Refund ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralPaymentEntryDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntryDetailComponent_div_5_ng_container_6_Template, 7, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralPaymentEntryDetailComponent_div_5_ng_container_7_Template, 7, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralPaymentEntryDetailComponent_div_5_ng_container_8_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Payer Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeneralPaymentEntryDetailComponent_div_5_ng_container_14_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GeneralPaymentEntryDetailComponent_div_5_ng_container_15_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GeneralPaymentEntryDetailComponent_div_5_ng_container_16_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GeneralPaymentEntryDetailComponent_div_5_ng_container_17_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Student Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GeneralPaymentEntryDetailComponent_div_5_ng_container_23_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GeneralPaymentEntryDetailComponent_div_5_ng_container_24_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GeneralPaymentEntryDetailComponent_div_5_ng_container_25_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GeneralPaymentEntryDetailComponent_div_5_ng_container_26_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GeneralPaymentEntryDetailComponent_div_5_ng_container_27_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GeneralPaymentEntryDetailComponent_div_5_ng_container_28_Template, 6, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GeneralPaymentEntryDetailComponent_div_5_ng_container_29_Template, 7, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GeneralPaymentEntryDetailComponent_div_5_ng_container_30_Template, 4, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GeneralPaymentEntryDetailComponent_div_5_ng_container_31_Template, 5, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GeneralPaymentEntryDetailComponent_div_5_ng_container_32_Template, 5, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.payment_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.paid_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.author == null ? null : ctx_r4.entry.author.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.entry == null ? null : ctx_r4.entry.author) && (ctx_r4.entry == null ? null : ctx_r4.entry.author == null ? null : ctx_r4.entry.author.matriculation_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.entry == null ? null : ctx_r4.entry.author) && (ctx_r4.entry == null ? null : ctx_r4.entry.author == null ? null : ctx_r4.entry.author.identity_number));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.department_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.faculty_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.author == null ? null : ctx_r4.entry.author.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.canRefundDepartmentPayment && ctx_r4.entry.paymentType == "department_name" && !ctx_r4.entry.refunded && ctx_r4.userDepartment == (ctx_r4.entry == null ? null : ctx_r4.entry.department_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.canRefundFacultyPayment && ctx_r4.entry.paymentType == "faculty_name" && !ctx_r4.entry.refunded && ctx_r4.userFaculty == (ctx_r4.entry == null ? null : ctx_r4.entry.faculty_name));
} }
class GeneralPaymentEntryDetailComponent {
    constructor(router, route, gps, ns, ems, aus) {
        this.router = router;
        this.route = route;
        this.gps = gps;
        this.ns = ns;
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
        this.gps.$systemType = this.systemType;
        this.gps.$sa = data.detail.$link;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            let $p = params.get('payment');
            this.pslug = $p;
            this.eslug = $e;
            return this.gps.getEntry($p, $e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    refundEntry(result) {
    }
    $entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['general-payment', 't', this.pslug, 'entries']);
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
GeneralPaymentEntryDetailComponent.ɵfac = function GeneralPaymentEntryDetailComponent_Factory(t) { return new (t || GeneralPaymentEntryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"])); };
GeneralPaymentEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryDetailComponent, selectors: [["app-general-payment-entry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "general-payment"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "general-payment-details", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], [3, "notified", "message", "finished"], ["id", "general-payment-details"], [1, "payment-parameters"], ["colspan", "2"], [1, "left"], [1, "left", "bold"], [1, "bold"], ["href", "#", "onclick", "print()", 1, "entry-option", "center"], [1, "refund", "option"], [1, "entry-option", "center", 3, "click"]], template: function GeneralPaymentEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryDetailComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryDetailComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryDetailComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryDetailComponent_app_notification_screen_4_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryDetailComponent_div_5_Template, 33, 17, "div", 5);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__["NotificationScreenComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: ["#general-payment-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n\twidth : 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtcGF5bWVudC1lbnRyeS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxXQUFXO0FBQ1oiLCJmaWxlIjoiZ2VuZXJhbC1wYXltZW50LWVudHJ5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dlbmVyYWwtcGF5bWVudC1kZXRhaWxzIHRoIHtcclxuXHJcblx0d2lkdGggOiA0MCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-detail',
                'templateUrl': './general-payment-entry-detail.component.html',
                'styleUrls': ['./general-payment-entry-detail.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "WfdX":
/*!*************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-form.service.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralPaymentFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentFormService", function() { return GeneralPaymentFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/form-validators.service */ "inDW");
/* harmony import */ var _general_payment_form_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-payment-form-validator.service */ "c3ye");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "C5dX");







class GeneralPaymentFormService {
    constructor(fb) {
        this.fb = fb;
    }
    $entryForm() {
        let form = this.fb.group({
            'payerName': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)] }],
            'payerEmail': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40), Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__["emailAddressValidator"])(_general__WEBPACK_IMPORTED_MODULE_4__["emailAddress"])] }],
            'payerPhone': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14), Object(_general_payment_form_validator_service__WEBPACK_IMPORTED_MODULE_3__["payerPhoneValidator"])()] }],
            'description': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)] }],
            'payment_type': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100000000)] }],
            'payment_session': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100000000)] }],
            'amount': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)] }]
        });
        return form;
    }
    searchForm(searchFilters) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__["searchValidator"])(searchFilters)]);
    }
}
GeneralPaymentFormService.ɵfac = function GeneralPaymentFormService_Factory(t) { return new (t || GeneralPaymentFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GeneralPaymentFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralPaymentFormService, factory: GeneralPaymentFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "c3ye":
/*!***********************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-form-validator.service.ts ***!
  \***********************************************************************************/
/*! exports provided: payerPhoneValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payerPhoneValidator", function() { return payerPhoneValidator; });
function payerPhoneValidator() {
    return (control) => {
        let entry = control.value;
        if (entry.startsWith('+234') && entry.length > 14) {
            return { 'payerPhoneIntl': { 'value': entry } };
        }
        else if ((!entry.startsWith('+234')) && entry.length > 11) {
            return { 'payerPhone': { 'value': entry } };
        }
        else {
            return null;
        }
    };
}


/***/ }),

/***/ "csRu":
/*!***************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GeneralPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentRoutingModule", function() { return GeneralPaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guards/is-student.guard */ "iojP");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _general_payment_homepage_general_payment_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-payment-homepage/general-payment-homepage.component */ "/Pl6");
/* harmony import */ var _general_payment_dashboard_general_payment_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-payment-dashboard/general-payment-dashboard.component */ "JaU0");
/* harmony import */ var _general_payment_entry_dashboard_general_payment_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-payment-entry-dashboard/general-payment-entry-dashboard.component */ "uPDb");
/* harmony import */ var _general_payment_entries_general_payment_entries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-payment-entries/general-payment-entries.component */ "+MXy");
/* harmony import */ var _general_payment_entry_detail_general_payment_entry_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-payment-entry-detail/general-payment-entry-detail.component */ "QP0/");
/* harmony import */ var _general_payment_entry_create_general_payment_entry_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-payment-entry-create/general-payment-entry-create.component */ "rjMc");
/* harmony import */ var _general_payment_entry_delete_all_general_payment_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-payment-entry-delete-all/general-payment-entry-delete-all.component */ "MWsK");
/* harmony import */ var _general_payment_entry_verification_general_payment_entry_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-payment-entry-verification/general-payment-entry-verification.component */ "wYLK");
/* harmony import */ var _general_payment_entry_receipt_general_payment_entry_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-payment-entry-receipt/general-payment-entry-receipt.component */ "Amy8");
/* harmony import */ var _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-payment-route-data */ "8Yof");

















const routes = [
    { 'path': '',
        'component': _general_payment_homepage_general_payment_homepage_component__WEBPACK_IMPORTED_MODULE_5__["GeneralPaymentHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _general_payment_dashboard_general_payment_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentDashboardComponent"], 'data': { 'dashboard': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].dashboard } },
                    { 'path': 't/:payment', 'component': _general_payment_entry_dashboard_general_payment_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentEntryDashboardComponent"], 'data': { 'dashboard': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].dashboard } },
                    { 'path': 't/:payment/entries', 'component': _general_payment_entries_general_payment_entries_component__WEBPACK_IMPORTED_MODULE_8__["GeneralPaymentEntriesComponent"], 'data': { 'entries': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].entries } },
                    { 'path': 't/:payment/entry/:entry/detail', 'component': _general_payment_entry_detail_general_payment_entry_detail_component__WEBPACK_IMPORTED_MODULE_9__["GeneralPaymentEntryDetailComponent"], 'data': { 'detail': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].detail } },
                    { 'path': 't/:payment/entry/create', 'component': _general_payment_entry_create_general_payment_entry_create_component__WEBPACK_IMPORTED_MODULE_10__["GeneralPaymentEntryCreateComponent"], 'canActivate': [_shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__["IsStudentGuard"]], 'data': { 'create': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].detail } },
                    { 'path': 't/:payment/validation', 'component': _general_payment_entry_verification_general_payment_entry_verification_component__WEBPACK_IMPORTED_MODULE_12__["GeneralPaymentEntryVerificationComponent"], 'data': { 'validation': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].validation } },
                    { 'path': 'verify-status', 'component': _general_payment_entry_receipt_general_payment_entry_receipt_component__WEBPACK_IMPORTED_MODULE_13__["GeneralPaymentEntryReceiptComponent"], 'data': { 'verify': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].verify } },
                    { 'path': 'entry/delete/all', 'component': _general_payment_entry_delete_all_general_payment_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__["GeneralPaymentEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_4__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _general_payment_route_data__WEBPACK_IMPORTED_MODULE_14__["RouteConfigData"].deleteAll } }
                ] }
        ] }
];
class GeneralPaymentRoutingModule {
}
GeneralPaymentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralPaymentRoutingModule });
GeneralPaymentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralPaymentRoutingModule_Factory(t) { return new (t || GeneralPaymentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralPaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iojP":
/*!***************************************************!*\
  !*** ./src/app/shared/guards/is-student.guard.ts ***!
  \***************************************************/
/*! exports provided: IsStudentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStudentGuard", function() { return IsStudentGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class IsStudentGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        return this.verifyMemberPrivilege();
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route, state) {
        return this.canActivate(route, state);
    }
    verifyMemberPrivilege() {
        let role = this.aus.userMinorDetails.role;
        let allowedMembers = ['student', 'departmentPresident', 'facultyPresident'];
        if (allowedMembers.indexOf(role) < 0) {
            this.router.navigate(['unauthorized']);
            return false;
        }
        else {
            return true;
        }
    }
}
IsStudentGuard.ɵfac = function IsStudentGuard_Factory(t) { return new (t || IsStudentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsStudentGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsStudentGuard, factory: IsStudentGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsStudentGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "jECo":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/acronym.pipe.ts ***!
  \**********************************************/
/*! exports provided: AcronymPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcronymPipe", function() { return AcronymPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class AcronymPipe {
    transform(value, ...args) {
        let $value = value.replace(/and/gi, '').split(' ');
        if ($value.length > 1) {
            return $value.map((item) => {
                if (item) {
                    return item[0];
                }
                else {
                    return '';
                }
            }).join('');
        }
        else {
            return $value.join('');
        }
    }
}
AcronymPipe.ɵfac = function AcronymPipe_Factory(t) { return new (t || AcronymPipe)(); };
AcronymPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "acronym", type: AcronymPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcronymPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'acronym'
            }]
    }], null, null); })();


/***/ }),

/***/ "jiyY":
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/authentication.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class AuthenticationGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.verifyLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        const url = route.path;
        return this.verifyLogin(url);
    }
    verifyLogin(url) {
        if (this.aus.isLoggedIn()) {
            return true;
        }
        else {
            this.aus.redirectAddress = url;
            return this.router.parseUrl('/signin');
        }
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "oYNu":
/*!**************************************************!*\
  !*** ./src/app/account/general-payment/roles.ts ***!
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

/***/ "rjMc":
/*!****************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-create/general-payment-entry-create.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryCreateComponent", function() { return GeneralPaymentEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _general_payment_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-payment-form.service */ "WfdX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_payment_entry_create_validator_general_payment_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../general-payment-entry-create-validator/general-payment-entry-create-validator.component */ "36vH");

















function GeneralPaymentEntryCreateComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-description", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function GeneralPaymentEntryCreateComponent_app_guidelines_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-guidelines", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r1.view)("system-guideline", ctx_r1.systemGuideline);
} }
function GeneralPaymentEntryCreateComponent_app_resource_unavailable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function GeneralPaymentEntryCreateComponent_app_notification_screen_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralPaymentEntryCreateComponent_app_notification_screen_6_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function GeneralPaymentEntryCreateComponent_ng_container_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", session_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", session_r9.name, " ");
} }
function GeneralPaymentEntryCreateComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Payment Session * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GeneralPaymentEntryCreateComponent_ng_container_7_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.verifyPaymentSession($event.target); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntryCreateComponent_ng_container_7_option_6_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r4.noEdit)("formControl", ctx_r4.paymentSessionCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.paymentSession);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-payment-entry-create-validator", 33);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r12.systemType)("payer-name", ctx_r12.payerName);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-payment-entry-create-validator", 34);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r13.systemType)("payer-email", ctx_r13.payerEmail);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-payment-entry-create-validator", 35);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r14.systemType)("payer-phone", ctx_r14.payerPhone);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-payment-entry-create-validator", 36);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r15.systemType)("description", ctx_r15.description);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-payment-entry-create-validator", 37);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r16.systemType)("amount", ctx_r16.amount);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralPaymentEntryCreateComponent_ng_container_8_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r17.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.isFormValid);
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPaymentEntryCreateComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralPaymentEntryCreateComponent_ng_container_8_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.createEntry(ctx_r19.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Payment Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Full Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_9_Template, 1, 2, "app-general-payment-entry-create-validator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email Address * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_14_Template, 1, 2, "app-general-payment-entry-create-validator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Phone Number * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_19_Template, 1, 2, "app-general-payment-entry-create-validator", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Description of Payment * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_24_Template, 1, 2, "app-general-payment-entry-create-validator", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Amount * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GeneralPaymentEntryCreateComponent_ng_container_8_app_general_payment_entry_create_validator_29_Template, 1, 2, "app-general-payment-entry-create-validator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GeneralPaymentEntryCreateComponent_ng_container_8_button_30_Template, 2, 5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GeneralPaymentEntryCreateComponent_ng_container_8_p_31_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.payerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.payerEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.payerPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted);
} }
class GeneralPaymentEntryCreateComponent {
    constructor(route, router, ns, ems, gps, gpfs) {
        this.route = route;
        this.router = router;
        this.ns = ns;
        this.ems = ems;
        this.gps = gps;
        this.gpfs = gpfs;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.submission = false;
        this.paymentSessionCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.create.systemType;
        this.title = data.create.title;
        this.view = data.create.view;
        this.viewWord = data.create.viewWord;
        this.link = data.create.link;
        this.$link = data.create.$link;
        this.systemGuideline = data.create.systemGuideline;
        this.paymentRule = data.create.paymentRule;
        this.gps.$systemType = this.systemType;
        this.gps.$sa = this.$link;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            let $p = params.get('payment');
            this.pslug = $p;
            return this.gps.addEntry($p);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result.permitted == true && result.$data != null && result.$data.status != null) {
                this.router.navigate(['/general-payment', this.link, 'entry', 'detail', result.$data._id]);
            }
            else if (result.permitted == true) {
                this.paymentSession = result.$data.payment_session;
                this.paymentType = result.$data.payment_type;
            }
        });
    }
    ;
    verifyPaymentSession(evt) {
        let psession = 0;
        if (evt.value == '') {
            return false;
        }
        if (evt.value == this.prev_psession) {
            return false;
        }
        this.prev_psession = evt.value;
        let confirmPayment = { 'payment_type': this.paymentType, 'payment_session': evt.value };
        this.gps.checkPayment(this.pslug, confirmPayment)
            .subscribe((value) => {
            let payload = value.$data;
            if (payload.slug != null) {
                this.router.navigate(['general-payment', 't', this.pslug, 'entry', payload.slug, 'detail']);
            }
            else {
                this.entry = payload;
                this.entryForm = this.gpfs.$entryForm();
                this.entryForm.patchValue({ 'description': payload.description, 'amount': payload.amount, 'payment_type': payload.payment_type, 'payment_session': payload.payment_session });
            }
        });
    }
    createEntry(body) {
        body.amount = this.entry.amount * 100;
        body.email = body.payerEmail;
        body.callback_url = `http://localhost:4200/general-payment/t/${this.pslug}/validation`;
        body.metadata = {
            'full_name': body.payerName,
            'email_address': body.payerEmail,
            'phone_number': body.payerPhone,
            'payment_type': body.payment_type,
            'payment_session': body.payment_session
        };
        this.submission = true;
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.gps.$initializePayment(body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Network error has occured. Payment is only a possiblity when there is Internet connection.`);
            }
            else if (result != null && result.created == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);
                return location.href = result.$data.data.authorization_url;
            }
        });
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
    get payerName() {
        return this.entryForm.get('payerName');
    }
    get payerEmail() {
        return this.entryForm.get('payerEmail');
    }
    get payerPhone() {
        return this.entryForm.get('payerPhone');
    }
    get description() {
        return this.entryForm.get('description');
    }
    get amt() {
        return this.entryForm.get('amt');
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
}
GeneralPaymentEntryCreateComponent.ɵfac = function GeneralPaymentEntryCreateComponent_Factory(t) { return new (t || GeneralPaymentEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentFormService"])); };
GeneralPaymentEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryCreateComponent, selectors: [["app-general-payment-entry-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 9, vars: 7, consts: [["id", "general-payment"], [3, "view-description", "system-type", 4, "ngIf"], [3, "view", "system-guideline", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [4, "ngIf"], [3, "view-description", "system-type"], [3, "view", "system-guideline"], [3, "error"], [3, "notified", "message", "finished"], [1, "form-group"], ["for", "paymentSession", 1, "form-label", "bold"], ["name", "paymentSession", "id", "paymentSession", "required", "required", 1, "form-control", 3, "readOnly", "formControl", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "general-payment-form"], ["method", "post", "autocomplete", "off", "enctype", "application/x-www-form-urlencoded", 3, "formGroup", "ngSubmit"], ["for", "payer-name", 1, "form-label", "bold"], ["type", "text", "id", "payer-name", "name", "payerName", "placeholder", "David Muller", "formControlName", "payerName", "autocomplete", "new-payerName", 1, "form-control"], [3, "system-type", "payer-name", 4, "ngIf"], ["for", "payer-email", 1, "form-label", "bold"], ["type", "text", "id", "payer-email", "name", "payerEmail", "placeholder", "david@example.com", "formControlName", "payerEmail", "autocomplete", "new-payerEmail", 1, "form-control"], [3, "system-type", "payer-email", 4, "ngIf"], ["for", "payer-phone", 1, "form-label", "bold"], ["type", "text", "id", "payer-phone", "name", "payerPhone", "placeholder", "09022035587 or +2349022035587", "formControlName", "payerPhone", "autocomplete", "new-payerPhone", 1, "form-control"], [3, "system-type", "payer-phone", 4, "ngIf"], ["for", "description", 1, "form-label", "bold"], ["type", "text", "id", "description", "name", "description", "readonly", "readonly", "value", "Departmental Fee Payment", "formControlName", "description", "autocomplete", "new-description", 1, "form-control"], [3, "system-type", "description", 4, "ngIf"], ["for", "amount", 1, "form-label", "bold"], ["type", "text", "id", "amount", "name", "amount", "readonly", "readonly", "formControlName", "amount", "autocomplete", "new-amount", 1, "form-control"], [3, "system-type", "amount", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [3, "system-type", "payer-name"], [3, "system-type", "payer-email"], [3, "system-type", "payer-phone"], [3, "system-type", "description"], [3, "system-type", "amount"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function GeneralPaymentEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryCreateComponent_app_view_description_3_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryCreateComponent_app_guidelines_4_Template, 1, 2, "app-guidelines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryCreateComponent_app_resource_unavailable_5_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralPaymentEntryCreateComponent_app_notification_screen_6_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralPaymentEntryCreateComponent_ng_container_7_Template, 7, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralPaymentEntryCreateComponent_ng_container_8_Template, 32, 8, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemGuideline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentSession != null && (ctx.paymentSession == null ? null : ctx.paymentSession.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__["NotificationScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _general_payment_entry_create_validator_general_payment_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_12__["GeneralPaymentEntryCreateValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtcGF5bWVudC1lbnRyeS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRjs7Ozs7Ozs7O0VBU0UiLCJmaWxlIjoiZ2VuZXJhbC1wYXltZW50LWVudHJ5LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcdCNwYXltZW50LXNlc3Npb24tbWVudSB1bCB7XHJcblxyXG5cdFx0bWFyZ2luIDogMHB4O1xyXG5cdH1cclxuXHJcblx0LnBheW1lbnQtc2Vzc2lvbi1tZW51LWl0ZW0ge1xyXG5cclxuXHRoZWlnaHQgOiA0MHB4O1xyXG5cdHdpZHRoIDogNTAlO1xyXG5cdG1hcmdpbiA6IDBweCBhdXRvIDEwcHg7XHJcblx0bGluZS1oZWlnaHQgOiA0MHB4O1xyXG59Ki9cclxuXHJcbi8qLnNtYWxsLW1lbnUtaXRlbSB7XHJcblxyXG5cdGRpc3BsYXkgOiBibG9jaztcclxuXHRtYXJnaW4gOiAxNXB4IGF1dG8gMHB4O1xyXG5cdHBhZGRpbmcgOiAwJSAyLjkzNDA4NzkyMzQ1MDQ5MTE0NzQ3OTg0OTgxNjUwODMlO1xyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjMjkwMTQwO1xyXG5cdGJvcmRlciA6IDJweCBzb2xpZCAjYWM0YmQ4O1xyXG5cdGNvbG9yIDogI2EwYTdhMDtcclxuXHRib3JkZXItcmFkaXVzIDogMTJweDtcclxufSovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-create',
                'templateUrl': './general-payment-entry-create.component.html',
                'styleUrls': ['./general-payment-entry-create.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_6__["GeneralPaymentService"] }, { type: _general_payment_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentFormService"] }]; }, null); })();


/***/ }),

/***/ "uEry":
/*!*******************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment.module.ts ***!
  \*******************************************************************/
/*! exports provided: GeneralPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentModule", function() { return GeneralPaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/general.module */ "hxwH");
/* harmony import */ var _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/module/simples/simples.module */ "O/oE");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/general-services.module */ "kPid");
/* harmony import */ var _general_payment_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-payment-routing.module */ "csRu");
/* harmony import */ var _general_payment_homepage_general_payment_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-payment-homepage/general-payment-homepage.component */ "/Pl6");
/* harmony import */ var _general_payment_dashboard_general_payment_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-payment-dashboard/general-payment-dashboard.component */ "JaU0");
/* harmony import */ var _general_payment_entry_dashboard_general_payment_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-payment-entry-dashboard/general-payment-entry-dashboard.component */ "uPDb");
/* harmony import */ var _general_payment_entries_general_payment_entries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-payment-entries/general-payment-entries.component */ "+MXy");
/* harmony import */ var _general_payment_entry_create_general_payment_entry_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-payment-entry-create/general-payment-entry-create.component */ "rjMc");
/* harmony import */ var _general_payment_entry_detail_general_payment_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-payment-entry-detail/general-payment-entry-detail.component */ "QP0/");
/* harmony import */ var _general_payment_entry_delete_all_general_payment_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-payment-entry-delete-all/general-payment-entry-delete-all.component */ "MWsK");
/* harmony import */ var _general_payment_entry_create_validator_general_payment_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general-payment-entry-create-validator/general-payment-entry-create-validator.component */ "36vH");
/* harmony import */ var _general_payment_entry_verification_general_payment_entry_verification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general-payment-entry-verification/general-payment-entry-verification.component */ "wYLK");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general-payment.service */ "LvTA");
/* harmony import */ var _general_payment_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./general-payment-form.service */ "WfdX");
/* harmony import */ var _general_payment_entry_receipt_general_payment_entry_receipt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./general-payment-entry-receipt/general-payment-entry-receipt.component */ "Amy8");





















class GeneralPaymentModule {
}
GeneralPaymentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralPaymentModule });
GeneralPaymentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralPaymentModule_Factory(t) { return new (t || GeneralPaymentModule)(); }, providers: [
        _general_payment_service__WEBPACK_IMPORTED_MODULE_17__["GeneralPaymentService"],
        _general_payment_form_service__WEBPACK_IMPORTED_MODULE_18__["GeneralPaymentFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _general_payment_routing_module__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_6__["GeneralServicesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralPaymentModule, { declarations: [_general_payment_homepage_general_payment_homepage_component__WEBPACK_IMPORTED_MODULE_8__["GeneralPaymentHomepageComponent"],
        _general_payment_dashboard_general_payment_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["GeneralPaymentDashboardComponent"],
        _general_payment_entry_dashboard_general_payment_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["GeneralPaymentEntryDashboardComponent"],
        _general_payment_entries_general_payment_entries_component__WEBPACK_IMPORTED_MODULE_11__["GeneralPaymentEntriesComponent"],
        _general_payment_entry_create_general_payment_entry_create_component__WEBPACK_IMPORTED_MODULE_12__["GeneralPaymentEntryCreateComponent"],
        _general_payment_entry_detail_general_payment_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__["GeneralPaymentEntryDetailComponent"],
        _general_payment_entry_delete_all_general_payment_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_14__["GeneralPaymentEntryDeleteAllComponent"],
        _general_payment_entry_create_validator_general_payment_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_15__["GeneralPaymentEntryCreateValidatorComponent"],
        _general_payment_entry_verification_general_payment_entry_verification_component__WEBPACK_IMPORTED_MODULE_16__["GeneralPaymentEntryVerificationComponent"],
        _general_payment_entry_receipt_general_payment_entry_receipt_component__WEBPACK_IMPORTED_MODULE_19__["GeneralPaymentEntryReceiptComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _general_payment_routing_module__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_6__["GeneralServicesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _general_payment_homepage_general_payment_homepage_component__WEBPACK_IMPORTED_MODULE_8__["GeneralPaymentHomepageComponent"],
                    _general_payment_dashboard_general_payment_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["GeneralPaymentDashboardComponent"],
                    _general_payment_entry_dashboard_general_payment_entry_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["GeneralPaymentEntryDashboardComponent"],
                    _general_payment_entries_general_payment_entries_component__WEBPACK_IMPORTED_MODULE_11__["GeneralPaymentEntriesComponent"],
                    _general_payment_entry_create_general_payment_entry_create_component__WEBPACK_IMPORTED_MODULE_12__["GeneralPaymentEntryCreateComponent"],
                    _general_payment_entry_detail_general_payment_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__["GeneralPaymentEntryDetailComponent"],
                    _general_payment_entry_delete_all_general_payment_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_14__["GeneralPaymentEntryDeleteAllComponent"],
                    _general_payment_entry_create_validator_general_payment_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_15__["GeneralPaymentEntryCreateValidatorComponent"],
                    _general_payment_entry_verification_general_payment_entry_verification_component__WEBPACK_IMPORTED_MODULE_16__["GeneralPaymentEntryVerificationComponent"],
                    _general_payment_entry_receipt_general_payment_entry_receipt_component__WEBPACK_IMPORTED_MODULE_19__["GeneralPaymentEntryReceiptComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _general_payment_routing_module__WEBPACK_IMPORTED_MODULE_7__["GeneralPaymentRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_6__["GeneralServicesModule"]
                ],
                providers: [
                    _general_payment_service__WEBPACK_IMPORTED_MODULE_17__["GeneralPaymentService"],
                    _general_payment_form_service__WEBPACK_IMPORTED_MODULE_18__["GeneralPaymentFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uPDb":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-dashboard/general-payment-entry-dashboard.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryDashboardComponent", function() { return GeneralPaymentEntryDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "vlQ6");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");












function GeneralPaymentEntryDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.entry.name, " Payment ");
} }
function GeneralPaymentEntryDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralPaymentEntryDashboardComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
const _c0 = function () { return ["entry", "create"]; };
function GeneralPaymentEntryDashboardComponent_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
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
function GeneralPaymentEntryDashboardComponent_div_3_li_9_Template(rf, ctx) { if (rf & 1) {
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
function GeneralPaymentEntryDashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryDashboardComponent_div_3_li_5_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Other Payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralPaymentEntryDashboardComponent_div_3_li_9_Template, 3, 3, "li", 0);
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
class GeneralPaymentEntryDashboardComponent {
    constructor(route, ts, gps, ems, aus) {
        this.route = route;
        this.ts = ts;
        this.gps = gps;
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
        this.gps.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $p = params.get('payment');
            this.pslug = $p;
            return this.gps.managePaymentEntry($p);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
                this.ts.setTitle(result.name + ` Payment`);
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
GeneralPaymentEntryDashboardComponent.ɵfac = function GeneralPaymentEntryDashboardComponent_Factory(t) { return new (t || GeneralPaymentEntryDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_5__["GeneralPaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
GeneralPaymentEntryDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryDashboardComponent, selectors: [["app-general-payment-entry-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], [3, "error"], ["id", "dashboard"], [1, "center", 3, "routerLink"]], template: function GeneralPaymentEntryDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralPaymentEntryDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPaymentEntryDashboardComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPaymentEntryDashboardComponent_div_3_Template, 13, 9, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry && (ctx.entry == null ? null : ctx.entry.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZW50cnktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-dashboard',
                'templateUrl': './general-payment-entry-dashboard.component.html',
                'styleUrls': ['./general-payment-entry-dashboard.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_5__["GeneralPaymentService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "wYLK":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/account/general-payment/general-payment-entry-verification/general-payment-entry-verification.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: GeneralPaymentEntryVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPaymentEntryVerificationComponent", function() { return GeneralPaymentEntryVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-payment.service */ "LvTA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");












function GeneralPaymentEntryVerificationComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralPaymentEntryVerificationComponent_app_view_description_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
function GeneralPaymentEntryVerificationComponent_app_resource_unavailable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
class GeneralPaymentEntryVerificationComponent {
    constructor(router, ns, ems, route, gps) {
        this.router = router;
        this.ns = ns;
        this.ems = ems;
        this.route = route;
        this.gps = gps;
        this.isError = false;
    }
    ngOnInit() {
        this.gps.$systemType = this.systemType;
        this.gps.$sa = this.$link;
        this.route.queryParams
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.reference;
            let $ps = this.route.snapshot.paramMap;
            this.pslug = $ps.get('payment');
            return this.gps.$verifyPayment($e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.verified == true) {
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);
                this.entryChanges(result.$data);
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(data && data._id ?
                ['general-payment', 't', this.pslug, 'entry', data.slug, 'detail'] : ['general-payment', 't', this.pslug], { 'replaceUrl': true });
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
GeneralPaymentEntryVerificationComponent.ɵfac = function GeneralPaymentEntryVerificationComponent_Factory(t) { return new (t || GeneralPaymentEntryVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_payment_service__WEBPACK_IMPORTED_MODULE_5__["GeneralPaymentService"])); };
GeneralPaymentEntryVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPaymentEntryVerificationComponent, selectors: [["app-general-payment-entry-verification"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 3, consts: [["id", "general-payment"], [4, "ngIf"], [3, "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "view-type"], [3, "error"]], template: function GeneralPaymentEntryVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPaymentEntryVerificationComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Kindly be patient while the payment is being processed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralPaymentEntryVerificationComponent_app_view_description_4_Template, 1, 1, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPaymentEntryVerificationComponent_app_resource_unavailable_5_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXBheW1lbnQtZW50cnktdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPaymentEntryVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-payment-entry-verification',
                'templateUrl': './general-payment-entry-verification.component.html',
                'styleUrls': ['./general-payment-entry-verification.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _general_payment_service__WEBPACK_IMPORTED_MODULE_5__["GeneralPaymentService"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=account-general-payment-general-payment-module.js.map