import { ActionReducer, Action } from '@ngrx/store';


export const error: ActionReducer<string> = (state: any = null, action: Action) => {
  if (action.type.endsWith('_FAILED')) {
    return 'An error has occurred. Please try again.';
  }

  return null;
}
