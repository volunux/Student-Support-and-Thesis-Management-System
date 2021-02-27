exports.ids = ["refund-entry-create-refund-entry-create-module"];
exports.modules = {

/***/ "+v4W":
/*!***********************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create.service.ts ***!
  \***********************************************************************************/
/*! exports provided: RefundEntryCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateService", function() { return RefundEntryCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");







class RefundEntryCreateService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.$systemType = 'Refund';
        this.aurl = 'refund';
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
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
RefundEntryCreateService.ɵfac = function RefundEntryCreateService_Factory(t) { return new (t || RefundEntryCreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
RefundEntryCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefundEntryCreateService, factory: RefundEntryCreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "0tJF":
/*!*********************************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create/refund-entry-create.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RefundEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateComponent", function() { return RefundEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _refund_entry_create_file_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund-entry-create-file-control */ "bnyo");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _refund_entry_create_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../refund-entry-create.service */ "+v4W");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create-form.service */ "5bm+");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create.service */ "WEao");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create/request-entry-create.component */ "wczn");












function RefundEntryCreateComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function RefundEntryCreateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function RefundEntryCreateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-request-entry-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function RefundEntryCreateComponent_ng_container_3_Template_app_request_entry_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("system-guideline", ctx_r2.systemGuideline)("view", ctx_r2.view)("input-file-control", ctx_r2.fileControl)("attachment-config", ctx_r2.attachmentConfig)("entry-create-form", ctx_r2.entryCreateForm)("upload-config-u", ctx_r2.uploadConfig);
} }
class RefundEntryCreateComponent {
    constructor(route, router, rfecs, recfs, recs, ems) {
        this.route = route;
        this.router = router;
        this.rfecs = rfecs;
        this.recfs = recfs;
        this.recs = recs;
        this.ems = ems;
        this.isError = false;
        this.fileControl = _refund_entry_create_file_control__WEBPACK_IMPORTED_MODULE_1__["inputFileControl"];
        this.uploadConfig = _refund_entry_create_file_control__WEBPACK_IMPORTED_MODULE_1__["uploadConfigUrl"];
        this.attachmentConfig = {
            'name': 'Image',
            'type': 'image'
        };
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.create.systemType;
        this.systemGuideline = data.create.systemGuideline;
        this.title = data.create.title;
        this.view = data.create.view;
        this.link = data.create.link;
        this.rfecs.$systemType = this.systemType;
        this.rfecs.addEntry()
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.permitted == true) {
                this.entryCreateForm = this.recfs.entryCreateForm();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryCreateT);
    }
    createEntry(body) {
        this.error = null;
        this.isError = false;
        this.rfecs.addEntry$(body)
            .subscribe((result) => {
            if (result == null) {
                this.recs.isEntryCreated.next(false);
            }
            else if (result != null && result.created == true) {
                this.recs.isEntryCreated.next(true);
                this.entryChanges(result);
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
RefundEntryCreateComponent.ɵfac = function RefundEntryCreateComponent_Factory(t) { return new (t || RefundEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_refund_entry_create_service__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_5__["RequestEntryCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"])); };
RefundEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryCreateComponent, selectors: [["app-refund-entry-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "entry-create"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "system-guideline", "view", "input-file-control", "attachment-config", "entry-create-form", "upload-config-u", "processEntry"]], template: function RefundEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefundEntryCreateComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RefundEntryCreateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RefundEntryCreateComponent_ng_container_3_Template, 2, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_8__["ResourceUnavailableComponent"], _shared_component_request_entry_create_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_9__["RequestEntryCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-refund-entry-create',
                'templateUrl': './refund-entry-create.component.html',
                'styleUrls': ['./refund-entry-create.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _refund_entry_create_service__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateService"] }, { type: _shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_5__["RequestEntryCreateFormService"] }, { type: _shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_6__["RequestEntryCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "7N37":
/*!**********************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RefundEntryCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateModule", function() { return RefundEntryCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/component/request-entry-create/request-entry-create.module */ "0FyI");
/* harmony import */ var _refund_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refund-entry-create-routing.module */ "Wuq9");
/* harmony import */ var _refund_entry_create_refund_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refund-entry-create/refund-entry-create.component */ "0tJF");
/* harmony import */ var _refund_entry_create_homepage_refund_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refund-entry-create-homepage/refund-entry-create-homepage.component */ "zyOE");
/* harmony import */ var _refund_entry_create_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refund-entry-create.service */ "+v4W");
/* harmony import */ var _refund_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refund-entry-create-form.service */ "OoQl");










