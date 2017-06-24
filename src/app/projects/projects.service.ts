import {Injectable} from '@angular/core';
import {ProjectItem} from './projectlist/project-item';
import {WORKPROJECTS} from './projectlist/workprojects-items';
import {MISCPROJECTS} from './projectlist/miscprojects-items';
import {UNIPROJECTS} from './projectlist/uniprojects-items';

export interface ProjectLink {
    name: string;
    imgsrc: string;
    alt: string;
    description: string;
    projects: ProjectItem[];
}

export const PROJECTLINKS: ProjectLink[] = [
    {
        name: 'getWorkProjects',
        imgsrc: 'assets/images/workprojects.png',
        alt: 'Work Projects',
        description: 'My current industry and freelance projects.',
        projects: WORKPROJECTS
    },
    {
        name: 'getMiscellaneousProjects',
        imgsrc: 'assets/images/miscprojects.png',
        alt: 'Miscellaneous Projects',
        description: 'Miscellaneous works, experiments and tools.',
        projects: MISCPROJECTS
    },
    {
        name: 'getUniStuff',
        imgsrc: 'assets/images/uniprojects.png',
        alt: 'University Projects',
        description: 'Projects that were mostly done during my undergrad.',
        projects: UNIPROJECTS
    },
];

@Injectable()
export class ProjectsService {

    getProjectLinks(): ProjectLink[] {
        return PROJECTLINKS;
    }

    getProjectItems(projectName: string): ProjectItem[] {
        return this.getProjectLinks().find(item => {
            return item.name === projectName;
        }).projects;
    }
}
