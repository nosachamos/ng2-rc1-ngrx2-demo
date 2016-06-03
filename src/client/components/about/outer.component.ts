import { Component } from '@angular/core';
import {InnerComponent} from './inner.component';

@Component({
  selector: 'outer-cmp',
  template: `<h1>{{value}}</h1>
            <inner-cmp (counted)="handleCount($event)" value="100"></inner-cmp>`,
  directives: [InnerComponent]
})
export class OuterComponent {
  value: number;

  handleCount(count: number) {
    this.value = count;
  }
}
