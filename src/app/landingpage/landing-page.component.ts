import {Component} from '@angular/core';
import {LandingPageService} from './service/landing-page.service';
import {LandingPageSection} from './service/landing-page-section';


@Component({
    selector: 'creo',
    templateUrl: './landing-page.component.html',
    providers: [LandingPageService]
})
export class LandingPageComponent{

    private titleSection:LandingPageSection;

    constructor(private landingPageService:LandingPageService){
        this.titleSection = this.landingPageService.getTitleSection();
    }

}