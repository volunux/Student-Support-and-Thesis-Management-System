exports.ids = ["authentication-user-sign-up-user-sign-up-module~commons-user-user-module"];
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

/***/ "37EL":
/*!******************************************************************!*\
  !*** ./src/app/shared/user-account/user-account-form.service.ts ***!
  \******************************************************************/
/*! exports provided: UserAccountFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountFormService", function() { return UserAccountFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _interfaces_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/general */ "rE5M");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _services_form_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/form-validators.service */ "inDW");
/* harmony import */ var _services_password_validators_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/password-validators.service */ "1NK+");
/* harmony import */ var _services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/dynamic-control-validator */ "tTBu");
/* harmony import */ var _services_verify_username_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/verify-username.service */ "KDoO");
/* harmony import */ var _services_verify_email_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/verify-email.service */ "ikjD");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");














class UserAccountFormService {
    constructor(auth, fb, http, apiConfig) {
        this.auth = auth;
        this.fb = fb;
        this.http = http;
        this.apiConfig = apiConfig;
        this.permanentData = {};
        this.foreignValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)];
        this.permanentProps = {
            'faculty': this.foreignValidator,
            'department': this.foreignValidator,
            'level': this.foreignValidator,
            'unit': this.foreignValidator,
            'country': this.foreignValidator,
            'role': this.foreignValidator,
            'status': this.foreignValidator
        };
        this.entryValidators = {
            'first$last$Name': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)],
            'jamb$matric$identity': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)],
            'password': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35), Object(_services_password_validators_service__WEBPACK_IMPORTED_MODULE_6__["simplePasswordValidator"])()],
        };
        this.propAsyncValidator = {
            'email_address': [Object(_services_verify_email_service__WEBPACK_IMPORTED_MODULE_9__["emailAddressVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)],
            'username': [Object(_services_verify_username_service__WEBPACK_IMPORTED_MODULE_8__["usernameVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)]
        };
        this.entryForm = this.createForm();
    }
    getPermanentProp(prop) {
        return this.permanentProps[prop];
    }
    createForm() {
        return this.fb.group({
            'first_name': ['', { 'validators': this.entryValidators.first$last$Name }],
            'last_name': ['', { 'validators': this.entryValidators.first$last$Name }],
            'username': ['', { 'validators': [...this.entryValidators.first$last$Name, Object(_services_form_validators_service__WEBPACK_IMPORTED_MODULE_5__["forbiddenNamesValidator"])(_interfaces_general__WEBPACK_IMPORTED_MODULE_3__["forbiddenNames"])],
                    'asyncValidators': [Object(_services_verify_username_service__WEBPACK_IMPORTED_MODULE_8__["usernameVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)], 'updateOn': 'blur' }],
            'email_address': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), Object(_services_form_validators_service__WEBPACK_IMPORTED_MODULE_5__["emailAddressValidator"])(_interfaces_general__WEBPACK_IMPORTED_MODULE_3__["emailAddress"])],
                    'asyncValidators': [Object(_services_verify_email_service__WEBPACK_IMPORTED_MODULE_9__["emailAddressVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)], 'updateOn': 'blur' }],
            'password': ['', { 'validators': this.entryValidators.password }],
            'confirm_password': ['', { 'validators': this.entryValidators.password }],
            'about': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)] }],
            'faculty': ['', { 'validators': [...this.getPermanentProp('faculty')] }],
            'department': ['', { 'validators': [...this.getPermanentProp('department')] }],
            'level': ['', { 'validators': [...this.getPermanentProp('level')] }],
            'unit': ['', { 'validators': [...this.getPermanentProp('unit')] }],
            'country': ['', { 'validators': [...this.getPermanentProp('country')] }],
            'role': ['', { 'validators': [...this.getPermanentProp('role')] }],
            'status': ['', { 'validators': [...this.getPermanentProp('status')] }],
            'matriculation_number': ['', { 'validators': this.entryValidators.jamb$matric$identity }],
            'jamb_registration_number': ['', { 'validators': this.entryValidators.jamb$matric$identity }],
            'identity_number': ['', { 'validators': this.entryValidators.jamb$matric$identity }],
        }, { 'validator': [Object(_services_password_validators_service__WEBPACK_IMPORTED_MODULE_6__["confirmPasswordValidator"])(), Object(_services_form_validators_service__WEBPACK_IMPORTED_MODULE_5__["firstLastNames"])()] });
    }
    get first_name() {
        return this.entryForm.get('first_name');
    }
    get last_name() {
        return this.entryForm.get('last_name');
    }
    get username() {
        return this.entryForm.get('username');
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get password() {
        return this.entryForm.get('password');
    }
    get confirm_password() {
        return this.entryForm.get('confirm_password');
    }
    get about() {
        return this.entryForm.get('about');
    }
    get department() {
        return this.entryForm.get('department');
    }
    get faculty() {
        return this.entryForm.get('faculty');
    }
    get level() {
        return this.entryForm.get('level');
    }
    get unit() {
        return this.entryForm.get('unit');
    }
    get country() {
        return this.entryForm.get('country');
    }
    get matriculation_number() {
        return this.entryForm.get('matriculation_number');
    }
    get jamb_registration_number() {
        return this.entryForm.get('jamb_registration_number');
    }
    get identity_number() {
        return this.entryForm.get('identity_number');
    }
    get role() {
        return this.entryForm.get('role');
    }
    get status() {
        return this.entryForm.get('status');
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
    createPermanent(data) {
        for (let $prop in data) {
            let propVal = $prop.toLowerCase();
            this.permanentData[propVal] = data[$prop];
            this.entryForm.get(propVal) ? this.entryForm.get(propVal).setValidators([...this.permanentProps[propVal], Object(_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_7__["dynamicDataValidator"])(this.getMyData(propVal), $prop)]) : null;
            this.entryForm.get(propVal) ? this.entryForm.get(propVal).updateValueAndValidity() : null;
        }
        this.entryForm.updateValueAndValidity();
    }
    removeControls(controls) {
        controls.forEach((control) => {
            let ctrl = this.entryForm.get(control);
            return ctrl ? this.entryForm.removeControl(control) : null;
        });
    }
    removeAsyncValidators(controls) {
        controls.forEach((control) => {
            if (this.entryForm.get(control)) {
                this.entryForm.get(control).clearAsyncValidators();
                this.entryForm.get(control).updateValueAndValidity();
            }
        });
        this.entryForm.updateValueAndValidity();
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
    setAsyncNullError(control, formCtrl) {
        formCtrl.setErrors({ [control + 'Service']: null }, { 'emitEvent': true });
        formCtrl.updateValueAndValidity({ 'onlySelf': true, 'emitEvent': true });
    }
}
UserAccountFormService.ɵfac = function UserAccountFormService_Factory(t) { return new (t || UserAccountFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Api_Token"])); };
UserAccountFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAccountFormService, factory: UserAccountFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_4__["Api_Token"]]
            }] }]; }, null); })();


/***/ }),

