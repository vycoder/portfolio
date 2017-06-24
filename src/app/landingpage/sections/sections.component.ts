import {Component, OnInit} from '@angular/core';
import {SectionsService} from './services/sections.service';
import {SectionInterface} from './services/sectioninterface';

@Component({
    selector: 'sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.css'],
    providers: [SectionsService]
})
export class SectionsComponent implements OnInit {

    introductionSection: SectionInterface;
    manifestoSection: SectionInterface;
    madskillzSection: SectionInterface;
    contactSection: any;

    constructor(private sectionsService: SectionsService) { }

    ngOnInit(): void {
        this.introductionSection = this.sectionsService.getIntroduction();
        this.manifestoSection = this.sectionsService.getManifesto();
        this.madskillzSection = this.sectionsService.getMadSkillz();
        this.contactSection = this.sectionsService.getContactContent();
    }
}
