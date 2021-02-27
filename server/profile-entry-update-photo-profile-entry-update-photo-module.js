exports.ids = ["profile-entry-update-photo-profile-entry-update-photo-module"];
exports.modules = {

/***/ "LVmE":
/*!***************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo-file-control.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProfileEntryUpdatePhotoFileControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdatePhotoFileControlService", function() { return ProfileEntryUpdatePhotoFileControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ProfileEntryUpdatePhotoFileControlService {
    constructor() {
        this.$controls = [
            { 'label': 'Photo',
                'key': 'photo',
                'accepts': 'image/*',
                'controlType': 'file' }
        ];
        this.uploadConfigUrl = {
            'add': 'user/entry/change-photo',
            'remove': 'o/user-photo',
            'sign': 'o/sign/user-photo'
        };
    }
}
ProfileEntryUpdatePhotoFileControlService.ɵfac = function ProfileEntryUpdatePhotoFileControlService_Factory(t) { return new (t || ProfileEntryUpdatePhotoFileControlService)(); };
ProfileEntryUpdatePhotoFileControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileEntryUpdatePhotoFileControlService, factory: ProfileEntryUpdatePhotoFileControlService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdatePhotoFileControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gjRx":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo/profile-entry-update-photo.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ProfileEntryUpdatePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdatePhotoComponent", function() { return ProfileEntryUpdatePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-entry-update-photo-file-control.service */ "LVmE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _shared_module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/module/guideline/request-entry-create-file-guideline/request-entry-create-file-guideline.component */ "bhAK");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _shared_module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/module/attachment/attachment-upload/attachment-upload.component */ "RvSM");









function ProfileEntryUpdatePhotoComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function ProfileEntryUpdatePhotoComponent_app_view_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r1.view);
} }
function ProfileEntryUpdatePhotoComponent_app_attachment_upload_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-attachment-upload", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myFile", function ProfileEntryUpdatePhotoComponent_app_attachment_upload_5_Template_app_attachment_upload_myFile_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pushFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const props_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theControl", props_r3.key)("theForm", ctx_r2.entryForm)("myProps", props_r3)("myNumber", i_r4 + 1)("attachment-name", ctx_r2.attachmentConfig.name)("attachment-type", ctx_r2.attachmentConfig.type)("end-points", ctx_r2.uploadConfigU);
} }
class ProfileEntryUpdatePhotoComponent {
    constructor(route, peusfcs) {
        this.route = route;
        this.peusfcs = peusfcs;
        this.systemType = 'User';
        this.viewWord = 'User';
        this.systemGuideline = 'file';
        this.title = 'Update Photo';
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
        this.systemType = data.photo.systemType;
        this.systemGuideline = data.photo.systemGuideline;
        this.title = data.photo.title;
        this.view = data.photo.view;
        this.viewWord = data.photo.viewWord;
        this.link = data.photo.link;
        this.$controls = this.peusfcs.$controls;
        this.uploadConfigU = this.peusfcs.uploadConfigUrl;
    }
    ;
    pushFile(file) {
        this.$myFiles.push(file);
    }
}
ProfileEntryUpdatePhotoComponent.ɵfac = function ProfileEntryUpdatePhotoComponent_Factory(t) { return new (t || ProfileEntryUpdatePhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdatePhotoFileControlService"])); };
ProfileEntryUpdatePhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEntryUpdatePhotoComponent, selectors: [["app-profile-entry-update-photo"]], decls: 6, vars: 4, consts: [[4, "ngIf"], ["id", "update-profile"], [3, "view-type", 4, "ngIf"], ["id", "guidelines"], [3, "system-guideline"], [3, "theControl", "theForm", "myProps", "myNumber", "attachment-name", "attachment-type", "end-points", "myFile", 4, "ngFor", "ngForOf"], [3, "view-type"], [3, "theControl", "theForm", "myProps", "myNumber", "attachment-name", "attachment-type", "end-points", "myFile"], ["attachments", ""]], template: function ProfileEntryUpdatePhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileEntryUpdatePhotoComponent_h2_0_Template, 2, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileEntryUpdatePhotoComponent_app_view_description_2_Template, 1, 1, "app-view-description", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-request-entry-create-file-guideline", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileEntryUpdatePhotoComponent_app_attachment_upload_5_Template, 2, 7, "app-attachment-upload", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-guideline", ctx.systemGuideline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.$controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_module_guideline_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_5__["RequestEntryCreateFileGuidelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_6__["ViewDescriptionComponent"], _shared_module_attachment_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_7__["AttachmentUploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVudHJ5LXVwZGF0ZS1waG90by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdatePhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-entry-update-photo',
                'templateUrl': './profile-entry-update-photo.component.html',
                'styleUrls': ['./profile-entry-update-photo.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdatePhotoFileControlService"] }]; }, null); })();


/***/ }),

/***/ "o0RT":
/*!*********************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileEntryUpdatePhotoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdatePhotoRoutingModule", function() { return ProfileEntryUpdatePhotoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/guards/authentication.guard */ "jiyY");
/* harmony import */ var _profile_entry_update_photo_homepage_profile_entry_update_photo_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-entry-update-photo-homepage/profile-entry-update-photo-homepage.component */ "tu8D");
/* harmony import */ var _profile_entry_update_photo_profile_entry_update_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-entry-update-photo/profile-entry-update-photo.component */ "gjRx");
/* harmony import */ var _profile_entry_update_photo_route_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-entry-update-photo-route-data */ "yyK0");








