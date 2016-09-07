import {Component, OnInit} from '@angular/core';
import {SectionsService} from './services/sections.service';
import {SectionInterface} from './services/sectioninterface';

@Component({
    selector: 'sections',
    templateUrl: 'app/landingpage/sections/sections.component.html',
    styleUrls: ['app/landingpage/sections/sections.component.css'],
    providers: [SectionsService]
})
export class SectionsComponent implements OnInit {

    introductionSection: SectionInterface;
    manifestoSection: SectionInterface;
    madskillzSection: SectionInterface;

    constructor(private sectionsService: SectionsService) { }

    ngOnInit(): void {
        this.introductionSection = this.sectionsService.getIntroduction();
        this.manifestoSection = this.sectionsService.getManifesto();
        this.madskillzSection = this.sectionsService.getMadSkillz();
    }
}