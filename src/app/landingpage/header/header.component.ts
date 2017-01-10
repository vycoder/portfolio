import {Component} from '@angular/core';

import {LandingPageService} from '../service/landing-page.service';
import {LandingPageSection} from '../service/landing-page-section';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
    greet:string = "var name='josephHarvey';";
    day:string;
    dusk:string = "R&D Engineer";
    night:string = "Asleep";
    dawn:string = "Software Developer";
    default:string = "Dead x-X";
    date:Date = new Date();
}