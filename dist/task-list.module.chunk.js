webpackJsonp(["task-list.module"],{

/***/ "./src/app/theme/task/task-list/task-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_component__ = __webpack_require__("./src/app/theme/task/task-list/task-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__task_list_component__["a" /* TaskListComponent */],
        data: {
            title: 'Task List',
            icon: 'ti-check-box',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - task list',
            status: true
        }
    }
];
var TaskListRoutingModule = /** @class */ (function () {
    function TaskListRoutingModule() {
    }
    TaskListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TaskListRoutingModule);
    return TaskListRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Task List'\" [cardOptionBlock]=\"true\">\r\n        <ngx-datatable\r\n          class=\"data-table table-responsive task-list-table\"\r\n          [rows]=\"rowsTask\"\r\n          [loadingIndicator]=\"loadingIndicator\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rowHeight]=\"66\"\r\n          [reorderable]=\"reorderable\">\r\n          <ngx-datatable-column name=\"#\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              #{{row['id']}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Task List\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <a href=\"javascript:\">{{row['task']}}</a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Last Commit\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <input type=\"date\" class=\"form-control\" value=\"{{row['date']}}\" />\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Status\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <select name=\"select\" class=\"form-control form-control-sm\">\r\n                <option value=\"opt1\" [selected]=\"row.status === 'opt1'\">Open</option>\r\n                <option value=\"opt2\" [selected]=\"row.status === 'opt2'\">Resolved</option>\r\n                <option value=\"opt3\" [selected]=\"row.status === 'opt3'\">Invalid</option>\r\n                <option value=\"opt4\" [selected]=\"row.status === 'opt4'\">On hold</option>\r\n                <option value=\"opt5\" [selected]=\"row.status === 'opt5'\">Close</option>\r\n              </select>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Assiged User\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <a href=\"javascript:;\" *ngFor=\"let image of row.images\">\r\n                <img class=\"img-fluid img-radius\" src=\"{{image}}\">\r\n              </a>\r\n              <a href=\"javascript:;\"><i class=\"fa fa-plus f-w-600\"></i></a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Action\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <div ngbDropdown class=\"text-center\">\r\n                <a ngbDropdownToggle class=\"dropdown-toggle addon-btn\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                  <i class=\"icofont icofont-ui-settings\"></i>\r\n                </a>\r\n                <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i>Attach File</a>\r\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i>Edit Task</a>\r\n                  <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-refresh\"></i>Reassign Task</a>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </app-card>\r\n\r\n      <app-card [title]=\"'To list'\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 btn-add-task\">\r\n            <div class=\"input-group input-group-button\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Add Task\">\r\n              <span class=\"input-group-append\" id=\"basic-addon1\">\r\n                <label class=\"input-group-text\"><i class=\"icofont icofont-plus f-w-600\"></i>Add task</label>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"new-task\">\r\n          <div class=\"to-do-list\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"1\">\r\n                <span class=\"cr\">\r\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                </span>\r\n                <span>Add Proper Cursor In Sortable Page</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"to-do-list\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"2\">\r\n                <span class=\"cr\">\r\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                </span>\r\n                <span>Edit the draft for the icons</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"to-do-list\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"3\">\r\n                <span class=\"cr\">\r\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                </span>\r\n                <span>Create UI design model</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"to-do-list\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"4\" checked>\r\n                <span class=\"cr\">\r\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                </span>\r\n                <span>Checkbox Design issue</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"to-do-list\">\r\n            <div class=\"checkbox-fade fade-in-primary\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"5\">\r\n                <span class=\"cr\">\r\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\r\n                </span>\r\n                <span>Testing live data store</span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/task/task-list/task-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
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

var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
        var _this = this;
        this.rowsTask = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.fetchTaskData(function (data) {
            _this.rowsTask = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    TaskListComponent.prototype.ngOnInit = function () {
    };
    TaskListComponent.prototype.fetchTaskData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/task-list.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/theme/task/task-list/task-list.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/task-list/task-list.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-list/task-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListModule", function() { return TaskListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_component__ = __webpack_require__("./src/app/theme/task/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_list_routing_module__ = __webpack_require__("./src/app/theme/task/task-list/task-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskListModule = /** @class */ (function () {
    function TaskListModule() {
    }
    TaskListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__task_list_routing_module__["a" /* TaskListRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__task_list_component__["a" /* TaskListComponent */]]
        })
    ], TaskListModule);
    return TaskListModule;
}());



/***/ })

});
//# sourceMappingURL=task-list.module.chunk.js.map