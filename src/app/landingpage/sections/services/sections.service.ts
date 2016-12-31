import {Injectable} from '@angular/core';
import {SectionInterface} from './sectioninterface';

import {INTRODUCTION} from './contents/introduction.static.content';
import {MANIFESTO} from './contents/manifesto.static.content';
import {MADSKILLZ} from './contents/madskillz.static.content';
import {CONTACT} from './contents/contact.static.content';

@Injectable()
export class SectionsService {

    getIntroduction(): SectionInterface {
        return INTRODUCTION;
    }

    getManifesto(): SectionInterface {
        return MANIFESTO;
    }

    getMadSkillz(): SectionInterface {
        return MADSKILLZ;
    }

    getContactContent(){
        return CONTACT;
    }
}