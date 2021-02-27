exports.ids = ["authentication-user-sign-in-user-sign-in-module"];
exports.modules = {

/***/ "/rJd":
/*!****************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserSignInRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInRoutingModule", function() { return UserSignInRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/have-logged-in.guard */ "PHaz");
/* harmony import */ var _user_sign_in_homepage_user_sign_in_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-sign-in-homepage/user-sign-in-homepage.component */ "oU3O");
/* harmony import */ var _user_sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-sign-in/user-sign-in.component */ "UZUu");
/* harmony import */ var _user_sign_in_route_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-sign-in-route-data */ "BjEU");








const routes = [
    { 'path': '',
        'component': _user_sign_in_homepage_user_sign_in_homepage_component__WEBPACK_IMPORTED_MODULE_3__["UserSignInHomepageComponent"],
        'canActivate': [_shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__["HaveLoggedInGuard"]],
        'children': [
            { 'path': '',
                'children': [
                    { 'path': '', 'component': _user_sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["UserSignInComponent"], 'data': { 'signIn': _user_sign_in_route_data__WEBPACK_IMPORTED_MODULE_5__["RouteConfigData"].signIn }, 'canActivate': [_shared_guards_have_logged_in_guard__WEBPACK_IMPORTED_MODULE_2__["HaveLoggedInGuard"]] },
                ] }
        ] }
];
class UserSignInRoutingModule {
}
UserSignInRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSignInRoutingModule });
UserSignInRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSignInRoutingModule_Factory(t) { return new (t || UserSignInRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignInRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "1NK+":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/password-validators.service.ts ***!
  \****************************************************************/
/*! exports provided: simplePasswordValidator, confirmPasswordValidator, currentAndNewPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplePasswordValidator", function() { return simplePasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentAndNewPasswordValidator", function() { return currentAndNewPasswordValidator; });
function simplePasswordValidator() {
    return (control) => {
        let passwordList = ['123456789', '1234567890', '12345', 'abcdef'];
        let entry = '' + control.value;
        let passwordValid = passwordList.indexOf(entry);
        return passwordValid > -1 ? { 'simplePassword': { 'value': control.value } } : null;
    };
}
function confirmPasswordValidator() {
    return (group) => {
        let password = group.get('new_password') ? group.get('new_password').value : null;
        let cPassword = group.get('confirm_password') ? group.get('confirm_password') : null;
        if (!password)
            password = group.get('password') ? group.get('password').value : null;
        if (cPassword) {
            cPassword.value != password ? cPassword.setErrors({ 'confirm_password': true, 'required': true, 'minLength': true, 'maxLength': true }) : cPassword.setErrors(null);
            return null;
        }
    };
}
function currentAndNewPasswordValidator() {
    return (group) => {
        let password = group.get('new_password') ? group.get('new_password').value : null;
        let newPassword = group.get('new_password') ? group.get('new_password') : null;
        if (!password)
            password = group.get('password') ? group.get('password').value : null;
        if (newPassword) {
            newPassword.value == password ? newPassword.setErrors({ 'currentAndNew': true, 'required': true, 'minLength': true, 'maxLength': true }) : newPassword.setErrors(null);
            return null;
        }
    };
}


/***/ }),

/***/ "AWkT":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/directives/general-directives/lowercase.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: LowercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowercaseDirective", function() { return LowercaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class LowercaseDirective {
    constructor(el) {
        this.el = el;
    }
    lowercase(field) {
        let i = 0;
        let $entry = this.el.nativeElement.value.replace(/\s+/g, '').toLowerCase();
        this.el.nativeElement.value = $entry;
    }
    ngOnInit() {
    }
}
LowercaseDirective.ɵfac = function LowercaseDirective_Factory(t) { return new (t || LowercaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LowercaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LowercaseDirective, selectors: [["", "appLowercase", ""]], hostBindings: function LowercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LowercaseDirective_input_HostBindingHandler() { return ctx.lowercase(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LowercaseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                'selector': '[appLowercase]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { lowercase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "BjEU":
/*!************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in-route-data.ts ***!
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
    'signIn': Object.assign(Object.assign({}, $$), { 'title': `Sign into User Account` }),
};


/***/ }),

/***/ "Fjfo":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in-form.service.ts ***!
  \**************************************************************************/
/*! exports provided: UserSignInFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInFormService", function() { return UserSignInFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_interfaces_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/interfaces/general */ "rE5M");
/* harmony import */ var _shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/form-validators.service */ "inDW");
/* harmony import */ var _shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/password-validators.service */ "1NK+");







