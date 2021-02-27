exports.ids = ["account-profile-profile-module"];
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

/***/ "5Lct":
/*!***************************************************!*\
  !*** ./src/app/account/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/general-services.module */ "kPid");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/general.module */ "hxwH");
/* harmony import */ var _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/general-directives/general-directives.module */ "UZWM");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-routing.module */ "iFss");
/* harmony import */ var _profile_homepage_profile_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-homepage/profile-homepage.component */ "BSxn");
/* harmony import */ var _profile_dashboard_profile_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-dashboard/profile-dashboard.component */ "XnJb");
/* harmony import */ var _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-detail/profile-detail.component */ "sJHZ");
/* harmony import */ var _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-update/profile-update.component */ "gYy/");
/* harmony import */ var _profile_deactivate_profile_deactivate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-deactivate/profile-deactivate.component */ "5z+F");
/* harmony import */ var _profile_reactivate_profile_reactivate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-reactivate/profile-reactivate.component */ "X65L");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./change-password/change-password.component */ "sVKf");
/* harmony import */ var _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile-validator/profile-validator.component */ "rpfD");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile.service */ "g351");
/* harmony import */ var _profile_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile-form.service */ "mPla");
/* harmony import */ var _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile-input-fields/profile-input-fields.component */ "YzJX");
/* harmony import */ var _profile_entry_type_dashboard_profile_entry_type_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile-entry-type-dashboard/profile-entry-type-dashboard.component */ "rp7F");




















