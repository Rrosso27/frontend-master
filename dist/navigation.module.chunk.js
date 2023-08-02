webpackJsonp(["navigation.module"],{

/***/ "./src/app/theme/navigation/navigation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("./src/app/theme/navigation/navigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */],
        data: {
            title: 'Variants of nav bar',
            icon: 'ti-layout-cta-right',
            caption: 'variants color of nav bar',
            status: true
        }
    }
];
var NavigationRoutingModule = /** @class */ (function () {
    function NavigationRoutingModule() {
    }
    NavigationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], NavigationRoutingModule);
    return NavigationRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body navbar-page\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Custom Dark Colors card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Custom Colors ( Dark )</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <h4 class=\"sub-title\">\r\n            header-theme=\"theme1\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme1\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav1.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme2\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme2\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav2.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme3\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme3\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav3.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme4\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme4\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav4.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme5\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme5\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav5.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme6\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme6\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav6.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <!-- Custom Dark Colors card end -->\r\n\r\n      <!-- Custom light Colors card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Custom Colors ( Light )</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <h4 class=\"sub-title\">\r\n            header-theme=\"themelight1\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight1\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav7.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"themelight2\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight2\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav8.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"themelight3\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight3\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav9.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"themelight4\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight4\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav10.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"themelight5\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight5\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav11.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"themelight6\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"themelight6\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav12.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <!-- Custom light Colors card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/theme/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/theme/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/theme/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("./src/app/theme/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_routing_module__ = __webpack_require__("./src/app/theme/navigation/navigation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__navigation_routing_module__["a" /* NavigationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ })

});
//# sourceMappingURL=navigation.module.chunk.js.map