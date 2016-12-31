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
var SectionContactComponent = (function () {
    function SectionContactComponent() {
    }
    SectionContactComponent.prototype.ngOnInit = function () {
        this.title = this.sectionData.title;
        this.content = this.sectionData.content;
        this.email = this.sectionData.email;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SectionContactComponent.prototype, "sectionData", void 0);
    SectionContactComponent = __decorate([
        core_1.Component({
            selector: 'section-contact',
            templateUrl: 'app/landingpage/sections/contact/section-contact.component.html',
            styleUrls: [
                'app/landingpage/sections/sections.component.css',
                'app/landingpage/sections/contact/section-contact.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SectionContactComponent);
    return SectionContactComponent;
}());
exports.SectionContactComponent = SectionContactComponent;
//# sourceMappingURL=section-contact.component.js.map