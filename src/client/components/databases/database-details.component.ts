import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import {Database} from '../../models/database.model';

import {BytesPipe} from '../../pipes/bytes.pipe';
import {GlobalStateService} from '../../services/global-state.service';
import {DatabasesService} from '../../services/databases/databases.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'database-details',
  pipes: [BytesPipe],
  templateUrl: 'components/databases/database-details.component.html',
  directives: [FORM_DIRECTIVES]
})
export class DatabaseDetailsComponent {
  database$: Observable<Database>;
  loading$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private globalStateService: GlobalStateService, private databasesService: DatabasesService) {
    this.database$ = databasesService.selectedDatabase$;
    this.errorMessage$ = globalStateService.errorMessage$;
    this.loading$ = globalStateService.loading$;
  }

  clearDatabase() {
    this.databasesService.clearDatabase();
  }

}
