import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {NameListService} from "../../services/name-list/name-list.service";
import {AppHeaderComponent} from "./app-header.component";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";

import {DatabasesComponent} from '../databases/databases.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {DatabasesService} from '../../services/databases/databases.service';
import {GlobalStateService} from '../../services/global-state.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, DatabasesService, GlobalStateService],
  templateUrl: 'components/app/app.component.html',
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/about',
    component: AboutComponent
  },
  {
    path: '/databases-list',
    component: DatabasesComponent
  }
])
export class AppComponent {}
