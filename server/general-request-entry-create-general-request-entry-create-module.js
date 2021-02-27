exports.ids = ["general-request-entry-create-general-request-entry-create-module"];
exports.modules = {

/***/ "0Pi6":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create/general-request-entry-create.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateComponent", function() { return GeneralRequestEntryCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _general_request_entry_create_file_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-request-entry-create-file-control */ "swo0");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/error-messages.service */ "EUGn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "vlQ6");
/* harmony import */ var _general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-request-entry-create.service */ "MGHn");
/* harmony import */ var _general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general-request-entry-create-form.service */ "aZoa");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create-form.service */ "5bm+");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create.service */ "WEao");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/component/request-entry-create/request-entry-create/request-entry-create.component */ "wczn");
















function GeneralRequestEntryCreateComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralRequestEntryCreateComponent_app_resource_unavailable_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r1.error);
} }
function GeneralRequestEntryCreateComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-request-entry-create", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("processEntry", function GeneralRequestEntryCreateComponent_ng_container_3_Template_app_request_entry_create_processEntry_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.createEntry($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r2.systemType)("system-guideline", ctx_r2.systemGuideline)("view", ctx_r2.view)("input-file-control", ctx_r2.fileControl)("attachment-config", ctx_r2.attachmentConfig)("entry-create-form", ctx_r2.entryCreateForm)("upload-config-u", ctx_r2.uploadConfig);
} }
class GeneralRequestEntryCreateComponent {
    constructor(route, ts, router, grs, grfs, recfs, recs, ems) {
        this.route = route;
        this.ts = ts;
        this.router = router;
        this.grs = grs;
        this.grfs = grfs;
        this.recfs = recfs;
        this.recs = recs;
        this.ems = ems;
        this.isError = false;
        this.fileControl = _general_request_entry_create_file_control__WEBPACK_IMPORTED_MODULE_3__["inputFileControl"];
        this.uploadConfig = _general_request_entry_create_file_control__WEBPACK_IMPORTED_MODULE_3__["uploadConfigUrl"];
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
        this.grs.$systemType = this.systemType;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            let $r = params.get('request');
            this.rslug = $r;
            return this.grs.addEntry($r);
        }))
            .subscribe((result) => {
            if (result == null) {
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else if (result != null && result.permitted == true) {
                let data = result.$data;
                this.ts.setTitle(data.title);
                this.title = data.title;
                this.entryCreateForm = this.recfs.entryCreateForm();
                this.entryCreateForm.addControl('unit', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.grfs.otherCtrls.unit));
                this.entryCreateForm.addControl('request_type', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.grfs.otherCtrls.request_type));
                this.entryCreateForm.patchValue({ 'unit': data.unit, 'request_type': data.request_type });
                this.entryCreateForm.updateValueAndValidity();
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.entryCreateT);
    }
    createEntry(body) {
        this.error = null;
        this.isError = false;
        this.grs.addEntry$(this.rslug, body)
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
                ['general-request', 't', this.rslug] : ['general-request', 't', this.rslug, 'entries']);
        }, 5000);
    }
}
GeneralRequestEntryCreateComponent.ɵfac = function GeneralRequestEntryCreateComponent_Factory(t) { return new (t || GeneralRequestEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntryCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestEntryCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_9__["RequestEntryCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_10__["RequestEntryCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"])); };
GeneralRequestEntryCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryCreateComponent, selectors: [["app-general-request-entry-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"]])], decls: 4, vars: 3, consts: [["id", "entry-create"], [4, "ngIf"], [3, "error", 4, "ngIf"], [3, "error"], [3, "system-type", "system-guideline", "view", "input-file-control", "attachment-config", "entry-create-form", "upload-config-u", "processEntry"]], template: function GeneralRequestEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralRequestEntryCreateComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRequestEntryCreateComponent_app_resource_unavailable_2_Template, 1, 1, "app-resource-unavailable", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRequestEntryCreateComponent_ng_container_3_Template, 2, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entryCreateForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_12__["ResourceUnavailableComponent"], _shared_component_request_entry_create_request_entry_create_request_entry_create_component__WEBPACK_IMPORTED_MODULE_13__["RequestEntryCreateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-request-entry-create',
                'templateUrl': './general-request-entry-create.component.html',
                'styleUrls': ['./general-request-entry-create.component.css'],
                'providers': [_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntryCreateService"] }, { type: _general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestEntryCreateFormService"] }, { type: _shared_component_request_entry_create_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_9__["RequestEntryCreateFormService"] }, { type: _shared_component_request_entry_create_request_entry_create_service__WEBPACK_IMPORTED_MODULE_10__["RequestEntryCreateService"] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "5dIA":
/*!*************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateModule", function() { return GeneralRequestEntryCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/component/request-entry-create/request-entry-create.module */ "0FyI");
/* harmony import */ var _general_request_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-request-entry-create-routing.module */ "lV6B");
/* harmony import */ var _general_request_entry_create_general_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-request-entry-create/general-request-entry-create.component */ "0Pi6");
/* harmony import */ var _general_request_entry_create_homepage_general_request_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-request-entry-create-homepage/general-request-entry-create-homepage.component */ "FzkN");
/* harmony import */ var _general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-request-entry-create-form.service */ "aZoa");
/* harmony import */ var _general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-request-entry-create.service */ "MGHn");











