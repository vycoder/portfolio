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
var SectionManifestoComponent = (function () {
    function SectionManifestoComponent() {
    }
    SectionManifestoComponent.prototype.ngOnInit = function () {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SectionManifestoComponent.prototype, "sectionData", void 0);
    SectionManifestoComponent = __decorate([
        core_1.Component({
            selector: 'section-manifesto',
            templateUrl: 'app/landingpage/sections/manifesto/section-manifesto.component.html',
            styleUrls: [
                'app/landingpage/sections/sections.component.css',
                'app/landingpage/sections/manifesto/section-manifesto.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SectionManifestoComponent);
    return SectionManifestoComponent;
}());
exports.SectionManifestoComponent = SectionManifestoComponent;
//# sourceMappingURL=section-manifesto.component.js.map