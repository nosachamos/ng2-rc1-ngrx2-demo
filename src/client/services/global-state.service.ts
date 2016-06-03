import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalStateService {
  loading$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<any>) {
    this.loading$ = store.select('loading');
    this.errorMessage$ = store.select('error');
  }

}
