exports.ids = ["account-general-request-general-request-module~account-refund-refund-module"];
exports.modules = {

/***/ "013A":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry/request-entry-detail/request-entry-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RequestEntryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryDetailComponent", function() { return RequestEntryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function RequestEntryDetailComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.entry == null ? null : ctx_r1.entry.message, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Application Unique Identification Number : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.entry == null ? null : ctx_r2.entry.application_number, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Updated On : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r3.entry == null ? null : ctx_r3.entry.updated_on, "longDate"), " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Unit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.entry == null ? null : ctx_r4.entry.unit_name, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.entry == null ? null : ctx_r5.entry.status, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Handler : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.entry == null ? null : ctx_r6.entry.entry_handler == null ? null : ctx_r6.entry.entry_handler.full_name, "");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r11.entry == null ? null : ctx_r11.entry.stage == null ? null : ctx_r11.entry.stage._id, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r12.entry == null ? null : ctx_r12.entry.stage == null ? null : ctx_r12.entry.stage.name, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Stage Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryDetailComponent_ng_container_0_ng_container_10_ng_container_4_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryDetailComponent_ng_container_0_ng_container_10_ng_container_5_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.entry == null ? null : ctx_r7.entry.stage == null ? null : ctx_r7.entry.stage._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.entry == null ? null : ctx_r7.entry.stage == null ? null : ctx_r7.entry.stage.name);
} }
function RequestEntryDetailComponent_ng_container_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Stage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " : \"Not yet in Stage\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Username : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.entry == null ? null : ctx_r13.entry.username, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Password : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.entry == null ? null : ctx_r14.entry.password, " ");
} }
function RequestEntryDetailComponent_ng_container_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request Credential ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryDetailComponent_ng_container_0_ng_container_13_ng_container_4_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryDetailComponent_ng_container_0_ng_container_13_ng_container_5_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.entry == null ? null : ctx_r10.entry.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.entry == null ? null : ctx_r10.entry.password);
} }
function RequestEntryDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Entry Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryDetailComponent_ng_container_0_ng_container_4_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestEntryDetailComponent_ng_container_0_ng_container_5_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestEntryDetailComponent_ng_container_0_ng_container_6_Template, 6, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestEntryDetailComponent_ng_container_0_ng_container_7_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RequestEntryDetailComponent_ng_container_0_ng_container_8_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RequestEntryDetailComponent_ng_container_0_ng_container_9_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestEntryDetailComponent_ng_container_0_ng_container_10_Template, 6, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestEntryDetailComponent_ng_container_0_ng_template_11_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RequestEntryDetailComponent_ng_container_0_ng_container_13_Template, 6, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.application_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.updated_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.unit_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.entry_handler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.stage)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.entry == null ? null : ctx_r0.entry.username) || (ctx_r0.entry == null ? null : ctx_r0.entry.password));
} }
class RequestEntryDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestEntryDetailComponent.ɵfac = function RequestEntryDetailComponent_Factory(t) { return new (t || RequestEntryDetailComponent)(); };
RequestEntryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryDetailComponent, selectors: [["app-request-entry-detail"]], inputs: { entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noStage", ""], [1, "bold"]], template: function RequestEntryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryDetailComponent_ng_container_0_Template, 14, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-detail',
                'templateUrl': './request-entry-detail.component.html',
                'styleUrls': ['./request-entry-detail.component.css'],
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2Cyu":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/replace-line-break.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ReplaceLineBreakPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceLineBreakPipe", function() { return ReplaceLineBreakPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ReplaceLineBreakPipe {
    transform(value, ...args) {
        return value.replace(/\n/g, '<br/>');
    }
}
ReplaceLineBreakPipe.ɵfac = function ReplaceLineBreakPipe_Factory(t) { return new (t || ReplaceLineBreakPipe)(); };
ReplaceLineBreakPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replaceLineBreak", type: ReplaceLineBreakPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceLineBreakPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'replaceLineBreak'
            }]
    }], null, null); })();


/***/ }),

/***/ "41Vw":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/reply/reply-create-form.service.ts ***!
  \*********************************************************************/
/*! exports provided: ReplyCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCreateFormService", function() { return ReplyCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");




class ReplyCreateFormService {
    constructor(fb) {
        this.fb = fb;
    }
    entryCreateForm() {
        let form = this.fb.group({
            'text': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)] }],
            'comment_author_name': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)] }]
        });
        return form;
    }
}
ReplyCreateFormService.ɵfac = function ReplyCreateFormService_Factory(t) { return new (t || ReplyCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ReplyCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReplyCreateFormService, factory: ReplyCreateFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyCreateFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "7U3D":
/*!********************************************************************!*\
  !*** ./src/app/shared/component/comment/comment-create.service.ts ***!
  \********************************************************************/
