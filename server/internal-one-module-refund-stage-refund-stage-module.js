exports.ids = ["internal-one-module-refund-stage-refund-stage-module"];
exports.modules = {

/***/ "9287":
/*!*****************************************************************************************!*\
  !*** ./src/app/system/internal/internal-one/module/refund-stage/refund-stage.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: RefundStageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundStageModule", function() { return RefundStageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _refund_stage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refund-stage-routing.module */ "A1XY");
/* harmony import */ var _internal_one_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-one.module */ "YQjp");





class RefundStageModule {
}
RefundStageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundStageModule });
RefundStageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundStageModule_Factory(t) { return new (t || RefundStageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_one_module__WEBPACK_IMPORTED_MODULE_3__["InternalOneModule"],
            _refund_stage_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundStageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundStageModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_one_module__WEBPACK_IMPORTED_MODULE_3__["InternalOneModule"],
        _refund_stage_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundStageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundStageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_one_module__WEBPACK_IMPORTED_MODULE_3__["InternalOneModule"],
                    _refund_stage_routing_module__WEBPACK_IMPORTED_MODULE_2__["RefundStageRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "A1XY":
/*!*************************************************************************************************!*\
  !*** ./src/app/system/internal/internal-one/module/refund-stage/refund-stage-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: RefundStageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundStageRoutingModule", function() { return RefundStageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _internal_one_homepage_internal_one_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-one-homepage/internal-one-homepage.component */ "IWK0");
/* harmony import */ var _internal_one_dashboard_internal_one_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal-one-dashboard/internal-one-dashboard.component */ "sIR1");
/* harmony import */ var _internal_one_entry_create_internal_one_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal-one-entry-create/internal-one-entry-create.component */ "up7i");
/* harmony import */ var _internal_one_entries_internal_one_entries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal-one-entries/internal-one-entries.component */ "CceY");
/* harmony import */ var _internal_one_entry_detail_internal_one_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal-one-entry-detail/internal-one-entry-detail.component */ "YCNZ");
/* harmony import */ var _internal_one_entry_update_internal_one_entry_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal-one-entry-update/internal-one-entry-update.component */ "CFut");
/* harmony import */ var _internal_one_entry_delete_internal_one_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal-one-entry-delete/internal-one-entry-delete.component */ "nXPr");
/* harmony import */ var _internal_one_entry_delete_all_internal_one_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal-one-entry-delete-all/internal-one-entry-delete-all.component */ "f4D1");
/* harmony import */ var _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refund-stage-route-data */ "cUr+");














const route = [
    { 'path': '', 'component': _internal_one_homepage_internal_one_homepage_component__WEBPACK_IMPORTED_MODULE_3__["InternalOneHomepageComponent"],
        'children': [
            { 'path': '', 'component': _internal_one_dashboard_internal_one_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["InternalOneDashboardComponent"], 'data': { 'dashboard': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].dashboard } },
            { 'path': 'entry/create', 'component': _internal_one_entry_create_internal_one_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["InternalOneEntryCreateComponent"], 'data': { 'create': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].create } },
            { 'path': 'entries', 'component': _internal_one_entries_internal_one_entries_component__WEBPACK_IMPORTED_MODULE_6__["InternalOneEntriesComponent"], 'data': { 'entries': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].entries } },
            { 'path': 'entry/:entry/detail', 'component': _internal_one_entry_detail_internal_one_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["InternalOneEntryDetailComponent"], 'data': { 'detail': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/update', 'component': _internal_one_entry_update_internal_one_entry_update_component__WEBPACK_IMPORTED_MODULE_8__["InternalOneEntryUpdateComponent"], 'data': { 'update': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].update } },
            { 'path': 'entry/:entry/delete', 'component': _internal_one_entry_delete_internal_one_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__["InternalOneEntryDeleteComponent"], 'data': { 'delete': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].delete } },
            { 'path': 'entry/delete/all', 'component': _internal_one_entry_delete_all_internal_one_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["InternalOneEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _refund_stage_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].deleteAll } },
        ] },
];
class RefundStageRoutingModule {
    constructor() {
    }
}
RefundStageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefundStageRoutingModule });
RefundStageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefundStageRoutingModule_Factory(t) { return new (t || RefundStageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefundStageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefundStageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cUr+":
/*!*********************************************************************************************!*\
  !*** ./src/app/system/internal/internal-one/module/refund-stage/refund-stage-route-data.ts ***!
  \*********************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'Refund Stage',
    'title': 'Refund Stage',
    'view': 'gen-internal',
    'viewWord': 'Refund Stage',
    'link': 'refund-stage',
    '$link': 'refund-stage',
    'systemGuideline': 'gen-internal'
};
const placeholder = { 'name': 'Stage 1', 'description': 'Information Technology Services', 'abbreviation': 'ITS' };
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Add a ${$$.systemType}`, 'controlFilters': ['status', 'abbreviation'], 'noEdit': false, placeholder }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Detail` }),
    'update': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Update`, 'controlFilters': ['abbreviation'], 'noEdit': false, placeholder }),
    'delete': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Delete`, 'controlFilters': ['description', 'status', 'abbreviation'], 'noEdit': true, placeholder }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'name': 'Name', 'status': 'Status' } }),
};


/***/ })

};;
//# sourceMappingURL=internal-one-module-refund-stage-refund-stage-module.js.map