import { ActionReducer, Action } from '@ngrx/store';
import {Database} from '../../models/database.model';

export module DatabasesListActions {
  export const REFRESH_DATABASE_LIST = 'REFRESH_DATABASE_LIST';
  export const REFRESH_DATABASE_LIST_SUCCEEDED = 'REFRESH_DATABASE_LIST_SUCCEEDED';
  export const REFRESH_DATABASE_LIST_FAILED = 'REFRESH_DATABASE_LIST_FAILED';
}


export const databaseList: ActionReducer<Database[]> = (state: Database[] = [], action: Action) => {
  switch (action.type) {
    case DatabasesListActions.REFRESH_DATABASE_LIST_SUCCEEDED:
      return action.payload;

    case DatabasesListActions.REFRESH_DATABASE_LIST_FAILED:
      return [];

    default:
      return state;
  }
}
