import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {DatabasesService} from '../../services/databases/databases.service';
import {GlobalStateService} from '../../services/global-state.service';
import {Observable} from 'rxjs/Observable';
import {Database} from '../../models/database.model';

@Component({
  selector: 'app-header',
  templateUrl: 'components/app/app-header.component.html',
  styleUrls: ['components/app/app-header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppHeaderComponent {
  database$: Observable<Database>;

  constructor(private databasesService: DatabasesService) {
    this.database$ = databasesService.selectedDatabase$;
  }

}
