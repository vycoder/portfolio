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
var SectionIntroComponent = (function () {
    function SectionIntroComponent() {
        this.figureSource = "resources/images/profile.png";
        this.title = "helloWorld";
        this.content = "I am a software developer based in Quezon City, Philippines. I have a passion for creating software applications that help make human lives a little bit easier.";
    }
    SectionIntroComponent = __decorate([
        core_1.Component({
            selector: 'sections',
            templateUrl: 'app/landingpage/sections/sections.component.html',
            styleUrls: ['app/landingpage/sections/sections.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SectionIntroComponent);
    return SectionIntroComponent;
}());
exports.SectionIntroComponent = SectionIntroComponent;
//# sourceMappingURL=section-intro.component.js.map