/*! exports provided: CommentCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentCreateService", function() { return CommentCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");



class CommentCreateService {
    constructor() {
        this.isEntryCreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isEntryCreated$ = this.isEntryCreated.asObservable();
    }
}
CommentCreateService.ɵfac = function CommentCreateService_Factory(t) { return new (t || CommentCreateService)(); };
CommentCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentCreateService, factory: CommentCreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9WNm":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/component/comment/entry-comment-validator/entry-comment-validator.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EntryCommentValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryCommentValidatorComponent", function() { return EntryCommentValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function EntryCommentValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply should be provided and cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryCommentValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be less than 10 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryCommentValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be greater than 500 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryCommentValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntryCommentValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntryCommentValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EntryCommentValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required) || (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required) || (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.maxlength));
} }
function EntryCommentValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryCommentValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.text.invalid && (ctx_r0.text.touched || ctx_r0.text.dirty));
} }
class EntryCommentValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EntryCommentValidatorComponent.ɵfac = function EntryCommentValidatorComponent_Factory(t) { return new (t || EntryCommentValidatorComponent)(); };
EntryCommentValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryCommentValidatorComponent, selectors: [["app-entry-comment-validator"]], inputs: { text: "text" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function EntryCommentValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntryCommentValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeS1jb21tZW50LXZhbGlkYXRvci5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryCommentValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-entry-comment-validator',
                'templateUrl': './entry-comment-validator.component.html',
                'styleUrls': ['./entry-comment-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acronym.pipe */ "jECo");
/* harmony import */ var _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace-line-break.pipe */ "2Cyu");
/* harmony import */ var _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proposed-credential.pipe */ "Mdff");
/* harmony import */ var _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./replace-tabs.pipe */ "Lhuk");







class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
        _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
        _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
        _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
        _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
        _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
        _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
                    _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
                    _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
                    _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _acronym_pipe__WEBPACK_IMPORTED_MODULE_2__["AcronymPipe"],
                    _replace_line_break_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplaceLineBreakPipe"],
                    _proposed_credential_pipe__WEBPACK_IMPORTED_MODULE_4__["ProposedCredentialPipe"],
                    _replace_tabs_pipe__WEBPACK_IMPORTED_MODULE_5__["ReplaceTabsPipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DQuc":
/*!************************************************************!*\
  !*** ./src/app/shared/component/comment/comment.module.ts ***!
  \************************************************************/
/*! exports provided: CommentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModule", function() { return CommentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry-comment-create/entry-comment-create.component */ "x7qt");
/* harmony import */ var _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-entry-status/comment-entry-status.component */ "VH9/");
/* harmony import */ var _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry-comment-validator/entry-comment-validator.component */ "9WNm");
/* harmony import */ var _comment_create_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment-create.service */ "7U3D");
/* harmony import */ var _comment_create_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comment-create-form.service */ "eIaO");










class CommentModule {
}
CommentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommentModule });
CommentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommentModule_Factory(t) { return new (t || CommentModule)(); }, providers: [
        _comment_create_service__WEBPACK_IMPORTED_MODULE_7__["CommentCreateService"],
        _comment_create_form_service__WEBPACK_IMPORTED_MODULE_8__["CommentCreateFormService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentModule, { declarations: [_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryCommentCreateComponent"],
        _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_5__["CommentEntryStatusComponent"],
        _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_6__["EntryCommentValidatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]], exports: [_entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryCommentCreateComponent"],
        _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_5__["CommentEntryStatusComponent"],
        _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_6__["EntryCommentValidatorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryCommentCreateComponent"],
                    _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_5__["CommentEntryStatusComponent"],
                    _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_6__["EntryCommentValidatorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
                ],
                providers: [
                    _comment_create_service__WEBPACK_IMPORTED_MODULE_7__["CommentCreateService"],
                    _comment_create_form_service__WEBPACK_IMPORTED_MODULE_8__["CommentCreateFormService"]
                ],
                exports: [
                    _entry_comment_create_entry_comment_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryCommentCreateComponent"],
                    _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_5__["CommentEntryStatusComponent"],
                    _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_6__["EntryCommentValidatorComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FVf3":
/*!************************************************************************!*\
  !*** ./src/app/shared/component/request-entry/request-entry.module.ts ***!
  \************************************************************************/
/*! exports provided: RequestEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryModule", function() { return RequestEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _module_simples_simples_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module/simples/simples.module */ "O/oE");
/* harmony import */ var _component_notification_notification_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/notification/notification.module */ "LFMJ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-entry-update-validator/request-entry-update-validator.component */ "yHSd");
/* harmony import */ var _request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-entry-detail/request-entry-detail.component */ "013A");
/* harmony import */ var _request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-entry-student-detail/request-entry-student-detail.component */ "ujQ7");
/* harmony import */ var _request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request-entry-status/request-entry-status.component */ "P2jk");











