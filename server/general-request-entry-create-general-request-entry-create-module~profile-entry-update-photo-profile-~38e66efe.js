exports.ids = ["general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe"];
exports.modules = {

/***/ "8yhi":
/*!*************************************************************!*\
  !*** ./src/app/shared/module/guideline/guideline.module.ts ***!
  \*************************************************************/
/*! exports provided: GuidelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelineModule", function() { return GuidelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-entry-create-file-guideline/request-entry-create-file-guideline.component */ "bhAK");




class GuidelineModule {
}
GuidelineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuidelineModule });
GuidelineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuidelineModule_Factory(t) { return new (t || GuidelineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuidelineModule, { declarations: [_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateFileGuidelineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateFileGuidelineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidelineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateFileGuidelineComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _request_entry_create_file_guideline_request_entry_create_file_guideline_component__WEBPACK_IMPORTED_MODULE_2__["RequestEntryCreateFileGuidelineComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CgRx":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/module/attachment/attachment-upload/attachment-upload.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: AttachmentUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUploadService", function() { return AttachmentUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../configuration */ "VcWf");
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/error-messages.service */ "EUGn");








class AttachmentUploadService {
    constructor(apiConfig, http, ems) {
        this.apiConfig = apiConfig;
        this.http = http;
        this.ems = ems;
    }
    uploadAttachment(signedUrl, file) {
        let httpOptions = { 'reportProgress': true, 'observe': 'events' };
        return this.http.post(signedUrl.data.url, file, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(80000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError1('Attachment Entry', null)));
    }
    removeAttachment(idx) {
        let link = `${this.apiConfig.host}/${this.removeE}/${idx}`;
        return this.http.delete(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((val) => { return { 'isDeleted': true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Delete Attachment', null)));
    }
    addAttachment(file) {
        let link = `${this.apiConfig.host}/${this.addE}`;
        let body = Object.assign({ 'key': file.key }, file.attachment);
        let httpOptions = { 'headers': new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json;charset=UTF-8' }) };
        return this.http.post(link, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Attachment Entry', null)));
    }
    signFile(file) {
        let link = `${this.apiConfig.host}/${this.signE}/${file.name}`;
        let httpOptions = { 'headers': new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json;charset=UTF-8' }), 'observe': 'body' };
        let fileInfo = { 'filename': file.name, 'contentType': file.type };
        return this.http.post(link, fileInfo, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Attachment Upload', null)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    handleError1(operation = 'operation', result) {
        return (error) => {
            this.ems.message = error;
            if (error instanceof Object && error.name && error.name == "TimeoutError") {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(408);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
AttachmentUploadService.ɵfac = function AttachmentUploadService_Factory(t) { return new (t || AttachmentUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Api_Token"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"])); };
AttachmentUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttachmentUploadService, factory: AttachmentUploadService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_configuration__WEBPACK_IMPORTED_MODULE_4__["Api_Token"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__["ErrorMessagesService"] }]; }, null); })();


/***/ }),

/***/ "M35K":
/*!***************************************************************!*\
  !*** ./src/app/shared/module/attachment/attachment.module.ts ***!
  \***************************************************************/
/*! exports provided: AttachmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentModule", function() { return AttachmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "Fk62");
/* harmony import */ var _services_general_services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/general-services.module */ "kPid");
/* harmony import */ var _attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment-upload/attachment-upload.component */ "RvSM");
/* harmony import */ var _attachment_upload_attachment_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment-upload/attachment-upload.service */ "CgRx");









class AttachmentModule {
}
AttachmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AttachmentModule });
AttachmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AttachmentModule_Factory(t) { return new (t || AttachmentModule)(); }, providers: [
        _attachment_upload_attachment_upload_service__WEBPACK_IMPORTED_MODULE_6__["AttachmentUploadService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttachmentModule, { declarations: [_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_5__["AttachmentUploadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_5__["AttachmentUploadComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_5__["AttachmentUploadComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _services_general_services_module__WEBPACK_IMPORTED_MODULE_4__["GeneralServicesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([])
                ],
                providers: [
                    _attachment_upload_attachment_upload_service__WEBPACK_IMPORTED_MODULE_6__["AttachmentUploadService"]
                ],
                exports: [
                    _attachment_upload_attachment_upload_component__WEBPACK_IMPORTED_MODULE_5__["AttachmentUploadComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RvSM":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/module/attachment/attachment-upload/attachment-upload.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AttachmentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUploadComponent", function() { return AttachmentUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "FBrc");
/* harmony import */ var _attachment_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachment-upload.service */ "CgRx");
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/error-messages.service */ "EUGn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "ycIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "MyqM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "8VHZ");











const _c0 = ["btnAddFile1"];
const _c1 = ["btnDelFile1"];
const _c2 = ["btnCanFile1"];
const _c3 = ["fileUploadProgress1"];
const _c4 = ["fileUploadError1"];
const _c5 = ["fileUploadError11"];
const _c6 = ["fileUploadText1"];
const _c7 = ["fileUploadMessage1"];
const _c8 = ["filePercent1"];
const _c9 = ["selectFileButton"];
const _c10 = ["fileAttachment"];
function AttachmentUploadComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttachmentUploadComponent_ng_container_0_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.uploadFile($event, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttachmentUploadComponent_ng_container_0_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.chooseFile($event, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose a File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttachmentUploadComponent_ng_container_0_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addFile($event, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttachmentUploadComponent_ng_container_0_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttachmentUploadComponent_ng_container_0_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cancelUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 13, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 13, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 13, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p", 18, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.theForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "attachment-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.myProps.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "attachment-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.myProps.controlType)("name", ctx_r0.myProps.key)("accept", ctx_r0.myProps.accepts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-upload-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "btn-add-file-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "btn-del-file-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "btn-can-file-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-upload-progress-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-upload-error-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "file-upload-error-", ctx_r0.myNumber, "", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-upload-text-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-upload-message-", ctx_r0.myNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "file-percent-", ctx_r0.myNumber, "");
} }
class AttachmentUploadComponent {
    constructor(aus, ems) {
        this.aus = aus;
        this.ems = ems;
        this.attachmentUrl = '';
        this.uaddress = '';
        this.$fileObj = { 'key': '', 'attachment': { 'location': '', 'size': false, 'mimetype': '' } };
        this.$fileSize = 500 * 1024;
        this.uploadSuccess = false;
        this.currentlyUploading = false;
        this.myFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.aus.addE = this.endpoints.add;
        this.aus.removeE = this.endpoints.remove;
        this.aus.signE = this.endpoints.sign;
    }
    ngAfterViewInit() {
        this.$showButton(this.btnAddFile1, 'block');
        this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
    }
    ngOnChanges(changes) {
        if (changes instanceof Object && changes.ready4Submission && changes.ready4Submission.currentValue) {
            this.fileAttachment.nativeElement.value = '';
        }
    }
    ngOnDestroy() {
        if (this.cancelFile)
            this.cancelFile.unsubscribe();
        if (this.removeFailed)
            this.removeFailed.unsubscribe();
    }
    formSubmittedUploadCancel() {
        this.$setElement(this.fileAttachment, false);
        this.selectFileButton.nativeElement.textContent = 'Choose a file to upload.';
        this.fileAttachment.nativeElement.value = '';
        this.$showButton(this.btnCanFile1, 'none');
        this.$setElement(this.btnCanFile1, false);
        this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
        this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.filePercent1, this.fileUploadText1]);
    }
    cancelUpload($evt) {
        this.$clearEvent($evt);
        this.$clearEvent($evt);
        this.$setElement(this.btnCanFile1, true);
        if (this.cancelFile)
            this.cancelFile.unsubscribe();
        this.$showButton(this.btnCanFile1, 'none');
        this.$setElement(this.btnCanFile1, false);
        this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
        this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.filePercent1, this.fileUploadText1]);
        this.$setElement(this.fileAttachment, false);
        this.$setText(this.fileUploadText1, 'Pending file upload has been canceled. You can proceed to choose and upload another file.', 'block');
    }
    deleteUpload($evt) {
        this.$clearEvent($evt);
        this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.filePercent1, this.fileUploadText1]);
        this.$setText(this.fileUploadMessage1, `${this.attachmentName} is getting deleted. Please be patient and wait.`, 'block');
        this.$setButton(this.btnDelFile1, true, 'disabled', 'btn-options');
        this.removeFailed = this.aus.removeAttachment(this.$fileObj.key)
            .subscribe((val) => {
            let displayErr = setTimeout(() => {
                this.$clearText([this.fileUploadMessage1, this.fileUploadText1, this.fileUploadError1, this.fileUploadProgress1]);
                this.$setButton(this.btnDelFile1, false, 'btn-options', 'disabled');
                this.$setText(this.fileUploadError11, `An error has occured while removing ${this.attachmentName} document. Please try again.`, 'block');
                this.removeFailed.unsubscribe();
            }, 30000);
            if (val instanceof Object && val.isDeleted) {
                this.$setElement(this.fileAttachment, false);
                this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
                this.$showButton(this.btnDelFile1, 'none');
                this.$showButton(this.btnAddFile1, 'block');
                this.$setText(this.fileUploadMessage1, `${this.myProps.label} successfully deleted. You can now upload another ${this.attachmentName} document.`, 'block');
                this.$setText(this.selectFileButton, 'Choose a file to upload.', 'block');
                this.fileAttachment.nativeElement.value = '';
                this.fileAttachment.nativeElement.textContent = '';
                this.$$file = null;
                this.$fileObj = { 'key': '', 'attachment': { 'location': '', 'size': false, 'mimetype': '' } };
            }
            clearTimeout(displayErr);
            if (val == null) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadProgress1]);
                this.$setButton(this.btnDelFile1, false, 'btn-options', 'disabled');
                this.$setText(this.fileUploadError1, 'An error has occured. Please try again.', 'block');
            }
        });
    }
    addFile(e, file) {
        this.$clearEvent(e);
        this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.fileUploadText1]);
        let data = { 'attachment': file.files[0] };
        if (!(data && data.attachment && data.attachment.name))
            return false;
        this.cancelFile = this.aus.signFile(data.attachment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((hash) => {
            if (!hash) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ 'noHash': true });
            }
            else {
                this.$fileObj.attachment.location = `${hash.data.url}/${hash.data.fields.key}`;
                this.$fileObj.attachment.size = data.attachment.size;
                this.$fileObj.attachment.mimetype = data.attachment.type;
                this.$fileObj.key = hash.data.fields.key;
                let $myFormData = new FormData();
                for (let key$ in hash.data.fields) {
                    $myFormData.append(key$, hash.data.fields[key$]);
                }
                $myFormData.append('file', data.attachment);
                return this.aus.uploadAttachment(hash, $myFormData);
            }
        }))
            .subscribe((hash) => {
            if (hash instanceof Object && hash.noHash) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1]);
                this.$setText(this.fileUploadError1, 'A server error has occured. Please try again.', 'block');
                return false;
            }
            else if (hash == 408) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.fileUploadText1, this.filePercent1]);
                this.$setText(this.fileUploadError1, 'A network timeout error has occured. Please try again.', 'block');
                this.$showButton(this.btnCanFile1, 'none');
                this.$setElement(this.btnCanFile1, false);
                this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
                this.$showButton(this.btnAddFile1, 'block');
                return false;
            }
            else if (hash == null && this.uploadSuccess == false) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.fileUploadText1, this.filePercent1]);
                this.$setText(this.fileUploadError1, 'A network error has occured. Please try again.', 'block');
                this.$showButton(this.btnCanFile1, 'none');
                this.$setElement(this.btnCanFile1, false);
                this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
                this.$showButton(this.btnAddFile1, 'block');
                this.$setElement(this.fileAttachment, false);
                return false;
            }
            if (hash instanceof Object) {
                switch (hash.type) {
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                        this.$setElement(this.fileAttachment, true);
                        this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
                        this.$showButton(this.btnCanFile1, 'block');
                        this.$setText(this.fileUploadMessage1, `${this.myProps.label} is uploading. Please be patient and wait. % uploaded : `, 'inline-block');
                        this.currentlyUploading = true;
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].ResponseHeader:
                        break;
                    case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                        let percentComplete = '' + (Math.round(hash.loaded / hash.total * 100));
                        this.$setText(this.filePercent1, percentComplete, 'inline-block');
                        break;
                }
            }
            if (hash instanceof Object && hash.status == 201) {
                this.uploadSuccess = true;
                this.$showButton(this.btnAddFile1, 'none');
                this.$setButton(this.btnDelFile1, false, 'btn-options', 'disabled');
                this.$showButton(this.btnDelFile1, 'block');
                this.$clearText([this.fileUploadMessage1, this.filePercent1, this.fileUploadText1, this.fileUploadProgress1, this.fileUploadError1]);
                this.$setText(this.fileUploadText1, `${this.myProps.label} successfully uploaded.`, 'block');
                this.$showButton(this.btnCanFile1, 'none');
                this.$setElement(this.btnCanFile1, false);
                this.aus.addAttachment(this.$fileObj)
                    .subscribe();
                this.currentlyUploading = false;
                this.$$file = {
                    'location': this.$fileObj.attachment.location,
                    'key': this.$fileObj.key,
                    'size': this.fileAttachment.nativeElement.files[0].size,
                    'mimetype': this.fileAttachment.nativeElement.files[0].type
                };
            }
            if (hash instanceof Object && hash.status == 400) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1, this.fileUploadText1, this.filePercent1]);
                this.$setText(this.fileUploadError1, 'Upload request has timed out. Please try again.', 'block');
                this.$showButton(this.btnCanFile1, 'none');
                this.$setElement(this.btnCanFile1, false);
                this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
                this.$showButton(this.btnAddFile1, 'block');
                return false;
            }
        });
    }
    uploadFile($event, file) {
        this.$clearEvent($event);
        this.attachmentFile = file.files[0];
        let data = { 'attachment': file.files[0] };
        if (data && !data.attachment) {
            this.$clearText([this.fileUploadMessage1, this.fileUploadText1, this.fileUploadError1, this.fileUploadError11, this.filePercent1, this.fileUploadProgress1]);
            this.$setText(this.selectFileButton, 'Choose a file to upload.', 'block');
            this.$showButton(this.btnAddFile1, 'block');
            this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
            this.$setText(this.fileUploadError1, `${this.myProps.label} should be provided and cannot be empty.`, 'block');
            return false;
        }
        this.$checkAttachmentSize(this.attachmentFile, this.$fileObj, this.selectFileButton);
        this.$checkAttachmentType(this.attachmentFile, this.$fileObj, this.selectFileButton);
        this.$validateSignature(this.attachmentFile, this.$fileObj);
    }
    $clearEvent(el) {
        el.stopPropagation();
        el.preventDefault();
    }
    signFile(file) {
        this.aus.signFile(file);
    }
    $showButton(ref, display) {
        let $el = ref.nativeElement;
        $el.style.display = display;
    }
    $setElement(ref, attr) {
        let $el = ref.nativeElement;
        $el.disabled = attr;
    }
    $setText(ref, text, display, ref2, ref3) {
        let el = ref.nativeElement;
        el.textContent = text;
        el.style.display = display;
    }
    updateDisplayAndSignature() {
        this.$$file = {
            'location': this.$fileObj.attachment.location,
            'size': this.fileAttachment.nativeElement.files[0].size,
            'mimetype': this.fileAttachment.nativeElement.type
        };
    }
    $checkAttachmentSize($myFile, $fileRef, $btnRef) {
        if ($myFile) {
            if ($myFile.size > this.$fileSize) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadProgress1]);
                this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
                this.$setText(this.fileUploadError1, 'File is too large and will not be uploaded.', 'block');
                this.$setText($btnRef, 'A file with name ' + $myFile.name + ' has been selected', 'block');
                $fileRef.attachment.size = true;
                return false;
            }
            this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadProgress1]);
            this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
            this.$setText($btnRef, 'A file with name ' + $myFile.name + ' has been selected', 'block');
            $fileRef.attachment.size = false;
        }
        else {
            $btnRef.nativeElement.textContent = 'Choose a file to upload.';
            this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadProgress1]);
            this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
        }
    }
    $clearText(elRefs) {
        if (elRefs.length) {
            for (let i = 0; i < elRefs.length; i++) {
                let $el = elRefs[i];
                if ($el) {
                    let el = $el.nativeElement;
                    el.style.display = 'none';
                    el.textContent = '';
                }
            }
        }
    }
    getTypeFromMagicNumber(signature) {
        switch (signature) {
            case "89504E47":
                return "image/png";
            case "47494638":
                return "image/gif";
            case "25504446":
                return "application/pdf";
            case "FFD8FFDB":
            case "FFD8FFE0":
            case "FFD8FFE1":
            case "FFD8FFE2":
            case "FFD8FFE3":
            case "FFD8FFE8":
                return 'image/jpeg';
            case "504B0304":
                return "application/zip";
            default:
                return "Unknown filetype";
        }
    }
    $setButton($el, attr, add = '', remove = '') {
        let el = $el.nativeElement;
        el.disabled = attr;
        let $elArr = $el.nativeElement.className.split(' ');
        if ($elArr.indexOf(add) == -1) {
            el.className += ' ' + add;
        }
        let $remove = remove;
        let $rm = new RegExp($remove, 'g');
        el.className = el.className.replace($rm, '');
    }
    $checkAttachmentType($myFile, $fileRef, $btnRef) {
        if ($myFile) {
            if ($myFile.type.indexOf(this.attachmentType) == -1) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadProgress1]);
                this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
                this.$setText(this.fileUploadError1, `Only ${this.attachmentName} is allowed to be uploaded in this field.`, 'block');
                $fileRef.attachment.type = true;
                return false;
            }
            if (!$fileRef.attachment.size) {
                this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1]);
                this.$setButton(this.btnAddFile1, false, 'btn-options', 'disabled');
                $btnRef.nativeElement.textContent = 'A file with name ' + $myFile.name + ' has been selected';
            }
        }
        else {
            $btnRef.nativeElement.textContent = 'Choose a file to upload.';
            this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1]);
        }
    }
    chooseFile($event, $el) {
        this.$clearEvent($event);
        $el.click();
    }
    $validateSignature(file, $fileRef) {
        const filereader = new FileReader();
        filereader.onloadend = (evt) => {
            if (evt.target.readyState === FileReader.DONE) {
                const uint = new Uint8Array(evt.target.result);
                let bytes = [];
                uint.forEach((byte) => { bytes.push(byte.toString(16)); });
                let hex = bytes.join('').toUpperCase();
                let signatureType = this.getTypeFromMagicNumber(hex);
                if (signatureType.indexOf(this.attachmentType) == -1) {
                    this.$clearText([this.fileUploadMessage1, this.fileUploadError1, this.fileUploadError11, this.fileUploadProgress1]);
                    this.$setButton(this.btnAddFile1, true, 'disabled', 'btn-options');
                    this.$setText(this.fileUploadError1, `Only ${this.attachmentName} is allowed to be uploaded in this field.`, 'block');
                    $fileRef.attachment.type = true;
                    return false;
                }
            }
        };
        if (file) {
            const blob = file.slice(0, 4);
            filereader.readAsArrayBuffer(blob);
        }
    }
}
AttachmentUploadComponent.ɵfac = function AttachmentUploadComponent_Factory(t) { return new (t || AttachmentUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_attachment_upload_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"])); };
AttachmentUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttachmentUploadComponent, selectors: [["app-attachment-upload"]], viewQuery: function AttachmentUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnAddFile1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnDelFile1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnCanFile1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadProgress1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadError1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadError11 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadText1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadMessage1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filePercent1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectFileButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileAttachment = _t.first);
    } }, inputs: { theForm: "theForm", theControl: "theControl", myProps: "myProps", myNumber: "myNumber", endpoints: ["end-points", "endpoints"], ready4Submission: ["submission", "ready4Submission"], attachmentName: ["attachment-name", "attachmentName"], attachmentType: ["attachment-type", "attachmentType"] }, outputs: { myFile: "myFile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _attachment_upload_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentUploadService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "form-group", 3, "formGroup"], [1, "form-label-file", "bold", 3, "for"], [3, "type", "name", "accept", "id", "change"], ["fileAttachment", ""], [1, "btn-upload", 3, "click"], ["selectFileButton", ""], [1, "form-group", 3, "id"], [1, "btn", "btn-add", "btn-options", 3, "id", "click"], ["btnAddFile1", ""], [1, "btn", "btn-options", 3, "id", "click"], ["btnDelFile1", ""], ["btnCanFile1", ""], [1, "", 3, "id"], ["fileUploadProgress1", ""], ["fileUploadError1", ""], ["fileUploadError11", ""], ["fileUploadText1", ""], [3, "id"], ["fileUploadMessage1", ""], ["filePercent1", ""]], template: function AttachmentUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AttachmentUploadComponent_ng_container_0_Template, 31, 20, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]], styles: ["#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\r\n\tlist-style-type : none;\r\n}\r\n\r\n#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : inline-block;\r\n\twidth : 150px;\r\n\tmargin-right : 20px;\r\n\tborder-radius : 12px 0px 12px 0px;\r\n\tbackground-color : #290140;\r\n}\r\n\r\n#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n\r\n\tbackground-color : #210140;\t\r\n}\r\n\r\n#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : inline-block;\r\n\tpadding : 10px;\r\n\twidth : 100%;\r\n\tcolor : #fff;\r\n}\r\n\r\ntfoot[_ngcontent-%COMP%] {\r\n\r\n\tmargin-top : 20px;\r\n}\r\n\r\n#entries[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 81.25%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em;\r\n\ttext-align : center;\r\n\toverflow : hidden;\r\n\tpadding : 8px 0px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {\r\n\r\n\tbackground-color : #fbfaf8;\r\n}\r\n\r\n.article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.5em;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n\r\n\ttext-align : center;\r\n\tpadding : 10px 5px;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n\r\n\ttext-align : center;\r\n\tpadding : 10px 5px;\r\n}\r\n\r\n#entries-table[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n\r\n\tmargin-top : 30px;\r\n}\r\n\r\n#entries-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 81.25%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em;\r\n\ttext-align : center;\r\n\tpadding : 8px 0px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n\r\n\tmargin: 10px 0px;\r\n\tpadding-left : 2%;\r\n\ttext-align : left;\r\n\tfont-size : 14px;\r\n\tfont-weight : bold;\r\n\tfont-family : 'RobotoBold';\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {\r\n\r\n\tbackground-color : #fbfaf8;\r\n}\r\n\r\n.photo-item[_ngcontent-%COMP%] {\r\n\r\n\twidth : 31%;\r\n\tpadding : 1%;\r\n\tmargin-right : 1.5%;\r\n\tfont-size : 13px;\r\n\tline-height : 2.5;\r\n\theight : 400px;\r\n\tpadding : 1%;\r\n\toverflow : hidden;\r\n}\r\n\r\n.photo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .list-video-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .list-sound-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\r\n\twidth : 100%;\r\n\tmax-width : 150px;\r\n}\r\n\r\n.photo-item-photo[_ngcontent-%COMP%] {\r\n\r\n\twidth : 150px;\r\n\tmargin : 0px auto 10px;\r\n\theight : 150px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em;\r\n\tbackground-color : #3b0956;\r\n\tborder : 2px solid #ac4bd8;\r\n\tcolor : #929292;\r\n\tborder-radius : 12px 6px 12px 6px;\r\n\ttext-align : center;\r\n\tfont-size : 11px;\r\n}\r\n\r\nbutton.btn-upload[_ngcontent-%COMP%]  {\r\n\r\n\tdisplay : block;\r\n\twidth : 90%;\r\n}\r\n\r\nbutton.btn-options[_ngcontent-%COMP%]  {\r\n\r\n\tmargin-right : 10px;\r\n\twidth : 120px;\r\n}\r\n\r\n.btn-add[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : none;\r\n}\r\n\r\nbutton.btn-submit[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\twidth : 100%;\r\n\tmargin : 20px auto 0px;\r\n}\r\n\r\n#file-upload-1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #file-upload-4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\r\n\tmargin : 5px;\r\n}\r\n\r\n#upload[_ngcontent-%COMP%] {\r\n\r\n\tcursor : pointer;\r\n}\r\n\r\n#btn-add-file-1[_ngcontent-%COMP%], #btn-add-file-2[_ngcontent-%COMP%], #btn-add-file-3[_ngcontent-%COMP%], #btn-add-file-4[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : none;\r\n\tcursor : pointer;\r\n}\r\n\r\n#btn-del-file-1[_ngcontent-%COMP%], #btn-del-file-2[_ngcontent-%COMP%], #btn-del-file-3[_ngcontent-%COMP%], #btn-del-file-4[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : none;\r\n\tcursor : pointer;\r\n}\r\n\r\n#btn-can-file-1[_ngcontent-%COMP%], #btn-can-file-2[_ngcontent-%COMP%], #btn-can-file-3[_ngcontent-%COMP%], #btn-can-file-4[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : none;\r\n\tcursor : pointer;\r\n}\r\n\r\n#uploadError[_ngcontent-%COMP%], #uploadError1[_ngcontent-%COMP%], #uploadText[_ngcontent-%COMP%] {\r\n\r\n\tmargin : 5px 0px;\r\n}\r\n\r\n#upload-progress[_ngcontent-%COMP%] {\r\n\r\n\tmargin : 5px 0px;\r\n\tpadding-right : 5px;\r\n\tborder-radius : 8px;\r\n\tdisplay : none;\r\n}\r\n\r\n#upload-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n\r\n\tbackground-color : lightgreen;\r\n\tmargin-right : 5px;\r\n}\r\n\r\n.uploadMessage[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : none;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%], .btn-add-file-1[_ngcontent-%COMP%], .btn-del-file-1[_ngcontent-%COMP%], .btn-can-file-1[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\tmargin-right : 0.5em;\r\n}\r\n\r\n.disabled[_ngcontent-%COMP%] {\r\n\r\n\tbackground-color : #171417 !important;\r\n\tcolor : white;\r\n\tmargin-right : 0.5em;\r\n\tdisplay : block;\r\n\twidth : 120px;\r\n\tpadding : 0% 2.9340879234504911474798498165083%;\r\n\tcolor : #929292;\r\n}\r\n\r\n@media screen and (max-width : 480px) {\r\n\r\n\t#entry-detail-form[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%] {\r\n\r\n\t\twidth : 100%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width : 500px) {\r\n\r\n\t#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n\t\tdisplay : block;\r\n\t\twidth : 100%;\r\n\t\ttext-align : left;\r\n\t\tmargin-top : 10px;\r\n\t}\r\n\r\n#update-profile[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%] {\r\n\r\n\twidth : 100%;\r\n\tpadding : 10px;\r\n\tmargin : 10px 0px;\r\n}\r\n\r\n\t.form-label[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\tmargin-bottom : 8px;\r\n\twidth : 100%;\r\n}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\r\n\tpadding : 4px 10px;\r\n\twidth : 100%;\r\n\tborder-radius : 6px;\r\n\tborder : 2px solid #ac4bd8;\r\n\tresize : none;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n\r\n\twidth : 100%;\r\n\tdisplay : block;\r\n}\r\n\r\n}\r\n\r\n@media screen and (min-width : 501px) and (max-width : 900px) {\r\n\r\n\t#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n\t\tdisplay : block;\r\n\t\twidth : 100%;\r\n\t\ttext-align : left;\r\n\t\tmargin-top : 10px;\r\n\t}\r\n\r\n\t#update-profile[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%] {\r\n\r\n\twidth : 97%;\r\n\tpadding : 10px;\r\n\tmargin : 10px 0px;\r\n}\r\n\r\n\t.form-label[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : inline-block;\r\n\tmargin-bottom : 8px;\r\n\twidth : 35%;\r\n}\r\n\r\n\t.form-control[_ngcontent-%COMP%] {\r\n\r\n\tpadding : 4px 10px;\r\n\twidth : 65%;\r\n\tborder-radius : 6px;\r\n\tborder : 2px solid #ac4bd8;\r\n\tresize : none;\r\n}\r\n\r\n}\r\n\r\n@media print {\r\n\r\n\t#nav[_ngcontent-%COMP%] {\r\n\r\n\t\tdisplay : none;\r\n\t}\r\n\r\n\t#letter-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\r\n\r\n\t\tdisplay : none;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width : 900px) {\r\n\r\n\t#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n\t\tdisplay : block;\r\n\t\twidth : 100%;\r\n\t\ttext-align : left;\r\n\t\tmargin-top : 10px;\r\n\t}\r\n\r\n\t#nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\r\n\t\ttext-align : left;\r\n\t}\r\n}\r\n\r\n#entry-detail-options[_ngcontent-%COMP%] {\r\n\r\n\twidth : 70%;\r\n\tmargin : 5px auto 0px;\r\n\tpadding : 0.62929018584197768285284930010346% 2.0366495078945626549762984913519%;\r\n}\r\n\r\n#entry-detail-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], button.btn-submit[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\twidth : 100%;\r\n\tmargin : 10px auto 0px;\r\n\tline-height : 2.0em;\r\n\tpadding : 0% 2.9340879234504911474798498165083%;\r\n\tbackground-color : #290140;\r\n\tborder : 1.5px solid #ac4bd8;\r\n\tcolor : #a0a7a0;\r\n\tborder-radius : 6px;\r\n}\r\n\r\n#entry-detail-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, button.btn-submit[_ngcontent-%COMP%]:hover {\r\n\r\n\tcolor : #fff;\r\n\tbackground-color : #210140;\r\n}\r\n\r\n#entry-detail-form[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%] {\r\n\r\n\twidth : 80%;\r\n\tmargin : 0px auto;\r\n\tpadding : 5px 10px;\r\n}\r\n\r\n#entry-detail-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\r\n\ttext-align : center;\r\n}\r\n\r\nul.errors[_ngcontent-%COMP%], #guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\r\n\tmargin-left : 30px;\r\n}\r\n\r\nul.errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em;\r\n}\r\n\r\n#entry-detail-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\tmargin-bottom : 5px;\r\n\tpadding-left : 10px;\r\n\tfont-family : 'RobotoBold';\r\n\tfont-weight : bold;\r\n}\r\n\r\n#update-profile[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%] {\r\n\r\n\twidth : 60%;\r\n\tpadding : 10px;\r\n\tmargin : 10px 0px 10px 50px;\r\n}\r\n\r\n#update-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.5em;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   colgroup[_ngcontent-%COMP%] {\r\n\r\n\twidth : 20%;\r\n}\r\n\r\n.column-view[_ngcontent-%COMP%] {\r\n\r\n\twidth : 10%;\r\n\tmargin : 0px auto;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n\r\n\tvertical-align: top;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n\r\n\tfont-size : 81.25%;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #profile-view[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n\r\n\tline-height : 2.0em;\r\n\ttext-align : left;\r\n\tpadding : 8px 0px;\r\n}\r\n\r\n#profile-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n\r\n\tmargin: 10px 0px;\r\n\tpadding-left : 2%;\r\n\ttext-align : left;\r\n\tfont-size : 14px;\r\n\tfont-weight : bold;\r\n\tfont-family : 'RobotoBold';\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\tmargin-bottom : 8px;\r\n\twidth : 30%;\r\n}\r\n\r\n#update-profile[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #update-profile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], #request-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\r\n\twidth : 100%;\r\n\tborder : 2px solid #3d0398;\r\n\tpadding : 5px;\r\n\tcolor : #290140;\r\n\tborder-radius : 4px;\r\n}\r\n\r\n#update-profile[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\r\n\theight : 80px;\r\n\tvertical-align: middle;\r\n\tresize : none;\r\n}\r\n\r\n#update-profile[_ngcontent-%COMP%]   label.form-label-file[_ngcontent-%COMP%] {\r\n\r\n\tdisplay : block;\r\n\tmargin-bottom : 5px;\r\n\tpadding-left : 10px;\r\n\tfont-family : 'RobotoBold';\r\n\tfont-weight : bold;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n\r\n\tmargin-top : 25px;\r\n}\r\n\r\n.profile-property[_ngcontent-%COMP%] {\r\n\r\n\tmargin-left : 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFjaG1lbnQtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUdBOztDQUVDLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFHQTs7Q0FFQyxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsMEJBQTBCO0FBQzNCOztBQUVBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGlDQUFpQztDQUNqQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLFlBQVk7Q0FDWixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsWUFBWTtBQUNiOztBQUVBOztDQUVDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsY0FBYztBQUNmOztBQUVBOztDQUVDLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsY0FBYztBQUNmOztBQUVBOztDQUVDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBRUE7O0NBRUMscUNBQXFDO0NBQ3JDLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGFBQWE7Q0FDYiwrQ0FBK0M7Q0FDL0MsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQzs7RUFFQyxZQUFZO0NBQ2I7QUFDRDs7QUFFQTs7Q0FFQzs7RUFFQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7O0NBRUMsWUFBWTtDQUNaLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0NBRUM7O0NBRUEsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0NBRUM7O0NBRUEsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTs7QUFFQTs7Q0FFQzs7RUFFQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0NBRUE7O0NBRUEsV0FBVztDQUNYLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0NBRUM7O0NBRUEsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0NBRUM7O0NBRUEsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGFBQWE7QUFDZDs7QUFFQTs7QUFFQTs7Q0FFQzs7RUFFQyxjQUFjO0NBQ2Y7O0NBRUE7O0VBRUMsY0FBYztDQUNmO0FBQ0Q7O0FBR0E7O0NBRUM7O0VBRUMsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztDQUVBOztFQUVDLGlCQUFpQjtDQUNsQjtBQUNEOztBQUdBOztDQUVDLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsZ0ZBQWdGO0FBQ2pGOztBQUVBOztDQUVDLGVBQWU7Q0FDZixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiwrQ0FBK0M7Q0FDL0MsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLFlBQVk7Q0FDWiwwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsY0FBYztDQUNkLDJCQUEyQjtBQUM1Qjs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUVBOztDQUVDLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsYUFBYTtBQUNkOztBQUVBOztDQUVDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJhdHRhY2htZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdiB1bCB7XHJcblxyXG5cdGxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XHJcbn1cclxuXHJcbiNuYXYgdWwgbGkge1xyXG5cclxuXHRkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoIDogMTUwcHg7XHJcblx0bWFyZ2luLXJpZ2h0IDogMjBweDtcclxuXHRib3JkZXItcmFkaXVzIDogMTJweCAwcHggMTJweCAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvciA6ICMyOTAxNDA7XHJcbn1cclxuXHJcbiNuYXYgdWwgbGk6aG92ZXIge1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yIDogIzIxMDE0MDtcdFxyXG59XHJcblxyXG4jbmF2IGxpIGEge1xyXG5cclxuXHRkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmcgOiAxMHB4O1xyXG5cdHdpZHRoIDogMTAwJTtcclxuXHRjb2xvciA6ICNmZmY7XHJcbn1cclxuXHJcbnRmb290IHtcclxuXHJcblx0bWFyZ2luLXRvcCA6IDIwcHg7XHJcbn1cclxuXHJcbiNlbnRyaWVzIHRkIGIge1xyXG5cclxuXHRmb250LXNpemUgOiA4MS4yNSU7XHJcbn1cclxuXHJcbnRhYmxlIHRkICwgdGgge1xyXG5cclxuXHRsaW5lLWhlaWdodCA6IDIuMGVtO1xyXG5cdHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3cgOiBoaWRkZW47XHJcblx0cGFkZGluZyA6IDhweCAwcHg7XHJcbn1cdFxyXG5cclxudHI6aG92ZXIge1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yIDogI2ZiZmFmODtcclxufVxyXG5cclxuLmFydGljbGUgaDEgKyBwICwgLmFydGljbGUgcCB7XHJcblxyXG5cdGxpbmUtaGVpZ2h0IDogMi41ZW07XHJcbn1cclxuXHJcblxyXG50YWJsZSB0ZCB7XHJcblxyXG5cdHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblx0cGFkZGluZyA6IDEwcHggNXB4O1xyXG59XHJcblxyXG50aCB7XHJcblxyXG5cdHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblx0cGFkZGluZyA6IDEwcHggNXB4O1xyXG59XHJcblxyXG5cclxuI2VudHJpZXMtdGFibGUgPiBwIHtcclxuXHJcblx0bWFyZ2luLXRvcCA6IDMwcHg7XHJcbn1cclxuXHJcbiNlbnRyaWVzLXRhYmxlIHRkIGIge1xyXG5cclxuXHRmb250LXNpemUgOiA4MS4yNSU7XHJcbn1cclxuXHJcbnRhYmxlIHRkICwgdGgge1xyXG5cclxuXHRsaW5lLWhlaWdodCA6IDIuMGVtO1xyXG5cdHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblx0cGFkZGluZyA6IDhweCAwcHg7XHJcbn1cdFxyXG5cclxudGFibGUgY2FwdGlvbiB7XHJcblxyXG5cdG1hcmdpbjogMTBweCAwcHg7XHJcblx0cGFkZGluZy1sZWZ0IDogMiU7XHJcblx0dGV4dC1hbGlnbiA6IGxlZnQ7XHJcblx0Zm9udC1zaXplIDogMTRweDtcclxuXHRmb250LXdlaWdodCA6IGJvbGQ7XHJcblx0Zm9udC1mYW1pbHkgOiAnUm9ib3RvQm9sZCc7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvciA6ICNmYmZhZjg7XHJcbn1cclxuXHJcbi5waG90by1pdGVtIHtcclxuXHJcblx0d2lkdGggOiAzMSU7XHJcblx0cGFkZGluZyA6IDElO1xyXG5cdG1hcmdpbi1yaWdodCA6IDEuNSU7XHJcblx0Zm9udC1zaXplIDogMTNweDtcclxuXHRsaW5lLWhlaWdodCA6IDIuNTtcclxuXHRoZWlnaHQgOiA0MDBweDtcclxuXHRwYWRkaW5nIDogMSU7XHJcblx0b3ZlcmZsb3cgOiBoaWRkZW47XHJcbn1cclxuXHJcbi5waG90by1pdGVtIGltZyAsIC5saXN0LXZpZGVvLWl0ZW0gaW1nICwgLmxpc3Qtc291bmQtaXRlbSBpbWcge1xyXG5cclxuXHR3aWR0aCA6IDEwMCU7XHJcblx0bWF4LXdpZHRoIDogMTUwcHg7XHJcbn1cclxuXHJcbi5waG90by1pdGVtLXBob3RvIHtcclxuXHJcblx0d2lkdGggOiAxNTBweDtcclxuXHRtYXJnaW4gOiAwcHggYXV0byAxMHB4O1xyXG5cdGhlaWdodCA6IDE1MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cclxuXHRsaW5lLWhlaWdodCA6IDIuMGVtO1xyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjM2IwOTU2O1xyXG5cdGJvcmRlciA6IDJweCBzb2xpZCAjYWM0YmQ4O1xyXG5cdGNvbG9yIDogIzkyOTI5MjtcclxuXHRib3JkZXItcmFkaXVzIDogMTJweCA2cHggMTJweCA2cHg7XHJcblx0dGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuXHRmb250LXNpemUgOiAxMXB4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLXVwbG9hZCAge1xyXG5cclxuXHRkaXNwbGF5IDogYmxvY2s7XHJcblx0d2lkdGggOiA5MCU7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4tb3B0aW9ucyAge1xyXG5cclxuXHRtYXJnaW4tcmlnaHQgOiAxMHB4O1xyXG5cdHdpZHRoIDogMTIwcHg7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuXHJcblx0ZGlzcGxheSA6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4tc3VibWl0IHtcclxuXHJcblx0ZGlzcGxheSA6IGJsb2NrO1xyXG5cdHdpZHRoIDogMTAwJTtcclxuXHRtYXJnaW4gOiAyMHB4IGF1dG8gMHB4O1xyXG59XHJcblxyXG4jZmlsZS11cGxvYWQtMSBidXR0b24gLCAjZmlsZS11cGxvYWQtMiBidXR0b24gLCAjZmlsZS11cGxvYWQtMyBidXR0b24gLCAjZmlsZS11cGxvYWQtNCBidXR0b24ge1xyXG5cclxuXHRtYXJnaW4gOiA1cHg7XHJcbn1cclxuXHJcbiN1cGxvYWQge1xyXG5cclxuXHRjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYnRuLWFkZC1maWxlLTEgLCAjYnRuLWFkZC1maWxlLTIgLCAjYnRuLWFkZC1maWxlLTMgLCAjYnRuLWFkZC1maWxlLTQge1xyXG5cclxuXHRkaXNwbGF5IDogbm9uZTtcclxuXHRjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYnRuLWRlbC1maWxlLTEgLCAjYnRuLWRlbC1maWxlLTIgLCAjYnRuLWRlbC1maWxlLTMgLCAjYnRuLWRlbC1maWxlLTQge1xyXG5cclxuXHRkaXNwbGF5IDogbm9uZTtcclxuXHRjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYnRuLWNhbi1maWxlLTEgLCAjYnRuLWNhbi1maWxlLTIgLCAjYnRuLWNhbi1maWxlLTMgLCAjYnRuLWNhbi1maWxlLTQge1xyXG5cclxuXHRkaXNwbGF5IDogbm9uZTtcclxuXHRjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcblxyXG4jdXBsb2FkRXJyb3IgLCAjdXBsb2FkRXJyb3IxICwgI3VwbG9hZFRleHQge1xyXG5cclxuXHRtYXJnaW4gOiA1cHggMHB4O1xyXG59XHJcblxyXG4jdXBsb2FkLXByb2dyZXNzIHtcclxuXHJcblx0bWFyZ2luIDogNXB4IDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0IDogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXMgOiA4cHg7XHJcblx0ZGlzcGxheSA6IG5vbmU7XHJcbn1cclxuXHJcbiN1cGxvYWQtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3IgOiBsaWdodGdyZWVuO1xyXG5cdG1hcmdpbi1yaWdodCA6IDVweDtcclxufVxyXG5cclxuLnVwbG9hZE1lc3NhZ2Uge1xyXG5cclxuXHRkaXNwbGF5IDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1pbmZvICwgLmJ0bi1hZGQtZmlsZS0xICwgLmJ0bi1kZWwtZmlsZS0xICwgLmJ0bi1jYW4tZmlsZS0xIHtcclxuXHJcblx0ZGlzcGxheSA6IGJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodCA6IDAuNWVtO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yIDogIzE3MTQxNyAhaW1wb3J0YW50O1xyXG5cdGNvbG9yIDogd2hpdGU7XHJcblx0bWFyZ2luLXJpZ2h0IDogMC41ZW07XHJcblx0ZGlzcGxheSA6IGJsb2NrO1xyXG5cdHdpZHRoIDogMTIwcHg7XHJcblx0cGFkZGluZyA6IDAlIDIuOTM0MDg3OTIzNDUwNDkxMTQ3NDc5ODQ5ODE2NTA4MyU7XHJcblx0Y29sb3IgOiAjOTI5MjkyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDgwcHgpIHtcclxuXHJcblx0I2VudHJ5LWRldGFpbC1mb3JtICwgI3JlcXVlc3QtZm9ybSB7XHJcblxyXG5cdFx0d2lkdGggOiAxMDAlO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDUwMHB4KSB7XHJcblxyXG5cdCNuYXYgdWwgbGkge1xyXG5cclxuXHRcdGRpc3BsYXkgOiBibG9jaztcclxuXHRcdHdpZHRoIDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ24gOiBsZWZ0O1xyXG5cdFx0bWFyZ2luLXRvcCA6IDEwcHg7XHJcblx0fVxyXG5cclxuI3VwZGF0ZS1wcm9maWxlICwgI3Byb2ZpbGUtdmlldyB7XHJcblxyXG5cdHdpZHRoIDogMTAwJTtcclxuXHRwYWRkaW5nIDogMTBweDtcclxuXHRtYXJnaW4gOiAxMHB4IDBweDtcclxufVxyXG5cclxuXHQuZm9ybS1sYWJlbCB7XHJcblxyXG5cdGRpc3BsYXkgOiBibG9jaztcclxuXHRtYXJnaW4tYm90dG9tIDogOHB4O1xyXG5cdHdpZHRoIDogMTAwJTtcclxufVxyXG5cclxuXHQuZm9ybS1jb250cm9sIHtcclxuXHJcblx0cGFkZGluZyA6IDRweCAxMHB4O1xyXG5cdHdpZHRoIDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzIDogNnB4O1xyXG5cdGJvcmRlciA6IDJweCBzb2xpZCAjYWM0YmQ4O1xyXG5cdHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuXHJcbiNwcm9maWxlLXZpZXcgdGggLCAjcHJvZmlsZS12aWV3IHRkIHtcclxuXHJcblx0d2lkdGggOiAxMDAlO1xyXG5cdGRpc3BsYXkgOiBibG9jaztcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDUwMXB4KSBhbmQgKG1heC13aWR0aCA6IDkwMHB4KSB7XHJcblxyXG5cdCNuYXYgdWwgbGkge1xyXG5cclxuXHRcdGRpc3BsYXkgOiBibG9jaztcclxuXHRcdHdpZHRoIDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ24gOiBsZWZ0O1xyXG5cdFx0bWFyZ2luLXRvcCA6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQjdXBkYXRlLXByb2ZpbGUgLCAjcHJvZmlsZS12aWV3IHtcclxuXHJcblx0d2lkdGggOiA5NyU7XHJcblx0cGFkZGluZyA6IDEwcHg7XHJcblx0bWFyZ2luIDogMTBweCAwcHg7XHJcbn1cclxuXHJcblx0LmZvcm0tbGFiZWwge1xyXG5cclxuXHRkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b20gOiA4cHg7XHJcblx0d2lkdGggOiAzNSU7XHJcbn1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblxyXG5cdHBhZGRpbmcgOiA0cHggMTBweDtcclxuXHR3aWR0aCA6IDY1JTtcclxuXHRib3JkZXItcmFkaXVzIDogNnB4O1xyXG5cdGJvcmRlciA6IDJweCBzb2xpZCAjYWM0YmQ4O1xyXG5cdHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblxyXG5cdCNuYXYge1xyXG5cclxuXHRcdGRpc3BsYXkgOiBub25lO1xyXG5cdH1cclxuXHJcblx0I2xldHRlci1jb250ZW50ID4gaDIge1xyXG5cclxuXHRcdGRpc3BsYXkgOiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA5MDBweCkge1xyXG5cclxuXHQjbmF2IHVsIGxpIHtcclxuXHJcblx0XHRkaXNwbGF5IDogYmxvY2s7XHJcblx0XHR3aWR0aCA6IDEwMCU7XHJcblx0XHR0ZXh0LWFsaWduIDogbGVmdDtcclxuXHRcdG1hcmdpbi10b3AgOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0I25hdiB1bCBsaSBhIHtcclxuXHJcblx0XHR0ZXh0LWFsaWduIDogbGVmdDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4jZW50cnktZGV0YWlsLW9wdGlvbnMge1xyXG5cclxuXHR3aWR0aCA6IDcwJTtcclxuXHRtYXJnaW4gOiA1cHggYXV0byAwcHg7XHJcblx0cGFkZGluZyA6IDAuNjI5MjkwMTg1ODQxOTc3NjgyODUyODQ5MzAwMTAzNDYlIDIuMDM2NjQ5NTA3ODk0NTYyNjU0OTc2Mjk4NDkxMzUxOSU7XHJcbn1cclxuXHJcbiNlbnRyeS1kZXRhaWwtb3B0aW9ucyBhICwgYnV0dG9uLmJ0bi1zdWJtaXQge1xyXG5cclxuXHRkaXNwbGF5IDogYmxvY2s7XHJcblx0d2lkdGggOiAxMDAlO1xyXG5cdG1hcmdpbiA6IDEwcHggYXV0byAwcHg7XHJcblx0bGluZS1oZWlnaHQgOiAyLjBlbTtcclxuXHRwYWRkaW5nIDogMCUgMi45MzQwODc5MjM0NTA0OTExNDc0Nzk4NDk4MTY1MDgzJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yIDogIzI5MDE0MDtcclxuXHRib3JkZXIgOiAxLjVweCBzb2xpZCAjYWM0YmQ4O1xyXG5cdGNvbG9yIDogI2EwYTdhMDtcclxuXHRib3JkZXItcmFkaXVzIDogNnB4O1xyXG59XHJcblxyXG4jZW50cnktZGV0YWlsLW9wdGlvbnMgYTpob3ZlciAsIGJ1dHRvbi5idG4tc3VibWl0OmhvdmVyIHtcclxuXHJcblx0Y29sb3IgOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3IgOiAjMjEwMTQwO1xyXG59XHJcblxyXG4jZW50cnktZGV0YWlsLWZvcm0gLCAjcmVxdWVzdC1mb3JtIHtcclxuXHJcblx0d2lkdGggOiA4MCU7XHJcblx0bWFyZ2luIDogMHB4IGF1dG87XHJcblx0cGFkZGluZyA6IDVweCAxMHB4O1xyXG59XHJcblxyXG4jZW50cnktZGV0YWlsLWZvcm0gaDMge1xyXG5cclxuXHR0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcblxyXG51bC5lcnJvcnMgLCAjZ3VpZGVsaW5lcyB1bCB7XHJcblxyXG5cdG1hcmdpbi1sZWZ0IDogMzBweDtcclxufVxyXG5cclxudWwuZXJyb3JzIGxpICwgI2d1aWRlbGluZXMgdWwgbGkge1xyXG5cclxuXHRsaW5lLWhlaWdodCA6IDIuMGVtO1xyXG59XHJcblxyXG4jZW50cnktZGV0YWlsLWZvcm0gbGFiZWwgLCAjcmVxdWVzdC1mb3JtIGxhYmVsIHtcclxuXHJcblx0ZGlzcGxheSA6IGJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b20gOiA1cHg7XHJcblx0cGFkZGluZy1sZWZ0IDogMTBweDtcclxuXHRmb250LWZhbWlseSA6ICdSb2JvdG9Cb2xkJztcclxuXHRmb250LXdlaWdodCA6IGJvbGQ7XHJcbn1cclxuXHJcbiN1cGRhdGUtcHJvZmlsZSAsICNwcm9maWxlLXZpZXcge1xyXG5cclxuXHR3aWR0aCA6IDYwJTtcclxuXHRwYWRkaW5nIDogMTBweDtcclxuXHRtYXJnaW4gOiAxMHB4IDBweCAxMHB4IDUwcHg7XHJcbn1cclxuXHJcbiN1cGRhdGUtcHJvZmlsZSBwICwgI3Byb2ZpbGUtdmlldyBwIHtcclxuXHJcblx0bGluZS1oZWlnaHQgOiAyLjVlbTtcclxufVxyXG5cclxuI3Byb2ZpbGUtdmlldyB0YWJsZSBjb2xncm91cCB7XHJcblxyXG5cdHdpZHRoIDogMjAlO1xyXG59XHJcblxyXG4uY29sdW1uLXZpZXcge1xyXG5cclxuXHR3aWR0aCA6IDEwJTtcclxuXHRtYXJnaW4gOiAwcHggYXV0bztcclxufVxyXG5cclxuI3Byb2ZpbGUtdmlldyB0ZCB7XHJcblxyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbiNwcm9maWxlLXZpZXcgdGQgYiB7XHJcblxyXG5cdGZvbnQtc2l6ZSA6IDgxLjI1JTtcclxufVxyXG5cclxuI3Byb2ZpbGUtdmlldyB0YWJsZSB0ZCAsICNwcm9maWxlLXZpZXcgdGgge1xyXG5cclxuXHRsaW5lLWhlaWdodCA6IDIuMGVtO1xyXG5cdHRleHQtYWxpZ24gOiBsZWZ0O1xyXG5cdHBhZGRpbmcgOiA4cHggMHB4O1xyXG59XHRcclxuXHJcbiNwcm9maWxlLXZpZXcgdGFibGUgY2FwdGlvbiB7XHJcblxyXG5cdG1hcmdpbjogMTBweCAwcHg7XHJcblx0cGFkZGluZy1sZWZ0IDogMiU7XHJcblx0dGV4dC1hbGlnbiA6IGxlZnQ7XHJcblx0Zm9udC1zaXplIDogMTRweDtcclxuXHRmb250LXdlaWdodCA6IGJvbGQ7XHJcblx0Zm9udC1mYW1pbHkgOiAnUm9ib3RvQm9sZCc7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuXHJcblx0ZGlzcGxheSA6IGJsb2NrO1xyXG5cdG1hcmdpbi1ib3R0b20gOiA4cHg7XHJcblx0d2lkdGggOiAzMCU7XHJcbn1cclxuXHJcbiN1cGRhdGUtcHJvZmlsZSBzZWxlY3QgLCAjdXBkYXRlLXByb2ZpbGUgaW5wdXQgLCAjdXBkYXRlLXByb2ZpbGUgdGV4dGFyZWEgLCAjcmVxdWVzdC1mb3JtIHNlbGVjdCAsICNyZXF1ZXN0LWZvcm0gdGV4dGFyZWEge1xyXG5cclxuXHR3aWR0aCA6IDEwMCU7XHJcblx0Ym9yZGVyIDogMnB4IHNvbGlkICMzZDAzOTg7XHJcblx0cGFkZGluZyA6IDVweDtcclxuXHRjb2xvciA6ICMyOTAxNDA7XHJcblx0Ym9yZGVyLXJhZGl1cyA6IDRweDtcclxufVxyXG5cclxuI3VwZGF0ZS1wcm9maWxlIHRleHRhcmVhIHtcclxuXHJcblx0aGVpZ2h0IDogODBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuXHJcbiN1cGRhdGUtcHJvZmlsZSBsYWJlbC5mb3JtLWxhYmVsLWZpbGUge1xyXG5cclxuXHRkaXNwbGF5IDogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbSA6IDVweDtcclxuXHRwYWRkaW5nLWxlZnQgOiAxMHB4O1xyXG5cdGZvbnQtZmFtaWx5IDogJ1JvYm90b0JvbGQnO1xyXG5cdGZvbnQtd2VpZ2h0IDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG5cclxuXHRtYXJnaW4tdG9wIDogMjVweDtcclxufVxyXG5cclxuLnByb2ZpbGUtcHJvcGVydHkge1xyXG5cclxuXHRtYXJnaW4tbGVmdCA6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-attachment-upload',
                'templateUrl': './attachment-upload.component.html',
                'styleUrls': ['./attachment-upload.component.css'],
                'providers': [_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"], _attachment_upload_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentUploadService"]]
            }]
    }], function () { return [{ type: _attachment_upload_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentUploadService"] }, { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesService"] }]; }, { theForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endpoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['end-points']
        }], ready4Submission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['submission']
        }], attachmentName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['attachment-name']
        }], attachmentType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['attachment-type']
        }], myFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['myFile']
        }], btnAddFile1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['btnAddFile1']
        }], btnDelFile1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['btnDelFile1']
        }], btnCanFile1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['btnCanFile1']
        }], fileUploadProgress1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploadProgress1']
        }], fileUploadError1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploadError1']
        }], fileUploadError11: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploadError11']
        }], fileUploadText1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploadText1']
        }], fileUploadMessage1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploadMessage1']
        }], filePercent1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filePercent1']
        }], selectFileButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectFileButton']
        }], fileAttachment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileAttachment']
        }] }); })();


