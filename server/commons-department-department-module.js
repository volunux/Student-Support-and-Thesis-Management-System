exports.ids = ["commons-department-department-module"];
exports.modules = {

/***/ "8L5W":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-update/department-entry-update.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DepartmentEntryUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryUpdateComponent", function() { return DepartmentEntryUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../department.service */ "Jx4c");
/* harmony import */ var _department_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../department-form.service */ "SBkQ");
/* harmony import */ var _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-form.service */ "ZVmh");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-update/general-internal-entry-update.component */ "o+TJ");
/* harmony import */ var _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../department-form-input/department-form-input.component */ "eeMZ");
















function DepartmentEntryUpdateComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentEntryUpdateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function DepartmentEntryUpdateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-general-internal-entry-update", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function DepartmentEntryUpdateComponent_ng_container_3_Template_app_general_internal_entry_update_processEntry_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-department-form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit)("system-guideline", ctx_r2.systemGuideline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit);
} }
class DepartmentEntryUpdateComponent {
    constructor(route, router, dps, dpfs, gifs, giecs, ems) {
        this.route = route;
        this.router = router;
        this.dps = dps;
        this.dpfs = dpfs;
        this.gifs = gifs;
        this.giecs = giecs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.update.systemType;
        this.title = data.update.title;
        this.view = data.update.view;
        this.link = data.update.link;
        this.$link = data.update.$link;
        this.controlFilters = data.update.controlFilters;
        this.noEdit = data.update.noEdit;
        this.placeholder = data.update.placeholder;
        this.dps.$systemType = this.systemType;
        this.dps.$sa = this.$link;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            let $e = params.get('entry');
            this.eslug = $e;
            return this.dps.updateEntry($e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null && result.permitted == true) {
                this.entry = result.$data.Entry;
                let data = result.$data;
                this.entryForm = this.gifs.entryForm();
                this.entryForm.addControl('abbreviation', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.dpfs.otherCtrls.abbreviation));
                this.entryForm.addControl('faculty', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.dpfs.otherCtrls.faculty));
                this.entryForm.patchValue(this.entry);
                this.eothers = data;
                this.dpfs.removeControls(this.controlFilters, this.entryForm);
                this.dpfs.createPermanent(data, this.entryForm);
                this.entryForm.updateValueAndValidity();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    changeEntry(body) {
        this.error = null;
        this.isError = false;
        this.dps.updateEntry$(this.eslug, body)
            .subscribe((result) => {
            if (result == null) {
                this.giecs.isEntryChanged.next(false);
            }
            else if (result != null && result.updated == true) {
                this.giecs.isEntryChanged.next(true);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(data && data.num ?
                ['system', 'internal', this.link, 'entries'] : ['system', 'internal', this.link, 'entries']);
        }, 5000);
    }
    get abbreviation() {
        return this.entryForm.get('abbreviation');
    }
}
DepartmentEntryUpdateComponent.ɵfac = function DepartmentEntryUpdateComponent_Factory(t) { return new (t || DepartmentEntryUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_form_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"])); };
DepartmentEntryUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryUpdateComponent, selectors: [["app-department-entry-update"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "entry-create"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "formGroup"], [3, "system-type", "view", "entry", "entry-form", "e-others", "placeholder", "no-edit", "system-guideline", "processEntry"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"]], template: function DepartmentEntryUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryUpdateComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryUpdateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntryUpdateComponent_ng_container_3_Template, 4, 14, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_module_general_internal_general_internal_entry_update_general_internal_entry_update_component__WEBPACK_IMPORTED_MODULE_11__["GeneralInternalEntryUpdateComponent"], _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentFormInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-update',
                'templateUrl': './department-entry-update.component.html',
                'styleUrls': ['./department-entry-update.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] }, { type: _department_form_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentFormService"] }, { type: _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormService"] }, { type: _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryChangeService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "C5o3":
/*!*********************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-homepage/department-homepage.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DepartmentHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentHomepageComponent", function() { return DepartmentHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class DepartmentHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DepartmentHomepageComponent.ɵfac = function DepartmentHomepageComponent_Factory(t) { return new (t || DepartmentHomepageComponent)(); };
DepartmentHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentHomepageComponent, selectors: [["app-department-homepage"]], decls: 1, vars: 0, template: function DepartmentHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWhvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-homepage',
                'templateUrl': './department-homepage.component.html',
                'styleUrls': ['./department-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Jx4c":
/*!**************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department.service.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/error-messages.service */ "EUGn");







class DepartmentService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
    }
    getAllEntry(params) {
        let link = `${this.apiConfig.host}/${this.$sa}/entries`;
        let httpOptions = { 'params': params };
        return this.http.get(link, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => console.log(value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries`, null)));
    }
    getEntry(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/detail`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry() {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/create`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => { return { 'permitted': true, '$data': data }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry$(internal) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/create`;
        return this.http.post(link, internal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'created': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    updateEntry(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update/`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    updateEntry$(entry, body) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/update`;
        return this.http.put(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'updated': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    deleteEntry(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    deleteEntry$(entry) {
        let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/delete/`;
        return this.http.delete(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => { return { 'deleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    $deleteManyEntry(arrayIdx) {
        let link = `${this.apiConfig.host}/${this.$sa}/delete/entry/many`;
        let body = { 'entries': arrayIdx };
        return this.http.patch(link, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'manyDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entries Delete`, null)));
    }
    deleteAllEntry() {
        let link = `${this.apiConfig.host}/${this.$sa}/delete/entry/all`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    $deleteAllDepartment() {
        let link = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;
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
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "M8y3":
/*!*********************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DepartmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function() { return DepartmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _department_homepage_department_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-homepage/department-homepage.component */ "C5o3");
/* harmony import */ var _department_dashboard_department_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department-dashboard/department-dashboard.component */ "eEPO");
/* harmony import */ var _department_entry_create_department_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department-entry-create/department-entry-create.component */ "tcxD");
/* harmony import */ var _department_entries_department_entries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./department-entries/department-entries.component */ "k009");
/* harmony import */ var _department_entry_detail_department_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department-entry-detail/department-entry-detail.component */ "YEM/");
/* harmony import */ var _department_entry_update_department_entry_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department-entry-update/department-entry-update.component */ "8L5W");
/* harmony import */ var _department_entry_delete_department_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department-entry-delete/department-entry-delete.component */ "n8wz");
/* harmony import */ var _department_entry_delete_all_department_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./department-entry-delete-all/department-entry-delete-all.component */ "ho2o");
/* harmony import */ var _department_route_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./department-route-data */ "oKuv");














const route = [
    { 'path': '', 'component': _department_homepage_department_homepage_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentHomepageComponent"],
        'children': [
            { 'path': '', 'component': _department_dashboard_department_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentDashboardComponent"], 'data': { 'dashboard': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].dashboard } },
            { 'path': 'entry/create', 'component': _department_entry_create_department_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentEntryCreateComponent"], 'data': { 'create': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].create } },
            { 'path': 'entries', 'component': _department_entries_department_entries_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentEntriesComponent"], 'data': { 'entries': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].entries } },
            { 'path': 'entry/:entry/detail', 'component': _department_entry_detail_department_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentEntryDetailComponent"], 'data': { 'detail': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/update', 'component': _department_entry_update_department_entry_update_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentEntryUpdateComponent"], 'data': { 'update': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].update } },
            { 'path': 'entry/:entry/delete', 'component': _department_entry_delete_department_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__["DepartmentEntryDeleteComponent"], 'data': { 'delete': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].delete } },
            { 'path': 'entry/delete/all', 'component': _department_entry_delete_all_department_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["DepartmentEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _department_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].deleteAll } },
        ] },
];
class DepartmentRoutingModule {
    constructor() {
    }
}
DepartmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepartmentRoutingModule });
DepartmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepartmentRoutingModule_Factory(t) { return new (t || DepartmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SBkQ":
/*!*******************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-form.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DepartmentFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentFormService", function() { return DepartmentFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/dynamic-control-validator */ "tTBu");





class DepartmentFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.foreignValidator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)];
        this.permanentProps = {
            'status': this.foreignValidator
        };
        this.otherCtrls = {
            'abbreviation': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)],
            'faculty': this.foreignValidator
        };
    }
    getPermanentProp(prop) {
        return this.permanentProps[prop];
    }
    removeControls(controls, form) {
        if (controls != null && controls.length > 0) {
            controls.forEach((control) => {
                let ctrl = form.get(control);
                return ctrl ? form.removeControl(control) : null;
            });
        }
    }
    createPermanent(datas, form) {
        if (datas != null) {
            for (let $prop in datas) {
                let propVal = $prop.toLowerCase();
                this.permanentData[propVal] = datas[$prop];
                form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal], Object(_shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_2__["dynamicDataValidator"])(this.getMyData(propVal), $prop)]) : null;
                form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
            }
            form.updateValueAndValidity();
        }
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
}
DepartmentFormService.ɵfac = function DepartmentFormService_Factory(t) { return new (t || DepartmentFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DepartmentFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentFormService, factory: DepartmentFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "YEM/":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-detail/department-entry-detail.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DepartmentEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryDetailComponent", function() { return DepartmentEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../department.service */ "Jx4c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-detail/general-internal-entry-detail.component */ "hLGb");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");











function DepartmentEntryDetailComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentEntryDetailComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function DepartmentEntryDetailComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r2.error);
} }
function DepartmentEntryDetailComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Abbreviation : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.entry == null ? null : ctx_r3.entry.abbreviation, " ");
} }
function DepartmentEntryDetailComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.entry == null ? null : ctx_r4.entry.faculty, " ");
} }
class DepartmentEntryDetailComponent {
    constructor(route, ems, dps) {
        this.route = route;
        this.ems = ems;
        this.dps = dps;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.detail.systemType;
        this.title = data.detail.title;
        this.view = data.detail.view;
        this.viewAbbreviation = data.detail.viewAbbreviation;
        this.link = data.detail.link;
        this.$link = data.detail.$link;
        this.dps.$systemType = this.systemType;
        this.dps.$sa = this.$link;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            let $e = params.get('entry');
            return this.dps.getEntry($e);
        }))
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
DepartmentEntryDetailComponent.ɵfac = function DepartmentEntryDetailComponent_Factory(t) { return new (t || DepartmentEntryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"])); };
DepartmentEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryDetailComponent, selectors: [["app-department-entry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 6, consts: [[4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "error", 4, "ngIf"], [3, "entry"], [3, "view-type", "system-type"], [3, "error"], [1, "bold", "left"]], template: function DepartmentEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentEntryDetailComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryDetailComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryDetailComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-general-internal-entry-detail", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentEntryDetailComponent_ng_container_4_Template, 6, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentEntryDetailComponent_ng_container_5_Template, 6, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx.entry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry == null ? null : ctx.entry.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry == null ? null : ctx.entry.faculty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_module_general_internal_general_internal_entry_detail_general_internal_entry_detail_component__WEBPACK_IMPORTED_MODULE_6__["GeneralInternalEntryDetailComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__["ViewDescriptionComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-detail',
                'templateUrl': './department-entry-detail.component.html',
                'styleUrls': ['./department-entry-detail.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }]; }, null); })();


/***/ }),

/***/ "bfZe":
/*!*************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department.module.ts ***!
  \*************************************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-routing.module */ "M8y3");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/general-services.module */ "kPid");
/* harmony import */ var _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/module/general-all/general-all.module */ "T+6q");
/* harmony import */ var _shared_module_general_internal_general_internal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/module/general-internal/general-internal.module */ "pBQQ");
/* harmony import */ var _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/module/simples/simples.module */ "O/oE");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department.service */ "Jx4c");
/* harmony import */ var _department_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./department-form.service */ "SBkQ");
/* harmony import */ var _department_entry_delete_all_department_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./department-entry-delete-all/department-entry-delete-all.component */ "ho2o");
/* harmony import */ var _department_entry_delete_department_entry_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department-entry-delete/department-entry-delete.component */ "n8wz");
/* harmony import */ var _department_entry_update_department_entry_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./department-entry-update/department-entry-update.component */ "8L5W");
/* harmony import */ var _department_entry_detail_department_entry_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./department-entry-detail/department-entry-detail.component */ "YEM/");
/* harmony import */ var _department_entry_create_department_entry_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./department-entry-create/department-entry-create.component */ "tcxD");
/* harmony import */ var _department_homepage_department_homepage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./department-homepage/department-homepage.component */ "C5o3");
/* harmony import */ var _department_dashboard_department_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./department-dashboard/department-dashboard.component */ "eEPO");
/* harmony import */ var _department_entry_validator_department_entry_validator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./department-entry-validator/department-entry-validator.component */ "hUoq");
/* harmony import */ var _department_entries_department_entries_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./department-entries/department-entries.component */ "k009");
/* harmony import */ var _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./department-form-input/department-form-input.component */ "eeMZ");






