class RequestEntryModule {
}
RequestEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestEntryModule });
RequestEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestEntryModule_Factory(t) { return new (t || RequestEntryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _module_simples_simples_module__WEBPACK_IMPORTED_MODULE_3__["SimplesModule"],
            _component_notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestEntryModule, { declarations: [_request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryUpdateValidatorComponent"],
        _request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestEntryStudentDetailComponent"],
        _request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryDetailComponent"],
        _request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_9__["RequestEntryStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _module_simples_simples_module__WEBPACK_IMPORTED_MODULE_3__["SimplesModule"],
        _component_notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]], exports: [_request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryDetailComponent"],
        _request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestEntryStudentDetailComponent"],
        _request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryUpdateValidatorComponent"],
        _request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_9__["RequestEntryStatusComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryUpdateValidatorComponent"],
                    _request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestEntryStudentDetailComponent"],
                    _request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryDetailComponent"],
                    _request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_9__["RequestEntryStatusComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _module_simples_simples_module__WEBPACK_IMPORTED_MODULE_3__["SimplesModule"],
                    _component_notification_notification_module__WEBPACK_IMPORTED_MODULE_4__["NotificationModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_5__["GeneralModule"]
                ],
                exports: [
                    _request_entry_detail_request_entry_detail_component__WEBPACK_IMPORTED_MODULE_7__["RequestEntryDetailComponent"],
                    _request_entry_student_detail_request_entry_student_detail_component__WEBPACK_IMPORTED_MODULE_8__["RequestEntryStudentDetailComponent"],
                    _request_entry_update_validator_request_entry_update_validator_component__WEBPACK_IMPORTED_MODULE_6__["RequestEntryUpdateValidatorComponent"],
                    _request_entry_status_request_entry_status_component__WEBPACK_IMPORTED_MODULE_9__["RequestEntryStatusComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "LFMJ":
/*!**********************************************************************!*\
  !*** ./src/app/shared/component/notification/notification.module.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-message/notification-message.component */ "uUgN");




class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_2__["NotificationMessageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Lhuk":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/replace-tabs.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReplaceTabsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceTabsPipe", function() { return ReplaceTabsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ReplaceTabsPipe {
    transform(value, ...args) {
        return value.replace(/\t/g, '&emsp;')
            .replace('ql-align-center', 'center');
    }
}
ReplaceTabsPipe.ɵfac = function ReplaceTabsPipe_Factory(t) { return new (t || ReplaceTabsPipe)(); };
ReplaceTabsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replaceTabs", type: ReplaceTabsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplaceTabsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'replaceTabs'
            }]
    }], null, null); })();


/***/ }),

/***/ "Mdff":
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/proposed-credential.pipe.ts ***!
  \**********************************************************/
/*! exports provided: ProposedCredentialPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposedCredentialPipe", function() { return ProposedCredentialPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class ProposedCredentialPipe {
    transform(value, ...args) {
        return (value.author.full_name).split(' ').join('').toLowerCase();
    }
}
ProposedCredentialPipe.ɵfac = function ProposedCredentialPipe_Factory(t) { return new (t || ProposedCredentialPipe)(); };
ProposedCredentialPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "proposedCredential", type: ProposedCredentialPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposedCredentialPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'proposedCredential'
            }]
    }], null, null); })();


/***/ }),

/***/ "Mwf2":
/*!****************************************************************!*\
  !*** ./src/app/shared/component/reply/reply-create.service.ts ***!
  \****************************************************************/
/*! exports provided: ReplyCreateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCreateService", function() { return ReplyCreateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");



class ReplyCreateService {
    constructor() {
        this.isEntryCreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isEntryCreated$ = this.isEntryCreated.asObservable();
    }
}
ReplyCreateService.ɵfac = function ReplyCreateService_Factory(t) { return new (t || ReplyCreateService)(); };
ReplyCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReplyCreateService, factory: ReplyCreateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P2jk":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry/request-entry-status/request-entry-status.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RequestEntryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryStatusComponent", function() { return RequestEntryStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function RequestEntryStatusComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.entry == null ? null : ctx_r1.entry.message, " ");
} }
function RequestEntryStatusComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Request Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.entry == null ? null : ctx_r2.entry.status, " ");
} }
function RequestEntryStatusComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryStatusComponent_ng_container_0_ng_container_1_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryStatusComponent_ng_container_0_ng_container_2_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.status);
} }
class RequestEntryStatusComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestEntryStatusComponent.ɵfac = function RequestEntryStatusComponent_Factory(t) { return new (t || RequestEntryStatusComponent)(); };
RequestEntryStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryStatusComponent, selectors: [["app-request-entry-status"]], inputs: { entry: "entry", systemType: ["system-type", "systemType"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "bold"]], template: function RequestEntryStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryStatusComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-status',
                'templateUrl': './request-entry-status.component.html',
                'styleUrls': ['./request-entry-status.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }] }); })();


/***/ }),

