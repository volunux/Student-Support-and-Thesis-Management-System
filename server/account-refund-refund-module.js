exports.ids = ["account-refund-refund-module"];
exports.modules = {

/***/ "3Rxy":
/*!*******************************************************!*\
  !*** ./src/app/account/refund/refund-form.service.ts ***!
  \*******************************************************/
/*! exports provided: RefundFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundFormService", function() { return RefundFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/form-validators.service */ "inDW");
/* harmony import */ var _shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dynamic-control-validator */ "tTBu");






class RefundFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.permanentProps = {
            'status': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)]
        };
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
            'status': ['', { 'validators': [...this.getPermanentProp('status')] }],
            'stage': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)] }]
        });
        return form;
    }
    createPermanent(datas, form) {
        for (let $prop in datas) {
            let propVal = $prop.toLowerCase();
            this.permanentData[propVal] = datas[$prop];
            form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal], Object(_shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_3__["dynamicDataValidator"])(this.getMyData(propVal), $prop)]) : null;
            form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
        }
        form.updateValueAndValidity();
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
    getPermanentProp(prop) {
        return this.permanentProps[prop];
    }
    searchForm(searchFilters) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__["searchValidator"])(searchFilters)]);
    }
}
RefundFormService.ɵfac = function RefundFormService_Factory(t) { return new (t || RefundFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RefundFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefundFormService, factory: RefundFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Ap3b":
/*!*******************************************************************!*\
  !*** ./src/app/account/refund/stage-four/stage-four.component.ts ***!
  \*******************************************************************/
/*! exports provided: StageFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageFourComponent", function() { return StageFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-update-validator/request-entry-update-validator.component */ "yHSd");





function StageFourComponent_ng_container_0_div_4_app_request_entry_update_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-update-validator", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("text", ctx_r2.text);
} }
function StageFourComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StageFourComponent_ng_container_0_div_4_app_request_entry_update_validator_5_Template, 1, 2, "app-request-entry-update-validator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.text);
} }
function StageFourComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StageFourComponent_ng_container_0_div_4_Template, 6, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " By clicking on the \"Submit\" button , You are agreeing to sign and endorse the student application letter which will be forwarded to the destinated office for resolution on the subject matter \"Refund of Fees\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.text);
} }
class StageFourComponent {
    constructor() {
    }
    ngOnInit() {
        this.entryForm.patchValue({ 'stage': this.currentStage, 'status': this.entry.other_status_id });
    }
    get text() {
        return this.entryForm.get('text');
    }
}
StageFourComponent.ɵfac = function StageFourComponent_Factory(t) { return new (t || StageFourComponent)(); };
StageFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StageFourComponent, selectors: [["app-stage-four"]], inputs: { entry: "entry", systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], currentStage: ["current-stage", "currentStage"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "bold"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "formControlName", "text"], [3, "system-type", "text", 4, "ngIf"], [3, "system-type", "text"]], template: function StageFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StageFourComponent_ng_container_0_Template, 9, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_3__["RequestEntryUpdateValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFnZS1mb3VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StageFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-stage-four',
                'templateUrl': './stage-four.component.html',
                'styleUrls': ['./stage-four.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], currentStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['current-stage']
        }] }); })();


/***/ }),

/***/ "C3i+":
/*!*****************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-timeline/refund-entry-timeline.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RefundEntryTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryTimelineComponent", function() { return RefundEntryTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../roles */ "UNsx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_request_entry_request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-status/request-entry-status.component */ "P2jk");
/* harmony import */ var _shared_pipes_replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipes/replace-line-break.pipe */ "2Cyu");














