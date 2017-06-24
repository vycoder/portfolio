import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var particlesJS: any;

if (environment.production) {
  enableProdMode();
  particlesJS('particles-js', './assets/resources/particles.json');
}

platformBrowserDynamic().bootstrapModule(AppModule);
