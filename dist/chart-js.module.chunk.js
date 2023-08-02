webpackJsonp(["chart-js.module"],{

/***/ "./src/app/theme/chart/chart-js/chart-js-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_js_component__ = __webpack_require__("./src/app/theme/chart/chart-js/chart-js.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chart_js_component__["a" /* ChartJsComponent */],
        data: {
            title: 'ChartJs',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    }
];
var ChartJsRoutingModule = /** @class */ (function () {
    function ChartJsRoutingModule() {
    }
    ChartJsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ChartJsRoutingModule);
    return ChartJsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'DOUGHNUT CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type\" [data]=\"data\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Radar chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type2\" [data]=\"data2\" [options]=\"options2\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Polar chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type3\" [data]=\"data3\" [options]=\"options3\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Bar chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"width: 100%; height: 470px;\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Bubble chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type5\" [data]=\"data5\" [options]=\"options5\" style=\"width: 100%; height: 470px;\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Scales chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type6\" [data]=\"data5\" [options]=\"options6\" style=\"width: 100%; height: 470px;\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Pie chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type4\" [data]=\"data4\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <app-card [title]=\"'Time Scale chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n        <chart [type]=\"type6\" [data]=\"data5\" [options]=\"options7\"></chart>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsComponent; });
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

var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent() {
        this.type = 'doughnut';
        this.data = {
            labels: [
                'A', 'B', 'C', 'D '
            ],
            datasets: [{
                    data: [40, 10, 40, 10],
                    backgroundColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ],
                    borderWidth: [
                        '0px',
                        '0px',
                        '0px',
                        '0px'
                    ],
                    borderColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ]
                }]
        };
        /*Bar chart Start*/
        this.type1 = 'bar';
        this.data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50],
                }, {
                    label: 'My second dataset',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
        };
        /*Bar chart End*/
        /*Radar chart Start*/
        this.type2 = 'radar';
        this.data2 = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(100, 221, 187, 0.52)',
                    borderColor: 'rgba(72, 206, 168, 0.88)',
                    pointBackgroundColor: 'rgba(51, 175, 140, 0.88)',
                    pointBorderColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBackgroundColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBorderColor: 'rgba(107, 226, 193, 0.98)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255, 204, 189, 0.95)',
                    borderColor: 'rgba(255, 165, 138, 0.95)',
                    pointBackgroundColor: 'rgba(255, 116, 22, 0.94)',
                    pointBorderColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBackgroundColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBorderColor: 'rgba(255, 165, 138, 0.95)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
        };
        this.options2 = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        };
        /*Radar chart End*/
        /*Polar chart*/
        this.type3 = 'polarArea';
        this.data3 = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        '#7E81CB',
                        '#1ABC9C',
                        '#B8EDF0',
                        '#B4C1D7',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#a1a4ec',
                        '#2adab7',
                        '#a7e7ea',
                        '#a5b0c3',
                        '#10e6ef'
                    ],
                    label: 'My dataset' // for legend
                }],
            labels: [
                'Blue',
                'Green',
                'Light Blue',
                'grey',
                'Sea Green'
            ]
        };
        this.options3 = {
            elements: {
                arc: {
                    borderColor: ''
                }
            }
        };
        /*Polar chart*/
        /*Pie chart*/
        this.type4 = 'pie';
        this.data4 = {
            labels: [
                'Blue',
                'Orange',
                'Sea Green'
            ],
            datasets: [{
                    data: [30, 30, 40],
                    backgroundColor: [
                        '#25A6F7',
                        '#FB9A7D',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#6cc4fb',
                        '#ffb59f',
                        '#0dedf7'
                    ]
                }]
        };
        this.type5 = 'bubble';
        this.data5 = {
            datasets: [{
                    label: 'First Dataset',
                    data: [{
                            x: 20,
                            y: 20,
                            r: 15
                        }, {
                            x: 10,
                            y: 15,
                            r: 10
                        }, {
                            x: 25,
                            y: 11,
                            r: 8
                        }, {
                            x: 15,
                            y: 13,
                            r: 8
                        }, {
                            x: 35,
                            y: 18,
                            r: 6
                        }, {
                            x: 40,
                            y: 10,
                            r: 10
                        }],
                    backgroundColor: '#FF6384',
                    hoverBackgroundColor: '#FF6384',
                }]
        };
        this.options5 = {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        this.type6 = 'line';
        this.options6 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            min: 1,
                            max: 1000
                        }
                    }]
            }
        };
    }
    ChartJsComponent.prototype.ngOnInit = function () {
    };
    ChartJsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-js',
            template: __webpack_require__("./src/app/theme/chart/chart-js/chart-js.component.html"),
            styles: [__webpack_require__("./src/app/theme/chart/chart-js/chart-js.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartJsComponent);
    return ChartJsComponent;
}());



/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsModule", function() { return ChartJsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_js_component__ = __webpack_require__("./src/app/theme/chart/chart-js/chart-js.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_js_routing_module__ = __webpack_require__("./src/app/theme/chart/chart-js/chart-js-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartJsModule = /** @class */ (function () {
    function ChartJsModule() {
    }
    ChartJsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__chart_js_routing_module__["a" /* ChartJsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__chart_js_component__["a" /* ChartJsComponent */]]
        })
    ], ChartJsModule);
    return ChartJsModule;
}());



/***/ })

});
//# sourceMappingURL=chart-js.module.chunk.js.map