/***/ "5k3e":
/*!************************************************************!*\
  !*** ./src/app/shared/user-account/user-account.module.ts ***!
  \************************************************************/
/*! exports provided: UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/general-directives/general-directives.module */ "UZWM");
/* harmony import */ var _user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-account-validator/user-account-validator.component */ "vpDI");
/* harmony import */ var _user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-account-form-inputs/user-account-form-inputs.component */ "U7hS");
/* harmony import */ var _user_account_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-account-form.service */ "37EL");








class UserAccountModule {
}
UserAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserAccountModule });
UserAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserAccountModule_Factory(t) { return new (t || UserAccountModule)(); }, providers: [
        _user_account_form_service__WEBPACK_IMPORTED_MODULE_6__["UserAccountFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_3__["GeneralDirectivesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserAccountModule, { declarations: [_user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountValidatorComponent"],
        _user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_5__["UserAccountFormInputsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_3__["GeneralDirectivesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountValidatorComponent"],
        _user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_5__["UserAccountFormInputsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountValidatorComponent"],
                    _user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_5__["UserAccountFormInputsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_3__["GeneralDirectivesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [
                    _user_account_form_service__WEBPACK_IMPORTED_MODULE_6__["UserAccountFormService"]
                ],
                exports: [
                    _user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountValidatorComponent"],
                    _user_account_form_inputs_user_account_form_inputs_component__WEBPACK_IMPORTED_MODULE_5__["UserAccountFormInputsComponent"]
                ]
            }]
    }], null, null); })();


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

/***/ "KDoO":
/*!************************************************************!*\
  !*** ./src/app/shared/services/verify-username.service.ts ***!
  \************************************************************/
/*! exports provided: usernameVerification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameVerification", function() { return usernameVerification; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");


function usernameVerification(authService, http, httpHeaders, apiConfig) {
    return (control) => {
        if (!control.dirty)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        let entry = control.value;
        let link = `${apiConfig.host}/confirm/username/${entry}`;
        let $result = { 'UsernameService': { 'value': control.value } };
        let lastUsername = null;
        return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((username) => { return username != lastUsername; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((username) => {
            lastUsername = username;
            return http.get(link);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((username) => { return username.isAvailable ? null : $result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])($result); }));
    };
}


/***/ }),

/***/ "U7hS":
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/user-account/user-account-form-inputs/user-account-form-inputs.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: UserAccountFormInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountFormInputsComponent", function() { return UserAccountFormInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _directives_general_directives_capitalize_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/general-directives/capitalize.directive */ "ws4g");
/* harmony import */ var _user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-account-validator/user-account-validator.component */ "vpDI");
/* harmony import */ var _directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/general-directives/lowercase.directive */ "AWkT");







