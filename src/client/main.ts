import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode, provide } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { runEffects } from '@ngrx/effects';

import { AppComponent } from './components/app/app.component';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }


import * as reducers from './reducers/index';
import {DatabaseEffects} from './effects/database.effects';


bootstrap(AppComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS,
  provideStore(reducers),
  runEffects(DatabaseEffects),
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
]);
