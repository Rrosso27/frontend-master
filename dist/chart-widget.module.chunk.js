webpackJsonp(["chart-widget.module"],{

/***/ "./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartWidgetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_widget_component__ = __webpack_require__("./src/app/theme/widget/chart-widget/chart-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chart_widget_component__["a" /* ChartWidgetComponent */],
        data: {
            title: 'Chart Widget',
            status: false
        }
    }
];
var ChartWidgetRoutingModule = /** @class */ (function () {
    function ChartWidgetRoutingModule() {
    }
    ChartWidgetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ChartWidgetRoutingModule);
    return ChartWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- student start -->\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <app-card [title]=\"'Students by Courses'\">\r\n        <div #studentChart>\r\n          <chart id=\"student_chart\" [type]=\"'line'\" [data]=\"studentChartData\" [options]=\"studentChartOption\"></chart>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n      <app-card [title]=\"'Email Campaign'\">\r\n        <chart id=\"email_chart\" [type]=\"'doughnut'\" [data]=\"emailChartData\" [options]=\"emailChartOption\"></chart>\r\n      </app-card>\r\n    </div>\r\n    <!-- student start -->\r\n\r\n    <!-- users visite and profile start -->\r\n    <div class=\"col-md-12 col-lg-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card seo-card\">\r\n            <div class=\"card-block seo-statustic\">\r\n              <i class=\"ti-server text-c-green\"></i>\r\n              <h5>65%</h5>\r\n              <p>Memory Usage</p>\r\n            </div>\r\n            <div class=\"seo-chart\" #seoCard1Chart>\r\n              <chart id=\"seo-card1\" [type]=\"'line'\" [data]=\"seoCard1Data\" [options]=\"seoCard1Option\"></chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card seo-card m-t-30\">\r\n            <div class=\"card-block seo-statustic\">\r\n              <i class=\"ti-reload text-c-blue\"></i>\r\n              <h5>$46,845</h5>\r\n              <p>Revenue</p>\r\n            </div>\r\n            <div class=\"seo-chart\" #seoCard2Chart>\r\n              <chart id=\"seo-card2\" [type]=\"'line'\" [data]=\"seoCard2Data\" [options]=\"seoCard2Option\"></chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-lg-9\">\r\n      <div class=\"card bg-c-blue map-visitor-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Unique Visitor</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div id=\"unique-visitor-chart\" style=\"height:350px\"></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row justify-content-center text-center\">\r\n            <div class=\"col-auto b-r-default col-6 col-sm-4\">\r\n              <h6>Visits</h6>\r\n              <p class=\"text-muted\">29.703 Users (40%)</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-blue\" style=\"width:40%\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-auto col-6 col-sm-4\">\r\n              <h6>Revenue</h6>\r\n              <p class=\"text-muted\">20703$ (60%)</p>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-green\" style=\"width:60%\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- users visite and profile end -->\r\n\r\n    <!-- statustic and process start -->\r\n    <div class=\"col-lg-5 col-md-12\">\r\n      <app-card [title]=\"'Statistics'\">\r\n        <div #statisticsChart >\r\n          <chart id=\"statistics_chart\" [type]=\"'line'\" [data]=\"statisticsData\" [options]=\"statisticsOption\"></chart>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-lg-7 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Process Compliance</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <p class=\"f-50 d-inline-block m-t-30 m-b-30\">0.4</p>\r\n              <i class=\"ti-arrow-down text-c-pink f-26 m-l-5\"></i><br>\r\n              <span class=\"text-muted\">2018 (Jan - Jun)</span>\r\n              <div class=\"m-t-30\">\r\n                <a href=\"javascript:\" class=\"text-underline text-c-blue\">Previous Quarters</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n              <div #processComplianceChart >\r\n                <chart id=\"process_compliance_chart\" [type]=\"'bar'\" [data]=\"processComplianceData\" [options]=\"processComplianceOption\"></chart>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- statustic and process end -->\r\n\r\n    <!-- users statustic start -->\r\n    <div class=\"col-lg-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Active user</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div #userChart1 >\r\n            <chart id=\"user_chart1\" [type]=\"'line'\" [data]=\"userChart1Data\" [options]=\"userChart1Option\"></chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Page view</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div #userChart2 >\r\n            <chart id=\"user_chart2\" [type]=\"'line'\" [data]=\"userChart2Data\" [options]=\"userChart2Option\"></chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>New installation</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div #userChart3 >\r\n            <chart id=\"user_chart3\" [type]=\"'line'\" [data]=\"userChart3Data\" [options]=\"userChart3Option\"></chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- users statustic end -->\r\n\r\n    <!-- amount-card start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-blue amount-card\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-up\"></i>\r\n          <h4>$4600,00</h4>\r\n        </div>\r\n        <chart id=\"amount_card1\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Amount Founded</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-green amount-card\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-down\"></i>\r\n          <h4>$387.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card2\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Balance</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-yellow amount-card\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-up\"></i>\r\n          <h4>$8350.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card3\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Payback Amount</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-pink amount-card\">\r\n        <div class=\"card-block\">\r\n          <i class=\"ti-arrow-down\"></i>\r\n          <h4>$123.00</h4>\r\n        </div>\r\n        <chart id=\"amount_card4\" [type]=\"'line'\" [data]=\"amountCardData\" [options]=\"amountCardOption\"></chart>\r\n        <p>Planned Collection Income</p>\r\n      </div>\r\n    </div>\r\n    <!-- amount-card end -->\r\n\r\n    <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Customer Feedback</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <span class=\"d-block text-c-blue f-24 f-w-600 text-center\">365247</span>\r\n          <div #feedbackChart>\r\n            <chart id=\"feedback_chart\" [type]=\"'doughnut'\" [data]=\"feedbackData\" [options]=\"feedbackOption\"></chart>\r\n          </div>\r\n          <div class=\"row justify-content-center m-t-15\">\r\n            <div class=\"col-auto b-r-default m-t-5 m-b-5\">\r\n              <h4>83%</h4>\r\n              <p class=\"text-success m-b-0\"><i class=\"ti-hand-point-up m-r-5\"></i>Positive</p>\r\n            </div>\r\n            <div class=\"col-auto m-t-5 m-b-5\">\r\n              <h4>17%</h4>\r\n              <p class=\"text-danger m-b-0\"><i class=\"ti-hand-point-down m-r-5\"></i>Negative</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- activity feed end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__ = __webpack_require__("./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__ = __webpack_require__("./src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__ = __webpack_require__("./src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__ = __webpack_require__("./src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__ = __webpack_require__("./src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__ = __webpack_require__("./src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__ = __webpack_require__("./src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__ = __webpack_require__("./src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_continentsLow_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChartWidgetComponent = /** @class */ (function () {
    function ChartWidgetComponent() {
    }
    ChartWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            /* student chart start */
            var student_tag = ((_this.studentChart.nativeElement.children));
            _this.studentChartTag = ((student_tag['student_chart']).lastChild).getContext('2d');
            var efg = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            efg.addColorStop(0, '#fd93a8');
            efg.addColorStop(1, '#FC6180');
            var def = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            def.addColorStop(0, '#2ed8b6');
            def.addColorStop(1, '#7cffe5');
            var abc = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            abc.addColorStop(1, '#56CCF2');
            abc.addColorStop(0, '#2F80ED');
            _this.studentChartData = {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
                datasets: [{
                        label: 'Arts',
                        borderColor: efg,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: efg,
                        pointHoverBackgroundColor: efg,
                        pointHoverBorderColor: efg,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [20, 50, 30, 60, 30, 50, 40]
                    }, {
                        label: 'Commerce',
                        borderColor: def,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: def,
                        pointHoverBackgroundColor: def,
                        pointHoverBorderColor: def,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [60, 30, 65, 45, 67, 35, 68]
                    }, {
                        label: 'Science',
                        borderColor: abc,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: abc,
                        pointHoverBackgroundColor: abc,
                        pointHoverBorderColor: abc,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [40, 20, 50, 15, 40, 65, 20]
                    }]
            };
            /* student chart end */
            /* email chart start */
            _this.emailChartData = {
                datasets: [{
                        data: [300, 170, 60],
                        backgroundColor: ['#00215a', '#2ed8b6', '#FF5370'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Send', 'Opened', 'Bounced']
            };
            _this.emailChartOption = {
                responsive: true,
                cutoutPercentage: 80,
                legend: { position: 'top' },
                title: { display: false },
                animation: { animateScale: true, animateRotate: true }
            };
            /* email chart end */
            /* seo card start */
            var seo1_tag = ((_this.seoCard1Chart.nativeElement.children));
            _this.seoCard1Tag = ((seo1_tag['seo-card1']).lastChild).getContext('2d');
            var cde = (_this.seoCard1Tag).createLinearGradient(300, 0, 0, 300);
            cde.addColorStop(0, '#b9fdef');
            cde.addColorStop(1, '#2ed8b6');
            var seo2_tag = ((_this.seoCard2Chart.nativeElement.children));
            _this.seoCard2Tag = ((seo2_tag['seo-card2']).lastChild).getContext('2d');
            var x = (_this.seoCard2Tag).createLinearGradient(300, 0, 0, 300);
            x.addColorStop(0, '#b5d8ff');
            x.addColorStop(1, '#00215a');
            _this.seoCard1Data = e('#2ed8b6', [100, 80, 100, 150, 190, 200, 160], cde);
            _this.seoCard1Option = f();
            _this.seoCard2Data = e('#00215a', [100, 80, 100, 150, 190, 200, 160], x);
            _this.seoCard2Option = f();
            /* seo card end */
            AmCharts.makeChart('unique-visitor-chart', {
                type: 'map',
                theme: 'light',
                dragMap: false,
                projection: 'eckert3',
                areasSettings: {
                    autoZoom: false,
                    rollOverOutlineColor: '#fff',
                    selectedColor: '#fff',
                    outlineAlpha: 1,
                    outlineColor: 'transparent',
                    outlineThickness: 1,
                    color: '#000000'
                },
                dataProvider: {
                    map: 'continentsLow',
                    areas: [{
                            id: 'africa',
                            title: 'Africa',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'asia',
                            title: 'Asia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'australia',
                            title: 'Australia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'europe',
                            title: 'Europe',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'north_america',
                            title: 'North America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'south_america',
                            title: 'South America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }]
                },
                zoomControl: { panControlEnabled: false, zoomControlEnabled: false, homeButtonEnabled: false },
            });
            /* statistics chart start */
            var statistic_tag = ((_this.statisticsChart.nativeElement.children));
            _this.statisticsTag = ((statistic_tag['statistics_chart']).lastChild).getContext('2d');
            var efgh = (_this.statisticsTag).createLinearGradient(500, 0, 100, 0);
            efgh.addColorStop(0, '#fd93a8');
            efgh.addColorStop(1, '#FC6180');
            var fgh = (_this.statisticsTag).createLinearGradient(500, 0, 100, 0);
            fgh.addColorStop(1, '#56CCF2');
            fgh.addColorStop(0, '#2F80ED');
            _this.statisticsData = {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
                datasets: [{
                        label: 'Data',
                        borderColor: efgh,
                        pointBorderColor: efgh,
                        pointBackgroundColor: efgh,
                        pointHoverBackgroundColor: efgh,
                        pointHoverBorderColor: efgh,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [20, 50, 30, 50, 20, 70, 30]
                    }, {
                        label: 'Data',
                        borderColor: fgh,
                        pointBorderColor: fgh,
                        pointBackgroundColor: fgh,
                        pointHoverBackgroundColor: fgh,
                        pointHoverBorderColor: fgh,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [40, 30, 50, 15, 50, 50, 80]
                    }]
            };
            _this.statisticsOption = {
                legend: { position: 'top' },
                tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: 'rgba(0,0,0,0.5)',
                                fontStyle: 'bold',
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20,
                            }, gridLines: { drawTicks: false, display: false }
                        }],
                    xAxes: [{
                            gridLines: { drawTicks: false, display: false },
                            ticks: { padding: 20, fontColor: 'rgba(0,0,0,0.5)', fontStyle: 'bold' }
                        }]
                },
            };
            /* statistics chart end */
            /* process compliance start */
            var process_compliance = ((_this.processComplianceChart.nativeElement.children));
            _this.processComplianceTag = ((process_compliance['process_compliance_chart']).lastChild).getContext('2d');
            var a = (_this.processComplianceTag).createLinearGradient(0, 0, 0, 600);
            a.addColorStop(1, '#56CCF2');
            a.addColorStop(0, '#00215a');
            _this.processComplianceData = {
                labels: ['', '2012', '2013', '2014', '2015', '2016', '2017', '2018', ''],
                datasets: [{
                        label: '# of Votes',
                        data: [0, 12, 28, 23, 18, 45, 19, 36],
                        backgroundColor: a,
                        hoverBackgroundColor: a,
                        hoverBorderWidth: 0,
                    }]
            };
            _this.processComplianceOption = {
                legend: { display: false },
                scales: {
                    yAxes: [{
                            gridLines: { display: false, drawBorder: false },
                            ticks: { display: false },
                        }], xAxes: [{ gridLines: { display: false, drawBorder: false } }]
                }
            };
            /* process compliance end */
            /* user chart 1 start */
            var user_chart1 = ((_this.userChart1.nativeElement.children));
            _this.userChart1Tag = ((user_chart1['user_chart1']).lastChild).getContext('2d');
            var b = (_this.userChart1Tag).createLinearGradient(0, 0, 0, 150);
            b.addColorStop(0, 'rgba(70, 128, 255, 1');
            b.addColorStop(1, 'rgba(70, 128, 255, 0.8');
            _this.userChart1Data = l('rgb(70, 128, 255)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], b);
            _this.userChart1Option = h('rgba(70, 128, 255,0.8)');
            /* user chart 1 end */
            /* user chart 2 start */
            var user_chart2 = ((_this.userChart2.nativeElement.children));
            _this.userChart2Tag = ((user_chart2['user_chart2']).lastChild).getContext('2d');
            var c = (_this.userChart1Tag).createLinearGradient(0, 0, 0, 150);
            c.addColorStop(0, 'rgba(147, 190, 82, 1');
            c.addColorStop(1, 'rgba(147, 190, 82, 0.8');
            _this.userChart2Data = l('rgb(147, 190, 82)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], c);
            _this.userChart2Option = h('rgba(147, 190, 82,0.8)');
            /* user chart 2 end */
            /* user chart 3 start */
            var user_chart3 = ((_this.userChart3.nativeElement.children));
            _this.userChart3Tag = ((user_chart3['user_chart3']).lastChild).getContext('2d');
            var d = (_this.userChart3Tag).createLinearGradient(0, 0, 0, 150);
            d.addColorStop(0, 'rgba(255, 182, 77, 1');
            d.addColorStop(1, 'rgba(255, 182, 77, 0.8');
            _this.userChart3Data = l('rgb(255, 182, 77)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], d);
            _this.userChart3Option = h('rgba(255, 182, 77,0.8)');
            /* user chart 3 end */
            /* amount card 1 to 4 start */
            _this.amountCardData = j('#fff', [40, 30, 45, 30, 35], '#fff');
            _this.amountCardOption = g();
            /* amount card 1 to 4 end */
            /* feedback chart start */
            _this.feedbackData = {
                datasets: [{
                        data: [83, 17],
                        backgroundColor: ['#00215a', '#81c1fd'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Positive', 'Negative']
            };
            _this.feedbackOption = {
                responsive: true,
                legend: { display: false },
                title: { display: false, text: 'Chart.js Doughnut Chart' },
                animation: { animateScale: true, animateRotate: true }
            };
            /* feedback chart end */
        }, 75);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('studentChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "studentChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seoCard1Chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "seoCard1Chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seoCard2Chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "seoCard2Chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('statisticsChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "statisticsChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('processComplianceChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "processComplianceChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userChart1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "userChart1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userChart2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "userChart2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userChart3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChartWidgetComponent.prototype, "userChart3", void 0);
    ChartWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-widget',
            template: __webpack_require__("./src/app/theme/widget/chart-widget/chart-widget.component.html"),
            styles: [__webpack_require__("./src/app/theme/widget/chart-widget/chart-widget.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartWidgetComponent);
    return ChartWidgetComponent;
}());

function e(hg, gh, i) {
    if (i == null) {
        i = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
                label: '',
                borderColor: hg,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: hg,
                pointHoverBackgroundColor: hg,
                pointHoverBorderColor: '#000',
                fill: true,
                backgroundColor: i,
                data: gh,
            }]
    };
}
function f() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}
function l(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
                label: 'Data',
                borderColor: r,
                pointBorderColor: r,
                pointBackgroundColor: r,
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: r,
                pointBorderWidth: 0,
                lineTension: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: s,
                borderWidth: 2,
                data: q
            }]
    };
}
function h(q) {
    return {
        legend: { display: false },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: 'nearest',
            backgroundColor: q,
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        scales: {
            yAxes: [{
                    ticks: {
                        fontColor: 'rgba(0,0,0,0.5)',
                        fontStyle: 'bold',
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    }
                }],
            xAxes: [{
                    gridLines: { zeroLineColor: 'transparent', drawTicks: false, display: false },
                    ticks: { padding: 20, fontColor: 'rgba(0,0,0,0.5)', fontStyle: 'bold' }
                }]
        }
    };
}
function j(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
                label: '',
                borderColor: r,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: s,
                data: q,
            }]
    };
}
function g() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}


/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetModule", function() { return ChartWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_widget_component__ = __webpack_require__("./src/app/theme/widget/chart-widget/chart-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_widget_routing_module__ = __webpack_require__("./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartWidgetModule = /** @class */ (function () {
    function ChartWidgetModule() {
    }
    ChartWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__chart_widget_routing_module__["a" /* ChartWidgetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__chart_widget_component__["a" /* ChartWidgetComponent */]]
        })
    ], ChartWidgetModule);
    return ChartWidgetModule;
}());



/***/ })

});
//# sourceMappingURL=chart-widget.module.chunk.js.map