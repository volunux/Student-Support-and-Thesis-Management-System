exports.ids = ["account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca"];
exports.modules = {

/***/ "+ef2":
/*!************************************************************************!*\
  !*** ./src/app/general/view-description/view-description.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDescriptionComponent", function() { return ViewDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function ViewDescriptionComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.view, " ");
} }
class ViewDescriptionComponent {
    constructor() {
        this.name = '';
    }
    set viewDesc(name) {
        this.name = name;
    }
    get view() {
        return this.entries[this.name];
    }
    ngOnInit() {
        this.entries = {
            'aug': `This section of the system allows you to perform administrator related actions such as adding a user , viewing and making changes to user and also analyzing the user statistics.`,
            'ca': `Administrators are allowed to create user profiles which can perform actions in the system or use other processess to fulfill request when necessary.`,
            'gr': `Users who are members of this system will be able to perform limited and to some extent administrative actions such as adding a request , deleting and update a request entry.

            This section of the system will allows students primarilty to send request so that they can get it resolved by the appropriate department.`,
            'rf': `All regular and part-time students are required to pay the school registration fees or dues which enables them to perform various activities like course registration,

            checking of semester results, clearance, and other student school academic related activities. In the process of making payment, issues might arise such as 

            the case of an intermitent network that would result in double or more debit of a user bank account for the same service. If you are in this situation and you have (which you should) 

            necessary documents and evidences proving that your bank account was debited double or multiple times and want to request for a refund. You can fill in and submit the form below

            to have it investigated and reviewed by the appropriate department for resolution.`,
            'dp': `Student can make payment for departmental fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits. While this may not entice some student given what they might perceive as unsatisfaction. 

            A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students will be allowed 

            to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after successful payment.`,
            'gp': `Student can make payment for departmental fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits. While this may not entice some student given what they might perceive as unsatisfaction. 

            A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students will be allowed 

            to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after successful payment.`,
            'fp': `Student can make payment for faculty dues and fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits each academic session regularly. While this may not entice some student given what they might perceive as

            unsatisfaction. A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students

            will be allowed to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after

            successful payment.`,
            'uup': `Users of the application or that are members of this system can update their account at anytime so they desire.

            Changes once made are permanent for the moment and can still be changed later if desired by the user.`,
            'up': `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.`,
            'upv': `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.`,
            'cp': `Users who are member of the system are allowed and free to change their existing password and replace it with a new one so as to protect their account from unauthorized access by 

            other users or an anonymous and then to protect from any kind of security breach.`,
            'udp': `Users who are member of the system are allowed and free to deactivate their profile if they so wishes and will be allowed to reactivate their profiles so that they will continue

            to be able to use the system and perform actions offered by the system.`,
            'urp': `Users who are member of the system are allowed and free to reactivate their profile if they so wishesand will be allowed continue to be able to use the system and perform actions

            offered by the system.`,
            'uadp': `All user profiles if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete all user profiles or account from the system.`,
            'dup': `User profile if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete user profile or account from the system.`,
            'cppas': `Users or member of the system will be allowed and are free to change their existing signature and profile picture and replace it with a new one so that they can perform

            other access efficiently and effectively.`,
            'ups': `A list of users that are members of the system or application. Users with priveleges of a Super Administrator will be able to view and edit and also remove user profiles from 

            the system. He or she can also make analysis of the users that are registered with this system to be able to make important decisions which would make efficiently and effectively

            the use of this system to the highest level.`,
            'pr': `A user who have forgotten his or her password can provide his or her email address and get a chance to reset the profile password to the desired choice.`,
            'ud': `A user who is a member of the system can view his or her dashboard to create requests and make payments. Examples of a request that a user can perform are rectification of issues

            during academic course registration , in need of internet facility credentials for the first time and wanting to make payment for departmental and faculty fee.

            All Users who are students are allowed to create a request else operation will be rejected.`,
            'general-entry': `As a member of the system, you are eligible to make request and payment for different purpose as defined by the body of the school or institution.`,
            'upr': `A user who is a member of the system can review his or her own profile and perform some of the following actions freely at any time of choosing.`,
            'gen-internal': `This section of the system allows you to perform administrator and user related actions such as adding a ${this.systemType} , viewing and making changes 

                      to ${this.systemType} and also analyzing the ${this.systemType} statistics.`
        };
    }
}
ViewDescriptionComponent.ɵfac = function ViewDescriptionComponent_Factory(t) { return new (t || ViewDescriptionComponent)(); };
ViewDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewDescriptionComponent, selectors: [["app-view-description"]], inputs: { systemType: ["system-type", "systemType"], name: ["view-type", "name"], viewDesc: ["view-description", "viewDesc"] }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ViewDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewDescriptionComponent_p_0_Template, 2, 1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-view-description',
                'templateUrl': './view-description.component.html',
                'styleUrls': ['./view-description.component.css'],
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['view-type']
        }], viewDesc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['view-description']
        }] }); })();


/***/ }),

