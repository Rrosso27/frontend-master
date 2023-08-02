webpackJsonp(["typography.module"],{

/***/ "./src/app/theme/ui-elements/basic/typography/typography-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typography_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/typography/typography.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__typography_component__["a" /* TypographyComponent */],
        data: {
            title: 'Typography',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - typography',
            status: true
        }
    }
];
var TypographyRoutingModule = /** @class */ (function () {
    function TypographyRoutingModule() {
    }
    TypographyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TypographyRoutingModule);
    return TypographyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Typography card start -->\r\n    <app-card [title]=\"'Typography'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'typography'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Headings</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1</h1>\r\n          <h2>This is a Heading 2</h2>\r\n          <h3>This is a Heading 3</h3>\r\n          <h4>This is a Heading 4</h4>\r\n          <h5>This is a Heading 5</h5>\r\n          <h6>This is a Heading 6</h6>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HEADINGS WITH SUBHEADING</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1<small>Sub-heading</small></h1>\r\n          <h2>This is a Heading 2<small>Sub-heading</small></h2>\r\n          <h3>This is a Heading 3<small>Sub-heading</small></h3>\r\n          <h4>This is a Heading 4<small>Sub-heading</small></h4>\r\n          <h5>This is a Heading 5<small>Sub-heading</small></h5>\r\n          <h6>This is a Heading 6<small>Sub-heading</small></h6>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Typography card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Text elements start -->\r\n    <app-card [title]=\"'Text Elements'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Inline text elements</h4>\r\n          <p class=\"lead m-t-0\">Your title goes here</p>\r\n          <p>You can use the mark tag to\r\n            <mark>highlight</mark> text.\r\n          </p>\r\n          <p>\r\n            <del>This line of text is meant to be treated as deleted text.</del>\r\n          </p>\r\n          <p>\r\n            <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n          </p>\r\n          <p><strong>rendered as bold text</strong></p>\r\n          <p><em>rendered as italicized text</em></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">CONTEXTUAL TEXT COLORS</h4>\r\n          <p class=\"text-custom\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-custom</code>\r\n          </p>\r\n          <p class=\"text-pink\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-pink</code>\r\n          </p>\r\n          <p class=\"text-muted\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-muted</code>\r\n          </p>\r\n          <p class=\"text-primary\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-primary</code>\r\n          </p>\r\n          <p class=\"text-success\">\r\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<code>text-success</code>\r\n          </p>\r\n          <p class=\"text-info\">\r\n            Maecenas sed diam eget risus varius blandit sit amet non magna.<code>text-info</code>\r\n          </p>\r\n          <p class=\"text-warning\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-warning</code>\r\n          </p>\r\n          <p class=\"text-danger\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-danger</code>\r\n          </p>\r\n          <p class=\"text-dark\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-dark</code>\r\n          </p>\r\n          <p class=\"text-purple m-b-0\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-purple</code>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Text elements end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- List Tag card start -->\r\n    <app-card [title]=\"'LIST TAG'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNORDERED</h4>\r\n          <ul>\r\n            <li>Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>\r\n              Nulla volutpat aliquam velit\r\n              <ul>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ul>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">ORDERED</h4>\r\n          <ol>\r\n            <li> Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>\r\n              Nulla volutpat aliquam velit\r\n              <ol>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ol>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNSTYLED</h4>\r\n          <div class=\"row col-sm-12\">\r\n            <ul class=\"list-unstyled\">\r\n              <li>Lorem ipsum dolor sit amet</li>\r\n              <li>Integer molestie lorem at massa</li>\r\n              <li>Phasellus iaculis neque</li>\r\n              <li>Faucibus porta lacus fringilla vel</li>\r\n              <li>Eget porttitor lorem</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"row col-sm-12\">\r\n            <div class=\"inline-order-list\">\r\n              <h4 class=\"sub-title\">Inline</h4>\r\n              <p class=\"text-muted\">\r\n                Place all list items on a single line with <code>\r\n                display: inline-block;</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <ul class=\"list-inline m-b-0\">\r\n                <li class=\"list-inline-item\">Lorem ipsum</li>\r\n                <li class=\"list-inline-item\">Phasellus iaculis</li>\r\n                <li class=\"list-inline-item\">Nulla volutpat</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- List Tag card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Other card start -->\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 1</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Other card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">BLOCKQUOTES</h4>\r\n          <p class=\"text-muted m-b-30\">\r\n            Your awesome text goes here.\r\n          </p>\r\n          <blockquote class=\"blockquote\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n          <p class=\"text-muted m-b-15 m-t-20\">\r\n            Add <code>\r\n            .blockquote-reverse</code> for a blockquote with right-aligned content.\r\n          </p>\r\n          <blockquote class=\"blockquote blockquote-reverse\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HORIZONTAL DESCRIPTION</h4>\r\n          <dl class=\"dl-horizontal row\">\r\n            <dt class=\"col-sm-3\">Description lists</dt>\r\n            <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n            <dt class=\"col-sm-3\">Euismod</dt>\r\n            <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n            <dd class=\"col-sm-12 col-sm-offset-3\">Donec id elit non mi porta gravida at eget metus.</dd>\r\n            <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n            <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n            <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n            <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/typography/typography.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return TypographyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typography_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typography_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/typography/typography-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TypographyModule = /** @class */ (function () {
    function TypographyModule() {
    }
    TypographyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__typography_routing_module__["a" /* TypographyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__typography_component__["a" /* TypographyComponent */]]
        })
    ], TypographyModule);
    return TypographyModule;
}());



/***/ })

});
//# sourceMappingURL=typography.module.chunk.js.map