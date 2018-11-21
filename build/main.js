webpackJsonp([14],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplatilloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctrlplatillos_ctrlplatillos__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddplatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddplatilloPage = /** @class */ (function () {
    function AddplatilloPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddplatilloPage.prototype.irPlatillos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ctrlplatillos_ctrlplatillos__["a" /* CtrlplatillosPage */]);
    };
    AddplatilloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddplatilloPage');
    };
    AddplatilloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addplatillo',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\addplatillo\addplatillo.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Agregar Platillo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n          <ion-label fixed>Nombre:</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n        <br/>\n        <ion-item>\n            <ion-label fixed>Precio:</ion-label>\n            <ion-input type="text" value=""></ion-input>\n        </ion-item>\n        <br/>\n        <br/>\n        <ion-item>\n          <ion-label fixed>Ingredientes:</ion-label>\n          <ion-textarea fixed> </ion-textarea>\n        </ion-item>\n        <br/>\n        <br/>\n        <br/>\n        <br/> \n      </ion-list>\n  <div class="agregar">\n      <button ion-button item-end color="danger" (click)="irPlatillos()">\n          Agregar\n      </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\addplatillo\addplatillo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddplatilloPage);
    return AddplatilloPage;
}());

//# sourceMappingURL=addplatillo.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarplatilloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctrlplatillos_ctrlplatillos__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditarplatilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarplatilloPage = /** @class */ (function () {
    function EditarplatilloPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditarplatilloPage.prototype.irPlatillos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ctrlplatillos_ctrlplatillos__["a" /* CtrlplatillosPage */]);
    };
    EditarplatilloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarplatilloPage');
    };
    EditarplatilloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editarplatillo',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\editarplatillo\editarplatillo.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Editar Platillo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n          <ion-label fixed>Nombre:</ion-label>\n          <ion-input type="text" value="Chilaquiles"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label fixed>Precio:</ion-label>\n            <ion-input type="text" value="20"></ion-input>\n        </ion-item>\n        <br/>\n        <br/>\n        <ion-item>\n          <ion-label fixed>Ingredientes:</ion-label>\n          <ion-textarea value="Tortilla, tomate, chile, queso, crema, aguacate"> </ion-textarea>\n        </ion-item>\n        <br/>\n        <br/>\n        <br/>\n        <br/> \n      </ion-list>\n  <div class="agregar">\n      <button  ion-button item-end  color="danger" (click)="irPlatillos()">\n          Guardar\n      </button>\n  </div>\n</ion-content>'/*ion-inline-end:"G:\MyAppRorder\src\pages\editarplatillo\editarplatillo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditarplatilloPage);
    return EditarplatilloPage;
}());

//# sourceMappingURL=editarplatillo.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddusersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddusersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddusersPage = /** @class */ (function () {
    function AddusersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddusersPage.prototype.irUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__["a" /* UsuariosPage */]);
    };
    AddusersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddusersPage');
    };
    AddusersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addusers',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\addusers\addusers.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Agregar Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombre</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>ID</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n              \n        <ion-item>\n            <ion-label stacked>Contraseña</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Direccion</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>      \n      </ion-list>\n      <br>\n        <div class="agregar">\n            <button ion-button item-end color="danger" (click)="irUsuarios()">\n                Agregar\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\addusers\addusers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddusersPage);
    return AddusersPage;
}());

//# sourceMappingURL=addusers.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateusersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UpdateusersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateusersPage = /** @class */ (function () {
    function UpdateusersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpdateusersPage.prototype.irUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__["a" /* UsuariosPage */]);
    };
    UpdateusersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateusersPage');
    };
    UpdateusersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updateusers',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\updateusers\updateusers.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Editar Usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label stacked>Nombre</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>ID</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n              \n        <ion-item>\n            <ion-label stacked>Contraseña</ion-label>\n            <ion-input type="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>Direccion</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Telefono</ion-label>\n            <ion-input type="text"></ion-input>\n        </ion-item>      \n      </ion-list>\n\n      <br>\n        <div class="agregar">\n            <button ion-button item-end color="danger" (click)="irUsuarios()">\n                Guardar\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\updateusers\updateusers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UpdateusersPage);
    return UpdateusersPage;
}());

