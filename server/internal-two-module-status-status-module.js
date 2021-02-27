exports.ids = ["internal-two-module-status-status-module"];
exports.modules = {

/***/ "6H2G":
/*!*********************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/status/status-route-data.ts ***!
  \*********************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'Status',
    'title': 'Status',
    'view': 'gen-internal',
    'viewWord': 'Status',
    'link': 'status',
    '$link': 'status',
    'systemGuideline': 'gen-internal'
};
const placeholder = { 'name': 'active', 'description': 'An entry that is currently in use', 'word': 'Active' };
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Add a ${$$.systemType}`, 'controlFilters': ['status', 'description'], 'noEdit': false, placeholder }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Detail` }),
    'update': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Update`, 'controlFilters': ['status'], 'noEdit': false, placeholder }),
    'delete': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Delete`, 'controlFilters': ['description', 'status'], 'noEdit': true, placeholder }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'word': 'Word', 'name': 'Name', 'status': 'Status' } }),
};


/***/ }),

/***/ "DppP":
/*!*****************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/status/status.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModule", function() { return StatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-routing.module */ "tPGa");
/* harmony import */ var _internal_two_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-two.module */ "n44/");





class StatusModule {
}
StatusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatusModule });
StatusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatusModule_Factory(t) { return new (t || StatusModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
            _status_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatusRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatusModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
        _status_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatusRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
                    _status_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatusRoutingModule"],
                ],
                providers: [],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "tPGa":
/*!*************************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/status/status-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: StatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusRoutingModule", function() { return StatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _internal_two_homepage_internal_two_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-two-homepage/internal-two-homepage.component */ "5+DG");
/* harmony import */ var _internal_two_dashboard_internal_two_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal-two-dashboard/internal-two-dashboard.component */ "bJ3i");
/* harmony import */ var _internal_two_entry_create_internal_two_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal-two-entry-create/internal-two-entry-create.component */ "zy3K");
/* harmony import */ var _internal_two_entries_internal_two_entries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal-two-entries/internal-two-entries.component */ "eQhB");
/* harmony import */ var _internal_two_entry_detail_internal_two_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal-two-entry-detail/internal-two-entry-detail.component */ "Gk5b");
/* harmony import */ var _internal_two_entry_update_internal_two_entry_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal-two-entry-update/internal-two-entry-update.component */ "NRVt");
/* harmony import */ var _internal_two_entry_delete_internal_two_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal-two-entry-delete/internal-two-entry-delete.component */ "PF9a");
/* harmony import */ var _internal_two_entry_delete_all_internal_two_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal-two-entry-delete-all/internal-two-entry-delete-all.component */ "unfq");
/* harmony import */ var _status_route_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status-route-data */ "6H2G");














const route = [
    { 'path': '', 'component': _internal_two_homepage_internal_two_homepage_component__WEBPACK_IMPORTED_MODULE_3__["InternalTwoHomepageComponent"],
        'children': [
            { 'path': '', 'component': _internal_two_dashboard_internal_two_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["InternalTwoDashboardComponent"], 'data': { 'dashboard': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].dashboard } },
            { 'path': 'entry/create', 'component': _internal_two_entry_create_internal_two_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["InternalTwoEntryCreateComponent"], 'data': { 'create': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].create } },
            { 'path': 'entries', 'component': _internal_two_entries_internal_two_entries_component__WEBPACK_IMPORTED_MODULE_6__["InternalTwoEntriesComponent"], 'data': { 'entries': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].entries } },
            { 'path': 'entry/:entry/detail', 'component': _internal_two_entry_detail_internal_two_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["InternalTwoEntryDetailComponent"], 'data': { 'detail': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/update', 'component': _internal_two_entry_update_internal_two_entry_update_component__WEBPACK_IMPORTED_MODULE_8__["InternalTwoEntryUpdateComponent"], 'data': { 'update': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].update } },
            { 'path': 'entry/:entry/delete', 'component': _internal_two_entry_delete_internal_two_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__["InternalTwoEntryDeleteComponent"], 'data': { 'delete': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].delete } },
            { 'path': 'entry/delete/all', 'component': _internal_two_entry_delete_all_internal_two_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["InternalTwoEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].deleteAll } },
        ] },
];
class StatusRoutingModule {
    constructor() {
    }
}
StatusRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatusRoutingModule });
StatusRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatusRoutingModule_Factory(t) { return new (t || StatusRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ })

};;
//# sourceMappingURL=internal-two-module-status-status-module.js.map