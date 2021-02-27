exports.ids = ["general-request-entry-create-general-request-entry-create-module~refund-entry-create-refund-entry-cr~653d4a90"];
exports.modules = {

/***/ "0FyI":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry-create/request-entry-create.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RequestEntryCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateModule", function() { return RequestEntryCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/attachment/attachment.module */ "M35K");
/* harmony import */ var _module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/guideline/guideline.module */ "8yhi");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-entry-create/request-entry-create.component */ "wczn");
/* harmony import */ var _request_entry_create_validator_request_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-entry-create-validator/request-entry-create-validator.component */ "G7ce");
/* harmony import */ var _request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-entry-create-form.service */ "5bm+");
/* harmony import */ var _request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-entry-create.service */ "WEao");











class RequestEntryCreateModule {
}
RequestEntryCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestEntryCreateModule });
RequestEntryCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestEntryCreateModule_Factory(t) { return new (t || RequestEntryCreateModule)(); }, providers: [
        _request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["RequestEntryCreateFormService"],
        _request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__["RequestEntryCreateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
            _module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestEntryCreateModule, { declarations: [_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateComponent"],
        _request_entry_create_validator_request_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryCreateValidatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
        _module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]], exports: [_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateComponent"],
                    _request_entry_create_validator_request_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryCreateValidatorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
                    _module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]
                ],
                providers: [
                    _request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["RequestEntryCreateFormService"],
                    _request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__["RequestEntryCreateService"]
                ],
                exports: [
                    _request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5bm+":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry-create/request-entry-create-form.service.ts ***!
  \********************************************************************************************/
/*! exports provided: RequestEntryCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateFormService", function() { return RequestEntryCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");




class RequestEntryCreateFormService {
    constructor(fb) {
        this.fb = fb;
    }
    entryCreateForm() {
        let form = this.fb.group({
            'message': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1000)] }]
        });
        return form;
    }
}
RequestEntryCreateFormService.ɵfac = function RequestEntryCreateFormService_Factory(t) { return new (t || RequestEntryCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RequestEntryCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestEntryCreateFormService, factory: RequestEntryCreateFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "G7ce":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry-create/request-entry-create-validator/request-entry-create-validator.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: RequestEntryCreateValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateValidatorComponent", function() { return RequestEntryCreateValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message of ", ctx_r2.systemType, " should be provided and cannot be empty ");
} }
function RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message of ", ctx_r3.systemType, " cannot be less than 10 characters in length ");
} }
function RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message of ", ctx_r4.systemType, " cannot be greater than 1000 characters in length ");
} }
function RequestEntryCreateValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryCreateValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.message.errors == null ? null : ctx_r1.message.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.message.errors == null ? null : ctx_r1.message.errors.required) || (ctx_r1.message.errors == null ? null : ctx_r1.message.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.message.errors == null ? null : ctx_r1.message.errors.required) || (ctx_r1.message.errors == null ? null : ctx_r1.message.errors.maxlength));
} }
function RequestEntryCreateValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryCreateValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.invalid && (ctx_r0.message.touched || ctx_r0.message.dirty));
} }
class RequestEntryCreateValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestEntryCreateValidatorComponent.ɵfac = function RequestEntryCreateValidatorComponent_Factory(t) { return new (t || RequestEntryCreateValidatorComponent)(); };
RequestEntryCreateValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryCreateValidatorComponent, selectors: [["app-request-entry-create-validator"]], inputs: { systemType: ["system-type", "systemType"], message: "message" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function RequestEntryCreateValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryCreateValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LWNyZWF0ZS12YWxpZGF0b3IuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-create-validator',
                'templateUrl': './request-entry-create-validator.component.html',
                'styleUrls': ['./request-entry-create-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WEao":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry-create/request-entry-create.service.ts ***!
  \***************************************************************************************/
/*! exports provided: RequestEntryCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateService", function() { return RequestEntryCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");



class RequestEntryCreateService {
    constructor() {
        this.isEntryCreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isEntryCreated$ = this.isEntryCreated.asObservable();
    }
}
RequestEntryCreateService.ɵfac = function RequestEntryCreateService_Factory(t) { return new (t || RequestEntryCreateService)(); };
RequestEntryCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestEntryCreateService, factory: RequestEntryCreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


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

/***/ "wczn":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry-create/request-entry-create/request-entry-create.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RequestEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateComponent", function() { return RequestEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _request_entry_create_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-entry-create.service */ "WEao");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../module/guideline/request-entry-create-file-guideline/request-entry-create-file-guideline.component */ "bhAK");
/* harmony import */ var _request_entry_create_validator_request_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../request-entry-create-validator/request-entry-create-validator.component */ "G7ce");
/* harmony import */ var _module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../module/attachment/attachment-upload/attachment-upload.component */ "RvSM");