class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, providers: [
        _profile_form_service__WEBPACK_IMPORTED_MODULE_16__["ProfileFormService"],
        _profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
            _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_5__["GeneralDirectivesModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_3__["GeneralServicesModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_dashboard_profile_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ProfileDashboardComponent"],
        _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProfileDetailComponent"],
        _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_10__["ProfileUpdateComponent"],
        _profile_deactivate_profile_deactivate_component__WEBPACK_IMPORTED_MODULE_11__["ProfileDeactivateComponent"],
        _profile_reactivate_profile_reactivate_component__WEBPACK_IMPORTED_MODULE_12__["ProfileReactivateComponent"],
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
        _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_14__["ProfileValidatorComponent"],
        _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInputFieldsComponent"],
        _profile_homepage_profile_homepage_component__WEBPACK_IMPORTED_MODULE_7__["ProfileHomepageComponent"],
        _profile_entry_type_dashboard_profile_entry_type_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["ProfileEntryTypeDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
        _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_5__["GeneralDirectivesModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_3__["GeneralServicesModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _profile_dashboard_profile_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ProfileDashboardComponent"],
                    _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProfileDetailComponent"],
                    _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_10__["ProfileUpdateComponent"],
                    _profile_deactivate_profile_deactivate_component__WEBPACK_IMPORTED_MODULE_11__["ProfileDeactivateComponent"],
                    _profile_reactivate_profile_reactivate_component__WEBPACK_IMPORTED_MODULE_12__["ProfileReactivateComponent"],
                    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"],
                    _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_14__["ProfileValidatorComponent"],
                    _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInputFieldsComponent"],
                    _profile_homepage_profile_homepage_component__WEBPACK_IMPORTED_MODULE_7__["ProfileHomepageComponent"],
                    _profile_entry_type_dashboard_profile_entry_type_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["ProfileEntryTypeDashboardComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
                    _shared_directives_general_directives_general_directives_module__WEBPACK_IMPORTED_MODULE_5__["GeneralDirectivesModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_3__["GeneralServicesModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"],
                ],
                providers: [
                    _profile_form_service__WEBPACK_IMPORTED_MODULE_16__["ProfileFormService"],
                    _profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5kR8":
/*!*************************************************!*\
  !*** ./src/app/shared/guards/is-admin.guard.ts ***!
  \*************************************************/
/*! exports provided: IsAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAdminGuard", function() { return IsAdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class IsAdminGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        return this.verifyMemberPrivilege();
    }
    verifyMemberPrivilege() {
        let role = this.aus.userMinorDetails.role;
        let allowedMembers = ['moderator', 'administrator', 'superAdministrator'];
        if (allowedMembers.indexOf(role) < 0) {
            this.router.navigate(['unauthorized']);
            return false;
        }
        else {
            return true;
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad() {
        return this.verifyMemberPrivilege();
    }
}
IsAdminGuard.ɵfac = function IsAdminGuard_Factory(t) { return new (t || IsAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsAdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsAdminGuard, factory: IsAdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsAdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "5z+F":
/*!************************************************************************************!*\
  !*** ./src/app/account/profile/profile-deactivate/profile-deactivate.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileDeactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDeactivateComponent", function() { return ProfileDeactivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _profile_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-form.service */ "mPla");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile.service */ "g351");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../profile-input-fields/profile-input-fields.component */ "YzJX");
















function ProfileDeactivateComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileDeactivateComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ProfileDeactivateComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function ProfileDeactivateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function ProfileDeactivateComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r3.view);
} }
function ProfileDeactivateComponent_div_4_app_profile_input_fields_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-input-fields", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r7.systemType)("entry", ctx_r7.entry)("entry-form", ctx_r7.entryForm);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ProfileDeactivateComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r8.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isFormValid);
} }
function ProfileDeactivateComponent_div_4_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileDeactivateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileDeactivateComponent_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deactivateEntry(ctx_r10.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileDeactivateComponent_div_4_app_profile_input_fields_2_Template, 1, 3, "app-profile-input-fields", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileDeactivateComponent_div_4_button_3_Template, 2, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileDeactivateComponent_div_4_p_4_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class ProfileDeactivateComponent {
    constructor(pfs, router, ps, ns, route, ems) {
        this.pfs = pfs;
        this.router = router;
        this.ps = ps;
        this.ns = ns;
        this.route = route;
        this.ems = ems;
        this.systemType = 'User';
        this.title = `${this.systemType} Account Deactivate`;
        this.isError = false;
        this.view = 'udp';
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.ps.deactivateProfile();
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.entryForm = this.pfs.statusProfile();
                this.entry = result;
                this.entryForm.patchValue(this.entry);
            }
        });
    }
    deactivateEntry() {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ps.deactivateProfile$(this.entry)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not deactivated.`);
            }
            else if (result != null && result.updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is deactivated.`);
                this.entryChanges({});
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['account', 'profile']);
        }, 5000);
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get identity_number() {
        return this.entryForm.get('identity_number');
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
ProfileDeactivateComponent.ɵfac = function ProfileDeactivateComponent_Factory(t) { return new (t || ProfileDeactivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
ProfileDeactivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDeactivateComponent, selectors: [["app-profile-deactivate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "entry-detail", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "error"], [3, "view-type"], ["id", "entry-detail"], ["method", "post", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [3, "system-type", "entry", "entry-form", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [3, "system-type", "entry", "entry-form"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ProfileDeactivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileDeactivateComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDeactivateComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileDeactivateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileDeactivateComponent_app_view_description_3_Template, 1, 1, "app-view-description", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileDeactivateComponent_div_4_Template, 5, 4, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_12__["ProfileInputFieldsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRlYWN0aXZhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDeactivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-deactivate',
                'templateUrl': './profile-deactivate.component.html',
                'styleUrls': ['./profile-deactivate.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


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

/***/ "BSxn":
/*!********************************************************************************!*\
  !*** ./src/app/account/profile/profile-homepage/profile-homepage.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomepageComponent", function() { return ProfileHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class ProfileHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
ProfileHomepageComponent.ɵfac = function ProfileHomepageComponent_Factory(t) { return new (t || ProfileHomepageComponent)(); };
ProfileHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileHomepageComponent, selectors: [["app-profile-homepage"]], decls: 3, vars: 1, consts: [["routerOutlet", "outlet"]], template: function ProfileHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimation", ctx.getAnimationData(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWhvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-homepage',
                'templateUrl': './profile-homepage.component.html',
                'styleUrls': ['./profile-homepage.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return []; }, null); })();


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

/***/ "KfBO":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/email-address-validators.service.ts ***!
  \*********************************************************************/
/*! exports provided: emailAddressValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddressValidator", function() { return emailAddressValidator; });
function emailAddressValidator(email_address) {
    return (control) => {
        const entry = email_address.test(control.value);
        return !entry ? { 'email_address': { 'value': control.value } } : null;
    };
}


/***/ }),

/***/ "Lf4m":
/*!********************************************!*\
  !*** ./src/app/account/profile/general.ts ***!
  \********************************************/
/*! exports provided: forbiddenNames, emailAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNames", function() { return forbiddenNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddress", function() { return emailAddress; });
const forbiddenNames = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;
const emailAddress = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


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

/***/ "X65L":
/*!************************************************************************************!*\
  !*** ./src/app/account/profile/profile-reactivate/profile-reactivate.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileReactivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileReactivateComponent", function() { return ProfileReactivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _profile_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-form.service */ "mPla");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile.service */ "g351");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../profile-input-fields/profile-input-fields.component */ "YzJX");
















function ProfileReactivateComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileReactivateComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ProfileReactivateComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function ProfileReactivateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function ProfileReactivateComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r3.view);
} }
function ProfileReactivateComponent_div_4_app_profile_input_fields_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-input-fields", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r7.systemType)("entry", ctx_r7.entry)("entry-form", ctx_r7.entryForm);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ProfileReactivateComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r8.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isFormValid);
} }
function ProfileReactivateComponent_div_4_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileReactivateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileReactivateComponent_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.reactivateEntry(ctx_r10.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileReactivateComponent_div_4_app_profile_input_fields_2_Template, 1, 3, "app-profile-input-fields", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileReactivateComponent_div_4_button_3_Template, 2, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileReactivateComponent_div_4_p_4_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class ProfileReactivateComponent {
    constructor(pfs, router, ps, ns, route, ems) {
        this.pfs = pfs;
        this.router = router;
        this.ps = ps;
        this.ns = ns;
        this.route = route;
        this.ems = ems;
        this.systemType = 'User';
        this.title = `${this.systemType} Account Reactivate`;
        this.isError = false;
        this.view = 'urp';
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.ps.reactivateProfile();
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.entryForm = this.pfs.statusProfile();
                this.entry = result;
                this.entryForm.patchValue(this.entry);
            }
        });
    }
    reactivateEntry() {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ps.reactivateProfile$(this.entry)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not reactivated.`);
            }
            else if (result != null && result.updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is reactivated.`);
                this.entryChanges({});
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['account', 'profile']);
        }, 5000);
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get identity_number() {
        return this.entryForm.get('identity_number');
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
ProfileReactivateComponent.ɵfac = function ProfileReactivateComponent_Factory(t) { return new (t || ProfileReactivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
ProfileReactivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileReactivateComponent, selectors: [["app-profile-reactivate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "entry-detail", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "error"], [3, "view-type"], ["id", "entry-detail"], ["method", "post", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [3, "system-type", "entry", "entry-form", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [3, "system-type", "entry", "entry-form"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ProfileReactivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileReactivateComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileReactivateComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileReactivateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileReactivateComponent_app_view_description_3_Template, 1, 1, "app-view-description", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileReactivateComponent_div_4_Template, 5, 4, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _profile_input_fields_profile_input_fields_component__WEBPACK_IMPORTED_MODULE_12__["ProfileInputFieldsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXJlYWN0aXZhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileReactivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-reactivate',
                'templateUrl': './profile-reactivate.component.html',
                'styleUrls': ['./profile-reactivate.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "XnJb":
/*!**********************************************************************************!*\
  !*** ./src/app/account/profile/profile-dashboard/profile-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDashboardComponent", function() { return ProfileDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");






function ProfileDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
const _c0 = function () { return ["entry-type"]; };
function ProfileDashboardComponent_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Manage Internals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["detail"]; };
const _c2 = function () { return ["update"]; };
const _c3 = function () { return ["deactivate"]; };
const _c4 = function () { return ["reactivate"]; };
const _c5 = function () { return ["", "change-password"]; };
const _c6 = function () { return ["update-photo"]; };
const _c7 = function () { return ["update-signature"]; };
function ProfileDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileDashboardComponent_div_2_li_2_Template, 3, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Update Display Photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Update Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.canManage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Deactivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Reactivate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c7));
} }
class ProfileDashboardComponent {
    constructor(aus) {
        this.aus = aus;
        this.systemType = 'Profile';
        this.title = 'Profile';
        this.view = 'upr';
    }
    ngOnInit() {
    }
    get canManage() {
        return ['moderator', 'administrator', 'superAdministrator'].indexOf(this.aus.userRole) > 0;
    }
}
ProfileDashboardComponent.ɵfac = function ProfileDashboardComponent_Factory(t) { return new (t || ProfileDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
ProfileDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDashboardComponent, selectors: [["app-profile-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "view-type"], ["id", "dashboard"], [1, "center", 3, "routerLink"]], template: function ProfileDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDashboardComponent_app_view_description_1_Template, 1, 1, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileDashboardComponent_div_2_Template, 24, 19, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__["ViewDescriptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-dashboard',
                'templateUrl': './profile-dashboard.component.html',
                'styleUrls': ['./profile-dashboard.component.css']
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "YzJX":
/*!****************************************************************************************!*\
  !*** ./src/app/account/profile/profile-input-fields/profile-input-fields.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfileInputFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInputFieldsComponent", function() { return ProfileInputFieldsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/general-directives/lowercase.directive */ "AWkT");
/* harmony import */ var _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-validator/profile-validator.component */ "rpfD");






function ProfileInputFieldsComponent_ng_container_0_div_2_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("email-address", ctx_r3.email_address);
} }
function ProfileInputFieldsComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email Address * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileInputFieldsComponent_ng_container_0_div_2_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email_address);
} }
function ProfileInputFieldsComponent_ng_container_0_div_3_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r4.systemType)("identity-number", ctx_r4.identity_number);
} }
function ProfileInputFieldsComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Identity Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileInputFieldsComponent_ng_container_0_div_3_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.identity_number);
} }
function ProfileInputFieldsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileInputFieldsComponent_ng_container_0_div_2_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileInputFieldsComponent_ng_container_0_div_3_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity_number);
} }
class ProfileInputFieldsComponent {
    constructor() {
    }
    ngOnInit() {
    }
    get email_address() {
        return this.entryForm.get('email_address');
    }
    get identity_number() {
        return this.entryForm.get('identity_number');
    }
}
ProfileInputFieldsComponent.ɵfac = function ProfileInputFieldsComponent_Factory(t) { return new (t || ProfileInputFieldsComponent)(); };
ProfileInputFieldsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileInputFieldsComponent, selectors: [["app-profile-input-fields"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "email_address", 1, "form-label", "bold"], ["type", "text", "id", "email_address", "name", "email_address", "placeholder", "david@example.com", "required", "required", "autocomplete", "new-email_address", "formControlName", "email_address", "readonly", "readonly", "appLowercase", "appLowercase", 1, "form-control"], [3, "system-type", "email-address", 4, "ngIf"], [3, "system-type", "email-address"], ["for", "identity_number", 1, "form-label", "bold"], ["type", "text", "id", "identity_number", "name", "identity_number", "placeholder", "M1503186", "autocomplete", "new-identity_number", "formControlName", "identity_number", "readonly", "readonly", 1, "form-control"], [3, "system-type", "identity-number", 4, "ngIf"], [3, "system-type", "identity-number"]], template: function ProfileInputFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileInputFieldsComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_directives_general_directives_lowercase_directive__WEBPACK_IMPORTED_MODULE_3__["LowercaseDirective"], _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_4__["ProfileValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWlucHV0LWZpZWxkcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileInputFieldsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-input-fields',
                'templateUrl': './profile-input-fields.component.html',
                'styleUrls': ['./profile-input-fields.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "alKh":
/*!***********************************************!*\
  !*** ./src/app/account/profile/user-other.ts ***!
  \***********************************************/
/*! exports provided: UserOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOther", function() { return UserOther; });
class UserOther {
    constructor(data) {
        this.faculties = data.Faculty ? data.Faculty : [];
        this.departments = data.Department ? data.Department : [];
        this.units = data.Unit ? data.Unit : [];
        this.levels = data.Level ? data.Level : [];
        this.countries = data.Country ? data.Country : [];
    }
}


/***/ }),

