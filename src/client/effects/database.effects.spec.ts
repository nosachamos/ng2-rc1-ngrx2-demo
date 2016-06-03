import {ReflectiveInjector} from '@angular/core';

import {
  MOCK_EFFECTS_PROVIDERS,
  MockStateUpdates
} from '@ngrx/effects/testing';
import {DatabaseEffects} from './database.effects';
import {DatabasesListActions} from '../reducers/databases/database-list.reducer';
import {Database} from '../models/database.model';



describe('Database Effects', function() {
  let databaseEffects: DatabaseEffects;
  let updates$: MockStateUpdates;


  beforeEach(function() {
    const injector = ReflectiveInjector.resolveAndCreate([
      DatabaseEffects,
      MOCK_EFFECTS_PROVIDERS,
      // Mock out other dependencies (like Http) here
    ]);

    databaseEffects = injector.get(DatabaseEffects);
    updates$ = injector.get(MockStateUpdates);
  });



  it('should respond in a certain way', function() {
    // Add an action in the updates queue
    updates$.sendAction({ type: DatabasesListActions.REFRESH_DATABASE_LIST });

    databaseEffects.databaseList$.subscribe(function(action) {
      expect(action.type).toBe(DatabasesListActions.REFRESH_DATABASE_LIST_SUCCEEDED);
      expect(action.payload instanceof Database[]).isNot(null);
    });

  });
});
