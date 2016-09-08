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
var SectionMadSkillzComponent = (function () {
    function SectionMadSkillzComponent() {
        this.skillz = [];
    }
    SectionMadSkillzComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
        this.splitSkillz().then(function (skills) { return _this.skillz = skills; });
    };
    SectionMadSkillzComponent.prototype.splitSkillz = function () {
        return Promise.resolve(this.textContent.split(','));
    };
    SectionMadSkillzComponent.prototype.getRandomClass = function () {
        var result = "label ";
        var index = Math.floor((Math.random() * 6) + 1);
        switch (index) {
            case 1:
                result += "label-default";
                break;
            case 2:
                result += "label-primary";
                break;
            case 3:
                result += "label-success";
                break;
            case 4:
                result += "label-info";
                break;
            case 5:
                result += "label-warning";
                break;
            case 6:
                result += "label-danger";
                break;
        }
        return result;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SectionMadSkillzComponent.prototype, "sectionData", void 0);
    SectionMadSkillzComponent = __decorate([
        core_1.Component({
            selector: 'section-madskillz',
            templateUrl: 'app/landingpage/sections/madskillz/section-madskillz.component.html',
            styleUrls: [
                'app/landingpage/sections/sections.component.css',
                'app/landingpage/sections/madskillz/section-madskillz.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SectionMadSkillzComponent);
    return SectionMadSkillzComponent;
}());
exports.SectionMadSkillzComponent = SectionMadSkillzComponent;
//# sourceMappingURL=section-madskillz.component.js.map