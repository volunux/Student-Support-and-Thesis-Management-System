exports.ids = ["commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396"];
exports.modules = {

/***/ "+maU":
/*!****************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal.service.ts ***!
  \****************************************************************************/
/*! exports provided: GeneralInternalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalService", function() { return GeneralInternalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class GeneralInternalService {
    constructor() {
    }
}
GeneralInternalService.ɵfac = function GeneralInternalService_Factory(t) { return new (t || GeneralInternalService)(); };
GeneralInternalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralInternalService, factory: GeneralInternalService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Bp59":
/*!*******************************************!*\
  !*** ./src/app/shared/services/others.ts ***!
  \*******************************************/
/*! exports provided: nullRemover, checkFormChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRemover", function() { return nullRemover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFormChanges", function() { return checkFormChanges; });
function nullRemover(data) {
    let entry;
    for (let i in data) {
        if (data[i] == null) {
            data[i] = '';
        }
    }
    entry = data;
    return entry;
}
function checkFormChanges(entry, body, this$) {
    for (let chrs in entry) {
        if ((entry[chrs] != body[chrs] && (body[chrs] !== null && body[chrs] !== undefined && body.hasOwnProperty(chrs) == true))) {
            this$.isFormModified = true;
            break;
        }
    }
    let $$entry = Object.keys(entry);
    let $$$entry = Object.keys(body);
    const found = $$$entry.some((r) => {
        if (!($$entry.indexOf(r) > -1)) {
            this$.isFormModified = true;
        }
    });
    return this$.isFormModified;
}


/***/ }),

/***/ "FL99":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-entry-delete/general-internal-entry-delete.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GeneralInternalEntryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalEntryDeleteComponent", function() { return GeneralInternalEntryDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-internal-form-input/general-internal-form-input.component */ "qRg5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "Fk62");