function UserAccountFormInputsComponent_ng_container_0_ng_container_2_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 6);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r18.systemType)("first-name", ctx_r18.first_name);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " First Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_2_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r1.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.first_name);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_3_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 10);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r19.systemType)("last-name", ctx_r19.last_name);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Last Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_3_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r2.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.last_name);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_4_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 14);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r20.systemType)("user-name", ctx_r20.username);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Username * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_4_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r3.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.username);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_5_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 18);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r21.systemType)("email-address", ctx_r21.email_address);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email Address * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_5_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r4.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.email_address);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_6_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 22);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r22.systemType)("password", ctx_r22.password);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_6_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r5.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.password);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_7_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 26);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r23.systemType)("confirm-password", ctx_r23.confirm_password);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Confirmation Password * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_7_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r6.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirm_password);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_8_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 30);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r24.systemType)("about", ctx_r24.about);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_8_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r7.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.about);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_9_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const faculty_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", faculty_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", faculty_r27.name, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_9_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 36);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r26.systemType)("faculty", ctx_r26.faculty);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_9_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_9_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r8.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.generalOthers == null ? null : ctx_r8.generalOthers.faculty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.faculty);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_10_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r30._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r30.name, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_10_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 40);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r29.systemType)("department", ctx_r29.department);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Department * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_10_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_10_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r9.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.generalOthers == null ? null : ctx_r9.generalOthers.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.department);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_11_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r33._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r33.name, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_11_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 44);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r32.systemType)("level", ctx_r32.level);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Level * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_11_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_11_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r10.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.generalOthers == null ? null : ctx_r10.generalOthers.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.level);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_12_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r36._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r36.name, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_12_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 48);
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r35.systemType)("country", ctx_r35.country);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Country * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_12_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_12_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r11.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.generalOthers == null ? null : ctx_r11.generalOthers.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.country);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_13_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r39._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r39.name, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_13_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 52);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r38.systemType)("unit", ctx_r38.unit);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Unit * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_13_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_13_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r12.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.generalOthers == null ? null : ctx_r12.generalOthers.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.unit);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_14_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r42.word, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_14_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 56);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r41.systemType)("role", ctx_r41.role);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Role * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_14_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_14_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r13.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.generalOthers == null ? null : ctx_r13.generalOthers.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.role);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_15_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r45._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r45.word, " ");
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_15_app_user_account_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 60);
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r44.systemType)("status", ctx_r44.status);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_15_option_6_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_15_app_user_account_validator_7_Template, 1, 2, "app-user-account-validator", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r14.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.generalOthers == null ? null : ctx_r14.generalOthers.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.status);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_16_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 64);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r46.systemType)("matriculation-number", ctx_r46.matriculation_number);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Matriculation Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_16_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r15.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.matriculation_number);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_17_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 68);
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r47.systemType)("jamb-registration-number", ctx_r47.jamb_registration_number);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Jamb Registration Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_17_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r16.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.jamb_registration_number);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_18_app_user_account_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-account-validator", 72);
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r48.systemType)("identity-number", ctx_r48.identity_number);
} }
function UserAccountFormInputsComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Identity Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_18_app_user_account_validator_5_Template, 1, 2, "app-user-account-validator", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r17.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.identity_number);
} }
function UserAccountFormInputsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountFormInputsComponent_ng_container_0_ng_container_2_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountFormInputsComponent_ng_container_0_ng_container_3_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountFormInputsComponent_ng_container_0_ng_container_4_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountFormInputsComponent_ng_container_0_ng_container_5_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountFormInputsComponent_ng_container_0_ng_container_6_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountFormInputsComponent_ng_container_0_ng_container_7_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserAccountFormInputsComponent_ng_container_0_ng_container_8_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserAccountFormInputsComponent_ng_container_0_ng_container_9_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserAccountFormInputsComponent_ng_container_0_ng_container_10_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserAccountFormInputsComponent_ng_container_0_ng_container_11_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserAccountFormInputsComponent_ng_container_0_ng_container_12_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserAccountFormInputsComponent_ng_container_0_ng_container_13_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserAccountFormInputsComponent_ng_container_0_ng_container_14_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserAccountFormInputsComponent_ng_container_0_ng_container_15_Template, 8, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserAccountFormInputsComponent_ng_container_0_ng_container_16_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserAccountFormInputsComponent_ng_container_0_ng_container_17_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserAccountFormInputsComponent_ng_container_0_ng_container_18_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirm_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.faculty && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.faculty) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.faculty == null ? null : ctx_r0.generalOthers.faculty.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.department && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.department) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.department == null ? null : ctx_r0.generalOthers.department.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.level) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.level == null ? null : ctx_r0.generalOthers.level.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.country && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.country) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.country == null ? null : ctx_r0.generalOthers.country.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.unit && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.unit) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.unit == null ? null : ctx_r0.generalOthers.unit.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.role) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.role == null ? null : ctx_r0.generalOthers.role.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status && ctx_r0.generalOthers && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.status) && (ctx_r0.generalOthers == null ? null : ctx_r0.generalOthers.status == null ? null : ctx_r0.generalOthers.status.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.matriculation_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.jamb_registration_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity_number);
} }
class UserAccountFormInputsComponent {
    constructor() {
    }
    ngOnInit() {
        console.log(this.generalOthers);
        console.log(this.entryForm);
    }
    get first_name() {
        return this.entryForm.get('first_name');
    }
    get last_name() {
        return this.entryForm.get('last_name');
    }
    get username() {
        return this.entryForm.get('username');
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get password() {
        return this.entryForm.get('password');
    }
    get confirm_password() {
        return this.entryForm.get('confirm_password');
    }
    get about() {
        return this.entryForm.get('about');
    }
    get faculty() {
        return this.entryForm.get('faculty');
    }
    get department() {
        return this.entryForm.get('department');
    }
    get level() {
        return this.entryForm.get('level');
    }
    get country() {
        return this.entryForm.get('country');
    }
    get matriculation_number() {
        return this.entryForm.get('matriculation_number');
    }
    get jamb_registration_number() {
        return this.entryForm.get('jamb_registration_number');
    }
    get identity_number() {
        return this.entryForm.get('identity_number');
    }
    get unit() {
        return this.entryForm.get('unit');
    }
    get status() {
        return this.entryForm.get('status');
    }
    get role() {
        return this.entryForm.get('role');
    }
}
UserAccountFormInputsComponent.ɵfac = function UserAccountFormInputsComponent_Factory(t) { return new (t || UserAccountFormInputsComponent)(); };
UserAccountFormInputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAccountFormInputsComponent, selectors: [["app-user-account-form-inputs"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], entry: "entry", generalOthers: ["general-others", "generalOthers"], noEdit: ["no-edit", "noEdit"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "", 3, "formGroup"], [1, "form-group"], ["for", "first_name", 1, "form-label", "bold"], ["type", "text", "id", "first_name", "name", "first_name", "placeholder", "Yusuf", "required", "required", "autocomplete", "new-first_name", "formControlName", "first_name", "appCapitalize", "appCapitalize", 1, "form-control", 3, "readOnly"], [3, "system-type", "first-name", 4, "ngIf"], [3, "system-type", "first-name"], ["for", "last_name", 1, "form-label", "bold"], ["type", "text", "id", "last_name", "name", "last_name", "placeholder", "Musa", "required", "required", "autocomplete", "new-last_name", "formControlName", "last_name", "appCapitalize", "appCapitalize", 1, "form-control", 3, "readOnly"], [3, "system-type", "last-name", 4, "ngIf"], [3, "system-type", "last-name"], ["for", "username", 1, "form-label", "bold"], ["type", "text", "id", "username", "name", "username", "placeholder", "adigun", "required", "required", "autocomplete", "new-username", "formControlName", "username", "appLowercase", "appLowercase", 1, "form-control", 3, "readOnly"], [3, "system-type", "user-name", 4, "ngIf"], [3, "system-type", "user-name"], ["for", "email_address", 1, "form-label", "bold"], ["type", "text", "id", "email_address", "name", "email_address", "placeholder", "david@example.com", "required", "required", "autocomplete", "new-email_address", "formControlName", "email_address", "appLowercase", "appLowercase", 1, "form-control", 3, "readOnly"], [3, "system-type", "email-address", 4, "ngIf"], [3, "system-type", "email-address"], ["for", "password", 1, "form-label", "bold"], ["type", "password", "id", "password", "name", "password", "placeholder", "*******************", "required", "required", "autocomplete", "new-password", "formControlName", "password", 1, "form-control", 3, "readOnly"], [3, "system-type", "password", 4, "ngIf"], [3, "system-type", "password"], ["for", "confirm_password", 1, "form-label", "bold"], ["type", "password", "id", "confirm_password", "name", "confirm_password", "placeholder", "*******************", "required", "required", "autocomplete", "new-confirm_password", "formControlName", "confirm_password", 1, "form-control", 3, "readOnly"], [3, "system-type", "confirm-password", 4, "ngIf"], [3, "system-type", "confirm-password"], ["for", "about", 1, "form-label", "bold"], ["id", "about", "name", "about", "placeholder", "I am Me", "required", "required", "formControlName", "about", 1, "form-control", "form-textarea", 3, "readOnly"], [3, "system-type", "about", 4, "ngIf"], [3, "system-type", "about"], ["for", "faculty", 1, "form-label", "bold"], ["name", "faculty", "id", "faculty", "required", "required", "formControlName", "faculty", 1, "form-control", 3, "readOnly"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "faculty", 4, "ngIf"], [3, "system-type", "faculty"], ["for", "department", 1, "form-label", "bold"], ["name", "department", "id", "department", "required", "required", "formControlName", "department", 1, "form-control", 3, "readOnly"], [3, "system-type", "department", 4, "ngIf"], [3, "system-type", "department"], ["for", "level", 1, "form-label", "bold"], ["name", "level", "id", "level", "required", "required", "formControlName", "level", 1, "form-control", 3, "readOnly"], [3, "system-type", "level", 4, "ngIf"], [3, "system-type", "level"], ["for", "country", 1, "form-label", "bold"], ["name", "country", "id", "country", "required", "required", "formControlName", "country", 1, "form-control", 3, "readOnly"], [3, "system-type", "country", 4, "ngIf"], [3, "system-type", "country"], ["for", "unit", 1, "form-label", "bold"], ["name", "unit", "id", "unit", "required", "required", "formControlName", "unit", 1, "form-control", 3, "readOnly"], [3, "system-type", "unit", 4, "ngIf"], [3, "system-type", "unit"], ["for", "role", 1, "form-label", "bold"], ["name", "role", "id", "role", "required", "required", "formControlName", "role", 1, "form-control", 3, "readOnly"], [3, "system-type", "role", 4, "ngIf"], [3, "system-type", "role"], ["for", "status", 1, "form-label", "bold"], ["name", "status", "id", "status", "required", "required", "formControlName", "status", 1, "form-control", 3, "readOnly"], [3, "system-type", "status", 4, "ngIf"], [3, "system-type", "status"], ["for", "matriculation_number", 1, "form-label", "bold"], ["type", "text", "id", "matriculation_number", "name", "matriculation_number", "placeholder", "2015/1/57261CI", "autocomplete", "new-matriculation_number", "formControlName", "matriculation_number", 1, "form-control", 3, "readOnly"], [3, "system-type", "matriculation-number", 4, "ngIf"], [3, "system-type", "matriculation-number"], ["for", "jamb_registration_number", 1, "form-label", "bold"], ["type", "text", "id", "jamb_registration_number", "name", "jamb_registration_number", "placeholder", "56223645DH", "autocomplete", "new-jamb_registration_number", "formControlName", "jamb_registration_number", 1, "form-control", 3, "readOnly"], [3, "system-type", "jamb-registration-number", 4, "ngIf"], [3, "system-type", "jamb-registration-number"], ["for", "identity_number", 1, "form-label", "bold"], ["type", "text", "id", "identity_number", "name", "identity_number", "placeholder", "M1503186", "autocomplete", "new-identity_number", "formControlName", "identity_number", 1, "form-control", 3, "readOnly"], [3, "system-type", "identity-number", 4, "ngIf"], [3, "system-type", "identity-number"]], template: function UserAccountFormInputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserAccountFormInputsComponent_ng_container_0_Template, 19, 18, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _directives_general_directives_capitalize_directive__WEBPACK_IMPORTED_MODULE_3__["CapitalizeDirective"], _user_account_validator_user_account_validator_component__WEBPACK_IMPORTED_MODULE_4__["UserAccountValidatorComponent"], _directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_5__["LowercaseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFjY291bnQtZm9ybS1pbnB1dHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountFormInputsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-user-account-form-inputs',
                'templateUrl': './user-account-form-inputs.component.html',
                'styleUrls': ['./user-account-form-inputs.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], generalOthers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['general-others']
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
        }] }); })();


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

