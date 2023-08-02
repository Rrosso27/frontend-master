webpackJsonp(["tooltip.module"],{

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipComponent */],
        data: {
            title: 'Tooltip & Popover',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tooltip',
            status: true
        }
    }
];
var TooltipRoutingModule = /** @class */ (function () {
    function TooltipRoutingModule() {
    }
    TooltipRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TooltipRoutingModule);
    return TooltipRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 1 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 1</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-1</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-1\">\r\n              <span class=\"tooltip-item\">Show Effect</span>\r\n              <span class=\"tooltip-content clearfix\">\r\n                <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n              </span>\r\n            </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 1 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 2 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 2</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-2</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-2\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 2 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 4 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 4</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-4</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-4\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <img src=\"assets/images/tooltip/euclid.png\" alt=\"Ecluid.png\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 4 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 5 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 5</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-5</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-5\">\r\n                  <span class=\"tooltip-item\">Show Effect</span>\r\n                  <span class=\"tooltip-content clearfix\">\r\n                  <span class=\"tooltip-text\">Also known as Euclid of andria, was a Greek mathematician, often referred.</span>\r\n                  </span>\r\n                  </span>\r\n            current effect.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 5 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 6 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 6</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-6 tooltip-content-2 </code> to use this <a class=\"mytooltip tooltip-effect-6\" href=\"javascript:\">Home<span class=\"tooltip-content2\"><i class=\"icofont icofont-home\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 6 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 7 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 7</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-7 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-7\" href=\"javascript:\">About me<span class=\"tooltip-content2\"><i class=\"icofont icofont-user-alt-3\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 7 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 8 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 8</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-8 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-8\" href=\"javascript:\">Photography<span class=\"tooltip-content2\"><i class=\"icofont icofont-ui-camera\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 8 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 9 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip style 9</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-9 tooltip-content-2</code> to use this <a class=\"mytooltip tooltip-effect-9\" href=\"javascript:\">Work<span class=\"tooltip-content2\"><i class=\"icofont icofont-bag-alt\"></i></span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 9 card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip style 10 card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Bloated Tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-9 tooltip-content-3</code> to use this <a class=\"mytooltip tooltip-effect-9\" href=\"javascript:\">Car<span class=\"tooltip-content3\">You can easily navigate the city by car.</span></a> current effect. </p>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip style 10 card end -->\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <!-- Box tooltip card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Box tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-effect-1 tooltip-content4</code> to use this\r\n            <span class=\"mytooltip tooltip-effect-1\">\r\n                  <span class=\"tooltip-item2\">Euclid</span>\r\n                  <span class=\"tooltip-content4 clearfix\">\r\n                  <span class=\"tooltip-text2\">\r\n                  <strong>Euclid</strong>, also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the \"Father of Geometry\". He was active in Alexandria during the reign of Ptolemy I.\r\n                  <a href=\"javascript:\">Wikipedia</a>\r\n                  </span>\r\n                  </span>\r\n                  </span>\r\n            current effect. rogue laws of physics, star stuff harvesting star light, <span class=\"mytooltip tooltip-effect-2\"><span class=\"tooltip-item2\">quasar</span><span class=\"tooltip-content4 clearfix\"><span class=\"tooltip-text2\"><strong>Quasars</strong> are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant galaxies, making these luminous versions of the general... <a href=\"javascript:\">Wikipedia</a></span></span>\r\n                  </span> encyclopaedia galactica are creatures of the cosmos the only home we've ever known ship of the imagination prime number courage of our questions.\r\n          </p>\r\n          <p>Colonies. Jean-François Champollion, billions upon billions descended from astronomers the sky calls to us! Made in the interiors of collapsing stars, billions upon billions radio telescope paroxysm of global death not a sunrise but a galaxyrise, gathered by gravity permanence of the stars?</p>\r\n        </div>\r\n      </div>\r\n      <!-- Box tooltip card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip on button card start -->\r\n      <div class=\"card button-page o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on button</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <ul>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-default waves-effect\" placement=\"top\" ngbTooltip=\"tooltip on top\">Top\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" placement=\"left\" ngbTooltip=\"tooltip on left\">Left\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-success waves-effect waves-light\" placement=\"right\" ngbTooltip=\"tooltip on right\">right\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-warning waves-effect waves-light\" placement=\"bottom\" ngbTooltip=\"tooltip on bottom\">bottom\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button type=\"button\" class=\"btn btn-info waves-effect waves-light\" html=\"true\" [ngbTooltip]=\"tipContent\">Html Tooltip</button>\r\n              <ng-template #tipContent><em>tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on button card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Line Tooltip card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Line Tooltip</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p>Use class <code>tooltip-content4</code> to use this <a class=\"mytooltip\" href=\"javascript:void(0)\"> Line tooltip<span class=\"tooltip-content5\"><span class=\"tooltip-text3\"><span class=\"tooltip-inner2\">Howdy, Ben!<br> There are 13 unread messages in your inbox.</span></span></span></a> current effect. harvesting star light.Colonies. Jean-François Champollion.</p>\r\n        </div>\r\n      </div>\r\n      <!-- Line Tooltip card end -->\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <!-- Tooltip with link card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip with link</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-link\">\r\n          <a href=\"javascript:\" placement=\"top\" ngbTooltip=\"top!\">Top</a>\r\n          <a href=\"javascript:\" placement=\"bottom\" ngbTooltip=\"bottom!\">Bottom</a>\r\n          <a href=\"javascript:\" placement=\"left\" ngbTooltip=\"left!\">Left</a>\r\n          <a href=\"javascript:\" placement=\"right\" ngbTooltip=\"right!\">Right</a>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip with link card end -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Tooltip on icon card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on icon</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-icon button-list\">\r\n          <p>use code in button for tooltip <code>placement=\"left\" ngbTooltip=\".icofont-home\"</code></p>\r\n          <button type=\"button\" class=\"btn btn-primary btn-icon waves-effect waves-light\" placement=\"left\" ngbTooltip=\".icofont-home\">\r\n            <i class=\"icofont icofont-home\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-icon waves-effect waves-light\" placement=\"top\" ngbTooltip=\".icofont icofont-search-alt-2\">\r\n            <i class=\"icofont icofont-search-alt-2\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-icon waves-effect waves-light\" placement=\"right\" ngbTooltip=\".icofont-refresh\">\r\n            <i class=\"icofont icofont-refresh\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info btn-icon waves-effect waves-light\" placement=\"top\" ngbTooltip=\".icofont-print\">\r\n            <i class=\"icofont icofont-print\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success btn-icon waves-effect waves-light\" placement=\"bottom\" ngbTooltip=\".icofont-paper-plane\">\r\n            <i class=\"icofont icofont-paper-plane\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on icon card end -->\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <!-- Tooltip on popover card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltip on popover</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-pop button-list\">\r\n          <p>use code in button for tooltip <code> placement=\"left\" ngbPopover=\".icofont-home\"</code></p>\r\n          <button type=\"button\" class=\"btn btn-default waves-effect\" placement=\"top\" ngbPopover=\"top by popover\">Top\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\" placement=\"left\" ngbPopover=\"tooltip on left\">Left\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success waves-effect waves-light\" placement=\"right\" ngbPopover=\"tooltip on right\">right\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning waves-effect waves-light\" placement=\"bottom\" ngbPopover=\"tooltip on bottom\">bottom\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-info waves-effect waves-light\" placement=\"top\" [ngbPopover]=\"popContent\">Html Popover</button>\r\n          <ng-template #popContent><em>tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltip on popover card end -->\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <!-- Tooltips on textbox card start -->\r\n      <div class=\"card o-visible\">\r\n        <div class=\"card-header\">\r\n          <h5>Tooltips on textbox</h5>\r\n        </div>\r\n        <div class=\"card-block tooltip-icon button-list\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-prepend\" id=\"name\">\r\n              <label class=\"input-group-text\"><i class=\"icofont icofont-user-alt-3\"></i></label>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter your name\" ngbTooltip=\"Enter your name\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-prepend\" id=\"email\">\r\n              <label class=\"input-group-text\"><i class=\"icofont icofont-ui-email\"></i></label>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter email\" ngbTooltip=\"Enter email\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-primary waves-effect waves-light m-r-20\" placement=\"right\" ngbTooltip=\"submit\">Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- Tooltips on textbox card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
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

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/tooltip/tooltip.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/tooltip/tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/tooltip/tooltip-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__tooltip_routing_module__["a" /* TooltipRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipComponent */]]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ })

});
//# sourceMappingURL=tooltip.module.chunk.js.map