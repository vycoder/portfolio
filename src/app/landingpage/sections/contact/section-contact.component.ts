import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'section-contact',
    templateUrl: './section-contact.component.html',
    styleUrls: [
        '../sections.component.css',
        './section-contact.component.css'
    ]
})

export class SectionContactComponent implements OnInit {

    @Input() sectionData: any;

    title: string;
    content: string;
    email: string;

    ngOnInit(): void {
        this.title = this.sectionData.title;
        this.content = this.sectionData.content;
        this.email = this.sectionData.email;
    }

}