/***/ "1B5t":
/*!************************************************************************!*\
  !*** ./src/app/general/delete-all-entry/delete-all-entry.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteAllEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllEntryComponent", function() { return DeleteAllEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class DeleteAllEntryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DeleteAllEntryComponent.ɵfac = function DeleteAllEntryComponent_Factory(t) { return new (t || DeleteAllEntryComponent)(); };
DeleteAllEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteAllEntryComponent, selectors: [["app-delete-all-entry"]], inputs: { systemType: ["system-type", "systemType"] }, decls: 2, vars: 2, template: function DeleteAllEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("All ", ctx.systemType, " entry if the button is confirmed will result in total deletion or exclusion from the system or database. It is advised you review your decision before pressing the confirmation button which will remove or delete all ", ctx.systemType, " entry from the system. ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYWxsLWVudHJ5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteAllEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-delete-all-entry',
                'templateUrl': './delete-all-entry.component.html',
                'styleUrls': ['./delete-all-entry.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }] }); })();


/***/ }),

/***/ "8tjC":
/*!**************************************************************************************!*\
  !*** ./src/app/general/general-form-validators/general-form-validators.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GeneralFormValidatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFormValidatorsComponent", function() { return GeneralFormValidatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " , ");
} }
function GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_ng_template_3_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sv_r5 = ctx.$implicit;
    const lss_r6 = ctx.last;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sv_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lss_r6)("ngIfElse", _r8);
} }
function GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.search.errors.searchError.searches);
} }
function GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Search value of ", ctx_r2.systemType, " should be either of the followings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.search.errors == null ? null : ctx_r2.search.errors.searchError == null ? null : ctx_r2.search.errors.searchError.searches);
} }
function GeneralFormValidatorsComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralFormValidatorsComponent_ng_container_0_div_1_li_2_Template, 3, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.search.errors == null ? null : ctx_r1.search.errors.required) || (ctx_r1.search.errors == null ? null : ctx_r1.search.errors.searchError));
} }
function GeneralFormValidatorsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralFormValidatorsComponent_ng_container_0_div_1_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.search.invalid && (ctx_r0.search.touched || ctx_r0.search.dirty));
} }
class GeneralFormValidatorsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GeneralFormValidatorsComponent.ɵfac = function GeneralFormValidatorsComponent_Factory(t) { return new (t || GeneralFormValidatorsComponent)(); };
GeneralFormValidatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralFormValidatorsComponent, selectors: [["app-general-form-validators"]], inputs: { systemType: ["system-type", "systemType"], search: "search" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["iAmNotLast", ""]], template: function GeneralFormValidatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneralFormValidatorsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWZvcm0tdmFsaWRhdG9ycy5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralFormValidatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-general-form-validators',
                'templateUrl': './general-form-validators.component.html',
                'styleUrls': ['./general-form-validators.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9nlD":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class NotificationService {
    constructor() {
        this.notificationAvailable = false;
        this.notificationMessage = '';
    }
    removeNotification() {
        this.notificationAvailable = false;
        this.notificationMessage = null;
    }
    addNotification(message) {
        this.notificationMessage = message;
    }
    notificationStatus() {
        return this.notificationAvailable;
    }
    setNotificationStatus(status) {
        this.notificationAvailable = status;
    }
    getNotificationMessage() {
        return this.notificationMessage;
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9yhg":
/*!****************************************************************************!*\
  !*** ./src/app/general/list-entry-options/list-entry-options.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListEntryOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEntryOptionsComponent", function() { return ListEntryOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ListEntryOptionsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ListEntryOptionsComponent.ɵfac = function ListEntryOptionsComponent_Factory(t) { return new (t || ListEntryOptionsComponent)(); };
ListEntryOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListEntryOptionsComponent, selectors: [["app-list-entry-options"]], decls: 9, vars: 0, consts: [[1, "entry-options"], [1, "bold"]], template: function ListEntryOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entries Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Guidelines : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A member of the system can use the input field below to search for an entry or entries that exists in the records. When the inputs becomes valid, the \"Submit\" button will become active by turning its color from black to purple. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " More than one entry can be deleted or removed at the same time from the database or records. When the cicle marker beside each entry far left is checked and highlighted in purple and the entries highlighted are at least 2, A button with the label \"Delete Many\" will display and become active so that the administrator or moderator or member with privilege can take action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWVudHJ5LW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListEntryOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-list-entry-options',
                'templateUrl': './list-entry-options.component.html',
                'styleUrls': ['./list-entry-options.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EUGn":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/error-messages.service.ts ***!
  \***********************************************************/
