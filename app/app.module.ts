import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {LandingPageComponent} from './landingpage/landing-page.component';
import {NavButtonsComponent} from './navigation/nav-buttons.component';
import {HeaderComponent} from './landingpage/header/header.component';
import {SectionsComponent} from './landingpage/sections/sections.component';

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
    ],
    bootstrap:[LandingPageComponent]
})
export class AppModule{}
