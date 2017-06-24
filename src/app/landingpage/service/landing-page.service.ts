import {Injectable} from '@angular/core';

import {LandingPageSection} from './landing-page-section';
import {TITLE_SECTION} from './contents/static-sections';
import {SECTIONS} from './contents/section-page';

@Injectable()
export class LandingPageService {

    getTitleSection(): LandingPageSection {
        return TITLE_SECTION;
    }

    getSections(): LandingPageSection[] {
        return SECTIONS;
    }
}
