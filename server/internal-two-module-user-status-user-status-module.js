exports.ids = ["internal-two-module-user-status-user-status-module"];
exports.modules = {

/***/ "+Mbp":
/*!*******************************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/user-status/user-status-route-data.ts ***!
  \*******************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'User Status',
    'title': 'User Status',
    'view': 'gen-internal',
    'viewWord': 'User Status',
    'link': 'user-status',
    '$link': 'user-status',
    'systemGuideline': 'gen-internal'
};
const placeholder = { 'name': 'active', 'description': 'A user account that is currently active', 'word': 'Active' };
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Add a ${$$.systemType}`, 'controlFilters': ['status', 'description'], 'noEdit': false, placeholder }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Detail` }),
    'update': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Update`, 'controlFilters': [], 'noEdit': false, placeholder }),
    'delete': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Delete`, 'controlFilters': ['description', 'status'], 'noEdit': true, placeholder }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'word': 'Word', 'name': 'Name', 'status': 'Status' } }),
};


/***/ }),

/***/ "8kqG":
/*!***********************************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/user-status/user-status-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatusRoutingModule", function() { return UserStatusRoutingModule; });
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
/* harmony import */ var _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-status-route-data */ "+Mbp");














const route = [
    { 'path': '', 'component': _internal_two_homepage_internal_two_homepage_component__WEBPACK_IMPORTED_MODULE_3__["InternalTwoHomepageComponent"],
        'children': [
            { 'path': '', 'component': _internal_two_dashboard_internal_two_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["InternalTwoDashboardComponent"], 'data': { 'dashboard': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].dashboard } },
            { 'path': 'entry/create', 'component': _internal_two_entry_create_internal_two_entry_create_component__WEBPACK_IMPORTED_MODULE_5__["InternalTwoEntryCreateComponent"], 'data': { 'create': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].create } },
            { 'path': 'entries', 'component': _internal_two_entries_internal_two_entries_component__WEBPACK_IMPORTED_MODULE_6__["InternalTwoEntriesComponent"], 'data': { 'entries': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].entries } },
            { 'path': 'entry/:entry/detail', 'component': _internal_two_entry_detail_internal_two_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["InternalTwoEntryDetailComponent"], 'data': { 'detail': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/update', 'component': _internal_two_entry_update_internal_two_entry_update_component__WEBPACK_IMPORTED_MODULE_8__["InternalTwoEntryUpdateComponent"], 'data': { 'update': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].update } },
            { 'path': 'entry/:entry/delete', 'component': _internal_two_entry_delete_internal_two_entry_delete_component__WEBPACK_IMPORTED_MODULE_9__["InternalTwoEntryDeleteComponent"], 'data': { 'delete': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].delete } },
            { 'path': 'entry/delete/all', 'component': _internal_two_entry_delete_all_internal_two_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_10__["InternalTwoEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _user_status_route_data__WEBPACK_IMPORTED_MODULE_11__["RouteConfigData"].deleteAll } },
        ] },
];
class UserStatusRoutingModule {
    constructor() {
    }
}
UserStatusRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserStatusRoutingModule });
UserStatusRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserStatusRoutingModule_Factory(t) { return new (t || UserStatusRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserStatusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatusRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QIz/":
/*!***************************************************************************************!*\
  !*** ./src/app/system/internal/internal-two/module/user-status/user-status.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UserStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatusModule", function() { return UserStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _user_status_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-status-routing.module */ "8kqG");
/* harmony import */ var _internal_two_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-two.module */ "n44/");





class UserStatusModule {
}
UserStatusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserStatusModule });
UserStatusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserStatusModule_Factory(t) { return new (t || UserStatusModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
            _user_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserStatusRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserStatusModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
        _user_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserStatusRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatusModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_two_module__WEBPACK_IMPORTED_MODULE_3__["InternalTwoModule"],
                    _user_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserStatusRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=internal-two-module-user-status-user-status-module.js.map