const _c0 = ["attachments"];
const _c1 = ["fileAttachment"];
function RequestEntryCreateComponent_app_notification_screen_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function RequestEntryCreateComponent_app_notification_screen_0_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r0.notificationAvailable)("message", ctx_r0.notificationMessage);
} }
function RequestEntryCreateComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function RequestEntryCreateComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-request-entry-create-file-guideline", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r5.view)("system-guideline", ctx_r5.systemGuideline);
} }
function RequestEntryCreateComponent_ng_container_2_div_4_app_request_entry_create_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-create-validator", 16);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r10.systemType)("message", ctx_r10.message);
} }
function RequestEntryCreateComponent_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryCreateComponent_ng_container_2_div_4_app_request_entry_create_validator_5_Template, 1, 2, "app-request-entry-create-validator", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.message);
} }
function RequestEntryCreateComponent_ng_container_2_ng_container_5_app_attachment_upload_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-attachment-upload", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myFile", function RequestEntryCreateComponent_ng_container_2_ng_container_5_app_attachment_upload_1_Template_app_attachment_upload_myFile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.pushFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const props_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theControl", props_r12.key)("theForm", ctx_r11.entryCreateForm)("submission", ctx_r11.submission)("attachment-name", ctx_r11.attachmentConfig.name)("attachment-type", ctx_r11.attachmentConfig.type)("end-points", ctx_r11.uploadConfigU)("myProps", props_r12)("myNumber", i_r13 + 1);
} }
function RequestEntryCreateComponent_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryCreateComponent_ng_container_2_ng_container_5_app_attachment_upload_1_Template, 2, 8, "app-attachment-upload", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.inputFileControl);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function RequestEntryCreateComponent_ng_container_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestEntryCreateComponent_ng_container_2_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.createEntry(ctx_r17.entryCreateForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, !ctx_r8.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isFormValid);
} }
function RequestEntryCreateComponent_ng_container_2_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryCreateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryCreateComponent_ng_container_2_div_1_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryCreateComponent_ng_container_2_div_4_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryCreateComponent_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestEntryCreateComponent_ng_container_2_button_6_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestEntryCreateComponent_ng_container_2_p_7_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.systemGuideline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryCreateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.inputFileControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isFormSubmitted);
} }
class RequestEntryCreateComponent {
    constructor(recs, ns) {
        this.recs = recs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submission = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.$myFiles = [];
        this.entryCreatedOb = this.recs.isEntryCreated$
            .subscribe((created) => {
            if (created == false) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);
            }
            else if (created == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);
                if (this.attachments != null && this.attachments.length > 0) {
                    this.attachments.forEach((item) => {
                        if (item.currentlyUploading == true && item.cancelFile != null) {
                            item.cancelFile.unsubscribe();
                            item.formSubmittedUploadCancel();
                        }
                    });
                }
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.entryCreatedOb != null)
            this.entryCreatedOb.unsubscribe();
    }
    createEntry(body) {
        this.submission = true;
        if (body != null)
            body.documents = [];
        if (this.attachments != null && this.attachments.length > 0) {
            this.attachments.forEach((item) => {
                if (item.$$file != null && item.$$file.location) {
                    body.documents.push(item.$$file);
                }
            });
        }
        this.isFormSubmitted = true;
        this.isFormProcessing = true;
        this.processEntry.emit(body);
    }
    pushFile(file) {
        this.$myFiles.push(file);
    }
    get message() {
        return this.entryCreateForm.get('message');
    }
    get isFormValid() {
        return this.entryCreateForm.valid;
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
RequestEntryCreateComponent.ɵfac = function RequestEntryCreateComponent_Factory(t) { return new (t || RequestEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_entry_create_service__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"])); };
RequestEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryCreateComponent, selectors: [["app-request-entry-create"]], viewQuery: function RequestEntryCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attachments = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputs = _t);
    } }, inputs: { systemType: ["system-type", "systemType"], systemGuideline: ["system-guideline", "systemGuideline"], view: "view", entryCreateForm: ["entry-create-form", "entryCreateForm"], inputFileControl: ["input-file-control", "inputFileControl"], attachmentConfig: ["attachment-config", "attachmentConfig"], uploadConfigU: ["upload-config-u", "uploadConfigU"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]])], decls: 3, vars: 3, consts: [[3, "notified", "message", "finished", 4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [4, "ngIf"], [3, "notified", "message", "finished"], [3, "view-type", "system-type"], ["id", "guidelines", 4, "ngIf"], ["id", "request-form-max"], [3, "formGroup"], ["class", "form-group", 4, "ngIf"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], ["id", "guidelines"], [3, "view", "system-guideline"], [1, "form-group"], ["for", "message", 1, "form-label", "bold"], ["id", "message", "name", "message", "placeholder", "Request for a resolution", "required", "required", "autocomplete", "new-message", "formControlName", "message", 1, "form-control", "form-textarea"], [3, "system-type", "message", 4, "ngIf"], [3, "system-type", "message"], [3, "theControl", "theForm", "submission", "attachment-name", "attachment-type", "end-points", "myProps", "myNumber", "myFile", 4, "ngFor", "ngForOf"], [3, "theControl", "theForm", "submission", "attachment-name", "attachment-type", "end-points", "myProps", "myNumber", "myFile"], ["attachments", ""], [1, "btn-submit", 3, "disabled", "click"]], template: function RequestEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryCreateComponent_app_notification_screen_0_Template, 1, 2, "app-notification-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryCreateComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryCreateComponent_ng_container_2_Template, 8, 6, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__["NotificationScreenComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryCreateFileGuidelineComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _request_entry_create_validator_request_entry_create_validator_component__WEBPACK_IMPORTED_MODULE_8__["RequestEntryCreateValidatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_9__["AttachmentUploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-create',
                'templateUrl': './request-entry-create.component.html',
                'styleUrls': ['./request-entry-create.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _request_entry_create_service__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], systemGuideline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-guideline']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryCreateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-create-form']
        }], inputFileControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['input-file-control']
        }], attachmentConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['attachment-config']
        }], uploadConfigU: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['upload-config-u']
        }], attachments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['attachments']
        }], fileInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['fileAttachment']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=general-request-entry-create-general-request-entry-create-module~refund-entry-create-refund-entry-cr~653d4a90.js.map