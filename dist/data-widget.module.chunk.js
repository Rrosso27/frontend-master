webpackJsonp(["data-widget.module"],{

/***/ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataWidgetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_widget_component__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__data_widget_component__["a" /* DataWidgetComponent */],
        data: {
            title: 'Data Widget',
            status: false
        }
    }
];
var DataWidgetRoutingModule = /** @class */ (function () {
    function DataWidgetRoutingModule() {
    }
    DataWidgetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DataWidgetRoutingModule);
    return DataWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- tabs card start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card [cardClass]=\"'tab-card'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"md-tabs\">\r\n          <ngb-tabset>\r\n            <ngb-tab title=\"Home\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Security\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Entertainment\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Big Data\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- tabs card end -->\r\n\r\n    <!-- social statustic start -->\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <div class=\"card chat-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Chats</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"media received-chat\">\r\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"chat-saprator\"><span>Today</span></div>\r\n          <div class=\"media send-chat\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n            <img class=\"align-self-start ml-3 img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"usrer image\">\r\n          </div>\r\n          <div class=\"media received-chat\">\r\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\r\n            <div class=\"media-body\">\r\n              <h6 class=\"mt-0\">John Deo</h6>\r\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\r\n              <p class=\"text-muted\">10:53am</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer chat-control\">\r\n          <div class=\"chat-form\">\r\n            <input type=\"text\" class=\"form-control search-text\" placeholder=\"Type Hear . .\">\r\n            <div class=\"chat-btn\">\r\n              <button class=\"btn btn-primary btn-icon\"><i class=\"fa fa-paper-plane\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-8\">\r\n      <app-card [title]=\"'Activity'\">\r\n        <ul class=\"activity-blog\">\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15\">Assign a new Task <span class=\"text-c-blue\">Design Web Mockup</span></p>\r\n            <div class=\"row m-b-15\">\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n            </div>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <div class=\"row m-b-15 m-t-15\">\r\n              <div class=\"col-auto col-sm-3\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n              </div>\r\n              <div class=\"col-sm-auto col-sm-9\">\r\n                <p class=\"m-b-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                <button class=\"btn btn-primary btn-round btn-sm\">Design Web Mockup</button>\r\n              </div>\r\n            </div>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n          <li>\r\n            <div class=\"activity-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\r\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n      <!-- social statustic end -->\r\n    </div>\r\n    <!-- social statustic end -->\r\n\r\n    <!-- activity feed start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Activity Feed'\" [cardOptionBlock]=\"true\">\r\n        <ul class=\"feed-blog\">\r\n          <li class=\"active-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\"> 2 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Microphone</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-success\">Task</span>Sarah marked the Pending Review: <span class=\"text-c-green\"> Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-primary\">comment</span> abc posted a task:  <span class=\"text-c-green\">Design a new Homepage</span>  <small class=\"text-muted\"> 6 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n    </div>\r\n    <!-- activity feed end -->\r\n\r\n    <!-- Recent Orders start -->\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>Image</th>\r\n              <th>Product Code</th>\r\n              <th>Customer</th>\r\n              <th>Purchased On</th>\r\n              <th>Status</th>\r\n              <th>Transaction ID</th>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002413</td>\r\n              <td>Jane Elliott</td>\r\n              <td>06-01-2017</td>\r\n              <td><span class=\"label label-primary\">Shipping</span></td>\r\n              <td>#7234421</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002344</td>\r\n              <td>John Deo</td>\r\n              <td>05-01-2017</td>\r\n              <td><span class=\"label label-danger\">Failed</span></td>\r\n              <td>#7234486</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002653</td>\r\n              <td>Eugine Turner</td>\r\n              <td>04-01-2017</td>\r\n              <td><span class=\"label label-success\">Delivered</span></td>\r\n              <td>#7234417</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n              <td>PNG002156</td>\r\n              <td>Jacqueline Howell</td>\r\n              <td>03-01-2017</td>\r\n              <td><span class=\"label label-warning\">Pending</span></td>\r\n              <td>#7234454</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Recent Orders end -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
    }
    DataWidgetComponent.prototype.ngOnInit = function () {
    };
    DataWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-widget',
            template: __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.html"),
            styles: [__webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetModule", function() { return DataWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_widget_component__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_widget_routing_module__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataWidgetModule = /** @class */ (function () {
    function DataWidgetModule() {
    }
    DataWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__data_widget_routing_module__["a" /* DataWidgetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__data_widget_component__["a" /* DataWidgetComponent */]]
        })
    ], DataWidgetModule);
    return DataWidgetModule;
}());



/***/ })

});
//# sourceMappingURL=data-widget.module.chunk.js.map