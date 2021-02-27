exports.ids = ["account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1"];
exports.modules = {

/***/ "/zEo":
/*!*********************************************************!*\
  !*** ./src/app/shared/guards/entry-delete-all.guard.ts ***!
  \*********************************************************/
/*! exports provided: EntryDeleteAllGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryDeleteAllGuard", function() { return EntryDeleteAllGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class EntryDeleteAllGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        return this.isSuperAdministrator();
    }
    isSuperAdministrator() {
        if (this.aus.isSuperAdministrator) {
            return true;
        }
        else {
            return this.router.parseUrl('/unauthorized');
        }
    }
    canActivateChild(route, state) {
        return this.isSuperAdministrator();
    }
}
EntryDeleteAllGuard.ɵfac = function EntryDeleteAllGuard_Factory(t) { return new (t || EntryDeleteAllGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EntryDeleteAllGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EntryDeleteAllGuard, factory: EntryDeleteAllGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryDeleteAllGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "6hA3":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/module/simples/file-attachments-two/file-attachments-two.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FileAttachmentsTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileAttachmentsTwoComponent", function() { return FileAttachmentsTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function FileAttachmentsTwoComponent_ng_container_0_ng_container_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", doc_r3 == null ? null : doc_r3.location, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" File Attachment ", i_r4 + 1, " ");
} }
function FileAttachmentsTwoComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " File Attachments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileAttachmentsTwoComponent_ng_container_0_ng_container_1_li_5_Template, 3, 2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.entry == null ? null : ctx_r1.entry.documents);
} }
function FileAttachmentsTwoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileAttachmentsTwoComponent_ng_container_0_ng_container_1_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.documents) != null && (ctx_r0.entry == null ? null : ctx_r0.entry.documents == null ? null : ctx_r0.entry.documents.length) > 0);
} }
class FileAttachmentsTwoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FileAttachmentsTwoComponent.ɵfac = function FileAttachmentsTwoComponent_Factory(t) { return new (t || FileAttachmentsTwoComponent)(); };
FileAttachmentsTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileAttachmentsTwoComponent, selectors: [["app-file-attachments-two"]], inputs: { entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "entry-details-attachment"], [4, "ngFor", "ngForOf"], ["target", "_blank", 1, "entry-attachment", 3, "href"]], template: function FileAttachmentsTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileAttachmentsTwoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWF0dGFjaG1lbnRzLXR3by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileAttachmentsTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-file-attachments-two',
                'templateUrl': './file-attachments-two.component.html',
                'styleUrls': ['./file-attachments-two.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "BeQt":
/*!******************************************************************!*\
  !*** ./src/app/shared/module/general-all/general-all.service.ts ***!
  \******************************************************************/
/*! exports provided: GeneralAllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralAllService", function() { return GeneralAllService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-messages.service */ "EUGn");