class DepartmentModule {
}
DepartmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepartmentModule });
DepartmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepartmentModule_Factory(t) { return new (t || DepartmentModule)(); }, providers: [
        _department_form_service__WEBPACK_IMPORTED_MODULE_10__["DepartmentFormService"],
        _department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _department_routing_module__WEBPACK_IMPORTED_MODULE_3__["DepartmentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
            _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
            _shared_module_general_internal_general_internal_module__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalModule"],
            _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_8__["SimplesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentModule, { declarations: [_department_entry_delete_all_department_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__["DepartmentEntryDeleteAllComponent"],
        _department_entry_delete_department_entry_delete_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentEntryDeleteComponent"],
        _department_entry_update_department_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentEntryUpdateComponent"],
        _department_entry_detail_department_entry_detail_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentEntryDetailComponent"],
        _department_entry_create_department_entry_create_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentEntryCreateComponent"],
        _department_homepage_department_homepage_component__WEBPACK_IMPORTED_MODULE_16__["DepartmentHomepageComponent"],
        _department_dashboard_department_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentDashboardComponent"],
        _department_entry_validator_department_entry_validator_component__WEBPACK_IMPORTED_MODULE_18__["DepartmentEntryValidatorComponent"],
        _department_entries_department_entries_component__WEBPACK_IMPORTED_MODULE_19__["DepartmentEntriesComponent"],
        _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentFormInputComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _department_routing_module__WEBPACK_IMPORTED_MODULE_3__["DepartmentRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
        _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
        _shared_module_general_internal_general_internal_module__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalModule"],
        _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_8__["SimplesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _department_entry_delete_all_department_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_11__["DepartmentEntryDeleteAllComponent"],
                    _department_entry_delete_department_entry_delete_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentEntryDeleteComponent"],
                    _department_entry_update_department_entry_update_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentEntryUpdateComponent"],
                    _department_entry_detail_department_entry_detail_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentEntryDetailComponent"],
                    _department_entry_create_department_entry_create_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentEntryCreateComponent"],
                    _department_homepage_department_homepage_component__WEBPACK_IMPORTED_MODULE_16__["DepartmentHomepageComponent"],
                    _department_dashboard_department_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentDashboardComponent"],
                    _department_entry_validator_department_entry_validator_component__WEBPACK_IMPORTED_MODULE_18__["DepartmentEntryValidatorComponent"],
                    _department_entries_department_entries_component__WEBPACK_IMPORTED_MODULE_19__["DepartmentEntriesComponent"],
                    _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentFormInputComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _department_routing_module__WEBPACK_IMPORTED_MODULE_3__["DepartmentRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
                    _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
                    _shared_module_general_internal_general_internal_module__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalModule"],
                    _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_8__["SimplesModule"]
                ],
                providers: [
                    _department_form_service__WEBPACK_IMPORTED_MODULE_10__["DepartmentFormService"],
                    _department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "eEPO":
/*!***********************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-dashboard/department-dashboard.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DepartmentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDashboardComponent", function() { return DepartmentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../general/view-description/view-description.component */ "+ef2");





function DepartmentDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
const _c0 = function () { return ["entry", "create"]; };
function DepartmentDashboardComponent_div_2_li_5_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add a ", ctx_r3.systemType, " ");
} }
const _c1 = function () { return ["entries"]; };
const _c2 = function () { return ["entry", "delete", "all"]; };
function DepartmentDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentDashboardComponent_div_2_li_5_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Manage ", ctx_r2.systemType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.canCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Delete All ", ctx_r2.systemType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Statistics ");
} }
class DepartmentDashboardComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.dashboard.systemType;
        this.title = data.dashboard.title;
        this.view = data.dashboard.view;
        this.canCreate = data.dashboard.canCreate != undefined ? data.dashboard.canCreate : true;
    }
}
DepartmentDashboardComponent.ɵfac = function DepartmentDashboardComponent_Factory(t) { return new (t || DepartmentDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DepartmentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentDashboardComponent, selectors: [["app-department-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], ["id", "dashboard"], [1, "center", 3, "routerLink"], ["href", "#", 1, "center"]], template: function DepartmentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentDashboardComponent_div_2_Template, 12, 8, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__["ViewDescriptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-dashboard',
                'templateUrl': './department-dashboard.component.html',
                'styleUrls': ['./department-dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "eeMZ":
/*!*************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-form-input/department-form-input.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DepartmentFormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentFormInputComponent", function() { return DepartmentFormInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _department_entry_validator_department_entry_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../department-entry-validator/department-entry-validator.component */ "hUoq");





function DepartmentFormInputComponent_ng_container_1_app_department_entry_validator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-department-entry-validator", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("abbreviation", ctx_r2.abbreviation);
} }
function DepartmentFormInputComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Abbreviation * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentFormInputComponent_ng_container_1_app_department_entry_validator_5_Template, 1, 2, "app-department-entry-validator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.placeholder == null ? null : ctx_r0.placeholder.abbreviation)("readOnly", ctx_r0.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.abbreviation);
} }
function DepartmentFormInputComponent_ng_container_2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const faculty_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", faculty_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", faculty_r5.name, " ");
} }
function DepartmentFormInputComponent_ng_container_2_app_department_entry_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-department-entry-validator", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r4.systemType)("faculty", ctx_r4.faculty);
} }
function DepartmentFormInputComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty * : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentFormInputComponent_ng_container_2_option_6_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DepartmentFormInputComponent_ng_container_2_app_department_entry_validator_7_Template, 1, 2, "app-department-entry-validator", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r1.noEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.eothers.Faculty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.faculty);
} }
class DepartmentFormInputComponent {
    constructor() { }
    ngOnInit() {
    }
    get abbreviation() {
        return this.entryForm.get('abbreviation');
    }
    get faculty() {
        return this.entryForm.get('faculty');
    }
}
DepartmentFormInputComponent.ɵfac = function DepartmentFormInputComponent_Factory(t) { return new (t || DepartmentFormInputComponent)(); };
DepartmentFormInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentFormInputComponent, selectors: [["app-department-form-input"]], inputs: { systemType: ["system-type", "systemType"], entryForm: ["entry-form", "entryForm"], eothers: ["e-others", "eothers"], placeholder: "placeholder", noEdit: ["no-edit", "noEdit"] }, decls: 3, vars: 3, consts: [[3, "formGroup"], [4, "ngIf"], [1, "form-group"], ["for", "abbreviation", 1, "form-label", "bold"], ["type", "text", "id", "abbreviation", "required", "required", "name", "abbreviation", "formControlName", "abbreviation", 1, "form-control", 3, "placeholder", "readOnly"], [3, "system-type", "abbreviation", 4, "ngIf"], [3, "system-type", "abbreviation"], ["for", "faculty", 1, "form-label", "bold"], ["name", "faculty", "id", "faculty", "required", "required", "formControlName", "faculty", 1, "form-control", 3, "readOnly"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "system-type", "faculty", 4, "ngIf"], [3, "system-type", "faculty"]], template: function DepartmentFormInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentFormInputComponent_ng_container_1_Template, 6, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentFormInputComponent_ng_container_2_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faculty && ctx.eothers && ctx.eothers.Faculty && ctx.eothers.Faculty.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _department_entry_validator_department_entry_validator_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentEntryValidatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWZvcm0taW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentFormInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-form-input',
                'templateUrl': './department-form-input.component.html',
                'styleUrls': ['./department-form-input.component.css']
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