const routes = [
    { 'path': '',
        'component': _profile_entry_update_photo_homepage_profile_entry_update_photo_homepage_component__WEBPACK_IMPORTED_MODULE_3__["ProfileEntryUpdatePhotoHomepageComponent"],
        'canActivate': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'canLoad': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
        'children': [
            { 'path': '',
                'canActivateChild': [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"]],
                'children': [
                    { 'path': '', 'component': _profile_entry_update_photo_profile_entry_update_photo_component__WEBPACK_IMPORTED_MODULE_4__["ProfileEntryUpdatePhotoComponent"], 'data': { 'photo': _profile_entry_update_photo_route_data__WEBPACK_IMPORTED_MODULE_5__["RouteConfigData"].photo } },
                ] }
        ] }
];
class ProfileEntryUpdatePhotoRoutingModule {
}
ProfileEntryUpdatePhotoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileEntryUpdatePhotoRoutingModule });
ProfileEntryUpdatePhotoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileEntryUpdatePhotoRoutingModule_Factory(t) { return new (t || ProfileEntryUpdatePhotoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileEntryUpdatePhotoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdatePhotoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "tu8D":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo-homepage/profile-entry-update-photo-homepage.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ProfileEntryUpdatePhotoHomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdatePhotoHomepageComponent", function() { return ProfileEntryUpdatePhotoHomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "Fk62");



class ProfileEntryUpdatePhotoHomepageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileEntryUpdatePhotoHomepageComponent.ɵfac = function ProfileEntryUpdatePhotoHomepageComponent_Factory(t) { return new (t || ProfileEntryUpdatePhotoHomepageComponent)(); };
ProfileEntryUpdatePhotoHomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEntryUpdatePhotoHomepageComponent, selectors: [["app-profile-entry-update-photo-homepage"]], decls: 1, vars: 0, template: function ProfileEntryUpdatePhotoHomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVudHJ5LXVwZGF0ZS1waG90by1ob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdatePhotoHomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-profile-entry-update-photo-homepage',
                'templateUrl': './profile-entry-update-photo-homepage.component.html',
                'styleUrls': ['./profile-entry-update-photo-homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wsHY":
/*!*************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfileEntryUpdatePhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEntryUpdatePhotoModule", function() { return ProfileEntryUpdatePhotoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/module/attachment/attachment.module */ "M35K");
/* harmony import */ var _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/module/guideline/guideline.module */ "8yhi");
/* harmony import */ var _profile_entry_update_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-entry-update-photo-routing.module */ "o0RT");
/* harmony import */ var _profile_entry_update_photo_profile_entry_update_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-entry-update-photo/profile-entry-update-photo.component */ "gjRx");
/* harmony import */ var _profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-entry-update-photo-file-control.service */ "LVmE");
/* harmony import */ var _profile_entry_update_photo_homepage_profile_entry_update_photo_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-entry-update-photo-homepage/profile-entry-update-photo-homepage.component */ "tu8D");










class ProfileEntryUpdatePhotoModule {
}
ProfileEntryUpdatePhotoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileEntryUpdatePhotoModule });
ProfileEntryUpdatePhotoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileEntryUpdatePhotoModule_Factory(t) { return new (t || ProfileEntryUpdatePhotoModule)(); }, providers: [
        _profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_7__["ProfileEntryUpdatePhotoFileControlService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_entry_update_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdatePhotoRoutingModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
            _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
            _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileEntryUpdatePhotoModule, { declarations: [_profile_entry_update_photo_profile_entry_update_photo_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEntryUpdatePhotoComponent"],
        _profile_entry_update_photo_homepage_profile_entry_update_photo_homepage_component__WEBPACK_IMPORTED_MODULE_8__["ProfileEntryUpdatePhotoHomepageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _profile_entry_update_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdatePhotoRoutingModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
        _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
        _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEntryUpdatePhotoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _profile_entry_update_photo_profile_entry_update_photo_component__WEBPACK_IMPORTED_MODULE_6__["ProfileEntryUpdatePhotoComponent"],
                    _profile_entry_update_photo_homepage_profile_entry_update_photo_homepage_component__WEBPACK_IMPORTED_MODULE_8__["ProfileEntryUpdatePhotoHomepageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _profile_entry_update_photo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEntryUpdatePhotoRoutingModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_2__["GeneralModule"],
                    _shared_module_attachment_attachment_module__WEBPACK_IMPORTED_MODULE_3__["AttachmentModule"],
                    _shared_module_guideline_guideline_module__WEBPACK_IMPORTED_MODULE_4__["GuidelineModule"]
                ],
                providers: [
                    _profile_entry_update_photo_file_control_service__WEBPACK_IMPORTED_MODULE_7__["ProfileEntryUpdatePhotoFileControlService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "yyK0":
/*!*****************************************************************************************************!*\
  !*** ./src/app/account/profile/profile-entry-update-photo/profile-entry-update-photo-route-data.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RouteConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigData", function() { return RouteConfigData; });
let $$ = {
    'systemType': 'User',
    'title': 'Update Photo',
    'view': 'cppas',
    'viewWord': 'User',
    'link': 'profile',
    '$link': 'user',
    'systemGuideline': 'file',
    'base': 'user'
};
const RouteConfigData = {
    'photo': Object.assign({}, $$),
};


/***/ })

};;
//# sourceMappingURL=profile-entry-update-photo-profile-entry-update-photo-module.js.map