class GeneralAllService {
    constructor(http, apiConfig, ems) {
        this.http = http;
        this.apiConfig = apiConfig;
        this.ems = ems;
    }
    deleteAllEntry() {
        let link = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;
        return this.http.get(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    $deleteAllEntry() {
        let link = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;
        return this.http.delete(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((val) => { return { 'allDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`${this.$systemType} Entry or Entries Delete`, null)));
    }
    deleteManyEntry(this$, dls) {
        let confirmDeletion = confirm('Are you sure you want to perform this action?');
        if (confirmDeletion) {
            if (this$.p$esdl)
                return false;
            this$.p$esdl = true;
            dls.$deleteManyEntry(this$.esdl)
                .subscribe((result) => {
                if (result == null) {
                    this$.p$esdl = false;
                    this$.ns.setNotificationStatus(true);
                    this$.ns.addNotification(`Operation is unsuccessful and many ${this$.systemType} Entry is not deleted.`);
                }
                else if (result != null && result.manyDeleted == true) {
                    this$.p$esdl = false;
                    this$.entries = this$.entries.filter((entry) => {
                        this$.ns.setNotificationStatus(true);
                        this$.ns.addNotification(`Operation is successful and many ${this$.systemType} Entry is deleted.`);
                        return this$.esdl.indexOf(entry.num) < 0;
                    });
                    this$.esdl = [];
                }
            });
        }
        else {
            return false;
        }
    }
    addEntryToDeleteList(gridx, checked, idx, this$) {
        if (checked == true) {
            if (gridx > 0)
                this$.esdl.push(gridx);
        }
        else if (!checked && this$.esdl.indexOf(gridx) > -1) {
            this$.esdl = this$.esdl.filter((id) => {
                let finalId = id != gridx;
                if (finalId)
                    return '' + finalId;
                return false;
            });
        }
    }
    paramProcessor(params, this$) {
        let whichPage = params.get('page'), whichRef = params.get('name');
        this$.$entryRef = whichRef ? true : 0;
        this$.pageNumber = +whichPage ? +whichPage : 1;
        let paramsRegister = params, paramKeys = paramsRegister.keys, paramsObject = {};
        for (let key of paramKeys) {
            let param = paramsRegister.get(key);
            if (param)
                paramsObject[key] = param;
        }
        if (Object.keys(this$.gss.searchQuery).length)
            paramsObject = Object.assign(Object.assign({}, paramsObject), this$.gss.searchQuery);
        return paramsObject;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
GeneralAllService.ɵfac = function GeneralAllService_Factory(t) { return new (t || GeneralAllService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GeneralAllService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralAllService, factory: GeneralAllService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralAllService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_3__["Api_Token"]]
            }] }, { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "O/oE":
/*!*********************************************************!*\
  !*** ./src/app/shared/module/simples/simples.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplesModule", function() { return SimplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination/pagination.component */ "scZC");
/* harmony import */ var _file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-attachments-two/file-attachments-two.component */ "6hA3");







class SimplesModule {
}
SimplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimplesModule });
SimplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimplesModule_Factory(t) { return new (t || SimplesModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplesModule, { declarations: [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"],
        _file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_4__["FileAttachmentsTwoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"],
        _file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_4__["FileAttachmentsTwoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"],
                    _file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_4__["FileAttachmentsTwoComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([])
                ],
                providers: [],
                exports: [
                    _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"],
                    _file_attachments_two_file_attachments_two_component__WEBPACK_IMPORTED_MODULE_4__["FileAttachmentsTwoComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "scZC":
/*!**************************************************************************!*\
  !*** ./src/app/shared/module/simples/pagination/pagination.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function PaginationComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_0_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.prevPage(ctx_r7.pageNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Prev Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PaginationComponent_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_0_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.homePage(ctx_r9.pageNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prev Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_0_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.nextPage(ctx_r11.pageNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Next Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PaginationComponent_ng_container_0_ng_template_7_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End of Entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function PaginationComponent_ng_container_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_ng_container_0_ng_template_7_button_0_Template, 2, 3, "button", 8);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.$entriesLength >= 1);
} }
function PaginationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_ng_container_0_ng_container_2_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_ng_container_0_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_container_0_ng_container_6_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginationComponent_ng_container_0_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pageNumber && ctx_r0.pageNumber > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.$entryRef && ctx_r0.$entriesLength > 10)("ngIfElse", _r5);
} }
class PaginationComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    homePage(num) {
        this.router.navigate(["./"], { 'relativeTo': this.route, 'skipLocationChange': true });
    }
    nextPage(num) {
        this.router.navigate(["./"], { 'queryParams': { "page": num + 1 }, 'relativeTo': this.route, 'skipLocationChange': true });
    }
    prevPage(num) {
        this.router.navigate(["./"], { 'queryParams': { "page": num - 1 == 1 ? null : num - 1 }, 'relativeTo': this.route, 'skipLocationChange': true });
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { $entriesLength: ["entries-length", "$entriesLength"], pageNumber: ["page-number", "pageNumber"], $entryRef: ["entry-ref", "$entryRef"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["colspan", "3"], ["entriesBegin", ""], ["colspan", "9"], [4, "ngIf", "ngIfElse"], ["entriesEnd", ""], [1, "pagination", "prev", "center", 3, "click"], [1, "pagination", "next", "center", 3, "click"], ["class", "pagination-end float-right center", 3, "disabled", 4, "ngIf"], [1, "pagination-end", "float-right", "center", 3, "disabled"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_ng_container_0_Template, 9, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageNumber);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n\r\n\tdisplay : contents;\r\n};\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7QUFDbkIsQ0FBQSIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG5cdGRpc3BsYXkgOiBjb250ZW50cztcclxufTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-pagination',
                'templateUrl': './pagination.component.html',
                'styleUrls': ['./pagination.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { $entriesLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entries-length']
        }], pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['page-number']
        }], $entryRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-ref']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~3b1deaa1.js.map