//# sourceMappingURL=updateusers.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrlcobroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuentamesa_cuentamesa__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CtrlcobroPage = /** @class */ (function () {
    function CtrlcobroPage(alertCtrl, asf, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.asf = asf;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noMesa = 0;
    }
    CtrlcobroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CtrlcobroPage');
        this.cargarMesas();
    };
    CtrlcobroPage.prototype.verMesa = function (item) {
        this.noMesa = item.numero;
        this.detalleMesa();
    };
    CtrlcobroPage.prototype.cargarMesas = function () {
        var _this = this;
        this.mesaCollection = this.asf.collection('mesa');
        this.mesaCollection.snapshotChanges().subscribe(function (mesaList) {
            _this.mesa = mesaList.map(function (item) {
                return {
                    numero: item.payload.doc.data().numero,
                    cuenta: item.payload.doc.data().cuenta,
                    comensales: item.payload.doc.data().comensales,
                    id: item.payload.doc.id
                };
            });
        });
    };
    CtrlcobroPage.prototype.detalleMesa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cuentamesa_cuentamesa__["a" /* CuentamesaPage */], { mesa: this.noMesa });
    };
    CtrlcobroPage.prototype.deleteMesa = function (item) {
        this.asf.doc("mesa/" + item.id).delete().then(function () {
            console.log("Tarea eliminada: \"" + item.numero + "\"");
        }).catch(function (err) {
            console.log(err);
        });
    };
    CtrlcobroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ctrlcobro',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\ctrlcobro\ctrlcobro.html"*/'\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Cuentas de mesas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of mesa">\n        <ion-item>\n            <button ion-button full clear color="dark" (click)="verMesa(item)">\n              <h1> <pre>Mesa:   {{ item.numero }}</pre></h1>\n            </button>\n        </ion-item>\n        <ion-item-options side="right">\n            <button ion-button color="danger" (click)="deleteMesa(item)">\n              <ion-icon name="md-trash"></ion-icon>\n              Eliminar\n            </button>\n          </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\ctrlcobro\ctrlcobro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CtrlcobroPage);
    return CtrlcobroPage;
}());

//# sourceMappingURL=ctrlcobro.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentamesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CuentamesaPage = /** @class */ (function () {
    function CuentamesaPage(asf, navCtrl, navParams) {
        this.asf = asf;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mesa = 0;
        this.total = 0;
        this.mesa = this.navParams.get('mesa');
        console.log('Mesa:' + this.mesa);
    }
    CuentamesaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CuentamesaPage');
        this.ordenesCollection = this.asf.collection('ordenes', function (ref) {
            return ref.where('mesa', '==', _this.mesa);
        });
        this.ordenesCollection.snapshotChanges().subscribe(function (ordenesList) {
            _this.ordenes = ordenesList.map(function (item) {
                _this.total = _this.total + item.payload.doc.data().precio;
                return {
                    nota: item.payload.doc.data().nota,
                    platillo: item.payload.doc.data().platillo,
                    comensales: item.payload.doc.data().comensales,
                    cantidad: item.payload.doc.data().cantidad,
                    mesa: item.payload.doc.data().mesa,
                    precio: item.payload.doc.data().precio,
                    id: item.payload.doc.id
                };
            });
        });
    };
    CuentamesaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuentamesa',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\cuentamesa\cuentamesa.html"*/'\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Cuenta Mesa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item> \n      <pre> Platillo              Cantidad</pre> \n    </ion-item>\n    <ion-item *ngFor="let item of ordenes">\n      <pre>{{ item.platillo }}      {{ item.cantidad }}</pre>\n  </ion-item>\n</ion-list>\n<ion-footer>\n    <ion-toolbar>\n          <pre ion-button full clear color="danger">               Total:   {{total}}</pre>\n    </ion-toolbar>\n</ion-footer>\n</ion-content>\n\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\cuentamesa\cuentamesa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CuentamesaPage);
    return CuentamesaPage;
}());