function RefundEntryTimelineComponent_app_view_description_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function RefundEntryTimelineComponent_app_resource_unavailable_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function RefundEntryTimelineComponent_app_request_entry_status_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-status", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry", ctx_r2.entry);
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8 == null ? null : comment_r8.author.full_name, " ");
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Anonymous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_11_Template(rf, ctx) { if (rf & 1) {
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
const _c0 = function (a0, a2, a4) { return [a0, "entry", a2, "comment", a4, "reply", "add"]; };
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r18.isAdmin, ctx_r18.entry == null ? null : ctx_r18.entry.slug, comment_r8 == null ? null : comment_r8.slug));
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_ng_container_1_Template, 3, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const comment_r8 = ctx_r20.$implicit;
    const i_r9 = ctx_r20.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (comment_r8.replies == null || (comment_r8 == null ? null : comment_r8.replies.length) < 1) && i_r9 != 0);
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
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
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author : ", reply_r22 == null ? null : reply_r22.author.full_name, " ");
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Anonymous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "replaceLineBreak");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reply_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message : ", (reply_r22 == null ? null : reply_r22.comment_author_name) ? "@" + (reply_r22 == null ? null : reply_r22.comment_author_name.split(" ").join("")) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, reply_r22 == null ? null : reply_r22.text), " ");
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_2_Template, 7, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_3_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_template_4_Template, 4, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_ng_container_6_Template, 6, 4, "ng-container", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r22 == null ? null : reply_r22.text);
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_ng_container_2_Template, 7, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r8 == null ? null : comment_r8.replies);
} }
function RefundEntryTimelineComponent_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_8_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_template_9_Template, 4, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_11_Template, 5, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_12_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RefundEntryTimelineComponent_ng_container_7_ng_container_4_ng_container_13_Template, 3, 1, "ng-container", 17);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (comment_r8 == null ? null : comment_r8.replies) != null && (comment_r8 == null ? null : comment_r8.replies == null ? null : comment_r8.replies.length) != 0);
} }
function RefundEntryTimelineComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryTimelineComponent_ng_container_7_ng_container_4_Template, 14, 10, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.comments);
} }
function RefundEntryTimelineComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comments entries not available for this entry. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a2) { return [a0, "entry", a2, "comment", "add"]; };
function RefundEntryTimelineComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add a Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx_r35.isAdmin, ctx_r35.entry == null ? null : ctx_r35.entry.slug));
} }
const _c2 = function (a0, a2) { return [a0, "entry", a2, "detail"]; };
function RefundEntryTimelineComponent_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, ctx_r36.isAdmin, ctx_r36.entry == null ? null : ctx_r36.entry.slug));
} }
function RefundEntryTimelineComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryTimelineComponent_div_10_ng_container_1_Template, 3, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryTimelineComponent_div_10_ng_container_2_Template, 3, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.entry == null ? null : ctx_r6.entry.status) == "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.view);
} }
class RefundEntryTimelineComponent {
    constructor(router, route, rfs, ems, aus) {
        this.router = router;
        this.route = route;
        this.rfs = rfs;
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
        this.rfs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            this.eslug = $e;
            return this.rfs.getTimeline($e);
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
            return '/refund';
        return '/refund';
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_3__["canUpdate"].indexOf(this.userRole) > -1;
    }
}
RefundEntryTimelineComponent.ɵfac = function RefundEntryTimelineComponent_Factory(t) { return new (t || RefundEntryTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_5__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
RefundEntryTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryTimelineComponent, selectors: [["app-refund-entry-timeline"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 11, vars: 6, consts: [["id", "general-timeline"], ["id", "general-entry-details"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "system-type", "entry", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noComments", ""], ["id", "entry-detail-options", 4, "ngIf"], [3, "view-type", "system-type"], [3, "error"], [3, "system-type", "entry"], [1, "comments"], [4, "ngFor", "ngForOf"], [1, "comment"], [1, "bold"], [1, "timestamp"], ["anonymousTemplate", ""], [4, "ngIf"], [1, "author"], [1, "text"], [1, "reply-add", 3, "id", "routerLink"], [1, "replies"], [1, "reply"], ["anonymousTemplate1", ""], ["id", "entry-detail-options"], [1, "center", 3, "routerLink"]], template: function RefundEntryTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Request Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryTimelineComponent_app_view_description_4_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryTimelineComponent_app_resource_unavailable_5_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntryTimelineComponent_app_request_entry_status_6_Template, 1, 2, "app-request-entry-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RefundEntryTimelineComponent_ng_container_7_Template, 5, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RefundEntryTimelineComponent_ng_template_8_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RefundEntryTimelineComponent_div_10_Template, 3, 2, "div", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _shared_component_request_entry_request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_10__["RequestEntryStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _shared_pipes_replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_11__["ReplaceLineBreakPipe"]], styles: [".comment[_ngcontent-%COMP%] {\r\n\r\n\tborder-bottom : 1px solid lightblue;\r\n\tpadding : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]:hover {\r\n\r\n\tbackground-color : #fdfdfd;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em !important;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\r\n\r\n\tfont-style : italic;\r\n\tmargin-left : 2em;\r\n\tfont-size : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 11px;\r\n\tmargin-right : 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 12px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   a.reply-add[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 11px;\r\n\tbackground-color : #290140;\r\n\tcolor : #a0a7a0;\r\n\tpadding : 5px 15px;\r\n\tborder-radius : 6px;\r\n\tborder : 1.5px solid #ac4bd8;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   a.reply-add[_ngcontent-%COMP%]:hover {\r\n\r\n\tcolor : #fff;\r\n\tbackground-color : #210140;\r\n}\r\n\r\n.replies[_ngcontent-%COMP%] {\r\n\r\n\tmargin-left : 30px;\r\n}\r\n\r\n.reply[_ngcontent-%COMP%] {\r\n\r\n\tmargin-top : 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnVuZC1lbnRyeS10aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLG1DQUFtQztDQUNuQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLDhCQUE4QjtBQUMvQjs7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtBQUM3Qjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoicmVmdW5kLWVudHJ5LXRpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudCB7XHJcblxyXG5cdGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG5cdHBhZGRpbmcgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudDpob3ZlciB7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjZmRmZGZkO1xyXG59XHJcblxyXG4uY29tbWVudCBwIHtcclxuXHJcblx0bGluZS1oZWlnaHQgOiAyLjBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29tbWVudCAudGltZXN0YW1wIHtcclxuXHJcblx0Zm9udC1zdHlsZSA6IGl0YWxpYztcclxuXHRtYXJnaW4tbGVmdCA6IDJlbTtcclxuXHRmb250LXNpemUgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCBiIHtcclxuXHJcblx0Zm9udC1zaXplIDogMTFweDtcclxuXHRtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCBwLnRleHQge1xyXG5cclxuXHRmb250LXNpemUgOiAxMnB4O1xyXG59XHJcblxyXG4uY29tbWVudCBhLnJlcGx5LWFkZCB7XHJcblxyXG5cdGZvbnQtc2l6ZSA6IDExcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvciA6ICMyOTAxNDA7XHJcblx0Y29sb3IgOiAjYTBhN2EwO1xyXG5cdHBhZGRpbmcgOiA1cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzIDogNnB4O1xyXG5cdGJvcmRlciA6IDEuNXB4IHNvbGlkICNhYzRiZDg7XHJcbn1cclxuXHJcbi5jb21tZW50IGEucmVwbHktYWRkOmhvdmVyIHtcclxuXHJcblx0Y29sb3IgOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjMjEwMTQwO1xyXG59XHJcblxyXG4ucmVwbGllcyB7XHJcblxyXG5cdG1hcmdpbi1sZWZ0IDogMzBweDtcclxufVxyXG5cclxuLnJlcGx5IHtcclxuXHJcblx0bWFyZ2luLXRvcCA6IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-timeline',
                'templateUrl': './refund-entry-timeline.component.html',
                'styleUrls': ['./refund-entry-timeline.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_5__["RefundService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "JEGY":
/*!*************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-detail/refund-entry-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RefundEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryDetailComponent", function() { return RefundEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles */ "UNsx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _refund_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../refund-form.service */ "3Rxy");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-detail/request-entry-detail.component */ "013A");
/* harmony import */ var _shared_component_request_entry_request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-student-detail/request-entry-student-detail.component */ "ujQ7");
/* harmony import */ var _refund_entry_user_signature_refund_entry_user_signature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../refund-entry-user-signature/refund-entry-user-signature.component */ "ddX1");
/* harmony import */ var _refund_entry_option_refund_entry_option_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../refund-entry-option/refund-entry-option.component */ "W9GL");
/* harmony import */ var _shared_module_simples_file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/module/simples/file-attachments-two/file-attachments-two.component */ "6hA3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _stage_one_two_five_stage_one_two_five_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../stage-one-two-five/stage-one-two-five.component */ "vBaO");
/* harmony import */ var _stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../stage-four/stage-four.component */ "Ap3b");
























function RefundEntryDetailComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " Entry ");
} }
function RefundEntryDetailComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function RefundEntryDetailComponent_app_resource_unavailable_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function RefundEntryDetailComponent_app_notification_screen_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function RefundEntryDetailComponent_app_notification_screen_4_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r3.notificationAvailable)("message", ctx_r3.notificationMessage);
} }
function RefundEntryDetailComponent_div_5_app_request_entry_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-detail", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r7.entry);
} }
function RefundEntryDetailComponent_div_5_app_request_entry_student_detail_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-student-detail", 12);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r8.entry);
} }
function RefundEntryDetailComponent_div_5_app_refund_entry_user_signature_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-refund-entry-user-signature", 12);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r9.entry);
} }
function RefundEntryDetailComponent_div_5_app_refund_entry_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-refund-entry-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReviewEntry", function RefundEntryDetailComponent_div_5_app_refund_entry_option_4_Template_app_refund_entry_option_onReviewEntry_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.$confirmEntryOnReview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r10.view)("link", ctx_r10.link)("entry", ctx_r10.entry)("system-type", ctx_r10.systemType);
} }
function RefundEntryDetailComponent_div_5_app_file_attachments_two_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-file-attachments-two", 12);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r11.entry);
} }
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r22.otherCol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r24.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r24.isFormValid);
} }
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stage-one-two-five", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_button_2_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_p_3_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r21.entry)("entry-other", ctx_r21.eother)("entry-form", ctx_r21.entryForm)("current-stage", ctx_r21.currentStage)("system-type", ctx_r21.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.isFormSubmitted);
} }
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_a_3_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.updateEntry(ctx_r26.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_ng_container_5_Template, 4, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.isOtherColAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r19.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.eother != null);
} }
function RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.canUpdateEntry);
} }
function RefundEntryDetailComponent_div_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.entry == null ? null : ctx_r12.entry.stage._id) == 1 && ((ctx_r12.entry == null ? null : ctx_r12.entry.status) != "Rejected" && (ctx_r12.entry == null ? null : ctx_r12.entry.status) != "Fulfilled"));
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r32.otherCol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r34.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r34.isFormValid);
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stage-one-two-five", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_button_2_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_p_3_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r31.entry)("entry-other", ctx_r31.eother)("entry-form", ctx_r31.entryForm)("current-stage", ctx_r31.currentStage)("system-type", ctx_r31.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isFormSubmitted);
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_a_3_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r36.updateEntry(ctx_r36.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_ng_container_5_Template, 4, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r29.isOtherColAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r29.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.eother != null);
} }
function RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.canUpdateEntry2);
} }
function RefundEntryDetailComponent_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.entry == null ? null : ctx_r13.entry.stage._id) == 2 && ((ctx_r13.entry == null ? null : ctx_r13.entry.status) != "Rejected" && (ctx_r13.entry == null ? null : ctx_r13.entry.status) != "Fulfilled"));
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_app_stage_four_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stage-four", 26);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r46.entry)("entry-form", ctx_r46.entryForm)("current-stage", ctx_r46.currentStage)("system-type", ctx_r46.systemType);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign & Endorse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r47.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r47.isFormValid);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r49.updateEntry(ctx_r49.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_app_stage_four_3_Template, 1, 4, "app-stage-four", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_button_4_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_p_5_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r45.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.isFormSubmitted);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sign_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sign_r44._id != ctx_r43.userId);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.entry == null ? null : ctx_r42.entry.signature);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r39.entry == null ? null : ctx_r39.entry.signature.length) < 2);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_app_stage_four_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stage-four", 26);
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r51.entry)("entry-form", ctx_r51.entryForm)("current-stage", ctx_r51.currentStage)("system-type", ctx_r51.systemType);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign & Endorse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r52.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r52.isFormValid);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r54.updateEntry(ctx_r54.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_app_stage_four_2_Template, 1, 4, "app-stage-four", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_button_3_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_p_4_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r41.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r41.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.isFormSubmitted);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r38.entry == null ? null : ctx_r38.entry.signature) != null && (ctx_r38.entry == null ? null : ctx_r38.entry.signature.length) > 0)("ngIfElse", _r40);
} }
function RefundEntryDetailComponent_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_8_ng_container_1_Template, 4, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.canUpdateEntry4);
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r60.otherCol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r62.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r62.isFormValid);
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stage-one-two-five", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_button_2_Template, 2, 5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_p_3_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r59.entry)("entry-form", ctx_r59.entryForm)("entry-other", ctx_r59.eother)("current-stage", ctx_r59.currentStage)("system-type", ctx_r59.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r59.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.isFormSubmitted);
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_a_3_Template, 2, 0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r64.updateEntry(ctx_r64.entryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_ng_container_5_Template, 4, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r57.isOtherColAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r57.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.eother != null);
} }
function RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.canUpdateEntry5);
} }
function RefundEntryDetailComponent_div_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.entry == null ? null : ctx_r15.entry.stage._id) == 5 && ((ctx_r15.entry == null ? null : ctx_r15.entry.status) != "Rejected" && (ctx_r15.entry == null ? null : ctx_r15.entry.status) != "Fulfilled"));
} }
function RefundEntryDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_div_5_app_request_entry_detail_1_Template, 1, 1, "app-request-entry-detail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_div_5_app_request_entry_student_detail_2_Template, 1, 1, "app-request-entry-student-detail", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_div_5_app_refund_entry_user_signature_3_Template, 1, 1, "app-refund-entry-user-signature", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryDetailComponent_div_5_app_refund_entry_option_4_Template, 1, 4, "app-refund-entry-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_app_file_attachments_two_5_Template, 1, 1, "app-file-attachments-two", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntryDetailComponent_div_5_ng_container_6_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RefundEntryDetailComponent_div_5_ng_container_7_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RefundEntryDetailComponent_div_5_ng_container_8_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RefundEntryDetailComponent_div_5_ng_container_9_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.entry == null ? null : ctx_r4.entry.stage) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.entry == null ? null : ctx_r4.entry.stage) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.entry == null ? null : ctx_r4.entry.stage);
} }
class RefundEntryDetailComponent {
    constructor(router, route, rfs, ns, rffs, ems, aus) {
        this.router = router;
        this.route = route;
        this.rfs = rfs;
        this.ns = ns;
        this.rffs = rffs;
        this.ems = ems;
        this.aus = aus;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.isOtherColAvailable = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.detail.systemType;
        this.title = data.detail.title;
        this.view = data.detail.view;
        this.viewWord = data.detail.viewWord;
        this.link = data.detail.link;
        this.rfs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            this.eslug = $e;
            return this.rfs.getEntry($e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null) {
                this.entry = result;
                this.entryForm = this.rffs.entryUpdateForm();
                if (this.entry.stage != null && this.entry.stage._id == 1) {
                    this.currentStage = 2;
                }
                else if (this.entry.stage != null && this.entry.stage._id == 2) {
                    this.currentStage = 3;
                }
                else if (this.entry.stage != null && this.entry.stage._id == 4) {
                    this.currentStage = 5;
                }
                else if (this.entry.stage != null && this.entry.stage._id == 5) {
                    this.currentStage = 6;
                }
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    updateEntry(body) {
        this.isError = false;
        this.isError = false;
        this.error = null;
        this.isFormProcessing = true;
        this.isFormSubmitted = true;
        this.rfs.updateEntry$(this.eslug, body)
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.updated == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);
                return this.entryChanges(result.$data);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate([this.link, 'entries']);
        }, 5000);
    }
    $confirmEntryOnReview(result) {
        if (this.entry != null) {
            this.entry.status = result.status;
            this.entry.stage = { '_id': 1 };
            this.currentStage = 2;
        }
    }
    otherCol() {
        this.rfs.status()
            .subscribe((result) => {
            if (result != null) {
                this.isOtherColAvailable = true;
                this.eother = { 'Status': result.Status };
                this.rffs.createPermanent(this.eother, this.entryForm);
            }
        });
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
    get canUpdateEntry2() {
        return ['bursar'].indexOf(this.userRole) > -1;
    }
    get canUpdateEntry4() {
        return ['hod', 'dean'].indexOf(this.userRole) > -1;
    }
    get canUpdateEntry5() {
        return ['bursar'].indexOf(this.userRole) > -1;
    }
    get userId() {
        return this.aus.userId;
    }
    get isFormValid() {
        return this.entryForm.valid;
    }
    removeNotification() {
        this.ns.removeNotification();
    }
}
RefundEntryDetailComponent.ɵfac = function RefundEntryDetailComponent_Factory(t) { return new (t || RefundEntryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_6__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_form_service__WEBPACK_IMPORTED_MODULE_7__["RefundFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"])); };
RefundEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryDetailComponent, selectors: [["app-refund-entry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "entry-view"], [4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "request-entry-detail", 4, "ngIf"], [3, "system-type", "view-type"], [3, "error"], [3, "notified", "message", "finished"], ["id", "request-entry-detail"], [3, "entry", 4, "ngIf"], [3, "view", "link", "entry", "system-type", "onReviewEntry", 4, "ngIf"], [3, "entry"], [3, "view", "link", "entry", "system-type", "onReviewEntry"], ["id", "entry-detail-form"], ["id", "entry-detail-options"], ["class", "center", 3, "click", 4, "ngIf"], ["method", "post", 3, "formGroup", "ngSubmit"], [1, "center", 3, "click"], [3, "entry", "entry-other", "entry-form", "current-stage", "system-type"], ["type", "submit", "class", "btn-submit", 3, "class", "disabled", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["noSignature", ""], [4, "ngFor", "ngForOf"], [3, "entry", "entry-form", "current-stage", "system-type", 4, "ngIf"], [3, "entry", "entry-form", "current-stage", "system-type"], [3, "entry", "entry-form", "entry-other", "current-stage", "system-type"]], template: function RefundEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryDetailComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryDetailComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryDetailComponent_app_resource_unavailable_3_Template, 1, 1, "app-resource-unavailable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryDetailComponent_app_notification_screen_4_Template, 1, 2, "app-notification-screen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryDetailComponent_div_5_Template, 10, 9, "div", 5);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_10__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_11__["ResourceUnavailableComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__["NotificationScreenComponent"], _shared_component_request_entry_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_13__["RequestEntryDetailComponent"], _shared_component_request_entry_request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_14__["RequestEntryStudentDetailComponent"], _refund_entry_user_signature_refund_entry_user_signature_component__WEBPACK_IMPORTED_MODULE_15__["RefundEntryUserSignatureComponent"], _refund_entry_option_refund_entry_option_component__WEBPACK_IMPORTED_MODULE_16__["RefundEntryOptionComponent"], _shared_module_simples_file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_17__["FileAttachmentsTwoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], _stage_one_two_five_stage_one_two_five_component__WEBPACK_IMPORTED_MODULE_19__["StageOneTwoFiveComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_20__["StageFourComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-detail',
                'templateUrl': './refund-entry-detail.component.html',
                'styleUrls': ['./refund-entry-detail.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_6__["RefundService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _refund_form_service__WEBPACK_IMPORTED_MODULE_7__["RefundFormService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "JNdk":
/*!*************************************************!*\
  !*** ./src/app/account/refund/refund.module.ts ***!
  \*************************************************/
/*! exports provided: RefundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundModule", function() { return RefundModule; });
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
/* harmony import */ var _refund_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refund-routing.module */ "flkl");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./refund.service */ "jNIn");
/* harmony import */ var _refund_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./refund-form.service */ "3Rxy");
/* harmony import */ var _stage_one_two_five_stage_one_two_five_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stage-one-two-five/stage-one-two-five.component */ "vBaO");
/* harmony import */ var _stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stage-four/stage-four.component */ "Ap3b");
/* harmony import */ var _refund_entries_refund_entries_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refund-entries/refund-entries.component */ "Xf1P");
/* harmony import */ var _refund_dashboard_refund_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refund-dashboard/refund-dashboard.component */ "RJ2o");
/* harmony import */ var _refund_create_comment_refund_create_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refund-create-comment/refund-create-comment.component */ "x7Ji");
/* harmony import */ var _refund_create_reply_refund_create_reply_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refund-create-reply/refund-create-reply.component */ "hJ4f");
/* harmony import */ var _refund_entry_timeline_refund_entry_timeline_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./refund-entry-timeline/refund-entry-timeline.component */ "C3i+");
/* harmony import */ var _refund_entry_delete_all_refund_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./refund-entry-delete-all/refund-entry-delete-all.component */ "OQNd");
/* harmony import */ var _refund_entry_detail_refund_entry_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./refund-entry-detail/refund-entry-detail.component */ "JEGY");
/* harmony import */ var _refund_homepage_refund_homepage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./refund-homepage/refund-homepage.component */ "yoA/");
/* harmony import */ var _refund_entry_user_signature_refund_entry_user_signature_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./refund-entry-user-signature/refund-entry-user-signature.component */ "ddX1");
/* harmony import */ var _refund_entry_option_refund_entry_option_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./refund-entry-option/refund-entry-option.component */ "W9GL");



