/***/ "hUoq":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-validator/department-entry-validator.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DepartmentEntryValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryValidatorComponent", function() { return DepartmentEntryValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function DepartmentEntryValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Abbreviation of ", ctx_r3.systemType, " should be provided and cannot be empty ");
} }
function DepartmentEntryValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Abbreviation of ", ctx_r4.systemType, " cannot be less than 2 characters in length ");
} }
function DepartmentEntryValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Abbreviation of ", ctx_r5.systemType, " cannot be greater than 8 characters in length ");
} }
function DepartmentEntryValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntryValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentEntryValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.abbreviation.errors == null ? null : ctx_r2.abbreviation.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.abbreviation.errors == null ? null : ctx_r2.abbreviation.errors.required) || (ctx_r2.abbreviation.errors == null ? null : ctx_r2.abbreviation.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.abbreviation.errors == null ? null : ctx_r2.abbreviation.errors.required) || (ctx_r2.abbreviation.errors == null ? null : ctx_r2.abbreviation.errors.maxLength));
} }
function DepartmentEntryValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.abbreviation.invalid && (ctx_r0.abbreviation.touched || ctx_r0.abbreviation.dirty));
} }
function DepartmentEntryValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r7.systemType, " should be provided and cannot be empty ");
} }
function DepartmentEntryValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r8.systemType, " cannot be greater than specified length ");
} }
function DepartmentEntryValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Faculty of ", ctx_r9.systemType, " should be available from existing record before it can be considered valid ");
} }
function DepartmentEntryValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntryValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentEntryValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.faculty.errors == null ? null : ctx_r6.faculty.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.faculty.errors == null ? null : ctx_r6.faculty.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.faculty.errors == null ? null : ctx_r6.faculty.errors.Faculty);
} }
function DepartmentEntryValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryValidatorComponent_ng_container_1_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.faculty.invalid && (ctx_r1.faculty.touched || ctx_r1.faculty.dirty));
} }
class DepartmentEntryValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DepartmentEntryValidatorComponent.ɵfac = function DepartmentEntryValidatorComponent_Factory(t) { return new (t || DepartmentEntryValidatorComponent)(); };
DepartmentEntryValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryValidatorComponent, selectors: [["app-department-entry-validator"]], inputs: { systemType: ["system-type", "systemType"], abbreviation: "abbreviation", faculty: "faculty" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function DepartmentEntryValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentEntryValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faculty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LXZhbGlkYXRvci5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-validator',
                'templateUrl': './department-entry-validator.component.html',
                'styleUrls': ['./department-entry-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], abbreviation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], faculty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ho2o":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-delete-all/department-entry-delete-all.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DepartmentEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryDeleteAllComponent", function() { return DepartmentEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/module/general-all/general-all-entry-delete-all/general-all-entry-delete-all.component */ "ku54");





function DepartmentEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-all-entry-delete-all", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r0.systemType)("view-abbreviation", ctx_r0.viewAbbreviation)("view", ctx_r0.view)("title", ctx_r0.title)("link", ctx_r0.link)("$link", ctx_r0.$link);
} }
class DepartmentEntryDeleteAllComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.deleteAll.systemType;
        this.viewAbbreviation = data.deleteAll.viewAbbreviation;
        this.title = data.deleteAll.title;
        this.view = data.deleteAll.view;
        this.link = data.deleteAll.link;
        this.$link = data.deleteAll.$link;
    }
}
DepartmentEntryDeleteAllComponent.ɵfac = function DepartmentEntryDeleteAllComponent_Factory(t) { return new (t || DepartmentEntryDeleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DepartmentEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryDeleteAllComponent, selectors: [["app-department-entry-delete-all"]], decls: 1, vars: 1, consts: [[3, "system-type", "view-abbreviation", "view", "title", "link", "$link", 4, "ngIf"], [3, "system-type", "view-abbreviation", "view", "title", "link", "$link"]], template: function DepartmentEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template, 1, 6, "app-general-all-entry-delete-all", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__["GeneralAllEntryDeleteAllComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LWRlbGV0ZS1hbGwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-delete-all',
                'templateUrl': './department-entry-delete-all.component.html',
                'styleUrls': ['./department-entry-delete-all.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "k009":
/*!*******************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entries/department-entries.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DepartmentEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntriesComponent", function() { return DepartmentEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../department.service */ "Jx4c");
/* harmony import */ var _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/module/general-all/general-all.service */ "BeQt");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../general/list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../general/search/search.component */ "xlhj");
/* harmony import */ var _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/module/simples/pagination/pagination.component */ "scZC");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");




















function DepartmentEntriesComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentEntriesComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function DepartmentEntriesComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function DepartmentEntriesComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function DepartmentEntriesComponent_app_search_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("$link", ctx_r3.$link)("search-filters", ctx_r3.searchFilters);
} }
function DepartmentEntriesComponent_div_9_tr_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentEntriesComponent_div_9_tr_28_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.name, " ");
} }
function DepartmentEntriesComponent_div_9_tr_28_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entry_r10 == null ? null : entry_r10.updated_on, "longDate"), " ");
} }
function DepartmentEntriesComponent_div_9_tr_28_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.abbreviation, " ");
} }
function DepartmentEntriesComponent_div_9_tr_28_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.status, " ");
} }
function DepartmentEntriesComponent_div_9_tr_28_label_16_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentEntriesComponent_div_9_tr_28_label_16_ng_container_1_ng_container_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const entry_r10 = ctx_r30.$implicit; const i_r11 = ctx_r30.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r28.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const $ed_r27 = ctx.$implicit;
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", $ed_r27 == (entry_r10 == null ? null : entry_r10.num));
} }
function DepartmentEntriesComponent_div_9_tr_28_label_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntriesComponent_div_9_tr_28_label_16_ng_container_1_ng_container_1_Template, 4, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.esdl);
} }
function DepartmentEntriesComponent_div_9_tr_28_label_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 36, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentEntriesComponent_div_9_tr_28_label_16_ng_template_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const entry_r10 = ctx_r35.$implicit; const i_r11 = ctx_r35.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r33.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 35);
} }
function DepartmentEntriesComponent_div_9_tr_28_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntriesComponent_div_9_tr_28_label_16_ng_container_1_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntriesComponent_div_9_tr_28_label_16_ng_template_2_Template, 3, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.esdl.length)("ngIfElse", _r24);
} }
const _c0 = function (a2) { return ["../", "entry", a2, "detail"]; };
const _c1 = function (a2) { return ["../", "entry", a2, "update"]; };
const _c2 = function (a2) { return ["../", "entry", a2, "delete"]; };
function DepartmentEntriesComponent_div_9_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntriesComponent_div_9_tr_28_ng_template_3_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentEntriesComponent_div_9_tr_28_td_5_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentEntriesComponent_div_9_tr_28_td_6_Template, 3, 4, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DepartmentEntriesComponent_div_9_tr_28_td_7_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DepartmentEntriesComponent_div_9_tr_28_td_8_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DepartmentEntriesComponent_div_9_tr_28_label_16_Template, 4, 2, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r11 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.name)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.updated_on)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.abbreviation)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.status)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
} }
function DepartmentEntriesComponent_div_9_app_pagination_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 37);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entries-length", ctx_r9.$entriesLength)("entry-ref", ctx_r9.$entryRef)("page-number", ctx_r9.pageNumber);
} }
function DepartmentEntriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "caption", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Updated On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Abbreviation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DepartmentEntriesComponent_div_9_tr_28_Template, 17, 19, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DepartmentEntriesComponent_div_9_app_pagination_35_Template, 1, 3, "app-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnimation", ctx_r4.entries.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.entries)("ngForTrackBy", ctx_r4.trackByNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pageNumber);
} }
function DepartmentEntriesComponent_app_resource_unavailable_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 38);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r5.error);
} }
class DepartmentEntriesComponent {
    constructor(route, location, dps, gss, gas, ems, ns, aus) {
        this.route = route;
        this.location = location;
        this.dps = dps;
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
            this.location.replaceState(`/system/internal/${this.link}/entries`);
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
        this.location.replaceState(`/system/internal/${this.link}/entries`);
        this.gss.searchCleared.next(true);
        this.getAllEntry({});
    }
    trackByNum(idx, entry) {
        return entry.num;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.entries.systemType;
        this.title = data.entries.title;
        this.view = data.entries.view;
        this.link = data.entries.link;
        this.$link = data.entries.link;
        this.searchFilters = data.entries.searchFilters;
        this.dps.$systemType = this.systemType;
        this.dps.$sa = this.$link;
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
        this.dps.getAllEntry(sq)
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
        this.gas.deleteManyEntry(this, this.dps);
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
DepartmentEntriesComponent.ɵfac = function DepartmentEntriesComponent_Factory(t) { return new (t || DepartmentEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"])); };
DepartmentEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntriesComponent, selectors: [["app-department-entries"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]])], decls: 11, vars: 8, consts: [["id", "entry-main"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [1, "search-bar"], [3, "system-type", "$link", "search-filters", 4, "ngIf"], [1, "entry-option", "entry-option-small", "center", 3, "click"], ["id", "error", 3, "error", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], [3, "system-type", "$link", "search-filters"], [1, "entries"], [1, "bold", "left"], [1, ""], [1, "changes"], [1, "bold", "center", "index-2"], [1, "bold", "center", "name-internal"], [1, "bold", "center"], [1, "bold", "center", "short-code"], [1, "bold", "center", "status"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entries-length", "entry-ref", "page-number", 4, "ngIf"], [1, "center"], ["nilValue", ""], ["class", "left", 4, "ngIf", "ngIfElse"], ["class", "center", 4, "ngIf", "ngIfElse"], [1, "center", "changes-option", 3, "routerLink"], ["class", "changes-mark", 4, "ngIf"], [1, "left"], [1, "changes-mark"], [4, "ngIf", "ngIfElse"], ["normalChecks", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "click"], ["checked", ""], [1, "checkmark"], ["type", "checkbox", 3, "click"], [3, "entries-length", "entry-ref", "page-number"], ["id", "error", 3, "error"]], template: function DepartmentEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntriesComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntriesComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntriesComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-entry-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DepartmentEntriesComponent_app_search_6_Template, 1, 3, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentEntriesComponent_Template_a_click_7_listener() { return ctx.deleteManyEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Many ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DepartmentEntriesComponent_div_9_Template, 36, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DepartmentEntriesComponent_app_resource_unavailable_10_Template, 1, 1, "app-resource-unavailable", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_10__["ListEntryOptionsComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__["NotificationScreenComponent"], _general_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_15__["ResourceUnavailableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJpZXMuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_4__["listAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entries',
                'templateUrl': './department-entries.component.html',
                'styleUrls': ['./department-entries.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_4__["listAnimation"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _department_service__WEBPACK_IMPORTED_MODULE_7__["DepartmentService"] }, { type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"] }, { type: _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__["GeneralAllService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "n8wz":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-delete/department-entry-delete.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DepartmentEntryDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryDeleteComponent", function() { return DepartmentEntryDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../department.service */ "Jx4c");
/* harmony import */ var _department_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../department-form.service */ "SBkQ");
/* harmony import */ var _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-form.service */ "ZVmh");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-delete/general-internal-entry-delete.component */ "FL99");
/* harmony import */ var _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../department-form-input/department-form-input.component */ "eeMZ");
















function DepartmentEntryDeleteComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentEntryDeleteComponent_app_resource_unavailable_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function DepartmentEntryDeleteComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-general-internal-entry-delete", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function DepartmentEntryDeleteComponent_ng_container_2_Template_app_general_internal_entry_delete_processEntry_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-department-form-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry", ctx_r2.entry)("entry-form", ctx_r2.entryForm)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit)("system-guideline", ctx_r2.systemGuideline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit);
} }
class DepartmentEntryDeleteComponent {
    constructor(route, router, dps, dpfs, gifs, giecs, ems) {
        this.route = route;
        this.router = router;
        this.dps = dps;
        this.dpfs = dpfs;
        this.gifs = gifs;
        this.giecs = giecs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.delete.systemType;
        this.title = data.delete.title;
        this.view = data.delete.view;
        this.link = data.delete.link;
        this.$link = data.delete.$link;
        this.controlFilters = data.delete.controlFilters;
        this.noEdit = data.delete.noEdit;
        this.placeholder = data.delete.placeholder;
        this.dps.$systemType = this.systemType;
        this.dps.$sa = this.$link;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            let $e = params.get('entry');
            this.eslug = $e;
            return this.dps.deleteEntry($e);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null && result.permitted == true) {
                this.entry = result.$data;
                this.entryForm = this.gifs.entryForm();
                this.entryForm.addControl('abbreviation', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.dpfs.otherCtrls.abbreviation));
                this.entryForm.patchValue(this.entry);
                this.dpfs.removeControls(this.controlFilters, this.entryForm);
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    changeEntry(body) {
        this.error = null;
        this.isError = false;
        this.dps.deleteEntry$(this.eslug)
            .subscribe((result) => {
            if (result == null) {
                this.giecs.isEntryChanged.next(false);
            }
            else if (result != null && result.deleted == true) {
                this.giecs.isEntryChanged.next(true);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(data && data.num ?
                ['system', 'internal', this.link, 'entries'] : ['system', 'internal', this.link, 'entries']);
        }, 5000);
    }
    get abbreviation() {
        return this.entryForm.get('abbreviation');
    }
}
DepartmentEntryDeleteComponent.ɵfac = function DepartmentEntryDeleteComponent_Factory(t) { return new (t || DepartmentEntryDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_form_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"])); };
DepartmentEntryDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryDeleteComponent, selectors: [["app-department-entry-delete"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]])], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "formGroup"], [3, "system-type", "view", "entry", "entry-form", "placeholder", "no-edit", "system-guideline", "processEntry"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"]], template: function DepartmentEntryDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentEntryDeleteComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryDeleteComponent_app_resource_unavailable_1_Template, 1, 1, "app-resource-unavailable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryDeleteComponent_ng_container_2_Template, 4, 13, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_10__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_module_general_internal_general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_11__["GeneralInternalEntryDeleteComponent"], _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentFormInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-delete',
                'templateUrl': './department-entry-delete.component.html',
                'styleUrls': ['./department-entry-delete.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] }, { type: _department_form_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentFormService"] }, { type: _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalFormService"] }, { type: _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInternalEntryChangeService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "oKuv":
/*!*****************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-route-data.ts ***!
  \*****************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'Department',
    'title': 'Department',
    'view': 'gen-internal',
    'viewWord': 'Department',
    'link': 'department',
    '$link': 'department',
    'systemGuideline': 'gen-internal'
};
const placeholder = { 'name': 'Information and Media Technology', 'description': 'Information and Media', 'abbreviation': 'IMT' };
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Add a ${$$.systemType}`, 'controlFilters': ['status', 'description'], 'noEdit': false, placeholder }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Detail` }),
    'update': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Update`, 'controlFilters': [], 'noEdit': false, placeholder }),
    'delete': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Delete`, 'controlFilters': ['description', 'status', 'faculty'], 'noEdit': true, placeholder }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'abbreviation': 'Abbreviation', 'name': 'Name', 'status': 'Status' } }),
};


/***/ }),