class RefundEntryCreateModule {
}
RefundEntryCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundEntryCreateModule });
RefundEntryCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundEntryCreateModule_Factory(t) { return new (t || RefundEntryCreateModule)(); }, providers: [
        _refund_entry_create_service__WEBPACK_IMPORTED_MODULE_7__["RefundEntryCreateService"],
        _refund_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["RefundEntryCreateFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _refund_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateRoutingModule"],
            _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_3__["RequestEntryCreateModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundEntryCreateModule, { declarations: [_refund_entry_create_refund_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["RefundEntryCreateComponent"],
        _refund_entry_create_homepage_refund_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_6__["RefundEntryCreateHomepageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _refund_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateRoutingModule"],
        _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_3__["RequestEntryCreateModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _refund_entry_create_refund_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["RefundEntryCreateComponent"],
                    _refund_entry_create_homepage_refund_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_6__["RefundEntryCreateHomepageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _refund_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateRoutingModule"],
                    _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_3__["RequestEntryCreateModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"]
                ],
                providers: [
                    _refund_entry_create_service__WEBPACK_IMPORTED_MODULE_7__["RefundEntryCreateService"],
                    _refund_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["RefundEntryCreateFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OoQl":
/*!****************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create-form.service.ts ***!
  \****************************************************************************************/
/*! exports provided: RefundEntryCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateFormService", function() { return RefundEntryCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");



class RefundEntryCreateFormService {
    constructor(fb) {
        this.fb = fb;
    }
}
RefundEntryCreateFormService.ɵfac = function RefundEntryCreateFormService_Factory(t) { return new (t || RefundEntryCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RefundEntryCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RefundEntryCreateFormService, factory: RefundEntryCreateFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Wuq9":
/*!******************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RefundEntryCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateRoutingModule", function() { return RefundEntryCreateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/guards/is-student.guard */ "iojP");
/* harmony import */ var _refund_entry_create_homepage_refund_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refund-entry-create-homepage/refund-entry-create-homepage.component */ "zyOE");
/* harmony import */ var _refund_entry_create_refund_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refund-entry-create/refund-entry-create.component */ "0tJF");
/* harmony import */ var _refund_entry_create_route_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refund-entry-create-route-data */ "XVKQ");









const routes = [
    { 'path': '',
        'component': _refund_entry_create_homepage_refund_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_4__["RefundEntryCreateHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _refund_entry_create_refund_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["RefundEntryCreateComponent"], 'data': { 'create': _refund_entry_create_route_data__WEBPACK_IMPORTED_MODULE_6__["RouteConfigData"].create }, 'canActivate': [_shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__["IsStudentGuard"]] },
                ] }
        ] }
];
class RefundEntryCreateRoutingModule {
}
RefundEntryCreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundEntryCreateRoutingModule });
RefundEntryCreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundEntryCreateRoutingModule_Factory(t) { return new (t || RefundEntryCreateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundEntryCreateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XVKQ":
/*!**************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create-route-data.ts ***!
  \**************************************************************************************/
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
    'create': Object.assign(Object.assign({}, config), { 'title': `Request a ${config.systemType}` }),
};


/***/ }),

/***/ "bnyo":
/*!************************************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create/refund-entry-create-file-control.ts ***!
  \************************************************************************************************************/
/*! exports provided: inputFileControl, uploadConfigUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFileControl", function() { return inputFileControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadConfigUrl", function() { return uploadConfigUrl; });
let inputFileControl = [
    { 'label': 'Photo I',
        'key': 'photos',
        'accepts': 'image/*',
        'controlType': 'file' },
    { 'label': 'Photo II',
        'key': 'photos',
        'accepts': 'image/*',
        'controlType': 'file' },
    { 'label': 'Photo III',
        'key': 'photos',
        'accepts': 'image/*',
        'controlType': 'file' },
    { 'label': 'Photo IV',
        'key': 'photos',
        'accepts': 'image/*',
        'controlType': 'file' },
];
let uploadConfigUrl = {
    'add': 'user-upload/entry/create',
    'remove': 'o/photo',
    'sign': 'o/sign/photo'
};


/***/ }),

/***/ "zyOE":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/account/refund/refund-entry-create/refund-entry-create-homepage/refund-entry-create-homepage.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RefundEntryCreateHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundEntryCreateHomepageComponent", function() { return RefundEntryCreateHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class RefundEntryCreateHomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RefundEntryCreateHomepageComponent.ɵfac = function RefundEntryCreateHomepageComponent_Factory(t) { return new (t || RefundEntryCreateHomepageComponent)(); };
RefundEntryCreateHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefundEntryCreateHomepageComponent, selectors: [["app-refund-entry-create-homepage"]], decls: 1, vars: 0, template: function RefundEntryCreateHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZ1bmQtZW50cnktY3JlYXRlLWhvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundEntryCreateHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refund-entry-create-homepage',
                templateUrl: './refund-entry-create-homepage.component.html',
                styleUrls: ['./refund-entry-create-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

};;
//# sourceMappingURL=refund-entry-create-refund-entry-create-module.js.map