class RefundModule {
}
RefundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundModule });
RefundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundModule_Factory(t) { return new (t || RefundModule)(); }, providers: [
        _refund_service__WEBPACK_IMPORTED_MODULE_12__["RefundService"],
        _refund_form_service__WEBPACK_IMPORTED_MODULE_13__["RefundFormService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
            _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
            _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
            _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
            _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
            _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"],
            _refund_routing_module__WEBPACK_IMPORTED_MODULE_11__["RefundRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundModule, { declarations: [_refund_entries_refund_entries_component__WEBPACK_IMPORTED_MODULE_16__["RefundEntriesComponent"],
        _stage_one_two_five_stage_one_two_five_component__WEBPACK_IMPORTED_MODULE_14__["StageOneTwoFiveComponent"],
        _stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_15__["StageFourComponent"],
        _refund_dashboard_refund_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["RefundDashboardComponent"],
        _refund_create_comment_refund_create_comment_component__WEBPACK_IMPORTED_MODULE_18__["RefundCreateCommentComponent"],
        _refund_create_reply_refund_create_reply_component__WEBPACK_IMPORTED_MODULE_19__["RefundCreateReplyComponent"],
        _refund_entry_timeline_refund_entry_timeline_component__WEBPACK_IMPORTED_MODULE_20__["RefundEntryTimelineComponent"],
        _refund_entry_delete_all_refund_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__["RefundEntryDeleteAllComponent"],
        _refund_entry_detail_refund_entry_detail_component__WEBPACK_IMPORTED_MODULE_22__["RefundEntryDetailComponent"],
        _refund_homepage_refund_homepage_component__WEBPACK_IMPORTED_MODULE_23__["RefundHomepageComponent"],
        _refund_entry_user_signature_refund_entry_user_signature_component__WEBPACK_IMPORTED_MODULE_24__["RefundEntryUserSignatureComponent"],
        _refund_entry_option_refund_entry_option_component__WEBPACK_IMPORTED_MODULE_25__["RefundEntryOptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
        _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
        _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
        _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
        _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
        _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
        _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"],
        _refund_routing_module__WEBPACK_IMPORTED_MODULE_11__["RefundRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _refund_entries_refund_entries_component__WEBPACK_IMPORTED_MODULE_16__["RefundEntriesComponent"],
                    _stage_one_two_five_stage_one_two_five_component__WEBPACK_IMPORTED_MODULE_14__["StageOneTwoFiveComponent"],
                    _stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_15__["StageFourComponent"],
                    _refund_dashboard_refund_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["RefundDashboardComponent"],
                    _refund_create_comment_refund_create_comment_component__WEBPACK_IMPORTED_MODULE_18__["RefundCreateCommentComponent"],
                    _refund_create_reply_refund_create_reply_component__WEBPACK_IMPORTED_MODULE_19__["RefundCreateReplyComponent"],
                    _refund_entry_timeline_refund_entry_timeline_component__WEBPACK_IMPORTED_MODULE_20__["RefundEntryTimelineComponent"],
                    _refund_entry_delete_all_refund_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_21__["RefundEntryDeleteAllComponent"],
                    _refund_entry_detail_refund_entry_detail_component__WEBPACK_IMPORTED_MODULE_22__["RefundEntryDetailComponent"],
                    _refund_homepage_refund_homepage_component__WEBPACK_IMPORTED_MODULE_23__["RefundHomepageComponent"],
                    _refund_entry_user_signature_refund_entry_user_signature_component__WEBPACK_IMPORTED_MODULE_24__["RefundEntryUserSignatureComponent"],
                    _refund_entry_option_refund_entry_option_component__WEBPACK_IMPORTED_MODULE_25__["RefundEntryOptionComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"],
                    _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_9__["GeneralAllModule"],
                    _shared_component_request_entry_request_entry_module__WEBPACK_IMPORTED_MODULE_6__["RequestEntryModule"],
                    _shared_component_comment_comment_module__WEBPACK_IMPORTED_MODULE_7__["CommentModule"],
                    _shared_component_reply_reply_module__WEBPACK_IMPORTED_MODULE_8__["ReplyModule"],
                    _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_4__["SimplesModule"],
                    _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_10__["GeneralServicesModule"],
                    _refund_routing_module__WEBPACK_IMPORTED_MODULE_11__["RefundRoutingModule"]
                ],
                providers: [
                    _refund_service__WEBPACK_IMPORTED_MODULE_12__["RefundService"],
                    _refund_form_service__WEBPACK_IMPORTED_MODULE_13__["RefundFormService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OQNd":
/*!*********************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-delete-all/refund-entry-delete-all.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RefundEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryDeleteAllComponent", function() { return RefundEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module/general-all/general-all-entry-delete-all/general-all-entry-delete-all.component */ "ku54");





function RefundEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-all-entry-delete-all", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r0.systemType)("view-word", ctx_r0.viewWord)("view", ctx_r0.view)("title", ctx_r0.title)("link", ctx_r0.link)("$link", ctx_r0.$link);
} }
class RefundEntryDeleteAllComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.deleteAll.systemType;
        this.viewWord = data.deleteAll.viewWord;
        this.title = data.deleteAll.title;
        this.view = data.deleteAll.view;
        this.link = data.deleteAll.link;
        this.$link = data.deleteAll.$link;
    }
}
RefundEntryDeleteAllComponent.ɵfac = function RefundEntryDeleteAllComponent_Factory(t) { return new (t || RefundEntryDeleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RefundEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryDeleteAllComponent, selectors: [["app-refund-entry-delete-all"]], decls: 1, vars: 1, consts: [[3, "system-type", "view-word", "view", "title", "link", "$link", 4, "ngIf"], [3, "system-type", "view-word", "view", "title", "link", "$link"]], template: function RefundEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RefundEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template, 1, 6, "app-general-all-entry-delete-all", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__["GeneralAllEntryDeleteAllComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktZGVsZXRlLWFsbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-delete-all',
                'templateUrl': './refund-entry-delete-all.component.html',
                'styleUrls': ['./refund-entry-delete-all.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "RJ2o":
/*!*******************************************************************************!*\
  !*** ./src/app/account/refund/refund-dashboard/refund-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RefundDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundDashboardComponent", function() { return RefundDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");






function RefundDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RefundDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
const _c0 = function () { return ["entry", "create"]; };
function RefundDashboardComponent_div_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Create ", ctx_r3.systemType, " Entry ");
} }
const _c1 = function () { return ["entry", "delete", "all"]; };
function RefundDashboardComponent_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Delete All ", ctx_r4.systemType, " Entry ");
} }
const _c2 = function () { return ["entries"]; };
const _c3 = function () { return ["/account", "profile"]; };
function RefundDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundDashboardComponent_div_2_li_5_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundDashboardComponent_div_2_li_6_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Manage ", ctx_r2.systemType, " Entry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.canCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.canDeleteAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
} }
class RefundDashboardComponent {
    constructor(route, auth) {
        this.route = route;
        this.auth = auth;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.dashboard.systemType;
        this.title = data.dashboard.title;
        this.view = data.dashboard.view;
    }
    get canCreate() {
        return ['student', 'departmentPresident', 'facultyPresident'].indexOf(this.auth.userRole) > -1;
    }
    get canDeleteAll() {
        return this.auth.isSuperAdministrator;
    }
}
RefundDashboardComponent.ɵfac = function RefundDashboardComponent_Factory(t) { return new (t || RefundDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
RefundDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundDashboardComponent, selectors: [["app-refund-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "view-type", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "view-type"], ["id", "dashboard"], [1, "center", 3, "routerLink"]], template: function RefundDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RefundDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundDashboardComponent_app_view_description_1_Template, 1, 1, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundDashboardComponent_div_2_Template, 10, 7, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__["ViewDescriptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-dashboard',
                'templateUrl': './refund-dashboard.component.html',
                'styleUrls': ['./refund-dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "UNsx":
/*!*****************************************!*\
  !*** ./src/app/account/refund/roles.ts ***!
  \*****************************************/
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

/***/ "W9GL":
/*!*************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-option/refund-entry-option.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RefundEntryOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryOptionComponent", function() { return RefundEntryOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roles */ "UNsx");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");










function RefundEntryOptionComponent_ng_container_0_app_notification_screen_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function RefundEntryOptionComponent_ng_container_0_app_notification_screen_2_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
const _c0 = function (a0, a2) { return [a0, "entry", a2, "timeline"]; };
function RefundEntryOptionComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r2.isAdmin, ctx_r2.entry == null ? null : ctx_r2.entry.slug));
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryOptionComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.writeLetter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Write Letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryOptionComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.canUpdateEntry3);
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryOptionComponent_ng_container_0_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.entry == null ? null : ctx_r3.entry.stage._id) == 3);
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryOptionComponent_ng_container_0_ng_container_5_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.setEntryOnReview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Set Application on Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your request is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryOptionComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryOptionComponent_ng_container_0_ng_container_5_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.canUpdateEntry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isProcessingReview);
} }
function RefundEntryOptionComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntryOptionComponent_ng_container_0_ng_container_6_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.viewLetter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Application Letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c1 = function (a0, a2) { return [a0, "entry", a2, "comment", "add"]; };
function RefundEntryOptionComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add a Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx_r6.isAdmin, ctx_r6.entry == null ? null : ctx_r6.entry.slug));
} }
function RefundEntryOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryOptionComponent_ng_container_0_app_notification_screen_2_Template, 1, 2, "app-notification-screen", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryOptionComponent_ng_container_0_ng_container_3_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RefundEntryOptionComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntryOptionComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntryOptionComponent_ng_container_0_ng_container_6_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RefundEntryOptionComponent_ng_container_0_ng_container_7_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.notificationAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.status) != "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.stage) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.status) == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.status) == "Review");
} }
class RefundEntryOptionComponent {
    constructor(route, router, auth, rs, ns) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.rs = rs;
        this.ns = ns;
        this.onReviewEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isProcessingReview = false;
        this.isLazyLoading = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        clearTimeout(this.writeLetterT);
        clearTimeout(this.viewLetterT);
    }
    setEntryOnReview(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isProcessingReview != true) {
            this.isProcessingReview = true;
            this.rs.confirmEntryOnReview$(this.entry.slug)
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
    writeLetter() {
        if (this.isLazyLoading == false) {
            this.isLazyLoading = true;
            this.writeLetterT = setTimeout(() => {
                this.router.navigate(['refund-letter', 'entry', this.entry.slug, 'write'])
                    .then((result) => { console.log(result); })
                    .catch(() => { this.isLazyLoading = false; });
            }, 0);
        }
    }
    viewLetter() {
        if (this.isLazyLoading == false) {
            this.isLazyLoading = true;
            this.viewLetterT = setTimeout(() => {
                this.router.navigate(['refund-letter', 'entry', this.entry.slug, 'detail'])
                    .then((result) => { console.log(result); })
                    .catch(() => { this.isLazyLoading = false; });
            }, 0);
        }
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
    get userRole() {
        return this.auth.userRole;
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_1__["canUpdate"].indexOf(this.userRole) > -1;
    }
    get canUpdateEntry3() {
        return ['student', 'departmentPresident', 'facultyPresident'].indexOf(this.userRole) > -1;
    }
    get isAdmin() {
        if (['moderator', 'administrator', 'superAdministrator'].indexOf(this.userRole) > -1)
            return '/refund';
        return '/refund';
    }
}
RefundEntryOptionComponent.ɵfac = function RefundEntryOptionComponent_Factory(t) { return new (t || RefundEntryOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_5__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
RefundEntryOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryOptionComponent, selectors: [["app-refund-entry-option"]], inputs: { systemType: ["system-type", "systemType"], view: "view", title: "title", link: "link", entry: "entry" }, outputs: { onReviewEntry: "onReviewEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "entry-detail-options"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "notified", "message", "finished"], [1, "center", 3, "routerLink"], [1, "center", 3, "click"]], template: function RefundEntryOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RefundEntryOptionComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_7__["NotificationScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktb3B0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-option',
                'templateUrl': './refund-entry-option.component.html',
                'styleUrls': ['./refund-entry-option.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_5__["RefundService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onReviewEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Xf1P":
/*!***************************************************************************!*\
  !*** ./src/app/account/refund/refund-entries/refund-entries.component.ts ***!
  \***************************************************************************/
/*! exports provided: RefundEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntriesComponent", function() { return RefundEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles */ "UNsx");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/module/general-all/general-all.service */ "BeQt");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../general/list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../general/search/search.component */ "xlhj");
/* harmony import */ var _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/module/simples/pagination/pagination.component */ "scZC");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");





















function RefundEntriesComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RefundEntriesComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function RefundEntriesComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function RefundEntriesComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function RefundEntriesComponent_app_search_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("$link", ctx_r3.$link)("search-filters", ctx_r3.searchFilters);
} }
function RefundEntriesComponent_div_9_tr_32_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RefundEntriesComponent_div_9_tr_32_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.application_number, " ");
} }
function RefundEntriesComponent_div_9_tr_32_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.full_name, " ");
} }
function RefundEntriesComponent_div_9_tr_32_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entry_r10 == null ? null : entry_r10.updated_on, "longDate"), " ");
} }
function RefundEntriesComponent_div_9_tr_32_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.author == null ? null : entry_r10.author.level, " ");
} }
function RefundEntriesComponent_div_9_tr_32_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.stage._id, " ");
} }
const _c0 = function (a0, a1, a2) { return { "rejected": a0, "fulfilled": a1, "update": a2 }; };
function RefundEntriesComponent_div_9_tr_32_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, (entry_r10 == null ? null : entry_r10.status) == "Rejected", (entry_r10 == null ? null : entry_r10.status) == "Fulfilled", (entry_r10 == null ? null : entry_r10.status) == "Review"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.status, " ");
} }
function RefundEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const entry_r10 = ctx_r34.$implicit; const i_r11 = ctx_r34.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r32.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const $ed_r31 = ctx.$implicit;
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", $ed_r31 == (entry_r10 == null ? null : entry_r10.num));
} }
function RefundEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntriesComponent_div_9_tr_32_label_14_ng_container_1_ng_container_1_Template, 4, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.esdl);
} }
function RefundEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const entry_r10 = ctx_r39.$implicit; const i_r11 = ctx_r39.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r37.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 40);
} }
function RefundEntriesComponent_div_9_tr_32_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntriesComponent_div_9_tr_32_label_14_ng_container_1_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntriesComponent_div_9_tr_32_label_14_ng_template_2_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.esdl.length)("ngIfElse", _r28);
} }
const _c1 = function (a2) { return ["../", "entry", a2, "detail"]; };
function RefundEntriesComponent_div_9_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntriesComponent_div_9_tr_32_ng_template_3_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RefundEntriesComponent_div_9_tr_32_td_5_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntriesComponent_div_9_tr_32_td_6_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RefundEntriesComponent_div_9_tr_32_td_7_Template, 3, 4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RefundEntriesComponent_div_9_tr_32_td_8_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RefundEntriesComponent_div_9_tr_32_td_9_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RefundEntriesComponent_div_9_tr_32_td_10_Template, 2, 6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RefundEntriesComponent_div_9_tr_32_label_14_Template, 4, 2, "label", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.stage)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.status)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.canUpdateEntry);
} }
function RefundEntriesComponent_div_9_app_pagination_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 42);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entries-length", ctx_r9.$entriesLength)("entry-ref", ctx_r9.$entryRef)("page-number", ctx_r9.pageNumber);
} }
function RefundEntriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Date Modified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Stage ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RefundEntriesComponent_div_9_tr_32_Template, 15, 17, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RefundEntriesComponent_div_9_app_pagination_39_Template, 1, 3, "app-pagination", 23);
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
function RefundEntriesComponent_app_resource_unavailable_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 43);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r5.error);
} }
class RefundEntriesComponent {
    constructor(route, location, rfs, gss, gas, ems, ns, aus) {
        this.route = route;
        this.location = location;
        this.rfs = rfs;
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
            this.location.replaceState(`/${this.link}/entries`);
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
        this.location.replaceState(`/${this.link}/entries`);
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
        this.$link = data.entries.link;
        this.searchFilters = data.entries.searchFilters;
        this.rfs.$systemType = this.systemType;
        this.route.queryParamMap.subscribe((params) => {
            let $q = this.gas.paramProcessor(params, this);
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
        this.rfs.getAllEntry(sq)
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
        this.gas.deleteManyEntry(this, this.rfs);
    }
    get userRole() {
        return this.aus.userRole;
    }
    get canUpdateEntry() {
        return _roles__WEBPACK_IMPORTED_MODULE_4__["canUpdate"].indexOf(this.userRole) > -1;
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
RefundEntriesComponent.ɵfac = function RefundEntriesComponent_Factory(t) { return new (t || RefundEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_8__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_9__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"])); };
RefundEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntriesComponent, selectors: [["app-refund-entries"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]])], decls: 11, vars: 8, consts: [["id", "entry-main"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [1, "search-bar"], [3, "system-type", "$link", "search-filters", 4, "ngIf"], [1, "entry-option", "entry-option-small", "center", 3, "click"], [3, "error", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], [3, "system-type", "$link", "search-filters"], [1, "entries"], [1, "bold", "left"], [1, "index"], [1, "app-number"], [1, "full-name"], [1, "date"], [1, "level"], [1, "stage"], [1, "status"], [1, "changes"], [1, "bold", "center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entries-length", "entry-ref", "page-number", 4, "ngIf"], [1, "center"], ["nilValue", ""], ["class", "center bold app-number", 4, "ngIf", "ngIfElse"], ["class", "center", 4, "ngIf", "ngIfElse"], ["class", "center", 3, "ngClass", 4, "ngIf", "ngIfElse"], [1, ""], [1, "center", "changes-option", "changes-option-full", 3, "routerLink"], ["class", "changes-mark", 4, "ngIf"], [1, "center", "bold", "app-number"], [1, "center", 3, "ngClass"], [1, "changes-mark"], [4, "ngIf", "ngIfElse"], ["normalChecks", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "click"], ["checked", ""], [1, "checkmark"], ["type", "checkbox", 3, "click"], [3, "entries-length", "entry-ref", "page-number"], [3, "error"]], template: function RefundEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntriesComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntriesComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntriesComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-entry-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RefundEntriesComponent_app_search_6_Template, 1, 3, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefundEntriesComponent_Template_a_click_7_listener() { return ctx.deleteManyEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Many ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RefundEntriesComponent_div_9_Template, 40, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RefundEntriesComponent_app_resource_unavailable_10_Template, 1, 1, "app-resource-unavailable", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_11__["ListEntryOptionsComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_12__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_13__["NotificationScreenComponent"], _general_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_16__["ResourceUnavailableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cmllcy5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_5__["listAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entries',
                'templateUrl': './refund-entries.component.html',
                'styleUrls': ['./refund-entries.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_5__["listAnimation"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_8__["RefundService"] }, { type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"] }, { type: _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_9__["GeneralAllService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "ddX1":
/*!*****************************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-user-signature/refund-entry-user-signature.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RefundEntryUserSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryUserSignatureComponent", function() { return RefundEntryUserSignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function RefundEntryUserSignatureComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sign_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name : ", sign_r2 == null ? null : sign_r2.full_name, " ");
} }
function RefundEntryUserSignatureComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " List of Signature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryUserSignatureComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.entry == null ? null : ctx_r0.entry.signature);
} }
class RefundEntryUserSignatureComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RefundEntryUserSignatureComponent.ɵfac = function RefundEntryUserSignatureComponent_Factory(t) { return new (t || RefundEntryUserSignatureComponent)(); };
RefundEntryUserSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryUserSignatureComponent, selectors: [["app-refund-entry-user-signature"]], inputs: { entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function RefundEntryUserSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RefundEntryUserSignatureComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry != null && (ctx.entry == null ? null : ctx.entry.signature) != null && (ctx.entry == null ? null : ctx.entry.signature.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktdXNlci1zaWduYXR1cmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryUserSignatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-user-signature',
                'templateUrl': './refund-entry-user-signature.component.html',
                'styleUrls': ['./refund-entry-user-signature.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "flkl":
/*!*********************************************************!*\
  !*** ./src/app/account/refund/refund-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RefundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundRoutingModule", function() { return RefundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _refund_homepage_refund_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refund-homepage/refund-homepage.component */ "yoA/");
/* harmony import */ var _refund_dashboard_refund_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refund-dashboard/refund-dashboard.component */ "RJ2o");
/* harmony import */ var _refund_create_comment_refund_create_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refund-create-comment/refund-create-comment.component */ "x7Ji");
/* harmony import */ var _refund_entry_detail_refund_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refund-entry-detail/refund-entry-detail.component */ "JEGY");
/* harmony import */ var _refund_entry_timeline_refund_entry_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refund-entry-timeline/refund-entry-timeline.component */ "C3i+");
/* harmony import */ var _refund_entries_refund_entries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refund-entries/refund-entries.component */ "Xf1P");
/* harmony import */ var _refund_create_reply_refund_create_reply_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refund-create-reply/refund-create-reply.component */ "hJ4f");
/* harmony import */ var _refund_entry_delete_all_refund_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refund-entry-delete-all/refund-entry-delete-all.component */ "OQNd");
/* harmony import */ var _refund_route_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./refund-route-data */ "kSaL");















