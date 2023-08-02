webpackJsonp(["box-shadow.module"],{

/***/ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxShadowRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_shadow_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__box_shadow_component__["a" /* BoxShadowComponent */],
        data: {
            title: 'Box Shadow',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - box-shadow',
            status: true
        }
    }
];
var BoxShadowRoutingModule = /** @class */ (function () {
    function BoxShadowRoutingModule() {
    }
    BoxShadowRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BoxShadowRoutingModule);
    return BoxShadowRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <!-- bottom only shadow card start -->\r\n  <app-card [title]=\"'Top ONLY'\" [blockClass]=\"'box-list m-t-15'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-0 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-0\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-top-0</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-1 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-1\">\r\n          <p class=\"text-sm-center \">Use class <code>z-depth-top-1</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-2 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-2\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-top-2</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-3 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-3\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-top-3</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-4 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-4\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-top-4</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-top-5 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-5\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-top-5</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <!-- bottom only shadow card end -->\r\n  <!-- Bottom only shadow card start -->\r\n  <app-card [title]=\"'BOTTOM ONLY'\" [blockClass]=\"'box-list m-t-5'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-0 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-0\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-bottom-0</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-1 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-1\">\r\n          <p class=\"text-sm-center \">Use class <code>z-depth-bottom-1</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-2 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-2\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-bottom-2</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-3 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-3\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-bottom-3</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-4 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-4\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-bottom-4</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-bottom-5 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-bottom-5\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-bottom-5</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <!-- Bottom only shadow card end -->\r\n  <!-- Left only shadow card start -->\r\n  <app-card [title]=\"'LEFT ONLY'\" [blockClass]=\"'box-list m-t-5'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-0 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-0\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-left-0</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-1 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-1\">\r\n          <p class=\"text-sm-center \">Use class <code>z-depth-left-1</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-2 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-2\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-left-2</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-3 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-3\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-left-3</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-4 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-4\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-left-4</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-left-5 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-left-5\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-left-5</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <!-- Left only shadow card end -->\r\n  <!-- Right only shadow card start -->\r\n  <app-card [title]=\"'RIGHT ONLY'\" [blockClass]=\"'box-list m-t-5'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-0 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-0\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-right-0</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-1 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-1\">\r\n          <p class=\"text-sm-center \">Use class <code>z-depth-right-1</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-2 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-2\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-right-2</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-3 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-3\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-right-3</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-4 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-4\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-right-4</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-right-5 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-right-5\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-right-5</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <!-- Right only shadow card end -->\r\n  <!-- All side shadow card start -->\r\n  <app-card [title]=\"'ALL SIDE'\" [blockClass]=\"'box-list m-t-20'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-0 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-0\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-0</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-1 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-1\">\r\n          <p class=\"text-sm-center \">Use class <code>z-depth-1</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-2 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-2\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-2</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-3 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-3\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-3</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-4 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-4\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-4</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"p-20 z-depth-5 waves-effect\" placement=\"bottom\" ngbTooltip=\".z-depth-5\">\r\n          <p class=\"text-sm-center\">Use class <code>z-depth-5</code> inside div element to add box-shadow.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </app-card>\r\n  <!-- All side shadow card end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxShadowComponent; });
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

var BoxShadowComponent = /** @class */ (function () {
    function BoxShadowComponent() {
    }
    BoxShadowComponent.prototype.ngOnInit = function () {
    };
    BoxShadowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-box-shadow',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoxShadowComponent);
    return BoxShadowComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxShadowModule", function() { return BoxShadowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box_shadow_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/box-shadow/box-shadow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__box_shadow_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/box-shadow/box-shadow-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BoxShadowModule = /** @class */ (function () {
    function BoxShadowModule() {
    }
    BoxShadowModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__box_shadow_routing_module__["a" /* BoxShadowRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__box_shadow_component__["a" /* BoxShadowComponent */]]
        })
    ], BoxShadowModule);
    return BoxShadowModule;
}());



/***/ })

});
//# sourceMappingURL=box-shadow.module.chunk.js.map