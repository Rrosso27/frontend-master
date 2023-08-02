webpackJsonp(["pre-loader.module"],{

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreLoaderRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_loader_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pre_loader_component__["a" /* PreLoaderComponent */],
        data: {
            title: 'Pre-Loader',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - pre-loader',
            status: true
        }
    }
];
var PreLoaderRoutingModule = /** @class */ (function () {
    function PreLoaderRoutingModule() {
    }
    PreLoaderRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], PreLoaderRoutingModule);
    return PreLoaderRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader style card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader Style</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader Style 1</div>\r\n              <p>Add class <code> preloader3</code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1\"></div>\r\n                <div class=\"circ2\"></div>\r\n                <div class=\"circ3\"></div>\r\n                <div class=\"circ4\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader Style 2(Using SVG)</div>\r\n              <p>Add id <code> loader2</code></p>\r\n              <div class=\"loader-block\">\r\n                <svg id=\"loader2\" viewBox=\"0 0 100 100\">\r\n                  <circle id=\"circle-loader2\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\r\n                </svg>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 3</h6>\r\n              <p>Add class <code> preloader4</code></p>\r\n              <div class=\"text-center loader-block\">\r\n                <div class=\"preloader4\">\r\n                  <div class=\"double-bounce1\"></div>\r\n                  <div class=\"double-bounce2\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 4</h6>\r\n              <p>Add class <code> cell preloader5 </code></p>\r\n              <div class=\"cell preloader5 loader-block\">\r\n                <div class=\"circle-5 l\"></div>\r\n                <div class=\"circle-5 m\"></div>\r\n                <div class=\"circle-5 r\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">loader animation-start</h6>\r\n              <p>Add class <code> cell preloader5 </code></p>\r\n              <div class=\"loader animation-start\">\r\n                <span class=\"circle delay-1 size-2\"></span>\r\n                <span class=\"circle delay-2 size-4\"></span>\r\n                <span class=\"circle delay-3 size-6\"></span>\r\n                <span class=\"circle delay-4 size-7\"></span>\r\n                <span class=\"circle delay-5 size-7\"></span>\r\n                <span class=\"circle delay-6 size-6\"></span>\r\n                <span class=\"circle delay-7 size-4\"></span>\r\n                <span class=\"circle delay-8 size-2\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 6</h6>\r\n              <p>Add class <code> preloader6 </code></p>\r\n              <div class=\"loader-block\">\r\n                <div class=\"preloader6\">\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader style card end -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader color card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader color</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader default Style</div>\r\n              <p>Add class <code> loader-default </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-default\"></div>\r\n                <div class=\"circ2 loader-default\"></div>\r\n                <div class=\"circ3 loader-default\"></div>\r\n                <div class=\"circ4 loader-default\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader primary Style</div>\r\n              <p>Add class <code> loader-primary </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary\"></div>\r\n                <div class=\"circ2 loader-primary\"></div>\r\n                <div class=\"circ3 loader-primary\"></div>\r\n                <div class=\"circ4 loader-primary\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader success Style</div>\r\n              <p>Add class <code> loader-success </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-success\"></div>\r\n                <div class=\"circ2 loader-success\"></div>\r\n                <div class=\"circ3 loader-success\"></div>\r\n                <div class=\"circ4 loader-success\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader info Style</div>\r\n              <p>Add class <code> loader-info </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-info\"></div>\r\n                <div class=\"circ2 loader-info\"></div>\r\n                <div class=\"circ3 loader-info\"></div>\r\n                <div class=\"circ4 loader-info\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader warning Style</div>\r\n              <p>Add class <code> loader-warning </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-warning\"></div>\r\n                <div class=\"circ2 loader-warning\"></div>\r\n                <div class=\"circ3 loader-warning\"></div>\r\n                <div class=\"circ4 loader-warning\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader danger Style</div>\r\n              <p>Add class <code> loader-danger </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-danger\"></div>\r\n                <div class=\"circ2 loader-danger\"></div>\r\n                <div class=\"circ3 loader-danger\"></div>\r\n                <div class=\"circ4 loader-danger\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader color card end -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader Size card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader Size</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader primary</div>\r\n              <p>Add class <code> loader-primary </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary\"></div>\r\n                <div class=\"circ2 loader-primary\"></div>\r\n                <div class=\"circ3 loader-primary\"></div>\r\n                <div class=\"circ4 loader-primary\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader medium</div>\r\n              <p>Add class <code> loader-md </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary loader-md\"></div>\r\n                <div class=\"circ2 loader-primary loader-md\"></div>\r\n                <div class=\"circ3 loader-primary loader-md\"></div>\r\n                <div class=\"circ4 loader-primary loader-md\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader large</div>\r\n              <p>Add class <code> loader-lg </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary loader-lg\"></div>\r\n                <div class=\"circ2 loader-primary loader-lg\"></div>\r\n                <div class=\"circ3 loader-primary loader-lg\"></div>\r\n                <div class=\"circ4 loader-primary loader-lg\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader Size card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreLoaderComponent; });
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

var PreLoaderComponent = /** @class */ (function () {
    function PreLoaderComponent() {
    }
    PreLoaderComponent.prototype.ngOnInit = function () {
    };
    PreLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-loader',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreLoaderComponent);
    return PreLoaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderModule", function() { return PreLoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_loader_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pre_loader_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PreLoaderModule = /** @class */ (function () {
    function PreLoaderModule() {
    }
    PreLoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__pre_loader_routing_module__["a" /* PreLoaderRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__pre_loader_component__["a" /* PreLoaderComponent */]]
        })
    ], PreLoaderModule);
    return PreLoaderModule;
}());



/***/ })

});
//# sourceMappingURL=pre-loader.module.chunk.js.map