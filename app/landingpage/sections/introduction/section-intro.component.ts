import {Component} from '@angular/core';

import {SectionInterface} from '../services/sectioninterface';

@Component({
    selector: 'section-intro',
    templateUrl: 'app/landingpage/sections/introduction/section-intro.component.html',
    styleUrls: [
        'app/landingpage/sections/introduction/section-intro.component.css'
        ]
})

export class SectionIntroComponent implements SectionInterface {
    
    figureSource = "resources/images/profile.png";
    title = "helloWorld";
    content = "I am a software developer based in Quezon City, Philippines. I have a passion for creating software applications that help make human lives a little bit easier.";
    
}