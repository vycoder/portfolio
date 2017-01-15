import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './landingpage/landing-page.component';
import {NavButtonsComponent} from './navigation/nav-buttons.component';
import {HeaderComponent} from './landingpage/header/header.component';
import {SectionsComponent} from './landingpage/sections/sections.component';
import {SectionIntroComponent} from './landingpage/sections/introduction/section-intro.component';
import {SectionManifestoComponent} from './landingpage/sections/manifesto/section-manifesto.component';
import {SectionMadSkillzComponent} from './landingpage/sections/madskillz/section-madskillz.component';
import {SectionContactComponent} from './landingpage/sections/contact/section-contact.component';
import {ProjectsComponent} from './projects/projects.component';
import {PageNotFoundComponent} from './fourofour/pagenotfound.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/josephharveyangeles', pathMatch: 'full'},
    {path: 'josephharveyangeles', component: LandingPageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        LandingPageComponent,
        NavButtonsComponent,
        HeaderComponent,
        SectionsComponent,
        SectionIntroComponent,
        SectionManifestoComponent,
        SectionMadSkillzComponent,
        SectionContactComponent,
        ProjectsComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
