webpackJsonp(["task-details.module"],{

/***/ "./node_modules/rxjs/_esm5/add/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/interval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_interval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].interval = __WEBPACK_IMPORTED_MODULE_1__observable_interval__["a" /* interval */];
//# sourceMappingURL=interval.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IntervalObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._util_isNumeric,.._Observable,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isNumeric__["a" /* isNumeric */])(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=IntervalObservable.js.map 


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IntervalObservable.js");
/** PURE_IMPORTS_START ._IntervalObservable PURE_IMPORTS_END */

var interval = __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__["a" /* IntervalObservable */].create;
//# sourceMappingURL=interval.js.map 


/***/ }),

/***/ "./src/app/theme/task/task-details/task-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_details_component__ = __webpack_require__("./src/app/theme/task/task-details/task-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__task_details_component__["a" /* TaskDetailsComponent */],
        data: {
            title: 'Task Details',
            icon: 'ti-check-box',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - task details',
            status: true
        }
    }
];
var TaskDetailsRoutingModule = /** @class */ (function () {
    function TaskDetailsRoutingModule() {
    }
    TaskDetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TaskDetailsRoutingModule);
    return TaskDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task-details/task-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- Task-detail-right start -->\r\n    <div class=\"col-xl-4 col-lg-12 push-xl-8 task-detail-right\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-clock-time m-r-10\"></i>Task timer</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"counter\">\r\n            <div class=\"row justify-content-md-center\">\r\n              <div class=\"col-auto\">\r\n                <div class=\"time\">{{dYears}}</div>\r\n                <span class=\"f-12\">years</span>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"time\">{{dDays}}</div>\r\n                <span class=\"f-12\">days</span>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"time\">{{dHours}}</div>\r\n                <span class=\"f-12\">hours</span>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"time\">{{dMinutes}}</div>\r\n                <span class=\"f-12\">minutes</span>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"time\">{{dSeconds}}</div>\r\n                <span class=\"f-12\">seconds</span>\r\n              </div>\r\n            </div>\r\n            <!-- end of yourCountdown -->\r\n          </div>\r\n          <!-- end of counter -->\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"f-left\">\r\n            <i class=\"icofont icofont-rewind\"></i> <i class=\"icofont icofont-pause\"></i> <i class=\"icofont icofont-play-alt-1\"></i>\r\n          </div>\r\n          <div class=\"f-right\">\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n              <button ngbDropdownToggle class=\"btn btn-sm btn-primary dropdown-toggle waves-light\" type=\"button\" id=\"dropdown2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Open</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdown2\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\">Open</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">On hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Resolved</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Closed</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Dublicate</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Invalid</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Wontfix</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-ui-note m-r-10\"></i> Task Details</h5>\r\n        </div>\r\n        <div class=\"card-body task-details\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-border table-xs\">\r\n              <tbody>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-contrast\"></i> Project:</td>\r\n                <td class=\"text-right\"><span class=\"f-right\"><a href=\"javascript:;\"> Singular app</a></span></td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-meeting-add\"></i> Updated:</td>\r\n                <td class=\"text-right\">12 May, 2015</td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-id-card\"></i> Created:</td>\r\n                <td class=\"text-right\">25 Feb, 2015</td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-spinner-alt-5\"></i> Priority:</td>\r\n                <td class=\"text-right\">\r\n                  <div class=\"btn-group\">\r\n                    <a href=\"javascript:;\">\r\n                      <i class=\"icofont icofont-upload m-r-5\"></i> Highest\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-spinner-alt-3\"></i> Revisions:</td>\r\n                <td class=\"text-right\">29</td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-ui-love-add\"></i> Added by:</td>\r\n                <td class=\"text-right\"><a href=\"javascript:;\">Winnie</a></td>\r\n              </tr>\r\n              <tr>\r\n                <td><i class=\"icofont icofont-washing-machine\"></i> Status:</td>\r\n                <td class=\"text-right\">Published</td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div>\r\n          <span>\r\n            <a href=\"javascript:;\" class=\"text-muted m-r-10 f-16\"><i class=\"icofont icofont-random\"></i> </a>\r\n          </span>\r\n            <span class=\"m-r-10\">\r\n            <a href=\"javascript:;\" class=\"text-muted f-16\"><i class=\"icofont icofont-options\"></i></a>\r\n          </span>\r\n            <div ngbDropdown=\"\" class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <button ngbDropdownToggle=\"\" class=\"btn btn-sm btn-primary dropdown-toggle waves-light\" type=\"button\" id=\"dropdown3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-checked m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-rotation m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-edit-alt m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close m-r-10\"></i>Remove</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-wheel m-r-10\"></i> Task settings</h5>\r\n        </div>\r\n        <div class=\"card-body task-setting\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Publish after save</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Allow comments</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\"></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Allow users to edit the task</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Use task timer</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Auto saving</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\"></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Auto saving</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <label class=\"f-left\">Allow attachments</label>\r\n                <ui-switch class=\"js-single f-right\"  color=\"#1abc9c\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center\">\r\n              <div class=\"col-sm-12\">\r\n                <button type=\"button\" class=\"btn btn-default waves-effect p-l-40 p-r-40  m-r-30\">Reset\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary waves-effect waves-light p-l-40 p-r-40\">Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-certificate-alt-2 m-r-10\"></i> Revisions</h5>\r\n        </div>\r\n        <div class=\"card-body revision-block\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <ul class=\"media-list\">\r\n                <li class=\"media d-flex m-b-15\">\r\n                  <div class=\"p-l-15 p-r-20 d-inline-block v-middle\"><a href=\"javascript:;\" class=\"btn border-primary txt-primary btn-icon btn-sm b-2-primary\"><i class=\"ti-user f-18 v-middle\"></i></a></div>\r\n                  <div class=\"d-inline-block\">\r\n                    Drop the IE <a href=\"javascript:;\">specific hacks</a> for temporal inputs\r\n                    <div class=\"media-annotation\">4 minutes ago</div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"media d-flex m-b-15\">\r\n                  <div class=\"p-l-15 p-r-20 d-inline-block v-middle\"><a href=\"javascript:;\" class=\"btn border-primary txt-primary btn-icon btn-sm b-2-primary\"><i class=\"ti-vector f-18 v-middle\"></i></a></div>\r\n                  <div class=\"d-inline-block\">\r\n                    Add full font overrides for popovers and tooltips\r\n                    <div class=\"media-annotation\">36 minutes ago</div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"media d-flex m-b-15\">\r\n                  <div class=\"p-l-15 p-r-20 d-inline-block v-middle\"><a href=\"javascript:;\" class=\"btn border-primary txt-primary btn-icon btn-sm b-2-primary\"><i class=\"ti-share-alt f-18 v-middle\"></i></a></div>\r\n                  <div class=\"d-inline-block\">\r\n                    created a new Design branch\r\n                    <div class=\"media-annotation\">36 minutes ago</div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"media d-flex m-b-15\">\r\n                  <div class=\"p-l-15 p-r-20 d-inline-block v-middle\"><a href=\"javascript:;\" class=\"btn border-primary txt-primary btn-icon btn-sm b-2-primary\"><i class=\"ti-agenda f-18 v-middle\"></i></a></div>\r\n                  <div class=\"d-inline-block\">\r\n                    merged Master and Dev branches\r\n                    <div class=\"media-annotation\">48 minutes ago</div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"media d-flex\">\r\n                  <div class=\"p-l-15 p-r-20 d-inline-block v-middle\"><a href=\"javascript:;\" class=\"btn border-primary txt-primary btn-icon btn-sm b-2-primary\"><i class=\"ti-face-smile f-18 v-middle\"></i></a></div>\r\n                  <div class=\"d-inline-block\">\r\n                    Have Carousel ignore keyboard events\r\n                    <div class=\"media-annotation\">Dec 12, 05:46</div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-attachment\"></i> Attached files</h5>\r\n        </div>\r\n        <div class=\"card-body task-attachment\">\r\n          <ul class=\"media-list\">\r\n            <li class=\"media d-flex m-b-10\">\r\n              <div class=\"m-r-20 v-middle\">\r\n                <i class=\"icofont icofont-file-word f-28 text-muted\"></i>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <a href=\"javascript:;\" class=\"m-b-5 d-block\">Overdrew_scowled.doc</a>\r\n                <div class=\"text-muted\">\r\n                  <span>Size: 1.2Mb</span>\r\n                  <span>Added by <a href=\"\">Winnie</a></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"f-right v-middle text-muted\">\r\n                <i class=\"icofont icofont-download-alt f-18\"></i>\r\n              </div>\r\n            </li>\r\n            <li class=\"media d-flex m-b-10\">\r\n              <div class=\"m-r-20 v-middle\">\r\n                <i class=\"icofont icofont-file-powerpoint f-28 text-muted\"></i>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <a href=\"javascript:;\" class=\"m-b-5 d-block\">And_less_maternally.pdf</a>\r\n                <div class=\"text-muted\">\r\n                  <span>Size: 0.11Mb</span>\r\n                  <span>Added by <a href=\"\">Eugene</a></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"f-right v-middle text-muted\">\r\n                <i class=\"icofont icofont-download-alt f-18\"></i>\r\n              </div>\r\n            </li>\r\n            <li class=\"media d-flex m-b-10\">\r\n              <div class=\"m-r-20 v-middle\">\r\n                <i class=\"icofont icofont-file-pdf f-28 text-muted\"></i>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <a href=\"javascript:;\" class=\"m-b-5 d-block\">The_less_overslept.pdf</a>\r\n                <div class=\"text-muted\">\r\n                  <span>Size:5.9Mb</span>\r\n                  <span>Added by <a href=\"\">Natalie</a></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"f-right v-middle text-muted\">\r\n                <i class=\"icofont icofont-download-alt f-18\"></i>\r\n              </div>\r\n            </li>\r\n            <li class=\"media d-flex m-b-10\">\r\n              <div class=\"m-r-20 v-middle\">\r\n                <i class=\"icofont icofont-file-exe f-28 text-muted\"></i>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <a href=\"javascript:;\" class=\"m-b-5 d-block\">Well_equitably.mov</a>\r\n                <div class=\"text-muted\">\r\n                  <span>Size:20.9Mb</span>\r\n                  <span>Added by <a href=\"\">Jenny</a></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"f-right v-middle text-muted\">\r\n                <i class=\"icofont icofont-download-alt f-18\"></i>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-users-alt-4\"></i>  Assigned users</h5>\r\n        </div>\r\n        <div class=\"card-body user-box assign-user\">\r\n          <div class=\"media\">\r\n            <div class=\"media-left media-middle photo-table\">\r\n              <a href=\"javascript:;\">\r\n                <img class=\"img-circle\" src=\"assets/images/avatar-3.jpg\" alt=\"chat-user\">\r\n              </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h6>Sortino media</h6>\r\n              <p>Software Engineer</p>\r\n            </div>\r\n            <div ngbDropdown=\"\" class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <a ngbDropdownToggle href=\"javascript:;\" class=\"text-muted no-icon\"> <i class=\"ti-options-vertical\"></i></a>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-checked m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-rotation m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-edit-alt m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close m-r-10\"></i>Remove</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"media\">\r\n            <div class=\"media-left media-middle photo-table\">\r\n              <a href=\"javascript:;\">\r\n                <img class=\"img-circle\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\">\r\n              </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h6>Larry heading </h6>\r\n              <p>Web Designer</p>\r\n            </div>\r\n            <div ngbDropdown=\"\" class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <a ngbDropdownToggle href=\"javascript:;\" class=\"text-muted no-icon\"> <i class=\"ti-options-vertical\"></i></a>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-checked m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-rotation m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-edit-alt m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close m-r-10\"></i>Remove</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"media\">\r\n            <div class=\"media-left media-middle photo-table\">\r\n              <a href=\"javascript:;\">\r\n                <img class=\"img-circle\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\">\r\n              </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h6>Mark</h6>\r\n              <p>Chief Financial Officer (CFO)</p>\r\n            </div>\r\n            <div ngbDropdown=\"\" class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <a ngbDropdownToggle href=\"javascript:;\" class=\"text-muted no-icon\"> <i class=\"ti-options-vertical\"></i></a>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-checked m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-rotation m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-edit-alt m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close m-r-10\"></i>Remove</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"media p-0 d-flex\">\r\n            <div class=\"media-left media-middle photo-table\">\r\n              <a href=\"javascript:;\">\r\n                <img class=\"img-circle\" src=\"assets/images/avatar-4.jpg\" alt=\"chat-user\">\r\n              </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h6>John Doe</h6>\r\n              <p>Senior Marketing Designer</p>\r\n            </div>\r\n            <div ngbDropdown=\"\" class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <a ngbDropdownToggle href=\"javascript:;\" class=\"text-muted no-icon\"> <i class=\"ti-options-vertical\"></i></a>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-checked m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-rotation m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-edit-alt m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close m-r-10\"></i>Remove</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Task-detail-right start -->\r\n    <!-- Task-detail-left start -->\r\n    <div class=\"col-xl-8 col-lg-12 pull-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5><i class=\"icofont icofont-tasks-alt m-r-5\"></i> Ticket list Doesn't Support commas</h5>\r\n          <button class=\"btn btn-sm btn-primary f-right\"><i class=\"icofont icofont-ui-alarm\"></i>Check in</button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"\">\r\n            <div class=\"m-b-20\">\r\n              <h6 class=\"sub-title m-b-15\">Overview</h6>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </div>\r\n            <div class=\"m-b-20\">\r\n              <h6 class=\"sub-title m-b-15\">What we need</h6>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </div>\r\n            <div class=\"m-b-20 col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-lg-6\">\r\n                  <div class=\"text-primary f-14 m-b-10\">\r\n                    1. The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                  <div class=\"text-primary f-14 m-b-10 m-t-15\">\r\n                    2. The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                  <div class=\"text-primary f-14 m-b-10 m-t-15\">\r\n                    3. The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-6\">\r\n                  <div class=\"text-primary f-14 m-b-10\">\r\n                    1. The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                  <div class=\"text-primary f-14 m-b-10 m-t-15\">\r\n                    2.The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                  <div class=\"text-primary f-14 m-b-10 m-t-15\">\r\n                    3. The standard Lorem Ipsum passage\r\n                  </div>\r\n                  <div class=\"f-12\">\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-b-20\">\r\n              <h6 class=\"sub-title m-b-15\">Requirements</h6>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n              <div class=\"table-responsive m-t-20\">\r\n                <table class=\"table m-b-0 f-14 b-solid requid-table\">\r\n                  <thead>\r\n                  <tr class=\"text-uppercase\">\r\n                    <th class=\"text-center\">javascript:;</th>\r\n                    <th class=\"text-center\">Task</th>\r\n                    <th class=\"text-center\">Due Date</th>\r\n                    <th class=\"text-center\">Description</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody class=\"text-center text-muted\">\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Design mockup</td>\r\n                    <td> <i class=\"icofont icofont-ui-calendar\"></i>&nbsp; 22 December, 16</td>\r\n                    <td>The standard Lorem Ipsum passage</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Software Engineer</td>\r\n                    <td> <i class=\"icofont icofont-ui-calendar\"></i>&nbsp; 01 December, 16</td>\r\n                    <td>The standard Lorem Ipsum passage</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>3</td>\r\n                    <td>Photoshop And Illustrator</td>\r\n                    <td> <i class=\"icofont icofont-ui-calendar\"></i>&nbsp; 15 December, 16</td>\r\n                    <td>The standard Lorem Ipsum passage</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>4</td>\r\n                    <td>Allocated Resource</td>\r\n                    <td> <i class=\"icofont icofont-ui-calendar\"></i>&nbsp; 28 December, 16</td>\r\n                    <td>The standard Lorem Ipsum passage</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>5</td>\r\n                    <td>Financial Controlle</td>\r\n                    <td> <i class=\"icofont icofont-ui-calendar\"></i>&nbsp; 20 December, 16</td>\r\n                    <td>The standard Lorem Ipsum passage</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-t-20 m-b-20\">\r\n              <h6 class=\"sub-title m-b-15\">Uploaded files</h6>\r\n              <p>\r\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n              </p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xl-3\">\r\n                <div class=\"card thumb-block\">\r\n                  <div class=\"thumb-img\">\r\n                    <img src=\"assets/images/task/task-u1.jpg\" class=\"img-fluid width-100\" alt=\"task-u1.jpg\">\r\n                    <div class=\"caption-hover\">\r\n                                                        <span>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-ui-zoom-in\"></i> </a>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-download-alt\"></i> </a>\r\n                                                        </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer text-center\">\r\n                    <a href=\"javascript:;\">   task/task-u1.jpg </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-xl-3\">\r\n                <div class=\"card thumb-block\">\r\n                  <div class=\"thumb-img\">\r\n                    <img src=\"assets/images/task/task-u2.jpg\" class=\"img-fluid width-100\" alt=\"task-u2.jpg\">\r\n                    <div class=\"caption-hover\">\r\n                                                        <span>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-ui-zoom-in\"></i> </a>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-download-alt\"></i> </a>\r\n                                                        </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer text-center\">\r\n                    <a href=\"javascript:;\">   task/task-u2.jpg </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-xl-3\">\r\n                <div class=\"card thumb-block\">\r\n                  <div class=\"thumb-img\">\r\n                    <img src=\"assets/images/task/task-u3.jpg\" class=\"img-fluid width-100\" alt=\"task-u3.jpg\">\r\n                    <div class=\"caption-hover\">\r\n                                                        <span>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-ui-zoom-in\"></i> </a>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-download-alt\"></i> </a>\r\n                                                        </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer text-center\">\r\n                    <a href=\"javascript:;\">   task/task-u3.jpg </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-xl-3\">\r\n                <div class=\"card thumb-block\">\r\n                  <div class=\"thumb-img\">\r\n                    <img src=\"assets/images/task/task-u4.jpg\" class=\"img-fluid width-100\" alt=\"task-u4.jpg\">\r\n                    <div class=\"caption-hover\">\r\n                                                        <span>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-ui-zoom-in\"></i> </a>\r\n                                                            <a href=\"javascript:;\" class=\"btn btn-primary btn-sm\"><i class=\"icofont icofont-download-alt\"></i> </a>\r\n                                                        </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-footer text-center\">\r\n                    <a href=\"javascript:;\">  task/task-u4.jpg </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"f-left\">\r\n            <span class=\" txt-primary\"> <i class=\"icofont icofont-chart-line-alt\"></i>Status:</span>\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <button ngbDropdownToggle class=\"btn btn-sm btn-primary dropdown-toggle waves-light\" type=\"button\" id=\"dropdown4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Open</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown4\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:;\">Open</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">On hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Resolved</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Closed</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Dublicate</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Invalid</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\">Wontfix</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n            </div>\r\n          </div>\r\n          <div class=\"f-right d-flex\">\r\n          <span>\r\n            <a href=\"javascript:;\" class=\"text-muted m-r-10 f-16\"><i class=\"icofont icofont-edit\"></i> </a>\r\n          </span>\r\n            <span class=\"m-r-10\">\r\n            <a href=\"javascript:;\" class=\"text-muted f-16\"><i class=\"icofont icofont-ui-delete\"></i></a>\r\n          </span>\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown d-inline-block\">\r\n              <button ngbDropdownToggle class=\"btn btn-sm btn-primary dropdown-toggle waves-light bg-white b-none txt-muted\" type=\"button\" id=\"dropdown5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown5\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-alarm m-r-10\"></i>Check in</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-attachment m-r-10\"></i>Attach screenshot</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-spinner-alt-5 m-r-10\"></i>Reassign</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit m-r-10\"></i>Edit task</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:;\"><i class=\"icofont icofont-close-line m-r-10\"></i>Remove</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card comment-block\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"card-header-text\"><i class=\"icofont icofont-comment m-r-5\"></i> Comments</h5>\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light f-right\">\r\n            <i class=\"icofont icofont-plus\"></i>\r\n          </button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <ul class=\"media-list\">\r\n            <li class=\"media\">\r\n              <div class=\"media-left\">\r\n                <a href=\"javascript:;\">\r\n                  <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n                </a>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                <div class=\"m-t-10 m-b-25\">\r\n                  <span class=\"f-14\">115 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                  <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                </div>\r\n                <hr>\r\n                <!-- Nested media object -->\r\n                <div class=\"media mt-2\">\r\n                  <a class=\"media-left\" href=\"javascript:;\">\r\n                    <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                    <div class=\"m-t-10 m-b-25\">\r\n                      <span class=\"f-14\">75 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                      <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Nested media object -->\r\n                    <div class=\"media mt-2\">\r\n                      <div class=\"media-left\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6 class=\"media-heading txt-primary\">Lorem Ipsum <span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                        <div class=\"m-t-10 m-b-25\">\r\n                          <span class=\"f-14\">156 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                          <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- Nested media object -->\r\n                <div class=\"media mt-2\">\r\n                  <div class=\"media-left\">\r\n                    <a href=\"javascript:;\">\r\n                      <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                    <div class=\"m-t-10 m-b-25\">\r\n                      <span class=\"f-14\">36 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                      <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                    </div>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media mt-2\">\r\n                  <a class=\"media-left\" href=\"javascript:;\">\r\n                    <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                    <div class=\"m-t-10 m-b-25\">\r\n                      <span class=\"f-14\">75 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                      <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                    </div>\r\n                    <hr>\r\n                    <!-- Nested media object -->\r\n                    <div class=\"media mt-2\">\r\n                      <div class=\"media-left\">\r\n                        <a href=\"javascript:;\">\r\n                          <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                        <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                        <div class=\"m-t-10 m-b-25\">\r\n                          <span class=\"f-14\">156 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                          <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                        </div>\r\n                        <hr>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media mt-2\">\r\n                  <div class=\"media-left\">\r\n                    <a href=\"javascript:;\">\r\n                      <img class=\"media-object img-circle comment-img\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <h6 class=\"media-heading txt-primary\">Lorem ipsum<span class=\"f-12 text-muted m-l-5\">Just now</span></h6>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n                    <div class=\"m-t-10 m-b-25\">\r\n                      <span class=\"f-14\">41 <i class=\"icofont icofont-curved-up m-l-5 m-r-5 text-success\"></i><i class=\"icofont icofont-curved-down text-danger m-r-10\"></i></span>\r\n                      <span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Reply</a></span><span><a href=\"javascript:;\" class=\"m-r-10 f-12\">Edit</a> </span>\r\n                    </div>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <div class=\"md-float-material d-flex\">\r\n            <div class=\"col-md-12 btn-add-task\">\r\n              <div class=\"input-group input-group-button\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Add Task\">\r\n                <span class=\"input-group-append\" id=\"basic-addon1\">\r\n                                          <label class=\"input-group-text\"><i class=\"icofont icofont-plus f-w-600\"></i> Add task</label>\r\n                                          </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Task-detail-left end -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/task/task-details/task-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/task-details/task-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent() {
        this.futureString = 'January 1, 2019 12:00:00';
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date(this.futureString);
        this.$counter = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(1000).map(function (x) {
            _this.diff = Math.floor((_this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });
        this.subscription = this.$counter.subscribe(function (x) { return _this.message = _this.dhms(_this.diff); });
    };
    TaskDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TaskDetailsComponent.prototype.dhms = function (t) {
        var years = 0;
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        days = Math.floor(t / 86400);
        if (days > 365) {
            years = Math.floor(days / 365);
            days = days - (years * 365);
        }
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.dYears = years;
        this.dDays = days;
        this.dHours = hours;
        this.dMinutes = minutes;
        this.dSeconds = seconds;
        return [
            years + ' years',
            days + ' days',
            hours + ' hours',
            minutes + ' min',
            seconds + ' sec'
        ].join(' ');
    };
    TaskDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-details',
            template: __webpack_require__("./src/app/theme/task/task-details/task-details.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/task-details/task-details.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-details/task-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsModule", function() { return TaskDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_details_component__ = __webpack_require__("./src/app/theme/task/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_details_routing_module__ = __webpack_require__("./src/app/theme/task/task-details/task-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ui_switch__ = __webpack_require__("./node_modules/ng2-ui-switch/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskDetailsModule = /** @class */ (function () {
    function TaskDetailsModule() {
    }
    TaskDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__task_details_routing_module__["a" /* TaskDetailsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_ui_switch__["a" /* UiSwitchModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__task_details_component__["a" /* TaskDetailsComponent */]]
        })
    ], TaskDetailsModule);
    return TaskDetailsModule;
}());



/***/ })

});
//# sourceMappingURL=task-details.module.chunk.js.map