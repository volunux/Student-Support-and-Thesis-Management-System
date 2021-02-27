exports.ids = ["profile-entry-update-signature-profile-entry-update-signature-module"];
exports.modules = {

/***/ "05cS":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature-file-control.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProfileEntryUpdateSignatureFileControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdateSignatureFileControlService", function() { return ProfileEntryUpdateSignatureFileControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ProfileEntryUpdateSignatureFileControlService {
    constructor() {
        this.$controls = [
            { 'label': 'Signature',
                'key': 'signature',
                'accepts': 'image/*',
                'controlType': 'file' }
        ];
        this.uploadConfigUrl = {
            'add': 'user/entry/change-signature',
            'remove': 'o/user-signature',
            'sign': 'o/sign/user-signature'
        };
    }
}
ProfileEntryUpdateSignatureFileControlService.ɵfac = function ProfileEntryUpdateSignatureFileControlService_Factory(t) { return new (t || ProfileEntryUpdateSignatureFileControlService)(); };
ProfileEntryUpdateSignatureFileControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileEntryUpdateSignatureFileControlService, factory: ProfileEntryUpdateSignatureFileControlService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdateSignatureFileControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1+1F":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ProfileEntryUpdateSignatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdateSignatureRoutingModule", function() { return ProfileEntryUpdateSignatureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _profile_entry_update_signature_homepage_profile_entry_update_signature_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-entry-update-signature-homepage/profile-entry-update-signature-homepage.component */ "qQSE");
/* harmony import */ var _profile_entry_update_signature_profile_entry_update_signature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-entry-update-signature/profile-entry-update-signature.component */ "81al");
/* harmony import */ var _profile_entry_update_signature_route_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-entry-update-signature-route-data */ "PmSn");








const routes = [
    { 'path': '',
        'component': _profile_entry_update_signature_homepage_profile_entry_update_signature_homepage_component__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdateSignatureHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _profile_entry_update_signature_profile_entry_update_signature_component__WEBPACK_IMPORTED_MODULE_4__["ProfileEntryUpdateSignatureComponent"], 'data': { 'signature': _profile_entry_update_signature_route_data__WEBPACK_IMPORTED_MODULE_5__["RouteConfigData"].signature } },
                ] }
        ] }
];
class ProfileEntryUpdateSignatureRoutingModule {
}
ProfileEntryUpdateSignatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileEntryUpdateSignatureRoutingModule });
ProfileEntryUpdateSignatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileEntryUpdateSignatureRoutingModule_Factory(t) { return new (t || ProfileEntryUpdateSignatureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileEntryUpdateSignatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdateSignatureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "81al":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature/profile-entry-update-signature.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ProfileEntryUpdateSignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdateSignatureComponent", function() { return ProfileEntryUpdateSignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-entry-update-signature-file-control.service */ "05cS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/module/guideline/request-entry-create-file-guideline/request-entry-create-file-guideline.component */ "bhAK");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _shared_module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/module/attachment/attachment-upload/attachment-upload.component */ "RvSM");









function ProfileEntryUpdateSignatureComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileEntryUpdateSignatureComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
function ProfileEntryUpdateSignatureComponent_app_attachment_upload_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-attachment-upload", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myFile", function ProfileEntryUpdateSignatureComponent_app_attachment_upload_5_Template_app_attachment_upload_myFile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pushFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const props_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theControl", props_r3.key)("theForm", ctx_r2.entryForm)("myProps", props_r3)("myNumber", i_r4 + 1)("attachment-name", ctx_r2.attachmentConfig.name)("attachment-type", ctx_r2.attachmentConfig.type)("end-points", ctx_r2.uploadConfigU);
} }
class ProfileEntryUpdateSignatureComponent {
    constructor(route, peusfcs) {
        this.route = route;
        this.peusfcs = peusfcs;
        this.systemType = 'User';
        this.viewWord = 'User';
        this.systemGuideline = 'file';
        this.title = 'Update Signature';
        this.view = 'cppas';
        this.link = 'profile';
        this.$myFiles = [];
        this.attachmentConfig = {
            'name': 'Image',
            'type': 'image'
        };
        this.entryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ 'upload': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]) });
    }
    ngOnInit() {
        let data = this.route.snapshot.data;
        this.systemType = data.signature.systemType;
        this.systemGuideline = data.signature.systemGuideline;
        this.title = data.signature.title;
        this.view = data.signature.view;
        this.viewWord = data.signature.viewWord;
        this.link = data.signature.link;
        this.$controls = this.peusfcs.$controls;
        this.uploadConfigU = this.peusfcs.uploadConfigUrl;
    }
    ;
    pushFile(file) {
        this.$myFiles.push(file);
    }
}
ProfileEntryUpdateSignatureComponent.ɵfac = function ProfileEntryUpdateSignatureComponent_Factory(t) { return new (t || ProfileEntryUpdateSignatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdateSignatureFileControlService"])); };
ProfileEntryUpdateSignatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEntryUpdateSignatureComponent, selectors: [["app-profile-entry-update-signature"]], decls: 6, vars: 4, consts: [[4, "ngIf"], ["id", "update-profile"], [3, "view-type", 4, "ngIf"], ["id", "guidelines"], [3, "system-guideline"], [3, "theControl", "theForm", "myProps", "myNumber", "attachment-name", "attachment-type", "end-points", "myFile", 4, "ngFor", "ngForOf"], [3, "view-type"], [3, "theControl", "theForm", "myProps", "myNumber", "attachment-name", "attachment-type", "end-points", "myFile"], ["attachments", ""]], template: function ProfileEntryUpdateSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileEntryUpdateSignatureComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEntryUpdateSignatureComponent_app_view_description_2_Template, 1, 1, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-request-entry-create-file-guideline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileEntryUpdateSignatureComponent_app_attachment_upload_5_Template, 2, 7, "app-attachment-upload", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-guideline", ctx.systemGuideline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.$controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_5__["RequestEntryCreateFileGuidelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__["ViewDescriptionComponent"], _shared_module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_7__["AttachmentUploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVudHJ5LXVwZGF0ZS1zaWduYXR1cmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdateSignatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-entry-update-signature',
                'templateUrl': './profile-entry-update-signature.component.html',
                'styleUrls': ['./profile-entry-update-signature.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdateSignatureFileControlService"] }]; }, null); })();


/***/ }),

/***/ "PmSn":
/*!*************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature-route-data.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'User',
    'title': 'Update Signature',
    'view': 'cppas',
    'viewWord': 'User',
    'link': 'profile',
    '$link': 'user',
    'systemGuideline': 'file',
    'base': 'user'
};
const RouteConfigData = {
    'signature': Object.assign({}, $$),
};


/***/ }),