/***/ "ikjD":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/verify-email.service.ts ***!
  \*********************************************************/
/*! exports provided: emailAddressVerification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddressVerification", function() { return emailAddressVerification; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");


function emailAddressVerification(authenticationService, http, httpHeaders, apiConfig) {
    return (control) => {
        if (!control.dirty)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        let entry = control.value;
        let link = `${apiConfig.host}/confirm/emailaddress/${entry}`;
        let $result = { 'EmailAddressService': { 'value': control.value } };
        let lastEmailAddress = null;
        return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((emailAddress) => { return emailAddress != lastEmailAddress; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((emailAddress) => {
            lastEmailAddress = emailAddress;
            return http.get(link);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((emailAddress) => { return emailAddress.isAvailable ? null : $result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])($result); }));
    };
}


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

/***/ "tTBu":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/dynamic-control-validator.ts ***!
  \**************************************************************/
/*! exports provided: dynamicDataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicDataValidator", function() { return dynamicDataValidator; });
function dynamicDataValidator(entries, name) {
    return (control) => {
        let entry = control.value;
        let data = entries.map((item) => item._id);
        if (typeof data[0] == 'number') {
            entry = +entry;
        }
        return entry != '' && data.indexOf(entry) < 0 ? { [name]: { 'value': entry, 'name': name } } : null;
    };
}


/***/ }),

