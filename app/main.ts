import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import 'jquery';
import 'bootstrap';


platformBrowserDynamic().bootstrapModule(AppModule);