class GeneralRequestEntryCreateModule {
}
GeneralRequestEntryCreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestEntryCreateModule });
GeneralRequestEntryCreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestEntryCreateModule_Factory(t) { return new (t || GeneralRequestEntryCreateModule)(); }, providers: [
        _general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__["GeneralRequestEntryCreateService"],
        _general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestEntryCreateFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_request_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCreateRoutingModule"],
            _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_4__["RequestEntryCreateModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestEntryCreateModule, { declarations: [_general_request_entry_create_general_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestEntryCreateComponent"],
        _general_request_entry_create_homepage_general_request_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntryCreateHomepageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_request_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCreateRoutingModule"],
        _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_4__["RequestEntryCreateModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _general_request_entry_create_general_request_entry_create_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRequestEntryCreateComponent"],
                    _general_request_entry_create_homepage_general_request_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_7__["GeneralRequestEntryCreateHomepageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_request_entry_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCreateRoutingModule"],
                    _shared_component_request_entry_create_request_entry_create_module__WEBPACK_IMPORTED_MODULE_4__["RequestEntryCreateModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
                ],
                providers: [
                    _general_request_entry_create_service__WEBPACK_IMPORTED_MODULE_9__["GeneralRequestEntryCreateService"],
                    _general_request_entry_create_form_service__WEBPACK_IMPORTED_MODULE_8__["GeneralRequestEntryCreateFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FzkN":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create-homepage/general-request-entry-create-homepage.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateHomepageComponent", function() { return GeneralRequestEntryCreateHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class GeneralRequestEntryCreateHomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralRequestEntryCreateHomepageComponent.ɵfac = function GeneralRequestEntryCreateHomepageComponent_Factory(t) { return new (t || GeneralRequestEntryCreateHomepageComponent)(); };
GeneralRequestEntryCreateHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRequestEntryCreateHomepageComponent, selectors: [["app-general-request-entry-create-homepage"]], decls: 1, vars: 0, template: function GeneralRequestEntryCreateHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXJlcXVlc3QtZW50cnktY3JlYXRlLWhvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-request-entry-create-homepage',
                templateUrl: './general-request-entry-create-homepage.component.html',
                styleUrls: ['./general-request-entry-create-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MGHn":
/*!**************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateService", function() { return GeneralRequestEntryCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/error-messages.service */ "EUGn");







class GeneralRequestEntryCreateService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
        this.$systemType = 'General Request';
        this.$sa = 'general-request';
    }
    addEntry(rtype) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/create`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((entry) => console.log(entry)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((entry) => { return { 'permitted': true, '$data': entry }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry`, null)));
    }
    addEntry$(rtype, request) {
        let link = `${this.apiConfig.host}/${this.$sa}/t/${rtype}/entry/create`;
        console.log(request);
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
GeneralRequestEntryCreateService.ɵfac = function GeneralRequestEntryCreateService_Factory(t) { return new (t || GeneralRequestEntryCreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GeneralRequestEntryCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralRequestEntryCreateService, factory: GeneralRequestEntryCreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _shared_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "Vs8l":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create-route-data.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'General Request',
    'title': 'General Request',
    'view': 'gr',
    'viewWord': 'GeneralRequest',
    'link': 'general-request',
    '$link': 'general-request',
    'systemGuideline': 'request',
    'base': 'general-request'
};
const RouteConfigData = {
    'create': Object.assign(Object.assign({}, $$), { 'title': `Request review of your semester ${$$.systemType}` }),
};


/***/ }),

/***/ "aZoa":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create-form.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateFormService", function() { return GeneralRequestEntryCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");




class GeneralRequestEntryCreateFormService {
    constructor(fb) {
        this.fb = fb;
        this.permanentData = {};
        this.otherCtrls = {
            'request_type': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000000)],
            'unit': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(10000000)],
            'username': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)],
            'password': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]
        };
    }
    getMyData(prop) {
        return this.permanentData[prop];
    }
}
GeneralRequestEntryCreateFormService.ɵfac = function GeneralRequestEntryCreateFormService_Factory(t) { return new (t || GeneralRequestEntryCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GeneralRequestEntryCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralRequestEntryCreateFormService, factory: GeneralRequestEntryCreateFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "lV6B":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create-routing.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: GeneralRequestEntryCreateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestEntryCreateRoutingModule", function() { return GeneralRequestEntryCreateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/guards/is-student.guard */ "iojP");
/* harmony import */ var _general_request_entry_create_homepage_general_request_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-request-entry-create-homepage/general-request-entry-create-homepage.component */ "FzkN");
/* harmony import */ var _general_request_entry_create_general_request_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-request-entry-create/general-request-entry-create.component */ "0Pi6");
/* harmony import */ var _general_request_entry_create_route_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-request-entry-create-route-data */ "Vs8l");









const routes = [
    { 'path': '',
        'component': _general_request_entry_create_homepage_general_request_entry_create_homepage_component__WEBPACK_IMPORTED_MODULE_4__["GeneralRequestEntryCreateHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _general_request_entry_create_general_request_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRequestEntryCreateComponent"], 'data': { 'create': _general_request_entry_create_route_data__WEBPACK_IMPORTED_MODULE_6__["RouteConfigData"].create }, 'canActivate': [_shared_guards_is_student_guard__WEBPACK_IMPORTED_MODULE_3__["IsStudentGuard"]] },
                ] }
        ] }
];
class GeneralRequestEntryCreateRoutingModule {
}
GeneralRequestEntryCreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestEntryCreateRoutingModule });
GeneralRequestEntryCreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestEntryCreateRoutingModule_Factory(t) { return new (t || GeneralRequestEntryCreateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestEntryCreateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestEntryCreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "swo0":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/account/general-request/general-request-entry-create/general-request-entry-create/general-request-entry-create-file-control.ts ***!
  \************************************************************************************************************************************************/
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


/***/ })

};;
//# sourceMappingURL=general-request-entry-create-general-request-entry-create-module.js.map