class UserSignInFormService {
    constructor(fb) {
        this.fb = fb;
    }
    entryForm() {
        return this.fb.group({
            'email_address': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_3__["emailAddressValidator"])(_shared_interfaces_general__WEBPACK_IMPORTED_MODULE_2__["emailAddress"])] }],
            'password': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35), Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_4__["simplePasswordValidator"])()] }]
        });
    }
}
UserSignInFormService.ɵfac = function UserSignInFormService_Factory(t) { return new (t || UserSignInFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UserSignInFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserSignInFormService, factory: UserSignInFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


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

/***/ "PpkA":
/*!********************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in.module.ts ***!
  \********************************************************************/
/*! exports provided: UserSignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInModule", function() { return UserSignInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/general.module */ "hxwH");
/* harmony import */ var _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/general-directives/general-directives.module */ "UZWM");
/* harmony import */ var _user_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-sign-in-routing.module */ "/rJd");
/* harmony import */ var _user_sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-sign-in/user-sign-in.component */ "UZUu");
/* harmony import */ var _user_sign_in_homepage_user_sign_in_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-sign-in-homepage/user-sign-in-homepage.component */ "oU3O");
/* harmony import */ var _user_sign_in_validator_user_sign_in_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-sign-in-validator/user-sign-in-validator.component */ "vOR4");
/* harmony import */ var _user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-sign-in-form.service */ "Fjfo");











