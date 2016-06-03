import { ActionReducer, Action } from '@ngrx/store';
import {DatabasesListActions} from './databases/database-list.reducer';

export const loading: ActionReducer<boolean> = (state = false, action: Action) => {
  if (action.type === DatabasesListActions.REFRESH_DATABASE_LIST) {
    return true;
  }

  return false;
}
