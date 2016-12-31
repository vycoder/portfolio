import {Component, Input, OnInit} from '@angular/core';

import {SectionInterface} from '../services/sectioninterface';

@Component({
    selector: 'section-intro',
    templateUrl: './section-intro.component.html',
    styleUrls: [
        '../sections.component.css',
        './section-intro.component.css'
    ]
})

export class SectionIntroComponent implements OnInit {

    @Input() sectionData: SectionInterface;

    imgsrc: string;
    sectionName: string;
    textContent: string;

    ngOnInit(): void {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
    }

}