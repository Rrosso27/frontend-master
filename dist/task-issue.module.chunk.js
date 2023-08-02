webpackJsonp(["task-issue.module"],{

/***/ "./src/app/theme/task/task-issue/task-issue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskIssueRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_issue_component__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__task_issue_component__["a" /* TaskIssueComponent */],
        data: {
            title: 'Task Issue',
            icon: 'ti-check-box',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - task issue',
            status: true
        }
    }
];
var TaskIssueRoutingModule = /** @class */ (function () {
    function TaskIssueRoutingModule() {
    }
    TaskIssueRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TaskIssueRoutingModule);
    return TaskIssueRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4\">\r\n      <!-- Overall Progress card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <!-- <p>.col-sm-4</p> -->\r\n          <div class=\"issue-list-progress\">\r\n            <h6>Overall Progress</h6>\r\n            <div class=\"issue-progress\">\r\n              <div class=\"progress\">\r\n                <span #issueText1 class=\"issue-text1 txt-primary\"></span>\r\n                <div #issueBar1 class=\"issue-bar1 bg-primary\"></div>\r\n              </div>\r\n              <!-- end of progress -->\r\n            </div>\r\n            <!-- end of issue progress -->\r\n          </div>\r\n          <!-- end of issue list progress -->\r\n          <!-- end of matric progress -->\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table matrics-table\">\r\n              <tbody>\r\n              <tr>\r\n                <td>\r\n                  <strong>Assigned Hours</strong>\r\n                </td>\r\n                <td class=\"txt-primary\">70 Hours</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Time Consumed</strong>\r\n                </td>\r\n                <td class=\"txt-danger\">49 Hours</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Issues</strong>\r\n                </td>\r\n                <td class=\"txt-primary\">19</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Bugs</strong>\r\n                </td>\r\n                <td class=\"txt-primary\">16</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Health</strong>\r\n                </td>\r\n                <td class=\"txt-success\">75%</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Commits</strong>\r\n                </td>\r\n                <td class=\"txt-primary\">280</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Bugs Percentage</strong>\r\n                </td>\r\n                <td class=\"txt-danger\">25%</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Assign Date</strong>\r\n                </td>\r\n                <td class=\"txt-info\">02/11/2016</td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <strong>Last closed on</strong>\r\n                </td>\r\n                <td class=\"txt-info\">15/01/2017</td>\r\n              </tr>\r\n              </tbody>\r\n              <!-- end of tbody -->\r\n            </table>\r\n          </div>\r\n          <!-- end of table -->\r\n        </div>\r\n      </div>\r\n      <!-- Overall Progress card stendart -->\r\n    </div>\r\n    <div class=\"col-xl-8\">\r\n      <!-- New ticket button card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\" waves-effect waves-light m-r-10 v-middle issue-btn-group\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-success btn-new-tickets waves-effect waves-light m-r-15 m-t-5 m-b-5\"><i class=\"icofont icofont-paper-plane\"></i><span class=\"m-l-10\">New Tickets</span></button>\r\n            <div class=\"btn-group m-t-5 m-b-5\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-ui-user\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-edit-alt\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-reply\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-printer\"></i></button>\r\n            </div>\r\n            <div class=\"f-right bug-issue-link\">\r\n              <ol class=\"breadcrumb bg-white m-0 p-t-5 p-b-0\">\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">16 Bugs</a></li>\r\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">19 Issue</a></li>\r\n              </ol>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- New ticket button card end -->\r\n      <!-- bug list card start -->\r\n      <app-card [title]=\"'Issue Details'\" [cardOptionBlock]=\"true\">\r\n        <ngx-datatable\r\n          class=\"data-table table-responsive task-list-table\"\r\n          [rows]=\"rowsTask\"\r\n          [loadingIndicator]=\"loadingIndicator\"\r\n          [columnMode]=\"'force'\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rowHeight]=\"66\"\r\n          [reorderable]=\"reorderable\">\r\n          <ngx-datatable-column name=\"Bug\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row['type']}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"#\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <a href=\"javascript:\">{{row['id']}}</a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Description\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row['description']}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Start Date\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row['date']}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Priority\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span class=\"label label-danger\" *ngIf=\"row.priority === 'Highest'\">{{row.priority}}</span>\r\n              <span class=\"label label-warning\" *ngIf=\"row.priority === 'High'\">{{row.priority}}</span>\r\n              <span class=\"label label-success\" *ngIf=\"row.priority === 'Normal'\">{{row.priority}}</span>\r\n              <span class=\"label label-primary\" *ngIf=\"row.priority === 'Slow'\">{{row.priority}}</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Assigned\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <a href=\"javascript:\">{{row['assigned']}}</a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Status\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span class=\"label label-primary\" *ngIf=\"row.status === 'Open'\">{{row.status}}</span>\r\n              <span class=\"label label-danger\" *ngIf=\"row.status === 'Close'\">{{row.status}}</span>\r\n              <span class=\"label label-warning\" *ngIf=\"row.status === 'Pending'\">{{row.status}}</span>\r\n              <span class=\"label label-info\" *ngIf=\"row.status === 'On Hold'\">{{row.status}}</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </app-card>\r\n      <!-- bug list card end -->\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskIssueComponent; });
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

var TaskIssueComponent = /** @class */ (function () {
    function TaskIssueComponent() {
        var _this = this;
        this.rowsTask = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.fetchTaskData(function (data) {
            _this.rowsTask = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    TaskIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        var progression1 = 0;
        var progress = setInterval(function () {
            var commonEle = _this.issueText1.nativeElement;
            var commonEle1 = _this.issueBar1.nativeElement;
            commonEle.innerHTML = progression1 + '%';
            var element_style = 'left:' + progression1 + '%;' + 'top: -20px;';
            commonEle.setAttribute('style', element_style);
            var element_style1 = 'width:' + progression1 + '%;';
            commonEle1.setAttribute('style', element_style1);
            if (progression1 === 70) {
                clearInterval(progress);
            }
            else {
                progression1 += 1;
            }
        }, 100);
    };
    TaskIssueComponent.prototype.fetchTaskData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/issue-list.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('issueText1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueText1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('issueBar1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueBar1", void 0);
    TaskIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-issue',
            template: __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/task-issue/task-issue.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskIssueComponent);
    return TaskIssueComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskIssueModule", function() { return TaskIssueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_issue_component__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_issue_routing_module__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskIssueModule = /** @class */ (function () {
    function TaskIssueModule() {
    }
    TaskIssueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__task_issue_routing_module__["a" /* TaskIssueRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__task_issue_component__["a" /* TaskIssueComponent */]]
        })
    ], TaskIssueModule);
    return TaskIssueModule;
}());



/***/ })

});
//# sourceMappingURL=task-issue.module.chunk.js.map