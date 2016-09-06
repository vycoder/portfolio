import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {LandingPageComponent} from './landingpage/landing-page.component';
import {NavButtonsComponent} from './navigation/nav-buttons.component';
import {HeaderComponent} from './landingpage/header/header.component';
import {SectionsComponent} from './landingpage/sections/sections.component';
import {SectionIntroComponent} from './landingpage/sections/introduction/section-intro.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
    ],
    declarations:[
        LandingPageComponent,
        NavButtonsComponent,
        HeaderComponent,
        SectionsComponent,
        SectionIntroComponent
    ],
    bootstrap:[LandingPageComponent]
})
export class AppModule{}