/***/ }),

/***/ "bhAK":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/shared/module/guideline/request-entry-create-file-guideline/request-entry-create-file-guideline.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RequestEntryCreateFileGuidelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryCreateFileGuidelineComponent", function() { return RequestEntryCreateFileGuidelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function RequestEntryCreateFileGuidelineComponent_div_0_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A Student is only allowed to enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The payment will be only valid if the student have the amount required to fulfill the request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Any attempt to circumvent the process or distort or modify pre-defined values which are read-only will not be allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryCreateFileGuidelineComponent_div_0_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Only Images are allowed to be uploaded in the form input fields. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Images that are to be uploaded should not exceed 500 kilobytes in size. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Other Form inputs not allowed by this form will be deemed invalid for processing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Multiple Image upload for each input field is not allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryCreateFileGuidelineComponent_div_0_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Other Form inputs not requested by this form will be deemed invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Only ", ctx_r3.fileType, " documents are allowed to be uploaded in the form input fields. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.fileType, " documents that are to be uploaded must not exceed 500 kilobyte in size. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Multiple ", ctx_r3.fileType, " documents upload for each field are not allowed. ");
} }
function RequestEntryCreateFileGuidelineComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Form filling guidelines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " It is important to read the following guidelines to be able to successfully fill in and submit the form. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryCreateFileGuidelineComponent_div_0_ul_5_Template, 7, 0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestEntryCreateFileGuidelineComponent_div_0_ul_6_Template, 9, 0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestEntryCreateFileGuidelineComponent_div_0_ul_7_Template, 9, 3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.systemGuideline == "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.systemGuideline == "request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.systemGuideline == "file");
} }
class RequestEntryCreateFileGuidelineComponent {
    constructor() {
        this.fileType = 'Image';
    }
    ngOnInit() {
    }
    set attachmentName(atthName) {
        if (atthName != null)
            this.fileType = atthName;
    }
}
RequestEntryCreateFileGuidelineComponent.ɵfac = function RequestEntryCreateFileGuidelineComponent_Factory(t) { return new (t || RequestEntryCreateFileGuidelineComponent)(); };
RequestEntryCreateFileGuidelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryCreateFileGuidelineComponent, selectors: [["app-request-entry-create-file-guideline"]], inputs: { view: "view", systemGuideline: ["system-guideline", "systemGuideline"], fileType: ["file-type", "fileType"], attachmentName: ["attachment-name", "attachmentName"] }, decls: 1, vars: 1, consts: [["id", "guidelines", 4, "ngIf"], ["id", "guidelines"], [4, "ngIf"]], template: function RequestEntryCreateFileGuidelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryCreateFileGuidelineComponent_div_0_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LWNyZWF0ZS1maWxlLWd1aWRlbGluZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryCreateFileGuidelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-create-file-guideline',
                'templateUrl': './request-entry-create-file-guideline.component.html',
                'styleUrls': ['./request-entry-create-file-guideline.component.css']
            }]
    }], function () { return []; }, { view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], systemGuideline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-guideline']
        }], fileType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['file-type']
        }], attachmentName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['attachment-name']
        }] }); })();


/***/ })

};;
//# sourceMappingURL=general-request-entry-create-general-request-entry-create-module~profile-entry-update-photo-profile-~38e66efe.js.map