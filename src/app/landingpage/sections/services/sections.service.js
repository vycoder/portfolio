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
var introduction_static_content_1 = require('./contents/introduction.static.content');
var manifesto_static_content_1 = require('./contents/manifesto.static.content');
var madskillz_static_content_1 = require('./contents/madskillz.static.content');
var contact_static_content_1 = require('./contents/contact.static.content');
var SectionsService = (function () {
    function SectionsService() {
    }
    SectionsService.prototype.getIntroduction = function () {
        return introduction_static_content_1.INTRODUCTION;
    };
    SectionsService.prototype.getManifesto = function () {
        return manifesto_static_content_1.MANIFESTO;
    };
    SectionsService.prototype.getMadSkillz = function () {
        return madskillz_static_content_1.MADSKILLZ;
    };
    SectionsService.prototype.getContactContent = function () {
        return contact_static_content_1.CONTACT;
    };
    SectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SectionsService);
    return SectionsService;
}());
exports.SectionsService = SectionsService;
//# sourceMappingURL=sections.service.js.map