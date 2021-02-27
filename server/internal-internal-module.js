exports.ids = ["internal-internal-module"];
exports.modules = {

/***/ "6OLj":
/*!****************************************************************!*\
  !*** ./src/app/system/internal/internal/internal.component.ts ***!
  \****************************************************************/
/*! exports provided: InternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalComponent", function() { return InternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class InternalComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
InternalComponent.ɵfac = function InternalComponent_Factory(t) { return new (t || InternalComponent)(); };
InternalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternalComponent, selectors: [["app-internal"]], decls: 3, vars: 1, consts: [["routerOutlet", "outlet"]], template: function InternalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimation", ctx.getAnimationData(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm5hbC5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-internal',
                'templateUrl': './internal.component.html',
                'styleUrls': ['./internal.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "U6G5":
/*!****************************************************!*\
  !*** ./src/app/system/internal/internal.module.ts ***!
  \****************************************************/
/*! exports provided: InternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalModule", function() { return InternalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _internal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal-routing.module */ "jodm");
/* harmony import */ var _internal_dashboard_internal_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal-dashboard/internal-dashboard.component */ "vx94");
/* harmony import */ var _internal_internal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/internal.component */ "6OLj");






class InternalModule {
}
InternalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternalModule });
InternalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternalModule_Factory(t) { return new (t || InternalModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternalModule, { declarations: [_internal_dashboard_internal_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["InternalDashboardComponent"],
        _internal_internal_component__WEBPACK_IMPORTED_MODULE_4__["InternalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _internal_dashboard_internal_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["InternalDashboardComponent"],
                    _internal_internal_component__WEBPACK_IMPORTED_MODULE_4__["InternalComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_routing_module__WEBPACK_IMPORTED_MODULE_2__["InternalRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "jodm":
/*!************************************************************!*\
  !*** ./src/app/system/internal/internal-routing.module.ts ***!
  \************************************************************/
/*! exports provided: InternalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalRoutingModule", function() { return InternalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guards/is-admin.guard */ "5kR8");
/* harmony import */ var _shared_guards_account_status_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/guards/account-status.guard */ "ikh+");
/* harmony import */ var _internal_dashboard_internal_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal-dashboard/internal-dashboard.component */ "vx94");
/* harmony import */ var _internal_internal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/internal.component */ "6OLj");









// Stage ID and Name must be given serious consideration
const routes = [
    { 'path': '',
        'component': _internal_internal_component__WEBPACK_IMPORTED_MODULE_6__["InternalComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"], _shared_guards_account_status_guard__WEBPACK_IMPORTED_MODULE_4__["AccountStatusGuard"], _shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__["IsAdminGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"], _shared_guards_account_status_guard__WEBPACK_IMPORTED_MODULE_4__["AccountStatusGuard"], _shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__["IsAdminGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"], _shared_guards_account_status_guard__WEBPACK_IMPORTED_MODULE_4__["AccountStatusGuard"], _shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__["IsAdminGuard"]],
                'children': [
                    { 'path': '', 'component': _internal_dashboard_internal_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["InternalDashboardComponent"] },
                    /** Internal One **/
                    { 'path': 'country', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-country-country-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-country-country-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/country/country.module */ "63eC")).then(m => m.CountryModule) },
                    { 'path': 'faculty', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-faculty-faculty-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-faculty-faculty-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/faculty/faculty.module */ "LXD8")).then(m => m.FacultyModule) },
                    { 'path': 'level', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-level-level-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-level-level-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/level/level.module */ "9wAj")).then(m => m.LevelModule) },
                    { 'path': 'payment-session', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-payment-session-payment-session-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-payment-session-payment-session-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/payment-session/payment-session.module */ "ezFT")).then(m => m.PaymentSessionModule) },
                    { 'path': 'payment-type', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-payment-type-payment-type-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-payment-type-payment-type-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/payment-type/payment-type.module */ "mh4J")).then(m => m.PaymentTypeModule) },
                    { 'path': 'refund-stage', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-refund-stage-refund-stage-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-refund-stage-refund-stage-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/refund-stage/refund-stage.module */ "9287")).then(m => m.RefundStageModule) },
                    { 'path': 'unit', 'loadChildren': () => Promise.all(/*! import() | internal-one-module-unit-unit-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-one-module-country-country-module~internal-one-module-faculty-faculty-module~internal-one-m~2cde8218"), __webpack_require__.e("internal-one-module-unit-unit-module")]).then(__webpack_require__.bind(null, /*! ./internal-one/module/unit/unit.module */ "Cuey")).then(m => m.UnitModule) },
                    /** Internal One **/
                    /** Internal Two **/
                    { 'path': 'general-request-status', 'loadChildren': () => Promise.all(/*! import() | internal-two-module-general-request-status-general-request-status-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module~internal-two-module-payment~ac63bc46"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module")]).then(__webpack_require__.bind(null, /*! ./internal-two/module/general-request-status/general-request-status.module */ "0V1E")).then(m => m.GeneralRequestStatusModule) },
                    { 'path': 'payment-status', 'loadChildren': () => Promise.all(/*! import() | internal-two-module-payment-status-payment-status-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module~internal-two-module-payment~ac63bc46"), __webpack_require__.e("internal-two-module-payment-status-payment-status-module")]).then(__webpack_require__.bind(null, /*! ./internal-two/module/payment-status/payment-status.module */ "72si")).then(m => m.PaymentStatusModule) },
                    { 'path': 'general-status', 'loadChildren': () => Promise.all(/*! import() | internal-two-module-status-status-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module~internal-two-module-payment~ac63bc46"), __webpack_require__.e("internal-two-module-status-status-module")]).then(__webpack_require__.bind(null, /*! ./internal-two/module/status/status.module */ "DppP")).then(m => m.StatusModule) },
                    { 'path': 'user-role', 'loadChildren': () => Promise.all(/*! import() | internal-two-module-user-role-user-role-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module~internal-two-module-payment~ac63bc46"), __webpack_require__.e("internal-two-module-user-role-user-role-module")]).then(__webpack_require__.bind(null, /*! ./internal-two/module/user-role/user-role.module */ "qJR5")).then(m => m.UserRoleModule) },
                    { 'path': 'user-status', 'loadChildren': () => Promise.all(/*! import() | internal-two-module-user-status-user-status-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("internal-two-module-general-request-status-general-request-status-module~internal-two-module-payment~ac63bc46"), __webpack_require__.e("internal-two-module-user-status-user-status-module")]).then(__webpack_require__.bind(null, /*! ./internal-two/module/user-status/user-status.module */ "QIz/")).then(m => m.UserStatusModule) },
                    /** Internal Two **/
                    /** Internal Three **/
                    { 'path': 'general-request-comment', 'loadChildren': () => Promise.all(/*! import() | internal-three-module-general-request-comment-general-request-comment-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("internal-three-module-general-request-comment-general-request-comment-module~internal-three-module-r~2f8eddc0"), __webpack_require__.e("internal-three-module-general-request-comment-general-request-comment-module")]).then(__webpack_require__.bind(null, /*! ./internal-three/module/general-request-comment/general-request-comment.module */ "bhWz")).then(m => m.GeneralRequestCommentModule) },
                    { 'path': 'refund-comment', 'loadChildren': () => Promise.all(/*! import() | internal-three-module-refund-comment-refund-comment-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("internal-three-module-general-request-comment-general-request-comment-module~internal-three-module-r~2f8eddc0"), __webpack_require__.e("internal-three-module-refund-comment-refund-comment-module")]).then(__webpack_require__.bind(null, /*! ./internal-three/module/refund-comment/refund-comment.module */ "MNd0")).then(m => m.RefundCommentModule) },
                    { 'path': 'reply', 'loadChildren': () => Promise.all(/*! import() | internal-three-module-reply-reply-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("internal-three-module-general-request-comment-general-request-comment-module~internal-three-module-r~2f8eddc0"), __webpack_require__.e("internal-three-module-reply-reply-module")]).then(__webpack_require__.bind(null, /*! ./internal-three/module/reply/reply.module */ "1PmC")).then(m => m.ReplyModule) },
                    /** Internal Three **/
                    /** Internal Others **/
                    { 'path': 'department', 'loadChildren': () => Promise.all(/*! import() | commons-department-department-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("commons-department-department-module")]).then(__webpack_require__.bind(null, /*! ./commons/department/department.module */ "bfZe")).then(m => m.DepartmentModule) },
                    { 'path': 'refund-signature', 'loadChildren': () => Promise.all(/*! import() | commons-refund-signature-refund-signature-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-refund-signature-refund-signature-module")]).then(__webpack_require__.bind(null, /*! ./commons/refund-signature/refund-signature.module */ "dtd9")).then(m => m.RefundSignatureModule) },
                    { 'path': 'request-type', 'loadChildren': () => Promise.all(/*! import() | commons-request-type-request-type-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"), __webpack_require__.e("commons-request-type-request-type-module")]).then(__webpack_require__.bind(null, /*! ./commons/request-type/request-type.module */ "5L02")).then(m => m.RequestTypeModule) },
                    { 'path': 'request-credential', 'loadChildren': () => Promise.all(/*! import() | commons-request-credential-request-credential-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("commons-request-credential-request-credential-module")]).then(__webpack_require__.bind(null, /*! ./commons/request-credential/request-credential.module */ "K1fT")).then(m => m.RequestCredentialModule) },
                    { 'path': 'user', 'loadChildren': () => Promise.all(/*! import() | commons-user-user-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("authentication-user-sign-up-user-sign-up-module~commons-user-user-module"), __webpack_require__.e("commons-user-user-module")]).then(__webpack_require__.bind(null, /*! ./commons/user/user.module */ "Zi4T")).then(m => m.UserModule) },
                    { 'path': 'user-upload', 'loadChildren': () => Promise.all(/*! import() | internal-four-module-user-upload-user-upload-module */[__webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"), __webpack_require__.e("account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"), __webpack_require__.e("account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"), __webpack_require__.e("internal-four-module-user-upload-user-upload-module")]).then(__webpack_require__.bind(null, /*! ./internal-four/module/user-upload/user-upload.module */ "6/ph")).then(m => m.UserUploadModule) },
                ] }
        ]
    }
];
class InternalRoutingModule {
}
InternalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InternalRoutingModule });
InternalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InternalRoutingModule_Factory(t) { return new (t || InternalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InternalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vx94":
/*!************************************************************************************!*\
  !*** ./src/app/system/internal/internal-dashboard/internal-dashboard.component.ts ***!
  \************************************************************************************/
/*! exports provided: InternalDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalDashboardComponent", function() { return InternalDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




function InternalDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
const _c0 = function (a1) { return ["./", a1]; };
function InternalDashboardComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, entry_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r3.value, " ");
} }
function InternalDashboardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InternalDashboardComponent_ng_container_5_li_1_Template, 3, 4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.entries));
} }
const _c1 = function () { return ["/account/", "profile"]; };
class InternalDashboardComponent {
    constructor() {
        this.title = 'Internal Dashboard';
        this.entries = {
            'country': 'Country',
            'department': 'Department',
            'faculty': 'Faculty',
            'level': 'Level',
            'payment-type': 'Payment Type',
            'payment-session': 'Payment Session',
            'payment-status': 'Payment Status',
            'refund-comment': 'Refund Comment',
            'refund-letter': 'Refund Letter',
            'refund-signature': 'Refund Signature',
            'refund-stage': 'Refund Stage',
            'general-request-status': 'Request Status',
            'request-type': 'Request Type',
            'general-request-comment': 'General Request Comment',
            'request-credential': 'Request Credential',
            'reply': 'Reply',
            'user-role': 'User Role',
            'unit': 'Unit',
            'user': 'User',
            'user-upload': 'General Upload',
            'user-signature': 'User Signature',
            'user-photo': 'User Photo',
            'user-status': 'User Status',
        };
    }
    ngOnInit() {
    }
}
InternalDashboardComponent.ɵfac = function InternalDashboardComponent_Factory(t) { return new (t || InternalDashboardComponent)(); };
InternalDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternalDashboardComponent, selectors: [["app-internal-dashboard"]], decls: 9, vars: 4, consts: [[4, "ngIf"], ["id", "dashboard"], [1, "center", 3, "routerLink"], [4, "ngFor", "ngForOf"]], template: function InternalDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InternalDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Only Administrators and Moderators are allowed to perform an action within this part of the system. Anybody with a privilege less than an Administrator and Moderator are not allowed or permitted to make permanent or temporary changes to the records available in the system. In this dashboard, the Administrator and Moderator will be able to monitor and evaluate entries that are specifically meant for internal decision making to drive the development of the system and entries that have been made by the user for the purpose the system have been created for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InternalDashboardComponent_ng_container_5_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm5hbC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-internal-dashboard',
                'templateUrl': './internal-dashboard.component.html',
                'styleUrls': ['./internal-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

};;
//# sourceMappingURL=internal-internal-module.js.map