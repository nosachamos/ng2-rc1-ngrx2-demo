import {DatabasesListActions} from '../../reducers/databases/database-list.reducer';
import {SelectedDatabaseActions} from '../../reducers/databases/selected-database.reducer';
import {Database} from '../../models/database.model';
import {DatabasesService} from './databases.service';
import {Store, Dispatcher} from '@ngrx/store';

import {
  async,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';


export function main() {
  describe('Database list reducer', () => {
    let databasesService: DatabasesService;
    let dispatcher: Dispatcher;

    // Support for testing component that uses Router
    beforeEachProviders(() => [Store, Dispatcher]);

    beforeEach(() => {
      async(inject([Store, Dispatcher], (store: Store<any>, dispatcher: Dispatcher) => {
        this.dispatcher = dispatcher;
        databasesService = new DatabasesService(store);
      });
    });


    
    it('Clear databases should dispatch the right action', () => {
      this.dispatcher.take(1).subscribe(action => {
        expect(action.type).toBe(SelectedDatabaseActions.CLEAR_SELECTED_DATABASE);
      });

      databasesService.clearDatabase();
    });
    


    it('Clear databases should dispatch the right action', () => {
      let db: Database = {
        "id": 97,
        "name": "asm_ci_1",
        "size": 916352,
        "created": new Date(),
        "owner": "",
        "set_Owner_Url": "http://www.internalassemble.com/api/databases/97/owner"
      }

      this.dispatcher.take(1).subscribe(action => {
        expect(action.type).toBe(SelectedDatabaseActions.SET_SELECTED_DATABASE);
        expect(action.payload).toBe(db);
      });

      databasesService.selectDatabase(db);
    });
    


  });



}