/***/ "PfYv":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/component/notification/notification-message.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageService", function() { return NotificationMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class NotificationMessageService {
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
NotificationMessageService.ɵfac = function NotificationMessageService_Factory(t) { return new (t || NotificationMessageService)(); };
NotificationMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationMessageService, factory: NotificationMessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VH9/":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/component/comment/comment-entry-status/comment-entry-status.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CommentEntryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentEntryStatusComponent", function() { return CommentEntryStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function CommentEntryStatusComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Message : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.entry == null ? null : ctx_r1.entry.message, " ");
} }
function CommentEntryStatusComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.entry == null ? null : ctx_r2.entry.status, " ");
} }
function CommentEntryStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Request Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentEntryStatusComponent_div_0_ng_container_3_Template, 5, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentEntryStatusComponent_div_0_ng_container_4_Template, 5, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.status);
} }
class CommentEntryStatusComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CommentEntryStatusComponent.ɵfac = function CommentEntryStatusComponent_Factory(t) { return new (t || CommentEntryStatusComponent)(); };
CommentEntryStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentEntryStatusComponent, selectors: [["app-comment-entry-status"]], inputs: { entry: "entry", systemType: ["system-type", "systemType"] }, decls: 1, vars: 1, consts: [["id", "general-entry-details", 4, "ngIf"], ["id", "general-entry-details"], [4, "ngIf"], [1, "bold"]], template: function CommentEntryStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentEntryStatusComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LWVudHJ5LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentEntryStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-comment-entry-status',
                'templateUrl': './comment-entry-status.component.html',
                'styleUrls': ['./comment-entry-status.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }] }); })();


/***/ }),

/***/ "eIaO":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/comment/comment-create-form.service.ts ***!
  \*************************************************************************/
/*! exports provided: CommentCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentCreateFormService", function() { return CommentCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "8VHZ");




class CommentCreateFormService {
    constructor(fb) {
        this.fb = fb;
    }
    entryCreateForm() {
        let form = this.fb.group({
            'text': ['', { 'validators': [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)] }]
        });
        return form;
    }
}
CommentCreateFormService.ɵfac = function CommentCreateFormService_Factory(t) { return new (t || CommentCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CommentCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentCreateFormService, factory: CommentCreateFormService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentCreateFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "jECo":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/acronym.pipe.ts ***!
  \**********************************************/
/*! exports provided: AcronymPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcronymPipe", function() { return AcronymPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");


class AcronymPipe {
    transform(value, ...args) {
        let $value = value.replace(/and/gi, '').split(' ');
        if ($value.length > 1) {
            return $value.map((item) => {
                if (item) {
                    return item[0];
                }
                else {
                    return '';
                }
            }).join('');
        }
        else {
            return $value.join('');
        }
    }
}
AcronymPipe.ɵfac = function AcronymPipe_Factory(t) { return new (t || AcronymPipe)(); };
AcronymPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "acronym", type: AcronymPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcronymPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                'name': 'acronym'
            }]
    }], null, null); })();


/***/ }),

/***/ "jFKE":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/component/reply/reply-comment-detail/reply-comment-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ReplyCommentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyCommentDetailComponent", function() { return ReplyCommentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function ReplyCommentDetailComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Author Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.comment == null ? null : ctx_r1.comment.author == null ? null : ctx_r1.comment.author.full_name, " ");
} }
function ReplyCommentDetailComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Text : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.comment == null ? null : ctx_r2.comment.text, " ");
} }
function ReplyCommentDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comment Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReplyCommentDetailComponent_ng_container_0_ng_container_3_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReplyCommentDetailComponent_ng_container_0_ng_container_4_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment == null ? null : ctx_r0.comment.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comment == null ? null : ctx_r0.comment.text);
} }
class ReplyCommentDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReplyCommentDetailComponent.ɵfac = function ReplyCommentDetailComponent_Factory(t) { return new (t || ReplyCommentDetailComponent)(); };
ReplyCommentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReplyCommentDetailComponent, selectors: [["app-reply-comment-detail"]], inputs: { systemType: ["system-type", "systemType"], comment: "comment" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "bold"], [1, "comment"]], template: function ReplyCommentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReplyCommentDetailComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS1jb21tZW50LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyCommentDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-reply-comment-detail',
                'templateUrl': './reply-comment-detail.component.html',
                'styleUrls': ['./reply-comment-detail.component.css']
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jiyY":
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/authentication.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "Fk62");