class UserSignInModule {
}
UserSignInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserSignInModule });
UserSignInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserSignInModule_Factory(t) { return new (t || UserSignInModule)(); }, providers: [
        _user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_9__["UserSignInFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignInRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSignInModule, { declarations: [_user_sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["UserSignInComponent"],
        _user_sign_in_homepage_user_sign_in_homepage_component__WEBPACK_IMPORTED_MODULE_7__["UserSignInHomepageComponent"],
        _user_sign_in_validator_user_sign_in_validator_component__WEBPACK_IMPORTED_MODULE_8__["UserSignInValidatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignInRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_sign_in_user_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["UserSignInComponent"],
                    _user_sign_in_homepage_user_sign_in_homepage_component__WEBPACK_IMPORTED_MODULE_7__["UserSignInHomepageComponent"],
                    _user_sign_in_validator_user_sign_in_validator_component__WEBPACK_IMPORTED_MODULE_8__["UserSignInValidatorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSignInRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_4__["GeneralDirectivesModule"]
                ],
                providers: [
                    _user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_9__["UserSignInFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "UZUu":
/*!************************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in/user-sign-in.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInComponent", function() { return UserSignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "MWCo");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication.service */ "9Ku7");
/* harmony import */ var _user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//user-sign-in-form.service */ "Fjfo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _shared_directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/directives/general-directives/lowercase.directive */ "AWkT");
/* harmony import */ var _user_sign_in_validator_user_sign_in_validator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-sign-in-validator/user-sign-in-validator.component */ "vOR4");
















function UserSignInComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function UserSignInComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.description, " ");
} }
function UserSignInComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function UserSignInComponent_app_notification_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function UserSignInComponent_app_notification_screen_4_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function UserSignInComponent_ng_container_6_app_user_sign_in_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-sign-in-validator", 14);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r10.systemType)("email-address", ctx_r10.email_address);
} }
function UserSignInComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email Address * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignInComponent_ng_container_6_app_user_sign_in_validator_5_Template, 1, 2, "app-user-sign-in-validator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email_address);
} }
function UserSignInComponent_ng_container_7_app_user_sign_in_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-sign-in-validator", 18);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r11.systemType)("password", ctx_r11.password);
} }
function UserSignInComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignInComponent_ng_container_7_app_user_sign_in_validator_5_Template, 1, 2, "app-user-sign-in-validator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function UserSignInComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r6.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.isFormValid);
} }
function UserSignInComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserSignInComponent {
    constructor(route, router, ds, ns, ems, auth, usifs) {
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.ns = ns;
        this.ems = ems;
        this.auth = auth;
        this.usifs = usifs;
        this.description = `All members of the system are required to signin before they can complete or perform any action or task.`;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.haveResetForm = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.signIn.systemType;
        this.viewWord = data.signIn.viewWord;
        this.systemGuideline = data.signIn.systemGuideline;
        this.title = data.signIn.title;
        this.view = data.signIn.view;
        this.ds.$systemType = this.systemType;
        this.entryForm = this.usifs.entryForm();
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    confirmAuth(body) {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ds.signIn(body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`);
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.isFormSubmitted = false;
                this.auth.saveToken(result);
                this.auth.saveUserId(result);
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is logged in.`);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.auth.redirectAddress ? this.router.navigate([this.auth.redirectAddress]) : this.router.navigate(['/user/dashboard']);
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
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get password() {
        return this.entryForm.get('password');
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
}
UserSignInComponent.ɵfac = function UserSignInComponent_Factory(t) { return new (t || UserSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_6__["UserSignInFormService"])); };
UserSignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignInComponent, selectors: [["app-user-sign-in"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"], _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])], decls: 10, vars: 9, consts: [["id", "entry-create"], [4, "ngIf"], ["class", "description", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["method", "post", 3, "formGroup", "ngSubmit"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [1, "description"], [3, "error"], [3, "notified", "message", "finished"], [1, "form-group"], ["for", "email_address", 1, "form-label", "bold"], ["type", "text", "id", "email_address", "name", "email_address", "placeholder", "david@example.com", "required", "required", "autocomplete", "new-email_address", "formControlName", "email_address", "appLowercase", "appLowercase", 1, "form-control"], [3, "system-type", "email-address", 4, "ngIf"], [3, "system-type", "email-address"], ["for", "password", 1, "form-label", "bold"], ["type", "password", "id", "password", "name", "password", "placeholder", "*******************", "required", "required", "autocomplete", "new-password", "formControlName", "password", 1, "form-control"], [3, "system-type", "password", 4, "ngIf"], [3, "system-type", "password"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function UserSignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSignInComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignInComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserSignInComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserSignInComponent_app_notification_screen_4_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSignInComponent_Template_form_ngSubmit_5_listener() { return ctx.confirmAuth(ctx.entryForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserSignInComponent_ng_container_6_Template, 6, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserSignInComponent_ng_container_7_Template, 6, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserSignInComponent_button_8_Template, 2, 5, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserSignInComponent_p_9_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFormProcessing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFormSubmitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_10__["NotificationScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _shared_directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_11__["LowercaseDirective"], _user_sign_in_validator_user_sign_in_validator_component__WEBPACK_IMPORTED_MODULE_12__["UserSignInValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZ24taW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-user-sign-in',
                'templateUrl': './user-sign-in.component.html',
                'styleUrls': ['./user-sign-in.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"], _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_1__["ErrorMessagesService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _user_sign_in_form_service__WEBPACK_IMPORTED_MODULE_6__["UserSignInFormService"] }]; }, null); })();


/***/ }),

/***/ "UZWM":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/directives/general-directives/general-directives.module.ts ***!
  \***********************************************************************************/
/*! exports provided: GeneralDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDirectivesModule", function() { return GeneralDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _lowercase_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase.directive */ "AWkT");
/* harmony import */ var _capitalize_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitalize.directive */ "ws4g");





class GeneralDirectivesModule {
}
GeneralDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralDirectivesModule });
GeneralDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralDirectivesModule_Factory(t) { return new (t || GeneralDirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralDirectivesModule, { declarations: [_lowercase_directive__WEBPACK_IMPORTED_MODULE_2__["LowercaseDirective"],
        _capitalize_directive__WEBPACK_IMPORTED_MODULE_3__["CapitalizeDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_lowercase_directive__WEBPACK_IMPORTED_MODULE_2__["LowercaseDirective"],
        _capitalize_directive__WEBPACK_IMPORTED_MODULE_3__["CapitalizeDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _lowercase_directive__WEBPACK_IMPORTED_MODULE_2__["LowercaseDirective"],
                    _capitalize_directive__WEBPACK_IMPORTED_MODULE_3__["CapitalizeDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _lowercase_directive__WEBPACK_IMPORTED_MODULE_2__["LowercaseDirective"],
                    _capitalize_directive__WEBPACK_IMPORTED_MODULE_3__["CapitalizeDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oU3O":
/*!******************************************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in-homepage/user-sign-in-homepage.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UserSignInHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInHomepageComponent", function() { return UserSignInHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class UserSignInHomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSignInHomepageComponent.ɵfac = function UserSignInHomepageComponent_Factory(t) { return new (t || UserSignInHomepageComponent)(); };
UserSignInHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignInHomepageComponent, selectors: [["app-user-sign-in-homepage"]], decls: 1, vars: 0, template: function UserSignInHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZ24taW4taG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-sign-in-homepage',
                templateUrl: './user-sign-in-homepage.component.html',
                styleUrls: ['./user-sign-in-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rE5M":
/*!**********************************************!*\
  !*** ./src/app/shared/interfaces/general.ts ***!
  \**********************************************/
/*! exports provided: forbiddenNames, emailAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNames", function() { return forbiddenNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddress", function() { return emailAddress; });
const forbiddenNames = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;
const emailAddress = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


/***/ }),

/***/ "vOR4":
/*!********************************************************************************************************!*\
  !*** ./src/app/authentication/user-sign-in/user-sign-in-validator/user-sign-in-validator.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UserSignInValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInValidatorComponent", function() { return UserSignInValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function UserSignInValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r3.systemType, " should be provided and cannot be empty ");
} }
function UserSignInValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r4.systemType, " cannot be less than 7 characters in length ");
} }
function UserSignInValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r5.systemType, " cannot be greater than 50 characters in length ");
} }
function UserSignInValidatorComponent_ng_container_0_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address must be valid and should conform to standards for example david@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSignInValidatorComponent_ng_container_0_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address cannot be used at the moment because it is already taken by another user. Please input another email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSignInValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignInValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserSignInValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserSignInValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignInValidatorComponent_ng_container_0_div_1_li_5_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserSignInValidatorComponent_ng_container_0_div_1_li_6_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.required) || (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.required) || (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.required) || (ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.email_address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email_address.errors == null ? null : ctx_r2.email_address.errors.emailAddressService);
} }
function UserSignInValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSignInValidatorComponent_ng_container_0_div_1_Template, 7, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email_address.invalid && (ctx_r0.email_address.touched || ctx_r0.email_address.dirty));
} }
function UserSignInValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r9.systemType, " should be provided and cannot be empty ");
} }
function UserSignInValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r10.systemType, " cannot be less than 7 characters in length ");
} }
function UserSignInValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r11.systemType, " cannot be greater than 35 characters in length ");
} }
function UserSignInValidatorComponent_ng_container_1_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r12.systemType, " is too simple and will not be allowed in this system. Please input another type of password ");
} }
function UserSignInValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserSignInValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserSignInValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserSignInValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSignInValidatorComponent_ng_container_1_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.password.errors == null ? null : ctx_r8.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.password.errors == null ? null : ctx_r8.password.errors.required) || (ctx_r8.password.errors == null ? null : ctx_r8.password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.password.errors == null ? null : ctx_r8.password.errors.required) || (ctx_r8.password.errors == null ? null : ctx_r8.password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.password.errors == null ? null : ctx_r8.password.errors.simplePassword);
} }
function UserSignInValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSignInValidatorComponent_ng_container_1_div_1_Template, 6, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.password.invalid && (ctx_r1.password.touched || ctx_r1.password.dirty));
} }
class UserSignInValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UserSignInValidatorComponent.ɵfac = function UserSignInValidatorComponent_Factory(t) { return new (t || UserSignInValidatorComponent)(); };
UserSignInValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignInValidatorComponent, selectors: [["app-user-sign-in-validator"]], inputs: { systemType: ["system-type", "systemType"], email_address: ["email-address", "email_address"], password: "password" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function UserSignInValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserSignInValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSignInValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZ24taW4tdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignInValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-user-sign-in-validator',
                'templateUrl': './user-sign-in-validator.component.html',
                'styleUrls': ['./user-sign-in-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], email_address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['email-address']
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ws4g":
/*!******************************************************************************!*\
  !*** ./src/app/shared/directives/general-directives/capitalize.directive.ts ***!
  \******************************************************************************/
/*! exports provided: CapitalizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeDirective", function() { return CapitalizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class CapitalizeDirective {
    constructor(el) {
        this.el = el;
    }
    capitalize(field) {
        let i = 0;
        let $entry = this.el.nativeElement.value.replace(/\s+/g, ' ').split(' ')
            .map((n) => { return n.charAt(0).toUpperCase() + n.substring(1).toLowerCase(); }).join(' ');
        this.el.nativeElement.value = $entry;
    }
    ngOnInit() {
    }
}
CapitalizeDirective.ɵfac = function CapitalizeDirective_Factory(t) { return new (t || CapitalizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CapitalizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CapitalizeDirective, selectors: [["", "appCapitalize", ""]], hostBindings: function CapitalizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CapitalizeDirective_input_HostBindingHandler() { return ctx.capitalize(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                'selector': '[appCapitalize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { capitalize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=authentication-user-sign-in-user-sign-in-module.js.map