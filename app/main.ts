import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from './app.module';
import 'jquery';
import 'bootstrap';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);