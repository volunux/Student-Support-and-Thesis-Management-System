exports.ids = ["commons-request-credential-request-credential-module"];
exports.modules = {

/***/ "33g6":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-dashboard/request-credential-dashboard.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: RequestCredentialDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialDashboardComponent", function() { return RequestCredentialDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../general/view-description/view-description.component */ "+ef2");





function RequestCredentialDashboardComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RequestCredentialDashboardComponent_app_view_description_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
const _c0 = function () { return ["entries"]; };
const _c1 = function () { return ["entry", "delete", "all"]; };
function RequestCredentialDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Manage ", ctx_r2.systemType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Delete All ", ctx_r2.systemType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.systemType, " Statistics ");
} }
class RequestCredentialDashboardComponent {
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
RequestCredentialDashboardComponent.ɵfac = function RequestCredentialDashboardComponent_Factory(t) { return new (t || RequestCredentialDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RequestCredentialDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestCredentialDashboardComponent, selectors: [["app-request-credential-dashboard"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], ["id", "dashboard", 4, "ngIf"], [3, "system-type", "view-type"], ["id", "dashboard"], [1, "center", 3, "routerLink"], ["href", "#", 1, "center"]], template: function RequestCredentialDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestCredentialDashboardComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestCredentialDashboardComponent_app_view_description_1_Template, 1, 2, "app-view-description", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestCredentialDashboardComponent_div_2_Template, 11, 7, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_3__["ViewDescriptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWNyZWRlbnRpYWwtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-credential-dashboard',
                'templateUrl': './request-credential-dashboard.component.html',
                'styleUrls': ['./request-credential-dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "CpY2":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-homepage/request-credential-homepage.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: RequestCredentialHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialHomepageComponent", function() { return RequestCredentialHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class RequestCredentialHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestCredentialHomepageComponent.ɵfac = function RequestCredentialHomepageComponent_Factory(t) { return new (t || RequestCredentialHomepageComponent)(); };
RequestCredentialHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestCredentialHomepageComponent, selectors: [["app-request-credential-homepage"]], decls: 1, vars: 0, template: function RequestCredentialHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWNyZWRlbnRpYWwtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-credential-homepage',
                'templateUrl': './request-credential-homepage.component.html',
                'styleUrls': ['./request-credential-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DbbR":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-entry-delete-all/request-credential-entry-delete-all.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: RequestCredentialEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialEntryDeleteAllComponent", function() { return RequestCredentialEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/module/general-all/general-all-entry-delete-all/general-all-entry-delete-all.component */ "ku54");





function RequestCredentialEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-all-entry-delete-all", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r0.systemType)("view-word", ctx_r0.viewWord)("view", ctx_r0.view)("title", ctx_r0.title)("link", ctx_r0.link)("$link", ctx_r0.$link);
} }
class RequestCredentialEntryDeleteAllComponent {
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
RequestCredentialEntryDeleteAllComponent.ɵfac = function RequestCredentialEntryDeleteAllComponent_Factory(t) { return new (t || RequestCredentialEntryDeleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RequestCredentialEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestCredentialEntryDeleteAllComponent, selectors: [["app-request-credential-entry-delete-all"]], decls: 1, vars: 1, consts: [[3, "system-type", "view-word", "view", "title", "link", "$link", 4, "ngIf"], [3, "system-type", "view-word", "view", "title", "link", "$link"]], template: function RequestCredentialEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestCredentialEntryDeleteAllComponent_app_general_all_entry_delete_all_0_Template, 1, 6, "app-general-all-entry-delete-all", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.systemType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_module_general_all_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_3__["GeneralAllEntryDeleteAllComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWNyZWRlbnRpYWwtZW50cnktZGVsZXRlLWFsbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-credential-entry-delete-all',
                'templateUrl': './request-credential-entry-delete-all.component.html',
                'styleUrls': ['./request-credential-entry-delete-all.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "G6Mz":
/*!***********************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-form.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: RequestCredentialFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialFormService", function() { return RequestCredentialFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_dynamic_control_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/dynamic-control-validator */ "tTBu");





class RequestCredentialFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.permanentProps = {
            'status': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(90000000)]
        };
        this.otherCtrls = {
            'abbreviation': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)],
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
RequestCredentialFormService.ɵfac = function RequestCredentialFormService_Factory(t) { return new (t || RequestCredentialFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RequestCredentialFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestCredentialFormService, factory: RequestCredentialFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "GN3W":
/*!******************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential.service.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestCredentialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialService", function() { return RequestCredentialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/error-messages.service */ "EUGn");







class RequestCredentialService {
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
    $deleteAllRequestCredential() {
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
RequestCredentialService.ɵfac = function RequestCredentialService_Factory(t) { return new (t || RequestCredentialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
RequestCredentialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestCredentialService, factory: RequestCredentialService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "Gg7b":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-entries/request-credential-entries.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: RequestCredentialEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialEntriesComponent", function() { return RequestCredentialEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/notification.service */ "9nlD");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _request_credential_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../request-credential.service */ "GN3W");
/* harmony import */ var _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/module/general-all/general-all.service */ "BeQt");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../general/list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../general/search/search.component */ "xlhj");
/* harmony import */ var _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/module/simples/pagination/pagination.component */ "scZC");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");




















function RequestCredentialEntriesComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RequestCredentialEntriesComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view)("system-type", ctx_r1.systemType);
} }
function RequestCredentialEntriesComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function RequestCredentialEntriesComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function RequestCredentialEntriesComponent_app_search_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r3.systemType)("$link", ctx_r3.$link)("search-filters", ctx_r3.searchFilters);
} }
function RequestCredentialEntriesComponent_div_9_tr_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestCredentialEntriesComponent_div_9_tr_28_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.username, " ");
} }
function RequestCredentialEntriesComponent_div_9_tr_28_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.password, " ");
} }
function RequestCredentialEntriesComponent_div_9_tr_28_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, entry_r10 == null ? null : entry_r10.updated_on, "longDate"), " ");
} }
function RequestCredentialEntriesComponent_div_9_tr_28_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r10 == null ? null : entry_r10.status, " ");
} }
function RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_container_1_ng_container_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const entry_r10 = ctx_r30.$implicit; const i_r11 = ctx_r30.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r28.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const $ed_r27 = ctx.$implicit;
    const entry_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", $ed_r27 == (entry_r10 == null ? null : entry_r10.num));
} }
function RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_container_1_ng_container_1_Template, 4, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.esdl);
} }
function RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_template_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const entry_r10 = ctx_r35.$implicit; const i_r11 = ctx_r35.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.addEntryToDeleteList(entry_r10 == null ? null : entry_r10.num, _r33.checked, i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 33);
} }
function RequestCredentialEntriesComponent_div_9_tr_28_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_container_1_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestCredentialEntriesComponent_div_9_tr_28_label_12_ng_template_2_Template, 3, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.esdl.length)("ngIfElse", _r24);
} }
const _c0 = function (a2) { return ["../", "entry", a2, "detail"]; };
function RequestCredentialEntriesComponent_div_9_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestCredentialEntriesComponent_div_9_tr_28_ng_template_3_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestCredentialEntriesComponent_div_9_tr_28_td_5_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestCredentialEntriesComponent_div_9_tr_28_td_6_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestCredentialEntriesComponent_div_9_tr_28_td_7_Template, 3, 4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RequestCredentialEntriesComponent_div_9_tr_28_td_8_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestCredentialEntriesComponent_div_9_tr_28_label_12_Template, 4, 2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r11 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.username)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.password)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.updated_on)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r10 == null ? null : entry_r10.status)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, entry_r10 == null ? null : entry_r10.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
} }
function RequestCredentialEntriesComponent_div_9_app_pagination_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagination", 35);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entries-length", ctx_r9.$entriesLength)("entry-ref", ctx_r9.$entryRef)("page-number", ctx_r9.pageNumber);
} }
function RequestCredentialEntriesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Updated On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RequestCredentialEntriesComponent_div_9_tr_28_Template, 13, 13, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RequestCredentialEntriesComponent_div_9_app_pagination_35_Template, 1, 3, "app-pagination", 19);
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
function RequestCredentialEntriesComponent_app_resource_unavailable_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 36);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r5.error);
} }
class RequestCredentialEntriesComponent {
    constructor(route, location, rcs, gss, gas, ems, ns, aus) {
        this.route = route;
        this.location = location;
        this.rcs = rcs;
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
        this.rcs.$systemType = this.systemType;
        this.rcs.$sa = this.$link;
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
        this.rcs.getAllEntry(sq)
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
        this.gas.deleteManyEntry(this, this.rcs);
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
RequestCredentialEntriesComponent.ɵfac = function RequestCredentialEntriesComponent_Factory(t) { return new (t || RequestCredentialEntriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_credential_service__WEBPACK_IMPORTED_MODULE_7__["RequestCredentialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"])); };
RequestCredentialEntriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestCredentialEntriesComponent, selectors: [["app-request-credential-entries"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]])], decls: 11, vars: 8, consts: [["id", "entry-main"], [4, "ngIf"], [3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [1, "search-bar"], [3, "system-type", "$link", "search-filters", 4, "ngIf"], [1, "entry-option", "entry-option-small", "center", 3, "click"], ["id", "error", 3, "error", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], [3, "system-type", "$link", "search-filters"], [1, "entries"], [1, "bold", "left"], [1, ""], [1, "changes"], [1, "bold", "center", "index-2"], [1, "bold", "center"], [1, "bold", "center", "status"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "entries-length", "entry-ref", "page-number", 4, "ngIf"], [1, "center"], ["nilValue", ""], ["class", "left", 4, "ngIf", "ngIfElse"], ["class", "center", 4, "ngIf", "ngIfElse"], [1, "center", "changes-option", 3, "routerLink"], ["class", "changes-mark", 4, "ngIf"], [1, "left"], [1, "changes-mark"], [4, "ngIf", "ngIfElse"], ["normalChecks", ""], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "click"], ["checked", ""], [1, "checkmark"], ["type", "checkbox", 3, "click"], [3, "entries-length", "entry-ref", "page-number"], ["id", "error", 3, "error"]], template: function RequestCredentialEntriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestCredentialEntriesComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestCredentialEntriesComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestCredentialEntriesComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-entry-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestCredentialEntriesComponent_app_search_6_Template, 1, 3, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestCredentialEntriesComponent_Template_a_click_7_listener() { return ctx.deleteManyEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Delete Many ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RequestCredentialEntriesComponent_div_9_Template, 36, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestCredentialEntriesComponent_app_resource_unavailable_10_Template, 1, 1, "app-resource-unavailable", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_10__["ListEntryOptionsComponent"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_11__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_12__["NotificationScreenComponent"], _general_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_module_simples_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_15__["ResourceUnavailableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWNyZWRlbnRpYWwtZW50cmllcy5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_4__["listAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialEntriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-credential-entries',
                'templateUrl': './request-credential-entries.component.html',
                'styleUrls': ['./request-credential-entries.component.css'],
                'providers': [_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"], _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"]],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_4__["listAnimation"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _request_credential_service__WEBPACK_IMPORTED_MODULE_7__["RequestCredentialService"] }, { type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSearchService"] }, { type: _shared_module_general_all_general_all_service__WEBPACK_IMPORTED_MODULE_8__["GeneralAllService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "K1fT":
/*!*****************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: RequestCredentialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialModule", function() { return RequestCredentialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _request_credential_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-credential-routing.module */ "hQe0");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/general-services.module */ "kPid");
/* harmony import */ var _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/module/general-all/general-all.module */ "T+6q");
/* harmony import */ var _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/module/simples/simples.module */ "O/oE");
/* harmony import */ var _request_credential_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-credential.service */ "GN3W");
/* harmony import */ var _request_credential_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-credential-form.service */ "G6Mz");
/* harmony import */ var _request_credential_entry_delete_all_request_credential_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-credential-entry-delete-all/request-credential-entry-delete-all.component */ "DbbR");
/* harmony import */ var _request_credential_homepage_request_credential_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request-credential-homepage/request-credential-homepage.component */ "CpY2");
/* harmony import */ var _request_credential_dashboard_request_credential_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./request-credential-dashboard/request-credential-dashboard.component */ "33g6");
/* harmony import */ var _request_credential_entries_request_credential_entries_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./request-credential-entries/request-credential-entries.component */ "Gg7b");















