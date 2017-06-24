import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import {ProjectsService} from '../projects.service';
import {ProjectItem} from './project-item';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css'],
    providers: [ProjectsService]
})
export class ProjectListComponent {

    @Input() selected: string;
    @Input() projectItems: ProjectItem[];

    imgsrc = 'assets/images/osyshub.png';

    langClass = {
        'java': 'label-blue',
        'c': 'label-lightblue',
        'embedded-c': 'label-skyblue',
        'c#': 'label-yellow',
        'python': 'label-green',
        'angular2': 'label-red',
        'javascript': 'label-orange',
        'typescript': 'label-gray',
        'html': 'label-darkred',
        'arduino': 'label-darkgreen',
        'raspberry-pi': 'label-pink',
        'micro-controller': 'label-yellowgreen',
        'electron': 'label-yellow',
        'electronics': 'label-green',
        'android': 'label-orange',
        'css': 'label-wisteria',
        'jquery': 'label-midnightblue',
        'bash' : 'label-adobeorange'
    };

    constructor(private service: ProjectsService) {}

    getClass(name: string): string {
        return this.langClass[name.toLowerCase()];
    }

    getStatusClass(name: string): string {
        if (name.toLowerCase() === 'completed') {
            return 'label-primary';
        }
        return 'label-default';
    }

}
