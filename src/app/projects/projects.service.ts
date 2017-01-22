import {Injectable} from '@angular/core';
import {ProjectItem} from './projectlist/project-item';
import {WORKPROJECTS} from './projectlist/workprojects-items';
import {MISCPROJECTS} from './projectlist/miscprojects-items';

@Injectable()
export class ProjectsService {

    getProjectLinks(): ProjectLink[] {
        return PROJECTLINKS;
    }

    getProjectItems(projectName:string): ProjectItem[] {
        return this.getProjectLinks().find(item => {
            return item.name === projectName;
        }).projects;
    }
}

export interface ProjectLink {
    name:string;
    imgsrc: string;
    alt: string;
    description: string;
    projects: ProjectItem[];
}

export const PROJECTLINKS : ProjectLink[] = [
    {
        name: "getWorkProjects",
        imgsrc: require("../../../public/images/workprojects.png"),
        alt: "Work Projects",
        description: "My current industry and freelance projects.",
        projects: WORKPROJECTS
    },
    {
        name: "getMiscellaneousProjects",
        imgsrc: require("../../../public/images/miscprojects.png"),
        alt: "Miscellaneous Projects",
        description: "Miscellaneous works, experiments and tools.",
        projects: MISCPROJECTS
    },
    {
        name: "getUniStuff",
        imgsrc: require("../../../public/images/uniprojects.png"),
        alt: "University Projects",
        description: "Projects that were mostly done during my undergrad.",
        projects: []
    },
]
