import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Database} from '../../models/database.model';
import {DatabasesListActions} from '../../reducers/databases/database-list.reducer';
import {SelectedDatabaseActions} from '../../reducers/databases/selected-database.reducer';

@Injectable()
export class DatabasesService {
  selectedDatabase$: Observable<Database>;
  databaseList$: Observable<Database[]>;

  constructor(private store: Store<any>) {
    this.selectedDatabase$ = store.select('selectedDatabase');
    this.databaseList$ = store.select('databaseList');
  }

  public refreshDatabases() {
    this.store.dispatch({ type: DatabasesListActions.REFRESH_DATABASE_LIST });
  }

  public selectDatabase(db: Database) {
    this.store.dispatch({ type: SelectedDatabaseActions.SET_SELECTED_DATABASE, payload: db });
  }

  public clearDatabase() {
    this.store.dispatch({ type: SelectedDatabaseActions.CLEAR_SELECTED_DATABASE });
  }

}