function GeneralInternalEntryDeleteComponent_app_notification_screen_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralInternalEntryDeleteComponent_app_notification_screen_0_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r0.notificationAvailable)("message", ctx_r0.notificationMessage);
} }
function GeneralInternalEntryDeleteComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralInternalEntryDeleteComponent_ng_container_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralInternalEntryDeleteComponent_ng_container_2_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.changeEntry(ctx_r8.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r6.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.isFormValid);
} }
function GeneralInternalEntryDeleteComponent_ng_container_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralInternalEntryDeleteComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-general-internal-form-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralInternalEntryDeleteComponent_ng_container_2_button_5_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralInternalEntryDeleteComponent_ng_container_2_p_6_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isFormSubmitted);
} }
const _c1 = function (a2) { return ["../../../", "entry", a2, "detail"]; };
const _c2 = function (a2) { return ["../../../", "entry", a2, "update"]; };
function GeneralInternalEntryDeleteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r3.entry == null ? null : ctx_r3.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.systemType, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r3.entry == null ? null : ctx_r3.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.systemType, " Update ");
} }
const _c3 = ["*"];
class GeneralInternalEntryDeleteComponent {
    constructor(giecs, ns) {
        this.giecs = giecs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFormModified = false;
        this.formMessage = 'Form will not be submitted and entry will not be deleted if data are unchanged since when they were retrieved from the database.';
        this.isFormProcessing = false;
        this.isFormSubmitted = false;
        this.entryChangesOb = this.giecs.isEntryChanged$
            .subscribe((deleted) => {
            if (deleted == false) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`);
            }
            else if (deleted == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.entryChangesOb != null)
            this.entryChangesOb.unsubscribe();
    }
    changeEntry(body) {
        let isConfirmed = confirm('Are you sure you want to proceed with this action?');
        if (isConfirmed) {
            this.isFormSubmitted = true;
            this.isFormProcessing = true;
            this.processEntry.emit(body);
        }
        else {
            return false;
        }
        ;
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
GeneralInternalEntryDeleteComponent.ɵfac = function GeneralInternalEntryDeleteComponent_Factory(t) { return new (t || GeneralInternalEntryDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"])); };
GeneralInternalEntryDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalEntryDeleteComponent, selectors: [["app-general-internal-entry-delete"]], inputs: { systemType: ["system-type", "systemType"], systemGuideline: ["system-guideline", "systemGuideline"], view: "view", entry: "entry", entryForm: ["entry-form", "entryForm"], placeholder: "placeholder", noEdit: ["no-edit", "noEdit"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]])], ngContentSelectors: _c3, decls: 4, vars: 4, consts: [[3, "notified", "message", "finished", 4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [4, "ngIf"], ["class", "entry-options", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "view-type", "system-type"], ["id", "entry-delete", 3, "formGroup"], ["id", "entry-detail"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], [1, "btn-submit", 3, "disabled", "click"], [1, "entry-options"], [1, "entry-option", "center", 3, "routerLink"]], template: function GeneralInternalEntryDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralInternalEntryDeleteComponent_app_notification_screen_0_Template, 1, 2, "app-notification-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalEntryDeleteComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalEntryDeleteComponent_ng_container_2_Template, 7, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralInternalEntryDeleteComponent_div_3_Template, 7, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__["NotificationScreenComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormInputComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWVudHJ5LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalEntryDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-entry-delete',
                'templateUrl': './general-internal-entry-delete.component.html',
                'styleUrls': ['./general-internal-entry-delete.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__["GeneralInternalEntryChangeService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], systemGuideline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-guideline']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "J1zS":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-entry-change.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: GeneralInternalEntryChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalEntryChangeService", function() { return GeneralInternalEntryChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");



class GeneralInternalEntryChangeService {
    constructor() {
        this.isEntryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isEntryChanged$ = this.isEntryChanged.asObservable();
    }
}
GeneralInternalEntryChangeService.ɵfac = function GeneralInternalEntryChangeService_Factory(t) { return new (t || GeneralInternalEntryChangeService)(); };
GeneralInternalEntryChangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralInternalEntryChangeService, factory: GeneralInternalEntryChangeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalEntryChangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PfYv":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/component/notification/notification-message.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageService", function() { return NotificationMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class NotificationMessageService {
    constructor() {
        this.notificationAvailable = false;
        this.notificationMessage = '';
    }
    removeNotification() {
        this.notificationAvailable = false;
        this.notificationMessage = null;
    }
    addNotification(message) {
        this.notificationMessage = message;
    }
    notificationStatus() {
        return this.notificationAvailable;
    }
    setNotificationStatus(status) {
        this.notificationAvailable = status;
    }
    getNotificationMessage() {
        return this.notificationMessage;
    }
}
NotificationMessageService.ɵfac = function NotificationMessageService_Factory(t) { return new (t || NotificationMessageService)(); };
NotificationMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationMessageService, factory: NotificationMessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZVmh":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-form.service.ts ***!
  \*********************************************************************************/
/*! exports provided: GeneralInternalFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalFormService", function() { return GeneralInternalFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");




class GeneralInternalFormService {
    constructor(fb) {
        this.fb = fb;
        this.foreignValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)];
    }
    entryForm() {
        let form = this.fb.group({
            'name': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)] }],
            'description': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(250)] }],
            'status': ['', { 'validators': this.foreignValidator }]
        });
        return form;
    }
}
GeneralInternalFormService.ɵfac = function GeneralInternalFormService_Factory(t) { return new (t || GeneralInternalFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GeneralInternalFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralInternalFormService, factory: GeneralInternalFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "hLGb":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-entry-detail/general-internal-entry-detail.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GeneralInternalEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalEntryDetailComponent", function() { return GeneralInternalEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




function GeneralInternalEntryDetailComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.entry == null ? null : ctx_r1.entry.name, " ");
} }
function GeneralInternalEntryDetailComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Created At : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r2.entry == null ? null : ctx_r2.entry.created_on, "fullDate"), " ");
} }
function GeneralInternalEntryDetailComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Updated At : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx_r3.entry == null ? null : ctx_r3.entry.updated_on, "fullDate"), " ");
} }
function GeneralInternalEntryDetailComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.entry == null ? null : ctx_r4.entry.description, " ");
} }
function GeneralInternalEntryDetailComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.entry == null ? null : ctx_r5.entry.status, " ");
} }
const _c0 = function (a2) { return ["../../../", "entry", a2, "update"]; };
const _c1 = function (a2) { return ["../../../", "entry", a2, "delete"]; };
function GeneralInternalEntryDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralInternalEntryDetailComponent_div_0_ng_container_7_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneralInternalEntryDetailComponent_div_0_ng_container_8_Template, 7, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneralInternalEntryDetailComponent_div_0_ng_container_9_Template, 7, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeneralInternalEntryDetailComponent_div_0_ng_container_10_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GeneralInternalEntryDetailComponent_div_0_ng_container_12_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Entry Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.created_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.updated_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.entry == null ? null : ctx_r0.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.systemType, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r0.entry == null ? null : ctx_r0.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.systemType, " Delete ");
} }
const _c2 = ["*"];
class GeneralInternalEntryDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralInternalEntryDetailComponent.ɵfac = function GeneralInternalEntryDetailComponent_Factory(t) { return new (t || GeneralInternalEntryDetailComponent)(); };
GeneralInternalEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalEntryDetailComponent, selectors: [["app-general-internal-entry-detail"]], inputs: { entry: "entry" }, ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["id", "entry-view", 4, "ngIf"], ["id", "entry-view"], ["id", "entry-detail"], [1, "parameter"], [1, "data"], [4, "ngIf"], [1, "entry-options"], [1, "entry-option", "center", 3, "routerLink"], [1, "bold", "left"]], template: function GeneralInternalEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralInternalEntryDetailComponent_div_0_Template, 20, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWVudHJ5LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-entry-detail',
                'templateUrl': './general-internal-entry-detail.component.html',
                'styleUrls': ['./general-internal-entry-detail.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "njNi":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-entry-create/general-internal-entry-create.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GeneralInternalEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalEntryCreateComponent", function() { return GeneralInternalEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-internal-form-input/general-internal-form-input.component */ "qRg5");










function GeneralInternalEntryCreateComponent_app_notification_screen_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralInternalEntryCreateComponent_app_notification_screen_0_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r0.notificationAvailable)("message", ctx_r0.notificationMessage);
} }
function GeneralInternalEntryCreateComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralInternalEntryCreateComponent_ng_container_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralInternalEntryCreateComponent_ng_container_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.createEntry(ctx_r7.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r5.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r5.isFormValid);
} }
function GeneralInternalEntryCreateComponent_ng_container_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralInternalEntryCreateComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-general-internal-form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalEntryCreateComponent_ng_container_2_button_4_Template, 2, 5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralInternalEntryCreateComponent_ng_container_2_p_5_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isFormSubmitted);
} }
const _c1 = ["*"];
class GeneralInternalEntryCreateComponent {
    constructor(giecs, ns) {
        this.giecs = giecs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.entryChangesOb = this.giecs.isEntryChanged$
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
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.entryChangesOb != null)
            this.entryChangesOb.unsubscribe();
    }
    createEntry(body) {
        this.isFormSubmitted = true;
        this.isFormProcessing = true;
        this.processEntry.emit(body);
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
GeneralInternalEntryCreateComponent.ɵfac = function GeneralInternalEntryCreateComponent_Factory(t) { return new (t || GeneralInternalEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"])); };
GeneralInternalEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalEntryCreateComponent, selectors: [["app-general-internal-entry-create"]], inputs: { systemType: ["system-type", "systemType"], systemGuideline: ["system-guideline", "systemGuideline"], view: "view", entryForm: ["entry-form", "entryForm"], eothers: ["e-others", "eothers"], placeholder: "placeholder", noEdit: ["no-edit", "noEdit"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]])], ngContentSelectors: _c1, decls: 3, vars: 3, consts: [[3, "notified", "message", "finished", 4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [4, "ngIf"], [3, "notified", "message", "finished"], [3, "view-type", "system-type"], [3, "formGroup"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], [1, "btn-submit", 3, "disabled", "click"]], template: function GeneralInternalEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralInternalEntryCreateComponent_app_notification_screen_0_Template, 1, 2, "app-notification-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalEntryCreateComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalEntryCreateComponent_ng_container_2_Template, 6, 8, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_4__["NotificationScreenComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_5__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWVudHJ5LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-entry-create',
                'templateUrl': './general-internal-entry-create.component.html',
                'styleUrls': ['./general-internal-entry-create.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_2__["GeneralInternalEntryChangeService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], systemGuideline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-guideline']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], eothers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['e-others']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "o+TJ":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-entry-update/general-internal-entry-update.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GeneralInternalEntryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalEntryUpdateComponent", function() { return GeneralInternalEntryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _services_others__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/others */ "Bp59");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general-internal-form-input/general-internal-form-input.component */ "qRg5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "Fk62");












function GeneralInternalEntryUpdateComponent_app_notification_screen_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralInternalEntryUpdateComponent_app_notification_screen_0_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r0.notificationAvailable)("message", ctx_r0.notificationMessage);
} }
function GeneralInternalEntryUpdateComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function GeneralInternalEntryUpdateComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Form Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.formMessage, " ");
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function GeneralInternalEntryUpdateComponent_ng_container_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralInternalEntryUpdateComponent_ng_container_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.changeEntry(ctx_r9.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r7.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.isFormValid);
} }
function GeneralInternalEntryUpdateComponent_ng_container_3_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralInternalEntryUpdateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-general-internal-form-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralInternalEntryUpdateComponent_ng_container_3_button_5_Template, 2, 5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralInternalEntryUpdateComponent_ng_container_3_p_6_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("entry-form", ctx_r3.entryForm)("e-others", ctx_r3.eothers)("placeholder", ctx_r3.placeholder)("no-edit", ctx_r3.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted);
} }
const _c1 = function (a2) { return ["../../../", "entry", a2, "detail"]; };
const _c2 = function (a2) { return ["../../../", "entry", a2, "delete"]; };
function GeneralInternalEntryUpdateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r4.entry == null ? null : ctx_r4.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.systemType, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r4.entry == null ? null : ctx_r4.entry.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.systemType, " Delete ");
} }
const _c3 = ["*"];
class GeneralInternalEntryUpdateComponent {
    constructor(giecs, ns) {
        this.giecs = giecs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFormModified = false;
        this.formMessage = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';
        this.isFormProcessing = false;
        this.isFormSubmitted = false;
        this.entryChangesOb = this.giecs.isEntryChanged$
            .subscribe((updated) => {
            if (updated == false) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);
            }
            else if (updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.entryChangesOb != null)
            this.entryChangesOb.unsubscribe();
    }
    confirmChanges(entry, body) {
        Object(_services_others__WEBPACK_IMPORTED_MODULE_1__["checkFormChanges"])(entry, body, this);
        return this.isFormModified;
    }
    changeEntry(body) {
        this.isFormProcessing = true;
        this.confirmChanges(this.entry, body);
        if (this.isFormModified == true) {
            this.isFormSubmitted = true;
            this.processEntry.emit(body);
        }
        else {
            this.isFormProcessing = false;
            false;
        }
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
GeneralInternalEntryUpdateComponent.ɵfac = function GeneralInternalEntryUpdateComponent_Factory(t) { return new (t || GeneralInternalEntryUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_3__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageService"])); };
GeneralInternalEntryUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalEntryUpdateComponent, selectors: [["app-general-internal-entry-update"]], inputs: { systemType: ["system-type", "systemType"], systemGuideline: ["system-guideline", "systemGuideline"], view: "view", entry: "entry", entryForm: ["entry-form", "entryForm"], eothers: ["e-others", "eothers"], placeholder: "placeholder", noEdit: ["no-edit", "noEdit"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageService"]])], ngContentSelectors: _c3, decls: 5, vars: 5, consts: [[3, "notified", "message", "finished", 4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [4, "ngIf"], ["class", "entry-options", 4, "ngIf"], [3, "notified", "message", "finished"], [3, "view-type", "system-type"], [1, "bold"], ["id", "entry-update", 3, "formGroup"], ["id", "entry-detail"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], [1, "btn-submit", 3, "disabled", "click"], [1, "entry-options"], [1, "entry-option", "center", 3, "routerLink"]], template: function GeneralInternalEntryUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralInternalEntryUpdateComponent_app_notification_screen_0_Template, 1, 2, "app-notification-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalEntryUpdateComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalEntryUpdateComponent_p_2_Template, 4, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralInternalEntryUpdateComponent_ng_container_3_Template, 7, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalEntryUpdateComponent_div_4_Template, 7, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFormModified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__["ViewDescriptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalFormInputComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWVudHJ5LXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalEntryUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-entry-update',
                'templateUrl': './general-internal-entry-update.component.html',
                'styleUrls': ['./general-internal-entry-update.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_3__["GeneralInternalEntryChangeService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], systemGuideline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-guideline']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], eothers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['e-others']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "p9l1":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-form-input-validator/general-internal-form-input-validator.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: GeneralInternalFormInputValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalFormInputValidatorComponent", function() { return GeneralInternalFormInputValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name of ", ctx_r4.systemType, " should be provided and cannot be empty ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name of ", ctx_r5.systemType, " cannot be less than 3 characters in length ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name of ", ctx_r6.systemType, " cannot be greater than 150 characters in length ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.name.errors == null ? null : ctx_r3.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.name.errors == null ? null : ctx_r3.name.errors.required) || (ctx_r3.name.errors == null ? null : ctx_r3.name.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.name.errors == null ? null : ctx_r3.name.errors.required) || (ctx_r3.name.errors == null ? null : ctx_r3.name.errors.maxlength));
} }
function GeneralInternalFormInputValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalFormInputValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.name.invalid && (ctx_r0.name.touched || ctx_r0.name.dirty));
} }
function GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r8.systemType, " should be provided and cannot be empty ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r9.systemType, " cannot be greater than specified length ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r10.systemType, " should be available from existing record before it can be considered valid ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.Status);
} }
function GeneralInternalFormInputValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalFormInputValidatorComponent_ng_container_1_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.status.invalid && (ctx_r1.status.touched || ctx_r1.status.dirty));
} }
function GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Description of ", ctx_r12.systemType, " should be provided and cannot be empty ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Description of ", ctx_r13.systemType, " cannot be less than 10 characters in length ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Description of ", ctx_r14.systemType, " cannot be greater than 250 characters in length ");
} }
function GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.description.errors == null ? null : ctx_r11.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.description.errors == null ? null : ctx_r11.description.errors.required) || (ctx_r11.description.errors == null ? null : ctx_r11.description.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.description.errors == null ? null : ctx_r11.description.errors.required) || (ctx_r11.description.errors == null ? null : ctx_r11.description.errors.maxlength));
} }
function GeneralInternalFormInputValidatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalFormInputValidatorComponent_ng_container_2_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.description.invalid && (ctx_r2.description.touched || ctx_r2.description.dirty));
} }
class GeneralInternalFormInputValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralInternalFormInputValidatorComponent.ɵfac = function GeneralInternalFormInputValidatorComponent_Factory(t) { return new (t || GeneralInternalFormInputValidatorComponent)(); };
GeneralInternalFormInputValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalFormInputValidatorComponent, selectors: [["app-general-internal-form-input-validator"]], inputs: { systemType: ["system-type", "systemType"], name: "name", status: "status", description: "description" }, decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function GeneralInternalFormInputValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralInternalFormInputValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalFormInputValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalFormInputValidatorComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWZvcm0taW5wdXQtdmFsaWRhdG9yLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalFormInputValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-form-input-validator',
                'templateUrl': './general-internal-form-input-validator.component.html',
                'styleUrls': ['./general-internal-form-input-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pBQQ":
/*!***************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal.module.ts ***!
  \***************************************************************************/
/*! exports provided: GeneralInternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalModule", function() { return GeneralInternalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _services_general_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/general-services.module */ "kPid");
/* harmony import */ var _general_internal_form_input_validator_general_internal_form_input_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-internal-form-input-validator/general-internal-form-input-validator.component */ "p9l1");
/* harmony import */ var _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-internal-form-input/general-internal-form-input.component */ "qRg5");
/* harmony import */ var _general_internal_entry_create_general_internal_entry_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-internal-entry-create/general-internal-entry-create.component */ "njNi");
/* harmony import */ var _general_internal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-internal.service */ "+maU");
/* harmony import */ var _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _general_internal_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./general-internal-form.service */ "ZVmh");
/* harmony import */ var _general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-internal-entry-detail/general-internal-entry-detail.component */ "hLGb");
/* harmony import */ var _general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general-internal-entry-update/general-internal-entry-update.component */ "o+TJ");
/* harmony import */ var _general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-internal-entry-delete/general-internal-entry-delete.component */ "FL99");

















class GeneralInternalModule {
}
GeneralInternalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralInternalModule });
GeneralInternalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralInternalModule_Factory(t) { return new (t || GeneralInternalModule)(); }, providers: [
        _general_internal_service__WEBPACK_IMPORTED_MODULE_9__["GeneralInternalService"],
        _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_10__["GeneralInternalEntryChangeService"],
        _general_internal_form_service__WEBPACK_IMPORTED_MODULE_11__["GeneralInternalFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
            _services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralInternalModule, { declarations: [_general_internal_form_input_validator_general_internal_form_input_validator_component__WEBPACK_IMPORTED_MODULE_6__["GeneralInternalFormInputValidatorComponent"],
        _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormInputComponent"],
        _general_internal_entry_create_general_internal_entry_create_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryCreateComponent"],
        _general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralInternalEntryDetailComponent"],
        _general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["GeneralInternalEntryUpdateComponent"],
        _general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_14__["GeneralInternalEntryDeleteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
        _services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"]], exports: [_general_internal_entry_create_general_internal_entry_create_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryCreateComponent"],
        _general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralInternalEntryDetailComponent"],
        _general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["GeneralInternalEntryUpdateComponent"],
        _general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_14__["GeneralInternalEntryDeleteComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _general_internal_form_input_validator_general_internal_form_input_validator_component__WEBPACK_IMPORTED_MODULE_6__["GeneralInternalFormInputValidatorComponent"],
                    _general_internal_form_input_general_internal_form_input_component__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormInputComponent"],
                    _general_internal_entry_create_general_internal_entry_create_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryCreateComponent"],
                    _general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralInternalEntryDetailComponent"],
                    _general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["GeneralInternalEntryUpdateComponent"],
                    _general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_14__["GeneralInternalEntryDeleteComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
                    _services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"]
                ],
                providers: [
                    _general_internal_service__WEBPACK_IMPORTED_MODULE_9__["GeneralInternalService"],
                    _general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_10__["GeneralInternalEntryChangeService"],
                    _general_internal_form_service__WEBPACK_IMPORTED_MODULE_11__["GeneralInternalFormService"]
                ],
                exports: [
                    _general_internal_entry_create_general_internal_entry_create_component__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryCreateComponent"],
                    _general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_12__["GeneralInternalEntryDetailComponent"],
                    _general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["GeneralInternalEntryUpdateComponent"],
                    _general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_14__["GeneralInternalEntryDeleteComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qRg5":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-internal/general-internal-form-input/general-internal-form-input.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: GeneralInternalFormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInternalFormInputComponent", function() { return GeneralInternalFormInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_internal_form_input_validator_general_internal_form_input_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-internal-form-input-validator/general-internal-form-input-validator.component */ "p9l1");





function GeneralInternalFormInputComponent_ng_container_1_app_general_internal_form_input_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-internal-form-input-validator", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("name", ctx_r3.name);
} }
function GeneralInternalFormInputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralInternalFormInputComponent_ng_container_1_app_general_internal_form_input_validator_5_Template, 1, 2, "app-general-internal-form-input-validator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.placeholder == null ? null : ctx_r0.placeholder.name)("readOnly", ctx_r0.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.name);
} }
function GeneralInternalFormInputComponent_ng_container_2_app_general_internal_form_input_validator_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-internal-form-input-validator", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r4.systemType)("description", ctx_r4.description);
} }
function GeneralInternalFormInputComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Description * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\t\t\t\t\t\n\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralInternalFormInputComponent_ng_container_2_app_general_internal_form_input_validator_6_Template, 1, 2, "app-general-internal-form-input-validator", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r1.placeholder == null ? null : ctx_r1.placeholder.description)("readOnly", ctx_r1.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.description);
} }
function GeneralInternalFormInputComponent_ng_container_4_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r7.word, " ");
} }
function GeneralInternalFormInputComponent_ng_container_4_app_general_internal_form_input_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-internal-form-input-validator", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r6.systemType)("status", ctx_r6.status);
} }
function GeneralInternalFormInputComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeneralInternalFormInputComponent_ng_container_4_option_6_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GeneralInternalFormInputComponent_ng_container_4_app_general_internal_form_input_validator_7_Template, 1, 2, "app-general-internal-form-input-validator", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r2.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.eothers.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.status);
} }
const _c0 = ["*"];
class GeneralInternalFormInputComponent {
    constructor() {
    }
    ngOnInit() {
    }
    get name() {
        return this.entryForm.get('name');
    }
    get description() {
        return this.entryForm.get('description');
    }
    get status() {
        return this.entryForm.get('status');
    }
}
GeneralInternalFormInputComponent.ɵfac = function GeneralInternalFormInputComponent_Factory(t) { return new (t || GeneralInternalFormInputComponent)(); };
GeneralInternalFormInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralInternalFormInputComponent, selectors: [["app-general-internal-form-input"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], eothers: ["e-others", "eothers"], placeholder: "placeholder", noEdit: ["no-edit", "noEdit"] }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[3, "formGroup"], [4, "ngIf"], [1, "form-group"], ["for", "name", 1, "form-label", "bold"], ["type", "text", "id", "name", "required", "required", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder", "readOnly"], [3, "system-type", "name", 4, "ngIf"], [3, "system-type", "name"], ["for", "description", 1, "form-label", "bold"], ["id", "description", "name", "description", "required", "required", "formControlName", "description", 1, "form-control", "form-textarea", 3, "placeholder", "readOnly"], [3, "system-type", "description", 4, "ngIf"], [3, "system-type", "description"], ["for", "status", 1, "form-label", "bold"], ["name", "status", "id", "status", "required", "required", "formControlName", "status", 1, "form-control", 3, "readOnly"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "status", 4, "ngIf"], [3, "system-type", "status"]], template: function GeneralInternalFormInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralInternalFormInputComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralInternalFormInputComponent_ng_container_2_Template, 7, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralInternalFormInputComponent_ng_container_4_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status && ctx.eothers && ctx.eothers.Status && ctx.eothers.Status.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _general_internal_form_input_validator_general_internal_form_input_validator_component__WEBPACK_IMPORTED_MODULE_3__["GeneralInternalFormInputValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWludGVybmFsLWZvcm0taW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralInternalFormInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-internal-form-input',
                'templateUrl': './general-internal-form-input.component.html',
                'styleUrls': ['./general-internal-form-input.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], eothers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['e-others']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['no-edit']
        }] }); })();


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


/***/ })

};;
//# sourceMappingURL=commons-department-department-module~commons-request-type-request-type-module~internal-one-module-co~7a8af396.js.map