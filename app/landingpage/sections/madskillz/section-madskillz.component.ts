import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {SectionInterface} from '../services/sectioninterface';

@Component({
    selector: 'section-madskillz',
    templateUrl: 'app/landingpage/sections/madskillz/section-madskillz.component.html',
    styleUrls: [
        'app/landingpage/sections/sections.component.css',
        'app/landingpage/sections/madskillz/section-madskillz.component.css'
        ]
})
export class SectionMadSkillzComponent implements SectionInterface, OnInit{
    figureSource = "resources/images/profile.png";
    title = "madSkillz";
    content = "Java, C, C#, Python, HTML/CSS, Javascript, Typescript, Angular2, OOP, TDD, SOLID, agile, Windows/Linux, android, arduino, raspberry-pi, embedded-c, git/svn, Adobe Flash";

    skillz:string[];

    ngOnInit():void{
        this.skillz = this.content.split(',');
    }

    getRandomClass():string{
        let result:string = "label ";
        let index:number = Math.floor((Math.random() * 6) + 1);
        switch(index){
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