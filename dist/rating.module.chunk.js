webpackJsonp(["rating.module"],{

/***/ "./node_modules/ngx-bar-rating/component/bar-rating.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");


/** This allows support [(ngModel)] and ngControl. */
var RATING_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true
};
/** This allows control required validation. */
var RATING_VALUE_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return BarRatingComponent; }),
    multi: true,
};
var BarRatingComponent = (function () {
    function BarRatingComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.contexts = [];
        /** Maximal rating that can be given using this widget. */
        this.max = 5;
        /** A flag indicating if rating can be updated. */
        this.readOnly = false;
        /** Set the theme */
        this.theme = 'default';
        /** Show rating title */
        this.showText = false;
        /** Replace rate value with a title */
        this.titles = [];
        /** A flag indicating if rating is required for form validation. */
        this.required = false;
        /** An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over. */
        this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over. */
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating. */
        this.rateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    BarRatingComponent.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    BarRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contexts = Array.from({ length: this.max }, function (context, i) { return ({
            selected: false,
            fraction: false,
            click: function (e) { return _this.handleClick(e, i + 1); },
            enter: function () { return _this.handleEnter(i + 1); }
        }); });
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.update = function (newRate, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    };
    /** Reset rate value */
    BarRatingComponent.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    };
    BarRatingComponent.prototype.updateState = function (nextValue) {
        var _this = this;
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, function (context, index) { return ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            click: function (e) { return _this.handleClick(e, index); },
            enter: function () { return _this.handleEnter(index); }
        }); });
    };
    BarRatingComponent.prototype.handleClick = function (e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    };
    BarRatingComponent.prototype.handleEnter = function (index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map(function (context, i) {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    };
    /** This is the initial value set to the component */
    BarRatingComponent.prototype.writeValue = function (value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    };
    BarRatingComponent.prototype.validate = function (c) {
        return (this.required && !c.value) ? { required: true } : null;
    };
    BarRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BarRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BarRatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return BarRatingComponent;
}());

BarRatingComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'bar-rating',
                template: "\n    <div [class]=\"'br br-' + theme\" [class.br-readonly]=\"readOnly\" [class.br-disabled]=\"disabled\">\n\n      <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n        <div class=\"br-unit\" *ngFor=\"let unit of contexts\" [class.br-fraction]=\"unit.fraction\"\n            [class.br-selected]=\"unit.selected\" [class.br-active]=\"unit.active\"\n            (click)=\"unit.click($event)\" (mouseenter)=\"unit.enter()\"></div>\n\n      </div>\n\n      <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles}}</div>\n    </div>\n  ",
                styles: ["\n    *{box-sizing:border-box}.br{position:relative;margin:15px 0}.br-units{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.br-unit{cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}\n  "],
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
BarRatingComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
BarRatingComponent.propDecorators = {
    'rate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'theme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'leave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'rateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=bar-rating.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_module__ = __webpack_require__("./node_modules/ngx-bar-rating/rating.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rating_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/pipe/bar-rating.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BarRatingPipe = (function () {
    function BarRatingPipe() {
    }
    BarRatingPipe.prototype.transform = function (value, titles) {
        if (value === void 0) { value = 0; }
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    };
    return BarRatingPipe;
}());

BarRatingPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'rateTitle'
            },] },
];
/** @nocollapse */
BarRatingPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=bar-rating.pipe.js.map

/***/ }),

/***/ "./node_modules/ngx-bar-rating/rating.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarRatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__ = __webpack_require__("./node_modules/ngx-bar-rating/component/bar-rating.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_bar_rating_pipe__ = __webpack_require__("./node_modules/ngx-bar-rating/pipe/bar-rating.pipe.js");





var BarRatingModule = (function () {
    function BarRatingModule() {
    }
    return BarRatingModule;
}());

BarRatingModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__["a" /* BarRatingComponent */],
                    __WEBPACK_IMPORTED_MODULE_4__pipe_bar_rating_pipe__["a" /* BarRatingPipe */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__component_bar_rating_component__["a" /* BarRatingComponent */]
                ]
            },] },
];
/** @nocollapse */
BarRatingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/rating/rating.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */],
        data: {
            title: 'Rating',
            icon: 'ti-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - rating',
            status: true
        }
    }
];
var RatingRoutingModule = /** @class */ (function () {
    function RatingRoutingModule() {
    }
    RatingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], RatingRoutingModule);
    return RatingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Rating card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Rating</h5>\r\n            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">1/10 Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>horizontal</code> to see default rating</p>\r\n              <div class=\"box-body f-left\">\r\n                <bar-rating [(rate)]=\"rateHorizontal\" [max]=\"10\" [theme]=\"'horizontal'\"></bar-rating>\r\n                <span class=\"current-rating\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Movie Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>movie</code> to see movie rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateMovie\" [max]=\"4\" [theme]=\"'movie'\" [showText]=\"true\" [titles]=\"['Bad', 'Mediocre' , 'Good', 'Awesome']\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">square rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>square</code> to see square rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateSquare\" [max]=\"5\" [theme]=\"'square'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Read Only rating</h6>\r\n              <p>Use attribute<code>readOnly</code> as value <code>true</code> to see read only rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateMovie\" [max]=\"5\" [readOnly]=\"true\" [theme]=\"'movie'\" [showText]=\"true\" [titles]=\"['Strongly Agree', 'Agree' , 'Neither Agree or Disagree', 'Disagree', 'Strongly Disagree']\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Star rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>stars</code> to see star rating</p>\r\n              <div class=\"box-body\">\r\n                <bar-rating [(rate)]=\"rateStar\" [max]=\"8\" [theme]=\"'stars'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Vertical Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>vertical</code> to see vertical rating</p>\r\n              <div class=\"box-body f-left\">\r\n                <bar-rating [(rate)]=\"rateVertical\" [max]=\"10\" [theme]=\"'vertical'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">Font awesome Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>fontawesome</code> to see font awesome rating</p>\r\n              <div class=\"stars stars-example-fontawesome\">\r\n                <bar-rating [(rate)]=\"rateFa\" [max]=\"5\" [theme]=\"'fontawesome'\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">CSS Default Rating</h6>\r\n              <p>Use tag<code>bar-rating</code> to see css default stars rating</p>\r\n              <div class=\"stars stars-example-css\">\r\n                <bar-rating [(rate)]=\"rateDefault\" [max]=\"5\"></bar-rating>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\r\n              <h6 class=\"sub-title\">fractional star Rating</h6>\r\n              <p>Use attribute<code>theme</code> as value <code>fontawesome-o</code> to see fractional star rating</p>\r\n              <div class=\"stars\">\r\n                <bar-rating [(rate)]=\"rateFao\" [max]=\"10\" [theme]=\"'fontawesome-o'\"></bar-rating>\r\n                <span class=\"title current-rating\">\r\n                  Current rating: <span class=\"value\">{{ rateFao }}</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Rating card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rateDefault = 1;
        this.rateFa = 1;
        this.rateFao = 5.6;
        this.rateMovie = 2;
        this.rateHorizontal = 7;
        this.rateVertical = 1;
        this.rateStar = 5;
        this.rateSquare = 2;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/rating/rating.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/rating/rating.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rating_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/rating/rating-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bar_rating__ = __webpack_require__("./node_modules/ngx-bar-rating/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__rating_routing_module__["a" /* RatingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bar_rating__["a" /* BarRatingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]]
        })
    ], RatingModule);
    return RatingModule;
}());



/***/ })

});
//# sourceMappingURL=rating.module.chunk.js.map