/***/ "tcxD":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/department/department-entry-create/department-entry-create.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DepartmentEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentEntryCreateComponent", function() { return DepartmentEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../department.service */ "Jx4c");
/* harmony import */ var _department_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../department-form.service */ "SBkQ");
/* harmony import */ var _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-form.service */ "ZVmh");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-change.service */ "J1zS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_module_general_internal_general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/module/general-internal/general-internal-entry-delete/general-internal-entry-delete.component */ "FL99");
/* harmony import */ var _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../department-form-input/department-form-input.component */ "eeMZ");















function DepartmentEntryCreateComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function DepartmentEntryCreateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function DepartmentEntryCreateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-general-internal-entry-delete", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function DepartmentEntryCreateComponent_ng_container_3_Template_app_general_internal_entry_delete_processEntry_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-department-form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.entryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("view", ctx_r2.view)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit)("system-guideline", ctx_r2.systemGuideline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("entry-form", ctx_r2.entryForm)("e-others", ctx_r2.eothers)("placeholder", ctx_r2.placeholder)("no-edit", ctx_r2.noEdit);
} }
class DepartmentEntryCreateComponent {
    constructor(route, router, dps, dpfs, gifs, giecs, ems) {
        this.route = route;
        this.router = router;
        this.dps = dps;
        this.dpfs = dpfs;
        this.gifs = gifs;
        this.giecs = giecs;
        this.ems = ems;
        this.isError = false;
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.create.systemType;
        this.title = data.create.title;
        this.view = data.create.view;
        this.link = data.create.link;
        this.$link = data.create.$link;
        this.controlFilters = data.create.controlFilters;
        this.noEdit = data.create.noEdit;
        this.placeholder = data.create.placeholder;
        this.dps.$systemType = this.systemType;
        this.dps.$sa = this.$link;
        this.dps.addEntry()
            .subscribe((result) => {
            if (result == null) {
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
                this.isError = true;
            }
            else if (result != null && result.permitted == true) {
                let data = result.$data;
                this.eothers = data;
                this.entryForm = this.gifs.entryForm();
                this.dpfs.createPermanent(data, this.entryForm);
                this.dpfs.removeControls(this.controlFilters, this.entryForm);
                this.entryForm.addControl('abbreviation', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.dpfs.otherCtrls.abbreviation));
                this.entryForm.addControl('faculty', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.dpfs.otherCtrls.faculty));
                this.entryForm.updateValueAndValidity();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryChangesT);
    }
    changeEntry(body) {
        this.error = null;
        this.isError = false;
        this.dps.addEntry$(body)
            .subscribe((result) => {
            if (result == null) {
                this.giecs.isEntryChanged.next(false);
            }
            else if (result != null && result.created == true) {
                this.giecs.isEntryChanged.next(true);
                this.entryChanges(result);
            }
        });
    }
    entryChanges(data) {
        this.entryChangesT = setTimeout(() => {
            return this.router.navigate(data && data.num ?
                ['system', 'internal', this.link, 'entries'] : ['system', 'internal', this.link, 'entries']);
        }, 5000);
    }
    get abbreviation() {
        return this.entryForm.get('abbreviation');
    }
}
DepartmentEntryCreateComponent.ɵfac = function DepartmentEntryCreateComponent_Factory(t) { return new (t || DepartmentEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_department_form_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_6__["GeneralInternalFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalEntryChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
DepartmentEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentEntryCreateComponent, selectors: [["app-department-entry-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "entry-create"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "formGroup"], [3, "system-type", "view", "entry-form", "e-others", "placeholder", "no-edit", "system-guideline", "processEntry"], [3, "system-type", "entry-form", "e-others", "placeholder", "no-edit"]], template: function DepartmentEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentEntryCreateComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentEntryCreateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DepartmentEntryCreateComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_module_general_internal_general_internal_entry_delete_general_internal_entry_delete_component__WEBPACK_IMPORTED_MODULE_10__["GeneralInternalEntryDeleteComponent"], _department_form_input_department_form_input_component__WEBPACK_IMPORTED_MODULE_11__["DepartmentFormInputComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWVudHJ5LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-department-entry-create',
                'templateUrl': './department-entry-create.component.html',
                'styleUrls': ['./department-entry-create.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] }, { type: _department_form_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentFormService"] }, { type: _shared_module_general_internal_general_internal_form_service__WEBPACK_IMPORTED_MODULE_6__["GeneralInternalFormService"] }, { type: _shared_module_general_internal_general_internal_entry_change_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInternalEntryChangeService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=commons-department-department-module.js.map