const routes = [
    { 'path': '',
        'component': _refund_homepage_refund_homepage_component__WEBPACK_IMPORTED_MODULE_4__["RefundHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '', 'component': _refund_dashboard_refund_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RefundDashboardComponent"], 'data': { 'dashboard': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].dashboard } },
            { 'path': 'entry/create', 'loadChildren': () => Promise.all(/*! import() | refund-entry-create-refund-entry-create-module */[__webpack_require__.e("general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe"), __webpack_require__.e("general-request-entry-create-general-request-entry-create-module~refund-entry-create-refund-entry-cr~653d4a90"), __webpack_require__.e("refund-entry-create-refund-entry-create-module")]).then(__webpack_require__.bind(null, /*! ./refund-entry-create/refund-entry-create.module */ "7N37")).then(m => m.RefundEntryCreateModule) },
            { 'path': 'entry/:entry/detail', 'component': _refund_entry_detail_refund_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["RefundEntryDetailComponent"], 'data': { 'detail': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/comment/add', 'component': _refund_create_comment_refund_create_comment_component__WEBPACK_IMPORTED_MODULE_6__["RefundCreateCommentComponent"], 'data': { 'comment': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].comment } },
            { 'path': 'entry/:entry/timeline', 'component': _refund_entry_timeline_refund_entry_timeline_component__WEBPACK_IMPORTED_MODULE_8__["RefundEntryTimelineComponent"], 'data': { 'timeline': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].timeline } },
            { 'path': 'entry/:entry/comment/:comment/reply/add', 'component': _refund_create_reply_refund_create_reply_component__WEBPACK_IMPORTED_MODULE_10__["RefundCreateReplyComponent"], 'data': { 'reply': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].reply } },
            { 'path': 'entries', 'component': _refund_entries_refund_entries_component__WEBPACK_IMPORTED_MODULE_9__["RefundEntriesComponent"], 'data': { 'entries': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].entries } },
            { 'path': 'entry/delete/all', 'component': _refund_entry_delete_all_refund_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__["RefundEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_3__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _refund_route_data__WEBPACK_IMPORTED_MODULE_12__["RouteConfigData"].deleteAll } }
        ] }
];
class RefundRoutingModule {
}
RefundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundRoutingModule });
RefundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundRoutingModule_Factory(t) { return new (t || RefundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hJ4f":
/*!*************************************************************************************!*\
  !*** ./src/app/account/refund/refund-create-reply/refund-create-reply.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RefundCreateReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundCreateReplyComponent", function() { return RefundCreateReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/reply/reply-create-form.service */ "41Vw");
/* harmony import */ var _shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/reply/reply-create.service */ "Mwf2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_reply_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/reply/entry-reply-create/entry-reply-create.component */ "zki3");












function RefundCreateReplyComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RefundCreateReplyComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function RefundCreateReplyComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-entry-reply-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function RefundCreateReplyComponent_ng_container_3_Template_app_entry_reply_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("comment", ctx_r2.comment)("entry-create-form", ctx_r2.entryCreateForm);
} }
class RefundCreateReplyComponent {
    constructor(route, router, rfs, rcfs, rcs, ems) {
        this.route = route;
        this.router = router;
        this.rfs = rfs;
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
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            let $c = params.get('comment');
            this.eslug = $e;
            this.cslug = $c;
            return this.rfs.addReply($e, $c);
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
        this.rfs.addReply$(this.eslug, this.cslug, body)
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
            return this.router.navigate(data && data.slug ?
                [this.link] : [this.link, 'entries']);
        }, 5000);
    }
}
RefundCreateReplyComponent.ɵfac = function RefundCreateReplyComponent_Factory(t) { return new (t || RefundCreateReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_4__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__["ReplyCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__["ReplyCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
RefundCreateReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundCreateReplyComponent, selectors: [["app-refund-create-reply"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "general-entry"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "view", "entry", "comment", "entry-create-form", "processEntry"]], template: function RefundCreateReplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundCreateReplyComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundCreateReplyComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundCreateReplyComponent_ng_container_3_Template, 2, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"], _shared_component_reply_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_9__["EntryReplyCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtY3JlYXRlLXJlcGx5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundCreateReplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-create-reply',
                'templateUrl': './refund-create-reply.component.html',
                'styleUrls': ['./refund-create-reply.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_4__["RefundService"] }, { type: _shared_component_reply_reply_create_form_service__WEBPACK_IMPORTED_MODULE_5__["ReplyCreateFormService"] }, { type: _shared_component_reply_reply_create_service__WEBPACK_IMPORTED_MODULE_6__["ReplyCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "jNIn":
/*!**************************************************!*\
  !*** ./src/app/account/refund/refund.service.ts ***!
  \**************************************************/
/*! exports provided: RefundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundService", function() { return RefundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/error-messages.service */ "EUGn");







class RefundService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.$systemType = 'Refund';
        this.aurl = 'refund';
    }
    getAllEntry(params) {
        let link = `${this.apiConfig.host}/${this.aurl}/entries`;
        let httpOptions = { 'params': params };
        return this.http.get(link, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries`, null)));
    }
    getEntry(entry) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/detail`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    getEntryLetter(entry) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/letter`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry() {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/create`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((permitted) => { return { 'permitted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry$(request) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/create`;
        return this.http.post(link, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addComment(entry) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/comment`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Comment Entry`, null)));
    }
    addComment$(entry, comment) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/comment`;
        return this.http.post(link, comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Comment Entry`, null)));
    }
    addReply(entry, comment) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/comment/${comment}/reply`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => { console.log(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Reply Entry`, null)));
    }
    addReply$(entry, comment, reply) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/comment/${comment}/reply`;
        return this.http.post(link, reply)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => { console.log(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Reply Entry`, null)));
    }
    getTimeline(entry) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/timeline`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry Timeline`, null)));
    }
    updateEntry$(entry, body) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/detail`;
        return this.http.put(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    confirmEntryOnReview$(entry) {
        let link = `${this.apiConfig.host}/${this.aurl}/entry/${entry}/review`;
        return this.http.put(link, { entry })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'onReview': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $deleteManyEntry(arrayIdx) {
        let link = `${this.apiConfig.host}/${this.aurl}/delete/entry/many`;
        let body = { 'entries': arrayIdx };
        return this.http.patch(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'manyDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries Delete`, null)));
    }
    status() {
        let link = `${this.apiConfig.host}/${this.aurl}/status`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((val) => console.log(val)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`Status Entries`, null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
RefundService.ɵfac = function RefundService_Factory(t) { return new (t || RefundService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
RefundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefundService, factory: RefundService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "kSaL":
/*!*****************************************************!*\
  !*** ./src/app/account/refund/refund-route-data.ts ***!
  \*****************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let config = {
    'systemType': 'Refund',
    'title': 'Refund',
    'view': 'rf',
    'viewWord': 'Refund',
    'link': 'refund',
    '$link': 'refund',
    'systemGuideline': 'request',
    'base': 'refund'
};
const RouteConfigData = {
    'dashboard': Object.assign({}, config),
    'create': Object.assign(Object.assign({}, config), { 'title': `Request a ${config.systemType}` }),
    'comment': Object.assign(Object.assign({}, config), { 'title': `Add a Comment : ${config.systemType} Entry` }),
    'detail': Object.assign(Object.assign({}, config), { 'title': `${config.systemType} Entry` }),
    'timeline': Object.assign(Object.assign({}, config), { 'title': `${config.systemType} Entry Timeline` }),
    'letter': Object.assign(Object.assign({}, config), { 'title': `${config.systemType} Entry Letter` }),
    'transfer': Object.assign(Object.assign({}, config), { 'title': `Transfer and Move ${config.systemType} Entry` }),
    'entries': Object.assign(Object.assign({}, config), { 'title': `${config.systemType} Entries`, 'searchFilters': { 'application_number': 'Application Number', 'status': 'Status', 'department': 'Department', 'faculty': 'Faculty', 'stage': 'Stage' } }),
    'reply': Object.assign(Object.assign({}, config), { 'title': `Add a Reply to a Comment : ${config.systemType} Entry` }),
    'deleteAll': Object.assign(Object.assign({}, config), { 'title': `${config.systemType} Entries : Delete All` }),
};


/***/ }),

/***/ "vBaO":
/*!***********************************************************************************!*\
  !*** ./src/app/account/refund/stage-one-two-five/stage-one-two-five.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StageOneTwoFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageOneTwoFiveComponent", function() { return StageOneTwoFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/request-entry/request-entry-update-validator/request-entry-update-validator.component */ "yHSd");





function StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_ng_container_1_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r11.name, " ");
} }
function StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_ng_container_1_option_2_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.estatuses);
} }
function StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.entry == null ? null : ctx_r7.entry.status);
} }
function StageOneTwoFiveComponent_ng_container_0_div_4_app_request_entry_update_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-update-validator", 11);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r8.systemType)("status", ctx_r8.status);
} }
function StageOneTwoFiveComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StageOneTwoFiveComponent_ng_container_0_div_4_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StageOneTwoFiveComponent_ng_container_0_div_4_app_request_entry_update_validator_5_Template, 1, 2, "app-request-entry-update-validator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.estatuses != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.status);
} }
function StageOneTwoFiveComponent_ng_container_0_div_5_app_request_entry_update_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-request-entry-update-validator", 15);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r12.systemType)("text", ctx_r12.text);
} }
function StageOneTwoFiveComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StageOneTwoFiveComponent_ng_container_0_div_5_app_request_entry_update_validator_5_Template, 1, 2, "app-request-entry-update-validator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.text);
} }
function StageOneTwoFiveComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " By clicking on the submit , the request will be forwarded to the Office of the Bursary for Resolution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\tNote: Application can be set to only Fulfill or Reject at this stage. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function StageOneTwoFiveComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " By clicking on the \"Submit\" button , the request will be forwarded to the Student to write an application letter on the subject matter \"Refund of Fees\" for resolution. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Note: Application can be set to only Fulfill or Reject at this stage. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function StageOneTwoFiveComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " By clicking on the \"Submit\" button , You are agreeing to sign and endorse the student application letter the request will be forwarded to the destinated office for resolution on the subject matter \"Refund of Fees\". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function StageOneTwoFiveComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is the last stage of the application. You can only fulfill or reject the application which would mean the Student would or not get a refund. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function StageOneTwoFiveComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request Options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StageOneTwoFiveComponent_ng_container_0_div_4_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StageOneTwoFiveComponent_ng_container_0_div_5_Template, 6, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StageOneTwoFiveComponent_ng_container_0_ng_container_7_Template, 7, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StageOneTwoFiveComponent_ng_container_0_ng_container_8_Template, 7, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StageOneTwoFiveComponent_ng_container_0_ng_container_9_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StageOneTwoFiveComponent_ng_container_0_ng_container_10_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.currentStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 6);
} }
class StageOneTwoFiveComponent {
    constructor() {
    }
    ngOnInit() {
        this.entryForm.patchValue({ 'stage': this.currentStage });
    }
    set eother(entries) {
        if (entries != null) {
            this.estatuses = entries.Status;
        }
    }
    ;
    get status() {
        return this.entryForm.get('status');
    }
    get text() {
        return this.entryForm.get('text');
    }
}
StageOneTwoFiveComponent.ɵfac = function StageOneTwoFiveComponent_Factory(t) { return new (t || StageOneTwoFiveComponent)(); };
StageOneTwoFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StageOneTwoFiveComponent, selectors: [["app-stage-one-two-five"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], currentStage: ["current-stage", "currentStage"], entry: "entry", eother: ["entry-other", "eother"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup"], ["class", "form-group", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "form-group"], ["for", "status", 1, "form-label", "bold"], ["name", "status", "id", "status", "formControlName", "status", 1, "form-control"], [3, "system-type", "status", 4, "ngIf"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "status"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "formControlName", "text"], [3, "system-type", "text", 4, "ngIf"], [3, "system-type", "text"], [1, "bold"]], template: function StageOneTwoFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StageOneTwoFiveComponent_ng_container_0_Template, 11, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_component_request_entry_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_3__["RequestEntryUpdateValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFnZS1vbmUtdHdvLWZpdmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StageOneTwoFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-stage-one-two-five',
                'templateUrl': './stage-one-two-five.component.html',
                'styleUrls': ['./stage-one-two-five.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], entryForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-form']
        }], currentStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['current-stage']
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eother: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-other']
        }] }); })();