//# sourceMappingURL=cuentamesa.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrlcortecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detallecortec_detallecortec__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CtrlcortecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CtrlcortecPage = /** @class */ (function () {
    function CtrlcortecPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mesas = [
            {
                mesa: "Mesa",
                hora: "Hora",
                cantidad: "Cantidad"
            },
            {
                mesa: "Mesa 2",
                hora: "08:05",
                cantidad: "$350"
            },
            {
                mesa: "Mesa 3",
                hora: "08:25",
                cantidad: "$200"
            },
            {
                mesa: "Mesa 1",
                hora: "09:12",
                cantidad: "$400"
            },
            {
                mesa: "Mesa 2",
                hora: "14:08",
                cantidad: "$270"
            }
        ];
    }
    CtrlcortecPage.prototype.abrirdetallec = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detallecortec_detallecortec__["a" /* DetallecortecPage */]);
    };
    CtrlcortecPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CtrlcortecPage');
    };
    CtrlcortecPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ctrlcortec',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\ctrlcortec\ctrlcortec.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Corte de caja</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <br>\n  <ion-grid>\n      <ion-row  ion-item  *ngFor="let item of mesas"  class="ion-row">\n        <ion-col ion-item col-4  class="ion-col">\n          {{item.mesa}}\n        </ion-col>\n        <ion-col ion-item col-4  class="ion-col">\n          {{item.hora}}\n        </ion-col>\n        <ion-col ion-item col-4  class="ion-col">\n          {{item.cantidad}}\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <div class="agregar">\n        <button ion-button item-end color="danger" (click)="abrirdetallec()">\n            Detalle corte de caja\n        </button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"G:\MyAppRorder\src\pages\ctrlcortec\ctrlcortec.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CtrlcortecPage);
    return CtrlcortecPage;
}());

//# sourceMappingURL=ctrlcortec.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallecortecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrador_administrador__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetallecortecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallecortecPage = /** @class */ (function () {
    function DetallecortecPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetallecortecPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallecortecPage');
    };
    DetallecortecPage.prototype.inicioAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__administrador_administrador__["a" /* AdministradorPage */]);
    };
    DetallecortecPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detallecortec',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\detallecortec\detallecortec.html"*/'<!--\n  Generated template for the DetallecortecPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Detalle corte de caja</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>Ganancia</div>\n            </ion-col>\n        </ion-row>  \n  \n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>$10540 </div>\n            </ion-col>\n        </ion-row>\n        <br>\n        <br>\n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>Propina</div>\n            </ion-col>\n        </ion-row>\n  \n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>$2500 </div>\n            </ion-col>\n        </ion-row>\n        <br>\n        <br>\n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>Ganancia total</div>\n            </ion-col>\n        </ion-row>\n  \n        <ion-row class="ion-row">\n            <ion-col col-12 class="ion-col">\n                <div>$13040 </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class="agregar">\n            <button ion-button item-end color="danger" (click)="inicioAdmin()">\n                Terminar\n            </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\detallecortec\detallecortec.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetallecortecPage);
    return DetallecortecPage;
}());

