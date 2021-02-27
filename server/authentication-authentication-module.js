exports.ids = ["authentication-authentication-module"];
exports.modules = {

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

/***/ "CJIJ":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication-route-data.ts ***!
  \*************************************************************/
/*! exports provided: AData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AData", function() { return AData; });
let $$ = {
    'systemType': 'User',
    'title': 'User',
    'view': 'gen-internal',
    'viewWord': 'User',
    'link': 'user',
    '$link': 'authentication',
    'systemGuideline': 'gen-internal'
};
let searchFilters = { 'role': 'Role', 'emailAddress': 'Email Address', 'level': 'Level', 'identityNumber': 'Identity Number', 'status': 'Status' };
let signIncontrolFilters = ['firstName', 'lastName', 'username', 'about', 'department', 'role', 'faculty', 'level', 'country', 'unit', 'matriculationNumber',
    'jambRegistrationNumber', 'identityNumber', 'confirmPassword', 'status'];
const AData = {
    'dashboard': Object.assign({}, $$),
    'signUp': Object.assign(Object.assign({}, $$), { 'title': `Request for a User Account`, 'view': 'ca', 'controlFilters': ['country', 'role', 'status'], 'noEdit': false }),
    'signIn': Object.assign(Object.assign({}, $$), { 'title': `Sign into User Account`, 'view': 'ca', 'controlFilters': signIncontrolFilters, 'asyncValidators': ['emailAddress', 'username'], 'noEdit': false }),
    'forgotPassword': Object.assign(Object.assign({}, $$), { 'title': `Recover User Account`, 'view': 'up', 'noEdit': false }),
    'resetPassword': Object.assign(Object.assign({}, $$), { 'title': `Reset User Password`, 'view': 'up', 'noEdit': false }),
};


/***/ }),

/***/ "EHhD":
/*!***************************************************************!*\
  !*** ./src/app/authentication/authentication-form.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationFormService", function() { return AuthenticationFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/password-validators.service */ "1NK+");





class AuthenticationFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.entryValidators = {
            'password': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35), Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_2__["simplePasswordValidator"])()],
        };
    }
    resetPassword() {
        let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'new_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.password),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.password)
        }, [Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_2__["confirmPasswordValidator"])()]);
        return form;
    }
}
AuthenticationFormService.ɵfac = function AuthenticationFormService_Factory(t) { return new (t || AuthenticationFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AuthenticationFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationFormService, factory: AuthenticationFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/general.module */ "hxwH");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/general-services.module */ "kPid");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "yMLD");
/* harmony import */ var _error_messages_service1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-messages.service1 */ "S5BJ");
/* harmony import */ var _authentication_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication-form.service */ "EHhD");











class AuthenticationModule {
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, providers: [
        _error_messages_service1__WEBPACK_IMPORTED_MODULE_8__["ErrorMessagesService1"],
        _authentication_form_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"],
                    _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationRoutingModule"]
                ],
                providers: [
                    _error_messages_service1__WEBPACK_IMPORTED_MODULE_8__["ErrorMessagesService1"],
                    _authentication_form_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q1du":
/*!*******************************************!*\
  !*** ./src/app/authentication/general.ts ***!
  \*******************************************/
/*! exports provided: forbiddenNames, emailAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNames", function() { return forbiddenNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddress", function() { return emailAddress; });
const forbiddenNames = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;
const emailAddress = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "yMLD");
/* harmony import */ var _authentication_route_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-route-data */ "CJIJ");







const routes = [
    { 'path': 'forgot-password', 'component': _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"], 'data': { 'forgotPassword': _authentication_route_data__WEBPACK_IMPORTED_MODULE_4__["AData"].forgotPassword } },
    { 'path': 'reset-password/:token', 'component': _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"], 'data': { 'resetPassword': _authentication_route_data__WEBPACK_IMPORTED_MODULE_4__["AData"].resetPassword } },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xTco":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general */ "Q1du");
/* harmony import */ var _shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/form-validators.service */ "inDW");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _error_messages_service1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error-messages.service1 */ "S5BJ");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.service */ "MWCo");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../general/resource-unavailable/resource-unavailable.component */ "TY4h");


















function ForgotPasswordComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ForgotPasswordComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
function ForgotPasswordComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r2.view);
} }
function ForgotPasswordComponent_app_notification_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ForgotPasswordComponent_app_notification_screen_4_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function ForgotPasswordComponent_app_resource_unavailable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r4.error);
} }
function ForgotPasswordComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Note : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A reset password message have been sent to your email address. Kindly check your inbox or spam so that you can sign in and recover the account by choosing a password. Do not share what reset token code is sent to you with anyone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ForgotPasswordComponent_form_7_ng_container_5_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r13.systemType, " should be provided and cannot be empty ");
} }
function ForgotPasswordComponent_form_7_ng_container_5_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r14.systemType, " cannot be less than 7 characters in length ");
} }
function ForgotPasswordComponent_form_7_ng_container_5_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r15.systemType, " cannot be greater than 50 characters in length ");
} }
function ForgotPasswordComponent_form_7_ng_container_5_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address must be valid and should conform to standards for example david@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_7_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_form_7_ng_container_5_div_1_li_2_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_form_7_ng_container_5_div_1_li_3_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_form_7_ng_container_5_div_1_li_4_Template, 2, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_form_7_ng_container_5_div_1_li_5_Template, 2, 0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.required) || (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.required) || (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.required) || (ctx_r12.email_address.errors == null ? null : ctx_r12.email_address.errors.email_address));
} }
function ForgotPasswordComponent_form_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_form_7_ng_container_5_div_1_Template, 6, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.email_address.invalid && (ctx_r9.email_address.touched || ctx_r9.email_address.dirty));
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ForgotPasswordComponent_form_7_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r10.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r10.isFormValid);
} }
function ForgotPasswordComponent_form_7_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.confirmEntry(ctx_r17.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email Address * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_form_7_ng_container_5_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_form_7_button_6_Template, 2, 5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_7_p_7_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isFormSubmitted);
} }
class ForgotPasswordComponent {
    constructor(router, route, ds, auth, fb, ns, ems) {
        this.router = router;
        this.route = route;
        this.ds = ds;
        this.auth = auth;
        this.fb = fb;
        this.ns = ns;
        this.ems = ems;
        this.description = `All members of the system are will be able to recover their account if they have an email address registered in the system.`;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        this.entryForm = this.fb.group({
            'email_address': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_3__["emailAddressValidator"])(_general__WEBPACK_IMPORTED_MODULE_2__["emailAddress"])] }]
        });
        let data = this.route.snapshot.data;
        this.systemType = data.forgotPassword.systemType;
        this.viewWord = data.forgotPassword.viewWord;
        this.systemGuideline = data.forgotPassword.systemGuideline;
        this.title = data.forgotPassword.title;
        this.view = data.forgotPassword.view;
        this.link = data.forgotPassword.link;
        this.ds.$systemType = this.systemType;
    }
    confirmEntry(body) {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ds.forgotPassword$(body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.isFormSubmitted = false;
                this.changesSuccess = true;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigateByUrl('/');
        }, 30000);
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get isFormValid() {
        return this.entryForm.valid;
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
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_messages_service1__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService1"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], _error_messages_service1__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService1"]])], decls: 8, vars: 7, consts: [["id", "entry-create"], [4, "ngIf"], ["class", "description", 4, "ngIf"], [3, "view-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], ["method", "post", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "description"], [3, "view-type"], [3, "notified", "message", "finished"], [3, "error"], [1, "bold"], ["method", "post", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email_address", 1, "form-label", "bold"], ["type", "text", "id", "email_address", "name", "email_address", "placeholder", "david@example.com", "required", "required", "formControlName", "email_address", 1, "form-control"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_app_view_description_3_Template, 1, 1, "app-view-description", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_app_notification_screen_4_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_app_resource_unavailable_5_Template, 1, 1, "app-resource-unavailable", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_ng_container_6_Template, 5, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForgotPasswordComponent_form_7_Template, 8, 4, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changesSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.changesSuccess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_13__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-forgot-password',
                'templateUrl': './forgot-password.component.html',
                'styleUrls': ['./forgot-password.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], _error_messages_service1__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService1"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }, { type: _error_messages_service1__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService1"] }]; }, null); })();


/***/ }),

/***/ "yMLD":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _error_messages_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-messages.service1 */ "S5BJ");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _authentication_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication-form.service */ "EHhD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "MWCo");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
















function ResetPasswordComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ResetPasswordComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ResetPasswordComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function ResetPasswordComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r2.view);
} }
function ResetPasswordComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r3.error);
} }
function ResetPasswordComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Note : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your account have been successfully recovered and your password is changed. You will be redirected to the homepage in a short while and will be allowed to sign in again and use the system");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r16.systemType, " should be provided and cannot be empty ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r17.systemType, " cannot be less than 7 characters in length ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r18.systemType, " cannot be greater than 35 characters in length ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r19.systemType, " is too simple and will not be allowed in this system. Please input another type of new_password ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r20.systemType, " should not be equal to initial password ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_li_6_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.required) || (ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.required) || (ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.simplePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.new_password.errors == null ? null : ctx_r15.new_password.errors.currentAndNew);
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_div_1_Template, 7, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.new_password.invalid && (ctx_r14.new_password.touched || ctx_r14.new_password.dirty));
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Password * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.new_password);
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r23.systemType, " should be provided and cannot be empty ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r24.systemType, " cannot be less than 7 characters in length ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r25.systemType, " cannot be greater than 35 characters in length ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r26.systemType, " is too simple and will not be allowed in this system. Please input another type of confirm_password ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Confirmation Password of ", ctx_r27.systemType, " should be equal to New password of ", ctx_r27.systemType, " ");
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_li_6_Template, 2, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.required) || (ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.required) || (ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.simplePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.confirm_password.errors == null ? null : ctx_r22.confirm_password.errors.confirm_password);
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_div_1_Template, 7, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.confirm_password.invalid && (ctx_r21.confirm_password.touched || ctx_r21.confirm_password.dirty));
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirm Password * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.confirm_password);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ResetPasswordComponent_div_4_ng_container_2_form_1_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r12.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r12.isFormValid);
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_4_ng_container_2_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_div_4_ng_container_2_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.$resetPassword(ctx_r28.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_ng_container_2_form_1_div_1_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_4_ng_container_2_form_1_div_2_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_div_4_ng_container_2_form_1_button_3_Template, 2, 5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_ng_container_2_form_1_p_4_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.new_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.confirm_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isFormSubmitted);
} }
function ResetPasswordComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_ng_container_2_form_1_Template, 5, 5, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.entryForm);
} }
function ResetPasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_4_ng_container_1_Template, 5, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changesSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.changesSuccess);
} }
class ResetPasswordComponent {
    constructor(afs, router, ds, auth, ns, route, ems) {
        this.afs = afs;
        this.router = router;
        this.ds = ds;
        this.auth = auth;
        this.ns = ns;
        this.route = route;
        this.ems = ems;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.resetPassword.systemType;
        this.viewWord = data.resetPassword.viewWord;
        this.systemGuideline = data.resetPassword.systemGuideline;
        this.title = data.resetPassword.title;
        this.view = data.resetPassword.view;
        this.link = data.resetPassword.link;
        this.$link = data.resetPassword.$link;
        this.noEdit = data.resetPassword.noEdit;
        this.ds.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('token');
            this.passwordToken = $e;
            return this.ds.resetPassword($e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.entryForm = this.afs.resetPassword();
            }
        });
    }
    $resetPassword(body) {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ds.resetPassword$(this.passwordToken, body)
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
                this.changesSuccess = true;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);
                this.auth.logout();
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigateByUrl('/');
        }, 15000);
    }
    get new_password() {
        return this.entryForm.get('new_password');
    }
    get confirm_password() {
        return this.entryForm.get('confirm_password');
    }
    get isFormValid() {
        return this.entryForm.valid;
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
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_form_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_messages_service1__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService1"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _error_messages_service1__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService1"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "entry-update", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "view-type"], [3, "error"], ["id", "entry-update"], [1, "bold"], ["method", "post", "autocomplete", "off", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["method", "post", "autocomplete", "off", 3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [1, "form-group"], ["for", "new-password", 1, "form-label", "bold"], ["type", "password", "id", "new-password", "name", "new_password", "required", "required", "autocomplete", "new-new_password", "formControlName", "new_password", 1, "form-control"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], ["for", "confirm-password", 1, "form-label", "bold"], ["type", "password", "id", "confirm-password", "name", "confirm_password", "required", "required", "autocomplete", "new-confirm_password", "formControlName", "confirm_password", 1, "form-control"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResetPasswordComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_app_view_description_2_Template, 1, 1, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResetPasswordComponent_div_4_Template, 3, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordToken);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_9__["NotificationScreenComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-reset-password',
                'templateUrl': './reset-password.component.html',
                'styleUrls': ['./reset-password.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _error_messages_service1__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService1"]]
            }]
    }], function () { return [{ type: _authentication_form_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _error_messages_service1__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService1"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=authentication-authentication-module.js.map