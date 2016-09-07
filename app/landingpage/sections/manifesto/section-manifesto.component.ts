import {Component} from '@angular/core';

import {SectionInterface} from '../services/sectioninterface';

@Component({
    selector: 'section-manifesto',
    templateUrl: 'app/landingpage/sections/manifesto/section-manifesto.component.html',
    styleUrls: [
        'app/landingpage/sections/sections.component.css',
        'app/landingpage/sections/manifesto/section-manifesto.component.css'
        ]
})

export class SectionManifestoComponent implements SectionInterface {
    
    figureSource = "resources/images/profile.png";
    title = "manifesto";
    content = "Personally, I think that writing software applications is a discipline of both Science and Art mungled together in harmony. Creating software for people is more than that, It's a mixture of techninal excellence and two-way communication between the client and the engineer. I strive to give both.";
    
}