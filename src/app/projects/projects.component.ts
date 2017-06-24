import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectsService, ProjectLink } from './projects.service';
import { ProjectItem } from './projectlist/project-item';

@Component({
    selector: 'projects',
    animations: [
        trigger('mainProjectsAnimation', [
            state('in', style({ opacity: 1, height: '*' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    height: 0
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10ms ease-out', style({
                    opacity: 0,
                    height: 0
                }))
            ])
        ]),
        trigger('returnButton', [
            state('in', style({ bottom: '22%', left: '-0.5%' })),
            transition('void => *', [
                style({
                    bottom: 0,
                    left: '-0.5%'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10ms ease-out', style({
                    bottom: 0,
                    left: '-0.5%'
                }))
            ])
        ])
    ],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    providers: [ProjectsService]
})

export class ProjectsComponent {
    show: boolean = true;
    projects: ProjectLink[];
    displayProjectLinks: boolean = true;
    selectedProject: string;
    projectItems: ProjectItem[];

    constructor(private projectService: ProjectsService) {
        this.projects = projectService.getProjectLinks();
    }

    toggleProjectButtons(name: string) {
        if (name !== 'hide') {
            this.selectedProject = name;
            this.projectItems = this.projectService.getProjectItems(name);
        }
        this.displayProjectLinks = !this.displayProjectLinks;
    }

}