class AuthenticationGuard {
    constructor(aus, router) {
        this.aus = aus;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.verifyLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        const url = route.path;
        return this.verifyLogin(url);
    }
    verifyLogin(url) {
        if (this.aus.isLoggedIn()) {
            return true;
        }
        else {
            this.aus.redirectAddress = url;
            return this.router.parseUrl('/signin');
        }
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                'providedIn': 'root'
            }]
    }], function () { return [{ type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "oUMp":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/component/reply/reply-validator/reply-validator.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReplyValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyValidatorComponent", function() { return ReplyValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function ReplyValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply should be provided and cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReplyValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be less than 10 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReplyValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be greater than 500 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReplyValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReplyValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReplyValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReplyValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required) || (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.required) || (ctx_r1.text.errors == null ? null : ctx_r1.text.errors.maxlength));
} }
function ReplyValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReplyValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.text.invalid && (ctx_r0.text.touched || ctx_r0.text.dirty));
} }
class ReplyValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReplyValidatorComponent.ɵfac = function ReplyValidatorComponent_Factory(t) { return new (t || ReplyValidatorComponent)(); };
ReplyValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReplyValidatorComponent, selectors: [["app-reply-validator"]], inputs: { text: "text", comment_author_name: "comment_author_name" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function ReplyValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReplyValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBseS12YWxpZGF0b3IuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-reply-validator',
                'templateUrl': './reply-validator.component.html',
                'styleUrls': ['./reply-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment_author_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tTBu":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/dynamic-control-validator.ts ***!
  \**************************************************************/
/*! exports provided: dynamicDataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicDataValidator", function() { return dynamicDataValidator; });
function dynamicDataValidator(entries, name) {
    return (control) => {
        let entry = control.value;
        let data = entries.map((item) => item._id);
        if (typeof data[0] == 'number') {
            entry = +entry;
        }
        return entry != '' && data.indexOf(entry) < 0 ? { [name]: { 'value': entry, 'name': name } } : null;
    };
}


/***/ }),

/***/ "uUgN":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/component/notification/notification-message/notification-message.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NotificationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageComponent", function() { return NotificationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



const _c0 = function (a1, a2) { return { "notification": true, "fade-in": a1, "fade-out": a2 }; };
function NotificationMessageComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.fadeIn, ctx_r0.fadeOut));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notificationMessage, " ");
} }
class NotificationMessageComponent {
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
NotificationMessageComponent.ɵfac = function NotificationMessageComponent_Factory(t) { return new (t || NotificationMessageComponent)(); };
NotificationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationMessageComponent, selectors: [["app-notification-message"]], inputs: { notificationMessage: ["message", "notificationMessage"], notified: "notified" }, outputs: { finished: "finished" }, decls: 2, vars: 1, consts: [["id", "notification-parent"], [3, "class", 4, "ngIf"]], template: function NotificationMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationMessageComponent_p_1_Template, 2, 6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tbWVzc2FnZS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-notification-message',
                'templateUrl': './notification-message.component.html',
                'styleUrls': ['./notification-message.component.css'],
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

/***/ "ujQ7":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry/request-entry-student-detail/request-entry-student-detail.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: RequestEntryStudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryStudentDetailComponent", function() { return RequestEntryStudentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");



function RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.entry == null ? null : ctx_r2.entry.author == null ? null : ctx_r2.entry.author.full_name, " ");
} }
function RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Faculty : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.entry == null ? null : ctx_r3.entry.author == null ? null : ctx_r3.entry.author.faculty, " ");
} }
function RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Department : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.entry == null ? null : ctx_r4.entry.author == null ? null : ctx_r4.entry.author.department, " ");
} }
function RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Level : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.entry == null ? null : ctx_r5.entry.author == null ? null : ctx_r5.entry.author.level, " ");
} }
function RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_2_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_3_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_ng_container_4_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.entry == null ? null : ctx_r1.entry.author == null ? null : ctx_r1.entry.author.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.entry == null ? null : ctx_r1.entry.author == null ? null : ctx_r1.entry.author.faculty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.entry == null ? null : ctx_r1.entry.author == null ? null : ctx_r1.entry.author.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.entry == null ? null : ctx_r1.entry.author == null ? null : ctx_r1.entry.author.level);
} }
function RequestEntryStudentDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Student Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryStudentDetailComponent_ng_container_0_ng_container_4_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.entry == null ? null : ctx_r0.entry.author);
} }
class RequestEntryStudentDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestEntryStudentDetailComponent.ɵfac = function RequestEntryStudentDetailComponent_Factory(t) { return new (t || RequestEntryStudentDetailComponent)(); };
RequestEntryStudentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryStudentDetailComponent, selectors: [["app-request-entry-student-detail"]], inputs: { entry: "entry" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "bold"]], template: function RequestEntryStudentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryStudentDetailComponent_ng_container_0_Template, 5, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LXN0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryStudentDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-student-detail',
                'templateUrl': './request-entry-student-detail.component.html',
                'styleUrls': ['./request-entry-student-detail.component.css']
            }]
    }], function () { return []; }, { entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vipk":
/*!********************************************************!*\
  !*** ./src/app/shared/component/reply/reply.module.ts ***!
  \********************************************************/
/*! exports provided: ReplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyModule", function() { return ReplyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/general.module */ "hxwH");
/* harmony import */ var _entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry-reply-create/entry-reply-create.component */ "zki3");
/* harmony import */ var _reply_comment_detail_reply_comment_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reply-comment-detail/reply-comment-detail.component */ "jFKE");
/* harmony import */ var _reply_validator_reply_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reply-validator/reply-validator.component */ "oUMp");
/* harmony import */ var _reply_create_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reply-create-form.service */ "41Vw");
/* harmony import */ var _reply_create_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reply-create.service */ "Mwf2");










