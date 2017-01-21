import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css'],
    providers: [ProjectsService]
})
export class ProjectListComponent implements OnInit {

    selectedCategory: string;

    constructor(private service: ProjectsService){
        this.selectedCategory = service.getSelectedProject();
    }

    ngOnInit():void {
        //TODO: look up the service listening again, or check chronocross
        this.selectedCategory = this.service.getSelectedProject();
        console.log("get:" + this.selectedCategory);
    }

}