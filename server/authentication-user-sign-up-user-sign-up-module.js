exports.ids = ["authentication-user-sign-up-user-sign-up-module"];
exports.modules = {

/***/ "7Gs9":
/*!********************************************************************!*\
  !*** ./src/app/authentication/user-sign-up/user-sign-up.module.ts ***!
  \********************************************************************/
/*! exports provided: UserSignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpModule", function() { return UserSignUpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/general.module */ "hxwH");
/* harmony import */ var _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/general-directives/general-directives.module */ "UZWM");
/* harmony import */ var _user_sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-sign-up-routing.module */ "CC09");
/* harmony import */ var _shared_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/user-account/user-account.module */ "5k3e");
/* harmony import */ var _user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-sign-up/user-sign-up.component */ "j9Fc");
/* harmony import */ var _user_sign_up_homepage_user_sign_up_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-sign-up-homepage/user-sign-up-homepage.component */ "Yc19");










class UserSignUpModule {
}
UserSignUpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSignUpModule });
UserSignUpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSignUpModule_Factory(t) { return new (t || UserSignUpModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignUpRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"],
            _shared_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_6__["UserAccountModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignUpModule, { declarations: [_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["UserSignUpComponent"],
        _user_sign_up_homepage_user_sign_up_homepage_component__WEBPACK_IMPORTED_MODULE_8__["UserSignUpHomepageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignUpRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"],
        _shared_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_6__["UserAccountModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["UserSignUpComponent"],
                    _user_sign_up_homepage_user_sign_up_homepage_component__WEBPACK_IMPORTED_MODULE_8__["UserSignUpHomepageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignUpRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"],
                    _shared_user_account_user_account_module__WEBPACK_IMPORTED_MODULE_6__["UserAccountModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CC09":
/*!****************************************************************************!*\
  !*** ./src/app/authentication/user-sign-up/user-sign-up-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserSignUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpRoutingModule", function() { return UserSignUpRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/have-logged-in.guard */ "PHaz");
/* harmony import */ var _user_sign_up_homepage_user_sign_up_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-sign-up-homepage/user-sign-up-homepage.component */ "Yc19");
/* harmony import */ var _user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-sign-up/user-sign-up.component */ "j9Fc");
/* harmony import */ var _user_sign_up_route_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-sign-up-route-data */ "sPR4");








const routes = [
    { 'path': '',
        'component': _user_sign_up_homepage_user_sign_up_homepage_component__WEBPACK_IMPORTED_MODULE_3__["UserSignUpHomepageComponent"],
        'canActivate': [_shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__["HaveLoggedInGuard"]],
        'children': [
            { 'path': '',
                'children': [
                    { 'path': '', 'component': _user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["UserSignUpComponent"], 'data': { 'signUp': _user_sign_up_route_data__WEBPACK_IMPORTED_MODULE_5__["RouteConfigData"].signUp }, 'canActivate': [_shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__["HaveLoggedInGuard"]] },
                ] }
        ] }
];
class UserSignUpRoutingModule {
}
UserSignUpRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSignUpRoutingModule });
UserSignUpRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSignUpRoutingModule_Factory(t) { return new (t || UserSignUpRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignUpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PHaz":
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/have-logged-in.guard.ts ***!
  \*******************************************************/
/*! exports provided: HaveLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaveLoggedInGuard", function() { return HaveLoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class HaveLoggedInGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.verifyLogin(url);
    }
    verifyLogin(url) {
        if (this.aus.isLoggedIn()) {
            return this.router.parseUrl('account/profile');
        }
        else {
            return true;
        }
    }
}
HaveLoggedInGuard.ɵfac = function HaveLoggedInGuard_Factory(t) { return new (t || HaveLoggedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HaveLoggedInGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HaveLoggedInGuard, factory: HaveLoggedInGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HaveLoggedInGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Yc19":
/*!******************************************************************************************************!*\
  !*** ./src/app/authentication/user-sign-up/user-sign-up-homepage/user-sign-up-homepage.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UserSignUpHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpHomepageComponent", function() { return UserSignUpHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class UserSignUpHomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSignUpHomepageComponent.ɵfac = function UserSignUpHomepageComponent_Factory(t) { return new (t || UserSignUpHomepageComponent)(); };
UserSignUpHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignUpHomepageComponent, selectors: [["app-user-sign-up-homepage"]], decls: 1, vars: 0, template: function UserSignUpHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZ24tdXAtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-sign-up-homepage',
                templateUrl: './user-sign-up-homepage.component.html',
                styleUrls: ['./user-sign-up-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fY2h":
/*!**********************************************!*\
  !*** ./src/app/authentication/user-other.ts ***!
  \**********************************************/
/*! exports provided: UserOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOther", function() { return UserOther; });
class UserOther {
    constructor(data) {
        this.faculty = data.Faculty ? data.Faculty : [];
        this.department = data.Department ? data.Department : [];
        this.unit = data.Unit ? data.Unit : [];
        this.level = data.Level ? data.Level : [];
        this.country = data.Country ? data.Country : [];
    }
}


/***/ }),

