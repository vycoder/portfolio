"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavButtonsComponent = (function () {
    function NavButtonsComponent() {
    }
    NavButtonsComponent = __decorate([
        core_1.Component({
            selector: 'nav-buttons',
            templateUrl: 'app/navigation/nav-buttons.component.html',
            styles: [
                "#sidebar{\n            postion: fixed;\n            margin-top: 5%;\n            z-index: 980;\n            // display: float;\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NavButtonsComponent);
    return NavButtonsComponent;
}());
exports.NavButtonsComponent = NavButtonsComponent;
//# sourceMappingURL=nav-buttons.component.js.map