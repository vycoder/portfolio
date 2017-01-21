import { Component, trigger, transition, style, state, animate } from '@angular/core';
import { ProjectsService, ProjectLink } from './projects.service';

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
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    height: 0
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

    constructor(private projectService: ProjectsService) {
        this.projects = projectService.getProjectLinks();
    }

    toggleProjectButtons(name: string) {
        console.log(name);
        if (name !== 'hide') {
            this.projectService.setSelectedProject(name);
        }
        this.displayProjectLinks = !this.displayProjectLinks;
    }

}