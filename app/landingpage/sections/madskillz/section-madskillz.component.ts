import {Component, Input, OnInit, AfterViewInit } from '@angular/core';

import {SectionInterface} from '../services/sectioninterface';

@Component({
    selector: 'section-madskillz',
    templateUrl: 'app/landingpage/sections/madskillz/section-madskillz.component.html',
    styleUrls: [
        'app/landingpage/sections/sections.component.css',
        'app/landingpage/sections/madskillz/section-madskillz.component.css'
    ]
})
export class SectionMadSkillzComponent implements OnInit {

    @Input() sectionData: SectionInterface;

    imgsrc: string;
    sectionName: string;
    textContent: string;

    skillz: SkillComponent[] = [];

    ngOnInit(): void {
        this.imgsrc = this.sectionData.figureSource;
        this.sectionName = this.sectionData.title;
        this.textContent = this.sectionData.content;
        this.skillz = this.getSkillz();
    }

    getSkillz(): SkillComponent[] {
        let sc : SkillComponent[] = [];
        let skills = this.sectionData.content.split(',');
        skills.forEach(item => {
            sc.push({name:item, classStyle: this.getRandomClass()});
        });
        return sc;
    }

    getRandomClass(): string {
        let result: string = "label ";
        let index: number = Math.floor((Math.random() * 6) + 1);
        switch (index) {
            case 1: result += "label-default";
                break;
            case 2: result += "label-primary";
                break;
            case 3: result += "label-success";
                break;
            case 4: result += "label-info";
                break;
            case 5: result += "label-warning";
                break;
            case 6: result += "label-danger";
                break;
        }
        return result;
    }


}

interface SkillComponent {
    name: string;
    classStyle: string;
}