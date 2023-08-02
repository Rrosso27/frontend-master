webpackJsonp(["carousel.module"],{

/***/ "./src/app/theme/ui-elements/advance/carousel/carousel-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */],
        data: {
            title: 'Slider',
            icon: 'ti-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - slider',
            status: true
        }
    }
];
var CarouselRoutingModule = /** @class */ (function () {
    function CarouselRoutingModule() {
    }
    CarouselRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], CarouselRoutingModule);
    return CarouselRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <!-- Bootstrap slider card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Bootstrap slider - FadIn FadOut</h5>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ngb-carousel #myCarousel=\"ngbCarousel\">\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/slider/slide1.jpg\" alt=\"Random first slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>First slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/slider/slide2.jpg\" alt=\"Random second slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>Second slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/slider/slide3.jpg\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>Third slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/slider/slide4.jpg\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>Fourth slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-carousel>\r\n                </div>\r\n            </div>\r\n            <!-- Bootstrap slider card end -->\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <!-- Owl corousel style 1 card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Owl carousel Banner</h5>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ngx-carousel class=\"banner ngx-carousel\" [inputs]=\"carouselBanner\" (carouselLoad)=\"carouselBannerLoad()\">\r\n                        <ngx-item NgxCarouselItem *ngFor=\"let tile of carouselBannerItems; let i = index;\">\r\n                            <div class=\"bannerStyle\">\r\n                                <img [attr.src]=\"tile\" alt=\"\" class=\"img-fluid\">\r\n                            </div>\r\n                        </ngx-item>\r\n                        <button NgxCarouselPrev class=\"carousel-control-prev\"><i class=\"icofont icofont-rounded-left\"></i></button>\r\n                        <button NgxCarouselNext class=\"carousel-control-next\"><i class=\"icofont icofont-rounded-right\"></i></button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n            <!-- Owl corousel style 1 card end -->\r\n        </div>\r\n        <div class=\"col-lg-12 col-xl-6\">\r\n            <!-- Owl corousel style 2 card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Owl carousel style 1</h5>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ngx-carousel class=\"ngx-carousel\" [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad()\">\r\n                        <ngx-tile NgxCarouselItem *ngFor=\"let tile of carouselTileItems; let i = index;\">\r\n                            <div class=\"tile\">\r\n                                <img [attr.src]=\"tile\" alt=\"\" class=\"img-fluid\">\r\n                                <h4>Tile</h4>\r\n                                <p>content</p>\r\n                            </div>\r\n                        </ngx-tile>\r\n                        <button NgxCarouselPrev class=\"carousel-control-prev\"><i class=\"icofont icofont-rounded-left\"></i></button>\r\n                        <button NgxCarouselNext class=\"carousel-control-next\"><i class=\"icofont icofont-rounded-right\"></i></button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n            <!-- Owl corousel style 2 card end -->\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n            <!-- Swiper slider card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Owl carousel style 2 (fixed-width)</h5>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ngx-carousel class=\"ngx-carousel\" [inputs]=\"carouselTileTwo\" (carouselLoad)=\"carouselTileTwoLoad()\">\r\n                        <ngx-tile NgxCarouselItem *ngFor=\"let tile of carouselTileTwoItems; let i = index;\">\r\n                            <div class=\"wBg\">\r\n                                <div class=\"tile\">\r\n                                    <img [attr.src]=\"tile\" alt=\"\" class=\"img-fluid\">\r\n                                    <h4>Tile</h4>\r\n                                    <p>content</p>\r\n                                </div>\r\n                            </div>\r\n                        </ngx-tile>\r\n                        <button NgxCarouselPrev class=\"carousel-control-prev\"><i class=\"icofont icofont-rounded-left\"></i></button>\r\n                        <button NgxCarouselNext class=\"carousel-control-next\"><i class=\"icofont icofont-rounded-right\"></i></button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n            <!-- Swiper slider card end -->\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <!-- Swiper slider card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>Swiper slider</h5>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <ngx-carousel class=\"ngx-carousel\" [inputs]=\"carouselTileOne\" (carouselLoad)=\"carouselTileOneLoad()\">\r\n                        <ngx-tile NgxCarouselItem *ngFor=\"let tile of carouselTileOneItems; let i = index;\">\r\n                            <div class=\"wBg\">\r\n                                <div class=\"tile\" [style.background]=\"'url(' + tile + ')'\">\r\n                                    <h1>{{i}}</h1>\r\n                                </div>\r\n                                <h4>Tile</h4>\r\n                                <p>content</p>\r\n                            </div>\r\n                        </ngx-tile>\r\n                        <button NgxCarouselPrev class=\"d-none\">&lt;</button>\r\n                        <button NgxCarouselNext class=\"d-none\">&gt;</button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n            <!-- Swiper slider card end -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/carousel/carousel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
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

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.carouselBannerItems = [];
        this.carouselTileItems = [];
        this.carouselTileOneItems = [];
        this.carouselTileTwoItems = [];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.imgagsBanner = [
            'assets/images/slider/slide4.jpg',
            'assets/images/slider/slide3.jpg',
            'assets/images/slider/slide2.jpg',
            'assets/images/slider/slide1.jpg'
        ];
        this.imgags = [
            'assets/images/task/task-u1.jpg',
            'assets/images/task/task-u2.jpg',
            'assets/images/task/task-u3.jpg',
            'assets/images/task/task-u4.jpg',
            'assets/images/task/task-u2.jpg',
            'assets/images/task/task-u1.jpg',
            'assets/images/task/task-u3.jpg',
            'assets/images/task/task-u4.jpg'
        ];
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 4,
            speed: 500,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            background: #00f;\n            border-color:#00f;\n          }\n        "
            },
            load: 2,
            custom: 'banner',
            touch: true,
            loop: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            background:#fff;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        this.carouselTileTwo = {
            grid: { xs: 1, sm: 3, md: 4, lg: 6, all: 230 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
        this.carouselTileOne = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #6b6b6b;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              transform: scale(1.2);\n              background: transparent;\n            }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            border-color: #fff;\n            background:transparent;\n          }\n        "
            },
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
        this.carouselBannerLoad();
        this.carouselTileLoad();
        this.carouselTileOneLoad();
        this.carouselTileTwoLoad();
    };
    CarouselComponent.prototype.onmoveFn = function (data) {
        // console.log(data);
    };
    CarouselComponent.prototype.carouselBannerLoad = function () {
        var len = this.carouselBannerItems.length;
        if (len <= 3) {
            for (var i = len; i < len + 4; i++) {
                this.carouselBannerItems.push(this.imgagsBanner[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileLoad = function () {
        var len = this.carouselTileItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileOneLoad = function () {
        var len = this.carouselTileOneItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileOneItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileTwoLoad = function () {
        var len = this.carouselTileTwoItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileTwoItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/carousel/carousel.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/carousel/carousel-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__carousel_routing_module__["a" /* CarouselRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ })

});
//# sourceMappingURL=carousel.module.chunk.js.map