/*! exports provided: ErrorMessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesService", function() { return ErrorMessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _interfaces_general_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/general-errors */ "Tstc");



class ErrorMessagesService {
    constructor() {
        this.errorMessages = _interfaces_general_errors__WEBPACK_IMPORTED_MODULE_1__["Errors"];
    }
    get message() {
        return this.errorMessages.search;
    }
    set message(errors) {
        this.errorMessages.search = errors;
        this.errorMessages.search.statusText = errors.statusText;
    }
}
ErrorMessagesService.ɵfac = function ErrorMessagesService_Factory(t) { return new (t || ErrorMessagesService)(); };
ErrorMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorMessagesService, factory: ErrorMessagesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Rxsk":
/*!******************************************************************************!*\
  !*** ./src/app/general/notification-screen/notification-screen.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationScreenComponent", function() { return NotificationScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



const _c0 = function (a1, a2) { return { "notification": true, "fade-in": a1, "fade-out": a2 }; };
function NotificationScreenComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.fadeIn, ctx_r0.fadeOut));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notificationMessage, " ");
} }
class NotificationScreenComponent {
    constructor() {
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set notified(confirmed) {
        this.notificationAvailable = confirmed;
        if (confirmed) {
            this.fadeIn = true;
            this.fadeOutNotification();
        }
    }
    ;
    get notified() {
        return this.notificationAvailable;
    }
    fadeOutNotification() {
        setTimeout(() => {
            this.fadeIn = false;
            this.fadeOut = true;
            this.removeNotification();
        }, 4000);
    }
    removeNotification() {
        setTimeout(() => {
            this.finished.emit(true);
        }, 4000);
    }
    ngOnInit() {
    }
}
NotificationScreenComponent.ɵfac = function NotificationScreenComponent_Factory(t) { return new (t || NotificationScreenComponent)(); };
NotificationScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationScreenComponent, selectors: [["app-notification-screen"]], inputs: { notificationMessage: ["message", "notificationMessage"], notified: "notified" }, outputs: { finished: "finished" }, decls: 2, vars: 1, consts: [["id", "notification-parent"], [3, "class", 4, "ngIf"]], template: function NotificationScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationScreenComponent_p_1_Template, 2, 6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#notification-parent[_ngcontent-%COMP%] {\r\n\r\n\tposition : relative;\r\n\twidth : 100%;\r\n\r\n}\r\n\r\n.notification[_ngcontent-%COMP%] {\r\n\r\n\tposition : fixed;\r\n\twidth : 600px;\r\n\tbackground-color : #2f0348;\r\n\tcolor : white;\r\n\tmargin : 0px auto;\r\n\ttop : 40px;\r\n\tleft : 50px;\r\n\tborder-radius : 6px;\r\n\tpadding : 0px 10px;\r\n\tfont-family : 'Arial';\r\n\topacity : 1.0;\r\n\tfont-size : 10px;\r\n\tborder : 2px solid #a984c7;\r\n\tdisplay : block;\r\n}\r\n\r\n.fade-in[_ngcontent-%COMP%] {\r\n  animation: fadeIn ease 3s;\r\n  -webkit-animation: fadeIn ease 3s;\r\n  -moz-animation: fadeIn ease 3s;\r\n  -o-animation: fadeIn ease 3s;\r\n  -ms-animation: fadeIn ease 3s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n.fade-out[_ngcontent-%COMP%] {\r\n  animation: fadeOut ease 4s;\r\n  -webkit-animation: fadeOut ease 4s;\r\n  -moz-animation: fadeOut ease 4s;\r\n  -o-animation: fadeOut ease 4s;\r\n  -ms-animation: fadeOut ease 4s;\r\n}\r\n\r\n@keyframes fadeOut {\r\n  0% {\r\n    opacity:1;\r\n    display : block;\r\n  }\r\n  100% {\r\n    opacity:0;\r\n    display : none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width : 700px) {\r\n\r\n.notification[_ngcontent-%COMP%] {\r\n\r\n\tleft : 50px;\r\n\twidth : 350px;\r\n}\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsWUFBWTs7QUFFYjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQiwwQkFBMEI7Q0FDMUIsZUFBZTtBQUNoQjs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkOzs7QUFHQSIsImZpbGUiOiJub3RpZmljYXRpb24tc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm90aWZpY2F0aW9uLXBhcmVudCB7XHJcblxyXG5cdHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcblx0d2lkdGggOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcblxyXG5cdHBvc2l0aW9uIDogZml4ZWQ7XHJcblx0d2lkdGggOiA2MDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yIDogIzJmMDM0ODtcclxuXHRjb2xvciA6IHdoaXRlO1xyXG5cdG1hcmdpbiA6IDBweCBhdXRvO1xyXG5cdHRvcCA6IDQwcHg7XHJcblx0bGVmdCA6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1cyA6IDZweDtcclxuXHRwYWRkaW5nIDogMHB4IDEwcHg7XHJcblx0Zm9udC1mYW1pbHkgOiAnQXJpYWwnO1xyXG5cdG9wYWNpdHkgOiAxLjA7XHJcblx0Zm9udC1zaXplIDogMTBweDtcclxuXHRib3JkZXIgOiAycHggc29saWQgI2E5ODRjNztcclxuXHRkaXNwbGF5IDogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZmFkZS1pbiB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAzcztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlIDNzO1xyXG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZhZGUtb3V0IHtcclxuICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSA0cztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgNHM7XHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgNHM7XHJcbiAgLW1zLWFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDRzO1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIGRpc3BsYXkgOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDcwMHB4KSB7XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuXHJcblx0bGVmdCA6IDUwcHg7XHJcblx0d2lkdGggOiAzNTBweDtcclxufVxyXG5cclxuXHJcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-notification-screen',
                'templateUrl': './notification-screen.component.html',
                'styleUrls': ['./notification-screen.component.css'],
                'changeDetection': _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { finished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notificationMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['message']
        }], notified: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "TY4h":
/*!********************************************************************************!*\
  !*** ./src/app/general/resource-unavailable/resource-unavailable.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResourceUnavailableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceUnavailableComponent", function() { return ResourceUnavailableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function ResourceUnavailableComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message : ", ctx_r1.error.error.message, "");
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Message : ", ctx_r12.error.error.field.message, "");
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceUnavailableComponent_ng_container_0_ng_template_6_ng_container_0_Template, 3, 3, "ng-container", 1);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.error == null ? null : ctx_r3.error.error == null ? null : ctx_r3.error.error.field)("ngIfElse", _r4);
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_8_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const fieldError_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.error.error[fieldError_r15] == null ? null : ctx_r14.error.error[fieldError_r15].message, " ");
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of Errors : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResourceUnavailableComponent_ng_container_0_ng_template_8_ng_container_0_ng_container_3_Template, 4, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.errorKeys);
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceUnavailableComponent_ng_container_0_ng_template_8_ng_container_0_Template, 4, 1, "ng-container", 0);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.error == null ? null : ctx_r5.error.error) && ctx_r5.error.status && (ctx_r5.errorKeys == null ? null : ctx_r5.errorKeys.length));
} }
function ResourceUnavailableComponent_ng_container_0_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status Code : ", ctx_r6.error.status, " ");
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status Code : 00000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourceUnavailableComponent_ng_container_0_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status Text : ", ctx_r9.error.statusText, " ");
} }
function ResourceUnavailableComponent_ng_container_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status Text : This is probably a network error or internal server error. Please check your internet connection or restart your browser and try again or refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourceUnavailableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " An Error has occured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResourceUnavailableComponent_ng_container_0_ng_container_5_Template, 3, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResourceUnavailableComponent_ng_container_0_ng_template_6_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResourceUnavailableComponent_ng_container_0_ng_template_8_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResourceUnavailableComponent_ng_container_0_p_10_Template, 2, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResourceUnavailableComponent_ng_container_0_ng_template_11_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResourceUnavailableComponent_ng_container_0_p_13_Template, 2, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResourceUnavailableComponent_ng_container_0_ng_template_14_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Resource : ", ctx_r0.error.resource, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error == null ? null : ctx_r0.error.error == null ? null : ctx_r0.error.error.message)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error.status)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error.statusText != "Unknown Error")("ngIfElse", _r10);
} }
class ResourceUnavailableComponent {
    constructor() {
        this.errorKeys = [];
    }
    set $error(val) {
        if (val.error) {
            this.errorKeys = Object.keys(val.error);
            this.error = val;
        }
    }
    ;
    ngOnInit() {
    }
}
ResourceUnavailableComponent.ɵfac = function ResourceUnavailableComponent_Factory(t) { return new (t || ResourceUnavailableComponent)(); };
ResourceUnavailableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceUnavailableComponent, selectors: [["app-resource-unavailable"]], inputs: { $error: ["error", "$error"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["fieldErr", ""], ["otherErr", ""], ["noStatusCode", ""], ["noStatusText", ""], [4, "ngFor", "ngForOf"], [1, "validation-errors"]], template: function ResourceUnavailableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceUnavailableComponent_ng_container_0_Template, 16, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZS11bmF2YWlsYWJsZS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceUnavailableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-resource-unavailable',
                'templateUrl': './resource-unavailable.component.html',
                'styleUrls': ['./resource-unavailable.component.css'],
                'changeDetection': _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { $error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['error']
        }] }); })();


/***/ }),

