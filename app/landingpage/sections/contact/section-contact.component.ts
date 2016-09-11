import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'section-contact',
    templateUrl: 'app/landingpage/sections/contact/section-contact.component.html',
    styleUrls: [
        'app/landingpage/sections/sections.component.css',
        'app/landingpage/sections/contact/section-contact.component.css'
    ]
})

export class SectionContactComponent implements OnInit {

    @Input() sectionData;

    title: string;
    content: string;
    email: string;

    ngOnInit(): void {
        this.title = this.sectionData.title;
        this.content = this.sectionData.content;
        this.email = this.sectionData.email;
    }

}