/***/ "vpDI":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/user-account/user-account-validator/user-account-validator.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UserAccountValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountValidatorComponent", function() { return UserAccountValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function UserAccountValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r18.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r19.systemType, " cannot be less than 2 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r20.systemType, " cannot be greater than 20 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.first_name.errors == null ? null : ctx_r17.first_name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.first_name.errors == null ? null : ctx_r17.first_name.errors.required) || (ctx_r17.first_name.errors == null ? null : ctx_r17.first_name.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.first_name.errors == null ? null : ctx_r17.first_name.errors.required) || (ctx_r17.first_name.errors == null ? null : ctx_r17.first_name.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.first_name.invalid && (ctx_r0.first_name.touched || ctx_r0.first_name.dirty));
} }
function UserAccountValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r22.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r23.systemType, " cannot be less than 2 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r24.systemType, " cannot be greater than 20 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.last_name.errors == null ? null : ctx_r21.last_name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.last_name.errors == null ? null : ctx_r21.last_name.errors.required) || (ctx_r21.last_name.errors == null ? null : ctx_r21.last_name.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.last_name.errors == null ? null : ctx_r21.last_name.errors.required) || (ctx_r21.last_name.errors == null ? null : ctx_r21.last_name.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_1_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.last_name.invalid && (ctx_r1.last_name.touched || ctx_r1.last_name.dirty));
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r26.systemType, " name of ", ctx_r26.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r27.systemType, " name of ", ctx_r27.systemType, " cannot be less than 3 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r28.systemType, " name of ", ctx_r28.systemType, " cannot be greater than 20 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " . ");
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_ng_template_3_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const name_r33 = ctx.$implicit;
    const lss_r34 = ctx.last;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r33, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !lss_r34)("ngIfElse", _r36);
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.username.errors.forbiddenNames.names);
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_2_div_1_li_5_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r29.systemType, " name of ", ctx_r29.systemType, " cannot be either of the followings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.username.errors == null ? null : ctx_r29.username.errors.forbiddenNames == null ? null : ctx_r29.username.errors.forbiddenNames.names);
} }
function UserAccountValidatorComponent_ng_container_2_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.systemType, " name cannot be used at the moment because it is already taken by another user. Please input another username ");
} }
function UserAccountValidatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_2_div_1_li_2_Template, 2, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_2_div_1_li_3_Template, 2, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_2_div_1_li_4_Template, 2, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountValidatorComponent_ng_container_2_div_1_li_5_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountValidatorComponent_ng_container_2_div_1_li_6_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.username.errors == null ? null : ctx_r25.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r25.username.errors == null ? null : ctx_r25.username.errors.required) || (ctx_r25.username.errors == null ? null : ctx_r25.username.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r25.username.errors == null ? null : ctx_r25.username.errors.required) || (ctx_r25.username.errors == null ? null : ctx_r25.username.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.username.errors == null ? null : ctx_r25.username.errors.forbiddenNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.username.errors == null ? null : ctx_r25.username.errors.UsernameService);
} }
function UserAccountValidatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_2_div_1_Template, 7, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.username.invalid && (ctx_r2.username.touched || ctx_r2.username.dirty));
} }
function UserAccountValidatorComponent_ng_container_3_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r39.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_3_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r40.systemType, " cannot be less than 7 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_3_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r41.systemType, " cannot be greater than 35 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_3_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r42.systemType, " is too simple and will not be allowed in this system. Please input another type of password ");
} }
function UserAccountValidatorComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_3_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_3_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_3_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountValidatorComponent_ng_container_3_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.password.errors == null ? null : ctx_r38.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r38.password.errors == null ? null : ctx_r38.password.errors.required) || (ctx_r38.password.errors == null ? null : ctx_r38.password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r38.password.errors == null ? null : ctx_r38.password.errors.required) || (ctx_r38.password.errors == null ? null : ctx_r38.password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.password.errors == null ? null : ctx_r38.password.errors.simplePassword);
} }
function UserAccountValidatorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_3_div_1_Template, 6, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.password.invalid && (ctx_r3.password.touched || ctx_r3.password.dirty));
} }
function UserAccountValidatorComponent_ng_container_4_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r44.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_4_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r45.systemType, " cannot be less than 7 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_4_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r46.systemType, " cannot be greater than 35 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_4_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r47.systemType, " is too simple and will not be allowed in this system. Please input another type of confirm_password ");
} }
function UserAccountValidatorComponent_ng_container_4_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r48.systemType, " should be equal to initial password ");
} }
function UserAccountValidatorComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_4_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_4_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_4_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountValidatorComponent_ng_container_4_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountValidatorComponent_ng_container_4_div_1_li_6_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.confirm_password.errors == null ? null : ctx_r43.confirm_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.confirm_password.errors == null ? null : ctx_r43.confirm_password.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.confirm_password.errors == null ? null : ctx_r43.confirm_password.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.confirm_password.errors == null ? null : ctx_r43.confirm_password.errors.simplePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.confirm_password.errors == null ? null : ctx_r43.confirm_password.errors.confirm_password);
} }
function UserAccountValidatorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_4_div_1_Template, 7, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.confirm_password.invalid && (ctx_r4.confirm_password.touched || ctx_r4.confirm_password.dirty));
} }
function UserAccountValidatorComponent_ng_container_5_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" About ", ctx_r50.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_5_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" About ", ctx_r51.systemType, " cannot be less than 9 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_5_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" About ", ctx_r52.systemType, " cannot be greater than 300 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_5_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_5_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_5_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.about.errors == null ? null : ctx_r49.about.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r49.about.errors == null ? null : ctx_r49.about.errors.required) || (ctx_r49.about.errors == null ? null : ctx_r49.about.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r49.about.errors == null ? null : ctx_r49.about.errors.required) || (ctx_r49.about.errors == null ? null : ctx_r49.about.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_5_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.about.invalid && (ctx_r5.about.touched || ctx_r5.about.dirty));
} }
function UserAccountValidatorComponent_ng_container_6_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r54.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_6_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r55.systemType, " cannot be less than 7 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_6_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r56.systemType, " cannot be greater than 50 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_6_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address must be valid and should conform to standards for example david@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserAccountValidatorComponent_ng_container_6_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address cannot be used at the moment because it is already taken by another user. Please input another email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserAccountValidatorComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_6_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_6_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_6_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountValidatorComponent_ng_container_6_div_1_li_5_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountValidatorComponent_ng_container_6_div_1_li_6_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.required) || (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.required) || (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.required) || (ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.email_address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.email_address.errors == null ? null : ctx_r53.email_address.errors.EmailAddressService);
} }
function UserAccountValidatorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_6_div_1_Template, 7, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.email_address.invalid && (ctx_r6.email_address.touched || ctx_r6.email_address.dirty));
} }
function UserAccountValidatorComponent_ng_container_7_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Department of ", ctx_r60.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_7_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Department of ", ctx_r61.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_7_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Department of ", ctx_r62.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_7_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_7_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_7_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.department.errors == null ? null : ctx_r59.department.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.department.errors == null ? null : ctx_r59.department.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.department.errors == null ? null : ctx_r59.department.errors.Department);
} }
function UserAccountValidatorComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_7_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.department.invalid && (ctx_r7.department.touched || ctx_r7.department.dirty));
} }
function UserAccountValidatorComponent_ng_container_8_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r64.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_8_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r65.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_8_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r66.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_8_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_8_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_8_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.faculty.errors == null ? null : ctx_r63.faculty.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.faculty.errors == null ? null : ctx_r63.faculty.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.faculty.errors == null ? null : ctx_r63.faculty.errors.Faculty);
} }
function UserAccountValidatorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_8_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.faculty.invalid && (ctx_r8.faculty.touched || ctx_r8.faculty.dirty));
} }
function UserAccountValidatorComponent_ng_container_9_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r68.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_9_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r69.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_9_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r70.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_9_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_9_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_9_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.country.errors == null ? null : ctx_r67.country.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.country.errors == null ? null : ctx_r67.country.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.country.errors == null ? null : ctx_r67.country.errors.Country);
} }
function UserAccountValidatorComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_9_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.country.invalid && (ctx_r9.country.touched || ctx_r9.country.dirty));
} }
function UserAccountValidatorComponent_ng_container_10_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r72.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_10_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r73.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_10_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r74.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_10_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_10_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_10_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.level.errors == null ? null : ctx_r71.level.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.level.errors == null ? null : ctx_r71.level.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.level.errors == null ? null : ctx_r71.level.errors.Level);
} }
function UserAccountValidatorComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_10_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.level.invalid && (ctx_r10.level.touched || ctx_r10.level.dirty));
} }
function UserAccountValidatorComponent_ng_container_11_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r76.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_11_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r77.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_11_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit of ", ctx_r78.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_11_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_11_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_11_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.unit.errors == null ? null : ctx_r75.unit.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.unit.errors == null ? null : ctx_r75.unit.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.unit.errors == null ? null : ctx_r75.unit.errors.Unit);
} }
function UserAccountValidatorComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_11_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.unit.invalid && (ctx_r11.unit.touched || ctx_r11.unit.dirty));
} }
function UserAccountValidatorComponent_ng_container_12_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Matriculation Number of ", ctx_r80.systemType, " cannot be less than 2 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_12_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Matriculation Number of ", ctx_r81.systemType, " cannot be greater than 30 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_12_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_12_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r79.matriculation_number.errors == null ? null : ctx_r79.matriculation_number.errors.required) || (ctx_r79.matriculation_number.errors == null ? null : ctx_r79.matriculation_number.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r79.matriculation_number.errors == null ? null : ctx_r79.matriculation_number.errors.required) || (ctx_r79.matriculation_number.errors == null ? null : ctx_r79.matriculation_number.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_12_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.matriculation_number.invalid && (ctx_r12.matriculation_number.touched || ctx_r12.matriculation_number.dirty));
} }
function UserAccountValidatorComponent_ng_container_13_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Jamb Registration Number of ", ctx_r83.systemType, " cannot be less than 2 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_13_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Jamb Registration Number of ", ctx_r84.systemType, " cannot be greater than 30 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_13_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_13_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r82.jamb_registration_number.errors == null ? null : ctx_r82.jamb_registration_number.errors.required) || (ctx_r82.jamb_registration_number.errors == null ? null : ctx_r82.jamb_registration_number.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r82.jamb_registration_number.errors == null ? null : ctx_r82.jamb_registration_number.errors.required) || (ctx_r82.jamb_registration_number.errors == null ? null : ctx_r82.jamb_registration_number.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_13_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.jamb_registration_number.invalid && (ctx_r13.jamb_registration_number.touched || ctx_r13.jamb_registration_number.dirty));
} }
function UserAccountValidatorComponent_ng_container_14_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Identity Number of ", ctx_r86.systemType, " cannot be less than 2 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_14_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Identity Number of ", ctx_r87.systemType, " cannot be greater than 30 characters in length ");
} }
function UserAccountValidatorComponent_ng_container_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_14_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_14_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r85.identity_number.errors == null ? null : ctx_r85.identity_number.errors.required) || (ctx_r85.identity_number.errors == null ? null : ctx_r85.identity_number.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r85.identity_number.errors == null ? null : ctx_r85.identity_number.errors.required) || (ctx_r85.identity_number.errors == null ? null : ctx_r85.identity_number.errors.maxlength));
} }
function UserAccountValidatorComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_14_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.identity_number.invalid && (ctx_r14.identity_number.touched || ctx_r14.identity_number.dirty));
} }
function UserAccountValidatorComponent_ng_container_15_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role of ", ctx_r89.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_15_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role of ", ctx_r90.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_15_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role of ", ctx_r91.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_15_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_15_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_15_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.role.errors == null ? null : ctx_r88.role.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.role.errors == null ? null : ctx_r88.role.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.role.errors == null ? null : ctx_r88.role.errors.Role);
} }
function UserAccountValidatorComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_15_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.role.invalid && (ctx_r15.role.touched || ctx_r15.role.dirty));
} }
function UserAccountValidatorComponent_ng_container_16_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r93.systemType, " should be provided and cannot be empty ");
} }
function UserAccountValidatorComponent_ng_container_16_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r94.systemType, " cannot be greater than specified length ");
} }
function UserAccountValidatorComponent_ng_container_16_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r95.systemType, " should be available from existing record before it can be considered valid ");
} }
function UserAccountValidatorComponent_ng_container_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_16_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_16_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_16_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.status.errors == null ? null : ctx_r92.status.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.status.errors == null ? null : ctx_r92.status.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.status.errors == null ? null : ctx_r92.status.errors.Status);
} }
function UserAccountValidatorComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_16_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.status.invalid && (ctx_r16.status.touched || ctx_r16.status.dirty));
} }
class UserAccountValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UserAccountValidatorComponent.ɵfac = function UserAccountValidatorComponent_Factory(t) { return new (t || UserAccountValidatorComponent)(); };
UserAccountValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAccountValidatorComponent, selectors: [["app-user-account-validator"]], inputs: { systemType: ["system-type", "systemType"], first_name: ["first-name", "first_name"], last_name: ["last-name", "last_name"], username: ["user-name", "username"], email_address: ["email-address", "email_address"], about: "about", faculty: "faculty", department: "department", level: "level", unit: "unit", country: "country", role: "role", status: "status", matriculation_number: ["matriculation-number", "matriculation_number"], identity_number: ["identity-number", "identity_number"], jamb_registration_number: ["jamb-registration-number", "jamb_registration_number"], password: "password", confirm_password: ["confirm-password", "confirm_password"], noEdit: ["no-edit", "noEdit"] }, decls: 17, vars: 17, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["iAmLast", ""]], template: function UserAccountValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserAccountValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAccountValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserAccountValidatorComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserAccountValidatorComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAccountValidatorComponent_ng_container_4_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserAccountValidatorComponent_ng_container_5_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserAccountValidatorComponent_ng_container_6_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserAccountValidatorComponent_ng_container_7_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserAccountValidatorComponent_ng_container_8_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserAccountValidatorComponent_ng_container_9_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserAccountValidatorComponent_ng_container_10_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserAccountValidatorComponent_ng_container_11_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserAccountValidatorComponent_ng_container_12_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserAccountValidatorComponent_ng_container_13_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserAccountValidatorComponent_ng_container_14_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserAccountValidatorComponent_ng_container_15_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserAccountValidatorComponent_ng_container_16_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirm_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.department);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faculty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matriculation_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jamb_registration_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFjY291bnQtdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAccountValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-user-account-validator',
                'templateUrl': './user-account-validator.component.html',
                'styleUrls': ['./user-account-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], first_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['first-name']
        }], last_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['last-name']
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['user-name']
        }], email_address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['email-address']
        }], about: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], faculty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], department: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matriculation_number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matriculation-number']
        }], identity_number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['identity-number']
        }], jamb_registration_number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['jamb-registration-number']
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], confirm_password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['confirm-password']
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
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
//# sourceMappingURL=authentication-user-sign-up-user-sign-up-module~commons-user-user-module.js.map