/***/ }),

/***/ "x7Ji":
/*!*****************************************************************************************!*\
  !*** ./src/app/account/refund/refund-create-comment/refund-create-comment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RefundCreateCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundCreateCommentComponent", function() { return RefundCreateCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _refund_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../refund.service */ "jNIn");
/* harmony import */ var _shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/comment/comment-create-form.service */ "eIaO");
/* harmony import */ var _shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/comment/comment-create.service */ "7U3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_comment_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/comment/entry-comment-create/entry-comment-create.component */ "x7qt");












function RefundCreateCommentComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RefundCreateCommentComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function RefundCreateCommentComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-entry-comment-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function RefundCreateCommentComponent_ng_container_3_Template_app_entry_comment_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("entry-create-form", ctx_r2.entryCreateForm);
} }
class RefundCreateCommentComponent {
    constructor(route, router, rfs, ccfs, ccs, ems) {
        this.route = route;
        this.router = router;
        this.rfs = rfs;
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
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            this.eslug = $e;
            return this.rfs.addComment($e);
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
        this.rfs.addComment$(this.eslug, body)
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
            return this.router.navigate(data && data.slug ?
                [this.link] : [this.link, 'entries']);
        }, 5000);
    }
}
RefundCreateCommentComponent.ɵfac = function RefundCreateCommentComponent_Factory(t) { return new (t || RefundCreateCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_service__WEBPACK_IMPORTED_MODULE_4__["RefundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__["CommentCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__["CommentCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
RefundCreateCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundCreateCommentComponent, selectors: [["app-refund-create-comment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "general-entry"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "view", "entry", "entry-create-form", "processEntry"]], template: function RefundCreateCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundCreateCommentComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundCreateCommentComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundCreateCommentComponent_ng_container_3_Template, 2, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"], _shared_component_comment_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_9__["EntryCommentCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundCreateCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-create-comment',
                'templateUrl': './refund-create-comment.component.html',
                'styleUrls': ['./refund-create-comment.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _refund_service__WEBPACK_IMPORTED_MODULE_4__["RefundService"] }, { type: _shared_component_comment_comment_create_form_service__WEBPACK_IMPORTED_MODULE_5__["CommentCreateFormService"] }, { type: _shared_component_comment_comment_create_service__WEBPACK_IMPORTED_MODULE_6__["CommentCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "yoA/":
/*!*****************************************************************************!*\
  !*** ./src/app/account/refund/refund-homepage/refund-homepage.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RefundHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundHomepageComponent", function() { return RefundHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class RefundHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RefundHomepageComponent.ɵfac = function RefundHomepageComponent_Factory(t) { return new (t || RefundHomepageComponent)(); };
RefundHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundHomepageComponent, selectors: [["app-refund-homepage"]], decls: 1, vars: 0, template: function RefundHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-homepage',
                'templateUrl': './refund-homepage.component.html',
                'styleUrls': ['./refund-homepage.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ })

};;
//# sourceMappingURL=account-refund-refund-module.js.map