//# sourceMappingURL=detallecortec.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addplatillo/addplatillo.module": [
		527,
		13
	],
	"../pages/addusers/addusers.module": [
		528,
		12
	],
	"../pages/administrador/administrador.module": [
		529,
		11
	],
	"../pages/ctrlcobro/ctrlcobro.module": [
		530,
		10
	],
	"../pages/ctrlcortec/ctrlcortec.module": [
		531,
		9
	],
	"../pages/ctrlplatillos/ctrlplatillos.module": [
		532,
		8
	],
	"../pages/cuentamesa/cuentamesa.module": [
		533,
		7
	],
	"../pages/detallecortec/detallecortec.module": [
		534,
		6
	],
	"../pages/editarplatillo/editarplatillo.module": [
		535,
		5
	],
	"../pages/login/login.module": [
		536,
		4
	],
	"../pages/profile/profile.module": [
		537,
		3
	],
	"../pages/registro/registro.module": [
		538,
		2
	],
	"../pages/updateusers/updateusers.module": [
		539,
		1
	],
	"../pages/usuarios/usuarios.module": [
		540,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_usuarios_usuarios__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_addusers_addusers__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_updateusers_updateusers__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_addplatillo_addplatillo__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ctrlplatillos_ctrlplatillos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ctrlcobro_ctrlcobro__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cuentamesa_cuentamesa__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editarplatillo_editarplatillo__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ctrlcortec_ctrlcortec__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detallecortec_detallecortec__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_firebase_config__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__["a" /* AdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_addusers_addusers__["a" /* AddusersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_updateusers_updateusers__["a" /* UpdateusersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ctrlplatillos_ctrlplatillos__["a" /* CtrlplatillosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addplatillo_addplatillo__["a" /* AddplatilloPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editarplatillo_editarplatillo__["a" /* EditarplatilloPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ctrlcobro_ctrlcobro__["a" /* CtrlcobroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cuentamesa_cuentamesa__["a" /* CuentamesaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ctrlcortec_ctrlcortec__["a" /* CtrlcortecPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detallecortec_detallecortec__["a" /* DetallecortecPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addplatillo/addplatillo.module#AddplatilloPageModule', name: 'AddplatilloPage', segment: 'addplatillo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addusers/addusers.module#AddusersPageModule', name: 'AddusersPage', segment: 'addusers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrador/administrador.module#AdministradorPageModule', name: 'AdministradorPage', segment: 'administrador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ctrlcobro/ctrlcobro.module#CtrlcobroPageModule', name: 'CtrlcobroPage', segment: 'ctrlcobro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ctrlcortec/ctrlcortec.module#CtrlcortecPageModule', name: 'CtrlcortecPage', segment: 'ctrlcortec', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ctrlplatillos/ctrlplatillos.module#CtrlplatillosPageModule', name: 'CtrlplatillosPage', segment: 'ctrlplatillos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuentamesa/cuentamesa.module#CuentamesaPageModule', name: 'CuentamesaPage', segment: 'cuentamesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detallecortec/detallecortec.module#DetallecortecPageModule', name: 'DetallecortecPage', segment: 'detallecortec', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editarplatillo/editarplatillo.module#EditarplatilloPageModule', name: 'EditarplatilloPage', segment: 'editarplatillo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updateusers/updateusers.module#UpdateusersPageModule', name: 'UpdateusersPage', segment: 'updateusers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_23__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_administrador_administrador__["a" /* AdministradorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_addusers_addusers__["a" /* AddusersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_updateusers_updateusers__["a" /* UpdateusersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ctrlplatillos_ctrlplatillos__["a" /* CtrlplatillosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addplatillo_addplatillo__["a" /* AddplatilloPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editarplatillo_editarplatillo__["a" /* EditarplatilloPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ctrlcobro_ctrlcobro__["a" /* CtrlcobroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cuentamesa_cuentamesa__["a" /* CuentamesaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ctrlcortec_ctrlcortec__["a" /* CtrlcortecPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detallecortec_detallecortec__["a" /* DetallecortecPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\MyAppRorder\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\MyAppRorder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
//
var config = {
    apiKey: "AIzaSyDoYGyh37Op2XWNLEBD5OL4aSNGx68RGmg",
    authDomain: "r-order.firebaseapp.com",
    databaseURL: "https://r-order.firebaseio.com",
    projectId: "r-order",
    storageBucket: "r-order.appspot.com",
    messagingSenderId: "91129219821"
};
var FIREBASE_CONFIG = config;
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrlplatillosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarplatillo_editarplatillo__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addplatillo_addplatillo__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CtrlplatillosPage = /** @class */ (function () {
    function CtrlplatillosPage(alertCtrl, asf, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.asf = asf;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.canReorder = false;
    }
    CtrlplatillosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.todoCollection = this.asf.collection('todo', function (ref) { return ref.orderBy('priority'); });
        this.todoCollection.snapshotChanges().subscribe(function (todoList) {
            _this.todo = todoList.map(function (item) {
                return {
                    task: item.payload.doc.data().task,
                    priority: item.payload.doc.data().priority,
                    id: item.payload.doc.id
                };
            });
        });
    };
    CtrlplatillosPage.prototype.reorderItems = function (indexes) {
        var _this = this;
        if (this.canReorder) {
            // Lote de procesos
            var batch_1 = this.asf.firestore.batch();
            //Movemos elementos
            var element = this.todo[indexes.from];
            this.todo.splice(indexes.from, 1);
            this.todo.splice(indexes.to, 0, element);
            // Agregamos updates al batch
            this.todo.forEach(function (item, index) {
                if (item.priority != index) {
                    var ref = _this.asf.doc("todo/" + item.id).ref;
                    batch_1.update(ref, { priority: index });
                }
            });
            //Ejecutamos lote de procesos
            batch_1.commit().then(function () {
                console.log('Lista de tareas reordenadas');
            }).catch(function (err) {
                console.error(err);
            });
        }
    };
    CtrlplatillosPage.prototype.deleteItem = function (item) {
        this.asf.doc("todo/" + item.id).delete().then(function () {
            console.log("Tarea eliminada: \"" + item.task + "\"");
        }).catch(function (err) {
            console.log(err);
        });
    };
    CtrlplatillosPage.prototype.newItem = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Añadir Platillo',
            message: 'Indica la nueva tarea a añadir',
            inputs: [{
                    name: 'task',
                    placeholder: 'Nuevo platillo... '
                }, {
                    name: 'precio',
                    placeholder: 'Precio... '
                }],
            buttons: [{
                    text: 'Cancelar'
                }, {
                    text: 'Guardar',
                    handler: function (data) {
                        _this.addTask(data.task, data.precio);
                    }
                }]
        }).present();
    };
    CtrlplatillosPage.prototype.addTask = function (task, precio) {
        var priority = 0;
        if (this.todo.length > 0) {
            var last = this.todo.length - 1;
            priority = this.todo[last].priority + 1;
        }
        this.asf.collection('todo').add({ task: task, precio: precio, priority: priority }).then(function (newItem) {
            //console.log(`Nueva tarea: "${task}" (ID: ${this.newItem.id})`);
        }).catch(function (err) {
            console.error(err);
        });
    };
    /*
    ionViewDidEnter(){
      this.todoCollection = this.asf.collection('todo');
      this.todo = this.todoCollection.valueChanges();
    }
  */
    CtrlplatillosPage.prototype.Editar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editarplatillo_editarplatillo__["a" /* EditarplatilloPage */]);
    };
    CtrlplatillosPage.prototype.Agregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addplatillo_addplatillo__["a" /* AddplatilloPage */]);
    };
    CtrlplatillosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CtrlplatillosPage');
    };
    CtrlplatillosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ctrlplatillos',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\ctrlplatillos\ctrlplatillos.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Platillos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="canReorder = !canReorder">\n        <ion-icon *ngIf="canReorder" name="md-close"></ion-icon>\n        <ion-icon *ngIf="!canReorder" name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list reorder="{{ canReorder }}" (ionItemReorder)="reorderItems($event)">\n    <ion-item-sliding *ngFor="let item of todo">\n      <ion-item>\n        {{ item.task }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          <ion-icon name="md-trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="newItem()">\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\ctrlplatillos\ctrlplatillos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CtrlplatillosPage);
    return CtrlplatillosPage;
}());

