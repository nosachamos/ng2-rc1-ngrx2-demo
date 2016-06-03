import {Effect, StateUpdates} from '@ngrx/effects';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DatabasesListActions} from '../reducers/databases/database-list.reducer';


@Injectable()
export class DatabaseEffects {

  constructor(private http: Http, private updates$: StateUpdates<any>) { }

  @Effect() databaseList$ = this.updates$
    .whenAction(DatabasesListActions.REFRESH_DATABASE_LIST)
    .map(update => JSON.stringify(update.action.payload))
    .mergeMap(body =>
      this.http.get('http://www.internalassemble.com/api/databases')
        .map(res => ({
          type: DatabasesListActions.REFRESH_DATABASE_LIST_SUCCEEDED,
          payload: res.json()
        }))
        .catch(() => Observable.of({
          type: DatabasesListActions.REFRESH_DATABASE_LIST_FAILED,
          payload: 'Failed to load databases from server'
        }))
    );

}
