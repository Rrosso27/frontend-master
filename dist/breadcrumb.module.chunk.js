webpackJsonp(["breadcrumb.module"],{

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__breadcrumb_component__["a" /* BreadcrumbComponent */],
        data: {
            title: 'Breadcrumbs',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - breadcrumb',
            status: true
        }
    }
];
var BreadcrumbRoutingModule = /** @class */ (function () {
    function BreadcrumbRoutingModule() {
    }
    BreadcrumbRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BreadcrumbRoutingModule);
    return BreadcrumbRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body breadcrumb-page\">\r\n  <!-- Simple Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <h5>Simple Breadcrumb</h5>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Simple Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Simple Breadcrumb card start -->\r\n  <!-- Caption Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block caption-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Caption Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Caption Breadcrumb card end -->\r\n  <!-- Bottom Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"breadcrumb-header m-b-10\">\r\n        <h5>Bottom Breadcrumb</h5>\r\n      </div>\r\n      <div>\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a></li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Bottom Breadcrumb card end -->\r\n  <!-- Without-icon Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block caption-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Without Icon Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Home</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Without-icon Breadcrumb card start -->\r\n  <!-- Front-icon Breadcrumb card start -->\r\n  <div class=\"card page-header p-0\">\r\n    <div class=\"card-block front-ti-breadcrumb row align-items-end\">\r\n      <div class=\"breadcrumb-header col\">\r\n        <div class=\"big-icon\">\r\n          <i class=\"icofont icofont-home\"></i>\r\n        </div>\r\n        <div class=\"d-inline-block\">\r\n          <h5>Front Icon Breadcrumb</h5>\r\n          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"page-header-breadcrumb\">\r\n          <ul class=\"breadcrumb-title\">\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:\">Home</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Front-icon Breadcrumb card end -->\r\n  <h4 class=\"m-b-30\">Color Varients</h4>\r\n  <!-- Primary-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block primary-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Primary Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Primary-color Breadcrumb card end -->\r\n  <!-- Inverse-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block inverse-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Inverse Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Inverse-color Breadcrumb card end -->\r\n  <!-- Danger-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block danger-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Danger Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Danger-color Breadcrumb card end -->\r\n  <!-- Info-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block info-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Info Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Info-color Breadcrumb card end -->\r\n  <!-- Warning-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block warning-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Warning Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Warning-color Breadcrumb card end -->\r\n  <!-- Success-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block success-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Success Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Success-color Breadcrumb card end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__breadcrumb_routing_module__["a" /* BreadcrumbRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__breadcrumb_component__["a" /* BreadcrumbComponent */]]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());



/***/ })

});
//# sourceMappingURL=breadcrumb.module.chunk.js.map