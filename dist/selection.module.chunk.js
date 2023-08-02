webpackJsonp(["selection.module"],{

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Cell Selection'\">\r\n  <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\r\n  <ngx-datatable\r\n    class=\"material data-table selection-cell\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [limit]=\"10\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"50\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'cell'\"\r\n    (select)=\"onSelect($event)\"\r\n    (activate)=\"onActivate($event)\">\r\n  </ngx-datatable>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/cell/cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellComponent = /** @class */ (function () {
    function CellComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    CellComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CellComponent.prototype.onSelect = function (event) { };
    CellComponent.prototype.onActivate = function (event) { };
    CellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cell',
            template: __webpack_require__("./src/app/theme/table/data-table/selection/cell/cell.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/selection/cell/cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CellComponent);
    return CellComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Checkbox Selection'\">\r\n  <span class=\"m-b-20\">use class <code>dt-chk</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table dt-chk\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'checkbox'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n    <ngx-datatable-column [width]=\"50\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n\r\n      </ng-template>\r\n      <ng-template class=\"datatable-checkbox\" ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\" let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n        <div class=\"checkbox-fade fade-in-default datatable-header-cell-label\">\r\n          <label>\r\n            <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"/>\r\n            <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n          </label>\r\n        </div>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Company\"></ngx-datatable-column>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n      <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/checkbox/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    CheckboxComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    CheckboxComponent.prototype.onActivate = function (event) { };
    CheckboxComponent.prototype.add = function () {
        this.selected.push(this.rows[1], this.rows[3]);
    };
    CheckboxComponent.prototype.update = function () {
        this.selected = [this.rows[1], this.rows[3]];
    };
    CheckboxComponent.prototype.remove = function () {
        this.selected = [];
    };
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__("./src/app/theme/table/data-table/selection/checkbox/checkbox.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/selection/checkbox/checkbox.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Multi Rows Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>multi</code> with ngx-datatable element and select with <code>Ctrl</code> key</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'multi'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <span *ngFor='let sel of selected'>\r\n          <label class=\"label label-primary\">{{sel.name}}</label>\r\n        </span>\r\n      <span *ngIf=\"!selected.length\">No Selections</span>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiRowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiRowsComponent = /** @class */ (function () {
    function MultiRowsComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    MultiRowsComponent.prototype.ngOnInit = function () {
    };
    MultiRowsComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    MultiRowsComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    MultiRowsComponent.prototype.onActivate = function (event) { };
    MultiRowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multi-rows',
            template: __webpack_require__("./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiRowsComponent);
    return MultiRowsComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/selection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__selection_component__["a" /* SelectionComponent */],
        data: {
            title: 'Select Table',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - select table',
            status: true
        }
    }
];
var SelectionRoutingModule = /** @class */ (function () {
    function SelectionRoutingModule() {
    }
    SelectionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SelectionRoutingModule);
    return SelectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-cell></app-cell>\r\n    <app-single-row></app-single-row>\r\n    <app-multi-rows></app-multi-rows>\r\n    <app-checkbox></app-checkbox>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionComponent = /** @class */ (function () {
    function SelectionComponent() {
    }
    SelectionComponent.prototype.ngOnInit = function () {
    };
    SelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selection',
            template: __webpack_require__("./src/app/theme/table/data-table/selection/selection.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/selection/selection.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectionComponent);
    return SelectionComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModule", function() { return SelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell_cell_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/cell/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/checkbox/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__multi_rows_multi_rows_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/multi-rows/multi-rows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__single_row_single_row_component__ = __webpack_require__("./src/app/theme/table/data-table/selection/single-row/single-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selection_routing_module__ = __webpack_require__("./src/app/theme/table/data-table/selection/selection-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SelectionModule = /** @class */ (function () {
    function SelectionModule() {
    }
    SelectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__selection_routing_module__["a" /* SelectionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__selection_component__["a" /* SelectionComponent */], __WEBPACK_IMPORTED_MODULE_3__cell_cell_component__["a" /* CellComponent */], __WEBPACK_IMPORTED_MODULE_4__checkbox_checkbox_component__["a" /* CheckboxComponent */], __WEBPACK_IMPORTED_MODULE_5__multi_rows_multi_rows_component__["a" /* MultiRowsComponent */], __WEBPACK_IMPORTED_MODULE_6__single_row_single_row_component__["a" /* SingleRowComponent */]]
        })
    ], SelectionModule);
    return SelectionModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ng-X Single Row Selection'\">\r\n  <span class=\"m-b-20\">use attribute <code>selectionType</code> as <code>single</code> with ngx-datatable element</span><br><br>\r\n  <ngx-datatable\r\n    class=\"data-table\"\r\n    [rows]=\"rows\"\r\n    [columnMode]=\"'force'\"\r\n    [columns]=\"columns\"\r\n    [headerHeight]=\"50\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [limit]=\"10\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'single'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n  </ngx-datatable>\r\n  <div class=\"row\">\r\n    <div class='col-sm-12 selected-column'>\r\n      <h4 class=\"sub-title p-t-15\">Selected Row</h4>\r\n      <ul>\r\n        <li *ngFor='let sel of selected'>\r\n          <span class=\"label label-primary\">{{sel.name}}</span>\r\n        </li>\r\n        <li *ngIf=\"!selected.length\">No Selections</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/selection/single-row/single-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleRowComponent = /** @class */ (function () {
    function SingleRowComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.selected = [data[2]];
            _this.rows = data;
        });
    }
    SingleRowComponent.prototype.ngOnInit = function () {
    };
    SingleRowComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    SingleRowComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
    };
    SingleRowComponent.prototype.onActivate = function (event) { };
    SingleRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-row',
            template: __webpack_require__("./src/app/theme/table/data-table/selection/single-row/single-row.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/selection/single-row/single-row.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleRowComponent);
    return SingleRowComponent;
}());



/***/ })

});
//# sourceMappingURL=selection.module.chunk.js.map