webpackJsonp(["basic-login.module"],{

/***/ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = /** @class */ (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n    <!-- Container-fluid starts -->\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <!-- Authentication card start -->\r\n                <div class=\"login-card card-block auth-body mr-auto ml-auto\">\r\n                    <form class=\"md-float-material\">\r\n                        <div class=\"text-center\">\r\n                            <img *ngIf=\"isMobile===false\" src=\"../../../../../assets/images/auth/Montacargas.jpg\" class=\"loginlogo\" alt=\"Gradient Able\">\r\n                            <img *ngIf=\"isMobile===true\" src=\"../../../../../assets/images/logo.png\" alt=\"Gradient Able\">\r\n                        </div>\r\n                        <div class=\"auth-box\">\r\n                            <div class=\"row m-b-20\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h3 class=\"text-left txt-primary\">Iniciar sesión</h3>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"input-group\">\r\n                                <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Correo electronico\">\r\n                                <span class=\"md-line\"></span>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"contraseña\">\r\n                                <span class=\"md-line\"></span>\r\n                            </div>\r\n                            <div class=\"row m-t-25 text-left\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"checkbox-fade fade-in-primary d-\">\r\n                                        <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Recuerdame</span>\r\n                    </label>\r\n                                    </div>\r\n                                    <div class=\"forgot-phone text-right f-right\">\r\n                                        <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600 text-inverse\"> Olvido su contraseña?</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row m-t-30\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Iniciar sesión</button>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <!-- <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>-->\r\n\r\n                        </div>\r\n                    </form>\r\n                    <!-- end of form -->\r\n                </div>\r\n                <!-- Authentication card end -->\r\n            </div>\r\n            <!-- end of col-sm-12 -->\r\n        </div>\r\n        <!-- end of row -->\r\n    </div>\r\n    <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f3f3f3 !important; }\n\n.common-img-bg {\n  background: #ffffff !important; }\n\n.loginlogo {\n  height: 50%;\n  width: 80%; }\n\n@media only screen and (max-width: 992px) {\n  .loginlogo {\n    height: 30%;\n    width: 50%; } }\n\n@media only screen and (max-width: 758px) {\n  .loginlogo {\n    height: 10%;\n    width: 30%; } }\n"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLoginComponent; });
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

var BasicLoginComponent = /** @class */ (function () {
    function BasicLoginComponent() {
        this.isMobile = false;
    }
    BasicLoginComponent.prototype.ngOnInit = function () {
        if (screen.width < 780) {
            this.isMobile = true;
        }
    };
    BasicLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_login_component__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__ = __webpack_require__("./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicLoginModule = /** @class */ (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_login_routing_module__["a" /* BasicLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_login_component__["a" /* BasicLoginComponent */]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

});
//# sourceMappingURL=basic-login.module.chunk.js.map