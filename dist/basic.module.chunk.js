webpackJsonp(["basic.module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        data: {
            title: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'alert',
                loadChildren: './alert/alert.module#AlertModule'
            },
            {
                path: 'breadcrumb',
                loadChildren: './breadcrumb/breadcrumb.module#BreadcrumbModule'
            },
            {
                path: 'button',
                loadChildren: './button/button.module#ButtonModule'
            },
            {
                path: 'box-shadow',
                loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
            },
            {
                path: 'accordion',
                loadChildren: './accordion/accordion.module#AccordionModule'
            },
            {
                path: 'generic-class',
                loadChildren: './generic-class/generic-class.module#GenericClassModule'
            },
            {
                path: 'progressbar',
                loadChildren: './progressbar/progressbar.module#ProgressbarModule'
            },
            {
                path: 'pre-loader',
                loadChildren: './pre-loader/pre-loader.module#PreLoaderModule'
            },
            {
                path: 'list',
                loadChildren: './basic-list/basic-list.module#BasicListModule'
            },
            {
                path: 'tooltip',
                loadChildren: './tooltip/tooltip.module#TooltipModule'
            },
            {
                path: 'tabs',
                loadChildren: './tabs/tabs.module#TabsModule'
            },
            {
                path: 'color',
                loadChildren: './basic-color/basic-color.module#BasicColorModule'
            },
            {
                path: 'label-badge',
                loadChildren: './label-badge/label-badge.module#LabelBadgeModule'
            },
            {
                path: 'typography',
                loadChildren: './typography/typography.module#TypographyModule'
            },
            {
                path: 'other',
                loadChildren: './basic-other/basic-other.module#BasicOtherModule'
            }
        ]
    }
];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__basic_routing_module__["a" /* BasicRoutingModule */]
            ],
            declarations: []
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ })

});
//# sourceMappingURL=basic.module.chunk.js.map