//# sourceMappingURL=ctrlplatillos.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addusers_addusers__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updateusers_updateusers__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuariosPage');
    };
    UsuariosPage.prototype.abrirAddusuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addusers_addusers__["a" /* AddusersPage */]);
    };
    UsuariosPage.prototype.abrirUpdateusuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__updateusers_updateusers__["a" /* UpdateusersPage */]);
    };
    UsuariosPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\usuarios\usuarios.html"*/'<ion-header>\n\n    <ion-navbar color="danger">\n      <ion-title>Usuarios</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n\n\n    <!--\n      <ion-list>\n            <ion-item-sliding>\n                <ion-item>\n                  <ion-avatar item-start>\n                      <ion-icon name="person"></ion-icon>\n                      Miguel Angel Sayago Arcos\n                  </ion-avatar>\n                </ion-item>\n                <ion-item-options side="left">\n                  <button ion-button clear color="primary" (click)="abrirUpdateusuarios()">\n                    <ion-icon name="brush"></ion-icon>\n                  </button>\n                  <button ion-button clear color="danger">\n                    <ion-icon name="trash"></ion-icon>\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n        </ion-list>\n        <br>\n      -->\n\n        <ion-footer>\n            <ion-toolbar>\n                  <button ion-button full clear color="danger" (click)="registrar()">\n                      Agregar\n                  </button>\n            </ion-toolbar>\n        </ion-footer>\n        \n  </ion-content>'/*ion-inline-end:"G:\MyAppRorder\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegistroPage = /** @class */ (function () {
    function RegistroPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        //createUserAndRetrieveDataWithEmailAndPassword
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\registro\registro.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label stacked>Correo</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    \n      <ion-item>\n        <ion-label stacked>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n      <button ion-button color="danger" block (click)="register(user)">Registrarse</button>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ctrlplatillos_ctrlplatillos__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ctrlcobro_ctrlcobro__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ctrlcortec_ctrlcortec__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registro_registro__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdministradorPage = /** @class */ (function () {
    function AdministradorPage(afAuth, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdministradorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Bienvenido a R-Order, " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: "No se encontro Usuario",
                    duration: 3000
                }).present();
            }
        });
    };
    AdministradorPage.prototype.abrirctrlplatillos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ctrlplatillos_ctrlplatillos__["a" /* CtrlplatillosPage */]);
    };
    AdministradorPage.prototype.salir = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AdministradorPage.prototype.abrirUsuarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__usuarios_usuarios__["a" /* UsuariosPage */]);
    };
    AdministradorPage.prototype.abrircobrom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ctrlcobro_ctrlcobro__["a" /* CtrlcobroPage */]);
    };
    AdministradorPage.prototype.abrircortec = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ctrlcortec_ctrlcortec__["a" /* CtrlcortecPage */]);
    };
    AdministradorPage.prototype.abrirPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
    };
    AdministradorPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__registro_registro__["a" /* RegistroPage */]);
    };
    AdministradorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrador',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\administrador\administrador.html"*/'<ion-header>\n\n    <ion-toolbar color="danger">\n        <!--\n            <ion-buttons start>\n            <button ion-button icon-only (click)="abrirPerfil()">\n                <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n            </button>\n        </ion-buttons>\n        -->\n        <ion-title>Administrador</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <button ion-button full clear color="dark" (click)="registrar()">Usuarios</button>\n        <ion-icon name="contacts" item-end></ion-icon>\n    </ion-item>\n    <ion-item>\n        <button ion-button full clear color="dark" (click)="abrirctrlplatillos()">Platillos</button>\n        <ion-icon name="restaurant" item-end></ion-icon>\n    </ion-item>\n    <ion-item>\n        <button ion-button full clear color="dark" (click)="abrircobrom()">Cobro</button>\n        <ion-icon name="cash" item-end></ion-icon>\n    </ion-item>\n<!--\n    <ion-item>\n        <button ion-button full clear color="dark" (click)="abrircortec()">Corte de caja</button>\n        <ion-icon name="logo-bitcoin" item-end></ion-icon>\n    </ion-item>\n-->\n\n        <ion-footer>\n            <ion-toolbar>\n                  <button ion-button full clear color="danger" (click)="salir()">\n                    Salir \n                    <!--<ion-icon name="log-out"></ion-icon>-->\n                  </button>\n            </ion-toolbar>\n        </ion-footer>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\administrador\administrador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdministradorPage);
    return AdministradorPage;
}());

//# sourceMappingURL=administrador.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__administrador_administrador__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(afAuth, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile)
                .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__administrador_administrador__["a" /* AdministradorPage */]); });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nombre de usuario</ion-label>\n    <ion-input [(ngModel)]="profile.username"> </ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input [(ngModel)]="profile.firstName"> </ion-input>\n  </ion-item> \n\n  <ion-item>\n    <ion-label floating>Apellido</ion-label>\n    <ion-input [(ngModel)]="profile.lastName"> </ion-input>\n  </ion-item> \n  <button ion-button color="danger" block (click)="createProfile()">Crear perfil</button>\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrador_administrador__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__administrador_administrador__["a" /* AdministradorPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\MyAppRorder\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Inicio de sesion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img src="../assets/imgs/logo.jpeg"/>\n      </ion-card>\n      \n\n\n    <ion-item>\n      <ion-label stacked>Correo</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  \n \n  <button ion-button color="danger" block (click)="login(user)">Ingresar</button>\n  <!--  <button ion-button color="light" block (click)="registrar()">Registrarse</button>\n-->\n</ion-content>\n'/*ion-inline-end:"G:\MyAppRorder\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.js.map