/***/ "j9Fc":
/*!************************************************************************************!*\
  !*** ./src/app/authentication/user-sign-up/user-sign-up/user-sign-up.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpComponent", function() { return UserSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configuration */ "VcWf");
/* harmony import */ var _user_other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-other */ "fY2h");
/* harmony import */ var _shared_user_account_user_account_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/user-account/user-account-form.service */ "37EL");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.service */ "MWCo");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../authentication.service */ "9Ku7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_user_account_user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/user-account/user-account-form-inputs/user-account-form-inputs.component */ "U7hS");



















function UserSignUpComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function UserSignUpComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function UserSignUpComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function UserSignUpComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function UserSignUpComponent_app_resource_unavailable_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r3.error);
} }
function UserSignUpComponent_div_5_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First and Last Name cannot be equal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSignUpComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignUpComponent_div_5_div_2_li_2_Template, 2, 0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.entryForm.errors && ctx_r7.entryForm.errors.bothNames);
} }
function UserSignUpComponent_div_5_app_user_account_form_inputs_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-form-inputs", 13);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r8.systemType)("entry-form", ctx_r8.entryForm)("general-others", ctx_r8.generalOthers)("no-edit", ctx_r8.noEdit);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function UserSignUpComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r9.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r9.isFormValid);
} }
function UserSignUpComponent_div_5_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSignUpComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSignUpComponent_div_5_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.addEntry(ctx_r12.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignUpComponent_div_5_div_2_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserSignUpComponent_div_5_app_user_account_form_inputs_3_Template, 1, 4, "app-user-account-form-inputs", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserSignUpComponent_div_5_button_4_Template, 2, 5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignUpComponent_div_5_p_5_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entryForm.touched || ctx_r4.entryForm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class UserSignUpComponent extends _shared_user_account_user_account_form_service__WEBPACK_IMPORTED_MODULE_3__["UserAccountFormService"] {
    constructor(router, ds, ns, route, ems, auth, fb, http, apiConfig) {
        super(auth, fb, http, apiConfig);
        this.router = router;
        this.ds = ds;
        this.ns = ns;
        this.route = route;
        this.ems = ems;
        this.auth = auth;
        this.fb = fb;
        this.http = http;
        this.apiConfig = apiConfig;
        this.generalOthers = null;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.signUp.systemType;
        this.viewWord = data.signUp.viewWord;
        this.systemGuideline = data.signUp.systemGuideline;
        this.title = data.signUp.title;
        this.view = data.signUp.view;
        this.link = data.signUp.link;
        this.$link = data.signUp.$link;
        this.controlFilters = data.signUp.controlFilters;
        this.noEdit = data.signUp.noEdit;
        this.ds.$systemType = this.systemType;
        this.ds.addUser()
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            if (result != null) {
                let data = result;
                this.generalOthers = new _user_other__WEBPACK_IMPORTED_MODULE_2__["UserOther"](data);
                this.removeControls(this.controlFilters);
                this.createPermanent(data);
            }
        });
    }
    ;
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    addEntry(body) {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ds.addUser$(body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.auth.saveToken(result);
                this.auth.saveUserId(result);
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(data != null ?
                ['user', 'dashboard'] : ['system', 'internal', this.link, 'entries']);
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
UserSignUpComponent.ɵfac = function UserSignUpComponent_Factory(t) { return new (t || UserSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_configuration__WEBPACK_IMPORTED_MODULE_1__["Api_Token"])); };
UserSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignUpComponent, selectors: [["app-user-sign-up"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"], _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [["id", "entry-create"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "error", 3, "error", 4, "ngIf"], ["id", "entry-detail", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], ["id", "error", 3, "error"], ["id", "entry-detail"], ["method", "post", 3, "formGroup", "ngSubmit"], [3, "system-type", "entry-form", "general-others", "no-edit", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [3, "system-type", "entry-form", "general-others", "no-edit"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function UserSignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSignUpComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignUpComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserSignUpComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserSignUpComponent_app_resource_unavailable_4_Template, 1, 1, "app-resource-unavailable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignUpComponent_div_5_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generalOthers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_14__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _shared_user_account_user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_15__["UserAccountFormInputsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZ24tdXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-user-sign-up',
                'templateUrl': './user-sign-up.component.html',
                'styleUrls': ['./user-sign-up.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"], _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_1__["Api_Token"]]
            }] }]; }, null); })();


/***/ }),

/***/ "sPR4":
/*!************************************************************************!*\
  !*** ./src/app/authentication/user-sign-up/user-sign-up-route-data.ts ***!
  \************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'User',
    'title': 'User',
    'view': 'gen-internal',
    'viewWord': 'User',
    'link': 'user',
    '$link': 'authentication',
    'systemGuideline': 'gen-internal'
};
const RouteConfigData = {
    'signUp': Object.assign(Object.assign({}, $$), { 'title': `Request for a User Account`, 'view': 'ca', 'controlFilters': ['level', 'unit', 'country', 'role', 'status'], 'noEdit': false }),
};


/***/ })

};;
//# sourceMappingURL=authentication-user-sign-up-user-sign-up-module.js.map