import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {

    selected:string;

    getProjectLinks(): ProjectLink[] {
        return PROJECTLINKS;
    }

    getSelectedProject():string {
        return this.selected;
    }

    setSelectedProject(project:string){
        console.log("set to:" + project);
        this.selected = project;
    }

}

export interface ProjectLink {
    name:string;
    imgsrc: string;
    alt: string;
    description: string;
}

export const PROJECTLINKS : ProjectLink[] = [
    {
        name: "getWorkProjects",
        imgsrc: require("../../../public/images/workprojects.png"),
        alt: "Work Projects",
        description: "My current industry and freelance projects."
    },
    {
        name: "getMiscellaneousProjects",
        imgsrc: require("../../../public/images/miscprojects.png"),
        alt: "Miscellaneous Projects",
        description: "Miscellaneous works, experiments and tools."
    },
    {
        name: "getUniStuff",
        imgsrc: require("../../../public/images/uniprojects.png"),
        alt: "University Projects",
        description: "Projects that were mostly done during my undergrad."
    },
]