class ReplyModule {
}
ReplyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReplyModule });
ReplyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReplyModule_Factory(t) { return new (t || ReplyModule)(); }, providers: [
        _reply_create_form_service__WEBPACK_IMPORTED_MODULE_7__["ReplyCreateFormService"],
        _reply_create_service__WEBPACK_IMPORTED_MODULE_8__["ReplyCreateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReplyModule, { declarations: [_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryReplyCreateComponent"],
        _reply_comment_detail_reply_comment_detail_component__WEBPACK_IMPORTED_MODULE_5__["ReplyCommentDetailComponent"],
        _reply_validator_reply_validator_component__WEBPACK_IMPORTED_MODULE_6__["ReplyValidatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]], exports: [_entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryReplyCreateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryReplyCreateComponent"],
                    _reply_comment_detail_reply_comment_detail_component__WEBPACK_IMPORTED_MODULE_5__["ReplyCommentDetailComponent"],
                    _reply_validator_reply_validator_component__WEBPACK_IMPORTED_MODULE_6__["ReplyValidatorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"]
                ],
                providers: [
                    _reply_create_form_service__WEBPACK_IMPORTED_MODULE_7__["ReplyCreateFormService"],
                    _reply_create_service__WEBPACK_IMPORTED_MODULE_8__["ReplyCreateService"]
                ],
                exports: [
                    _entry_reply_create_entry_reply_create_component__WEBPACK_IMPORTED_MODULE_4__["EntryReplyCreateComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "x7qt":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/component/comment/entry-comment-create/entry-comment-create.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EntryCommentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryCommentCreateComponent", function() { return EntryCommentCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _comment_create_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment-create.service */ "7U3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment-entry-status/comment-entry-status.component */ "VH9/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entry-comment-validator/entry-comment-validator.component */ "9WNm");











function EntryCommentCreateComponent_app_view_description_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function EntryCommentCreateComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function EntryCommentCreateComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function EntryCommentCreateComponent_app_comment_entry_status_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment-entry-status", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entry", ctx_r2.entry)("system-type", ctx_r2.systemType);
} }
function EntryCommentCreateComponent_div_3_app_entry_comment_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-entry-comment-validator", 15);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r6.text);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function EntryCommentCreateComponent_div_3_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryCommentCreateComponent_div_3_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.createEntry(ctx_r9.entryCreateForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r7.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.isFormValid);
} }
function EntryCommentCreateComponent_div_3_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryCommentCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EntryCommentCreateComponent_div_3_app_entry_comment_validator_7_Template, 1, 1, "app-entry-comment-validator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EntryCommentCreateComponent_div_3_button_8_Template, 2, 5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EntryCommentCreateComponent_div_3_p_9_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.entryCreateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted);
} }
class EntryCommentCreateComponent {
    constructor(ccs, ns) {
        this.ccs = ccs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.entryCreatedOb = this.ccs.isEntryCreated$
            .subscribe((created) => {
            if (created == false) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} comment is not added.`);
            }
            else if (created == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} comment is added.`);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.entryCreatedOb.unsubscribe();
    }
    createEntry(body) {
        this.isFormSubmitted = true;
        this.isFormProcessing = true;
        this.processEntry.emit(body);
    }
    get text() {
        return this.entryCreateForm.get('text');
    }
    get isFormValid() {
        return this.entryCreateForm.valid;
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
EntryCommentCreateComponent.ɵfac = function EntryCommentCreateComponent_Factory(t) { return new (t || EntryCommentCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comment_create_service__WEBPACK_IMPORTED_MODULE_2__["CommentCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"])); };
EntryCommentCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryCommentCreateComponent, selectors: [["app-entry-comment-create"]], inputs: { systemType: ["system-type", "systemType"], view: "view", entry: "entry", entryCreateForm: ["entry-create-form", "entryCreateForm"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]])], decls: 4, vars: 4, consts: [[3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], [3, "entry", "system-type", 4, "ngIf"], ["id", "comment-form", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], [3, "entry", "system-type"], ["id", "comment-form"], [3, "formGroup"], [1, "form-group"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "required", "required", "autocomplete", "new-text", "formControlName", "text"], [3, "text", 4, "ngIf"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "text"], [1, "btn-submit", 3, "disabled", "click"]], template: function EntryCommentCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntryCommentCreateComponent_app_view_description_0_Template, 1, 2, "app-view-description", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryCommentCreateComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntryCommentCreateComponent_app_comment_entry_status_2_Template, 1, 2, "app-comment-entry-status", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntryCommentCreateComponent_div_3_Template, 10, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"], _comment_entry_status_comment_entry_status_component__WEBPACK_IMPORTED_MODULE_6__["CommentEntryStatusComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _entry_comment_validator_entry_comment_validator_component__WEBPACK_IMPORTED_MODULE_8__["EntryCommentValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeS1jb21tZW50LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryCommentCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-entry-comment-create',
                'templateUrl': './entry-comment-create.component.html',
                'styleUrls': ['./entry-comment-create.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _comment_create_service__WEBPACK_IMPORTED_MODULE_2__["CommentCreateService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryCreateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-create-form']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "yHSd":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/shared/component/request-entry/request-entry-update-validator/request-entry-update-validator.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RequestEntryUpdateValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEntryUpdateValidatorComponent", function() { return RequestEntryUpdateValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations */ "J1Ni");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "Yvf7");




function RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply should be provided and cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be less than 10 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Body of Comment or Reply cannot be greater than 500 characters in length ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestEntryUpdateValidatorComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_2_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryUpdateValidatorComponent_ng_container_0_div_1_li_4_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.text.errors == null ? null : ctx_r3.text.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.text.errors == null ? null : ctx_r3.text.errors.required) || (ctx_r3.text.errors == null ? null : ctx_r3.text.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.text.errors == null ? null : ctx_r3.text.errors.required) || (ctx_r3.text.errors == null ? null : ctx_r3.text.errors.maxlength));
} }
function RequestEntryUpdateValidatorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryUpdateValidatorComponent_ng_container_0_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.text.invalid && (ctx_r0.text.touched || ctx_r0.text.dirty));
} }
function RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r8.systemType, " should be provided and cannot be empty ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r9.systemType, " cannot be greater than specified length ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status of ", ctx_r10.systemType, " should be available from existing record before it can be considered valid ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryUpdateValidatorComponent_ng_container_1_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.status.errors == null ? null : ctx_r7.status.errors.Status);
} }
function RequestEntryUpdateValidatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryUpdateValidatorComponent_ng_container_1_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.status.invalid && (ctx_r1.status.touched || ctx_r1.status.dirty));
} }
function RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stage of ", ctx_r12.systemType, " should be provided and cannot be empty ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stage of ", ctx_r13.systemType, " cannot be less than 1 characters in length ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Stage of ", ctx_r14.systemType, " cannot be greater than 30 characters in length ");
} }
function RequestEntryUpdateValidatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_2_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_3_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestEntryUpdateValidatorComponent_ng_container_2_div_1_li_4_Template, 2, 1, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.stage.errors == null ? null : ctx_r11.stage.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.stage.errors == null ? null : ctx_r11.stage.errors.required) || (ctx_r11.stage.errors == null ? null : ctx_r11.stage.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.stage.errors == null ? null : ctx_r11.stage.errors.required) || (ctx_r11.stage.errors == null ? null : ctx_r11.stage.errors.maxlength));
} }
function RequestEntryUpdateValidatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryUpdateValidatorComponent_ng_container_2_div_1_Template, 5, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stage.invalid && (ctx_r2.stage.touched || ctx_r2.stage.dirty));
} }
class RequestEntryUpdateValidatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RequestEntryUpdateValidatorComponent.ɵfac = function RequestEntryUpdateValidatorComponent_Factory(t) { return new (t || RequestEntryUpdateValidatorComponent)(); };
RequestEntryUpdateValidatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestEntryUpdateValidatorComponent, selectors: [["app-request-entry-update-validator"]], inputs: { systemType: ["system-type", "systemType"], text: "text", status: "status", stage: "stage" }, decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function RequestEntryUpdateValidatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestEntryUpdateValidatorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestEntryUpdateValidatorComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestEntryUpdateValidatorComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LWVudHJ5LXVwZGF0ZS12YWxpZGF0b3IuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestEntryUpdateValidatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-request-entry-update-validator',
                'templateUrl': './request-entry-update-validator.component.html',
                'styleUrls': ['./request-entry-update-validator.component.css'],
                'animations': [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return []; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zki3":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/component/reply/entry-reply-create/entry-reply-create.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EntryReplyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryReplyCreateComponent", function() { return EntryReplyCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "Ub9n");
/* harmony import */ var _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/notification/notification-message.service */ "PfYv");
/* harmony import */ var _reply_create_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reply-create.service */ "Mwf2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "Yvf7");
/* harmony import */ var _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../general/view-description/view-description.component */ "+ef2");
/* harmony import */ var _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../general/notification-screen/notification-screen.component */ "Rxsk");
/* harmony import */ var _reply_comment_detail_reply_comment_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reply-comment-detail/reply-comment-detail.component */ "jFKE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "8VHZ");
/* harmony import */ var _reply_validator_reply_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reply-validator/reply-validator.component */ "oUMp");