class RequestCredentialModule {
}
RequestCredentialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestCredentialModule });
RequestCredentialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestCredentialModule_Factory(t) { return new (t || RequestCredentialModule)(); }, providers: [
        _request_credential_form_service__WEBPACK_IMPORTED_MODULE_9__["RequestCredentialFormService"],
        _request_credential_service__WEBPACK_IMPORTED_MODULE_8__["RequestCredentialService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _request_credential_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestCredentialRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
            _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
            _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_7__["SimplesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestCredentialModule, { declarations: [_request_credential_entry_delete_all_request_credential_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["RequestCredentialEntryDeleteAllComponent"],
        _request_credential_homepage_request_credential_homepage_component__WEBPACK_IMPORTED_MODULE_11__["RequestCredentialHomepageComponent"],
        _request_credential_dashboard_request_credential_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["RequestCredentialDashboardComponent"],
        _request_credential_entries_request_credential_entries_component__WEBPACK_IMPORTED_MODULE_13__["RequestCredentialEntriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _request_credential_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestCredentialRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
        _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
        _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_7__["SimplesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _request_credential_entry_delete_all_request_credential_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["RequestCredentialEntryDeleteAllComponent"],
                    _request_credential_homepage_request_credential_homepage_component__WEBPACK_IMPORTED_MODULE_11__["RequestCredentialHomepageComponent"],
                    _request_credential_dashboard_request_credential_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["RequestCredentialDashboardComponent"],
                    _request_credential_entries_request_credential_entries_component__WEBPACK_IMPORTED_MODULE_13__["RequestCredentialEntriesComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _request_credential_routing_module__WEBPACK_IMPORTED_MODULE_3__["RequestCredentialRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_5__["GeneralServicesModule"],
                    _shared_module_general_all_general_all_module__WEBPACK_IMPORTED_MODULE_6__["GeneralAllModule"],
                    _shared_module_simples_simples_module__WEBPACK_IMPORTED_MODULE_7__["SimplesModule"]
                ],
                providers: [
                    _request_credential_form_service__WEBPACK_IMPORTED_MODULE_9__["RequestCredentialFormService"],
                    _request_credential_service__WEBPACK_IMPORTED_MODULE_8__["RequestCredentialService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hQe0":
/*!*************************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: RequestCredentialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCredentialRoutingModule", function() { return RequestCredentialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _request_credential_homepage_request_credential_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-credential-homepage/request-credential-homepage.component */ "CpY2");
/* harmony import */ var _request_credential_dashboard_request_credential_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-credential-dashboard/request-credential-dashboard.component */ "33g6");
/* harmony import */ var _request_credential_entries_request_credential_entries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-credential-entries/request-credential-entries.component */ "Gg7b");
/* harmony import */ var _request_credential_entry_delete_all_request_credential_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-credential-entry-delete-all/request-credential-entry-delete-all.component */ "DbbR");
/* harmony import */ var _request_credential_route_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-credential-route-data */ "im8j");










const routes = [
    { 'path': '', 'component': _request_credential_homepage_request_credential_homepage_component__WEBPACK_IMPORTED_MODULE_3__["RequestCredentialHomepageComponent"],
        'children': [
            { 'path': '', 'component': _request_credential_dashboard_request_credential_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["RequestCredentialDashboardComponent"], 'data': { 'dashboard': _request_credential_route_data__WEBPACK_IMPORTED_MODULE_7__["RouteConfigData"].dashboard } },
            { 'path': 'entries', 'component': _request_credential_entries_request_credential_entries_component__WEBPACK_IMPORTED_MODULE_5__["RequestCredentialEntriesComponent"], 'data': { 'entries': _request_credential_route_data__WEBPACK_IMPORTED_MODULE_7__["RouteConfigData"].entries } },
            { 'path': 'entry/delete/all', 'component': _request_credential_entry_delete_all_request_credential_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_6__["RequestCredentialEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _request_credential_route_data__WEBPACK_IMPORTED_MODULE_7__["RouteConfigData"].deleteAll } },
        ] },
];
class RequestCredentialRoutingModule {
}
RequestCredentialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestCredentialRoutingModule });
RequestCredentialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestCredentialRoutingModule_Factory(t) { return new (t || RequestCredentialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestCredentialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestCredentialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "im8j":
/*!*********************************************************************************************!*\
  !*** ./src/app/system/internal/commons/request-credential/request-credential-route-data.ts ***!
  \*********************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'Request Credential',
    'title': 'Request Credential',
    'view': 'gen-internal',
    'viewWord': 'Request Credential',
    'link': 'request-credential',
    '$link': 'request-credential',
    'systemGuideline': 'gen-internal'
};
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'username': 'Username', 'status': 'Status' } }),
};


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
//# sourceMappingURL=commons-request-credential-request-credential-module.js.map