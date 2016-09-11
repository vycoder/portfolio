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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var landing_page_component_1 = require('./landingpage/landing-page.component');
var nav_buttons_component_1 = require('./navigation/nav-buttons.component');
var header_component_1 = require('./landingpage/header/header.component');
var sections_component_1 = require('./landingpage/sections/sections.component');
var section_intro_component_1 = require('./landingpage/sections/introduction/section-intro.component');
var section_manifesto_component_1 = require('./landingpage/sections/manifesto/section-manifesto.component');
var section_madskillz_component_1 = require('./landingpage/sections/madskillz/section-madskillz.component');
var section_contact_component_1 = require('./landingpage/sections/contact/section-contact.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            declarations: [
                landing_page_component_1.LandingPageComponent,
                nav_buttons_component_1.NavButtonsComponent,
                header_component_1.HeaderComponent,
                sections_component_1.SectionsComponent,
                section_intro_component_1.SectionIntroComponent,
                section_manifesto_component_1.SectionManifestoComponent,
                section_madskillz_component_1.SectionMadSkillzComponent,
                section_contact_component_1.SectionContactComponent
            ],
            bootstrap: [landing_page_component_1.LandingPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map