function EntryReplyCreateComponent_app_view_description_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-description", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view-type", ctx_r0.view)("system-type", ctx_r0.systemType);
} }
function EntryReplyCreateComponent_app_notification_screen_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-notification-screen", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function EntryReplyCreateComponent_app_notification_screen_1_Template_app_notification_screen_finished_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notified", ctx_r1.notificationAvailable)("message", ctx_r1.notificationMessage);
} }
function EntryReplyCreateComponent_div_2_app_reply_comment_detail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-reply-comment-detail", 8);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("system-type", ctx_r6.systemType)("comment", ctx_r6.comment);
} }
function EntryReplyCreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryReplyCreateComponent_div_2_app_reply_comment_detail_1_Template, 1, 2, "app-reply-comment-detail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.comment);
} }
function EntryReplyCreateComponent_div_3_app_reply_validator_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-reply-validator", 17);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r7.text);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
function EntryReplyCreateComponent_div_3_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryReplyCreateComponent_div_3_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.createEntry(ctx_r10.entryCreateForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx_r8.isFormValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.isFormValid);
} }
function EntryReplyCreateComponent_div_3_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your form is being processed. Please kindly be patient and wait while it completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntryReplyCreateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EntryReplyCreateComponent_div_3_app_reply_validator_7_Template, 1, 1, "app-reply-validator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EntryReplyCreateComponent_div_3_button_8_Template, 2, 5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EntryReplyCreateComponent_div_3_p_9_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.entryCreateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isFormProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted);
} }
class EntryReplyCreateComponent {
    constructor(rcs, ns) {
        this.rcs = rcs;
        this.ns = ns;
        this.processEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.isFormProcessing = false;
        this.entryCreatedOb = this.rcs.isEntryCreated$
            .subscribe((created) => {
            if (created == false) {
                this.isFormSubmitted = false;
                this.isFormProcessing = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} reply is not added.`);
            }
            else if (created == true) {
                this.isFormSubmitted = false;
                this.ns.setNotificationStatus(true);
                this.ns.addNotification(`Operation is successful and ${this.systemType} reply is added.`);
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.entryCreatedOb.unsubscribe();
    }
    createEntry(body) {
        this.isFormSubmitted = true;
        this.isFormProcessing = true;
        this.processEntry.emit(body);
    }
    get text() {
        return this.entryCreateForm.get('text');
    }
    get comment_author_name() {
        return this.entryCreateForm.get('comment_author_name');
    }
    get isFormValid() {
        return this.entryCreateForm.valid;
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
EntryReplyCreateComponent.ɵfac = function EntryReplyCreateComponent_Factory(t) { return new (t || EntryReplyCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reply_create_service__WEBPACK_IMPORTED_MODULE_2__["ReplyCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"])); };
EntryReplyCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryReplyCreateComponent, selectors: [["app-entry-reply-create"]], inputs: { systemType: ["system-type", "systemType"], view: "view", entry: "entry", comment: "comment", entryCreateForm: ["entry-create-form", "entryCreateForm"] }, outputs: { processEntry: "processEntry" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]])], decls: 4, vars: 4, consts: [[3, "view-type", "system-type", 4, "ngIf"], [3, "notified", "message", "finished", 4, "ngIf"], ["id", "reply-comment-entry", 4, "ngIf"], ["id", "reply-form", 4, "ngIf"], [3, "view-type", "system-type"], [3, "notified", "message", "finished"], ["id", "reply-comment-entry"], [3, "system-type", "comment", 4, "ngIf"], [3, "system-type", "comment"], ["id", "reply-form"], [3, "formGroup"], [1, "form-group"], ["for", "text", 1, "form-label", "bold"], ["name", "text", "id", "text", "required", "required", "autocomplete", "new-text", "formControlName", "text"], [3, "text", 4, "ngIf"], ["class", "btn-submit", 3, "class", "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "text"], [1, "btn-submit", 3, "disabled", "click"]], template: function EntryReplyCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntryReplyCreateComponent_app_view_description_0_Template, 1, 2, "app-view-description", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntryReplyCreateComponent_app_notification_screen_1_Template, 1, 2, "app-notification-screen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EntryReplyCreateComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntryReplyCreateComponent_div_3_Template, 10, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _general_view_description_view_description_component__WEBPACK_IMPORTED_MODULE_4__["ViewDescriptionComponent"], _general_notification_screen_notification_screen_component__WEBPACK_IMPORTED_MODULE_5__["NotificationScreenComponent"], _reply_comment_detail_reply_comment_detail_component__WEBPACK_IMPORTED_MODULE_6__["ReplyCommentDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _reply_validator_reply_validator_component__WEBPACK_IMPORTED_MODULE_8__["ReplyValidatorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeS1yZXBseS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryReplyCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'app-entry-reply-create',
                'templateUrl': './entry-reply-create.component.html',
                'styleUrls': ['./entry-reply-create.component.css'],
                'providers': [_component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"]]
            }]
    }], function () { return [{ type: _reply_create_service__WEBPACK_IMPORTED_MODULE_2__["ReplyCreateService"] }, { type: _component_notification_notification_message_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMessageService"] }]; }, { systemType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-type']
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entryCreateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['entry-create-form']
        }], processEntry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=account-general-request-general-request-module~account-refund-refund-module.js.map