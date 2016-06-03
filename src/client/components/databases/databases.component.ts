import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import {Database} from '../../models/database.model';

import {Http, Response} from '@angular/http';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {DatabaseDetailsComponent} from './database-details.component';
import {Observable} from 'rxjs/Observable';
import {DatabasesService} from '../../services/databases/databases.service';
import {GlobalStateService} from '../../services/global-state.service';

@Component({
  selector: 'databases-list',
  templateUrl: 'components/databases/databases.component.html',
  styleUrls: ['components/databases/databases.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, DatabaseDetailsComponent]
})
export class DatabasesComponent {
  dbList$: Observable<Database[]>;
  loading$: Observable<boolean>;
  errorMessage$: Observable<string>;

  displayed: boolean = true;

  constructor(private globalStateService: GlobalStateService, private databasesService: DatabasesService) {
    this.dbList$ = databasesService.databaseList$;
    this.loading$ = globalStateService.loading$;
    this.errorMessage$ = globalStateService.errorMessage$;

    this.refresh();
  }

  toggleDisplayed() {
    this.displayed = !this.displayed;
  }

  refresh() {
    this.databasesService.refreshDatabases();
  }

  selectDatabase(db: Database) {
    console.log(JSON.stringify(db, null, 2));
    this.databasesService.selectDatabase(db);
    return false;
  }

}