/***/ "g351":
/*!****************************************************!*\
  !*** ./src/app/account/profile/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/error-messages.service */ "EUGn");







class ProfileService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.sa = 'user';
        this.systemType = 'User';
    }
    entryExist() {
        let link = `${this.apiConfig.host}/${this.sa}/entry/change-password`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    profileDetail() {
        let link = `${this.apiConfig.host}/${this.sa}/entry/detail`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    profileUpdate() {
        let link = `${this.apiConfig.host}/${this.sa}/entry/update`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    profileUpdate$(idx, user) {
        let link = `${this.apiConfig.host}/${this.sa}/entry/update`;
        return this.http.put(link, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    changePassword(passcode) {
        let link = `${this.apiConfig.host}/${this.sa}/entry/change-password`;
        return this.http.put(link, passcode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    deactivateProfile() {
        let link = `${this.apiConfig.host}/${this.sa}/entry/deactivate`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    deactivateProfile$(user) {
        let link = `${this.apiConfig.host}/${this.sa}/entry/deactivate`;
        return this.http.put(link, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    reactivateProfile() {
        let link = `${this.apiConfig.host}/${this.sa}/entry/reactivate`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    reactivateProfile$(user) {
        let link = `${this.apiConfig.host}/${this.sa}/entry/reactivate`;
        return this.http.put(link, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    $updateDisplay(user) {
        let link = `${this.apiConfig.host}/${this.sa}/entry/change-signature-picture`;
        return this.http.put(link, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.systemType} Entry`, null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "gYy/":
/*!****************************************************************************!*\
  !*** ./src/app/account/profile/profile-update/profile-update.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _user_other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-other */ "alKh");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile.service */ "g351");
/* harmony import */ var _profile_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-form.service */ "mPla");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_directives_general_directives_capitalize_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/general-directives/capitalize.directive */ "ws4g");
/* harmony import */ var _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../profile-validator/profile-validator.component */ "rpfD");


















function ProfileUpdateComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileUpdateComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
function ProfileUpdateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function ProfileUpdateComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ProfileUpdateComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function ProfileUpdateComponent_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Form Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.formMessage, " ");
} }
function ProfileUpdateComponent_div_4_div_4_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 20);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r15.systemType)("first-name", ctx_r15.first_name);
} }
function ProfileUpdateComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " First Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileUpdateComponent_div_4_div_4_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.first_name);
} }
function ProfileUpdateComponent_div_4_div_5_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 24);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r16.systemType)("last-name", ctx_r16.last_name);
} }
function ProfileUpdateComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Last Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileUpdateComponent_div_4_div_5_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.last_name);
} }
function ProfileUpdateComponent_div_4_div_6_app_profile_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 28);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r17.systemType)("about", ctx_r17.about);
} }
function ProfileUpdateComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileUpdateComponent_div_4_div_6_app_profile_validator_5_Template, 1, 2, "app-profile-validator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.about);
} }
function ProfileUpdateComponent_div_4_ng_container_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r20.name, " ");
} }
function ProfileUpdateComponent_div_4_ng_container_7_app_profile_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 34);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r19.systemType)("level", ctx_r19.level);
} }
function ProfileUpdateComponent_div_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Level * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileUpdateComponent_div_4_ng_container_7_option_6_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileUpdateComponent_div_4_ng_container_7_app_profile_validator_7_Template, 1, 2, "app-profile-validator", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.entryOthers.levels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.level);
} }
function ProfileUpdateComponent_div_4_ng_container_8_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r23._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r23.name, " ");
} }
function ProfileUpdateComponent_div_4_ng_container_8_app_profile_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 38);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r22.systemType)("country", ctx_r22.country);
} }
function ProfileUpdateComponent_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Country * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileUpdateComponent_div_4_ng_container_8_option_6_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileUpdateComponent_div_4_ng_container_8_app_profile_validator_7_Template, 1, 2, "app-profile-validator", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.entryOthers.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.country);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ProfileUpdateComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r13.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r13.isFormValid);
} }
function ProfileUpdateComponent_div_4_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["../../../", "account", "profile", "detail"]; };
function ProfileUpdateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_div_4_p_1_Template, 4, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileUpdateComponent_div_4_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.updateEntry(ctx_r24.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileUpdateComponent_div_4_div_4_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileUpdateComponent_div_4_div_5_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileUpdateComponent_div_4_div_6_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileUpdateComponent_div_4_ng_container_7_Template, 8, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileUpdateComponent_div_4_ng_container_8_Template, 8, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileUpdateComponent_div_4_button_9_Template, 2, 5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileUpdateComponent_div_4_p_10_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Entry Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " User Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormModified);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entryOthers && (ctx_r4.entryOthers == null ? null : ctx_r4.entryOthers.levels) != null && (ctx_r4.entryOthers == null ? null : ctx_r4.entryOthers.levels == null ? null : ctx_r4.entryOthers.levels.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entryOthers && (ctx_r4.entryOthers == null ? null : ctx_r4.entryOthers.countries) != null && (ctx_r4.entryOthers == null ? null : ctx_r4.entryOthers.countries == null ? null : ctx_r4.entryOthers.countries.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
} }
class ProfileUpdateComponent {
    constructor(router, ps, ns, route, ems, pfs) {
        this.router = router;
        this.ps = ps;
        this.ns = ns;
        this.route = route;
        this.ems = ems;
        this.pfs = pfs;
        this.systemType = 'User';
        this.entryOthers = null;
        this.title = `${this.systemType} Update`;
        this.isFormModified = false;
        this.formMessage = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';
        this.isError = false;
        this.isFormProcessing = false;
        this.isFormSubmitted = false;
    }
    ngOnInit() {
        this.entryForm = this.pfs.profileUpdate();
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => { return this.ps.profileUpdate(); }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': 'User Entry' }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.entry = result.User;
                this.eidx = this.entry._id;
                this.entryOthers = new _user_other__WEBPACK_IMPORTED_MODULE_2__["UserOther"](result);
                this.pfs.createPermanent(result, this.entryForm);
                this.entryForm.patchValue(this.entry);
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
        for (let chrs in this.entry) {
            if ((this.entry[chrs] != body[chrs] && (body[chrs] !== null && body[chrs] !== undefined))) {
                this.isFormModified = true;
                break;
            }
        }
        if (this.isFormModified == true) {
            this.isFormSubmitted = true;
            this.ps.profileUpdate$(this.eidx, body)
                .subscribe((result) => {
                if (result == null) {
                    this.isFormSubmitted = false;
                    this.isFormProcessing = false;
                    this.isFormModified = false;
                    this.ns.setNotificationStatus(true);
                    this.ns.addNotification('Operation is unsuccessful and profile is not updated.');
                }
                if (result != null && result.updated == true) {
                    this.isFormSubmitted = false;
                    this.ns.setNotificationStatus(true);
                    this.ns.addNotification('Operation is successful and profile is updated.');
                    this.$entryChanges(result.$data);
                }
            });
        }
        else {
            this.isFormProcessing = false;
        }
    }
    $entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(['account', 'profile']);
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
    get first_name() {
        return this.entryForm.get('first_name');
    }
    get last_name() {
        return this.entryForm.get('last_name');
    }
    get about() {
        return this.entryForm.get('about');
    }
    get country() {
        return this.entryForm.get('country');
    }
    get level() {
        return this.entryForm.get('level');
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
}
ProfileUpdateComponent.ɵfac = function ProfileUpdateComponent_Factory(t) { return new (t || ProfileUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_form_service__WEBPACK_IMPORTED_MODULE_7__["ProfileFormService"])); };
ProfileUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileUpdateComponent, selectors: [["app-profile-update"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "entry-update", 4, "ngIf"], [3, "view-type"], [3, "error"], [3, "notified", "message", "finished"], ["id", "entry-update"], ["id", "entry-detail"], ["action", "", "method", "post", "enctype", "application/x-www-form-urlencoded", "autocomplete", "off", 3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [1, "entry-options"], [1, "entry-option", "center", 3, "routerLink"], [1, "bold"], [1, "form-group"], ["for", "first_name", 1, "form-label", "bold"], ["type", "text", "id", "first_name", "name", "first_name", "placeholder", "Yusuf", "required", "required", "autocomplete", "new-first_name", "formControlName", "first_name", "appCapitalize", "appCapitalize", 1, "form-control"], [3, "system-type", "first-name", 4, "ngIf"], [3, "system-type", "first-name"], ["for", "last_name", 1, "form-label", "bold"], ["type", "text", "id", "last_name", "name", "last_name", "placeholder", "Musa", "required", "required", "autocomplete", "new-last_name", "formControlName", "last_name", "appCapitalize", "appCapitalize", 1, "form-control"], [3, "system-type", "last-name", 4, "ngIf"], [3, "system-type", "last-name"], ["for", "about", 1, "form-label", "bold"], ["id", "about", "name", "about", "placeholder", "I am me", "required", "required", "formControlName", "about", 1, "form-control", "form-textarea"], [3, "system-type", "about", 4, "ngIf"], [3, "system-type", "about"], ["for", "level", 1, "form-label", "bold"], ["name", "level", "id", "level", "required", "required", "formControlName", "level", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "level", 4, "ngIf"], [3, "system-type", "level"], ["for", "country", 1, "form-label", "bold"], ["name", "country", "id", "country", "required", "required", "formControlName", "country", 1, "form-control"], [3, "system-type", "country", 4, "ngIf"], [3, "system-type", "country"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ProfileUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileUpdateComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_app_view_description_1_Template, 1, 1, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileUpdateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileUpdateComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileUpdateComponent_div_4_Template, 16, 11, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_9__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_11__["NotificationScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _shared_directives_general_directives_capitalize_directive__WEBPACK_IMPORTED_MODULE_13__["CapitalizeDirective"], _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_14__["ProfileValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-update',
                'templateUrl': './profile-update.component.html',
                'styleUrls': ['./profile-update.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }, { type: _profile_form_service__WEBPACK_IMPORTED_MODULE_7__["ProfileFormService"] }]; }, null); })();


/***/ }),

/***/ "iFss":
/*!***********************************************************!*\
  !*** ./src/app/account/profile/profile-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guards/is-admin.guard */ "5kR8");
/* harmony import */ var _profile_homepage_profile_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-homepage/profile-homepage.component */ "BSxn");
/* harmony import */ var _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-update/profile-update.component */ "gYy/");
/* harmony import */ var _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-detail/profile-detail.component */ "sJHZ");
/* harmony import */ var _profile_deactivate_profile_deactivate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-deactivate/profile-deactivate.component */ "5z+F");
/* harmony import */ var _profile_reactivate_profile_reactivate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-reactivate/profile-reactivate.component */ "X65L");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password/change-password.component */ "sVKf");
/* harmony import */ var _profile_dashboard_profile_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-dashboard/profile-dashboard.component */ "XnJb");
/* harmony import */ var _profile_entry_type_dashboard_profile_entry_type_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-entry-type-dashboard/profile-entry-type-dashboard.component */ "rp7F");














const routes = [
    { 'path': '',
        'component': _profile_homepage_profile_homepage_component__WEBPACK_IMPORTED_MODULE_4__["ProfileHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _profile_dashboard_profile_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDashboardComponent"] },
                    { 'path': 'entry-type', 'component': _profile_entry_type_dashboard_profile_entry_type_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["ProfileEntryTypeDashboardComponent"], 'canActivate': [_shared_guards_is_admin_guard__WEBPACK_IMPORTED_MODULE_3__["IsAdminGuard"]], },
                    { 'path': 'update-signature', 'loadChildren': () => Promise.all(/*! import() | profile-entry-update-signature-profile-entry-update-signature-module */[__webpack_require__.e("general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe"), __webpack_require__.e("profile-entry-update-signature-profile-entry-update-signature-module")]).then(__webpack_require__.bind(null, /*! ./profile-entry-update-signature/profile-entry-update-signature.module */ "oNP8")).then(m => m.ProfileEntryUpdateSignatureModule) },
                    { 'path': 'update-photo', 'loadChildren': () => Promise.all(/*! import() | profile-entry-update-photo-profile-entry-update-photo-module */[__webpack_require__.e("general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe"), __webpack_require__.e("profile-entry-update-photo-profile-entry-update-photo-module")]).then(__webpack_require__.bind(null, /*! ./profile-entry-update-photo/profile-entry-update-photo.module */ "wsHY")).then(m => m.ProfileEntryUpdatePhotoModule) },
                    { 'path': 'change-password', 'component': _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"] },
                    { 'path': 'update', 'component': _profile_update_profile_update_component__WEBPACK_IMPORTED_MODULE_5__["ProfileUpdateComponent"] },
                    { 'path': 'detail', 'component': _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailComponent"] },
                    { 'path': 'deactivate', 'component': _profile_deactivate_profile_deactivate_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDeactivateComponent"] },
                    { 'path': 'reactivate', 'component': _profile_reactivate_profile_reactivate_component__WEBPACK_IMPORTED_MODULE_8__["ProfileReactivateComponent"] },
                ] }
        ] }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

/***/ "mPla":
/*!*********************************************************!*\
  !*** ./src/app/account/profile/profile-form.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfileFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormService", function() { return ProfileFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "Lf4m");
/* harmony import */ var _shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/dynamic-control-validator */ "tTBu");
/* harmony import */ var _shared_services_email_address_validators_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/email-address-validators.service */ "KfBO");
/* harmony import */ var _shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/password-validators.service */ "1NK+");
/* harmony import */ var _shared_services_verify_username_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/verify-username.service */ "KDoO");
/* harmony import */ var _shared_services_verify_email_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/verify-email.service */ "ikjD");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");














class ProfileFormService {
    constructor(auth, fb, http, apiConfig) {
        this.auth = auth;
        this.fb = fb;
        this.http = http;
        this.apiConfig = apiConfig;
        this.permanentData = {};
        this.entryValidators = {
            'first$last$Name': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)],
            'about': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)],
            'emailAddress': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), Object(_shared_services_email_address_validators_service__WEBPACK_IMPORTED_MODULE_6__["emailAddressValidator"])(_general__WEBPACK_IMPORTED_MODULE_4__["emailAddress"])],
            'jamb$matric$identity': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)],
            'password': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35), Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_7__["simplePasswordValidator"])()],
        };
        this.permanentProps = {
            'level': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)],
            'country': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)]
        };
        this.propAsyncValidator = {
            'emailAddress': [Object(_shared_services_verify_email_service__WEBPACK_IMPORTED_MODULE_9__["emailAddressVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)],
            'username': [Object(_shared_services_verify_username_service__WEBPACK_IMPORTED_MODULE_8__["usernameVerification"])(this.auth, this.http, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"], this.apiConfig).bind(this)]
        };
    }
    getPermanentProp(prop) {
        return this.permanentProps[prop];
    }
    profileUpdate() {
        return this.fb.group({
            'first_name': ['', { 'validators': this.entryValidators.first$last$Name }],
            'last_name': ['', { 'validators': this.entryValidators.first$last$Name }],
            'about': ['', { 'validators': this.entryValidators.about }],
            'country': ['', { 'validators': [...this.getPermanentProp('country')] }],
            'level': ['', { 'validators': [...this.getPermanentProp('level')] }]
        });
    }
    changePassword() {
        let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.password),
            'new_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.password),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.password)
        }, [Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_7__["confirmPasswordValidator"])(), Object(_shared_services_password_validators_service__WEBPACK_IMPORTED_MODULE_7__["currentAndNewPasswordValidator"])()]);
        return form;
    }
    statusProfile() {
        let form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.first$last$Name),
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.first$last$Name),
            'email_address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.emailAddress),
            'identity_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.entryValidators.jamb$matric$identity)
        });
        return form;
    }
    createPermanent(datas, form) {
        if (datas != null) {
            for (let $prop in datas) {
                let propVal = $prop.toLowerCase();
                this.permanentData[propVal] = datas[$prop];
                form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal], Object(_shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_5__["dynamicDataValidator"])(this.getMyData(propVal), $prop)]) : null;
                form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
            }
            form.updateValueAndValidity();
        }
    }
    removeControls(controls, form) {
        if (controls != null && controls.length > 0) {
            controls.forEach((control) => {
                let ctrl = form.get(control);
                return ctrl ? form.removeControl(control) : null;
            });
        }
    }
    removeAsyncValidators(controls, form) {
        if (controls != null && controls.length > 0) {
            controls.forEach((control) => {
                if (form.get(control)) {
                    form.get(control).clearAsyncValidators();
                    form.get(control).updateValueAndValidity();
                }
            });
            form.updateValueAndValidity();
        }
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
    setAsyncNullError(control, formCtrl) {
        formCtrl.setErrors({ [control + 'Service']: null }, { 'emitEvent': true });
        formCtrl.updateValueAndValidity({ 'onlySelf': true, 'emitEvent': true });
    }
}
ProfileFormService.ɵfac = function ProfileFormService_Factory(t) { return new (t || ProfileFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"])); };
ProfileFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileFormService, factory: ProfileFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }]; }, null); })();


/***/ }),

/***/ "rp7F":
/*!********************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-type-dashboard/profile-entry-type-dashboard.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProfileEntryTypeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryTypeDashboardComponent", function() { return ProfileEntryTypeDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");






function ProfileEntryTypeDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileEntryTypeDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
const _c0 = function () { return ["/system"]; };
const _c1 = function () { return ["/general-request"]; };
const _c2 = function () { return ["/general-payment"]; };
const _c3 = function () { return ["/refund"]; };
function ProfileEntryTypeDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Manage System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Manage General Request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Manage General Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Manage Refund ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
class ProfileEntryTypeDashboardComponent {
    constructor(aus) {
        this.aus = aus;
        this.systemType = 'Profile';
        this.title = 'Profile';
        this.view = 'upr';
    }
    ngOnInit() {
    }
    get canManage() {
        return ['moderator', 'administrator', 'superAdministrator'].indexOf(this.aus.userRole) > 0;
    }
}
ProfileEntryTypeDashboardComponent.ɵfac = function ProfileEntryTypeDashboardComponent_Factory(t) { return new (t || ProfileEntryTypeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
ProfileEntryTypeDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEntryTypeDashboardComponent, selectors: [["app-profile-entry-type-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "view-type"], ["id", "dashboard"], [1, "center", 3, "routerLink"]], template: function ProfileEntryTypeDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileEntryTypeDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileEntryTypeDashboardComponent_app_view_description_1_Template, 1, 1, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEntryTypeDashboardComponent_div_2_Template, 14, 8, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__["ViewDescriptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVudHJ5LXR5cGUtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryTypeDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-entry-type-dashboard',
                'templateUrl': './profile-entry-type-dashboard.component.html',
                'styleUrls': ['./profile-entry-type-dashboard.component.css']
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "rpfD":
/*!**********************************************************************************!*\
  !*** ./src/app/account/profile/profile-validator/profile-validator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileValidatorComponent", function() { return ProfileValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function ProfileValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r10.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r11.systemType, " cannot be less than 2 characters in length ");
} }
function ProfileValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" First Name of ", ctx_r12.systemType, " cannot be greater than 20 characters in length ");
} }
function ProfileValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.first_name.errors == null ? null : ctx_r9.first_name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.first_name.errors == null ? null : ctx_r9.first_name.errors.required) || (ctx_r9.first_name.errors == null ? null : ctx_r9.first_name.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.first_name.errors == null ? null : ctx_r9.first_name.errors.required) || (ctx_r9.first_name.errors == null ? null : ctx_r9.first_name.errors.maxlength));
} }
function ProfileValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_0_div_1_Template, 5, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.first_name.invalid && (ctx_r0.first_name.touched || ctx_r0.first_name.dirty));
} }
function ProfileValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r14.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r15.systemType, " cannot be less than 2 characters in length ");
} }
function ProfileValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Name of ", ctx_r16.systemType, " cannot be greater than 20 characters in length ");
} }
function ProfileValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.last_name.errors == null ? null : ctx_r13.last_name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.last_name.errors == null ? null : ctx_r13.last_name.errors.required) || (ctx_r13.last_name.errors == null ? null : ctx_r13.last_name.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.last_name.errors == null ? null : ctx_r13.last_name.errors.required) || (ctx_r13.last_name.errors == null ? null : ctx_r13.last_name.errors.maxlength));
} }
function ProfileValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_1_div_1_Template, 5, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.last_name.invalid && (ctx_r1.last_name.touched || ctx_r1.last_name.dirty));
} }
function ProfileValidatorComponent_ng_container_2_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r18.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_2_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r19.systemType, " cannot be less than 7 characters in length ");
} }
function ProfileValidatorComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email Address of ", ctx_r20.systemType, " cannot be greater than 50 characters in length ");
} }
function ProfileValidatorComponent_ng_container_2_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address must be valid and should conform to standards for example david@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileValidatorComponent_ng_container_2_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Address cannot be used at the moment because it is already taken by another user. Please input another email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileValidatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_2_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_2_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_2_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileValidatorComponent_ng_container_2_div_1_li_5_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileValidatorComponent_ng_container_2_div_1_li_6_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.required) || (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.required) || (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.required) || (ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.email_address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.email_address.errors == null ? null : ctx_r17.email_address.errors.email_addressService);
} }
function ProfileValidatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_2_div_1_Template, 7, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email_address.invalid && (ctx_r2.email_address.touched || ctx_r2.email_address.dirty));
} }
function ProfileValidatorComponent_ng_container_3_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r24.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_3_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r25.systemType, " cannot be greater than specified length ");
} }
function ProfileValidatorComponent_ng_container_3_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Level of ", ctx_r26.systemType, " should be available from existing record before it can be considered valid ");
} }
function ProfileValidatorComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_3_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_3_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_3_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.level.errors == null ? null : ctx_r23.level.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r23.level.errors == null ? null : ctx_r23.level.errors.required) || (ctx_r23.level.errors == null ? null : ctx_r23.level.errors.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.level.errors == null ? null : ctx_r23.level.errors.Level);
} }
function ProfileValidatorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_3_div_1_Template, 5, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.level.invalid && (ctx_r3.level.touched || ctx_r3.level.dirty));
} }
function ProfileValidatorComponent_ng_container_4_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r28.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_4_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r29.systemType, " cannot be greater than specified length ");
} }
function ProfileValidatorComponent_ng_container_4_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country of ", ctx_r30.systemType, " should be available from existing record before it can be considered valid ");
} }
function ProfileValidatorComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_4_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_4_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_4_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.country.errors == null ? null : ctx_r27.country.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r27.country.errors == null ? null : ctx_r27.country.errors.required) || (ctx_r27.country.errors == null ? null : ctx_r27.country.errors.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.country.errors == null ? null : ctx_r27.country.errors.Country);
} }
function ProfileValidatorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_4_div_1_Template, 5, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.country.invalid && (ctx_r4.country.touched || ctx_r4.country.dirty));
} }
function ProfileValidatorComponent_ng_container_5_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Identity Number of ", ctx_r32.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_5_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Identity Number of ", ctx_r33.systemType, " cannot be less than 2 characters in length ");
} }
function ProfileValidatorComponent_ng_container_5_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Identity Number of ", ctx_r34.systemType, " cannot be greater than 30 characters in length ");
} }
function ProfileValidatorComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_5_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_5_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_5_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.identity_number.errors == null ? null : ctx_r31.identity_number.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r31.identity_number.errors == null ? null : ctx_r31.identity_number.errors.required) || (ctx_r31.identity_number.errors == null ? null : ctx_r31.identity_number.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r31.identity_number.errors == null ? null : ctx_r31.identity_number.errors.required) || (ctx_r31.identity_number.errors == null ? null : ctx_r31.identity_number.errors.maxlength));
} }
function ProfileValidatorComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_5_div_1_Template, 5, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.identity_number.invalid && (ctx_r5.identity_number.touched || ctx_r5.identity_number.dirty));
} }
function ProfileValidatorComponent_ng_container_6_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r36.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_6_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r37.systemType, " cannot be less than 7 characters in length ");
} }
function ProfileValidatorComponent_ng_container_6_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r38.systemType, " cannot be greater than 35 characters in length ");
} }
function ProfileValidatorComponent_ng_container_6_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password of ", ctx_r39.systemType, " is too simple and will not be allowed in this system. Please input another type of password ");
} }
function ProfileValidatorComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_6_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_6_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_6_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileValidatorComponent_ng_container_6_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.password.errors == null ? null : ctx_r35.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r35.password.errors == null ? null : ctx_r35.password.errors.required) || (ctx_r35.password.errors == null ? null : ctx_r35.password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r35.password.errors == null ? null : ctx_r35.password.errors.required) || (ctx_r35.password.errors == null ? null : ctx_r35.password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.password.errors == null ? null : ctx_r35.password.errors.simplePassword);
} }
function ProfileValidatorComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_6_div_1_Template, 6, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.password.invalid && (ctx_r6.password.touched || ctx_r6.password.dirty));
} }
function ProfileValidatorComponent_ng_container_7_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r41.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_7_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r42.systemType, " cannot be less than 7 characters in length ");
} }
function ProfileValidatorComponent_ng_container_7_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r43.systemType, " cannot be greater than 35 characters in length ");
} }
function ProfileValidatorComponent_ng_container_7_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r44.systemType, " is too simple and will not be allowed in this system. Please input another type of new_password ");
} }
function ProfileValidatorComponent_ng_container_7_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password of ", ctx_r45.systemType, " should not be equal to initial password ");
} }
function ProfileValidatorComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_7_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_7_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_7_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileValidatorComponent_ng_container_7_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileValidatorComponent_ng_container_7_div_1_li_6_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.required) || (ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.required) || (ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.simplePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.new_password.errors == null ? null : ctx_r40.new_password.errors.currentAndNew);
} }
function ProfileValidatorComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_7_div_1_Template, 7, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.new_password.invalid && (ctx_r7.new_password.touched || ctx_r7.new_password.dirty));
} }
function ProfileValidatorComponent_ng_container_8_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r47.systemType, " should be provided and cannot be empty ");
} }
function ProfileValidatorComponent_ng_container_8_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r48.systemType, " cannot be less than 7 characters in length ");
} }
function ProfileValidatorComponent_ng_container_8_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r49.systemType, " cannot be greater than 35 characters in length ");
} }
function ProfileValidatorComponent_ng_container_8_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Confirmation Password of ", ctx_r50.systemType, " is too simple and will not be allowed in this system. Please input another type of confirm_password ");
} }
function ProfileValidatorComponent_ng_container_8_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Confirmation Password of ", ctx_r51.systemType, " should be equal to New password of ", ctx_r51.systemType, " ");
} }
function ProfileValidatorComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_8_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_8_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_8_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileValidatorComponent_ng_container_8_div_1_li_5_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileValidatorComponent_ng_container_8_div_1_li_6_Template, 2, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.required) || (ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.required) || (ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.simplePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.confirm_password.errors == null ? null : ctx_r46.confirm_password.errors.confirm_password);
} }
function ProfileValidatorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_8_div_1_Template, 7, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.confirm_password.invalid && (ctx_r8.confirm_password.touched || ctx_r8.confirm_password.dirty));
} }
class ProfileValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileValidatorComponent.ɵfac = function ProfileValidatorComponent_Factory(t) { return new (t || ProfileValidatorComponent)(); };
ProfileValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileValidatorComponent, selectors: [["app-profile-validator"]], inputs: { systemType: ["system-type", "systemType"], first_name: ["first-name", "first_name"], last_name: ["last-name", "last_name"], email_address: ["email-address", "email_address"], identity_number: ["identity-number", "identity_number"], new_password: ["new-password", "new_password"], confirm_password: ["confirm-password", "confirm_password"], country: "country", level: "level", password: "password" }, decls: 9, vars: 9, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function ProfileValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileValidatorComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileValidatorComponent_ng_container_3_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileValidatorComponent_ng_container_4_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileValidatorComponent_ng_container_5_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileValidatorComponent_ng_container_6_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileValidatorComponent_ng_container_7_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileValidatorComponent_ng_container_8_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.new_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirm_password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXZhbGlkYXRvci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-validator',
                'templateUrl': './profile-validator.component.html',
                'styleUrls': ['./profile-validator.component.css']
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
        }], email_address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['email-address']
        }], identity_number: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['identity-number']
        }], new_password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['new-password']
        }], confirm_password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['confirm-password']
        }], country: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], password: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sJHZ":
/*!****************************************************************************!*\
  !*** ./src/app/account/profile/profile-detail/profile-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile.service */ "g351");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");










function ProfileDetailComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileDetailComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
function ProfileDetailComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function ProfileDetailComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Profile Photo : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.entry == null ? null : ctx_r4.entry.profile_photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r4.systemType);
} }
function ProfileDetailComponent_div_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Unique Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.entry == null ? null : ctx_r5.entry._id, " ");
} }
function ProfileDetailComponent_div_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " First Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.entry == null ? null : ctx_r6.entry.first_name, " ");
} }
function ProfileDetailComponent_div_3_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Last Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.entry == null ? null : ctx_r7.entry.last_name, " ");
} }
function ProfileDetailComponent_div_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Email Address : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.entry == null ? null : ctx_r8.entry.email_address, " ");
} }
function ProfileDetailComponent_div_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Department : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.entry == null ? null : ctx_r9.entry.department, " ");
} }
function ProfileDetailComponent_div_3_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.entry == null ? null : ctx_r10.entry.faculty, " ");
} }
function ProfileDetailComponent_div_3_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Level : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.entry == null ? null : ctx_r11.entry.level, " ");
} }
function ProfileDetailComponent_div_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Unit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.entry == null ? null : ctx_r12.entry.unit, " ");
} }
function ProfileDetailComponent_div_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Country : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.entry == null ? null : ctx_r13.entry.country, " ");
} }
function ProfileDetailComponent_div_3_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Role : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.entry == null ? null : ctx_r14.entry.role, " ");
} }
function ProfileDetailComponent_div_3_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.entry == null ? null : ctx_r15.entry.status, " ");
} }
function ProfileDetailComponent_div_3_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Matriculation Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.entry == null ? null : ctx_r16.entry.matriculation_number, " ");
} }
function ProfileDetailComponent_div_3_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Jamb Registration Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.entry == null ? null : ctx_r17.entry.jamb_registration_number, " ");
} }
function ProfileDetailComponent_div_3_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Student Identity Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.entry == null ? null : ctx_r18.entry.identity_number, " ");
} }
function ProfileDetailComponent_div_3_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Updated On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r19.entry == null ? null : ctx_r19.entry.updated_on, "fullDate"), " ");
} }
function ProfileDetailComponent_div_3_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.entry == null ? null : ctx_r20.entry.about, " ");
} }
function ProfileDetailComponent_div_3_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Signature : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.entry == null ? null : ctx_r21.entry.signature, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r21.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r21.systemType);
} }
const _c0 = function () { return ["../../../", "account", "profile", "update"]; };
function ProfileDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileDetailComponent_div_3_ng_container_7_Template, 6, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileDetailComponent_div_3_ng_container_8_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileDetailComponent_div_3_ng_container_9_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileDetailComponent_div_3_ng_container_10_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileDetailComponent_div_3_ng_container_11_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileDetailComponent_div_3_ng_container_12_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileDetailComponent_div_3_ng_container_13_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileDetailComponent_div_3_ng_container_14_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileDetailComponent_div_3_ng_container_15_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileDetailComponent_div_3_ng_container_16_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileDetailComponent_div_3_ng_container_17_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileDetailComponent_div_3_ng_container_18_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileDetailComponent_div_3_ng_container_19_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfileDetailComponent_div_3_ng_container_20_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileDetailComponent_div_3_ng_container_21_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileDetailComponent_div_3_ng_container_22_Template, 7, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileDetailComponent_div_3_ng_container_23_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileDetailComponent_div_3_ng_container_24_Template, 6, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Entry Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Profile Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.profile_photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.email_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.faculty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.matriculation_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.jamb_registration_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.identity_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.updated_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.entry == null ? null : ctx_r3.entry.signature);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
} }
class ProfileDetailComponent {
    constructor(route, ems, ps) {
        this.route = route;
        this.ems = ems;
        this.ps = ps;
        this.systemType = 'User';
        this.title = `${this.systemType} Detail`;
        this.view = 'aug';
        this.isError = false;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => { return this.ps.profileDetail(); }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.entry = result;
            }
        });
    }
}
ProfileDetailComponent.ɵfac = function ProfileDetailComponent_Factory(t) { return new (t || ProfileDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"])); };
ProfileDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailComponent, selectors: [["app-profile-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "entry-view", 4, "ngIf"], [3, "view-type"], [3, "error"], ["id", "entry-view"], ["id", "entry-detail"], [1, "parameter"], [1, "data"], [1, "entry-options"], [1, "entry-option", "center", 3, "routerLink"], [1, "bold", "left"], [1, "profilePhoto"], [3, "src", "alt", "title"], [1, "signature"]], template: function ProfileDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileDetailComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileDetailComponent_app_view_description_1_Template, 1, 1, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileDetailComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileDetailComponent_div_3_Template, 30, 20, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_7__["ResourceUnavailableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-detail',
                'templateUrl': './profile-detail.component.html',
                'styleUrls': ['./profile-detail.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "sVKf":
/*!******************************************************************************!*\
  !*** ./src/app/account/profile/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _profile_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-form.service */ "mPla");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile.service */ "g351");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../profile-validator/profile-validator.component */ "rpfD");

















function ChangePasswordComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ChangePasswordComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function ChangePasswordComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function ChangePasswordComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function ChangePasswordComponent_app_view_description_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r3.view);
} }
function ChangePasswordComponent_div_4_div_2_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 16);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r12.systemType)("password", ctx_r12.password);
} }
function ChangePasswordComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Current Password * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePasswordComponent_div_4_div_2_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.password);
} }
function ChangePasswordComponent_div_4_div_3_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 20);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r13.systemType)("new-password", ctx_r13.new_password);
} }
function ChangePasswordComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Password * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePasswordComponent_div_4_div_3_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.new_password);
} }
function ChangePasswordComponent_div_4_div_4_app_profile_validator_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-validator", 24);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r14.systemType)("confirm-password", ctx_r14.confirm_password);
} }
function ChangePasswordComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirm Password * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePasswordComponent_div_4_div_4_app_profile_validator_4_Template, 1, 2, "app-profile-validator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.confirm_password);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function ChangePasswordComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r10.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r10.isFormValid);
} }
function ChangePasswordComponent_div_4_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_div_4_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changePassword(ctx_r15.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_4_div_2_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_4_div_3_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePasswordComponent_div_4_div_4_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChangePasswordComponent_div_4_button_5_Template, 2, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangePasswordComponent_div_4_p_6_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.new_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.confirm_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class ChangePasswordComponent {
    constructor(pfs, router, ps, ns, auth, route, ems) {
        this.pfs = pfs;
        this.router = router;
        this.ps = ps;
        this.ns = ns;
        this.auth = auth;
        this.route = route;
        this.ems = ems;
        this.systemType = 'User';
        this.title = 'Change Password';
        this.view = 'cp';
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.ps.entryExist();
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null) {
                this.eidx = result._id;
                this.entryForm = this.pfs.changePassword();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    changePassword(body) {
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.ps.changePassword(body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} entry is not updated.`);
            }
            else if (result != null && result.updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);
                this.auth.logout();
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigateByUrl('/signin');
        }, 5000);
    }
    get password() {
        return this.entryForm.get('password');
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
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "entry-update", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "error"], [3, "view-type"], ["id", "entry-update"], ["method", "post", "autocomplete", "off", 3, "formGroup", "ngSubmit"], ["class", "form-group", 4, "ngIf"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], [1, "form-group"], ["for", "password", 1, "form-label", "bold"], ["type", "password", "id", "password", "name", "password", "required", "required", "autocomplete", "new-password", "formControlName", "password", 1, "form-control"], [3, "system-type", "password", 4, "ngIf"], [3, "system-type", "password"], ["for", "new-password", 1, "form-label", "bold"], ["type", "password", "id", "new-password", "name", "new_password", "required", "required", "autocomplete", "new-new_password", "formControlName", "new_password", 1, "form-control"], [3, "system-type", "new-password", 4, "ngIf"], [3, "system-type", "new-password"], ["for", "confirm-password", 1, "form-label", "bold"], ["type", "password", "id", "confirm-password", "name", "confirm_password", "required", "required", "autocomplete", "new-confirm_password", "formControlName", "confirm_password", 1, "form-control"], [3, "system-type", "confirm-password", 4, "ngIf"], [3, "system-type", "confirm-password"], ["type", "submit", 1, "btn-submit", 3, "disabled"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChangePasswordComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_app_view_description_3_Template, 1, 1, "app-view-description", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePasswordComponent_div_4_Template, 7, 6, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eidx);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_9__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _profile_validator_profile_validator_component__WEBPACK_IMPORTED_MODULE_13__["ProfileValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-change-password',
                'templateUrl': './change-password.component.html',
                'styleUrls': ['./change-password.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _profile_form_service__WEBPACK_IMPORTED_MODULE_4__["ProfileFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


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
//# sourceMappingURL=account-profile-profile-module.js.map