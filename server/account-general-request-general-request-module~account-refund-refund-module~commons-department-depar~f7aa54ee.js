exports.ids = ["account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee"];
exports.modules = {

/***/ "T+6q":
/*!*****************************************************************!*\
  !*** ./src/app/shared/module/general-all/general-all.module.ts ***!
  \*****************************************************************/
/*! exports provided: GeneralAllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralAllModule", function() { return GeneralAllModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-all-entry-delete-all/general-all-entry-delete-all.component */ "ku54");
/* harmony import */ var _general_all_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-all.service */ "BeQt");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");






class GeneralAllModule {
}
GeneralAllModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralAllModule });
GeneralAllModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralAllModule_Factory(t) { return new (t || GeneralAllModule)(); }, providers: [
        _general_all_service__WEBPACK_IMPORTED_MODULE_3__["GeneralAllService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralAllModule, { declarations: [_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_2__["GeneralAllEntryDeleteAllComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"]], exports: [_general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_2__["GeneralAllEntryDeleteAllComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralAllModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_2__["GeneralAllEntryDeleteAllComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_4__["GeneralModule"]
                ],
                providers: [
                    _general_all_service__WEBPACK_IMPORTED_MODULE_3__["GeneralAllService"]
                ],
                exports: [
                    _general_all_entry_delete_all_general_all_entry_delete_all_component__WEBPACK_IMPORTED_MODULE_2__["GeneralAllEntryDeleteAllComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ku54":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/module/general-all/general-all-entry-delete-all/general-all-entry-delete-all.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GeneralAllEntryDeleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralAllEntryDeleteAllComponent", function() { return GeneralAllEntryDeleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/error-messages.service */ "EUGn");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/notification.service */ "9nlD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _general_all_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general-all.service */ "BeQt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../general/resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _general_delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../general/delete-all-entry/delete-all-entry.component */ "1B5t");














function GeneralAllEntryDeleteAllComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function GeneralAllEntryDeleteAllComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r1.systemType)("view-type", ctx_r1.view);
} }
function GeneralAllEntryDeleteAllComponent_app_notification_screen_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function GeneralAllEntryDeleteAllComponent_app_notification_screen_3_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r2.notificationAvailable)("message", ctx_r2.notificationMessage);
} }
function GeneralAllEntryDeleteAllComponent_app_resource_unavailable_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resource-unavailable", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", ctx_r3.error);
} }
function GeneralAllEntryDeleteAllComponent_div_5_app_delete_all_entry_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-delete-all-entry", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r7.systemType);
} }
function GeneralAllEntryDeleteAllComponent_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralAllEntryDeleteAllComponent_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteAllEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralAllEntryDeleteAllComponent_div_5_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralAllEntryDeleteAllComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralAllEntryDeleteAllComponent_div_5_app_delete_all_entry_1_Template, 1, 1, "app-delete-all-entry", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralAllEntryDeleteAllComponent_div_5_button_2_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralAllEntryDeleteAllComponent_div_5_p_3_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.systemType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted);
} }
class GeneralAllEntryDeleteAllComponent {
    constructor(route, router, gas, ems, ns) {
        this.route = route;
        this.router = router;
        this.gas = gas;
        this.ems = ems;
        this.ns = ns;
        this.isError = false;
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.canDelete = false;
    }
    ngOnInit() {
        this.gas.$sa = this.$link;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.gas.deleteAllEntry();
        }))
            .subscribe((result) => {
            if (result == null) {
                this.canDelete = false;
                this.isError = true;
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            if (result != null && result.length > 0) {
                this.canDelete = true;
            }
        });
    }
    ngOnDestroy() {
        clearTimeout(this.deleteAllT);
    }
    deleteAllEntry() {
        let isConfirmed = confirm('Are you sure you want to proceed with this action?');
        if (!isConfirmed)
            return false;
        this.gas.$systemType = this.systemType;
        this.gas.$sa = this.$link;
        this.isFormSubmitted = true;
        this.error = null;
        this.isError = false;
        this.isFormProcessing = true;
        this.gas.$deleteAllEntry()
            .subscribe((result) => {
            if (result == null) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.isError = true;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`);
                this.error = Object.assign({ 'resource': `${this.systemType} Entry` }, this.ems.message);
            }
            else {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`);
                this.$entryChanges({});
            }
        });
    }
    $entryChanges(data) {
        this.deleteAllT = setTimeout(() => {
            return this.router.navigate(['system', 'internal', this.link]);
        }, 5000);
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
GeneralAllEntryDeleteAllComponent.ɵfac = function GeneralAllEntryDeleteAllComponent_Factory(t) { return new (t || GeneralAllEntryDeleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_all_service__WEBPACK_IMPORTED_MODULE_5__["GeneralAllService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
GeneralAllEntryDeleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralAllEntryDeleteAllComponent, selectors: [["app-general-all-entry-delete-all"]], inputs: { systemType: ["system-type", "systemType"], viewWord: ["view-word", "viewWord"], title: "title", view: "view", link: "link", $link: "$link" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]])], decls: 6, vars: 5, consts: [["id", "entry-delete-all"], [4, "ngIf"], [3, "system-type", "view-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "error", 4, "ngIf"], ["id", "entry-detail", 4, "ngIf"], [3, "system-type", "view-type"], [3, "notified", "message", "finished"], [3, "error"], ["id", "entry-detail"], [3, "system-type", 4, "ngIf"], ["class", "btn-submit", "type", "submit", 3, "click", 4, "ngIf"], [3, "system-type"], ["type", "submit", 1, "btn-submit", 3, "click"]], template: function GeneralAllEntryDeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralAllEntryDeleteAllComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralAllEntryDeleteAllComponent_app_view_description_2_Template, 1, 2, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralAllEntryDeleteAllComponent_app_notification_screen_3_Template, 1, 2, "app-notification-screen", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeneralAllEntryDeleteAllComponent_app_resource_unavailable_4_Template, 1, 1, "app-resource-unavailable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralAllEntryDeleteAllComponent_div_5_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_7__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_8__["NotificationScreenComponent"], _general_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_9__["ResourceUnavailableComponent"], _general_delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_10__["DeleteAllEntryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWFsbC1lbnRyeS1kZWxldGUtYWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralAllEntryDeleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-all-entry-delete-all',
                'templateUrl': './general-all-entry-delete-all.component.html',
                'styleUrls': ['./general-all-entry-delete-all.component.css'],
                'providers': [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _general_all_service__WEBPACK_IMPORTED_MODULE_5__["GeneralAllService"] }, { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"] }, { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], viewWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['view-word']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], $link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=account-general-request-general-request-module~account-refund-refund-module~commons-department-depar~f7aa54ee.js.map