/***/ "oNP8":
/*!*********************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileEntryUpdateSignatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdateSignatureModule", function() { return ProfileEntryUpdateSignatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module/attachment/attachment.module */ "M35K");
/* harmony import */ var _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/module/guideline/guideline.module */ "8yhi");
/* harmony import */ var _profile_entry_update_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-entry-update-signature-routing.module */ "1+1F");
/* harmony import */ var _profile_entry_update_signature_profile_entry_update_signature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-entry-update-signature/profile-entry-update-signature.component */ "81al");
/* harmony import */ var _profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-entry-update-signature-file-control.service */ "05cS");
/* harmony import */ var _profile_entry_update_signature_homepage_profile_entry_update_signature_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-entry-update-signature-homepage/profile-entry-update-signature-homepage.component */ "qQSE");










class ProfileEntryUpdateSignatureModule {
}
ProfileEntryUpdateSignatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileEntryUpdateSignatureModule });
ProfileEntryUpdateSignatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileEntryUpdateSignatureModule_Factory(t) { return new (t || ProfileEntryUpdateSignatureModule)(); }, providers: [
        _profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_7__["ProfileEntryUpdateSignatureFileControlService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_entry_update_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdateSignatureRoutingModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
            _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
            _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileEntryUpdateSignatureModule, { declarations: [_profile_entry_update_signature_profile_entry_update_signature_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEntryUpdateSignatureComponent"],
        _profile_entry_update_signature_homepage_profile_entry_update_signature_homepage_component__WEBPACK_IMPORTED_MODULE_8__["ProfileEntryUpdateSignatureHomepageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_entry_update_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdateSignatureRoutingModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
        _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
        _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdateSignatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _profile_entry_update_signature_profile_entry_update_signature_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEntryUpdateSignatureComponent"],
                    _profile_entry_update_signature_homepage_profile_entry_update_signature_homepage_component__WEBPACK_IMPORTED_MODULE_8__["ProfileEntryUpdateSignatureHomepageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_entry_update_signature_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdateSignatureRoutingModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
                    _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
                    _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]
                ],
                providers: [
                    _profile_entry_update_signature_file_control_service__WEBPACK_IMPORTED_MODULE_7__["ProfileEntryUpdateSignatureFileControlService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qQSE":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-signature/profile-entry-update-signature-homepage/profile-entry-update-signature-homepage.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: ProfileEntryUpdateSignatureHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdateSignatureHomepageComponent", function() { return ProfileEntryUpdateSignatureHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class ProfileEntryUpdateSignatureHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileEntryUpdateSignatureHomepageComponent.ɵfac = function ProfileEntryUpdateSignatureHomepageComponent_Factory(t) { return new (t || ProfileEntryUpdateSignatureHomepageComponent)(); };
ProfileEntryUpdateSignatureHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEntryUpdateSignatureHomepageComponent, selectors: [["app-profile-entry-update-signature-homepage"]], decls: 1, vars: 0, template: function ProfileEntryUpdateSignatureHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVudHJ5LXVwZGF0ZS1zaWduYXR1cmUtaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdateSignatureHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-entry-update-signature-homepage',
                'templateUrl': './profile-entry-update-signature-homepage.component.html',
                'styleUrls': ['./profile-entry-update-signature-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

};;
//# sourceMappingURL=profile-entry-update-signature-profile-entry-update-signature-module.js.map