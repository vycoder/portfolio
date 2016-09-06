import {Component} from '@angular/core';

import {LandingPageService} from '../service/landing-page.service';
import {LandingPageSection} from '../service/landing-page-section';

@Component({
    selector: 'my-header',
    templateUrl: 'app/landingpage/header/header.component.html',
    styleUrls: ['app/landingpage/header/header.component.css'],
})
export class HeaderComponent{
    greet:string = "name='Harvey'";
    day:string;
    dusk:string = "R&D Engineer";
    night:string = "Asleep";
    dawn:string = "Software Developer";
    default:string = "Dead x-X";
    date:Date = new Date();
}