/***/ "hxwH":
/*!*******************************************!*\
  !*** ./src/app/general/general.module.ts ***!
  \*******************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-unavailable/resource-unavailable.component */ "TY4h");
/* harmony import */ var _notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-entry-options/list-entry-options.component */ "9yhg");
/* harmony import */ var _delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-all-entry/delete-all-entry.component */ "1B5t");
/* harmony import */ var _view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-description/view-description.component */ "+ef2");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "xlhj");
/* harmony import */ var _general_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general-form.service */ "skqr");
/* harmony import */ var _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/general-services.module */ "kPid");
/* harmony import */ var _general_form_validators_general_form_validators_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general-form-validators/general-form-validators.component */ "8tjC");















class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, providers: [
        _general_form_service__WEBPACK_IMPORTED_MODULE_10__["GeneralFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_11__["GeneralServicesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_4__["ResourceUnavailableComponent"],
        _notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"],
        _list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_6__["ListEntryOptionsComponent"],
        _delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAllEntryComponent"],
        _view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
        _general_form_validators_general_form_validators_component__WEBPACK_IMPORTED_MODULE_12__["GeneralFormValidatorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_11__["GeneralServicesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"],
        _resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_4__["ResourceUnavailableComponent"],
        _list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_6__["ListEntryOptionsComponent"],
        _delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAllEntryComponent"],
        _view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_4__["ResourceUnavailableComponent"],
                    _notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"],
                    _list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_6__["ListEntryOptionsComponent"],
                    _delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAllEntryComponent"],
                    _view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                    _general_form_validators_general_form_validators_component__WEBPACK_IMPORTED_MODULE_12__["GeneralFormValidatorsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_services_general_services_module__WEBPACK_IMPORTED_MODULE_11__["GeneralServicesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([])
                ],
                exports: [
                    _notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"],
                    _resource_unavailable_resource_unavailable_component__WEBPACK_IMPORTED_MODULE_4__["ResourceUnavailableComponent"],
                    _list_entry_options_list_entry_options_component__WEBPACK_IMPORTED_MODULE_6__["ListEntryOptionsComponent"],
                    _delete_all_entry_delete_all_entry_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAllEntryComponent"],
                    _view_description_view_description_component__WEBPACK_IMPORTED_MODULE_8__["ViewDescriptionComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
                ],
                providers: [
                    _general_form_service__WEBPACK_IMPORTED_MODULE_10__["GeneralFormService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "iPJu":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/general-search.service.ts ***!
  \***********************************************************/
/*! exports provided: GeneralSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSearchService", function() { return GeneralSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration */ "VcWf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-messages.service */ "EUGn");








class GeneralSearchService {
    constructor(apiConfig, http, ems) {
        this.apiConfig = apiConfig;
        this.http = http;
        this.ems = ems;
        this.searchQuery = {};
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchTerm$ = this.searchTerm.asObservable();
        this.entriesSearched = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.entriesSearched$ = this.entriesSearched.asObservable();
        this.clearSearch = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.clearSearch$ = this.clearSearch.asObservable();
        this.searchCleared = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchCleared$ = this.searchCleared.asObservable();
        this.errorExist = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.errorExist$ = this.errorExist.asObservable();
    }
    searchTerms(sq, st, resource) {
        let link = `${this.apiConfig.host}/${st}/entries`;
        let httpOptions = { 'params': new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ 'fromObject': Object.assign({}, sq) }) };
        return this.http.get(link, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`${this.$systemType} Entries`, null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
}
GeneralSearchService.ɵfac = function GeneralSearchService_Factory(t) { return new (t || GeneralSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
GeneralSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralSearchService, factory: GeneralSearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_1__["Api_Token"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "inDW":
/*!************************************************************!*\
  !*** ./src/app/shared/services/form-validators.service.ts ***!
  \************************************************************/
/*! exports provided: searchValidator, emailAddressValidator, statusValidator, numberValidator, abbreviationValidator, roleValidator, forbiddenNamesValidator, firstLastNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchValidator", function() { return searchValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailAddressValidator", function() { return emailAddressValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusValidator", function() { return statusValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberValidator", function() { return numberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbreviationValidator", function() { return abbreviationValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleValidator", function() { return roleValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNamesValidator", function() { return forbiddenNamesValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstLastNames", function() { return firstLastNames; });
function searchValidator(filters) {
    return (control) => {
        let searches = Object.keys(filters);
        let $searches = Object.values(filters);
        let entry = control.value;
        return entry != '' && searches.indexOf(entry) < 0 ? { 'searchError': { 'value': entry, 'searches': $searches } } : null;
    };
}
function emailAddressValidator(emailAddress) {
    return (control) => {
        const email = emailAddress.test(control.value);
        return !email ? { 'email_address': { 'value': control.value } } : null;
    };
}
function statusValidator(filters) {
    return (control) => {
        let statuses = Object.keys(filters);
        let $statuses = Object.values(filters);
        let entry = control.value;
        return statuses.indexOf(entry) < 0 ? { 'statusError': { 'value': entry, 'statuses': $statuses } } : null;
    };
}
function numberValidator() {
    return (control) => {
        let entry = control.value;
        return Number.isInteger(entry) ? null : { 'numError': { 'value': entry.value } };
    };
}
function abbreviationValidator() {
    return (control) => {
        let entry = control.value;
        return Number.isInteger(entry) ? null : { 'abbreviationError': { 'value': entry } };
    };
}
function roleValidator() {
    let $roles = ['Student', 'Department President', 'Faculty President', 'Lecturer', 'Staff',
        'Head of Department', 'Dean of Faculty', 'Bursar', 'Moderator', 'Administrator', 'Super Administrator'];
    let roles = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;
    return (control) => {
        let entry = control.value;
        return roles.test(entry) ? { 'roleError': { 'value': entry, 'roles': $roles } } : null;
    };
}
function forbiddenNamesValidator(name) {
    let $names = ['Student', 'Department President', 'Faculty President', 'Lecturer', 'Staff',
        'Head of Department', 'Dean of Faculty', 'Bursar', 'Moderator', 'Administrator', 'Super Administrator'];
    let names = /moderator|administrator|superAdministrator|hod|deanstudent|departmentPresident|facultyPresident|bursar|lecturer|staff/i;
    return (control) => {
        const forbidden = names.test(control.value);
        return forbidden ? { forbiddenNames: { 'value': control.value, 'names': $names } } : null;
    };
}
function firstLastNames() {
    return (controlsAncestor) => {
        const firstName = controlsAncestor.get('first_name');
        const lastName = controlsAncestor.get('last_name');
        return firstName && lastName && firstName.value == lastName.value ? { 'bothNames': { 'value': firstName.value + lastName.value } } : null;
    };
}


/***/ }),

/***/ "kPid":
/*!************************************************************!*\
  !*** ./src/app/shared/services/general-services.module.ts ***!
  \************************************************************/
/*! exports provided: GeneralServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralServicesModule", function() { return GeneralServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-messages.service */ "EUGn");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "9nlD");
/* harmony import */ var _general_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-search.service */ "iPJu");






class GeneralServicesModule {
}
GeneralServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralServicesModule });
GeneralServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralServicesModule_Factory(t) { return new (t || GeneralServicesModule)(); }, providers: [
        _error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"],
        _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
        _general_search_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSearchService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralServicesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [],
                providers: [
                    _error_messages_service__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesService"],
                    _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
                    _general_search_service__WEBPACK_IMPORTED_MODULE_4__["GeneralSearchService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "skqr":
/*!*************************************************!*\
  !*** ./src/app/general/general-form.service.ts ***!
  \*************************************************/
/*! exports provided: GeneralFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFormService", function() { return GeneralFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/form-validators.service */ "inDW");




class GeneralFormService {
    constructor() {
    }
    searchForm(searchFilters) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [Object(_shared_services_form_validators_service__WEBPACK_IMPORTED_MODULE_2__["searchValidator"])(searchFilters)]);
    }
}
GeneralFormService.ɵfac = function GeneralFormService_Factory(t) { return new (t || GeneralFormService)(); };
GeneralFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralFormService, factory: GeneralFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xlhj":
/*!****************************************************!*\
  !*** ./src/app/general/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/general-search.service */ "iPJu");
/* harmony import */ var _general_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-form.service */ "skqr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_form_validators_general_form_validators_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general-form-validators/general-form-validators.component */ "8tjC");









function SearchComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", opt_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r7.value, " ");
} }
function SearchComponent_app_general_form_validators_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-general-form-validators", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_app_general_form_validators_9_Template_app_general_form_validators_keyup_0_listener() { return 0; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx_r2.search)("system-type", ctx_r2.systemType);
} }
function SearchComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); ctx_r9.clearSearch(); _r3.value = ""; return _r0.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Clear Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Searching for entry or entries from the records. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ||| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Refreshing list of entries from the records. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ||| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "btn-search": a0, "disabled": a1 }; };
class SearchComponent {
    constructor(gss, gfs) {
        this.gss = gss;
        this.gfs = gfs;
        this.errorEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearSearchEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchClearedOb = this.gss.searchCleared$.subscribe((cleared) => {
            this.refreshing = false;
        });
    }
    ngOnInit() {
        this.searchCtrl = this.gfs.searchForm(this.searchFilters);
        this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(4000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((query) => { return this.gss.searchTerms(query, this.$link, `${this.systemType} Entries`); }))
            .subscribe((result) => {
            this.entrySearching = false;
            this.refreshing = false;
            this.entriesSearched = true;
            this.gss.entriesSearched.next(result);
        });
    }
    ngOnDestroy() {
        this.searchClearedOb.unsubscribe();
        this.searchTerm.unsubscribe();
    }
    searchEntry(qt, qv) {
        this.gss.errorExist.next(false);
        this.entriesSearched = false;
        if (!qt.trim() || (Object.keys(this.searchFilters).indexOf(qt) < 0)) {
            return false;
        }
        this.entrySearching = true;
        this.gss.searchQuery = { [qt]: qv };
        this.searchTerm.next(this.gss.searchQuery);
    }
    clearSearch() {
        this.gss.searchQuery = {};
        this.entriesSearched = false;
        this.refreshing = true;
        this.gss.clearSearch.next(true);
        this.gss.errorExist.next(false);
    }
    validSearch(qt) {
        return Object.keys(this.searchFilters).indexOf(qt) < 0;
    }
    get search() {
        return this.searchCtrl;
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_form_service__WEBPACK_IMPORTED_MODULE_4__["GeneralFormService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { systemType: ["system-type", "systemType"], searchFilters: ["search-filters", "searchFilters"], $link: "$link" }, decls: 17, vars: 14, consts: [[1, "search-bar"], [1, "left"], ["id", "query", "name", "queryType", 1, "form-control", 3, "formControl"], ["qt", ""], ["value", ""], [4, "ngFor", "ngForOf"], [3, "search", "system-type", "keyup", 4, "ngIf"], ["type", "text", "name", "queryValue", "value", "", "autocomplete", "new-queryValue", 3, "keyup"], ["qv", ""], ["type", "submit", 1, "btn-submit", "entry-option-small", 3, "click"], ["class", "btn-submit", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], [3, "search", "system-type", "keyup"], [1, "btn-submit", 3, "click"], [1, "rolling"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search Criteria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_app_general_form_validators_9_Template, 1, 2, "app-general-form-validators", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_10_listener() { return 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.searchEntry(_r0.value, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_button_14_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SearchComponent_p_15_Template, 4, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SearchComponent_p_16_Template, 4, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Search ", ctx.systemType, " Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.searchFilters));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, _r3.value && !ctx.validSearch(_r0.value), !_r3.value || ctx.validSearch(_r0.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entriesSearched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entrySearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.refreshing);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _general_form_validators_general_form_validators_component__WEBPACK_IMPORTED_MODULE_7__["GeneralFormValidatorsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-search',
                'templateUrl': './search.component.html',
                'styleUrls': ['./search.component.css']
            }]
    }], function () { return [{ type: _shared_services_general_search_service__WEBPACK_IMPORTED_MODULE_3__["GeneralSearchService"] }, { type: _general_form_service__WEBPACK_IMPORTED_MODULE_4__["GeneralFormService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], searchFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['search-filters']
        }], $link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=account-general-payment-general-payment-module~account-general-request-general-request-module~accoun~1c9a71ca.js.map