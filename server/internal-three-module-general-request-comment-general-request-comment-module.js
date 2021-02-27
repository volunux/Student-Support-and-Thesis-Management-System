exports.ids = ["internal-three-module-general-request-comment-general-request-comment-module"];
exports.modules = {

/***/ "RwP4":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/system/internal/internal-three/module/general-request-comment/general-request-comment-route-data.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'General Request Comment',
    'title': 'General Request Comment',
    'view': 'gen-internal',
    'viewWord': 'General Request Comment',
    'link': 'general-request-comment',
    '$link': 'general-request-comment',
    'systemGuideline': 'gen-internal'
};
const placeholder = { 'text': 'This is a comment', };
const RouteConfigData = {
    'dashboard': Object.assign({}, $$),
    'create': Object.assign(Object.assign({}, $$), { 'title': `Add a ${$$.systemType}`, 'controlFilters': ['status'], 'noEdit': false, placeholder }),
    'detail': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Detail` }),
    'update': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Update`, 'controlFilters': [], 'noEdit': false, placeholder }),
    'delete': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entry Delete`, 'controlFilters': ['status'], 'noEdit': true, placeholder }),
    'deleteAll': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries : Delete All` }),
    'entries': Object.assign(Object.assign({}, $$), { 'title': `${$$.systemType} Entries`, 'searchFilters': { 'status': 'Status' } }),
};


/***/ }),

/***/ "YXB/":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/system/internal/internal-three/module/general-request-comment/general-request-comment-routing.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GeneralRequestCommentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestCommentRoutingModule", function() { return GeneralRequestCommentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/guards/entry-delete-all.guard */ "/zEo");
/* harmony import */ var _internal_three_homepage_internal_three_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-three-homepage/internal-three-homepage.component */ "7jiy");
/* harmony import */ var _internal_three_dashboard_internal_three_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal-three-dashboard/internal-three-dashboard.component */ "2+2K");
/* harmony import */ var _internal_three_entries_internal_three_entries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal-three-entries/internal-three-entries.component */ "pWki");
/* harmony import */ var _internal_three_entry_detail_internal_three_entry_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal-three-entry-detail/internal-three-entry-detail.component */ "rA4p");
/* harmony import */ var _internal_three_entry_delete_internal_three_entry_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal-three-entry-delete/internal-three-entry-delete.component */ "8mha");
/* harmony import */ var _internal_three_entry_delete_all_internal_three_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../internal-three-entry-delete-all/internal-three-entry-delete-all.component */ "41SA");
/* harmony import */ var _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-request-comment-route-data */ "RwP4");












const route = [
    { 'path': '', 'component': _internal_three_homepage_internal_three_homepage_component__WEBPACK_IMPORTED_MODULE_3__["InternalThreeHomepageComponent"],
        'children': [
            { 'path': '', 'component': _internal_three_dashboard_internal_three_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["InternalThreeDashboardComponent"], 'data': { 'dashboard': _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__["RouteConfigData"].dashboard } },
            { 'path': 'entries', 'component': _internal_three_entries_internal_three_entries_component__WEBPACK_IMPORTED_MODULE_5__["InternalThreeEntriesComponent"], 'data': { 'entries': _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__["RouteConfigData"].entries } },
            { 'path': 'entry/:entry/detail', 'component': _internal_three_entry_detail_internal_three_entry_detail_component__WEBPACK_IMPORTED_MODULE_6__["InternalThreeEntryDetailComponent"], 'data': { 'detail': _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__["RouteConfigData"].detail } },
            { 'path': 'entry/:entry/delete', 'component': _internal_three_entry_delete_internal_three_entry_delete_component__WEBPACK_IMPORTED_MODULE_7__["InternalThreeEntryDeleteComponent"], 'data': { 'delete': _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__["RouteConfigData"].delete } },
            { 'path': 'entry/delete/all', 'component': _internal_three_entry_delete_all_internal_three_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_8__["InternalThreeEntryDeleteAllComponent"], 'canActivate': [_shared_guards_entry_delete_all_guard__WEBPACK_IMPORTED_MODULE_2__["EntryDeleteAllGuard"]], 'data': { 'deleteAll': _general_request_comment_route_data__WEBPACK_IMPORTED_MODULE_9__["RouteConfigData"].deleteAll } },
        ] },
];
class GeneralRequestCommentRoutingModule {
    constructor() {
    }
}
GeneralRequestCommentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestCommentRoutingModule });
GeneralRequestCommentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestCommentRoutingModule_Factory(t) { return new (t || GeneralRequestCommentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestCommentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestCommentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bhWz":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/system/internal/internal-three/module/general-request-comment/general-request-comment.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: GeneralRequestCommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRequestCommentModule", function() { return GeneralRequestCommentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_request_comment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-request-comment-routing.module */ "YXB/");
/* harmony import */ var _internal_three_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal-three.module */ "rBWn");





class GeneralRequestCommentModule {
}
GeneralRequestCommentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRequestCommentModule });
GeneralRequestCommentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRequestCommentModule_Factory(t) { return new (t || GeneralRequestCommentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _internal_three_module__WEBPACK_IMPORTED_MODULE_3__["InternalThreeModule"],
            _general_request_comment_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestCommentRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRequestCommentModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _internal_three_module__WEBPACK_IMPORTED_MODULE_3__["InternalThreeModule"],
        _general_request_comment_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestCommentRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRequestCommentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _internal_three_module__WEBPACK_IMPORTED_MODULE_3__["InternalThreeModule"],
                    _general_request_comment_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeneralRequestCommentRoutingModule"],
                ],
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=internal-three-module-general-request-comment-general-request-comment-module.js.map