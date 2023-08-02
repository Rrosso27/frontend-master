webpackJsonp(["analytics.module"],{

/***/ "./src/app/theme/dashboard/analytics/analytics-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_component__ = __webpack_require__("./src/app/theme/dashboard/analytics/analytics.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__analytics_component__["a" /* AnalyticsComponent */],
        data: {
            title: 'Analytics',
            status: false
        }
    }
];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n\r\n  <div class=\"row\">\r\n    <!-- unique visitor start -->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Statistics</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n            <div id=\"visitor-list-graph\" style=\"height: 400px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- unique visitor start -->\r\n\r\n    <!-- Power card Start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header p-t-20\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Power</h5>\r\n          </div>\r\n          <div class=\"card-header-right\">\r\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>2789</h2><span class=\"text-muted\">kw</span>\r\n          <chart id=\"power-card-chart\" [type]=\"'line'\" [data]=\"powerCardData\" [options]=\"powerCardOption\"></chart>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">2876</h6>\r\n                <span>kw</span>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">234</h6>\r\n                <span>kw</span>\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header p-t-20\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Water</h5>\r\n          </div>\r\n          <div class=\"card-header-right\">\r\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>7.3</h2><span class=\"text-muted\">m3</span>\r\n          <chart id=\"water-card-chart\" [type]=\"'line'\" [data]=\"waterCardData\" [options]=\"waterCardOption\"></chart>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">4.5</h6>\r\n                <span>m3</span>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">0.5</h6>\r\n                <span>m3</span>\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header p-t-20\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Energy</h5>\r\n          </div>\r\n          <div class=\"card-header-right\">\r\n            <i class=\"icofont icofont-spinner-alt-5 \"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block-big card-power\">\r\n          <h2>834</h2><span class=\"text-muted\">mpg</span>\r\n          <chart id=\"energy-card-chart\" [type]=\"'line'\" [data]=\"energyCardData\" [options]=\"energyCardOption\"></chart>\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">15.6</h6>\r\n                <span>mpg</span>\r\n                <p class=\"text-muted m-0\">month</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div class=\"map-area\">\r\n                <h6 class=\"m-0\">234</h6>\r\n                <span>kw</span>\r\n                <p class=\"text-muted m-0\">Today</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Power card End -->\r\n\r\n    <!-- Project overview Start -->\r\n    <div class=\"col-md-12 col-xl-5\">\r\n      <app-card [title]=\"'Latest Comments'\">\r\n        <div class=\"card-comment \">\r\n          <div class=\"card-block-small\">\r\n            <img class=\"img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"user-1\">\r\n            <div class=\"comment-desc\">\r\n              <h6>Luciano Durk</h6>\r\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n              <div class=\"comment-btn\">\r\n                <button class=\"btn bg-c-blue btn-round btn-comment \">Action</button>\r\n              </div>\r\n              <div class=\"date\">\r\n                <i>04 October 2015</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-comment \">\r\n          <div class=\"card-block-small\">\r\n            <img class=\"img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"user-4\">\r\n            <div class=\"comment-desc\">\r\n              <h6>John Doe</h6>\r\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n              <div class=\"comment-btn\">\r\n                <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\r\n              </div>\r\n              <div class=\"date\">\r\n                <i>16 December 2015</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-comment \">\r\n          <div class=\"card-block-small\">\r\n            <img class=\"img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\r\n            <div class=\"comment-desc\">\r\n              <h6>Planner Board</h6>\r\n              <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n              <div class=\"comment-btn\">\r\n                <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\r\n              </div>\r\n              <div class=\"date\">\r\n                <i>12 Saptember 2015</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-7\">\r\n      <app-card [title]=\"'Project report'\" [cardClass]=\"'review-project'\" [blockClass]=\"'p-t-0 p-b-0 w-100'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>Project</th>\r\n              <th></th>\r\n              <th>Status</th>\r\n              <th>Date</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Appestia Perfect</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 12 . 3 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_1\" style=\"display: none;\">1/5</span>\r\n              </td>\r\n\r\n              <td>\r\n                25 %\r\n              </td>\r\n              <td>\r\n                15 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Web consultancy</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 22 . 8 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_2\" style=\"display: none;\">226/360</span>\r\n              </td>\r\n\r\n              <td>\r\n                60 %\r\n              </td>\r\n              <td>\r\n                25 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-3.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Graphic desginer</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 05 . 8 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_3\" style=\"display: none;\">0.52/1.561</span>\r\n              </td>\r\n\r\n              <td>\r\n                40 %\r\n              </td>\r\n              <td>\r\n                12 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Photoshop and logo</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_4\" style=\"display: none;\">1,4</span>\r\n              </td>\r\n\r\n              <td>\r\n                20 %\r\n              </td>\r\n              <td>\r\n                04 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Appestia Perfect</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_5\" style=\"display: none;\">226,134</span>\r\n              </td>\r\n\r\n              <td>\r\n                60 %\r\n              </td>\r\n              <td>\r\n                15 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\r\n                <div class=\"project-contain\">\r\n                  <h6>Appestia Perfect</h6>\r\n                  <p class=\"text-muted\"><i class=\"fa fa-clock-o f-12 m-r-10\"></i>Created 14 . 8 . 2015</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <span class=\"pie_6\" style=\"display: none;\">200,134</span>\r\n              </td>\r\n\r\n              <td>\r\n                60 %\r\n              </td>\r\n              <td>\r\n                15 Octobar 2015\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Project overview End -->\r\n\r\n    <!-- amount-card start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-blue amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-up\"></i>\r\n          <h4>$4600,00</h4>\r\n        </div>\r\n        <chart id=\"amount_card1\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Amount Founded</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-green amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-down\"></i>\r\n          <h4>$387.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card2\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Balance</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-yellow amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-up\"></i>\r\n          <h4>$8350.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card3\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Payback Amount</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-pink amount-card o-hidden\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-down\"></i>\r\n          <h4>$123.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card4\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Planned Collection Income</p>\r\n      </div>\r\n    </div>\r\n    <!-- amount-card end -->\r\n\r\n    <!-- Project & Task Start -->\r\n    <div class=\"col-md-12 col-xl-7\">\r\n      <div class=\"card past-payment-card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left \">\r\n            <h5>Past payment</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n              <tr>\r\n                <th>Team Member</th>\r\n                <th>Paid Hours</th>\r\n                <th>paid Amount</th>\r\n                <th>Date</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-3.jpg\" alt=\"chat-user\"></a>\r\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Erwin Brown</p>\r\n                </td>\r\n                <td>\r\n                  <p>6:23</p>\r\n                </td>\r\n                <td>\r\n                  <p>$20.00/hr</p>\r\n                </td>\r\n                <td>\r\n                  <p>23 oct, 2017</p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\r\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Joseph Villa</p>\r\n                </td>\r\n                <td>\r\n                  <p>10:56</p>\r\n                </td>\r\n                <td>\r\n                  <p>$25.00/hr</p>\r\n                </td>\r\n                <td>\r\n                  <p>25 oct, 2017</p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\r\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Jekson Durk</p>\r\n                </td>\r\n                <td>\r\n                  <p>5:56</p>\r\n                </td>\r\n                <td>\r\n                  <p>$23.00/hr</p>\r\n                </td>\r\n                <td>\r\n                  <p>01 nov, 2017</p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\r\n                  <p class=\"d-inline-block m-l-10 f-w-600\">Erwin Brown</p>\r\n                </td>\r\n                <td>\r\n                  <p>6:23</p>\r\n                </td>\r\n                <td>\r\n                  <p>$16.00/hr</p>\r\n                </td>\r\n                <td>\r\n                  <p>05 nov, 2017</p>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <a href=\"javascript:\"><img class=\"img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\"></a>\r\n                  <p class=\"d-inline-block m-l-10  f-w-600\">Gregory Durk</p>\r\n                </td>\r\n                <td>\r\n                  <p>15:23</p>\r\n                </td>\r\n                <td>\r\n                  <p>$40.00/hr</p>\r\n                </td>\r\n                <td>\r\n                  <p>15 nov, 2017</p>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-5 \">\r\n      <div class=\"card project-task\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left \">\r\n            <h5>Audience by country</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block p-b-10\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n              <tr>\r\n                <th>country</th>\r\n                <th>Statistic</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"task-contain\">\r\n                    <h6 class=\"bg-c-blue d-inline-block text-center\">IN</h6>\r\n                    <p class=\"d-inline-block m-l-20\">India</p>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p class=\"d-inline-block m-r-20\">80%</p>\r\n                  <div class=\"progress d-inline-block\">\r\n                    <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"task-contain\">\r\n                    <h6 class=\"bg-c-pink d-inline-block text-center\">NY</h6>\r\n                    <p class=\"d-inline-block m-l-20\">New York</p>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p class=\"d-inline-block m-r-20\">60%</p>\r\n                  <div class=\"progress d-inline-block\">\r\n                    <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"task-contain\">\r\n                    <h6 class=\"bg-c-yellow d-inline-block text-center\">UK</h6>\r\n                    <p class=\"d-inline-block m-l-20\">England</p>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p class=\"d-inline-block m-r-20\">50%</p>\r\n                  <div class=\"progress d-inline-block\">\r\n                    <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"task-contain\">\r\n                    <h6 class=\"bg-c-green d-inline-block text-center\">BZ</h6>\r\n                    <p class=\"d-inline-block m-l-20\">Brazil</p>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p class=\"d-inline-block m-r-20\">20%</p>\r\n                  <div class=\"progress d-inline-block\">\r\n                    <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:20%\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"task-contain\">\r\n                    <h6 class=\"bg-c-blue d-inline-block text-center\">SA</h6>\r\n                    <p class=\"d-inline-block m-l-20\">Africa</p>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p class=\"d-inline-block m-r-20\">50%</p>\r\n                  <div class=\"progress d-inline-block\">\r\n                    <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Project & Task End -->\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__ = __webpack_require__("./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__ = __webpack_require__("./src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__ = __webpack_require__("./src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__ = __webpack_require__("./src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__ = __webpack_require__("./src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__ = __webpack_require__("./src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__ = __webpack_require__("./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__ = __webpack_require__("./src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart('visitor-list-graph', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Visitors',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'title': 'New Visitors',
                        'gridAlpha': 0,
                        'position': 'right',
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g3',
                        'valueAxis': 'v1',
                        'lineColor': '#a8d1ff',
                        'fillColors': '#a8d1ff',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'old Visitor',
                        'valueField': 'sales2',
                        'clustered': false,
                        'columnWidth': 0.5,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g4',
                        'valueAxis': 'v1',
                        'lineColor': '#00215a',
                        'fillColors': '#00215a',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'New visitor',
                        'valueField': 'sales1',
                        'clustered': false,
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#2ed8b6',
                        'type': 'smoothedLine',
                        'title': 'Last Month Visitor',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#FF5370',
                        // 'type': 'smoothedLine',
                        'dashLength': 5,
                        'title': 'Average Visitor',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'cornerRadius': 5,
                    'shadowAlpha': 0
                },
                'dataProvider': [{
                        'date': '2013-01-16',
                        'market1': 71,
                        'market2': 75,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-17',
                        'market1': 74,
                        'market2': 78,
                        'sales1': 4,
                        'sales2': 6
                    }, {
                        'date': '2013-01-18',
                        'market1': 78,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 2
                    }, {
                        'date': '2013-01-19',
                        'market1': 85,
                        'market2': 89,
                        'sales1': 8,
                        'sales2': 9
                    }, {
                        'date': '2013-01-20',
                        'market1': 82,
                        'market2': 89,
                        'sales1': 9,
                        'sales2': 6
                    }, {
                        'date': '2013-01-21',
                        'market1': 83,
                        'market2': 85,
                        'sales1': 3,
                        'sales2': 5
                    }, {
                        'date': '2013-01-22',
                        'market1': 88,
                        'market2': 92,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-23',
                        'market1': 85,
                        'market2': 90,
                        'sales1': 7,
                        'sales2': 6
                    }, {
                        'date': '2013-01-24',
                        'market1': 85,
                        'market2': 91,
                        'sales1': 9,
                        'sales2': 5
                    }, {
                        'date': '2013-01-25',
                        'market1': 80,
                        'market2': 84,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-26',
                        'market1': 87,
                        'market2': 92,
                        'sales1': 4,
                        'sales2': 8
                    }, {
                        'date': '2013-01-27',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 3,
                        'sales2': 4
                    }, {
                        'date': '2013-01-28',
                        'market1': 83,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-29',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-30',
                        'market1': 81,
                        'market2': 85,
                        'sales1': 4,
                        'sales2': 7
                    }]
            });
            /* power card chart start */
            _this.powerCardData = gurubuildchartjs('#00215a', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], null);
            _this.powerCardOption = gurubuildchartoption();
            /* power card chart and */
            /* water card chart start */
            _this.waterCardData = gurubuildchartjs('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], null);
            _this.waterCardOption = gurubuildchartoption();
            /* water card chart and */
            /* energy card chart start */
            _this.energyCardData = gurubuildchartjs('#2ed8b6', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], null);
            _this.energyCardOption = gurubuildchartoption();
            /* energy card chart and */
            /* amount card 1 to 4 start */
            _this.amountCardData = j('#fff', [40, 30, 45, 30, 35], '#fff');
            _this.amountCardOption = g();
            /* amount card 1 to 4 end */
        }, 75);
    };
    AnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__("./src/app/theme/dashboard/analytics/analytics.component.html"),
            styles: [__webpack_require__("./src/app/theme/dashboard/analytics/analytics.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());

function gurubuildchartjs(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function gurubuildchartoption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
        }
    };
}
function j(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
                label: '',
                borderColor: r,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: s,
                data: q,
            }]
    };
}
function g() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}


/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_component__ = __webpack_require__("./src/app/theme/dashboard/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytics_routing_module__ = __webpack_require__("./src/app/theme/dashboard/analytics/analytics-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__analytics_routing_module__["a" /* AnalyticsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__analytics_component__["a" /* AnalyticsComponent */]]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ })

});
//# sourceMappingURL=analytics.module.chunk.js.map