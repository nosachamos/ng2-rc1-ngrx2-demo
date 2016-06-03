import { ActionReducer, Action } from '@ngrx/store';
import {Database} from '../../models/database.model.ts';

export module SelectedDatabaseActions {
  export const SET_SELECTED_DATABASE = 'SET_SELECTED_DATABASE';
  export const CLEAR_SELECTED_DATABASE = 'CLEAR_SELECTED_DATABASE';
}


export const selectedDatabase: ActionReducer<Database> = (state: Database = null, action: Action) => {
  switch (action.type) {
    case SelectedDatabaseActions.SET_SELECTED_DATABASE:
      return action.payload;

    case SelectedDatabaseActions.CLEAR_SELECTED_DATABASE:
      return null;

    default:
      return state;
  }
}
